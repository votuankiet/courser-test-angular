(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.dishes = "";
  $scope.performCheck = function(){

    //checking for empty string
    if ($scope.dishes.length === 0){
      $scope.message = "Please enter data first";
      return;
    }


    var dishesArray = $scope.dishes.split(",");
    if (dishesArray.length <= 3){
      $scope.message = "Enjoy!";
      return;
    }else{
      $scope.message  = "Too much!";
      return;
    }
  }
}
})();
