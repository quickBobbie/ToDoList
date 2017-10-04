const http = require('http');

class Server {
	constructor(app, port, message) {
		this.app = app;
		this.port = port;
		this.message = message;
		return this.startServer();
	}

	startServer() {
		http
			.Server(this.app)
			.listen(this.port, console.log(this.message));
	}
}

module.exports = Server;