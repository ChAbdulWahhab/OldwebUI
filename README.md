# Oldweb UI 🕹️

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Release](https://img.shields.io/github/v/release/ChAbdulWahhab/OldwebUI?color=0a7)](https://github.com/ChAbdulWahhab/OldwebUI/releases)
[![npm version](https://img.shields.io/npm/v/@chabdulwahab/oldweb-ui?color=cb3837)](https://www.npmjs.com/package/@chabdulwahab/oldweb-ui)
[![Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://chabdulwahhab.github.io/OldwebUI/demo.html)

> **The zero-dependency retro CSS library built for developers who want to focus 100% on their backend logic.**
> Recreate authentic interface looks spanning **1980 to 2020** with zero configuration and zero build steps.

**[🌐 Live Interactive Demo](https://chabdulwahhab.github.io/OldwebUI/demo.html)** · **[📦 npm package](https://www.npmjs.com/package/@chabdulwahab/oldweb-ui)** · **[💾 Download v1.0.0](https://github.com/ChAbdulWahhab/OldwebUI/releases/tag/v1.0.0)**

---

## 🎯 Why Oldweb UI?

Modern web development often forces backend developers into frontend rabbit holes: complex bundlers, node_modules bloat, and endless CSS styling for simple administrative tools, internal dashboards, and prototypes.

**Oldweb UI solves this:**
- 🚫 **Zero JavaScript dependencies** — 100% pure CSS.
- ⚡ **Zero build step required** — Drop one `<link>` tag and you're done.
- 🪟 **Classless HTML styling** — Standard `<button>`, `<input>`, `<table>`, `<fieldset>` style themselves automatically.
- 🎨 **21 Era-accurate Themes** — From 1980 green CRT terminals to Windows 95, GeoCities, XP Luna, Aqua, and 2020 SaaS.
- 🧭 **Complete Navigation Chrome** — Desktop OS Menubars (with dropdowns), Toolbars, Taskbars, Status bars, and 90s Portal banners.
- 🐍 **Perfect for Backend Frameworks** — Django, Flask, FastAPI, Go/HTMX, Laravel, Express, and Rails.

---

## ⚡ 30-Second Quickstart

```html
<!doctype html>
<html lang="en" data-oldweb="win95">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Windows 95 App</title>
  <!-- 1. Include Oldweb UI -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ChAbdulWahhab/OldwebUI@v1.0.0/dist/oldweb-all.css">
</head>
<body>
  <!-- 2. Write plain HTML — it styles itself! -->
  <div class="r-card" style="max-width: 480px; margin: 40px auto;">
    <div class="r-titlebar">
      <span>Database Manager</span>
      <button class="r-close">✕</button>
    </div>
    <div class="r-card-body">
      <p>Your backend data models are loaded.</p>
      <input type="text" placeholder="Enter query..." class="r-input-block">
      <button class="r-btn-primary">Execute</button>
      <button>Cancel</button>
    </div>
  </div>
</body>
</html>
```

---

## 📦 Installation Options

### Option A — CDN (Fastest, zero install)

**All 21 themes bundled in one file (~136 KB):**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ChAbdulWahhab/OldwebUI@v1.0.0/dist/oldweb-all.css">
```

**Or load only the specific theme you need (~47 KB):**
```html
<!-- Load Windows 95 only -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ChAbdulWahhab/OldwebUI@v1.0.0/dist/oldweb-win95.css">

<!-- Load Windows XP Luna only -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ChAbdulWahhab/OldwebUI@v1.0.0/dist/oldweb-xp.css">

<!-- Load 1980 CRT Terminal only -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ChAbdulWahhab/OldwebUI@v1.0.0/dist/oldweb-terminal1980.css">
```

### Option B — npm

```bash
npm install @chabdulwahab/oldweb-ui
```

Import in your frontend / bundler / Node application:
```js
// Import all themes
import "@chabdulwahab/oldweb-ui";

// Or import an individual era theme:
import "@chabdulwahab/oldweb-ui/win95";
import "@chabdulwahab/oldweb-ui/xp";
import "@chabdulwahab/oldweb-ui/terminal1980";
```

### Option C — Download Source / Static Zip

1. Go to the [Releases page](https://github.com/ChAbdulWahhab/OldwebUI/releases).
2. Download `dist/oldweb-all.css` or individual theme CSS files.
3. Put them in your `static/` or `public/` directory and link locally:
```html
<link rel="stylesheet" href="/static/css/oldweb-all.css">
```

---

## 🕰️ The 21 Eras (1980–2020)

Activate any theme by setting `data-oldweb="theme-id"` on your `<html>` tag:

```html
<html data-oldweb="win95">
```

Or switch themes dynamically in JavaScript:
```js
document.documentElement.setAttribute("data-oldweb", "xp");
```

| `data-oldweb` | Year / Era | Iconic Look & Design Language |
|---------------|------------|-------------------------------|
| `terminal1980` | ~1980 | **CRT Green-Phosphor Terminal** — Monospace, reverse-video glowing highlights, no chrome |
| `mac1984` | 1984 | **Macintosh System 1** — 1-bit monochrome bitmap UI, Chicago font, inverted highlights |
| `win31` | 1992 | **Windows 3.1 Program Manager** — 16-color VGA palette, MS Sans Serif, flat gray, navy titles |
| `web1993` | 1993 | **Mosaic / Early WWW** — Academic plain HTML, default blue/purple links, grey canvas |
| `win95` | 1995 | **Windows 95** — Iconic teal `#008080`, silver `#c0c0c0`, classic 3D bevels, royal-blue titlebars |
| `geocities` | 1996 | **GeoCities Personal Web** — Comic Sans, bright neon links, hit counters, tiled backgrounds |
| `win98` | 1998 | **Windows 98** — Navy-to-cyan gradient titlebars, flat rebar toolbars that bevel on hover |
| `macplatinum` | 1998 | **Mac OS 8/9 Platinum** — Platinum pinstripes, Appearance Manager bevels, Charcoal typography |
| `y2k` | 2000 | **Y2K Cyber Chrome** — Metallic silver gradients, cyber-blue accents, lens-flare optimism |
| `aqua` | 2001 | **Mac OS X Aqua** — Translucent candy blues, brushed metal pinstripes, gel 'lickable' buttons |
| `xp` | 2001 | **Windows XP Luna** — Luna Blue gradient, warm orange active highlights, rounded plastic controls |
| `web20` | 2005–08 | **Web 2.0 Peak** — Glossy specular highlights, reflections, optimistic gradients, badge counters |
| `vista` | 2007 | **Windows Vista Aero** — Aero Glass dark translucency, cyan inner glows, Segoe UI |
| `skeuo` | 2010 | **iOS Skeuomorphism** — Linen canvas, embossed inset text shadows, realistic hardware chrome |
| `metro` | 2010–12 | **Metro / Modern UI** — Bold solid cobalt tiles, zero border radius, uppercase typography |
| `ios7` | 2013 | **iOS 7 Flat** — Ultra-clean frosted translucency, hairline borders, vibrant system blue `#007aff` |
| `material` | 2014 | **Google Material Design** — Indigo AppBar, paper elevation shadows, flat uppercase tabs |
| `bootstrap3` | 2015 | **Bootstrap 3 Docs Era** — Iconic `#337ab7` primary, flat `#f8f8f8` navbar, system sans |
| `fluent` | 2017 | **Microsoft Fluent (Win10)** — Acrylic dark surfaces, reveal border lighting, subtle depth |
| `dark2019` | 2019 | **Dark Mode / Soft UI** — Deep near-black canvas, soft extruded greys, muted blue accents |
| `saas2020` | 2020 | **Modern SaaS UI** — Clean white header, subtle bottom border, rounded pills, Inter font |

---

## 🧭 Navigation & Chrome Components

Every navigation component adapts authentically to whatever era theme is currently active.

### 1. Standard Navbar (`.r-nav`)
Clean, responsive horizontal navbar with brand and active link support:

```html
<nav class="r-nav">
  <a class="r-nav-brand" href="#">Oldweb UI</a>
  <ul>
    <li><a class="active" href="#">Home</a></li>
    <li><a href="#">Articles</a></li>
    <li><a href="#">Download</a></li>
  </ul>
  <span class="r-nav-spacer"></span>
  <a href="#">Admin Login</a>
</nav>
```

### 2. Desktop OS Menubar with Dropdowns (`.r-nav-menubar`)
Authentic OS menu bar (File, Edit, View, Help) with accesskey mnemonics (`<u>F</u>ile`), keyboard shortcut hints (`Ctrl+S`), and pure CSS hover/click dropdowns:

```html
<nav class="r-nav-menubar">
  <!-- File Menu -->
  <div class="r-dropdown">
    <button class="r-menu-trigger"><u>F</u>ile</button>
    <div class="r-dropdown-menu">
      <a href="#" class="r-menu-item">New Document <span class="r-shortcut">Ctrl+N</span></a>
      <a href="#" class="r-menu-item">Open File... <span class="r-shortcut">Ctrl+O</span></a>
      <div class="r-menu-divider"></div>
      <a href="#" class="r-menu-item">Save <span class="r-shortcut">Ctrl+S</span></a>
      <a href="#" class="r-menu-item">Exit</a>
    </div>
  </div>

  <!-- Edit Menu -->
  <div class="r-dropdown">
    <button class="r-menu-trigger"><u>E</u>dit</button>
    <div class="r-dropdown-menu">
      <a href="#" class="r-menu-item">Undo <span class="r-shortcut">Ctrl+Z</span></a>
      <a href="#" class="r-menu-item">Cut <span class="r-shortcut">Ctrl+X</span></a>
      <a href="#" class="r-menu-item">Copy <span class="r-shortcut">Ctrl+C</span></a>
      <a href="#" class="r-menu-item">Paste <span class="r-shortcut">Ctrl+V</span></a>
    </div>
  </div>

  <span class="r-nav-spacer"></span>
</nav>
```

### 3. Application Toolbar (`.r-nav-toolbar`)
Desktop application tool buttons that bevel up on hover and sink on click:

```html
<nav class="r-nav-toolbar">
  <div class="r-toolbar-group">
    <button class="r-tool-btn" title="New file">📄 New</button>
    <button class="r-tool-btn" title="Open file">📂 Open</button>
    <button class="r-tool-btn" title="Save file">💾 Save</button>
  </div>
  <span class="r-toolbar-sep"></span>
  <div class="r-toolbar-group">
    <button class="r-tool-btn active" title="Bold"><strong>B</strong></button>
    <button class="r-tool-btn" title="Italic"><em>I</em></button>
    <button class="r-tool-btn" title="Underline"><u>U</u></button>
  </div>
  <span class="r-nav-spacer"></span>
  <button class="r-tool-btn">❓ Help</button>
</nav>
```

### 4. Classic OS Taskbar (`.r-nav-taskbar`)
Windows 95/98/XP style taskbar with Start button, running window items, and system tray:

```html
<nav class="r-nav-taskbar">
  <button class="r-taskbar-start">🪟 Start</button>
  <button class="r-taskbar-item active">📝 Notepad - Untitled</button>
  <button class="r-taskbar-item">📁 C:\Projects</button>
  <span class="r-nav-spacer"></span>
  <div class="r-taskbar-tray">
    <span>🔊</span>
    <span>12:00 PM</span>
  </div>
</nav>
```

### 5. 90s Web Portal / Directory (`.r-nav-portal`)
Vintage 90s web directory with bracketed links:

```html
<nav class="r-nav-portal">
  <a href="#">HOME</a>
  <span class="r-nav-sep">|</span>
  <a href="#">ABOUT US</a>
  <span class="r-nav-sep">|</span>
  <a href="#">DOWNLOADS</a>
  <span class="r-nav-sep">|</span>
  <a href="#">SIGN GUESTBOOK</a>
</nav>
```

### 6. Desktop Status Bar (`.r-statusbar`)
Bottom sunken status panels for application windows:

```html
<div class="r-statusbar">
  <span class="r-status-panel r-status-main">Ready</span>
  <span class="r-status-panel">Ln 42, Col 8</span>
  <span class="r-status-panel">100%</span>
  <span class="r-status-panel">NUM</span>
  <span class="r-status-panel">CAPS</span>
  <span class="r-status-grip"></span>
</div>
```

---

## 🖥️ Components Reference

### Windows & Cards (`.r-card`)
```html
<div class="r-card">
  <div class="r-titlebar">
    <span>System Properties</span>
    <button class="r-close" aria-label="Close">✕</button>
  </div>
  <div class="r-card-body">
    <p>General application settings go here.</p>
  </div>
  <div class="r-card-footer">
    <button class="r-btn-primary">OK</button>
    <button>Cancel</button>
    <button>Apply</button>
  </div>
</div>
```

### Buttons
All standard `<button>` tags are styled automatically. Use classes for variants:
```html
<!-- Classless default button -->
<button>Standard Button</button>

<!-- Primary call-to-action button -->
<button class="r-btn-primary">Save Changes</button>

<!-- Danger button -->
<button class="r-btn-danger">Delete Record</button>

<!-- Sizes and block -->
<button class="r-btn-sm">Small</button>
<button class="r-btn-lg">Large</button>
<button class="r-btn-block">Full Width</button>

<!-- Disabled button -->
<button disabled>Disabled</button>
```

### Forms & Controls
Standard inputs, selects, radios, and checkboxes style themselves:
```html
<div class="r-field">
  <label for="username">Username</label>
  <input id="username" type="text" class="r-input-block" placeholder="Enter username">
  <span class="r-hint">Must be 4–16 alphanumeric characters.</span>
</div>

<label><input type="checkbox" checked> Enable logging</label>
<label><input type="radio" name="env" checked> Production</label>
<label><input type="radio" name="env"> Staging</label>

<select class="r-input-block">
  <option>PostgreSQL</option>
  <option>MySQL / MariaDB</option>
  <option>SQLite 3</option>
</select>
```

### Data Tables
```html
<table class="r-full">
  <thead>
    <tr>
      <th>ID</th>
      <th>User</th>
      <th>Role</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>101</td>
      <td>wahhab</td>
      <td>Admin</td>
      <td><span class="r-badge r-badge-ok">Active</span></td>
    </tr>
    <tr>
      <td>102</td>
      <td>guest_user</td>
      <td>Viewer</td>
      <td><span class="r-badge r-badge-warn">Pending</span></td>
    </tr>
  </tbody>
</table>
```

### Retro Extras (GeoCities Era)
```html
<!-- Classic blinking text -->
<span class="r-blink">NEW!</span>

<!-- Animated marquee ticker -->
<div class="r-marquee"><span>Welcome to Oldweb UI — Enjoy your vintage computing experience!</span></div>

<!-- Green-phosphor hit counter -->
<span class="r-counter">001337</span>

<!-- Hazard-striped under construction banner -->
<div class="r-construction"><span>🚧 UNDER CONSTRUCTION 🚧</span></div>

<!-- Vintage 88x31 community badge -->
<span class="r-88x31">BEST VIEWED<br>IN 800x600</span>
```

---

## 🚀 Backend Framework Integration

Because Oldweb UI requires **zero build steps and zero npm dependencies**, it is a dream to use inside traditional backend template engines.

### 🐍 Python (Django / Flask)

In your `base.html` template:
```html
<!doctype html>
<html lang="en" data-oldweb="{{ request.COOKIES.theme|default:'win95' }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{% block title %}Django Admin{% endblock %}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ChAbdulWahhab/OldwebUI@v1.0.0/dist/oldweb-all.css">
</head>
<body class="r-container">
  {% block content %}{% endblock %}
</body>
</html>
```

### 🐹 Go + HTMX

```html
<!doctype html>
<html data-oldweb="xp">
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ChAbdulWahhab/OldwebUI@v1.0.0/dist/oldweb-all.css">
  <script src="https://unpkg.com/htmx.org@1.9.10"></script>
</head>
<body class="r-container">
  <div class="r-card">
    <div class="r-titlebar"><span>Live Server Monitor</span></div>
    <div class="r-card-body" hx-get="/api/stats" hx-trigger="every 2s">
      Loading metrics...
    </div>
  </div>
</body>
</html>
```

### 🐘 PHP / Laravel (Blade)

```html
<!-- resources/views/layouts/app.blade.php -->
<!doctype html>
<html data-oldweb="{{ config('app.theme', 'win98') }}">
<head>
  <title>{{ config('app.name') }}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ChAbdulWahhab/OldwebUI@v1.0.0/dist/oldweb-all.css">
</head>
<body>
  @yield('content')
</body>
</html>
```

### 🟢 Node.js (Express / EJS)

```html
<!doctype html>
<html data-oldweb="<%= theme || 'web20' %>">
<head>
  <link rel="stylesheet" href="/css/oldweb-all.css">
</head>
<body>
  <%- body %>
</body>
</html>
```

---

## 🛠️ Local Development & Building

If you clone the repository to customize or contribute:

```bash
# Clone the repository
git clone https://github.com/ChAbdulWahhab/OldwebUI.git
cd OldwebUI

# Build the CSS bundles in dist/
npm run build

# Regenerate all 21 researched themes from source
npm run generate:themes
```

Zero npm external runtime dependencies — only native Node.js scripts!

---

## 🚢 Publishing to npm

If you are the maintainer or publishing your own fork, follow these simple steps:

### 1. Login to your npm account
```bash
npm login
```
*(Enter your username, password, email, and 2FA code)*

### 2. Verify everything compiles cleanly
```bash
npm run build
```

### 3. Test pack dry-run (inspect files without publishing)
```bash
npm pack --dry-run
```

### 4. Publish to npm
Since the package is scoped (`@chabdulwahab/oldweb-ui`), npm requires public access:
```bash
npm publish --access public
```

### 5. Future Releases
Whenever you update code and want to release a new version:
```bash
# Bump version (1.0.0 -> 1.0.1)
npm version patch

# Publish updated version
npm publish --access public
```

---

## 📜 License & Author

Created with retro passion by **[Ch Abdul Wahhab](https://github.com/ChAbdulWahhab)**.

Licensed under the **[MIT License](LICENSE)**. Feel free to use it in personal, open-source, or commercial projects!
