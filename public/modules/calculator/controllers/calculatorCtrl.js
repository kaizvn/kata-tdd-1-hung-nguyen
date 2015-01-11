/**
 * Created by kaizzige on 1/11/15.
 */


function calculatorController ($scope, calcModel) {
    // Init default value
    var delimiter = calcModel.delimiters;
    $scope.inputNumbers = calcModel.inputNumbers;
    $scope.result = 0;

    $scope.add = function () {
        // Reset result
        $scope.result = 0;

        // No need to process if typeof input === object/null/undefined
        if (typeof $scope.inputNumbers === "string") {
            var inputArray = $scope.inputNumbers.split(delimiter);
            while (inputArray.length) {
                var number = parseInt(inputArray.pop());
                $scope.result += (isNaN(number)) ? 0 : number;
            }
        }
        return $scope.result;

    }
}

calculatorController.$inject = ['$scope', 'calcModel'];

kataApp.controller('calcCtrl', calculatorController);
