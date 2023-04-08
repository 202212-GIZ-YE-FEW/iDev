import nodemailer from 'nodemailer';

const email = process.env.NEXT_PUBLIC_MAIL_USER;
const pass = process.env.NEXT_PUBLIC_MAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
