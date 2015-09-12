var mongoose = require('mongoose');

var blogSchema = mongoose.Schema({
	title: {
		type: String,
		index: true,
		require: true
	},
	body: {
		type: String,
		require: true
	},
	groupblog: {
		type:String,
		index: true,
		// required: true
	},
	date: {
		type:Date,
		default: Date.now
	}
});

var Blog = module.exports = mongoose.model('Blog', blogSchema);

// Get All Blogs
module.exports.getBlogs = function(callback){
	Blog.find(callback);
}

// Get Blog By ID
module.exports.getBlogById = function(id, callback){
	Blog.findById(id, callback);
}

// Get Group blogs 
module.exports.getBlogsByGroupblog = function(group, callback){
	var query = {group: group};
	Blog.find(query, callback);
}

// Add a Blog
module.exports.createBlog = function(newBlog, callback){
	newBlog.save(callback);
}

// Update Blog
module.exports.updateBlog = function(id, data, callback){
	var title 	= data.title;
	var groupblog = data.groupblog;
	var body 	= data.body;

	var query 	= {_id: id};

	Blog.findById(id, function(err, blog){
		if(!blog){
			return next(new Error('Could not load blog'));
		}else{
			// Update
			blog.title = title;
			blog.body  = body;
			blog.groupblog = groupblog;

			blog.save(callback);
		}
	});
}

// Remove Blog
module.exports.removeBlog = function(id, callback){
	Blog.find({_id: id}).remove(callback);
}