// @flow
import React from 'react';

/**
 * Renders raw html wrapped in a span tag, with an entity like &amp; parsed as &.
 * @param {string} rawHTML
 * @returns {React.Element<any>}
 */
export const cleanHtml = (rawHTML: string): React.Element<any> =>
  React.createElement('span', { dangerouslySetInnerHTML: { __html: rawHTML } });

/**
 * Searches an array for a text term.
 * @param {Any} term - needle
 * @param {Array} arr - haystack
 * @returns {boolean[]}
 *  returns an array of booleans, with the same number of elements as the
 *  search array. Each element corresponds to a match (or lack thereof)
 *  inside the array. e.g [false, true, false] would mean that was one match
 *  in the search array: on index 1.
 */
export const searchArr = (term: string, arr: Array<any>): Array<boolean> => {
  // term should modify the regex.
  // gotcha: need to (double) escape the backslash since it's in a string.
  const re = new RegExp(`\\b${term}`, 'i');
  const indexMatches = arr.map(el => {
    const str = typeof el === 'object' ? JSON.stringify(el) : el.toString();
    if (str.match(re)) return true;
    return false;
  });
  return indexMatches;
};

// e.g "Hello World: How are you" -> 'hello-world-how-are-you'
export const titleToLink = titleStr =>
  titleStr
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, '')
    .split(' ')
    .slice(0, 10) // 10 words max.
    .join('-');
