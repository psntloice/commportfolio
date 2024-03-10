// pages/api/subscribe.tsx

import { NextApiRequest, NextApiResponse } from 'next';
import { sendConfirmationEmail } from '../../utils/email'; // Function to send confirmation email
function generateToken(length: number = 32): string {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let token = '';
  for (let i = 0; i < length; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
}
const validateEmail = (email: string | undefined): RegExpMatchArray | null => {
  if (!email) return null; // handle case where email is undefined

  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Validate email address using validator.js
    if (!email || !validateEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    

    // Generate confirmation token (you can use a library like uuid)
    const confirmationToken = generateToken();

    // Store email address and confirmation token (e.g., in a database)
    // Alternatively, you can just send the confirmation email without storing the email address

    // Send confirmation email
    sendConfirmationEmail(email, confirmationToken);

    return res.status(200).json({ message: 'Confirmation email sent' });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
