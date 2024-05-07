"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! For license information please see main.js.LICENSE.txt */
(function () {
  var e = {
    692: function _(e, t) {
      var n;
      !function (t, n) {
        "use strict";

        "object" == _typeof(e.exports) ? e.exports = t.document ? n(t, !0) : function (e) {
          if (!e.document) throw new Error("jQuery requires a window with a document");
          return n(e);
        } : n(t);
      }("undefined" != typeof window ? window : this, function (i, o) {
        "use strict";

        var r = [],
            s = Object.getPrototypeOf,
            a = r.slice,
            l = r.flat ? function (e) {
          return r.flat.call(e);
        } : function (e) {
          return r.concat.apply([], e);
        },
            c = r.push,
            d = r.indexOf,
            u = {},
            p = u.toString,
            f = u.hasOwnProperty,
            h = f.toString,
            v = h.call(Object),
            g = {},
            y = function y(e) {
          return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
        },
            m = function m(e) {
          return null != e && e === e.window;
        },
            w = i.document,
            b = {
          type: !0,
          src: !0,
          nonce: !0,
          noModule: !0
        };

        function x(e, t, n) {
          var i,
              o,
              r = (n = n || w).createElement("script");
          if (r.text = e, t) for (i in b) {
            (o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
          }
          n.head.appendChild(r).parentNode.removeChild(r);
        }

        function k(e) {
          return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? u[p.call(e)] || "object" : _typeof(e);
        }

        var T = "3.7.1",
            S = /HTML$/i,
            C = function C(e, t) {
          return new C.fn.init(e, t);
        };

        function $(e) {
          var t = !!e && "length" in e && e.length,
              n = k(e);
          return !y(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
        }

        function A(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }

        C.fn = C.prototype = {
          jquery: T,
          constructor: C,
          length: 0,
          toArray: function toArray() {
            return a.call(this);
          },
          get: function get(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
          },
          pushStack: function pushStack(e) {
            var t = C.merge(this.constructor(), e);
            return t.prevObject = this, t;
          },
          each: function each(e) {
            return C.each(this, e);
          },
          map: function map(e) {
            return this.pushStack(C.map(this, function (t, n) {
              return e.call(t, n, t);
            }));
          },
          slice: function slice() {
            return this.pushStack(a.apply(this, arguments));
          },
          first: function first() {
            return this.eq(0);
          },
          last: function last() {
            return this.eq(-1);
          },
          even: function even() {
            return this.pushStack(C.grep(this, function (e, t) {
              return (t + 1) % 2;
            }));
          },
          odd: function odd() {
            return this.pushStack(C.grep(this, function (e, t) {
              return t % 2;
            }));
          },
          eq: function eq(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function end() {
            return this.prevObject || this.constructor();
          },
          push: c,
          sort: r.sort,
          splice: r.splice
        }, C.extend = C.fn.extend = function () {
          var e,
              t,
              n,
              i,
              o,
              r,
              s = arguments[0] || {},
              a = 1,
              l = arguments.length,
              c = !1;

          for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == _typeof(s) || y(s) || (s = {}), a === l && (s = this, a--); a < l; a++) {
            if (null != (e = arguments[a])) for (t in e) {
              i = e[t], "__proto__" !== t && s !== i && (c && i && (C.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[t], r = o && !Array.isArray(n) ? [] : o || C.isPlainObject(n) ? n : {}, o = !1, s[t] = C.extend(c, r, i)) : void 0 !== i && (s[t] = i));
            }
          }

          return s;
        }, C.extend({
          expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function error(e) {
            throw new Error(e);
          },
          noop: function noop() {},
          isPlainObject: function isPlainObject(e) {
            var t, n;
            return !(!e || "[object Object]" !== p.call(e) || (t = s(e)) && ("function" != typeof (n = f.call(t, "constructor") && t.constructor) || h.call(n) !== v));
          },
          isEmptyObject: function isEmptyObject(e) {
            var t;

            for (t in e) {
              return !1;
            }

            return !0;
          },
          globalEval: function globalEval(e, t, n) {
            x(e, {
              nonce: t && t.nonce
            }, n);
          },
          each: function each(e, t) {
            var n,
                i = 0;
            if ($(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) {
              ;
            } else for (i in e) {
              if (!1 === t.call(e[i], i, e[i])) break;
            }
            return e;
          },
          text: function text(e) {
            var t,
                n = "",
                i = 0,
                o = e.nodeType;
            if (!o) for (; t = e[i++];) {
              n += C.text(t);
            }
            return 1 === o || 11 === o ? e.textContent : 9 === o ? e.documentElement.textContent : 3 === o || 4 === o ? e.nodeValue : n;
          },
          makeArray: function makeArray(e, t) {
            var n = t || [];
            return null != e && ($(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n;
          },
          inArray: function inArray(e, t, n) {
            return null == t ? -1 : d.call(t, e, n);
          },
          isXMLDoc: function isXMLDoc(e) {
            var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
            return !S.test(t || n && n.nodeName || "HTML");
          },
          merge: function merge(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) {
              e[o++] = t[i];
            }

            return e.length = o, e;
          },
          grep: function grep(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) {
              !t(e[o], o) !== s && i.push(e[o]);
            }

            return i;
          },
          map: function map(e, t, n) {
            var i,
                o,
                r = 0,
                s = [];
            if ($(e)) for (i = e.length; r < i; r++) {
              null != (o = t(e[r], r, n)) && s.push(o);
            } else for (r in e) {
              null != (o = t(e[r], r, n)) && s.push(o);
            }
            return l(s);
          },
          guid: 1,
          support: g
        }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = r[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
          u["[object " + t + "]"] = t.toLowerCase();
        });
        var E = r.pop,
            j = r.sort,
            D = r.splice,
            L = "[\\x20\\t\\r\\n\\f]",
            H = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g");

        C.contains = function (e, t) {
          var n = t && t.parentNode;
          return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
        };

        var O = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

        function P(e, t) {
          return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        }

        C.escapeSelector = function (e) {
          return (e + "").replace(O, P);
        };

        var N = w,
            q = c;
        !function () {
          var e,
              t,
              n,
              o,
              s,
              l,
              c,
              u,
              p,
              h,
              v = q,
              y = C.expando,
              m = 0,
              w = 0,
              b = ee(),
              x = ee(),
              k = ee(),
              T = ee(),
              S = function S(e, t) {
            return e === t && (s = !0), 0;
          },
              $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              O = "(?:\\\\[\\da-fA-F]{1,6}" + L + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              P = "\\[" + L + "*(" + O + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + L + "*\\]",
              M = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
              I = new RegExp(L + "+", "g"),
              z = new RegExp("^" + L + "*," + L + "*"),
              W = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
              R = new RegExp(L + "|>"),
              F = new RegExp(M),
              B = new RegExp("^" + O + "$"),
              _ = {
            ID: new RegExp("^#(" + O + ")"),
            CLASS: new RegExp("^\\.(" + O + ")"),
            TAG: new RegExp("^(" + O + "|[*])"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + M),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + $ + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
          },
              U = /^(?:input|select|textarea|button)$/i,
              X = /^h\d$/i,
              Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              V = /[+~]/,
              G = new RegExp("\\\\[\\da-fA-F]{1,6}" + L + "?|\\\\([^\\r\\n\\f])", "g"),
              Q = function Q(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
          },
              J = function J() {
            le();
          },
              K = pe(function (e) {
            return !0 === e.disabled && A(e, "fieldset");
          }, {
            dir: "parentNode",
            next: "legend"
          });

          try {
            v.apply(r = a.call(N.childNodes), N.childNodes), r[N.childNodes.length].nodeType;
          } catch (e) {
            v = {
              apply: function apply(e, t) {
                q.apply(e, a.call(t));
              },
              call: function call(e) {
                q.apply(e, a.call(arguments, 1));
              }
            };
          }

          function Z(e, t, n, i) {
            var o,
                r,
                s,
                a,
                c,
                d,
                f,
                h = t && t.ownerDocument,
                m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;

            if (!i && (le(t), t = t || l, u)) {
              if (11 !== m && (c = Y.exec(e))) if (o = c[1]) {
                if (9 === m) {
                  if (!(s = t.getElementById(o))) return n;
                  if (s.id === o) return v.call(n, s), n;
                } else if (h && (s = h.getElementById(o)) && Z.contains(t, s) && s.id === o) return v.call(n, s), n;
              } else {
                if (c[2]) return v.apply(n, t.getElementsByTagName(e)), n;
                if ((o = c[3]) && t.getElementsByClassName) return v.apply(n, t.getElementsByClassName(o)), n;
              }

              if (!(T[e + " "] || p && p.test(e))) {
                if (f = e, h = t, 1 === m && (R.test(e) || W.test(e))) {
                  for ((h = V.test(e) && ae(t.parentNode) || t) == t && g.scope || ((a = t.getAttribute("id")) ? a = C.escapeSelector(a) : t.setAttribute("id", a = y)), r = (d = de(e)).length; r--;) {
                    d[r] = (a ? "#" + a : ":scope") + " " + ue(d[r]);
                  }

                  f = d.join(",");
                }

                try {
                  return v.apply(n, h.querySelectorAll(f)), n;
                } catch (t) {
                  T(e, !0);
                } finally {
                  a === y && t.removeAttribute("id");
                }
              }
            }

            return me(e.replace(H, "$1"), t, n, i);
          }

          function ee() {
            var e = [];
            return function n(i, o) {
              return e.push(i + " ") > t.cacheLength && delete n[e.shift()], n[i + " "] = o;
            };
          }

          function te(e) {
            return e[y] = !0, e;
          }

          function ne(e) {
            var t = l.createElement("fieldset");

            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), t = null;
            }
          }

          function ie(e) {
            return function (t) {
              return A(t, "input") && t.type === e;
            };
          }

          function oe(e) {
            return function (t) {
              return (A(t, "input") || A(t, "button")) && t.type === e;
            };
          }

          function re(e) {
            return function (t) {
              return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && K(t) === e : t.disabled === e : "label" in t && t.disabled === e;
            };
          }

          function se(e) {
            return te(function (t) {
              return t = +t, te(function (n, i) {
                for (var o, r = e([], n.length, t), s = r.length; s--;) {
                  n[o = r[s]] && (n[o] = !(i[o] = n[o]));
                }
              });
            });
          }

          function ae(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }

          function le(e) {
            var n,
                i = e ? e.ownerDocument || e : N;
            return i != l && 9 === i.nodeType && i.documentElement ? (c = (l = i).documentElement, u = !C.isXMLDoc(l), h = c.matches || c.webkitMatchesSelector || c.msMatchesSelector, c.msMatchesSelector && N != l && (n = l.defaultView) && n.top !== n && n.addEventListener("unload", J), g.getById = ne(function (e) {
              return c.appendChild(e).id = C.expando, !l.getElementsByName || !l.getElementsByName(C.expando).length;
            }), g.disconnectedMatch = ne(function (e) {
              return h.call(e, "*");
            }), g.scope = ne(function () {
              return l.querySelectorAll(":scope");
            }), g.cssHas = ne(function () {
              try {
                return l.querySelector(":has(*,:jqfake)"), !1;
              } catch (e) {
                return !0;
              }
            }), g.getById ? (t.filter.ID = function (e) {
              var t = e.replace(G, Q);
              return function (e) {
                return e.getAttribute("id") === t;
              };
            }, t.find.ID = function (e, t) {
              if (void 0 !== t.getElementById && u) {
                var n = t.getElementById(e);
                return n ? [n] : [];
              }
            }) : (t.filter.ID = function (e) {
              var t = e.replace(G, Q);
              return function (e) {
                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                return n && n.value === t;
              };
            }, t.find.ID = function (e, t) {
              if (void 0 !== t.getElementById && u) {
                var n,
                    i,
                    o,
                    r = t.getElementById(e);

                if (r) {
                  if ((n = r.getAttributeNode("id")) && n.value === e) return [r];

                  for (o = t.getElementsByName(e), i = 0; r = o[i++];) {
                    if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                  }
                }

                return [];
              }
            }), t.find.TAG = function (e, t) {
              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e);
            }, t.find.CLASS = function (e, t) {
              if (void 0 !== t.getElementsByClassName && u) return t.getElementsByClassName(e);
            }, p = [], ne(function (e) {
              var t;
              c.appendChild(e).innerHTML = "<a id='" + y + "' href='' disabled='disabled'></a><select id='" + y + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || p.push("\\[" + L + "*(?:value|" + $ + ")"), e.querySelectorAll("[id~=" + y + "-]").length || p.push("~="), e.querySelectorAll("a#" + y + "+*").length || p.push(".#.+[+~]"), e.querySelectorAll(":checked").length || p.push(":checked"), (t = l.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), c.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"), (t = l.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || p.push("\\[" + L + "*name" + L + "*=" + L + "*(?:''|\"\")");
            }), g.cssHas || p.push(":has"), p = p.length && new RegExp(p.join("|")), S = function S(e, t) {
              if (e === t) return s = !0, 0;
              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !g.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument == N && Z.contains(N, e) ? -1 : t === l || t.ownerDocument == N && Z.contains(N, t) ? 1 : o ? d.call(o, e) - d.call(o, t) : 0 : 4 & n ? -1 : 1);
            }, l) : l;
          }

          for (e in Z.matches = function (e, t) {
            return Z(e, null, null, t);
          }, Z.matchesSelector = function (e, t) {
            if (le(e), u && !T[t + " "] && (!p || !p.test(t))) try {
              var n = h.call(e, t);
              if (n || g.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (e) {
              T(t, !0);
            }
            return Z(t, l, null, [e]).length > 0;
          }, Z.contains = function (e, t) {
            return (e.ownerDocument || e) != l && le(e), C.contains(e, t);
          }, Z.attr = function (e, n) {
            (e.ownerDocument || e) != l && le(e);
            var i = t.attrHandle[n.toLowerCase()],
                o = i && f.call(t.attrHandle, n.toLowerCase()) ? i(e, n, !u) : void 0;
            return void 0 !== o ? o : e.getAttribute(n);
          }, Z.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }, C.uniqueSort = function (e) {
            var t,
                n = [],
                i = 0,
                r = 0;

            if (s = !g.sortStable, o = !g.sortStable && a.call(e, 0), j.call(e, S), s) {
              for (; t = e[r++];) {
                t === e[r] && (i = n.push(r));
              }

              for (; i--;) {
                D.call(e, n[i], 1);
              }
            }

            return o = null, e;
          }, C.fn.uniqueSort = function () {
            return this.pushStack(C.uniqueSort(a.apply(this)));
          }, t = C.expr = {
            cacheLength: 50,
            createPseudo: te,
            match: _,
            attrHandle: {},
            find: {},
            relative: {
              ">": {
                dir: "parentNode",
                first: !0
              },
              " ": {
                dir: "parentNode"
              },
              "+": {
                dir: "previousSibling",
                first: !0
              },
              "~": {
                dir: "previousSibling"
              }
            },
            preFilter: {
              ATTR: function ATTR(e) {
                return e[1] = e[1].replace(G, Q), e[3] = (e[3] || e[4] || e[5] || "").replace(G, Q), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
              },
              CHILD: function CHILD(e) {
                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || Z.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Z.error(e[0]), e;
              },
              PSEUDO: function PSEUDO(e) {
                var t,
                    n = !e[6] && e[2];
                return _.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && F.test(n) && (t = de(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
              }
            },
            filter: {
              TAG: function TAG(e) {
                var t = e.replace(G, Q).toLowerCase();
                return "*" === e ? function () {
                  return !0;
                } : function (e) {
                  return A(e, t);
                };
              },
              CLASS: function CLASS(e) {
                var t = b[e + " "];
                return t || (t = new RegExp("(^|" + L + ")" + e + "(" + L + "|$)")) && b(e, function (e) {
                  return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                });
              },
              ATTR: function ATTR(e, t, n) {
                return function (i) {
                  var o = Z.attr(i, e);
                  return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(I, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function CHILD(e, t, n, i, o) {
                var r = "nth" !== e.slice(0, 3),
                    s = "last" !== e.slice(-4),
                    a = "of-type" === t;
                return 1 === i && 0 === o ? function (e) {
                  return !!e.parentNode;
                } : function (t, n, l) {
                  var c,
                      d,
                      u,
                      p,
                      f,
                      h = r !== s ? "nextSibling" : "previousSibling",
                      v = t.parentNode,
                      g = a && t.nodeName.toLowerCase(),
                      w = !l && !a,
                      b = !1;

                  if (v) {
                    if (r) {
                      for (; h;) {
                        for (u = t; u = u[h];) {
                          if (a ? A(u, g) : 1 === u.nodeType) return !1;
                        }

                        f = h = "only" === e && !f && "nextSibling";
                      }

                      return !0;
                    }

                    if (f = [s ? v.firstChild : v.lastChild], s && w) {
                      for (b = (p = (c = (d = v[y] || (v[y] = {}))[e] || [])[0] === m && c[1]) && c[2], u = p && v.childNodes[p]; u = ++p && u && u[h] || (b = p = 0) || f.pop();) {
                        if (1 === u.nodeType && ++b && u === t) {
                          d[e] = [m, p, b];
                          break;
                        }
                      }
                    } else if (w && (b = p = (c = (d = t[y] || (t[y] = {}))[e] || [])[0] === m && c[1]), !1 === b) for (; (u = ++p && u && u[h] || (b = p = 0) || f.pop()) && (!(a ? A(u, g) : 1 === u.nodeType) || !++b || (w && ((d = u[y] || (u[y] = {}))[e] = [m, b]), u !== t));) {
                      ;
                    }

                    return (b -= o) === i || b % i == 0 && b / i >= 0;
                  }
                };
              },
              PSEUDO: function PSEUDO(e, n) {
                var i,
                    o = t.pseudos[e] || t.setFilters[e.toLowerCase()] || Z.error("unsupported pseudo: " + e);
                return o[y] ? o(n) : o.length > 1 ? (i = [e, e, "", n], t.setFilters.hasOwnProperty(e.toLowerCase()) ? te(function (e, t) {
                  for (var i, r = o(e, n), s = r.length; s--;) {
                    e[i = d.call(e, r[s])] = !(t[i] = r[s]);
                  }
                }) : function (e) {
                  return o(e, 0, i);
                }) : o;
              }
            },
            pseudos: {
              not: te(function (e) {
                var t = [],
                    n = [],
                    i = ye(e.replace(H, "$1"));
                return i[y] ? te(function (e, t, n, o) {
                  for (var r, s = i(e, null, o, []), a = e.length; a--;) {
                    (r = s[a]) && (e[a] = !(t[a] = r));
                  }
                }) : function (e, o, r) {
                  return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop();
                };
              }),
              has: te(function (e) {
                return function (t) {
                  return Z(e, t).length > 0;
                };
              }),
              contains: te(function (e) {
                return e = e.replace(G, Q), function (t) {
                  return (t.textContent || C.text(t)).indexOf(e) > -1;
                };
              }),
              lang: te(function (e) {
                return B.test(e || "") || Z.error("unsupported lang: " + e), e = e.replace(G, Q).toLowerCase(), function (t) {
                  var n;

                  do {
                    if (n = u ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                  } while ((t = t.parentNode) && 1 === t.nodeType);

                  return !1;
                };
              }),
              target: function target(e) {
                var t = i.location && i.location.hash;
                return t && t.slice(1) === e.id;
              },
              root: function root(e) {
                return e === c;
              },
              focus: function focus(e) {
                return e === function () {
                  try {
                    return l.activeElement;
                  } catch (e) {}
                }() && l.hasFocus() && !!(e.type || e.href || ~e.tabIndex);
              },
              enabled: re(!1),
              disabled: re(!0),
              checked: function checked(e) {
                return A(e, "input") && !!e.checked || A(e, "option") && !!e.selected;
              },
              selected: function selected(e) {
                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
              },
              empty: function empty(e) {
                for (e = e.firstChild; e; e = e.nextSibling) {
                  if (e.nodeType < 6) return !1;
                }

                return !0;
              },
              parent: function parent(e) {
                return !t.pseudos.empty(e);
              },
              header: function header(e) {
                return X.test(e.nodeName);
              },
              input: function input(e) {
                return U.test(e.nodeName);
              },
              button: function button(e) {
                return A(e, "input") && "button" === e.type || A(e, "button");
              },
              text: function text(e) {
                var t;
                return A(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
              },
              first: se(function () {
                return [0];
              }),
              last: se(function (e, t) {
                return [t - 1];
              }),
              eq: se(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: se(function (e, t) {
                for (var n = 0; n < t; n += 2) {
                  e.push(n);
                }

                return e;
              }),
              odd: se(function (e, t) {
                for (var n = 1; n < t; n += 2) {
                  e.push(n);
                }

                return e;
              }),
              lt: se(function (e, t, n) {
                var i;

                for (i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) {
                  e.push(i);
                }

                return e;
              }),
              gt: se(function (e, t, n) {
                for (var i = n < 0 ? n + t : n; ++i < t;) {
                  e.push(i);
                }

                return e;
              })
            }
          }, t.pseudos.nth = t.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
          }) {
            t.pseudos[e] = ie(e);
          }

          for (e in {
            submit: !0,
            reset: !0
          }) {
            t.pseudos[e] = oe(e);
          }

          function ce() {}

          function de(e, n) {
            var i,
                o,
                r,
                s,
                a,
                l,
                c,
                d = x[e + " "];
            if (d) return n ? 0 : d.slice(0);

            for (a = e, l = [], c = t.preFilter; a;) {
              for (s in i && !(o = z.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = W.exec(a)) && (i = o.shift(), r.push({
                value: i,
                type: o[0].replace(H, " ")
              }), a = a.slice(i.length)), t.filter) {
                !(o = _[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                  value: i,
                  type: s,
                  matches: o
                }), a = a.slice(i.length));
              }

              if (!i) break;
            }

            return n ? a.length : a ? Z.error(e) : x(e, l).slice(0);
          }

          function ue(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) {
              i += e[t].value;
            }

            return i;
          }

          function pe(e, t, n) {
            var i = t.dir,
                o = t.next,
                r = o || i,
                s = n && "parentNode" === r,
                a = w++;
            return t.first ? function (t, n, o) {
              for (; t = t[i];) {
                if (1 === t.nodeType || s) return e(t, n, o);
              }

              return !1;
            } : function (t, n, l) {
              var c,
                  d,
                  u = [m, a];

              if (l) {
                for (; t = t[i];) {
                  if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                }
              } else for (; t = t[i];) {
                if (1 === t.nodeType || s) if (d = t[y] || (t[y] = {}), o && A(t, o)) t = t[i] || t;else {
                  if ((c = d[r]) && c[0] === m && c[1] === a) return u[2] = c[2];
                  if (d[r] = u, u[2] = e(t, n, l)) return !0;
                }
              }

              return !1;
            };
          }

          function fe(e) {
            return e.length > 1 ? function (t, n, i) {
              for (var o = e.length; o--;) {
                if (!e[o](t, n, i)) return !1;
              }

              return !0;
            } : e[0];
          }

          function he(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++) {
              (r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
            }

            return s;
          }

          function ve(e, t, n, i, o, r) {
            return i && !i[y] && (i = ve(i)), o && !o[y] && (o = ve(o, r)), te(function (r, s, a, l) {
              var c,
                  u,
                  p,
                  f,
                  h = [],
                  g = [],
                  y = s.length,
                  m = r || function (e, t, n) {
                for (var i = 0, o = t.length; i < o; i++) {
                  Z(e, t[i], n);
                }

                return n;
              }(t || "*", a.nodeType ? [a] : a, []),
                  w = !e || !r && t ? m : he(m, h, e, a, l);

              if (n ? n(w, f = o || (r ? e : y || i) ? [] : s, a, l) : f = w, i) for (c = he(f, g), i(c, [], a, l), u = c.length; u--;) {
                (p = c[u]) && (f[g[u]] = !(w[g[u]] = p));
              }

              if (r) {
                if (o || e) {
                  if (o) {
                    for (c = [], u = f.length; u--;) {
                      (p = f[u]) && c.push(w[u] = p);
                    }

                    o(null, f = [], c, l);
                  }

                  for (u = f.length; u--;) {
                    (p = f[u]) && (c = o ? d.call(r, p) : h[u]) > -1 && (r[c] = !(s[c] = p));
                  }
                }
              } else f = he(f === s ? f.splice(y, f.length) : f), o ? o(null, s, f, l) : v.apply(s, f);
            });
          }

          function ge(e) {
            for (var i, o, r, s = e.length, a = t.relative[e[0].type], l = a || t.relative[" "], c = a ? 1 : 0, u = pe(function (e) {
              return e === i;
            }, l, !0), p = pe(function (e) {
              return d.call(i, e) > -1;
            }, l, !0), f = [function (e, t, o) {
              var r = !a && (o || t != n) || ((i = t).nodeType ? u(e, t, o) : p(e, t, o));
              return i = null, r;
            }]; c < s; c++) {
              if (o = t.relative[e[c].type]) f = [pe(fe(f), o)];else {
                if ((o = t.filter[e[c].type].apply(null, e[c].matches))[y]) {
                  for (r = ++c; r < s && !t.relative[e[r].type]; r++) {
                    ;
                  }

                  return ve(c > 1 && fe(f), c > 1 && ue(e.slice(0, c - 1).concat({
                    value: " " === e[c - 2].type ? "*" : ""
                  })).replace(H, "$1"), o, c < r && ge(e.slice(c, r)), r < s && ge(e = e.slice(r)), r < s && ue(e));
                }

                f.push(o);
              }
            }

            return fe(f);
          }

          function ye(e, i) {
            var o,
                r = [],
                s = [],
                a = k[e + " "];

            if (!a) {
              for (i || (i = de(e)), o = i.length; o--;) {
                (a = ge(i[o]))[y] ? r.push(a) : s.push(a);
              }

              a = k(e, function (e, i) {
                var o = i.length > 0,
                    r = e.length > 0,
                    s = function s(_s, a, c, d, p) {
                  var f,
                      h,
                      g,
                      y = 0,
                      w = "0",
                      b = _s && [],
                      x = [],
                      k = n,
                      T = _s || r && t.find.TAG("*", p),
                      S = m += null == k ? 1 : Math.random() || .1,
                      $ = T.length;

                  for (p && (n = a == l || a || p); w !== $ && null != (f = T[w]); w++) {
                    if (r && f) {
                      for (h = 0, a || f.ownerDocument == l || (le(f), c = !u); g = e[h++];) {
                        if (g(f, a || l, c)) {
                          v.call(d, f);
                          break;
                        }
                      }

                      p && (m = S);
                    }

                    o && ((f = !g && f) && y--, _s && b.push(f));
                  }

                  if (y += w, o && w !== y) {
                    for (h = 0; g = i[h++];) {
                      g(b, x, a, c);
                    }

                    if (_s) {
                      if (y > 0) for (; w--;) {
                        b[w] || x[w] || (x[w] = E.call(d));
                      }
                      x = he(x);
                    }

                    v.apply(d, x), p && !_s && x.length > 0 && y + i.length > 1 && C.uniqueSort(d);
                  }

                  return p && (m = S, n = k), b;
                };

                return o ? te(s) : s;
              }(s, r)), a.selector = e;
            }

            return a;
          }

          function me(e, n, i, o) {
            var r,
                s,
                a,
                l,
                c,
                d = "function" == typeof e && e,
                p = !o && de(e = d.selector || e);

            if (i = i || [], 1 === p.length) {
              if ((s = p[0] = p[0].slice(0)).length > 2 && "ID" === (a = s[0]).type && 9 === n.nodeType && u && t.relative[s[1].type]) {
                if (!(n = (t.find.ID(a.matches[0].replace(G, Q), n) || [])[0])) return i;
                d && (n = n.parentNode), e = e.slice(s.shift().value.length);
              }

              for (r = _.needsContext.test(e) ? 0 : s.length; r-- && (a = s[r], !t.relative[l = a.type]);) {
                if ((c = t.find[l]) && (o = c(a.matches[0].replace(G, Q), V.test(s[0].type) && ae(n.parentNode) || n))) {
                  if (s.splice(r, 1), !(e = o.length && ue(s))) return v.apply(i, o), i;
                  break;
                }
              }
            }

            return (d || ye(e, p))(o, n, !u, i, !n || V.test(e) && ae(n.parentNode) || n), i;
          }

          ce.prototype = t.filters = t.pseudos, t.setFilters = new ce(), g.sortStable = y.split("").sort(S).join("") === y, le(), g.sortDetached = ne(function (e) {
            return 1 & e.compareDocumentPosition(l.createElement("fieldset"));
          }), C.find = Z, C.expr[":"] = C.expr.pseudos, C.unique = C.uniqueSort, Z.compile = ye, Z.select = me, Z.setDocument = le, Z.tokenize = de, Z.escape = C.escapeSelector, Z.getText = C.text, Z.isXML = C.isXMLDoc, Z.selectors = C.expr, Z.support = C.support, Z.uniqueSort = C.uniqueSort;
        }();

        var M = function M(e, t, n) {
          for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
            if (1 === e.nodeType) {
              if (o && C(e).is(n)) break;
              i.push(e);
            }
          }

          return i;
        },
            I = function I(e, t) {
          for (var n = []; e; e = e.nextSibling) {
            1 === e.nodeType && e !== t && n.push(e);
          }

          return n;
        },
            z = C.expr.match.needsContext,
            W = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function R(e, t, n) {
          return y(t) ? C.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n;
          }) : t.nodeType ? C.grep(e, function (e) {
            return e === t !== n;
          }) : "string" != typeof t ? C.grep(e, function (e) {
            return d.call(t, e) > -1 !== n;
          }) : C.filter(t, e, n);
        }

        C.filter = function (e, t, n) {
          var i = t[0];
          return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function (e) {
            return 1 === e.nodeType;
          }));
        }, C.fn.extend({
          find: function find(e) {
            var t,
                n,
                i = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(C(e).filter(function () {
              for (t = 0; t < i; t++) {
                if (C.contains(o[t], this)) return !0;
              }
            }));

            for (n = this.pushStack([]), t = 0; t < i; t++) {
              C.find(e, o[t], n);
            }

            return i > 1 ? C.uniqueSort(n) : n;
          },
          filter: function filter(e) {
            return this.pushStack(R(this, e || [], !1));
          },
          not: function not(e) {
            return this.pushStack(R(this, e || [], !0));
          },
          is: function is(e) {
            return !!R(this, "string" == typeof e && z.test(e) ? C(e) : e || [], !1).length;
          }
        });
        var F,
            B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (C.fn.init = function (e, t, n) {
          var i, o;
          if (!e) return this;

          if (n = n || F, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : B.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

            if (i[1]) {
              if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : w, !0)), W.test(i[1]) && C.isPlainObject(t)) for (i in t) {
                y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
              }
              return this;
            }

            return (o = w.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
          }

          return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
        }).prototype = C.fn, F = C(w);
        var _ = /^(?:parents|prev(?:Until|All))/,
            U = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
        };

        function X(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType;) {
            ;
          }

          return e;
        }

        C.fn.extend({
          has: function has(e) {
            var t = C(e, this),
                n = t.length;
            return this.filter(function () {
              for (var e = 0; e < n; e++) {
                if (C.contains(this, t[e])) return !0;
              }
            });
          },
          closest: function closest(e, t) {
            var n,
                i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && C(e);
            if (!z.test(e)) for (; i < o; i++) {
              for (n = this[i]; n && n !== t; n = n.parentNode) {
                if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                  r.push(n);
                  break;
                }
              }
            }
            return this.pushStack(r.length > 1 ? C.uniqueSort(r) : r);
          },
          index: function index(e) {
            return e ? "string" == typeof e ? d.call(C(e), this[0]) : d.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          },
          add: function add(e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
          },
          addBack: function addBack(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
          }
        }), C.each({
          parent: function parent(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function parents(e) {
            return M(e, "parentNode");
          },
          parentsUntil: function parentsUntil(e, t, n) {
            return M(e, "parentNode", n);
          },
          next: function next(e) {
            return X(e, "nextSibling");
          },
          prev: function prev(e) {
            return X(e, "previousSibling");
          },
          nextAll: function nextAll(e) {
            return M(e, "nextSibling");
          },
          prevAll: function prevAll(e) {
            return M(e, "previousSibling");
          },
          nextUntil: function nextUntil(e, t, n) {
            return M(e, "nextSibling", n);
          },
          prevUntil: function prevUntil(e, t, n) {
            return M(e, "previousSibling", n);
          },
          siblings: function siblings(e) {
            return I((e.parentNode || {}).firstChild, e);
          },
          children: function children(e) {
            return I(e.firstChild);
          },
          contents: function contents(e) {
            return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), C.merge([], e.childNodes));
          }
        }, function (e, t) {
          C.fn[e] = function (n, i) {
            var o = C.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = C.filter(i, o)), this.length > 1 && (U[e] || C.uniqueSort(o), _.test(e) && o.reverse()), this.pushStack(o);
          };
        });
        var Y = /[^\x20\t\r\n\f]+/g;

        function V(e) {
          return e;
        }

        function G(e) {
          throw e;
        }

        function Q(e, t, n, i) {
          var o;

          try {
            e && y(o = e.promise) ? o.call(e).done(t).fail(n) : e && y(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i));
          } catch (e) {
            n.apply(void 0, [e]);
          }
        }

        C.Callbacks = function (e) {
          e = "string" == typeof e ? function (e) {
            var t = {};
            return C.each(e.match(Y) || [], function (e, n) {
              t[n] = !0;
            }), t;
          }(e) : C.extend({}, e);

          var t,
              n,
              i,
              o,
              r = [],
              s = [],
              a = -1,
              l = function l() {
            for (o = o || e.once, i = t = !0; s.length; a = -1) {
              for (n = s.shift(); ++a < r.length;) {
                !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length, n = !1);
              }
            }

            e.memory || (n = !1), t = !1, o && (r = n ? [] : "");
          },
              c = {
            add: function add() {
              return r && (n && !t && (a = r.length - 1, s.push(n)), function t(n) {
                C.each(n, function (n, i) {
                  y(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== k(i) && t(i);
                });
              }(arguments), n && !t && l()), this;
            },
            remove: function remove() {
              return C.each(arguments, function (e, t) {
                for (var n; (n = C.inArray(t, r, n)) > -1;) {
                  r.splice(n, 1), n <= a && a--;
                }
              }), this;
            },
            has: function has(e) {
              return e ? C.inArray(e, r) > -1 : r.length > 0;
            },
            empty: function empty() {
              return r && (r = []), this;
            },
            disable: function disable() {
              return o = s = [], r = n = "", this;
            },
            disabled: function disabled() {
              return !r;
            },
            lock: function lock() {
              return o = s = [], n || t || (r = n = ""), this;
            },
            locked: function locked() {
              return !!o;
            },
            fireWith: function fireWith(e, n) {
              return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this;
            },
            fire: function fire() {
              return c.fireWith(this, arguments), this;
            },
            fired: function fired() {
              return !!i;
            }
          };

          return c;
        }, C.extend({
          Deferred: function Deferred(e) {
            var t = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]],
                n = "pending",
                o = {
              state: function state() {
                return n;
              },
              always: function always() {
                return r.done(arguments).fail(arguments), this;
              },
              "catch": function _catch(e) {
                return o.then(null, e);
              },
              pipe: function pipe() {
                var e = arguments;
                return C.Deferred(function (n) {
                  C.each(t, function (t, i) {
                    var o = y(e[i[4]]) && e[i[4]];
                    r[i[1]](function () {
                      var e = o && o.apply(this, arguments);
                      e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [e] : arguments);
                    });
                  }), e = null;
                }).promise();
              },
              then: function then(e, n, o) {
                var r = 0;

                function s(e, t, n, o) {
                  return function () {
                    var a = this,
                        l = arguments,
                        c = function c() {
                      var i, c;

                      if (!(e < r)) {
                        if ((i = n.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                        c = i && ("object" == _typeof(i) || "function" == typeof i) && i.then, y(c) ? o ? c.call(i, s(r, t, V, o), s(r, t, G, o)) : (r++, c.call(i, s(r, t, V, o), s(r, t, G, o), s(r, t, V, t.notifyWith))) : (n !== V && (a = void 0, l = [i]), (o || t.resolveWith)(a, l));
                      }
                    },
                        d = o ? c : function () {
                      try {
                        c();
                      } catch (i) {
                        C.Deferred.exceptionHook && C.Deferred.exceptionHook(i, d.error), e + 1 >= r && (n !== G && (a = void 0, l = [i]), t.rejectWith(a, l));
                      }
                    };

                    e ? d() : (C.Deferred.getErrorHook ? d.error = C.Deferred.getErrorHook() : C.Deferred.getStackHook && (d.error = C.Deferred.getStackHook()), i.setTimeout(d));
                  };
                }

                return C.Deferred(function (i) {
                  t[0][3].add(s(0, i, y(o) ? o : V, i.notifyWith)), t[1][3].add(s(0, i, y(e) ? e : V)), t[2][3].add(s(0, i, y(n) ? n : G));
                }).promise();
              },
              promise: function promise(e) {
                return null != e ? C.extend(e, o) : o;
              }
            },
                r = {};
            return C.each(t, function (e, i) {
              var s = i[2],
                  a = i[5];
              o[i[1]] = s.add, a && s.add(function () {
                n = a;
              }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(i[3].fire), r[i[0]] = function () {
                return r[i[0] + "With"](this === r ? void 0 : this, arguments), this;
              }, r[i[0] + "With"] = s.fireWith;
            }), o.promise(r), e && e.call(r, r), r;
          },
          when: function when(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                o = a.call(arguments),
                r = C.Deferred(),
                s = function s(e) {
              return function (n) {
                i[e] = this, o[e] = arguments.length > 1 ? a.call(arguments) : n, --t || r.resolveWith(i, o);
              };
            };

            if (t <= 1 && (Q(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || y(o[n] && o[n].then))) return r.then();

            for (; n--;) {
              Q(o[n], s(n), r.reject);
            }

            return r.promise();
          }
        });
        var J = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        C.Deferred.exceptionHook = function (e, t) {
          i.console && i.console.warn && e && J.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
        }, C.readyException = function (e) {
          i.setTimeout(function () {
            throw e;
          });
        };
        var K = C.Deferred();

        function Z() {
          w.removeEventListener("DOMContentLoaded", Z), i.removeEventListener("load", Z), C.ready();
        }

        C.fn.ready = function (e) {
          return K.then(e)["catch"](function (e) {
            C.readyException(e);
          }), this;
        }, C.extend({
          isReady: !1,
          readyWait: 1,
          ready: function ready(e) {
            (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || K.resolveWith(w, [C]));
          }
        }), C.ready.then = K.then, "complete" === w.readyState || "loading" !== w.readyState && !w.documentElement.doScroll ? i.setTimeout(C.ready) : (w.addEventListener("DOMContentLoaded", Z), i.addEventListener("load", Z));

        var ee = function ee(e, t, n, i, o, r, s) {
          var a = 0,
              l = e.length,
              c = null == n;
          if ("object" === k(n)) for (a in o = !0, n) {
            ee(e, t, a, n[a], !0, r, s);
          } else if (void 0 !== i && (o = !0, y(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function t(e, _t2, n) {
            return c.call(C(e), n);
          })), t)) for (; a < l; a++) {
            t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
          }
          return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
        },
            te = /^-ms-/,
            ne = /-([a-z])/g;

        function ie(e, t) {
          return t.toUpperCase();
        }

        function oe(e) {
          return e.replace(te, "ms-").replace(ne, ie);
        }

        var re = function re(e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };

        function se() {
          this.expando = C.expando + se.uid++;
        }

        se.uid = 1, se.prototype = {
          cache: function cache(e) {
            var t = e[this.expando];
            return t || (t = {}, re(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
              value: t,
              configurable: !0
            }))), t;
          },
          set: function set(e, t, n) {
            var i,
                o = this.cache(e);
            if ("string" == typeof t) o[oe(t)] = n;else for (i in t) {
              o[oe(i)] = t[i];
            }
            return o;
          },
          get: function get(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][oe(t)];
          },
          access: function access(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function remove(e, t) {
            var n,
                i = e[this.expando];

            if (void 0 !== i) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t) ? t.map(oe) : (t = oe(t)) in i ? [t] : t.match(Y) || []).length;

                for (; n--;) {
                  delete i[t[n]];
                }
              }

              (void 0 === t || C.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
          },
          hasData: function hasData(e) {
            var t = e[this.expando];
            return void 0 !== t && !C.isEmptyObject(t);
          }
        };
        var ae = new se(),
            le = new se(),
            ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            de = /[A-Z]/g;

        function ue(e, t, n) {
          var i;
          if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(de, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
            try {
              n = function (e) {
                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ce.test(e) ? JSON.parse(e) : e);
              }(n);
            } catch (e) {}

            le.set(e, t, n);
          } else n = void 0;
          return n;
        }

        C.extend({
          hasData: function hasData(e) {
            return le.hasData(e) || ae.hasData(e);
          },
          data: function data(e, t, n) {
            return le.access(e, t, n);
          },
          removeData: function removeData(e, t) {
            le.remove(e, t);
          },
          _data: function _data(e, t, n) {
            return ae.access(e, t, n);
          },
          _removeData: function _removeData(e, t) {
            ae.remove(e, t);
          }
        }), C.fn.extend({
          data: function data(e, t) {
            var n,
                i,
                o,
                r = this[0],
                s = r && r.attributes;

            if (void 0 === e) {
              if (this.length && (o = le.get(r), 1 === r.nodeType && !ae.get(r, "hasDataAttrs"))) {
                for (n = s.length; n--;) {
                  s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = oe(i.slice(5)), ue(r, i, o[i]));
                }

                ae.set(r, "hasDataAttrs", !0);
              }

              return o;
            }

            return "object" == _typeof(e) ? this.each(function () {
              le.set(this, e);
            }) : ee(this, function (t) {
              var n;
              if (r && void 0 === t) return void 0 !== (n = le.get(r, e)) || void 0 !== (n = ue(r, e)) ? n : void 0;
              this.each(function () {
                le.set(this, e, t);
              });
            }, null, t, arguments.length > 1, null, !0);
          },
          removeData: function removeData(e) {
            return this.each(function () {
              le.remove(this, e);
            });
          }
        }), C.extend({
          queue: function queue(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = ae.get(e, t), n && (!i || Array.isArray(n) ? i = ae.access(e, t, C.makeArray(n)) : i.push(n)), i || [];
          },
          dequeue: function dequeue(e, t) {
            t = t || "fx";

            var n = C.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = C._queueHooks(e, t);

            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {
              C.dequeue(e, t);
            }, r)), !i && r && r.empty.fire();
          },
          _queueHooks: function _queueHooks(e, t) {
            var n = t + "queueHooks";
            return ae.get(e, n) || ae.access(e, n, {
              empty: C.Callbacks("once memory").add(function () {
                ae.remove(e, [t + "queue", n]);
              })
            });
          }
        }), C.fn.extend({
          queue: function queue(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each(function () {
              var n = C.queue(this, e, t);
              C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e);
            });
          },
          dequeue: function dequeue(e) {
            return this.each(function () {
              C.dequeue(this, e);
            });
          },
          clearQueue: function clearQueue(e) {
            return this.queue(e || "fx", []);
          },
          promise: function promise(e, t) {
            var n,
                i = 1,
                o = C.Deferred(),
                r = this,
                s = this.length,
                a = function a() {
              --i || o.resolveWith(r, [r]);
            };

            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
              (n = ae.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            }

            return a(), o.promise(t);
          }
        });

        var pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            fe = new RegExp("^(?:([+-])=|)(" + pe + ")([a-z%]*)$", "i"),
            he = ["Top", "Right", "Bottom", "Left"],
            ve = w.documentElement,
            ge = function ge(e) {
          return C.contains(e.ownerDocument, e);
        },
            ye = {
          composed: !0
        };

        ve.getRootNode && (ge = function ge(e) {
          return C.contains(e.ownerDocument, e) || e.getRootNode(ye) === e.ownerDocument;
        });

        var me = function me(e, t) {
          return "none" === (e = t || e).style.display || "" === e.style.display && ge(e) && "none" === C.css(e, "display");
        };

        function we(e, t, n, i) {
          var o,
              r,
              s = 20,
              a = i ? function () {
            return i.cur();
          } : function () {
            return C.css(e, t, "");
          },
              l = a(),
              c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
              d = e.nodeType && (C.cssNumber[t] || "px" !== c && +l) && fe.exec(C.css(e, t));

          if (d && d[3] !== c) {
            for (l /= 2, c = c || d[3], d = +l || 1; s--;) {
              C.style(e, t, d + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), d /= r;
            }

            d *= 2, C.style(e, t, d + c), n = n || [];
          }

          return n && (d = +d || +l || 0, o = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = o)), o;
        }

        var be = {};

        function xe(e) {
          var t,
              n = e.ownerDocument,
              i = e.nodeName,
              o = be[i];
          return o || (t = n.body.appendChild(n.createElement(i)), o = C.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), be[i] = o, o);
        }

        function ke(e, t) {
          for (var n, i, o = [], r = 0, s = e.length; r < s; r++) {
            (i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = ae.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && me(i) && (o[r] = xe(i))) : "none" !== n && (o[r] = "none", ae.set(i, "display", n)));
          }

          for (r = 0; r < s; r++) {
            null != o[r] && (e[r].style.display = o[r]);
          }

          return e;
        }

        C.fn.extend({
          show: function show() {
            return ke(this, !0);
          },
          hide: function hide() {
            return ke(this);
          },
          toggle: function toggle(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
              me(this) ? C(this).show() : C(this).hide();
            });
          }
        });
        var Te,
            Se,
            Ce = /^(?:checkbox|radio)$/i,
            $e = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            Ae = /^$|^module$|\/(?:java|ecma)script/i;
        Te = w.createDocumentFragment().appendChild(w.createElement("div")), (Se = w.createElement("input")).setAttribute("type", "radio"), Se.setAttribute("checked", "checked"), Se.setAttribute("name", "t"), Te.appendChild(Se), g.checkClone = Te.cloneNode(!0).cloneNode(!0).lastChild.checked, Te.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!Te.cloneNode(!0).lastChild.defaultValue, Te.innerHTML = "<option></option>", g.option = !!Te.lastChild;
        var Ee = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };

        function je(e, t) {
          var n;
          return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? C.merge([e], n) : n;
        }

        function De(e, t) {
          for (var n = 0, i = e.length; n < i; n++) {
            ae.set(e[n], "globalEval", !t || ae.get(t[n], "globalEval"));
          }
        }

        Ee.tbody = Ee.tfoot = Ee.colgroup = Ee.caption = Ee.thead, Ee.th = Ee.td, g.option || (Ee.optgroup = Ee.option = [1, "<select multiple='multiple'>", "</select>"]);
        var Le = /<|&#?\w+;/;

        function He(e, t, n, i, o) {
          for (var r, s, a, l, c, d, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++) {
            if ((r = e[f]) || 0 === r) if ("object" === k(r)) C.merge(p, r.nodeType ? [r] : r);else if (Le.test(r)) {
              for (s = s || u.appendChild(t.createElement("div")), a = ($e.exec(r) || ["", ""])[1].toLowerCase(), l = Ee[a] || Ee._default, s.innerHTML = l[1] + C.htmlPrefilter(r) + l[2], d = l[0]; d--;) {
                s = s.lastChild;
              }

              C.merge(p, s.childNodes), (s = u.firstChild).textContent = "";
            } else p.push(t.createTextNode(r));
          }

          for (u.textContent = "", f = 0; r = p[f++];) {
            if (i && C.inArray(r, i) > -1) o && o.push(r);else if (c = ge(r), s = je(u.appendChild(r), "script"), c && De(s), n) for (d = 0; r = s[d++];) {
              Ae.test(r.type || "") && n.push(r);
            }
          }

          return u;
        }

        var Oe = /^([^.]*)(?:\.(.+)|)/;

        function Pe() {
          return !0;
        }

        function Ne() {
          return !1;
        }

        function qe(e, t, n, i, o, r) {
          var s, a;

          if ("object" == _typeof(t)) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) {
              qe(e, a, n, i, t[a], r);
            }

            return e;
          }

          if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Ne;else if (!o) return e;
          return 1 === r && (s = o, o = function o(e) {
            return C().off(e), s.apply(this, arguments);
          }, o.guid = s.guid || (s.guid = C.guid++)), e.each(function () {
            C.event.add(this, t, o, i, n);
          });
        }

        function Me(e, t, n) {
          n ? (ae.set(e, t, !1), C.event.add(e, t, {
            namespace: !1,
            handler: function handler(e) {
              var n,
                  i = ae.get(this, t);

              if (1 & e.isTrigger && this[t]) {
                if (i) (C.event.special[t] || {}).delegateType && e.stopPropagation();else if (i = a.call(arguments), ae.set(this, t, i), this[t](), n = ae.get(this, t), ae.set(this, t, !1), i !== n) return e.stopImmediatePropagation(), e.preventDefault(), n;
              } else i && (ae.set(this, t, C.event.trigger(i[0], i.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Pe);
            }
          })) : void 0 === ae.get(e, t) && C.event.add(e, t, Pe);
        }

        C.event = {
          global: {},
          add: function add(e, t, n, i, o) {
            var r,
                s,
                a,
                l,
                c,
                d,
                u,
                p,
                f,
                h,
                v,
                g = ae.get(e);
            if (re(e)) for (n.handler && (n = (r = n).handler, o = r.selector), o && C.find.matchesSelector(ve, o), n.guid || (n.guid = C.guid++), (l = g.events) || (l = g.events = Object.create(null)), (s = g.handle) || (s = g.handle = function (t) {
              return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0;
            }), c = (t = (t || "").match(Y) || [""]).length; c--;) {
              f = v = (a = Oe.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (u = C.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = C.event.special[f] || {}, d = C.extend({
                type: f,
                origType: v,
                data: i,
                handler: n,
                guid: n.guid,
                selector: o,
                needsContext: o && C.expr.match.needsContext.test(o),
                namespace: h.join(".")
              }, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), C.event.global[f] = !0);
            }
          },
          remove: function remove(e, t, n, i, o) {
            var r,
                s,
                a,
                l,
                c,
                d,
                u,
                p,
                f,
                h,
                v,
                g = ae.hasData(e) && ae.get(e);

            if (g && (l = g.events)) {
              for (c = (t = (t || "").match(Y) || [""]).length; c--;) {
                if (f = v = (a = Oe.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                  for (u = C.event.special[f] || {}, p = l[f = (i ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) {
                    d = p[r], !o && v !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                  }

                  s && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, g.handle) || C.removeEvent(e, f, g.handle), delete l[f]);
                } else for (f in l) {
                  C.event.remove(e, f + t[c], n, i, !0);
                }
              }

              C.isEmptyObject(l) && ae.remove(e, "handle events");
            }
          },
          dispatch: function dispatch(e) {
            var t,
                n,
                i,
                o,
                r,
                s,
                a = new Array(arguments.length),
                l = C.event.fix(e),
                c = (ae.get(this, "events") || Object.create(null))[l.type] || [],
                d = C.event.special[l.type] || {};

            for (a[0] = l, t = 1; t < arguments.length; t++) {
              a[t] = arguments[t];
            }

            if (l.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, l)) {
              for (s = C.event.handlers.call(this, l, c), t = 0; (o = s[t++]) && !l.isPropagationStopped();) {
                for (l.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();) {
                  l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (i = ((C.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                }
              }

              return d.postDispatch && d.postDispatch.call(this, l), l.result;
            }
          },
          handlers: function handlers(e, t) {
            var n,
                i,
                o,
                r,
                s,
                a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) {
              if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                for (r = [], s = {}, n = 0; n < l; n++) {
                  void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? C(o, this).index(c) > -1 : C.find(o, this, null, [c]).length), s[o] && r.push(i);
                }

                r.length && a.push({
                  elem: c,
                  handlers: r
                });
              }
            }
            return c = this, l < t.length && a.push({
              elem: c,
              handlers: t.slice(l)
            }), a;
          },
          addProp: function addProp(e, t) {
            Object.defineProperty(C.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: y(t) ? function () {
                if (this.originalEvent) return t(this.originalEvent);
              } : function () {
                if (this.originalEvent) return this.originalEvent[e];
              },
              set: function set(t) {
                Object.defineProperty(this, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t
                });
              }
            });
          },
          fix: function fix(e) {
            return e[C.expando] ? e : new C.Event(e);
          },
          special: {
            load: {
              noBubble: !0
            },
            click: {
              setup: function setup(e) {
                var t = this || e;
                return Ce.test(t.type) && t.click && A(t, "input") && Me(t, "click", !0), !1;
              },
              trigger: function trigger(e) {
                var t = this || e;
                return Ce.test(t.type) && t.click && A(t, "input") && Me(t, "click"), !0;
              },
              _default: function _default(e) {
                var t = e.target;
                return Ce.test(t.type) && t.click && A(t, "input") && ae.get(t, "click") || A(t, "a");
              }
            },
            beforeunload: {
              postDispatch: function postDispatch(e) {
                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
              }
            }
          }
        }, C.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }, C.Event = function (e, t) {
          if (!(this instanceof C.Event)) return new C.Event(e, t);
          e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Pe : Ne, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0;
        }, C.Event.prototype = {
          constructor: C.Event,
          isDefaultPrevented: Ne,
          isPropagationStopped: Ne,
          isImmediatePropagationStopped: Ne,
          isSimulated: !1,
          preventDefault: function preventDefault() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Pe, e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function stopPropagation() {
            var e = this.originalEvent;
            this.isPropagationStopped = Pe, e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function stopImmediatePropagation() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Pe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
          }
        }, C.each({
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          "char": !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: !0
        }, C.event.addProp), C.each({
          focus: "focusin",
          blur: "focusout"
        }, function (e, t) {
          function n(e) {
            if (w.documentMode) {
              var n = ae.get(this, "handle"),
                  i = C.event.fix(e);
              i.type = "focusin" === e.type ? "focus" : "blur", i.isSimulated = !0, n(e), i.target === i.currentTarget && n(i);
            } else C.event.simulate(t, e.target, C.event.fix(e));
          }

          C.event.special[e] = {
            setup: function setup() {
              var i;
              if (Me(this, e, !0), !w.documentMode) return !1;
              (i = ae.get(this, t)) || this.addEventListener(t, n), ae.set(this, t, (i || 0) + 1);
            },
            trigger: function trigger() {
              return Me(this, e), !0;
            },
            teardown: function teardown() {
              var e;
              if (!w.documentMode) return !1;
              (e = ae.get(this, t) - 1) ? ae.set(this, t, e) : (this.removeEventListener(t, n), ae.remove(this, t));
            },
            _default: function _default(t) {
              return ae.get(t.target, e);
            },
            delegateType: t
          }, C.event.special[t] = {
            setup: function setup() {
              var i = this.ownerDocument || this.document || this,
                  o = w.documentMode ? this : i,
                  r = ae.get(o, t);
              r || (w.documentMode ? this.addEventListener(t, n) : i.addEventListener(e, n, !0)), ae.set(o, t, (r || 0) + 1);
            },
            teardown: function teardown() {
              var i = this.ownerDocument || this.document || this,
                  o = w.documentMode ? this : i,
                  r = ae.get(o, t) - 1;
              r ? ae.set(o, t, r) : (w.documentMode ? this.removeEventListener(t, n) : i.removeEventListener(e, n, !0), ae.remove(o, t));
            }
          };
        }), C.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function (e, t) {
          C.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function handle(e) {
              var n,
                  i = e.relatedTarget,
                  o = e.handleObj;
              return i && (i === this || C.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
            }
          };
        }), C.fn.extend({
          on: function on(e, t, n, i) {
            return qe(this, e, t, n, i);
          },
          one: function one(e, t, n, i) {
            return qe(this, e, t, n, i, 1);
          },
          off: function off(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;

            if ("object" == _typeof(e)) {
              for (o in e) {
                this.off(o, t, e[o]);
              }

              return this;
            }

            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ne), this.each(function () {
              C.event.remove(this, e, n, t);
            });
          }
        });
        var Ie = /<script|<style|<link/i,
            ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
            We = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

        function Re(e, t) {
          return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e;
        }

        function Fe(e) {
          return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
        }

        function Be(e) {
          return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
        }

        function _e(e, t) {
          var n, i, o, r, s, a;

          if (1 === t.nodeType) {
            if (ae.hasData(e) && (a = ae.get(e).events)) for (o in ae.remove(t, "handle events"), a) {
              for (n = 0, i = a[o].length; n < i; n++) {
                C.event.add(t, o, a[o][n]);
              }
            }
            le.hasData(e) && (r = le.access(e), s = C.extend({}, r), le.set(t, s));
          }
        }

        function Ue(e, t) {
          var n = t.nodeName.toLowerCase();
          "input" === n && Ce.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
        }

        function Xe(e, t, n, i) {
          t = l(t);
          var o,
              r,
              s,
              a,
              c,
              d,
              u = 0,
              p = e.length,
              f = p - 1,
              h = t[0],
              v = y(h);
          if (v || p > 1 && "string" == typeof h && !g.checkClone && ze.test(h)) return e.each(function (o) {
            var r = e.eq(o);
            v && (t[0] = h.call(this, o, r.html())), Xe(r, t, n, i);
          });

          if (p && (r = (o = He(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
            for (a = (s = C.map(je(o, "script"), Fe)).length; u < p; u++) {
              c = o, u !== f && (c = C.clone(c, !0, !0), a && C.merge(s, je(c, "script"))), n.call(e[u], c, u);
            }

            if (a) for (d = s[s.length - 1].ownerDocument, C.map(s, Be), u = 0; u < a; u++) {
              c = s[u], Ae.test(c.type || "") && !ae.access(c, "globalEval") && C.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? C._evalUrl && !c.noModule && C._evalUrl(c.src, {
                nonce: c.nonce || c.getAttribute("nonce")
              }, d) : x(c.textContent.replace(We, ""), c, d));
            }
          }

          return e;
        }

        function Ye(e, t, n) {
          for (var i, o = t ? C.filter(t, e) : e, r = 0; null != (i = o[r]); r++) {
            n || 1 !== i.nodeType || C.cleanData(je(i)), i.parentNode && (n && ge(i) && De(je(i, "script")), i.parentNode.removeChild(i));
          }

          return e;
        }

        C.extend({
          htmlPrefilter: function htmlPrefilter(e) {
            return e;
          },
          clone: function clone(e, t, n) {
            var i,
                o,
                r,
                s,
                a = e.cloneNode(!0),
                l = ge(e);
            if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (s = je(a), i = 0, o = (r = je(e)).length; i < o; i++) {
              Ue(r[i], s[i]);
            }
            if (t) if (n) for (r = r || je(e), s = s || je(a), i = 0, o = r.length; i < o; i++) {
              _e(r[i], s[i]);
            } else _e(e, a);
            return (s = je(a, "script")).length > 0 && De(s, !l && je(e, "script")), a;
          },
          cleanData: function cleanData(e) {
            for (var t, n, i, o = C.event.special, r = 0; void 0 !== (n = e[r]); r++) {
              if (re(n)) {
                if (t = n[ae.expando]) {
                  if (t.events) for (i in t.events) {
                    o[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                  }
                  n[ae.expando] = void 0;
                }

                n[le.expando] && (n[le.expando] = void 0);
              }
            }
          }
        }), C.fn.extend({
          detach: function detach(e) {
            return Ye(this, e, !0);
          },
          remove: function remove(e) {
            return Ye(this, e);
          },
          text: function text(e) {
            return ee(this, function (e) {
              return void 0 === e ? C.text(this) : this.empty().each(function () {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
              });
            }, null, e, arguments.length);
          },
          append: function append() {
            return Xe(this, arguments, function (e) {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e).appendChild(e);
            });
          },
          prepend: function prepend() {
            return Xe(this, arguments, function (e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = Re(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function before() {
            return Xe(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function after() {
            return Xe(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function empty() {
            for (var e, t = 0; null != (e = this[t]); t++) {
              1 === e.nodeType && (C.cleanData(je(e, !1)), e.textContent = "");
            }

            return this;
          },
          clone: function clone(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
              return C.clone(this, e, t);
            });
          },
          html: function html(e) {
            return ee(this, function (e) {
              var t = this[0] || {},
                  n = 0,
                  i = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

              if ("string" == typeof e && !Ie.test(e) && !Ee[($e.exec(e) || ["", ""])[1].toLowerCase()]) {
                e = C.htmlPrefilter(e);

                try {
                  for (; n < i; n++) {
                    1 === (t = this[n] || {}).nodeType && (C.cleanData(je(t, !1)), t.innerHTML = e);
                  }

                  t = 0;
                } catch (e) {}
              }

              t && this.empty().append(e);
            }, null, e, arguments.length);
          },
          replaceWith: function replaceWith() {
            var e = [];
            return Xe(this, arguments, function (t) {
              var n = this.parentNode;
              C.inArray(this, e) < 0 && (C.cleanData(je(this)), n && n.replaceChild(t, this));
            }, e);
          }
        }), C.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function (e, t) {
          C.fn[e] = function (e) {
            for (var n, i = [], o = C(e), r = o.length - 1, s = 0; s <= r; s++) {
              n = s === r ? this : this.clone(!0), C(o[s])[t](n), c.apply(i, n.get());
            }

            return this.pushStack(i);
          };
        });

        var Ve = new RegExp("^(" + pe + ")(?!px)[a-z%]+$", "i"),
            Ge = /^--/,
            Qe = function Qe(e) {
          var t = e.ownerDocument.defaultView;
          return t && t.opener || (t = i), t.getComputedStyle(e);
        },
            Je = function Je(e, t, n) {
          var i,
              o,
              r = {};

          for (o in t) {
            r[o] = e.style[o], e.style[o] = t[o];
          }

          for (o in i = n.call(e), t) {
            e.style[o] = r[o];
          }

          return i;
        },
            Ke = new RegExp(he.join("|"), "i");

        function Ze(e, t, n) {
          var i,
              o,
              r,
              s,
              a = Ge.test(t),
              l = e.style;
          return (n = n || Qe(e)) && (s = n.getPropertyValue(t) || n[t], a && s && (s = s.replace(H, "$1") || void 0), "" !== s || ge(e) || (s = C.style(e, t)), !g.pixelBoxStyles() && Ve.test(s) && Ke.test(t) && (i = l.width, o = l.minWidth, r = l.maxWidth, l.minWidth = l.maxWidth = l.width = s, s = n.width, l.width = i, l.minWidth = o, l.maxWidth = r)), void 0 !== s ? s + "" : s;
        }

        function et(e, t) {
          return {
            get: function get() {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get;
            }
          };
        }

        !function () {
          function e() {
            if (d) {
              c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ve.appendChild(c).appendChild(d);
              var e = i.getComputedStyle(d);
              n = "1%" !== e.top, l = 12 === t(e.marginLeft), d.style.right = "60%", s = 36 === t(e.right), o = 36 === t(e.width), d.style.position = "absolute", r = 12 === t(d.offsetWidth / 3), ve.removeChild(c), d = null;
            }
          }

          function t(e) {
            return Math.round(parseFloat(e));
          }

          var n,
              o,
              r,
              s,
              a,
              l,
              c = w.createElement("div"),
              d = w.createElement("div");
          d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === d.style.backgroundClip, C.extend(g, {
            boxSizingReliable: function boxSizingReliable() {
              return e(), o;
            },
            pixelBoxStyles: function pixelBoxStyles() {
              return e(), s;
            },
            pixelPosition: function pixelPosition() {
              return e(), n;
            },
            reliableMarginLeft: function reliableMarginLeft() {
              return e(), l;
            },
            scrollboxSize: function scrollboxSize() {
              return e(), r;
            },
            reliableTrDimensions: function reliableTrDimensions() {
              var e, t, n, o;
              return null == a && (e = w.createElement("table"), t = w.createElement("tr"), n = w.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", ve.appendChild(e).appendChild(t).appendChild(n), o = i.getComputedStyle(t), a = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === t.offsetHeight, ve.removeChild(e)), a;
            }
          }));
        }();
        var tt = ["Webkit", "Moz", "ms"],
            nt = w.createElement("div").style,
            it = {};

        function ot(e) {
          return C.cssProps[e] || it[e] || (e in nt ? e : it[e] = function (e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--;) {
              if ((e = tt[n] + t) in nt) return e;
            }
          }(e) || e);
        }

        var rt = /^(none|table(?!-c[ea]).+)/,
            st = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
        },
            at = {
          letterSpacing: "0",
          fontWeight: "400"
        };

        function lt(e, t, n) {
          var i = fe.exec(t);
          return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
        }

        function ct(e, t, n, i, o, r) {
          var s = "width" === t ? 1 : 0,
              a = 0,
              l = 0,
              c = 0;
          if (n === (i ? "border" : "content")) return 0;

          for (; s < 4; s += 2) {
            "margin" === n && (c += C.css(e, n + he[s], !0, o)), i ? ("content" === n && (l -= C.css(e, "padding" + he[s], !0, o)), "margin" !== n && (l -= C.css(e, "border" + he[s] + "Width", !0, o))) : (l += C.css(e, "padding" + he[s], !0, o), "padding" !== n ? l += C.css(e, "border" + he[s] + "Width", !0, o) : a += C.css(e, "border" + he[s] + "Width", !0, o));
          }

          return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l + c;
        }

        function dt(e, t, n) {
          var i = Qe(e),
              o = (!g.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, i),
              r = o,
              s = Ze(e, t, i),
              a = "offset" + t[0].toUpperCase() + t.slice(1);

          if (Ve.test(s)) {
            if (!n) return s;
            s = "auto";
          }

          return (!g.boxSizingReliable() && o || !g.reliableTrDimensions() && A(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === C.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === C.css(e, "boxSizing", !1, i), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + ct(e, t, n || (o ? "border" : "content"), r, i, s) + "px";
        }

        function ut(e, t, n, i, o) {
          return new ut.prototype.init(e, t, n, i, o);
        }

        C.extend({
          cssHooks: {
            opacity: {
              get: function get(e, t) {
                if (t) {
                  var n = Ze(e, "opacity");
                  return "" === n ? "1" : n;
                }
              }
            }
          },
          cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
          },
          cssProps: {},
          style: function style(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var o,
                  r,
                  s,
                  a = oe(t),
                  l = Ge.test(t),
                  c = e.style;
              if (l || (t = ot(a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
              "string" == (r = _typeof(n)) && (o = fe.exec(n)) && o[1] && (n = we(e, t, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (C.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n));
            }
          },
          css: function css(e, t, n, i) {
            var o,
                r,
                s,
                a = oe(t);
            return Ge.test(t) || (t = ot(a)), (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = Ze(e, t, i)), "normal" === o && t in at && (o = at[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o;
          }
        }), C.each(["height", "width"], function (e, t) {
          C.cssHooks[t] = {
            get: function get(e, n, i) {
              if (n) return !rt.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? dt(e, t, i) : Je(e, st, function () {
                return dt(e, t, i);
              });
            },
            set: function set(e, n, i) {
              var o,
                  r = Qe(e),
                  s = !g.scrollboxSize() && "absolute" === r.position,
                  a = (s || i) && "border-box" === C.css(e, "boxSizing", !1, r),
                  l = i ? ct(e, t, i, a, r) : 0;
              return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - ct(e, t, "border", !1, r) - .5)), l && (o = fe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = C.css(e, t)), lt(0, n, l);
            }
          };
        }), C.cssHooks.marginLeft = et(g.reliableMarginLeft, function (e, t) {
          if (t) return (parseFloat(Ze(e, "marginLeft")) || e.getBoundingClientRect().left - Je(e, {
            marginLeft: 0
          }, function () {
            return e.getBoundingClientRect().left;
          })) + "px";
        }), C.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function (e, t) {
          C.cssHooks[e + t] = {
            expand: function expand(n) {
              for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
                o[e + he[i] + t] = r[i] || r[i - 2] || r[0];
              }

              return o;
            }
          }, "margin" !== e && (C.cssHooks[e + t].set = lt);
        }), C.fn.extend({
          css: function css(e, t) {
            return ee(this, function (e, t, n) {
              var i,
                  o,
                  r = {},
                  s = 0;

              if (Array.isArray(t)) {
                for (i = Qe(e), o = t.length; s < o; s++) {
                  r[t[s]] = C.css(e, t[s], !1, i);
                }

                return r;
              }

              return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
            }, e, t, arguments.length > 1);
          }
        }), C.Tween = ut, ut.prototype = {
          constructor: ut,
          init: function init(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (C.cssNumber[n] ? "" : "px");
          },
          cur: function cur() {
            var e = ut.propHooks[this.prop];
            return e && e.get ? e.get(this) : ut.propHooks._default.get(this);
          },
          run: function run(e) {
            var t,
                n = ut.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ut.propHooks._default.set(this), this;
          }
        }, ut.prototype.init.prototype = ut.prototype, ut.propHooks = {
          _default: {
            get: function get(e) {
              var t;
              return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            },
            set: function set(e) {
              C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[ot(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit);
            }
          }
        }, ut.propHooks.scrollTop = ut.propHooks.scrollLeft = {
          set: function set(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          }
        }, C.easing = {
          linear: function linear(e) {
            return e;
          },
          swing: function swing(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing"
        }, C.fx = ut.prototype.init, C.fx.step = {};
        var pt,
            ft,
            ht = /^(?:toggle|show|hide)$/,
            vt = /queueHooks$/;

        function gt() {
          ft && (!1 === w.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(gt) : i.setTimeout(gt, C.fx.interval), C.fx.tick());
        }

        function yt() {
          return i.setTimeout(function () {
            pt = void 0;
          }), pt = Date.now();
        }

        function mt(e, t) {
          var n,
              i = 0,
              o = {
            height: e
          };

          for (t = t ? 1 : 0; i < 4; i += 2 - t) {
            o["margin" + (n = he[i])] = o["padding" + n] = e;
          }

          return t && (o.opacity = o.width = e), o;
        }

        function wt(e, t, n) {
          for (var i, o = (bt.tweeners[t] || []).concat(bt.tweeners["*"]), r = 0, s = o.length; r < s; r++) {
            if (i = o[r].call(n, t, e)) return i;
          }
        }

        function bt(e, t, n) {
          var i,
              o,
              r = 0,
              s = bt.prefilters.length,
              a = C.Deferred().always(function () {
            delete l.elem;
          }),
              l = function l() {
            if (o) return !1;

            for (var t = pt || yt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) {
              c.tweens[r].run(i);
            }

            return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
          },
              c = a.promise({
            elem: e,
            props: C.extend({}, t),
            opts: C.extend(!0, {
              specialEasing: {},
              easing: C.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: pt || yt(),
            duration: n.duration,
            tweens: [],
            createTween: function createTween(t, n) {
              var i = C.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
              return c.tweens.push(i), i;
            },
            stop: function stop(t) {
              var n = 0,
                  i = t ? c.tweens.length : 0;
              if (o) return this;

              for (o = !0; n < i; n++) {
                c.tweens[n].run(1);
              }

              return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
            }
          }),
              d = c.props;

          for (function (e, t) {
            var n, i, o, r, s;

            for (n in e) {
              if (o = t[i = oe(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = C.cssHooks[i]) && ("expand" in s)) for (n in r = s.expand(r), delete e[i], r) {
                (n in e) || (e[n] = r[n], t[n] = o);
              } else t[i] = o;
            }
          }(d, c.opts.specialEasing); r < s; r++) {
            if (i = bt.prefilters[r].call(c, e, d, c.opts)) return y(i.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
          }

          return C.map(d, wt, c), y(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
          })), c;
        }

        C.Animation = C.extend(bt, {
          tweeners: {
            "*": [function (e, t) {
              var n = this.createTween(e, t);
              return we(n.elem, e, fe.exec(t), n), n;
            }]
          },
          tweener: function tweener(e, t) {
            y(e) ? (t = e, e = ["*"]) : e = e.match(Y);

            for (var n, i = 0, o = e.length; i < o; i++) {
              n = e[i], bt.tweeners[n] = bt.tweeners[n] || [], bt.tweeners[n].unshift(t);
            }
          },
          prefilters: [function (e, t, n) {
            var i,
                o,
                r,
                s,
                a,
                l,
                c,
                d,
                u = "width" in t || "height" in t,
                p = this,
                f = {},
                h = e.style,
                v = e.nodeType && me(e),
                g = ae.get(e, "fxshow");

            for (i in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
              s.unqueued || a();
            }), s.unqueued++, p.always(function () {
              p.always(function () {
                s.unqueued--, C.queue(e, "fx").length || s.empty.fire();
              });
            })), t) {
              if (o = t[i], ht.test(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (v ? "hide" : "show")) {
                  if ("show" !== o || !g || void 0 === g[i]) continue;
                  v = !0;
                }

                f[i] = g && g[i] || C.style(e, i);
              }
            }

            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(f)) for (i in u && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = g && g.display) && (c = ae.get(e, "display")), "none" === (d = C.css(e, "display")) && (c ? d = c : (ke([e], !0), c = e.style.display || c, d = C.css(e, "display"), ke([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === C.css(e, "float") && (l || (p.done(function () {
              h.display = c;
            }), null == c && (d = h.display, c = "none" === d ? "" : d)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
              h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            })), l = !1, f) {
              l || (g ? "hidden" in g && (v = g.hidden) : g = ae.access(e, "fxshow", {
                display: c
              }), r && (g.hidden = !v), v && ke([e], !0), p.done(function () {
                for (i in v || ke([e]), ae.remove(e, "fxshow"), f) {
                  C.style(e, i, f[i]);
                }
              })), l = wt(v ? g[i] : 0, i, p), i in g || (g[i] = l.start, v && (l.end = l.start, l.start = 0));
            }
          }],
          prefilter: function prefilter(e, t) {
            t ? bt.prefilters.unshift(e) : bt.prefilters.push(e);
          }
        }), C.speed = function (e, t, n) {
          var i = e && "object" == _typeof(e) ? C.extend({}, e) : {
            complete: n || !n && t || y(e) && e,
            duration: e,
            easing: n && t || t && !y(t) && t
          };
          return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            y(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue);
          }, i;
        }, C.fn.extend({
          fadeTo: function fadeTo(e, t, n, i) {
            return this.filter(me).css("opacity", 0).show().end().animate({
              opacity: t
            }, e, n, i);
          },
          animate: function animate(e, t, n, i) {
            var o = C.isEmptyObject(e),
                r = C.speed(t, n, i),
                s = function s() {
              var t = bt(this, C.extend({}, e), r);
              (o || ae.get(this, "finish")) && t.stop(!0);
            };

            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
          },
          stop: function stop(e, t, n) {
            var i = function i(e) {
              var t = e.stop;
              delete e.stop, t(n);
            };

            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function () {
              var t = !0,
                  o = null != e && e + "queueHooks",
                  r = C.timers,
                  s = ae.get(this);
              if (o) s[o] && s[o].stop && i(s[o]);else for (o in s) {
                s[o] && s[o].stop && vt.test(o) && i(s[o]);
              }

              for (o = r.length; o--;) {
                r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
              }

              !t && n || C.dequeue(this, e);
            });
          },
          finish: function finish(e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
              var t,
                  n = ae.get(this),
                  i = n[e + "queue"],
                  o = n[e + "queueHooks"],
                  r = C.timers,
                  s = i ? i.length : 0;

              for (n.finish = !0, C.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) {
                r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
              }

              for (t = 0; t < s; t++) {
                i[t] && i[t].finish && i[t].finish.call(this);
              }

              delete n.finish;
            });
          }
        }), C.each(["toggle", "show", "hide"], function (e, t) {
          var n = C.fn[t];

          C.fn[t] = function (e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(mt(t, !0), e, i, o);
          };
        }), C.each({
          slideDown: mt("show"),
          slideUp: mt("hide"),
          slideToggle: mt("toggle"),
          fadeIn: {
            opacity: "show"
          },
          fadeOut: {
            opacity: "hide"
          },
          fadeToggle: {
            opacity: "toggle"
          }
        }, function (e, t) {
          C.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i);
          };
        }), C.timers = [], C.fx.tick = function () {
          var e,
              t = 0,
              n = C.timers;

          for (pt = Date.now(); t < n.length; t++) {
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          }

          n.length || C.fx.stop(), pt = void 0;
        }, C.fx.timer = function (e) {
          C.timers.push(e), C.fx.start();
        }, C.fx.interval = 13, C.fx.start = function () {
          ft || (ft = !0, gt());
        }, C.fx.stop = function () {
          ft = null;
        }, C.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        }, C.fn.delay = function (e, t) {
          return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, n) {
            var o = i.setTimeout(t, e);

            n.stop = function () {
              i.clearTimeout(o);
            };
          });
        }, function () {
          var e = w.createElement("input"),
              t = w.createElement("select").appendChild(w.createElement("option"));
          e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = w.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value;
        }();
        var xt,
            kt = C.expr.attrHandle;
        C.fn.extend({
          attr: function attr(e, t) {
            return ee(this, C.attr, e, t, arguments.length > 1);
          },
          removeAttr: function removeAttr(e) {
            return this.each(function () {
              C.removeAttr(this, e);
            });
          }
        }), C.extend({
          attr: function attr(e, t, n) {
            var i,
                o,
                r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === r && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? xt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i);
          },
          attrHooks: {
            type: {
              set: function set(e, t) {
                if (!g.radioValue && "radio" === t && A(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              }
            }
          },
          removeAttr: function removeAttr(e, t) {
            var n,
                i = 0,
                o = t && t.match(Y);
            if (o && 1 === e.nodeType) for (; n = o[i++];) {
              e.removeAttribute(n);
            }
          }
        }), xt = {
          set: function set(e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
          }
        }, C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = kt[t] || C.find.attr;

          kt[t] = function (e, t, i) {
            var o,
                r,
                s = t.toLowerCase();
            return i || (r = kt[s], kt[s] = o, o = null != n(e, t, i) ? s : null, kt[s] = r), o;
          };
        });
        var Tt = /^(?:input|select|textarea|button)$/i,
            St = /^(?:a|area)$/i;

        function Ct(e) {
          return (e.match(Y) || []).join(" ");
        }

        function $t(e) {
          return e.getAttribute && e.getAttribute("class") || "";
        }

        function At(e) {
          return Array.isArray(e) ? e : "string" == typeof e && e.match(Y) || [];
        }

        C.fn.extend({
          prop: function prop(e, t) {
            return ee(this, C.prop, e, t, arguments.length > 1);
          },
          removeProp: function removeProp(e) {
            return this.each(function () {
              delete this[C.propFix[e] || e];
            });
          }
        }), C.extend({
          prop: function prop(e, t, n) {
            var i,
                o,
                r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t];
          },
          propHooks: {
            tabIndex: {
              get: function get(e) {
                var t = C.find.attr(e, "tabindex");
                return t ? parseInt(t, 10) : Tt.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        }), g.optSelected || (C.propHooks.selected = {
          get: function get(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function set(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          }
        }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
          C.propFix[this.toLowerCase()] = this;
        }), C.fn.extend({
          addClass: function addClass(e) {
            var t, n, i, o, r, s;
            return y(e) ? this.each(function (t) {
              C(this).addClass(e.call(this, t, $t(this)));
            }) : (t = At(e)).length ? this.each(function () {
              if (i = $t(this), n = 1 === this.nodeType && " " + Ct(i) + " ") {
                for (r = 0; r < t.length; r++) {
                  o = t[r], n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                }

                s = Ct(n), i !== s && this.setAttribute("class", s);
              }
            }) : this;
          },
          removeClass: function removeClass(e) {
            var t, n, i, o, r, s;
            return y(e) ? this.each(function (t) {
              C(this).removeClass(e.call(this, t, $t(this)));
            }) : arguments.length ? (t = At(e)).length ? this.each(function () {
              if (i = $t(this), n = 1 === this.nodeType && " " + Ct(i) + " ") {
                for (r = 0; r < t.length; r++) {
                  for (o = t[r]; n.indexOf(" " + o + " ") > -1;) {
                    n = n.replace(" " + o + " ", " ");
                  }
                }

                s = Ct(n), i !== s && this.setAttribute("class", s);
              }
            }) : this : this.attr("class", "");
          },
          toggleClass: function toggleClass(e, t) {
            var n,
                i,
                o,
                r,
                s = _typeof(e),
                a = "string" === s || Array.isArray(e);

            return y(e) ? this.each(function (n) {
              C(this).toggleClass(e.call(this, n, $t(this), t), t);
            }) : "boolean" == typeof t && a ? t ? this.addClass(e) : this.removeClass(e) : (n = At(e), this.each(function () {
              if (a) for (r = C(this), o = 0; o < n.length; o++) {
                i = n[o], r.hasClass(i) ? r.removeClass(i) : r.addClass(i);
              } else void 0 !== e && "boolean" !== s || ((i = $t(this)) && ae.set(this, "__className__", i), this.setAttribute && this.setAttribute("class", i || !1 === e ? "" : ae.get(this, "__className__") || ""));
            }));
          },
          hasClass: function hasClass(e) {
            var t,
                n,
                i = 0;

            for (t = " " + e + " "; n = this[i++];) {
              if (1 === n.nodeType && (" " + Ct($t(n)) + " ").indexOf(t) > -1) return !0;
            }

            return !1;
          }
        });
        var Et = /\r/g;
        C.fn.extend({
          val: function val(e) {
            var t,
                n,
                i,
                o = this[0];
            return arguments.length ? (i = y(e), this.each(function (n) {
              var o;
              1 === this.nodeType && (null == (o = i ? e.call(this, n, C(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = C.map(o, function (e) {
                return null == e ? "" : e + "";
              })), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
            })) : o ? (t = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(Et, "") : null == n ? "" : n : void 0;
          }
        }), C.extend({
          valHooks: {
            option: {
              get: function get(e) {
                var t = C.find.attr(e, "value");
                return null != t ? t : Ct(C.text(e));
              }
            },
            select: {
              get: function get(e) {
                var t,
                    n,
                    i,
                    o = e.options,
                    r = e.selectedIndex,
                    s = "select-one" === e.type,
                    a = s ? null : [],
                    l = s ? r + 1 : o.length;

                for (i = r < 0 ? l : s ? r : 0; i < l; i++) {
                  if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                    if (t = C(n).val(), s) return t;
                    a.push(t);
                  }
                }

                return a;
              },
              set: function set(e, t) {
                for (var n, i, o = e.options, r = C.makeArray(t), s = o.length; s--;) {
                  ((i = o[s]).selected = C.inArray(C.valHooks.option.get(i), r) > -1) && (n = !0);
                }

                return n || (e.selectedIndex = -1), r;
              }
            }
          }
        }), C.each(["radio", "checkbox"], function () {
          C.valHooks[this] = {
            set: function set(e, t) {
              if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1;
            }
          }, g.checkOn || (C.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
        });
        var jt = i.location,
            Dt = {
          guid: Date.now()
        },
            Lt = /\?/;

        C.parseXML = function (e) {
          var t, n;
          if (!e || "string" != typeof e) return null;

          try {
            t = new i.DOMParser().parseFromString(e, "text/xml");
          } catch (e) {}

          return n = t && t.getElementsByTagName("parsererror")[0], t && !n || C.error("Invalid XML: " + (n ? C.map(n.childNodes, function (e) {
            return e.textContent;
          }).join("\n") : e)), t;
        };

        var Ht = /^(?:focusinfocus|focusoutblur)$/,
            Ot = function Ot(e) {
          e.stopPropagation();
        };

        C.extend(C.event, {
          trigger: function trigger(e, t, n, o) {
            var r,
                s,
                a,
                l,
                c,
                d,
                u,
                p,
                h = [n || w],
                v = f.call(e, "type") ? e.type : e,
                g = f.call(e, "namespace") ? e.namespace.split(".") : [];

            if (s = p = a = n = n || w, 3 !== n.nodeType && 8 !== n.nodeType && !Ht.test(v + C.event.triggered) && (v.indexOf(".") > -1 && (g = v.split("."), v = g.shift(), g.sort()), c = v.indexOf(":") < 0 && "on" + v, (e = e[C.expando] ? e : new C.Event(v, "object" == _typeof(e) && e)).isTrigger = o ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), u = C.event.special[v] || {}, o || !u.trigger || !1 !== u.trigger.apply(n, t))) {
              if (!o && !u.noBubble && !m(n)) {
                for (l = u.delegateType || v, Ht.test(l + v) || (s = s.parentNode); s; s = s.parentNode) {
                  h.push(s), a = s;
                }

                a === (n.ownerDocument || w) && h.push(a.defaultView || a.parentWindow || i);
              }

              for (r = 0; (s = h[r++]) && !e.isPropagationStopped();) {
                p = s, e.type = r > 1 ? l : u.bindType || v, (d = (ae.get(s, "events") || Object.create(null))[e.type] && ae.get(s, "handle")) && d.apply(s, t), (d = c && s[c]) && d.apply && re(s) && (e.result = d.apply(s, t), !1 === e.result && e.preventDefault());
              }

              return e.type = v, o || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(h.pop(), t) || !re(n) || c && y(n[v]) && !m(n) && ((a = n[c]) && (n[c] = null), C.event.triggered = v, e.isPropagationStopped() && p.addEventListener(v, Ot), n[v](), e.isPropagationStopped() && p.removeEventListener(v, Ot), C.event.triggered = void 0, a && (n[c] = a)), e.result;
            }
          },
          simulate: function simulate(e, t, n) {
            var i = C.extend(new C.Event(), n, {
              type: e,
              isSimulated: !0
            });
            C.event.trigger(i, null, t);
          }
        }), C.fn.extend({
          trigger: function trigger(e, t) {
            return this.each(function () {
              C.event.trigger(e, t, this);
            });
          },
          triggerHandler: function triggerHandler(e, t) {
            var n = this[0];
            if (n) return C.event.trigger(e, t, n, !0);
          }
        });
        var Pt = /\[\]$/,
            Nt = /\r?\n/g,
            qt = /^(?:submit|button|image|reset|file)$/i,
            Mt = /^(?:input|select|textarea|keygen)/i;

        function It(e, t, n, i) {
          var o;
          if (Array.isArray(t)) C.each(t, function (t, o) {
            n || Pt.test(e) ? i(e, o) : It(e + "[" + ("object" == _typeof(o) && null != o ? t : "") + "]", o, n, i);
          });else if (n || "object" !== k(t)) i(e, t);else for (o in t) {
            It(e + "[" + o + "]", t[o], n, i);
          }
        }

        C.param = function (e, t) {
          var n,
              i = [],
              o = function o(e, t) {
            var n = y(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
          };

          if (null == e) return "";
          if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function () {
            o(this.name, this.value);
          });else for (n in e) {
            It(n, e[n], t, o);
          }
          return i.join("&");
        }, C.fn.extend({
          serialize: function serialize() {
            return C.param(this.serializeArray());
          },
          serializeArray: function serializeArray() {
            return this.map(function () {
              var e = C.prop(this, "elements");
              return e ? C.makeArray(e) : this;
            }).filter(function () {
              var e = this.type;
              return this.name && !C(this).is(":disabled") && Mt.test(this.nodeName) && !qt.test(e) && (this.checked || !Ce.test(e));
            }).map(function (e, t) {
              var n = C(this).val();
              return null == n ? null : Array.isArray(n) ? C.map(n, function (e) {
                return {
                  name: t.name,
                  value: e.replace(Nt, "\r\n")
                };
              }) : {
                name: t.name,
                value: n.replace(Nt, "\r\n")
              };
            }).get();
          }
        });
        var zt = /%20/g,
            Wt = /#.*$/,
            Rt = /([?&])_=[^&]*/,
            Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Bt = /^(?:GET|HEAD)$/,
            _t = /^\/\//,
            Ut = {},
            Xt = {},
            Yt = "*/".concat("*"),
            Vt = w.createElement("a");

        function Gt(e) {
          return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i,
                o = 0,
                r = t.toLowerCase().match(Y) || [];
            if (y(n)) for (; i = r[o++];) {
              "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
            }
          };
        }

        function Qt(e, t, n, i) {
          var o = {},
              r = e === Xt;

          function s(a) {
            var l;
            return o[a] = !0, C.each(e[a] || [], function (e, a) {
              var c = a(t, n, i);
              return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1);
            }), l;
          }

          return s(t.dataTypes[0]) || !o["*"] && s("*");
        }

        function Jt(e, t) {
          var n,
              i,
              o = C.ajaxSettings.flatOptions || {};

          for (n in t) {
            void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
          }

          return i && C.extend(!0, e, i), e;
        }

        Vt.href = jt.href, C.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: jt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(jt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Yt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": C.parseXML
            },
            flatOptions: {
              url: !0,
              context: !0
            }
          },
          ajaxSetup: function ajaxSetup(e, t) {
            return t ? Jt(Jt(e, C.ajaxSettings), t) : Jt(C.ajaxSettings, e);
          },
          ajaxPrefilter: Gt(Ut),
          ajaxTransport: Gt(Xt),
          ajax: function ajax(e, t) {
            "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
            var n,
                o,
                r,
                s,
                a,
                l,
                c,
                d,
                u,
                p,
                f = C.ajaxSetup({}, t),
                h = f.context || f,
                v = f.context && (h.nodeType || h.jquery) ? C(h) : C.event,
                g = C.Deferred(),
                y = C.Callbacks("once memory"),
                m = f.statusCode || {},
                b = {},
                x = {},
                k = "canceled",
                T = {
              readyState: 0,
              getResponseHeader: function getResponseHeader(e) {
                var t;

                if (c) {
                  if (!s) for (s = {}; t = Ft.exec(r);) {
                    s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                  }
                  t = s[e.toLowerCase() + " "];
                }

                return null == t ? null : t.join(", ");
              },
              getAllResponseHeaders: function getAllResponseHeaders() {
                return c ? r : null;
              },
              setRequestHeader: function setRequestHeader(e, t) {
                return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, b[e] = t), this;
              },
              overrideMimeType: function overrideMimeType(e) {
                return null == c && (f.mimeType = e), this;
              },
              statusCode: function statusCode(e) {
                var t;
                if (e) if (c) T.always(e[T.status]);else for (t in e) {
                  m[t] = [m[t], e[t]];
                }
                return this;
              },
              abort: function abort(e) {
                var t = e || k;
                return n && n.abort(t), S(0, t), this;
              }
            };

            if (g.promise(T), f.url = ((e || f.url || jt.href) + "").replace(_t, jt.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Y) || [""], null == f.crossDomain) {
              l = w.createElement("a");

              try {
                l.href = f.url, l.href = l.href, f.crossDomain = Vt.protocol + "//" + Vt.host != l.protocol + "//" + l.host;
              } catch (e) {
                f.crossDomain = !0;
              }
            }

            if (f.data && f.processData && "string" != typeof f.data && (f.data = C.param(f.data, f.traditional)), Qt(Ut, f, t, T), c) return T;

            for (u in (d = C.event && f.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Bt.test(f.type), o = f.url.replace(Wt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(zt, "+")) : (p = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += (Lt.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(Rt, "$1"), p = (Lt.test(o) ? "&" : "?") + "_=" + Dt.guid++ + p), f.url = o + p), f.ifModified && (C.lastModified[o] && T.setRequestHeader("If-Modified-Since", C.lastModified[o]), C.etag[o] && T.setRequestHeader("If-None-Match", C.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : f.accepts["*"]), f.headers) {
              T.setRequestHeader(u, f.headers[u]);
            }

            if (f.beforeSend && (!1 === f.beforeSend.call(h, T, f) || c)) return T.abort();

            if (k = "abort", y.add(f.complete), T.done(f.success), T.fail(f.error), n = Qt(Xt, f, t, T)) {
              if (T.readyState = 1, d && v.trigger("ajaxSend", [T, f]), c) return T;
              f.async && f.timeout > 0 && (a = i.setTimeout(function () {
                T.abort("timeout");
              }, f.timeout));

              try {
                c = !1, n.send(b, S);
              } catch (e) {
                if (c) throw e;
                S(-1, e);
              }
            } else S(-1, "No Transport");

            function S(e, t, s, l) {
              var u,
                  p,
                  w,
                  b,
                  x,
                  k = t;
              c || (c = !0, a && i.clearTimeout(a), n = void 0, r = l || "", T.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, s && (b = function (e, t, n) {
                for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];) {
                  l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                }

                if (i) for (o in a) {
                  if (a[o] && a[o].test(i)) {
                    l.unshift(o);
                    break;
                  }
                }
                if (l[0] in n) r = l[0];else {
                  for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                      r = o;
                      break;
                    }

                    s || (s = o);
                  }

                  r = r || s;
                }
                if (r) return r !== l[0] && l.unshift(r), n[r];
              }(f, T, s)), !u && C.inArray("script", f.dataTypes) > -1 && C.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function () {}), b = function (e, t, n, i) {
                var o,
                    r,
                    s,
                    a,
                    l,
                    c = {},
                    d = e.dataTypes.slice();
                if (d[1]) for (s in e.converters) {
                  c[s.toLowerCase()] = e.converters[s];
                }

                for (r = d.shift(); r;) {
                  if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift()) if ("*" === r) r = l;else if ("*" !== l && l !== r) {
                    if (!(s = c[l + " " + r] || c["* " + r])) for (o in c) {
                      if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], d.unshift(a[1]));
                        break;
                      }
                    }
                    if (!0 !== s) if (s && e["throws"]) t = s(t);else try {
                      t = s(t);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + l + " to " + r
                      };
                    }
                  }
                }

                return {
                  state: "success",
                  data: t
                };
              }(f, b, T, u), u ? (f.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (C.lastModified[o] = x), (x = T.getResponseHeader("etag")) && (C.etag[o] = x)), 204 === e || "HEAD" === f.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state, p = b.data, u = !(w = b.error))) : (w = k, !e && k || (k = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || k) + "", u ? g.resolveWith(h, [p, k, T]) : g.rejectWith(h, [T, k, w]), T.statusCode(m), m = void 0, d && v.trigger(u ? "ajaxSuccess" : "ajaxError", [T, f, u ? p : w]), y.fireWith(h, [T, k]), d && (v.trigger("ajaxComplete", [T, f]), --C.active || C.event.trigger("ajaxStop")));
            }

            return T;
          },
          getJSON: function getJSON(e, t, n) {
            return C.get(e, t, n, "json");
          },
          getScript: function getScript(e, t) {
            return C.get(e, void 0, t, "script");
          }
        }), C.each(["get", "post"], function (e, t) {
          C[t] = function (e, n, i, o) {
            return y(n) && (o = o || i, i = n, n = void 0), C.ajax(C.extend({
              url: e,
              type: t,
              dataType: o,
              data: n,
              success: i
            }, C.isPlainObject(e) && e));
          };
        }), C.ajaxPrefilter(function (e) {
          var t;

          for (t in e.headers) {
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
          }
        }), C._evalUrl = function (e, t, n) {
          return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
              "text script": function textScript() {}
            },
            dataFilter: function dataFilter(e) {
              C.globalEval(e, t, n);
            }
          });
        }, C.fn.extend({
          wrapAll: function wrapAll(e) {
            var t;
            return this[0] && (y(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
              for (var e = this; e.firstElementChild;) {
                e = e.firstElementChild;
              }

              return e;
            }).append(this)), this;
          },
          wrapInner: function wrapInner(e) {
            return y(e) ? this.each(function (t) {
              C(this).wrapInner(e.call(this, t));
            }) : this.each(function () {
              var t = C(this),
                  n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
          },
          wrap: function wrap(e) {
            var t = y(e);
            return this.each(function (n) {
              C(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function unwrap(e) {
            return this.parent(e).not("body").each(function () {
              C(this).replaceWith(this.childNodes);
            }), this;
          }
        }), C.expr.pseudos.hidden = function (e) {
          return !C.expr.pseudos.visible(e);
        }, C.expr.pseudos.visible = function (e) {
          return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }, C.ajaxSettings.xhr = function () {
          try {
            return new i.XMLHttpRequest();
          } catch (e) {}
        };
        var Kt = {
          0: 200,
          1223: 204
        },
            Zt = C.ajaxSettings.xhr();
        g.cors = !!Zt && "withCredentials" in Zt, g.ajax = Zt = !!Zt, C.ajaxTransport(function (e) {
          var _t3, n;

          if (g.cors || Zt && !e.crossDomain) return {
            send: function send(o, r) {
              var s,
                  a = e.xhr();
              if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) {
                a[s] = e.xhrFields[s];
              }

              for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) {
                a.setRequestHeader(s, o[s]);
              }

              _t3 = function t(e) {
                return function () {
                  _t3 && (_t3 = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Kt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                    binary: a.response
                  } : {
                    text: a.responseText
                  }, a.getAllResponseHeaders()));
                };
              }, a.onload = _t3(), n = a.onerror = a.ontimeout = _t3("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
                4 === a.readyState && i.setTimeout(function () {
                  _t3 && n();
                });
              }, _t3 = _t3("abort");

              try {
                a.send(e.hasContent && e.data || null);
              } catch (e) {
                if (_t3) throw e;
              }
            },
            abort: function abort() {
              _t3 && _t3();
            }
          };
        }), C.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }), C.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function textScript(e) {
              return C.globalEval(e), e;
            }
          }
        }), C.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }), C.ajaxTransport("script", function (e) {
          var t, _n;

          if (e.crossDomain || e.scriptAttrs) return {
            send: function send(i, o) {
              t = C("<script>").attr(e.scriptAttrs || {}).prop({
                charset: e.scriptCharset,
                src: e.url
              }).on("load error", _n = function n(e) {
                t.remove(), _n = null, e && o("error" === e.type ? 404 : 200, e.type);
              }), w.head.appendChild(t[0]);
            },
            abort: function abort() {
              _n && _n();
            }
          };
        });
        var en,
            tn = [],
            nn = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function jsonpCallback() {
            var e = tn.pop() || C.expando + "_" + Dt.guid++;
            return this[e] = !0, e;
          }
        }), C.ajaxPrefilter("json jsonp", function (e, t, n) {
          var o,
              r,
              s,
              a = !1 !== e.jsonp && (nn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(e.data) && "data");
          if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(nn, "$1" + o) : !1 !== e.jsonp && (e.url += (Lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
            return s || C.error(o + " was not called"), s[0];
          }, e.dataTypes[0] = "json", r = i[o], i[o] = function () {
            s = arguments;
          }, n.always(function () {
            void 0 === r ? C(i).removeProp(o) : i[o] = r, e[o] && (e.jsonpCallback = t.jsonpCallback, tn.push(o)), s && y(r) && r(s[0]), s = r = void 0;
          }), "script";
        }), g.createHTMLDocument = ((en = w.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === en.childNodes.length), C.parseHTML = function (e, t, n) {
          return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((i = (t = w.implementation.createHTMLDocument("")).createElement("base")).href = w.location.href, t.head.appendChild(i)) : t = w), r = !n && [], (o = W.exec(e)) ? [t.createElement(o[1])] : (o = He([e], t, r), r && r.length && C(r).remove(), C.merge([], o.childNodes)));
          var i, o, r;
        }, C.fn.load = function (e, t, n) {
          var i,
              o,
              r,
              s = this,
              a = e.indexOf(" ");
          return a > -1 && (i = Ct(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (o = "POST"), s.length > 0 && C.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
          }).done(function (e) {
            r = arguments, s.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e);
          }).always(n && function (e, t) {
            s.each(function () {
              n.apply(this, r || [e.responseText, t, e]);
            });
          }), this;
        }, C.expr.pseudos.animated = function (e) {
          return C.grep(C.timers, function (t) {
            return e === t.elem;
          }).length;
        }, C.offset = {
          setOffset: function setOffset(e, t, n) {
            var i,
                o,
                r,
                s,
                a,
                l,
                c = C.css(e, "position"),
                d = C(e),
                u = {};
            "static" === c && (e.style.position = "relative"), a = d.offset(), r = C.css(e, "top"), l = C.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = d.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), y(t) && (t = t.call(e, n, C.extend({}, a))), null != t.top && (u.top = t.top - a.top + s), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : d.css(u);
          }
        }, C.fn.extend({
          offset: function offset(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
              C.offset.setOffset(this, e, t);
            });
            var t,
                n,
                i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
              top: t.top + n.pageYOffset,
              left: t.left + n.pageXOffset
            }) : {
              top: 0,
              left: 0
            } : void 0;
          },
          position: function position() {
            if (this[0]) {
              var e,
                  t,
                  n,
                  i = this[0],
                  o = {
                top: 0,
                left: 0
              };
              if ("fixed" === C.css(i, "position")) t = i.getBoundingClientRect();else {
                for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) {
                  e = e.parentNode;
                }

                e && e !== i && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), o.left += C.css(e, "borderLeftWidth", !0));
              }
              return {
                top: t.top - o.top - C.css(i, "marginTop", !0),
                left: t.left - o.left - C.css(i, "marginLeft", !0)
              };
            }
          },
          offsetParent: function offsetParent() {
            return this.map(function () {
              for (var e = this.offsetParent; e && "static" === C.css(e, "position");) {
                e = e.offsetParent;
              }

              return e || ve;
            });
          }
        }), C.each({
          scrollLeft: "pageXOffset",
          scrollTop: "pageYOffset"
        }, function (e, t) {
          var n = "pageYOffset" === t;

          C.fn[e] = function (i) {
            return ee(this, function (e, i, o) {
              var r;
              if (m(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
              r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o;
            }, e, i, arguments.length);
          };
        }), C.each(["top", "left"], function (e, t) {
          C.cssHooks[t] = et(g.pixelPosition, function (e, n) {
            if (n) return n = Ze(e, t), Ve.test(n) ? C(e).position()[t] + "px" : n;
          });
        }), C.each({
          Height: "height",
          Width: "width"
        }, function (e, t) {
          C.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
          }, function (n, i) {
            C.fn[i] = function (o, r) {
              var s = arguments.length && (n || "boolean" != typeof o),
                  a = n || (!0 === o || !0 === r ? "margin" : "border");
              return ee(this, function (t, n, o) {
                var r;
                return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? C.css(t, n, a) : C.style(t, n, o, a);
              }, t, s ? o : void 0, s);
            };
          });
        }), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
          C.fn[t] = function (e) {
            return this.on(t, e);
          };
        }), C.fn.extend({
          bind: function bind(e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function unbind(e, t) {
            return this.off(e, null, t);
          },
          delegate: function delegate(e, t, n, i) {
            return this.on(t, e, n, i);
          },
          undelegate: function undelegate(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
          },
          hover: function hover(e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e);
          }
        }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
          C.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
          };
        });
        var on = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        C.proxy = function (e, t) {
          var n, i, o;
          if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return i = a.call(arguments, 2), o = function o() {
            return e.apply(t || this, i.concat(a.call(arguments)));
          }, o.guid = e.guid = e.guid || C.guid++, o;
        }, C.holdReady = function (e) {
          e ? C.readyWait++ : C.ready(!0);
        }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = A, C.isFunction = y, C.isWindow = m, C.camelCase = oe, C.type = k, C.now = Date.now, C.isNumeric = function (e) {
          var t = C.type(e);
          return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }, C.trim = function (e) {
          return null == e ? "" : (e + "").replace(on, "$1");
        }, void 0 === (n = function () {
          return C;
        }.apply(t, [])) || (e.exports = n);
        var rn = i.jQuery,
            sn = i.$;
        return C.noConflict = function (e) {
          return i.$ === C && (i.$ = sn), e && i.jQuery === C && (i.jQuery = rn), C;
        }, void 0 === o && (i.jQuery = i.$ = C), C;
      });
    },
    599: function _(e, t, n) {
      var i, o, r;
      !function (s) {
        "use strict";

        o = [n(692)], i = function i(e) {
          var t,
              n = window.Slick || {};
          (t = 0, n = function n(_n2, i) {
            var o,
                r = this;
            r.defaults = {
              accessibility: !0,
              adaptiveHeight: !1,
              appendArrows: e(_n2),
              appendDots: e(_n2),
              arrows: !0,
              asNavFor: null,
              prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
              nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
              autoplay: !1,
              autoplaySpeed: 3e3,
              centerMode: !1,
              centerPadding: "50px",
              cssEase: "ease",
              customPaging: function customPaging(t, n) {
                return e('<button type="button" />').text(n + 1);
              },
              dots: !1,
              dotsClass: "slick-dots",
              draggable: !0,
              easing: "linear",
              edgeFriction: .35,
              fade: !1,
              focusOnSelect: !1,
              focusOnChange: !1,
              infinite: !0,
              initialSlide: 0,
              lazyLoad: "ondemand",
              mobileFirst: !1,
              pauseOnHover: !0,
              pauseOnFocus: !0,
              pauseOnDotsHover: !1,
              respondTo: "window",
              responsive: null,
              rows: 1,
              rtl: !1,
              slide: "",
              slidesPerRow: 1,
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 500,
              swipe: !0,
              swipeToSlide: !1,
              touchMove: !0,
              touchThreshold: 5,
              useCSS: !0,
              useTransform: !0,
              variableWidth: !1,
              vertical: !1,
              verticalSwiping: !1,
              waitForAnimate: !0,
              zIndex: 1e3
            }, r.initials = {
              animating: !1,
              dragging: !1,
              autoPlayTimer: null,
              currentDirection: 0,
              currentLeft: null,
              currentSlide: 0,
              direction: 1,
              $dots: null,
              listWidth: null,
              listHeight: null,
              loadIndex: 0,
              $nextArrow: null,
              $prevArrow: null,
              scrolling: !1,
              slideCount: null,
              slideWidth: null,
              $slideTrack: null,
              $slides: null,
              sliding: !1,
              slideOffset: 0,
              swipeLeft: null,
              swiping: !1,
              $list: null,
              touchObject: {},
              transformsEnabled: !1,
              unslicked: !1
            }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(_n2), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(_n2).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = t++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0);
          }).prototype.activateADA = function () {
            this.$slideTrack.find(".slick-active").attr({
              "aria-hidden": "false"
            }).find("a, input, button, select").attr({
              tabindex: "0"
            });
          }, n.prototype.addSlide = n.prototype.slickAdd = function (t, n, i) {
            var o = this;
            if ("boolean" == typeof n) i = n, n = null;else if (n < 0 || n >= o.slideCount) return !1;
            o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (t, n) {
              e(n).attr("data-slick-index", t);
            }), o.$slidesCache = o.$slides, o.reinit();
          }, n.prototype.animateHeight = function () {
            var e = this;

            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
              var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
              e.$list.animate({
                height: t
              }, e.options.speed);
            }
          }, n.prototype.animateSlide = function (t, n) {
            var i = {},
                o = this;
            o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
              left: t
            }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
              top: t
            }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
              animStart: o.currentLeft
            }).animate({
              animStart: t
            }, {
              duration: o.options.speed,
              easing: o.options.easing,
              step: function step(e) {
                e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i));
              },
              complete: function complete() {
                n && n.call();
              }
            })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function () {
              o.disableTransition(), n.call();
            }, o.options.speed));
          }, n.prototype.getNavTarget = function () {
            var t = this.options.asNavFor;
            return t && null !== t && (t = e(t).not(this.$slider)), t;
          }, n.prototype.asNavFor = function (t) {
            var n = this.getNavTarget();
            null !== n && "object" == _typeof(n) && n.each(function () {
              var n = e(this).slick("getSlick");
              n.unslicked || n.slideHandler(t, !0);
            });
          }, n.prototype.applyTransition = function (e) {
            var t = this,
                n = {};
            !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
          }, n.prototype.autoPlay = function () {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
          }, n.prototype.autoPlayClear = function () {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer);
          }, n.prototype.autoPlayIterator = function () {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t));
          }, n.prototype.buildArrows = function () {
            var t = this;
            !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
              "aria-disabled": "true",
              tabindex: "-1"
            }));
          }, n.prototype.buildDots = function () {
            var t,
                n,
                i = this;

            if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
              for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) {
                n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
              }

              i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active");
            }
          }, n.prototype.buildOut = function () {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, n) {
              e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "");
            }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable");
          }, n.prototype.buildRows = function () {
            var e,
                t,
                n,
                i,
                o,
                r,
                s,
                a = this;

            if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 0) {
              for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                var l = document.createElement("div");

                for (t = 0; t < a.options.rows; t++) {
                  var c = document.createElement("div");

                  for (n = 0; n < a.options.slidesPerRow; n++) {
                    var d = e * s + (t * a.options.slidesPerRow + n);
                    r.get(d) && c.appendChild(r.get(d));
                  }

                  l.appendChild(c);
                }

                i.appendChild(l);
              }

              a.$slider.empty().append(i), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
              });
            }
          }, n.prototype.checkResponsive = function (t, n) {
            var i,
                o,
                r,
                s = this,
                a = !1,
                l = s.$slider.width(),
                c = window.innerWidth || e(window).width();

            if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
              for (i in o = null, s.breakpoints) {
                s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
              }

              null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger("breakpoint", [s, a]);
            }
          }, n.prototype.changeSlide = function (t, n) {
            var i,
                o,
                r = this,
                s = e(t.currentTarget);

            switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
              case "previous":
                o = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
                break;

              case "next":
                o = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
                break;

              case "index":
                var a = 0 === t.data.index ? 0 : t.data.index || s.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(a), !1, n), s.children().trigger("focus");
                break;

              default:
                return;
            }
          }, n.prototype.checkNavigable = function (e) {
            var t, n;
            if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];else for (var i in t) {
              if (e < t[i]) {
                e = n;
                break;
              }

              n = t[i];
            }
            return e;
          }, n.prototype.cleanUpEvents = function () {
            var t = this;
            t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
          }, n.prototype.cleanUpSlideEvents = function () {
            var t = this;
            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
          }, n.prototype.cleanUpRows = function () {
            var e,
                t = this;
            t.options.rows > 0 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e));
          }, n.prototype.clickHandler = function (e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
          }, n.prototype.destroy = function (t) {
            var n = this;
            n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
              e(this).attr("style", e(this).data("originalStyling"));
            }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n]);
          }, n.prototype.disableTransition = function (e) {
            var t = this,
                n = {};
            n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
          }, n.prototype.fadeSlide = function (e, t) {
            var n = this;
            !1 === n.cssTransitions ? (n.$slides.eq(e).css({
              zIndex: n.options.zIndex
            }), n.$slides.eq(e).animate({
              opacity: 1
            }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
              opacity: 1,
              zIndex: n.options.zIndex
            }), t && setTimeout(function () {
              n.disableTransition(e), t.call();
            }, n.options.speed));
          }, n.prototype.fadeSlideOut = function (e) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
              opacity: 0,
              zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
              opacity: 0,
              zIndex: t.options.zIndex - 2
            }));
          }, n.prototype.filterSlides = n.prototype.slickFilter = function (e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit());
          }, n.prototype.focusHandler = function () {
            var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (n) {
              n.stopImmediatePropagation();
              var i = e(this);
              setTimeout(function () {
                t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay());
              }, 0);
            });
          }, n.prototype.getCurrent = n.prototype.slickCurrentSlide = function () {
            return this.currentSlide;
          }, n.prototype.getDotCount = function () {
            var e = this,
                t = 0,
                n = 0,
                i = 0;
            if (!0 === e.options.infinite) {
              if (e.slideCount <= e.options.slidesToShow) ++i;else for (; t < e.slideCount;) {
                ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
              }
            } else if (!0 === e.options.centerMode) i = e.slideCount;else if (e.options.asNavFor) for (; t < e.slideCount;) {
              ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            } else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return i - 1;
          }, n.prototype.getLeft = function (e) {
            var t,
                n,
                i,
                o,
                r = this,
                s = 0;
            return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t;
          }, n.prototype.getOption = n.prototype.slickGetOption = function (e) {
            return this.options[e];
          }, n.prototype.getNavigableIndexes = function () {
            var e,
                t = this,
                n = 0,
                i = 0,
                o = [];

            for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) {
              o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            }

            return o;
          }, n.prototype.getSlick = function () {
            return this;
          }, n.prototype.getSlideCount = function () {
            var t,
                n,
                i = this;
            return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function (o, r) {
              if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft) return t = r, !1;
            }), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll;
          }, n.prototype.goTo = n.prototype.slickGoTo = function (e, t) {
            this.changeSlide({
              data: {
                message: "index",
                index: parseInt(e)
              }
            }, t);
          }, n.prototype.init = function (t) {
            var n = this;
            e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay());
          }, n.prototype.initADA = function () {
            var t = this,
                n = Math.ceil(t.slideCount / t.options.slidesToShow),
                i = t.getNavigableIndexes().filter(function (e) {
              return e >= 0 && e < t.slideCount;
            });
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
              "aria-hidden": "true",
              tabindex: "-1"
            }).find("a, input, button, select").attr({
              tabindex: "-1"
            }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
              var o = i.indexOf(n);

              if (e(this).attr({
                role: "tabpanel",
                id: "slick-slide" + t.instanceUid + n,
                tabindex: -1
              }), -1 !== o) {
                var r = "slick-slide-control" + t.instanceUid + o;
                e("#" + r).length && e(this).attr({
                  "aria-describedby": r
                });
              }
            }), t.$dots.attr("role", "tablist").find("li").each(function (o) {
              var r = i[o];
              e(this).attr({
                role: "presentation"
              }), e(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + t.instanceUid + o,
                "aria-controls": "slick-slide" + t.instanceUid + r,
                "aria-label": o + 1 + " of " + n,
                "aria-selected": null,
                tabindex: "-1"
              });
            }).eq(t.currentSlide).find("button").attr({
              "aria-selected": "true",
              tabindex: "0"
            }).end());

            for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) {
              t.options.focusOnChange ? t.$slides.eq(o).attr({
                tabindex: "0"
              }) : t.$slides.eq(o).removeAttr("tabindex");
            }

            t.activateADA();
          }, n.prototype.initArrowEvents = function () {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
              message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
              message: "next"
            }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)));
          }, n.prototype.initDotEvents = function () {
            var t = this;
            !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {
              message: "index"
            }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
          }, n.prototype.initSlideEvents = function () {
            var t = this;
            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
          }, n.prototype.initializeEvents = function () {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
              action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
              action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
              action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
              action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition);
          }, n.prototype.initUI = function () {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
          }, n.prototype.keyHandler = function (e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
              data: {
                message: !0 === t.options.rtl ? "next" : "previous"
              }
            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
              data: {
                message: !0 === t.options.rtl ? "previous" : "next"
              }
            }));
          }, n.prototype.lazyLoad = function () {
            var t,
                n,
                i,
                o = this;

            function r(t) {
              e("img[data-lazy]", t).each(function () {
                var t = e(this),
                    n = e(this).attr("data-lazy"),
                    i = e(this).attr("data-srcset"),
                    r = e(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                    s = document.createElement("img");
                s.onload = function () {
                  t.animate({
                    opacity: 0
                  }, 100, function () {
                    i && (t.attr("srcset", i), r && t.attr("sizes", r)), t.attr("src", n).animate({
                      opacity: 1
                    }, 200, function () {
                      t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                    }), o.$slider.trigger("lazyLoaded", [o, t, n]);
                  });
                }, s.onerror = function () {
                  t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, t, n]);
                }, s.src = n;
              });
            }

            if (!0 === o.options.centerMode ? !0 === o.options.infinite ? i = (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), i = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, i = Math.ceil(n + o.options.slidesToShow), !0 === o.options.fade && (n > 0 && n--, i <= o.slideCount && i++)), t = o.$slider.find(".slick-slide").slice(n, i), "anticipated" === o.options.lazyLoad) for (var s = n - 1, a = i, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++) {
              s < 0 && (s = o.slideCount - 1), t = (t = t.add(l.eq(s))).add(l.eq(a)), s--, a++;
            }
            r(t), o.slideCount <= o.options.slidesToShow ? r(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? r(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && r(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow));
          }, n.prototype.loadSlider = function () {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
              opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
          }, n.prototype.next = n.prototype.slickNext = function () {
            this.changeSlide({
              data: {
                message: "next"
              }
            });
          }, n.prototype.orientationChange = function () {
            this.checkResponsive(), this.setPosition();
          }, n.prototype.pause = n.prototype.slickPause = function () {
            this.autoPlayClear(), this.paused = !0;
          }, n.prototype.play = n.prototype.slickPlay = function () {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1;
          }, n.prototype.postSlide = function (t) {
            var n = this;
            n.unslicked || (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()));
          }, n.prototype.prev = n.prototype.slickPrev = function () {
            this.changeSlide({
              data: {
                message: "previous"
              }
            });
          }, n.prototype.preventDefault = function (e) {
            e.preventDefault();
          }, n.prototype.progressiveLazyLoad = function (t) {
            t = t || 1;
            var n,
                i,
                o,
                r,
                s,
                a = this,
                l = e("img[data-lazy]", a.$slider);
            l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), r = n.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function () {
              o && (n.attr("srcset", o), r && n.attr("sizes", r)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad();
            }, s.onerror = function () {
              t < 3 ? setTimeout(function () {
                a.progressiveLazyLoad(t + 1);
              }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad());
            }, s.src = i) : a.$slider.trigger("allImagesLoaded", [a]);
          }, n.prototype.refresh = function (t) {
            var n,
                i,
                o = this;
            i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
              currentSlide: n
            }), o.init(), t || o.changeSlide({
              data: {
                message: "index",
                index: n
              }
            }, !1);
          }, n.prototype.registerBreakpoints = function () {
            var t,
                n,
                i,
                o = this,
                r = o.options.responsive || null;

            if ("array" === e.type(r) && r.length) {
              for (t in o.respondTo = o.options.respondTo || "window", r) {
                if (i = o.breakpoints.length - 1, r.hasOwnProperty(t)) {
                  for (n = r[t].breakpoint; i >= 0;) {
                    o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                  }

                  o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings;
                }
              }

              o.breakpoints.sort(function (e, t) {
                return o.options.mobileFirst ? e - t : t - e;
              });
            }
          }, n.prototype.reinit = function () {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t]);
          }, n.prototype.resize = function () {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
              t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition();
            }, 50));
          }, n.prototype.removeSlide = n.prototype.slickRemove = function (e, t, n) {
            var i = this;
            if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
            i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit();
          }, n.prototype.setCSS = function (e) {
            var t,
                n,
                i = this,
                o = {};
            !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)));
          }, n.prototype.setDimensions = function () {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
              padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
              padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
          }, n.prototype.setFade = function () {
            var t,
                n = this;
            n.$slides.each(function (i, o) {
              t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
              }) : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
              });
            }), n.$slides.eq(n.currentSlide).css({
              zIndex: n.options.zIndex - 1,
              opacity: 1
            });
          }, n.prototype.setHeight = function () {
            var e = this;

            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
              var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
              e.$list.css("height", t);
            }
          }, n.prototype.setOption = n.prototype.slickSetOption = function () {
            var t,
                n,
                i,
                o,
                r,
                s = this,
                a = !1;
            if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[i] = o;else if ("multiple" === r) e.each(i, function (e, t) {
              s.options[e] = t;
            });else if ("responsive" === r) for (n in o) {
              if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]];else {
                for (t = s.options.responsive.length - 1; t >= 0;) {
                  s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
                }

                s.options.responsive.push(o[n]);
              }
            }
            a && (s.unload(), s.reinit());
          }, n.prototype.setPosition = function () {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e]);
          }, n.prototype.setProps = function () {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType;
          }, n.prototype.setSlideClasses = function (e) {
            var t,
                n,
                i,
                o,
                r = this;

            if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
              var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
              t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center");
            } else e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));

            "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad();
          }, n.prototype.setupInfinite = function () {
            var t,
                n,
                i,
                o = this;

            if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
              for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) {
                n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
              }

              for (t = 0; t < i + o.slideCount; t += 1) {
                n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
              }

              o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                e(this).attr("id", "");
              });
            }
          }, n.prototype.interrupt = function (e) {
            e || this.autoPlay(), this.interrupted = e;
          }, n.prototype.selectHandler = function (t) {
            var n = this,
                i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                o = parseInt(i.attr("data-slick-index"));
            o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o);
          }, n.prototype.slideHandler = function (e, t, n) {
            var i,
                o,
                r,
                s,
                a,
                l = null,
                c = this;
            if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e)) if (!1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function () {
              c.postSlide(i);
            }) : c.postSlide(i));else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function () {
              c.postSlide(i);
            }) : c.postSlide(i));else {
              if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, function () {
                c.postSlide(o);
              })) : c.postSlide(o), void c.animateHeight();
              !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(l, function () {
                c.postSlide(o);
              }) : c.postSlide(o);
            }
          }, n.prototype.startLoad = function () {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading");
          }, n.prototype.swipeDirection = function () {
            var e,
                t,
                n,
                i,
                o = this;
            return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 || i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical";
          }, n.prototype.swipeEnd = function (e) {
            var t,
                n,
                i = this;
            if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
            if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;

            if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
              switch (n = i.swipeDirection()) {
                case "left":
                case "down":
                  t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                  break;

                case "right":
                case "up":
                  t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1;
              }

              "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]));
            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {});
          }, n.prototype.swipeHandler = function (e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
              case "start":
                t.swipeStart(e);
                break;

              case "move":
                t.swipeMove(e);
                break;

              case "end":
                t.swipeEnd(e);
            }
          }, n.prototype.swipeMove = function (e) {
            var t,
                n,
                i,
                o,
                r,
                s,
                a = this;
            return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))));
          }, n.prototype.swipeStart = function (e) {
            var t,
                n = this;
            if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0;
          }, n.prototype.unfilterSlides = n.prototype.slickUnfilter = function () {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit());
          }, n.prototype.unload = function () {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
          }, n.prototype.unslick = function (e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy();
          }, n.prototype.updateArrows = function () {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
          }, n.prototype.updateDots = function () {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"));
          }, n.prototype.visibility = function () {
            var e = this;
            e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1);
          }, e.fn.slick = function () {
            var e,
                t,
                i = this,
                o = arguments[0],
                r = Array.prototype.slice.call(arguments, 1),
                s = i.length;

            for (e = 0; e < s; e++) {
              if ("object" == _typeof(o) || void 0 === o ? i[e].slick = new n(i[e], o) : t = i[e].slick[o].apply(i[e].slick, r), void 0 !== t) return t;
            }

            return i;
          };
        }, void 0 === (r = i.apply(t, o)) || (e.exports = r);
      }();
    }
  },
      t = {};

  function n(i) {
    var o = t[i];
    if (void 0 !== o) return o.exports;
    var r = t[i] = {
      exports: {}
    };
    return e[i].call(r.exports, r, r.exports, n), r.exports;
  }

  (function () {
    "use strict";

    var e = document.querySelectorAll(".header-nav__item_dropdown");

    if (e) {
      var s = function s() {
        e.forEach(function (e) {
          e.classList.remove("open");
        });
      };

      e.forEach(function (e) {
        e.querySelector("a").addEventListener("click", function (e) {
          e.preventDefault();
        }), e.addEventListener("click", function (t) {
          var n = e.classList.contains("open");
          s(), n || e.classList.add("open"), t.stopPropagation();
        });
      }), document.addEventListener("click", function (e) {
        s();
      });
    }

    function t() {
      var e = document.querySelector(".header__bottom");
      window.pageYOffset > 54 ? (e.classList.add("sticky"), e.previousElementSibling.classList.add("margin-bottom")) : (e.classList.remove("sticky"), e.previousElementSibling.classList.remove("margin-bottom"));
    }

    document.addEventListener("scroll", function () {
      return t();
    }), t();
    var i = document.querySelector(".header__burger");
    i && (i.onclick = function () {
      var e = document.querySelector(".header__nav"),
          t = document.querySelector("body");
      e.classList.toggle("open"), t.classList.toggle("lock"), window.scrollTo(0, 0);
    });
    var o = document.querySelector(".header-search__fast-link");
    o && o.addEventListener("click", function (e) {
      e.preventDefault(), document.querySelector(".header-search__input").value = o.textContent, o.remove();
    });
    var r = n(692);
    n(599), r(".carusel").slick({
      autoplay: !0,
      autoplaySpeed: 2e3,
      slidesToShow: 4,
      nextArrow: '<div class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none"><circle cx="22.5" cy="22.5" r="22.5" transform="rotate(-180 22.5 22.5)" fill="#CCCCCC" fill-opacity="0.6"/><path d="M18.5148 28.5858L19.929 30L27 22.9289L19.9289 15.8579L18.5147 17.2721L24.1716 22.929L18.5148 28.5858Z" fill="black"/></svg></div>',
      prevArrow: '<div class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none"><circle cx="22.5" cy="22.5" r="22.5" fill="#CCCCCC" fill-opacity="0.6"/><path d="M26.4852 16.4142L25.071 15L18 22.0711L25.0711 29.1421L26.4853 27.7279L20.8284 22.071L26.4852 16.4142Z" fill="black"/></svg></div>',
      responsive: [{
        breakpoint: 1025,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 750,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  })();
})();