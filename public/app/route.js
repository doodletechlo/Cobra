var app = angular.module('main', [
    // Angular modules
    'ngAnimate', // animations
    'ngRoute', // routing
    'ngSanitize',

]);

app.run(['$q', '$rootScope',
    function($q, $rootScope) {

    }
]);

// Collect the routes
app.constant('myroutes', getRoutes());
// Configure the routes and route resolvers
app.config(['$routeProvider', 'myroutes', routeConfigurator]);

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
    }, {
        url: '/search',
        config: {
            title: 'Search',
            templateUrl: '/app/pages/search/search.html'
        }
    }, {
        url: '/oow',
        config: {
            title: 'OOW Answers',
            templateUrl: '/app/pages/oow/oow.html'
        }
    }, {
        url: '/registration',
        config: {
            title: 'Create Users',
            templateUrl: '/app/pages/registration/registration.html'
        }
    }, {
        url: '/userdb',
        config: {
            title: 'User Database',
            templateUrl: '/app/pages/userdb/userdb.html'
        },
    }];
}
