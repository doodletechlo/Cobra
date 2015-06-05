var app = angular.module('cobraApp');

app.controller('homeCtrl', homeCtrl);
homeCtrl.$inject = ['$scope', '$http', '$timeout', '$q'];

function homeCtrl($scope, $http, $timeout, $q) {
    $scope.init = function() {
    };


}
