const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
const server = app.listen(3001);

const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '2083e8f0',
  apiSecret: 'AhG2Qm0GxipT7EGj'
});

app.post('/', (req, res) => {
  nexmo.message.sendSms(
    447893932106,
    req.body.toNumber,
    req.body.message,
    { type: 'unicode' },
    (err, responseData) => {
      if (responseData) {
        console.log(responseData)
      }else{
        console.log(err)
        res.send(err)
      }
    }
  )
});