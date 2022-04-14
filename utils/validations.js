/**
 * Validates input
 * @param {String} input 
 */
export function validateSlug(input) {
  if (/^[a-z]{1,20}$/.test(input)) {
    return input;
  } else {
    return null;
  }
}
