const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "nsfw",
    description: "Lệnh 18+",
    type: "Chat_INPUT",
    options: [
        {
            name: "type",
            type: "STRING",
            description: "Chọn loại NSFW bạn muốn!",
            required: true
        }
    ],

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    async execute(client, interaction, args) {
        if(interaction.channel.type !== "nswf") return await interaction.reply({ content: "Cút vào kênh NSFW mà xài đi", ephemeral: false });

        let type = interaction.options.get("Loại");

        interaction.reply("Server không có NFSW nên không làm lệnh này:))");
    }
}