const client = require('../index');

client.on('ready', () => {
    console.log("Bot online!");
    
    client.user.setPresence({
        activities: [{
            name: "testing",
            type: "PLAYING"
        }]
    })   
});