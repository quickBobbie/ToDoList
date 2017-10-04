const todo = require('../models/Todo');

class Todos {
	
	getTodoList(callback) {
		todo.find((err, docs) => callback(err, docs));
	}
	getTodo(obj, callback) {
		todo.findOne(obj, (err, doc) => callback(err, doc));
	}

	addTodoList(obj, callback) {
		let doc = new todo(obj);

		doc.save()
				.then(doc => callback(null, doc))
				.catch(err => callback(err, null));
	}

	addTodoTask(_id, obj, callback) {
		todo.findOne({_id : _id}, (err, doc) => {
			if (err) throw err;

			doc.tasks.push(obj);

			doc.save()
				.then(doc => callback(null, doc))
				.catch(err => callback(err, null));
		});
	}

	updateTodoList(_id, title, callback) {
		todo.findOne({_id : _id}, (err, doc) => {
			if (err) throw err;

			doc.set('title', title);

			doc.save()
				.then(doc => callback(null, doc))
				.catch(err => callback(err, null));
		});
	}

	updateTodoTask(_id, title, callback) {
		todo.findOne({'tasks._id' : _id}, (err, doc) => {
			if (err) throw err;

			let task = doc.tasks.id(_id);
			task.set('title', title);

			doc.save()
				.then(doc => callback(null, doc.tasks.id(_id)))
				.catch(err => callback(err, null));
		});
	}

	deleteTodoList(_id, callback) {
		todo.remove({_id : _id}, err => callback(err));
	}

	deleteTodoTask(_id, callback) {
		todo.findOne({'tasks._id' : _id}, (err, doc) => {
			if (err) throw err;

			let task = doc.tasks.id(_id);
			task.remove();

			doc.save()
				.then(doc => callback(null, doc.tasks))
				.catch(err => callback(err, null));
		});
	}

	completeTodoTask(_id, callback) {
		todo.findOne({'tasks._id' : _id}, (err, doc) => {
			if (err) throw err;

			let task = doc.tasks.id(_id);
			task.set('completed', !task.completed);

			doc.save()
				.then(doc => callback(null, doc.tasks.id(_id)))
				.catch(err => callback(err, null));
		});
	}

};

module.exports = Todos;