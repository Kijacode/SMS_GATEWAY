const express = require('express');
const router = express.Router();
const cendSms = require("../../sms/sms");
const SendSms = cendSms.sendMessage;
const BongLive = cendSms.bongoliveSendSms;

   

router.get('/send', async (req, res) => {


    try {

       console.log("here");
         SendSms();
     } catch (error) {
        console.log("error:"+  error); 
     }
})


router.get("/bongolive",async (req,res) => {
   console.log("start");
   await BongLive();
})

module.exports = router;