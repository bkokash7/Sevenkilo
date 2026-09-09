# sevenkilo.com — CLAUDE.md

## Deployment
Pure static HTML/CSS/JS. No build step, no bundler, no config file beyond `CNAME` (value: `sevenkilo.com`). Deployed from `main` to Cloudflare Pages. No `_redirects`, `_headers`, or `wrangler.toml` exist.

## Page inventory

| URL | File | Notes |
|-----|------|-------|
| `/` | `index.html` | Homepage, links to four divisions |
| `/apps/` | `apps/index.html` | App grid, six apps |
| `/7kilofm/` | `7kilofm/index.html` | Detail + inline privacy + terms |
| `/7kiloworkout/` | `7kiloworkout/index.html` | Detail + inline privacy + terms |
| `/dyograf/` | `dyograf/index.html` | Detail + inline privacy + terms |
| `/zyggly/` | `zyggly/index.html` | Detail + inline privacy + terms |
| `/consulting/` | `consulting/index.html` | Links out to 7kglobalconsulting.com |
| `/clothing/` | `clothing/index.html` | Links out to saintedstreetsclothing.com |
| `/property/` | `property/index.html` | No external site, contact by email |
| `/privacy/` | `privacy/index.html` | Site-level notice; links to app `#privacy` anchors |
| `/terms/` | `terms/index.html` | Site-level terms |

Korrvox and Mitivox have separate domains (`korrvox.com`, `mitivox.com`) and appear as external links in the apps grid only — no detail pages here.

`index.html` contains a one-line script that redirects `#zyggly-privacy` to `zyggly/#privacy` for legacy App Store listing links. Do not remove it.

## Palette

```
--navy:      #142F4E   nav, masthead, contact strip
--navy-deep: #0B1B2E   footer
--rust:      #B4452A   eyebrow labels, accents, CTA buttons
--paper:     #FAF8F4   default section background
--paper-2:   #F2EEE8   alternate section background
--ink:       #191817   body text
--ink-2:     #3E3B38   secondary body text
--muted:     #6E6963   de-emphasized text
--rule:      #DED8CF   dividers

--tech:      #0B0D12   apps/software dark skin
--tech-2:    #151922   app card hover
--tech-line: #242A36   borders inside tech skin
--tech-dim:  #8C93A3   body text inside tech skin
--gold:      #8A6228   consulting eyebrow and numbering

--street:    #0A0A0A   clothing dark skin
--charcoal:  #1A1A1A   consulting page header

App status colors: #5FCF8E (live), #8C93A3 (in development)
Tech links: #7FB0D8
```

## Typography

- **Body:** IBM Plex Sans 400/500/600 — loaded from Google Fonts
- **Headings (h1–h4):** Space Grotesk 600, `letter-spacing: -.02em`, `line-height: 1.12`
- **Mono accents** (eyebrow `.ey`, buttons, numbered labels, footer h4): IBM Plex Mono 400/500
- **Consulting division only:** Playfair Display 700 replaces Space Grotesk for all h1–h3

Font size base: `16px`. Body line-height: `1.65`.

## Layout constants

- `--wrap: 1180px` max-width, centered, padding `clamp(20px, 5vw, 56px)`
- `--wrap-narrow: 760px` used for legal text pages
- Nav height: `64px`, sticky, breakpoint at `880px` (hamburger appears)
- Section padding: `clamp(52px, 8vw, 92px) 0`
- Masthead padding: `clamp(72px, 12vw, 132px) 0 clamp(56px, 9vw, 96px)`

## Required markup patterns for new pages

**Nav** — copy verbatim from any existing page; add `class="act"` to the matching nav link:
```html
<nav class="nav">
<div class="ni">
<a class="brand" href="../index.html">
  <img src="../assets/img/logo-7k-white.png" alt="">
  <div><b>Seven Kilo</b><span>Enterprises LLC</span></div>
</a>
<ul class="nlinks">
  <li><a href="../consulting/">Consulting</a></li>
  <li><a href="../apps/" class="act">Software</a></li>
  <li><a href="../clothing/">Ecommerce</a></li>
  <li><a href="../property/">Maintenance</a></li>
</ul>
<button class="hbg" id="hbg" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
</div>
</nav>
<div class="mdrawer" id="md">
  <a href="../consulting/">Consulting</a><a href="../apps/">Software</a>
  <a href="../clothing/">Ecommerce</a><a href="../property/">Maintenance</a>
</div>
```

**Interior page header** (`.ph` not `.mast`): wrap in `<section class="ph">`, add `.crumb` breadcrumb, `.ey` eyebrow, `h1`, optional `.lede`.

**Division skin classes** on `<main>`: `tech` (apps), `cons` (consulting), `street` (clothing). Property and legal pages have no `<main>` class.

**Footer** is identical on every page. Copy it as-is and update relative paths. Ends with `<script src="../assets/js/site.js"></script>` — the only JS on the site (mobile drawer toggle).

**Font `<link>` tags** must be included on every page. The full Google Fonts URL loads Space Grotesk, IBM Plex Sans, IBM Plex Mono, and Playfair Display in one request.

## Known issues

- `consulting/index.html` section overrides `.sec-paper` with an inline `style="background:#fff"` — the CSS variable for that section is `var(--paper)` (#FAF8F4), not pure white. The inline style wins.
- The `.scope` block in `property/index.html` has `border-left: 3px solid var(--rust)` — the one card-with-colored-left-border on the site, present in existing code.
- Korrvox and Mitivox show `.st-soon` status color but display their domain names as the label rather than "In development" or "On the App Store" — inconsistent with the other four cards.
- `dyograf/` terms state Dyograf is a one-time purchase, but the app is marked "In development" (no App Store link yet). These will need to be reconciled at launch.
- No favicon is declared on any page.

---

## Writing rules
Write plain, professional, human-sounding copy. Do not use:
- em dashes
- buzzwords: delve, unlock, elevate, seamless, robust
- repeated heading formulas like "Everything you need to..." or "Built for..."
- the "not just X, it's Y" sentence structure
- generic AI openers

## Design rules
Avoid the default look AI-generated sites fall into:
- no blue-purple gradients
- no default Inter font
- no uniform grids of identical feature cards
- no boilerplate skeleton of hero / features / testimonials / pricing / FAQ
- no cards with colored left borders
Match the palette and typography already in this repo. Do not introduce new colors or fonts without being asked.

## Before making changes
Ask before rewriting existing page copy. Show the plan before editing more than one file.
