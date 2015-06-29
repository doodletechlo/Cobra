angular.module('cobraApp').controller('loginCtrl', loginCtrl);
homeCtrl.$inject = ['$scope', '$http', '$timeout', '$q'];

function loginCtrl($scope, loginService) {
    $scope.fields = {
        username: '',
        password: ''
    };

    $scope.submitLogin = function (form){
        console.log($scope.fields);
        loginService.postLogin($scope.fields.username, $scope.fields.password).then(
            function success(response) {
                console.log('Done!');
            },
            function error(response) {
                console.log('error');
                console.log(response);
            }
        );
    };
}
