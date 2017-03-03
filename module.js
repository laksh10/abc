var app = angular.module('myapp', []);
 
app.service('AreaService', function () {
 
    this.GetArea = function (FirstValue, SecondValue) {
        return FirstValue * SecondValue;
 
    }
    return;
});