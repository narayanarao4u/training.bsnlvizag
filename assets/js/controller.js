
app.controller('mainCtrl',function($scope, $rootScope){

	
	$scope.login = JSON.parse(sessionStorage.getItem('login'));
	$scope.data = {};
	
	$rootScope.$on('$routeChangeSuccess', function () { 		
		$scope.login = JSON.parse(sessionStorage.getItem('login'));
	});
		
	$rootScope.$on('loggedin', function(evt,data){
		$scope.data = data;
		console.log('mainRoot', data);
	})
})

app.controller('coursesCtrl',function($scope, $http){	
	
	$http.get(baseURL + "/course").then(function(res){		
		$scope.data = res.data.data;	
	});
})

app.controller('studentRegtSubmit',function($scope){
	$scope.data = JSON.parse(sessionStorage.getItem('studentRegtSubmit'));	
})

