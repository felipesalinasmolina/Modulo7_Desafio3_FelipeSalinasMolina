import { Router } from "express";
import { createLikes, getLike } from "../controlllers/likes.controlller.js";

const router = Router();

router.post("/posts", createLikes);
router.get("/posts", getLike);

export default router;
