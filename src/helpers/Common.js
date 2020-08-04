/**
 * Validate
 * @param v
 * @returns {boolean}
 */
export function isEmpty (v) {
    if (window._.isArray(v) || window._.isObject(v)) {
      return window._.isEmpty(v);
    } else {
      return (
        window._.isNil(v)
        || window._.trim(v) === ''
        || v === 0
      );
    }
  }