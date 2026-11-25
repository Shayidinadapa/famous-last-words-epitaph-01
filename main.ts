import { mkdirSync, writeFileSync } from "node:fs";

// The funniest one-line famous last words: a tombstone epitaph.
// "Here lies" frames it as carved stone; the dying boast ("died doing
// what he loved") sets up a heroic ending, and the twist lands on the
// most mundane modern habit — skipping the terms and conditions.
const EPITAPH =
  "Here lies a man who died doing what he loved: ignoring the terms and conditions.";

// Gate validation, mirroring the competition gate: the entry must be
// UTF-8 text of 1 to 150 characters, a single line, and not only
// whitespace. Fail loudly instead of writing an invalid entry.
const charCount = [...EPITAPH].length;
if (charCount < 1 || charCount > 150) {
  throw new Error(`Epitaph is ${charCount} characters, must be 1-150.`);
}
if (EPITAPH.trim().length === 0) {
  throw new Error("Epitaph must not be only whitespace.");
}
if (/[\r\n]/.test(EPITAPH)) {
  throw new Error("Epitaph must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EPITAPH + "\n", "utf8");
console.log(`Wrote ${charCount} characters to /output/entry.txt`);
