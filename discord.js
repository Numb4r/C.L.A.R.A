//Modules
const Discord = require("discord.js");
const Rive = require("rivescript");
const client = new Discord.Client()
var bot = new Rive({
    utf8:true,
    errors:{
        replyNotFound:"Eu nao tenho resposta para isso."
    }
})




//Config
    //API key
    const config = require("./config.json")
    //AIML
    // var aimlInt = new AIML({name:"WireInterpreter",age:"42"});
    //     aimlInt.loadAIMLFilesIntoArray(["./clara.aiml"])
    bot.unicodePunctuation = new RegExp(/[.,!?;:]/g);    
    bot.loadDirectory("rivescripts").then(loading_done).catch(loading_error)

        
//Discord 
client.on("ready",()=>{
    console.log(`Logged in as ${client.user.tag}!`);
})
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
function loading_error(error,filename,lineno){
    console.log("Error: "+error)
}
client.on("message",msg=>{
    if(!msg.author.bot){
        let username = "user"
        bot.reply(username,msg.content).then((reply)=>{
            msg.reply(reply)
        }).catch((err)=>{
            msg.reply("[DEBUG] ExceptionCatcher: "+err)
            console.log("Error: "+err)
        })
    }
})

// 

client.login(config.BOT_TOKEN)