// subber.js
var zmq = require("zeromq"),
consumer = zmq.socket("rep");

console.log("Consumer-2 connected to port 3131");

consumer.on("message", function(topic, message) {
  console.log(
    "Received message ",
    message.toString()
  );
  consumer.send("Message processed")
});

consumer.connect("tcp://127.0.0.1:3131");
