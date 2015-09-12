angular.module("kB")

.controller("BlogsCtrl", ['$scope', '$http', function($scope, $http){
	$http.get('/blogs').success(function(data){
		$scope.blogs = data; 
	});
}])

.controller('BlogsGroupblogCtrl', ['$scope','$http', '$routeParams', function($scope, $http, $routeParams){
	$http.get('/blogs/groupblog/'+$routeParams.groupblog).success(function(data){
		$scope.gro_blogs = data;
		$scope.groupblog = $routeParams.groupblog;
	});
}])


.controller("BlogDetailsCtrl", ['$scope', '$http', '$routeParams','$location', function($scope, $http, $routeParams, $location){
	$http.get('/blogs/'+$routeParams.id).success(function(data){
		$scope.blog = data; 
	});

	$scope.removeBlog = function(){
		$http.delete('/blogs/'+$routeParams.id).success(function(data){
			console.log(data);
		});

		$location.path('/blogs');
	}
}])

.controller('BlogCreateCtrl', ['$scope','$http','$routeParams','$location', function($scope, $http, $routeParams, $location){
	$http.get('/groupblogs').success(function(data){
		$scope.groupblogs = data;
	});

	$scope.addBlog = function(){
		var data = {
			title: $scope.title,
			body: $scope.body,
			groupblog : $scope.groupblog
		}

		$http.post('/blogs', data).success(function(data, status){
			console.log(status);
		});

		$location.path('/blogs');
	}
}])

.controller("BlogEditCtrl", ['$scope', '$http', '$routeParams','$location', function($scope, $http, $routeParams, $location){
	$http.get('/blogs/'+$routeParams.id).success(function(data){
		$scope.blog = data; 
	});

	$scope.updateBlog = function(){
		var data = {
			id: 	$routeParams.id,
			title: 	$scope.blog.title,
			body: 	$scope.blog.body,
			groupblog: $scope.blog.groupblog
		}

		$http.put('/blogs', data).success(function(data, status){
			console.log(status);
		});

		$location.path('/blogs');
	}

}])