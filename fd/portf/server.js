// server.js
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001;

app.use(express.json());

const transporter = nodemailer.createTransport({
  // Configure your email transport here
});

app.post('/api/sendEmail', async (req, res) => {
  const { talkmail, note } = req.body;

  try {
    const info = await transporter.sendMail({
      from: 'sender@example.com',
      to: 'recipient@example.com',
      subject: 'Subject of your email',
      text: note,
    });

    console.log('Message sent: %s', info.messageId);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).send('Failed to send email');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
