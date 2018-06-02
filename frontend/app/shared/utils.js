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
 * @param {Array} arr - haystack
 * @param {Any} term - needle
 * @returns {Array}
 *  returns an array of booleans, with the same number of elements as the
 *  search array. Each element corresponds to a match (or lack thereof)
 *  inside the array. e.g [false, true, false] would mean that was one match
 *  in the search array: on index 1.
 */
export const searchArr = (arr: any[], term: string): Object[] => {
  if (!term) {
    return arr;
  }
  // term should modify the regex.
  // gotcha: need to (double) escape the backslash since it's in a string.
  const re = new RegExp(`\\b${term}`, 'i');
  const matches = arr.filter(el => {
    const str = typeof el === 'object' ? JSON.stringify(el) : el.toString();
    return re.test(str);
  });
  return matches;
};

// e.g "Hello World: How are you" -> 'hello-world-how-are-you'
export const titleToLink = (titleStr: string): string =>
  titleStr.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(' ').join('-');

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
    [key: string]: any[],
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

// Format date/time
export const formatTime = (date, utcOffset = -5) =>
  date.utcOffset(utcOffset).format('h:mm');
export const formatDate = (date, utcOffset = -5) =>
  date.utcOffset(utcOffset).format('MMMM D, YYYY');
export const formatSessionDate = (date, utcOffset = -5) =>
  date.utcOffset(utcOffset).format('dddd M/D/YYYY');
