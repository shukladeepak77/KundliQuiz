// Per-device progress, stored in localStorage. Purely a convenience — if it's
// unavailable (private browsing, etc.) the app still works, just without memory.
// Keyed by personSlug + sectionId since multiple people's quizzes share the
// same site and section ids (e.g. every person has a "basics" section).

export type SectionProgress = {
  bestScore: number;
  attempts: number;
  completed: boolean;
};

type ProgressMap = Record<string, SectionProgress>;
// Which individual question ids have been answered at least once, per person.
// Question ids (e.g. "b1", "p3") are already unique within a person across
// all their sections, so a flat array per person is enough.
type AnsweredMap = Record<string, string[]>;

const KEY = "kundli-quiz-progress-v2";
const ANSWERED_KEY = "kundli-quiz-answered-v1";
const SKIP_ANSWERED_KEY = "kundli-quiz-skip-answered-v1";

function keyFor(personSlug: string, sectionId: string): string {
  return `${personSlug}::${sectionId}`;
}

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

export function getProgress(personSlug: string, sectionId: string): SectionProgress | undefined {
  return safeRead()[keyFor(personSlug, sectionId)];
}

// Returns this person's progress only, keyed by plain sectionId (for the
// person-hub screen, which only needs to look up by section id).
export function getPersonProgress(personSlug: string): Record<string, SectionProgress> {
  const all = safeRead();
  const prefix = `${personSlug}::`;
  const out: Record<string, SectionProgress> = {};
  for (const key of Object.keys(all)) {
    if (key.startsWith(prefix)) {
      out[key.slice(prefix.length)] = all[key];
    }
  }
  return out;
}

export function recordAttempt(personSlug: string, sectionId: string, score: number, total: number) {
  const data = safeRead();
  const key = keyFor(personSlug, sectionId);
  const prev = data[key];
  data[key] = {
    bestScore: Math.max(prev?.bestScore ?? 0, score),
    attempts: (prev?.attempts ?? 0) + 1,
    completed: score === total || prev?.completed === true,
  };
  safeWrite(data);
}

export function resetAllProgress() {
  safeWrite({});
  try {
    window.localStorage.removeItem(ANSWERED_KEY);
  } catch {
    // ignore
  }
}

// --- Per-question "already answered" tracking (for the skip-answered toggle) ---

function safeReadAnswered(): AnsweredMap {
  try {
    const raw = window.localStorage.getItem(ANSWERED_KEY);
    return raw ? (JSON.parse(raw) as AnsweredMap) : {};
  } catch {
    return {};
  }
}

function safeWriteAnswered(data: AnsweredMap) {
  try {
    window.localStorage.setItem(ANSWERED_KEY, JSON.stringify(data));
  } catch {
    // ignore
  }
}

export function getAnsweredQuestionIds(personSlug: string): Set<string> {
  const data = safeReadAnswered();
  return new Set(data[personSlug] ?? []);
}

export function markQuestionAnswered(personSlug: string, questionId: string) {
  const data = safeReadAnswered();
  const existing = data[personSlug] ?? [];
  if (!existing.includes(questionId)) {
    data[personSlug] = [...existing, questionId];
    safeWriteAnswered(data);
  }
}

// --- Global "skip questions I've already answered" preference ---

export function getSkipAnswered(): boolean {
  try {
    return window.localStorage.getItem(SKIP_ANSWERED_KEY) === "1";
  } catch {
    return false;
  }
}

export function setSkipAnswered(value: boolean) {
  try {
    window.localStorage.setItem(SKIP_ANSWERED_KEY, value ? "1" : "0");
  } catch {
    // ignore
  }
}
