app.directive('condition', function() {
    return {
        scope: ({
            data: '=',
            count: '='
        }),
        controller: function($element, $scope) {
            if ($scope.data == 'working') {
                $element[0].style.color = '#8BC34A';
            } else {
                $element[0].style.color = '#f44336';
            }
        }
    }
})