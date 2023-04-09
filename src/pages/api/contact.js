import ContactSVG from "public/contactus.svg";

import addDocument from "@/firebase/addData";

import { TransactionalTemplate } from "../../template/TransactionalEmail";

import { mailOptions, transporter } from "/config/nodemailer.config";
export default async function handler(req, res) {
    const { method, body } = req;
    const generateEmailContent = (data) => {
        return {
            html: TransactionalTemplate(
                "reaching out",
                "We're glad you are with our community",
                ContactSVG,
                `
                <p style="text-align: left; font-weight: 900; font-size: 26px">
                    Your Message:
                </p>
                <div style="
                        margin-inline: auto;
                        padding: 20px;
                        border-radius: 10px;
                        background-color: #eaf8f9;
                        color: #424a4f;
                    ">
                    <span>Your Name: ${data.fullName}</span>
                    <br>
                    <span>Your Email: ${data.email}</span>
                    <br>
                    <span>Details: ${data.details}</span>
                </div>
                <a href="therapistidev.netlify.app/" style="
                        display: block;
                        color: #1a1a1a;
                        text-decoration: none;
                        background-color: #2dd3e3;
                        padding-top: 10px;
                        padding-bottom: 10px;
                        margin-top: 10px;
                        border-radius: 6px;
                        font-size: 24px;
                        cursor: pointer;
                    ">
                    Visit Site
                </a>`
            ),
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
                        message: "Your message submitted successfully",
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
