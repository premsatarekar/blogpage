import express from "express";
import { getPosts, getPost, CreatePost, deletePost} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:slug", getPost);
router.get("/", CreatePost);
router.delete("/:id", deletePost);


export default router;
