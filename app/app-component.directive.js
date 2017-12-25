app.directive('appComponent',function () {
	return {
		templateUrl:'./app-component.html',
		controller:function ($scope,appService) {

			$scope.dataReceived = false;
			let init = function () {
				appService.getWeather().then(appService.getTopLocations).then(function (list) {
					$scope.ideal = [];
					$scope.others = [];

					_.forEach(list,function (item) {
						let temp = _.round(item.main.temp)
						item.main.temp = temp;
						if(temp === 21 && item.main.humidity === 50)
							$scope.ideal.push(item);
						else
							$scope.others.push(item)
					});

					$scope.dataReceived = true;

				})
			}

			init()
		}
	}
})