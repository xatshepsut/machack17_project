(function() {
  'use strict';

  angular
    .module('app')
    .service('Settings', settingsService);

  /** @ngInject */
  function settingsService( _, host, $http) {
    var vm = this;
    var apiHost = host + 'settings';
    this.dnd = false;

    this.get = function(cb, err) {
      $http({
        url: apiHost,
        method: 'GET'
      }).then(function(data) {
        vm.dnd = data.data.doNotDisturb;
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
