/**
 * Created by kaizzige on 1/11/15.
 */


function calculatorController($scope, calcConfig) {
    // Init default value & Regex string
    var defaultConfig = calcConfig.getDefault()
        , exportDelimiterRegExp = new RegExp('^//([^\n]*)\n([^]*)')
        , validateNumberRegExp = new RegExp('^(-*[0-9]+|)$')// if case 1,, and 1,\n isn't accepted, remove the regExp match with empty string
        , multiDelimitersRegExp = new RegExp('[^\\[\\]]+', 'g');

    $scope.add = function () {
        // Reset result
        $scope.result = 0;

        // Only accept "string" type
        if (typeof $scope.inputNumbers === "string") {
            var inputData, delimiter, delimiterRegExp, inputNumberArray, multiDelimiters;

            // Split the custom delimiter and data input by RegExp
            var customDelimiterExport = $scope.inputNumbers.match(exportDelimiterRegExp);

            // Check if has delimiter
            if (customDelimiterExport !== null) {
                if (customDelimiterExport[1].length !== 0) {
                    // Add before special characters an escape-string
                    customDelimiterExport[1] = customDelimiterExport[1].replace(/([\/\\\?\+\.\*\|\$])/g, '\\$1');

                    // Check if has multi delimiters
                    multiDelimiters = customDelimiterExport[1].match(multiDelimitersRegExp);
                    delimiter = (multiDelimiters !== null) ? multiDelimiters : [customDelimiterExport[1]];
                } else {
                    // Return default delimiter id empty input.
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
                // Numbers bigger than 1000 should be ignored : set value = "-1" to throw Error
                number = (number[0] === '-') ? "-1" : number.substr(-3, 3);
                //validate number is not contain characters or special characters
                if (validateNumberRegExp.test(number)) {
                    number = parseInt(number, 10);

                    if (number < 0) {
                        throw new Error("negatives not allowed");
                    }
                    $scope.result += (isNaN(number)) ? 0 : number;
                    $scope.result %= 1000;

                } else {
                    $scope.result = 0;
                    break;
                }
            }
        }

        return $scope.result;
    };

    $scope.inputNumbers = defaultConfig.inputNumbers;
    $scope.result = (defaultConfig.inputNumbers != 0) ? $scope.add() : 0;
}

calculatorController.$inject = ['$scope', 'defaultConfig'];

kataApp.controller('calcCtrl', calculatorController);
