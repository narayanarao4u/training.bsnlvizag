app.controller('courseCtrl',function($scope,$http,$routeParams,toaster){
    $scope.data = {}

    var course = $routeParams.courselink;
    
    $scope.getData = function(courselink){
        $http({
            method:'GET',
            url: baseURL + '/course/'+courselink,
        }).then(function successCallback(res) {			
            $scope.data =  res.data.data[0];	
            console.log(res.data.data[0]);	 	
        }, function errorCallback(response) {				
            console.log(res);	
        });
    }

    $scope.getData(course)




})