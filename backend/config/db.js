import mongoose from 'mongoose';

export default function connectDB() {
  const MONGODB_URI = process.env.MONGODB_URI; // ✅ FIX

  if (!MONGODB_URI) {
    console.error(" MONGODB_URI is not defined");
    process.exit(1);
  }

  mongoose.connect(MONGODB_URI)
    .then(() => {
      console.log(` Database connected`);
    })
    .catch((err) => {
      console.error(` DB connection error: ${err.message}`);
      process.exit(1);
    });
}
