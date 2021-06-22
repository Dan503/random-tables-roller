var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module) => () => {
  if (!module) {
    module = {exports: {}};
    callback(module.exports, module);
  }
  return module.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// build/snowpack/pkg/web-vitals.js
var require_web_vitals = __commonJS((exports) => {
  __markAsModule(exports);
  __export(exports, {
    getCLS: () => s,
    getFCP: () => l,
    getFID: () => L,
    getLCP: () => T2,
    getTTFB: () => b
  });
  var e;
  var t;
  var n;
  var i;
  var a = function a2(e2, t2) {
    return {
      name: e2,
      value: t2 === void 0 ? -1 : t2,
      delta: 0,
      entries: [],
      id: "v1-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
    };
  };
  var r = function r2(e2, t2) {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e2)) {
        if (e2 === "first-input" && !("PerformanceEventTiming" in self))
          return;
        var n2 = new PerformanceObserver(function(e3) {
          return e3.getEntries().map(t2);
        });
        return n2.observe({
          type: e2,
          buffered: true
        }), n2;
      }
    } catch (e3) {
    }
  };
  var o = function o2(e2, t2) {
    var n2 = function n3(i2) {
      i2.type !== "pagehide" && document.visibilityState !== "hidden" || (e2(i2), t2 && (removeEventListener("visibilitychange", n3, true), removeEventListener("pagehide", n3, true)));
    };
    addEventListener("visibilitychange", n2, true), addEventListener("pagehide", n2, true);
  };
  var c = function c2(e2) {
    addEventListener("pageshow", function(t2) {
      t2.persisted && e2(t2);
    }, true);
  };
  var u = typeof WeakSet == "function" ? new WeakSet() : new Set();
  var f = function f2(e2, t2, n2) {
    var i2;
    return function() {
      t2.value >= 0 && (n2 || u.has(t2) || document.visibilityState === "hidden") && (t2.delta = t2.value - (i2 || 0), (t2.delta || i2 === void 0) && (i2 = t2.value, e2(t2)));
    };
  };
  var s = function s2(e2, t2) {
    var n2, i2 = a("CLS", 0), u2 = function u3(e3) {
      e3.hadRecentInput || (i2.value += e3.value, i2.entries.push(e3), n2());
    }, s3 = r("layout-shift", u2);
    s3 && (n2 = f(e2, i2, t2), o(function() {
      s3.takeRecords().map(u2), n2();
    }), c(function() {
      i2 = a("CLS", 0), n2 = f(e2, i2, t2);
    }));
  };
  var m = -1;
  var p = function p2() {
    return document.visibilityState === "hidden" ? 0 : 1 / 0;
  };
  var v = function v2() {
    o(function(e2) {
      var t2 = e2.timeStamp;
      m = t2;
    }, true);
  };
  var d = function d2() {
    return m < 0 && (m = p(), v(), c(function() {
      setTimeout(function() {
        m = p(), v();
      }, 0);
    })), {
      get timeStamp() {
        return m;
      }
    };
  };
  var l = function l2(e2, t2) {
    var n2, i2 = d(), o2 = a("FCP"), s2 = function s3(e3) {
      e3.name === "first-contentful-paint" && (p2 && p2.disconnect(), e3.startTime < i2.timeStamp && (o2.value = e3.startTime, o2.entries.push(e3), u.add(o2), n2()));
    }, m2 = performance.getEntriesByName("first-contentful-paint")[0], p2 = m2 ? null : r("paint", s2);
    (m2 || p2) && (n2 = f(e2, o2, t2), m2 && s2(m2), c(function(i3) {
      o2 = a("FCP"), n2 = f(e2, o2, t2), requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          o2.value = performance.now() - i3.timeStamp, u.add(o2), n2();
        });
      });
    }));
  };
  var h = {
    passive: true,
    capture: true
  };
  var S2 = new Date();
  var y2 = function y3(i2, a2) {
    e || (e = a2, t = i2, n = new Date(), w(removeEventListener), g());
  };
  var g = function g2() {
    if (t >= 0 && t < n - S2) {
      var a2 = {
        entryType: "first-input",
        name: e.type,
        target: e.target,
        cancelable: e.cancelable,
        startTime: e.timeStamp,
        processingStart: e.timeStamp + t
      };
      i.forEach(function(e2) {
        e2(a2);
      }), i = [];
    }
  };
  var E = function E2(e2) {
    if (e2.cancelable) {
      var t2 = (e2.timeStamp > 1e12 ? new Date() : performance.now()) - e2.timeStamp;
      e2.type == "pointerdown" ? function(e3, t3) {
        var n2 = function n3() {
          y2(e3, t3), a2();
        }, i2 = function i3() {
          a2();
        }, a2 = function a3() {
          removeEventListener("pointerup", n2, h), removeEventListener("pointercancel", i2, h);
        };
        addEventListener("pointerup", n2, h), addEventListener("pointercancel", i2, h);
      }(t2, e2) : y2(t2, e2);
    }
  };
  var w = function w2(e2) {
    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(t2) {
      return e2(t2, E, h);
    });
  };
  var L = function L2(n2, s2) {
    var m2, p2 = d(), v2 = a("FID"), l2 = function l3(e2) {
      e2.startTime < p2.timeStamp && (v2.value = e2.processingStart - e2.startTime, v2.entries.push(e2), u.add(v2), m2());
    }, h2 = r("first-input", l2);
    m2 = f(n2, v2, s2), h2 && o(function() {
      h2.takeRecords().map(l2), h2.disconnect();
    }, true), h2 && c(function() {
      var r2;
      v2 = a("FID"), m2 = f(n2, v2, s2), i = [], t = -1, e = null, w(addEventListener), r2 = l2, i.push(r2), g();
    });
  };
  var T2 = function T3(e2, t2) {
    var n2, i2 = d(), s2 = a("LCP"), m2 = function m3(e3) {
      var t3 = e3.startTime;
      t3 < i2.timeStamp && (s2.value = t3, s2.entries.push(e3)), n2();
    }, p2 = r("largest-contentful-paint", m2);
    if (p2) {
      n2 = f(e2, s2, t2);
      var v2 = function v3() {
        u.has(s2) || (p2.takeRecords().map(m2), p2.disconnect(), u.add(s2), n2());
      };
      ["keydown", "click"].forEach(function(e3) {
        addEventListener(e3, v2, {
          once: true,
          capture: true
        });
      }), o(v2, true), c(function(i3) {
        s2 = a("LCP"), n2 = f(e2, s2, t2), requestAnimationFrame(function() {
          requestAnimationFrame(function() {
            s2.value = performance.now() - i3.timeStamp, u.add(s2), n2();
          });
        });
      });
    }
  };
  var b = function b2(e2) {
    var t2, n2 = a("TTFB");
    t2 = function() {
      try {
        var t3 = performance.getEntriesByType("navigation")[0] || function() {
          var e3 = performance.timing, t4 = {
            entryType: "navigation",
            startTime: 0
          };
          for (var n3 in e3)
            n3 !== "navigationStart" && n3 !== "toJSON" && (t4[n3] = Math.max(e3[n3] - e3.navigationStart, 0));
          return t4;
        }();
        if (n2.value = n2.delta = t3.responseStart, n2.value < 0)
          return;
        n2.entries = [t3], e2(n2);
      } catch (e3) {
      }
    }, document.readyState === "complete" ? setTimeout(t2, 0) : addEventListener("pageshow", t2);
  };
});

// build/snowpack/pkg/common/_commonjsHelpers-798ad6a7.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}

// build/snowpack/pkg/common/index-15dd604d.js
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
      return test2[n];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
var react_production_min = createCommonjsModule(function(module, exports) {
  var n = 60103, p = 60106;
  exports.Fragment = 60107;
  exports.StrictMode = 60108;
  exports.Profiler = 60114;
  var q = 60109, r = 60110, t = 60112;
  exports.Suspense = 60113;
  var u = 60115, v = 60116;
  if (typeof Symbol === "function" && Symbol.for) {
    var w = Symbol.for;
    n = w("react.element");
    p = w("react.portal");
    exports.Fragment = w("react.fragment");
    exports.StrictMode = w("react.strict_mode");
    exports.Profiler = w("react.profiler");
    q = w("react.provider");
    r = w("react.context");
    t = w("react.forward_ref");
    exports.Suspense = w("react.suspense");
    u = w("react.memo");
    v = w("react.lazy");
  }
  var x = typeof Symbol === "function" && Symbol.iterator;
  function y2(a) {
    if (a === null || typeof a !== "object")
      return null;
    a = x && a[x] || a["@@iterator"];
    return typeof a === "function" ? a : null;
  }
  function z(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var A = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, B2 = {};
  function C(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = B2;
    this.updater = c || A;
  }
  C.prototype.isReactComponent = {};
  C.prototype.setState = function(a, b) {
    if (typeof a !== "object" && typeof a !== "function" && a != null)
      throw Error(z(85));
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  C.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function D2() {
  }
  D2.prototype = C.prototype;
  function E(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = B2;
    this.updater = c || A;
  }
  var F2 = E.prototype = new D2();
  F2.constructor = E;
  objectAssign(F2, C.prototype);
  F2.isPureReactComponent = true;
  var G2 = {
    current: null
  }, H2 = Object.prototype.hasOwnProperty, I2 = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function J(a, b, c) {
    var e, d = {}, k = null, h = null;
    if (b != null)
      for (e in b.ref !== void 0 && (h = b.ref), b.key !== void 0 && (k = "" + b.key), b)
        H2.call(b, e) && !I2.hasOwnProperty(e) && (d[e] = b[e]);
    var g = arguments.length - 2;
    if (g === 1)
      d.children = c;
    else if (1 < g) {
      for (var f = Array(g), m = 0; m < g; m++)
        f[m] = arguments[m + 2];
      d.children = f;
    }
    if (a && a.defaultProps)
      for (e in g = a.defaultProps, g)
        d[e] === void 0 && (d[e] = g[e]);
    return {
      $$typeof: n,
      type: a,
      key: k,
      ref: h,
      props: d,
      _owner: G2.current
    };
  }
  function K(a, b) {
    return {
      $$typeof: n,
      type: a.type,
      key: b,
      ref: a.ref,
      props: a.props,
      _owner: a._owner
    };
  }
  function L(a) {
    return typeof a === "object" && a !== null && a.$$typeof === n;
  }
  function escape(a) {
    var b = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(a2) {
      return b[a2];
    });
  }
  var M2 = /\/+/g;
  function N2(a, b) {
    return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
  }
  function O2(a, b, c, e, d) {
    var k = typeof a;
    if (k === "undefined" || k === "boolean")
      a = null;
    var h = false;
    if (a === null)
      h = true;
    else
      switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case n:
            case p:
              h = true;
          }
      }
    if (h)
      return h = a, d = d(h), a = e === "" ? "." + N2(h, 0) : e, Array.isArray(d) ? (c = "", a != null && (c = a.replace(M2, "$&/") + "/"), O2(d, b, c, "", function(a2) {
        return a2;
      })) : d != null && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M2, "$&/") + "/") + a)), b.push(d)), 1;
    h = 0;
    e = e === "" ? "." : e + ":";
    if (Array.isArray(a))
      for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = e + N2(k, g);
        h += O2(k, b, c, f, d);
      }
    else if (f = y2(a), typeof f === "function")
      for (a = f.call(a), g = 0; !(k = a.next()).done; )
        k = k.value, f = e + N2(k, g++), h += O2(k, b, c, f, d);
    else if (k === "object")
      throw b = "" + a, Error(z(31, b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
    return h;
  }
  function P2(a, b, c) {
    if (a == null)
      return a;
    var e = [], d = 0;
    O2(a, e, "", "", function(a2) {
      return b.call(c, a2, d++);
    });
    return e;
  }
  function Q(a) {
    if (a._status === -1) {
      var b = a._result;
      b = b();
      a._status = 0;
      a._result = b;
      b.then(function(b2) {
        a._status === 0 && (b2 = b2.default, a._status = 1, a._result = b2);
      }, function(b2) {
        a._status === 0 && (a._status = 2, a._result = b2);
      });
    }
    if (a._status === 1)
      return a._result;
    throw a._result;
  }
  var R2 = {
    current: null
  };
  function S2() {
    var a = R2.current;
    if (a === null)
      throw Error(z(321));
    return a;
  }
  var T2 = {
    ReactCurrentDispatcher: R2,
    ReactCurrentBatchConfig: {
      transition: 0
    },
    ReactCurrentOwner: G2,
    IsSomeRendererActing: {
      current: false
    },
    assign: objectAssign
  };
  exports.Children = {
    map: P2,
    forEach: function(a, b, c) {
      P2(a, function() {
        b.apply(this, arguments);
      }, c);
    },
    count: function(a) {
      var b = 0;
      P2(a, function() {
        b++;
      });
      return b;
    },
    toArray: function(a) {
      return P2(a, function(a2) {
        return a2;
      }) || [];
    },
    only: function(a) {
      if (!L(a))
        throw Error(z(143));
      return a;
    }
  };
  exports.Component = C;
  exports.PureComponent = E;
  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T2;
  exports.cloneElement = function(a, b, c) {
    if (a === null || a === void 0)
      throw Error(z(267, a));
    var e = objectAssign({}, a.props), d = a.key, k = a.ref, h = a._owner;
    if (b != null) {
      b.ref !== void 0 && (k = b.ref, h = G2.current);
      b.key !== void 0 && (d = "" + b.key);
      if (a.type && a.type.defaultProps)
        var g = a.type.defaultProps;
      for (f in b)
        H2.call(b, f) && !I2.hasOwnProperty(f) && (e[f] = b[f] === void 0 && g !== void 0 ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (f === 1)
      e.children = c;
    else if (1 < f) {
      g = Array(f);
      for (var m = 0; m < f; m++)
        g[m] = arguments[m + 2];
      e.children = g;
    }
    return {
      $$typeof: n,
      type: a.type,
      key: d,
      ref: k,
      props: e,
      _owner: h
    };
  };
  exports.createContext = function(a, b) {
    b === void 0 && (b = null);
    a = {
      $$typeof: r,
      _calculateChangedBits: b,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    a.Provider = {
      $$typeof: q,
      _context: a
    };
    return a.Consumer = a;
  };
  exports.createElement = J;
  exports.createFactory = function(a) {
    var b = J.bind(null, a);
    b.type = a;
    return b;
  };
  exports.createRef = function() {
    return {
      current: null
    };
  };
  exports.forwardRef = function(a) {
    return {
      $$typeof: t,
      render: a
    };
  };
  exports.isValidElement = L;
  exports.lazy = function(a) {
    return {
      $$typeof: v,
      _payload: {
        _status: -1,
        _result: a
      },
      _init: Q
    };
  };
  exports.memo = function(a, b) {
    return {
      $$typeof: u,
      type: a,
      compare: b === void 0 ? null : b
    };
  };
  exports.useCallback = function(a, b) {
    return S2().useCallback(a, b);
  };
  exports.useContext = function(a, b) {
    return S2().useContext(a, b);
  };
  exports.useDebugValue = function() {
  };
  exports.useEffect = function(a, b) {
    return S2().useEffect(a, b);
  };
  exports.useImperativeHandle = function(a, b, c) {
    return S2().useImperativeHandle(a, b, c);
  };
  exports.useLayoutEffect = function(a, b) {
    return S2().useLayoutEffect(a, b);
  };
  exports.useMemo = function(a, b) {
    return S2().useMemo(a, b);
  };
  exports.useReducer = function(a, b, c) {
    return S2().useReducer(a, b, c);
  };
  exports.useRef = function(a) {
    return S2().useRef(a);
  };
  exports.useState = function(a) {
    return S2().useState(a);
  };
  exports.version = "17.0.2";
});
var react = createCommonjsModule(function(module) {
  {
    module.exports = react_production_min;
  }
});

// build/snowpack/pkg/react.js
var StrictMode = react.StrictMode;
var useEffect = react.useEffect;
var useLayoutEffect = react.useLayoutEffect;
var useState = react.useState;

// build/snowpack/pkg/react-dom.js
var scheduler_production_min = createCommonjsModule(function(module, exports) {
  var f, g, h, k;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l = performance;
    exports.unstable_now = function() {
      return l.now();
    };
  } else {
    var p = Date, q = p.now();
    exports.unstable_now = function() {
      return p.now() - q;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t = null, u = null, w = function w2() {
      if (t !== null)
        try {
          var a = exports.unstable_now();
          t(true, a);
          t = null;
        } catch (b) {
          throw setTimeout(w2, 0), b;
        }
    };
    f = function(a) {
      t !== null ? setTimeout(f, 0, a) : (t = a, setTimeout(w, 0));
    };
    g = function(a, b) {
      u = setTimeout(a, b);
    };
    h = function() {
      clearTimeout(u);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x = window.setTimeout, y2 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A = false, B2 = null, C = -1, D2 = 5, E = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E;
    };
    k = function() {
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    var F2 = new MessageChannel(), G2 = F2.port2;
    F2.port1.onmessage = function() {
      if (B2 !== null) {
        var a = exports.unstable_now();
        E = a + D2;
        try {
          B2(true, a) ? G2.postMessage(null) : (A = false, B2 = null);
        } catch (b) {
          throw G2.postMessage(null), b;
        }
      } else
        A = false;
    };
    f = function(a) {
      B2 = a;
      A || (A = true, G2.postMessage(null));
    };
    g = function(a, b) {
      C = x(function() {
        a(exports.unstable_now());
      }, b);
    };
    h = function() {
      y2(C);
      C = -1;
    };
  }
  function H2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; ; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (e !== void 0 && 0 < I2(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function J(a) {
    a = a[0];
    return a === void 0 ? null : a;
  }
  function K(a) {
    var b = a[0];
    if (b !== void 0) {
      var c = a.pop();
      if (c !== b) {
        a[0] = c;
        a:
          for (var d = 0, e = a.length; d < e; ) {
            var m = 2 * (d + 1) - 1, n = a[m], v = m + 1, r = a[v];
            if (n !== void 0 && 0 > I2(n, c))
              r !== void 0 && 0 > I2(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);
            else if (r !== void 0 && 0 > I2(r, c))
              a[d] = r, a[v] = c, d = v;
            else
              break a;
          }
      }
      return b;
    }
    return null;
  }
  function I2(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return c !== 0 ? c : a.id - b.id;
  }
  var L = [], M2 = [], N2 = 1, O2 = null, P2 = 3, Q = false, R2 = false, S2 = false;
  function T2(a) {
    for (var b = J(M2); b !== null; ) {
      if (b.callback === null)
        K(M2);
      else if (b.startTime <= a)
        K(M2), b.sortIndex = b.expirationTime, H2(L, b);
      else
        break;
      b = J(M2);
    }
  }
  function U2(a) {
    S2 = false;
    T2(a);
    if (!R2)
      if (J(L) !== null)
        R2 = true, f(V2);
      else {
        var b = J(M2);
        b !== null && g(U2, b.startTime - a);
      }
  }
  function V2(a, b) {
    R2 = false;
    S2 && (S2 = false, h());
    Q = true;
    var c = P2;
    try {
      T2(b);
      for (O2 = J(L); O2 !== null && (!(O2.expirationTime > b) || a && !exports.unstable_shouldYield()); ) {
        var d = O2.callback;
        if (typeof d === "function") {
          O2.callback = null;
          P2 = O2.priorityLevel;
          var e = d(O2.expirationTime <= b);
          b = exports.unstable_now();
          typeof e === "function" ? O2.callback = e : O2 === J(L) && K(L);
          T2(b);
        } else
          K(L);
        O2 = J(L);
      }
      if (O2 !== null)
        var m = true;
      else {
        var n = J(M2);
        n !== null && g(U2, n.startTime - b);
        m = false;
      }
      return m;
    } finally {
      O2 = null, P2 = c, Q = false;
    }
  }
  var W2 = k;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R2 || Q || (R2 = true, f(V2));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J(L);
  };
  exports.unstable_next = function(a) {
    switch (P2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = P2;
    }
    var c = P2;
    P2 = b;
    try {
      return a();
    } finally {
      P2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W2;
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = P2;
    P2 = a;
    try {
      return b();
    } finally {
      P2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = {
      id: N2++,
      callback: b,
      priorityLevel: a,
      startTime: c,
      expirationTime: e,
      sortIndex: -1
    };
    c > d ? (a.sortIndex = c, H2(M2, a), J(L) === null && a === J(M2) && (S2 ? h() : S2 = true, g(U2, c - d))) : (a.sortIndex = e, H2(L, a), R2 || Q || (R2 = true, f(V2)));
    return a;
  };
  exports.unstable_wrapCallback = function(a) {
    var b = P2;
    return function() {
      var c = P2;
      P2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        P2 = c;
      }
    };
  };
});
var scheduler = createCommonjsModule(function(module) {
  {
    module.exports = scheduler_production_min;
  }
});
function y(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!react)
  throw Error(y(227));
var ba = new Set();
var ca = {};
function da(a, b) {
  ea(a, b);
  ea(a + "Capture", b);
}
function ea(a, b) {
  ca[a] = b;
  for (a = 0; a < b.length; a++)
    ba.add(b[a]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
var ia = Object.prototype.hasOwnProperty;
var ja = {};
var ka = {};
function la(a) {
  if (ia.call(ka, a))
    return true;
  if (ia.call(ja, a))
    return false;
  if (ha.test(a))
    return ka[a] = true;
  ja[a] = true;
  return false;
}
function ma(a, b, c, d) {
  if (c !== null && c.type === 0)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (c !== null)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return a !== "data-" && a !== "aria-";
    default:
      return false;
  }
}
function na(a, b, c, d) {
  if (b === null || typeof b === "undefined" || ma(a, b, c, d))
    return true;
  if (d)
    return false;
  if (c !== null)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return b === false;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function B(a, b, c, d, e, f, g) {
  this.acceptsBooleans = b === 2 || b === 3 || b === 4;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f;
  this.removeEmptyString = g;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  D[a] = new B(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  D[b] = new B(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  D[a] = new B(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  D[a] = new B(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  D[a] = new B(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  D[a] = new B(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  D[a] = new B(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  D[a] = new B(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  D[a] = new B(a, 5, false, a.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, true, true);
});
function qa(a, b, c, d) {
  var e = D.hasOwnProperty(b) ? D[b] : null;
  var f = e !== null ? e.type === 0 : d ? false : !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N" ? false : true;
  f || (na(b, c, e, d) && (c = null), d || e === null ? la(b) && (c === null ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, c === null ? a.removeAttribute(b) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}
var ra = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var sa = 60103;
var ta = 60106;
var ua = 60107;
var wa = 60108;
var xa = 60114;
var ya = 60109;
var za = 60110;
var Aa = 60112;
var Ba = 60113;
var Ca = 60120;
var Da = 60115;
var Ea = 60116;
var Fa = 60121;
var Ga = 60128;
var Ha = 60129;
var Ia = 60130;
var Ja = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  E = Symbol.for;
  sa = E("react.element");
  ta = E("react.portal");
  ua = E("react.fragment");
  wa = E("react.strict_mode");
  xa = E("react.profiler");
  ya = E("react.provider");
  za = E("react.context");
  Aa = E("react.forward_ref");
  Ba = E("react.suspense");
  Ca = E("react.suspense_list");
  Da = E("react.memo");
  Ea = E("react.lazy");
  Fa = E("react.block");
  E("react.scope");
  Ga = E("react.opaque.id");
  Ha = E("react.debug_trace_mode");
  Ia = E("react.offscreen");
  Ja = E("react.legacy_hidden");
}
var E;
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = Ka && a[Ka] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
var Ma;
function Na(a) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      Ma = b && b[1] || "";
    }
  return "\n" + Ma + a;
}
var Oa = false;
function Pa(a, b) {
  if (!a || Oa)
    return "";
  Oa = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b) {
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", {
        set: function() {
          throw Error();
        }
      }), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (k) {
          var d = k;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (k) {
          d = k;
        }
        a.call(b.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (k) {
        d = k;
      }
      a();
    }
  } catch (k) {
    if (k && d && typeof k.stack === "string") {
      for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; )
        h--;
      for (; 1 <= g && 0 <= h; g--, h--)
        if (e[g] !== f[h]) {
          if (g !== 1 || h !== 1) {
            do
              if (g--, h--, 0 > h || e[g] !== f[h])
                return "\n" + e[g].replace(" at new ", " at ");
            while (1 <= g && 0 <= h);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
}
function Qa(a) {
  switch (a.tag) {
    case 5:
      return Na(a.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Pa(a.type, false), a;
    case 11:
      return a = Pa(a.type.render, false), a;
    case 22:
      return a = Pa(a.type._render, false), a;
    case 1:
      return a = Pa(a.type, true), a;
    default:
      return "";
  }
}
function Ra(a) {
  if (a == null)
    return null;
  if (typeof a === "function")
    return a.displayName || a.name || null;
  if (typeof a === "string")
    return a;
  switch (a) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof a === "object")
    switch (a.$$typeof) {
      case za:
        return (a.displayName || "Context") + ".Consumer";
      case ya:
        return (a._context.displayName || "Context") + ".Provider";
      case Aa:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || (b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef");
      case Da:
        return Ra(a.type);
      case Fa:
        return Ra(a._render);
      case Ea:
        b = a._payload;
        a = a._init;
        try {
          return Ra(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && a.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
    var e = c.get, f = c.set;
    Object.defineProperty(a, b, {
      configurable: true,
      get: function() {
        return e.call(this);
      },
      set: function(a2) {
        d = "" + a2;
        f.call(this, a2);
      }
    });
    Object.defineProperty(a, b, {
      enumerable: c.enumerable
    });
    return {
      getValue: function() {
        return d;
      },
      setValue: function(a2) {
        d = "" + a2;
      },
      stopTracking: function() {
        a._valueTracker = null;
        delete a[b];
      }
    };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || (typeof document !== "undefined" ? document : void 0);
  if (typeof a === "undefined")
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return objectAssign({}, b, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: c != null ? c : a._wrapperState.initialChecked
  });
}
function Za(a, b) {
  var c = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
  c = Sa(b.value != null ? b.value : c);
  a._wrapperState = {
    initialChecked: d,
    initialValue: c,
    controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null
  };
}
function $a(a, b) {
  b = b.checked;
  b != null && qa(a, "checked", b, false);
}
function ab(a, b) {
  $a(a, b);
  var c = Sa(b.value), d = b.type;
  if (c != null) {
    if (d === "number") {
      if (c === 0 && a.value === "" || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  } else if (d === "submit" || d === "reset") {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
  b.checked == null && b.defaultChecked != null && (a.defaultChecked = !!b.defaultChecked);
}
function cb(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!(d !== "submit" && d !== "reset" || b.value !== void 0 && b.value !== null))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  c !== "" && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  c !== "" && (a.name = c);
}
function bb(a, b, c) {
  if (b !== "number" || Xa(a.ownerDocument) !== a)
    c == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
function db(a) {
  var b = "";
  react.Children.forEach(a, function(a2) {
    a2 != null && (b += a2);
  });
  return b;
}
function eb(a, b) {
  a = objectAssign({
    children: void 0
  }, b);
  if (b = db(b.children))
    a.children = b;
  return a;
}
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      b !== null || a[e].disabled || (b = a[e]);
    }
    b !== null && (b.selected = true);
  }
}
function gb(a, b) {
  if (b.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return objectAssign({}, b, {
    value: void 0,
    defaultValue: void 0,
    children: "" + a._wrapperState.initialValue
  });
}
function hb(a, b) {
  var c = b.value;
  if (c == null) {
    c = b.children;
    b = b.defaultValue;
    if (c != null) {
      if (b != null)
        throw Error(y(92));
      if (Array.isArray(c)) {
        if (!(1 >= c.length))
          throw Error(y(93));
        c = c[0];
      }
      b = c;
    }
    b == null && (b = "");
    c = b;
  }
  a._wrapperState = {
    initialValue: Sa(c)
  };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  c != null && (c = "" + c, c !== a.value && (a.value = c), b.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c));
  d != null && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && b !== "" && b !== null && (a.value = b);
}
var kb = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg"
};
function lb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a, b) {
  return a == null || a === "http://www.w3.org/1999/xhtml" ? lb(b) : a === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
}
var nb;
var ob = function(a) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if (a.namespaceURI !== kb.svg || "innerHTML" in a)
    a.innerHTML = b;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = nb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function pb(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && c.nodeType === 3) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a) {
  rb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    qb[b] = qb[a];
  });
});
function sb(a, b, c) {
  return b == null || typeof b === "boolean" || b === "" ? "" : c || typeof b !== "number" || b === 0 || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
}
function tb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = c.indexOf("--") === 0, e = sb(c, b[c], d);
      c === "float" && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var ub = objectAssign({
  menuitem: true
}, {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
});
function vb(a, b) {
  if (b) {
    if (ub[a] && (b.children != null || b.dangerouslySetInnerHTML != null))
      throw Error(y(137, a));
    if (b.dangerouslySetInnerHTML != null) {
      if (b.children != null)
        throw Error(y(60));
      if (!(typeof b.dangerouslySetInnerHTML === "object" && "__html" in b.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (b.style != null && typeof b.style !== "object")
      throw Error(y(62));
  }
}
function wb(a, b) {
  if (a.indexOf("-") === -1)
    return typeof b.is === "string";
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return a.nodeType === 3 ? a.parentNode : a;
}
var yb = null;
var zb = null;
var Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if (typeof yb !== "function")
      throw Error(y(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb(a, b, c, d, e) {
  return a(b, c, d, e);
}
function Ib() {
}
var Jb = Gb;
var Kb = false;
var Lb = false;
function Mb() {
  if (zb !== null || Ab !== null)
    Ib(), Fb();
}
function Nb(a, b, c) {
  if (Lb)
    return a(b, c);
  Lb = true;
  try {
    return Jb(a, b, c);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a, b) {
  var c = a.stateNode;
  if (c === null)
    return null;
  var d = Db(c);
  if (d === null)
    return null;
  c = d[b];
  a:
    switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && typeof c !== "function")
    throw Error(y(231, b, typeof c));
  return c;
}
var Pb = false;
if (fa)
  try {
    Qb = {};
    Object.defineProperty(Qb, "passive", {
      get: function() {
        Pb = true;
      }
    });
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a) {
    Pb = false;
  }
var Qb;
function Rb(a, b, c, d, e, f, g, h, k) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l);
  } catch (n) {
    this.onError(n);
  }
}
var Sb = false;
var Tb = null;
var Ub = false;
var Vb = null;
var Wb = {
  onError: function(a) {
    Sb = true;
    Tb = a;
  }
};
function Xb(a, b, c, d, e, f, g, h, k) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a, b, c, d, e, f, g, h, k) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y(198));
    Ub || (Ub = true, Vb = l);
  }
}
function Zb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, (b.flags & 1026) !== 0 && (c = b.return), a = b.return;
    while (a);
  }
  return b.tag === 3 ? c : null;
}
function $b(a) {
  if (a.tag === 13) {
    var b = a.memoizedState;
    b === null && (a = a.alternate, a !== null && (b = a.memoizedState));
    if (b !== null)
      return b.dehydrated;
  }
  return null;
}
function ac(a) {
  if (Zb(a) !== a)
    throw Error(y(188));
}
function bc(a) {
  var b = a.alternate;
  if (!b) {
    b = Zb(a);
    if (b === null)
      throw Error(y(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (e === null)
      break;
    var f = e.alternate;
    if (f === null) {
      d = e.return;
      if (d !== null) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f.child) {
      for (f = e.child; f; ) {
        if (f === c)
          return ac(e), a;
        if (f === d)
          return ac(e), b;
        f = f.sibling;
      }
      throw Error(y(188));
    }
    if (c.return !== d.return)
      c = e, d = f;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f.child; h; ) {
          if (h === c) {
            g = true;
            c = f;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g)
          throw Error(y(189));
      }
    }
    if (c.alternate !== d)
      throw Error(y(190));
  }
  if (c.tag !== 3)
    throw Error(y(188));
  return c.stateNode.current === c ? a : b;
}
function cc(a) {
  a = bc(a);
  if (!a)
    return null;
  for (var b = a; ; ) {
    if (b.tag === 5 || b.tag === 6)
      return b;
    if (b.child)
      b.child.return = b, b = b.child;
    else {
      if (b === a)
        break;
      for (; !b.sibling; ) {
        if (!b.return || b.return === a)
          return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return null;
}
function dc(a, b) {
  for (var c = a.alternate; b !== null; ) {
    if (b === a || b === c)
      return true;
    b = b.return;
  }
  return false;
}
var ec;
var fc;
var gc;
var hc;
var ic = false;
var jc = [];
var kc = null;
var lc = null;
var mc = null;
var nc = new Map();
var oc = new Map();
var pc = [];
var qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a, b, c, d, e) {
  return {
    blockedOn: a,
    domEventName: b,
    eventSystemFlags: c | 16,
    nativeEvent: e,
    targetContainers: [d]
  };
}
function sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b.pointerId);
  }
}
function tc(a, b, c, d, e, f) {
  if (a === null || a.nativeEvent !== f)
    return a = rc(b, c, d, e, f), b !== null && (b = Cb(b), b !== null && fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  e !== null && b.indexOf(e) === -1 && b.push(e);
  return a;
}
function uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return kc = tc(kc, a, b, c, d, e), true;
    case "dragenter":
      return lc = tc(lc, a, b, c, d, e), true;
    case "mouseover":
      return mc = tc(mc, a, b, c, d, e), true;
    case "pointerover":
      var f = e.pointerId;
      nc.set(f, tc(nc.get(f) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f = e.pointerId, oc.set(f, tc(oc.get(f) || null, a, b, c, d, e)), true;
  }
  return false;
}
function vc(a) {
  var b = wc(a.target);
  if (b !== null) {
    var c = Zb(b);
    if (c !== null) {
      if (b = c.tag, b === 13) {
        if (b = $b(c), b !== null) {
          a.blockedOn = b;
          hc(a.lanePriority, function() {
            scheduler.unstable_runWithPriority(a.priority, function() {
              gc(c);
            });
          });
          return;
        }
      } else if (b === 3 && c.stateNode.hydrate) {
        a.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function xc(a) {
  if (a.blockedOn !== null)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (c !== null)
      return b = Cb(c), b !== null && fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function zc(a, b, c) {
  xc(a) && c.delete(b);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a = jc[0];
    if (a.blockedOn !== null) {
      a = Cb(a.blockedOn);
      a !== null && ec(a);
      break;
    }
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (c !== null) {
        a.blockedOn = c;
        break;
      }
      b.shift();
    }
    a.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a, b) {
  a.blockedOn === b && (a.blockedOn = null, ic || (ic = true, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, Ac)));
}
function Cc(a) {
  function b(b2) {
    return Bc(b2, a);
  }
  if (0 < jc.length) {
    Bc(jc[0], a);
    for (var c = 1; c < jc.length; c++) {
      var d = jc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a);
  lc !== null && Bc(lc, a);
  mc !== null && Bc(mc, a);
  nc.forEach(b);
  oc.forEach(b);
  for (c = 0; c < pc.length; c++)
    d = pc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < pc.length && (c = pc[0], c.blockedOn === null); )
    vc(c), c.blockedOn === null && pc.shift();
}
function Dc(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var Ec = {
  animationend: Dc("Animation", "AnimationEnd"),
  animationiteration: Dc("Animation", "AnimationIteration"),
  animationstart: Dc("Animation", "AnimationStart"),
  transitionend: Dc("Transition", "TransitionEnd")
};
var Fc = {};
var Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a) {
  if (Fc[a])
    return Fc[a];
  if (!Ec[a])
    return a;
  var b = Ec[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Gc)
      return Fc[a] = b[c];
  return a;
}
var Ic = Hc("animationend");
var Jc = Hc("animationiteration");
var Kc = Hc("animationstart");
var Lc = Hc("transitionend");
var Mc = new Map();
var Nc = new Map();
var Oc = ["abort", "abort", Ic, "animationEnd", Jc, "animationIteration", Kc, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Lc, "transitionEnd", "waiting", "waiting"];
function Pc(a, b) {
  for (var c = 0; c < a.length; c += 2) {
    var d = a[c], e = a[c + 1];
    e = "on" + (e[0].toUpperCase() + e.slice(1));
    Nc.set(d, b);
    Mc.set(d, e);
    da(e, [d]);
  }
}
var Qc = scheduler.unstable_now;
Qc();
var F = 8;
function Rc(a) {
  if ((1 & a) !== 0)
    return F = 15, 1;
  if ((2 & a) !== 0)
    return F = 14, 2;
  if ((4 & a) !== 0)
    return F = 13, 4;
  var b = 24 & a;
  if (b !== 0)
    return F = 12, b;
  if ((a & 32) !== 0)
    return F = 11, 32;
  b = 192 & a;
  if (b !== 0)
    return F = 10, b;
  if ((a & 256) !== 0)
    return F = 9, 256;
  b = 3584 & a;
  if (b !== 0)
    return F = 8, b;
  if ((a & 4096) !== 0)
    return F = 7, 4096;
  b = 4186112 & a;
  if (b !== 0)
    return F = 6, b;
  b = 62914560 & a;
  if (b !== 0)
    return F = 5, b;
  if (a & 67108864)
    return F = 4, 67108864;
  if ((a & 134217728) !== 0)
    return F = 3, 134217728;
  b = 805306368 & a;
  if (b !== 0)
    return F = 2, b;
  if ((1073741824 & a) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a;
}
function Sc(a) {
  switch (a) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a) {
  switch (a) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, a));
  }
}
function Uc(a, b) {
  var c = a.pendingLanes;
  if (c === 0)
    return F = 0;
  var d = 0, e = 0, f = a.expiredLanes, g = a.suspendedLanes, h = a.pingedLanes;
  if (f !== 0)
    d = f, e = F = 15;
  else if (f = c & 134217727, f !== 0) {
    var k = f & ~g;
    k !== 0 ? (d = Rc(k), e = F) : (h &= f, h !== 0 && (d = Rc(h), e = F));
  } else
    f = c & ~g, f !== 0 ? (d = Rc(f), e = F) : h !== 0 && (d = Rc(h), e = F);
  if (d === 0)
    return 0;
  d = 31 - Vc(d);
  d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
  if (b !== 0 && b !== d && (b & g) === 0) {
    Rc(b);
    if (e <= F)
      return b;
    F = e;
  }
  b = a.entangledLanes;
  if (b !== 0)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function Wc(a) {
  a = a.pendingLanes & -1073741825;
  return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
}
function Xc(a, b) {
  switch (a) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a = Yc(24 & ~b), a === 0 ? Xc(10, b) : a;
    case 10:
      return a = Yc(192 & ~b), a === 0 ? Xc(8, b) : a;
    case 8:
      return a = Yc(3584 & ~b), a === 0 && (a = Yc(4186112 & ~b), a === 0 && (a = 512)), a;
    case 2:
      return b = Yc(805306368 & ~b), b === 0 && (b = 268435456), b;
  }
  throw Error(y(358, a));
}
function Yc(a) {
  return a & -a;
}
function Zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function $c(a, b, c) {
  a.pendingLanes |= b;
  var d = b - 1;
  a.suspendedLanes &= d;
  a.pingedLanes &= d;
  a = a.eventTimes;
  b = 31 - Vc(b);
  a[b] = c;
}
var Vc = Math.clz32 ? Math.clz32 : ad;
var bd = Math.log;
var cd = Math.LN2;
function ad(a) {
  return a === 0 ? 32 : 31 - (bd(a) / cd | 0) | 0;
}
var dd = scheduler.unstable_UserBlockingPriority;
var ed = scheduler.unstable_runWithPriority;
var fd = true;
function gd(a, b, c, d) {
  Kb || Ib();
  var e = hd, f = Kb;
  Kb = true;
  try {
    Hb(e, a, b, c, d);
  } finally {
    (Kb = f) || Mb();
  }
}
function id(a, b, c, d) {
  ed(dd, hd.bind(null, a, b, c, d));
}
function hd(a, b, c, d) {
  if (fd) {
    var e;
    if ((e = (b & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a))
      a = rc(null, a, b, c, d), jc.push(a);
    else {
      var f = yc(a, b, c, d);
      if (f === null)
        e && sc(a, d);
      else {
        if (e) {
          if (-1 < qc.indexOf(a)) {
            a = rc(f, a, b, c, d);
            jc.push(a);
            return;
          }
          if (uc(f, a, b, c, d))
            return;
          sc(a, d);
        }
        jd(a, b, d, null, c);
      }
    }
  }
}
function yc(a, b, c, d) {
  var e = xb(d);
  e = wc(e);
  if (e !== null) {
    var f = Zb(e);
    if (f === null)
      e = null;
    else {
      var g = f.tag;
      if (g === 13) {
        e = $b(f);
        if (e !== null)
          return e;
        e = null;
      } else if (g === 3) {
        if (f.stateNode.hydrate)
          return f.tag === 3 ? f.stateNode.containerInfo : null;
        e = null;
      } else
        f !== e && (e = null);
    }
  }
  jd(a, b, d, e, c);
  return null;
}
var kd = null;
var ld = null;
var md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f - d]; d++)
    ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, a === 0 && b === 13 && (a = 13)) : a = b;
  a === 10 && (a = 13);
  return 32 <= a || a === 13 ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f;
    this.target = g;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
    this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  objectAssign(b.prototype, {
    preventDefault: function() {
      this.defaultPrevented = true;
      var a2 = this.nativeEvent;
      a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = pd);
    },
    stopPropagation: function() {
      var a2 = this.nativeEvent;
      a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = pd);
    },
    persist: function() {
    },
    isPersistent: pd
  });
  return b;
}
var sd = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function(a) {
    return a.timeStamp || Date.now();
  },
  defaultPrevented: 0,
  isTrusted: 0
};
var td = rd(sd);
var ud = objectAssign({}, sd, {
  view: 0,
  detail: 0
});
var vd = rd(ud);
var wd;
var xd;
var yd;
var Ad = objectAssign({}, ud, {
  screenX: 0,
  screenY: 0,
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  getModifierState: zd,
  button: 0,
  buttons: 0,
  relatedTarget: function(a) {
    return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
  },
  movementX: function(a) {
    if ("movementX" in a)
      return a.movementX;
    a !== yd && (yd && a.type === "mousemove" ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
    return wd;
  },
  movementY: function(a) {
    return "movementY" in a ? a.movementY : xd;
  }
});
var Bd = rd(Ad);
var Cd = objectAssign({}, Ad, {
  dataTransfer: 0
});
var Dd = rd(Cd);
var Ed = objectAssign({}, ud, {
  relatedTarget: 0
});
var Fd = rd(Ed);
var Gd = objectAssign({}, sd, {
  animationName: 0,
  elapsedTime: 0,
  pseudoElement: 0
});
var Hd = rd(Gd);
var Id = objectAssign({}, sd, {
  clipboardData: function(a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  }
});
var Jd = rd(Id);
var Kd = objectAssign({}, sd, {
  data: 0
});
var Ld = rd(Kd);
var Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
};
var Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
};
var Od = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = objectAssign({}, ud, {
  key: function(a) {
    if (a.key) {
      var b = Md[a.key] || a.key;
      if (b !== "Unidentified")
        return b;
    }
    return a.type === "keypress" ? (a = od(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Nd[a.keyCode] || "Unidentified" : "";
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: zd,
  charCode: function(a) {
    return a.type === "keypress" ? od(a) : 0;
  },
  keyCode: function(a) {
    return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
  },
  which: function(a) {
    return a.type === "keypress" ? od(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
  }
});
var Rd = rd(Qd);
var Sd = objectAssign({}, Ad, {
  pointerId: 0,
  width: 0,
  height: 0,
  pressure: 0,
  tangentialPressure: 0,
  tiltX: 0,
  tiltY: 0,
  twist: 0,
  pointerType: 0,
  isPrimary: 0
});
var Td = rd(Sd);
var Ud = objectAssign({}, ud, {
  touches: 0,
  targetTouches: 0,
  changedTouches: 0,
  altKey: 0,
  metaKey: 0,
  ctrlKey: 0,
  shiftKey: 0,
  getModifierState: zd
});
var Vd = rd(Ud);
var Wd = objectAssign({}, sd, {
  propertyName: 0,
  elapsedTime: 0,
  pseudoElement: 0
});
var Xd = rd(Wd);
var Yd = objectAssign({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
});
var Zd = rd(Yd);
var $d = [9, 13, 27, 32];
var ae = fa && "CompositionEvent" in window;
var be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be;
var de = fa && (!ae || be && 8 < be && 11 >= be);
var ee = String.fromCharCode(32);
var fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return $d.indexOf(b.keyCode) !== -1;
    case "keydown":
      return b.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return typeof a === "object" && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (b.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return a === "compositionend" || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && b.locale !== "ko" ? null : b.data;
    default:
      return null;
  }
}
var le = {
  color: true,
  date: true,
  datetime: true,
  "datetime-local": true,
  email: true,
  month: true,
  number: true,
  password: true,
  range: true,
  search: true,
  tel: true,
  text: true,
  time: true,
  url: true,
  week: true
};
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b === "input" ? !!le[a.type] : b === "textarea" ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
    event: c,
    listeners: b
  }));
}
var pe = null;
var qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if (a === "change")
    return b;
}
var we = false;
if (fa) {
  if (fa) {
    ye = "oninput" in document;
    if (!ye) {
      ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = typeof ze.oninput === "function";
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
var xe;
var ye;
var ze;
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if (a.propertyName === "value" && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    a = re;
    if (Kb)
      a(b);
    else {
      Kb = true;
      try {
        Gb(a, b);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a, b, c) {
  a === "focusin" ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : a === "focusout" && Ae();
}
function De(a) {
  if (a === "selectionchange" || a === "keyup" || a === "keydown")
    return te(qe);
}
function Ee(a, b) {
  if (a === "click")
    return te(b);
}
function Fe(a, b) {
  if (a === "input" || a === "change")
    return te(b);
}
function Ge(a, b) {
  return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = typeof Object.is === "function" ? Object.is : Ge;
var Ie = Object.prototype.hasOwnProperty;
function Je(a, b) {
  if (He(a, b))
    return true;
  if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++)
    if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]]))
      return false;
  return true;
}
function Ke(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Le(a, b) {
  var c = Ke(a);
  a = 0;
  for (var d; c; ) {
    if (c.nodeType === 3) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return {
          node: c,
          offset: b - a
        };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Ke(c);
  }
}
function Me(a, b) {
  return a && b ? a === b ? true : a && a.nodeType === 3 ? false : b && b.nodeType === 3 ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Ne() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = typeof b.contentWindow.location.href === "string";
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Oe(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && (b === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b === "textarea" || a.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode;
var Qe = null;
var Re = null;
var Se = null;
var Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
  Te || Qe == null || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = {
    start: d.selectionStart,
    end: d.selectionEnd
  } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
    anchorNode: d.anchorNode,
    anchorOffset: d.anchorOffset,
    focusNode: d.focusNode,
    focusOffset: d.focusOffset
  }), Se && Je(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
    event: b,
    listeners: d
  }), b.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
var Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Yb(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = (b & 4) !== 0;
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f = void 0;
      if (b)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k = h.instance, l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped())
            break a;
          Ze(e, h, l);
          f = k;
        }
      else
        for (g = 0; g < d.length; g++) {
          h = d[g];
          k = h.instance;
          l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped())
            break a;
          Ze(e, h, l);
          f = k;
        }
    }
  }
  if (Ub)
    throw a = Vb, Ub = false, Vb = null, a;
}
function G(a, b) {
  var c = $e(b), d = a + "__bubble";
  c.has(d) || (af(b, a, 2, false), c.add(d));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a) {
  a[bf] || (a[bf] = true, ba.forEach(function(b) {
    Ye.has(b) || df(b, false, a, null);
    df(b, true, a, null);
  }));
}
function df(a, b, c, d) {
  var e = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f = c;
  a === "selectionchange" && c.nodeType !== 9 && (f = c.ownerDocument);
  if (d !== null && !b && Ye.has(a)) {
    if (a !== "scroll")
      return;
    e |= 2;
    f = d;
  }
  var g = $e(f), h = a + "__" + (b ? "capture" : "bubble");
  g.has(h) || (b && (e |= 4), af(f, a, e, b), g.add(h));
}
function af(a, b, c, d) {
  var e = Nc.get(b);
  switch (e === void 0 ? 2 : e) {
    case 0:
      e = gd;
      break;
    case 1:
      e = id;
      break;
    default:
      e = hd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Pb || b !== "touchstart" && b !== "touchmove" && b !== "wheel" || (e = true);
  d ? e !== void 0 ? a.addEventListener(b, c, {
    capture: true,
    passive: e
  }) : a.addEventListener(b, c, true) : e !== void 0 ? a.addEventListener(b, c, {
    passive: e
  }) : a.addEventListener(b, c, false);
}
function jd(a, b, c, d, e) {
  var f = d;
  if ((b & 1) === 0 && (b & 2) === 0 && d !== null)
    a:
      for (; ; ) {
        if (d === null)
          return;
        var g = d.tag;
        if (g === 3 || g === 4) {
          var h = d.stateNode.containerInfo;
          if (h === e || h.nodeType === 8 && h.parentNode === e)
            break;
          if (g === 4)
            for (g = d.return; g !== null; ) {
              var k = g.tag;
              if (k === 3 || k === 4) {
                if (k = g.stateNode.containerInfo, k === e || k.nodeType === 8 && k.parentNode === e)
                  return;
              }
              g = g.return;
            }
          for (; h !== null; ) {
            g = wc(h);
            if (g === null)
              return;
            k = g.tag;
            if (k === 5 || k === 6) {
              d = f = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
  Nb(function() {
    var d2 = f, e2 = xb(c), g2 = [];
    a: {
      var h2 = Mc.get(a);
      if (h2 !== void 0) {
        var k2 = td, x = a;
        switch (a) {
          case "keypress":
            if (od(c) === 0)
              break a;
          case "keydown":
          case "keyup":
            k2 = Rd;
            break;
          case "focusin":
            x = "focus";
            k2 = Fd;
            break;
          case "focusout":
            x = "blur";
            k2 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k2 = Fd;
            break;
          case "click":
            if (c.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k2 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k2 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k2 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k2 = Hd;
            break;
          case Lc:
            k2 = Xd;
            break;
          case "scroll":
            k2 = vd;
            break;
          case "wheel":
            k2 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k2 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k2 = Td;
        }
        var w = (b & 4) !== 0, z = !w && a === "scroll", u = w ? h2 !== null ? h2 + "Capture" : null : h2;
        w = [];
        for (var t = d2, q; t !== null; ) {
          q = t;
          var v = q.stateNode;
          q.tag === 5 && v !== null && (q = v, u !== null && (v = Ob(t, u), v != null && w.push(ef(t, v, q))));
          if (z)
            break;
          t = t.return;
        }
        0 < w.length && (h2 = new k2(h2, x, null, c, e2), g2.push({
          event: h2,
          listeners: w
        }));
      }
    }
    if ((b & 7) === 0) {
      a: {
        h2 = a === "mouseover" || a === "pointerover";
        k2 = a === "mouseout" || a === "pointerout";
        if (h2 && (b & 16) === 0 && (x = c.relatedTarget || c.fromElement) && (wc(x) || x[ff]))
          break a;
        if (k2 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k2) {
            if (x = c.relatedTarget || c.toElement, k2 = d2, x = x ? wc(x) : null, x !== null && (z = Zb(x), x !== z || x.tag !== 5 && x.tag !== 6))
              x = null;
          } else
            k2 = null, x = d2;
          if (k2 !== x) {
            w = Bd;
            v = "onMouseLeave";
            u = "onMouseEnter";
            t = "mouse";
            if (a === "pointerout" || a === "pointerover")
              w = Td, v = "onPointerLeave", u = "onPointerEnter", t = "pointer";
            z = k2 == null ? h2 : ue(k2);
            q = x == null ? h2 : ue(x);
            h2 = new w(v, t + "leave", k2, c, e2);
            h2.target = z;
            h2.relatedTarget = q;
            v = null;
            wc(e2) === d2 && (w = new w(u, t + "enter", x, c, e2), w.target = q, w.relatedTarget = z, v = w);
            z = v;
            if (k2 && x)
              b: {
                w = k2;
                u = x;
                t = 0;
                for (q = w; q; q = gf(q))
                  t++;
                q = 0;
                for (v = u; v; v = gf(v))
                  q++;
                for (; 0 < t - q; )
                  w = gf(w), t--;
                for (; 0 < q - t; )
                  u = gf(u), q--;
                for (; t--; ) {
                  if (w === u || u !== null && w === u.alternate)
                    break b;
                  w = gf(w);
                  u = gf(u);
                }
                w = null;
              }
            else
              w = null;
            k2 !== null && hf(g2, h2, k2, w, false);
            x !== null && z !== null && hf(g2, z, x, w, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k2 = h2.nodeName && h2.nodeName.toLowerCase();
        if (k2 === "select" || k2 === "input" && h2.type === "file")
          var J = ve;
        else if (me(h2)) {
          if (we)
            J = Fe;
          else {
            J = De;
            var K = Ce;
          }
        } else
          (k2 = h2.nodeName) && k2.toLowerCase() === "input" && (h2.type === "checkbox" || h2.type === "radio") && (J = Ee);
        if (J && (J = J(a, d2))) {
          ne(g2, J, c, e2);
          break a;
        }
        K && K(a, h2, d2);
        a === "focusout" && (K = h2._wrapperState) && K.controlled && h2.type === "number" && bb(h2, "number", h2.value);
      }
      K = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(K) || K.contentEditable === "true")
            Qe = K, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var Q;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var L = "onCompositionStart";
              break b;
            case "compositionend":
              L = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break b;
          }
          L = void 0;
        }
      else
        ie ? ge(a, c) && (L = "onCompositionEnd") : a === "keydown" && c.keyCode === 229 && (L = "onCompositionStart");
      L && (de && c.locale !== "ko" && (ie || L !== "onCompositionStart" ? L === "onCompositionEnd" && ie && (Q = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K = oe(d2, L), 0 < K.length && (L = new Ld(L, a, null, c, e2), g2.push({
        event: L,
        listeners: K
      }), Q ? L.data = Q : (Q = he(c), Q !== null && (L.data = Q))));
      if (Q = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({
          event: e2,
          listeners: d2
        }), e2.data = Q);
    }
    se(g2, b);
  });
}
function ef(a, b, c) {
  return {
    instance: a,
    listener: b,
    currentTarget: c
  };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; a !== null; ) {
    var e = a, f = e.stateNode;
    e.tag === 5 && f !== null && (e = f, f = Ob(a, c), f != null && d.unshift(ef(a, f, e)), f = Ob(a, b), f != null && d.push(ef(a, f, e)));
    a = a.return;
  }
  return d;
}
function gf(a) {
  if (a === null)
    return null;
  do
    a = a.return;
  while (a && a.tag !== 5);
  return a ? a : null;
}
function hf(a, b, c, d, e) {
  for (var f = b._reactName, g = []; c !== null && c !== d; ) {
    var h = c, k = h.alternate, l = h.stateNode;
    if (k !== null && k === d)
      break;
    h.tag === 5 && l !== null && (h = l, e ? (k = Ob(c, f), k != null && g.unshift(ef(c, k, h))) : e || (k = Ob(c, f), k != null && g.push(ef(c, k, h))));
    c = c.return;
  }
  g.length !== 0 && a.push({
    event: b,
    listeners: g
  });
}
function jf() {
}
var kf = null;
var lf = null;
function mf(a, b) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b.autoFocus;
  }
  return false;
}
function nf(a, b) {
  return a === "textarea" || a === "option" || a === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0;
var pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a) {
  a.nodeType === 1 ? a.textContent = "" : a.nodeType === 9 && (a = a.body, a != null && (a.textContent = ""));
}
function rf(a) {
  for (; a != null; a = a.nextSibling) {
    var b = a.nodeType;
    if (b === 1 || b === 3)
      break;
  }
  return a;
}
function sf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (a.nodeType === 8) {
      var c = a.data;
      if (c === "$" || c === "$!" || c === "$?") {
        if (b === 0)
          return a;
        b--;
      } else
        c === "/$" && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a) {
  return {
    $$typeof: Ga,
    toString: a,
    valueOf: a
  };
}
var vf = Math.random().toString(36).slice(2);
var wf = "__reactFiber$" + vf;
var xf = "__reactProps$" + vf;
var ff = "__reactContainer$" + vf;
var yf = "__reactEvents$" + vf;
function wc(a) {
  var b = a[wf];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[ff] || c[wf]) {
      c = b.alternate;
      if (b.child !== null || c !== null && c.child !== null)
        for (a = sf(a); a !== null; ) {
          if (c = a[wf])
            return c;
          a = sf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[wf] || a[ff];
  return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
}
function ue(a) {
  if (a.tag === 5 || a.tag === 6)
    return a.stateNode;
  throw Error(y(33));
}
function Db(a) {
  return a[xf] || null;
}
function $e(a) {
  var b = a[yf];
  b === void 0 && (b = a[yf] = new Set());
  return b;
}
var zf = [];
var Af = -1;
function Bf(a) {
  return {
    current: a
  };
}
function H(a) {
  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
}
function I(a, b) {
  Af++;
  zf[Af] = a.current;
  a.current = b;
}
var Cf = {};
var M = Bf(Cf);
var N = Bf(false);
var Df = Cf;
function Ef(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Cf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f;
  for (f in c)
    e[f] = b[f];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Ff(a) {
  a = a.childContextTypes;
  return a !== null && a !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a, b, c) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b);
  I(N, c);
}
function If(a, b, c) {
  var d = a.stateNode;
  a = b.childContextTypes;
  if (typeof d.getChildContext !== "function")
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in a))
      throw Error(y(108, Ra(b) || "Unknown", e));
  return objectAssign({}, c, d);
}
function Jf(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a);
  I(N, N.current);
  return true;
}
function Kf(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(y(169));
  c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
  I(N, c);
}
var Lf = null;
var Mf = null;
var Nf = scheduler.unstable_runWithPriority;
var Of = scheduler.unstable_scheduleCallback;
var Pf = scheduler.unstable_cancelCallback;
var Qf = scheduler.unstable_shouldYield;
var Rf = scheduler.unstable_requestPaint;
var Sf = scheduler.unstable_now;
var Tf = scheduler.unstable_getCurrentPriorityLevel;
var Uf = scheduler.unstable_ImmediatePriority;
var Vf = scheduler.unstable_UserBlockingPriority;
var Wf = scheduler.unstable_NormalPriority;
var Xf = scheduler.unstable_LowPriority;
var Yf = scheduler.unstable_IdlePriority;
var Zf = {};
var $f = Rf !== void 0 ? Rf : function() {
};
var ag = null;
var bg = null;
var cg = false;
var dg = Sf();
var O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y(332));
  }
}
function fg(a) {
  switch (a) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y(332));
  }
}
function gg(a, b) {
  a = fg(a);
  return Nf(a, b);
}
function hg(a, b, c) {
  a = fg(a);
  return Of(a, b, c);
}
function ig() {
  if (bg !== null) {
    var a = bg;
    bg = null;
    Pf(a);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a = 0;
    try {
      var b = ag;
      gg(99, function() {
        for (; a < b.length; a++) {
          var c = b[a];
          do
            c = c(true);
          while (c !== null);
        }
      });
      ag = null;
    } catch (c) {
      throw ag !== null && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a, b) {
  if (a && a.defaultProps) {
    b = objectAssign({}, b);
    a = a.defaultProps;
    for (var c in a)
      b[c] === void 0 && (b[c] = a[c]);
    return b;
  }
  return b;
}
var mg = Bf(null);
var ng = null;
var og = null;
var pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a) {
  var b = mg.current;
  H(mg);
  a.type._context._currentValue = b;
}
function sg(a, b) {
  for (; a !== null; ) {
    var c = a.alternate;
    if ((a.childLanes & b) === b) {
      if (c === null || (c.childLanes & b) === b)
        break;
      else
        c.childLanes |= b;
    } else
      a.childLanes |= b, c !== null && (c.childLanes |= b);
    a = a.return;
  }
}
function tg(a, b) {
  ng = a;
  pg = og = null;
  a = a.dependencies;
  a !== null && a.firstContext !== null && ((a.lanes & b) !== 0 && (ug = true), a.firstContext = null);
}
function vg(a, b) {
  if (pg !== a && b !== false && b !== 0) {
    if (typeof b !== "number" || b === 1073741823)
      pg = a, b = 1073741823;
    b = {
      context: a,
      observedBits: b,
      next: null
    };
    if (og === null) {
      if (ng === null)
        throw Error(y(308));
      og = b;
      ng.dependencies = {
        lanes: 0,
        firstContext: b,
        responders: null
      };
    } else
      og = og.next = b;
  }
  return a._currentValue;
}
var wg = false;
function xg(a) {
  a.updateQueue = {
    baseState: a.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null
    },
    effects: null
  };
}
function yg(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = {
    baseState: a.baseState,
    firstBaseUpdate: a.firstBaseUpdate,
    lastBaseUpdate: a.lastBaseUpdate,
    shared: a.shared,
    effects: a.effects
  });
}
function zg(a, b) {
  return {
    eventTime: a,
    lane: b,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  };
}
function Ag(a, b) {
  a = a.updateQueue;
  if (a !== null) {
    a = a.shared;
    var c = a.pending;
    c === null ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
}
function Bg(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (d !== null && (d = d.updateQueue, c === d)) {
    var e = null, f = null;
    c = c.firstBaseUpdate;
    if (c !== null) {
      do {
        var g = {
          eventTime: c.eventTime,
          lane: c.lane,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        };
        f === null ? e = f = g : f = f.next = g;
        c = c.next;
      } while (c !== null);
      f === null ? e = f = b : f = f.next = b;
    } else
      e = f = b;
    c = {
      baseState: d.baseState,
      firstBaseUpdate: e,
      lastBaseUpdate: f,
      shared: d.shared,
      effects: d.effects
    };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  a === null ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function Cg(a, b, c, d) {
  var e = a.updateQueue;
  wg = false;
  var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (h !== null) {
    e.shared.pending = null;
    var k = h, l = k.next;
    k.next = null;
    g === null ? f = l : g.next = l;
    g = k;
    var n = a.alternate;
    if (n !== null) {
      n = n.updateQueue;
      var A = n.lastBaseUpdate;
      A !== g && (A === null ? n.firstBaseUpdate = l : A.next = l, n.lastBaseUpdate = k);
    }
  }
  if (f !== null) {
    A = e.baseState;
    g = 0;
    n = l = k = null;
    do {
      h = f.lane;
      var p = f.eventTime;
      if ((d & h) === h) {
        n !== null && (n = n.next = {
          eventTime: p,
          lane: 0,
          tag: f.tag,
          payload: f.payload,
          callback: f.callback,
          next: null
        });
        a: {
          var C = a, x = f;
          h = b;
          p = c;
          switch (x.tag) {
            case 1:
              C = x.payload;
              if (typeof C === "function") {
                A = C.call(p, A, h);
                break a;
              }
              A = C;
              break a;
            case 3:
              C.flags = C.flags & -4097 | 64;
            case 0:
              C = x.payload;
              h = typeof C === "function" ? C.call(p, A, h) : C;
              if (h === null || h === void 0)
                break a;
              A = objectAssign({}, A, h);
              break a;
            case 2:
              wg = true;
          }
        }
        f.callback !== null && (a.flags |= 32, h = e.effects, h === null ? e.effects = [f] : h.push(f));
      } else
        p = {
          eventTime: p,
          lane: h,
          tag: f.tag,
          payload: f.payload,
          callback: f.callback,
          next: null
        }, n === null ? (l = n = p, k = A) : n = n.next = p, g |= h;
      f = f.next;
      if (f === null)
        if (h = e.shared.pending, h === null)
          break;
        else
          f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
    } while (1);
    n === null && (k = A);
    e.baseState = k;
    e.firstBaseUpdate = l;
    e.lastBaseUpdate = n;
    Dg |= g;
    a.lanes = g;
    a.memoizedState = A;
  }
}
function Eg(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (a !== null)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (e !== null) {
        d.callback = null;
        d = c;
        if (typeof e !== "function")
          throw Error(y(191, e));
        e.call(d);
      }
    }
}
var Fg = new react.Component().refs;
function Gg(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = c === null || c === void 0 ? b : objectAssign({}, b, c);
  a.memoizedState = c;
  a.lanes === 0 && (a.updateQueue.baseState = c);
}
var Kg = {
  isMounted: function(a) {
    return (a = a._reactInternals) ? Zb(a) === a : false;
  },
  enqueueSetState: function(a, b, c) {
    a = a._reactInternals;
    var d = Hg(), e = Ig(a), f = zg(d, e);
    f.payload = b;
    c !== void 0 && c !== null && (f.callback = c);
    Ag(a, f);
    Jg(a, e, d);
  },
  enqueueReplaceState: function(a, b, c) {
    a = a._reactInternals;
    var d = Hg(), e = Ig(a), f = zg(d, e);
    f.tag = 1;
    f.payload = b;
    c !== void 0 && c !== null && (f.callback = c);
    Ag(a, f);
    Jg(a, e, d);
  },
  enqueueForceUpdate: function(a, b) {
    a = a._reactInternals;
    var c = Hg(), d = Ig(a), e = zg(c, d);
    e.tag = 2;
    b !== void 0 && b !== null && (e.callback = b);
    Ag(a, e);
    Jg(a, d, c);
  }
};
function Lg(a, b, c, d, e, f, g) {
  a = a.stateNode;
  return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f) : true;
}
function Mg(a, b, c) {
  var d = false, e = Cf;
  var f = b.contextType;
  typeof f === "object" && f !== null ? f = vg(f) : (e = Ff(b) ? Df : M.current, d = b.contextTypes, f = (d = d !== null && d !== void 0) ? Ef(a, e) : Cf);
  b = new b(c, f);
  a.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
  b.updater = Kg;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}
function Ng(a, b, c, d) {
  a = b.state;
  typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
  typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
}
function Og(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = Fg;
  xg(a);
  var f = b.contextType;
  typeof f === "object" && f !== null ? e.context = vg(f) : (f = Ff(b) ? Df : M.current, e.context = Ef(a, f));
  Cg(a, c, e, d);
  e.state = a.memoizedState;
  f = b.getDerivedStateFromProps;
  typeof f === "function" && (Gg(a, b, f, c), e.state = a.memoizedState);
  typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
  typeof e.componentDidMount === "function" && (a.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a, b, c) {
  a = c.ref;
  if (a !== null && typeof a !== "function" && typeof a !== "object") {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (c.tag !== 1)
          throw Error(y(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(y(147, a));
      var e = "" + a;
      if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === e)
        return b.ref;
      b = function(a2) {
        var b2 = d.refs;
        b2 === Fg && (b2 = d.refs = {});
        a2 === null ? delete b2[e] : b2[e] = a2;
      };
      b._stringRef = e;
      return b;
    }
    if (typeof a !== "string")
      throw Error(y(284));
    if (!c._owner)
      throw Error(y(290, a));
  }
  return a;
}
function Rg(a, b) {
  if (a.type !== "textarea")
    throw Error(y(31, Object.prototype.toString.call(b) === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
}
function Sg(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.lastEffect;
      d2 !== null ? (d2.nextEffect = c2, b2.lastEffect = c2) : b2.firstEffect = b2.lastEffect = c2;
      c2.nextEffect = null;
      c2.flags = 8;
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; d2 !== null; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = new Map(); b2 !== null; )
      b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = Tg(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return c2;
    d2 = b2.alternate;
    if (d2 !== null)
      return d2 = d2.index, d2 < c2 ? (b2.flags = 2, c2) : d2;
    b2.flags = 2;
    return c2;
  }
  function g(b2) {
    a && b2.alternate === null && (b2.flags = 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 6)
      return b2 = Ug(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k(a2, b2, c2, d2) {
    if (b2 !== null && b2.elementType === c2.type)
      return d2 = e(b2, c2.props), d2.ref = Qg(a2, b2, c2), d2.return = a2, d2;
    d2 = Vg(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = Qg(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = Wg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function n(a2, b2, c2, d2, f2) {
    if (b2 === null || b2.tag !== 7)
      return b2 = Xg(c2, a2.mode, d2, f2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function A(a2, b2, c2) {
    if (typeof b2 === "string" || typeof b2 === "number")
      return b2 = Ug("" + b2, a2.mode, c2), b2.return = a2, b2;
    if (typeof b2 === "object" && b2 !== null) {
      switch (b2.$$typeof) {
        case sa:
          return c2 = Vg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Qg(a2, null, b2), c2.return = a2, c2;
        case ta:
          return b2 = Wg(b2, a2.mode, c2), b2.return = a2, b2;
      }
      if (Pg(b2) || La(b2))
        return b2 = Xg(b2, a2.mode, c2, null), b2.return = a2, b2;
      Rg(a2, b2);
    }
    return null;
  }
  function p(a2, b2, c2, d2) {
    var e2 = b2 !== null ? b2.key : null;
    if (typeof c2 === "string" || typeof c2 === "number")
      return e2 !== null ? null : h(a2, b2, "" + c2, d2);
    if (typeof c2 === "object" && c2 !== null) {
      switch (c2.$$typeof) {
        case sa:
          return c2.key === e2 ? c2.type === ua ? n(a2, b2, c2.props.children, d2, e2) : k(a2, b2, c2, d2) : null;
        case ta:
          return c2.key === e2 ? l(a2, b2, c2, d2) : null;
      }
      if (Pg(c2) || La(c2))
        return e2 !== null ? null : n(a2, b2, c2, d2, null);
      Rg(a2, c2);
    }
    return null;
  }
  function C(a2, b2, c2, d2, e2) {
    if (typeof d2 === "string" || typeof d2 === "number")
      return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if (typeof d2 === "object" && d2 !== null) {
      switch (d2.$$typeof) {
        case sa:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, d2.type === ua ? n(b2, a2, d2.props.children, e2, d2.key) : k(b2, a2, d2, e2);
        case ta:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, l(b2, a2, d2, e2);
      }
      if (Pg(d2) || La(d2))
        return a2 = a2.get(c2) || null, n(b2, a2, d2, e2, null);
      Rg(b2, d2);
    }
    return null;
  }
  function x(e2, g2, h2, k2) {
    for (var l2 = null, t = null, u = g2, z = g2 = 0, q = null; u !== null && z < h2.length; z++) {
      u.index > z ? (q = u, u = null) : q = u.sibling;
      var n2 = p(e2, u, h2[z], k2);
      if (n2 === null) {
        u === null && (u = q);
        break;
      }
      a && u && n2.alternate === null && b(e2, u);
      g2 = f(n2, g2, z);
      t === null ? l2 = n2 : t.sibling = n2;
      t = n2;
      u = q;
    }
    if (z === h2.length)
      return c(e2, u), l2;
    if (u === null) {
      for (; z < h2.length; z++)
        u = A(e2, h2[z], k2), u !== null && (g2 = f(u, g2, z), t === null ? l2 = u : t.sibling = u, t = u);
      return l2;
    }
    for (u = d(e2, u); z < h2.length; z++)
      q = C(u, e2, z, h2[z], k2), q !== null && (a && q.alternate !== null && u.delete(q.key === null ? z : q.key), g2 = f(q, g2, z), t === null ? l2 = q : t.sibling = q, t = q);
    a && u.forEach(function(a2) {
      return b(e2, a2);
    });
    return l2;
  }
  function w(e2, g2, h2, k2) {
    var l2 = La(h2);
    if (typeof l2 !== "function")
      throw Error(y(150));
    h2 = l2.call(h2);
    if (h2 == null)
      throw Error(y(151));
    for (var t = l2 = null, u = g2, z = g2 = 0, q = null, n2 = h2.next(); u !== null && !n2.done; z++, n2 = h2.next()) {
      u.index > z ? (q = u, u = null) : q = u.sibling;
      var w2 = p(e2, u, n2.value, k2);
      if (w2 === null) {
        u === null && (u = q);
        break;
      }
      a && u && w2.alternate === null && b(e2, u);
      g2 = f(w2, g2, z);
      t === null ? l2 = w2 : t.sibling = w2;
      t = w2;
      u = q;
    }
    if (n2.done)
      return c(e2, u), l2;
    if (u === null) {
      for (; !n2.done; z++, n2 = h2.next())
        n2 = A(e2, n2.value, k2), n2 !== null && (g2 = f(n2, g2, z), t === null ? l2 = n2 : t.sibling = n2, t = n2);
      return l2;
    }
    for (u = d(e2, u); !n2.done; z++, n2 = h2.next())
      n2 = C(u, e2, z, n2.value, k2), n2 !== null && (a && n2.alternate !== null && u.delete(n2.key === null ? z : n2.key), g2 = f(n2, g2, z), t === null ? l2 = n2 : t.sibling = n2, t = n2);
    a && u.forEach(function(a2) {
      return b(e2, a2);
    });
    return l2;
  }
  return function(a2, d2, f2, h2) {
    var k2 = typeof f2 === "object" && f2 !== null && f2.type === ua && f2.key === null;
    k2 && (f2 = f2.props.children);
    var l2 = typeof f2 === "object" && f2 !== null;
    if (l2)
      switch (f2.$$typeof) {
        case sa:
          a: {
            l2 = f2.key;
            for (k2 = d2; k2 !== null; ) {
              if (k2.key === l2) {
                switch (k2.tag) {
                  case 7:
                    if (f2.type === ua) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f2.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    break;
                  default:
                    if (k2.elementType === f2.type) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f2.props);
                      d2.ref = Qg(a2, k2, f2);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                }
                c(a2, k2);
                break;
              } else
                b(a2, k2);
              k2 = k2.sibling;
            }
            f2.type === ua ? (d2 = Xg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Vg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Qg(a2, d2, f2), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case ta:
          a: {
            for (k2 = f2.key; d2 !== null; ) {
              if (d2.key === k2) {
                if (d2.tag === 4 && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f2.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              } else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = Wg(f2, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
      }
    if (typeof f2 === "string" || typeof f2 === "number")
      return f2 = "" + f2, d2 !== null && d2.tag === 6 ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Ug(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2);
    if (Pg(f2))
      return x(a2, d2, f2, h2);
    if (La(f2))
      return w(a2, d2, f2, h2);
    l2 && Rg(a2, f2);
    if (typeof f2 === "undefined" && !k2)
      switch (a2.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a2.type) || "Component"));
      }
    return c(a2, d2);
  };
}
var Yg = Sg(true);
var Zg = Sg(false);
var $g = {};
var ah = Bf($g);
var bh = Bf($g);
var ch = Bf($g);
function dh(a) {
  if (a === $g)
    throw Error(y(174));
  return a;
}
function eh(a, b) {
  I(ch, b);
  I(bh, a);
  I(ah, $g);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
      break;
    default:
      a = a === 8 ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
  }
  H(ah);
  I(ah, b);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a) {
  dh(ch.current);
  var b = dh(ah.current);
  var c = mb(b, a.type);
  b !== c && (I(bh, a), I(ah, c));
}
function hh(a) {
  bh.current === a && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a) {
  for (var b = a; b !== null; ) {
    if (b.tag === 13) {
      var c = b.memoizedState;
      if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
        return b;
    } else if (b.tag === 19 && b.memoizedProps.revealOrder !== void 0) {
      if ((b.flags & 64) !== 0)
        return b;
    } else if (b.child !== null) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; b.sibling === null; ) {
      if (b.return === null || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var jh = null;
var kh = null;
var lh = false;
function mh(a, b) {
  var c = nh(5, null, null, 0);
  c.elementType = "DELETED";
  c.type = "DELETED";
  c.stateNode = b;
  c.return = a;
  c.flags = 8;
  a.lastEffect !== null ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}
function oh(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = b.nodeType !== 1 || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return b !== null ? (a.stateNode = b, true) : false;
    case 6:
      return b = a.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a.stateNode = b, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a) {
  if (lh) {
    var b = kh;
    if (b) {
      var c = b;
      if (!oh(a, b)) {
        b = rf(c.nextSibling);
        if (!b || !oh(a, b)) {
          a.flags = a.flags & -1025 | 2;
          lh = false;
          jh = a;
          return;
        }
        mh(jh, c);
      }
      jh = a;
      kh = rf(b.firstChild);
    } else
      a.flags = a.flags & -1025 | 2, lh = false, jh = a;
  }
}
function qh(a) {
  for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
    a = a.return;
  jh = a;
}
function rh(a) {
  if (a !== jh)
    return false;
  if (!lh)
    return qh(a), lh = true, false;
  var b = a.type;
  if (a.tag !== 5 || b !== "head" && b !== "body" && !nf(b, a.memoizedProps))
    for (b = kh; b; )
      mh(a, b), b = rf(b.nextSibling);
  qh(a);
  if (a.tag === 13) {
    a = a.memoizedState;
    a = a !== null ? a.dehydrated : null;
    if (!a)
      throw Error(y(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (a.nodeType === 8) {
          var c = a.data;
          if (c === "/$") {
            if (b === 0) {
              kh = rf(a.nextSibling);
              break a;
            }
            b--;
          } else
            c !== "$" && c !== "$!" && c !== "$?" || b++;
        }
        a = a.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a = 0; a < th.length; a++)
    th[a]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher;
var wh = ra.ReactCurrentBatchConfig;
var xh = 0;
var R = null;
var S = null;
var T = null;
var yh = false;
var zh = false;
function Ah() {
  throw Error(y(321));
}
function Bh(a, b) {
  if (b === null)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Ch(a, b, c, d, e, f) {
  xh = f;
  R = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  vh.current = a === null || a.memoizedState === null ? Dh : Eh;
  a = c(d, e);
  if (zh) {
    f = 0;
    do {
      zh = false;
      if (!(25 > f))
        throw Error(y(301));
      f += 1;
      T = S = null;
      b.updateQueue = null;
      vh.current = Fh;
      a = c(d, e);
    } while (zh);
  }
  vh.current = Gh;
  b = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b)
    throw Error(y(300));
  return a;
}
function Hh() {
  var a = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  T === null ? R.memoizedState = T = a : T = T.next = a;
  return T;
}
function Ih() {
  if (S === null) {
    var a = R.alternate;
    a = a !== null ? a.memoizedState : null;
  } else
    a = S.next;
  var b = T === null ? R.memoizedState : T.next;
  if (b !== null)
    T = b, S = a;
  else {
    if (a === null)
      throw Error(y(310));
    S = a;
    a = {
      memoizedState: S.memoizedState,
      baseState: S.baseState,
      baseQueue: S.baseQueue,
      queue: S.queue,
      next: null
    };
    T === null ? R.memoizedState = T = a : T = T.next = a;
  }
  return T;
}
function Jh(a, b) {
  return typeof b === "function" ? b(a) : b;
}
function Kh(a) {
  var b = Ih(), c = b.queue;
  if (c === null)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = S, e = d.baseQueue, f = c.pending;
  if (f !== null) {
    if (e !== null) {
      var g = e.next;
      e.next = f.next;
      f.next = g;
    }
    d.baseQueue = e = f;
    c.pending = null;
  }
  if (e !== null) {
    e = e.next;
    d = d.baseState;
    var h = g = f = null, k = e;
    do {
      var l = k.lane;
      if ((xh & l) === l)
        h !== null && (h = h.next = {
          lane: 0,
          action: k.action,
          eagerReducer: k.eagerReducer,
          eagerState: k.eagerState,
          next: null
        }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
      else {
        var n = {
          lane: l,
          action: k.action,
          eagerReducer: k.eagerReducer,
          eagerState: k.eagerState,
          next: null
        };
        h === null ? (g = h = n, f = d) : h = h.next = n;
        R.lanes |= l;
        Dg |= l;
      }
      k = k.next;
    } while (k !== null && k !== e);
    h === null ? f = d : h.next = g;
    He(d, b.memoizedState) || (ug = true);
    b.memoizedState = d;
    b.baseState = f;
    b.baseQueue = h;
    c.lastRenderedState = d;
  }
  return [b.memoizedState, c.dispatch];
}
function Lh(a) {
  var b = Ih(), c = b.queue;
  if (c === null)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f = b.memoizedState;
  if (e !== null) {
    c.pending = null;
    var g = e = e.next;
    do
      f = a(f, g.action), g = g.next;
    while (g !== e);
    He(f, b.memoizedState) || (ug = true);
    b.memoizedState = f;
    b.baseQueue === null && (b.baseState = f);
    c.lastRenderedState = f;
  }
  return [f, d];
}
function Mh(a, b, c) {
  var d = b._getVersion;
  d = d(b._source);
  var e = b._workInProgressVersionPrimary;
  if (e !== null)
    a = e === d;
  else if (a = a.mutableReadLanes, a = (xh & a) === a)
    b._workInProgressVersionPrimary = d, th.push(b);
  if (a)
    return c(b._source);
  th.push(b);
  throw Error(y(350));
}
function Nh(a, b, c, d) {
  var e = U;
  if (e === null)
    throw Error(y(349));
  var f = b._getVersion, g = f(b._source), h = vh.current, k = h.useState(function() {
    return Mh(e, b, c);
  }), l = k[1], n = k[0];
  k = T;
  var A = a.memoizedState, p = A.refs, C = p.getSnapshot, x = A.source;
  A = A.subscribe;
  var w = R;
  a.memoizedState = {
    refs: p,
    source: b,
    subscribe: d
  };
  h.useEffect(function() {
    p.getSnapshot = c;
    p.setSnapshot = l;
    var a2 = f(b._source);
    if (!He(g, a2)) {
      a2 = c(b._source);
      He(n, a2) || (l(a2), a2 = Ig(w), e.mutableReadLanes |= a2 & e.pendingLanes);
      a2 = e.mutableReadLanes;
      e.entangledLanes |= a2;
      for (var d2 = e.entanglements, h2 = a2; 0 < h2; ) {
        var k2 = 31 - Vc(h2), v = 1 << k2;
        d2[k2] |= a2;
        h2 &= ~v;
      }
    }
  }, [c, b, d]);
  h.useEffect(function() {
    return d(b._source, function() {
      var a2 = p.getSnapshot, c2 = p.setSnapshot;
      try {
        c2(a2(b._source));
        var d2 = Ig(w);
        e.mutableReadLanes |= d2 & e.pendingLanes;
      } catch (q) {
        c2(function() {
          throw q;
        });
      }
    });
  }, [b, d]);
  He(C, c) && He(x, b) && He(A, d) || (a = {
    pending: null,
    dispatch: null,
    lastRenderedReducer: Jh,
    lastRenderedState: n
  }, a.dispatch = l = Oh.bind(null, R, a), k.queue = a, k.baseQueue = null, n = Mh(e, b, c), k.memoizedState = k.baseState = n);
  return n;
}
function Ph(a, b, c) {
  var d = Ih();
  return Nh(d, a, b, c);
}
function Qh(a) {
  var b = Hh();
  typeof a === "function" && (a = a());
  b.memoizedState = b.baseState = a;
  a = b.queue = {
    pending: null,
    dispatch: null,
    lastRenderedReducer: Jh,
    lastRenderedState: a
  };
  a = a.dispatch = Oh.bind(null, R, a);
  return [b.memoizedState, a];
}
function Rh(a, b, c, d) {
  a = {
    tag: a,
    create: b,
    destroy: c,
    deps: d,
    next: null
  };
  b = R.updateQueue;
  b === null ? (b = {
    lastEffect: null
  }, R.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, c === null ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function Sh(a) {
  var b = Hh();
  a = {
    current: a
  };
  return b.memoizedState = a;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a, b, c, d) {
  var e = Hh();
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, void 0, d === void 0 ? null : d);
}
function Vh(a, b, c, d) {
  var e = Ih();
  d = d === void 0 ? null : d;
  var f = void 0;
  if (S !== null) {
    var g = S.memoizedState;
    f = g.destroy;
    if (d !== null && Bh(d, g.deps)) {
      Rh(b, c, f, d);
      return;
    }
  }
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, f, d);
}
function Wh(a, b) {
  return Uh(516, 4, a, b);
}
function Xh(a, b) {
  return Vh(516, 4, a, b);
}
function Yh(a, b) {
  return Vh(4, 2, a, b);
}
function Zh(a, b) {
  if (typeof b === "function")
    return a = a(), b(a), function() {
      b(null);
    };
  if (b !== null && b !== void 0)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function $h(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return Vh(4, 2, Zh.bind(null, b, a), c);
}
function ai() {
}
function bi(a, b) {
  var c = Ih();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Bh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function ci(a, b) {
  var c = Ih();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Bh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function di(a, b) {
  var c = eg();
  gg(98 > c ? 98 : c, function() {
    a(true);
  });
  gg(97 < c ? 97 : c, function() {
    var c2 = wh.transition;
    wh.transition = 1;
    try {
      a(false), b();
    } finally {
      wh.transition = c2;
    }
  });
}
function Oh(a, b, c) {
  var d = Hg(), e = Ig(a), f = {
    lane: e,
    action: c,
    eagerReducer: null,
    eagerState: null,
    next: null
  }, g = b.pending;
  g === null ? f.next = f : (f.next = g.next, g.next = f);
  b.pending = f;
  g = a.alternate;
  if (a === R || g !== null && g === R)
    zh = yh = true;
  else {
    if (a.lanes === 0 && (g === null || g.lanes === 0) && (g = b.lastRenderedReducer, g !== null))
      try {
        var h = b.lastRenderedState, k = g(h, c);
        f.eagerReducer = g;
        f.eagerState = k;
        if (He(k, h))
          return;
      } catch (l) {
      } finally {
      }
    Jg(a, e, d);
  }
}
var Gh = {
  readContext: vg,
  useCallback: Ah,
  useContext: Ah,
  useEffect: Ah,
  useImperativeHandle: Ah,
  useLayoutEffect: Ah,
  useMemo: Ah,
  useReducer: Ah,
  useRef: Ah,
  useState: Ah,
  useDebugValue: Ah,
  useDeferredValue: Ah,
  useTransition: Ah,
  useMutableSource: Ah,
  useOpaqueIdentifier: Ah,
  unstable_isNewReconciler: false
};
var Dh = {
  readContext: vg,
  useCallback: function(a, b) {
    Hh().memoizedState = [a, b === void 0 ? null : b];
    return a;
  },
  useContext: vg,
  useEffect: Wh,
  useImperativeHandle: function(a, b, c) {
    c = c !== null && c !== void 0 ? c.concat([a]) : null;
    return Uh(4, 2, Zh.bind(null, b, a), c);
  },
  useLayoutEffect: function(a, b) {
    return Uh(4, 2, a, b);
  },
  useMemo: function(a, b) {
    var c = Hh();
    b = b === void 0 ? null : b;
    a = a();
    c.memoizedState = [a, b];
    return a;
  },
  useReducer: function(a, b, c) {
    var d = Hh();
    b = c !== void 0 ? c(b) : b;
    d.memoizedState = d.baseState = b;
    a = d.queue = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: a,
      lastRenderedState: b
    };
    a = a.dispatch = Oh.bind(null, R, a);
    return [d.memoizedState, a];
  },
  useRef: Sh,
  useState: Qh,
  useDebugValue: ai,
  useDeferredValue: function(a) {
    var b = Qh(a), c = b[0], d = b[1];
    Wh(function() {
      var b2 = wh.transition;
      wh.transition = 1;
      try {
        d(a);
      } finally {
        wh.transition = b2;
      }
    }, [a]);
    return c;
  },
  useTransition: function() {
    var a = Qh(false), b = a[0];
    a = di.bind(null, a[1]);
    Sh(a);
    return [a, b];
  },
  useMutableSource: function(a, b, c) {
    var d = Hh();
    d.memoizedState = {
      refs: {
        getSnapshot: b,
        setSnapshot: null
      },
      source: a,
      subscribe: c
    };
    return Nh(d, a, b, c);
  },
  useOpaqueIdentifier: function() {
    if (lh) {
      var a = false, b = uf(function() {
        a || (a = true, c("r:" + (tf++).toString(36)));
        throw Error(y(355));
      }), c = Qh(b)[1];
      (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
        c("r:" + (tf++).toString(36));
      }, void 0, null));
      return b;
    }
    b = "r:" + (tf++).toString(36);
    Qh(b);
    return b;
  },
  unstable_isNewReconciler: false
};
var Eh = {
  readContext: vg,
  useCallback: bi,
  useContext: vg,
  useEffect: Xh,
  useImperativeHandle: $h,
  useLayoutEffect: Yh,
  useMemo: ci,
  useReducer: Kh,
  useRef: Th,
  useState: function() {
    return Kh(Jh);
  },
  useDebugValue: ai,
  useDeferredValue: function(a) {
    var b = Kh(Jh), c = b[0], d = b[1];
    Xh(function() {
      var b2 = wh.transition;
      wh.transition = 1;
      try {
        d(a);
      } finally {
        wh.transition = b2;
      }
    }, [a]);
    return c;
  },
  useTransition: function() {
    var a = Kh(Jh)[0];
    return [Th().current, a];
  },
  useMutableSource: Ph,
  useOpaqueIdentifier: function() {
    return Kh(Jh)[0];
  },
  unstable_isNewReconciler: false
};
var Fh = {
  readContext: vg,
  useCallback: bi,
  useContext: vg,
  useEffect: Xh,
  useImperativeHandle: $h,
  useLayoutEffect: Yh,
  useMemo: ci,
  useReducer: Lh,
  useRef: Th,
  useState: function() {
    return Lh(Jh);
  },
  useDebugValue: ai,
  useDeferredValue: function(a) {
    var b = Lh(Jh), c = b[0], d = b[1];
    Xh(function() {
      var b2 = wh.transition;
      wh.transition = 1;
      try {
        d(a);
      } finally {
        wh.transition = b2;
      }
    }, [a]);
    return c;
  },
  useTransition: function() {
    var a = Lh(Jh)[0];
    return [Th().current, a];
  },
  useMutableSource: Ph,
  useOpaqueIdentifier: function() {
    return Lh(Jh)[0];
  },
  unstable_isNewReconciler: false
};
var ei = ra.ReactCurrentOwner;
var ug = false;
function fi(a, b, c, d) {
  b.child = a === null ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
}
function gi(a, b, c, d, e) {
  c = c.render;
  var f = b.ref;
  tg(b, e);
  d = Ch(a, b, c, d, f, e);
  if (a !== null && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
  b.flags |= 1;
  fi(a, b, d, e);
  return b.child;
}
function ii(a, b, c, d, e, f) {
  if (a === null) {
    var g = c.type;
    if (typeof g === "function" && !ji(g) && g.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
      return b.tag = 15, b.type = g, ki(a, b, g, d, e, f);
    a = Vg(c.type, null, d, b, b.mode, f);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  g = a.child;
  if ((e & f) === 0 && (e = g.memoizedProps, c = c.compare, c = c !== null ? c : Je, c(e, d) && a.ref === b.ref))
    return hi(a, b, f);
  b.flags |= 1;
  a = Tg(g, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function ki(a, b, c, d, e, f) {
  if (a !== null && Je(a.memoizedProps, d) && a.ref === b.ref)
    if (ug = false, (f & e) !== 0)
      (a.flags & 16384) !== 0 && (ug = true);
    else
      return b.lanes = a.lanes, hi(a, b, f);
  return li(a, b, c, d, f);
}
function mi(a, b, c) {
  var d = b.pendingProps, e = d.children, f = a !== null ? a.memoizedState : null;
  if (d.mode === "hidden" || d.mode === "unstable-defer-without-hiding") {
    if ((b.mode & 4) === 0)
      b.memoizedState = {
        baseLanes: 0
      }, ni(b, c);
    else if ((c & 1073741824) !== 0)
      b.memoizedState = {
        baseLanes: 0
      }, ni(b, f !== null ? f.baseLanes : c);
    else
      return a = f !== null ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
        baseLanes: a
      }, ni(b, a), null;
  } else
    f !== null ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
  fi(a, b, e, c);
  return b.child;
}
function oi(a, b) {
  var c = b.ref;
  if (a === null && c !== null || a !== null && a.ref !== c)
    b.flags |= 128;
}
function li(a, b, c, d, e) {
  var f = Ff(c) ? Df : M.current;
  f = Ef(b, f);
  tg(b, e);
  c = Ch(a, b, c, d, f, e);
  if (a !== null && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
  b.flags |= 1;
  fi(a, b, c, e);
  return b.child;
}
function pi(a, b, c, d, e) {
  if (Ff(c)) {
    var f = true;
    Jf(b);
  } else
    f = false;
  tg(b, e);
  if (b.stateNode === null)
    a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = true;
  else if (a === null) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k = g.context, l = c.contextType;
    typeof l === "object" && l !== null ? l = vg(l) : (l = Ff(c) ? Df : M.current, l = Ef(b, l));
    var n = c.getDerivedStateFromProps, A = typeof n === "function" || typeof g.getSnapshotBeforeUpdate === "function";
    A || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== d || k !== l) && Ng(b, g, d, l);
    wg = false;
    var p = b.memoizedState;
    g.state = p;
    Cg(b, d, g, e);
    k = b.memoizedState;
    h !== d || p !== k || N.current || wg ? (typeof n === "function" && (Gg(b, c, n, d), k = b.memoizedState), (h = wg || Lg(b, c, h, d, p, k, l)) ? (A || typeof g.UNSAFE_componentWillMount !== "function" && typeof g.componentWillMount !== "function" || (typeof g.componentWillMount === "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount === "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount === "function" && (b.flags |= 4)) : (typeof g.componentDidMount === "function" && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : (typeof g.componentDidMount === "function" && (b.flags |= 4), d = false);
  } else {
    g = b.stateNode;
    yg(a, b);
    h = b.memoizedProps;
    l = b.type === b.elementType ? h : lg(b.type, h);
    g.props = l;
    A = b.pendingProps;
    p = g.context;
    k = c.contextType;
    typeof k === "object" && k !== null ? k = vg(k) : (k = Ff(c) ? Df : M.current, k = Ef(b, k));
    var C = c.getDerivedStateFromProps;
    (n = typeof C === "function" || typeof g.getSnapshotBeforeUpdate === "function") || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== A || p !== k) && Ng(b, g, d, k);
    wg = false;
    p = b.memoizedState;
    g.state = p;
    Cg(b, d, g, e);
    var x = b.memoizedState;
    h !== A || p !== x || N.current || wg ? (typeof C === "function" && (Gg(b, c, C, d), x = b.memoizedState), (l = wg || Lg(b, c, l, d, p, x, k)) ? (n || typeof g.UNSAFE_componentWillUpdate !== "function" && typeof g.componentWillUpdate !== "function" || (typeof g.componentWillUpdate === "function" && g.componentWillUpdate(d, x, k), typeof g.UNSAFE_componentWillUpdate === "function" && g.UNSAFE_componentWillUpdate(d, x, k)), typeof g.componentDidUpdate === "function" && (b.flags |= 4), typeof g.getSnapshotBeforeUpdate === "function" && (b.flags |= 256)) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = false);
  }
  return qi(a, b, c, d, f, e);
}
function qi(a, b, c, d, e, f) {
  oi(a, b);
  var g = (b.flags & 64) !== 0;
  if (!d && !g)
    return e && Kf(b, c, false), hi(a, b, f);
  d = b.stateNode;
  ei.current = b;
  var h = g && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
  b.flags |= 1;
  a !== null && g ? (b.child = Yg(b, a.child, null, f), b.child = Yg(b, null, h, f)) : fi(a, b, h, f);
  b.memoizedState = d.state;
  e && Kf(b, c, true);
  return b.child;
}
function ri(a) {
  var b = a.stateNode;
  b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, false);
  eh(a, b.containerInfo);
}
var si = {
  dehydrated: null,
  retryLane: 0
};
function ti(a, b, c) {
  var d = b.pendingProps, e = P.current, f = false, g;
  (g = (b.flags & 64) !== 0) || (g = a !== null && a.memoizedState === null ? false : (e & 2) !== 0);
  g ? (f = true, b.flags &= -65) : a !== null && a.memoizedState === null || d.fallback === void 0 || d.unstable_avoidThisFallback === true || (e |= 1);
  I(P, e & 1);
  if (a === null) {
    d.fallback !== void 0 && ph(b);
    a = d.children;
    e = d.fallback;
    if (f)
      return a = ui(b, a, e, c), b.child.memoizedState = {
        baseLanes: c
      }, b.memoizedState = si, a;
    if (typeof d.unstable_expectedLoadTime === "number")
      return a = ui(b, a, e, c), b.child.memoizedState = {
        baseLanes: c
      }, b.memoizedState = si, b.lanes = 33554432, a;
    c = vi({
      mode: "visible",
      children: a
    }, b.mode, c, null);
    c.return = b;
    return b.child = c;
  }
  if (a.memoizedState !== null) {
    if (f)
      return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = e === null ? {
        baseLanes: c
      } : {
        baseLanes: e.baseLanes | c
      }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
    c = xi(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }
  if (f)
    return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = e === null ? {
      baseLanes: c
    } : {
      baseLanes: e.baseLanes | c
    }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
  c = xi(a, b, d.children, c);
  b.memoizedState = null;
  return c;
}
function ui(a, b, c, d) {
  var e = a.mode, f = a.child;
  b = {
    mode: "hidden",
    children: b
  };
  (e & 2) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = b) : f = vi(b, e, 0, null);
  c = Xg(c, e, d, null);
  f.return = a;
  c.return = a;
  f.sibling = c;
  a.child = f;
  return c;
}
function xi(a, b, c, d) {
  var e = a.child;
  a = e.sibling;
  c = Tg(e, {
    mode: "visible",
    children: c
  });
  (b.mode & 2) === 0 && (c.lanes = d);
  c.return = b;
  c.sibling = null;
  a !== null && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
  return b.child = c;
}
function wi(a, b, c, d, e) {
  var f = b.mode, g = a.child;
  a = g.sibling;
  var h = {
    mode: "hidden",
    children: c
  };
  (f & 2) === 0 && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, g !== null ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g, h);
  a !== null ? d = Tg(a, d) : (d = Xg(d, f, e, null), d.flags |= 2);
  d.return = b;
  c.return = b;
  c.sibling = d;
  b.child = c;
  return d;
}
function yi(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  c !== null && (c.lanes |= b);
  sg(a.return, b);
}
function zi(a, b, c, d, e, f) {
  var g = a.memoizedState;
  g === null ? a.memoizedState = {
    isBackwards: b,
    rendering: null,
    renderingStartTime: 0,
    last: d,
    tail: c,
    tailMode: e,
    lastEffect: f
  } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
}
function Ai(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f = d.tail;
  fi(a, b, d.children, c);
  d = P.current;
  if ((d & 2) !== 0)
    d = d & 1 | 2, b.flags |= 64;
  else {
    if (a !== null && (a.flags & 64) !== 0)
      a:
        for (a = b.child; a !== null; ) {
          if (a.tag === 13)
            a.memoizedState !== null && yi(a, c);
          else if (a.tag === 19)
            yi(a, c);
          else if (a.child !== null) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  I(P, d);
  if ((b.mode & 2) === 0)
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; c !== null; )
          a = c.alternate, a !== null && ih(a) === null && (e = c), c = c.sibling;
        c = e;
        c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        zi(b, false, e, c, f, b.lastEffect);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; e !== null; ) {
          a = e.alternate;
          if (a !== null && ih(a) === null) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        zi(b, true, c, null, f, b.lastEffect);
        break;
      case "together":
        zi(b, false, null, null, void 0, b.lastEffect);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function hi(a, b, c) {
  a !== null && (b.dependencies = a.dependencies);
  Dg |= b.lanes;
  if ((c & b.childLanes) !== 0) {
    if (a !== null && b.child !== a.child)
      throw Error(y(153));
    if (b.child !== null) {
      a = b.child;
      c = Tg(a, a.pendingProps);
      b.child = c;
      for (c.return = b; a.sibling !== null; )
        a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  return null;
}
var Bi;
var Ci;
var Di;
var Ei;
Bi = function(a, b) {
  for (var c = b.child; c !== null; ) {
    if (c.tag === 5 || c.tag === 6)
      a.appendChild(c.stateNode);
    else if (c.tag !== 4 && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Ci = function() {
};
Di = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    dh(ah.current);
    var f = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f = [];
        break;
      case "option":
        e = eb(a, e);
        d = eb(a, d);
        f = [];
        break;
      case "select":
        e = objectAssign({}, e, {
          value: void 0
        });
        d = objectAssign({}, d, {
          value: void 0
        });
        f = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f = [];
        break;
      default:
        typeof e.onClick !== "function" && typeof d.onClick === "function" && (a.onclick = jf);
    }
    vb(c, d);
    var g;
    c = null;
    for (l in e)
      if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && e[l] != null)
        if (l === "style") {
          var h = e[l];
          for (g in h)
            h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (ca.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
    for (l in d) {
      var k = d[l];
      h = e != null ? e[l] : void 0;
      if (d.hasOwnProperty(l) && k !== h && (k != null || h != null))
        if (l === "style") {
          if (h) {
            for (g in h)
              !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k)
              k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
          } else
            c || (f || (f = []), f.push(l, c)), c = k;
        } else
          l === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, k != null && h !== k && (f = f || []).push(l, k)) : l === "children" ? typeof k !== "string" && typeof k !== "number" || (f = f || []).push(l, "" + k) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (ca.hasOwnProperty(l) ? (k != null && l === "onScroll" && G("scroll", a), f || h === k || (f = [])) : typeof k === "object" && k !== null && k.$$typeof === Ga ? k.toString() : (f = f || []).push(l, k));
    }
    c && (f = f || []).push("style", c);
    var l = f;
    if (b.updateQueue = l)
      b.flags |= 4;
  }
};
Ei = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Fi(a, b) {
  if (!lh)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; b !== null; )
          b.alternate !== null && (c = b), b = b.sibling;
        c === null ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; c !== null; )
          c.alternate !== null && (d = c), c = c.sibling;
        d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function Gi(a, b, c) {
  var d = b.pendingProps;
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return Ff(b.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d = b.stateNode;
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (a === null || a.child === null)
        rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
      Ci(b);
      return null;
    case 5:
      hh(b);
      var e = dh(ch.current);
      c = b.type;
      if (a !== null && b.stateNode != null)
        Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);
      else {
        if (!d) {
          if (b.stateNode === null)
            throw Error(y(166));
          return null;
        }
        a = dh(ah.current);
        if (rh(b)) {
          d = b.stateNode;
          c = b.type;
          var f = b.memoizedProps;
          d[wf] = b;
          d[xf] = f;
          switch (c) {
            case "dialog":
              G("cancel", d);
              G("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Xe.length; a++)
                G(Xe[a], d);
              break;
            case "source":
              G("error", d);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d);
              G("load", d);
              break;
            case "details":
              G("toggle", d);
              break;
            case "input":
              Za(d, f);
              G("invalid", d);
              break;
            case "select":
              d._wrapperState = {
                wasMultiple: !!f.multiple
              };
              G("invalid", d);
              break;
            case "textarea":
              hb(d, f), G("invalid", d);
          }
          vb(c, f);
          a = null;
          for (var g in f)
            f.hasOwnProperty(g) && (e = f[g], g === "children" ? typeof e === "string" ? d.textContent !== e && (a = ["children", e]) : typeof e === "number" && d.textContent !== "" + e && (a = ["children", "" + e]) : ca.hasOwnProperty(g) && e != null && g === "onScroll" && G("scroll", d));
          switch (c) {
            case "input":
              Va(d);
              cb(d, f, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f.onClick === "function" && (d.onclick = jf);
          }
          d = a;
          b.updateQueue = d;
          d !== null && (b.flags |= 4);
        } else {
          g = e.nodeType === 9 ? e : e.ownerDocument;
          a === kb.html && (a = lb(c));
          a === kb.html ? c === "script" ? (a = g.createElement("div"), a.innerHTML = "<script></script>", a = a.removeChild(a.firstChild)) : typeof d.is === "string" ? a = g.createElement(c, {
            is: d.is
          }) : (a = g.createElement(c), c === "select" && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[wf] = b;
          a[xf] = d;
          Bi(a, b, false, false);
          b.stateNode = a;
          g = wb(c, d);
          switch (c) {
            case "dialog":
              G("cancel", a);
              G("close", a);
              e = d;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a);
              e = d;
              break;
            case "video":
            case "audio":
              for (e = 0; e < Xe.length; e++)
                G(Xe[e], a);
              e = d;
              break;
            case "source":
              G("error", a);
              e = d;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a);
              G("load", a);
              e = d;
              break;
            case "details":
              G("toggle", a);
              e = d;
              break;
            case "input":
              Za(a, d);
              e = Ya(a, d);
              G("invalid", a);
              break;
            case "option":
              e = eb(a, d);
              break;
            case "select":
              a._wrapperState = {
                wasMultiple: !!d.multiple
              };
              e = objectAssign({}, d, {
                value: void 0
              });
              G("invalid", a);
              break;
            case "textarea":
              hb(a, d);
              e = gb(a, d);
              G("invalid", a);
              break;
            default:
              e = d;
          }
          vb(c, e);
          var h = e;
          for (f in h)
            if (h.hasOwnProperty(f)) {
              var k = h[f];
              f === "style" ? tb(a, k) : f === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && ob(a, k)) : f === "children" ? typeof k === "string" ? (c !== "textarea" || k !== "") && pb(a, k) : typeof k === "number" && pb(a, "" + k) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (ca.hasOwnProperty(f) ? k != null && f === "onScroll" && G("scroll", a) : k != null && qa(a, f, k, g));
            }
          switch (c) {
            case "input":
              Va(a);
              cb(a, d, false);
              break;
            case "textarea":
              Va(a);
              jb(a);
              break;
            case "option":
              d.value != null && a.setAttribute("value", "" + Sa(d.value));
              break;
            case "select":
              a.multiple = !!d.multiple;
              f = d.value;
              f != null ? fb(a, !!d.multiple, f, false) : d.defaultValue != null && fb(a, !!d.multiple, d.defaultValue, true);
              break;
            default:
              typeof e.onClick === "function" && (a.onclick = jf);
          }
          mf(c, d) && (b.flags |= 4);
        }
        b.ref !== null && (b.flags |= 128);
      }
      return null;
    case 6:
      if (a && b.stateNode != null)
        Ei(a, b, a.memoizedProps, d);
      else {
        if (typeof d !== "string" && b.stateNode === null)
          throw Error(y(166));
        c = dh(ch.current);
        dh(ah.current);
        rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
      }
      return null;
    case 13:
      H(P);
      d = b.memoizedState;
      if ((b.flags & 64) !== 0)
        return b.lanes = c, b;
      d = d !== null;
      c = false;
      a === null ? b.memoizedProps.fallback !== void 0 && rh(b) : c = a.memoizedState !== null;
      if (d && !c && (b.mode & 2) !== 0)
        if (a === null && b.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d || c)
        b.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b), a === null && cf(b.stateNode.containerInfo), null;
    case 10:
      return rg(b), null;
    case 17:
      return Ff(b.type) && Gf(), null;
    case 19:
      H(P);
      d = b.memoizedState;
      if (d === null)
        return null;
      f = (b.flags & 64) !== 0;
      g = d.rendering;
      if (g === null) {
        if (f)
          Fi(d, false);
        else {
          if (V !== 0 || a !== null && (a.flags & 64) !== 0)
            for (a = b.child; a !== null; ) {
              g = ih(a);
              if (g !== null) {
                b.flags |= 64;
                Fi(d, false);
                f = g.updateQueue;
                f !== null && (b.updateQueue = f, b.flags |= 4);
                d.lastEffect === null && (b.firstEffect = null);
                b.lastEffect = d.lastEffect;
                d = c;
                for (c = b.child; c !== null; )
                  f = c, a = d, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, g === null ? (f.childLanes = 0, f.lanes = a, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = a === null ? null : {
                    lanes: a.lanes,
                    firstContext: a.firstContext
                  }), c = c.sibling;
                I(P, P.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          d.tail !== null && O() > Ji && (b.flags |= 64, f = true, Fi(d, false), b.lanes = 33554432);
        }
      } else {
        if (!f)
          if (a = ih(g), a !== null) {
            if (b.flags |= 64, f = true, c = a.updateQueue, c !== null && (b.updateQueue = c, b.flags |= 4), Fi(d, true), d.tail === null && d.tailMode === "hidden" && !g.alternate && !lh)
              return b = b.lastEffect = d.lastEffect, b !== null && (b.nextEffect = null), null;
          } else
            2 * O() - d.renderingStartTime > Ji && c !== 1073741824 && (b.flags |= 64, f = true, Fi(d, false), b.lanes = 33554432);
        d.isBackwards ? (g.sibling = b.child, b.child = g) : (c = d.last, c !== null ? c.sibling = g : b.child = g, d.last = g);
      }
      return d.tail !== null ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O(), c.sibling = null, b = P.current, I(P, f ? b & 1 | 2 : b & 1), c) : null;
    case 23:
    case 24:
      return Ki(), a !== null && a.memoizedState !== null !== (b.memoizedState !== null) && d.mode !== "unstable-defer-without-hiding" && (b.flags |= 4), null;
  }
  throw Error(y(156, b.tag));
}
function Li(a) {
  switch (a.tag) {
    case 1:
      Ff(a.type) && Gf();
      var b = a.flags;
      return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b = a.flags;
      if ((b & 64) !== 0)
        throw Error(y(285));
      a.flags = b & -4097 | 64;
      return a;
    case 5:
      return hh(a), null;
    case 13:
      return H(P), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a, b) {
  try {
    var c = "", d = b;
    do
      c += Qa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f) {
    e = "\nError generating stack: " + f.message + "\n" + f.stack;
  }
  return {
    value: a,
    source: b,
    stack: e
  };
}
function Ni(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  c.payload = {
    element: null
  };
  var d = b.value;
  c.callback = function() {
    Qi || (Qi = true, Ri = d);
    Ni(a, b);
  };
  return c;
}
function Si(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if (typeof d === "function") {
    var e = b.value;
    c.payload = function() {
      Ni(a, b);
      return d(e);
    };
  }
  var f = a.stateNode;
  f !== null && typeof f.componentDidCatch === "function" && (c.callback = function() {
    typeof d !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a, b));
    var c2 = b.stack;
    this.componentDidCatch(b.value, {
      componentStack: c2 !== null ? c2 : ""
    });
  });
  return c;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a) {
  var b = a.ref;
  if (b !== null)
    if (typeof b === "function")
      try {
        b(null);
      } catch (c) {
        Wi(a, c);
      }
    else
      b.current = null;
}
function Xi(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b.flags & 256 && a !== null) {
        var c = a.memoizedProps, d = a.memoizedState;
        a = b.stateNode;
        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
        a.__reactInternalSnapshotBeforeUpdate = b;
      }
      return;
    case 3:
      b.flags & 256 && qf(b.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yi(a, b, c) {
  switch (c.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b = c.updateQueue;
      b = b !== null ? b.lastEffect : null;
      if (b !== null) {
        a = b = b.next;
        do {
          if ((a.tag & 3) === 3) {
            var d = a.create;
            a.destroy = d();
          }
          a = a.next;
        } while (a !== b);
      }
      b = c.updateQueue;
      b = b !== null ? b.lastEffect : null;
      if (b !== null) {
        a = b = b.next;
        do {
          var e = a;
          d = e.next;
          e = e.tag;
          (e & 4) !== 0 && (e & 1) !== 0 && (Zi(c, a), $i(c, a));
          a = d;
        } while (a !== b);
      }
      return;
    case 1:
      a = c.stateNode;
      c.flags & 4 && (b === null ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
      b = c.updateQueue;
      b !== null && Eg(c, b, a);
      return;
    case 3:
      b = c.updateQueue;
      if (b !== null) {
        a = null;
        if (c.child !== null)
          switch (c.child.tag) {
            case 5:
              a = c.child.stateNode;
              break;
            case 1:
              a = c.child.stateNode;
          }
        Eg(c, b, a);
      }
      return;
    case 5:
      a = c.stateNode;
      b === null && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c.memoizedState === null && (c = c.alternate, c !== null && (c = c.memoizedState, c !== null && (c = c.dehydrated, c !== null && Cc(c))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function aj(a, b) {
  for (var c = a; ; ) {
    if (c.tag === 5) {
      var d = c.stateNode;
      if (b)
        d = d.style, typeof d.setProperty === "function" ? d.setProperty("display", "none", "important") : d.display = "none";
      else {
        d = c.stateNode;
        var e = c.memoizedProps.style;
        e = e !== void 0 && e !== null && e.hasOwnProperty("display") ? e.display : null;
        d.style.display = sb("display", e);
      }
    } else if (c.tag === 6)
      c.stateNode.nodeValue = b ? "" : c.memoizedProps;
    else if ((c.tag !== 23 && c.tag !== 24 || c.memoizedState === null || c === a) && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === a)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === a)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function bj(a, b) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b);
    } catch (f) {
    }
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a = b.updateQueue;
      if (a !== null && (a = a.lastEffect, a !== null)) {
        var c = a = a.next;
        do {
          var d = c, e = d.destroy;
          d = d.tag;
          if (e !== void 0)
            if ((d & 4) !== 0)
              Zi(b, c);
            else {
              d = b;
              try {
                e();
              } catch (f) {
                Wi(d, f);
              }
            }
          c = c.next;
        } while (c !== a);
      }
      break;
    case 1:
      Vi(b);
      a = b.stateNode;
      if (typeof a.componentWillUnmount === "function")
        try {
          a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
        } catch (f) {
          Wi(b, f);
        }
      break;
    case 5:
      Vi(b);
      break;
    case 4:
      cj(a, b);
  }
}
function dj(a) {
  a.alternate = null;
  a.child = null;
  a.dependencies = null;
  a.firstEffect = null;
  a.lastEffect = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.return = null;
  a.updateQueue = null;
}
function ej(a) {
  return a.tag === 5 || a.tag === 3 || a.tag === 4;
}
function fj(a) {
  a: {
    for (var b = a.return; b !== null; ) {
      if (ej(b))
        break a;
      b = b.return;
    }
    throw Error(y(160));
  }
  var c = b;
  b = c.stateNode;
  switch (c.tag) {
    case 5:
      var d = false;
      break;
    case 3:
      b = b.containerInfo;
      d = true;
      break;
    case 4:
      b = b.containerInfo;
      d = true;
      break;
    default:
      throw Error(y(161));
  }
  c.flags & 16 && (pb(b, ""), c.flags &= -17);
  a:
    b:
      for (c = a; ; ) {
        for (; c.sibling === null; ) {
          if (c.return === null || ej(c.return)) {
            c = null;
            break a;
          }
          c = c.return;
        }
        c.sibling.return = c.return;
        for (c = c.sibling; c.tag !== 5 && c.tag !== 6 && c.tag !== 18; ) {
          if (c.flags & 2)
            continue b;
          if (c.child === null || c.tag === 4)
            continue b;
          else
            c.child.return = c, c = c.child;
        }
        if (!(c.flags & 2)) {
          c = c.stateNode;
          break a;
        }
      }
  d ? gj(a, c, b) : hj(a, c, b);
}
function gj(a, b, c) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.nodeType === 8 ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (c.nodeType === 8 ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, c !== null && c !== void 0 || b.onclick !== null || (b.onclick = jf));
  else if (d !== 4 && (a = a.child, a !== null))
    for (gj(a, b, c), a = a.sibling; a !== null; )
      gj(a, b, c), a = a.sibling;
}
function hj(a, b, c) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (d !== 4 && (a = a.child, a !== null))
    for (hj(a, b, c), a = a.sibling; a !== null; )
      hj(a, b, c), a = a.sibling;
}
function cj(a, b) {
  for (var c = b, d = false, e, f; ; ) {
    if (!d) {
      d = c.return;
      a:
        for (; ; ) {
          if (d === null)
            throw Error(y(160));
          e = d.stateNode;
          switch (d.tag) {
            case 5:
              f = false;
              break a;
            case 3:
              e = e.containerInfo;
              f = true;
              break a;
            case 4:
              e = e.containerInfo;
              f = true;
              break a;
          }
          d = d.return;
        }
      d = true;
    }
    if (c.tag === 5 || c.tag === 6) {
      a:
        for (var g = a, h = c, k = h; ; )
          if (bj(g, k), k.child !== null && k.tag !== 4)
            k.child.return = k, k = k.child;
          else {
            if (k === h)
              break a;
            for (; k.sibling === null; ) {
              if (k.return === null || k.return === h)
                break a;
              k = k.return;
            }
            k.sibling.return = k.return;
            k = k.sibling;
          }
      f ? (g = e, h = c.stateNode, g.nodeType === 8 ? g.parentNode.removeChild(h) : g.removeChild(h)) : e.removeChild(c.stateNode);
    } else if (c.tag === 4) {
      if (c.child !== null) {
        e = c.stateNode.containerInfo;
        f = true;
        c.child.return = c;
        c = c.child;
        continue;
      }
    } else if (bj(a, c), c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
      c.tag === 4 && (d = false);
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function ij(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c = b.updateQueue;
      c = c !== null ? c.lastEffect : null;
      if (c !== null) {
        var d = c = c.next;
        do
          (d.tag & 3) === 3 && (a = d.destroy, d.destroy = void 0, a !== void 0 && a()), d = d.next;
        while (d !== c);
      }
      return;
    case 1:
      return;
    case 5:
      c = b.stateNode;
      if (c != null) {
        d = b.memoizedProps;
        var e = a !== null ? a.memoizedProps : d;
        a = b.type;
        var f = b.updateQueue;
        b.updateQueue = null;
        if (f !== null) {
          c[xf] = d;
          a === "input" && d.type === "radio" && d.name != null && $a(c, d);
          wb(a, e);
          b = wb(a, d);
          for (e = 0; e < f.length; e += 2) {
            var g = f[e], h = f[e + 1];
            g === "style" ? tb(c, h) : g === "dangerouslySetInnerHTML" ? ob(c, h) : g === "children" ? pb(c, h) : qa(c, g, h, b);
          }
          switch (a) {
            case "input":
              ab(c, d);
              break;
            case "textarea":
              ib(c, d);
              break;
            case "select":
              a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, f != null ? fb(c, !!d.multiple, f, false) : a !== !!d.multiple && (d.defaultValue != null ? fb(c, !!d.multiple, d.defaultValue, true) : fb(c, !!d.multiple, d.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b.stateNode === null)
        throw Error(y(162));
      b.stateNode.nodeValue = b.memoizedProps;
      return;
    case 3:
      c = b.stateNode;
      c.hydrate && (c.hydrate = false, Cc(c.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b.memoizedState !== null && (jj = O(), aj(b.child, true));
      kj(b);
      return;
    case 19:
      kj(b);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b, b.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function kj(a) {
  var b = a.updateQueue;
  if (b !== null) {
    a.updateQueue = null;
    var c = a.stateNode;
    c === null && (c = a.stateNode = new Ui());
    b.forEach(function(b2) {
      var d = lj.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function mj(a, b) {
  return a !== null && (a = a.memoizedState, a === null || a.dehydrated !== null) ? (b = b.memoizedState, b !== null && b.dehydrated === null) : false;
}
var nj = Math.ceil;
var oj = ra.ReactCurrentDispatcher;
var pj = ra.ReactCurrentOwner;
var X = 0;
var U = null;
var Y = null;
var W = 0;
var qj = 0;
var rj = Bf(0);
var V = 0;
var sj = null;
var tj = 0;
var Dg = 0;
var Hi = 0;
var uj = 0;
var vj = null;
var jj = 0;
var Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null;
var Qi = false;
var Ri = null;
var Ti = null;
var xj = false;
var yj = null;
var zj = 90;
var Aj = [];
var Bj = [];
var Cj = null;
var Dj = 0;
var Ej = null;
var Fj = -1;
var Gj = 0;
var Hj = 0;
var Ij = null;
var Jj = false;
function Hg() {
  return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
}
function Ig(a) {
  a = a.mode;
  if ((a & 2) === 0)
    return 1;
  if ((a & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a = Gj;
    var b = 4186112 & ~Hj;
    b &= -b;
    b === 0 && (a = 4186112 & ~a, b = a & -a, b === 0 && (b = 8192));
    return b;
  }
  a = eg();
  (X & 4) !== 0 && a === 98 ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
  return a;
}
function Jg(a, b, c) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a = Kj(a, b);
  if (a === null)
    return null;
  $c(a, b, c);
  a === U && (Hi |= b, V === 4 && Ii(a, W));
  var d = eg();
  b === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a) : (Mj(a, c), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d !== 98 && d !== 99 || (Cj === null ? Cj = new Set([a]) : Cj.add(a)), Mj(a, c));
  vj = a;
}
function Kj(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  c !== null && (c.lanes |= b);
  c = a;
  for (a = a.return; a !== null; )
    a.childLanes |= b, c = a.alternate, c !== null && (c.childLanes |= b), c = a, a = a.return;
  return c.tag === 3 ? c.stateNode : null;
}
function Mj(a, b) {
  for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g; ) {
    var h = 31 - Vc(g), k = 1 << h, l = f[h];
    if (l === -1) {
      if ((k & d) === 0 || (k & e) !== 0) {
        l = b;
        Rc(k);
        var n = F;
        f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5e3 : -1;
      }
    } else
      l <= b && (a.expiredLanes |= k);
    g &= ~k;
  }
  d = Uc(a, a === U ? W : 0);
  b = F;
  if (d === 0)
    c !== null && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);
  else {
    if (c !== null) {
      if (a.callbackPriority === b)
        return;
      c !== Zf && Pf(c);
    }
    b === 15 ? (c = Lj.bind(null, a), ag === null ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : b === 14 ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Nj(a) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y(327));
  var b = a.callbackNode;
  if (Oj() && a.callbackNode !== b)
    return null;
  var c = Uc(a, a === U ? W : 0);
  if (c === 0)
    return null;
  var d = c;
  var e = X;
  X |= 16;
  var f = Pj();
  if (U !== a || W !== d)
    wj(), Qj(a, d);
  do
    try {
      Rj();
      break;
    } catch (h) {
      Sj(a, h);
    }
  while (1);
  qg();
  oj.current = f;
  X = e;
  Y !== null ? d = 0 : (U = null, W = 0, d = V);
  if ((tj & Hi) !== 0)
    Qj(a, 0);
  else if (d !== 0) {
    d === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), c = Wc(a), c !== 0 && (d = Tj(a, c)));
    if (d === 1)
      throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O()), b;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = c;
    switch (d) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a);
        break;
      case 3:
        Ii(a, c);
        if ((c & 62914560) === c && (d = jj + 500 - O(), 10 < d)) {
          if (Uc(a, 0) !== 0)
            break;
          e = a.suspendedLanes;
          if ((e & c) !== c) {
            Hg();
            a.pingedLanes |= a.suspendedLanes & e;
            break;
          }
          a.timeoutHandle = of(Uj.bind(null, a), d);
          break;
        }
        Uj(a);
        break;
      case 4:
        Ii(a, c);
        if ((c & 4186112) === c)
          break;
        d = a.eventTimes;
        for (e = -1; 0 < c; ) {
          var g = 31 - Vc(c);
          f = 1 << g;
          g = d[g];
          g > e && (e = g);
          c &= ~f;
        }
        c = e;
        c = O() - c;
        c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;
        if (10 < c) {
          a.timeoutHandle = of(Uj.bind(null, a), c);
          break;
        }
        Uj(a);
        break;
      case 5:
        Uj(a);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a, O());
  return a.callbackNode === b ? Nj.bind(null, a) : null;
}
function Ii(a, b) {
  b &= ~uj;
  b &= ~Hi;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - Vc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Lj(a) {
  if ((X & 48) !== 0)
    throw Error(y(327));
  Oj();
  if (a === U && (a.expiredLanes & W) !== 0) {
    var b = W;
    var c = Tj(a, b);
    (tj & Hi) !== 0 && (b = Uc(a, b), c = Tj(a, b));
  } else
    b = Uc(a, 0), c = Tj(a, b);
  a.tag !== 0 && c === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), b = Wc(a), b !== 0 && (c = Tj(a, b)));
  if (c === 1)
    throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O()), c;
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Uj(a);
  Mj(a, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a = Cj;
    Cj = null;
    a.forEach(function(a2) {
      a2.expiredLanes |= 24 & a2.pendingLanes;
      Mj(a2, O());
    });
  }
  ig();
}
function Wj(a, b) {
  var c = X;
  X |= 1;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
}
function Xj(a, b) {
  var c = X;
  X &= -2;
  X |= 8;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
}
function ni(a, b) {
  I(rj, qj);
  qj |= b;
  tj |= b;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  c !== -1 && (a.timeoutHandle = -1, pf(c));
  if (Y !== null)
    for (c = Y.return; c !== null; ) {
      var d = c;
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          d !== null && d !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d);
          break;
        case 4:
          fh();
          break;
        case 13:
          H(P);
          break;
        case 19:
          H(P);
          break;
        case 10:
          rg(d);
          break;
        case 23:
        case 24:
          Ki();
      }
      c = c.return;
    }
  U = a;
  Y = Tg(a.current, null);
  W = qj = tj = b;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a, b) {
  do {
    var c = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d = R.memoizedState; d !== null; ) {
          var e = d.queue;
          e !== null && (e.pending = null);
          d = d.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c === null || c.return === null) {
        V = 1;
        sj = b;
        Y = null;
        break;
      }
      a: {
        var f = a, g = c.return, h = c, k = b;
        b = W;
        h.flags |= 2048;
        h.firstEffect = h.lastEffect = null;
        if (k !== null && typeof k === "object" && typeof k.then === "function") {
          var l = k;
          if ((h.mode & 2) === 0) {
            var n = h.alternate;
            n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var A = (P.current & 1) !== 0, p = g;
          do {
            var C;
            if (C = p.tag === 13) {
              var x = p.memoizedState;
              if (x !== null)
                C = x.dehydrated !== null ? true : false;
              else {
                var w = p.memoizedProps;
                C = w.fallback === void 0 ? false : w.unstable_avoidThisFallback !== true ? true : A ? false : true;
              }
            }
            if (C) {
              var z = p.updateQueue;
              if (z === null) {
                var u = new Set();
                u.add(l);
                p.updateQueue = u;
              } else
                z.add(l);
              if ((p.mode & 2) === 0) {
                p.flags |= 64;
                h.flags |= 16384;
                h.flags &= -2981;
                if (h.tag === 1)
                  if (h.alternate === null)
                    h.tag = 17;
                  else {
                    var t = zg(-1, 1);
                    t.tag = 2;
                    Ag(h, t);
                  }
                h.lanes |= 1;
                break a;
              }
              k = void 0;
              h = b;
              var q = f.pingCache;
              q === null ? (q = f.pingCache = new Oi(), k = new Set(), q.set(l, k)) : (k = q.get(l), k === void 0 && (k = new Set(), q.set(l, k)));
              if (!k.has(h)) {
                k.add(h);
                var v = Yj.bind(null, f, l, h);
                l.then(v, v);
              }
              p.flags |= 4096;
              p.lanes = b;
              break a;
            }
            p = p.return;
          } while (p !== null);
          k = Error((Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k = Mi(k, h);
        p = g;
        do {
          switch (p.tag) {
            case 3:
              f = k;
              p.flags |= 4096;
              b &= -b;
              p.lanes |= b;
              var J = Pi(p, f, b);
              Bg(p, J);
              break a;
            case 1:
              f = k;
              var K = p.type, Q = p.stateNode;
              if ((p.flags & 64) === 0 && (typeof K.getDerivedStateFromError === "function" || Q !== null && typeof Q.componentDidCatch === "function" && (Ti === null || !Ti.has(Q)))) {
                p.flags |= 4096;
                b &= -b;
                p.lanes |= b;
                var L = Si(p, f, b);
                Bg(p, L);
                break a;
              }
          }
          p = p.return;
        } while (p !== null);
      }
      Zj(c);
    } catch (va) {
      b = va;
      Y === c && c !== null && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a = oj.current;
  oj.current = Gh;
  return a === null ? Gh : a;
}
function Tj(a, b) {
  var c = X;
  X |= 16;
  var d = Pj();
  U === a && W === b || Qj(a, b);
  do
    try {
      ak();
      break;
    } catch (e) {
      Sj(a, e);
    }
  while (1);
  qg();
  X = c;
  oj.current = d;
  if (Y !== null)
    throw Error(y(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; Y !== null; )
    bk(Y);
}
function Rj() {
  for (; Y !== null && !Qf(); )
    bk(Y);
}
function bk(a) {
  var b = ck(a.alternate, a, qj);
  a.memoizedProps = a.pendingProps;
  b === null ? Zj(a) : Y = b;
  pj.current = null;
}
function Zj(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if ((b.flags & 2048) === 0) {
      c = Gi(c, b, qj);
      if (c !== null) {
        Y = c;
        return;
      }
      c = b;
      if (c.tag !== 24 && c.tag !== 23 || c.memoizedState === null || (qj & 1073741824) !== 0 || (c.mode & 4) === 0) {
        for (var d = 0, e = c.child; e !== null; )
          d |= e.lanes | e.childLanes, e = e.sibling;
        c.childLanes = d;
      }
      a !== null && (a.flags & 2048) === 0 && (a.firstEffect === null && (a.firstEffect = b.firstEffect), b.lastEffect !== null && (a.lastEffect !== null && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (a.lastEffect !== null ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
    } else {
      c = Li(b);
      if (c !== null) {
        c.flags &= 2047;
        Y = c;
        return;
      }
      a !== null && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
    }
    b = b.sibling;
    if (b !== null) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (b !== null);
  V === 0 && (V = 5);
}
function Uj(a) {
  var b = eg();
  gg(99, dk.bind(null, a, b));
  return null;
}
function dk(a, b) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y(327));
  var c = a.finishedWork;
  if (c === null)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(y(177));
  a.callbackNode = null;
  var d = c.lanes | c.childLanes, e = d, f = a.pendingLanes & ~e;
  a.pendingLanes = e;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= e;
  a.mutableReadLanes &= e;
  a.entangledLanes &= e;
  e = a.entanglements;
  for (var g = a.eventTimes, h = a.expirationTimes; 0 < f; ) {
    var k = 31 - Vc(f), l = 1 << k;
    e[k] = 0;
    g[k] = -1;
    h[k] = -1;
    f &= ~l;
  }
  Cj !== null && (d & 24) === 0 && Cj.has(a) && Cj.delete(a);
  a === U && (Y = U = null, W = 0);
  1 < c.flags ? c.lastEffect !== null ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
  if (d !== null) {
    e = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g = Ne();
    if (Oe(g)) {
      if ("selectionStart" in g)
        h = {
          start: g.selectionStart,
          end: g.selectionEnd
        };
      else
        a:
          if (h = (h = g.ownerDocument) && h.defaultView || window, (l = h.getSelection && h.getSelection()) && l.rangeCount !== 0) {
            h = l.anchorNode;
            f = l.anchorOffset;
            k = l.focusNode;
            l = l.focusOffset;
            try {
              h.nodeType, k.nodeType;
            } catch (va) {
              h = null;
              break a;
            }
            var n = 0, A = -1, p = -1, C = 0, x = 0, w = g, z = null;
            b:
              for (; ; ) {
                for (var u; ; ) {
                  w !== h || f !== 0 && w.nodeType !== 3 || (A = n + f);
                  w !== k || l !== 0 && w.nodeType !== 3 || (p = n + l);
                  w.nodeType === 3 && (n += w.nodeValue.length);
                  if ((u = w.firstChild) === null)
                    break;
                  z = w;
                  w = u;
                }
                for (; ; ) {
                  if (w === g)
                    break b;
                  z === h && ++C === f && (A = n);
                  z === k && ++x === l && (p = n);
                  if ((u = w.nextSibling) !== null)
                    break;
                  w = z;
                  z = w.parentNode;
                }
                w = u;
              }
            h = A === -1 || p === -1 ? null : {
              start: A,
              end: p
            };
          } else
            h = null;
      h = h || {
        start: 0,
        end: 0
      };
    } else
      h = null;
    lf = {
      focusedElem: g,
      selectionRange: h
    };
    fd = false;
    Ij = null;
    Jj = false;
    Z = d;
    do
      try {
        ek();
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Ij = null;
    Z = d;
    do
      try {
        for (g = a; Z !== null; ) {
          var t = Z.flags;
          t & 16 && pb(Z.stateNode, "");
          if (t & 128) {
            var q = Z.alternate;
            if (q !== null) {
              var v = q.ref;
              v !== null && (typeof v === "function" ? v(null) : v.current = null);
            }
          }
          switch (t & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h = Z;
              cj(g, h);
              var J = h.alternate;
              dj(h);
              J !== null && dj(J);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    v = lf;
    q = Ne();
    t = v.focusedElem;
    g = v.selectionRange;
    if (q !== t && t && t.ownerDocument && Me(t.ownerDocument.documentElement, t)) {
      g !== null && Oe(t) && (q = g.start, v = g.end, v === void 0 && (v = q), "selectionStart" in t ? (t.selectionStart = q, t.selectionEnd = Math.min(v, t.value.length)) : (v = (q = t.ownerDocument || document) && q.defaultView || window, v.getSelection && (v = v.getSelection(), h = t.textContent.length, J = Math.min(g.start, h), g = g.end === void 0 ? J : Math.min(g.end, h), !v.extend && J > g && (h = g, g = J, J = h), h = Le(t, J), f = Le(t, g), h && f && (v.rangeCount !== 1 || v.anchorNode !== h.node || v.anchorOffset !== h.offset || v.focusNode !== f.node || v.focusOffset !== f.offset) && (q = q.createRange(), q.setStart(h.node, h.offset), v.removeAllRanges(), J > g ? (v.addRange(q), v.extend(f.node, f.offset)) : (q.setEnd(f.node, f.offset), v.addRange(q))))));
      q = [];
      for (v = t; v = v.parentNode; )
        v.nodeType === 1 && q.push({
          element: v,
          left: v.scrollLeft,
          top: v.scrollTop
        });
      typeof t.focus === "function" && t.focus();
      for (t = 0; t < q.length; t++)
        v = q[t], v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
    }
    fd = !!kf;
    lf = kf = null;
    a.current = c;
    Z = d;
    do
      try {
        for (t = a; Z !== null; ) {
          var K = Z.flags;
          K & 36 && Yi(t, Z.alternate, Z);
          if (K & 128) {
            q = void 0;
            var Q = Z.ref;
            if (Q !== null) {
              var L = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q = L;
                  break;
                default:
                  q = L;
              }
              typeof Q === "function" ? Q(q) : Q.current = q;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Z = null;
    $f();
    X = e;
  } else
    a.current = c;
  if (xj)
    xj = false, yj = a, zj = b;
  else
    for (Z = d; Z !== null; )
      b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K = Z, K.sibling = null, K.stateNode = null), Z = b;
  d = a.pendingLanes;
  d === 0 && (Ti = null);
  d === 1 ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
  c = c.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c, void 0, (c.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a, O());
  if (Qi)
    throw Qi = false, a = Ri, Ri = null, a;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a, Z) && dc(Z, Ij) && (Jj = true));
    var b = Z.flags;
    (b & 256) !== 0 && Xi(a, Z);
    (b & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a, fk);
  }
  return false;
}
function $i(a, b) {
  Aj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a, b) {
  Bj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y(331));
  var b = X;
  X |= 32;
  var c = Bj;
  Bj = [];
  for (var d = 0; d < c.length; d += 2) {
    var e = c[d], f = c[d + 1], g = e.destroy;
    e.destroy = void 0;
    if (typeof g === "function")
      try {
        g();
      } catch (k) {
        if (f === null)
          throw Error(y(330));
        Wi(f, k);
      }
  }
  c = Aj;
  Aj = [];
  for (d = 0; d < c.length; d += 2) {
    e = c[d];
    f = c[d + 1];
    try {
      var h = e.create;
      e.destroy = h();
    } catch (k) {
      if (f === null)
        throw Error(y(330));
      Wi(f, k);
    }
  }
  for (h = a.current.firstEffect; h !== null; )
    a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
  X = b;
  ig();
  return true;
}
function gk(a, b, c) {
  b = Mi(c, b);
  b = Pi(a, b, 1);
  Ag(a, b);
  b = Hg();
  a = Kj(a, 1);
  a !== null && ($c(a, 1, b), Mj(a, b));
}
function Wi(a, b) {
  if (a.tag === 3)
    gk(a, a, b);
  else
    for (var c = a.return; c !== null; ) {
      if (c.tag === 3) {
        gk(c, a, b);
        break;
      } else if (c.tag === 1) {
        var d = c.stateNode;
        if (typeof c.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d))) {
          a = Mi(b, a);
          var e = Si(c, a, 1);
          Ag(c, e);
          e = Hg();
          c = Kj(c, 1);
          if (c !== null)
            $c(c, 1, e), Mj(c, e);
          else if (typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d)))
            try {
              d.componentDidCatch(b, a);
            } catch (f) {
            }
          break;
        }
      }
      c = c.return;
    }
}
function Yj(a, b, c) {
  var d = a.pingCache;
  d !== null && d.delete(b);
  b = Hg();
  a.pingedLanes |= a.suspendedLanes & c;
  U === a && (W & c) === c && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c);
  Mj(a, b);
}
function lj(a, b) {
  var c = a.stateNode;
  c !== null && c.delete(b);
  b = 0;
  b === 0 && (b = a.mode, (b & 2) === 0 ? b = 1 : (b & 4) === 0 ? b = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b = Yc(62914560 & ~Gj), b === 0 && (b = 4194304)));
  c = Hg();
  a = Kj(a, b);
  a !== null && ($c(a, b, c), Mj(a, c));
}
var ck;
ck = function(a, b, c) {
  var d = b.lanes;
  if (a !== null) {
    if (a.memoizedProps !== b.pendingProps || N.current)
      ug = true;
    else if ((c & d) !== 0)
      ug = (a.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b.tag) {
        case 3:
          ri(b);
          sh();
          break;
        case 5:
          gh(b);
          break;
        case 1:
          Ff(b.type) && Jf(b);
          break;
        case 4:
          eh(b, b.stateNode.containerInfo);
          break;
        case 10:
          d = b.memoizedProps.value;
          var e = b.type._context;
          I(mg, e._currentValue);
          e._currentValue = d;
          break;
        case 13:
          if (b.memoizedState !== null) {
            if ((c & b.child.childLanes) !== 0)
              return ti(a, b, c);
            I(P, P.current & 1);
            b = hi(a, b, c);
            return b !== null ? b.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d = (c & b.childLanes) !== 0;
          if ((a.flags & 64) !== 0) {
            if (d)
              return Ai(a, b, c);
            b.flags |= 64;
          }
          e = b.memoizedState;
          e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
          I(P, P.current);
          if (d)
            break;
          else
            return null;
        case 23:
        case 24:
          return b.lanes = 0, mi(a, b, c);
      }
      return hi(a, b, c);
    }
  } else
    ug = false;
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      d = b.type;
      a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
      a = b.pendingProps;
      e = Ef(b, M.current);
      tg(b, c);
      e = Ch(null, b, d, a, e, c);
      b.flags |= 1;
      if (typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0) {
        b.tag = 1;
        b.memoizedState = null;
        b.updateQueue = null;
        if (Ff(d)) {
          var f = true;
          Jf(b);
        } else
          f = false;
        b.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null;
        xg(b);
        var g = d.getDerivedStateFromProps;
        typeof g === "function" && Gg(b, d, g, a);
        e.updater = Kg;
        b.stateNode = e;
        e._reactInternals = b;
        Og(b, d, a, c);
        b = qi(null, b, d, true, f, c);
      } else
        b.tag = 0, fi(null, b, e, c), b = b.child;
      return b;
    case 16:
      e = b.elementType;
      a: {
        a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
        a = b.pendingProps;
        f = e._init;
        e = f(e._payload);
        b.type = e;
        f = b.tag = hk(e);
        a = lg(e, a);
        switch (f) {
          case 0:
            b = li(null, b, e, a, c);
            break a;
          case 1:
            b = pi(null, b, e, a, c);
            break a;
          case 11:
            b = gi(null, b, e, a, c);
            break a;
          case 14:
            b = ii(null, b, e, lg(e.type, a), d, c);
            break a;
        }
        throw Error(y(306, e, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);
    case 3:
      ri(b);
      d = b.updateQueue;
      if (a === null || d === null)
        throw Error(y(282));
      d = b.pendingProps;
      e = b.memoizedState;
      e = e !== null ? e.element : null;
      yg(a, b);
      Cg(b, d, null, c);
      d = b.memoizedState.element;
      if (d === e)
        sh(), b = hi(a, b, c);
      else {
        e = b.stateNode;
        if (f = e.hydrate)
          kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f = lh = true;
        if (f) {
          a = e.mutableSourceEagerHydrationData;
          if (a != null)
            for (e = 0; e < a.length; e += 2)
              f = a[e], f._workInProgressVersionPrimary = a[e + 1], th.push(f);
          c = Zg(b, null, d, c);
          for (b.child = c; c; )
            c.flags = c.flags & -3 | 1024, c = c.sibling;
        } else
          fi(a, b, d, c), sh();
        b = b.child;
      }
      return b;
    case 5:
      return gh(b), a === null && ph(b), d = b.type, e = b.pendingProps, f = a !== null ? a.memoizedProps : null, g = e.children, nf(d, e) ? g = null : f !== null && nf(d, f) && (b.flags |= 16), oi(a, b), fi(a, b, g, c), b.child;
    case 6:
      return a === null && ph(b), null;
    case 13:
      return ti(a, b, c);
    case 4:
      return eh(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);
    case 7:
      return fi(a, b, b.pendingProps, c), b.child;
    case 8:
      return fi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return fi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        g = b.memoizedProps;
        f = e.value;
        var h = b.type._context;
        I(mg, h._currentValue);
        h._currentValue = f;
        if (g !== null)
          if (h = g.value, f = He(h, f) ? 0 : (typeof d._calculateChangedBits === "function" ? d._calculateChangedBits(h, f) : 1073741823) | 0, f === 0) {
            if (g.children === e.children && !N.current) {
              b = hi(a, b, c);
              break a;
            }
          } else
            for (h = b.child, h !== null && (h.return = b); h !== null; ) {
              var k = h.dependencies;
              if (k !== null) {
                g = h.child;
                for (var l = k.firstContext; l !== null; ) {
                  if (l.context === d && (l.observedBits & f) !== 0) {
                    h.tag === 1 && (l = zg(-1, c & -c), l.tag = 2, Ag(h, l));
                    h.lanes |= c;
                    l = h.alternate;
                    l !== null && (l.lanes |= c);
                    sg(h.return, c);
                    k.lanes |= c;
                    break;
                  }
                  l = l.next;
                }
              } else
                g = h.tag === 10 ? h.type === b.type ? null : h.child : h.child;
              if (g !== null)
                g.return = h;
              else
                for (g = h; g !== null; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  h = g.sibling;
                  if (h !== null) {
                    h.return = g.return;
                    g = h;
                    break;
                  }
                  g = g.return;
                }
              h = g;
            }
        fi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, f = b.pendingProps, d = f.children, tg(b, c), e = vg(e, f.unstable_observedBits), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;
    case 14:
      return e = b.type, f = lg(e, b.pendingProps), f = lg(e.type, f), ii(a, b, e, f, d, c);
    case 15:
      return ki(a, b, b.type, b.pendingProps, d, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = true, Jf(b)) : a = false, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, true, a, c);
    case 19:
      return Ai(a, b, c);
    case 23:
      return mi(a, b, c);
    case 24:
      return mi(a, b, c);
  }
  throw Error(y(156, b.tag));
};
function ik(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a, b, c, d) {
  return new ik(a, b, c, d);
}
function ji(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function hk(a) {
  if (typeof a === "function")
    return ji(a) ? 1 : 0;
  if (a !== void 0 && a !== null) {
    a = a.$$typeof;
    if (a === Aa)
      return 11;
    if (a === Da)
      return 14;
  }
  return 2;
}
function Tg(a, b) {
  var c = a.alternate;
  c === null ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = b === null ? null : {
    lanes: b.lanes,
    firstContext: b.firstContext
  };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Vg(a, b, c, d, e, f) {
  var g = 2;
  d = a;
  if (typeof a === "function")
    ji(a) && (g = 1);
  else if (typeof a === "string")
    g = 5;
  else
    a:
      switch (a) {
        case ua:
          return Xg(c.children, e, f, b);
        case Ha:
          g = 8;
          e |= 16;
          break;
        case wa:
          g = 8;
          e |= 1;
          break;
        case xa:
          return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f, a;
        case Ba:
          return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f, a;
        case Ca:
          return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f, a;
        case Ia:
          return vi(c, e, f, b);
        case Ja:
          return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f, a;
        default:
          if (typeof a === "object" && a !== null)
            switch (a.$$typeof) {
              case ya:
                g = 10;
                break a;
              case za:
                g = 9;
                break a;
              case Aa:
                g = 11;
                break a;
              case Da:
                g = 14;
                break a;
              case Ea:
                g = 16;
                d = null;
                break a;
              case Fa:
                g = 22;
                break a;
            }
          throw Error(y(130, a == null ? a : typeof a, ""));
      }
  b = nh(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f;
  return b;
}
function Xg(a, b, c, d) {
  a = nh(7, a, d, b);
  a.lanes = c;
  return a;
}
function vi(a, b, c, d) {
  a = nh(23, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  return a;
}
function Ug(a, b, c) {
  a = nh(6, a, null, b);
  a.lanes = c;
  return a;
}
function Wg(a, b, c) {
  b = nh(4, a.children !== null ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = {
    containerInfo: a.containerInfo,
    pendingChildren: null,
    implementation: a.implementation
  };
  return b;
}
function jk(a, b, c) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a, b, c) {
  var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ta,
    key: d == null ? null : "" + d,
    children: a,
    containerInfo: b,
    implementation: c
  };
}
function lk(a, b, c, d) {
  var e = b.current, f = Hg(), g = Ig(e);
  a:
    if (c) {
      c = c._reactInternals;
      b: {
        if (Zb(c) !== c || c.tag !== 1)
          throw Error(y(170));
        var h = c;
        do {
          switch (h.tag) {
            case 3:
              h = h.stateNode.context;
              break b;
            case 1:
              if (Ff(h.type)) {
                h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h = h.return;
        } while (h !== null);
        throw Error(y(171));
      }
      if (c.tag === 1) {
        var k = c.type;
        if (Ff(k)) {
          c = If(c, k, h);
          break a;
        }
      }
      c = h;
    } else
      c = Cf;
  b.context === null ? b.context = c : b.pendingContext = c;
  b = zg(f, g);
  b.payload = {
    element: a
  };
  d = d === void 0 ? null : d;
  d !== null && (b.callback = d);
  Ag(e, b);
  Jg(e, g, f);
  return g;
}
function mk(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function nk(a, b) {
  a = a.memoizedState;
  if (a !== null && a.dehydrated !== null) {
    var c = a.retryLane;
    a.retryLane = c !== 0 && c < b ? c : b;
  }
}
function ok(a, b) {
  nk(a, b);
  (a = a.alternate) && nk(a, b);
}
function pk() {
  return null;
}
function qk(a, b, c) {
  var d = c != null && c.hydrationOptions != null && c.hydrationOptions.mutableSources || null;
  c = new jk(a, b, c != null && c.hydrate === true);
  b = nh(3, null, null, b === 2 ? 7 : b === 1 ? 3 : 0);
  c.current = b;
  b.stateNode = c;
  xg(b);
  a[ff] = c.current;
  cf(a.nodeType === 8 ? a.parentNode : a);
  if (d)
    for (a = 0; a < d.length; a++) {
      b = d[a];
      var e = b._getVersion;
      e = e(b._source);
      c.mutableSourceEagerHydrationData == null ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
    }
  this._internalRoot = c;
}
qk.prototype.render = function(a) {
  lk(a, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a = this._internalRoot, b = a.containerInfo;
  lk(null, a, null, function() {
    b[ff] = null;
  });
};
function rk(a) {
  return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
}
function sk(a, b) {
  b || (b = a ? a.nodeType === 9 ? a.documentElement : a.firstChild : null, b = !(!b || b.nodeType !== 1 || !b.hasAttribute("data-reactroot")));
  if (!b)
    for (var c; c = a.lastChild; )
      a.removeChild(c);
  return new qk(a, 0, b ? {
    hydrate: true
  } : void 0);
}
function tk(a, b, c, d, e) {
  var f = c._reactRootContainer;
  if (f) {
    var g = f._internalRoot;
    if (typeof e === "function") {
      var h = e;
      e = function() {
        var a2 = mk(g);
        h.call(a2);
      };
    }
    lk(b, g, a, e);
  } else {
    f = c._reactRootContainer = sk(c, d);
    g = f._internalRoot;
    if (typeof e === "function") {
      var k = e;
      e = function() {
        var a2 = mk(g);
        k.call(a2);
      };
    }
    Xj(function() {
      lk(b, g, a, e);
    });
  }
  return mk(g);
}
ec = function(a) {
  if (a.tag === 13) {
    var b = Hg();
    Jg(a, 4, b);
    ok(a, 4);
  }
};
fc = function(a) {
  if (a.tag === 13) {
    var b = Hg();
    Jg(a, 67108864, b);
    ok(a, 67108864);
  }
};
gc = function(a) {
  if (a.tag === 13) {
    var b = Hg(), c = Ig(a);
    Jg(a, c, b);
    ok(a, c);
  }
};
hc = function(a, b) {
  return b();
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      ab(a, c);
      b = c.name;
      if (c.type === "radio" && b != null) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e)
              throw Error(y(90));
            Wa(d);
            ab(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, b != null && fb(a, !!c.multiple, b, false);
  }
};
Gb = Wj;
Hb = function(a, b, c, d, e) {
  var f = X;
  X |= 4;
  try {
    return gg(98, a.bind(null, b, c, d, e));
  } finally {
    X = f, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a, b) {
  var c = X;
  X |= 2;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
};
function uk(a, b) {
  var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b))
    throw Error(y(200));
  return kk(a, b, null, c);
}
var vk = {
  Events: [Cb, ue, Db, Eb, Fb, Oj, {
    current: false
  }]
};
var wk = {
  findFiberByHostInstance: wc,
  bundleType: 0,
  version: "17.0.2",
  rendererPackageName: "react-dom"
};
var xk = {
  bundleType: wk.bundleType,
  version: wk.version,
  rendererPackageName: wk.rendererPackageName,
  rendererConfig: wk.rendererConfig,
  overrideHookState: null,
  overrideHookStateDeletePath: null,
  overrideHookStateRenamePath: null,
  overrideProps: null,
  overridePropsDeletePath: null,
  overridePropsRenamePath: null,
  setSuspenseHandler: null,
  scheduleUpdate: null,
  currentDispatcherRef: ra.ReactCurrentDispatcher,
  findHostInstanceByFiber: function(a) {
    a = cc(a);
    return a === null ? null : a.stateNode;
  },
  findFiberByHostInstance: wk.findFiberByHostInstance || pk,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a) {
    }
}
var yk;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
var createPortal = uk;
var findDOMNode = function(a) {
  if (a == null)
    return null;
  if (a.nodeType === 1)
    return a;
  var b = a._reactInternals;
  if (b === void 0) {
    if (typeof a.render === "function")
      throw Error(y(188));
    throw Error(y(268, Object.keys(a)));
  }
  a = cc(b);
  a = a === null ? null : a.stateNode;
  return a;
};
var flushSync = function(a, b) {
  var c = X;
  if ((c & 48) !== 0)
    return a(b);
  X |= 1;
  try {
    if (a)
      return gg(99, a.bind(null, b));
  } finally {
    X = c, ig();
  }
};
var hydrate = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, true, c);
};
var render = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, false, c);
};
var unmountComponentAtNode = function(a) {
  if (!rk(a))
    throw Error(y(40));
  return a._reactRootContainer ? (Xj(function() {
    tk(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[ff] = null;
    });
  }), true) : false;
};
var unstable_batchedUpdates = Wj;
var unstable_createPortal = function(a, b) {
  return uk(a, b, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
var unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!rk(c))
    throw Error(y(200));
  if (a == null || a._reactInternals === void 0)
    throw Error(y(38));
  return tk(a, b, c, false, d);
};
var version = "17.0.2";
var reactDom_production_min = {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  createPortal,
  findDOMNode,
  flushSync,
  hydrate,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_createPortal,
  unstable_renderSubtreeIntoContainer,
  version
};
var reactDom = createCommonjsModule(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
});
var render$1 = reactDom.render;

// build/snowpack/pkg/react/jsx-runtime.js
var reactJsxRuntime_production_min = createCommonjsModule(function(module, exports) {
  var g = 60103;
  exports.Fragment = 60107;
  if (typeof Symbol === "function" && Symbol.for) {
    var h = Symbol.for;
    g = h("react.element");
    exports.Fragment = h("react.fragment");
  }
  var m = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function q(c, a, k) {
    var b, d = {}, e = null, l = null;
    k !== void 0 && (e = "" + k);
    a.key !== void 0 && (e = "" + a.key);
    a.ref !== void 0 && (l = a.ref);
    for (b in a)
      n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps)
      for (b in a = c.defaultProps, a)
        d[b] === void 0 && (d[b] = a[b]);
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
var jsxRuntime = createCommonjsModule(function(module) {
  {
    module.exports = reactJsxRuntime_production_min;
  }
});
var Fragment = jsxRuntime.Fragment;
var jsx = jsxRuntime.jsx;
var jsxs = jsxRuntime.jsxs;

// build/assets/components/FlexGap/FlexGap.js
var _excluded = ["forcePolyfill", "PolyfillElem"];
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
  } else {
    obj[key] = value;
  }
  return obj;
}
var toPx = (value) => {
  return typeof value === "number" ? `${value}px` : value;
};
var isSupported;
function checkFlexGapSupport() {
  var _flex$parentNode;
  if (isSupported !== void 0) {
    return isSupported;
  }
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";
  flex.style.position = "fixed";
  flex.style.minHeight = "0";
  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));
  document.body.appendChild(flex);
  isSupported = flex.scrollHeight === 1;
  (_flex$parentNode = flex.parentNode) === null || _flex$parentNode === void 0 ? void 0 : _flex$parentNode.removeChild(flex);
  return isSupported;
}
var FlexGap = ({
  Elem: _Elem = "div",
  direction: _direction = "horizontal",
  align: _align = "stretch",
  justify,
  grow,
  nestChildren: _nestChildren = true,
  wrap: _wrap = _direction === "horizontal",
  style,
  gap,
  vGap: _vGap = gap,
  hGap: _hGap = gap,
  gapSupport: _gapSupport = true,
  children
}) => {
  const pxGap_v = toPx(_vGap);
  const pxGap_h = toPx(_hGap);
  const isList = ["ul", "ol"].includes(_Elem);
  const cssDirection = {
    vertical: "column",
    "vertical-reverse": "column-reverse",
    horizontal: void 0,
    "horizontal-reverse": "row-reverse"
  };
  const cssAlign = {
    center: "center",
    top: "flex-start",
    bottom: "flex-end",
    stretch: void 0
  };
  return /* @__PURE__ */ jsxs(_Elem, {
    className: "FlexGap",
    "data-grow": grow,
    "data-wrap": _wrap,
    "data-nested-children": _nestChildren,
    "data-flex-gap-support": _gapSupport,
    style: _objectSpread({
      "--gap-v": pxGap_v,
      "--gap-h": pxGap_h,
      flexDirection: cssDirection[_direction],
      justifyContent: justify,
      alignItems: cssAlign[_align]
    }, style),
    children: [!_nestChildren && children, _nestChildren && (children === null || children === void 0 ? void 0 : children.filter(Boolean).map((child, i) => {
      const Child = isList ? "li" : "div";
      return /* @__PURE__ */ jsx(Child, {
        className: "C-FlexGap__child",
        children: child
      }, i);
    }))]
  });
};
var PolyfilledFlexGap = (_ref) => {
  let {
    forcePolyfill,
    PolyfillElem = "div"
  } = _ref, restProps = _objectWithoutProperties(_ref, _excluded);
  const [gapSupport, setGapSupport] = useState(true);
  useLayoutEffect(() => {
    setGapSupport(forcePolyfill ? false : checkFlexGapSupport());
  }, [forcePolyfill]);
  if (!gapSupport) {
    return /* @__PURE__ */ jsx(PolyfillElem, {
      className: "C-FlexGap__polyfillWrapper",
      children: /* @__PURE__ */ jsx(FlexGap, _objectSpread({
        gapSupport
      }, restProps))
    });
  }
  return /* @__PURE__ */ jsx(FlexGap, _objectSpread({
    gapSupport
  }, restProps));
};

// build/assets/utils/utilFunctions.js
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
  } else {
    obj[key] = value;
  }
  return obj;
}
var maxRolls = {
  d100: 100,
  d20: 20,
  d12: 12,
  d10: 10,
  d8: 8,
  d6: 6,
  d4: 4
};
var roll = (diceName = "d20") => {
  const maxRoll = typeof diceName === "string" ? maxRolls[diceName] : diceName;
  return Math.ceil(Math.random() * maxRoll);
};
var isRollObject = (tableRow) => Object.keys(tableRow || {}).includes("roll");
var getResult = (tableData, maxRoll) => {
  const result = roll(maxRoll);
  const findMatchingRow = (row) => {
    if (Array.isArray(row.roll)) {
      const isGreaterThanMin = row.roll[0] <= result;
      const isLessThanMax = row.roll[1] >= result;
      return isGreaterThanMin && isLessThanMax;
    } else {
      const isEqual = row.roll === result;
      return isEqual;
    }
  };
  if (isRollObject(tableData[0])) {
    const matchedRow = tableData.find((row) => findMatchingRow(row));
    return _objectSpread2(_objectSpread2({}, matchedRow), {}, {
      actualRoll: result
    });
  } else {
    return {
      roll: result,
      value: tableData[result - 1],
      actualRoll: result
    };
  }
};
function onSelectChange(setState) {
  return (e) => {
    const newValue = e.target.value;
    setState(newValue);
  };
}
function onCheckboxChange(setState) {
  return (e) => {
    setState(e.target.checked);
  };
}
function onNumberInputChange(setState) {
  return (e) => {
    const newValue = parseFloat(e.target.value) || 0;
    setState(newValue);
  };
}
var hasDecimals = (number) => number % 1 !== 0;
var abbreviatedNumber = (number) => hasDecimals(number) ? parseFloat(number.toFixed(2)) : number;

// build/assets/components/RollResult/RollResult.js
var critClass = (diceResult, maxRoll) => {
  if (diceResult === 1) {
    return "crit crit-fail";
  }
  return maxRoll === diceResult ? "crit crit-success" : "";
};
var RollResult = ({
  label,
  tableData,
  dSize
}) => {
  const [result, setResult] = useState();
  const [isTableVisible, setIsTableVisible] = useState(false);
  const maxRoll = typeof dSize === "string" ? maxRolls[dSize] : tableData.length;
  const handleRoll = () => {
    setResult(getResult(tableData, maxRoll));
  };
  const toggleTable = () => {
    setIsTableVisible(!isTableVisible);
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("tr", {
      className: "RollResult",
      children: [/* @__PURE__ */ jsx("th", {
        children: label
      }), /* @__PURE__ */ jsx("td", {
        children: tableData && (result === null || result === void 0 ? void 0 : result.actualRoll) && /* @__PURE__ */ jsxs("span", {
          className: critClass(result.actualRoll, maxRoll),
          children: ["[ ", result.actualRoll, " ]"]
        })
      }), /* @__PURE__ */ jsx("td", {
        children: result === null || result === void 0 ? void 0 : result.value
      }), /* @__PURE__ */ jsx("td", {
        children: /* @__PURE__ */ jsx("button", {
          onClick: handleRoll,
          children: "Roll"
        })
      }), /* @__PURE__ */ jsx("td", {
        children: /* @__PURE__ */ jsx("button", {
          onClick: toggleTable,
          "aria-expanded": isTableVisible,
          "aria-label": "Toggle table"
        })
      })]
    }), isTableVisible && tableData && /* @__PURE__ */ jsx("tr", {
      children: /* @__PURE__ */ jsx("td", {
        colSpan: 5,
        children: /* @__PURE__ */ jsxs("table", {
          children: [/* @__PURE__ */ jsx("thead", {
            children: /* @__PURE__ */ jsxs("tr", {
              children: [/* @__PURE__ */ jsx("th", {
                align: "right",
                children: "Number"
              }), /* @__PURE__ */ jsx("th", {
                align: "left",
                children: "Result"
              })]
            })
          }), /* @__PURE__ */ jsx("tbody", {
            children: tableData.map((row, index) => {
              if (isRollObject(row)) {
                const {
                  value,
                  roll: roll2
                } = row;
                const number = Array.isArray(roll2) ? `${roll2[0]} - ${roll2[1]}` : roll2;
                return /* @__PURE__ */ jsxs("tr", {
                  children: [/* @__PURE__ */ jsx("th", {
                    align: "right",
                    children: number
                  }), /* @__PURE__ */ jsx("td", {
                    align: "left",
                    children: value
                  })]
                }, number);
              } else {
                return /* @__PURE__ */ jsxs("tr", {
                  children: [/* @__PURE__ */ jsx("th", {
                    align: "right",
                    children: index + 1
                  }), /* @__PURE__ */ jsx("td", {
                    align: "left",
                    children: row
                  })]
                }, index);
              }
            })
          })]
        })
      })
    })]
  });
};

// build/assets/components/RollTableSet/RollTableSet.js
var RollTableSet = ({
  heading,
  children
}) => {
  return /* @__PURE__ */ jsx("div", {
    className: "RollTableSet",
    children: /* @__PURE__ */ jsxs(PolyfilledFlexGap, {
      direction: "vertical",
      children: [/* @__PURE__ */ jsx("h2", {
        children: heading
      }), /* @__PURE__ */ jsxs("table", {
        children: [/* @__PURE__ */ jsx("thead", {
          children: /* @__PURE__ */ jsxs("tr", {
            children: [/* @__PURE__ */ jsx("th", {
              children: "Trait"
            }), /* @__PURE__ */ jsx("th", {
              children: "Roll value"
            }), /* @__PURE__ */ jsx("th", {
              children: "Result"
            }), /* @__PURE__ */ jsx("th", {
              children: "Action"
            }), /* @__PURE__ */ jsx("th", {
              children: "Table"
            })]
          })
        }), /* @__PURE__ */ jsx("tbody", {
          children
        })]
      })]
    })
  });
};

// build/assets/data/travel/CarryCapacity.js
var generateCarryCapacity = ({
  strengthScore,
  creatureCount: _creatureCount = 1,
  isLarge: _isLarge = true,
  isSled: _isSled = false
}) => {
  const comfortableLimit = strengthScore * 5 * _creatureCount;
  const encumberedLimit = comfortableLimit + comfortableLimit;
  const heavilyEncumberedLimit = encumberedLimit + comfortableLimit;
  if (!_isLarge && !_isSled) {
    return {
      comfortableLimit,
      encumberedLimit,
      heavilyEncumberedLimit
    };
  }
  if (_isLarge && !_isSled || !_isLarge && _isSled) {
    return {
      comfortableLimit: comfortableLimit * 2,
      encumberedLimit: encumberedLimit * 2,
      heavilyEncumberedLimit: heavilyEncumberedLimit * 2
    };
  }
  return {
    comfortableLimit: comfortableLimit * 2 * 2,
    encumberedLimit: encumberedLimit * 2 * 2,
    heavilyEncumberedLimit: heavilyEncumberedLimit * 2 * 2
  };
};

// build/assets/data/travel/Creatures.js
var TravelMethod;
(function(TravelMethod2) {
  TravelMethod2["WALK"] = "Walking";
  TravelMethod2["SNOWSHOE"] = "Snow racket shoes";
  TravelMethod2["BIRD"] = "Axe Beak";
  TravelMethod2["DOG"] = "Dog";
  TravelMethod2["DEER"] = "Reindeer";
  TravelMethod2["BEAR"] = "Polar bear";
})(TravelMethod || (TravelMethod = {}));
var travelMethods = ["WALK", "SNOWSHOE", "DOG", "BIRD", "DEER", "BEAR"];
var creatureData = {
  WALK: {
    travelMethodCode: "WALK",
    str: 10,
    strMod: 0,
    carryCapacity: generateCarryCapacity({
      strengthScore: 10,
      isLarge: false
    }),
    cost: {
      own: 0,
      rent: 0
    },
    rationsPerLongRest: 1,
    survivalMod: 0,
    frostCheckMod: 0,
    isLarge: false,
    travelTimeReduction: 0.5
  },
  SNOWSHOE: {
    travelMethodCode: "SNOWSHOE",
    str: 10,
    strMod: 0,
    carryCapacity: generateCarryCapacity({
      strengthScore: 10,
      isLarge: false
    }),
    cost: {
      own: 2,
      rent: 0.2
    },
    rationsPerLongRest: 1,
    survivalMod: 0,
    frostCheckMod: 0,
    isLarge: false,
    travelTimeReduction: 1
  },
  DOG: {
    travelMethodCode: "DOG",
    str: 12,
    strMod: 1,
    carryCapacity: generateCarryCapacity({
      strengthScore: 12,
      isLarge: false
    }),
    cost: {
      own: 10,
      rent: 1
    },
    rationsPerLongRest: 0.5,
    survivalMod: 1,
    frostCheckMod: 1,
    isLarge: false,
    travelTimeReduction: 4,
    restInterval: 1
  },
  BIRD: {
    travelMethodCode: "BIRD",
    str: 20,
    strMod: 5,
    carryCapacity: generateCarryCapacity({
      strengthScore: 20
    }),
    cost: {
      own: 50,
      rent: 5
    },
    rationsPerLongRest: 1,
    survivalMod: 1,
    frostCheckMod: 2,
    isLarge: true,
    travelTimeReduction: 3,
    restInterval: 3
  },
  DEER: {
    travelMethodCode: "DEER",
    str: 16,
    strMod: 3,
    carryCapacity: generateCarryCapacity({
      strengthScore: 16
    }),
    cost: {
      own: 100,
      rent: 10
    },
    rationsPerLongRest: 2,
    survivalMod: 2,
    frostCheckMod: 1,
    isLarge: true,
    travelTimeReduction: 2
  },
  BEAR: {
    travelMethodCode: "BEAR",
    str: 30,
    strMod: 10,
    carryCapacity: generateCarryCapacity({
      strengthScore: 30
    }),
    cost: {
      own: 200,
      rent: 20
    },
    rationsPerLongRest: 3,
    survivalMod: 3,
    frostCheckMod: 3,
    isLarge: true,
    travelTimeReduction: 2
  }
};

// build/assets/data/travel/Sleds.js
var sledData = {
  XS: {
    size: "XS",
    costToOwn: 10,
    drivers: 1,
    passengers: 0,
    sledWeight: 30
  },
  S: {
    size: "S",
    costToOwn: 30,
    drivers: 1,
    passengers: 1,
    sledWeight: 50
  },
  M: {
    size: "M",
    costToOwn: 100,
    drivers: 1,
    passengers: 2,
    sledWeight: 100
  },
  L: {
    size: "L",
    costToOwn: 500,
    drivers: 1,
    passengers: 4,
    sledWeight: 300
  },
  XL: {
    size: "L",
    costToOwn: 1e3,
    drivers: 2,
    passengers: 10,
    sledWeight: 500
  }
};
var getSledCreatureComboData = (creatureCode, props) => {
  const travelCreature = creatureData[creatureCode];
  return props.map(({
    costToRent,
    sledSize,
    creatureCount
  }) => ({
    creatureCode,
    creature: travelCreature,
    creatureCount,
    sled: sledData[sledSize],
    sledCarryCapacity: generateCarryCapacity({
      strengthScore: travelCreature.str,
      creatureCount,
      isSled: true,
      isLarge: travelCreature.isLarge
    }),
    costToRent
  }));
};
var sledTravelMethodData = {
  WALK: null,
  SNOWSHOE: null,
  DOG: getSledCreatureComboData("DOG", [{
    creatureCount: 1,
    costToRent: 1,
    sledSize: "XS"
  }, {
    creatureCount: 2,
    costToRent: 3,
    sledSize: "XS"
  }, {
    creatureCount: 4,
    costToRent: 5,
    sledSize: "S"
  }, {
    creatureCount: 6,
    costToRent: 8,
    sledSize: "M"
  }]),
  BIRD: null,
  DEER: getSledCreatureComboData("DEER", [{
    creatureCount: 1,
    costToRent: 10,
    sledSize: "M"
  }, {
    creatureCount: 2,
    costToRent: 20,
    sledSize: "M"
  }, {
    creatureCount: 4,
    costToRent: 40,
    sledSize: "L"
  }, {
    creatureCount: 6,
    costToRent: 60,
    sledSize: "L"
  }]),
  BEAR: getSledCreatureComboData("BEAR", [{
    creatureCount: 1,
    costToRent: 20,
    sledSize: "M"
  }, {
    creatureCount: 2,
    costToRent: 40,
    sledSize: "L"
  }, {
    creatureCount: 4,
    costToRent: 80,
    sledSize: "XL"
  }, {
    creatureCount: 6,
    costToRent: 120,
    sledSize: "XL"
  }])
};

// build/assets/components/TravelCalculator/TravelCalculator.js
var _excluded2 = ["className", "children"];
function ownKeys3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys3(Object(source), true).forEach(function(key) {
        _defineProperty3(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys3(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties2(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Encomberance = {
  c: {
    label: "Comfortable",
    timeMultiplier: 1,
    limitName: "comfortableLimit"
  },
  e: {
    label: "Encombered",
    timeMultiplier: 1.5,
    limitName: "encumberedLimit"
  },
  he: {
    label: "Heavily Encombered",
    timeMultiplier: 2,
    limitName: "heavilyEncumberedLimit"
  },
  x: {
    label: `Can't Move`,
    timeMultiplier: 0,
    limitName: "x"
  }
};
var TravelCalculator = (_ref) => {
  let {
    className,
    children
  } = _ref, restProps = _objectWithoutProperties2(_ref, _excluded2);
  const [travelMethod, setTravelMethod] = useState("WALK");
  const [currentCreature, setCurrentCreature] = useState();
  const [isUsingSled, setIsUsingSled] = useState(true);
  const [isWilderness, setIsWilderness] = useState(false);
  const [isMountains, setIsMountains] = useState(false);
  const [encumbrance, setEncomberance] = useState();
  const [creatureCount, setCreatureCount] = useState(1);
  const [baseTravelHours, setBaseTravelHours] = useState(0);
  const [inventoryWeight, setInventoryWeight] = useState(0);
  const [currentEncomberance, setCurrentEncomberance] = useState("c");
  const [calculatedTravelHours, setCalculatedTravelHours] = useState(0);
  const [totalCalculatedTravelHours, setTotalCalculatedTravelHours] = useState(0);
  const onTravelSelect = onSelectChange(setTravelMethod);
  const onSledChange = onCheckboxChange(setIsUsingSled);
  const onCreatureCountChange = onNumberInputChange(setCreatureCount);
  const onBaseTravelHourChange = onNumberInputChange(setBaseTravelHours);
  const onInventoryWeightChange = onNumberInputChange(setInventoryWeight);
  useEffect(() => {
    setCurrentCreature(creatureData[travelMethod]);
  }, [travelMethod]);
  useEffect(() => {
    var _sledTravelMethodData;
    const sledTravelMethod = (_sledTravelMethodData = sledTravelMethodData[travelMethod]) === null || _sledTravelMethodData === void 0 ? void 0 : _sledTravelMethodData.find((x) => x.creature.travelMethodCode === travelMethod && x.creatureCount === creatureCount);
    if (creatureCount > 1 && sledTravelMethod) {
      setIsUsingSled(true);
    }
    if (isUsingSled) {
      if (!sledTravelMethod) {
        setIsUsingSled(false);
      } else {
        setEncomberance(sledTravelMethod.sledCarryCapacity);
      }
    } else {
      setEncomberance(creatureData[travelMethod].carryCapacity);
    }
  }, [travelMethod, isUsingSled, creatureCount]);
  useEffect(() => {
    if (encumbrance) {
      const {
        comfortableLimit,
        encumberedLimit,
        heavilyEncumberedLimit
      } = encumbrance;
      if (inventoryWeight <= comfortableLimit) {
        setCurrentEncomberance("c");
      } else if (inventoryWeight <= encumberedLimit) {
        setCurrentEncomberance("e");
      } else if (inventoryWeight <= heavilyEncumberedLimit) {
        setCurrentEncomberance("he");
      } else {
        setCurrentEncomberance("x");
      }
    }
  }, [encumbrance, inventoryWeight]);
  useEffect(() => {
    const {
      timeMultiplier: encomberanceMultiplier
    } = Encomberance[currentEncomberance];
    const {
      travelTimeReduction,
      restInterval
    } = creatureData[travelMethod];
    const terrainMultiplier = isMountains && 3 || isWilderness && 2 || 1;
    const totalTravelHours = baseTravelHours / travelTimeReduction * encomberanceMultiplier * terrainMultiplier;
    setCalculatedTravelHours(abbreviatedNumber(totalTravelHours));
    if (restInterval) {
      const restHours = Math.floor(totalTravelHours) / restInterval;
      setTotalCalculatedTravelHours(abbreviatedNumber(totalTravelHours + restHours));
    }
  }, [currentEncomberance, baseTravelHours, isWilderness, isMountains, travelMethod]);
  useEffect(() => {
    if (isMountains) {
      setIsWilderness(false);
    }
  }, [isMountains]);
  useEffect(() => {
    if (isWilderness) {
      setIsMountains(false);
    }
  }, [isWilderness]);
  return /* @__PURE__ */ jsxs("div", _objectSpread3(_objectSpread3({
    className
  }, restProps), {}, {
    children: [/* @__PURE__ */ jsx("h2", {
      children: "Travel calculator"
    }), /* @__PURE__ */ jsxs(PolyfilledFlexGap, {
      direction: "vertical",
      align: "center",
      justify: "center",
      children: [/* @__PURE__ */ jsxs(PolyfilledFlexGap, {
        children: [/* @__PURE__ */ jsxs("label", {
          children: [/* @__PURE__ */ jsx("span", {
            children: "Base travel hours"
          }), /* @__PURE__ */ jsx("input", {
            inputMode: "decimal",
            type: "text",
            value: baseTravelHours,
            onChange: onBaseTravelHourChange
          })]
        }), /* @__PURE__ */ jsxs("label", {
          children: [/* @__PURE__ */ jsx("span", {
            children: "Total inventory weight"
          }), /* @__PURE__ */ jsx("input", {
            inputMode: "decimal",
            type: "text",
            value: inventoryWeight,
            onChange: onInventoryWeightChange
          })]
        })]
      }), /* @__PURE__ */ jsxs(PolyfilledFlexGap, {
        children: [/* @__PURE__ */ jsx("select", {
          onChange: onCreatureCountChange,
          title: "Creature count",
          value: creatureCount,
          children: [1, 2, 4, 6].map((value) => {
            return /* @__PURE__ */ jsxs("option", {
              value,
              children: [value, "x"]
            }, value);
          })
        }), /* @__PURE__ */ jsx("select", {
          onChange: onTravelSelect,
          value: travelMethod,
          title: "Travel method",
          children: travelMethods.map((value) => {
            const label = TravelMethod[value];
            return /* @__PURE__ */ jsx("option", {
              value,
              children: label
            }, value);
          })
        })]
      }), /* @__PURE__ */ jsxs(PolyfilledFlexGap, {
        children: [/* @__PURE__ */ jsxs("label", {
          children: [/* @__PURE__ */ jsx("span", {
            children: "Sled?"
          }), /* @__PURE__ */ jsx("input", {
            type: "checkbox",
            checked: isUsingSled,
            onChange: onSledChange
          })]
        }), /* @__PURE__ */ jsxs("label", {
          children: [/* @__PURE__ */ jsx("span", {
            children: "Wilderness?"
          }), /* @__PURE__ */ jsx("input", {
            type: "checkbox",
            checked: isWilderness,
            onChange: onCheckboxChange(setIsWilderness)
          })]
        }), /* @__PURE__ */ jsxs("label", {
          children: [/* @__PURE__ */ jsx("span", {
            children: "Mountains?"
          }), /* @__PURE__ */ jsx("input", {
            type: "checkbox",
            checked: isMountains,
            onChange: onCheckboxChange(setIsMountains)
          })]
        })]
      }), /* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsxs("p", {
          children: [/* @__PURE__ */ jsx("strong", {
            children: "Total travel time:"
          }), " ", calculatedTravelHours, " hours", Boolean(currentCreature === null || currentCreature === void 0 ? void 0 : currentCreature.restInterval) && /* @__PURE__ */ jsxs(Fragment, {
            children: [/* @__PURE__ */ jsx("br", {}), "(Creature must rest every ", currentCreature === null || currentCreature === void 0 ? void 0 : currentCreature.restInterval, " hours)", /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("strong", {
              children: "Plus rests:"
            }), " ", totalCalculatedTravelHours, " hours"]
          })]
        }), /* @__PURE__ */ jsxs("p", {
          children: [/* @__PURE__ */ jsx("strong", {
            children: "Encomberance:"
          }), " ", Encomberance[currentEncomberance].label, " (", Encomberance[currentEncomberance].timeMultiplier, "x)"]
        })]
      }), /* @__PURE__ */ jsxs("ul", {
        children: [/* @__PURE__ */ jsxs("li", {
          children: [/* @__PURE__ */ jsx("strong", {
            children: "Comfortable limit"
          }), " ", encumbrance === null || encumbrance === void 0 ? void 0 : encumbrance.comfortableLimit]
        }), /* @__PURE__ */ jsxs("li", {
          children: [/* @__PURE__ */ jsx("strong", {
            children: "Encombered limit"
          }), " ", encumbrance === null || encumbrance === void 0 ? void 0 : encumbrance.encumberedLimit]
        }), /* @__PURE__ */ jsxs("li", {
          children: [/* @__PURE__ */ jsx("strong", {
            children: "Heavily Encombered limit"
          }), " ", encumbrance === null || encumbrance === void 0 ? void 0 : encumbrance.heavilyEncumberedLimit]
        })]
      })]
    })]
  }));
};

// build/assets/data/Arctic-encounters/activityBeast.js
var activityBeast = [
  "Sees the PCs and charges",
  "Has the sent of the PCs",
  "Sniffing around for food",
  "Freshly killed something",
  "Fighting a creature (roll creature table again)",
  "Burrowing in the snow",
  "Nesting / about to sleep",
  "Eating a carcass",
  "Roaming around",
  `Grooming another of it's kind`,
  "Licking wounds (injured)",
  "Sleeping"
];

// build/assets/data/Arctic-encounters/activityHumanoid.js
var activityHumanoid = [
  "Spot the PCs and attack",
  "Patrolling / Standing guard",
  "Chasing / fighting a creature",
  "Inspecting a map",
  "Gambling / playing games",
  "Sparring / fighting each other",
  "Cooking / eating / drinking",
  "Singing / joking / laughing",
  "Drunk on alcohol",
  "Arguing with each other",
  "Tending to their wounds (injured)",
  "Sleeping"
];

// build/assets/data/Arctic-encounters/creatures.js
var creatures = [
  /* @__PURE__ */ jsx("a", {
    href: "https://www.dndbeyond.com/sources/idrotf/icewind-dale#Arveiaturace",
    children: "Arveiaturace (Ancient white dragon)"
  }),
  /* @__PURE__ */ jsx("a", {
    href: "https://www.dndbeyond.com/monsters/remorhaz",
    children: "Remorhaz"
  }),
  /* @__PURE__ */ jsx("a", {
    href: "https://www.dndbeyond.com/monsters/frost-giant",
    children: "Frost Giant(s)"
  }),
  /* @__PURE__ */ jsx("a", {
    href: "https://www.dndbeyond.com/monsters/water-elemental",
    children: "Ice (water) Elemental"
  }),
  /* @__PURE__ */ jsx("a", {
    href: "https://www.dndbeyond.com/monsters/ice-troll",
    children: "Ice Troll"
  }),
  /* @__PURE__ */ jsx("a", {
    href: "https://www.dndbeyond.com/monsters/yeti",
    children: "Yeti"
  }),
  /* @__PURE__ */ jsx("a", {
    href: "https://www.dndbeyond.com/monsters/snow-golem",
    children: "Snow Golem"
  }),
  /* @__PURE__ */ jsx("a", {
    href: "https://www.dndbeyond.com/monsters/dire-wolf",
    children: "Pack of 5 Arctic Dire Wolves"
  }),
  /* @__PURE__ */ jsx("a", {
    href: "https://www.dndbeyond.com/monsters/gnoll",
    children: "Squad of 4 Gnolls"
  }),
  /* @__PURE__ */ jsx("a", {
    href: "https://www.dndbeyond.com/monsters/saber-toothed-tiger",
    children: "Awakened Saber Toothed Tiger"
  }),
  /* @__PURE__ */ jsx("a", {
    href: "https://www.dndbeyond.com/monsters/crag-cat",
    children: "Crag Cat"
  }),
  /* @__PURE__ */ jsx("a", {
    href: "https://www.dndbeyond.com/monsters/snowy-owlbear",
    children: "Snowy Owlbear"
  }),
  /* @__PURE__ */ jsx("a", {
    href: "https://www.dndbeyond.com/monsters/gelatinous-cube-giant-ooze-variant",
    children: "Frost Ooze"
  }),
  /* @__PURE__ */ jsx("a", {
    href: "https://www.dndbeyond.com/monsters/polar-bear",
    children: "Polar Bear"
  }),
  /* @__PURE__ */ jsx("a", {
    href: "https://www.dndbeyond.com/monsters/yeti-tyke",
    children: "Yeti tyke"
  }),
  /* @__PURE__ */ jsx("a", {
    href: "https://www.dndbeyond.com/monsters/ice-mephit",
    children: "3 Ice Mephits"
  }),
  /* @__PURE__ */ jsx("a", {
    href: "https://www.dndbeyond.com/monsters/axe-beak",
    children: "Wild Axe Beak"
  }),
  /* @__PURE__ */ jsx("a", {
    href: "https://www.dndbeyond.com/sources/idrotf/appendix-c-creatures#Reindeer",
    children: "Reindeer"
  }),
  /* @__PURE__ */ jsx("a", {
    href: "https://www.dndbeyond.com/monsters/fox",
    children: "Snow Fox"
  }),
  /* @__PURE__ */ jsx("a", {
    href: "https://www.dndbeyond.com/monsters/chwinga",
    children: "Chwinga"
  })
];

// build/assets/data/npcs/age.js
var age = [{
  roll: 1,
  value: "Baby"
}, {
  roll: [2, 5],
  value: "Young child"
}, {
  roll: [6, 25],
  value: "Teenager"
}, {
  roll: [26, 55],
  value: "Young Adult"
}, {
  roll: [56, 80],
  value: "Middle aged"
}, {
  roll: [81, 99],
  value: "Old"
}, {
  roll: 100,
  value: "Ancient"
}];

// build/assets/data/npcs/personality.js
var personality = [{
  roll: 1,
  value: "Addict"
}, {
  roll: 2,
  value: "Adorable"
}, {
  roll: 3,
  value: "Annoyed"
}, {
  roll: 4,
  value: "Authoritative"
}, {
  roll: 5,
  value: "Massive mood swings (Bi-Polar)"
}, {
  roll: 6,
  value: "Blunt (no filter)"
}, {
  roll: 7,
  value: "Bossy"
}, {
  roll: 8,
  value: "Show no sympathy (Callous)"
}, {
  roll: 9,
  value: "Careless"
}, {
  roll: 10,
  value: "Casual"
}, {
  roll: 11,
  value: "Charitable"
}, {
  roll: 12,
  value: "Cheerful"
}, {
  roll: 13,
  value: "Childlike"
}, {
  roll: 14,
  value: "Clean Freak"
}, {
  roll: 15,
  value: "Clumsy"
}, {
  roll: 16,
  value: "Cocky"
}, {
  roll: 17,
  value: "Crazy"
}, {
  roll: 18,
  value: "Curious"
}, {
  roll: 19,
  value: "Daring / Determined"
}, {
  roll: 20,
  value: "Deaf"
}, {
  roll: 21,
  value: "Demanding"
}, {
  roll: 22,
  value: "Dignified"
}, {
  roll: 23,
  value: "Disagreeable"
}, {
  roll: 24,
  value: "Elegant"
}, {
  roll: 25,
  value: "Overly emotional"
}, {
  roll: 26,
  value: "Emotionless"
}, {
  roll: 27,
  value: "Empathetic"
}, {
  roll: 28,
  value: "Envious"
}, {
  roll: 29,
  value: "Excited"
}, {
  roll: 30,
  value: "Fanciful"
}, {
  roll: 31,
  value: "Drunk"
}, {
  roll: 32,
  value: "Foolish"
}, {
  roll: 33,
  value: "Forgetful"
}, {
  roll: 34,
  value: "Friendly"
}, {
  roll: 35,
  value: "Frightened"
}, {
  roll: 36,
  value: "Frugal (hates spending money)"
}, {
  roll: 37,
  value: "Gambles over everything"
}, {
  roll: 38,
  value: "Generous"
}, {
  roll: 39,
  value: "Gossiper"
}, {
  roll: 40,
  value: "Greedy"
}, {
  roll: 41,
  value: "Gullible"
}, {
  roll: 42,
  value: "Hates Adventurers"
}, {
  roll: 43,
  value: "Helpful"
}, {
  roll: 44,
  value: "Honest (too honest)"
}, {
  roll: 45,
  value: "Humble"
}, {
  roll: 46,
  value: "Humorous"
}, {
  roll: 47,
  value: "Mysterious"
}, {
  roll: 48,
  value: "Impatient"
}, {
  roll: 49,
  value: "Impressionable"
}, {
  roll: 50,
  value: "Insecure"
}, {
  roll: 51,
  value: "Insulting"
}, {
  roll: 52,
  value: "Irritated by specific PC"
}, {
  roll: 53,
  value: "Know-It-All"
}, {
  roll: 54,
  value: "Maternal"
}, {
  roll: 55,
  value: "Mellow / Chill / Layed back"
}, {
  roll: 56,
  value: "Misguided / Wrong about something"
}, {
  roll: 57,
  value: "Morbid / Gloomy"
}, {
  roll: 58,
  value: "Murderous"
}, {
  roll: 59,
  value: "Has no friends"
}, {
  roll: 60,
  value: "Negotiator"
}, {
  roll: 61,
  value: "Nurturing"
}, {
  roll: 62,
  value: "Old Fashioned"
}, {
  roll: 63,
  value: "Ominous"
}, {
  roll: 64,
  value: "Organized / OCD"
}, {
  roll: 65,
  value: "Overly Genuine / Attentive"
}, {
  roll: 66,
  value: "Overly Feminine"
}, {
  roll: 67,
  value: "Overly Masculine"
}, {
  roll: 68,
  value: "Overly Nurturing"
}, {
  roll: 69,
  value: "Paranoid"
}, {
  roll: 70,
  value: "Perfectionist"
}, {
  roll: 71,
  value: "Perverted"
}, {
  roll: 72,
  value: "Physically Affectionate"
}, {
  roll: 73,
  value: "Polite"
}, {
  roll: 74,
  value: "Possessive"
}, {
  roll: 75,
  value: "Prejudiced"
}, {
  roll: 76,
  value: "Presumptuous"
}, {
  roll: 77,
  value: "Quiet"
}, {
  roll: 78,
  value: "Reckless / Risky"
}, {
  roll: 79,
  value: "Religious"
}, {
  roll: 80,
  value: "Avoids eye contact (Reserved)"
}, {
  roll: 81,
  value: "Rowdy (party animal)"
}, {
  roll: 82,
  value: "Sarcastic"
}, {
  roll: 83,
  value: "Sassy"
}, {
  roll: 84,
  value: "Scared of Adventurers"
}, {
  roll: 85,
  value: "Secretive"
}, {
  roll: 86,
  value: "Self-Conscious"
}, {
  roll: 87,
  value: "Self-loathing"
}, {
  roll: 88,
  value: "Shy"
}, {
  roll: 89,
  value: "Slob / Sloppy"
}, {
  roll: 90,
  value: "Sly / Smooth"
}, {
  roll: 91,
  value: "Sorrowful (recent loss)"
}, {
  roll: 92,
  value: "Stern (lots of rules)"
}, {
  roll: 93,
  value: "Stubborn"
}, {
  roll: 94,
  value: "Stylish"
}, {
  roll: 95,
  value: "Superstitious"
}, {
  roll: 96,
  value: "Thoughtful"
}, {
  roll: 97,
  value: "Threatening"
}, {
  roll: 98,
  value: "Vain (obsessed about how good they look)"
}, {
  roll: 99,
  value: "Well-Traveled (knows locations)"
}, {
  roll: 100,
  value: "World is Ending"
}];

// build/assets/data/npcs/quirks.js
var quirks = [{
  roll: 1,
  value: "Always very dirty and smells bad"
}, {
  roll: 2,
  value: "Off their rocker... truly unique"
}, {
  roll: 3,
  value: "Absolutely cannot swim"
}, {
  roll: 4,
  value: "Pretends to have greater riches"
}, {
  roll: 5,
  value: "Adrenaline junkie, always wants to be in danger"
}, {
  roll: 6,
  value: "Addicted to some type of substance"
}, {
  roll: 7,
  value: "Afraid of *element* (1 water / 2 fire / 3 lightning / 4 forests)"
}, {
  roll: 8,
  value: "Afraid of animal (harmless or not)"
}, {
  roll: 9,
  value: "Afraid of heights"
}, {
  roll: 10,
  value: "Terrified of the dark"
}, {
  roll: 11,
  value: "In debt to bad people"
}, {
  roll: 12,
  value: "Bad memory"
}, {
  roll: 13,
  value: "Believes literally everything they hear"
}, {
  roll: 14,
  value: "Can see dead people / spirits"
}, {
  roll: 15,
  value: "Only speaks a non-common language"
}, {
  roll: 16,
  value: "Cannot tell a lie"
}, {
  roll: 17,
  value: "Character gets very emotional very easily"
}, {
  roll: 18,
  value: "Character is a HUGE flirt"
}, {
  roll: 19,
  value: "Is a compulsive hoarder"
}, {
  roll: 20,
  value: "Animal lover who is inept with animals"
}, {
  roll: 21,
  value: "Claustrophobic / Afraid of heights"
}, {
  roll: 22,
  value: "Compulsive Liar"
}, {
  roll: 23,
  value: "Deathly Allergic to (*specific common food item*)"
}, {
  roll: 24,
  value: "Borderline fatal allergy to something common"
}, {
  roll: 25,
  value: "Ambivalent to gold, not moved by money at all"
}, {
  roll: 26,
  value: "Photo-sensitive epileptic seizures"
}, {
  roll: 27,
  value: 'Everything is "magical" and they say so'
}, {
  roll: 28,
  value: `Everything is mundane, magic doesn't exist`
}, {
  roll: 29,
  value: "Extremely religious, praises their deity"
}, {
  roll: 30,
  value: "Trouble focusing on one thing at a time (ADD)"
}, {
  roll: 31,
  value: "Extremely old, possibly senile"
}, {
  roll: 32,
  value: "Has multiple personalities, shifts between them (roll 2+ personality traits)"
}, {
  roll: 33,
  value: "Evangelical, always trying to convert others"
}, {
  roll: 34,
  value: "Extremely short temper / anger issues"
}, {
  roll: 35,
  value: "Is always unprepared and never ready"
}, {
  roll: 36,
  value: "Extremely sceptical, distrusts everyone"
}, {
  roll: 37,
  value: "Eyes glow when they tell a lie"
}, {
  roll: 38,
  value: "Addicted to magical healing"
}, {
  roll: 39,
  value: "Gluttonous, always eating or drinking"
}, {
  roll: 40,
  value: "Has a crush on one of the Players"
}, {
  roll: 41,
  value: "Cursed (Roll on curses table)"
}, {
  roll: 42,
  value: "Paranoid their Dark Secret will come out"
}, {
  roll: 43,
  value: `Is posing as someone they're not`
}, {
  roll: 44,
  value: "Has a nervous tick / shaky hands"
}, {
  roll: 45,
  value: "Thinks their stuffed pet is alive"
}, {
  roll: 46,
  value: "Secretly royalty in hiding"
}, {
  roll: 47,
  value: "Extremely over the top attractive"
}, {
  roll: 48,
  value: "Has two competing personalities (Roll personality trait twice)"
}, {
  roll: 49,
  value: "Has vivid auditory hallucinations"
}, {
  roll: 50,
  value: "Has vivid visual hallucinations"
}, {
  roll: 51,
  value: "Has a terminal illness (is there even a cure?)"
}, {
  roll: 52,
  value: "Veteran of many wars, possible PTSD"
}, {
  roll: 53,
  value: "Hates all non-humanoid living creatures"
}, {
  roll: 54,
  value: "Hears voices in their head (real or imagined)"
}, {
  roll: 55,
  value: `Anterograde amnesia (can't form new memories)`
}, {
  roll: 56,
  value: "Always carries a fragile, sentimental heirloom"
}, {
  roll: 57,
  value: "Insomniac that’s afraid to go to sleep"
}, {
  roll: 58,
  value: "Must make monthly payments to square a debt"
}, {
  roll: 59,
  value: "Is a convicted felon that is hiding from authorities"
}, {
  roll: 60,
  value: "Utterly unbelievably unlucky. Possibly cursed?"
}, {
  roll: 61,
  value: "Is completely Blind"
}, {
  roll: 62,
  value: "Is completely Deaf"
}, {
  roll: 63,
  value: "Is completely Mute"
}, {
  roll: 64,
  value: "Demonic possession, gives another quirk (reroll)"
}, {
  roll: 65,
  value: "Secret celestial, watching one of the Players"
}, {
  roll: 66,
  value: "Illiterate / speaks with a low vocabulary"
}, {
  roll: 67,
  value: "Jumpy and easily startled, uneasy"
}, {
  roll: 68,
  value: "Kleptomaniac and always looks to steal things"
}, {
  roll: 69,
  value: "Knows something secret about the party or a PC"
}, {
  roll: 70,
  value: `Time is nearly up on their Devil's Bargain`
}, {
  roll: 71,
  value: "Severe scarring causes them pain when ___"
}, {
  roll: 72,
  value: "Missing a limb / body part of some kind"
}, {
  roll: 73,
  value: "Must always be clean and HATES being dirty"
}, {
  roll: 74,
  value: "Narcoleptic (Can fall asleep at any moment)"
}, {
  roll: 75,
  value: "Extremely near sighted"
}, {
  roll: 76,
  value: "Oddly sweaty for no reason"
}, {
  roll: 77,
  value: "Paranoid of something after them (crazy)"
}, {
  roll: 78,
  value: "Plotting to kill one of the other party members"
}, {
  roll: 79,
  value: "Poor Hearing"
}, {
  roll: 80,
  value: `Non-Paladin who follows a paladin's code of honor`
}, {
  roll: 81,
  value: "Mocks others through mimicry"
}, {
  roll: 82,
  value: "They know you are being hunted by an assassin"
}, {
  roll: 83,
  value: "Secretly works for a secret group / organization"
}, {
  roll: 84,
  value: "Shaky hands, but only when _____ happens"
}, {
  roll: 85,
  value: "Take far too long to say anything"
}, {
  roll: 86,
  value: "Speaks only telepathically through touch"
}, {
  roll: 87,
  value: "Literally JUST killed a man, still cleaning up"
}, {
  roll: 88,
  value: "Squeamish and vomits easily"
}, {
  roll: 89,
  value: "Strong dislike of cold"
}, {
  roll: 90,
  value: "Strong dislike of heat"
}, {
  roll: 91,
  value: "Pyromaniac"
}, {
  roll: 92,
  value: "Severe burns across a large section of their body"
}, {
  roll: 93,
  value: "Unreliable and clumsy, always breaking stuff"
}, {
  roll: 94,
  value: "Very confident in their poor instrument playing"
}, {
  roll: 95,
  value: "Vocal cord injury and has restricted speech"
}, {
  roll: 96,
  value: "Will not speak to the opposite sex"
}, {
  roll: 97,
  value: "Would do just about anything for gold"
}, {
  roll: 98,
  value: "Refuses to speak to magic users"
}, {
  roll: 99,
  value: "Compulsive altruist, must always help the needy"
}, {
  roll: 100,
  value: `Is to blame for a PC's tragedy`
}];

// build/assets/data/npcs/races.js
var races = [{
  roll: 1,
  value: "Half-orc"
}, {
  roll: [2, 40],
  value: "Human"
}, {
  roll: [41, 70],
  value: "Dwarf"
}, {
  roll: [71, 85],
  value: "Goliath"
}, {
  roll: [86, 90],
  value: "Triton"
}, {
  roll: [91, 95],
  value: "Halfling"
}, {
  roll: 96,
  value: "Gnome"
}, {
  roll: 97,
  value: "Tiefling"
}, {
  roll: 98,
  value: "Dragonborn"
}, {
  roll: 99,
  value: "Half-Elf"
}, {
  roll: 100,
  value: "Elf"
}];

// build/assets/data/npcs/sex.js
var sex = [{
  roll: [1, 2],
  value: "Male"
}, {
  roll: [3, 4],
  value: "Female"
}];

// build/assets/data/other/curses.js
var curses = [{
  roll: 1,
  value: "The character cannot turn right until the curse is lifted. "
}, {
  roll: 2,
  value: "Characters feet always sink at least 1 inch into any surface they walk on (this at least accounts for walking on water, as in if they try to walk on water they sink normally)"
}, {
  roll: 3,
  value: "All [food] type becomes tasteless (meat, vegetables, fruit)"
}, {
  roll: 4,
  value: "When the character fires a ranged weapon, the ammunition always breaks on impact (no effect on damage)"
}, {
  roll: 5,
  value: "Until the curse is lifted, when the character falls to 0hp, roll a D100. If you roll equal to or below the CR of the creature that cursed you, you instantly die."
}, {
  roll: 6,
  value: "A player must close every door they walk through, even if there are people behind them."
}, {
  roll: 7,
  value: "A player’s weapon becomes lodged inside the body of their enemy after any stab attack, a strength check (DC 15) is needed to free the weapon."
}, {
  roll: 8,
  value: "A player’s weapons become twice as heavy, requiring two actions to strike once, until the curse is lifted."
}, {
  roll: 9,
  value: "A player is stalked by an imp, who simply follows him, saying nothing, always staring. No one else can see the imp. "
}, {
  roll: 10,
  value: "The player’s backpack is enchanted, to always give the player an item they needed in the past, but never what they will need in the future or present."
}, {
  roll: 11,
  value: "The next item the cursed player grabs is bound to them forever, they can never get rid of it."
}, {
  roll: 12,
  value: "Everytime the cursed character kills someone stealthily, the slain thing lets out an incredibly loud scream that can be heard from 500 ft away, even if it wouldn’t be possible for the dead thing to scream."
}, {
  roll: 13,
  value: "Character takes on the appearance and smell of being undead, but isn’t."
}, {
  roll: 14,
  value: "Characters must only answer questions with lies, unless they are asked about the reason for their behaviour (ex: “are you cursed?” “Are you lying on purpose?”) In which case they must respond in the affirmative."
}, {
  roll: 15,
  value: "Characters must agree to every suggestion or request made within 30 feet of them. Curse is broken after a week."
}, {
  roll: 16,
  value: "The cursed character takes 1 damage whenever a creature within 30 feet of them takes any damage."
}, {
  roll: 17,
  value: "Character cannot willingly kill/spare the life of any living creature (choose depending on character personality)."
}, {
  roll: 18,
  value: "Character becomes incapable of visually perceiving living creatures."
}, {
  roll: 19,
  value: "Characters low-light vision and high-light vision switch (i.e. sunlight is effectively dark, but can see areas in shadow as if they were brightly lit)."
}, {
  roll: 20,
  value: "Roll a d100. After the amount of dies shown on dice, the character explodes for (as per a 5th level Fireball) the next time they take a long rest, then is immediately put under the effects of a Reincarnation spell. The cycle continues until a Wish spell dispels it."
}, {
  roll: 21,
  value: "Character is struck with blindness, but can accurately identify objects by taste through the air up to 60 feet away."
}, {
  roll: 22,
  value: "Butt switches place with face. Switches every time either orifice expels any substance."
}, {
  roll: 23,
  value: "Your CHA stat becomes your CHAR stat, determining your effectiveness at cooking up a mean barbeque. Reflavour spells and skill checks accordingly."
}, {
  roll: 24,
  value: "When the target of the curse next goes to sleep, they dream of a burning lake. The dreams progress, becoming nightmares over time. The target instinctively becomes aware of the direction of the lake, and must save vs Wis or spend that day trying to reach the lake. The target must save every day to prevent the condition progressing, taking a penalty to mental rolls for every stage it advances. To completely recover, the target must make 3 saves in a row, if they fail a save it regresses to its initial condition, and if they fail 3 times in a row the target becomes maddened until they reach the lake. Upon reaching the lake they will see it is not engulfed in flames, and will take d6 Psychic damage for the number of days they have been affected by the urges."
}, {
  roll: 25,
  value: "The first ritual performed after being cursed succeeds instantly, but when they next sleep the target must save vs. Con. If they fail, their skin dries and their body catches alight, taking d6 damage per turn. The fire can be put out by magical or mundane conventions."
}, {
  roll: 26,
  value: "The cursed begins aging at 5 years an hour. When they reach 100 years, they die, and an infant crawls from their body’s clothing. It continues to age at the same rate until it reaches 20. Same character, same memories."
}, {
  roll: 27,
  value: "As the curse is activated, the target’s hands detach from their wrists and scuttle away, and new hands grow in their place. For the rest of the day, every time they cast a spell, the same thing happens. The hands remain animate until destroyed, and will do their best to make terrible mischief."
}, {
  roll: 28,
  value: "A thunderous voice narrates everything the cursed does, says, or thinks for the next d4 hours."
}, {
  roll: 29,
  value: "For the next d4 days, every time the cursed attempts to speak, including to cast a spell, they must Save vs Int or instead deliver a lengthy and discursive monologue on: 1: bean cultivation; 2: the daily schedule of an emperor who died thousands of years ago; 3: the spiritual beliefs of spiders; 4: the life cycle of the cherub; 5: the various manias, phobias, or perversions of the nearest, most powerful monarch; 6: the correct method of preparing, storing, and administering a heretofore unknown and spectacularly deadly poison; 7: the best tourist destinations in the nearest village; 8: famous fish poets; 9: the dangers of breathing; 10: the magical properties of cheese; On a repeated roll, the target must continue their lecture from where they left off before."
}, {
  roll: 30,
  value: "Until the curse is lifted the character constantly sniffs and has a runny nose. Disadvantage on stealth, persuasion and deception checks."
}, {
  roll: 31,
  value: "Character can not control the volume at which he speaks. Player rolls a D6 every time their character speaks, even rolls are spoken in a whisper, odd rolls are shouting."
}, {
  roll: 32,
  value: "Animals and children are always aware of your presence and are able to locate you without difficulty."
}, {
  roll: 33,
  value: "“Curse of Popularity” – In populated area with non-hostile NPCs, everyone knows who you are and will not leave you alone. Roll a charisma check/save (DC varies). If failed, you are viewed in an unfavorable light. If passed, you are viewed in a favorable one."
}, {
  roll: 34,
  value: "Everytime a player deals damage the same amount is reflected back to a random party member."
}, {
  roll: 35,
  value: "All food and drink consumed immediately tastes of rotten flesh a successful con save of DC 15 can overcome this taste. "
}, {
  roll: 36,
  value: "Whenever the PC comes into a hallway/corridor they are compelled to Sprint at full speed to the end. Will save to resist at DMs discretion."
}, {
  roll: 37,
  value: "The PC must only speak in rhyme."
}, {
  roll: 38,
  value: "The PC gains a new fear based on popular vote of the party until dispelled."
}, {
  roll: 39,
  value: "All the player’s equipment glows brightly for 24 hours. All of it."
}, {
  roll: 40,
  value: "The player becomes magnetic."
}, {
  roll: 41,
  value: "It is always raining in a 5ft cube around the player. The intensity randomly varies from a drizzle to a downpour and can exist even underwater or indoors."
}, {
  roll: 42,
  value: "The character finds themselves unable to open any containers or doors which require a twisting motion."
}, {
  roll: 43,
  value: "The character perceives traps everywhere where none exist."
}, {
  roll: 44,
  value: "The cursed becomes lactose intolerant. Consuming any dairy leads to 1d4 hour(s) of insufferable gas & diarrhea."
}, {
  roll: 45,
  value: "The player must compulsively juggle items any time the player has two or more of an object in easy reach. DC 10+the number of items being juggled Acrobatics check, or an item gets dropped, with appropriate consequences."
}, {
  roll: 46,
  value: "Boots squeak loudly with each step."
}, {
  roll: 47,
  value: "Effects of alcohol are heavily amplified, so that even drinking one drop of a fairly weak alcoholic beverage will make the PC drunk. Drinking a full glass of a strong alcoholic beverage could potentially cause death."
}, {
  roll: 48,
  value: "All of the PC’s armor and clothing teleported off their body and always floats just out of reach. Any attempt to put on other clothing or armor produces the same effect."
}, {
  roll: 49,
  value: "Character’s known languages are randomly determined after a long rest. Roll 1d8 per standard language known & 1d8 per exotic language known. You decide whether to exclude common from these rolls or not."
}, {
  roll: 50,
  value: "After a long rest a random amount of GP the character is carrying is randomly changed to an amount of either Electrum, Silver or Copper pieces of the same worth, increasing number of coins. eg. (1d20 Amount, Roll 1d6 to determine type) Won’t take long for pockets to become overflowing if character doesn’t spend loose change."
}, {
  roll: 51,
  value: "Any divination spells where the caster or target is within a certain range of a character are retargeted to that character."
}, {
  roll: 52,
  value: "The cursed begins to weep tears of blood uncontrollably, reducing their hit point maximum by 1 for every hour the curse remains active. The cursed dies if this effect reduces its hit point maximum to 0."
}, {
  roll: 53,
  value: "The cursed is compelled to repeat the last word of each sentence they say 3 times, each time speaking a little bit softer than the last. If the curse remains active for more than 24 hours, the cursed is compelled to dramatically flick their hands open and closed with each echo."
}, {
  roll: 54,
  value: "Cursed characters are hated by all cats until cured. Every cat will hiss and attempt to swipe and bite the character. Irregardless of the cat is successful or not the cat will run away and hide. If the cat is successful in the attack any wounds caused will not heal (even with healing spells and potions) and will continuously weep foul smelling pus."
}, {
  roll: 55,
  value: "The character cannot be convinced by any means that magic exists. They rationalize magical events away by using insane, impossible logic."
}, {
  roll: 56,
  value: "The character believes themselves to have swapped bodies with the nearest person. Nothing has happened."
}, {
  roll: 57,
  value: "One of the character’s limbs no longer has any bones. It flops around uselessly until the bones have successfully regrown in 1d4 days."
}, {
  roll: 58,
  value: "The character is unable to sleep when others are sleeping in a 60′ radius."
}, {
  roll: 59,
  value: "Once the character has fallen asleep they cannot be awoken by any non-magical means until 8 hours have passed."
}, {
  roll: 60,
  value: "The character must consume 1d4+1 times the amount of food and drink a normal person does do sustain themselves. They experience terrible thirst and hunger pains. Treat as exhaustion if they do not actively maintain this regimen."
}, {
  roll: 61,
  value: "The character cannot see anyone within 10 feet of them."
}, {
  roll: 62,
  value: "The character finds a wooden spoon in their bag. Every time they retrieve an item they find another wooden spoon. Every time they investigate an area they find another wooden spoon. Every time the search a body they find another wooden spoon. If they intentionally attempt to locate, retrieve, or use a spoon the task is impossible."
}, {
  roll: 63,
  value: "Incapable of ignoring direct orders given to their person."
}, {
  roll: 64,
  value: "When splashed with cold water transforms the character into the opposite gender. Warm water temporarily reverses the transition."
}, {
  roll: 65,
  value: "Must make one significant lie per day."
}, {
  roll: 66,
  value: "Automatically fails all swimming checks; it’s as if the character weights 10 times their normal weight while in water."
}, {
  roll: 67,
  value: "Turned into a lycanthrope… with the form of a rabbit."
}, {
  roll: 68,
  value: "All creatures of a specific species are invisible to the character."
}, {
  roll: 69,
  value: "A perpetually magical darkness surrounds the character for 25 feet. It is transmittable by touch."
}, {
  roll: 70,
  value: "When killed for the first time each day, the wounds heal and they instead stabilize. If they are not killed once a day, they are permanently slain."
}, {
  roll: 71,
  value: "Makes an unarmed attack against themselves whenever they say ‘what’."
}, {
  roll: 72,
  value: "Characters ears and eyes switch place. PC cannot look straight ahead. This lasts until the next full day ends."
}, {
  roll: 73,
  value: "PC summons a little foot tall naked man with a hat that goofs around and makes as much noise as possible. Everyone can hear him and see his impact in the area, but cannot see him. He has no name and will not speak back. He just speaks in sounds and screams."
}, {
  roll: 74,
  value: "PC thinks their eyes have the same effect as a beholder and use them as much as possible in combat."
}, {
  roll: 75,
  value: "PCs teeth are as weak as glass."
}, {
  roll: 76,
  value: "PCs weapon changes to the next material they touch."
}, {
  roll: 77,
  value: "PC is followed by all bugs within 20 yards. (Bonus points if there are ant hills around)."
}, {
  roll: 78,
  value: "PC grows a mouth in their chest. You can feed the mouth but you do not know what it will do. Overtime the mouth will grow if unfed."
}, {
  roll: 79,
  value: "PCs money all goes down a material (gold turns to silver) until curse is lifted. Copper turns into wooden toy coins that children would play with."
}, {
  roll: 80,
  value: "All plants the PC touches turn to dust for the next week. (Bonus points if a druid gets this)"
}, {
  roll: 81,
  value: "All potions being held by PC give a delusion effect (example: PC thinks they are invisible but are not.)"
}, {
  roll: 82,
  value: "All damage given to the PC for the next 12 minutes are irreversible."
}, {
  roll: 83,
  value: "The next person the PC touches switches all items."
}, {
  roll: 84,
  value: "PC’s armor or clothing (whichever applicable) is made entirely out of shards of glass magically held together."
}, {
  roll: 85,
  value: "Character must kill one humanoid per week or die themselves."
}, {
  roll: 86,
  value: "Character must read one book per week or die, it must be a book they have not read before."
}, {
  roll: 87,
  value: "Every dawn, gravity reverses for the character for one hour."
}, {
  roll: 88,
  value: "Whenever the character physically harms another sentient being the character must apologize."
}, {
  roll: 89,
  value: "Whenever the character is on a sea vehicle of any kind the character vomits anything he/she eats and cannot sleep."
}, {
  roll: 90,
  value: "The PCs hand’s tense up, and are stuck in a fist until the curse is removed."
}, {
  roll: 91,
  value: "The character’s left and right hands, and/or left and right feet switch sides until the curse is lifted."
}, {
  roll: 92,
  value: "This curse hardens all food this character tries to eat like stone, unless they have the correct eating utensil to eat it. (ie They need a spoon to eat soup, a fork to eat pie, a knife to cut meat, etc)."
}, {
  roll: 93,
  value: "The player believes that their mentor/parent has just died."
}, {
  roll: 94,
  value: "The player receives at least one false vision from their deity a day."
}, {
  roll: 95,
  value: "The cursed player can no longer fail the expectations of those they come across. (For example, if an NPC learns the player’s name and they believe their name to be elfish, they will become an elf. If they expect that he is a weakling due to rumors they have heard of him losing an important fight, the player looses some of his strength. If they thought he would be taller, the character would become taller, etc...)"
}, {
  roll: 96,
  value: "The player is cursed to look down at the ground; they can no longer make eye contact with others, unless they are able to look down on them..."
}, {
  roll: 97,
  value: "Until this player’s curse is lifted, as long as they wear shoes/boots, they will feel as if their feet are walking on burning hot coals."
}, {
  roll: 98,
  value: "This player has been cursed to be afraid of the sun."
}, {
  roll: 99,
  value: "This curse makes the player compelled to hug all characters they come across, even if it would be inappropriate or awkward."
}, {
  roll: 100,
  value: "This curse makes the character forcibly say gibberish every time they cast a spell (or some other common action)."
}];

// build/assets/data/other/chawingaCharms.js
var chawingaCharms = [/* @__PURE__ */ jsxs(Fragment, {
  children: [/* @__PURE__ */ jsx("p", {
    children: /* @__PURE__ */ jsx("strong", {
      children: "Charm of Biting Cold."
    })
  }), /* @__PURE__ */ jsx("p", {
    children: "This charm has 3 charges. As a bonus action, you can expend 1 of the charm’s charges to wreathe your weapon attacks with biting cold for 1 minute. Until this effect ends, you deal an extra 1d6 cold damage when you hit with a melee or ranged weapon attack. Once all its charges have been expended, this charm vanishes from you."
  })]
}), /* @__PURE__ */ jsxs(Fragment, {
  children: [/* @__PURE__ */ jsx("p", {
    children: /* @__PURE__ */ jsx("strong", {
      children: "Charm of Vitality."
    })
  }), /* @__PURE__ */ jsxs("p", {
    children: ["This charm allows you to give yourself the benefit of a", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/magic-items/potion-of-vitality",
      children: "Potion of Vitality"
    }), " ", "as an action. Once you do so, the charm vanishes from you."]
  })]
}), /* @__PURE__ */ jsxs(Fragment, {
  children: [/* @__PURE__ */ jsx("p", {
    children: /* @__PURE__ */ jsx("strong", {
      children: "Charm of Bounty."
    })
  }), /* @__PURE__ */ jsxs("p", {
    children: ["This charm has 3 charges. As an action, you can expend 1 of the charm’s charges to cast the", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/spells/create-food-and-water",
      children: "create food and water"
    }), " ", "spell, requiring no components. Once all its charges have been expended, this charm vanishes from you."]
  })]
}), /* @__PURE__ */ jsxs(Fragment, {
  children: [/* @__PURE__ */ jsx("p", {
    children: /* @__PURE__ */ jsx("strong", {
      children: "Charm of Cold Resistance."
    })
  }), /* @__PURE__ */ jsx("p", {
    children: "This charm allows you to give yourself resistance to cold damage as an action. This benefit lasts for 24 hours, after which the charm vanishes from you."
  })]
}), /* @__PURE__ */ jsxs(Fragment, {
  children: [/* @__PURE__ */ jsx("p", {
    children: /* @__PURE__ */ jsx("strong", {
      children: "Charm of Snowball Strike."
    })
  }), /* @__PURE__ */ jsx("p", {
    children: "This charm has 5 charges. As a bonus action, you can expend 1 of the charm’s charges to create a magical snowball in your hand and throw it. You must have a hand free to hold the snowball, or the charge is wasted. The snowball is a magic ranged weapon with which you are proficient. It has a normal range of 20 feet and a long range of 60 feet, it deals 1d4 cold damage on a hit, and it scores a critical hit on a roll of 19 or 20. If you score a critical hit with the snowball, the target is blinded until the end of its next turn. The snowball vanishes immediately after you hit or miss with it, or at the end of your turn if you don’t throw it. Once all its charges have been expended, this charm vanishes from you."
  })]
}), /* @__PURE__ */ jsxs(Fragment, {
  children: [/* @__PURE__ */ jsx("p", {
    children: /* @__PURE__ */ jsx("strong", {
      children: "Charm of the Ice Troll."
    })
  }), /* @__PURE__ */ jsx("p", {
    children: "This charm allows you to use your reaction when you take cold damage to reduce the damage to 0. You regain a number of hit points equal to half the cold damage you would have taken. Once you do so, the charm vanishes from you."
  })]
}), /* @__PURE__ */ jsxs(Fragment, {
  children: [/* @__PURE__ */ jsx("p", {
    children: /* @__PURE__ */ jsx("strong", {
      children: "Charm of the Traveler’s Haven."
    })
  }), /* @__PURE__ */ jsxs("p", {
    children: ["This charm has 3 charges. As an action, you can expend 1 of the charm’s charges to cast the", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/spells/leomunds-tiny-hut",
      children: "Leomund’s tiny hut spell"
    }), ", no components required. Once all its charges have been expended, this charm vanishes from you."]
  })]
}), /* @__PURE__ */ jsxs(Fragment, {
  children: [/* @__PURE__ */ jsx("p", {
    children: /* @__PURE__ */ jsx("strong", {
      children: "Charm of Darkvision."
    })
  }), /* @__PURE__ */ jsxs("p", {
    children: ["This charm allows you to cast the", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/spells/darkvision",
      children: "darkvision"
    }), " spell as an action, no components required. Once used three times, the charm goes away."]
  })]
}), /* @__PURE__ */ jsxs(Fragment, {
  children: [/* @__PURE__ */ jsx("p", {
    children: /* @__PURE__ */ jsx("strong", {
      children: "Charm of Feather Falling."
    })
  }), /* @__PURE__ */ jsxs("p", {
    children: ["This charm grants you the benefits of a", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/magic-items/ring-of-feather-falling",
      children: "ring of feather falling"
    }), ". These benefits last for 10 days, after which the charm vanishes from you."]
  })]
}), /* @__PURE__ */ jsxs(Fragment, {
  children: [/* @__PURE__ */ jsx("p", {
    children: /* @__PURE__ */ jsx("strong", {
      children: "Charm of Heroism."
    })
  }), /* @__PURE__ */ jsxs("p", {
    children: ["This charm allows you to give yourself the benefit of a", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/magic-items/potion-of-heroism",
      children: "Potion of Heroism"
    }), "as an action. Once you do so, the charm vanishes from you."]
  })]
}), /* @__PURE__ */ jsxs(Fragment, {
  children: [/* @__PURE__ */ jsx("p", {
    children: /* @__PURE__ */ jsx("strong", {
      children: "Charm of Restoration."
    })
  }), /* @__PURE__ */ jsx("p", {
    children: "This charm has 6 charges. You can use an action to expend some of its charges to cast one of the following spells:"
  }), /* @__PURE__ */ jsxs("ul", {
    children: [/* @__PURE__ */ jsxs("li", {
      children: [/* @__PURE__ */ jsx("a", {
        href: "https://www.dndbeyond.com/spells/greater-restoration",
        children: "Greater Restoration"
      }), " ", "(4 charges)"]
    }), /* @__PURE__ */ jsxs("li", {
      children: [/* @__PURE__ */ jsx("a", {
        href: "https://www.dndbeyond.com/spells/lesser-restoration",
        children: "Lesser Restoration"
      }), " ", "(2 charges)"]
    })]
  }), /* @__PURE__ */ jsx("p", {
    children: "Once all its charges have been expended, the charm vanishes from you."
  })]
}), /* @__PURE__ */ jsxs(Fragment, {
  children: [/* @__PURE__ */ jsx("p", {
    children: /* @__PURE__ */ jsx("strong", {
      children: "Charm of the Slayer."
    })
  }), /* @__PURE__ */ jsxs("p", {
    children: ["One sword in your possession becomes a", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/magic-items/dragon-slayer",
      children: "Dragon Slayer"
    }), " ", "or", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/magic-items/giant-slayer",
      children: "Giant Slayer"
    }), " ", "(DM’s choice) for the next 9 days. The charm then vanishes from you, and the weapon returns to normal."]
  })]
}), /* @__PURE__ */ jsxs(Fragment, {
  children: [/* @__PURE__ */ jsx("p", {
    children: /* @__PURE__ */ jsx("strong", {
      children: "Charm of Animal Conjuring."
    })
  }), /* @__PURE__ */ jsxs("p", {
    children: ["This charm allows you to cast the", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/spells/conjure-animals",
      children: "conjure animals"
    }), " ", "spell (3rd-level version) as an action. Once used three times, the charm vanishes from you."]
  }), /* @__PURE__ */ jsxs("ol", {
    children: [/* @__PURE__ */ jsx("li", {
      children: "Player roll Roll 1d6 to determine CR level"
    }), /* @__PURE__ */ jsx("li", {
      children: "Player then rolls a die to discover which creature is summoned"
    })]
  }), /* @__PURE__ */ jsx("div", {
    style: {
      maxWidth: 800,
      overflow: "auto",
      background: "linear-gradient(to right,rgba(0,0,0,0.3), transparent 10%, transparent 90%, rgba(0,0,0,0.3))"
    },
    children: /* @__PURE__ */ jsxs("table", {
      children: [/* @__PURE__ */ jsx("thead", {
        children: /* @__PURE__ */ jsxs("tr", {
          children: [/* @__PURE__ */ jsx("th", {
            children: "1. CR 0"
          }), /* @__PURE__ */ jsx("th", {
            children: "2. CR 1/8"
          }), /* @__PURE__ */ jsx("th", {
            children: "3. CR 1/4"
          }), /* @__PURE__ */ jsx("th", {
            children: "4. CR 1/2"
          }), /* @__PURE__ */ jsx("th", {
            children: "5. CR 1"
          }), /* @__PURE__ */ jsx("th", {
            children: "6. CR 2"
          })]
        })
      }), /* @__PURE__ */ jsx("tbody", {
        children: /* @__PURE__ */ jsxs("tr", {
          children: [/* @__PURE__ */ jsx("td", {
            children: /* @__PURE__ */ jsxs("ol", {
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/frog",
                  children: "Frog"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/baboon",
                  children: "Baboon"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/baboon",
                  children: "Badger"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/bat",
                  children: "Bat"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/cat",
                  children: "Cat"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/deer",
                  children: "Deer"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/eagle",
                  children: "Eagle"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/giant-fire-beetle",
                  children: "Giant Fire Beetle"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/goat",
                  children: "Goat"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/hawk",
                  children: "Hawk"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/hyena",
                  children: "Hyena"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/jackal",
                  children: "Jackal"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/lizard",
                  children: "Lizard"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/owl",
                  children: "Owl"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/rat",
                  children: "Rat"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/raven",
                  children: "Raven"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/scorpion",
                  children: "Scorpion"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/spider",
                  children: "Spider"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/vulture",
                  children: "Vulture"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/weasel",
                  children: "Weasel"
                })
              })]
            })
          }), /* @__PURE__ */ jsx("td", {
            children: /* @__PURE__ */ jsxs("ol", {
              children: [/* @__PURE__ */ jsx("li", {
                children: "[re-roll]"
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/blood-hawk",
                  children: "Blood Hawk"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/camel",
                  children: "Camel"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/flying-snake",
                  children: "Flying Snake"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/giant-crab",
                  children: "Giant Crab"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/giant-rat",
                  children: "Giant Rat"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/giant-weasel",
                  children: "Giant Weasel"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/mastiff",
                  children: "Mastiff"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/mule",
                  children: "Mule"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/poisonous-snake",
                  children: "Poisonous Snake"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/pony",
                  children: "Pony"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/stirge",
                  children: "Stirge"
                })
              })]
            })
          }), /* @__PURE__ */ jsx("td", {
            children: /* @__PURE__ */ jsxs("ol", {
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/boar",
                  children: "Boar"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/constrictor-snake",
                  children: "Constrictor snake"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/elk",
                  children: "Elk (Raindeer)"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/giant-badger",
                  children: "Giant Badger"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/giant-bat",
                  children: "Giant Bat"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/giant-owl",
                  children: "Giant Owl"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/giant-poisonous-snake",
                  children: "Giant Poisonous snake"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/giant-wolf-spider",
                  children: "Giant Wolf Spider"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/panther",
                  children: "Panther"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/wolf",
                  children: "Wolf"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/riding-horse",
                  children: "Riding Horse"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/axe-beak",
                  children: "Axe Beak"
                })
              })]
            })
          }), /* @__PURE__ */ jsx("td", {
            children: /* @__PURE__ */ jsxs("ol", {
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/ape",
                  children: "Ape"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/black-bear",
                  children: "Black Bear"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/crocodile",
                  children: "Crocodile"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/giant-goat",
                  children: "Giant Goat"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/giant-wasp",
                  children: "Giant Wasp"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/warhorse",
                  children: "Warhorse"
                })
              })]
            })
          }), /* @__PURE__ */ jsx("td", {
            children: /* @__PURE__ */ jsxs("ol", {
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/brown-bear",
                  children: "Brown bear"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/dire-wolf",
                  children: "Dire wolf"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/giant-eagle",
                  children: "Giant Eagle"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/giant-spider",
                  children: "Giant spider"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/giant-toad",
                  children: "Giant Toad"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/giant-vulture",
                  children: "Giant Vulture"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/lion",
                  children: "Lion"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/tiger",
                  children: "Tiger"
                })
              })]
            })
          }), /* @__PURE__ */ jsx("td", {
            children: /* @__PURE__ */ jsxs("ol", {
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/giant-boar",
                  children: "Giant Boar"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/giant-constrictor-snake",
                  children: "Giant Constrictor snake"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/giant-elk",
                  children: "Giant Elk"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/polar-bear",
                  children: "Polar bear"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/rhinoceros",
                  children: "Rhinoceros"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  href: "https://www.dndbeyond.com/monsters/saber-toothed-tiger",
                  children: "Saber-toothed Tiger"
                })
              })]
            })
          })]
        })
      }), /* @__PURE__ */ jsx("tfoot", {
        children: /* @__PURE__ */ jsxs("tr", {
          children: [/* @__PURE__ */ jsx("td", {
            children: "8 beasts"
          }), /* @__PURE__ */ jsx("td", {
            children: "8 beasts"
          }), /* @__PURE__ */ jsx("td", {
            children: "8 beasts"
          }), /* @__PURE__ */ jsx("td", {
            children: "4 beasts"
          }), /* @__PURE__ */ jsx("td", {
            children: "2 beasts"
          }), /* @__PURE__ */ jsx("td", {
            children: "1 beast"
          })]
        })
      })]
    })
  })]
}), /* @__PURE__ */ jsxs(Fragment, {
  children: [/* @__PURE__ */ jsx("p", {
    children: /* @__PURE__ */ jsx("strong", {
      children: "Charm of the Snow Walker."
    })
  }), /* @__PURE__ */ jsx("p", {
    children: "This charm has 3 charges and vanishes when all 3 have been used. As an action, you can expend 1 of the charm’s charges to gain the following benefits for 24 hours:"
  }), /* @__PURE__ */ jsxs("ul", {
    children: [/* @__PURE__ */ jsx("li", {
      children: "You and your allies within 15 feet of you ignore difficult terrain caused by snow or ice."
    }), /* @__PURE__ */ jsx("li", {
      children: "You can see through areas heavily obscured by snow to a distance of 60 feet."
    }), /* @__PURE__ */ jsx("li", {
      children: "You gain resistance to cold damage. If you are already resistant, you gain immunity to cold damage instead."
    })]
  })]
})];

// build/assets/data/other/itemBreakage.js
var itemBreakage = [
  "A magic item becomes frozen (unusable until thawed)",
  "Mundane weapon breaks",
  "Mundane armor or shield breaks",
  "A mundane miscelanious item breaks",
  "A potion freezes and shatters (broken)",
  "A weapon becomes frozen (unusable until thawed)",
  "Mundane armor or shield becomes frozen (unusable until thawed)",
  "A mundane miscelanious item becomes frozen (unusable until thawed)",
  "A potion becomes frozen (unusable until thawed)",
  "Nothing Happens"
];

// build/assets/data/Predefined-Encounters/townEncounters.js
var townEncounters = [
  "PC kidnap attempt",
  "PC arrested/ falsely accused",
  "Street merchant trying to secretly sell drugs to PC’s",
  "A man is selling potions of vitality for strangely cheap prices (Fake... poisonous?)",
  "Someone in town has been murdered",
  "Drunk picks a fight with PC",
  "Bump into seemingly kind person, they steal something from PC",
  "Manhunt being held",
  "Someone gets mugged (or worse... executed?)",
  "Town Crier/ Religious Zealot Speech",
  "A child needs help finding their cat / dog",
  "Past (or random) NPC gives them a reward (Earned? Or mistaken for someone else?)"
];
var tavernEncounters = [
  "Guards break in and begin to frisk / inspect everyone, looking for something/ someone (do the PC’s comply? are these really guards?)",
  "A crossbow bolt flies from inside / outside the tavern and headshot kills an NPC",
  "A woman is in the process of giving birth in the middle of the tavern",
  "A bard is playing music that seems to have a strange calming effect (Wisdom save)",
  "An old person performing religious miracles in town to build a following to a false god",
  "A strange individual looks to be talking to (an item) as if it is sentient... is it?",
  "There is a Cow in the middle of the tavern, everyone is drunk and doesn’t know how it got there",
  "A member of your party is mistaken for a famous figure of some kind",
  "A group in the back is having an arm wrestling competition",
  "A (blind?) person starts telling adventure stories... but the	stories are about the PC’s... (How do they know? Who are they?)",
  "An annual boy band competition for free drinks judged by the patrons",
  "Drinking contest, who can last the longest?"
];

// build/assets/data/Predefined-Encounters/travelEncounters.js
var dangerousTravelEncounters = [
  'The "Spine Demon" (Abominable Yeti) finds the party',
  "Avalanche or Blizzard",
  "Creature(s) try to lure the party into an avalanche to eat their frozen bodies (animal bait / chase after them?)",
  "Ice elementals are the source of a blizzard, must be defeated to stop blizzard",
  "A song echoes through the mountains / wilderness toward people around a campfire (Wisdom save) (good or bad with enchantment music?)",
  "A creature hiding in wait un-burrows itself / breaks through ice and surprise attacks one unlucky PC",
  "A tribe of warriors overwhelm and kidnap the party, can they escape or talk their way out?",
  "Start to be hunted down by a creature (unaware at first)",
  "Creature is stalking the group and always retreats when	moved towards, what is it waiting for? (moment to strike / more to arrive?)",
  "Start to be followed by an Assassin (unaware at first)",
  "A single large creature leaves dead animal in the open as bait for its next meal",
  "A partially eaten carcass of a large creature (Does the predator return?)",
  "Baited / led / trapped into an ambush by creatures",
  "A large flying creature(s) swoops in and attacks (trying to carry one person away?)",
  "A stampede of creatures rush through the party (skill challenge to avoid being trampled?)",
  `Two huge creatures battle to the death in front of the
		party (Do they join in?) One (or both) dies and the
		party is left with its corpse (White Dragon? What do
		they do with it? Who / what else wants the carcass?)`,
  "A trap (Dex saving throw) that suspends / nets/ traps the PC’s in place (who / what is coming?)",
  "Two dueling wizards keep casting ice spells that block your path from their battle",
  "A band of tribal raiders ask the party to join them on attacking a nearby village",
  "A Juvenile White Dragon finds the party on its first hunt (Adult dragon watches over it?)",
  "A huge sleeping creature blocks their travel, can they pass without waking it? (owlbear / frost giant?)",
  "Group of villagers fleeing from something chasing them (Single creature / hoard / nothing?)",
  "Two opposing factions fight over treasure (bandits vs wizards / or Barbarians vs druids etc)",
  "Dangerous creatures aggressively running towards party, but away from something more dangerous (Dragon / Remorhaz / Frost Ooze?)",
  "Section of frozen land / lake is between you and your destination (1/2 speed for the day)",
  "A group of tribal nomads, are they hostile or friendly? (Roll Reaction Table?)",
  "Everyone makes a Wisdom save or rolls on the “Extreme Cold Mental Table”",
  "Everyone makes a Frost Check or rolls on the “Extreme Cold Physical Table”",
  "You find a baby dangerous creature (Overprotective mother attacks, becomes companion?)",
  "One of your beasts or party members gets sick / cant travel till recovered (medicine check to recover them?)",
  "1d6 worth of food rations become inedible for each party member",
  "Everyone makes a Constitution saving throw or gets “the cold” (poisoned condition) for one full day (unless healed/ treated?)",
  "A woman needing help lures PC’s into a trap (Hag? Shes being forced to do it?)",
  "An abandoned wagon off to the side (Supplies inside? It’s a trap?!)",
  `corpses of dead animals partially burried in a strange fashion are arranged from smallest to largest (human size creature looks to be next?)`,
  `Ice castle with frozen blood and frozen solid bodies (lair of "The Spine Demon" (Abominable Yeti)?)`,
  "Massive flying creature / bird / dragon flies overhead",
  `Boulder sits in the middle of the snow, it looks as if it fell or was thrown (Ogres near?)`,
  `Sharp spires of Chardalyn extend out of the ground forming a jagged wasteland (Lair to a Chardalyn Dragon?)`,
  "Skelleton of a huge creature sticks out of the ground forming a large canopy (safety or a creatures lair?)",
  `You find a large cavern face with dark blood across it,	inside you find a singular white scaled egg... Where is the mother? What is this creature? (White dragon?)`
];
var safeTravelEncounters = [
  "A mile wide frozen lake with one gigantic creature frozen inside",
  "A mile wide frozen lake with bodies frozen inside",
  "A massive block of ice with a dangerous creature frozen	inside",
  "A family of 4 huddled together... frozen to death",
  "A frigid battle field with bodies frozen in place",
  "A 500 ft high wall that is 300 ft thick and is over 3 miles long",
  "A 50ft tall statue of a dwarf. It is holding his hand up as if to forbid travelers from coming this way",
  "A tiny island in the middle of a large frigid water lake (Whats on the island? Is the lake frozen?",
  "A massive block of ice with a gentle creature frozen inside",
  `Another adventuring group passes them by exchanging
	a casual greeting from the forest being too dangerous,
	you continue in to see the corpses of these same
	adventurers lying around a freshly extinguished
	campfire`,
  "A trusting looking individual gives false information about the groups current quest (Wants to sabotage/ join the group)",
  "A Traveling salesman that tries to sell fake stuff (Magic items, Frost check gear... that doesn’t work)",
  "A traveling salesman that has useful items (magic items?) BUT they only accept food rations for payment",
  "A dangerous creature quickly approaches camp, but right before anything happens a horn sounds and it runs (being hunted?)",
  `An arctic fox is being chased by hunters, it jumps into	the arms
		of the largest party member and wildshapes back into their human form,
		a white haired little girl, the hunters arrive and say shes a witch
		that needs to be dealt with`,
  "A Half-Orc Druid is tending to a creature (another druid?) they have a gift for any players who help",
  `Person looking for help towards where PC’s are going`,
  "An injured “dangerous” creature lies in their path (shapeshifted druid?)",
  "Tribal nomads that react to the party in the way that the party acts toward them (Fight = hostile or welcoming = friendly)",
  "Someone appraoches who is freezing to death and needs food / warmth / shelter",
  "Lone individual asks for shelter (good? bad? important NPC?)",
  "A single old man traveling alone... hes quite strange",
  "A suspicious hooded figure gathering herbs / spell components?",
  "A group of fisherman struggling to catch knucklehead	trout (they are too weak)",
  "Person coming from where PC’s are heading",
  "A small cute creature jumps into the arms of one of the PC’s (is there a unique thing can it do?)",
  "A person offering help towards where the party is going",
  "A traveling cartographer roams the area and will help guide the party to their destination for a price",
  "A cleric decked out in Cold Weather Gear offers to aid wandering adventurers (Cures stacks of exhaustion?)",
  "You see the “Diving Seals Club” currently swimming in nearby ice water... they are crazy!",
  "A hot spring or some kind of thermal vent warms a small body of water",
  "An adventurer frozen in a block of ice with a magic item on them",
  "Find a magical item buried in the snow / trapped in ice"
];

// build/assets/data/weather/storms.js
var storms = [
  "Blizzard",
  "Hail storm",
  "Snow storm",
  "Frigid winds"
];

// build/assets/data/weather/weather.js
var weather = [{
  roll: 1,
  value: "Blizzard (-5 next weather roll)"
}, {
  roll: 2,
  value: "Hail storm (-2 next weather roll)"
}, {
  roll: [3, 5],
  value: "Snow storm (-2 next weather roll)"
}, {
  roll: [6, 7],
  value: "White out (Dense Fog)"
}, {
  roll: [8, 9],
  value: "Frigid winds"
}, {
  roll: [10, 11],
  value: "Light fog"
}, {
  roll: [12, 14],
  value: "Light snow fall"
}, {
  roll: [15, 19],
  value: "Clear skies (+2 next weather roll)"
}, {
  roll: 20,
  value: "Rays of Hope (+5 next weather roll)"
}];

// build/assets/data/weather/weatherDuration.js
var weatherDuration = ["1 hour", "2 hours", "3 hours", "4 hours", "5 hours", "6 hours", "7 hours", "8 hours"];

// build/assets/data/wild-magic/divineNat20.js
var Character = " The creature that triggered the divine burst ";
var character = " the creature that triggered the divine burst ";
var divineNat20 = [{
  roll: [1, 6],
  value: /* @__PURE__ */ jsxs(Fragment, {
    children: ["Golden light fills a 20-foot-radius, 40-foot-high cylinder centered on one character in the region and then fades. That character and their friends in the cylinder gain the benefits of the", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/spells/divine-favor",
      children: "divine favor"
    }), " ", "spell for 1 hour."]
  })
}, {
  roll: [7, 12],
  value: /* @__PURE__ */ jsxs(Fragment, {
    children: ["Radiant energy erupts in a 10-foot-radius sphere centered on ", character, ". Each creature in the sphere that isn’t undead regains 3d6 hit points. Each undead creature in the sphere takes 3d6 radiant damage."]
  })
}, {
  roll: [13, 18],
  value: /* @__PURE__ */ jsxs(Fragment, {
    children: ["Creatures in a 30ft radius around ", character, " can suddenly start understanding all languages for 1 hour."]
  })
}, {
  roll: [19, 24],
  value: /* @__PURE__ */ jsxs(Fragment, {
    children: [Character, " gains advantage on saving throws for the next 24 hours."]
  })
}, {
  roll: [25, 30],
  value: /* @__PURE__ */ jsxs(Fragment, {
    children: [Character, " is suffused with celestial power. For 1 minute, the character’s melee attacks deal an extra 2d6 radiant damage on a hit."]
  })
}, {
  roll: [31, 36],
  value: /* @__PURE__ */ jsxs(Fragment, {
    children: ["One simple or martial weapon that is nonmagical and carried by", " ", character, " gains the properties of a", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/magic-items/mace-of-disruption",
      children: "Mace of Disruption"
    }), " ", "for 24 hours."]
  })
}, {
  roll: [37, 42],
  value: /* @__PURE__ */ jsxs(Fragment, {
    children: ["A", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/monsters/flying-sword",
      children: "flying sword made of light"
    }), " ", "appears next to ", character, " under their control. The sword can be controlled using a bonus action. The sword deals radiant damage instead of slashing damage. The sword vanishes after 1 minute."]
  })
}, {
  roll: [43, 48],
  value: /* @__PURE__ */ jsxs(Fragment, {
    children: [Character, " hears whispers from celestial beings or refrains of celestial choirs. The character can ask those voices one question as if using the ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/spells/commune",
      children: "Commune"
    }), " ", "spell."]
  })
}, {
  roll: [49, 54],
  value: /* @__PURE__ */ jsxs(Fragment, {
    children: ["All creatures in a 30ft radius of ", character, " give off a crimson glow for 1 minute. The creatures shed dim light in a 10-foot radius, attacks against them have advantage if the attacker can see them, and the creatures can’t benefit from being invisible."]
  })
}, {
  roll: [55, 60],
  value: /* @__PURE__ */ jsxs(Fragment, {
    children: ["Celestial power explodes in a 30-foot-radius sphere of divine light centered on ", character, ". Each creature in the sphere must make a DC 15 Constitution saving throw. On a failure, the creature takes 4d6 radiant damage and is blinded. On a success, it takes half damage and isn’t blinded."]
  })
}, {
  roll: [61, 66],
  value: /* @__PURE__ */ jsxs(Fragment, {
    children: [Character, " feels a profound sense of purpose and gains the benefit of the ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/spells/bless",
      children: "Bless"
    }), " spell for 1 minute. They can choose two other creatures they can see to gain the spell’s benefits as well."]
  })
}, {
  roll: [67, 72],
  value: /* @__PURE__ */ jsxs(Fragment, {
    children: ["A booming voice thunders in Celestial and can be heard throughout the region. Each creature within 100ft of ", character, " must make a DC 15 Constitution saving throw. On a success, the creature gains 2d10 temporary hit points. On a failure, the creature is deafened for 1 minute."]
  })
}, {
  roll: [73, 78],
  value: /* @__PURE__ */ jsxs(Fragment, {
    children: [Character, " hands begin to glow with divine bower and gains the ability to cure afflictions for 1 hour. As an action, they can cast lesser restoration or greater restoration without expending a spell slot and requiring no material components."]
  })
}, {
  roll: [79, 84],
  value: /* @__PURE__ */ jsxs(Fragment, {
    children: ["If V (or selune follower) Twilight Sanctuary activates. Else An area 30ft around ", character, " becomes filled with bright light that is not extinguished by the darkness spell."]
  })
}, {
  roll: [85, 90],
  value: /* @__PURE__ */ jsxs(Fragment, {
    children: ["An angelic voice rings throughout the region. Each creature within 60ft of ", character, " must succeed on a DC 15 Wisdom saving throw or perform the grovel option of the command spell."]
  })
}, {
  roll: [91, 95],
  value: /* @__PURE__ */ jsxs(Fragment, {
    children: [Character, " gains immunity to cold damage for 24 hours."]
  })
}, {
  roll: [96, 100],
  value: /* @__PURE__ */ jsxs(Fragment, {
    children: [Character, " gains the ability to use the", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/sources/phb/classes#DivineIntervention",
      children: "Divine Intervention"
    }), " ", "cleric feature for 7 days. It succeeds automatically when used. The character can only use the feature granted in this way only once. Reroll if you’ve already rolled this effect."]
  })
}];

// build/assets/data/wild-magic/wildMagicSurge.js
var Surge = ({
  good,
  bad,
  neutral
}) => /* @__PURE__ */ jsxs(Fragment, {
  children: [/* @__PURE__ */ jsx("p", {
    children: /* @__PURE__ */ jsx("strong", {
      children: "1-5 (Bad):"
    })
  }), " ", /* @__PURE__ */ jsx("p", {
    children: bad
  }), /* @__PURE__ */ jsx("p", {
    children: /* @__PURE__ */ jsx("strong", {
      children: "6-15 (Neutral):"
    })
  }), " ", /* @__PURE__ */ jsx("p", {
    children: neutral
  }), /* @__PURE__ */ jsx("p", {
    children: /* @__PURE__ */ jsx("strong", {
      children: "16-20 (Good):"
    })
  }), " ", /* @__PURE__ */ jsx("p", {
    children: good
  })]
});
var wildMagicSurge = [/* @__PURE__ */ jsx(Surge, {
  good: /* @__PURE__ */ jsxs(Fragment, {
    children: ["You ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/spells/polymorph",
      children: "Polymorph"
    }), " ", "into an", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/monsters/adult-white-dragon",
      children: "Adult White Dragon"
    }), ". You don't return to your normal form until 24 hours have elapsed or your HP drops to 0."]
  }),
  neutral: /* @__PURE__ */ jsx(Fragment, {
    children: "You turn into an white dragonborn and can only speak draconic and barely understand common for 24 hours."
  }),
  bad: /* @__PURE__ */ jsxs(Fragment, {
    children: ["You ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/spells/polymorph",
      children: "Polymorph"
    }), " ", "into a primal rage filled", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/monsters/adult-white-dragon",
      children: "Adult White Dragon"
    }), ". You attack the nearest creature to you (including allies) every turn for as long as you are berserk. Make a DC 18 WIS save at the start of each of your turns to gain control over yourself, losing berserk. You don't return to your normal form until 24 hours have elapsed or your HP drops to 0."]
  })
}), /* @__PURE__ */ jsx(Surge, {
  good: /* @__PURE__ */ jsxs(Fragment, {
    children: ["A talking ethereal", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/monsters/dire-wolf",
      children: "Dire Wolf"
    }), " ", "animal companion appears. You can summon, dismiss or command this creature using a bonus action. The creature disappears, never to return, when it reaches 0 HP."]
  }),
  neutral: /* @__PURE__ */ jsxs(Fragment, {
    children: ["A talking spectral", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/monsters/wolf",
      children: "dog"
    }), " that only you can see appears."]
  }),
  bad: /* @__PURE__ */ jsxs(Fragment, {
    children: ["You ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/spells/polymorph",
      children: "Polymorph"
    }), " ", "into a dog."]
  })
}), /* @__PURE__ */ jsx(Surge, {
  good: /* @__PURE__ */ jsxs(Fragment, {
    children: ["Gain the druid", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/sources/phb/classes#WildShape",
      children: "Wild Shape"
    }), " ", "feature for 24 hours."]
  }),
  neutral: /* @__PURE__ */ jsx(Fragment, {
    children: "You take on properties of an arctic creature (roll on the creature roll table) for 24 hours."
  }),
  bad: /* @__PURE__ */ jsxs(Fragment, {
    children: ["You ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/spells/polymorph",
      children: "Polymorph"
    }), " ", 'into a CR 0 creature (see Chawinga Charms "Charm of Animal Conjuring" roll table result).']
  })
}), /* @__PURE__ */ jsx(Surge, {
  good: /* @__PURE__ */ jsx(Fragment, {
    children: "For 24 hours, gain resistance to cold damage. You also grow gills on the side of your neck allowing you to breath underwater."
  }),
  neutral: /* @__PURE__ */ jsxs(Fragment, {
    children: ["For 24 hours, you turn into a", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/monsters/deep-scion",
      children: "Deep Scion"
    }), " ", "with resistance to cold damage."]
  }),
  bad: /* @__PURE__ */ jsxs(Fragment, {
    children: ["For 24 hours, you turn into a", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/monsters/troglodyte",
      children: "Troglodyte"
    }), ". Your stench aura extends out to 20ft."]
  })
}), /* @__PURE__ */ jsx(Surge, {
  good: /* @__PURE__ */ jsx(Fragment, {
    children: "For 24 hours, you gain +2 AC as large segments of your skin turns into a hardened metal. Your body weight doubles but this does not effect encumbrance."
  }),
  neutral: /* @__PURE__ */ jsx(Fragment, {
    children: "For 24 hours, the appearance of your skin looks metallic."
  }),
  bad: /* @__PURE__ */ jsx(Fragment, {
    children: "For 24 hours, you transform into a metal statue of yourself, during which time you are considered petrified."
  })
}), /* @__PURE__ */ jsx(Surge, {
  good: /* @__PURE__ */ jsx(Fragment, {
    children: "For 24 hours, you grow black raven wings out of your back and gain a fly speed of 40ft."
  }),
  neutral: /* @__PURE__ */ jsx(Fragment, {
    children: "For 24 hours, you grow black feathers all over your body."
  }),
  bad: /* @__PURE__ */ jsxs(Fragment, {
    children: ["You Polymorph into a", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/monsters/raven",
      children: "Raven"
    })]
  })
}), /* @__PURE__ */ jsx(Surge, {
  good: /* @__PURE__ */ jsx(Fragment, {
    children: "3d6 x 100 silver pieces appear randomly around you over the next hour."
  }),
  neutral: /* @__PURE__ */ jsx(Fragment, {
    children: "For 24 hours, every non living thing that you touch directly with your skin turns to gold. It turns back to normal when your ability expires."
  }),
  bad: /* @__PURE__ */ jsx(Fragment, {
    children: "For 24 hours, everything you touch directly with your skin (including living creatures) turns to rusted copper. It turns back to normal when your ability expires. Living things that are transformed are considered petrified."
  })
}), /* @__PURE__ */ jsx(Surge, {
  good: /* @__PURE__ */ jsx(Fragment, {
    children: "For 24 hours, you grow gills on your neck allowing you to breath under water. You also gain resistance to cold damage."
  }),
  neutral: /* @__PURE__ */ jsx(Fragment, {
    children: "For 24 hours, you grow gills on your neck allowing you to breath under water."
  }),
  bad: /* @__PURE__ */ jsx(Fragment, {
    children: "For 24 hours, you grow gills on your neck allowing you to breath under water. However you are no longer able to breath air for as long as you have these gills. You have resistance to cold damage while underwater."
  })
}), /* @__PURE__ */ jsx(Surge, {
  good: /* @__PURE__ */ jsxs(Fragment, {
    children: ["You trigger the effects of the", " ", /* @__PURE__ */ jsx("a", {
      href: "https://www.dndbeyond.com/spells/time-stop",
      children: "Time Stop"
    }), " Spell"]
  }),
  neutral: /* @__PURE__ */ jsx(Fragment, {
    children: "For 24 hours, every so often you will freeze in place for a few seconds as if frozen in time... no mechanics to this, just RP."
  }),
  bad: /* @__PURE__ */ jsx(Fragment, {
    children: "You are frozen in time (stunned), make a DC 18 WIS save every round until you succeed to unfreeze yourself."
  })
}), /* @__PURE__ */ jsx(Surge, {
  good: /* @__PURE__ */ jsx(Fragment, {
    children: "You grow thick calusses all over your body. For 24 hours, you have resistance to slashing and piercing damage."
  }),
  neutral: /* @__PURE__ */ jsx(Fragment, {
    children: "For 24 hours, your skin thickens and you gain the “Unarmored Defense Feat”. If you already have this, then increase AC by +1."
  }),
  bad: /* @__PURE__ */ jsx(Fragment, {
    children: "Your skin thins. For 24 hours, you are vulnerable to slashing and piercing damage."
  })
})];

// build/assets/App.js
function App() {
  return /* @__PURE__ */ jsx("div", {
    className: "App",
    children: /* @__PURE__ */ jsxs("div", {
      className: "App-inner",
      children: [/* @__PURE__ */ jsx("h1", {
        children: "Random Table Rollers"
      }), /* @__PURE__ */ jsxs(PolyfilledFlexGap, {
        direction: "vertical",
        children: [/* @__PURE__ */ jsx(TravelCalculator, {}), /* @__PURE__ */ jsxs(RollTableSet, {
          heading: "NPC Characters",
          children: [/* @__PURE__ */ jsx(RollResult, {
            label: "Race",
            tableData: races,
            dSize: "d100"
          }), /* @__PURE__ */ jsx(RollResult, {
            label: "Sex",
            tableData: sex,
            dSize: "d4"
          }), /* @__PURE__ */ jsx("tr", {
            children: /* @__PURE__ */ jsx("td", {
              colSpan: 5,
              children: /* @__PURE__ */ jsx("p", {
                children: 'Use the "Fantasy Name Generator" app to generate character names.'
              })
            })
          }), /* @__PURE__ */ jsx(RollResult, {
            label: "Personality trait",
            tableData: personality,
            dSize: "d100"
          }), /* @__PURE__ */ jsx(RollResult, {
            label: "Quirk",
            tableData: quirks,
            dSize: "d100"
          }), /* @__PURE__ */ jsx(RollResult, {
            label: "Age (appearance)",
            tableData: age,
            dSize: "d100"
          })]
        }), /* @__PURE__ */ jsxs(RollTableSet, {
          heading: "Pre-defined encounters",
          children: [/* @__PURE__ */ jsx(RollResult, {
            label: "Dangerous travel encounters",
            tableData: dangerousTravelEncounters
          }), /* @__PURE__ */ jsx(RollResult, {
            label: "Safe travel encounters",
            tableData: safeTravelEncounters
          }), /* @__PURE__ */ jsx(RollResult, {
            label: "Town encounters",
            tableData: townEncounters,
            dSize: "d12"
          }), /* @__PURE__ */ jsx(RollResult, {
            label: "Tavern encounters",
            tableData: tavernEncounters,
            dSize: "d12"
          })]
        }), /* @__PURE__ */ jsxs(RollTableSet, {
          heading: "Arctic encounter generator",
          children: [/* @__PURE__ */ jsx(RollResult, {
            label: "Creature(s)",
            tableData: creatures,
            dSize: "d20"
          }), /* @__PURE__ */ jsx(RollResult, {
            label: "Activity (Beast)",
            tableData: activityBeast,
            dSize: "d12"
          }), /* @__PURE__ */ jsx(RollResult, {
            label: "Activity (Humanoid)",
            tableData: activityHumanoid,
            dSize: "d12"
          })]
        }), /* @__PURE__ */ jsxs(RollTableSet, {
          heading: "Wild magic surges",
          children: [/* @__PURE__ */ jsx(RollResult, {
            label: "Wild Magic Surge (nat 1 when casting magic)",
            tableData: wildMagicSurge
          }), /* @__PURE__ */ jsx(RollResult, {
            label: "Divine burst (divine nat 20)",
            tableData: divineNat20,
            dSize: "d100"
          })]
        }), /* @__PURE__ */ jsxs(RollTableSet, {
          heading: "Weather & Storms",
          children: [/* @__PURE__ */ jsx(RollResult, {
            label: "Weather",
            tableData: weather,
            dSize: "d20"
          }), /* @__PURE__ */ jsx(RollResult, {
            label: "Storm",
            tableData: storms,
            dSize: "d4"
          }), /* @__PURE__ */ jsx(RollResult, {
            label: "Duration",
            tableData: weatherDuration,
            dSize: "d8"
          })]
        }), /* @__PURE__ */ jsxs(RollTableSet, {
          heading: "Other aspects",
          children: [/* @__PURE__ */ jsx(RollResult, {
            label: "Chawinga Charms",
            tableData: chawingaCharms
          }), /* @__PURE__ */ jsx(RollResult, {
            label: "Item breakage",
            tableData: itemBreakage,
            dSize: "d10"
          }), /* @__PURE__ */ jsx(RollResult, {
            label: "Curses",
            tableData: curses,
            dSize: "d100"
          })]
        }), /* @__PURE__ */ jsxs("p", {
          children: ["Personality traits and Quirks from", " ", /* @__PURE__ */ jsx("a", {
            href: "https://www.dmsguild.com/product/317982/PC-and-NPC-Creation-Tables",
            children: "PC and NPC Creation Tables"
          })]
        }), /* @__PURE__ */ jsxs("p", {
          children: ["Arctic activities and weather table from", " ", /* @__PURE__ */ jsx("a", {
            href: "https://www.dmsguild.com/product/332576/Arctic-Survival-House-Rules-for-Icewind-Dale",
            children: "Arctic Survival House Rules for Icewind Dale"
          })]
        }), /* @__PURE__ */ jsxs("p", {
          children: ["Curses from", " ", /* @__PURE__ */ jsx("a", {
            href: "http://dndspeak.com/2017/12/100-curses/",
            children: "D&D speak.com"
          }), "."]
        })]
      })]
    })
  });
}
var App_default = App;

// build/assets/reportWebVitals.js
var reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    Promise.resolve().then(() => require_web_vitals()).then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
var reportWebVitals_default = reportWebVitals;

// build/assets/index.js
render$1(/* @__PURE__ */ jsx(StrictMode, {
  children: /* @__PURE__ */ jsx(App_default, {})
}), document.getElementById("root"));
reportWebVitals_default();
//# sourceMappingURL=index.js.map
