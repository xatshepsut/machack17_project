(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('settings', {
        url: '/',
        templateUrl: 'app/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'settings'
      })
      .state('statistics', {
        url: '/',
        templateUrl: 'app/history/history.html',
        controller: 'HistoryController',
        controllerAs: 'history'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
