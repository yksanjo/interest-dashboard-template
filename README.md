# Interest Dashboard Template

A zero-build static dashboard for curating the links, feeds, and tools you revisit most. Drop it on GitHub Pages (or any static host), edit a single config file, and you have a personalized command center that others can fork and tailor to their interests.

## Why it exists
- **Light lift**: Everything is plain HTML/CSS/JS—no bundlers, no dependencies.
- **Config driven**: Your dashboard lives in `config/dashboard-config.js`. Copy in one of the presets or roll your own.
- **Shareable**: Ship it as a repo template so people can fork, swap the config, and publish.

## Quick start
1. Fork or download this folder.
2. Edit `config/dashboard-config.js` and replace the sample sections/cards with your own links.
3. Open `index.html` in a browser or run a static server from the project root:
   ```bash
   npx serve
   ```
4. Toggle dark mode, tweak styles in `assets/css/styles.css`, and publish when ready (see below).

## Config format
The config exposes three top-level keys.

- `title` / `subtitle`: Update the hero text.
- `layout.columns`: Adjust the responsive grid density (1–4 works well).
- `sections`: Array of sections; each section supports:
  - `id`: Optional HTML anchor.
  - `title`, `description`, `layout` (`grid` or `list`).
  - `cards`: Array of resources. Each card supports:
    - `title`, `description`, `tags` (Array of short labels).
    - `primaryAction`: `{ label, url, openInNewTab? }`.
    - `secondaryActions`: Array of additional actions with the same shape as `primaryAction`.

Use the presets under `config/presets/` as copy-paste starters (`frontend-development.json`, `ai-research.json`).

## Customize the look
- Update fonts, colors, or spacing in `assets/css/styles.css`.
- Adjust the grid layout in `app.js` or the CSS `--columns` variable if you want more control per section.
- Swap the Google Font link in `index.html` to match your brand.

## Dark mode
A built-in toggle flips between light and dark themes. The setting persists in `localStorage`, and the initial theme honors the user’s OS preference.

## Publish it
- **GitHub Pages**: Push to a repo, enable Pages (root + `/`), done.
- **Netlify/Vercel**: Point to this directory, choose “static site,” and deploy with zero build steps.
- **Local kiosk**: Save `index.html` + `config/` folder to any machine and open in a browser.

## Share it onward
For a low-effort open-source release:
1. Rename the repo to something like `awesome-interest-dashboard`.
2. Mark it as a template (GitHub → Settings → Template repository).
3. Add a badge or link to your deployed demo.
4. Invite contributions via Issues by documenting the config schema in the README.

That’s it—copy the structure, plug in your interests, and you have a useful curated dashboard with minimal maintenance overhead.
