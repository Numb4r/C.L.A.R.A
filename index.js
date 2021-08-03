var bot = require("./bot")
var express = require("express")
var app = express()
var http = require("http").Server(app)
var io = require("socket.io")(http)
app.use(express.static(__dirname))


var PORT = 30120
app.get("/", function (req, res) {
    res.sendFile("index.html")
})
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        bot.reply(" ", msg).then((reply) => {
            response =
                "<div class='d-flex flex-row justify-content-start'><div><p class='small p-2 ms-3 mb-1 rounded-3' style='background-color: #f5f6f7;'>"
                + reply +
                "</p></div></div>"
            response = response.replace(/\n/ig,
                "</p><p class='small p-2 ms-3 mb-1 rounded-3' style='background-color: #f5f6f7;'>"
            )

            io.to(socket.id).emit('chat message', response)

        }).catch((err) => {
            response =
                "<div class='d-flex flex-row justify-content-start'><div><p class='small p-2 ms-3 mb-1 rounded-3' style='background-color: #f5f6f7;'>"
                + err +
                "</p></div></div>"
            response = response.replace(/\n/ig,
                "</p><p class='small p-2 ms-3 mb-1 rounded-3' style='background-color: #f5f6f7;'>")
            io.emit("chat message", response)
            console.log("Error: " + err)
        })
    })

})


http.listen(PORT, "0.0.0.0", () => {
    console.log("listen to " + PORT)
})


