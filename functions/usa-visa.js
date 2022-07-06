const nodemailer = require("nodemailer")
const request = require("request")

exports.handler = async function (event) {
  const transporter = nodemailer.createTransport(
    `smtps://${process.env.NODEMAILER_USER}:${process.env.NODEMAILER_PASSWORD}@${process.env.NODEMAILER_HOST}`
  )

  let toronto = JSON.parse(event.queryStringParameters.toronto)
  toronto = toronto.map(item => item.date)

  let calgary = JSON.parse(event.queryStringParameters.calgary)
  calgary = calgary.map(item => item.date)

  let halifax = JSON.parse(event.queryStringParameters.halifax)
  halifax = halifax.map(item => item.date)

  let montreal = JSON.parse(event.queryStringParameters.montreal)
  montreal = montreal.map(item => item.date)

  let ottawa = JSON.parse(event.queryStringParameters.ottawa)
  ottawa = ottawa.map(item => item.date)

  let quebec = JSON.parse(event.queryStringParameters.quebec)
  quebec = quebec.map(item => item.date)

  let vancouver = JSON.parse(event.queryStringParameters.vancouver)
  vancouver = vancouver.map(item => item.date)

  return await sendNotification(
    toronto,
    calgary,
    halifax,
    montreal,
    ottawa,
    quebec,
    vancouver
  )
    .then(() => {
      return {
        statusCode: 200,
        body: "Notification sent",
      }
    })
    .catch(error => {
      // SEND AN EMAIL ABOUT THE ERROR TO ARPITDALALM@GMAIL.COM
      const messageOptions = {
        from: "arpitdalalm@gmail.com",
        to: "arpitdalalm@gmail.com",
        subject: "ERROR MESSAGE FROM US VISA BOT",
        text: `Couldn't send the the notification to the channel! ERROR: ${error}!`,
      }
      transporter.sendMail(messageOptions, err => {
        if (err) {
          console.log(`Email error: ${err}`)
        }
      })
      return {
        statusCode: 400,
        body: `Error: ${error}`,
      }
    })
}

function sendNotification(
  toronto,
  calgary,
  halifax,
  montreal,
  ottawa,
  quebec,
  vancouver
) {
  return new Promise((resolve, reject) => {
    try {
      const data = {
        chat_id: process.env.TELEGRAM_GROUP_ID_US,
        parse_mode: "HTML",
        text: `<strong>📅 US Visa dates available are</strong>
          \n<strong>Toronto</strong>\n${toronto.toString().replace(",", ", ")}
          \n<strong>Calgary</strong>\n${calgary.toString()}
          \n<strong>Halifax</strong>\n${halifax.toString()}
          \n<strong>Montreal</strong>\n${montreal.toString()}
          \n<strong>Ottawa</strong>\n${ottawa.toString()}
          \n<strong>Quebec</strong>\n${quebec.toString()}
          \n<strong>Vancouver</strong>\n${vancouver.toString()}`,
      }

      request(
        {
          uri: `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN_US}/sendMessage`,
          method: "POST",
          json: data,
        },
        err => {
          if (!err) {
            resolve("done!")
          } else {
            console.error(err)
            reject(err)
          }
        }
      )
    } catch (err) {
      reject(err)
    }
  })
}
