import addDocument from "@/firebase/addData";

import { mailOptions, transporter } from "/config/nodemailer.config";

export default async function handler(req, res) {
    const { method, body } = req;
    const generateEmailContent = (data) => {
        return {
            html: `
       `,
        };
    };

    if (method === "POST") {
        try {
            const result = await addDocument("visitors_messages", { body });
            mailOptions.to = body.email;
            if (result) {
                try {
                    await transporter.sendMail({
                        ...mailOptions,
                        ...generateEmailContent(body),
                        subject: "Thank you for your contact",
                    });
                    return res.status(200).json({
                        success: 0,
                        message: "your message submitted successfully",
                    });
                } catch {
                    return res
                        .status(400)
                        .json({ success: 1, message: "Failed to Submit" });
                }
            } else {
                res.status(400).json({
                    success: 1,
                    message: "Failed to Submit",
                });
            }
        } catch (error) {
            //
        }
    }
}
