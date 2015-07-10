angular.module('cobraApp').controller('registrationCtrl', registrationCtrl);
registrationCtrl.$inject = ['$scope', '$location', 'registrationService'];

function registrationCtrl($scope, $location, registrationService) {
    $scope.fields = {
        name: '',
        username: '',
        password: '',
        email: ''
    };

    $scope.submitRegistration = function (form) {
        registrationService.postRegistration($scope.fields).then(
            function onSuccess() {
                $location.url('/dashboard');
            },
            function onError() {
                // TODO: Handle error condition
            }
        );
    };
}
