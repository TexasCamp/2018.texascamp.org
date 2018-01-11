<?php

namespace Drupal\txc_graphql\Plugin\GraphQL\InputTypes;

use Drupal\graphql\Plugin\GraphQL\InputTypes\InputTypePluginBase;

/**
 * Creates input types for entity mutations.
 *
 * @GraphQLInputType(
 *   id = "session_contact_input",
 *   name = "SessionContactInput",
 *   description = "Input type for Session contact info",
 *   fields = {
 *     "name" = "String",
 *     "email" = "String",
 *     "company" = {
 *       "type" = "String",
 *       "nullable" = true,
 *     }
 *   }
 * )
 */
class SessionContactInput extends InputTypePluginBase {

}
