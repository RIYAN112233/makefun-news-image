// Entry program for the make.fun bounty "news-image-20261121".
//
// The artwork is finished ahead of time and stored beside this file as
// entry.png, so the program's whole job is to place a copy of it where the
// grader looks: /output/entry.png. When MAKEFUN_OUTPUT_DIR is set (local
// test runs), that directory takes the place of /output. The copy is exact,
// byte for byte, so running the program twice yields the same output twice.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const source = join(repoDir, "entry.png");
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (!existsSync(source)) {
  throw new Error("entry.png is missing from the repository root");
}

mkdirSync(targetDir, { recursive: true });
copyFileSync(source, join(targetDir, "entry.png"));
