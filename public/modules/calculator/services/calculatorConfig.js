/**
 * Created by kaizzige on 1/11/15.
 */

(function () {
    function calculatorConfig() {
        /* ** Define calculator's default value **
         * delimiters: Task 3 include \n as delimiters.
         * inputNumbers: default value display in input text.
         * validateNumberPattern : if case 1,, and 1,\n isn't accepted, remove the regExp match with empty string
         */
        var defaultValue = {
            delimiters: [',', '\n'],
            inputNumbers: '0',
            exportDelimiterPattern: '^//([^\n]*)\n([^]*)',
            validateNumberPattern: '^(-*[0-9]+|)$',
            multiDelimitersPattern: '[^\\[\\]]+',
            customDelimiterPattern: '([\/\\\\?\\+\\.\\*\\|\\$])'

        };

        return {
            getDefault: function () {
                return defaultValue;
            },
            setDefault: function (attribute, value) {
                defaultValue[attribute] = value;
            }
        }
    }

    calculatorConfig.$inject = [];

    kataApp.factory('defaultConfig', calculatorConfig);
})();
