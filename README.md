# Oldweb UI

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Release](https://img.shields.io/github/v/release/ChAbdulWahhab/OldwebUI?color=0a7)](https://github.com/ChAbdulWahhab/OldwebUI/releases)
[![Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://chabdulwahhab.github.io/OldwebUI/demo.html)

**Authentic interface looks from 1980–2020** — a zero-dependency CSS library.

**[Live demo →](https://chabdulwahhab.github.io/OldwebUI/demo.html)** · **[Download v1.0.0 →](https://github.com/ChAbdulWahhab/OldwebUI/releases/tag/v1.0.0)**

---

## How it works (30 seconds)

1. Add the CSS file  
2. Set `data-oldweb="theme-id"` on `<html>`  
3. Write normal HTML — buttons, inputs, tables, links style themselves  

Optional: add `.r-*` classes for layout, variants, cards, nav, etc.

```html
<!doctype html>
<html lang="en" data-oldweb="win95">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My site</title>
  <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/ChAbdulWahhab/OldwebUI@v1.0.0/dist/oldweb-all.css">
</head>
<body>
  <div class="r-container">
    <h1>Hello from 1995</h1>
    <p class="r-muted">This page is already themed.</p>
    <button class="r-btn-primary">OK</button>
  </div>
</body>
</html>
```

Open that file in a browser — done.

---

## Install

### Option A — CDN (easiest)

**All themes** (one file, ~122 KB):

```html
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/ChAbdulWahhab/OldwebUI@v1.0.0/dist/oldweb-all.css">
<html lang="en" data-oldweb="web20">
```

**One theme only** (smaller ~36 KB) — replace `xp` with any theme id:

```html
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/ChAbdulWahhab/OldwebUI@v1.0.0/dist/oldweb-xp.css">
<html lang="en" data-oldweb="xp">
```

### Option B — Download

1. Open [Releases](https://github.com/ChAbdulWahhab/OldwebUI/releases)  
2. Download the CSS you need (or the source zip)  
3. Put it in your project and link it:

```html
<link rel="stylesheet" href="./dist/oldweb-all.css">
<html lang="en" data-oldweb="geocities">
```

### Option C — npm *(coming soon)*

After publish: `npm install @chabdulwahab/oldweb-ui`

---

## Pick a theme

Put the theme id on the root element:

```html
<html data-oldweb="win95">
```

Change it anytime with JavaScript:

```js
document.documentElement.setAttribute("data-oldweb", "metro");
```

| `data-oldweb` | Era | Look |
|---------------|------|------|
| `terminal1980` | ~1980 | CRT green-phosphor terminal |
| `mac1984` | 1984 | Macintosh System 1 (1-bit B&W) |
| `win31` | 1992 | Windows 3.1 Program Manager |
| `web1993` | 1993 | Mosaic / early WWW |
| `win95` | 1995 | Windows 95 teal + silver |
| `geocities` | 1996 | GeoCities personal pages |
| `win98` | 1998 | Windows 98 classic bevels |
| `macplatinum` | 1998 | Mac OS 8/9 Platinum |
| `y2k` | 2000 | Y2K / Flash metallic chrome |
| `aqua` | 2001 | Mac OS X Aqua |
| `xp` | 2001 | Windows XP Luna |
| `web20` | 2005–08 | Peak Web 2.0 gloss |
| `vista` | 2007 | Windows Vista Aero |
| `skeuo` | 2010 | iOS skeuomorphism |
| `metro` | 2010–12 | Metro / Modern UI |
| `ios7` | 2013 | iOS 7 flat |
| `material` | 2014 | Google Material Design |
| `bootstrap3` | 2015 | Bootstrap 3 docs look |
| `fluent` | 2017 | Microsoft Fluent / Win10 dark |
| `dark2019` | 2019 | Dark + soft UI |
| `saas2020` | 2020 | Modern SaaS product UI |

CDN path for a single theme:  
`.../dist/oldweb-<id>.css` — e.g. `oldweb-win95.css`, `oldweb-material.css`.

---

## Classless HTML (no classes needed)

With `data-oldweb` set, these elements are styled automatically:

`button`, `input`, `select`, `textarea`, `table`, `a`, headings, `hr`, `code`, `kbd`, `blockquote`, `progress`, `fieldset`, `dialog`, checkboxes/radios, scrollbars.

```html
<html data-oldweb="xp">
<body>
  <h1>Page title</h1>
  <p>Body text with a <a href="#">link</a> and <code>inline code</code>.</p>
  <button>Click me</button>
  <input type="text" placeholder="Name">
  <table>
    <tr><th>A</th><th>B</th></tr>
    <tr><td>1</td><td>2</td></tr>
  </table>
</body>
</html>
```

---

## Layout helpers

### Container + muted text

```html
<div class="r-container">
  <h1>My homepage</h1>
  <p class="r-muted">Est. 1998 · Best viewed in Netscape</p>
</div>
```

| Class | What it does |
|-------|----------------|
| `.r-container` | Centered content panel (~960px) |
| `.r-muted` | Secondary / dimmed text |
| `.r-full` | `width: 100%` (useful on tables) |

---

## Typography

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>

<p>
  Body with a <a href="#">link</a>,
  <code>code</code>, and <kbd>Ctrl</kbd>+<kbd>C</kbd>.
</p>

<blockquote>Blockquote — early blogs and forums.</blockquote>
<p class="r-muted">Muted helper text.</p>
<hr>

<ul>
  <li>Unordered item</li>
  <li>Another item</li>
</ul>
<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>
```

---

## Buttons

Plain `<button>` works. Add classes for variants.

```html
<!-- Default (classless) -->
<button>Default</button>
<input type="submit" value="Submit">

<!-- Variants -->
<button class="r-btn-primary">Primary</button>
<button class="r-btn-danger">Danger</button>
<button class="r-btn-sm">Small</button>
<button class="r-btn-lg">Large</button>
<button disabled>Disabled</button>

<!-- Full width -->
<button class="r-btn-block r-btn-primary">Block primary</button>

<!-- Style a link like a button -->
<a class="r-btn r-btn-primary" href="#">Link button</a>
<a class="r-btn r-btn-danger" href="#">Delete</a>
```

| Class | Purpose |
|-------|---------|
| `.r-btn` | Make an `<a>` look like a button |
| `.r-btn-primary` | Primary action |
| `.r-btn-danger` | Destructive action |
| `.r-btn-sm` / `.r-btn-lg` | Size |
| `.r-btn-block` | Full width |

---

## Forms

```html
<fieldset>
  <legend>Account</legend>

  <div class="r-field">
    <label for="name">Full name</label>
    <input id="name" class="r-input-block" placeholder="Jane Doe">
  </div>

  <div class="r-field">
    <label for="email">Email</label>
    <input id="email" type="email" class="r-input-block" placeholder="jane@example.com">
    <span class="r-hint">We’ll never share your email.</span>
  </div>

  <div class="r-field">
    <label for="pass">Password</label>
    <input id="pass" type="password" class="r-input-block">
  </div>

  <div class="r-field">
    <label for="country">Country</label>
    <select id="country" class="r-input-block">
      <option>Pakistan</option>
      <option>Canada</option>
      <option>Germany</option>
    </select>
  </div>

  <div class="r-field">
    <label for="bio">Bio</label>
    <textarea id="bio" class="r-input-block" rows="3" placeholder="About you..."></textarea>
  </div>

  <p>
    <label><input type="checkbox" checked> Email digest</label><br>
    <label><input type="checkbox"> Beta features</label>
  </p>

  <p>
    <label><input type="radio" name="plan" checked> Free</label><br>
    <label><input type="radio" name="plan"> Pro</label><br>
    <label><input type="radio" name="plan"> Team</label>
  </p>

  <p><input type="file"></p>

  <button class="r-btn-primary" type="submit">Create account</button>
  <button type="reset">Reset</button>
</fieldset>
```

| Class | Purpose |
|-------|---------|
| `.r-field` | Label + control group with spacing |
| `.r-hint` | Small helper text under a field |
| `.r-input-block` | Full-width input / select / textarea |

---

## Tables

```html
<table class="r-full">
  <caption>Example data table</caption>
  <thead>
    <tr>
      <th>Product</th>
      <th>Year</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Oldweb UI</td>
      <td>2026</td>
      <td><span class="r-badge r-badge-danger">Hot</span></td>
    </tr>
    <tr>
      <td>Windows 95</td>
      <td>1995</td>
      <td><span class="r-badge">Classic</span></td>
    </tr>
    <tr>
      <td>Material Design</td>
      <td>2014</td>
      <td><span class="r-badge">Docs</span></td>
    </tr>
  </tbody>
</table>
```

Any `<table>` is styled automatically. Add `.r-full` for full width.

---

## Navbar

```html
<nav class="r-nav">
  <a class="r-nav-brand" href="#">CoolSite</a>
  <ul>
    <li><a class="active" href="#">Home</a></li>
    <li><a href="#">Docs</a></li>
    <li><a href="#">Examples</a></li>
  </ul>
  <span class="r-nav-spacer"></span>
  <a href="#">Login</a>
</nav>
```

| Class / attr | Purpose |
|--------------|---------|
| `.r-nav` | Navbar bar |
| `.r-nav-brand` | Site name / logo link |
| `.r-nav-spacer` | Pushes following items to the right |
| `.active` or `aria-current` | Current page link |

---

## Tabs

CSS styles the tabs. A tiny bit of JS switches panels.

```html
<nav class="r-tabs" role="tablist">
  <a href="#panel-a" role="tab" aria-selected="true">Overview</a>
  <a href="#panel-b" role="tab" aria-selected="false">Settings</a>
  <a href="#panel-c" role="tab" aria-selected="false">Billing</a>
</nav>

<div class="r-tab-panel" id="panel-a" role="tabpanel">
  <p>Overview content.</p>
</div>
<div class="r-tab-panel" id="panel-b" role="tabpanel" hidden>
  <p>Settings content.</p>
</div>
<div class="r-tab-panel" id="panel-c" role="tabpanel" hidden>
  <p>Billing content.</p>
</div>

<script>
  document.querySelectorAll(".r-tabs").forEach(function (nav) {
    var tabs = nav.querySelectorAll(":scope > a");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function (e) {
        e.preventDefault();
        tabs.forEach(function (t) {
          var on = t === tab;
          t.setAttribute("aria-selected", on ? "true" : "false");
          var panel = document.querySelector(t.getAttribute("href"));
          if (panel) panel.hidden = !on;
        });
      });
    });
  });
</script>
```

---

## Cards & windows

```html
<div class="r-card" style="max-width:420px">
  <div class="r-titlebar">
    <span>Document.txt</span>
    <button class="r-close" type="button" aria-label="Close">x</button>
  </div>
  <div class="r-card-body">
    <p>Window chrome with titlebar, body, and footer.</p>
  </div>
  <div class="r-card-footer">
    <button class="r-btn-primary">OK</button>
    <button>Cancel</button>
  </div>
</div>
```

| Class | Purpose |
|-------|---------|
| `.r-card` | Window / card shell |
| `.r-titlebar` or `.r-card-title` | Title bar |
| `.r-card-body` | Main content |
| `.r-card-footer` | Action row |
| `.r-close` | Close (×) button |

---

## Alerts & badges

```html
<div class="r-alert">Info — your profile was updated.</div>
<div class="r-alert r-alert-ok">Success — changes saved.</div>
<div class="r-alert r-alert-warn">Warning — storage is nearly full.</div>
<div class="r-alert r-alert-err">Error — upload failed.</div>

<p>
  Badges:
  <span class="r-badge">New</span>
  <span class="r-badge r-badge-danger">3</span>
</p>
```

---

## Pagination

```html
<ul class="r-pagination">
  <li><a href="#">&laquo;</a></li>
  <li><a href="#">1</a></li>
  <li><a href="#" aria-current="page">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">&raquo;</a></li>
</ul>
```

Mark the current page with `aria-current="page"`.

---

## Progress

```html
<p>Upload: <progress value="62" max="100"></progress> 62%</p>
```

Classless — just use `<progress>`.

---

## Modal (`<dialog>`)

```html
<button id="open-dialog" class="r-btn-primary">Open modal</button>

<dialog id="dialog">
  <div class="r-titlebar">
    <span>Confirm</span>
    <button class="r-close" data-close type="button" aria-label="Close">x</button>
  </div>
  <div class="r-card-body">
    <p>Are you sure you want to delete this item?</p>
  </div>
  <div class="r-card-footer">
    <button class="r-btn-danger" data-close type="button">Delete</button>
    <button data-close type="button">Cancel</button>
  </div>
</dialog>

<script>
  var dlg = document.getElementById("dialog");
  document.getElementById("open-dialog").addEventListener("click", function () {
    dlg.showModal();
  });
  dlg.querySelectorAll("[data-close]").forEach(function (btn) {
    btn.addEventListener("click", function () { dlg.close(); });
  });
</script>
```

---

## Dropdown menu

Uses native `<details>` — no JS required for open/close.

```html
<details class="r-dropdown">
  <summary>Account menu</summary>
  <ul class="r-menu">
    <li><a href="#">Profile</a></li>
    <li><a href="#">Settings</a></li>
    <li><hr></li>
    <li><a href="#">Log out</a></li>
  </ul>
</details>
```

Optional: close when clicking outside:

```js
document.addEventListener("click", function (e) {
  document.querySelectorAll("details.r-dropdown[open]").forEach(function (d) {
    if (!d.contains(e.target)) d.open = false;
  });
});
```

---

## Tooltip

```html
<button data-tip="CSS-only tooltip">Hover me</button>
<a href="#" data-tip="More info">Help</a>
```

No JS — set `data-tip="…"`.

---

## Extras (1990s web)

```html
<span class="r-blink">NEW!</span>

<div class="r-marquee">
  <span>Welcome to my homepage!! Sign my guestbook!!</span>
</div>

<span class="r-counter">000123</span>

<div class="r-construction">
  <span>Under construction</span>
</div>

<span class="r-88x31">MADE WITH<br>NOTEPAD</span>
```

| Class | Note |
|-------|------|
| `.r-blink` | Blinking text |
| `.r-marquee` | Needs a child `<span>` for the scrolling text |
| `.r-counter` | Visitor-counter look |
| `.r-construction` | Needs a child `<span>` |
| `.r-88x31` | Classic 88×31 badge size |

---

## Full starter page

Copy, paste, change the theme id:

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
      <ul>
        <li><a class="active" href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <span class="r-nav-spacer"></span>
      <a href="#">Login</a>
    </nav>

    <h1>Welcome</h1>
    <p class="r-muted">Best viewed in Netscape Navigator.</p>

    <div class="r-alert r-alert-ok">You are online. Have a nice day.</div>

    <p>
      <button class="r-btn-primary">Click here</button>
      <button>Cancel</button>
    </p>

    <div class="r-card">
      <div class="r-titlebar"><span>readme.txt</span></div>
      <div class="r-card-body">
        <p>This card uses the active theme’s window chrome.</p>
      </div>
    </div>
  </div>
</body>
</html>
```

---

## Build (contributors)

```bash
npm run generate:themes   # rebuild researched era CSS
npm run build             # → dist/oldweb-*.css
```

Zero runtime dependencies. Node is only used for the build step.

---

## Links

- **Live demo:** [chabdulwahhab.github.io/OldwebUI](https://chabdulwahhab.github.io/OldwebUI/demo.html)
- **Releases:** [github.com/ChAbdulWahhab/OldwebUI/releases](https://github.com/ChAbdulWahhab/OldwebUI/releases)
- **Source:** [github.com/ChAbdulWahhab/OldwebUI](https://github.com/ChAbdulWahhab/OldwebUI)

---

## License

[MIT](LICENSE)
