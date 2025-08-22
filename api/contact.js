import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, phone, email, message } = req.body;

  try {
    // Setup transporter with Gmail App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail (from Vercel Env)
        pass: process.env.EMAIL_PASS, // Your App Password
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO, // Receiver email (your email)
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return res
      .status(200)
      .json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Error sending mail:', err);
    return res.status(500).json({ success: false, message: err.message });
  }
}
