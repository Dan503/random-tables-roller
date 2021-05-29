// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body {\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n\t\t'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n\t\tsans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n\t\tmonospace;\n}\n\nbutton {\n\tcursor: pointer;\n\tborder-radius: 10px;\n\tbackground-color: #61dafb;\n\tfont-family: inherit;\n\tfont-weight: bold;\n\tfont-size: 2rem;\n\tborder: 3px solid #000;\n}\n\nbutton:hover {\n\tbox-shadow: 0 0 0 2px #61dafb;\n}\n\na {\n\tcolor: #61dafb;\n}\n\na:visited {\n\tcolor: plum;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}