// Per-device progress, stored in localStorage. Purely a convenience — if it's
// unavailable (private browsing, etc.) the app still works, just without memory.

export type SectionProgress = {
  bestScore: number;
  attempts: number;
  completed: boolean;
};

type ProgressMap = Record<string, SectionProgress>;

const KEY = "kundli-quiz-progress-v1";

function safeRead(): ProgressMap {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as ProgressMap) : {};
  } catch {
    return {};
  }
}

function safeWrite(data: ProgressMap) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // ignore — e.g. private browsing with storage blocked
  }
}

export function getProgress(sectionId: string): SectionProgress | undefined {
  return safeRead()[sectionId];
}

export function getAllProgress(): ProgressMap {
  return safeRead();
}

export function recordAttempt(sectionId: string, score: number, total: number) {
  const data = safeRead();
  const prev = data[sectionId];
  data[sectionId] = {
    bestScore: Math.max(prev?.bestScore ?? 0, score),
    attempts: (prev?.attempts ?? 0) + 1,
    completed: score === total || prev?.completed === true,
  };
  safeWrite(data);
}

export function resetAllProgress() {
  safeWrite({});
}
