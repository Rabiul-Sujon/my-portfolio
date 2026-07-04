import nodemailer from "nodemailer";
import mongoose from "mongoose";

// MongoDB connection
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

// Message model
const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  project: String,
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.models.Message || mongoose.model("Message", MessageSchema);

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req) {
  try {
    const { name, email, project } = await req.json();

    // Validate
    if (!name || !email || !project) {
      return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    // Connect to MongoDB
    await connectDB();

    // Save to MongoDB
    await Message.create({ name, email, project });

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project:</strong> ${project}</p>
      `,
    });

    return Response.json({ success: true, message: "Message sent successfully!" }, { status: 200 });

  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}