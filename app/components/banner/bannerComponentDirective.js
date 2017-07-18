angular
    .module('app')
    .directive('bannerComponent', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/banner/banner.html'
        };
    }]);