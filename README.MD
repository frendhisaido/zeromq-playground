### Setup 
```
//Requirements: nodejs & python3
npm install
python -m venv env
source env/bin/activate
pip install -r requirements.txt
```

### Demo REQ/REP Pattern
A python producer will request the tasks.
The nodejs consumers will reply each tasks back to the producer.

Run each lines on on separate terminals (start rep.js scripts before req.py).
```
node rep.js // terminal#1
node rep.js // terminal#2
node rep.js // terminal#3
python req.py // terminal#4
```

The tasks will be evenly distributed among the consumers that connect to the same port. 
The producer will wait for the result/response of each task before it can runs the next task. 

This pattern ensure that the producer will always get result from the consumers. 
However, the consumer can immediately reply to the producer but that would defeat the purpose of using this pattern. 
You can try this by running the `rep-now.js` scripts instead. 

References: https://learning-0mq-with-pyzmq.readthedocs.io/en/latest/pyzmq/devices/queue.html . 

### Demo PUSH/PULL Pattern
A python producer will push tasks to its queue. 
The nodejs consumers will pull each tasks and process it without having to return anything.

Run each lines on separate terminals (start pusher.py scripts before puller.js scripts).
```
python pusher.py 5151  
node puller.js 5151  
node puller.js 5151  

python pusher.py 5252
node puller.js 5252
```
The tasks produced by pusher.py will be evenly distributed among the consumers that connect to the same port. 
The producer won't wait for any result from the consumers, after a consumer pull the task, it will push the next task immediately. 

In this pattern the producer can ignore results from the consumers process, 
thus it won't be affected by the time the consumer needed to process the task or to send back a result. 