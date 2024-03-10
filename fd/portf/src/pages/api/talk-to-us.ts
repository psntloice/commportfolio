// Serverless function to handle the "Talk to us" action
import { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "maddison53@ethereal.email",
      pass: "jn7jnAPss4f63QBp6D",
    },
  });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Send an email or perform any other action
      await transporter.sendMail({
        from: 'your-email@example.com',
        to: 'recipient@example.com',
        subject: 'New message from your website',
        text: 'This is a new message from a visitor on your website.',
      });

      res.status(200).json({ success: true });
    } catch (error: any) {
      console.error('Failed to send message:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
