const nodemailer = require("nodemailer")

exports.handler = function (event, context, callback) {
  const transporter = nodemailer.createTransport(
    `smtps://${process.env.NODEMAILER_USER}:${process.env.NODEMAILER_PASSWORD}@${process.env.NODEMAILER_HOST}`
  )
  const messageOptions = {
    from: "arpitdalalm@gmail.com",
    to: "arpitdalalm@gmail.com",
    subject: "US Visa dates available at Toronto office",
    text: "US Visa dates available at Toronto office",
  }

  transporter.sendMail(messageOptions, error => {
    if (error) {
      callback(null, {
        statusCode: 500,
        body: `Something went wrong. Email Error: ${error}`,
      })
    } else {
      callback(null, {
        statusCode: 200,
        body: "Notification sent",
      })
    }
  })
}
