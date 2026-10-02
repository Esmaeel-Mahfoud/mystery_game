export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function normalizeAnswer(text) {
  return text.trim().toLowerCase().replace(/\s+/g, " ");
}
