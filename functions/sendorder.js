// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

exports.handler = function (event, _context, callback) {
  console.log(event.body)
  const mailgun = require("mailgun.js")
  var mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
    url: "https://api.eu.mailgun.net",
  })

  // const data = JSON.stringify(event.body)
  mg.messages
    .create("czuforbence.com", {
      from: "Excited User <hello@czuforbence.com>",
      to: ["czuforbence@gmail.com"],
      subject: "Hello",
      text: "Testing some Mailgun awesomness!",
      template: "test",
      "h:X-Mailgun-Variables": event.body,
    })
    .then(msg => console.log(msg, "RESPOSZNVE")) // logs response data
    .catch(err => console.log(err, "ERR AMONNAN")) // logs any error
}
