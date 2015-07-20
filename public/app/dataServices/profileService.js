angular.module('cobraApp').factory('profileService', profileService);
profileService.$inject = ['serviceManager', '$q'];

function profileService(serviceManager, $q) {
    return {
        getProfile: getProfile,
        postPassword: postPassword,
        postEmail: postEmail
    };

    function getProfile() {
        var deferred = $q.defer();

        serviceManager.makeRequest('profile/getuser', 'GET').then(
            function success(response) {
                deferred.resolve(response.data);
            },
            function error(response) {
                deferred.reject(response);
            }
        );

        return deferred.promise;
    }

    function postPassword(newPassword, oldPassword) {
        var deferred = $q.defer();

        var data = {
            oldPassword: oldPassword,
            newPassword: newPassword
        };

        serviceManager.makeRequest('profile/updatepassword', 'POST', data).then(
            function success(response) {
                deferred.resolve();
            },
            function error(response) {
                deferred.reject(response);
            }
        );

        return deferred.promise;
    }

    function postEmail(email) {
        var deferred = $q.defer();

        var data = {
            email: email
        };

        serviceManager.makeRequest('profile/updateemail', 'POST', data).then(
            function success(response) {
                deferred.resolve();
            },
            function error(response) {
                deferred.reject(response);
            }
        );

        return deferred.promise;
    }
}
