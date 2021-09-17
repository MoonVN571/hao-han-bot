const client = require('../index');

client.on('messageCreate', message => {
    // ẩn bot message, tắt tin nhắn từ DM và không bắt đầu bằng prefix
    if(message.author.bot || message.channel.type == "dm" || !message.content.startsWith(client.prefix)) return;

    const args = message.content.slice(client.prefix.length).trim().split(/ +/);
    const cmdName = args.shift().toLocaleLowerCase();

    const cmd = client.commands.get(cmdName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));

    if(!cmd) return; // Không phải command sẽ thoát khỏi run command

    cmd.execute(client, message, args);
})