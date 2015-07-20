angular.module('cobraApp').factory('serviceManager', serviceManager);
serviceManager.$inject = ['$http', '$q', '$location'];

function serviceManager($http, $q, $location) {
    // Attempt to get the authorization from sessionStorage
    var authorization = sessionStorage.getItem('auth') || null;

    return {
        makeRequest: makeRequest,
        setAuth: setAuth
    };

    function makeRequest(path, method, data) {
        var requestObject = {
            url: '/api/' + path,
            method: method
        };
        var headers = {};
        if (data) {
            if (typeof data === 'object') {
                headers['content-type'] = 'application/json';
            } else if (typeof data === 'string') {
                headers['content-type'] = 'x-www-form-urlencoded';
            }

            requestObject.data = data;
        }
        if (authorization) {
            headers.authorization = authorization;
        }
        requestObject.headers = headers;

        var deferred = $q.defer();
        $http(requestObject).then(
            function onSuccess(response) {
                deferred.resolve(response);
            },
            function onError(response) {
                if (response.status === 401) {
                    $location.url('/login');
                } else {
                    deferred.reject(response);
                }
            }
        );

        return deferred.promise;
    }

    function setAuth(token) {
        authorization = token; //'bearer ' + token;
        sessionStorage.setItem('auth', authorization);
    }
}
