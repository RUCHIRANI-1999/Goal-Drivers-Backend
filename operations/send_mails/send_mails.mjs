import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

export async function sendMails(to , subject , body){
    dotenv.config();
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD
        }
      });   
      var mailOptions = {
        from: process.env.EMAIL,
        to: to,
        subject: subject,
        text: body,
        attachments: [
          { 
              filename: 'report.pdf',
              path: 'report.pdf'
          }
      ]
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}