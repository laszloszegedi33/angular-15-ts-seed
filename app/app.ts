import * as angular from 'angular';
import 'angular-ui-router';

var routerApp = angular.module('myApp', ['ui.router']);

routerApp.config(function($stateProvider) {
    var helloState = {
        name: 'home',
        url: '/home',
        templateUrl: 'app/home/home.html'
    };

    var aboutState = {
        name: 'about',
        url: '/about',
        templateUrl: 'app/about/about.html'
    };

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
});

angular.bootstrap(document.documentElement, ['myApp']);