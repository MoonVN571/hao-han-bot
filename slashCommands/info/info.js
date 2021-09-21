module.exports = {
    name: "info",
    description: "Xem cấu hình của server",

    async execute(client, interaction, args) {
        interaction.reply({embeds: [{
            title: "SERVER INFO",
            description: "Thông tin Hosting của server.",
            fields: [
                {
                    name: "CPU",
                    value: "Intel Xeon Platium 8124M @ 3.00Ghz",
                    inline: false,
                },
                {
                    name: "MEMORY",
                    value: "16 Ram",
                    inline: false
                },
                {
                    name: "DISK",
                    value: "100GB",
                    inline: false
                }
            ],
            color: "GREEN",
            timestamp: new Date()
        }], allowedMentions: { repliedUser: false } });
    }
}
