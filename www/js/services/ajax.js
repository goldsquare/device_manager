app.factory('Ajax', function($http) {

    return {
        getDevices: function() {

            return $http.get('devices.json').success(function(data) {
            	return data;
            })
        }
    }
})