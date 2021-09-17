const { Client, CommandInteraction } = require("discord.js");
const HuyAPI = require("huyapi")
const image = new HuyAPI;

module.exports = {
    name: "cat",
    description: "Xem ảnh mèo uwu",
    type: "Chat_INPUT",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    async execute(client, interaction, args) {
        let img = await image.get.cat();
        if(!img) return await interaction.reply({ content: "Bot lỗi thử lại sau!", ephemeral: true });

        await interaction.reply({embeds: [{
            description: "Wá đáng iu <3",
            image: { url: img.url },
            color: "GREEN",
            timestamp: new Date()
        }], allowedMentions: { repliedUser: false }});
    }
}