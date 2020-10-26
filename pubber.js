// pubber.js
var zmq = require("zeromq"),
  sock = zmq.socket("pub");

sock.bindSync("tcp://127.0.0.1:3131");
console.log("Publisher bound to port 3131");

setInterval(function() {
  console.log("sending a multipart message envelope");
  sock.send(["UA", "meow!"]);
}, 1000);