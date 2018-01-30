import * as angular from 'angular';

var routerApp = angular.module('myApp', ['ui.router']);

routerApp.config(function($stateProvider) {

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'home/home.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            templateUrl: 'about/about.html'
        });

});