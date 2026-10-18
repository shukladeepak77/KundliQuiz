import { useMemo, useState } from "react";
import type { Section } from "../data/types";
import QuestionCard from "./QuestionCard";
import { recordAttempt, markQuestionAnswered, getAnsweredQuestionIds, getSkipAnswered } from "../lib/progress";

type Props = {
  personSlug: string;
  section: Section;
  onExit: () => void;
};

export default function SectionQuiz({ personSlug, section, onExit }: Props) {
  // "Skip already answered" is read once per section visit — if it changes
  // mid-section the user can just re-enter the section to pick it up.
  const [skipAnswered] = useState(() => getSkipAnswered());
  const [includeAnswered, setIncludeAnswered] = useState(false);

  const pool = useMemo(() => {
    if (!skipAnswered || includeAnswered) return section.questions;
    const answered = getAnsweredQuestionIds(personSlug);
    const remaining = section.questions.filter((q) => !answered.has(q.id));
    return remaining;
  }, [section, personSlug, skipAnswered, includeAnswered]);

  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const total = pool.length;
  const current = pool[qIndex];

  function handleAnswered(correct: boolean) {
    if (correct) setScore((s) => s + 1);
    markQuestionAnswered(personSlug, current.id);
  }

  function handleNext() {
    if (qIndex + 1 < total) {
      setQIndex((i) => i + 1);
    } else {
      recordAttempt(personSlug, section.id, score, total);
      setDone(true);
    }
  }

  // Everything in this section has already been answered and the
  // skip-answered preference is on — nothing left to show by default.
  if (skipAnswered && !includeAnswered && total === 0) {
    return (
      <div className="quiz-wrap">
        <div className="quiz-header">
          <button className="btn-back" onClick={onExit}>← All sections</button>
          <div className="section-tag">
            <span>{section.icon}</span> {section.title}
          </div>
        </div>
        <div className="card results-card">
          <div className="results-icon">✅</div>
          <h2>All caught up</h2>
          <p className="verdict">
            You've already answered every question in this section at least
            once. Uncheck "skip answered questions" to go back over them, or
            head back and pick another section.
          </p>
          <div className="results-actions">
            <button className="btn-primary" onClick={() => setIncludeAnswered(true)}>
              Review this section anyway
            </button>
            <button className="btn-secondary" onClick={onExit}>
              Back to all sections
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (done) {
    const pct = Math.round((score / total) * 100);
    const verdict =
      pct === 100
        ? "Perfect — you know this chart cold."
        : pct >= 75
        ? "Strong grasp. A couple of details to revisit."
        : pct >= 50
        ? "Good start — worth another pass."
        : "Worth re-reading the explanations — that's exactly what they're for.";
    return (
      <div className="card results-card">
        <div className="results-icon">{section.icon}</div>
        <h2>{section.title} — done</h2>
        <div className="score-big">
          {score} / {total}
        </div>
        <p className="verdict">{verdict}</p>
        <div className="results-actions">
          <button className="btn-primary" onClick={() => {
            setQIndex(0);
            setScore(0);
            setDone(false);
          }}>
            Retry this section
          </button>
          <button className="btn-secondary" onClick={onExit}>
            Back to all sections
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-wrap">
      <div className="quiz-header">
        <button className="btn-back" onClick={onExit}>← All sections</button>
        <div className="section-tag">
          <span>{section.icon}</span> {section.title}
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${((qIndex) / total) * 100}%` }} />
      </div>
      <QuestionCard
        key={current.id}
        question={current}
        index={qIndex}
        total={total}
        onAnswered={handleAnswered}
        onNext={handleNext}
        isLast={qIndex + 1 === total}
      />
    </div>
  );
}
