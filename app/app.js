'use strict';
var app = angular.module('myApp', ['ngMaterial'],function($mdThemingProvider) {
	$mdThemingProvider.theme('docs-dark', 'default')
		.primaryPalette('yellow')
		.dark();
});