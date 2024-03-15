import { NextApiRequest, NextApiResponse } from 'next';

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


// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'POST') {
//     console.log('this loice failed');
//     const { talkmail } = req.body;
//     const {  note } = req.body;
//     console.log(talkmail);

//     try {
//       console.log(note);
//       console.log('this loice failed');

//       console.log(talkmail);

//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from:  talkmail, // sender address
//     to: process.env.NODEMAIL_MAILER, // list of receivers
//     subject: "Qrevv Softwares 😊", // Subject line
//     text: note, // plain text body
//   });

//   console.log("Message sent: %s", info.messageId);

//     }
//     catch (error: any) {
//       console.log(talkmail);
//       console.log('this me failed');

//       console.error('Failed to subscribe user:', error);
//       res.status(500).json({ success: false, error: error.message });
//     }

//   }
//    else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
//   }

  // Define your custom handler function
async function sendEmailHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 
  // async function main() wrapper
  async function main() {
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
      to: "nyandiakamau24@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    if (req.method === 'POST') {
      console.log('this loice failed');
      const { talkmail } = req.body;
      const {  note } = req.body;
      console.log(talkmail);
    try {
      console.log(note);
            console.log('this loice failed');
      // send mail with defined transport object
      // const info = await transporter.sendMail({
      //   from:  talkmail, // sender address
      //   to: process.env.NODEMAIL_MAILER, // list of receivers
      //   subject: "Qrevv Softwares 😊", // Subject line
      //   text: note, // plain text body
      // });
    
      console.log("Message sent: %s", info.messageId);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Failed to send message:', error);
      // res.status(500).json({ success: false, error: error.message });
    }
  }
  else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
  // Call the main function
}
main().catch(console.error);

   
  }
// Export your custom handler function
export default sendEmailHandler;




