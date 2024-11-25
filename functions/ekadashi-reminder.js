const nodemailer = require("nodemailer")
const request = require("request")

const EKADASHIS = [
  {
    title: "Safala Ekadashi",
    date: "jan 7",
    body: "🍇🍎🥗",
  },
  {
    title: "Putrada Ekadashi",
    date: "jan 21",
    body: "🍇🍎🥗",
  },
  {
    title: "Shattila Ekadashi",
    date: "feb 6",
    body: "🍇🍎🥗",
  },
  {
    title: "Jaya Ekadashi",
    date: "feb 20",
    body: "🍇🍎🥗",
  },
  {
    title: "Vijaya Ekadashi",
    date: "mar 7",
    body: "🍇🍎🥗",
  },
  {
    title: "Amalki Ekadashi",
    date: "mar 20",
    body: "🍇🍎🥗",
  },
  {
    title: "Papmochani Ekadashi",
    date: "apr 5",
    body: "🍇🍎🥗",
  },
  {
    title: "Kamda Ekadashi",
    date: "apr 19",
    body: "🍇🍎🥗",
  },
  {
    title: "Varuthini Ekadashi",
    date: "may 4",
    body: "🍇🍎🥗",
  },
  {
    title: "Mohini Ekadashi",
    date: "may 19",
    body: "🍇🍎🥗",
  },
  {
    title: "Apara Ekadashi",
    date: "jun 3",
    body: "🍇🍎🥗",
  },
  {
    title: "Bhim Ekadashi",
    date: "jun 18",
    body: "🍇🍎🥗",
  },
  {
    title: "Yogini Ekadashi",
    date: "jul 2",
    body: "🍇🍎🥗",
  },
  {
    title: "Devshayani Ekadashi-Niyami Ekadashi",
    date: "jul 17",
    body: "🍇🍎🥗",
  },
  {
    title: "Kamika Ekadashi",
    date: "jul 31",
    body: "🍇🍎🥗",
  },
  {
    title: "Pavitra Ekadashi",
    date: "aug 16",
    body: "🍇🍎🥗",
  },
  {
    title: "Aja Ekadashi",
    date: "aug 29",
    body: "🍇🍎🥗",
  },
  {
    title: "Rushi Panchami in next week",
    date: "sep 1",
    body: "Remember to get a new janoi to change on Rushi Panchami (Sep 8)",
  },
  {
    title: "Rushi Panchami",
    date: "sep 8",
    body: "Remember to change your janoi",
  },
  {
    title: "Jal Jhilani Ekadashi",
    date: "sep 14",
    body: "🍇🍎🥗",
  },
  {
    title: "Indira Ekadashi",
    date: "sep 28",
    body: "🍇🍎🥗",
  },
  {
    title: "Pashankusha Ekadashi",
    date: "oct 14",
    body: "🍇🍎🥗",
  },
  {
    title: "Rama Ekadashi",
    date: "oct 28",
    body: "🍇🍎🥗",
  },
  {
    title: "Prabodhini Ekadashi",
    date: "nov 12",
    body: "🍇🍎🥗",
  },
  {
    title: "Uttpatti Ekadashi",
    date: "nov 26",
    body: "🍇🍎🥗",
  },
  {
    title: "Mokshada Ekadashi",
    date: "dec 11",
    body: "🍇🍎🥗",
  },
  {
    title: "Safala Ekadashi",
    date: "dec 26",
    body: "🍇🍎🥗",
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
  const currentDay = todaysDate.toLocaleString("en-US", {
    day: "numeric",
    timeZone: "America/New_York",
  })
  const currentDate = `${currentMonth} ${currentDay}`
  console.log(currentDate)

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
        )}</strong> is <strong><i>${capitalize(ekadashi.title)}</i></strong> ${
          ekadashi.body
        }`,
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
