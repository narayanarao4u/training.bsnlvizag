app.controller('loginCtrl', function ($scope, $location) {
	
	//this.login = Factory1.login;
	$scope.user = {
		user :"",
		pwd : ""
	}
	$scope.submit = function(user){
		if($scope.user.pwd === "admin"){
			console.log("LoginCtrl submit ",user);
			$scope.login = {
				login : true,			
				User : user				
			}
				
			sessionStorage.setItem('login', JSON.stringify($scope.login));		
			$location.path('/');
			//$rootScope.login = angular.copy(login);
			console.log($scope.login);
			$scope.$emit('loggedin', $scope.login)
		}
		else {

			alert("Invalid Username or password")

		}			
	}
    
})
