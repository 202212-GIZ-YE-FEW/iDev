import { mailOptions, transporter } from "@/config/nodemailer";
import setDocument from "@/firebase/setData";

export default async function handler(req, res) {
    const { method } = req;
    if (method === "POST") {
        const data = req.body;
        const result = await setDocument(`users_tickets/${data.user_id}/`, {
            num_of_tickets: data.num_of_tickets,
        });
        if (result) {
            const total =
                parseFloat(data.ticket.price) *
                parseInt(data.ticket.number_of_tickets);
            try {
                await transporter.sendMail({
                    ...mailOptions,
                    to: data.user_email,
                    subject: "Ticket purchased",
                    text: "Your ticket has been purchased",
                    html: `<div>
              <h1>Ticket purchased</h1>
              <p>Number of tickets: ${data.ticket.number_of_tickets}</p>
              <p>Price: ${data.ticket.price}</p>
              <p>Total: ${total}</p>
              <p>Thank you for your purchase</p>
          </div>`,
                });
                return res.status(200).json({
                    success: 0,
                    message: "ticketPurchased",
                });
            } catch (err) {
                return res
                    .status(400)
                    .json({ success: 1, message: "ticketNotPurchased" });
            }
        } else {
            res.status(400).json({
                success: 1,
                message: "ticketNotPurchased",
            });
        }
    }
}
