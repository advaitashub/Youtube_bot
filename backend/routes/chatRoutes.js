import express from "express";
import chatWithVideo from "../controller/chatController.js";
import askQuestion from "../controller/questionController.js";

const router =express.Router();

router.post("/chat", chatWithVideo);
router.post("/question", askQuestion);

export default router;