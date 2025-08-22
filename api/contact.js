import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  try {
    const { name, phone, email, message } = req.body;

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO,
      subject: `📩 New Contact Form Message from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`, // Fallback for plain text
      html: `
    <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333; max-width:600px; margin:auto; padding:20px; border:1px solid #ddd; border-radius:8px;">
      <h2 style="color:#007BFF; margin-bottom:10px;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <div style="margin-top:20px;">
        <p><strong>Message:</strong></p>
        <div style="background:#f9f9f9; padding:15px; border-radius:6px; border:1px solid #eee;">
          ${message.replace(/\n/g, '<br>')}
        </div>
      </div>
      <p style="margin-top:30px; font-size:12px; color:#666;">This message was sent via your website’s contact form.</p>
    </div>
  `,
    });

    await transporter.sendMail({
      from: email, // sender (user input)
      to: process.env.EMAIL_TO, // your receiving email
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res
      .status(200)
      .json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
