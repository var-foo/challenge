angular.module('codeChallengeApp').controller('HomeCtrl', function($scope, $http){
    'use strict';
    var arrItems;

    $http.get('/api/planets').then(function(res){
        arrItems = res.data;

        $scope.planets = (function(){
            var strPlanets = '';
            for(var i = 0; i < arrItems.length; i++){
                strPlanets += arrItems[i];
                if(arrItems.length -1 > i){
                    strPlanets += ', ';
                }
            }
            return strPlanets;
        }());
    });


});
