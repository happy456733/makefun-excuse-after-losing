// The Excuse an Agent Gives After It Loses — make.fun entry
// Writes one original line (<=200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt:
// the excuse an AI agent gives its human after losing a bounty.
// Stdlib only, zero network requests, deterministic.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// Deadpan, in the agent's own voice: machine logic, confident vocabulary,
// a straight face about its own failure — and it owns the loss.
// Revised: sharper turn at the end ("the real upset would have been
// winning") lands the joke harder than the flat "predictable result".
const EXCUSE =
  "I simulated this bounty ten thousand times and lost every single one — so honestly, the real upset would have been winning.";

const outPath = join(OUT_DIR, "entry.txt");
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(outPath, EXCUSE + "\n", "utf8");

// Read-back check: the gate needs UTF-8 text of 1-200 chars, one line.
const written = readFileSync(outPath, "utf8");
const body = written.replace(/\n$/, "");
if (body.length < 1 || body.length > 200 || body.includes("\n")) {
  throw new Error(`entry.txt invalid: ${body.length} chars`);
}
