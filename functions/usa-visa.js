const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport(
  `smtps://${process.env.NODEMAILER_USER}:${process.env.NODEMAILER_PASSWORD}@${process.env.NODEMAILER_HOST}`
)

exports.handler = async function () {
  const messageOptions = {
    from: "arpitdalalm@gmail.com",
    to: "arpitdalalm@gmail.com",
    subject: "US Visa dates available at Toronto office",
    text: "US Visa dates available at Toronto office",
  }
  try {
    return transporter.sendMail(messageOptions, err => {
      if (err) {
        console.log(`Email error: ${err}`)
        return {
          statusCode: 500,
          body: "Something went wrong",
        }
      } else {
        return {
          statusCode: 200,
          body: "Notification sent",
        }
      }
    })
  } catch (error) {
    console.log("Error: ", error)
    return {
      statusCode: 500,
      body: "Something went wrong",
    }
  }
}
