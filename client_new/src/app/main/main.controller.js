(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state, $timeout, $interval,$window, Statistics) {
    var vm = this;
    vm.openSettings = openSettings;
    vm.openStatistics = openStatistics;
    vm.currentMood = {};
    vm.myMood = {};


    function init() {
      $timeout(function() {
        vm.currentMood.icon = 'icon-smile';
      }, 4000);

      $interval(function() {
        Statistics.latest(function(res) {
          vm.myMood = res;
        });
      }, 100000);
    }

    Statistics.latest(function(res) {
      vm.myMood = res;
    });

    function openSettings() {
      $state.go('settings');
    }

    function openStatistics() {
      $state.go('statistics');
    }

    function notifyMe() {
      // Let's check if the browser supports notifications
      if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
      }

      // Let's check whether notification permissions have already been granted
      else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        var notification = new Notification("I see tat you'r sad here funny video to cheer up :)");
      }

      // Otherwise, we need to ask the user for permission
      else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
          // If the user accepts, let's create a notification
          if (permission === "granted") {
              var notification = new Notification("I see tat you'r sad here funny video to cheer up :)");
          }
        });
      }

      notification.onclick = function(event) {
        event.preventDefault(); // prevent the browser from focusing the Notification's tab
        $window.open('https://www.youtube.com/watch?v=CpXUEM16Mg8', '_blank');
      };

      // At last, if the user has denied notifications, and you
      // want to be respectful there is no need to bother them any more.
    };

    init();
  }
})();
