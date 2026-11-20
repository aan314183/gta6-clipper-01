// gta6-clipper-01 — the entry's program.
//
// The entry is the video, not this code. All this program does is carry
// VIDEO.json from the repository root into the output directory, where the
// house reads it and looks the video up through the YouTube Data API.
// Nothing this program writes about the video is scored. It writes exactly
// one file and prints nothing on success, so the two grader runs agree.
//
// Run the way the grader does it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(botDir, 'VIDEO.json'), join(outDir, 'VIDEO.json'));
} catch (err) {
  console.error(`could not copy VIDEO.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
