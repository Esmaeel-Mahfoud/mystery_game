export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function normalizeAnswer(text) {
  return text.trim().toLowerCase().replace(/\s+/g, " ");
}

export function isMysteryLocked(mystery, progress) {
  if (!mystery.isLocked) {
    return false;
  }

  if (mystery.unlockAfterId === null) {
    return false;
  }

  return !progress[mystery.unlockAfterId]?.solved;
}
