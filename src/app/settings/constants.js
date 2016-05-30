angular.module('app')
  /**
   * @ngdoc property
   * @name app.property:APP_INFO
   * @returns {object} An object with the following fields:
   * - version of release
   * - date of release
   */
  .constant('APP_INFO', {
    name: 'Scaffolar',
    version: 'v0.0.1',
    day: 1,
    month: 1,
    year: 2016,
    // NOTE: do not touch this
    get date() {
      return new Date(this.year, this.month - 1, this.day);
    },
  })
  /**
  * @ngdoc property
  * @name app.property:API
  * @returns {object} An object with the following fields:
  * - API version
  * - Port number
  * - Protocol used (HTTP or HTTPS)
  * - Host name or IP address
  * - Prefixes
  * - URL form by the previous fields
  *
  * @description
  * Information about the API.
  *
  * **Note:** -
  */
 .constant('API', {
    /**
     * The environment to be used. Options: testing|distribution
     * @type {String}
     */
    _environment: 'testing',

    /**
     * Testing and distribution configuration
     * NOTE: DO NOT TOUCH THIS IN RUNNING TIME
     * @type {Object}
     */
    testing: {
      version  : '',
      port     : '',
      protocol : 'http',
      host     : 'localhost',
      prefix   : '',
    },

    /**
     * Returns the URL given an environment
     * @return {String}
     */
    get url() {
      let api = this[this.environment] ? this[this.environment] : this.testing;

      return api.protocol + '://' +
             api.host +
             (api.port ? ':' + api.port : '') + '/' +
             api.prefix + (api.prefix ? '/': '') +
             api.version + (api.version ? '/': '');
    }
 });
