// subber.js
var zmq = require("zeromq"),
  sock = zmq.socket("sub");

sock.connect("tcp://127.0.0.1:3131");
sock.subscribe("UA");
console.log("Subscriber connected to port 3131");

sock.on("message", function(topic, message) {
  console.log(
    "Received message ",
    message.toString()
  );
});