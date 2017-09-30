(function() {
  'use strict';

  angular
    .module('app')
    .factory('SettingsService', settingsService);

  /** @ngInject */
  function settingsService($resource, _, host) {
    var apiHost = host + 'settings';

    return $resource(apiHost, { }, {
      get: {
        method: 'GET',
        transformResponse: function(res) {
          res = JSON.parse(res);

         return _.pick(res, ['doNotDisturb', 'id']);
        }
      },
      update: {
        method: 'PUT'
      }
    });
  }
})();
