const mongoose = require('mongoose');

// Подключение к БД

mongoose.connect('mongodb://localhost:27017/todolist');

const db = mongoose.connection;

// Ошибка подключения

db.on('error', function(){
	console.log('Database connection error');
});

// Успешное подключение

db.once('open', function() {
	console.log('connected to database todolist ' + ' [' + Date() + ' ]');
});

module.exports = db;