import nodemailer from 'nodemailer';

export default async function forms(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    console.log(name, email, message);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT === "465", // true for 465, false for others
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: `"${name}" <${email}>`,   // show sender name + email
        to: process.env.SMTP_USER,
        subject: '📩 New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // fallback text
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
            <div style="background: #0A5B21; color: white; padding: 16px; text-align: center;">
              <h2 style="margin:0;">New Contact Form Message</h2>
            </div>
            <div style="padding: 20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <div style="padding: 12px; background: #f9f9f9; border-left: 4px solid #0A5B21; margin-top: 8px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <div style="background: #f1f1f1; padding: 12px; text-align: center; font-size: 12px; color: #555;">
              <p>This email was sent from your website's contact form.</p>
            </div>
          </div>
        `,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  }
}
