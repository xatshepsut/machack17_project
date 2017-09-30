(function() {
  'use strict';

  angular
    .module('app')
    .factory('Statistics', statisticsService);

  /** @ngInject */
  function statisticsService($resource, host) {
    var apiHost = host + 'emotions';

    return $resource(apiHost, { }, {
      getAll: {
        method: 'GET',
        isArray: true
      }
    });
  }
})();
