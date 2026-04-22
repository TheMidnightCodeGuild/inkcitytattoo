import nodemailer from "nodemailer";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const data = req.body || {};
    const name = data.name?.toString().trim();
    const email = data.email?.toString().trim();
    const message = data.message?.toString().trim();
    const mobile = (data.mobile || data.phone || "").toString().trim();

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Set up Nodemailer with error handling
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: "inkcitythetattoostudio22@gmail.com",
      subject: `New Enquiry from ${name}!`,
      html: `
        <h2>You have received a new enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><em>Sent on: ${new Date().toLocaleString()}</em></p>
      `
    };

    await transporter.sendMail(mailOptions);

    // Save to Firebase with timestamp
    const contactCollection = collection(db, 'contact');
    const docRef = await addDoc(contactCollection, {
      name,
      email,
      mobile,
      phone: mobile,
      message,
      timestamp: new Date().toISOString()
    });

    res.status(201).json({ 
      success: true,
      id: docRef.id,
      message: "Email sent and data saved successfully"
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ 
      error: "Failed to process request",
      details: error.message,
      timestamp: new Date().toISOString()
    });
  }
}