const mongoose = require('mongoose');

const Task = mongoose.Schema({
	title : {
		type : String,
		default : 'Unkown task',
		unique : true
	},
	completed : {
		type : Boolean,
		default : false
	}
});

module.exports = Task;