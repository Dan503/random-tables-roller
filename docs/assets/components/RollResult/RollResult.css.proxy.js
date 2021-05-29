// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".RollResult h3 {\n\tmargin: 0;\n}\n\n.RollResult button[aria-expanded]::before {\n\tcontent: '>';\n\tdisplay: block;\n}\n.RollResult button[aria-expanded='true']::before {\n\ttransform: rotate(-90deg) translateY(-3px);\n}\n.RollResult button[aria-expanded='false']::before {\n\ttransform: rotate(90deg) translateY(-3px);\n}\n\n.crit {\n\tfont-weight: bold;\n\tbox-shadow: 0 0 20px #000;\n\tbackground-color: #000;\n\tborder-radius: 10px;\n\tpadding: 3px 15px 10px;\n\tborder: 2px solid currentColor;\n\twhite-space: nowrap;\n}\n.crit-success {\n\tcolor: lawngreen;\n}\n.crit-fail {\n\tcolor: hsl(0, 85%, 67%);\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}