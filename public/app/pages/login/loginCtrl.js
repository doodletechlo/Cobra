angular.module('cobraApp').controller('loginCtrl', loginCtrl);
loginCtrl.$inject = ['$scope', 'loginService', '$location'];

function loginCtrl($scope, loginService, $location) {
    $scope.fields = {
        username: '',
        password: ''
    };

    $scope.submitLogin = function (form){
        console.log($scope.fields);
        loginService.postLogin($scope.fields.username, $scope.fields.password).then(
            function success(response) {
                $location.url('/dashboard');
            },
            function error(response) {
                console.log('error');
                console.log(response);
            }
        );
    };
}
