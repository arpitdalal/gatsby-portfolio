const nodemailer = require("nodemailer")
const request = require("request")
const chromium = require("chrome-aws-lambda")

exports.handler = async function () {
  const transporter = nodemailer.createTransport(
    `smtps://${process.env.NODEMAILER_USER}:${process.env.NODEMAILER_PASSWORD}@${process.env.NODEMAILER_HOST}`
  )

  const executablePath = process.env.NODE_ENV === "development"
    ? process.env.CHROME_EXECUTABLE_PATH
    : await chromium.executablePath

  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    executablePath,
    headless: chromium.headless,
  })

  const page = await browser.newPage()
  await page.goto("https://ais.usvisa-info.com/en-ca/niv/users/sign_in")
  await page.waitForSelector("#user_email")
  await page.waitForSelector("#user_password")
  await page.waitForSelector("#policy_confirmed")
  await page.type("#user_email", process.env.AIS_USERNAME)
  await page.type("#user_password", process.env.AIS_PASSWORD)
  await page.evaluate(() => {
    document.querySelector("#policy_confirmed").click()
  })
  await page.evaluate(() => {
    document.querySelector("input[type='submit']").click()
  })
  await page.waitForSelector("[role='menuitem'] > .button.primary.small")

  // Calgary
  await page.goto(
    "https://ais.usvisa-info.com/en-ca/niv/schedule/41501222/appointment/days/89.json?appointments[expedite]=false"
  )
  await page.waitForSelector("body > pre")
  const calData = await page.$eval("body > pre", e => e.innerText)
  const calJson = JSON.parse(calData)
  let calgary = calJson.map(item => item.date)
  if (calgary.length <= 0) {
    calgary = ["No dates available"]
  }

  // Halifax
  await page.goto(
    "https://ais.usvisa-info.com/en-ca/niv/schedule/41501222/appointment/days/90.json?appointments[expedite]=false"
  )
  await page.waitForSelector("body > pre")
  const halData = await page.$eval("body > pre", e => e.innerText)
  const halJson = JSON.parse(halData)
  let halifax = halJson.map(item => item.date)
  if (halifax.length <= 0) {
    halifax = ["No dates available"]
  }

  // Montreal
  await page.goto(
    "https://ais.usvisa-info.com/en-ca/niv/schedule/41501222/appointment/days/91.json?appointments[expedite]=false"
  )
  await page.waitForSelector("body > pre")
  const monData = await page.$eval("body > pre", e => e.innerText)
  const monJson = JSON.parse(monData)
  let montreal = monJson.map(item => item.date)
  if (montreal.length <= 0) {
    montreal = ["No dates available"]
  }

  // Ottawa
  await page.goto(
    "https://ais.usvisa-info.com/en-ca/niv/schedule/41501222/appointment/days/92.json?appointments[expedite]=false"
  )
  await page.waitForSelector("body > pre")
  const ottData = await page.$eval("body > pre", e => e.innerText)
  const ottJson = JSON.parse(ottData)
  let ottawa = ottJson.map(item => item.date)
  if (ottawa.length <= 0) {
    ottawa = ["No dates available"]
  }

  // Quebec
  await page.goto(
    "https://ais.usvisa-info.com/en-ca/niv/schedule/41501222/appointment/days/93.json?appointments[expedite]=false"
  )
  await page.waitForSelector("body > pre")
  const queData = await page.$eval("body > pre", e => e.innerText)
  const queJson = JSON.parse(queData)
  let quebec = queJson.map(item => item.date)
  if (quebec.length <= 0) {
    quebec = ["No dates available"]
  }

  // Toronto
  await page.goto(
    "https://ais.usvisa-info.com/en-ca/niv/schedule/41501222/appointment/days/94.json?appointments[expedite]=false"
  )
  await page.waitForSelector("body > pre")
  const torData = await page.$eval("body > pre", e => e.innerText)
  const torJson = JSON.parse(torData)
  let toronto = torJson.map(item => item.date)
  if (toronto.length <= 0) {
    toronto = ["No dates available"]
  }

  // Vancouver
  await page.goto(
    "https://ais.usvisa-info.com/en-ca/niv/schedule/41501222/appointment/days/95.json?appointments[expedite]=false"
  )
  await page.waitForSelector("body > pre")
  const vanData = await page.$eval("body > pre", e => e.innerText)
  const vanJson = JSON.parse(vanData)
  let vancouver = vanJson.map(item => item.date)
  if (vancouver.length <= 0) {
    vancouver = ["No dates available"]
  }

  await browser.close()

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
        text: `<strong>📅 Available USA B1/B2 visa dates are</strong>
          \n<strong>Toronto</strong>\n${toronto
            .toString()
            .replaceAll(",", ",\n")}
          \n<strong>Calgary</strong>\n${calgary
            .toString()
            .replaceAll(",", ",\n")}
          \n<strong>Halifax</strong>\n${halifax
            .toString()
            .replaceAll(",", ",\n")}
          \n<strong>Montreal</strong>\n${montreal
            .toString()
            .replaceAll(",", ",\n")}
          \n<strong>Ottawa</strong>\n${ottawa.toString().replaceAll(",", ",\n")}
          \n<strong>Quebec</strong>\n${quebec.toString().replaceAll(",", ",\n")}
          \n<strong>Vancouver</strong>\n${vancouver
            .toString()
            .replaceAll(",", ",\n")}`,
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
