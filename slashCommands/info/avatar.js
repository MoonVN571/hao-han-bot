const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "avatar",
    description: "Xem websocket ping của bot",
    type: "Chat_INPUT",
    options: [
        {
            name: "user",
            type: "USER",
            description: "Cung cấp user cần xem",
            required: false
        }
    ],

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    async execute(client, interaction, args) {
        let user = interaction.options.getMember('user') ? interaction.options.getMember('user').user.id : undefined || interaction.member.user.id;

        client.users.fetch(user).then(async user => {
            await interaction.reply({embeds: [{
                title: "Ảnh của " + user.username + "",
                image: { url: user.avatarURL({ size: 1024, format: 'png' }) },
                color: "AQUA",
                timestamp: new Date()
            }], allowedMentions: { repliedUser: false }});
        });
    }
}