/**
 * Created by kaizzige on 1/11/15.
 */

(function () {
    function calculatorConfig() {
        // Define calculator's default value
        var defaultValue = {
            delimiters: [',', '\n'], // task 3 include \n as delimiters.
            inputNumbers: '0' // default value display in input text.
        };

        var config = {
            getDefault: function () {
                return defaultValue;
            },
            setDefault: function (attribute, value) {
                defaultValue[attribute] = value;
            }
        }
        return config;
    }

    calculatorConfig.$inject = [];

    kataApp.factory('defaultConfig', calculatorConfig);
})();