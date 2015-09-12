var express = require('express');
var router = express.Router();

var Blog = require('../models/blog');

router.get('/', function(req, res, next) {
  Blog.getBlogs(function(err, blogs){
  	if(err){
  		console.log(err);
  	}
  	res.json(blogs);
  });
});

router.get('/:id', function(req, res, next) {
  Blog.getBlogById(req.params.id, function(err, blog){
  	if(err){
  		console.log(err);
  	}
  	res.json(blog);
  });
});

router.get('/groupblog/:groupblog', function(req, res, next) {
  Blog.getBlogsByGroupblog(req.params.groupblog, function(err, blogs){
  	if(err){
  		console.log(err);
  	}
  	res.json(blogs);
  });
});

router.post('/', function(req, res, next){
	// Get Form Values
	var title = req.body.title;
	var groupblog = req.body.groupblog;
	var body = req.body.body;

	// Blog Object
	var newBlog = new Blog({
		title: title,
		groupblog: groupblog,
		body: body
	});

	// Create Blog
	Blog.createBlog(newBlog, function(err, blog){
		if(err){
			console.log(err);
		}

		res.location('/blogs');
		res.redirect('/blogs');
	});
});


// Update Article
router.put('/', function(req, res, next){
	var id	= req.body.id;
	var data = {
		title: req.body.title,
		groupblog: req.body.groupblog,
		body: req.body.body
	};

	// Create Article
	Blog.updateBlog(id, data, function(err, blog){
		if(err){
 			console.log(err);
 		}
 		
		res.location('/blogs');
		res.redirect('/blogs');
	});
});


// Remove Blog
router.delete('/:id', function(req, res, next){
	var id	= req.params.id;

	// Create Blog
	Blog.removeBlog(id, function(err, blog){
		if(err){
 			console.log(err);
 		}
		
		res.location('/blogs');
		res.redirect('/blogs');
	});
});



module.exports = router;
