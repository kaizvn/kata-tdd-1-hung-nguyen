/**
 * Created by kaizzige on 1/11/15.
 */


function calculatorController($scope, calcConfig) {
    // Init default value
    var defaultDelimiter = calcConfig.delimiters
        , exportDelimiterRegExp = new RegExp('^\/\/([^\n]*)\n([^]*)')
        , validateNumberRegExp = new RegExp('^([0-9]+|)$') // if case 1,, and 1,\n isn't accepted, remove the regExp match with empty string

    $scope.add = function () {
        // Reset result
        $scope.result = 0;

        // No need to process if typeof input === object/null/undefined
        if (typeof $scope.inputNumbers === "string") {
            var inputData, delimiter, delimiterRegExp, inputNumberArray;

            // Split the custom delimiter and data input by RegExp
            var customDelimiterExport = $scope.inputNumbers.match(exportDelimiterRegExp);

            if (customDelimiterExport !== null) {
                delimiter = defaultDelimiter.concat((customDelimiterExport[1].length != 0) ? [customDelimiterExport[1]] : []);
                inputData = customDelimiterExport[2];
            } else {
                delimiter = defaultDelimiter;
                inputData = $scope.inputNumbers;
            }

            // Get the array of input numbers
            delimiterRegExp = new RegExp(delimiter.join('|'));
            inputNumberArray = inputData.split(delimiterRegExp);

            while (inputNumberArray.length) {
                var number = inputNumberArray.pop();
                if (validateNumberRegExp.test(number)) { //validate number is not contain characters or special characters
                    number = parseInt(number);
                    $scope.result += (isNaN(number)) ? 0 : number;
                } else {
                    $scope.result = 0;
                    break;
                }
            }
        }
        return $scope.result;

    };

    $scope.inputNumbers = calcConfig.inputNumbers;
    $scope.result = (calcConfig.inputNumbers != 0) ? $scope.add() : 0;
}

calculatorController.$inject = ['$scope', 'calcConfig'];

kataApp.controller('calcCtrl', calculatorController);
