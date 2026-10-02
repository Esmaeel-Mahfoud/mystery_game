import express from "express";
import {
  getAllMysteries,
  getMysteryById,
  submitAnswer,
} from "../controllers/mysteryController.js";

const router = express.Router();

router.get("/", getAllMysteries);
router.get("/:id", getMysteryById);
router.post("/:id/answers", submitAnswer);

export default router;
