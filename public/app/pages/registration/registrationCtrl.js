angular.module('cobraApp').controller('registrationCtrl', registrationCtrl);
registrationCtrl.$inject = ['$scope', '$location'];

function registrationCtrl($scope, $location) {
    $scope.fields = {
        name: '',
        username: '',
        password: '',
        email: ''
    };

    $scope.submitRegistration = function (form) {
        console.log($scope.fields);
    };
}
