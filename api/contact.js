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

    // await transporter.sendMail({
    //   from: email,
    //   to: process.env.EMAIL_TO, // Receiver email (your email)
    //   subject: `New Contact Form Message from ${name}`,
    //   text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
    // });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO,
      subject: `📩 New Contact Form Message from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`, // fallback text
      html: `
    <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <div style="background: #4CAF50; color: white; padding: 15px; text-align: center;">
          <h2 style="margin: 0;">New Contact Form Message</h2>
        </div>
        <div style="padding: 20px; color: #333;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f1f1f1; padding: 10px; border-radius: 5px; margin-top: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <div style="background: #f1f1f1; padding: 10px; text-align: center; font-size: 12px; color: #666;">
          <p style="margin: 0;">This email was sent from your website contact form.</p>
        </div>
      </div>
    </div>
  `,
    });

    return res
      .status(200)
      .json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Error sending mail:', err);
    return res.status(500).json({ success: false, message: err.message });
  }
}
