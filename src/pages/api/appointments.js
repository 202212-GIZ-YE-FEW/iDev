import { mailOptions, transporter } from "@/config/nodemailer";
import addDocument from "@/firebase/addData";

export default async function handler(req, res) {
  const { method } = req;
  if (method === 'POST') {
    const data = req.body;
    const result = await addDocument('appointments', data);
    if (result) {
      try {
        await transporter.sendMail({
          ...mailOptions,
          subject: 'Appointment created',
          text: 'Appointment created',
          html: `<h1>Appointment created</h1>`,
        });
        return res.status(200).json({ success: 0, message: 'Appointment created successfully' });
      } catch {
        return res.status(400).json({ success: 1, message: 'Appointment not created' });
      }
    } else {
      res.status(400).json({ success: 1, message: 'Appointment not created' });
    }
  }
};