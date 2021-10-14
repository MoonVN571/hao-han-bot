const { Permissions } = require("discord.js");

module.exports = {
    name: "pass",
    description: "Thêm role SMP Player",
    type: "Chat_INPUT",
    options: [
        {
            name: "user",
            type: "USER",
            description: "Nhập User",
            required: true
        }
    ],

    async execute(client, interaction, args) {
        if(!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) return await interaction.reply({content: "Bạn không có quyền để sử dụng lệnh này!", ephemeral:true});
        let members = interaction.options.getMember("user");

        if(!members) return;

        members.roles.add("884998495247929366");
        members.roles.remove("885834243270410260");

        interaction.reply({content: "Người chơi **" + members.user.username + "** đã vượt qua thành công!"});
    }
}