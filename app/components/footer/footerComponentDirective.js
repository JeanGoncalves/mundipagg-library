angular
    .module('app')
    .directive('footerComponent', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/footer/footer.html'
        };
    }]);