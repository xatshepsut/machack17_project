(function() {
  'use strict';

  angular
    .module('app')
    .controller('StatisticsController', StatisticsController);

  function StatisticsController($state, Statistics) {




    var vm = this;
    vm.statistics = [];

    vm.back = back;
    
    vm.data = [];
    Statistics.getAll(function(res) {
      vm.statistics = res.concat(res);
      console.log(vm.statistics);
      vm.statistics.map(function(item){
        var dataItem = [];
          for(var i in item.scores){
            console.log(item.scores[i])
            if(item.scores[i] && item.scores[i] > 0){
              dataItem.push(item.scores[i]) 
            }
            
          }
        vm.data.push(dataItem)
      })
    },function(err) {
      console.log(err);
    });

    
    function back() {
      $state.go('main');
    }

    vm.onClick = function (points, evt) {
      console.log(points, evt);
    };

    vm.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

    vm.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    vm.datasetOverride = [
      {
        label: "Bar chart",
        borderWidth: 1,
        type: 'bar'
      },
      {
        label: "Line chart",
        borderWidth: 3,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        type: 'line'
      }
    ];
  }
})();
