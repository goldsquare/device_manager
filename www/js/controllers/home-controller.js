app.controller('HomeCtrl', function($scope, $state, Ajax) {


    Ajax.getDevices().then(function(data) {
        localStorage.setItem('devices', JSON.stringify(data.data));
        $scope.devices = JSON.parse(localStorage['devices']);
    })


    $scope.change = function(index) {
        var d = document.getElementById('condition' + index);
        var message = 'working';
        if ($scope.devices[index].condition == 'working') {
            message = 'broken';
        }
        swal({
            title: $scope.devices[index].name,
            text: "Change to " + message,
            type: "warning",
            allowOutsideClick: true,
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes",
            closeOnConfirm: true
        }, function() {
            $scope.devices[index].condition = message;
            localStorage.setItem('devices', JSON.stringify($scope.devices));
            if (message == "working") {
                d.style.color = '#8BC34A';
            } else {
                d.style.color = '#f44336';

            }
            $scope.$apply();
        });
    }



})