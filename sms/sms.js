const web = require("../credentiials/credential");
const axios = require('axios');

const request = require("request");

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


 


 async function bongoliveSendSms(){
     const bongolive_key = "";
    console.log("in option fuc")
// Make a request for a user with a given ID
axios.get('http://www.bongolive.co.tz/api/sendSMS.php?sendername=255620419226&username=kijadanford&password=buni@2020&apikey='+bongolive_key + '&destnum=255620419226&message=najaribisha&senddate='  )
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
       
        
        
       
}




module.exports = {sendMessage,bongoliveSendSms};
