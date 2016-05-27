(() => {

class RESTful {
  constructor(API, $http, $q) {
    this._url = API.url;
    this._$http = $http;
    this._$q = $q;
  }

  // Getters and Setters
  set url(url) { this._url = url; }
  get url() { return this._url; }

  // Methods
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
    let deferred = this._$q.defer();

    if (!_.isString(endpoint)) {
      deferred.reject('"endpoint" isn\'t a string.');
    }

    this._$http.get(this._createUrl(endpoint, queryStrings))
      .success(function(response, status, headers, config) {
        deferred.resolve(response);
      })
      .error(function(response, status, headers, config) {
        deferred.reject(response);
      });

    return deferred.promise;
  };

  /**
   * POST
   * @param  {String} url The endpoint
   * @param  {Object} payload
   * @param  {Object} queryStrings     Query strings
   * @return {Promise}
   */
  post(endpoint, payload, queryStrings) {
    let deferred = this._$q.defer();

    if (!_.isString(endpoint)) {
      deferred.reject('"endpoint" isn\'t a string.');
    }

    if (!payload || !_.isObject(payload)) {
      payload = {};
    }

    this._$http.post(this._createUrl(endpoint, queryStrings), payload)
      .success(function(response, status, headers, config) {
        deferred.resolve(response);
      })
      .error(function(response, status, headers, config) {
        deferred.reject(response);
      });

    return deferred.promise;
  };

  /**
   * PUT
   * @param  {String} url The endpoint
   * @param  {Object} payload
   * @param  {Object} queryStrings     Query strings
   * @return {Promise}
   */
  put(endpoint, payload, queryStrings) {
    let deferred = this._$q.defer();

    if (!_.isString(endpoint)) {
      deferred.reject('"endpoint" isn\'t a string.');
    }

    if (!payload || !_.isObject(payload)) {
      payload = {};
    }

    this._$http.put(this._createUrl(endpoint, queryStrings), payload)
      .success(function(response, status, headers, config) {
        deferred.resolve(response);
      })
      .error(function(response, status, headers, config) {
        deferred.reject(response);
      });

    return deferred.promise;
  };

  /**
   * DELETE
   * @param  {String} url The endpoint
   * @param  {Object} queryStrings     Query strings
   * @return {Promise}
   */
  delete(endpoint, queryStrings) {
    let deferred = this._$q.defer();

    if (!_.isString(endpoint)) {
      deferred.reject('"endpoint" isn\'t a string.');
    }

    this._$http.delete(this._createUrl(endpoint, queryStrings))
      .success(function(response, status, headers, config) {
        deferred.resolve(response);
      })
      .error(function(response, status, headers, config) {
        deferred.reject(response);
      });

    return deferred.promise;
  };

}

angular.module('app')
  .factory('RESTful', RESTful);

})();
