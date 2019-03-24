(function(e) {
  function t(t) {
    for (
      var r, a, i = t[0], u = t[1], l = t[2], p = 0, y = [];
      p < i.length;
      p++
    )
      (a = i[p]), o[a] && y.push(o[a][0]), (o[a] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    c && c(t);
    while (y.length) y.shift()();
    return s.push.apply(s, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < s.length; t++) {
      for (var n = s[t], r = !0, i = 1; i < n.length; i++) {
        var u = n[i];
        0 !== o[u] && (r = !1);
      }
      r && (s.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { app: 0 },
    s = [];
  function a(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = e),
    (a.c = r),
    (a.d = function(e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function(e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          a.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (a.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = "/");
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var l = 0; l < i.length; l++) t(i[l]);
  var c = u;
  s.push(["7309", "chunk-vendors"]), n();
})({
  3506: function(e, t, n) {
    "use strict";
    var r = n("8232"),
      o = n.n(r);
    o.a;
  },
  "5b93": function(e, t, n) {},
  7309: function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("2b0e"),
      o = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            e._v("\n  harness\n  "),
            n("json-view", {
              attrs: {
                data: e.data,
                rootKey: "view",
                maxDepth: 1,
                styles: { key: "#0977e6" }
              }
            })
          ],
          1
        );
      },
      s = [],
      a = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { attrs: { id: "json-view" } },
          [
            n("json-view-item", {
              attrs: {
                id: "root-item",
                data: e.parsed,
                maxDepth: e.maxDepth,
                styles: e.customStyles
              }
            })
          ],
          1
        );
      },
      i = [],
      u = n("9ab4"),
      l = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "json-view-item" }, [
          "object" === e.data.type || "array" === e.data.type
            ? n(
                "div",
                [
                  n(
                    "div",
                    {
                      staticClass: "data-key",
                      style: e.keyColor,
                      on: {
                        click: function(t) {
                          return t.stopPropagation(), e.toggleOpen(t);
                        }
                      }
                    },
                    [
                      n("div", { class: e.classes }),
                      e._v("\n      " + e._s(e.data.key) + ":\n      "),
                      n("span", { staticClass: "properties" }, [
                        e._v(" " + e._s(e.lengthString))
                      ])
                    ]
                  ),
                  e._l(e.data.children, function(t) {
                    return n("json-view-item", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e.open,
                          expression: "open"
                        }
                      ],
                      key: e.getKey(t),
                      attrs: { data: t, maxDepth: e.maxDepth, styles: e.styles }
                    });
                  })
                ],
                2
              )
            : e._e(),
          "value" === e.data.type
            ? n("div", { staticClass: "value-key" }, [
                n("span", { style: e.valueKeyColor }, [
                  e._v(" " + e._s(e.data.key) + ": ")
                ]),
                n("span", { style: e.getValueStyle(e.data.value) }, [
                  e._v(
                    "\n      " + e._s(JSON.stringify(e.data.value)) + "\n    "
                  )
                ])
              ])
            : e._e()
        ]);
      },
      c = [];
    function p(e) {
      return (
        (p =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        p(e)
      );
    }
    var y = r["a"].extend({
        name: "json-view-item",
        data: function() {
          return { open: this.data.depth < this.maxDepth };
        },
        props: {
          data: { required: !0, type: Object },
          maxDepth: { type: Number, required: !1, default: 1 },
          styles: { type: Object, required: !0 }
        },
        methods: {
          toggleOpen: function() {
            this.open = !this.open;
          },
          getKey: function(e) {
            return isNaN(e.key) ? '"' + e.key + '":' : e.key + ":";
          },
          getValueStyle: function(e) {
            var t = p(e);
            switch (t) {
              case "string":
                return { color: this.styles.string };
              case "number":
                return { color: this.styles.number };
              case "boolean":
                return { color: this.styles.boolean };
              case "object":
                return { color: this.styles.null };
              default:
                return { color: this.styles.valueKeyColor };
            }
          }
        },
        computed: {
          classes: function() {
            return { "chevron-arrow": !0, opened: this.open };
          },
          lengthString: function() {
            return 1 === this.data.length
              ? this.data.length + " property"
              : this.data.length + " properties";
          },
          keyColor: function() {
            return { color: this.styles.key };
          },
          valueKeyColor: function() {
            return { color: this.styles.valueKey };
          }
        }
      }),
      f = y,
      d = (n("3506"), n("2877")),
      h = Object(d["a"])(f, l, c, !1, null, "066d7d1b", null),
      b = h.exports;
    function v(e) {
      return (
        (v =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        v(e)
      );
    }
    var m = r["a"].extend({
        name: "json-view",
        props: {
          data: { required: !0, type: Object },
          rootKey: { type: String, required: !1, default: "root" },
          maxDepth: { type: Number, required: !1, default: 1 },
          styles: { type: Object, required: !1 }
        },
        components: { "json-view-item": b },
        methods: {
          build: function(e, t, n) {
            if (this.isObject(t)) {
              for (
                var r = [], o = 0, s = Object.entries(t);
                o < s.length;
                o++
              ) {
                var a = s[o],
                  i = a[0],
                  u = a[1];
                r.push(this.build(i, u, n + 1));
              }
              return {
                key: e,
                type: "object",
                depth: n,
                length: r.length,
                children: r
              };
            }
            if (this.isArray(t)) {
              r = [];
              for (var l = 0; l < t.length; l++)
                r.push(this.build(l.toString(), t[l], n + 1));
              return {
                key: e,
                type: "array",
                depth: n,
                length: r.length,
                children: r
              };
            }
            return { key: e, type: "value", depth: n, value: t };
          },
          isObject: function(e) {
            return "object" === v(e) && null !== e && !this.isArray(e);
          },
          isArray: function(e) {
            return Array.isArray(e);
          }
        },
        computed: {
          parsed: function() {
            return this.build(this.rootKey, u["a"]({}, this.data), 0);
          },
          customStyles: function() {
            var e = {
              key: "#002b36",
              valueKey: "#073642",
              string: "#268bd2",
              number: "#2aa198",
              boolean: "#cb4b16",
              null: "#6c71c4"
            };
            return Object.assign(e, this.styles);
          }
        }
      }),
      g = m,
      j = (n("741d"), Object(d["a"])(g, a, i, !1, null, null, null)),
      w = j.exports,
      S = r["a"].extend({
        components: { "json-view": w },
        computed: {
          data: function() {
            var e = {
              first: "level",
              works: !0,
              number: 100,
              missing: null,
              list: ["fun", { object: { worst: !0 } }],
              object: { worst: "nightmare" }
            };
            return e;
          }
        }
      }),
      _ = S,
      O = (n("a834"), Object(d["a"])(_, o, s, !1, null, null, null)),
      k = O.exports;
    (r["a"].config.productionTip = !1),
      new r["a"]({
        render: function(e) {
          return e(k);
        }
      }).$mount("#app");
  },
  "741d": function(e, t, n) {
    "use strict";
    var r = n("c29e"),
      o = n.n(r);
    o.a;
  },
  8232: function(e, t, n) {},
  a834: function(e, t, n) {
    "use strict";
    var r = n("5b93"),
      o = n.n(r);
    o.a;
  },
  c29e: function(e, t, n) {}
});
//# sourceMappingURL=app.d2bb53b2.js.map
