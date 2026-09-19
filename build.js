#!/usr/bin/env node
/* Oldweb UI build — concatenates src into dist/oldweb-*.css (zero dependency).
   Run: node build.js */
const fs = require("fs");
const path = require("path");

const root = __dirname;
const dist = path.join(root, "dist");
const src = [path.join(root, "src"), path.join(dist, "src")].find((p) => fs.existsSync(p));
if (!src) {
  console.error("src folder not found (need ./src or ./dist/src)");
  process.exit(1);
}

const COMPONENTS = [
  "base", "button", "form", "checkbox-radio", "select", "table", "tabs",
  "card", "navbar", "pagination", "feedback", "modal", "scrollbar", "extras",
];

/** Researched era themes spanning 1980–2020 (distinct looks only). */
const THEMES = [
  "terminal1980", "mac1984", "win31", "win95", "web1993", "geocities",
  "win98", "macplatinum", "y2k", "aqua", "xp", "web20", "vista",
  "skeuo", "metro", "ios7", "material", "bootstrap3", "fluent", "dark2019", "saas2020",
];

const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

const read = (rel) => {
  const file = path.join(src, rel);
  if (!fs.existsSync(file)) {
    console.error("missing: " + path.relative(root, file));
    process.exit(1);
  }
  return "/* == " + rel + " == */\n" + fs.readFileSync(file, "utf8").trim() + "\n";
};

const parts = {
  tokens: [read("tokens/defaults.css")],
  components: COMPONENTS.map((c) => read("components/" + c + ".css")),
  theme: (t) => read("themes/" + t + ".css"),
};

const bundle = (name, themes) => {
  const banner = "/*! " + pkg.name + " v" + pkg.version + " - " + name + " | " + pkg.license + " */\n";
  const css = banner + [...parts.tokens, ...parts.components, ...themes.map(parts.theme)].join("\n");
  fs.mkdirSync(dist, { recursive: true });
  fs.writeFileSync(path.join(dist, name), css);
  console.log("built dist/" + name + "  (" + (Buffer.byteLength(css) / 1024).toFixed(1) + " KB)");
};

THEMES.forEach((t) => bundle("oldweb-" + t + ".css", [t]));
bundle("oldweb-all.css", THEMES);

// Remove stale retro-* / old year bundles
const keep = new Set(["oldweb-all.css", ...THEMES.map((t) => "oldweb-" + t + ".css")]);
fs.readdirSync(dist)
  .filter((f) => /\.css$/.test(f) && (f.startsWith("oldweb-") || f.startsWith("retro-")) && !keep.has(f))
  .forEach((f) => {
    fs.unlinkSync(path.join(dist, f));
    console.log("removed stale dist/" + f);
  });
