
const express=require("express");
const app=express();
const server = require('http').createServer(app);
const io = require('socket.io')(server,{
    cors: {
        origin: "*",
      }
});

io.on("connection", (socket) => {
    console.log("what is socket", socket);
    console.log("socket is active to be connected");
    socket.on("chat", (payload) => {
        console.log("message: " + payload.message);
        //responce to the client
        io.emit("chat message", payload);
    });
  // ...
});

server.listen(3000,()=>{
    console.log("server is listening on port 3000");
});