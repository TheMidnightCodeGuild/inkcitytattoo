import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res
      .status(405)
      .json({ error: `Method '${req.method}' Not Allowed` });
  }

  try {
    const { entryId, id } = req.body || {};

    // Support both `entryId` and `id` to stay compatible with sendEmail.js
    const targetId = entryId || id;

    if (!targetId) {
      return res
        .status(400)
        .json({ error: "Missing entryId or id in request body." });
    }

    // Use the same collection as sendEmail.js (`contact`)
    const entryRef = doc(db, "contact", targetId);
    await deleteDoc(entryRef);

    return res
      .status(200)
      .json({
        message: "Entry deleted successfully!",
        id: targetId,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "Failed to delete entry." });
  }
}

