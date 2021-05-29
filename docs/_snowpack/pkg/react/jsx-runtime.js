import { c as createCommonjsModule } from '../common/_commonjsHelpers-798ad6a7.js';
import { r as react } from '../common/index-15dd604d.js';

var reactJsxRuntime_production_min = createCommonjsModule(function (module, exports) {



var g = 60103;

exports.Fragment = 60107;

if ("function" === typeof Symbol && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  exports.Fragment = h("react.fragment");
}

var m = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    n = Object.prototype.hasOwnProperty,
    p = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function q(c, a, k) {
  var b,
      d = {},
      e = null,
      l = null;
  void 0 !== k && (e = "" + k);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (l = a.ref);

  for (b in a) n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);

  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
  return {
    $$typeof: g,
    type: c,
    key: e,
    ref: l,
    props: d,
    _owner: m.current
  };
}

exports.jsx = q;
exports.jsxs = q;
});

var jsxRuntime = createCommonjsModule(function (module) {

{
  module.exports = reactJsxRuntime_production_min;
}
});

var Fragment = jsxRuntime.Fragment;
var jsx = jsxRuntime.jsx;
var jsxs = jsxRuntime.jsxs;
export { Fragment, jsx, jsxs };
