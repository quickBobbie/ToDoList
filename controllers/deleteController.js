const DBAction = require('../actions/dbaction');
const dbaction = new DBAction();

class DeleteController {

	deleteTodoList(req, res) {
		dbaction.deleteTodoList(req.body._id, (err) => {
			if (err) {
				console.log(err);
				return err;
			};

			res.json({"deleted" : req.body._id});
		});
	}

	deleteTodoTask(req, res) {
		dbaction.deleteTodoTask(req.body._id, (err, list) => {
			if (err) {
				console.log(err);
				return err;
			};

			res.json(list);
		});
	}

}

module.exports = DeleteController;