angular.module("kB")

.controller('GroupBlogsCtrl', ['$scope','$http', function($scope, $http){
	$http.get('/groupblogs').success(function(data){
		$scope.groupblogs = data;
	});
}])
