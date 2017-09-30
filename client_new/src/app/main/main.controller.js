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
    vm.loading = true;

    init();

    function init() {
      $interval(function() {
        Statistics.latest(function(res) {
          fetchLatestMood();
          findMoodEmoji();
        });
      }, 1000);

      fetchLatestMood();
    }

    function fetchLatestMood() {
      Statistics.latest(function(res) {
        vm.currentMood.scores = res.scores;
        console.log('updated mood');
        vm.loading = false;
      });
    }

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
    }

    function findMoodEmoji() {
      var max = 0;
      var maxEmotion = '';

      for (var emotion in vm.currentMood.scores) {
        if (vm.currentMood.scores[emotion] > max) {
          max = vm.currentMood.scores[emotion];
          maxEmotion = emotion;
        }
      }

      switch (maxEmotion) {
        case 'anger':
          if (max < 50) {
            vm.currentMood.icon = 'icon-angry';
          } else {
            vm.currentMood.icon = 'icon-frustrated';
          }
          break;
        case 'contempt':
          vm.currentMood.icon = 'icon-cool';
          break;
        case 'disgust':
          vm.currentMood.icon = 'icon-confused';
          break;
        case 'fear':
          if (max < 50) {
            vm.currentMood.icon = 'icon-confused';
          } else {
            vm.currentMood.icon = 'icon-baffled';
          }
          break;
        case 'happiness':
          if (max < 30) {
            vm.currentMood.icon = 'icon-smile';
          } else if (max < 60) {
            vm.currentMood.icon = 'icon-happy';
          } else {
            vm.currentMood.icon = 'icon-grin';
          }
          break;
        case 'neutral':
          if (max < 50) {
            vm.currentMood.icon = 'icon-neutral';
          } else {
            vm.currentMood.icon = 'icon-wondering';
          }
          break;
        case 'sadness':
          if (max < 50) {
            vm.currentMood.icon = 'icon-sad';
          } else {
            vm.currentMood.icon = 'icon-crying';
          }
          break;
        case 'surprise':
          vm.currentMood.icon = 'icon-shocked';
          break;
        default:
          //vm.currentMood.icon = '';
      }
    }

  }
})();
