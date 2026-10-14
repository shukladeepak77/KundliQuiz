import type { Person } from "../types";
import { deepakShukla } from "./deepak-shukla";

// Add a new person here as each new kundli is turned into a quiz — each
// one lives in its own file in this directory (slug, name, lagna,
// reportDate, sections), following deepak-shukla.ts as the template.
export const people: Person[] = [deepakShukla];

export function findPerson(slug: string): Person | undefined {
  return people.find((p) => p.slug === slug);
}
