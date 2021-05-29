// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "html {\n\t--defaultGap: 20px;\n}\n\n.FlexGap {\n\t--gap: var(--defaultGap);\n\t--gap-v: var(--gap);\n\t--gap-h: var(--gap);\n\tdisplay: flex;\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.FlexGap[data-flex-gap-support='true'] {\n\tgap: var(--gap-v) var(--gap-h);\n}\n\n.FlexGap[data-nested-children='true'] > * > * {\n\theight: 100%;\n}\n\n.FlexGap[data-grow='true'] > * {\n\tflex-grow: 1;\n}\n\n.FlexGap[data-wrap='true'] {\n\tflex-wrap: wrap;\n}\n\n/* Polyfill is needed for Safari (last browser not supporting flex-gap) */\n.FlexGap[data-flex-gap-support='false'] {\n\t--negativeGap-v: calc(-1 * var(--gap-v));\n\t--negativeGap-h: calc(-1 * var(--gap-h));\n\tmargin: var(--negativeGap-v) var(--negativeGap-h);\n\tpadding: var(--gap-v) 0 0 var(--gap-h);\n}\n.FlexGap[data-flex-gap-support='false'] > * {\n\tborder: 0 solid transparent;\n\tborder-width: 0 var(--gap-h) var(--gap-v) 0;\n\tbackground-clip: padding-box;\n}\n\n/* Prevents margin from causing weird spacing issues */\n.FlexGap__polyfillWrapper {\n\tpadding-bottom: 0.1px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}