<?php

namespace Drupal\txc_graphql\Plugin\GraphQL\InputTypes;

use Drupal\graphql\Plugin\GraphQL\InputTypes\InputTypePluginBase;

/**
 * Creates input types for entity mutations.
 *
 * @GraphQLInputType(
 *   id = "create_session_input",
 *   name = "CreateSessionInput",
 *   description = "Input type for creating Sessions",
 *   fields = {
 *     "title" = "String",
 *     "track_id" = "Int",
 *     "skill_level_id" = "Int",
 *     "speakers" = {
 *       "type" = "SessionSpeakerInput",
 *       "multi" = true,
 *     },
 *     "description" = "String",
 *     "speakers_bio" = "String",
 *     "contact_info" = "SessionContactInput",
 *   }
 * )
 */
class CreateSessionInput extends InputTypePluginBase {

}
