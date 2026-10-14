import { useState } from "react";
import Home from "./components/Home";
import SectionQuiz from "./components/SectionQuiz";
import { sections } from "./data/questions";

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  const activeSection = sections.find((s) => s.id === activeSectionId) ?? null;

  return (
    <div className="app-shell">
      {activeSection ? (
        <SectionQuiz section={activeSection} onExit={() => setActiveSectionId(null)} />
      ) : (
        <Home onPick={setActiveSectionId} />
      )}
    </div>
  );
}
