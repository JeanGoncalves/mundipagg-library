angular.module('app')

.directive('listComponent', [function() {
    return {
        restrict: 'A',
        templateUrl: 'components/list/list.html'
    };
}]);