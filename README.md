# Filra Chrome Extension

The Claude flowery styled logo roaming on the screen for the Major League Hacking event.

## Installation

1. Download or clone this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right.
4. Click "Load unpacked" and select the folder containing this extension.
5. The extension will be loaded and active.

## Features

- A character (currently a Claude gif) that roams randomly around the screen.
- Non-intrusive: doesn't block clicks or interactions.

## Customization

- Replace the emoji in `content.js` with an image of your favorite anime character.
- Adjust movement speed or behavior in the JavaScript code.
- Add icons (optional): Create `icon16.png`, `icon32.png`, `icon48.png`, and `icon128.png` for the extension icons. If added, re-enable the "icons" section in `manifest.json`.

## Safety

- The extension only runs content scripts on all URLs as specified.
- No data collection or external requests beyond the page itself.