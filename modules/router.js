const router = require('express').Router();

const GetController = require('../controllers/getController');
const getController = new GetController();

const PutController = require('../controllers/putController');
const putController = new PutController();

const DeleteController = require('../controllers/deleteController');
const deleteController = new DeleteController();

router.get('/todos', getController.getTodos);

router.put('/todos/add/list', putController.addTodoList);

router.put('/todos/add/task', putController.addTodoTask);

router.put('/todos/update/list', putController.updateTodoList);

router.put('/todos/update/task', putController.updateTodoTask);

router.put('/todos/complete/task', putController.completeTodoTask);

router.delete('/todos/delete/list', deleteController.deleteTodoList);

router.delete('/todos/delete/task', deleteController.deleteTodoTask);

module.exports = router;