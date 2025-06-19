import express from "express";
import dotenv from "dotenv";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js"; 
import postsRouter from "./routes/post.route.js"; 
import commentsRouter from "./routes/comment.route.js"; 
import webHookRouter from "./routes/webhook.route.js"
// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use("/users", userRouter);
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);
app.use("/webhooks", webHookRouter);


app.use((error, req, res, next) => {
    res.status(error.status || 500);

  res.json({
    message: error.message || "Something Went Wrong!",
    status:error.status,
    stack:error.stack,
  })
})

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
