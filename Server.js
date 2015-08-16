var express = require('express');
var bdyParser = require('body-parser');
var router = express.Router();

var data="{name: deepak, surname: jha}";

router.route('/myName').get(function(req, res){
	res.json(data);
});