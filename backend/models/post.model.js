import { Schema } from "mongoose";
import mongoose from "mongoose";

const postSchema = new Schema(
  {
    // Only one img field needed
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    visit: {
      type: Number, // Changed to Number for count of visits
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
