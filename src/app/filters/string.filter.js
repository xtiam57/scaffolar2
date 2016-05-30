/**
 * Underscore.string
 *
 * Proxy filter for calling Underscore.string functions.
 * http://epeli.github.io/underscore.string/#home
 *
 * Examples:
 *
 *     {{ name | s:'swapCase' }}
 *     {{ separator | s:'join':['foo', 'bar'] }}
 *
 * @param {String} s String to filter
 * @param {String} fn Underscore.string function to call
 * @param {[params]} params Extra parameters to pass to Underscore.string
 * @return {String} Filtered string
 */
angular.module('app')
  .filter('str', () => {
    return (str, fn, params) => {
      str = str || '';
      params = params || [];
      params.unshift(str);
      return fn ? s[fn].apply(this, params) : str;
    };
  })

  // _.available("foo Bar")
  // => "foo Bar"
  // _.available("")
  // => "N/A"
  .filter('available', () => {
    return (input, attr) => {
      attr = attr || attr === '' ? attr : 'N/A';
      if (_.isString(input)) {
        input = input.trim();
      }
      return (_.isNull(input) || s.isBlank(input) || _.isUndefined(input)) ? attr : input;
    };
  })

  // removeSpaces('Hello world')
  // => "Helloworld"
  .filter('removeSpaces', () => {
    return (str) => {
      return _(str).isString() ? str.replace(/ /g, '') : str;
    };
  })

  // _.conditional(true)
  // => "Yes"
  // _.conditional(1)
  // => "Yes"
  // _.conditional(null)
  // => "No"
  // _.conditional(false, "Aja", "Nei")
  // => "Nei"
  .filter('conditional', () => {
    return (input, positive, negative) => {
      let t = positive || 'Yes',
          f = negative || 'No';

      return input ? t : f;
    };
  });
