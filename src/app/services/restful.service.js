(() => {

class RESTful {
  constructor(API, $http, $q) {
    this._url = API.url;
    this.$http = $http;
    this.$q = $q;
  }

  // Getters and Setters
  set url(url) { this._url = url; }
  get url() { return this._url; }

  /**
   * Create a valid url using the API constant
   * @param  {String} endpoint
   * @param  {Object} queryStrings
   * @return {String}
   */
  _createUrl(endpoint, queryStrings) {
    // Has query strings?
    if (queryStrings && !_.isEmpty(queryStrings)) {
      endpoint += endpoint.indexOf('?') === -1 ? '?' : '&';
      endpoint += jQuery.param(queryStrings);
    }
    return this._url + endpoint;
  }

  /**
   * GET
   * @param  {String} url The endpoint
   * @param  {Object} queryStrings     Query strings
   * @return {Promise}
   */
  get(endpoint, queryStrings) {
    let deferred = this.$q.defer();

    if (!_.isString(endpoint)) {
      deferred.reject('"endpoint" isn\'t a string.');
    }

    this.$http.get(this._createUrl(endpoint, queryStrings))
      .success((response, status, headers, config) => {
        deferred.resolve(response, status, headers, config);
      })
      .error((response, status, headers, config) => {
        deferred.reject(response, status, headers, config);
      });

    return deferred.promise;
  }

  /**
   * POST
   * @param  {String} url The endpoint
   * @param  {Object} payload
   * @param  {Object} queryStrings     Query strings
   * @return {Promise}
   */
  post(endpoint, payload, queryStrings) {
    let deferred = this.$q.defer();

    if (!_.isString(endpoint)) {
      deferred.reject('"endpoint" isn\'t a string.');
    }

    if (!payload || !_.isObject(payload)) {
      payload = {};
    }

    this.$http.post(this._createUrl(endpoint, queryStrings), payload)
      .success((response, status, headers, config) => {
        deferred.resolve(response, status, headers, config);
      })
      .error((response, status, headers, config) => {
        deferred.reject(response, status, headers, config);
      });

    return deferred.promise;
  }

  /**
   * PUT
   * @param  {String} url The endpoint
   * @param  {Object} payload
   * @param  {Object} queryStrings     Query strings
   * @return {Promise}
   */
  put(endpoint, payload, queryStrings) {
    let deferred = this.$q.defer();

    if (!_.isString(endpoint)) {
      deferred.reject('"endpoint" isn\'t a string.');
    }

    if (!payload || !_.isObject(payload)) {
      payload = {};
    }

    this.$http.put(this._createUrl(endpoint, queryStrings), payload)
      .success((response, status, headers, config) => {
        deferred.resolve(response, status, headers, config);
      })
      .error((response, status, headers, config) => {
        deferred.reject(response, status, headers, config);
      });

    return deferred.promise;
  }

  /**
   * DELETE
   * @param  {String} url The endpoint
   * @param  {Object} queryStrings     Query strings
   * @return {Promise}
   */
  delete(endpoint, queryStrings) {
    let deferred = this.$q.defer();

    if (!_.isString(endpoint)) {
      deferred.reject('"endpoint" isn\'t a string.');
    }

    this.$http.delete(this._createUrl(endpoint, queryStrings))
      .success((response, status, headers, config) => {
        deferred.resolve(response, status, headers, config);
      })
      .error((response, status, headers, config) => {
        deferred.reject(response, status, headers, config);
      });

    return deferred.promise;
  }
};

angular.module('app')
  .service('RESTful', RESTful);

})();
