import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ error: `Method '${req.method}' Not Allowed` });
  }

  try {
    console.log("Fetching images from Firebase Storage...");
    
    // Add caching headers (1 hour cache, stale-while-revalidate for 1 minute)
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=59');

    // Try to list from 'images' folder
    let imagesFolderRef = ref(storage, "images");
    let result = await listAll(imagesFolderRef);

    if (result.items.length === 0) {
      console.log("No images in 'images' folder, checking root...");
      // Fallback: check root
      imagesFolderRef = ref(storage, "");
      result = await listAll(imagesFolderRef);
    }

    console.log(`Found ${result.items.length} items in Firebase Storage.`);

    // Filter to only include common image extensions and limit to 15 images for performance
    const imageItems = result.items
      .filter(item => {
        const name = item.name.toLowerCase();
        return name.endsWith('.jpg') || name.endsWith('.jpeg') || name.endsWith('.png') || name.endsWith('.webp') || name.endsWith('.svg');
      })
      .slice(0, 15);

    if (imageItems.length === 0) {
      return res.status(200).json({
        images: [],
        message: "No images found in 'images' folder or root.",
      });
    }

    const urlPromises = imageItems.map((itemRef) => getDownloadURL(itemRef));
    const urls = await Promise.all(urlPromises);

    res.status(200).json({
      images: urls,
      message: "Fetched all images successfully!",
    });
  } catch (error) {
    console.error("Firebase Storage Error:", error);
    res.status(500).json({
      error: error.message || "Failed to fetch images.",
      code: error.code,
    });
  }
}