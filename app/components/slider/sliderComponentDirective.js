angular
    .module('app')
    .directive('sliderComponent', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/slider/slider.html'
        };
    }]);