angular
    .module('app')
    .directive('cartListComponent', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/cartList/cartList.html'
        };
    }]);