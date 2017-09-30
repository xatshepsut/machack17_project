(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state) {
    var vm = this;
    vm.title = 'Main';
    vm.openSettings = openSettings;

    init();

    function init() {
    }

    function openSettings() {
      $state.go('settings');
    }
  }
})();
