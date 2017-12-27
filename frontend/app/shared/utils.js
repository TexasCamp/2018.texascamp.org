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
 * Searches an array for a text term
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
  const boolMatches = arr.map(el => {
    const str = typeof el === 'object' ? JSON.stringify(el) : el.toString();
    return re.test(str);
  });
  return boolMatches;
};

// e.g "Hello World: How are you" -> 'hello-world-how-are-you'
export const titleToLink = (titleStr: string): string =>
  titleStr.toLowerCase().replace(/[^a-zA-Z ]/g, '').split(' ').join('-');

/**
 * Use multiple filters on an array of object
 * @param {Object[]} arr - the array to filter
 *  example:
 * [
 *   {fruit: 'apple', count: 1, id: 123},
 *   {fruit: 'pear', count: 4, id: 234},
 *   {fruit: 'orange', count: 4, id: 456}
 * ]
 * @param {Object.<Array>} filters - an object with the filter criteria as the property names
 *  example:
 * {
 *   fruit: ['apple', 'orange'],
 *   count: [4]
 * }
 * @returns {Object[]} object array - filtered array of object
 */
export const multiFilter = (
  arr: Object[],
  filters: {
    [key: string]: Array<any>,
  },
): Object[] => {
  const filterKeys = Object.keys(filters);
  return arr.filter(eachObj => {
    return filterKeys.every(eachKey => {
      if (!filters[eachKey].length) {
        return true; // passing an empty filter means that filter is ignored.
      }
      return filters[eachKey].includes(eachObj[eachKey]);
    });
  });
};
