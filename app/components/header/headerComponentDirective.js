angular.module('app')

.directive('headerComponent', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/header/header.html'
        };
    }]);