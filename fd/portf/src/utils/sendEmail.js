const nodemailer = require('nodemailer');

// Create a transporter using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.NODEMAIL_HOST,
  port: process.env.NODEMAIL_PORT,
  secure: process.env.NODEMAIL_SECURE, // true for 465, false for other ports
  auth: {
    user: process.env.NODEMAIL_MAILER,
    pass: process.env.NODEMAIL_PS,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Qrevv Softwares 😊" <process.env.NODEMAIL_MAILER>', // sender address
    to: "nyandiakamau24@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);