// require('./discord');

var express = require("express")
var bot = require("./bot")
var app = express()
var http = require("http").Server(app)
var io = require("socket.io")(http)
app.use(express.static(__dirname))
const activeUsers = new Set()

var PORT = 30120
app.get("/", function (req, res) {
    res.sendFile("index.html")
})
io.on('connection', (socket) => {
    socket.on('new user', (data) => {
        // socket.userId = data;
        // activeUsers, add(data)
        // io.emit('new user', [...activeUsers])

    })
    socket.on('disconnect', () => {
        // activeUsers.delete(socket.userId)
        // io.emit("user disconnected", socket.userId);
    })

    socket.on('chat message', (msg) => {
        bot.reply(" ", msg).then((reply) => {
            // msg.reply(reply)
            // response = "<div class='speech left'>" + reply + "</div>";
            // <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-chat/ava3-bg.png" alt="avatar 1"
            //     style="width: 45px; height: 100%;">
            response =
                "<div class='d-flex flex-row justify-content-start'><div><p class='small p-2 ms-3 mb-1 rounded-3' style='background-color: #f5f6f7;'>"
                + reply +
                "</p></div></div>"
            response = response.replace(/\n|<breakLine>/ig,
                "</p><p class='small p-2 ms-3 mb-1 rounded-3' style='background-color: #f5f6f7;'>"
            )

            io.to(socket.id).emit('chat message', response)

        }).catch((err) => {
            response =
                "<li id='bot'> Um erro ocorreu:" + err + "</li>"
            io.emit("chat message", response)
            console.log("Error: " + err)
        })
    })

})


http.listen(PORT, "0.0.0.0", () => {
    console.log("listen to " + PORT)
})


