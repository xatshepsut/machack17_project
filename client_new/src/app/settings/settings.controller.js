(function() {
  'use strict';

  angular
    .module('app')
    .controller('SettingsController', SettingsController);

  function SettingsController($state, Settings) {
    var vm = this;
    vm.back = back;
    vm.settings = {};


    function back() {
      $state.go('main');
    }
    vm.updateSettings = function() {
      Settings.update({settings: JSON.stringify(vm.settings)}, function(data) {
        console.log(data);
      }, function(err) {
        console.log(err);
      });
    };

    Settings.get(function(data) {
      vm.settings = data;
    }, function(err) {
      console.log(err);
    });

  }
})();
