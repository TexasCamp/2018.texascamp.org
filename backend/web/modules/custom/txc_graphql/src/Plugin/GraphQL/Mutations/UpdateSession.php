<?php

namespace Drupal\txc_graphql\Plugin\GraphQL\Mutations;

use Youshido\GraphQL\Execution\ResolveInfo;
use Drupal\paragraphs\Entity\Paragraph;
use Drupal\graphql\GraphQL\Type\InputObjectType;
use Drupal\graphql_core\GraphQL\EntityCrudOutputWrapper;
use Drupal\graphql_core\Plugin\GraphQL\Mutations\Entity\UpdateEntityBase;

/**
 * Update an Session node.
 *
 * @GraphQLMutation(
 *   id = "update_session",
 *   name = "UpdateSession",
 *   description = "Update a Session node",
 *   type = "EntityCrudOutput",
 *   nullable = false,
 *   entity_type = "node",
 *   entity_bundle = "session",
 *   arguments = {
 *     "id" = "Int",
 *     "edit_token" = "String",
 *     "input" = "UpdateSessionInput"
 *   }
 * )
 */
class UpdateSession extends UpdateEntityBase {

  /**
   * {@inheritdoc}
   */
  public function resolve($value, array $args, ResolveInfo $info) {
    $entityTypeId = $this->pluginDefinition['entity_type'];
    $bundleName = $this->pluginDefinition['entity_bundle'];
    $storage = $this->entityTypeManager->getStorage($entityTypeId);

    /** @var \Drupal\Core\Entity\ContentEntityInterface $entity */
    if (!$entity = $storage->load($args['id'])) {
      return new EntityCrudOutputWrapper(NULL, NULL, [
        $this->t('The requested @bundle could not be loaded.', ['@bundle' => $bundleName]),
      ]);
    }

    if (!$entity->bundle() === $bundleName) {
      return new EntityCrudOutputWrapper(NULL, NULL, [
        $this->t('The requested entity is not of the expected type @bundle.', ['@bundle' => $bundleName]),
      ]);
    }

    // Override the access checks for updating sessions 😮
    if ($entity->get('field_session_edit_token')->isEmpty()) {
      return new EntityCrudOutputWrapper(NULL, NULL, [
        $this->t('You do not have the necessary permissions to update this @bundle.', ['@bundle' => $bundleName]),
      ]);
    }

    if (!hash_equals($args['edit_token'], $entity->field_session_edit_token->value)) {
      return new EntityCrudOutputWrapper(NULL, NULL, [
        $this->t('You do not have the necessary permissions to update this @bundle.', ['@bundle' => $bundleName]),
      ]);
    }

    // The raw input needs to be converted to use the proper field and property
    // keys because we usually convert them to camel case when adding them to
    // the schema.
    $inputArgs = $args['input'];
    /** @var \Youshido\GraphQL\Type\Object\AbstractObjectType $type */
    $type = $info->getField()->getArgument('input')->getType();
    /** @var \Drupal\graphql\GraphQL\Type\InputObjectType $inputType */
    $inputType = $type->getNamedType();
    $input = $this->extractEntityInput($inputArgs, $inputType, $info);

    try {
      foreach ($input as $key => $value) {
        $entity->get($key)->setValue($value);
      }
    }
    catch (\InvalidArgumentException $exception) {
      return new EntityCrudOutputWrapper(NULL, NULL, [
        $this->t('The entity update failed with exception: @exception.', ['@exception' => $exception->getMessage()]),
      ]);
    }

    if (($violations = $entity->validate()) && $violations->count()) {
      return new EntityCrudOutputWrapper(NULL, $violations);
    }

    if (($status = $entity->save()) && $status === SAVED_UPDATED) {
      return new EntityCrudOutputWrapper($entity);
    }

    return NULL;
  }

  /**
   * Convert GraphQL schema to Session node fields.
   *
   * @param array $inputArgs
   *   The entity values provided through the resolver args.
   * @param \Drupal\graphql\GraphQL\Type\InputObjectType $inputType
   *   The input type.
   * @param \Youshido\GraphQL\Execution\ResolveInfo $info
   *   The resolve info object.
   *
   * @return array
   *   The extracted entity values with their proper, internal field names.
   */
  protected function extractEntityInput(array $inputArgs, InputObjectType $inputType, ResolveInfo $info) {

    $speakers = array_map(function($speaker) {
      $paragraph = Paragraph::create([
        'type' => 'presenter',
        'field_session_presenter' => [
          'value' => $speaker['name'],
        ],
        'field_session_bio' => [
          'value' => $speaker["bio"],
          'format' => 'basic_html',
        ]
      ]);

      $paragraph->save();

      return [
        'target_id' => $paragraph->id(),
        'target_revision_id' => $paragraph->getRevisionId(),
      ];

    }, $inputArgs['speakers']);

    $input = [
      'title' => $inputArgs['title'],
      'body' => $inputArgs['description'],
      'field_session_skill_level' => $inputArgs['skill_level_id'],
      'field_session_presenters' => $speakers,
      'field_session_track' => $inputArgs['track_id'],
      'field_session_contact_email' => $inputArgs['contact_info']['email'],
      'field_session_contact_name' => $inputArgs['contact_info']['name'],
    ];

    if (isset($inputArgs['contact_info']['company'])) {
      $input['field_session_contact_company'] = $inputArgs['contact_info']['company'];
    }

    return $input;
  }

}
