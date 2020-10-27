// rep.js
var zmq = require("zeromq"),
puller = zmq.socket("pull"),
fs = require('fs');

var bind_port = process.argv[2]

var pusher_address = `tcp://127.0.0.1:${bind_port}`;

console.log(`Puller connected to ${pusher_address}`);

puller.on("message", function(message) {
    var json_message = JSON.parse(message.toString())
    var proc_filename = './out/file_'+json_message.num+'.log';
    console.log(json_message.num)
    try {
        if (fs.existsSync(proc_filename)) {
            fs.unlinkSync(proc_filename);
            console.log(`${bind_port} Removed : ${proc_filename}`);
        }else{
            fs.closeSync(fs.openSync(proc_filename, 'w'));
            console.error(`${bind_port} Creating : ${proc_filename}`);
        }
      } catch(err) {
        console.error(`Error : ${proc_filename}`);
      }
    
});

puller.connect(pusher_address);
