import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ error: `Method '${req.method}' Not Allowed` });
  }

  try {
    // Fetch all blogs, ordered by createdAt descending (most recent first)
    const blogsCol = collection(db, "blogs");
    const blogsQuery = query(blogsCol, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(blogsQuery);

    const blogs = snapshot.docs.map((doc) => ({
      blogId: doc.id,
      ...doc.data(),
    }));

    res.status(200).json({
      blogs,
      message: "Fetched all blogs successfully!",
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message || "Failed to fetch blogs." });
  }
}