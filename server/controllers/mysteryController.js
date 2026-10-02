import {mysteries, progress, MAX_ANSWER_LENGTH} from "../store.js";
import {delay, normalizeAnswer} from "../utils.js";

export async function getAllMysteries(req, res) {
  await delay(350);

  const summaries = mysteries.map((mystery) => ({
    id: mystery.id,
    title: mystery.title,
    tagline: mystery.tagline,
    totalStages: mystery.stages.length,
    solved: progress[mystery.id].solved,
  }));

  res.json(summaries);
}

export function getMysteryById(req, res) {
  const id = Number(req.params.id);
  const mystery = mysteries.find((candidate) => candidate.id === id);

  if (!mystery) {
    return res.status(404).json({error: `No mystery found with id ${id}.`});
  }

  const state = progress[id];

  if (state.solved) {
    return res.json({
      id: mystery.id,
      title: mystery.title,
      totalStages: mystery.stages.length,
      solved: true,
      reveal: mystery.reveal,
    });
  }

  const stage = mystery.stages[state.currentStage];

  res.json({
    id: mystery.id,
    title: mystery.title,
    tagline: mystery.tagline,
    intro: mystery.intro,
    totalStages: mystery.stages.length,
    currentStage: state.currentStage,
    solved: false,
    question: stage.question,
    clues: stage.clues,
    hintsUsed: state.hintsUsed,
    hintsTotal: stage.hints.length,
    hints: stage.hints.slice(0, state.hintsUsed),
  });
}

export function getMysteryClues(req, res) {
  const id = Number(req.params.id);
  const mystery = mysteries.find((candidate) => candidate.id === id);

  if (!mystery) {
    return res.status(404).json({error: `No mystery found with id ${id}.`});
  }

  const state = progress[id];

  if (state.solved) {
    return res.status(409).json({error: "This mystery is already solved."});
  }

  const stage = mystery.stages[state.currentStage];

  res.json(stage.clues);
}

export function submitAnswer(req, res) {
  const id = Number(req.params.id);

  if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
    return res.status(400).json({error: "Request body must be a JSON object."});
  }

  const {answer} = req.body ?? {};

  if (typeof answer !== "string") {
    return res
      .status(400)
      .json({error: "answer is required and must be a string."});
  }

  const trimmedAnswer = answer.trim();

  if (trimmedAnswer.length === 0) {
    return res.status(400).json({error: "answer must not be empty."});
  }

  if (trimmedAnswer.length > MAX_ANSWER_LENGTH) {
    return res.status(400).json({
      error: `answer must be ${MAX_ANSWER_LENGTH} characters or fewer.`,
    });
  }

  const mystery = mysteries.find((candidate) => candidate.id === id);

  if (!mystery) {
    return res.status(404).json({error: `No mystery found with id ${id}.`});
  }

  const state = progress[id];

  if (state.solved) {
    return res.status(409).json({error: "This mystery is already solved."});
  }

  const stage = mystery.stages[state.currentStage];

  if (normalizeAnswer(stage.answer) !== normalizeAnswer(trimmedAnswer)) {
    return res.json({
      correct: false,
      message: "That does not match the evidence.",
    });
  }

  state.currentStage += 1;
  state.hintsUsed = 0;

  if (state.currentStage >= mystery.stages.length) {
    state.solved = true;
  }

  res.json({
    correct: true,
    message: stage.successMessage,
    solved: state.solved,
    currentStage: state.currentStage,
  });
}

export function requestHint(req, res) {
  const id = Number(req.params.id);
  const mystery = mysteries.find((candidate) => candidate.id === id);

  if (!mystery) {
    return res.status(404).json({error: `No mystery found with id ${id}.`});
  }

  const state = progress[id];

  if (state.solved) {
    return res.status(409).json({error: "This mystery is already solved."});
  }

  const stage = mystery.stages[state.currentStage];

  if (state.hintsUsed >= stage.hints.length) {
    return res.status(409).json({error: "No hints left for this stage."});
  }

  const hint = stage.hints[state.hintsUsed];
  state.hintsUsed += 1;

  res.json({
    hint,
    currentStage: state.currentStage,
    hintsUsed: state.hintsUsed,
    hintsTotal: stage.hints.length,
  });
}
