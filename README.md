# Oldweb UI

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Release](https://img.shields.io/github/v/release/ChAbdulWahhab/OldwebUI?color=0a7)](https://github.com/ChAbdulWahhab/OldwebUI/releases)
[![npm version](https://img.shields.io/npm/v/@chabdulwahab/oldweb-ui?color=cb3837)](https://www.npmjs.com/package/@chabdulwahab/oldweb-ui)
[![Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://chabdulwahhab.github.io/OldwebUI/demo.html)

> **The zero-dependency retro CSS library built for developers who want to focus 100% on their backend logic.**
> Recreate authentic interface looks spanning **1980 to 2020** with zero configuration and zero build steps.

**[Live Interactive Demo](https://chabdulwahhab.github.io/OldwebUI/demo.html)** · **[npm package](https://www.npmjs.com/package/@chabdulwahab/oldweb-ui)** · **[Download v1.0.0](https://github.com/ChAbdulWahhab/OldwebUI/releases/tag/v1.0.0)**

---

## Why Oldweb UI?

Modern web development often forces backend developers into frontend rabbit holes: complex bundlers, node_modules bloat, and endless CSS styling for simple administrative tools, internal dashboards, and prototypes.

**Oldweb UI solves this:**
- **Zero JavaScript dependencies** — 100% pure CSS.
- **Zero build step required** — Drop one `<link>` tag and you're done.
- **Classless HTML styling** — Standard `<button>`, `<input>`, `<table>`, `<fieldset>` style themselves automatically.
- **21 Era-accurate Themes** — From 1980 green CRT terminals to Windows 95, GeoCities, XP Luna, Aqua, and 2020 SaaS.
- **Web Application Navigation** — Top navbars, dropdown menus, breadcrumbs, web tab bars, and 90s portal directory links.
- **Perfect for Backend Frameworks** — Django, Flask, FastAPI, Go/HTMX, Laravel, Express, and Rails.

---

## 30-Second Quickstart

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
      <button class="r-close">X</button>
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

## Installation Options

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

## The 21 Eras (1980–2020)

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

## Web Application Navigation

Every navigation component adapts authentically to whatever era theme is currently active.

### 1. Standard Web Navbar (`.r-nav`)
Responsive horizontal navbar with brand, links, and right-aligned controls:

```html
<nav class="r-nav">
  <a class="r-nav-brand" href="#">Oldweb UI</a>
  <ul>
    <li><a class="active" href="#">Dashboard</a></li>
    <li><a href="#">Users</a></li>
    <li><a href="#">Settings</a></li>
  </ul>
  <span class="r-nav-spacer"></span>
  <a href="#">Admin Login</a>
</nav>
```

### 2. Navigation with Dropdown Menu (`.r-dropdown`)
Pure CSS accessible dropdown menus for account menus, quick actions, or category navigation:

```html
<nav class="r-nav">
  <span class="r-nav-brand">App Console</span>
  <ul>
    <li><a href="#" class="active">Overview</a></li>
    <li class="r-dropdown">
      <button class="r-menu-trigger">Manage ▼</button>
      <div class="r-dropdown-menu">
        <a href="#" class="r-menu-item">Users & Roles</a>
        <a href="#" class="r-menu-item">Databases</a>
        <div class="r-menu-divider"></div>
        <a href="#" class="r-menu-item">API Keys</a>
      </div>
    </li>
  </ul>
</nav>
```

### 3. Web Breadcrumb Trail (`.r-breadcrumb`)
Clean hierarchical navigation trail for nested web apps and admin pages:

```html
<nav class="r-breadcrumb">
  <a href="#">Root</a>
  <span class="r-breadcrumb-sep">/</span>
  <a href="#">Projects</a>
  <span class="r-breadcrumb-sep">/</span>
  <a href="#">Oldweb UI</a>
  <span class="r-breadcrumb-sep">/</span>
  <span class="r-breadcrumb-current">Settings</span>
</nav>
```

### 4. Web Navigation Tabs (`.r-nav-tabs`)
Horizontal tabs for secondary section navigation within web apps:

```html
<nav class="r-nav-tabs">
  <a href="#" class="active">General</a>
  <a href="#">Security</a>
  <a href="#">Webhooks</a>
  <a href="#">Audit Logs</a>
</nav>
```

### 5. 90s Web Portal / Directory Bar (`.r-nav-portal`)
Vintage 90s web directory with bracketed links:

```html
<nav class="r-nav-portal">
  <a href="#">HOME</a>
  <span class="r-nav-sep">|</span>
  <a href="#">ABOUT US</a>
  <span class="r-nav-sep">|</span>
  <a href="#">DOWNLOADS</a>
  <span class="r-nav-sep">|</span>
  <a href="#">DOCUMENTATION</a>
</nav>
```

### 6. Navbar Placement & Rounding Options
Adjust how navbars sit on your page:
- `.r-nav-top` / `.r-nav-flush` — Edge-to-edge top header bar (no border-radius, flush with screen top).
- `.r-nav-sticky` — Sticky top bar that stays in view while scrolling.
- `.r-nav-floating` — Centered floating rounded bar with margins.
- `.r-nav-rounded` — Force modern rounded corners (`8px`) on any retro theme.
- `.r-nav-pill` — Capsule pill-shaped navbar.

---

## Layout & Grid System

Oldweb UI includes a built-in layout framework so developers don't have to write any custom structural CSS.

### 1. Two-Column Dashboard Layout (`.r-layout-sidebar`)
Perfect for backend admin portals, database viewers, and control panels:

```html
<div class="r-layout-sidebar">
  <aside class="r-sidebar">
    <div class="r-sidebar-brand">Admin Console</div>
    <nav class="r-sidebar-nav">
      <a href="#" class="active">Overview</a>
      <a href="#">Users</a>
      <a href="#">Database</a>
      <a href="#">Settings</a>
    </nav>
    <div class="r-sidebar-footer">Server v2.4</div>
  </aside>

  <main class="r-main">
    <!-- Top header -->
    <nav class="r-nav r-nav-top">
      <span class="r-nav-brand">Dashboard</span>
      <span class="r-nav-spacer"></span>
      <span class="r-badge r-badge-ok">Online</span>
    </nav>
    <!-- Content goes here -->
  </main>
</div>
```

### 2. Full Application Shell (`.r-layout-app`)
Header + body with sidebar and scrollable main content + sticky footer:

```html
<div class="r-layout-app">
  <header class="r-app-header">
    <nav class="r-nav r-nav-top">...</nav>
  </header>
  <div class="r-app-body">
    <aside class="r-sidebar">...</aside>
    <main class="r-app-content">...</main>
  </div>
  <footer class="r-app-footer">
    <span>Oldweb UI &middot; Server v2.4</span>
  </footer>
</div>
```

### 3. Responsive Metric & Card Grids (`.r-grid`)
```html
<!-- 3-column metric card grid -->
<div class="r-grid-3">
  <div class="r-card">
    <div class="r-titlebar"><span>Total Users</span></div>
    <div class="r-card-body"><h3>12,450</h3></div>
  </div>
  <div class="r-card">
    <div class="r-titlebar"><span>Active Sessions</span></div>
    <div class="r-card-body"><h3>842</h3></div>
  </div>
  <div class="r-card">
    <div class="r-titlebar"><span>CPU Load</span></div>
    <div class="r-card-body"><h3>18.4%</h3></div>
  </div>
</div>

<!-- Available grid classes: .r-grid-2, .r-grid-3, .r-grid-4, .r-grid (auto-fit) -->
```

### 4. Split Pane View (`.r-split`)
Side-by-side split panels with an authentic groove separator:

```html
<div class="r-split">
  <div class="r-split-pane">Directory Tree / Left Panel</div>
  <div class="r-split-divider"></div>
  <div class="r-split-pane">Editor / Right Panel</div>
</div>
```

### 5. Page Containers
- `.r-container` — Responsive centered page container (1100px max-width).
- `.r-container-card` — Centered container with distinct retro window surface, border, and shadow.
- `.r-container-sm` — Narrow 680px container (ideal for login screens, single dialogs, forms).
- `.r-container-lg` — Wide 1360px container.

---

## Responsive Design & Mobile Behavior

Oldweb UI is engineered to look vintage while behaving with modern responsiveness out of the box:

- **Automatic Grid Collapsing**: `.r-grid-2`, `.r-grid-3`, and `.r-grid-4` automatically adapt on screens under 768px to clean single-column layouts.
- **Mobile Sidebar Dashboard**: `.r-layout-sidebar` seamlessly transforms from a two-column desktop console into a stacked mobile layout.
- **Split Pane Adapting**: `.r-split` switches from horizontal side-by-side columns to a vertically stacked panel view on small screens.
- **Viewport-Safe Modals**: `<dialog class="r-modal">` uses `width: min(92vw, 500px)` and `max-height: 88vh` so popup windows never clip or overflow mobile screens.
- **Fluid Navbars**: `.r-nav` wraps naturally on smaller screens and supports `.r-nav-sticky` for mobile header bars.

---

## Quick Class Reference Cheat Sheet

| Category | Class | Description |
|---|---|---|
| **Layout** | `.r-layout-sidebar` | Responsive 2-column dashboard (collapses cleanly on mobile) |
| | `.r-layout-app` | Full viewport app shell (header + sidebar + scrollable body + footer) |
| | `.r-grid-2` / `.r-grid-3` / `.r-grid-4` | Multi-column responsive card grids |
| | `.r-split` | Two-pane split view with retro groove divider |
| | `.r-container` | Centered responsive content container (1100px) |
| | `.r-container-sm` / `.r-container-lg` | Narrow (680px) and wide (1360px) container sizes |
| **Navigation** | `.r-nav` | Horizontal web application navbar with brand & links |
| | `.r-nav-top` / `.r-nav-flush` | Flush edge-to-edge top header bar |
| | `.r-nav-sticky` | Sticky header that remains fixed on scroll |
| | `.r-nav-rounded` | Enforces modern rounded corners (`8px`) on any theme |
| | `.r-dropdown` | Dropdown menu container (`.r-dropdown-menu`, `.r-menu-item`) |
| | `.r-breadcrumb` | Hierarchical navigation trail with separators |
| | `.r-nav-tabs` | Horizontal tab navigation strip |
| | `.r-nav-portal` | Authentic 90s web portal / directory link bar |
| **Windows & Modals** | `.r-card` / `.r-window` | Retro window box with surface bevel and shadow |
| | `.r-titlebar` | Window title header with caption and `.r-close` button |
| | `<dialog class="r-modal">` | HTML5 popup modal with backdrop and titlebar |
| **Actions & Badges** | `<button class="r-btn-primary">` | Primary accent call-to-action button |
| | `<button class="r-btn-danger">` | Destructive action button |
| | `.r-badge` | Status badge (`.r-badge-ok`, `.r-badge-warn`, `.r-badge-danger`) |
| **Forms** | `.r-field` | Form control wrapper with `<label>`, input, and `.r-hint` |
| | `.r-input-block` | Full-width input, select, or textarea |

---

## Components Reference

### Windows & Cards (`.r-card` / `.r-window`)
```html
<div class="r-card">
  <div class="r-titlebar">
    <span class="r-titlebar-title">System Properties</span>
    <div class="r-titlebar-controls">
      <button class="r-titlebar-btn" title="Minimize">_</button>
      <button class="r-titlebar-btn" title="Maximize">[ ]</button>
      <button class="r-close" title="Close">X</button>
    </div>
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

### Popup Modal Dialogs (`<dialog class="r-modal">`)
Authentic web popup dialogs with titlebars, backdrop dismissal, and Cancel button:

```html
<dialog id="my-modal" class="r-modal">
  <div class="r-titlebar">
    <span class="r-titlebar-title">Confirm Deletion</span>
  </div>
  <div class="r-modal-body">
    <p>Are you sure you want to write changes to disk?</p>
  </div>
  <div class="r-modal-footer">
    <button class="r-btn-primary" data-close>OK</button>
    <button data-close>Cancel</button>
  </div>
</dialog>

<!-- Open via JS: document.getElementById('my-modal').showModal() -->
<!-- Dismissal: Clicking 'Cancel', clicking the backdrop, or pressing Escape automatically closes the modal -->
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
<div class="r-construction"><span>UNDER CONSTRUCTION</span></div>

<!-- Vintage 88x31 community badge -->
<span class="r-88x31">BEST VIEWED<br>IN 800x600</span>
```

---

## Backend Framework Integration

Because Oldweb UI requires **zero build steps and zero npm dependencies**, it is a dream to use inside traditional backend template engines.

### Python (Django / Flask)

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

### Go + HTMX

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

### PHP / Laravel (Blade)

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

### Node.js (Express / EJS)

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

## Local Development & Building

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

## Publishing to npm

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

## License & Author

Created with retro passion by **[Ch Abdul Wahhab](https://github.com/ChAbdulWahhab)**.

Licensed under the **[MIT License](LICENSE)**. Feel free to use it in personal, open-source, or commercial projects!
