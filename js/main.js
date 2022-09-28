var app = angular.module('myApp', []);

app.controller('comics', function ($scope, $http) {
    $http.get('https://gateway.marvel.com/v1/public/events?ts=1&apikey=cd4582fb1127b00689682fbc261d7438&hash=6e240ec391d5cd18df34b969266c84c8')
        .then((response) => {
            $scope.items = response.data.data.results;

        })

})