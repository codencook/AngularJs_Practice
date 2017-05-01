/**
 * Created by Aniket on 4/30/2017.
 */
var myApp = angular.module("clockApp",[]);
myApp.controller("timeCtrl", function timeCtrlFunc1($scope){
        var curtimedate = new Date();
        $scope.timestring = curtimedate.toTimeString();
        $scope.updatetime = function(){
            console.log("btn clicked")
            var curtimedate = new Date();
            $scope.timestring = curtimedate.toTimeString();
        }
    }
);
myApp.controller("listCtrl",function  listCtrlFunc1($scope) {
    $scope.list1 = ['mumbai','london','new york','bejing']
});



myApp.controller("cartCtrl",function($scope){
    $scope.products = ['Milk','Bread','Eggs'];

    $scope.insertItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.products.indexOf($scope.addMe) == -1)
        {
            $scope.products.push($scope.addMe);
            $scope.addMe="";
        } else
        {
            console.log("else is called...")
            $scope.errortext = "The item is already in your shopping list.";
        }
    }
    $scope.removeItem = function(x) {
        console.log("remove called...")
        $scope.products.splice(x,1);
    }

})