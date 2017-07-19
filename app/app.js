angular.module('app', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home',{
                url: '/',
                templateUrl: 'components/home.html'
            })
            .state('cart', {
                url: '/cart',
                templateUrl: 'components/cart.html'
            });

    }]);