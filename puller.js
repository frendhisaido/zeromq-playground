// rep.js
var zmq = require("zeromq"),
puller = zmq.socket("pull"),
fs = require('fs');

var bind_port = process.argv[2]

var pusher_address = `tcp://127.0.0.1:${bind_port}`;

console.log(`Puller connected to ${pusher_address}`);

puller.on("message", function(message) {
    const json_message = JSON.parse(message.toString())
    let filepath = './out/file_'+json_message.num+'.log';
    console.log(json_message.num);
    process_task(filepath)
});

function process_task(filepath) {
    setTimeout(function(){ 
        try {
            if (fs.existsSync(filepath)) {
                fs.unlinkSync(filepath);
                console.log(`${bind_port} Removed : ${filepath}`);
            }else{
                fs.closeSync(fs.openSync(filepath, 'w'));
                console.error(`${bind_port} Creating : ${filepath}`);
            }
          } catch(err) {
            console.error(`Error : ${filepath}`);
          } 
    }, 1000);
}

puller.connect(pusher_address);
