import nodemailer from 'nodemailer';

// Configure nodemailer with your domain SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Add CORS headers
function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
}

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    setCorsHeaders(res);
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    setCorsHeaders(res);
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  setCorsHeaders(res);

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
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error.message);
    console.error('Full error:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
