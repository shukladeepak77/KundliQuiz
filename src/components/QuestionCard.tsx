import { useMemo, useState } from "react";
import type { Question } from "../data/questions";
import { shuffledIndices } from "../lib/shuffle";

type Props = {
  question: Question;
  index: number;
  total: number;
  onAnswered: (correct: boolean) => void;
  onNext: () => void;
  isLast: boolean;
};

export default function QuestionCard({ question, index, total, onAnswered, onNext, isLast }: Props) {
  const order = useMemo(() => shuffledIndices(question.options.length, question.id), [question.id]);
  const [picked, setPicked] = useState<number | null>(null);

  function pick(originalIdx: number) {
    if (picked !== null) return;
    setPicked(originalIdx);
    onAnswered(originalIdx === question.correct);
  }

  const answered = picked !== null;

  return (
    <div className="card question-card">
      <div className="q-progress">
        Question {index + 1} of {total}
      </div>
      <h2 className="q-text">{question.q}</h2>

      <div className="options">
        {order.map((origIdx) => {
          const isCorrect = origIdx === question.correct;
          const isPicked = picked === origIdx;
          let cls = "option";
          if (answered) {
            if (isCorrect) cls += " correct";
            else if (isPicked) cls += " wrong";
            else cls += " dim";
          }
          return (
            <button
              key={origIdx}
              className={cls}
              onClick={() => pick(origIdx)}
              disabled={answered}
            >
              <span className="option-marker">
                {answered && isCorrect ? "✓" : answered && isPicked ? "✗" : ""}
              </span>
              <span>{question.options[origIdx]}</span>
            </button>
          );
        })}
      </div>

      {answered && (
        <div className={"explain " + (picked === question.correct ? "explain-correct" : "explain-wrong")}>
          <div className="explain-label">
            {picked === question.correct ? "Correct" : "Not quite"}
          </div>
          <p>{question.explain}</p>
          <button className="btn-next" onClick={onNext}>
            {isLast ? "See results →" : "Next question →"}
          </button>
        </div>
      )}
    </div>
  );
}
