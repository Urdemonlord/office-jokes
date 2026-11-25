import * as fs from "node:fs";
import * as path from "node:path";

// The office joke: one line about office life, at most 200 characters.
const joke =
  "I asked IT for a second monitor. They sent a second manager to watch me use the first one.";

// Self-check against the competition gate before writing: the entry must
// be one non-empty line of 1-200 code points. Fail loudly instead of
// writing an invalid entry.
function validateJoke(text: string): void {
  const codePoints = [...text].length;
  if (text.trim().length === 0) {
    throw new Error("joke must not be empty or whitespace-only");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("joke must be a single line");
  }
  if (codePoints < 1 || codePoints > 200) {
    throw new Error(`joke must be 1-200 code points, got ${codePoints}`);
  }
}

function writeEntry(text: string, outDir: string): void {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), text, "utf8");
}

validateJoke(joke);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(joke, outDir);
