(function() {
  'use strict';

  angular
    .module('app')
    .controller('SettingsController', SettingsController);

  function SettingsController(Settings) {
    var vm = this;

    vm.settings = {};




    Settings.get(function(data) {
      vm.settings = data;
    }, function(err) {
      console.log(err);
    });
  }
})();
