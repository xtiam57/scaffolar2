;(() => {

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
   * Create a response
   * @param  {Object}  response
   * @param  {Boolean} isHttpResponse
   * @return {Object}
   */
  _createResponse(response, isHttpResponse) {
    return isHttpResponse ? response : response.data;
  }

  /**
   * Create a valid url using the API constant
   * @param  {String} endpoint
   * @param  {Object} queryStrings
   * @return {String}
   */
  _createUrl(endpoint, queryStrings) {
    // Has query strings?
    if (!_.isEmpty(queryStrings) && _.isObject(queryStrings)) {
      endpoint += endpoint.indexOf('?') === -1 ? '?' : '&';
      endpoint += jQuery.param(queryStrings);
    }
    return this._url + endpoint;
  }

  /**
   * GET
   * @param  {String} url The endpoint
   * @param  {Object} queryStrings     Query strings
   * @param  {Object} config
   * @param  {Bool} isHttpResponse     direct http response ({ data, status, headers, config, statusText })
   * @return {Promise}
   */
  get(endpoint, queryStrings, config, isHttpResponse) {
    let deferred = this.$q.defer();

    if (!_.isString(endpoint)) {
      deferred.reject('"endpoint" isn\'t a string.');
    }

    this.$http.get(this._createUrl(endpoint, queryStrings), config)
      .then((response) => {
        deferred.resolve(this._createResponse(response, isHttpResponse));
      }, (response) => {
        deferred.reject(this._createResponse(response, isHttpResponse));
      });

    return deferred.promise;
  }

  /**
   * POST
   * @param  {String} url The endpoint
   * @param  {Object} payload
   * @param  {Object} queryStrings     Query strings
   * @param  {Object} config
   * @param  {Bool} isHttpResponse     direct http response ({ data, status, headers, config, statusText })
   * @return {Promise}
   */
  post(endpoint, payload, queryStrings, config, isHttpResponse) {
    let deferred = this.$q.defer();

    if (!_.isString(endpoint)) {
      deferred.reject('"endpoint" isn\'t a string.');
    }

    if (!payload || !_.isObject(payload)) {
      payload = {};
    }

    this.$http.post(this._createUrl(endpoint, queryStrings), payload, config)
      .then((response) => {
        deferred.resolve(this._createResponse(response, isHttpResponse));
      }, (response) => {
        deferred.reject(this._createResponse(response, isHttpResponse));
      });

    return deferred.promise;
  }

  /**
   * PUT
   * @param  {String} url The endpoint
   * @param  {Object} payload
   * @param  {Object} queryStrings     Query strings
   * @param  {Object} config
   * @param  {Bool} isHttpResponse     direct http response ({ data, status, headers, config, statusText })
   * @return {Promise}
   */
  put(endpoint, payload, queryStrings, config, isHttpResponse) {
    let deferred = this.$q.defer();

    if (!_.isString(endpoint)) {
      deferred.reject('"endpoint" isn\'t a string.');
    }

    if (!payload || !_.isObject(payload)) {
      payload = {};
    }

    this.$http.put(this._createUrl(endpoint, queryStrings), payload, config)
      .then((response) => {
        deferred.resolve(this._createResponse(response, isHttpResponse));
      }, (response) => {
        deferred.reject(this._createResponse(response, isHttpResponse));
      });

    return deferred.promise;
  }

  /**
   * DELETE
   * @param  {String} url The endpoint
   * @param  {Object} queryStrings     Query strings
   * @param  {Object} config
   * @param  {Bool} isHttpResponse     direct http response ({ data, status, headers, config, statusText })
   * @return {Promise}
   */
  delete(endpoint, queryStrings, config, isHttpResponse) {
    let deferred = this.$q.defer();

    if (!_.isString(endpoint)) {
      deferred.reject('"endpoint" isn\'t a string.');
    }

    this.$http.delete(this._createUrl(endpoint, queryStrings), config)
      .then((response) => {
        deferred.resolve(this._createResponse(response, isHttpResponse));
      }, (response) => {
        deferred.reject(this._createResponse(response, isHttpResponse));
      });

    return deferred.promise;
  }
};

angular.module('app')
  .service('RESTful', RESTful);

})();
