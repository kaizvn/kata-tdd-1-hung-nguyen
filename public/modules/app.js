/**
 * Created by kaizzige on 1/9/15.
 */

var kataApp = (function (angular) {
    var appName = 'kataApp'
        , dependencies = []
        , config = ['$locationProvider', function ($locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }];

    return angular.module(appName, dependencies)
        .config(config);
})(angular);
