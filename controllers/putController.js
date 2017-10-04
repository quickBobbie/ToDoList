const DBAction = require('../actions/dbaction');
const dbaction = new DBAction();

class PutController {

	addTodoList(req, res) {
		let list = {
			title : req.body.title
		};

		dbaction.addTodoList(list, (err, list) => {
			if (err) {
				console.log(err);
				return err;
			};

			res.json(list);
		});
	}

	updateTodoList(req, res) {
		dbaction.updateTodoList(req.body._id, req.body.title, (err, list) => {
			if (err) {
				console.log(err);
				return err;
			};

			res.json(list);
		});
	}

	addTodoTask(req, res) {
		let task = {
			title : req.body.title
		};

		dbaction.addTodoTask(req.body._id, task, (err, list) => {
			if (err) {
				console.log(err);
				return err;
			};

			res.json(list);
		});
	}

	updateTodoTask(req, res) {
		dbaction.updateTodoTask(req.body.task_id, req.body.title,(err, list) => {
			if (err) {
				console.log(err);
				return err;
			};

			res.json(list);
		});
	}

	completeTodoTask(req, res) {
		dbaction.completeTodoTask(req.body._id, (err, list) => {
			if (err) {
				console.log(err);
				return err;
			};

			res.json(list);
		});
	}

}

module.exports = PutController;