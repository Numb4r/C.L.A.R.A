const Rive = require("rivescript")
const bot = new Rive({
    utf8: true,
    errors:{
        replyNotFound:"Eu nao tenho resposta para isso"
    }
})

// bot.unicodePunctuation = new RegExp(/[.,!?;:]/g);    
bot.loadDirectory("rivescripts").then(loading_done).catch(loading_error)
function loading_error(error,filename,lineno){
    console.log("Error: "+error)
}
function loading_done() {
    console.log("bot is loading")
    bot.sortReplies()
    let username = "user"
    bot.reply(username, "request").then(function(reply) {
        console.log("The bot says: " + reply);
    });
}

module.exports = bot