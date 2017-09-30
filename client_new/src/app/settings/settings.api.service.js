(function() {
  'use strict';

  angular
    .module('app')
    .service('SettingsApiService', SettingsApiService);

  /** @ngInject */
  function SettingsApiService($http, $q) {
    var service = {};
    service.url = 'https://07729b15.ngrok.io/settings';
    service.getSettings = getSettings;
    service.updateSettings = updateSettings;

    return service;

    function getSettings(data) {
      var deferred = $q.defer();

      $http.get(service.url, data).then(function(result) {
        deferred.resolve(result);
      }).catch(function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }

    function updateSettings(data) {
      var deferred = $q.defer();

      $http.put(service.url, data).then(function(result) {
        deferred.resolve(result);
      }).catch(function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }
  }

})();
