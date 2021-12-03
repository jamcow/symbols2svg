# Symbols SVG sprite to individual SVG files

Very simplistic.

In the symbols.svg keep only the `<symbol>` one per line, no header or `<defs>`.

It's parsed per-line, the `<symbol>` replaced with svg.

Run
`mkdir -p export`
`npx run index.js`

Overwrites anything in export folder, it stays open and watches for changes.
