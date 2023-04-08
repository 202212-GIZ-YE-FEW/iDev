import addDocument from "@/firebase/addData";
export default async function handler(req, res) {
    const { method, body } = req;
    if (method === "POST") {
        try {
            await addDocument("visitors_messages", { body });
        } catch (error) {
            if (error.inner) {
                const newErrors = {};
                error.inner.forEach((e) => {
                    newErrors[e.path] = e.message;
                });
            }
        }
        // if (result) {
        //     try {
        //         await transporter.sendMail({
        //             ...mailOptions,
        //             subject: "Thank you for your contact",
        //             text: "we got your message",
        //             html: `<h1>Thank you for your contact</h1>`,
        //         });
        //         return res.status(200).json({
        //             success: 0,
        //             message: "your message submitted successfully",
        //         });
        //     } catch {
        //         return res
        //             .status(400)
        //             .json({ success: 1, message: "Failed to Submit" });
        //     }
        // } else {
        //     res.status(400).json({
        //         success: 1,
        //         message: "Failed to Submit",
        //     });
        // }
    }
}
