import type {
  AnswerResult,
  Clue,
  HintResult,
  Mystery,
  MysterySummary,
} from "./types";

const MYSTERIES_URL = "/api/mysteries";

async function readErrorMessage(
  response: Response,
  fallback: string,
): Promise<string> {
  try {
    const data = await response.json();
    if (data && typeof data.error === "string") {
      return data.error;
    }
  } catch {
    
  }

  return fallback;
}

export async function getMysteries(): Promise<MysterySummary[]> {
  const response = await fetch(MYSTERIES_URL);

  if (!response.ok) {
    throw new Error(
      await readErrorMessage(response, "Could not load mysteries."),
    );
  }

  return (await response.json()) as MysterySummary[];
}

export async function getMystery(
  id: number | string,
): Promise<Mystery> {
  const response = await fetch(`${MYSTERIES_URL}/${id}`);

  if (!response.ok) {
    throw new Error(
      await readErrorMessage(response, "Could not load this mystery."),
    );
  }

  return (await response.json()) as Mystery;
}

export async function getClues(
  id: number | string,
): Promise<Clue[]> {
  const response = await fetch(`${MYSTERIES_URL}/${id}/clues`);

  if (!response.ok) {
    throw new Error(
      await readErrorMessage(response, "Could not load the clues."),
    );
  }

  return (await response.json()) as Clue[];
}

export async function submitAnswer(
  id: number | string,
  answer: string,
): Promise<AnswerResult> {
  const response = await fetch(`${MYSTERIES_URL}/${id}/answers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answer }),
  });

  if (!response.ok) {
    throw new Error(
      await readErrorMessage(response, "Could not submit your answer."),
    );
  }

  return (await response.json()) as AnswerResult;
}

export async function requestHint(
  id: number | string,
): Promise<HintResult> {
  const response = await fetch(`${MYSTERIES_URL}/${id}/hint`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error(
      await readErrorMessage(response, "Could not get a hint."),
    );
  }

  return (await response.json()) as HintResult;
}