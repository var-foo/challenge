'use strict';

/**
 * @ngdoc overview
 * @name codeChallengeApp
 * @description
 * # codeChallengeApp
 *
 * Main module of the application.
 */
angular
    .module('codeChallengeApp', ['ngMockE2E', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider.state('app', {
            abstract: true,
            url: '',
            templateUrl: '/views/global/main.html',
            controller: 'MainCtrl'
        }).state('app.home', {
            url: '/',
            templateUrl: '/views/home/home.html',
            controller: 'HomeCtrl'
        }).state('app.form', {
            url: '/form',
            templateUrl: '/views/form/form.html',
            controller: 'FormCtrl'
        }).state('app.data', {
            url: '/data',
            templateUrl: '/views/data/data.html',
            controller: 'DataCtrl'
        });
    })
    .run(function($httpBackend, mocks, userData){
        $httpBackend.whenGET(/^\/views\//).passThrough();

        $httpBackend.whenGET('/api/planets').respond(mocks.planets);

        $httpBackend.whenGET('/api/userData').respond(userData);
    });
