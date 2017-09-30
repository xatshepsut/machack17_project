(function() {
  'use strict';

  angular
    .module('app')
    .factory('Statistics', statisticsService);

  /** @ngInject */
  function statisticsService($resource) {
    var apiHost = 'https://07729b15.ngrok.io/emotions';

    return $resource(apiHost, { }, {
      getAll: {
        method: 'GET',
        isArray: true
      }
    });
  }
})();
