angular.module('cobraApp').factory('registrationService', registrationService);
registrationService.$inject = ['serviceManager', '$q'];

function registrationService(serviceManager, $q) {
    return {
        postRegistration: postRegistration
    };

    function postRegistration(userData) {
        var deferred = $q.defer();

        serviceManager.makeRequest('registration/create', 'POST', userData).then(
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
