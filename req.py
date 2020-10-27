import zmq
import time

host = "127.0.0.1"
port = "3131"

context = zmq.Context()
publisher = context.socket(zmq.REQ)
print("REQ server running at %s:%s" % (host ,port))
publisher.bind("tcp://{}:{}".format(host, port))


for request in range(100000):
    payload = "Payload number: %s" % (str(request))
    print("Sending request %s …" % request)
    publisher.send_multipart([b"task", payload.encode('utf-8')])
    message = publisher.recv()
    print("Received reply %s" % message)
