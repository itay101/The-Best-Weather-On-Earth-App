app.factory('appService', function (apiService) {
	let host   = 'https://api.openweathermap.org',
			path   = '/data/2.5/box/city',
			apiKey = '44862fc323a1022ea9dda9e8333a2c74',
			//[lon-left,lat-bottom,lon-right,lat-top,zoom]
			//bbox   = '-20,20,90,70,5';
			bbox   = '-180,-90,180,90,8'

	let getWeather = function () {

		//let url = `${weatherPath}${city}${apiKey}`

		return apiService.get(host + path, { bbox: bbox, appid: apiKey, cluster: 'yes' })
	}

	let getTopLocations = function (response) {
		let ideal = []
		_.map(response.data.list, function (item) {
			if (item.main.temp >= 20 && item.main.temp <= 22) {
				if (item.main.humidity >= 49 && item.main.humidity <= 51) {
					ideal.push(item)
				}

			}
		})

		return ideal
	}
	return {
		getWeather     : getWeather,
		getTopLocations: getTopLocations,
	}
})