import { mailOptions, transporter } from "@/config/nodemailer";
import addDocument from "@/firebase/addData";
import create_chat from "@/utils/create_chat";
export default async function handler(req, res) {
    const { method } = req;
    if (method === "POST") {
        const data = req.body;
        const result = await addDocument("appointments", data.values);
        if (result) {
            try {
                const result = create_chat(data.values.participants);
                await transporter.sendMail({
                    ...mailOptions,
                    to: data.user_email,
                    subject: "Appointment created",
                    text: "Appointment created",
                    html: `<h1>Appointment created</h1>`,
                });
                return res.status(200).json({
                    success: 0,
                    message: "appointmentBooked",
                    // chatRef: result.result.id,
                });
            } catch {
                return res
                    .status(400)
                    .json({ success: 1, message: "appointmentNotBooked" });
            }
        } else {
            res.status(400).json({
                success: 1,
                message: "appointmentNotBooked",
            });
        }
    }
}
