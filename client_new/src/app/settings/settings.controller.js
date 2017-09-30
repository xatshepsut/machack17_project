(function() {
  'use strict';

  angular
    .module('app')
    .controller('SettingsController', SettingsController);

  function SettingsController($state, SettingsService) {
    var vm = this;
    vm.back = back;
    vm.settings = {};

    init();

    function init() {
      SettingsService.get(function(data) {
        vm.settings = data;
      }, function(err) {
        console.log(err);
      });
    }

    function back() {
      $state.go('main');
    }
  }
})();
