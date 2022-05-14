app.controller('findstudent',function($scope, $http, toaster, $routeParams){
	
	$scope.findData = $routeParams;

	var onSuccess = function (data, status, headers, config) {
		
		if(data.err){
			toaster.pop('error', "BSNL Vizag", data.msg);
		} else {
			toaster.pop('success', "BSNL Vizag", data.msg);				
			$scope.data = data.data.data;
			$scope.certificate = $scope.data[0];

			var x = $scope.certificate;				
			if(x.courseDuration === 1 ){					
				x.DurationType = x.DurationType.slice(0, -1);
			}
		}
	};

	var onError = function (data, status, headers, config) {
		toaster.pop('error', "BSNL Vizag", "error in submitting data");
	}

	$scope.getData = function(){
		var url = baseURL + "/findstudent";
		console.log($scope.findData);
		$http({
			method:'POST',
			url:url,
			data:$scope.findData,
			dataType: "json"
		}
			).then(onSuccess,onError);
	}
})

