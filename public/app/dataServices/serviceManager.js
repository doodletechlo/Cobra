angular.module('cobraApp').factory('serviceManager', serviceManager);
homeCtrl.$inject = ['$http', '$q'];

function serviceManager($http, $q) {
    var authorization;

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
                header['content-type'] = 'application/json';
            } else if (typeof data === 'string') {
                header['content-type'] = 'x-www-form-urlencoded';
            }

            requestObject.data = data;
        }
        if (authorization) {
            header.authorization = authorization;
        }
        requestObject.headers = headers;

        return $http(requestObject);
    }

    function setAuth(token) {
        authorization = 'bearer ' + token;
    }
}
