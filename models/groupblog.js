var mongoose = require('mongoose');

var groupblogSchema = mongoose.Schema({
	name: {
		type: String,
		index: true,
		required: true
	},
	description: {
		type: String
	}
});

var Groupblog = module.exports = mongoose.model('Groupblog', groupblogSchema);

// Get All Blogs
module.exports.getGroupblogs = function(callback){
	Groupblog.find(callback);
}

// Get Groupblog By ID
module.exports.getGroupblogById = function(id, callback){
	Groupblog.findById(id, callback);
}

// Get Groupblog blogs 
module.exports.getBlogsByGroupblog = function(groupblog, callback){
	var query = {groupblog: groupblog};
	Blog.find(query, callback);
}

// Create Groupblog
module.exports.createGroupblog = function(newGroupblog, callback){
	newGroupblog.save(callback);
}