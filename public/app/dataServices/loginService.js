angular.module('cobraApp').factory('loginService', loginService);
homeCtrl.$inject = ['serviceManager', '$q'];

function loginService(serviceManager, $q) {
    return {
        postLogin: postLogin
    };

    function postLogin(username, password) {
        var deferred = $q.defer();

        var urlEncodedLogin = {
            username: username,
            password: password
        };
        serviceManager.makeRequest('login', 'POST', urlEncodedLogin).then(
            function success(response) {
                serviceManager.setAuth(response.data.token);
            },
            function error(response) {

            }
        );

        return deferred.promise;
    }
}
