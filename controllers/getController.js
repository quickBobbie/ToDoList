const DBAction = require('../actions/dbaction');
const dbaction = new DBAction();

class GetController {

	getTodos(req, res) {
		dbaction.getTodoList((err, todos) => {
			if (err) {
				console.log(err);
				return err;
			};

			res.json(todos);
		});
	}

}

module.exports = GetController;