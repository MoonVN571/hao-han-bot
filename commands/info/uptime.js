module.exports = {
    name: "uptime",
    aliases: ['ut'],
    
    async execute(client, message, args) {
        let temp = parseInt(process.uptime());

        let day = hours = 0, minutes = 0, seconds = 0;
        hours = parseInt(((temp - day * 86400) / 3600));
        minutes = parseInt(((temp - day * 86400 - hours * 3600)) / 60);
        seconds = parseInt(temp % 60);

        message.reply({content: "Hosting uptime **" + hours + "H " + minutes + "M " + seconds + "S**.", allowedMentions: { repliedUser: false }});
    }
}