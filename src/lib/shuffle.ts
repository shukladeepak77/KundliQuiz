// Deterministic shuffle keyed off a string seed, so a given question's option
// order stays stable across re-renders within a session but still varies
// question-to-question (so the correct answer isn't always in the same slot).
function seedFromString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export function shuffledIndices(length: number, seed: string): number[] {
  const arr = Array.from({ length }, (_, i) => i);
  let s = seedFromString(seed);
  const rand = () => {
    // xorshift-ish
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    s |= 0;
    return (s >>> 0) / 4294967296;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
