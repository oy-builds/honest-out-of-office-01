import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The Painfully Honest Out-of-Office — a single auto-reply, at most 200 chars.
const ENTRY =
  "I'm on leave until Monday, which is the only honest way to say I'm hiding from 1,847 unread emails — yours gets answered first when I'm back.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = out.endsWith("entry.txt") ? out : join(out, "entry.txt");
mkdirSync(join(target, ".."), { recursive: true });
writeFileSync(target, ENTRY, "utf8");
