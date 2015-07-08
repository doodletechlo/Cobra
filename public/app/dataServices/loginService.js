angular.module('cobraApp').factory('loginService', loginService);
loginService.$inject = ['serviceManager', '$q'];

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
        serviceManager.makeRequest('user/login', 'POST', urlEncodedLogin).then(
            function success(response) {
                serviceManager.setAuth(response.data.token);
                deferred.resolve();
            },
            function error(response) {
                deferred.reject(response);
            }
        );

        return deferred.promise;
    }
}
