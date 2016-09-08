;(() => {

let $get = () => ({
  // service methods
});

let IndexedDB = function() {
  // IDBTransaction mode constants
  const READONLY        = 'readonly';
  const READWRITE       = 'readwrite';
  const VERSIONCHANGE   = 'versionchange';
  // IDBCursor direction and skip behaviour constants
  const NEXT            = 'next';
  const NEXTUNIQUE      = 'nextunique';
  const PREV            = 'prev';
  const PREVUNIQUE      = 'prevunique';

  let _dbName = '',
      _dbVersion = 1,
      _db = null;

  return {
    connect(dbName, dbVersion = 1) {
      _dbName = dbName;
      _dbVersion = dbVersion;
    },

    $get: $get
  };
};

angular.module('app')
  .provider('IndexedDB', IndexedDB);

})();
