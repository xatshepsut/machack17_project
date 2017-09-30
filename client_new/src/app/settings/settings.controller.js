(function() {
  'use strict';

  angular
    .module('app')
    .controller('SettingsController', SettingsController);

  function SettingsController(SettingsApiService) {
    var vm = this;
    vm.title = 'Settings Page';

    init();

    function init() {
      console.log('smth', SettingsApiService);
      SettingsApiService.getSettings().then(function(data) {
        console.log(data);
      }).catch(function(error) {
        console.log(error);
      });
    }
  }
})();
