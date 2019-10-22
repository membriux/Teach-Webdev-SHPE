const express = require("express");
const app = express();
// const dateTime = require("simple-datetime-formater");
const bodyParser = require("body-parser");
// const chatRouter = require("./route/chatRoute");
// const loginRouter = require("./route/loginRoute");


//http module
const http = require("http").Server(app);

//socket.io module
const io = require("socket.io");

const port = 5000;

//bodyParser middleware
app.use(bodyParser.json);

//routes
// app.use("/chats",chatRouter);
// app.use("/login", loginRouter);

//express.static middleware
// app.use(express.static(__dirname + "/public"));

//intergrating socketio
socket = io(http);


//database connection
const Chat = require("./models/Chat");
const connect = require("./dbconnect");

//event listener
socket.on("connection", socket => {
  console.log("user connected");

  socket.on("disconnect", function(){
    console.log("user disconnected");
  });

  //listen for typing
  socket.on("typing", data =>{
    socket.broadcast.emit("notifyTyping", {
      user: data.user,
      message: data.message
    });
  });

  //when someone stops typing
  socket.on("stopTyping", ()=>{
    socket.broadcast.emit("notifyStopTyping");
  });

  socket.on("chat message", function(msg){
    console.log("message: " + msg);

    //broadcast message to everyone in port:5000 except yourself
    socket.broadcast.emit("recieved", {message:msg});

    //save chat to the database
    connect.then(db =>{
      console.log("connected correctly to the server");
      let chatMessage = new Chat({message:msg, sender: "Anonymous"});

      chatMessage.save();
    });
  });
});

http.listen(port, ()=>{
  console.log("Running on Port: " + port);
});
