# AGENTS

This repo is a small static site (HTML/CSS/JS) that renders Ramadan prayer
times and a countdown timer in the browser. There is no build system or
package manager configured.

If you are an agent, follow this file as the source of truth.

## Commands

There are no scripted build/lint/test commands in this repo.

- Build: none (open `index.html` in a browser)
- Lint: none
- Test: none
- Single test: none (no test runner)

Manual run options:

- Open `index.html` directly in a browser.
- Optional: use a local static server if you prefer (not provided here).

## Project layout

- `index.html`: main page markup, ids/classes used by JS and CSS
- `styles.css`: layout, theme, and responsive styles
- `script.js`: UI logic, countdown, DOM updates
- `data.js`: static Ramadan times and region corrections

## Data model conventions

- `ramadanData` entries use `date` format `DD-MM-YYYY`.
- `day` is a numeric day index in Ramadan.
- Prayer times are `HH:MM` 24-hour strings.
- `regionCorrections` values are minute offsets (ints), keyed by region id.
- Region keys match the `<select id="region">` option values in `index.html`.

## JavaScript style

- Language: plain browser JavaScript, no bundler, no modules.
- Globals are used intentionally (`ramadanData`, `regionCorrections`).
- Use `const` for values that do not change, `let` otherwise.
- Use camelCase for variables and functions.
- Use function declarations for shared utilities.
- Use template literals for multi-line HTML strings.
- Keep DOM queries close to usage and avoid repeated queries in tight loops.
- Prefer `textContent` for user-visible text; use `innerHTML` only for
  templated blocks where HTML is required.
- Date logic uses the local time zone; do not introduce UTC conversions unless
  there is a clear requirement.

## CSS style

- Keep global resets at the top (`* { ... }`).
- Variables live in `:root`; reuse existing color tokens.
- Use `kebab-case` for class names (already in use).
- Keep related rules grouped and separated by section comments.
- Prefer existing gradients and shadows; do not introduce new palettes unless
  necessary.
- Maintain current responsive breakpoints (`768px`, `480px`).

## HTML style

- 4-space indentation, one element per line.
- Keep ids stable (`#region`, `#today-times`, `#table-body`, etc.).
- When adding new UI, mirror existing structure and class naming.
- Script tags stay at the bottom of `body`.

## Naming conventions

- Regions: lowercase with hyphens (`den-haag`, `s-hertogenbosch`).
- Prayer names: use existing labels in `script.js`/`data.js`.
- CSS classes: descriptive, no abbreviations unless already used.

## Error handling and edge cases

- Guard for missing `ramadanData` entries on non-Ramadan dates.
- Handle missing `regionCorrections` safely (do not crash).
- Countdown: if all prayer times have passed, show "Alle gebeden voorbij".
- When no data is available, show the existing "no-data" message style.

## DOM update patterns

- `renderTable()` rebuilds the table body each time; keep it fast and simple.
- `updateTodayTimes()` uses a single `innerHTML` template for cards.
- `startCountdown()` should clear the previous interval before starting a new
  one to avoid duplicate timers.

## Imports and dependencies

- There are no imports or external dependencies.
- Do not introduce npm packages or CDNs unless explicitly requested.

## Formatting expectations

- Keep existing indentation (4 spaces in HTML/CSS/JS).
- Use single quotes in JS strings unless a string contains an apostrophe.
- Avoid trailing whitespace.
- Keep lines readable; long template literals are acceptable.

## Accessibility and UX

- Keep form controls labeled (`label` tied to `select`).
- Ensure new text is legible on existing backgrounds.
- Preserve responsive behavior; verify mobile layout for new UI.

## Adding or editing regions

- Add the option in `index.html`.
- Add matching corrections in `data.js`.
- Keep corrections in minutes (ints) and consistent for `fajr`, `maghrib`,
  `isha` unless a specific rule requires otherwise.

## Adding or editing times

- Update `ramadanData` in `data.js` only.
- Keep the array ordered by date and day number.
- Validate the `DD-MM-YYYY` format and `HH:MM` values.

## Cursor/Copilot rules

- None found in `.cursor/rules/`, `.cursorrules`, or
  `.github/copilot-instructions.md`.

## Agent behavior notes

- Do not add tests unless the user asks; there is no test harness.
- Avoid refactoring for style-only reasons; keep changes minimal and targeted.
- Preserve existing language (Dutch) in UI copy unless a change is requested.
