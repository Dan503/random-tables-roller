const _excluded = ["forcePolyfill", "PolyfillElem"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { useLayoutEffect, useState } from '../../../_snowpack/pkg/react.js';
import './FlexGap.css.proxy.js';
import { jsx as _jsx } from "../../../_snowpack/pkg/react/jsx-runtime.js";
import { jsxs as _jsxs } from "../../../_snowpack/pkg/react/jsx-runtime.js";

const toPx = value => {
  return typeof value === 'number' ? `${value}px` : value;
};

let isSupported; // https://ishadeed.com/article/flexbox-gap/

function checkFlexGapSupport() {
  var _flex$parentNode;

  if (isSupported !== undefined) {
    return isSupported;
  } // create flex container with row-gap set


  const flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';
  flex.style.position = 'fixed';
  flex.style.minHeight = '0'; // create two, elements inside it

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div')); // append to the DOM (needed to obtain scrollHeight)

  document.body.appendChild(flex);
  isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap

  (_flex$parentNode = flex.parentNode) === null || _flex$parentNode === void 0 ? void 0 : _flex$parentNode.removeChild(flex);
  return isSupported;
}

/** Flex-gap with a built in polyfill for Safari */
const FlexGap = ({
  Elem: _Elem = 'div',
  direction: _direction = 'horizontal',
  align: _align = 'stretch',
  justify,
  grow,
  nestChildren: _nestChildren = true,
  wrap: _wrap = _direction === 'horizontal',
  style,
  gap,
  vGap: _vGap = gap,
  hGap: _hGap = gap,
  gapSupport: _gapSupport = true,
  children
}) => {
  const pxGap_v = toPx(_vGap);
  const pxGap_h = toPx(_hGap);
  const isList = ['ul', 'ol'].includes(_Elem);
  const cssDirection = {
    vertical: 'column',
    'vertical-reverse': 'column-reverse',
    horizontal: undefined,
    'horizontal-reverse': 'row-reverse'
  };
  const cssAlign = {
    center: 'center',
    top: 'flex-start',
    bottom: 'flex-end',
    stretch: undefined
  };
  return /*#__PURE__*/_jsxs(_Elem // Extra classes are intentionally not allowed because custom styles can break the polyfill
  , {
    className: "FlexGap",
    "data-grow": grow,
    "data-wrap": _wrap,
    "data-nested-children": _nestChildren,
    "data-flex-gap-support": _gapSupport,
    style: _objectSpread({
      '--gap-v': pxGap_v,
      '--gap-h': pxGap_h,
      flexDirection: cssDirection[_direction],
      justifyContent: justify,
      alignItems: cssAlign[_align]
    }, style),
    children: [!_nestChildren && children, _nestChildren && (children === null || children === void 0 ? void 0 : children.filter(Boolean).map((child, i) => {
      const Child = isList ? 'li' : 'div';
      return /*#__PURE__*/_jsx(Child, {
        className: 'C-FlexGap__child',
        children: child
      }, i);
    }))]
  });
};

const PolyfilledFlexGap = _ref => {
  let {
    forcePolyfill,
    PolyfillElem = 'div'
  } = _ref,
      restProps = _objectWithoutProperties(_ref, _excluded);

  const [gapSupport, setGapSupport] = useState(true);
  useLayoutEffect(() => {
    setGapSupport(forcePolyfill ? false : checkFlexGapSupport());
  }, [forcePolyfill]);

  if (!gapSupport) {
    return /*#__PURE__*/_jsx(PolyfillElem, {
      className: 'C-FlexGap__polyfillWrapper',
      children: /*#__PURE__*/_jsx(FlexGap, _objectSpread({
        gapSupport: gapSupport
      }, restProps))
    });
  }

  return /*#__PURE__*/_jsx(FlexGap, _objectSpread({
    gapSupport: gapSupport
  }, restProps));
};

export { PolyfilledFlexGap as FlexGap };