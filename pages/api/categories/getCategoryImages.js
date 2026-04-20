import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "@/lib/firebase";

const sanitizeCategory = (value) =>
  String(value || "")
    .trim()
    .replace(/[^a-zA-Z0-9_\-]/g, "_");

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ error: `Method '${req.method}' Not Allowed` });
  }

  try {
    const categoryName = req.query?.category;
    if (!categoryName) {
      return res.status(400).json({ error: "Category is required." });
    }

    const safeCategory = sanitizeCategory(categoryName);
    const categoryRef = ref(storage, `categories/${safeCategory}`);
    const listed = await listAll(categoryRef);

    const images = await Promise.all(
      listed.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return {
          name: itemRef.name,
          fullPath: itemRef.fullPath,
          url,
        };
      })
    );

    return res.status(200).json({
      category: safeCategory,
      total: images.length,
      images,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch category images.",
      details: error?.message || "Unknown error",
      code: error?.code || "unknown",
    });
  }
}
