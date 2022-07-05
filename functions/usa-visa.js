const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport(
  `smtps://${process.env.NODEMAILER_USER}:${process.env.NODEMAILER_PASSWORD}@${process.env.NODEMAILER_HOST}`
)

exports.handler = async function (callback) {
  const messageOptions = {
    from: "arpitdalalm@gmail.com",
    to: "arpitdalalm@gmail.com",
    subject: "US Visa dates available at Toronto office",
    text: "US Visa dates available at Toronto office",
  }
  try {
    transporter.sendMail(messageOptions, err => {
      if (err) {
        console.log(`Email error: ${err}`)
        callback(null, {
          statusCode: 500,
          body: `Something went wrong. Email Error: ${err}`,
        })
      } else {
        callback(null, {
          statusCode: 200,
          body: "Notification sent",
        })
      }
    })
  } catch (error) {
    console.log("Error: ", error)
    callback(null, {
      statusCode: 500,
      body: `Something went wrong. Error: ${error}`,
    })
  }
}
