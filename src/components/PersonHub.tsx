import { useEffect, useState } from "react";
import type { Person } from "../data/types";
import { getPersonProgress } from "../lib/progress";
import type { SectionProgress } from "../lib/progress";

type Props = {
  person: Person;
  onPick: (sectionId: string) => void;
  onBack: () => void;
};

export default function PersonHub({ person, onPick, onBack }: Props) {
  const [progress, setProgress] = useState<Record<string, SectionProgress>>({});

  useEffect(() => {
    setProgress(getPersonProgress(person.slug));
  }, [person.slug]);

  const totalQuestions = person.sections.reduce((n, s) => n + s.questions.length, 0);
  const totalDone = person.sections.reduce(
    (n, s) => n + (progress[s.id]?.completed ? 1 : 0),
    0
  );

  return (
    <div className="home">
      <button className="btn-back" onClick={onBack}>
        ← Search
      </button>

      <header className="hero">
        <div className="hero-badge">🪔 Dharma Path USA Foundation</div>
        <h1>{person.name}'s Kundli</h1>
        <p className="hero-sub">
          Your Honest Diagnostic report, turned into questions. Answer, think,
          get the explanation — that's how this actually sticks, instead of
          just scrolling past pages of a PDF.
        </p>
      </header>

      <div className="card birth-card">
        <div className="birth-grid">
          <div>
            <span className="birth-label">Name</span>
            <span className="birth-value">{person.name}</span>
          </div>
          <div>
            <span className="birth-label">Lagna</span>
            <span className="birth-value">{person.lagna}</span>
          </div>
          <div>
            <span className="birth-label">Report Date</span>
            <span className="birth-value">{person.reportDate}</span>
          </div>
          <div>
            <span className="birth-label">Source</span>
            <span className="birth-value">Honest Diagnostic PDF</span>
          </div>
        </div>
      </div>

      <div className="overall-progress">
        {totalDone} of {person.sections.length} sections completed · {totalQuestions} questions total
      </div>

      <div className="section-list">
        {person.sections.map((s) => {
          const p = progress[s.id];
          return (
            <button key={s.id} className="section-card" onClick={() => onPick(s.id)}>
              <div className="section-card-icon">{s.icon}</div>
              <div className="section-card-body">
                <div className="section-card-title">{s.title}</div>
                <div className="section-card-blurb">{s.blurb}</div>
                <div className="section-card-meta">
                  {s.questions.length} questions
                  {p ? ` · best ${p.bestScore}/${s.questions.length}` : ""}
                  {p?.completed ? " · ✓ done" : ""}
                </div>
              </div>
              <div className="section-card-arrow">→</div>
            </button>
          );
        })}
      </div>

      <footer className="home-footer">
        Source: {person.name}'s Honest Diagnostic report, generated{" "}
        {person.reportDate} by Dharma Path USA Foundation. For spiritual
        guidance &amp; educational purposes only.
      </footer>
    </div>
  );
}
