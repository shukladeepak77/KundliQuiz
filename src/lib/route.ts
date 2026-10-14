// Minimal hash-based routing — no router dependency. URL shapes:
//   #/                              search screen
//   #/<personSlug>                  person hub (list of sections)
//   #/<personSlug>/<sectionId>      an active quiz section
// Shareable as plain links, and survives a page refresh or the browser's
// back/forward buttons, without needing any server-side rewrite config.

export type Route =
  | { view: "search" }
  | { view: "person"; personSlug: string }
  | { view: "quiz"; personSlug: string; sectionId: string };

export function parseHash(hash: string): Route {
  const parts = hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);
  if (parts.length === 0) return { view: "search" };
  if (parts.length === 1) return { view: "person", personSlug: parts[0] };
  return { view: "quiz", personSlug: parts[0], sectionId: parts[1] };
}

export function routeToHash(route: Route): string {
  if (route.view === "search") return "#/";
  if (route.view === "person") return `#/${encodeURIComponent(route.personSlug)}`;
  return `#/${encodeURIComponent(route.personSlug)}/${encodeURIComponent(route.sectionId)}`;
}

export function navigate(route: Route) {
  window.location.hash = routeToHash(route);
}
