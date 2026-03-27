const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Use a Gmail App Password (not your main password)
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: 'lamakhusee@gmail.com',
    replyTo: email,
    subject: `New message from ${name} — Portfolio`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
        <h2 style="color: #4f46e5; margin-bottom: 4px;">New Portfolio Message</h2>
        <p style="color: #64748b; font-size: 14px; margin-top: 0;">Someone reached out via your portfolio contact form.</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <div style="background: #f8fafc; border-left: 3px solid #4f46e5; padding: 12px 16px; border-radius: 0 8px 8px 0; color: #334155;">
          ${message.replace(/\n/g, '<br />')}
        </div>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="color: #94a3b8; font-size: 12px;">Sent via Khushi Lama Portfolio — lamakhusee@gmail.com</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

module.exports = router;
