// @flow
import React from 'react';

/**
 * Renders raw html wrapped in a span tag, with an entity like &amp; parsed as &.
 * @param {string} rawHTML
 * @returns {React.Element<any>}
 */
export const cleanHtml = (rawHTML: string): React.Element<any> =>
  React.createElement('span', { dangerouslySetInnerHTML: { __html: rawHTML } });

export const searchArr = (
  term: string,
  arr: Array<any>,
): Array<number | boolean> => {
  // term should modify the regex.
  // gotcha: need to (double) escape the backslash since it's in a string.
  const re = new RegExp(`\\b${term}`, 'i');
  const indexMatches = arr.map((el, index) => {
    const str = typeof el === 'object' ? JSON.stringify(el) : el.toString();
    if (str.match(re)) return index;
    return false;
  });
  return indexMatches;
};
