import { useState } from "react";
import type { Section } from "../data/types";
import QuestionCard from "./QuestionCard";
import { recordAttempt } from "../lib/progress";

type Props = {
  personSlug: string;
  section: Section;
  onExit: () => void;
};

export default function SectionQuiz({ personSlug, section, onExit }: Props) {
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const total = section.questions.length;
  const current = section.questions[qIndex];

  function handleAnswered(correct: boolean) {
    if (correct) setScore((s) => s + 1);
  }

  function handleNext() {
    if (qIndex + 1 < total) {
      setQIndex((i) => i + 1);
    } else {
      recordAttempt(personSlug, section.id, score, total);
      setDone(true);
    }
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
