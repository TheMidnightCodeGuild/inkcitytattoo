import multer from "multer";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from "@/lib/firebase";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // Max file size: 10MB
});

// Disable Next.js bodyParser for this API route (required for multer)
export const config = {
  api: {
    bodyParser: false,
  },
};

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
    await runMiddleware(req, res, upload.single("image"));

    // Extract fields from the request body (fields are in req.body due to multer)
    const { title, subtitle, content } = req.body;

    if (!title || !subtitle || !content) {
      return res.status(400).json({ error: "Title, subtitle, and content are required." });
    }

    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded." });
    }

    const file = req.file;
    const imageRef = ref(storage, `blogs/${Date.now()}_${file.originalname}`);

    // Upload image to Firebase Storage
    const uploadResult = await uploadBytes(imageRef, file.buffer, {
      contentType: file.mimetype,
    });

    // Get image URL
    const imageUrl = await getDownloadURL(uploadResult.ref);

    // Create blog in Firestore
    const docRef = await addDoc(collection(db, "blogs"), {
      title,
      subtitle,
      content,
      imageUrl,
      createdAt: new Date()
    });

    res.status(201).json({
      message: "Blog uploaded successfully!",
      blogId: docRef.id,
      blog: {
        title,
        subtitle,
        content,
        imageUrl,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: error.message || "Something went wrong while uploading blog.",
    });
  }
}