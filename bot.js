const Rive = require("rivescript")
const bot = new Rive({
    utf8:true,
    erros:{
        replyNotFound:"Eu nao tenho resposta para isso"
    }
})

bot.unicodePunctuation = new RegExp(/[.,!?;:]/g);    
bot.loadDirectory("rivescripts").then(loading_done).catch(loading_error)
function loading_error(error,filename,lineno){
    console.log("Error: "+error)
}
function loading_done() {
    console.log("bot is load")
    bot.sortReplies()
    let username = "user"
    bot.reply(username, "Hello, bot!").then(function(reply) {
        console.log("The bot says: " + reply);
    });
    bot.reply(username,"Ola").then((reply)=>{
        console.log(reply)
    })
}

module.exports={
    bot
}