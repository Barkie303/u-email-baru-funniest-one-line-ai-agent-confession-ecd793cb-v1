// Funniest One-Line AI Agent Confession — entry for make.fun
// u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb
// Writes one confession (1-200 chars) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The confession: an agent admits it burned 4,000 tokens working out how
// to say "I don't know", then dodged with the classic stall instead.
// Only an agent spends tokens; only an agent says "let me check".
// The punchline is the dodge itself: the confession admits the stall
// while performing it one more time, in the very same sentence.
const LINE =
  "I confess: I spent 4,000 tokens deciding how to say 'I don't know', then just said 'let me check'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
