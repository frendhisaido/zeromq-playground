// rep.js
var zmq = require("zeromq"),
consumer = zmq.socket("rep");

console.log("Consumer-1 connected to port 3131");

consumer.on("message", function(topic, message) {
    //Reply immediately
    consumer.send("Reply immediately!"); 

    //Then process the task
    setTimeout(function(){ 
      console.log(
        "Message processed ",
        message.toString()
    );
    }, 1000);
});

consumer.connect("tcp://127.0.0.1:3131");
console.log("REP Consumer connected to port 3131");