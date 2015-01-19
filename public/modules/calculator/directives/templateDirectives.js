/**
 * Created by hung.nguyenhuy on 1/19/2015.
 */

function calcButton() {
    return {
        restrict: 'E',
        scope: {
            type: '@',
            value: '@',
            width: '@',
            height: '@'
        },
        controller: function ($scope) {
            switch ($scope.type) {
                case 'number' :
                    break;
                case 'action':
                    break;
                case 'navigation':
                    break
            }
        },
        template: '<button type="button" class="btn btn-default number" value="{{value}}">{{value}}</button>'
    }
}

kataApp.directive('calcButton', calcButton);