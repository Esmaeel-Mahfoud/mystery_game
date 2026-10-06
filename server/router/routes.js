import express from "express";
import {
  getAllMysteries,
  getMysteryById,
  getMysteryClues,
  submitAnswer,
  requestHint,
} from "../controllers/mysteryController.js";

const router = express.Router();

router.get("/", getAllMysteries);
router.get("/:id", getMysteryById);
router.get("/:id/clues", getMysteryClues);
router.post("/:id/answers", submitAnswer);
router.patch("/:id/hint", requestHint);

export default router ;
