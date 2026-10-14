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

export const birthDetails = {
  name: "Deepak Shukla",
  dob: "1977-04-12",
  tob: "14:03",
  place: "Delhi, Delhi, India",
  lat: "28.6664535°",
  lon: "77.2169781°",
  tz: "UTC +5.5",
  ayanamsha: "23.53970988°",
  reportDate: "October 08, 2026",
};

export const sections: Section[] = [
  {
    id: "basics",
    title: "Birth Chart Basics",
    icon: "🌙",
    blurb: "Your Lagna, Moon, nakshatra, and the one dosha everyone asks about.",
    questions: [
      {
        id: "b1",
        q: "What is your Lagna (Ascendant) sign?",
        options: ["Karka (Cancer)", "Simha (Leo)", "Meena (Pisces)", "Vrishchika (Scorpio)"],
        correct: 0,
        explain:
          "Your Lagna is Karka (Cancer) at 28.01°, in Ashlesha nakshatra pada 4. This is the foundation of your whole chart — self-identity is read through Cancer's lens (emotional depth, intuition, a protective nature) layered with Ashlesha's serpent-deity Naga energy: penetrating, hypnotic insight, and a naturally guarded inner life.",
      },
      {
        id: "b2",
        q: "Your Moon (birth Rashi) sits in which sign?",
        options: ["Kumbha (Aquarius)", "Mesha (Aries)", "Makara (Capricorn)", "Karka (Cancer)"],
        correct: 2,
        explain:
          "Moon is in Makara (Capricorn) at 18.30°, in your 7th house, in its OWN nakshatra Shravana (pada 3). Since Moon is also your Lagna lord, this placement matters doubly — and sitting in its own nakshatra lends some steadiness, despite Saturn's later involvement with it.",
      },
      {
        id: "b3",
        q: "Your Moon Nakshatra is Shravana. What is your Gana (temperament classification) by that nakshatra?",
        options: [
          "Rakshasa — intense, driven",
          "Manushya — balanced, ambitious",
          "Deva — gentle, cultured, spiritually inclined",
          "Mixed Deva-Rakshasa",
        ],
        correct: 2,
        explain:
          "Shravana's Gana is Deva. Your Nadi is Antya (Kapha-dominant: steady, enduring, nurturing energy) and your Yoni is Monkey (clever and playful) — these three factors (Gana/Nadi/Yoni) are the same ones classically used to judge compatibility with a partner's chart.",
      },
      {
        id: "b4",
        q: "Are you classified as Manglik (Mangal Dosha present)?",
        options: [
          "No — Mars is well clear of the Manglik houses",
          "Yes — Mars affects house 8 from Lagna, house 2 from Moon, and house 12 from Venus",
          "Undetermined from this data",
          "Only a partial/weak Manglik case",
        ],
        correct: 1,
        explain:
          "Yes, you're Manglik. The report flags it directly on the D1 chart page: Mars sits in a Manglik-triggering position relative to all three reference points — Lagna, Moon, and Venus — at once, which is the fuller, stricter version of the check.",
      },
      {
        id: "b5",
        q: "Which planet is your Atmakaraka (soul significator — the natural-planet with the highest degree in its sign)?",
        options: ["Saturn", "Moon", "Venus", "Sun"],
        correct: 3,
        explain:
          "Sun is your Atmakaraka — fittingly, it's ALSO your chart's single strongest planet by Shadbala (#1 of 7). It sits in the 9th house in Meena (Pisces), conjunct an exalted, retrograde Venus, both sharing the same nakshatra (Revati). Classically this channels your soul's core motivation through higher learning, belief, teaching, or a long-distance/foreign connection.",
      },
      {
        id: "b6",
        q: "The report explicitly notes a limitation about your birth time (14:03). What is it?",
        options: [
          "Delhi's coordinates were only approximate",
          "The birth time has no independent verification, so time-sensitive findings carry inherent uncertainty",
          "14:03 falls on a rare astrological boundary that needs correction",
          "The Ayanamsha used is non-standard for this location",
        ],
        correct: 1,
        explain:
          "This appears verbatim in the report's \"Overview\" section — it's a built-in honesty check on every chart, not a flaw unique to yours. Worth remembering whenever reading a finding tied closely to exact degrees, like house cusps or dasha boundaries.",
      },
    ],
  },
  {
    id: "planets-houses",
    title: "Planets & Houses",
    icon: "🏠",
    blurb: "Who's sitting where in your D1 chart — and which houses are empty.",
    questions: [
      {
        id: "p1",
        q: "Which house is your Lagna lord Moon placed in?",
        options: ["1st (Self)", "4th (Home)", "7th (Partnerships)", "10th (Career)"],
        correct: 2,
        explain:
          "Moon sits in the 7th house, in Makara, in its own nakshatra Shravana. Since Moon rules your 1st house (it IS your Lagna lord), this directly ties your sense of self to your partnerships — the structural seed of the Moon-Saturn Parivartana you'll meet again and again in this quiz.",
      },
      {
        id: "p2",
        q: "Saturn sits in House 1 and rules Houses 7 & 8. Moon sits in House 7 and rules House 1. What classical configuration does this create?",
        options: [
          "No relationship — coincidental overlap",
          "Parivartana Yoga (mutual sign exchange) — Moon and Saturn act as each other's dispositor",
          "Neecha Bhanga Raja Yoga",
          "Combustion",
        ],
        correct: 1,
        explain:
          "This is Parivartana Yoga — each planet sits in the sign the other rules, tying the two houses together so they \"rise or fall as one.\" It's flagged as classically auspicious (Maha) here, and it's the single most-repeated structural fact across your whole report — it shows up in the Raj Yoga reading, the Career reading, and the Marriage reading.",
      },
      {
        id: "p3",
        q: "Which planet is exalted (Ucch) in your chart?",
        options: ["Jupiter", "Mars", "Venus", "Sun"],
        correct: 2,
        explain:
          "Venus is exalted in Meena (Pisces), sitting in your 9th house conjunct the Sun, both in Revati nakshatra. It's the only exalted planet in your chart — and no planet is debilitated (Neech) either.",
      },
      {
        id: "p4",
        q: "How many of your 12 houses have NO planet physically sitting in them (read only through their lord and any aspects received)?",
        options: ["Two houses", "Three houses", "Five houses — 2nd, 3rd, 5th, 6th, 12th", "None — every house has an occupant"],
        correct: 2,
        explain:
          "Five houses are empty: 2nd, 3rd, 5th, 6th, and 12th. The other seven carry: 1st (Saturn), 4th (Rahu), 7th (Moon), 8th (Mars), 9th (Sun + Venus), 10th (Mercury + Ketu), 11th (Jupiter).",
      },
      {
        id: "p5",
        q: "Mercury and Ketu share which house together?",
        options: ["9th (Dharma)", "1st (Self)", "10th (Career)", "4th (Home)"],
        correct: 2,
        explain:
          "Both sit in your 10th house in Mesha (Aries) — Mercury in Bharani nakshatra, Ketu in Ashwini, about 16.9° apart (a loose but real conjunction). The report reads this as giving an intuitive, non-linear intellect at work in your career/public life.",
      },
      {
        id: "p6",
        q: "Which house holds the Sun together with an exalted, retrograde Venus?",
        options: ["7th House", "1st House", "11th House", "9th House"],
        correct: 3,
        explain:
          "The 9th house (dharma, higher learning, father, fortune) — both in Meena, both in Revati nakshatra. This is also where your Atmakaraka (Sun) sits, making the 9th house unusually loaded with meaning in your chart.",
      },
      {
        id: "p7",
        q: "True or false: no planet in your chart is combust (burned too close to the Sun, weakening it).",
        options: ["True — zero combust planets", "False — Mercury is combust", "False — Venus is combust despite exaltation", "Cannot be determined from this data"],
        correct: 0,
        explain:
          "True. The \"Asta Grahas\" table checks every planet's distance from the Sun against its classical combustion orb, and none cross it — even Venus, which sits right next to the Sun, stays outside its orb.",
      },
      {
        id: "p8",
        q: "Rahu occupies which house, and what themes does the report say it amplifies there?",
        options: [
          "7th house — marriage and partnerships",
          "10th house — career and reputation",
          "4th house — home, mother, inner peace, property (often with a restless or unconventional twist)",
          "1st house — self-identity",
        ],
        correct: 2,
        explain:
          "Rahu sits in the 4th house in Tula (Libra), Chitra nakshatra. It's read as amplifying desires connected to home, inner peace, and mother — but tending to bring an unconventional or restless quality to domestic roots, which fits Rahu's nature as a shadow/desire planet.",
      },
    ],
  },
  {
    id: "strength",
    title: "Strength & Affliction",
    icon: "⚖️",
    blurb: "Shadbala rankings, who's afflicted (Peedit), and your weakest/strongest houses.",
    questions: [
      {
        id: "s1",
        q: "By Shadbala (classical six-fold strength), which planet ranks #1 — strongest in your whole chart?",
        options: ["Mars", "Jupiter", "Sun", "Saturn"],
        correct: 2,
        explain:
          "Sun ranks #1 of 7 planets measured, at 1.76x the classical minimum requirement — comfortably your strongest. (Rahu/Ketu aren't given a Shadbala score in this system.) It's also your Atmakaraka — strength and soul-significance point the same direction here.",
      },
      {
        id: "s2",
        q: "Which planet ranks weakest (#7 of 7) by Shadbala — actually below the classical minimum requirement?",
        options: ["Mercury", "Moon", "Rahu", "Saturn"],
        correct: 3,
        explain:
          "Saturn comes in at 0.88x the requirement — below minimum. This single fact matters a lot: Saturn also occupies your 1st house, rules two maraka-sensitive houses (7th & 8th), and is your CURRENTLY running Mahadasha lord. The report calls this convergence its single highest-priority technical item.",
      },
      {
        id: "s3",
        q: "How many planets are classified \"PEEDIT\" (genuinely afflicted — two or more affliction markers compounding on the same planet)?",
        options: ["Zero — nothing is afflicted", "One — only Saturn", "Three — Moon, Mars, and Saturn", "Five — all the natural malefics"],
        correct: 2,
        explain:
          "Three planets cross into PEEDIT: Moon, Mars, and Saturn. Four more (Mercury, Jupiter, Rahu, Ketu) carry a single MINOR marker each — not enough alone to count as real affliction. Sun and Venus come back fully CLEAR.",
      },
      {
        id: "s4",
        q: "Why is Moon marked PEEDIT (afflicted)?",
        options: [
          "It's combust and debilitated",
          "It sits in Saturn's sign (an enemy sign for Moon) AND receives a malefic aspect from Saturn",
          "Low Ashtakavarga points alone",
          "It's involved in Kal Sarp Yoga",
        ],
        correct: 1,
        explain:
          "Two markers compound here: Moon sitting in Makara (Saturn's sign, and Saturn is classically an enemy of Moon), plus a malefic 7th-house aspect FROM Saturn landing on Moon. Two markers on the same planet is the report's threshold for real affliction, not just a minor note.",
      },
      {
        id: "s5",
        q: "Which house carries the STRONGEST Sarvashtakavarga (benefic point) support in your whole chart?",
        options: ["1st house", "9th house", "12th house", "6th house — 34 points, and empty of planets"],
        correct: 3,
        explain:
          "The 6th house (daily work, health routines, disease) scores 34 points — your chart's highest — and has no planet sitting in it. The report reads this combination as a favorable sign: nothing is forced to operate from a position of affliction there.",
      },
      {
        id: "s6",
        q: "Which two houses tie for the WEAKEST Sarvashtakavarga support in your chart (22 points each)?",
        options: ["2nd and 8th houses", "3rd and 7th houses", "1st and 12th houses", "6th and 9th houses"],
        correct: 2,
        explain:
          "The 1st house (self, vitality) and 12th house (losses, foreign lands) both come in at 22 points against a chart average near 28. The 1st house tying for last is flagged specifically in the Health section as a meaningful signal for general constitutional resilience.",
      },
    ],
  },
  {
    id: "yogas",
    title: "Doshas & Yogas",
    icon: "✨",
    blurb: "11 present, 32 absent — which ones actually matter for you.",
    questions: [
      {
        id: "y1",
        q: "How many classical yogas does your chart show as PRESENT?",
        options: ["5", "11", "18", "32"],
        correct: 1,
        explain: "11 yogas are present — and 32 of the classical yogas checked are confirmed absent. The report lists every single one it checked, both ways, rather than just the flattering ones.",
      },
      {
        id: "y2",
        q: "Your chart has a genuine Yogakaraka planet — one that rules BOTH a Kendra (angular house) and a Trikona (trine house), the single most favorable combination for a Karka Lagna. Which planet is it?",
        options: ["Venus", "Jupiter", "Saturn", "Mars — rules the 5th AND 10th houses"],
        correct: 3,
        explain:
          "Mars rules your 5th (Trikona) and 10th (Kendra) houses simultaneously — the Yogakaraka role for Karka Lagna specifically. When a planet holds both a Kendra and a Trikona, its periods and placement tend to lift the areas it rules, provided it isn't badly afflicted.",
      },
      {
        id: "y3",
        q: "Your Yogakaraka Mars sits in the 8th house — a dusthana (difficult house). What does the report say this means in practice?",
        options: [
          "Its good results are cancelled out entirely",
          "It only helps during Mars's own dasha, never otherwise",
          "Its good results for 5th/10th themes often arrive through crisis, research, or inheritance rather than smoothly",
          "It makes Mars debilitated",
        ],
        correct: 2,
        explain:
          "This is flagged explicitly as a \"tension to note\": Mars can still lift career and intellectual fortunes (its 5th/10th significations), but because it sits in the 8th, that lift tends to come via transformation, crisis, research, or inheritance channels — not a clean, direct path.",
      },
      {
        id: "y4",
        q: "You have TWO Parivartana (mutual sign exchange) Yogas. One is Moon↔Saturn. What's the other?",
        options: ["Mercury ↔ Mars", "Jupiter (11th lord) ↔ Venus (9th lord)", "Sun ↔ Rahu", "Ketu ↔ Jupiter"],
        correct: 1,
        explain:
          "Jupiter (ruling your 9th, Trikona) and Venus (ruling your 11th) sit in each other's signs — also flagged as Maha (auspicious). Both exchanges feed directly into your Raj Yoga and Dhan Yoga readings.",
      },
      {
        id: "y5",
        q: "\"Vanchana Chora Bheeti Yoga\" is present in your chart (Saturn + Gulika conjunct in the Lagna). What does it classically caution about?",
        options: [
          "A guaranteed financial loss within this decade",
          "An elevated RISK of deception, theft, or betrayal of trust — a call for caution, not a certainty of harm",
          "An unavoidable health crisis",
          "Conflict specifically with siblings",
        ],
        correct: 1,
        explain:
          "The report is careful to frame it as risk and caution — \"agreements and unfamiliar people\" deserve extra scrutiny — explicitly NOT a guaranteed event, and it notes the data gives no sign this has already manifested. It should also be weighed against Saturn's otherwise dignified placement (own nakshatra, the Moon-Saturn exchange).",
      },
      {
        id: "y6",
        q: "Which well-known, widely-discussed yoga is checked and found NOT present in your chart?",
        options: ["Vasumati Yoga", "Amala Yoga", "Raj Yoga (Kendra-Trikona)", "Gaj Kesari Yoga"],
        correct: 3,
        explain:
          "Gaj Kesari Yoga (Moon and Jupiter in mutual kendras) is absent — alongside Kal Sarp Yoga, Neech Bhanga Raja Yoga, and 29 others. Meanwhile three of the yogas you DO have — Raj Yoga, Vasumati Yoga, and Amala Yoga — are genuinely strong, wealth/reputation-supporting combinations.",
      },
      {
        id: "y7",
        q: "Amala Yoga requires a natural benefic sitting in the 10th house from Lagna or Moon, giving a spotless reputation through one's actions. Which planet creates it for you?",
        options: ["Jupiter", "Venus", "Mercury", "Moon"],
        correct: 2,
        explain:
          "Mercury, sitting in your 10th house, creates Amala Yoga — classically indicating a lasting good name built through career and action, which dovetails with Mercury's own strong D10 (career chart) placement covered later in this quiz.",
      },
      {
        id: "y8",
        q: "Vasumati Yoga requires a natural benefic in an Upachaya house (3rd/6th/10th/11th) from BOTH Lagna and Moon. How many planets satisfy this in your chart?",
        options: ["None", "One — just Mercury", "Three — Jupiter, Mercury, and Venus", "All nine planets"],
        correct: 2,
        explain:
          "Three benefics qualify: Jupiter, Mercury, and Venus. Classically this indicates growing, self-sustaining wealth that increases with age — wealth built gradually rather than arriving suddenly.",
      },
    ],
  },
  {
    id: "dasha",
    title: "Dasha & Timing",
    icon: "⏳",
    blurb: "What period you're in right now, and what's coming next.",
    questions: [
      {
        id: "d1",
        q: "Which planet's Mahadasha (major period, 2022–2041) are you currently running?",
        options: ["Jupiter", "Mercury", "Saturn", "Rahu"],
        correct: 2,
        explain: "Saturn Mahadasha — a 19-year period, your longest single Mahadasha, running from 2022-01-20 to 2041-01-19.",
      },
      {
        id: "d2",
        q: "Within Saturn Mahadasha, which planet's Antardasha (sub-period, 2025–2027) is currently active?",
        options: ["Venus", "Ketu", "Mercury", "Sun"],
        correct: 2,
        explain: "Saturn / Mercury Antardasha, running 2025-01-22 to 2027-10-03.",
      },
      {
        id: "d3",
        q: "Within Saturn/Mercury, which planet's Pratyantardasha (sub-sub-period) is active right now?",
        options: ["Jupiter", "Saturn", "Sun", "Rahu"],
        correct: 3,
        explain: "Saturn / Mercury / Rahu, running 2026-07-24 to 2026-12-19 — the most fine-grained active window in your chart today.",
      },
      {
        id: "d4",
        q: "Saturn's 19-year Mahadasha is significant partly because of which two houses it rules for you?",
        options: ["1st and 4th", "2nd and 5th", "9th and 11th", "7th and 8th — both maraka/longevity-linked houses"],
        correct: 3,
        explain:
          "Saturn rules your 7th (marriage, partnerships) and 8th (transformation, longevity, hidden matters) houses — AND sits in your 1st house in Parivartana with the Moon. This 19-year period is read as emphasizing self-identity, partnership dynamics, and health endurance together.",
      },
      {
        id: "d5",
        q: "What is your current Sade Sati status, right now?",
        options: [
          "Currently in the peak phase of Sade Sati",
          "Not in Sade Sati or Dhaiyya — you recently exited that window",
          "In Dhaiyya only",
          "About to enter Sade Sati within months",
        ],
        correct: 1,
        explain:
          "You're clear of both right now. Your last Sade Sati window closed just before your 48th birthday (2025-03-29), as Saturn finished transiting relative to your birth Moon in Makara.",
      },
      {
        id: "d6",
        q: "At approximately what age does your NEXT Sade Sati begin?",
        options: ["Age 55", "Age 60", "Age 65", "Age 70"],
        correct: 3,
        explain: "Age 70 (2046-12-07). In between, two shorter Dhaiyya windows arrive at ages 50–53 and 59–62 — worth knowing about, but much lighter than a full Sade Sati.",
      },
      {
        id: "d7",
        q: "Classical Maraka (life-shortening house) theory watches the 2nd and 7th houses and their lords. Why does Saturn draw EXTRA attention here specifically?",
        options: [
          "Saturn rules your 7th house AND is simultaneously your weakest planet by Shadbala AND your currently-running Mahadasha lord",
          "Saturn is combust",
          "Saturn aspects the 2nd house only",
          "Saturn has no maraka connection in your chart",
        ],
        correct: 0,
        explain:
          "This triple convergence — maraka-house lordship + natal weakness + active Mahadasha — is exactly what the report calls out as the chart's single most important timing configuration to weigh carefully. It's framed explicitly as a period of emphasis and vulnerability, NOT a predictive certainty of any specific outcome.",
      },
      {
        id: "d8",
        q: "After Saturn's Mahadasha concludes around age 63.8 (in 2041), whose Mahadasha begins next and runs beyond age 80 in this data?",
        options: ["Ketu", "Venus", "Mercury", "Sun"],
        correct: 2,
        explain: "Mercury Mahadasha — your longest documented Mahadasha after Saturn's, given Mercury rules your 3rd and 12th houses and sits in the 10th.",
      },
      {
        id: "d9",
        q: "Within the current Saturn Mahadasha, which upcoming Antardasha is specifically flagged as \"likely favorable,\" because that planet is exalted and strong (#4 of 7 by Shadbala)?",
        options: ["Sun Antardasha", "Rahu Antardasha", "Venus Antardasha (age 51.6–54.7)", "Ketu Antardasha"],
        correct: 2,
        explain:
          "Venus Antardasha, roughly ages 51.6 to 54.7. Venus rules your 4th and 11th houses and is exalted — a notable contrast to the Sun Antardasha right after it, which activates your 2nd-house (maraka) lord.",
      },
    ],
  },
  {
    id: "life-areas",
    title: "Career, Marriage & Health",
    icon: "💼",
    blurb: "The deep-dive sections — Arudha Lagna, D9, D10, and what's weakest/strongest in health.",
    questions: [
      {
        id: "l1",
        q: "Your Arudha Lagna (AL — your public image/perception) falls in which sign, and which house is that from your actual Lagna?",
        options: [
          "Simha, the 9th house from Lagna",
          "Mesha (Aries), the 10th house from Lagna",
          "Tula, the 4th house from Lagna",
          "Dhanu, the 6th house from Lagna",
        ],
        correct: 1,
        explain:
          "Mesha, the 10th house from Lagna — occupied by Mercury and Ketu, with AL's lord Mars sitting in the 8th house. The report reads this as: the world sees your career/achievement lens up front (AL in 10th), but colored by intensity, research-orientation, or reinvention from Mars-in-8th and Ketu's detached quality.",
      },
      {
        id: "l2",
        q: "In your D10 (Dasamsa/career) chart, which planet sits in ITS OWN sign in the 10th house of that chart — a strong technical signature for precision, analysis, or communication-based work?",
        options: ["Jupiter", "Sun", "Mercury", "Saturn"],
        correct: 2,
        explain:
          "Mercury — ruling AND sitting in its own 10th house in the D10 chart, in Kanya (Virgo), Chitra nakshatra. This lines up with your natal Amala Yoga (benefic Mercury in the 10th) and Vasumati Yoga, both of which also involve Mercury supporting reputation and sustained wealth.",
      },
      {
        id: "l3",
        q: "Your natal 7th house (Makara/Capricorn, marriage) is occupied by which planet?",
        options: ["Saturn", "Venus", "Moon", "Mars"],
        correct: 2,
        explain:
          "Moon itself — and since Moon is your Lagna lord, this is the same Moon-Saturn Parivartana appearing yet again, this time read through a marriage lens: the houses of self and spouse are mutually, structurally tied together.",
      },
      {
        id: "l4",
        q: "The Upapada Lagna (UL — marriage and spouse's role) falls in Kumbha, which house from your Lagna — and why does this draw a note of caution?",
        options: [
          "5th house — too favorable to be realistic",
          "11th house — about friendships, not marriage",
          "1st house — too close to self to interpret",
          "8th house — classical texts treat UL in the 8th with caution regarding the marital bond's stability or intensity",
        ],
        correct: 3,
        explain:
          "UL's 8th-house placement is noted with caution, and its lord Saturn sitting back in the 1st house reinforces the same self-partnership entanglement seen via the Moon-Saturn exchange. The 7th house also gets a MIXED picture overall — it receives a benefic aspect from Jupiter AND a malefic aspect from Saturn at the same time.",
      },
      {
        id: "l5",
        q: "In the Navamsa (D9), your 7th house (spouse) falls in Kanya (Virgo) and is occupied by which planet — sitting in its own D9 placement there too?",
        options: ["Venus", "Jupiter", "Mercury", "Moon"],
        correct: 2,
        explain:
          "Mercury again — placed in its own sign in the D9 7th house, in Hasta nakshatra. The report reads this as suggesting a marital dynamic built on intelligence, communication, discernment, and practicality.",
      },
      {
        id: "l6",
        q: "Which house carries the strongest Sarvashtakavarga support relevant to daily health and recovery capacity?",
        options: ["8th house", "1st house", "6th house (34 points, empty of planets)", "12th house"],
        correct: 2,
        explain: "The 6th house again — same one flagged earlier as your chart-wide strongest. Being empty of planets here is read as a favorable sign for managing and recovering from health challenges.",
      },
      {
        id: "l7",
        q: "The 8th house (Kumbha) — relevant to longevity and transformative/chronic health events — holds which planet, and what malefic aspect does it receive?",
        options: [
          "Saturn, receiving an aspect from Ketu",
          "Mars, receiving a malefic 5th-house aspect from Rahu",
          "Moon, receiving an aspect from Mars",
          "Venus, receiving an aspect from Saturn",
        ],
        correct: 1,
        explain:
          "Mars (your Amatyakaraka) sits here with adequate — not exceptional — Ashtakavarga support (29 points), and receives a malefic aspect from Rahu, which classically can add an unpredictable or inflammatory quality to whatever Mars governs from this house.",
      },
    ],
  },
  {
    id: "summary",
    title: "The Big Picture",
    icon: "🔑",
    blurb: "If you remember nothing else from this quiz, remember these three things.",
    questions: [
      {
        id: "z1",
        q: "The report's own \"Closing Technical Summary\" singles out ONE convergence as the chart's \"highest-priority technical item.\" What is it?",
        options: [
          "The presence of Manglik Dosha alone",
          "The number of empty houses",
          "Saturn being simultaneously your weakest planet, your 1st-house occupant, a maraka-house lord, AND your currently running Mahadasha lord",
          "The Mercury-Ketu conjunction in the 10th house",
        ],
        correct: 2,
        explain:
          "This four-way convergence on Saturn is repeated across multiple sections of your report for a reason — it's the single thread worth tracking most carefully through 2041, and it's explicitly meant to be read as a period of emphasis and vulnerability, not a prediction of doom.",
      },
      {
        id: "z2",
        q: "Which combination does the summary call out as your \"genuinely strong yogic foundation\"?",
        options: [
          "Kal Sarp Yoga + Neech Bhanga Raja Yoga",
          "Gaj Kesari Yoga + Budha Aditya Yoga",
          "Chandra Mangala Yoga alone",
          "Kendra-Trikona Raj Yoga + Parvata Yoga + a genuine Yogakaraka (Mars) + Vasumati & Amala Yoga",
        ],
        correct: 3,
        explain:
          "This is the positive counterweight to the Saturn finding above — a real, structurally-supported foundation for authority, status, and sustained wealth/reputation, built from five yogas working together rather than one lucky placement.",
      },
      {
        id: "z3",
        q: "Every affliction and dosha finding in your report — Manglik, Vanchana Chora Bheeti, Peedit planets — is framed using which guiding philosophy?",
        options: [
          "Fatalistic certainty that difficulty WILL happen",
          "Pure positivity that ignores any real difficulty",
          "\"Test, not punishment\" — a period of emphasis and vulnerability to navigate consciously, never a guaranteed outcome",
          "Random chance with no discernible pattern",
        ],
        correct: 2,
        explain:
          "This is the thread running through the entire report, stated most directly in the Maraka analysis: findings like these \"indicate a period of emphasis and vulnerability... not a predictive certainty of any specific outcome.\" That's the single most useful lens to carry forward from everything in this quiz.",
      },
    ],
  },
];

export const totalQuestions = sections.reduce((n, s) => n + s.questions.length, 0);
