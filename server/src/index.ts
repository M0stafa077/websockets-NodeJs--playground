import express from "express";
import { Server } from "socket.io";

interface Message {
    message: string;
    messageNumber: number;
}

const app = express();

const server = app.listen(5000, () => {
    console.log("Server's running");
});
const ws = new Server(server);

ws.on("connection", (socket) => {
    console.log("New Client connected");

    socket.on("message", (data: Message) => {
        console.log(`${data.messageNumber}- ${data.message}`);
        ws.emit(
            "message",
            `Hello client, response to message: ${data.messageNumber}`
        );
    });
});
