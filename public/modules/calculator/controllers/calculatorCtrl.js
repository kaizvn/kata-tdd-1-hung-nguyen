/**
 * Created by kaizzige on 1/11/15.
 */


function calculatorController($scope, calcConfig) {
    // Init default value
    var defaultDelimiter = calcConfig.delimiters;
    $scope.inputNumbers = calcConfig.inputNumbers;
    $scope.result = 0;

    $scope.add = function () {
        // Reset result
        $scope.result = 0;
        var delimiter = defaultDelimiter
            , input = $scope.inputNumbers;

        // No need to process if typeof input === object/null/undefined
        if (typeof $scope.inputNumbers === "string") {
            var input = input.replace(/\n/g, delimiter)
                , inputArray = input.split(defaultDelimiter);
            while (inputArray.length) {
                var number = parseInt(inputArray.pop());
                $scope.result += (isNaN(number)) ? 0 : number;
            }
        }
        return $scope.result;

    }
}

calculatorController.$inject = ['$scope', 'calcConfig'];

kataApp.controller('calcCtrl', calculatorController);
