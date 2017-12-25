app.factory('apiService', function ($http) {
	const apiPath  = '/api/'
	let apiRequest = function (options) {
		options.headers = {
			'Access-Control-Allow-Origin': '*',
		}
		return $http(options).then(function (response) {
			debugger
		})
	}

	let get = function (url, params) {
		return $http.get(url, {params:params} )
	}
	return {
		get: get,
	}
})