import io from "socket.io-client";

const socket = io("ws://server:5000");

socket.on("connect", () => {
    console.log("Connected to WebSocket server");

    let messageCount = 0;
    setInterval(() => {
        messageCount++;
        socket.emit("message", {
            message: `Hello, server!`,
            messageNumber: messageCount,
        });
    }, 2000);
});

socket.on("message", (data: string) => {
    console.log(data);
});

socket.on("disconnect", () => {
    console.log("Disconnected from WebSocket server");
});
