// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".RollTableSet table {\n\twidth: 100%;\n\tborder-spacing: 1em;\n}\n\n.RollTableSet thead tr th {\n\tborder-bottom: 1px solid #61dafb;\n\tpadding-bottom: 20px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}