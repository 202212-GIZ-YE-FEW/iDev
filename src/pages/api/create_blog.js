import addDocument from "@/firebase/addData";
export default async function handler(req, res) {
    const { method, body } = req;
    if (method === "POST") {
        try {
            const result = await addDocument("blogs", { body });
            return res.status(200).json({
                success: 0,
                message: "Your data submitted successfully",
            });
        } catch (error) {
            return res
                .status(400)
                .json({ success: 1, message: "Failed to Submit" });
        }
    }
}
