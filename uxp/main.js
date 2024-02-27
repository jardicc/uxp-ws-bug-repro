var webSocket = new WebSocket("ws://localhost:3355");

webSocket.onopen = function (e) {
  console.log("[open] Connection established");
  const message = "";
  console.log(`Sending empty message "${message}" to server`);
  webSocket.send(message);
};

webSocket.onmessage = function (event) {
  console.log(`Message from server "${event.data}"`);
};

webSocket.onclose = function (event) {
  console.warn(`[close] Connection closed, code=${event.code} reason=${event.reason}`);
};

webSocket.onerror = function (error) {
  console.error(`[error] ${error.message}`);
};

console.log("Hello from main.js");