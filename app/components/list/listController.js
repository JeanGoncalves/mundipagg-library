angular
    .module('app')
    .controller('listController', function($scope, $http, url) {
        var response = $http.get(url + 'library.json');
        $http.get(url + 'library.json')
            .then(function(response) {
                $scope.library = response.data;
                console.log('Success | ', response.data);
            });
    });