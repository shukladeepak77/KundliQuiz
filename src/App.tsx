import { useEffect, useState } from "react";
import SearchHome from "./components/SearchHome";
import PersonHub from "./components/PersonHub";
import SectionQuiz from "./components/SectionQuiz";
import { findPerson } from "./data/people";
import { parseHash, navigate, type Route } from "./lib/route";

export default function App() {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));

  useEffect(() => {
    function onHashChange() {
      setRoute(parseHash(window.location.hash));
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return <div className="app-shell">{render()}</div>;

  function render() {
    if (route.view === "search") {
      return <SearchHome onPick={(personSlug) => navigate({ view: "person", personSlug })} />;
    }

    const person = findPerson(route.personSlug);
    if (!person) {
      // Unknown slug (e.g. a stale/bad link) — fall back to search rather
      // than a dead end.
      navigate({ view: "search" });
      return null;
    }

    if (route.view === "person") {
      return (
        <PersonHub
          person={person}
          onPick={(sectionId) => navigate({ view: "quiz", personSlug: person.slug, sectionId })}
          onBack={() => navigate({ view: "search" })}
        />
      );
    }

    // route.view === "quiz"
    const section = person.sections.find((s) => s.id === route.sectionId);
    if (!section) {
      navigate({ view: "person", personSlug: person.slug });
      return null;
    }
    return (
      <SectionQuiz
        personSlug={person.slug}
        section={section}
        onExit={() => navigate({ view: "person", personSlug: person.slug })}
      />
    );
  }
}
