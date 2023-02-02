const nodemailer = require("nodemailer")
const request = require("request")

const EKADASHIS = [
  {
    title: "Putrada Ekadashi",
    date: "jan 13",
  },
  {
    title: "Shattila Ekadashi",
    date: "jan 28",
  },
  {
    title: "Jaya Ekadashi",
    date: "feb 12",
  },
  {
    title: "Vijaya Ekadashi",
    date: "feb 27",
  },
  {
    title: "Amalki Ekadashi",
    date: "mar 14",
  },
  {
    title: "Papmochani Ekadashi",
    date: "mar 28",
  },
  {
    title: "Kamda Ekadashi",
    date: "apr 12",
  },
  {
    title: "Varuthini Ekadashi",
    date: "apr 26",
  },
  {
    title: "Mohini Ekadashi",
    date: "may 12",
  },
  {
    title: "Apara Ekadashi",
    date: "may 26",
  },
  {
    title: "Bhim Ekadashi",
    date: "jun 11",
  },
  {
    title: "Yogini Ekadashi",
    date: "jun 24",
  },
  {
    title: "Devshayani Ekadashi-Niyami Ekadashi",
    date: "jul 10",
  },
  {
    title: "Kamika Ekadashi",
    date: "jul 24",
  },
  {
    title: "Pavitra Ekadashi",
    date: "aug 8",
  },
  {
    title: "Aja Ekadashi",
    date: "aug 23",
  },
  {
    title: "Jal Jhilani Ekadashi",
    date: "sep 7",
  },
  {
    title: "Indira Ekadashi",
    date: "sep 21",
  },
  {
    title: "Pashankusha Ekadashi",
    date: "oct 6",
  },
  {
    title: "Rama Ekadashi",
    date: "oct 21",
  },
  {
    title: "Prabodhini Ekadashi",
    date: "nov 4",
  },
  {
    title: "Uttpatti Ekadashi",
    date: "nov 20",
  },
  {
    title: "Mokshada Ekadashi - Geeta Jayanti",
    date: "dec 4",
  },
  {
    title: "Safala Ekadashi",
    date: "dec 19",
  },
]

const transporter = nodemailer.createTransport(
  `smtps://${process.env.NODEMAILER_USER}:${process.env.NODEMAILER_PASSWORD}@${process.env.NODEMAILER_HOST}`
)

exports.handler = async function () {
  const todaysDate = new Date()
  const currentMonth = todaysDate.toLocaleString("en-US", {
    month: "short",
    timeZone: "America/New_York",
  })
  const currentDay = todaysDate.getDate()
  const currentDate = `${currentMonth} ${currentDay}`
  console.log(todaysDate)

  if (EKADASHIS.length === 0) {
    const messageOptions = {
      from: "arpitdalalm@gmail.com",
      to: "arpitdalalm@gmail.com",
      subject: "ERROR MESSAGE FROM EKADASHI REMINDER BOT",
      text: `EKADASHIS constant is empty! Visit https://github.com/arpitdalal/gatsby-portfolio/tree/main/functions/ekadashi-reminder.js to add Ekadashis.`,
    }
    transporter.sendMail(messageOptions, error => {
      if (error) {
        console.log(error)
      }
    })

    return {
      statusCode: 400,
      body: "Ekadashis empty",
    }
  }

  for (let i = 0; i < EKADASHIS.length; i++) {
    const ekadashi = EKADASHIS[i]

    if (ekadashi.date.toLowerCase() === currentDate.toLowerCase()) {
      return await sendNotification(ekadashi)
        .then(() => {
          console.log(`Notification sent for ${ekadashi.title}`)
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
            subject: "ERROR MESSAGE FROM EKADASHI REMINDER BOT",
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
  }
  return {
    statusCode: 200,
    body: "Not an Ekadashi day",
  }
}

function sendNotification(ekadashi) {
  return new Promise((resolve, reject) => {
    try {
      const data = {
        chat_id: process.env.TELEGRAM_GROUP_ID,
        parse_mode: "HTML",
        text: `📅 <strong>Reminder</strong>\nToday - <strong>${capitalize(
          ekadashi.date
        )}</strong> is <strong><i>${capitalize(
          ekadashi.title
        )}</i></strong> 🍇🍎🥗`,
      }

      request(
        {
          uri: `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
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

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
