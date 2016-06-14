app.controller('x-spanish-controller', function($scope, $http) {

    $scope.del = function(id, tab, title) {
        // console.log(id + ':' + tab + ':' + title);
        $http.delete('/removeMsg/' + id + '/' + tab + '/' + title).success(function(res) {
            console.log(res.name);
        })
    }
    $scope.push = function(tab, title) {
        console.log(tab + ':' + title);
        $http.get('/push/' + tab + '/' + title).success(function(res) {
            console.log(res.name);
        })
    }

})
