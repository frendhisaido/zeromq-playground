import zmq
import time

host = "127.0.0.1"
port = "3131"

context = zmq.Context()

#  Socket to talk to server
print("Connecting to server %s at port %s" % (host ,port))
publisher = context.socket(zmq.REQ)

publisher.bind("tcp://{}:{}".format(host, port))
time.sleep(2)

#  Do 10 requests, waiting each time for a response
for request in range(100000):
    payload = "Payload number: %s" % (str(request))
    print("Sending request %s …" % request)
    publisher.send_multipart([b"task", payload.encode('utf-8')])
    message = publisher.recv()
    print("Received reply %s" % message)
