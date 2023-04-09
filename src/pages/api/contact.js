import addDocument from "@/firebase/addData";

import { mailOptions, transporter } from "/config/nodemailer.config";

export default async function handler(req, res) {
    const { method, body } = req;
    const generateEmailContent = (data) => {
        return {
            html: `
            <!DOCTYPE html>
<html lang="en">
    <head>
        <style type="text/css" media="all">
     table, tr, td {border-collapse: collapse;}
     tr { font-size:0px; line-height:0px; border-collapse: collapse; }
        </style>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
        <meta name="robots" content="noindex, nofollow">
        <title>Welcome Email</title>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet">
        <style>
body {
  margin: 0;
  padding: 0;
  mso-line-height-rule: exactly;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  font-family: "Poppins", "Graphik", "sans-serif";
 }

@media only screen and (max-width: 640px) {
	body {
		margin: 0px!important;
		padding: 0px!important;
		-webkit-text-size-adjust: none!important;
	}

}
        </style>
    </head>
    <body style="padding: 0; margin: 0; -webkit-font-smoothing:antialiased; background-color:#f1f1f1; -webkit-text-size-adjust:none;">
        <div style="max-width:640px;margin-inline:auto;">
            <div>
                <!-- <div style="background-color: #EAF8F9; padding-inline: 8rem; padding-block:1rem;">
                    <a href="https://therapistidev.netlify.app/ar" blank="_blank" style="text-decoration: none;display: flex; justify-content: center; align-items: center;">
                        <img src="./assets/logo.svg" width="40">
                        <span style="color:#1A1A1A;margin-inline:12px;font-family: 'Poppins', Arial, Helvetica, sans-serif;font-size:34px;-webkit-font-smoothing:antialiased;">Healing</span>
                    </a>
                </div> -->
                <div style="display:flex; flex-direction:column; justify-content:center;align-items:center; text-align:center;background-color: #E5E5E5;color:#1A1A1A;font-family: 'Poppins', Arial, Helvetica, sans-serif;">
                    <p style="margin-bottom:0;font-weight:600;font-size:34px;-webkit-font-smoothing:antialiased;line-height:1.2;">
                        Thank you for
                        <br>
                        reaching out
                    </p>
                    <p style="font-size:16px;-webkit-font-smoothing:antialiased;line-height:1;">We're glad you are with our community</p>
                    <img src="./assets/contact.svg" width="350" style="min-width:50%">
                </div>
            </div>
            <div style="background-color: #FBFBFB;color:#424A4F;padding-inline: 2rem;padding-block:1rem;word-break: break-all;font-size:16px;-webkit-font-smoothing:antialiased;line-height:1.2;text-align:center;">
                <p style="text-align: left;font-weight:900;font-size: 26px;">Your Message:</p>
                <div style="margin-inline:auto;padding:20px;border-radius:10px;background-color: #EAF8F9;color:#424A4F;">
                    <span>Your Name: Abrar</span>
                    <br>
                    <span>Your Email: abrar.abdulwahed@gmail.com</span>
                    <br>
                    <span>Details: Abrar</span>
                </div>
                <a href="therapistidev.netlify.app/" style="display:block;color:#1A1A1A;text-decoration:none;background-color:#2DD3E3; padding-block:10px;margin-top:10px;border-radius:6px;font-size:24px;cursor: pointer;">Visit Site</a>
            </div>
            <div style="background-color: #FBFBFB;color:#424A4F;padding-inline:2rem;padding-block:3rem;">
                <p>
                    We’ll try charging your card again in [x] days and let you know if the payment is successful.
                    <br>
                    If you have any questions or need our help, you can reply to this email.
                    <br>
                    <br>
                    Thanks,
                    <br>
                    The iDev Therapist team
                </p>
            </div>
        </div>
        <!--Main Parent Table Ends Here -->
    </body>
</html>

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
