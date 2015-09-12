var express = require('express');
var router = express.Router();

var Groupblog = require('../models/groupblog');

router.get('/', function(req, res, next) {
  Groupblog.getGroupblogs(function(err, groupblogs){
  	if(err){
  		console.log(err);
  	}
  	res.json(groupblogs);
  });
});

router.get('/:id', function(req, res, next) {
  Groupblog.getGroupblogById(req.params.id, function(err, groupblog){
  	if(err){
  		console.log(err);
  	}
  	res.json(groupblog);
  });
});


module.exports = router;
