import zmq
import sys

bind_port = sys.argv[1]
socket_address = "tcp://127.0.0.1:%s" % (bind_port)


def producer():
    context = zmq.Context()
    zmq_socket = context.socket(zmq.PUSH)
    print("Bind to : %s" % (socket_address))
    zmq_socket.bind(socket_address)
    # Start your result manager and workers before you start your producers
    for num in range(1000):
        work_message = {'num': num}
        print(num)
        zmq_socket.send_json(work_message)


producer()