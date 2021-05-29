import { FlexGap } from '../FlexGap/FlexGap.js';
import './RollTableSet.css.proxy.js';
import { jsx as _jsx } from "../../../_snowpack/pkg/react/jsx-runtime.js";
import { jsxs as _jsxs } from "../../../_snowpack/pkg/react/jsx-runtime.js";
export const RollTableSet = ({
  heading,
  children
}) => {
  return /*#__PURE__*/_jsx("div", {
    className: "RollTableSet",
    children: /*#__PURE__*/_jsxs(FlexGap, {
      direction: "vertical",
      children: [/*#__PURE__*/_jsx("h2", {
        children: heading
      }), /*#__PURE__*/_jsxs("table", {
        children: [/*#__PURE__*/_jsx("thead", {
          children: /*#__PURE__*/_jsxs("tr", {
            children: [/*#__PURE__*/_jsx("th", {
              children: "Trait"
            }), /*#__PURE__*/_jsx("th", {
              children: "Roll value"
            }), /*#__PURE__*/_jsx("th", {
              children: "Result"
            }), /*#__PURE__*/_jsx("th", {
              children: "Action"
            }), /*#__PURE__*/_jsx("th", {
              children: "Table"
            })]
          })
        }), /*#__PURE__*/_jsx("tbody", {
          children: children
        })]
      })]
    })
  });
};