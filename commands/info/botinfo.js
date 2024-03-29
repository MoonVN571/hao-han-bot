const os = require("os");
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "botinfo",
    description: "Xem thông tin của bot",

    execute(client, message, args) {
        let temp = parseInt(os.uptime());

        let day = hours = 0, minutes = 0, seconds = 0;
        day = parseInt(((temp /86400)));
        hours = parseInt(((temp - day * 86400) / 3600));
        minutes = parseInt(((temp - day * 86400 - hours * 3600)) / 60);
        seconds = parseInt(temp % 60);
        
        message.reply({content:
            `-   **System:** ${os.type()}` + "\n"
            + `-   **Uptime:** ${day}d ${hours}h ${minutes}m ${seconds}s` + "\n"
            + `-   **Ram bot used:** ${((process.memoryUsage().heapTotal / 1024) / 1024).toFixed(2)} MB` + "\n"
            + `-   **Ram system used:** ${(((os.freemem / 1024) / 1024).toFixed(2))} MB / ${(((os.totalmem / 1024) / 1024).toFixed(2))} MB\n`
            + "-   **CPU hosting:** " + os.cpus()[0].model + "\n"
            + "-   **CPU core:** " + os.cpus().length + "\n"
            + "-   **CPU speed:** " + os.cpus()[0].speed + "MHz",allowedMentions: { repliedUser: false }
        });
    }
}
