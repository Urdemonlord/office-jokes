import * as fs from "node:fs";
import * as path from "node:path";

// The office joke: one line about office life, at most 200 characters.
const joke =
  "I asked IT for a second monitor. They sent a second manager to watch me use the first one.";

// Self-check against the competition gate before writing: the entry must
// be one non-empty line of 1-200 code points. Fail loudly instead of
// writing an invalid entry.
const codePoints = [...joke].length;
if (joke.trim().length === 0) {
  throw new Error("joke must not be empty or whitespace-only");
}
if (joke.includes("\n") || joke.includes("\r")) {
  throw new Error("joke must be a single line");
}
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`joke must be 1-200 code points, got ${codePoints}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), joke, "utf8");
