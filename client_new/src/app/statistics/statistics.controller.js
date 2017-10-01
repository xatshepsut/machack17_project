(function() {
  'use strict';

  angular
    .module('app', ['ng-fusioncharts'])
    .controller('StatisticsController', StatisticsController);

  function StatisticsController($state, Statistics) {

    $scope.dataSource = {
		chart: {
			caption: "Age profile of website visitors",
			subcaption: "Last Year",
			startingangle: "120",
			showlabels: "0",
			showlegend: "1",
			enablemultislicing: "0",
			slicingdistance: "15",
			showpercentvalues: "1",
			showpercentintooltip: "0",
			plottooltext: "Age group : $label Total visit : $datavalue",
			theme: "fint"
		},
		data: [
			{
				label: "Happy",
				value: "75",
				color: "#00beef"
			},
			{
				label: "Sad",
				value: "20",
			},
			{
				label: "Angry",
				value: "0.01",
			},
			{
				label: "Neutral",
				value: "5",
			}
		]
	}



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
