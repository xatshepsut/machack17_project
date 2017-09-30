(function() {
  'use strict';

  angular
    .module('app')
    .controller('StatisticsController', StatisticsController);

  function StatisticsController($state, StatisticsService) {
    var vm = this;
    vm.statistics = [];
    vm.back = back;

    init();

    function init() {
      StatisticsService.getAll(function(res) {
        vm.statistics = res.concat(res);
        console.log(vm.statistics);
      },function(err) {
        console.log(err);
      });

      vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
      vm.series = ['Series A', 'Series B', 'h', 'jhg'];
      vm.data = [
        [ {x: 2, y: 10}, {x: 0, y: 1}, {x: 1, y: 6}, {x: 4, y: 2} ],
        [ {x: 0, y: 2}, {x: 5, y: 7}, {x: 4, y: 2}, {x: 2, y: 9} ],
        [ {x: 0, y: 2}, {x: 5, y: 7}, {x: 4, y: 2}, {x: 2, y: 9} ],
        [ {x: 0, y: 2}, {x: 5, y: 7}, {x: 4, y: 2}, {x: 2, y: 9} ],
        [ {x: 4, y: 2}, {x: 5, y: 7}, {x: 4, y: 2}, {x: 2, y: 9} ]
      ];
      vm.onClick = function (points, evt) {
        console.log(points, evt);
      };
      vm.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
      vm.options = {
        scales: {
          yAxes: [
            {
              id: 'y-axis-1',
              type: 'linear',
              display: true,
              position: 'left'
            },
            {
              id: 'y-axis-2',
              type: 'linear',
              display: true,
              position: 'right'
            }
          ]
        }
      };
    }

    function back() {
      $state.go('main');
    }
  }
})();
