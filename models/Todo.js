const mongoose = require('mongoose');

const Task = require('./Task');

const Todo = mongoose.Schema({
	title : {
		type : String,
		default : 'Unkown lits',
		unique : true
	},
	tasks : [Task]
});

module.exports = mongoose.model('Todo', Todo);