import express from "express";
import {clerkwebHook} from "../controllers/webhook.controller.js";


const router = express.Router();
router.post("/clerk", clerkwebHook)
export default router;




