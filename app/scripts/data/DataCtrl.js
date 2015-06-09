angular.module('codeChallengeApp').controller('DataCtrl', function($scope, $http){
    'use strict';

    $http.get('/api/userData').then(function(response){
        $scope.data = respnse.data;
    });
});
