var myModule = angular.module("myModule", []);

myModule.controller("MyController", function ($scope) {
  $scope.targetClass = 'mint';
  
  $scope.colorInspirationClasses = [
    'codeED5565', 'codeE9573F', 'codeF6BB42', 'code8CC152',
    'code37BC9B', 'code3BAFDA', 'code4A89DC', 'code967ADC',
    'codeD770AD', 'codeE6E9ED', 'codeAAB2BD', 'code434A54','code726578','code657878','codefb08c6'
    ,'code3fda02','code1e45f5','codeff630f','codeff0f0f','codefef721','codeb218ff','code00e1ff','code7b2a2a',
    'codecc004b','code2d9090','code6f8e00','code960069','codec2b808','code0a1866','codeb32d00'
  ];
  
  $scope.highlight = function(a) {
     console.log(a);
    $scope.targetClass = $scope.colorInspirationClasses[a];
  };
});

myModule.directive("colorInspiration", function() {
  return {
    restrict: 'EA',
    scope: {val: '=ngModel'},
    link: function(scope, element, attrs, ngModel) {
      
      scope.$watch('val', function(newValue, oldValue) {
        console.log("watched it", scope.val);
        if (element.hasClass(oldValue)) {
          element.removeClass(oldValue);
        }
        element.addClass(newValue);
      });
    }
  }  
 
});