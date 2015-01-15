/**
 * Created by kaizzige on 1/11/15.
 */
describe('TDD Kata test', function () {
    beforeEach(module('kataApp'));

    var $controller, $scope, controller;

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $scope = {};
        controller = $controller('calcCtrl', {$scope: $scope});
    }));


    describe('1 - simplest test cases : ', function () {
        it('Input : "".', function () {
            $scope.inputNumbers = '';
            $scope.add();
            expect($scope.result).toEqual(0);
        });

        it('Input : "1".', function () {
            $scope.inputNumbers = '1';
            $scope.add();
            expect($scope.result).toEqual(1);
        });

        it('Input :"-1,2"', function () {
            $scope.inputNumbers = '1,2';
            $scope.add();
            expect($scope.result).toEqual(3);
        });

        it('Input :"1,,5".', function () {
            $scope.inputNumbers = '1,,5';
            $scope.add();
            expect($scope.result).toEqual(6);
        });

    });

    describe('2 - Allow the Add method to handle an unknown amount of numbers', function () {
        it('Input : null .', function () {
            $scope.inputNumbers = null;
            $scope.add();
            expect($scope.result).toEqual(0);
        });

        it('Input : "1,ad,sd,4" ', function () {
            $scope.inputNumbers = '1,ad,sd,4';
            $scope.add();
            expect($scope.result).toEqual(0);
        });

        it('Input :"1,,2," ', function () {
            $scope.inputNumbers = '1,,2,';
            $scope.add();
            expect($scope.result).toEqual(3);
        });

    });


    describe('3 - Accept \n as delimiter ', function () {
        it('Input : "1,2,\n,3".', function () {
            $scope.inputNumbers = '1,2,\n,3';
            $scope.add();
            expect($scope.result).toEqual(6);
        });

        it('Input : "1,\n".', function () {
            $scope.inputNumbers = '1,\n';
            $scope.add();
            expect($scope.result).toEqual(1);
        });

        it('Input :"\n,".', function () {
            $scope.inputNumbers = '\n,';
            $scope.add();
            expect($scope.result).toEqual(0);
        });

        it('Input :"\n1,2,3,\n,4,5\n".', function () {
            $scope.inputNumbers = '\n1,2,3,\n,4,5\n';
            $scope.add();
            expect($scope.result).toEqual(15);
        });

    });

    describe('4 - Support different delimiters ', function () {
        it('Input : "//;\n1;2" ', function () {
            $scope.inputNumbers = '//;\n1;2';
            $scope.add();
            expect($scope.result).toEqual(3);
        });

        it('Input : "//\n1,2"', function () {
            $scope.inputNumbers = '//\n1,2';
            $scope.add();
            expect($scope.result).toEqual(3);
        });

        it('Input : "//\n1;2"', function () {
            $scope.inputNumbers = '//\n1;2';
            $scope.add();
            expect($scope.result).toEqual(0);
        });

        it('Input : "//\n1;2,5"', function () {
            $scope.inputNumbers = '//\n1;2,5';
            $scope.add();
            expect($scope.result).toEqual(0);
        });

        it('Input : ";\n1;2"', function () {
            $scope.inputNumbers = ';\n1;2';
            $scope.add();
            expect($scope.result).toEqual(0);
        });

        it('Input :"//;\n1;2\n3,5"', function () {
            $scope.inputNumbers = '//;\n1;2\n3,5';
            $scope.add();
            expect($scope.result).toEqual(11);
        });

    });

    describe('5 - Calling Add with a negative number ', function () {
        it('Input : "-1,2,3,4" ', function () {
            $scope.inputNumbers = '-1,2,3,4';
            expect(function () {
                $scope.add();
            }).toThrow(new Error("negatives not allowed"), typeof "string");
        });

        it('Input : "//;\n-1;2;3;4" ', function () {
            $scope.inputNumbers = '//;\n1;2;-3;4';
            expect($scope.add).toThrow(new Error("negatives not allowed"), typeof "string");
        });

        it('Input :"//\n-1;2;3;4"', function () {
            $scope.inputNumbers = '//\n1;2;3;4';
            $scope.add();
            expect($scope.result).toEqual(0);
        });


    });

});
