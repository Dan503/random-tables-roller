// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".App {\n\ttext-align: center;\n\tbackground-color: #282c34;\n\tpadding: 20px;\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: calc(10px + 2vmin);\n\tcolor: white;\n}\n\n.App-inner {\n\tmax-width: 60ch;\n\tmargin: 0 auto;\n}\n\n.App-link {\n\tcolor: #61dafb;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}