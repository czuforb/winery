// Gatsby uses weird config stuff
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
  
  // Connect to our Mailgun API wrapper and instantiate it
  const mailgun = require("mailgun-js")
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
    url: process.env.MAILGUN_URL,
  })
  
  // Our cloud function
  exports.handler = function(event, context, callback) {
    let mailOptions = {
      from: `SEXY_BOY_69 <sex@sex.com>`,
      to: "kingus.varga@gmail.com",
      subject: "A legszebb lánynak a világon",
      text: "TEMPLATE!!!",
      template: "test",
      "h:X-Mailgun-Variables": JSON.stringify({
        array: [
          {
            one: "vörös",
            two: "száraz",
          },
          {
            one: "rozé",
            two: "száraz",
          },
          {
            one: "félszáraz",
            two: "fehér",
          },
        ],
      }),
    }
  
    // It's really as simple as this,
    // directly from the Mailgun dashboard
  
    mg.messages().send(mailOptions, (error, body) => {
      if (error) {
        console.log(error)
        callback(null, {
          statusCode: 500,
          body: "FOS",
        })
      } else {
        console.log(body)
        callback(null, {
          statusCode: 200,
          body: "FASZA",
        })
      }
    })
  }
  