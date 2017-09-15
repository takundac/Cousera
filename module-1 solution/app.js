(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCeckController.$inject = ['$scope', '$filter'];
    
    function LunchCheckController ($scope) {
      $scope.list = "";
      $scope.displayMessage = "";

      $scope.displayResult = function () {
        var messageOutput = checkAmount($scope.list);
        $scope.displayMessage = messageOutput;
      };
      
      function checkAmount(string) {
        var stringArray = [];
        var message ="";
        stringArray = string.split(",");
        
        if(stringArray[0] == "")
          {
            message ="Please enter data first";
          }
        else if(stringArray.length<=3)
         {
           message = "Enjoy!";
         }

        else if (stringArray.length>3)
          {
            message = "Too much!";            
          }
         return message;
       }
    }
    })();
    