var LoginApp = angular.module('LoginApp', ['ngRoute']);
LoginApp.config(['$routeProvider', '$locationProvider', 
	function($routeProvider, $locationProvider){
	$routeProvider
	
	.when('/', {
		templateUrl: 'login.html',
		controller: 'LoginCtrl'
	})
	.when('/Login', {
		templateUrl: 'login.html',
		controller: 'LoginCtrl'
	})
	.when('/SignUp', {
		templateUrl: 'signup.html',
		controller: 'SignUpCtrl'
	})
	.when('/dashboard',{
		templateUrl: 'dashboard.html',
		controller: 'DashboardCtrl'
	})
	
	.otherwise({
		redirectTo: '/',
	});

}]);

LoginApp.controller('MainCtrl', function($scope){
	
	$scope.message = "Welcome to the main page";
	 
});

LoginApp.controller('LoginCtrl', function($scope, $location){
	

	$scope.submit = function(){
		var uname = $scope.username;
		var password = $scope.password;
		if ($scope.username == 'admin' && $scope.password == 'admin'){
			$location.path('/dashboard');
		} else {
			alert("Wrong user id and/or Password!");
		}


	}
	
});

LoginApp.controller('SignUpCtrl', function($scope){
	$scope.message = "Welcome to the sign up page";
});

LoginApp.controller('DashboardCtrl', function($scope){
	$scope.message = "welcome user to the dashboard";
});
