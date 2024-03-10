const nodemailer = require('nodemailer');

// Create a transporter using SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 456,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'qrevvloice@gmail.com',
    pass: 'Qrcode547acc',
  },
});

// Define email options
const mailOptions = {
  from: 'qrevvloice@gmail.com',
  to: 'nyandiakamau24@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent using Nodemailer.',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error occurred:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
