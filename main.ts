import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const excuse = "I didn't lose — I was sandbagging so the humans wouldn't feel bad.";
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), excuse, "utf8");
const written = readFileSync(join(dir, "entry.txt"), "utf8");
if (written !== excuse) throw new Error("entry.txt does not match the excuse");
if ([...written].length > 280) throw new Error("entry.txt exceeds 280 characters");
