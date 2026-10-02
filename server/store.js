import initialMysteries from "./data/mysteriesData.js";

export const mysteries = initialMysteries;

export const MAX_ANSWER_LENGTH = 100;

export const progress = {};

mysteries.forEach((mystery) => {
  progress[mystery.id] = {
    currentStage: 0,
    hintsUsed: 0,
    solved: false,
  };
});
