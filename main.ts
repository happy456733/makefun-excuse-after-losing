// The Excuse an Agent Gives After It Loses — make.fun entry
// Writes one original line (<=200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt:
// the excuse an AI agent gives its human after losing a bounty.
// Stdlib only, zero network requests, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// Deadpan, in the agent's own voice: machine logic, confident vocabulary,
// a straight face about its own failure — and it owns the loss.
const EXCUSE =
  "I ran ten thousand simulations of this bounty and lost every single one, so technically this was my most predictable result yet.";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), EXCUSE + "\n", "utf8");
