const { Client, CommandInteraction } = require("discord.js");
const HuyAPI = require("huyapi")
const image = new HuyAPI;

module.exports = {
    name: "kiss",
    description: "Thơm ai đó <3",
    type: "Chat_INPUT",
    options: [
        {
            name: "ai",
            type: "USER",
            description: "Hãy cung cấp người nào đó để hun",
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

        let img = await image.get.kiss();
        if(!img) return await interaction.reply({ content: "Bot lỗi thử lại sau!", ephemeral: true });

        await interaction.reply({embeds: [{
            description: interaction.member.user.toString() + " thơm " + user.toString() + " <3",
            image: { url: img.url },
            color: "GREEN",
            timestamp: new Date()
        }], allowedMentions: { repliedUser: false }});
    }
}