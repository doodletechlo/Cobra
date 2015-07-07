// Collect the routes
angular.module('cobraApp').constant('myroutes', getRoutes());
// Configure the routes and route resolvers
angular.module('cobraApp').config(['$routeProvider', 'myroutes', routeConfigurator]);

function routeConfigurator($routeProvider, routes) {

    routes.forEach(function(r) {
        $routeProvider.when(r.url, r.config);
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}

function getRoutes() {
    return [{
        url: '/',
        config: {
            title: 'Login',
            templateUrl: '/app/pages/login/login.html'
        }
    }, {
        url: '/:page',
        config: {
            templateUrl: function (params) {
                return '/app/pages/' + params.page + '/' + params.page + '.html';
            }
        }
    }];
}
