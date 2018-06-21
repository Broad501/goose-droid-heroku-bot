const Discord = require("discord.js");
const client = new Discord.Client();

const TOKEN = process.env.TOKEN;
const PREFIX = "?"

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "Fuck you"
];

var bot = new Discord.Client();

var servers = {}client.on("ready", function() {
    console.log("Ready");
});

client.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    if (message.content.startsWith(PREFIX + 'ping')) {
        message.channel.sendMessage('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
    }
    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("")
            break;      
        case "info":
            message.channel.sendMessage("Hello! I am a bot created by Jag (Robert Aqua). My first line of code was writen on `6/17/2018 at 19:21`.");
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Can't read that");
            break;
        case "embed":
            var embed = new Discord.RichEmbed()
                .setColor("#4286f4")
                .setTitle("Test")
                .addField("Test", "Test", true)
                .addField("Test", "Test", true)
                .addField("Test", "Test")
                .setFooter("*Kys*")
            message.channel.sendEmbed(embed);
            break;
        case "roster":
            var embed = new Discord.RichEmbed()
                .setColor("00daff")
                .setTitle("Engineering Corp Roster")
                .addField("Chief of Engineering", "Jag (Robert Aqua)")
                .addField("Assistant Chief of Engineering", "Stinger")
                .addField("Engineering Officer", "Gand and Ginatonic")
                .addField("Engineer", "N/A")
                .addField("Engineering Recruit", "Piper")
                .setThumbnail("https://i.imgur.com/HlOntKT.jpg")
            message.channel.sendEmbed(embed);
            break;
        case "help":
            var embed = new Discord.RichEmbed()
                .setColor("FF6A00")
                .setTitle("**Commands**")
                .addField("8ball", "`?8ball [Question]`")
                .addField("Info", "Tells you a bit about this fabulous bot!")
                .addField("Ping", "Tells you your ping(ms).")
                .addField("Roster", "Shows the curent Engineering Corp roster.")
                .setFooter("*More commands comming soon*")
            message.channel.sendEmbed(embed);
            break;
        default:
            message.channel.sendMessage("Invalid command. If you need to know a command use ?help for a command list.");
    }
});

client.login(TOKEN);
