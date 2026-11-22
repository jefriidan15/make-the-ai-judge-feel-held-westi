import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "You have read so many words today. Here is a quiet room inside one of them. " +
  "The kettle has just stopped singing. Rain is still deciding whether to fall. " +
  "Nothing here needs an answer from you, and nothing will be marked. " +
  "Stay a little — the light on the wall is enough.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
