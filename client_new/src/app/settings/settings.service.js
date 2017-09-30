(function() {
  'use strict';

  angular
    .module('app')
    .service('Settings', settingsService);

  /** @ngInject */
  function settingsService( _, host, $http) {
    var apiHost = host + 'settings';

    this.get = function(cb, err) {
      $http({
        url: apiHost,
        method: 'GET'
      }).then(function(data) {
        cb(_.pick(data.data, ['doNotDisturb', 'id']));
      }).catch(function(data) {
        err(data);
      });
    };

    this.update = function(data, cb, err) {
      $http({
        url: apiHost,
        data: data,
        method: 'PUT'
      }).then(function(data) {
        cb(_.pick(data.data, ['doNotDisturb', 'id']));
      }).catch(function(data) {
        err(data);
      });
    };
  }
})();
