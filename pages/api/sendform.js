export default function (req, res) {
  require('dotenv').config();
  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: parseInt(process.env.EMAIL_PORT),
    host: `${process.env.EMAIL_HOST}`,
    auth: {
      user: `${process.env.EMAIL_SENDER}`,
      pass: `${process.env.EMAIL_SENDER_PASS}`,
    },
    secure: true,
    tls: {
      rejectUnauthorized: false
  }
  });
  const mailData = {
    from: `${process.env.EMAIL_SENDER}`,
    to: `${process.env.EMAIL_SENDER}`,
    subject: `Новое обращение от ${req.body.clientName}`,
    text: `${JSON.stringify(req.body)}`,
    html: `<p>${JSON.stringify(req.body)}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) res.status(500);
    else res.status(200);
  });
  res.json({ ok: true });
}
