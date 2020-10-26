// subber.js
var zmq = require("zeromq"),
consumer = zmq.socket("rep");

console.log("Consumer-2 connected to port 3131");

consumer.on("message", function(topic, message) {
    console.log(
        "Received message ",
        message.toString()
    );
    setTimeout(function(){ 
      consumer.send("Message processed"); 
    }, 1000);

  
});

consumer.connect("tcp://127.0.0.1:3131");
