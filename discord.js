//Modules
const Discord = require("discord.js");
const client = new Discord.Client()
const bot = require('./bot');



//Config
    //API key
    const config = require("./config.json")    
    //Discord 
    client.on("ready",()=>{
        console.log(`Logged in as ${client.user.tag}!`);
    })


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