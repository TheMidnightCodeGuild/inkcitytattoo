import { deleteObject, ref } from "firebase/storage";
import { storage } from "@/lib/firebase";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res
      .status(405)
      .json({ error: `Method '${req.method}' Not Allowed` });
  }

  try {
    const { fullPath } = req.body || {};
    if (!fullPath || typeof fullPath !== "string") {
      return res.status(400).json({ error: "Image path is required." });
    }

    if (!fullPath.startsWith("categories/")) {
      return res.status(400).json({ error: "Invalid image path." });
    }

    await deleteObject(ref(storage, fullPath));

    return res.status(200).json({
      message: "Image deleted successfully.",
      fullPath,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to delete image.",
      details: error?.message || "Unknown error",
      code: error?.code || "unknown",
    });
  }
}
