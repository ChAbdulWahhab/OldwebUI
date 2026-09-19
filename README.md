# Oldweb UI

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Release](https://img.shields.io/github/v/release/ChAbdulWahhab/OldwebUI?color=0a7)](https://github.com/ChAbdulWahhab/OldwebUI/releases)
[![Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://chabdulwahhab.github.io/OldwebUI/demo.html)

**Authentic interface looks from 1980–2020** — a zero-dependency CSS library.

Set one attribute on `<html>`, optionally add `.r-*` classes. Buttons, forms, tables, and links style themselves (classless mode).

**[Live demo →](https://chabdulwahhab.github.io/OldwebUI/demo.html)** · **[Download v1.0.0 →](https://github.com/ChAbdulWahhab/OldwebUI/releases/tag/v1.0.0)**

```html
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/ChAbdulWahhab/OldwebUI@v1.0.0/dist/oldweb-all.css">
<html lang="en" data-oldweb="win95">
```

---

## Quick start

### CDN (jsDelivr via GitHub)

All themes (~one file):

```html
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/ChAbdulWahhab/OldwebUI@v1.0.0/dist/oldweb-all.css">
<html data-oldweb="web20">
```

Single theme (smaller ~36 KB):

```html
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/ChAbdulWahhab/OldwebUI@v1.0.0/dist/oldweb-xp.css">
<html data-oldweb="xp">
```

Pin a release tag (`@v1.0.0`) in production. For bleeding-edge you can use `@main`, but versions are safer.

### Download

Grab CSS from the latest **[GitHub Release](https://github.com/ChAbdulWahhab/OldwebUI/releases)** and self-host `dist/`, or clone the repo and use the files locally.

### npm *(coming soon)*

Package name will be `@chabdulwahab/oldweb-ui`. After publish:

```bash
npm install @chabdulwahab/oldweb-ui
```

```js
import "@chabdulwahab/oldweb-ui";
// or: import "@chabdulwahab/oldweb-ui/win95";
```

### Switch themes in JS

```js
document.documentElement.setAttribute("data-oldweb", "metro");
```

---

## Themes (researched eras, 1980–2020)

Similar consecutive years are **not** duplicated. Each theme maps to a real design language:

| `data-oldweb` | Era | What it recreates |
|---------------|------|-------------------|
| `terminal1980` | ~1980 | CRT green-phosphor terminal |
| `mac1984` | 1984 | Macintosh System 1 (1-bit B&W) |
| `win31` | 1992 | Windows 3.1 Program Manager greys |
| `web1993` | 1993 | Mosaic / early WWW (Times + blue links) |
| `win95` | 1995 | Windows 95 teal `#008080` + silver `#c0c0c0` |
| `geocities` | 1996 | GeoCities personal pages |
| `win98` | 1998 | Windows 98 classic bevels |
| `macplatinum` | 1998 | Mac OS 8/9 Platinum |
| `y2k` | 2000 | Y2K / Flash metallic chrome |
| `aqua` | 2001 | Mac OS X Aqua (gel / candy) |
| `xp` | 2001 | Windows XP Luna |
| `web20` | 2005–08 | Peak Web 2.0 gloss |
| `vista` | 2007 | Windows Vista Aero glass |
| `skeuo` | 2010 | iOS skeuomorphism (linen + gloss) |
| `metro` | 2010–12 | Metro / Modern UI flat tiles |
| `ios7` | 2013 | iOS 7 flat (`#007AFF`) |
| `material` | 2014 | Google Material Design |
| `bootstrap3` | 2015 | Bootstrap 3 SaaS docs look |
| `fluent` | 2017 | Microsoft Fluent / Win10 dark |
| `dark2019` | 2019 | Dark mode + soft / neumorphic UI |
| `saas2020` | 2020 | Modern product / SaaS UI |

**Sources:** [History of UI](https://www.historyofui.com/), [desktopcolors.com](https://desktopcolors.com/os/windows-95) (Win95 teal), Apple Appearance Manager / Aqua era notes, Microsoft Luna / Metro / Fluent eras, Material Design 2014, Bootstrap 3 defaults.

Bundles: `dist/oldweb-<id>.css` or `dist/oldweb-all.css`.

---

## Classless vs classes

**Classless** (no class needed when `data-oldweb` is set):  
`button`, `input`, `select`, `textarea`, `table`, `a`, headings, `hr`, `code`, `kbd`, `blockquote`, `progress`, `fieldset`, `dialog`, checkboxes/radios, scrollbars.

**Opt-in `.r-*` classes** for layout and variants — see below.

---

## Class reference

### Layout

| Class | Purpose |
|-------|---------|
| `.r-container` | Centered ~960px content panel |
| `.r-muted` | Secondary / muted text |
| `.r-full` | `width: 100%` (tables) |

```html
<div class="r-container">
  <h1>My site</h1>
  <p class="r-muted">Est. 1998</p>
</div>
```

### Buttons

| Class | Purpose |
|-------|---------|
| `.r-btn` | Style an `<a>` as a button |
| `.r-btn-primary` | Primary action |
| `.r-btn-danger` | Destructive action |
| `.r-btn-sm` / `.r-btn-lg` | Size |
| `.r-btn-block` | Full width |

```html
<button class="r-btn-primary">Save</button>
<a class="r-btn r-btn-danger" href="#">Delete</a>
```

### Forms

| Class | Purpose |
|-------|---------|
| `.r-field` | Label + control group |
| `.r-hint` | Helper text under a field |
| `.r-input-block` | Full-width control |

```html
<div class="r-field">
  <label for="email">Email</label>
  <input id="email" type="email" class="r-input-block">
  <span class="r-hint">We never share this.</span>
</div>
```

### Navbar

`.r-nav`, `.r-nav-brand`, `.r-nav-spacer`, `.active` / `[aria-current]`

```html
<nav class="r-nav">
  <a class="r-nav-brand" href="#">Oldweb UI</a>
  <ul>
    <li><a class="active" href="#">Docs</a></li>
  </ul>
  <span class="r-nav-spacer"></span>
  <a href="#">Login</a>
</nav>
```

### Tabs

`.r-tabs`, `.r-tab-panel`, `aria-selected="true"`, `[hidden]`

### Card / window

`.r-card`, `.r-titlebar` / `.r-card-title`, `.r-card-body`, `.r-card-footer`, `.r-close`

### Dropdown

`.r-dropdown` (`<details>`), `.r-menu`

### Alerts & badges

`.r-alert`, `.r-alert-ok`, `.r-alert-warn`, `.r-alert-err`  
`.r-badge`, `.r-badge-danger`

### Pagination

`.r-pagination` + `aria-current="page"`

### Tooltip

`data-tip="…"` on any focusable/hoverable element

### Extras (1990s web)

`.r-blink`, `.r-marquee` (child `<span>` required), `.r-counter`, `.r-construction`, `.r-88x31`

---

## Minimal page

```html
<!doctype html>
<html lang="en" data-oldweb="xp">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My Oldweb Site</title>
  <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/ChAbdulWahhab/OldwebUI@v1.0.0/dist/oldweb-xp.css">
</head>
<body>
  <div class="r-container">
    <nav class="r-nav">
      <a class="r-nav-brand" href="#">CoolSite</a>
      <ul><li><a class="active" href="#">Home</a></li></ul>
    </nav>
    <h1>Welcome</h1>
    <p class="r-muted">Best viewed in Netscape.</p>
    <button class="r-btn-primary">Click here</button>
  </div>
</body>
</html>
```

---

## Build

```bash
npm run generate:themes   # rebuild researched era CSS
npm run build             # → dist/oldweb-*.css
```

Zero runtime dependencies. Node is only used for the build concat step.

---

## Links

- **Live demo:** [chabdulwahhab.github.io/OldwebUI](https://chabdulwahhab.github.io/OldwebUI/demo.html)
- **Releases / download:** [github.com/ChAbdulWahhab/OldwebUI/releases](https://github.com/ChAbdulWahhab/OldwebUI/releases)
- **Source:** [github.com/ChAbdulWahhab/OldwebUI](https://github.com/ChAbdulWahhab/OldwebUI)

---

## License

[MIT](LICENSE)
