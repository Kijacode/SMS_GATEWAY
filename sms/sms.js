const web = require("../credentiials/credential");

// Set your app credentials
const credentials = {
    apiKey: web.key,
    username: web.appname,
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

 function sendMessage() {
    console.log("send here");
    const options = {
        // Set the numbers you want to send to in international format
        to: ['+255620419226'],
        // Set your message
        message: "Welcome to Africa Stolking",
        // Set your shortCode or senderId
        // from:'Kijacode'
    }

    // That’s it, hit send and we’ll take care of the rest
    sms.send(options)
        .then(console.log)
        .catch(console.log);
}


module.exports = sendMessage;