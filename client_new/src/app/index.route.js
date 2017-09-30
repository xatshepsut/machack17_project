(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'MainCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'SettingsCtrl'
      })
      .state('statistics', {
        url: '/statistics',
        templateUrl: 'app/statistics/statistics.html',
        controller: 'StatisticsController',
        controllerAs: 'StatisticsCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
