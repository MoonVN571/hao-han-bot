const { Permissions } = require("discord.js");

module.exports = {
    name: "pass",
    description: "Thêm role SMP Player",

    async execute(client, message, args) {
        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) return;

        if(!args[0]) return;

        let user = args[0] || message.guild.members.cache.find(user => user.username == args.join(" "));
        if(message.mentions.members.first()) user = message.mentions.members.first().id; 

        let members = message.guild.members.cache.get(user);

        if(!members) return;

        members.roles.add("884998495247929366");
        members.roles.remove("885834243270410260");

        message.reply({content: "Người chơi **" + members.user.username + "** đã vượt qua thành công!", allowedMentions: {repliedUser:false}});
    }
}