import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ error: `Method '${req.method}' Not Allowed` });
  }

  try {
    // Reference to the 'images' folder in Firebase Storage
    const imagesFolderRef = ref(storage, "images/");
    // List all items (files) in the folder
    const result = await listAll(imagesFolderRef);

    // Get URLs for each image file
    const urlPromises = result.items.map(itemRef => getDownloadURL(itemRef));
    const urls = await Promise.all(urlPromises);

    res.status(200).json({
      images: urls,
      message: "Fetched all images successfully!",
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message || "Failed to fetch images." });
  }
}