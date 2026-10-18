import type { Person } from "../types";

const sections = [
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
      {
        id: "p9",
        q: "Mercury and Ketu both sit in your 10th house, but how far apart are they in exact degrees — and why does the report call this \"a loose but real conjunction\"?",
        options: [
          "16.9° apart — close enough to count as conjunct and color each other, but not a tight, high-intensity conjunction",
          "0.01° apart — essentially the same exact point",
          "They're not actually conjunct, just in the same house",
          "29° apart — barely counts at all",
        ],
        correct: 0,
        explain:
          "Mercury sits at 17.90° in Mesha and Ketu at 0.98° — a 16.9° gap. Classical texts treat conjunctions within the same sign as real even when not razor-tight, so this still counts, just as a \"loose\" rather than exact one. The report reads it as giving an intuitive, non-linear intellect: insight that arrives suddenly rather than through step-by-step reasoning.",
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
      {
        id: "s7",
        q: "By Shadbala, how many planets land in the top \"Strong\" tier (Sun, Mars, Jupiter, Venus)?",
        options: ["Two", "Three", "Four", "All seven"],
        correct: 2,
        explain:
          "Four planets rank \"Strong\": Sun (#1, 1.76x), Mars (#2, 1.39x), Jupiter (#3, 1.27x), Venus (#4, 1.26x). Moon and Mercury rank \"Adequate\" (#5 and #6), and Saturn alone falls \"Below Requirement\" at #7.",
      },
      {
        id: "s8",
        q: "The Graha Sthiti table classifies every planet as a functional benefic (Shubh), malefic (Ashubh), or Neutral for Karka Lagna specifically — based on which houses each planet owns. Which TWO planets are functional benefics (Shubh) for you?",
        options: ["Sun and Jupiter", "Moon and Mars", "Venus and Mercury", "Saturn and Rahu"],
        correct: 1,
        explain:
          "Moon (owns your 1st house) and Mars (owns your 5th and 10th) are both Shubh — genuinely helpful by house-ownership for Karka Lagna. Mercury, Saturn, Rahu, and Ketu are Ashubh (functional malefics); Sun, Jupiter, and Venus come out Neutral.",
      },
      {
        id: "s9",
        q: "How many planets are classified as functional malefics (Ashubh) for your Lagna, by house ownership?",
        options: ["Two", "Three", "Four — Mercury, Saturn, Rahu, and Ketu", "None"],
        correct: 2,
        explain:
          "Four: Mercury (owns 3rd & 12th), Saturn (owns 7th & 8th), plus Rahu and Ketu (both classed Ashubh by default for this Lagna, owning no houses themselves). Notably Saturn is BOTH a functional malefic by ownership AND your weakest planet by Shadbala — a double strike worth remembering.",
      },
      {
        id: "s10",
        q: "Beyond its weak Shadbala, Saturn's own Bhinnashtakavarga score in its natal sign (Karka) is also strikingly low. What is it, out of a possible 8?",
        options: ["7 of 8", "5 of 8", "2 of 8 — among the lowest individual-planet scores in the whole chart", "0 of 8"],
        correct: 2,
        explain:
          "Just 2 of 8 — stacking a third weak-Saturn signal on top of its below-minimum Shadbala and its 1st-house/maraka-lord/current-Mahadasha convergence. It's tempered somewhat by Saturn sitting in its own nakshatra (Pushya), which the report notes lends some stabilizing quality despite the otherwise low numbers.",
      },
      {
        id: "s11",
        q: "The Sarvashtakavarga total across all 12 rashis should equal a fixed classical number if the chart is computed correctly — otherwise it signals a computation error. What is that number, and does this chart hit it?",
        options: [
          "360 — and this chart falls short",
          "337 — and this chart matches it exactly",
          "300 — and this chart exceeds it",
          "The report doesn't check this",
        ],
        correct: 1,
        explain:
          "337 is the classical fixed total, and this chart's Sarvashtakavarga sums to exactly 337 across all 12 rashis — confirming the computation is sound, not just a reading of raw numbers. The report flags this explicitly as a self-check, not just a data point.",
      },
      {
        id: "s12",
        q: "True or false: Saturn is debilitated (Neech) in this chart, since it sits in Karka (Cancer) — a water sign often associated with emotional vulnerability for a planet like Saturn.",
        options: [
          "True — Karka is Saturn's debilitation sign",
          "False — Saturn's actual debilitation sign is Mesha (Aries); in Karka it's simply neither exalted nor debilitated",
          "True, but only partially (Neecha Bhanga cancels it)",
          "Undetermined from the data",
        ],
        correct: 1,
        explain:
          "A common mix-up worth clearing up: Saturn's classical debilitation sign is Mesha (Aries), and its exaltation sign is Tula (Libra). Sitting in Karka, Saturn's Ucch/Neech status is simply \"—\" (neither) — its weakness in this chart comes entirely from Shadbala and Bhinnashtakavarga, not from debilitation.",
      },
      {
        id: "s13",
        q: "Even though the Asta Grahas table confirms NO planet technically crosses the combustion orb, the Personality section still adds a classical caveat about Venus specifically. What is it?",
        options: [
          "Venus sitting right next to the Sun is still \"vulnerable to combustion\" by classical proximity, which can mute its full expression even while exalted",
          "Venus is secretly combust despite what the table says",
          "There is no such caveat — Venus is unaffected",
          "The caveat is about Mercury, not Venus",
        ],
        correct: 0,
        explain:
          "A genuinely subtle point worth sitting with: passing the technical combustion-orb check and being entirely free of classical proximity concerns aren't quite the same thing. Venus sits very close to the Sun in your 9th house, and even though it stays outside the formal combustion orb (confirmed CLEAR, no Peedit marker), classical texts still note that such closeness can soften a planet's full expression — here, potentially tempering how fully Venus's exaltation benefits come through, even though nothing in the data says this has definitely happened.",
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
      {
        id: "y9",
        q: "Parvata Yoga (a Raja Yoga, present in your chart) forms as an alternate trigger when the Lagna lord and the 12th lord are both placed where?",
        options: [
          "Both in Kendras (angular houses) — Moon in the 7th, Mercury in the 10th",
          "Both debilitated",
          "Both in the 8th house together",
          "Both retrograde",
        ],
        correct: 0,
        explain:
          "Lagna lord Moon (7th house) and 12th lord Mercury (10th house) are both in Kendras — the classical alternate trigger for Parvata Yoga, adding to your chart's cluster of status-supporting combinations.",
      },
      {
        id: "y10",
        q: "Sunapha Yoga (present, a Lunar Yoga) forms when a natural malefic occupies the 2nd sign from the Moon. Which planet creates it for you, and what does it classically indicate?",
        options: [
          "Saturn — delays and restriction",
          "Mars, in Kumbha (2nd from Moon's Makara) — self-earned wealth and a capable, intelligent mind, with more friction along the way",
          "Rahu — sudden, unstable gains",
          "Ketu — detachment from wealth entirely",
        ],
        correct: 1,
        explain:
          "Mars sits in the 2nd sign from your Moon, forming Sunapha Yoga — classically read as self-made drive and a sharp, capable mind, achieved with somewhat more friction than a benefic-formed version of the same yoga would carry.",
      },
      {
        id: "y11",
        q: "Obhayachari Yoga (present, a Solar Yoga) forms when the Sun is flanked on both sides by planets in the signs immediately before and after it. Which two planets flank your Sun?",
        options: [
          "Mars (12th from Sun) and Mercury (2nd from Sun)",
          "Moon and Saturn",
          "Jupiter and Venus",
          "Rahu and Ketu",
        ],
        correct: 0,
        explain:
          "Mars sits in the 12th sign from your Sun, and Mercury in the 2nd — flanking it on both sides. Classically this indicates a balanced, well-supported, resourceful nature.",
      },
      {
        id: "y12",
        q: "Shankha Yoga (present, a Raja Yoga) requires the 5th and 6th lords to sit in mutual Kendras alongside a powerful Moon. Which two house-lords form it in your chart?",
        options: [
          "5th lord Mars and 6th lord Jupiter",
          "5th lord Venus and 6th lord Saturn",
          "5th lord Sun and 6th lord Mercury",
          "5th lord Moon and 6th lord Rahu",
        ],
        correct: 0,
        explain:
          "Your 5th lord Mars and 6th lord Jupiter sit in mutual Kendras, alongside a strong Moon — classically indicating a long, prosperous life, sound judgement, and a charitable nature.",
      },
      {
        id: "y13",
        q: "Parijata Yoga (present, a Raja Yoga) is a more technical check: the lord of the sign held by the Lagna lord's own dispositor must itself be well placed (Kendra, Trikona, own, or exaltation sign). What does its presence classically indicate?",
        options: [
          "A fortunate, well-supported life despite a modest or humble start",
          "Certain poverty throughout life",
          "No children",
          "A short lifespan",
        ],
        correct: 0,
        explain:
          "Parijata Yoga is a quieter, more technical addition to your yogic foundation — it rounds out the chart's overall tilt toward eventual stability and support, even if early circumstances were modest.",
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
      {
        id: "d10",
        q: "Your full Vimshottari Mahadasha sequence runs 9 planets across 120 years. Which planet's Mahadasha was running at the moment you were born?",
        options: ["Ketu", "Rahu", "Moon (1977–1981)", "Jupiter"],
        correct: 2,
        explain:
          "Moon Mahadasha (1977-04-12 to 1981-01-20) — only 3.77 years, the leftover balance from your Moon's nakshatra at birth (Shravana). The full sequence from there: Mars → Rahu → Jupiter → Saturn (current) → Mercury → Ketu → Venus → Sun, each a fixed classical duration regardless of chart.",
      },
      {
        id: "d11",
        q: "Which Mahadasha in your sequence is the SHORTEST of all nine (just 6 years)?",
        options: ["Ketu", "Mars", "Sun", "Moon"],
        correct: 2,
        explain:
          "Sun Mahadasha is only 6 years — the shortest of the nine, and also the very last one in your documented 120-year cycle (2085 to 2091). Ketu and Mars are both 7 years each, the next-shortest.",
      },
      {
        id: "d12",
        q: "The report runs a \"Step 3 — MD/AD Inter-Relationship\" check: how do your Mahadasha lord (Saturn, House 1) and Antardasha lord (Mercury, House 10) relate to each other structurally?",
        options: [
          "They're enemies with no relationship",
          "They form a Kendra (angular) axis 10 houses apart — mutually visible and influential, classified Neutral, with mixed results depending on each planet's own strength",
          "They're in the same house",
          "Mercury blocks all of Saturn's results",
        ],
        correct: 1,
        explain:
          "Saturn (House 1) and Mercury (House 10) sit on a 4th/10th kendra axis — angular to each other, so each is visible and influential on the other. The report classifies this relationship as Neutral: it doesn't predict smooth or rocky results on its own, it just means the two periods are structurally linked.",
      },
      {
        id: "d13",
        q: "\"Step 5\" of the dasha analysis lists every house \"currently activated\" by your full running dasha stack (Mahadasha + Antardasha + Pratyantardasha combined). How many distinct houses does that add up to?",
        options: ["Three", "Five", "Seven — houses 1, 3, 4, 7, 8, 10, and 12", "All twelve"],
        correct: 2,
        explain:
          "Seven houses are activated at once right now: 1st & 7th & 8th (via Saturn's Mahadasha — it sits in the 1st and rules the 7th and 8th), 3rd & 12th (via Mercury's Antardasha — sits in 10th, rules 3rd and 12th... the 10th itself plus those two), and the 4th (via Rahu's Pratyantardasha). That's an unusually wide, simultaneous spread.",
      },
      {
        id: "d14",
        q: "\"Step 6 — Layering Transits (Gochar)\" gives the report's rule for pinpointing exact timing. In one sentence: dashas show what CAN happen; what do transits show?",
        options: [
          "Transits show WHEN — specifically, when transiting Jupiter AND transiting Saturn both simultaneously aspect or transit the same house already activated by your dasha stack, that's the strongest signal a real event is about to manifest",
          "Transits are irrelevant once a dasha is running",
          "Transits only matter for health, not other life areas",
          "Transits replace the dasha system entirely",
        ],
        correct: 0,
        explain:
          "This is the report's explicit \"final clock\" for timing: the dasha stack sets the stage (which houses/themes are active for potentially years at a time), but the double-transit rule — Jupiter AND Saturn both hitting the same already-activated house at once — is what narrows a years-long window down to a specific period.",
      },
      {
        id: "d15",
        q: "Once your eventual Mercury Mahadasha begins (after Saturn concludes around age 63.8), which Antardasha runs first within it?",
        options: ["Mercury's own Antardasha (age 63.8–66.2)", "Ketu's", "Venus's", "Saturn's"],
        correct: 0,
        explain:
          "Every Mahadasha opens with that same planet's own Antardasha first — so Mercury/Mercury runs age 63.8 to 66.2, followed by Ketu, Venus, Sun, Moon, Mars, Rahu, Jupiter, and finally Saturn to close out the Mahadasha. Within that sequence, Venus's Antardasha (age 67.2–70.0) again stands out as likely favorable, same reasoning as its Saturn-Mahadasha appearance — it's exalted and strong.",
      },
      {
        id: "d16",
        q: "Looking ahead within the CURRENT Saturn Mahadasha, which future Antardasha does the Maraka analysis specifically flag as worth separate attention — because it directly activates your 2nd-house (maraka) lord?",
        options: [
          "Sun Antardasha (age 54.7–55.7)",
          "Jupiter Antardasha",
          "Rahu Antardasha",
          "Mars Antardasha",
        ],
        correct: 0,
        explain:
          "Sun rules your 2nd house (a maraka house) and is otherwise your strongest planet — so when its Antardasha runs (age 54.7 to 55.7) within the already-weak-Saturn Mahadasha, the report calls this out for separate technical attention, immediately following the Venus Antardasha right before it.",
      },
    ],
  },
  {
    id: "navamsa",
    title: "D9 Navamsa Chart",
    icon: "💎",
    blurb: "Your inner chart — marriage themes, dharmic depth, and hidden planetary strength.",
    questions: [
      {
        id: "n1",
        q: "What sign does your D9 (Navamsa) Lagna fall in — different from your D1 Lagna (Karka)?",
        options: ["Meena (Pisces)", "Mithuna (Gemini)", "Vrishchika (Scorpio)", "Tula (Libra)"],
        correct: 0,
        explain:
          "Your D9 Lagna is Meena (Pisces), in Uttara Bhadrapada nakshatra pada 3 — the Navamsa chart always has its own, independently-calculated Lagna, which reveals inner strength and marriage themes beneath the surface-level D1.",
      },
      {
        id: "n2",
        q: "Two planets share your D9 Lagna's sign (Meena) in the 1st house of the Navamsa — the same planets conjunct in your D1 9th house too. Which two?",
        options: ["Mars and Saturn", "Sun and Jupiter", "Mercury and Ketu", "Moon and Rahu"],
        correct: 1,
        explain:
          "Sun and Jupiter both land in Meena in the D9 1st house — echoing their closeness in the D1 9th house (where Sun sits with exalted Venus, and Jupiter rules that house). This repetition across both charts strengthens the dharma/higher-learning/father theme running through your chart.",
      },
      {
        id: "n3",
        q: "Where does your D9 Moon fall?",
        options: ["Mithuna (Gemini), 4th house, Ardra nakshatra", "Makara, 1st house", "Simha, 7th house", "Kumbha, 9th house"],
        correct: 0,
        explain:
          "D9 Moon sits in Mithuna (Gemini), 4th house, Ardra nakshatra pada 3 — quite different from its D1 placement in Makara. Comparing a planet's D1 and D9 sign is exactly how Vargottama status gets checked (same sign in both = Vargottama, extra strength); Moon isn't Vargottama here.",
      },
      {
        id: "n4",
        q: "Your D9 Saturn moves to a very different sign than its D1 placement (Karka). Where does it land in the Navamsa?",
        options: ["Vrishchika (Scorpio), 9th house, Jyeshtha nakshatra", "Mesha, debilitated", "Tula, exalted", "Still in Karka"],
        correct: 0,
        explain:
          "D9 Saturn sits in Vrishchika (Scorpio), 9th house, Jyeshtha nakshatra pada 4 — a sign change from its D1 Karka placement, as expected (D9 recalculates every planet's position independently from its exact D1 degree).",
      },
      {
        id: "n5",
        q: "Which planet is still RETROGRADE in the D9 chart, just as it was in D1 — and sits in the 10th house there, in Dhanu (Purva Ashadha nakshatra)?",
        options: ["Venus", "Mars", "Mercury", "Jupiter"],
        correct: 0,
        explain:
          "Venus — retrograde in both D1 and D9, a planet's retrograde status being a birth-time fact that carries through every divisional chart. In D9 it sits in Dhanu, 10th house, Purva Ashadha pada 3.",
      },
      {
        id: "n6",
        q: "D9 Mercury sits in Kanya (Virgo) — ITS OWN sign — in which house of the Navamsa, matching the 7th-house-from-Lagna marriage theme discussed earlier in this quiz?",
        options: ["7th house, Hasta nakshatra", "1st house", "10th house", "4th house"],
        correct: 0,
        explain:
          "D9 Mercury sits in its own sign (Kanya) in the 7th house — Hasta nakshatra pada 1. Mercury ruling and occupying its own D9 7th house is the exact technical fact behind the earlier marriage-chart question about intelligence, communication, and practicality in partnership themes.",
      },
      {
        id: "n7",
        q: "D9 Rahu sits in Tula (Libra), 8th house, Swati nakshatra. Which planet occupies the opposite point, Ketu, in the D9 chart?",
        options: ["Mesha (Aries), 2nd house, Ashwini nakshatra", "Same sign as Rahu", "Meena, 1st house", "Kumbha, 12th house"],
        correct: 0,
        explain:
          "D9 Ketu sits in Mesha (Aries), 2nd house, Ashwini nakshatra pada 3 — Rahu and Ketu always sit exactly 6 signs (180°) apart from each other, in every divisional chart including D9, since they're mathematically opposite points by definition.",
      },
    ],
  },
  {
    id: "aspects",
    title: "Planet-to-Planet Aspects",
    icon: "↔️",
    blurb: "Graha Drishti — who's casting a benefic or malefic gaze onto whom.",
    questions: [
      {
        id: "g1",
        q: "How many total aspecting pairs does your chart's Graha Drishti (planet-to-planet aspect) table list?",
        options: ["Five", "Eight", "Eleven", "Twenty"],
        correct: 2,
        explain:
          "11 distinct aspecting pairs are listed — every planet casts its classical 7th-house aspect onto whatever sits there, and Mars/Jupiter/Rahu/Ketu/Saturn additionally cast their special extra aspects (Mars: 4th & 8th; Jupiter/Rahu/Ketu: 5th & 9th; Saturn: 3rd & 10th).",
      },
      {
        id: "g2",
        q: "Which planet receives MALEFIC aspects from BOTH Saturn and Rahu simultaneously — part of why it carries a MINOR affliction marker?",
        options: ["Mercury", "Venus", "Jupiter", "Sun"],
        correct: 0,
        explain:
          "Mercury takes a malefic 10th-house aspect from Saturn AND a malefic 7th-house aspect from Rahu at once — exactly the two markers behind its MINOR Peedit classification covered earlier in this quiz.",
      },
      {
        id: "g3",
        q: "Is Jupiter's 9th-house aspect onto your Moon classified as benefic or malefic?",
        options: ["Benefic", "Malefic", "Neutral — aspects don't carry a nature", "Not listed in the chart"],
        correct: 0,
        explain:
          "Benefic — Jupiter is a natural benefic, so every aspect it casts (including this 9th-house one onto Moon) carries a positive classical nature, regardless of which house or planet receives it. This is the one bright note landing directly on an otherwise-afflicted Moon.",
      },
      {
        id: "g4",
        q: "Saturn casts malefic aspects onto how many different planets in your chart (and which ones)?",
        options: [
          "Three — Moon (7th aspect), Mercury (10th aspect), and Ketu (10th aspect)",
          "Just one — Moon",
          "Five — nearly every planet",
          "None — Saturn's aspects are all benefic here",
        ],
        correct: 0,
        explain:
          "Saturn is the most \"active\" malefic aspector in your chart, reaching three separate planets at once: Moon via its 7th-house aspect, and both Mercury and Ketu via its special 10th-house aspect (a Saturn-specific extra aspect, alongside its 3rd).",
      },
      {
        id: "g5",
        q: "Mars casts its special 4th-house aspect onto which planet, classified malefic?",
        options: ["Jupiter", "Venus", "Saturn", "Sun"],
        correct: 0,
        explain:
          "Mars's special 4th-house aspect (one of its two extra aspects beyond the universal 7th, the other being the 8th) lands on Jupiter, and is classified malefic since Mars is a natural malefic.",
      },
      {
        id: "g6",
        q: "Rahu and Ketu cast malefic aspects on each other in BOTH directions (Rahu's 7th aspect reaches Ketu, and Ketu's 7th aspect reaches Rahu right back). What does this mutual-aspect pattern technically represent, given Rahu and Ketu sit exactly opposite each other?",
        options: [
          "It's just the universal 7th-house aspect every planet casts on whatever's directly opposite it — not a special extra aspect for either",
          "A unique yoga found nowhere else in the chart",
          "Proof that Rahu and Ketu are debilitated",
          "A sign that Kal Sarp Yoga is present",
        ],
        correct: 0,
        explain:
          "Since Rahu and Ketu are always exactly 180° apart, they always sit in each other's 7th house from one another — so this \"mutual malefic aspect\" is really just the ordinary universal 7th-house aspect every planet casts, not a special technique unique to these two. A useful reminder not to over-read a structurally inevitable pattern as something exotic.",
      },
    ],
  },
  {
    id: "bhava-lordship",
    title: "Bhava Lordship",
    icon: "👑",
    blurb: "Every house's ruling planet, where that ruler sits, and how it gets along with your Lagna lord.",
    questions: [
      {
        id: "v1",
        q: "Since Moon is both your Lagna lord AND sits in your 7th house, what is Moon's \"Vs. Lagna Lord\" friendship classification in the Bhava Lordship table — a special case different from every other house?",
        options: ["\"Self (Lagna Lord)\" — it's compared against itself", "Best Friend", "Enemy", "Bitter Enemy"],
        correct: 0,
        explain:
          "The 1st house's own entry reads \"Self (Lagna Lord)\" rather than a friendship grade, since Moon IS the Lagna lord being used as the reference point for every other house's comparison — it can't be its own friend or enemy.",
      },
      {
        id: "v2",
        q: "Which single planet rules BOTH your 6th and 9th houses at once (an unusual house-lord pairing, since 6th is a Dusthana and 9th is a Trikona)?",
        options: ["Jupiter", "Saturn", "Venus", "Mars"],
        correct: 0,
        explain:
          "Jupiter rules both your 6th (Dusthana — daily work, obstacles) and 9th (Trikona — dharma, fortune) houses, sitting in your 11th house (Vrishabha, Krittika nakshatra). A mixed-house-type lordship like this is why Jupiter's own placement and strength matter so much for how BOTH of these life areas unfold.",
      },
      {
        id: "v3",
        q: "How many of your 12 house-lords are classified \"Enemy\" to your Lagna lord Moon, by Panchadha Maitri (five-fold combined friendship)?",
        options: [
          "Four — the 6th, 7th, 8th, and 9th house lords (Jupiter×2 and Saturn×2)",
          "None",
          "All twelve",
          "Two"
        ],
        correct: 0,
        explain:
          "Four houses carry an \"Enemy\" grade against Moon: the 6th and 9th (both ruled by Jupiter) and the 7th and 8th (both ruled by Saturn). Houses whose lord is a Best Friend or Friend to the Lagna lord tend to support the self more readily; these four lean the other way structurally.",
      },
      {
        id: "v4",
        q: "Which house is classified as BOTH a Kendra (angular) AND Upachaya (growth house) simultaneously — the only house in your chart with that double nature?",
        options: ["10th house", "1st house", "4th house", "11th house"],
        correct: 0,
        explain:
          "The 10th house (career, public standing) carries the dual Kendra/Upachaya nature — meaning it's both structurally foundational (Kendra) AND the type of house that improves with age and effort (Upachaya). Its lord is Mars, sitting in your 8th house.",
      },
      {
        id: "v5",
        q: "Three houses in your chart share \"Best Friend\" status with your Lagna lord Moon — the most favorable Panchadha Maitri grade. Which houses are they?",
        options: [
          "2nd, 3rd, and 12th (ruled by Sun, Mercury, and Mercury again)",
          "1st, 5th, and 9th",
          "4th, 8th, and 11th",
          "6th, 7th, and 10th",
        ],
        correct: 0,
        explain:
          "The 2nd house (ruled by Sun) and both the 3rd and 12th houses (both ruled by Mercury) carry \"Best Friend\" status — the most favorable grade on the table, meaning these houses' affairs tend to be most readily supported by your core identity.",
      },
      {
        id: "v6",
        q: "Which TWO houses does Venus rule together in your chart?",
        options: ["4th and 11th", "2nd and 7th", "3rd and 9th", "1st and 6th"],
        correct: 0,
        explain:
          "Venus rules your 4th (Kendra — home, mother, inner peace) and 11th (Upachaya — gains, networks, hopes) houses, sitting in your 9th house in Meena (Revati nakshatra) — the same exalted, retrograde Venus that conjuncts the Sun and anchors your Atmakaraka reading.",
      },
      {
        id: "v7",
        q: "Mercury sits in your 10th house — but which TWO different houses does it actually RULE (own as lord)?",
        options: ["3rd and 12th", "2nd and 5th", "6th and 8th", "1st and 7th"],
        correct: 0,
        explain:
          "Mercury rules your 3rd (Upachaya — courage, communication) and 12th (Dusthana — expenses, foreign lands, spiritual liberation) houses — while itself SITTING in the 10th house. It's easy to confuse \"which house a planet rules\" with \"which house it sits in\"; Mercury's ownership is 3rd/12th, its placement is the 10th.",
      },
      {
        id: "v8",
        q: "Which house's own classical nature is \"Dusthana\" (a difficult house) yet its lord Saturn happens to be sitting in a Kendra (the 1st house) — potentially softening its results somewhat?",
        options: ["8th house", "9th house", "11th house", "4th house"],
        correct: 0,
        explain:
          "The 8th house (Dusthana by nature — transformation, longevity, hidden matters) is ruled by Saturn, which sits back in the Kendra 1st house. A Dusthana lord placed in a Kendra is a mildly stabilizing technical detail, though it doesn't erase Saturn's own weak Shadbala or the 8th house's inherently challenging nature.",
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
      {
        id: "l8",
        q: "In the D10 chart, which planet sits in its OWN sign (Simha/Leo) in the 9th house, supporting an authoritative, visible professional role — consistent with that same planet's #1 Shadbala ranking natally?",
        options: ["Sun, in Purva Phalguni nakshatra", "Saturn", "Rahu", "Mercury"],
        correct: 0,
        explain:
          "D10 Sun sits strong and well-placed in its own sign (Simha) in the 9th house, in Purva Phalguni nakshatra. The report connects this directly back to natal Sun's #1-of-7 Shadbala ranking — the same planet that's strongest in your birth chart also lands in a dignified position in your dedicated career chart.",
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

export const deepakShukla: Person = {
  slug: "deepak-shukla",
  name: "Deepak Shukla",
  lagna: "Karka (Cancer)",
  reportDate: "October 08, 2026",
  sections,
};
