app.controller('collegeCtrl',function($scope, $http,  toaster){
    
	$scope.data = {}

	$scope.GetData = function(){ 
		
		$http({
			method: 'GET',
			url: baseURL + '/college',		
		  }).then(function successCallback(res) {			
				$scope.college =  res.data.data;	
				console.log(res.data.data);	 	
			}, function errorCallback(response) {				
				console.log(res);	
			});
	}

	$scope.GetData();

    $scope.Add = function(){	
		console.log("Add Data : ", $scope.data);	
		$http({
			method: 'POST',
			url: baseURL + '/college',
			data:$scope.data,
			dataType: "json"
		  }).then(function successCallback(res) {			   
			  toaster.pop('success', "BSNL Vizag", "Recored Add");
			  $scope.GetData();

			}, function errorCallback(res) {
				console.log(res);
			});
	}

    
	$scope.Edit = function(x){			
		$scope.data = x; 		
	}

    $scope.Update = function(){
		$http({
			method: 'PUT',
			url: baseURL + '/college',
			data:$scope.data,
			dataType: "json"
		  }).then(function successCallback(res) {
			  toaster.pop('success', "BSNL Vizag", "Update");
			  $scope.GetData();
			  
			}, function errorCallback(res) {
				console.log(res);
			});

	}

	$scope.Delete = function(){		
		$http({
			method: 'DELETE',
			url: baseURL + '/college',
			data:JSON.stringify($scope.data),
			headers: { 	"Content-Type": "application/json"}
		  }).then(function successCallback(res) {			  
			  console.log("Del : ", res);
			  toaster.pop('success', "BSNL Vizag", "Deleted");
			  $scope.GetData();			  
			}, function errorCallback(response) {
				console.log(response);
			});
	}

})