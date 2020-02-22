const express = require('express');
const router = express.Router();
const SendSms = require("../../sms/sms");


   

router.get('/send', async (req, res) => {


    try {

       console.log("here");
         SendSms();
     } catch (error) {
        console.log("error:"+  error); 
     }
})

module.exports = router;