(() => {

let CacheService = (CacheFactory, APP_INFO) => ({
  // Local cache
  _localCache: null,
  // Session cache
  _sessionCache: null,

  _init() {
    let appName = APP_INFO.name.replace(/ /g, '-').toLowerCase(),
        localName =  `${this._appName}.local-storage`,
        sessionName = `${this._appName}.session-storage`;

    // Local cache
    if (_.isNull(this._localCache)) {
      this._localCache = CacheFactory.createCache(localName, { storageMode: 'localStorage' });
    }
    // Session cache
    if (_.isNull(this._sessionCache)) {
      this._sessionCache = CacheFactory.createCache(sessionName, { storageMode: 'sessionStorage' });
    }
  },


  _isSession(type) {
    return !_(type).isEmpty() && (type.toLowerCase() === 'session' || type.toLowerCase() === 's');
  },

  /**
   * get
   * @param  {String} key
   * @param  {Object} storageType
   * @return {Object}
   */
  get(key, storageType) {
    this._init();

    if (this._isSession(storageType)) {
      return this._sessionCache.get(key);
    }

    return this._localCache.get(key);
  },

  /**
   * put
   * @param  {String} key
   * @param  {Object} value
   * @param  {Object} storageType
   * @return {Object}
   */
  put(key, value, storageType) {
    this._init();

    if (this._isSession(storageType)) {
      return this._sessionCache.put(key, value);
    }

    return this._localCache.put(key, value);
  },

  /**
   * remove
   * @param  {String} key
   * @param  {Object} storageType
   * @return {Object}
   */
  remove(key, storageType) {
    this._init();

    if (this._isSession(storageType)) {
      return this._sessionCache.remove(key);
    }

    return this._localCache.remove(key);
  },

  /**
   * clear
   * @param  {Object} storageType
   */
  clear(storageType) {
    this._init();

    if (this._isSession(storageType)) {
      this._sessionCache.removeAll();
    }

    this._localCache.removeAll();
  },

  /**
   * info
   * @param  {Object} storageType
   * @return {Object}
   */
  info(storageType) {
    this._init();

    if (this._isSession(storageType)) {
      return this._sessionCache.info();
    }

    return this._localCache.info();
  },
});

angular.module('app')
  .factory('CacheService', CacheService);

})();
