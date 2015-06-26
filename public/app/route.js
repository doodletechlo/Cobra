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
            title: 'Home',
            templateUrl: '/app/pages/home/home.html'
        }
    }];
}
