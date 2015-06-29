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
            url: 'http://de74xyk8y8kp9.cloudfront.net/api/' + path,
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

        return $http(requestObject);
    }

    function setAuth(token) {
        authorization = 'bearer ' + token;
    }
}
