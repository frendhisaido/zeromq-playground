### Setup
```
npm install
pip install -r requirements.txt
```

### Demo REQ/REP Pattern
Run these scripts on separate terminals.
Run one python publisher that adds message to queue. 
Run two nodejs instances working as the queue consumer.
```
python publisher.py
node consumer-1.js
node consumer-2.js
```

ZeroMQ will by default load-balance the task/message/request 
sent by python publisher to the two node-js consumers.
References: https://learning-0mq-with-pyzmq.readthedocs.io/en/latest/pyzmq/devices/queue.html