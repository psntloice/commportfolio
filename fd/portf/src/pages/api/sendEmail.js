// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.NODEMAIL_HOST,
    port: 587,
  secure: false,
  auth: {
    user: process.env.NODEMAIL_MAILER,
    pass: process.env.NODEMAIL_PS,
  },
});

async function sendEmail(talkmail, note) {
  try {
    const info = await transporter.sendMail({
      from: `${talkmail}`,
      to: "nyandiakamau24@gmail.com",
      subject: "Qrevv Softwares 😊",
            text: `Message: ${note}\nContact: ${talkmail}`,
      // text: `${note}`,

    });
    console.log("Message sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { talkmail, note } = req.body;

    try {
      const result = await sendEmail(talkmail, note);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
