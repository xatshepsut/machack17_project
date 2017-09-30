(function() {
  'use strict';

  angular
    .module('app')
    .controller('SettingsController', SettingsController);

  function SettingsController() {
    var vm = this;
    vm.title = 'Settings Page';

    init();

    function init() {
      
    }
  }
})();
