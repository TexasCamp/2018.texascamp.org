<?php

namespace Drupal\txc_graphql\Plugin\GraphQL\InputTypes;

use Drupal\graphql\Plugin\GraphQL\InputTypes\InputTypePluginBase;

/**
 * Creates input types for entity mutations.
 *
 * @GraphQLInputType(
 *   id = "update_session_input",
 *   name = "UpdateSessionInput",
 *   description = "Input type for updating Sessions",
 *   fields = {
 *     "title" = "String",
 *     "track_id" = "Int",
 *     "skill_level_id" = "Int",
 *     "speakers" = {
 *       "type" = "SessionSpeakerInput",
 *       "multi" = true,
 *     },
 *     "description" = "String",
 *     "contact_info" = "SessionContactInput",
 *   }
 * )
 */
class UpdateSessionInput extends InputTypePluginBase {

}
