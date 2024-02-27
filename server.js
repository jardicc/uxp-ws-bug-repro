import {
	WebSocketServer
} from 'ws';

const ws = new WebSocketServer({
	port: 3355
});

ws.on('connection', function connection(ws) {
	console.log('server connected');
	ws.on('message', function message(data) {
		console.log(`received: "${data}"`);
		
		const reply = "";
		console.log(`sending reply: "${reply}"`)
		ws.send(reply);
	});

});

console.log("Hello from server.js");