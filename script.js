// Code goes here

function Ctrl1($scope) {
    $scope.name = 'Angular';
    $scope.counter = 0;

    $scope.myClick = function() {
        $scope.counter++;
        $scope.name = 'Controller';
    }
}

angular.module('myApp', []).directive('myElement', function() {
    return {
        restrict: 'E',
        scope: {
            'myAttr': '=',
            'myCnt': '='
        },
        template: '<button ng-click="myOtherClick()" class = "btn btn-success" data-toggle="tooltip">From Directive</button>',
        link: function(scope, iElement, iAttrs) {
            scope.myOtherClick = function() {
                scope.myCnt++;
                scope.myAttr = 'Custom Directive';
            }
        }
    }
});