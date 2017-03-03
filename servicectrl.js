app.controller('servicectrl', function ($scope, AreaService) {
 
    $scope.Area = function () {
 
        $scope.result =  AreaService.GetArea($scope.length , $scope.width);
    }
 
 
});