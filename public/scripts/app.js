/**
 * Created by kaizzige on 1/9/15.
 */

var config = function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}


var kataApp = angular.module('kataApp', [])
    .config(config);
