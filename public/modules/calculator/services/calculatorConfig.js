/**
 * Created by kaizzige on 1/11/15.
 */



function calculatorConfig() {
    // Define calculator's default value
    var defaultValue = {
        delimiters: [',', '\n'], // task 3 include \n as delimiters.
        inputNumbers: '1,2,3'
    }
    return defaultValue;
}

calculatorConfig.$inject = [];

kataApp.factory('calcConfig', calculatorConfig);
