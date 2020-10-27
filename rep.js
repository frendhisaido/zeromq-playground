// rep.js
var zmq = require("zeromq"),
  consumer = zmq.socket("rep");


consumer.on("message", function (topic, message) {
  //Process message
  console.log("Processing message ", message.toString());
  setTimeout(function () {
    //Then return the result to producer
    consumer.send("Message processed");
  }, 1000);
});

consumer.connect("tcp://127.0.0.1:3131");
console.log("REP Consumer connected to port 3131");
