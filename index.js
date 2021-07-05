// require('./discord');
var express = require("express")
var bot = require("./bot")
var app =  express()
var http = require("http").Server(app)
var io = require("socket.io")(http)
app.use(express.static(__dirname))
const activeUsers = new Set()

var PORT = 30120
app.get("/",function(req,res) {
    res.sendFile("index.html")
})
io.on('connection',(socket)=>{
    socket.on('new user',(data)=>{
        socket.userId=data;
        activeUsers,add(data)
        io.emit('new user',[...activeUsers])

    })
    socket.on('disconnect',()=>{
        activeUsers.delete(socket.userId)
        io.emit("user disconnected", socket.userId);
    })
    // socket.broadcast.emit('hi')
    socket.on('chat message',(msg)=>{
        bot.reply(" ",msg).then((reply)=>{
            // msg.reply(reply)
            response = 
            "<li id='user'>"+msg+"</li>"+
            "<li id='bot'>"+reply+"</li>";
            // console.log(msg + ":" + reply)

            io.to(socket.id).emit('chat message',response)
    
        }).catch((err)=>{
            response = 
            "<li id='bot'> Um erro ocorreu:"+err+"</li>" 
            io.emit("chat message", )
            console.log("Error: "+err)
        })
    })

})


http.listen(PORT,"0.0.0.0",()=>{
    console.log("listen to "+PORT)
})


