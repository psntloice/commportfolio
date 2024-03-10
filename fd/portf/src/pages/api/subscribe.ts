import { NextApiRequest, NextApiResponse } from 'next';
const mailchimp = require("@mailchimp/mailchimp_marketing");
// Initialize Mailchimp with your API key
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      // Subscribe the user to your Mailchimp list
      const response = await mailchimp.lists.addListMember(
        process.env.MAILCHIMP_AUDIENCE_ID,
        {
          email_address: email,
          status: 'subscribed',
        }
      );

      console.log('User subscribed:', response);
      res.status(200).json({ success: true });
    }  catch (error: any) {
      console.error('Failed to subscribe user:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
