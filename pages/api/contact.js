require('dotenv').config()
const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  )

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  })

  const accessToken = new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject(err, 'Failed to create access token :(')
      }
      resolve(token)
    })
  })

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    }
  })

  return transporter
}

const sendEmail = (emailOptions, error) => {
  try {
    const emailTransporter = createTransporter()
    emailTransporter.sendMail(emailOptions)
  } catch {
    console.log(error)
  }
}

sendEmail({
  subject: 'Test',
  text: 'I am sending an email from nodemailer!',
  to: 'put_email_of_the_recipient',
  from: process.env.EMAIL
})
