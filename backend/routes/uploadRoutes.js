import express from "express";
import upload from "../utils/multer.js";
import { uploadAudio } from "../controllers/uploadController.js";

const router = express.Router();

router.post("/audio", upload.single("audio", uploadAudio));

export default router;