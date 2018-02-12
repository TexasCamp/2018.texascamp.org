<?php

namespace Drupal\txc_graphql\Plugin\GraphQL\Mutations;

use Youshido\GraphQL\Execution\ResolveInfo;
use Drupal\Component\Utility\Crypt;
use Drupal\paragraphs\Entity\Paragraph;
use Drupal\graphql\GraphQL\Type\InputObjectType;
use Drupal\graphql_core\Plugin\GraphQL\Mutations\Entity\CreateEntityBase;

/**
 * Create an Session node.
 *
 * @GraphQLMutation(
 *   id = "create_session",
 *   name = "CreateSession",
 *   description = "Create a Session node",
 *   type = "EntityCrudOutput",
 *   nullable = false,
 *   entity_type = "node",
 *   entity_bundle = "session",
 *   arguments = {
 *     "input" = "CreateSessionInput"
 *   }
 * )
 */
class CreateSession extends CreateEntityBase {

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

    return [
      'title' => $inputArgs['title'],
      'body' => $inputArgs['description'],
      'field_session_skill_level' => $inputArgs['skill_level_id'],
      'field_session_presenters' => $speakers,
      'field_session_track' => $inputArgs['track_id'],
      'field_session_contact_email' => $inputArgs['contact_info']['email'],
      'field_session_contact_name' => $inputArgs['contact_info']['name'],
      'field_session_contact_company' => $inputArgs['contact_info']['company'],
      'field_session_edit_token' => Crypt::randomBytesBase64(16),
    ];
  }

}
