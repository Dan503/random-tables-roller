import { StrictMode } from '../_snowpack/pkg/react.js';
import { render } from '../_snowpack/pkg/react-dom.js';
import App from './App.js';
import './index.css.proxy.js';
import reportWebVitals from './reportWebVitals.js';
import { jsx as _jsx } from "../_snowpack/pkg/react/jsx-runtime.js";
render( /*#__PURE__*/_jsx(StrictMode, {
  children: /*#__PURE__*/_jsx(App, {})
}), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();