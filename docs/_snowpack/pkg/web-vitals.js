var e,
    t,
    n,
    i,
    a = function a(e, t) {
  return {
    name: e,
    value: void 0 === t ? -1 : t,
    delta: 0,
    entries: [],
    id: "v1-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
  };
},
    r = function r(e, t) {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(e)) {
      if ("first-input" === e && !("PerformanceEventTiming" in self)) return;
      var n = new PerformanceObserver(function (e) {
        return e.getEntries().map(t);
      });
      return n.observe({
        type: e,
        buffered: !0
      }), n;
    }
  } catch (e) {}
},
    o = function o(e, t) {
  var n = function n(i) {
    "pagehide" !== i.type && "hidden" !== document.visibilityState || (e(i), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)));
  };

  addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0);
},
    c = function c(e) {
  addEventListener("pageshow", function (t) {
    t.persisted && e(t);
  }, !0);
},
    u = "function" == typeof WeakSet ? new WeakSet() : new Set(),
    f = function f(e, t, n) {
  var i;
  return function () {
    t.value >= 0 && (n || u.has(t) || "hidden" === document.visibilityState) && (t.delta = t.value - (i || 0), (t.delta || void 0 === i) && (i = t.value, e(t)));
  };
},
    s = function s(e, t) {
  var n,
      i = a("CLS", 0),
      u = function u(e) {
    e.hadRecentInput || (i.value += e.value, i.entries.push(e), n());
  },
      s = r("layout-shift", u);

  s && (n = f(e, i, t), o(function () {
    s.takeRecords().map(u), n();
  }), c(function () {
    i = a("CLS", 0), n = f(e, i, t);
  }));
},
    m = -1,
    p = function p() {
  return "hidden" === document.visibilityState ? 0 : 1 / 0;
},
    v = function v() {
  o(function (e) {
    var t = e.timeStamp;
    m = t;
  }, !0);
},
    d = function d() {
  return m < 0 && (m = p(), v(), c(function () {
    setTimeout(function () {
      m = p(), v();
    }, 0);
  })), {
    get timeStamp() {
      return m;
    }

  };
},
    l = function l(e, t) {
  var n,
      i = d(),
      o = a("FCP"),
      s = function s(e) {
    "first-contentful-paint" === e.name && (p && p.disconnect(), e.startTime < i.timeStamp && (o.value = e.startTime, o.entries.push(e), u.add(o), n()));
  },
      m = performance.getEntriesByName("first-contentful-paint")[0],
      p = m ? null : r("paint", s);

  (m || p) && (n = f(e, o, t), m && s(m), c(function (i) {
    o = a("FCP"), n = f(e, o, t), requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        o.value = performance.now() - i.timeStamp, u.add(o), n();
      });
    });
  }));
},
    h = {
  passive: !0,
  capture: !0
},
    S = new Date(),
    y = function y(i, a) {
  e || (e = a, t = i, n = new Date(), w(removeEventListener), g());
},
    g = function g() {
  if (t >= 0 && t < n - S) {
    var a = {
      entryType: "first-input",
      name: e.type,
      target: e.target,
      cancelable: e.cancelable,
      startTime: e.timeStamp,
      processingStart: e.timeStamp + t
    };
    i.forEach(function (e) {
      e(a);
    }), i = [];
  }
},
    E = function E(e) {
  if (e.cancelable) {
    var t = (e.timeStamp > 1e12 ? new Date() : performance.now()) - e.timeStamp;
    "pointerdown" == e.type ? function (e, t) {
      var n = function n() {
        y(e, t), a();
      },
          i = function i() {
        a();
      },
          a = function a() {
        removeEventListener("pointerup", n, h), removeEventListener("pointercancel", i, h);
      };

      addEventListener("pointerup", n, h), addEventListener("pointercancel", i, h);
    }(t, e) : y(t, e);
  }
},
    w = function w(e) {
  ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (t) {
    return e(t, E, h);
  });
},
    L = function L(n, s) {
  var m,
      p = d(),
      v = a("FID"),
      l = function l(e) {
    e.startTime < p.timeStamp && (v.value = e.processingStart - e.startTime, v.entries.push(e), u.add(v), m());
  },
      h = r("first-input", l);

  m = f(n, v, s), h && o(function () {
    h.takeRecords().map(l), h.disconnect();
  }, !0), h && c(function () {
    var r;
    v = a("FID"), m = f(n, v, s), i = [], t = -1, e = null, w(addEventListener), r = l, i.push(r), g();
  });
},
    T = function T(e, t) {
  var n,
      i = d(),
      s = a("LCP"),
      m = function m(e) {
    var t = e.startTime;
    t < i.timeStamp && (s.value = t, s.entries.push(e)), n();
  },
      p = r("largest-contentful-paint", m);

  if (p) {
    n = f(e, s, t);

    var v = function v() {
      u.has(s) || (p.takeRecords().map(m), p.disconnect(), u.add(s), n());
    };

    ["keydown", "click"].forEach(function (e) {
      addEventListener(e, v, {
        once: !0,
        capture: !0
      });
    }), o(v, !0), c(function (i) {
      s = a("LCP"), n = f(e, s, t), requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          s.value = performance.now() - i.timeStamp, u.add(s), n();
        });
      });
    });
  }
},
    b = function b(e) {
  var t,
      n = a("TTFB");
  t = function () {
    try {
      var t = performance.getEntriesByType("navigation")[0] || function () {
        var e = performance.timing,
            t = {
          entryType: "navigation",
          startTime: 0
        };

        for (var n in e) "navigationStart" !== n && "toJSON" !== n && (t[n] = Math.max(e[n] - e.navigationStart, 0));

        return t;
      }();

      if (n.value = n.delta = t.responseStart, n.value < 0) return;
      n.entries = [t], e(n);
    } catch (e) {}
  }, "complete" === document.readyState ? setTimeout(t, 0) : addEventListener("pageshow", t);
};

export { s as getCLS, l as getFCP, L as getFID, T as getLCP, b as getTTFB };
