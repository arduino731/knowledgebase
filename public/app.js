var app = angular.module('kB',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/categories',{
			templateUrl: 'views/categories.view.html',
			controller: 'CategoriesCtrl'
		}).
		// when('/groupblogs',{ 
		// 	templateUrl: 'views/blogs/groupblogs.view.html',
		// 	controller: 'GroupBlogsCtrl'
		// }).
		when('/categories',{
			templateUrl: 'views/categories.view.html',
			controller: 'GroupBlogsCtrl'
		}).
		when('/articles',{
			templateUrl: 'views/articles.view.html',
			controller: 'ArticlesCtrl'
		}).
		when('/blogs', {
			templateUrl: 'views/blogs/blogs.view.html',
			controller: 'BlogsCtrl'
		}).
		//Details
		when('/articles/details/:id',{
			templateUrl: 'views/article_details.view.html',
			controller: 'ArticleDetailsCtrl'
		}).
		when('/blogs/details/:id',{
			templateUrl: 'views/blogs/blogs_details.view.html',
			controller: 'BlogsCtrl'
		}).

		when('/articles/category/:category',{
			templateUrl: 'views/cat_articles.view.html',
			controller: 'ArticlesCategoryCtrl'
		}).
		when('/blogs/groupblog/:groupblog',{
			templateUrl: 'views/blogs/gro_blogs.view.html',
			controller: 'BlogsGroupblogCtrl'
		}).
		//ADD
		when('/articles/add',{
			templateUrl: 'views/add_article.view.html',
			controller: 'ArticleCreateCtrl'
		}).
		when('/blogs/add',{
			templateUrl: 'views/blogs/add_blog.view.html',
			controller: 'BlogCreateCtrl'
		}).
		// EDIT
		when('/articles/edit/:id',{
			templateUrl: 'views/edit_article.view.html',
			controller: 'ArticleEditCtrl'
		}).
		when('/blogs/edit/:id',{
			templateUrl: 'views/blogs/edit_blog.view.html',
			controller: 'BlogEditCtrl'
		}).
		otherwise({redirectTo: '/categories'})
}]);