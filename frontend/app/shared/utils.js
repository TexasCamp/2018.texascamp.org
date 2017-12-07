// @flow
import React from 'react';

/**
 * Renders raw html wrapped in a span tag, with an entity like &amp; parsed as &.
 * @param {string} rawHTML
 * @returns {React.Element<any>}
 */
export const cleanHtml = (rawHTML: string): React.Element<any> =>
  React.createElement('span', { dangerouslySetInnerHTML: { __html: rawHTML } });
