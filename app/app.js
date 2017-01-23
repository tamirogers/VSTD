myApp = angular.module('myApp', []);


myApp.controller('MainController', ['$scope', function($scope) {


    //Sets up an array to keep todo list items.
    // list is in the html and addList holds the data from input field (I think).
    $scope.addList = [];
    //the newTodo function establishes two properties in the array.  push pushes the values to the 
    // the array adding everything to the scope.
    $scope.newTodo = function() {

        $scope.addList.push({'name': $scope.name, 'priority' : parseInt($scope.priority)});
        $scope.name = "";

    };

//I found this code block, got it to work by adding a parseInt, -forcing a number value found in the
// option tag.  the getTrColor function is called in the ng-style directive on the view.
    $scope.getTrColor = function (colorIndex) {
    	
      switch(parseInt(colorIndex)){
        case 1: return '#ff4d4d';
        case 2: return '#80ccff';
        case 3: return '#ffff80';
        default: return 'white';
      };

    };
//sortType is an empty array so it can have different properties called. 
    $scope.sortType = '';
   

   


}]);
