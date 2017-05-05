/**
 * Created by Aniket on 5/4/2017.
 */
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http)
{
    $http.get("https://www.w3schools.com/angular/customers.php").then(function(response) {
        $scope.myData = response.data.records;
    });
});