(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state, $timeout) {
    var vm = this;
    vm.openSettings = openSettings;
    vm.openStatistics = openStatistics;
    vm.currentMood = {};

    init();

    function init() {
      $timeout(function() {
        vm.currentMood.icon = 'icon-smile';
      }, 4000);
    }

    function openSettings() {
      $state.go('settings');
    }

    function openStatistics() {
      $state.go('statistics');
    }

  }
})();
