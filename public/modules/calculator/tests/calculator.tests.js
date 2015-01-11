/**
 * Created by kaizzige on 1/11/15.
 */
describe('TDD Kata test', function () {
    beforeEach(module('kataApp'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('1.2 - simplest test cases - calcCtrl', function () {
        var $scope, controller;

        beforeEach(function () {
            $scope = {};
            controller = $controller('calcCtrl', {$scope: $scope});
        });

        it('Input : "".  Result should return 0', function () {
            $scope.inputNumbers = '';
            $scope.add();
            expect($scope.result).toEqual(0);
        });

        it('Input : "1". Result should return 1', function () {
            $scope.inputNumbers = '1';
            $scope.add();
            expect($scope.result).toEqual(1);
        });

        it('Input :"1,2". Result should return 3', function () {
            $scope.inputNumbers = '1,2';
            $scope.add();
            expect($scope.result).toEqual(3);
        });

    });

})
