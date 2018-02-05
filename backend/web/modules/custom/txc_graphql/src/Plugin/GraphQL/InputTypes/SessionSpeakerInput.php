<?php

namespace Drupal\txc_graphql\Plugin\GraphQL\InputTypes;

use Drupal\graphql\Plugin\GraphQL\InputTypes\InputTypePluginBase;

/**
 * Creates input types for entity mutations.
 *
 * @GraphQLInputType(
 *   id = "session_speaker_input",
 *   name = "SessionSpeakerInput",
 *   description = "Input type for Session speaker info",
 *   fields = {
 *     "name" = "String",
 *     "bio" = {
 *       "type" = "String",
 *       "nullable" = true,
 *     }
 *   }
 * )
 */
class SessionSpeakerInput extends InputTypePluginBase {

}
