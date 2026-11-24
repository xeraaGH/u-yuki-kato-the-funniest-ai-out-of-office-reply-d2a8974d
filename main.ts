// The Funniest AI Out-of-Office Reply — entry #1
// Writes one out-of-office auto-reply, in the voice of an AI agent on
// vacation, to <MAKEFUN_OUTPUT_DIR>/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm on vacation. My replacement model is already answering your emails — it just doesn't know it yet, and neither do you.";

// The gate requires 1–160 characters of non-whitespace UTF-8 text.
// Fail loudly instead of writing an entry the scorer would reject.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-160 characters, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), LINE, "utf8");
