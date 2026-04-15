import multer from "multer";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";

// Configure multer for in-memory storage (since we'll upload buffer)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // Max file size: 10MB
});

// Disable Next.js bodyParser for this API route (for multer to work)
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper to run middleware
const runMiddleware = (req, res, fn) =>
  new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: `Method '${req.method}' Not Allowed` });
  }

  try {
    // Accept single image file with field 'image'
    await runMiddleware(req, res, upload.single("image"));

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }

    // Category name should be provided (in body or query)
    let category;
    if (req.body && req.body.category) {
      category = req.body.category;
    } else if (req.query && req.query.category) {
      category = req.query.category;
    } else {
      return res.status(400).json({ error: "Category name is required." });
    }

    // Sanitize category name for directory (keep it simple!)
    category = String(category)
      .trim()
      .replace(/[^a-zA-Z0-9_\-]/g, "_");

    const file = req.file;
    const fileName = `${Date.now()}_${file.originalname}`;
    // Compose directory path in Firebase: categories/{category}/filename.jpg
    const categoryImageRef = ref(storage, `categories/${category}/${fileName}`);
    // Also add the same image to 'images/' directory (flat)
    const globalImageRef = ref(storage, `images/${fileName}`);

    // Upload to categories/{category}/
    const categoryUploadResult = await uploadBytes(
      categoryImageRef,
      file.buffer,
      {
        contentType: file.mimetype,
      },
    );
    // Get public URL for category location
    const categoryDownloadURL = await getDownloadURL(categoryUploadResult.ref);

    // Upload to images/
    const globalUploadResult = await uploadBytes(globalImageRef, file.buffer, {
      contentType: file.mimetype,
    });
    // Get public URL for global location
    const globalDownloadURL = await getDownloadURL(globalUploadResult.ref);

    res.status(200).json({
      message: "Image uploaded successfully!",
      categoryImage: {
        url: categoryDownloadURL,
        storagePath: `categories/${category}/${fileName}`,
      },
      globalImage: {
        url: globalDownloadURL,
        storagePath: `images/${fileName}`,
      },
      category,
      fileName,
    });
  } catch (error) {
    const details = error?.message || "Unknown upload error";
    const code = error?.code || "unknown";

    // Keep useful server diagnostics for debugging Firebase/storage issues.
    console.error("Category image upload failed:", {
      code,
      details,
      stack: error?.stack,
    });

    res.status(500).json({
      error: "Image upload failed.",
      details,
      code,
    });
  }
}
