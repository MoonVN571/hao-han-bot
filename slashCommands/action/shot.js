const { Client, CommandInteraction } = require("discord.js");
const HuyAPI = require("huyapi")
const image = new HuyAPI;

module.exports = {
    name: "shot",
    description: "Hmmm",
    type: "Chat_INPUT",
    options: [
        {
            name: "ai",
            type: "USER",
            description: "Hãy cung cấp người nào đó",
            required: false
        }
    ],

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    async execute(client, interaction, args) {
        let user = interaction.options.getMember("ai") ? interaction.options.getMember("ai").toString() : "ai đó vu vơ ";

        let img = await image.get.shot();
        if(!img) return await interaction.reply({ content: "Bot lỗi thử lại sau!", ephemeral: true });

        await interaction.reply({embeds: [{
            description: interaction.member.user.toString() + " bắn " + user.toString(),
            image: { url: img.url },
            color: "GREEN",
            timestamp: new Date()
        }], allowedMentions: { repliedUser: false }});
    }
}