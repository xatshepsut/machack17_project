(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state) {
    var vm = this;
    vm.openSettings = openSettings;
    vm.openStatistics = openStatistics;

    init();

    function init() {
    }

    function openSettings() {
      $state.go('settings');
    }

    function openStatistics() {
      $state.go('statistics');
    }

  }
})();
