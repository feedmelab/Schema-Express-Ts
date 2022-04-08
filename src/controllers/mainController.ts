import { ConnectedSocket, OnConnect, SocketController, SocketIO } from "socket-controllers";
import { Server, Socket } from "socket.io";

@SocketController()
class MainController {
	//Este decorador se ejecutara cuando el cliente conecte al server
	@OnConnect()
	public onConnection(@ConnectedSocket() socket: Socket, @SocketIO() io: Server) {
		console.log("New Socket Connected", socket.id);
	}
}
