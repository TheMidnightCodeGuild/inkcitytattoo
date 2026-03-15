import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ error: `Method '${req.method}' Not Allowed` });
  }

  try {
    // Use the same collection and timestamp field as sendEmail.js
    const entriesCol = collection(db, "contact");
    const entriesQuery = query(entriesCol, orderBy("timestamp", "desc"));
    const snapshot = await getDocs(entriesQuery);

    const entries = snapshot.docs.map((doc) => ({
      // Primary id field used by sendEmail.js responses
      id: doc.id,
      // Backwards-compatible alias if older frontend code expects `entryId`
      entryId: doc.id,
      ...doc.data(),
    }));

    return res.status(200).json({
      entries,
      message: "Fetched all entries successfully!",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "Failed to fetch entries." });
  }
}

