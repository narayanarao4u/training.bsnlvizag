app.controller('certificateCtrl',function($scope, $http,  toaster){
	$scope.data = {
		rollNo:"0",
		idNo:"0"
	}

	//$scope.certificate = {}

	$scope.GetData = function(){ 
		console.log("SEND :", $scope.data);
		$http({
			method: 'POST',
			url: baseURL + '/findcertificate',
			data:JSON.stringify($scope.data),
			headers: { 	"Content-Type": "application/json"}		
		  }).then(function successCallback(res) {
				console.log(res.data);
				$scope.certificate =  res.data.data[0]; 

	
			}, function errorCallback(response) {
				
				console.log(res);
	
			});
	}


})
