'use strict';

var app = angular.module('MyApp', ['ngStorage']); //instantiating new module named 'myapp'

app.controller('mainCtrl', function($scope, $localStorage){
  console.log('mainCtrl');
  $scope.$storage = $localStorage;
  // Array of contacts objects 
  // {name: arnold, phonenumber:777-7777}
  
   $scope.ordering = function(key){
    $scope.orderField = key;
  }
  
  $scope.switchUp = function(potion){
      console.log(potion);
      $scope.newPotion = potion;
  }

  $scope.editHandler = function(potion){
        $scope.newPotion = {}; // binding
  }
 
  if(!$localStorage.localArray) {
    console.log('inside local Array');
    $localStorage.localArray = [];
  } 

  $scope.potions = $localStorage.localArray || [];

  $scope.keys = Object.keys;




  $scope.addPotion = function(){
    //$scope.potions.push($scope.newPotion);

    var tempArray = $localStorage.localArray;
    console.log('temp array BEFORE', tempArray);
    tempArray.push($scope.newPotion);
    console.log('temp array AFTER', tempArray);
    $scope.potions = tempArray; 
    $scope.newPotion = {};
  };



  //$scope.addPotion(); 

  $scope.removeRow = function(potion){
    // $('#myModal').modal();

    var index = $scope.potions.indexOf(potion);
    $scope.potions.splice(index, 1);

  };
});


