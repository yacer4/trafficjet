import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:8080',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:8080',
  'https://trafficjet.media',
  'https://www.trafficjet.media',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());

// Test endpoint
app.post('/api/test', (req, res) => {
  console.log('TEST ENDPOINT HIT');
  res.json({ message: 'Server is working!' });
});

// Configure nodemailer with your domain SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Contact form received:', req.body);
    const { name, email, business, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Validation failed - missing fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }
    console.log('Validation passed, attempting to send emails...');

    // Email to admin
    const adminMailOptions = {
      from: process.env.SMTP_FROM,
      to: 'support@trafficjet.media',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business:</strong> ${business || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'We received your message - Traffic Jet Media',
      html: `
        <h2>Thank you for contacting Traffic Jet Media!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you as soon as possible.</p>
        <p>In the meantime, feel free to reach out to us at support@trafficjet.media or call +971 50 234 9724.</p>
        <br>
        <p>Best regards,<br>Traffic Jet Media Team</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    console.log('Emails sent successfully!');
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error.message);
    console.error('Full error:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CORS enabled for: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
  console.log(`SMTP Host: ${process.env.SMTP_HOST}`);
  console.log(`SMTP Port: ${process.env.SMTP_PORT}`);
});
