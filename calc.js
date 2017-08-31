var app = angular.module("calculatorApp", []);
app.controller('Myctrl',function($scope){

    $scope.resultValue = 0;
    $scope.buttonClicked = function(button){
        $scope.selectedOperation = button;
    
    }
    $scope.computeResult = function(){
        var num1 = parseFloat($scope.input1);
        var num2 = parseFloat($scope.input2);
        if($scope.selectedOperation =='+'){
            $scope.resultValue = num1+num2;
        }

       else if($scope.selectedOperation =='-'){
            $scope.resultValue = num1-num2;
        }

        else if($scope.selectedOperation =='*'){
            $scope.resultValue = num1*num2;
        }
    } 
    /*$scope.runBoth = function(){
        buttonClicked();
        computeResult();
    }*/
} );
