/**
 * Created by kaizzige on 1/11/15.
 */



function calculatorConfig() {
    // Define calculator's default value
    var defaultValue = {
        delimiters: ',',
        inputNumbers: ''
    }
    return defaultValue;
}

calculatorConfig.$inject = [];

kataApp.factory('calcConfig', calculatorConfig);
