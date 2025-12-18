import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "apikey",
    pass: process.env.SMTP_PASSWORD,
  },
});

app.post('/api/send-email', async (req, res) => {
  const {
    to_email,
    first_name,
    last_name,
    email,
    phone,
    company,
    job_title,
    business_type,
    dealerships,
    challenges,
    timeline,
    message
  } = req.body;

  const emailBody = `
    <h2>New Demo Request</h2>
    <p>You have received a new demo request from the AutoConnect website.</p>
    <table cellpadding="5" cellspacing="0" border="1" style="border-collapse: collapse; width: 100%;">
      <tr><th style="text-align:left; background:#f5f5f5; padding:8px;">Name</th><td style="padding:8px;">${first_name} ${last_name}</td></tr>
      <tr><th style="text-align:left; background:#f5f5f5; padding:8px;">Email</th><td style="padding:8px;">${email}</td></tr>
      <tr><th style="text-align:left; background:#f5f5f5; padding:8px;">Phone</th><td style="padding:8px;">${phone}</td></tr>
      <tr><th style="text-align:left; background:#f5f5f5; padding:8px;">Company</th><td style="padding:8px;">${company}</td></tr>
      <tr><th style="text-align:left; background:#f5f5f5; padding:8px;">Job Title</th><td style="padding:8px;">${job_title}</td></tr>
      <tr><th style="text-align:left; background:#f5f5f5; padding:8px;">Business Type</th><td style="padding:8px;">${business_type}</td></tr>
      <tr><th style="text-align:left; background:#f5f5f5; padding:8px;">Dealerships</th><td style="padding:8px;">${dealerships}</td></tr>
      <tr><th style="text-align:left; background:#f5f5f5; padding:8px;">Challenges</th><td style="padding:8px;">${challenges}</td></tr>
      <tr><th style="text-align:left; background:#f5f5f5; padding:8px;">Timeline</th><td style="padding:8px;">${timeline}</td></tr>
      <tr><th style="text-align:left; background:#f5f5f5; padding:8px;">Message</th><td style="padding:8px;">${message}</td></tr>
    </table>
    <p style="margin-top:20px; color:#777; font-size:12px;">Sent via AutoConnect Node Server</p>
  `;

  try {
    const info = await transporter.sendMail({
      from: '"AutoConnect Contact" <noreply@beyond-creation.net>', // sender address
      to: "mostafa@beyond-creation.net", // list of receivers
      subject: `New Demo Request from ${first_name} ${last_name}`, // Subject line
      html: emailBody, // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
