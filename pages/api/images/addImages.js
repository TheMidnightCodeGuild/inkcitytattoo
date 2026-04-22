import multer from "multer";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";

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
    await runMiddleware(
      req,
      res,
      upload.fields([
        { name: "images", maxCount: 20 },
        { name: "image", maxCount: 1 },
      ]),
    );

    const files = [
      ...((req.files && req.files.images) || []),
      ...((req.files && req.files.image) || []),
    ];

    if (!files.length) {
      return res.status(400).json({ error: "No files uploaded." });
    }

    const uploadedImages = [];

    for (const file of files) {
      const fileName = `${Date.now()}_${file.originalname}`;
      const imageRef = ref(storage, `images/${fileName}`);

      const uploadResult = await uploadBytes(imageRef, file.buffer, {
        contentType: file.mimetype,
      });
      const downloadURL = await getDownloadURL(uploadResult.ref);
      uploadedImages.push({
        url: downloadURL,
        storagePath: `images/${fileName}`,
        fileName,
      });
    }

    res.status(200).json({
      message: "Images uploaded successfully!",
      imageUrl: uploadedImages[0]?.url || null,
      imageUrls: uploadedImages.map((img) => img.url),
      images: uploadedImages,
    });
  } catch (error) {
    res.status(500).json({ error: error.message || "Something went wrong!" });
  }
}
