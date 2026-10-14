export type Question = {
  id: string;
  q: string;
  options: string[];
  correct: number;
  explain: string;
};

export type Section = {
  id: string;
  title: string;
  icon: string;
  blurb: string;
  questions: Question[];
};

// A person's kundli, as a set of quiz sections. Intentionally excludes date
// of birth, time of birth, and birthplace/coordinates — this app is meant
// to be shareable as a link without exposing those specific personal
// details, even though astrological findings derived from them (Lagna,
// planetary placements, etc.) are shown.
export type Person = {
  slug: string;
  name: string;
  lagna: string;
  reportDate: string;
  sections: Section[];
};
