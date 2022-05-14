app.controller('registerCtrl',function($scope, $http,  $location, toaster, $routeParams, Factory1){
	
	$scope.btnHide = false;

	$scope.orginalStudent = {
		name : "",
		email : "",
		mobile : "",
		college : "",
		collegeid : "",
		aadhar : "",
		dob : "",
		gender : "m",
		branch : "",
		tp : "Visakhapatnam Training Point",
		paymentType:"online",
		courseName:"",
		courseAMT:"",
		DurationType:'weeks',
		status:"Registered"
	}

	$scope.paytype = {
		id:'Transation ID',
		dt:'Transation Date'
	}


	$http.get(baseURL + "/course").then(function(res){		
		$scope.courses = res.data.data;	
	});

	$http.get(baseURL + "/collegeSort").then(function(res){		
		$scope.collegeList = res.data.data;	
	});
	
	var ID = $routeParams.id;
	

	$scope.getData = function(ID){
		var	rurl = baseURL + "/student/"+ID;
		
		$http.get(rurl).then(function(res){		
			var resdata = res.data.data
			if(ID) {				
				$scope.student =  angular.copy(resdata);  				
				if('dob' in resdata)					
				$scope.student.dob = new Date(resdata.dob)
				//console.log("fired", $scope.student, res.data.data);
			} else
			{
				$scope.student = angular.copy($scope.orginalStudent);	
			}	
		});
	}
	//$scope.getData();

	if(ID) {		
		$scope.getData(ID);
	} else
	{
		// copy orginalStudent to student. student will be bind to a form 
		$scope.student = angular.copy($scope.orginalStudent);
	}
	

	$scope.submitForm = function(methodType){		
		var url = baseURL + "/student";
		$scope.btnHide = true;	
		var onSuccess = function (data, status, headers, config) {
		
			if(data.err){
				toaster.pop('error', "BSNL Vizag", data.msg);
			} else {
				toaster.pop('success', "BSNL Vizag", data.msg);				
				// $location.path('/studentRegtView/'+data.data.data._id)
				
				sessionStorage.setItem('studentRegtSubmit', JSON.stringify(data.data.data));
				
				$location.path('/studentRegtSubmit')
			
			}
		};
	
		var onError = function (data, status, headers, config) {
			toaster.pop('error', "BSNL Vizag", "error in submitting data");
		}
		console.log(methodType, $scope.student);
		if(methodType==='DELETE'){
			$scope.student.status = 'DELETE';
			methodType='PUT';
		}
		$http({
			method:methodType,
			url:url,
			data:$scope.student,
			dataType: "json"
		}
			).then(onSuccess,onError);
	}


	//ng-change="RadioChangePayType('online')"
	$scope.RadioChangePayType = function(paytype) {
		$scope.paytype = {}

		if(paytype == 'online'){
			$scope.paytype = {
				id:'Transation ID',
				dt:'Transation Date'
			}
		} else {
			$scope.paytype = {
				id:'Book No/Receipt No',
				dt:'Receipt Date'
			}
		}
	}


})
