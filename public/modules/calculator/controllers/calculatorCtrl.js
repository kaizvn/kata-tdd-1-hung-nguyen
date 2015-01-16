/**
 * Created by kaizzige on 1/11/15.
 */


function calculatorController($scope, calcConfig) {
    // Init default value
    var defaultConfig = calcConfig.getDefault()
        , exportDelimiterRegExp = new RegExp('^//([^\n]*)\n([^]*)')
        , validateNumberRegExp = new RegExp('^(-*[0-9]+|)$')// if case 1,, and 1,\n isn't accepted, remove the regExp match with empty string
        , multiDelimitersRegExp = new RegExp('[^\\[\\]]+', 'g');


    $scope.add = function () {
        // Reset result
        $scope.result = 0;

        // No need to process if typeof input === object/null/undefined
        if (typeof $scope.inputNumbers === "string") {
            var inputData, delimiter, delimiterRegExp, inputNumberArray;

            // Split the custom delimiter and data input by RegExp
            var customDelimiterExport = $scope.inputNumbers.match(exportDelimiterRegExp);

            // Check if input has been defined delimiter
            if (customDelimiterExport !== null) {
                if (customDelimiterExport[1].length !== 0) {
                    customDelimiterExport[1] = customDelimiterExport[1].replace(/([\/\\\?\+\.\*\|\$])/g, '\\$1');

                    // Check if multi delimiters define
                    var multiDelimiters = customDelimiterExport[1].match(multiDelimitersRegExp);
                    if (multiDelimiters !== null) {
                        delimiter = multiDelimiters;
                    }
                    else {
                        delimiter = [customDelimiterExport[1]];
                    }
                } else {
                    // return default delimiter id empty input.
                    delimiter = defaultConfig.delimiters;
                }

                inputData = customDelimiterExport[2];

            } else {
                delimiter = defaultConfig.delimiters;
                inputData = $scope.inputNumbers;
            }

            // Get the array of input numbers
            delimiterRegExp = new RegExp(delimiter.join('|'));
            inputNumberArray = inputData.split(delimiterRegExp);

            while (inputNumberArray.length) {
                var number = inputNumberArray.pop();
                number = (number[0] === '-') ? '-' + number.substr(1).substr(-3, 3) : number.substr(-3, 3); // Numbers bigger than 1000 should be ignored
                if (validateNumberRegExp.test(number)) { //validate number is not contain characters or special characters
                    number = parseInt(number, 10);

                    if (number < 0) {
                        throw new Error("negatives not allowed");
                    }
                    $scope.result += (isNaN(number)) ? 0 : number;

                } else {
                    $scope.result = 0;
                    break;
                }
            }
        }
        $scope.result = $scope.result % 1000;  // Results bigger than 1000 should be ignored
        return $scope.result;

    };

    $scope.inputNumbers = defaultConfig.inputNumbers;
    $scope.result = (defaultConfig.inputNumbers != 0) ? $scope.add() : 0;
}

calculatorController.$inject = ['$scope', 'defaultConfig'];

kataApp.controller('calcCtrl', calculatorController);
