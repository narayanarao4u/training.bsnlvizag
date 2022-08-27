app.controller('certificateEntryCtrl',function($scope, $http,  toaster, $mdDialog){

	$scope.data = {}
	$scope.courseDt = new Date();
	$scope.cetificDt = new Date();
	$scope.IdPrefix = "2022MR";
	$scope.IdSufix = 0;

	$scope.GetData = function(){ 
		$http({
			method: 'GET',
			url: baseURL + '/student',		
		  }).then(function successCallback(res) {			
				$scope.certificates =  res.data.data;		 	
			}, function errorCallback(response) {				
				console.log(res);	
			});
	}

	$scope.GetData();

	$scope.Add = function(){		
		$http({
			method: 'POST',
			url: baseURL + '/certificate',
			data:$scope.data,
			dataType: "json"
		  }).then(function successCallback(res) {
			  //console.log(res.data.data);
			  $scope.certificates.push(res.data.data) 
			  toaster.pop('success', "BSNL Vizag", "Recored Add");

			}, function errorCallback(response) {
				console.log(res);
			});
	}

	$scope.Edit = function(x){			
		$scope.data = x; 
		if( x.courseDt === undefined || x.courseDt === null) {
			$scope.data.courseDt = new Date($scope.courseDt);
		} else {
			$scope.data.courseDt = new Date(x.courseDt);
		}

		if(x.cetificDt === undefined || x.cetificDt === null) {
			$scope.data.cetificDt = new Date($scope.cetificDt);
		} else {
			$scope.data.cetificDt = new Date(x.cetificDt);
		}				
		scrollTop1();

	}

	$scope.Update = function(){
		$scope.courseDt = $scope.data.courseDt;
		$scope.cetificDt = $scope.data.cetificDt;
		console.log('Data : ',$scope.data);
		$http({
			method: 'PUT',
			url: baseURL + '/student',
			data:$scope.data,
			dataType: "json"
		  }).then(function successCallback(res) {
			  //console.log(res.data.data);
			  //$scope.certificates.push(res.data.data) 
			  toaster.pop('success', "BSNL Vizag", "Update");
			  $scope.GetData();
			  
			}, function errorCallback(response) {
				console.log(res);
			});

	}

	$scope.Delete = function(){
		console.log("SEND data  ", $scope.data);
		
		$http({
			method: 'DELETE',
			url: baseURL + '/certificate',
			data:JSON.stringify($scope.data),
			headers: { 	"Content-Type": "application/json"}
		  }).then(function successCallback(res) {
			  
			  console.log("Del : ", res);
			  toaster.pop('success', "BSNL Vizag", "Deleted");
			  $scope.GetData();
			  
			}, function errorCallback(response) {
				console.log(res);
			});
	}
	$scope.Generate = function(x){
		$scope.data = x;
		$scope.data.courseDt = new Date($scope.courseDt);
		$scope.data.cetificDt = new Date($scope.cetificDt);
		var idno =$scope.IdSufix+1
		$scope.data.idNo = $scope.IdPrefix + idno;
		$scope.IdSufix = idno;
		$scope.Update();
	}

	jqueryinit();


})
