app.controller('studentRegtViewCtrl',function($scope, $http, $routeParams, toaster){	

	var ID = $routeParams.id;
	var rurl = baseURL + "/student?idNo=false";
	if(ID) {
		rurl = baseURL + "/student/"+ID;
	} else
	{
		rurl = baseURL + "/student?idNo=false";
	}
	
	$scope.data = {};
	$scope.statusDetails ={
		remarks:"",
		User:""
	};
	$scope.login = JSON.parse(sessionStorage.getItem('login'));

	$scope.dispCondition = function (x) {
		/** old condition 
		if ($scope.login.User.user === 'jao') {
			if(x.status == 'Registeration Verified'){
				return  true;
			} else {
				return false	
			}			
		}else if ($scope.login.User.user === 'sde') {
			if(x.status == 'Registeration Verified'){
				return  false;
			} else {
				return true	
			}	
		}
		**/

		if ($scope.login.User.user === 'jao') {
			if(x.status == 'Registration Verified'){
				return  true;
			} else {
				return false	
			}			
		} else {
				return true					
		}		
	}
	
	$scope.dispConditionBtn = function (x) {
		
		if ($scope.login.User.user === 'sde') {
			if(x.status === 'Registration Verified'){
				return  false;
			} else {
				return true	
			}			
		} else {
				return true	
				
		}	
		
	}
	


	$scope.dispOptions = function (x) {
		var dispdata = "";
		
		switch(x){
			case "Registered":
				dispdata = "Registration Verified";
				break;
			case "Registration Verified":
				dispdata = "Payment Verified";
				break;
			case "Payment Verified":
				dispdata = "Student Admitted";
				break;		

		}
		
		return dispdata;
	}

	$scope.getData = function(){

		$http.get(rurl).then(function(res){					
			if(ID) {
				$scope.student = [];
				$scope.student.push(res.data.data); 
			} else
			{
				$scope.student = res.data.data;	
				
				
			}	
		});
	}
	$scope.getData();

	$scope.changeStatus= function(x){
		var y = $scope.statusDetails;
		var errmsg = "Remarks and Approved can not be null";
		if(y.User.trim().length === 0 || y.remarks.trim().length === 0 ) {
			toaster.pop('error', "BSNL Vizag", errmsg);			
		} else {
			$scope.updateStatus(x)
		}
	}

	$scope.updateStatus = function(x){
		$scope.data = x;
		$scope.status = $scope.dispOptions(x.status);

		$scope.statusDetails.created = new Date();
		$scope.statusDetails.status	= 	$scope.status;
		$scope.data.status = $scope.statusDetails.status;
	

		if($scope.data.statusInfo){			
			$scope.data.statusInfo.push($scope.statusDetails)			
		}	
		else
		{			
			var statusInfo = [];
			statusInfo.push($scope.statusDetails)
			$scope.data.statusInfo =  statusInfo;	

			// console.log('else data :', $scope.data);
			// console.log('else statusDetails:', $scope.statusDetails);
			// console.log('else statusInfo:', statusInfo);
		}
		

		
		$http({
			method: 'PUT',
			url: baseURL + '/student',
			data:$scope.data,
			dataType: "json"
		  }).then(function successCallback(res) {
			  toaster.pop('success', "BSNL Vizag", "Status Updated");
			
				var item =res.data
				var foundIndex = $scope.student.findIndex(x => x._id == item._id);
				$scope.student[foundIndex] = item;				
				
				// $scope.statusDetails ={};
				$scope.data = {};

			  
			}, function errorCallback(response) {
				console.log(res);
			});
	}
})

