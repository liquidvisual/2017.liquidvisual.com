var _$$headroom;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function pixelGradient() {
  $("h1.subheader, h2.subheader, h3.subheader, .pixel-grad").pxgradient({ step: 10, colors: ["#F12D66", "#20B5C3"], dir: "x" });
}!function (e, t) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
      i = e.document,
      r = Object.getPrototypeOf,
      o = n.slice,
      s = n.concat,
      a = n.push,
      l = n.indexOf,
      c = {},
      u = c.toString,
      f = c.hasOwnProperty,
      d = f.toString,
      h = d.call(Object),
      p = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      g = function g(e) {
    return null != e && e === e.window;
  },
      v = { type: !0, src: !0, noModule: !0 };function y(e, t, n) {
    var r,
        o = (t = t || i).createElement("script");if (o.text = e, n) for (r in v) {
      n[r] && (o[r] = n[r]);
    }t.head.appendChild(o).parentNode.removeChild(o);
  }function b(e) {
    return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? c[u.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
  }var w = function w(e, t) {
    return new w.fn.init(e, t);
  },
      _ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function T(e) {
    var t = !!e && "length" in e && e.length,
        n = b(e);return !m(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }w.fn = w.prototype = { jquery: "3.3.1", constructor: w, length: 0, toArray: function toArray() {
      return o.call(this);
    }, get: function get(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = w.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return w.each(this, e);
    }, map: function map(e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function slice() {
      return this.pushStack(o.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: a, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        i,
        r,
        o,
        s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || m(s) || (s = {}), a === l && (s = this, a--); a < l; a++) {
      if (null != (e = arguments[a])) for (t in e) {
        n = s[t], s !== (i = e[t]) && (c && i && (w.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, s[t] = w.extend(c, o, i)) : void 0 !== i && (s[t] = i));
      }
    }return s;
  }, w.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
      var t, n;return !(!e || "[object Object]" !== u.call(e)) && (!(t = r(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && d.call(n) === h);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, globalEval: function globalEval(e) {
      y(e);
    }, each: function each(e, t) {
      var n,
          i = 0;if (T(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) {} else for (i in e) {
        if (!1 === t.call(e[i], i, e[i])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(_, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (T(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : l.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, i = 0, r = e.length; i < n; i++) {
        e[r++] = t[i];
      }return e.length = r, e;
    }, grep: function grep(e, t, n) {
      for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) {
        !t(e[r], r) !== s && i.push(e[r]);
      }return i;
    }, map: function map(e, t, n) {
      var i,
          r,
          o = 0,
          a = [];if (T(e)) for (i = e.length; o < i; o++) {
        null != (r = t(e[o], o, n)) && a.push(r);
      } else for (o in e) {
        null != (r = t(e[o], o, n)) && a.push(r);
      }return s.apply([], a);
    }, guid: 1, support: p }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    c["[object " + t + "]"] = t.toLowerCase();
  });var C = function (e) {
    var t,
        n,
        i,
        r,
        o,
        s,
        a,
        l,
        c,
        u,
        f,
        d,
        h,
        p,
        m,
        g,
        v,
        y,
        b,
        w = "sizzle" + 1 * new Date(),
        _ = e.document,
        T = 0,
        C = 0,
        E = se(),
        x = se(),
        S = se(),
        D = function D(e, t) {
      return e === t && (f = !0), 0;
    },
        A = {}.hasOwnProperty,
        k = [],
        I = k.pop,
        O = k.push,
        N = k.push,
        L = k.slice,
        P = function P(e, t) {
      for (var n = 0, i = e.length; n < i; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        H = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        R = "\\[" + H + "*(" + M + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + H + "*\\]",
        F = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
        W = new RegExp(H + "+", "g"),
        q = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
        B = new RegExp("^" + H + "*," + H + "*"),
        Y = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
        U = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
        X = new RegExp(F),
        z = new RegExp("^" + M + "$"),
        $ = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + R), PSEUDO: new RegExp("^" + F), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"), bool: new RegExp("^(?:" + j + ")$", "i"), needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i") },
        K = /^(?:input|select|textarea|button)$/i,
        V = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Z = /[+~]/,
        J = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var i = "0x" + t - 65536;return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        ie = function ie() {
      d();
    },
        re = ye(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      N.apply(k = L.call(_.childNodes), _.childNodes), k[_.childNodes.length].nodeType;
    } catch (e) {
      N = { apply: k.length ? function (e, t) {
          O.apply(e, L.call(t));
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];) {}e.length = n - 1;
        } };
    }function oe(e, t, i, r) {
      var o,
          a,
          c,
          u,
          f,
          p,
          v,
          y = t && t.ownerDocument,
          T = t ? t.nodeType : 9;if (i = i || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return i;if (!r && ((t ? t.ownerDocument || t : _) !== h && d(t), t = t || h, m)) {
        if (11 !== T && (f = G.exec(e))) if (o = f[1]) {
          if (9 === T) {
            if (!(c = t.getElementById(o))) return i;if (c.id === o) return i.push(c), i;
          } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i;
        } else {
          if (f[2]) return N.apply(i, t.getElementsByTagName(e)), i;if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return N.apply(i, t.getElementsByClassName(o)), i;
        }if (n.qsa && !S[e + " "] && (!g || !g.test(e))) {
          if (1 !== T) y = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = w), a = (p = s(e)).length; a--;) {
              p[a] = "#" + u + " " + ve(p[a]);
            }v = p.join(","), y = Z.test(e) && me(t.parentNode) || t;
          }if (v) try {
            return N.apply(i, y.querySelectorAll(v)), i;
          } catch (e) {} finally {
            u === w && t.removeAttribute("id");
          }
        }
      }return l(e.replace(q, "$1"), t, i, r);
    }function se() {
      var e = [];return function t(n, r) {
        return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r;
      };
    }function ae(e) {
      return e[w] = !0, e;
    }function le(e) {
      var t = h.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function ce(e, t) {
      for (var n = e.split("|"), r = n.length; r--;) {
        i.attrHandle[n[r]] = t;
      }
    }function ue(e, t) {
      var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (i) return i;if (n) for (; n = n.nextSibling;) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }function de(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }function he(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function pe(e) {
      return ae(function (t) {
        return t = +t, ae(function (n, i) {
          for (var r, o = e([], n.length, t), s = o.length; s--;) {
            n[r = o[s]] && (n[r] = !(i[r] = n[r]));
          }
        });
      });
    }function me(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }for (t in n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, d = oe.setDocument = function (e) {
      var t,
          r,
          s = e ? e.ownerDocument || e : _;return s !== h && 9 === s.nodeType && s.documentElement ? (p = (h = s).documentElement, m = !o(h), _ !== h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), n.attributes = le(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = le(function (e) {
        return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = Q.test(h.getElementsByClassName), n.getById = le(function (e) {
        return p.appendChild(e).id = w, !h.getElementsByName || !h.getElementsByName(w).length;
      }), n.getById ? (i.filter.ID = function (e) {
        var t = e.replace(J, ee);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, i.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && m) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (i.filter.ID = function (e) {
        var t = e.replace(J, ee);return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
        };
      }, i.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && m) {
          var n,
              i,
              r,
              o = t.getElementById(e);if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];for (r = t.getElementsByName(e), i = 0; o = r[i++];) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }return [];
        }
      }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            i = [],
            r = 0,
            o = t.getElementsByTagName(e);if ("*" === e) {
          for (; n = o[r++];) {
            1 === n.nodeType && i.push(n);
          }return i;
        }return o;
      }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
      }, v = [], g = [], (n.qsa = Q.test(h.querySelectorAll)) && (le(function (e) {
        p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + H + "*(?:value|" + j + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]");
      }), le(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = h.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + H + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
      })), (n.matchesSelector = Q.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function (e) {
        n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", F);
      }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(p.compareDocumentPosition), b = t || Q.test(p.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }return !1;
      }, D = t ? function (e, t) {
        if (e === t) return f = !0, 0;var i = !e.compareDocumentPosition - !t.compareDocumentPosition;return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === h || e.ownerDocument === _ && b(_, e) ? -1 : t === h || t.ownerDocument === _ && b(_, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & i ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;var n,
            i = 0,
            r = e.parentNode,
            o = t.parentNode,
            s = [e],
            a = [t];if (!r || !o) return e === h ? -1 : t === h ? 1 : r ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;if (r === o) return ue(e, t);for (n = e; n = n.parentNode;) {
          s.unshift(n);
        }for (n = t; n = n.parentNode;) {
          a.unshift(n);
        }for (; s[i] === a[i];) {
          i++;
        }return i ? ue(s[i], a[i]) : s[i] === _ ? -1 : a[i] === _ ? 1 : 0;
      }, h) : h;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== h && d(e), t = t.replace(U, "='$1']"), n.matchesSelector && m && !S[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
        var i = y.call(e, t);if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
      } catch (e) {}return oe(t, h, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== h && d(e), b(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== h && d(e);var r = i.attrHandle[t.toLowerCase()],
          o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          i = [],
          r = 0,
          o = 0;if (f = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(D), f) {
        for (; t = e[o++];) {
          t === e[o] && (r = i.push(o));
        }for (; r--;) {
          e.splice(i[r], 1);
        }
      }return u = null, e;
    }, r = oe.getText = function (e) {
      var t,
          n = "",
          i = 0,
          o = e.nodeType;if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += r(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else for (; t = e[i++];) {
        n += r(t);
      }return n;
    }, (i = oe.selectors = { cacheLength: 50, createPseudo: ae, match: $, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(J, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return $.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(J, ee).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = E[e + " "];return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (i) {
            var r = oe.attr(i, e);return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
          };
        }, CHILD: function CHILD(e, t, n, i, r) {
          var o = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;return 1 === i && 0 === r ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var c,
                u,
                f,
                d,
                h,
                p,
                m = o !== s ? "nextSibling" : "previousSibling",
                g = t.parentNode,
                v = a && t.nodeName.toLowerCase(),
                y = !l && !a,
                b = !1;if (g) {
              if (o) {
                for (; m;) {
                  for (d = t; d = d[m];) {
                    if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                  }p = m = "only" === e && !p && "nextSibling";
                }return !0;
              }if (p = [s ? g.firstChild : g.lastChild], s && y) {
                for (b = (h = (c = (u = (f = (d = g)[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (b = h = 0) || p.pop();) {
                  if (1 === d.nodeType && ++b && d === t) {
                    u[e] = [T, h, b];break;
                  }
                }
              } else if (y && (b = h = (c = (u = (f = (d = t)[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === b) for (; (d = ++h && d && d[m] || (b = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((u = (f = d[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [T, b]), d !== t));) {}return (b -= r) === i || b % i == 0 && b / i >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, n) {
            for (var i, o = r(e, t), s = o.length; s--;) {
              e[i = P(e, o[s])] = !(n[i] = o[s]);
            }
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        } }, pseudos: { not: ae(function (e) {
          var t = [],
              n = [],
              i = a(e.replace(q, "$1"));return i[w] ? ae(function (e, t, n, r) {
            for (var o, s = i(e, null, r, []), a = e.length; a--;) {
              (o = s[a]) && (e[a] = !(t[a] = o));
            }
          }) : function (e, r, o) {
            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
          };
        }), has: ae(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }), contains: ae(function (e) {
          return e = e.replace(J, ee), function (t) {
            return (t.textContent || t.innerText || r(t)).indexOf(e) > -1;
          };
        }), lang: ae(function (e) {
          return z.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(J, ee).toLowerCase(), function (t) {
            var n;do {
              if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === p;
        }, focus: function focus(e) {
          return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: he(!1), disabled: he(!0), checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !i.pseudos.empty(e);
        }, header: function header(e) {
          return V.test(e.nodeName);
        }, input: function input(e) {
          return K.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: pe(function () {
          return [0];
        }), last: pe(function (e, t) {
          return [t - 1];
        }), eq: pe(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: pe(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }return e;
        }), odd: pe(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }return e;
        }), lt: pe(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; --i >= 0;) {
            e.push(i);
          }return e;
        }), gt: pe(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;) {
            e.push(i);
          }return e;
        }) } }).pseudos.nth = i.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      i.pseudos[t] = fe(t);
    }for (t in { submit: !0, reset: !0 }) {
      i.pseudos[t] = de(t);
    }function ge() {}function ve(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) {
        i += e[t].value;
      }return i;
    }function ye(e, t, n) {
      var i = t.dir,
          r = t.next,
          o = r || i,
          s = n && "parentNode" === o,
          a = C++;return t.first ? function (t, n, r) {
        for (; t = t[i];) {
          if (1 === t.nodeType || s) return e(t, n, r);
        }return !1;
      } : function (t, n, l) {
        var c,
            u,
            f,
            d = [T, a];if (l) {
          for (; t = t[i];) {
            if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
          }
        } else for (; t = t[i];) {
          if (1 === t.nodeType || s) if (u = (f = t[w] || (t[w] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;else {
            if ((c = u[o]) && c[0] === T && c[1] === a) return d[2] = c[2];if (u[o] = d, d[2] = e(t, n, l)) return !0;
          }
        }return !1;
      };
    }function be(e) {
      return e.length > 1 ? function (t, n, i) {
        for (var r = e.length; r--;) {
          if (!e[r](t, n, i)) return !1;
        }return !0;
      } : e[0];
    }function we(e, t, n, i, r) {
      for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++) {
        (o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
      }return s;
    }function _e(e, t, n, i, r, o) {
      return i && !i[w] && (i = _e(i)), r && !r[w] && (r = _e(r, o)), ae(function (o, s, a, l) {
        var c,
            u,
            f,
            d = [],
            h = [],
            p = s.length,
            m = o || function (e, t, n) {
          for (var i = 0, r = t.length; i < r; i++) {
            oe(e, t[i], n);
          }return n;
        }(t || "*", a.nodeType ? [a] : a, []),
            g = !e || !o && t ? m : we(m, d, e, a, l),
            v = n ? r || (o ? e : p || i) ? [] : s : g;if (n && n(g, v, a, l), i) for (c = we(v, h), i(c, [], a, l), u = c.length; u--;) {
          (f = c[u]) && (v[h[u]] = !(g[h[u]] = f));
        }if (o) {
          if (r || e) {
            if (r) {
              for (c = [], u = v.length; u--;) {
                (f = v[u]) && c.push(g[u] = f);
              }r(null, v = [], c, l);
            }for (u = v.length; u--;) {
              (f = v[u]) && (c = r ? P(o, f) : d[u]) > -1 && (o[c] = !(s[c] = f));
            }
          }
        } else v = we(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : N.apply(s, v);
      });
    }function Te(e) {
      for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = ye(function (e) {
        return e === t;
      }, a, !0), f = ye(function (e) {
        return P(t, e) > -1;
      }, a, !0), d = [function (e, n, i) {
        var r = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : f(e, n, i));return t = null, r;
      }]; l < o; l++) {
        if (n = i.relative[e[l].type]) d = [ye(be(d), n)];else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
            for (r = ++l; r < o && !i.relative[e[r].type]; r++) {}return _e(l > 1 && be(d), l > 1 && ve(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(q, "$1"), n, l < r && Te(e.slice(l, r)), r < o && Te(e = e.slice(r)), r < o && ve(e));
          }d.push(n);
        }
      }return be(d);
    }return ge.prototype = i.filters = i.pseudos, i.setFilters = new ge(), s = oe.tokenize = function (e, t) {
      var n,
          r,
          o,
          s,
          a,
          l,
          c,
          u = x[e + " "];if (u) return t ? 0 : u.slice(0);for (a = e, l = [], c = i.preFilter; a;) {
        for (s in n && !(r = B.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = Y.exec(a)) && (n = r.shift(), o.push({ value: n, type: r[0].replace(q, " ") }), a = a.slice(n.length)), i.filter) {
          !(r = $[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({ value: n, type: s, matches: r }), a = a.slice(n.length));
        }if (!n) break;
      }return t ? a.length : a ? oe.error(e) : x(e, l).slice(0);
    }, a = oe.compile = function (e, t) {
      var n,
          r = [],
          o = [],
          a = S[e + " "];if (!a) {
        for (t || (t = s(e)), n = t.length; n--;) {
          (a = Te(t[n]))[w] ? r.push(a) : o.push(a);
        }(a = S(e, function (e, t) {
          var n = t.length > 0,
              r = e.length > 0,
              o = function o(_o, s, a, l, u) {
            var f,
                p,
                g,
                v = 0,
                y = "0",
                b = _o && [],
                w = [],
                _ = c,
                C = _o || r && i.find.TAG("*", u),
                E = T += null == _ ? 1 : Math.random() || .1,
                x = C.length;for (u && (c = s === h || s || u); y !== x && null != (f = C[y]); y++) {
              if (r && f) {
                for (p = 0, s || f.ownerDocument === h || (d(f), a = !m); g = e[p++];) {
                  if (g(f, s || h, a)) {
                    l.push(f);break;
                  }
                }u && (T = E);
              }n && ((f = !g && f) && v--, _o && b.push(f));
            }if (v += y, n && y !== v) {
              for (p = 0; g = t[p++];) {
                g(b, w, s, a);
              }if (_o) {
                if (v > 0) for (; y--;) {
                  b[y] || w[y] || (w[y] = I.call(l));
                }w = we(w);
              }N.apply(l, w), u && !_o && w.length > 0 && v + t.length > 1 && oe.uniqueSort(l);
            }return u && (T = E, c = _), b;
          };return n ? ae(o) : o;
        }(o, r))).selector = e;
      }return a;
    }, l = oe.select = function (e, t, n, r) {
      var o,
          l,
          c,
          u,
          f,
          d = "function" == typeof e && e,
          h = !r && s(e = d.selector || e);if (n = n || [], 1 === h.length) {
        if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
          if (!(t = (i.find.ID(c.matches[0].replace(J, ee), t) || [])[0])) return n;d && (t = t.parentNode), e = e.slice(l.shift().value.length);
        }for (o = $.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !i.relative[u = c.type]);) {
          if ((f = i.find[u]) && (r = f(c.matches[0].replace(J, ee), Z.test(l[0].type) && me(t.parentNode) || t))) {
            if (l.splice(o, 1), !(e = r.length && ve(l))) return N.apply(n, r), n;break;
          }
        }
      }return (d || a(e, h))(r, t, !m, n, !t || Z.test(e) && me(t.parentNode) || t), n;
    }, n.sortStable = w.split("").sort(D).join("") === w, n.detectDuplicates = !!f, d(), n.sortDetached = le(function (e) {
      return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
    }), le(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || ce("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && le(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || ce("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), le(function (e) {
      return null == e.getAttribute("disabled");
    }) || ce(j, function (e, t, n) {
      var i;if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }), oe;
  }(e);w.find = C, w.expr = C.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = C.uniqueSort, w.text = C.getText, w.isXMLDoc = C.isXML, w.contains = C.contains, w.escapeSelector = C.escape;var E = function E(e, t, n) {
    for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
      if (1 === e.nodeType) {
        if (r && w(e).is(n)) break;i.push(e);
      }
    }return i;
  },
      x = function x(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  },
      S = w.expr.match.needsContext;function D(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function k(e, t, n) {
    return m(t) ? w.grep(e, function (e, i) {
      return !!t.call(e, i, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return l.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }w.filter = function (e, t, n) {
    var i = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({ find: function find(e) {
      var t,
          n,
          i = this.length,
          r = this;if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < i; t++) {
          if (w.contains(r[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < i; t++) {
        w.find(e, r[t], n);
      }return i > 1 ? w.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(k(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(k(this, e || [], !0));
    }, is: function is(e) {
      return !!k(this, "string" == typeof e && S.test(e) ? w(e) : e || [], !1).length;
    } });var I,
      O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init = function (e, t, n) {
    var r, o;if (!e) return this;if (n = n || I, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (r[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), A.test(r[1]) && w.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }return this;
      }return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, I = w(i);var N = /^(?:parents|prev(?:Until|All))/,
      L = { children: !0, contents: !0, next: !0, prev: !0 };function P(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
  }w.fn.extend({ has: function has(e) {
      var t = w(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (w.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var n,
          i = 0,
          r = this.length,
          o = [],
          s = "string" != typeof e && w(e);if (!S.test(e)) for (; i < r; i++) {
        for (n = this[i]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
            o.push(n);break;
          }
        }
      }return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    }, index: function index(e) {
      return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } }), w.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return E(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return E(e, "parentNode", n);
    }, next: function next(e) {
      return P(e, "nextSibling");
    }, prev: function prev(e) {
      return P(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return E(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return E(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return E(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return E(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return x((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return x(e.firstChild);
    }, contents: function contents(e) {
      return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    } }, function (e, t) {
    w.fn[e] = function (n, i) {
      var r = w.map(this, t, n);return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = w.filter(i, r)), this.length > 1 && (L[e] || w.uniqueSort(r), N.test(e) && r.reverse()), this.pushStack(r);
    };
  });var j = /[^\x20\t\r\n\f]+/g;function H(e) {
    return e;
  }function M(e) {
    throw e;
  }function R(e, t, n, i) {
    var r;try {
      e && m(r = e.promise) ? r.call(e).done(t).fail(n) : e && m(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }w.Callbacks = function (e) {
    e = "string" == typeof e ? function (e) {
      var t = {};return w.each(e.match(j) || [], function (e, n) {
        t[n] = !0;
      }), t;
    }(e) : w.extend({}, e);var t,
        n,
        i,
        r,
        o = [],
        s = [],
        a = -1,
        l = function l() {
      for (r = r || e.once, i = t = !0; s.length; a = -1) {
        for (n = s.shift(); ++a < o.length;) {
          !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
        }
      }e.memory || (n = !1), t = !1, r && (o = n ? [] : "");
    },
        c = { add: function add() {
        return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
          w.each(n, function (n, i) {
            m(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== b(i) && t(i);
          });
        }(arguments), n && !t && l()), this;
      }, remove: function remove() {
        return w.each(arguments, function (e, t) {
          for (var n; (n = w.inArray(t, o, n)) > -1;) {
            o.splice(n, 1), n <= a && a--;
          }
        }), this;
      }, has: function has(e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      }, empty: function empty() {
        return o && (o = []), this;
      }, disable: function disable() {
        return r = s = [], o = n = "", this;
      }, disabled: function disabled() {
        return !o;
      }, lock: function lock() {
        return r = s = [], n || t || (o = n = ""), this;
      }, locked: function locked() {
        return !!r;
      }, fireWith: function fireWith(e, n) {
        return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this;
      }, fire: function fire() {
        return c.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!i;
      } };return c;
  }, w.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          r = { state: function state() {
          return i;
        }, always: function always() {
          return o.done(arguments).fail(arguments), this;
        }, catch: function _catch(e) {
          return r.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return w.Deferred(function (t) {
            w.each(n, function (n, i) {
              var r = m(e[i[4]]) && e[i[4]];o[i[1]](function () {
                var e = r && r.apply(this, arguments);e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, i, r) {
          var o = 0;function s(t, n, i, r) {
            return function () {
              var a = this,
                  l = arguments,
                  c = function c() {
                var e, c;if (!(t < o)) {
                  if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");c = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, m(c) ? r ? c.call(e, s(o, n, H, r), s(o, n, M, r)) : (o++, c.call(e, s(o, n, H, r), s(o, n, M, r), s(o, n, H, n.notifyWith))) : (i !== H && (a = void 0, l = [e]), (r || n.resolveWith)(a, l));
                }
              },
                  u = r ? c : function () {
                try {
                  c();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= o && (i !== M && (a = void 0, l = [e]), n.rejectWith(a, l));
                }
              };t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), e.setTimeout(u));
            };
          }return w.Deferred(function (e) {
            n[0][3].add(s(0, e, m(r) ? r : H, e.notifyWith)), n[1][3].add(s(0, e, m(t) ? t : H)), n[2][3].add(s(0, e, m(i) ? i : M));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? w.extend(e, r) : r;
        } },
          o = {};return w.each(n, function (e, t) {
        var s = t[2],
            a = t[5];r[t[1]] = s.add, a && s.add(function () {
          i = a;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = s.fireWith;
      }), r.promise(o), t && t.call(o, o), o;
    }, when: function when(e) {
      var t = arguments.length,
          n = t,
          i = Array(n),
          r = o.call(arguments),
          s = w.Deferred(),
          a = function a(e) {
        return function (n) {
          i[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : n, --t || s.resolveWith(i, r);
        };
      };if (t <= 1 && (R(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || m(r[n] && r[n].then))) return s.then();for (; n--;) {
        R(r[n], a(n), s.reject);
      }return s.promise();
    } });var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && F.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var W = w.Deferred();function q() {
    i.removeEventListener("DOMContentLoaded", q), e.removeEventListener("load", q), w.ready();
  }w.fn.ready = function (e) {
    return W.then(e).catch(function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || W.resolveWith(i, [w]));
    } }), w.ready.then = W.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", q), e.addEventListener("load", q));var B = function B(e, t, n, i, r, o, s) {
    var a = 0,
        l = e.length,
        c = null == n;if ("object" === b(n)) for (a in r = !0, n) {
      B(e, t, a, n[a], !0, o, s);
    } else if (void 0 !== i && (r = !0, m(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function t(e, _t2, n) {
      return c.call(w(e), n);
    })), t)) for (; a < l; a++) {
      t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
    }return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
  },
      Y = /^-ms-/,
      U = /-([a-z])/g;function X(e, t) {
    return t.toUpperCase();
  }function z(e) {
    return e.replace(Y, "ms-").replace(U, X);
  }var $ = function $(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };function K() {
    this.expando = w.expando + K.uid++;
  }K.uid = 1, K.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var i,
          r = this.cache(e);if ("string" == typeof t) r[z(t)] = n;else for (i in t) {
        r[z(i)] = t[i];
      }return r;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][z(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          i = e[this.expando];if (void 0 !== i) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(z) : (t = z(t)) in i ? [t] : t.match(j) || []).length;for (; n--;) {
            delete i[t[n]];
          }
        }(void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !w.isEmptyObject(t);
    } };var V = new K(),
      Q = new K(),
      G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;function J(e, t, n) {
    var i;if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
      try {
        n = function (e) {
          return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : G.test(e) ? JSON.parse(e) : e);
        }(n);
      } catch (e) {}Q.set(e, t, n);
    } else n = void 0;return n;
  }w.extend({ hasData: function hasData(e) {
      return Q.hasData(e) || V.hasData(e);
    }, data: function data(e, t, n) {
      return Q.access(e, t, n);
    }, removeData: function removeData(e, t) {
      Q.remove(e, t);
    }, _data: function _data(e, t, n) {
      return V.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      V.remove(e, t);
    } }), w.fn.extend({ data: function data(e, t) {
      var n,
          i,
          r,
          o = this[0],
          s = o && o.attributes;if (void 0 === e) {
        if (this.length && (r = Q.get(o), 1 === o.nodeType && !V.get(o, "hasDataAttrs"))) {
          for (n = s.length; n--;) {
            s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = z(i.slice(5)), J(o, i, r[i]));
          }V.set(o, "hasDataAttrs", !0);
        }return r;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
        Q.set(this, e);
      }) : B(this, function (t) {
        var n;if (o && void 0 === t) return void 0 !== (n = Q.get(o, e)) ? n : void 0 !== (n = J(o, e)) ? n : void 0;this.each(function () {
          Q.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    } }), w.extend({ queue: function queue(e, t, n) {
      var i;if (e) return t = (t || "fx") + "queue", i = V.get(e, t), n && (!i || Array.isArray(n) ? i = V.access(e, t, w.makeArray(n)) : i.push(n)), i || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = w.queue(e, t),
          i = n.length,
          r = n.shift(),
          o = w._queueHooks(e, t);"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
        w.dequeue(e, t);
      }, o)), !i && o && o.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return V.get(e, n) || V.access(e, n, { empty: w.Callbacks("once memory").add(function () {
          V.remove(e, [t + "queue", n]);
        }) });
    } }), w.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = w.queue(this, e, t);w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          i = 1,
          r = w.Deferred(),
          o = this,
          s = this.length,
          a = function a() {
        --i || r.resolveWith(o, [o]);
      };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
        (n = V.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      }return a(), r.promise(t);
    } });var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      ie = function ie(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      re = function re(e, t, n, i) {
    var r,
        o,
        s = {};for (o in t) {
      s[o] = e.style[o], e.style[o] = t[o];
    }for (o in r = n.apply(e, i || []), t) {
      e.style[o] = s[o];
    }return r;
  };function oe(e, t, n, i) {
    var r,
        o,
        s = 20,
        a = i ? function () {
      return i.cur();
    } : function () {
      return w.css(e, t, "");
    },
        l = a(),
        c = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        u = (w.cssNumber[t] || "px" !== c && +l) && te.exec(w.css(e, t));if (u && u[3] !== c) {
      for (l /= 2, c = c || u[3], u = +l || 1; s--;) {
        w.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
      }u *= 2, w.style(e, t, u + c), n = n || [];
    }return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r;
  }var se = {};function ae(e) {
    var t,
        n = e.ownerDocument,
        i = e.nodeName,
        r = se[i];return r || (t = n.body.appendChild(n.createElement(i)), r = w.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), se[i] = r, r);
  }function le(e, t) {
    for (var n, i, r = [], o = 0, s = e.length; o < s; o++) {
      (i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = V.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ie(i) && (r[o] = ae(i))) : "none" !== n && (r[o] = "none", V.set(i, "display", n)));
    }for (o = 0; o < s; o++) {
      null != r[o] && (e[o].style.display = r[o]);
    }return e;
  }w.fn.extend({ show: function show() {
      return le(this, !0);
    }, hide: function hide() {
      return le(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ie(this) ? w(this).show() : w(this).hide();
      });
    } });var ce = /^(?:checkbox|radio)$/i,
      ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      fe = /^$|^module$|\/(?:java|ecma)script/i,
      de = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };function he(e, t) {
    var n;return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? w.merge([e], n) : n;
  }function pe(e, t) {
    for (var n = 0, i = e.length; n < i; n++) {
      V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"));
    }
  }de.optgroup = de.option, de.tbody = de.tfoot = de.colgroup = de.caption = de.thead, de.th = de.td;var me,
      ge,
      ve = /<|&#?\w+;/;function ye(e, t, n, i, r) {
    for (var o, s, a, l, c, u, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++) {
      if ((o = e[h]) || 0 === o) if ("object" === b(o)) w.merge(d, o.nodeType ? [o] : o);else if (ve.test(o)) {
        for (s = s || f.appendChild(t.createElement("div")), a = (ue.exec(o) || ["", ""])[1].toLowerCase(), l = de[a] || de._default, s.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], u = l[0]; u--;) {
          s = s.lastChild;
        }w.merge(d, s.childNodes), (s = f.firstChild).textContent = "";
      } else d.push(t.createTextNode(o));
    }for (f.textContent = "", h = 0; o = d[h++];) {
      if (i && w.inArray(o, i) > -1) r && r.push(o);else if (c = w.contains(o.ownerDocument, o), s = he(f.appendChild(o), "script"), c && pe(s), n) for (u = 0; o = s[u++];) {
        fe.test(o.type || "") && n.push(o);
      }
    }return f;
  }me = i.createDocumentFragment().appendChild(i.createElement("div")), (ge = i.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), me.appendChild(ge), p.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;var be = i.documentElement,
      we = /^key/,
      _e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Te = /^([^.]*)(?:\.(.+)|)/;function Ce() {
    return !0;
  }function Ee() {
    return !1;
  }function xe() {
    try {
      return i.activeElement;
    } catch (e) {}
  }function Se(e, t, n, i, r, o) {
    var s, a;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
      for (a in "string" != typeof n && (i = i || n, n = void 0), t) {
        Se(e, a, n, i, t[a], o);
      }return e;
    }if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ee;else if (!r) return e;return 1 === o && (s = r, (r = function r(e) {
      return w().off(e), s.apply(this, arguments);
    }).guid = s.guid || (s.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, r, i, n);
    });
  }w.event = { global: {}, add: function add(e, t, n, i, r) {
      var o,
          s,
          a,
          l,
          c,
          u,
          f,
          d,
          h,
          p,
          m,
          g = V.get(e);if (g) for (n.handler && (n = (o = n).handler, r = o.selector), r && w.find.matchesSelector(be, r), n.guid || (n.guid = w.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
      }), c = (t = (t || "").match(j) || [""]).length; c--;) {
        h = m = (a = Te.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = w.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = w.event.special[h] || {}, u = w.extend({ type: h, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && w.expr.match.needsContext.test(r), namespace: p.join(".") }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(h, s)), f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), w.event.global[h] = !0);
      }
    }, remove: function remove(e, t, n, i, r) {
      var o,
          s,
          a,
          l,
          c,
          u,
          f,
          d,
          h,
          p,
          m,
          g = V.hasData(e) && V.get(e);if (g && (l = g.events)) {
        for (c = (t = (t || "").match(j) || [""]).length; c--;) {
          if (h = m = (a = Te.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
            for (f = w.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) {
              u = d[o], !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
            }s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, g.handle) || w.removeEvent(e, h, g.handle), delete l[h]);
          } else for (h in l) {
            w.event.remove(e, h + t[c], n, i, !0);
          }
        }w.isEmptyObject(l) && V.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t,
          n,
          i,
          r,
          o,
          s,
          a = w.event.fix(e),
          l = new Array(arguments.length),
          c = (V.get(this, "events") || {})[a.type] || [],
          u = w.event.special[a.type] || {};for (l[0] = a, t = 1; t < arguments.length; t++) {
        l[t] = arguments[t];
      }if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
        for (s = w.event.handlers.call(this, a, c), t = 0; (r = s[t++]) && !a.isPropagationStopped();) {
          for (a.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) {
            a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
          }
        }return u.postDispatch && u.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          i,
          r,
          o,
          s,
          a = [],
          l = t.delegateCount,
          c = e.target;if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) {
        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
          for (o = [], s = {}, n = 0; n < l; n++) {
            void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? w(r, this).index(c) > -1 : w.find(r, this, null, [c]).length), s[r] && o.push(i);
          }o.length && a.push({ elem: c, handlers: o });
        }
      }return c = this, l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: m(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(e) {
      return e[w.expando] ? e : new w.Event(e);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== xe() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === xe() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && D(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return D(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: Ee, isPropagationStopped: Ee, isImmediatePropagationStopped: Ee, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && _e.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    w.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            i = e.relatedTarget,
            r = e.handleObj;return i && (i === this || w.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n;
      } };
  }), w.fn.extend({ on: function on(e, t, n, i) {
      return Se(this, e, t, n, i);
    }, one: function one(e, t, n, i) {
      return Se(this, e, t, n, i, 1);
    }, off: function off(e, t, n) {
      var i, r;if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        for (r in e) {
          this.off(r, t, e[r]);
        }return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    } });var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e, t) {
    return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e;
  }function Ne(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function Le(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }function Pe(e, t) {
    var n, i, r, o, s, a, l, c;if (1 === t.nodeType) {
      if (V.hasData(e) && (o = V.access(e), s = V.set(t, o), c = o.events)) for (r in delete s.handle, s.events = {}, c) {
        for (n = 0, i = c[r].length; n < i; n++) {
          w.event.add(t, r, c[r][n]);
        }
      }Q.hasData(e) && (a = Q.access(e), l = w.extend({}, a), Q.set(t, l));
    }
  }function je(e, t, n, i) {
    t = s.apply([], t);var r,
        o,
        a,
        l,
        c,
        u,
        f = 0,
        d = e.length,
        h = d - 1,
        g = t[0],
        v = m(g);if (v || d > 1 && "string" == typeof g && !p.checkClone && ke.test(g)) return e.each(function (r) {
      var o = e.eq(r);v && (t[0] = g.call(this, r, o.html())), je(o, t, n, i);
    });if (d && (o = (r = ye(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
      for (l = (a = w.map(he(r, "script"), Ne)).length; f < d; f++) {
        c = r, f !== h && (c = w.clone(c, !0, !0), l && w.merge(a, he(c, "script"))), n.call(e[f], c, f);
      }if (l) for (u = a[a.length - 1].ownerDocument, w.map(a, Le), f = 0; f < l; f++) {
        c = a[f], fe.test(c.type || "") && !V.access(c, "globalEval") && w.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(c.src) : y(c.textContent.replace(Ie, ""), u, c));
      }
    }return e;
  }function He(e, t, n) {
    for (var i, r = t ? w.filter(t, e) : e, o = 0; null != (i = r[o]); o++) {
      n || 1 !== i.nodeType || w.cleanData(he(i)), i.parentNode && (n && w.contains(i.ownerDocument, i) && pe(he(i, "script")), i.parentNode.removeChild(i));
    }return e;
  }w.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(De, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var i,
          r,
          o,
          s,
          a,
          l,
          c,
          u = e.cloneNode(!0),
          f = w.contains(e.ownerDocument, e);if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (s = he(u), i = 0, r = (o = he(e)).length; i < r; i++) {
        a = o[i], l = s[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && ce.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
      }if (t) if (n) for (o = o || he(e), s = s || he(u), i = 0, r = o.length; i < r; i++) {
        Pe(o[i], s[i]);
      } else Pe(e, u);return (s = he(u, "script")).length > 0 && pe(s, !f && he(e, "script")), u;
    }, cleanData: function cleanData(e) {
      for (var t, n, i, r = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if ($(n)) {
          if (t = n[V.expando]) {
            if (t.events) for (i in t.events) {
              r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
            }n[V.expando] = void 0;
          }n[Q.expando] && (n[Q.expando] = void 0);
        }
      }
    } }), w.fn.extend({ detach: function detach(e) {
      return He(this, e, !0);
    }, remove: function remove(e) {
      return He(this, e);
    }, text: function text(e) {
      return B(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return je(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e);
      });
    }, prepend: function prepend() {
      return je(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Oe(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return je(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return je(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (w.cleanData(he(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    }, html: function html(e) {
      return B(this, function (e) {
        var t = this[0] || {},
            n = 0,
            i = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ae.test(e) && !de[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);try {
            for (; n < i; n++) {
              1 === (t = this[n] || {}).nodeType && (w.cleanData(he(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return je(this, arguments, function (t) {
        var n = this.parentNode;w.inArray(this, e) < 0 && (w.cleanData(he(this)), n && n.replaceChild(t, this));
      }, e);
    } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, i = [], r = w(e), o = r.length - 1, s = 0; s <= o; s++) {
        n = s === o ? this : this.clone(!0), w(r[s])[t](n), a.apply(i, n.get());
      }return this.pushStack(i);
    };
  });var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Re = function Re(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Fe = new RegExp(ne.join("|"), "i");function We(e, t, n) {
    var i,
        r,
        o,
        s,
        a = e.style;return (n = n || Re(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (s = w.style(e, t)), !p.pixelBoxStyles() && Me.test(s) && Fe.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s;
  }function qe(e, t) {
    return { get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
      } };
  }!function () {
    function t() {
      if (u) {
        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(c).appendChild(u);var t = e.getComputedStyle(u);r = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", a = 36 === n(t.right), o = 36 === n(t.width), u.style.position = "absolute", s = 36 === u.offsetWidth || "absolute", be.removeChild(c), u = null;
      }
    }function n(e) {
      return Math.round(parseFloat(e));
    }var r,
        o,
        s,
        a,
        l,
        c = i.createElement("div"),
        u = i.createElement("div");u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, w.extend(p, { boxSizingReliable: function boxSizingReliable() {
        return t(), o;
      }, pixelBoxStyles: function pixelBoxStyles() {
        return t(), a;
      }, pixelPosition: function pixelPosition() {
        return t(), r;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return t(), l;
      }, scrollboxSize: function scrollboxSize() {
        return t(), s;
      } }));
  }();var Be = /^(none|table(?!-c[ea]).+)/,
      Ye = /^--/,
      Ue = { position: "absolute", visibility: "hidden", display: "block" },
      Xe = { letterSpacing: "0", fontWeight: "400" },
      ze = ["Webkit", "Moz", "ms"],
      $e = i.createElement("div").style;function Ke(e) {
    var t = w.cssProps[e];return t || (t = w.cssProps[e] = function (e) {
      if (e in $e) return e;for (var t = e[0].toUpperCase() + e.slice(1), n = ze.length; n--;) {
        if ((e = ze[n] + t) in $e) return e;
      }
    }(e) || e), t;
  }function Ve(e, t, n) {
    var i = te.exec(t);return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }function Qe(e, t, n, i, r, o) {
    var s = "width" === t ? 1 : 0,
        a = 0,
        l = 0;if (n === (i ? "border" : "content")) return 0;for (; s < 4; s += 2) {
      "margin" === n && (l += w.css(e, n + ne[s], !0, r)), i ? ("content" === n && (l -= w.css(e, "padding" + ne[s], !0, r)), "margin" !== n && (l -= w.css(e, "border" + ne[s] + "Width", !0, r))) : (l += w.css(e, "padding" + ne[s], !0, r), "padding" !== n ? l += w.css(e, "border" + ne[s] + "Width", !0, r) : a += w.css(e, "border" + ne[s] + "Width", !0, r));
    }return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l;
  }function Ge(e, t, n) {
    var i = Re(e),
        r = We(e, t, i),
        o = "border-box" === w.css(e, "boxSizing", !1, i),
        s = o;if (Me.test(r)) {
      if (!n) return r;r = "auto";
    }return s = s && (p.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === w.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + Qe(e, t, n || (o ? "border" : "content"), s, i, r) + "px";
  }function Ze(e, t, n, i, r) {
    return new Ze.prototype.init(e, t, n, i, r);
  }w.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = We(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
            o,
            s,
            a = z(t),
            l = Ye.test(t),
            c = e.style;if (l || (t = Ke(a)), s = w.cssHooks[t] || w.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];"string" === (o = typeof n === "undefined" ? "undefined" : _typeof(n)) && (r = te.exec(n)) && r[1] && (n = oe(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (w.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n));
      }
    }, css: function css(e, t, n, i) {
      var r,
          o,
          s,
          a = z(t);return Ye.test(t) || (t = Ke(a)), (s = w.cssHooks[t] || w.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = We(e, t, i)), "normal" === r && t in Xe && (r = Xe[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r;
    } }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = { get: function get(e, n, i) {
        if (n) return !Be.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ge(e, t, i) : re(e, Ue, function () {
          return Ge(e, t, i);
        });
      }, set: function set(e, n, i) {
        var r,
            o = Re(e),
            s = "border-box" === w.css(e, "boxSizing", !1, o),
            a = i && Qe(e, t, i, s, o);return s && p.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Qe(e, t, "border", !1, o) - .5)), a && (r = te.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ve(0, n, a);
      } };
  }), w.cssHooks.marginLeft = qe(p.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    w.cssHooks[e + t] = { expand: function expand(n) {
        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
          r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
        }return r;
      } }, "margin" !== e && (w.cssHooks[e + t].set = Ve);
  }), w.fn.extend({ css: function css(e, t) {
      return B(this, function (e, t, n) {
        var i,
            r,
            o = {},
            s = 0;if (Array.isArray(t)) {
          for (i = Re(e), r = t.length; s < r; s++) {
            o[t[s]] = w.css(e, t[s], !1, i);
          }return o;
        }return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    } }), w.Tween = Ze, Ze.prototype = { constructor: Ze, init: function init(e, t, n, i, r, o) {
      this.elem = e, this.prop = n, this.easing = r || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (w.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = Ze.propHooks[this.prop];return e && e.get ? e.get(this) : Ze.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = Ze.propHooks[this.prop];return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ze.propHooks._default.set(this), this;
    } }, Ze.prototype.init.prototype = Ze.prototype, Ze.propHooks = { _default: { get: function get(e) {
        var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      }, set: function set(e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
      } } }, Ze.propHooks.scrollTop = Ze.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, w.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, w.fx = Ze.prototype.init, w.fx.step = {};var Je,
      et,
      tt = /^(?:toggle|show|hide)$/,
      nt = /queueHooks$/;function it() {
    et && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(it) : e.setTimeout(it, w.fx.interval), w.fx.tick());
  }function rt() {
    return e.setTimeout(function () {
      Je = void 0;
    }), Je = Date.now();
  }function ot(e, t) {
    var n,
        i = 0,
        r = { height: e };for (t = t ? 1 : 0; i < 4; i += 2 - t) {
      r["margin" + (n = ne[i])] = r["padding" + n] = e;
    }return t && (r.opacity = r.width = e), r;
  }function st(e, t, n) {
    for (var i, r = (at.tweeners[t] || []).concat(at.tweeners["*"]), o = 0, s = r.length; o < s; o++) {
      if (i = r[o].call(n, t, e)) return i;
    }
  }function at(e, t, n) {
    var i,
        r,
        o = 0,
        s = at.prefilters.length,
        a = w.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (r) return !1;for (var t = Je || rt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) {
        c.tweens[o].run(i);
      }return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
    },
        c = a.promise({ elem: e, props: w.extend({}, t), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n), originalProperties: t, originalOptions: n, startTime: Je || rt(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var i = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);return c.tweens.push(i), i;
      }, stop: function stop(t) {
        var n = 0,
            i = t ? c.tweens.length : 0;if (r) return this;for (r = !0; n < i; n++) {
          c.tweens[n].run(1);
        }return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
      } }),
        u = c.props;for (!function (e, t) {
      var n, i, r, o, s;for (n in e) {
        if (r = t[i = z(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = w.cssHooks[i]) && ("expand" in s)) for (n in o = s.expand(o), delete e[i], o) {
          (n in e) || (e[n] = o[n], t[n] = r);
        } else t[i] = r;
      }
    }(u, c.opts.specialEasing); o < s; o++) {
      if (i = at.prefilters[o].call(c, e, u, c.opts)) return m(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
    }return w.map(u, st, c), m(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, { elem: e, anim: c, queue: c.opts.queue })), c;
  }w.Animation = w.extend(at, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return oe(n.elem, e, te.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(j);for (var n, i = 0, r = e.length; i < r; i++) {
        n = e[i], at.tweeners[n] = at.tweeners[n] || [], at.tweeners[n].unshift(t);
      }
    }, prefilters: [function (e, t, n) {
      var i,
          r,
          o,
          s,
          a,
          l,
          c,
          u,
          f = "width" in t || "height" in t,
          d = this,
          h = {},
          p = e.style,
          m = e.nodeType && ie(e),
          g = V.get(e, "fxshow");for (i in n.queue || (null == (s = w._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
        s.unqueued || a();
      }), s.unqueued++, d.always(function () {
        d.always(function () {
          s.unqueued--, w.queue(e, "fx").length || s.empty.fire();
        });
      })), t) {
        if (r = t[i], tt.test(r)) {
          if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
            if ("show" !== r || !g || void 0 === g[i]) continue;m = !0;
          }h[i] = g && g[i] || w.style(e, i);
        }
      }if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h)) for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = g && g.display) && (c = V.get(e, "display")), "none" === (u = w.css(e, "display")) && (c ? u = c : (le([e], !0), c = e.style.display || c, u = w.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(e, "float") && (l || (d.done(function () {
        p.display = c;
      }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
      })), l = !1, h) {
        l || (g ? "hidden" in g && (m = g.hidden) : g = V.access(e, "fxshow", { display: c }), o && (g.hidden = !m), m && le([e], !0), d.done(function () {
          for (i in m || le([e]), V.remove(e, "fxshow"), h) {
            w.style(e, i, h[i]);
          }
        })), l = st(m ? g[i] : 0, i, d), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0));
      }
    }], prefilter: function prefilter(e, t) {
      t ? at.prefilters.unshift(e) : at.prefilters.push(e);
    } }), w.speed = function (e, t, n) {
    var i = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? w.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t };return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      m(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
    }, i;
  }, w.fn.extend({ fadeTo: function fadeTo(e, t, n, i) {
      return this.filter(ie).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
    }, animate: function animate(e, t, n, i) {
      var r = w.isEmptyObject(e),
          o = w.speed(t, n, i),
          s = function s() {
        var t = at(this, w.extend({}, e), o);(r || V.get(this, "finish")) && t.stop(!0);
      };return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
    }, stop: function stop(e, t, n) {
      var i = function i(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            r = null != e && e + "queueHooks",
            o = w.timers,
            s = V.get(this);if (r) s[r] && s[r].stop && i(s[r]);else for (r in s) {
          s[r] && s[r].stop && nt.test(r) && i(s[r]);
        }for (r = o.length; r--;) {
          o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
        }!t && n || w.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = V.get(this),
            i = n[e + "queue"],
            r = n[e + "queueHooks"],
            o = w.timers,
            s = i ? i.length : 0;for (n.finish = !0, w.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }for (t = 0; t < s; t++) {
          i[t] && i[t].finish && i[t].finish.call(this);
        }delete n.finish;
      });
    } }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];w.fn[t] = function (e, i, r) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ot(t, !0), e, i, r);
    };
  }), w.each({ slideDown: ot("show"), slideUp: ot("hide"), slideToggle: ot("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    w.fn[e] = function (e, n, i) {
      return this.animate(t, e, n, i);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;for (Je = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }n.length || w.fx.stop(), Je = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    et || (et = !0, it());
  }, w.fx.stop = function () {
    et = null;
  }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function (t, n) {
    return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, i) {
      var r = e.setTimeout(n, t);i.stop = function () {
        e.clearTimeout(r);
      };
    });
  }, function () {
    var e = i.createElement("input"),
        t = i.createElement("select").appendChild(i.createElement("option"));e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value;
  }();var lt,
      ct = w.expr.attrHandle;w.fn.extend({ attr: function attr(e, t) {
      return B(this, w.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    } }), w.extend({ attr: function attr(e, t, n) {
      var i,
          r,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (r = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!p.radioValue && "radio" === t && D(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          i = 0,
          r = t && t.match(j);if (r && 1 === e.nodeType) for (; n = r[i++];) {
        e.removeAttribute(n);
      }
    } }), lt = { set: function set(e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ct[t] || w.find.attr;ct[t] = function (e, t, i) {
      var r,
          o,
          s = t.toLowerCase();return i || (o = ct[s], ct[s] = r, r = null != n(e, t, i) ? s : null, ct[s] = o), r;
    };
  });var ut = /^(?:input|select|textarea|button)$/i,
      ft = /^(?:a|area)$/i;function dt(e) {
    return (e.match(j) || []).join(" ");
  }function ht(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function pt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(j) || [];
  }w.fn.extend({ prop: function prop(e, t) {
      return B(this, w.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    } }), w.extend({ prop: function prop(e, t, n) {
      var i,
          r,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, r = w.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = w.find.attr(e, "tabindex");return t ? parseInt(t, 10) : ut.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { for: "htmlFor", class: "className" } }), p.optSelected || (w.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  }), w.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;if (m(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, ht(this)));
      });if ((t = pt(e)).length) for (; n = this[l++];) {
        if (r = ht(n), i = 1 === n.nodeType && " " + dt(r) + " ") {
          for (s = 0; o = t[s++];) {
            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
          }r !== (a = dt(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;if (m(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, ht(this)));
      });if (!arguments.length) return this.attr("class", "");if ((t = pt(e)).length) for (; n = this[l++];) {
        if (r = ht(n), i = 1 === n.nodeType && " " + dt(r) + " ") {
          for (s = 0; o = t[s++];) {
            for (; i.indexOf(" " + o + " ") > -1;) {
              i = i.replace(" " + o + " ", " ");
            }
          }r !== (a = dt(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e === "undefined" ? "undefined" : _typeof(e),
          i = "string" === n || Array.isArray(e);return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, ht(this), t), t);
      }) : this.each(function () {
        var t, r, o, s;if (i) for (r = 0, o = w(this), s = pt(e); t = s[r++];) {
          o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
        } else void 0 !== e && "boolean" !== n || ((t = ht(this)) && V.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : V.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          n,
          i = 0;for (t = " " + e + " "; n = this[i++];) {
        if (1 === n.nodeType && (" " + dt(ht(n)) + " ").indexOf(t) > -1) return !0;
      }return !1;
    } });var mt = /\r/g;w.fn.extend({ val: function val(e) {
      var t,
          n,
          i,
          r = this[0];return arguments.length ? (i = m(e), this.each(function (n) {
        var r;1 === this.nodeType && (null == (r = i ? e.call(this, n, w(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = w.map(r, function (e) {
          return null == e ? "" : e + "";
        })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r));
      })) : r ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(mt, "") : null == n ? "" : n : void 0;
    } }), w.extend({ valHooks: { option: { get: function get(e) {
          var t = w.find.attr(e, "value");return null != t ? t : dt(w.text(e));
        } }, select: { get: function get(e) {
          var t,
              n,
              i,
              r = e.options,
              o = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? o + 1 : r.length;for (i = o < 0 ? l : s ? o : 0; i < l; i++) {
            if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
              if (t = w(n).val(), s) return t;a.push(t);
            }
          }return a;
        }, set: function set(e, t) {
          for (var n, i, r = e.options, o = w.makeArray(t), s = r.length; s--;) {
            ((i = r[s]).selected = w.inArray(w.valHooks.option.get(i), o) > -1) && (n = !0);
          }return n || (e.selectedIndex = -1), o;
        } } } }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      } }, p.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), p.focusin = "onfocusin" in e;var gt = /^(?:focusinfocus|focusoutblur)$/,
      vt = function vt(e) {
    e.stopPropagation();
  };w.extend(w.event, { trigger: function trigger(t, n, r, o) {
      var s,
          a,
          l,
          c,
          u,
          d,
          h,
          p,
          v = [r || i],
          y = f.call(t, "type") ? t.type : t,
          b = f.call(t, "namespace") ? t.namespace.split(".") : [];if (a = p = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !gt.test(y + w.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t)).isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : w.makeArray(n, [t]), h = w.event.special[y] || {}, o || !h.trigger || !1 !== h.trigger.apply(r, n))) {
        if (!o && !h.noBubble && !g(r)) {
          for (c = h.delegateType || y, gt.test(c + y) || (a = a.parentNode); a; a = a.parentNode) {
            v.push(a), l = a;
          }l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e);
        }for (s = 0; (a = v[s++]) && !t.isPropagationStopped();) {
          p = a, t.type = s > 1 ? c : h.bindType || y, (d = (V.get(a, "events") || {})[t.type] && V.get(a, "handle")) && d.apply(a, n), (d = u && a[u]) && d.apply && $(a) && (t.result = d.apply(a, n), !1 === t.result && t.preventDefault());
        }return t.type = y, o || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), n) || !$(r) || u && m(r[y]) && !g(r) && ((l = r[u]) && (r[u] = null), w.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, vt), r[y](), t.isPropagationStopped() && p.removeEventListener(y, vt), w.event.triggered = void 0, l && (r[u] = l)), t.result;
      }
    }, simulate: function simulate(e, t, n) {
      var i = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });w.event.trigger(i, null, t);
    } }), w.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return w.event.trigger(e, t, n, !0);
    } }), p.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function n(e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };w.event.special[t] = { setup: function setup() {
        var i = this.ownerDocument || this,
            r = V.access(i, t);r || i.addEventListener(e, n, !0), V.access(i, t, (r || 0) + 1);
      }, teardown: function teardown() {
        var i = this.ownerDocument || this,
            r = V.access(i, t) - 1;r ? V.access(i, t, r) : (i.removeEventListener(e, n, !0), V.remove(i, t));
      } };
  });var yt = e.location,
      bt = Date.now(),
      wt = /\?/;w.parseXML = function (t) {
    var n;if (!t || "string" != typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };var _t = /\[\]$/,
      Tt = /\r?\n/g,
      Ct = /^(?:submit|button|image|reset|file)$/i,
      Et = /^(?:input|select|textarea|keygen)/i;function xt(e, t, n, i) {
    var r;if (Array.isArray(t)) w.each(t, function (t, r) {
      n || _t.test(e) ? i(e, r) : xt(e + "[" + ("object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && null != r ? t : "") + "]", r, n, i);
    });else if (n || "object" !== b(t)) i(e, t);else for (r in t) {
      xt(e + "[" + r + "]", t[r], n, i);
    }
  }w.param = function (e, t) {
    var n,
        i = [],
        r = function r(e, t) {
      var n = m(t) ? t() : t;i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      r(this.name, this.value);
    });else for (n in e) {
      xt(n, e[n], t, r);
    }return i.join("&");
  }, w.fn.extend({ serialize: function serialize() {
      return w.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = w.prop(this, "elements");return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !w(this).is(":disabled") && Et.test(this.nodeName) && !Ct.test(e) && (this.checked || !ce.test(e));
      }).map(function (e, t) {
        var n = w(this).val();return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return { name: t.name, value: e.replace(Tt, "\r\n") };
        }) : { name: t.name, value: n.replace(Tt, "\r\n") };
      }).get();
    } });var St = /%20/g,
      Dt = /#.*$/,
      At = /([?&])_=[^&]*/,
      kt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      It = /^(?:GET|HEAD)$/,
      Ot = /^\/\//,
      Nt = {},
      Lt = {},
      Pt = "*/".concat("*"),
      jt = i.createElement("a");function Ht(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var i,
          r = 0,
          o = t.toLowerCase().match(j) || [];if (m(n)) for (; i = o[r++];) {
        "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
      }
    };
  }function Mt(e, t, n, i) {
    var r = {},
        o = e === Lt;function s(a) {
      var l;return r[a] = !0, w.each(e[a] || [], function (e, a) {
        var c = a(t, n, i);return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1);
      }), l;
    }return s(t.dataTypes[0]) || !r["*"] && s("*");
  }function Rt(e, t) {
    var n,
        i,
        r = w.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    }return i && w.extend(!0, e, i), e;
  }jt.href = yt.href, w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Pt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? Rt(Rt(e, w.ajaxSettings), t) : Rt(w.ajaxSettings, e);
    }, ajaxPrefilter: Ht(Nt), ajaxTransport: Ht(Lt), ajax: function ajax(t, n) {
      "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};var r,
          o,
          s,
          a,
          l,
          c,
          u,
          f,
          d,
          h,
          p = w.ajaxSetup({}, n),
          m = p.context || p,
          g = p.context && (m.nodeType || m.jquery) ? w(m) : w.event,
          v = w.Deferred(),
          y = w.Callbacks("once memory"),
          b = p.statusCode || {},
          _ = {},
          T = {},
          C = "canceled",
          E = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (u) {
            if (!a) for (a = {}; t = kt.exec(s);) {
              a[t[1].toLowerCase()] = t[2];
            }t = a[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return u ? s : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == u && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, _[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == u && (p.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (u) E.always(e[E.status]);else for (t in e) {
            b[t] = [b[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          var t = e || C;return r && r.abort(t), x(0, t), this;
        } };if (v.promise(E), p.url = ((t || p.url || yt.href) + "").replace(Ot, yt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(j) || [""], null == p.crossDomain) {
        c = i.createElement("a");try {
          c.href = p.url, c.href = c.href, p.crossDomain = jt.protocol + "//" + jt.host != c.protocol + "//" + c.host;
        } catch (e) {
          p.crossDomain = !0;
        }
      }if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), Mt(Nt, p, n, E), u) return E;for (d in (f = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !It.test(p.type), o = p.url.replace(Dt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(St, "+")) : (h = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (wt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(At, "$1"), h = (wt.test(o) ? "&" : "?") + "_=" + bt++ + h), p.url = o + h), p.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && E.setRequestHeader("Content-Type", p.contentType), E.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : p.accepts["*"]), p.headers) {
        E.setRequestHeader(d, p.headers[d]);
      }if (p.beforeSend && (!1 === p.beforeSend.call(m, E, p) || u)) return E.abort();if (C = "abort", y.add(p.complete), E.done(p.success), E.fail(p.error), r = Mt(Lt, p, n, E)) {
        if (E.readyState = 1, f && g.trigger("ajaxSend", [E, p]), u) return E;p.async && p.timeout > 0 && (l = e.setTimeout(function () {
          E.abort("timeout");
        }, p.timeout));try {
          u = !1, r.send(_, x);
        } catch (e) {
          if (u) throw e;x(-1, e);
        }
      } else x(-1, "No Transport");function x(t, n, i, a) {
        var c,
            d,
            h,
            _,
            T,
            C = n;u || (u = !0, l && e.clearTimeout(l), r = void 0, s = a || "", E.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (_ = function (e, t, n) {
          for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];) {
            l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
          }if (i) for (r in a) {
            if (a[r] && a[r].test(i)) {
              l.unshift(r);break;
            }
          }if (l[0] in n) o = l[0];else {
            for (r in n) {
              if (!l[0] || e.converters[r + " " + l[0]]) {
                o = r;break;
              }s || (s = r);
            }o = o || s;
          }if (o) return o !== l[0] && l.unshift(o), n[o];
        }(p, E, i)), _ = function (e, t, n, i) {
          var r,
              o,
              s,
              a,
              l,
              c = {},
              u = e.dataTypes.slice();if (u[1]) for (s in e.converters) {
            c[s.toLowerCase()] = e.converters[s];
          }for (o = u.shift(); o;) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
              if (!(s = c[l + " " + o] || c["* " + o])) for (r in c) {
                if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                  !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));break;
                }
              }if (!0 !== s) if (s && e.throws) t = s(t);else try {
                t = s(t);
              } catch (e) {
                return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + o };
              }
            }
          }return { state: "success", data: t };
        }(p, _, E, c), c ? (p.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = _.state, d = _.data, c = !(h = _.error))) : (h = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", c ? v.resolveWith(m, [d, C, E]) : v.rejectWith(m, [E, C, h]), E.statusCode(b), b = void 0, f && g.trigger(c ? "ajaxSuccess" : "ajaxError", [E, p, c ? d : h]), y.fireWith(m, [E, C]), f && (g.trigger("ajaxComplete", [E, p]), --w.active || w.event.trigger("ajaxStop")));
      }return E;
    }, getJSON: function getJSON(e, t, n) {
      return w.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return w.get(e, void 0, t, "script");
    } }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, i, r) {
      return m(n) && (r = r || i, i = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: r, data: n, success: i }, w.isPlainObject(e) && e));
    };
  }), w._evalUrl = function (e) {
    return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
  }, w.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return this[0] && (m(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(e) {
      return m(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = w(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = m(e);return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    } }), w.expr.pseudos.hidden = function (e) {
    return !w.expr.pseudos.visible(e);
  }, w.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, w.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };var Ft = { 0: 200, 1223: 204 },
      Wt = w.ajaxSettings.xhr();p.cors = !!Wt && "withCredentials" in Wt, p.ajax = Wt = !!Wt, w.ajaxTransport(function (t) {
    var _n, i;if (p.cors || Wt && !t.crossDomain) return { send: function send(r, o) {
        var s,
            a = t.xhr();if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) {
          a[s] = t.xhrFields[s];
        }for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) {
          a.setRequestHeader(s, r[s]);
        }_n = function n(e) {
          return function () {
            _n && (_n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ft[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
          };
        }, a.onload = _n(), i = a.onerror = a.ontimeout = _n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
          4 === a.readyState && e.setTimeout(function () {
            _n && i();
          });
        }, _n = _n("abort");try {
          a.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n) throw e;
        }
      }, abort: function abort() {
        _n && _n();
      } };
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return w.globalEval(e), e;
      } } }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (e) {
    var t, _n2;if (e.crossDomain) return { send: function send(r, o) {
        t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n2 = function n(e) {
          t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
        }), i.head.appendChild(t[0]);
      }, abort: function abort() {
        _n2 && _n2();
      } };
  });var qt,
      Bt = [],
      Yt = /(=)\?(?=&|$)|\?\?/;w.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Bt.pop() || w.expando + "_" + bt++;return this[e] = !0, e;
    } }), w.ajaxPrefilter("json jsonp", function (t, n, i) {
    var r,
        o,
        s,
        a = !1 !== t.jsonp && (Yt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(t.data) && "data");if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Yt, "$1" + r) : !1 !== t.jsonp && (t.url += (wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
      return s || w.error(r + " was not called"), s[0];
    }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
      s = arguments;
    }, i.always(function () {
      void 0 === o ? w(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Bt.push(r)), s && m(o) && o(s[0]), s = o = void 0;
    }), "script";
  }), p.createHTMLDocument = ((qt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === qt.childNodes.length), w.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), o = A.exec(e), s = !n && [], o ? [t.createElement(o[1])] : (o = ye([e], t, s), s && s.length && w(s).remove(), w.merge([], o.childNodes)));var r, o, s;
  }, w.fn.load = function (e, t, n) {
    var i,
        r,
        o,
        s = this,
        a = e.indexOf(" ");return a > -1 && (i = dt(e.slice(a)), e = e.slice(0, a)), m(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (r = "POST"), s.length > 0 && w.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function (e) {
      o = arguments, s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e);
    }).always(n && function (e, t) {
      s.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), w.expr.pseudos.animated = function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, w.offset = { setOffset: function setOffset(e, t, n) {
      var i,
          r,
          o,
          s,
          a,
          l,
          c = w.css(e, "position"),
          u = w(e),
          f = {};"static" === c && (e.style.position = "relative"), a = u.offset(), o = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), m(t) && (t = t.call(e, n, w.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : u.css(f);
    } }, w.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });var t,
          n,
          i = this[0];return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0;
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            i = this[0],
            r = { top: 0, left: 0 };if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();else {
          for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) {
            e = e.parentNode;
          }e && e !== i && 1 === e.nodeType && ((r = w(e).offset()).top += w.css(e, "borderTopWidth", !0), r.left += w.css(e, "borderLeftWidth", !0));
        }return { top: t.top - r.top - w.css(i, "marginTop", !0), left: t.left - r.left - w.css(i, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === w.css(e, "position");) {
          e = e.offsetParent;
        }return e || be;
      });
    } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;w.fn[e] = function (i) {
      return B(this, function (e, i, r) {
        var o;if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r;
      }, e, i, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = qe(p.pixelPosition, function (e, n) {
      if (n) return n = We(e, t), Me.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({ Height: "height", Width: "width" }, function (e, t) {
    w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
      w.fn[i] = function (r, o) {
        var s = arguments.length && (n || "boolean" != typeof r),
            a = n || (!0 === r || !0 === o ? "margin" : "border");return B(this, function (t, n, r) {
          var o;return g(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? w.css(t, n, a) : w.style(t, n, r, a);
        }, t, s ? r : void 0, s);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), w.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), w.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, i) {
      return this.on(t, e, n, i);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), w.proxy = function (e, t) {
    var n, i, r;if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return i = o.call(arguments, 2), (r = function r() {
      return e.apply(t || this, i.concat(o.call(arguments)));
    }).guid = e.guid = e.guid || w.guid++, r;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = D, w.isFunction = m, w.isWindow = g, w.camelCase = z, w.type = b, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return w;
  });var Ut = e.jQuery,
      Xt = e.$;return w.noConflict = function (t) {
    return e.$ === w && (e.$ = Xt), t && e.jQuery === w && (e.jQuery = Ut), w;
  }, t || (e.jQuery = e.$ = w), w;
}), function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t();
}(this, function () {
  "use strict";
  for (var e = "undefined" != typeof window && "undefined" != typeof document, t = ["Edge", "Trident", "Firefox"], n = 0, i = 0; i < t.length; i += 1) {
    if (e && navigator.userAgent.indexOf(t[i]) >= 0) {
      n = 1;break;
    }
  }var r = e && window.Promise ? function (e) {
    var t = !1;return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var t = !1;return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, n));
    };
  };function o(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }function s(e, t) {
    if (1 !== e.nodeType) return [];var n = getComputedStyle(e, null);return t ? n[t] : n;
  }function a(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }function l(e) {
    if (!e) return document.body;switch (e.nodeName) {case "HTML":case "BODY":
        return e.ownerDocument.body;case "#document":
        return e.body;}var t = s(e),
        n = t.overflow,
        i = t.overflowX,
        r = t.overflowY;return (/(auto|scroll|overlay)/.test(n + r + i) ? e : l(a(e))
    );
  }var c = e && !(!window.MSInputMethodContext || !document.documentMode),
      u = e && /MSIE 10/.test(navigator.userAgent);function f(e) {
    return 11 === e ? c : 10 === e ? u : c || u;
  }function d(e) {
    if (!e) return document.documentElement;for (var t = f(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) {
      n = (e = e.nextElementSibling).offsetParent;
    }var i = n && n.nodeName;return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? d(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
  }function h(e) {
    return null !== e.parentNode ? h(e.parentNode) : e;
  }function p(e, t) {
    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? e : t,
        r = n ? t : e,
        o = document.createRange();o.setStart(i, 0), o.setEnd(r, 0);var s,
        a,
        l = o.commonAncestorContainer;if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && d(s.firstElementChild) !== s ? d(l) : l;var c = h(e);return c.host ? p(c.host, t) : p(e, h(t).host);
  }function m(e) {
    var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
        n = e.nodeName;if ("BODY" === n || "HTML" === n) {
      var i = e.ownerDocument.documentElement;return (e.ownerDocument.scrollingElement || i)[t];
    }return e[t];
  }function g(e, t) {
    var n = "x" === t ? "Left" : "Top",
        i = "Left" === n ? "Right" : "Bottom";return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10);
  }function v(e, t, n, i) {
    return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], f(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0);
  }function y() {
    var e = document.body,
        t = document.documentElement,
        n = f(10) && getComputedStyle(t);return { height: v("Height", e, t, n), width: v("Width", e, t, n) };
  }var b = function b(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  },
      w = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t;
    };
  }(),
      _ = function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  },
      T = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];for (var i in n) {
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
    }return e;
  };function C(e) {
    return T({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }function E(e) {
    var t = {};try {
      if (f(10)) {
        t = e.getBoundingClientRect();var n = m(e, "top"),
            i = m(e, "left");t.top += n, t.left += i, t.bottom += n, t.right += i;
      } else t = e.getBoundingClientRect();
    } catch (e) {}var r = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
        o = "HTML" === e.nodeName ? y() : {},
        a = o.width || e.clientWidth || r.right - r.left,
        l = o.height || e.clientHeight || r.bottom - r.top,
        c = e.offsetWidth - a,
        u = e.offsetHeight - l;if (c || u) {
      var d = s(e);c -= g(d, "x"), u -= g(d, "y"), r.width -= c, r.height -= u;
    }return C(r);
  }function x(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = f(10),
        r = "HTML" === t.nodeName,
        o = E(e),
        a = E(t),
        c = l(e),
        u = s(t),
        d = parseFloat(u.borderTopWidth, 10),
        h = parseFloat(u.borderLeftWidth, 10);n && "HTML" === t.nodeName && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));var p = C({ top: o.top - a.top - d, left: o.left - a.left - h, width: o.width, height: o.height });if (p.marginTop = 0, p.marginLeft = 0, !i && r) {
      var g = parseFloat(u.marginTop, 10),
          v = parseFloat(u.marginLeft, 10);p.top -= d - g, p.bottom -= d - g, p.left -= h - v, p.right -= h - v, p.marginTop = g, p.marginLeft = v;
    }return (i && !n ? t.contains(c) : t === c && "BODY" !== c.nodeName) && (p = function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = m(t, "top"),
          r = m(t, "left"),
          o = n ? -1 : 1;return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e;
    }(p, t)), p;
  }function S(e) {
    if (!e || !e.parentElement || f()) return document.documentElement;for (var t = e.parentElement; t && "none" === s(t, "transform");) {
      t = t.parentElement;
    }return t || document.documentElement;
  }function D(e, t, n, i) {
    var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        o = { top: 0, left: 0 },
        c = r ? S(e) : p(e, t);if ("viewport" === i) o = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = e.ownerDocument.documentElement,
          i = x(e, n),
          r = Math.max(n.clientWidth, window.innerWidth || 0),
          o = Math.max(n.clientHeight, window.innerHeight || 0),
          s = t ? 0 : m(n),
          a = t ? 0 : m(n, "left");return C({ top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o });
    }(c, r);else {
      var u = void 0;"scrollParent" === i ? "BODY" === (u = l(a(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === i ? e.ownerDocument.documentElement : i;var f = x(u, c, r);if ("HTML" !== u.nodeName || function e(t) {
        var n = t.nodeName;return "BODY" !== n && "HTML" !== n && ("fixed" === s(t, "position") || e(a(t)));
      }(c)) o = f;else {
        var d = y(),
            h = d.height,
            g = d.width;o.top += f.top - f.marginTop, o.bottom = h + f.top, o.left += f.left - f.marginLeft, o.right = g + f.left;
      }
    }return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o;
  }function A(e, t, n, i, r) {
    var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === e.indexOf("auto")) return e;var s = D(n, i, o, r),
        a = { top: { width: s.width, height: t.top - s.top }, right: { width: s.right - t.right, height: s.height }, bottom: { width: s.width, height: s.bottom - t.bottom }, left: { width: t.left - s.left, height: s.height } },
        l = Object.keys(a).map(function (e) {
      return T({ key: e }, a[e], { area: (t = a[e], t.width * t.height) });var t;
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        c = l.filter(function (e) {
      var t = e.width,
          i = e.height;return t >= n.clientWidth && i >= n.clientHeight;
    }),
        u = c.length > 0 ? c[0].key : l[0].key,
        f = e.split("-")[1];return u + (f ? "-" + f : "");
  }function k(e, t, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;return x(n, i ? S(t) : p(t, n), i);
  }function I(e) {
    var t = getComputedStyle(e),
        n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
        i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);return { width: e.offsetWidth + i, height: e.offsetHeight + n };
  }function O(e) {
    var t = { left: "right", right: "left", bottom: "top", top: "bottom" };return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }function N(e, t, n) {
    n = n.split("-")[0];var i = I(e),
        r = { width: i.width, height: i.height },
        o = -1 !== ["right", "left"].indexOf(n),
        s = o ? "top" : "left",
        a = o ? "left" : "top",
        l = o ? "height" : "width",
        c = o ? "width" : "height";return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[O(a)], r;
  }function L(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }function P(e, t, n) {
    return (void 0 === n ? e : e.slice(0, function (e, t, n) {
      if (Array.prototype.findIndex) return e.findIndex(function (e) {
        return e[t] === n;
      });var i = L(e, function (e) {
        return e[t] === n;
      });return e.indexOf(i);
    }(e, "name", n))).forEach(function (e) {
      e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n = e.function || e.fn;e.enabled && o(n) && (t.offsets.popper = C(t.offsets.popper), t.offsets.reference = C(t.offsets.reference), t = n(t, e));
    }), t;
  }function j(e, t) {
    return e.some(function (e) {
      var n = e.name;return e.enabled && n === t;
    });
  }function H(e) {
    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
      var r = t[i],
          o = r ? "" + r + n : e;if (void 0 !== document.body.style[o]) return o;
    }return null;
  }function M(e) {
    var t = e.ownerDocument;return t ? t.defaultView : window;
  }function R(e, t, n, i) {
    n.updateBound = i, M(e).addEventListener("resize", n.updateBound, { passive: !0 });var r = l(e);return function e(t, n, i, r) {
      var o = "BODY" === t.nodeName,
          s = o ? t.ownerDocument.defaultView : t;s.addEventListener(n, i, { passive: !0 }), o || e(l(s.parentNode), n, i, r), r.push(s);
    }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n;
  }function F() {
    var e, t;this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, M(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener("scroll", t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t));
  }function W(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }function q(e, t) {
    Object.keys(t).forEach(function (n) {
      var i = "";-1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && W(t[n]) && (i = "px"), e.style[n] = t[n] + i;
    });
  }function B(e, t, n) {
    var i = L(e, function (e) {
      return e.name === t;
    }),
        r = !!i && e.some(function (e) {
      return e.name === n && e.enabled && e.order < i.order;
    });if (!r) {
      var o = "`" + t + "`",
          s = "`" + n + "`";console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
    }return r;
  }var Y = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      U = Y.slice(3);function X(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = U.indexOf(e),
        i = U.slice(n + 1).concat(U.slice(0, n));return t ? i.reverse() : i;
  }var z = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" };function $(e, t, n, i) {
    var r = [0, 0],
        o = -1 !== ["right", "left"].indexOf(i),
        s = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        a = s.indexOf(L(s, function (e) {
      return -1 !== e.search(/,|\s/);
    }));s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l = /\s*,\s*|\s+/,
        c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];return (c = c.map(function (e, i) {
      var r = (1 === i ? !o : o) ? "height" : "width",
          s = !1;return e.reduce(function (e, t) {
        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return function (e, t, n, i) {
          var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              o = +r[1],
              s = r[2];if (!o) return e;if (0 === s.indexOf("%")) {
            var a = void 0;switch (s) {case "%p":
                a = n;break;case "%":case "%r":default:
                a = i;}return C(a)[t] / 100 * o;
          }if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;return o;
        }(e, r, t, n);
      });
    })).forEach(function (e, t) {
      e.forEach(function (n, i) {
        W(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1));
      });
    }), r;
  }var K = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              i = t.split("-")[1];if (i) {
            var r = e.offsets,
                o = r.reference,
                s = r.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                u = { start: _({}, l, o[l]), end: _({}, l, o[l] + o[c] - s[c]) };e.offsets.popper = T({}, s, u[i]);
          }return e;
        } }, offset: { order: 200, enabled: !0, fn: function fn(e, t) {
          var n = t.offset,
              i = e.placement,
              r = e.offsets,
              o = r.popper,
              s = r.reference,
              a = i.split("-")[0],
              l = void 0;return l = W(+n) ? [+n, 0] : $(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e;
        }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(e, t) {
          var n = t.boundariesElement || d(e.instance.popper);e.instance.reference === n && (n = d(n));var i = H("transform"),
              r = e.instance.popper.style,
              o = r.top,
              s = r.left,
              a = r[i];r.top = "", r.left = "", r[i] = "";var l = D(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);r.top = o, r.left = s, r[i] = a, t.boundaries = l;var c = t.priority,
              u = e.offsets.popper,
              f = { primary: function primary(e) {
              var n = u[e];return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), _({}, e, n);
            }, secondary: function secondary(e) {
              var n = "right" === e ? "left" : "top",
                  i = u[n];return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), _({}, n, i);
            } };return c.forEach(function (e) {
            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";u = T({}, u, f[t](e));
          }), e.offsets.popper = u, e;
        }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function fn(e) {
          var t = e.offsets,
              n = t.popper,
              i = t.reference,
              r = e.placement.split("-")[0],
              o = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(r),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e;
        } }, arrow: { order: 500, enabled: !0, fn: function fn(e, t) {
          var n;if (!B(e.instance.modifiers, "arrow", "keepTogether")) return e;var i = t.element;if ("string" == typeof i) {
            if (!(i = e.instance.popper.querySelector(i))) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;var r = e.placement.split("-")[0],
              o = e.offsets,
              a = o.popper,
              l = o.reference,
              c = -1 !== ["left", "right"].indexOf(r),
              u = c ? "height" : "width",
              f = c ? "Top" : "Left",
              d = f.toLowerCase(),
              h = c ? "left" : "top",
              p = c ? "bottom" : "right",
              m = I(i)[u];l[p] - m < a[d] && (e.offsets.popper[d] -= a[d] - (l[p] - m)), l[d] + m > a[p] && (e.offsets.popper[d] += l[d] + m - a[p]), e.offsets.popper = C(e.offsets.popper);var g = l[d] + l[u] / 2 - m / 2,
              v = s(e.instance.popper),
              y = parseFloat(v["margin" + f], 10),
              b = parseFloat(v["border" + f + "Width"], 10),
              w = g - e.offsets.popper[d] - y - b;return w = Math.max(Math.min(a[u] - m, w), 0), e.arrowElement = i, e.offsets.arrow = (_(n = {}, d, Math.round(w)), _(n, h, ""), n), e;
        }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function fn(e, t) {
          if (j(e.instance.modifiers, "inner")) return e;if (e.flipped && e.placement === e.originalPlacement) return e;var n = D(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
              i = e.placement.split("-")[0],
              r = O(i),
              o = e.placement.split("-")[1] || "",
              s = [];switch (t.behavior) {case z.FLIP:
              s = [i, r];break;case z.CLOCKWISE:
              s = X(i);break;case z.COUNTERCLOCKWISE:
              s = X(i, !0);break;default:
              s = t.behavior;}return s.forEach(function (a, l) {
            if (i !== a || s.length === l + 1) return e;i = e.placement.split("-")[0], r = O(i);var c = e.offsets.popper,
                u = e.offsets.reference,
                f = Math.floor,
                d = "left" === i && f(c.right) > f(u.left) || "right" === i && f(c.left) < f(u.right) || "top" === i && f(c.bottom) > f(u.top) || "bottom" === i && f(c.top) < f(u.bottom),
                h = f(c.left) < f(n.left),
                p = f(c.right) > f(n.right),
                m = f(c.top) < f(n.top),
                g = f(c.bottom) > f(n.bottom),
                v = "left" === i && h || "right" === i && p || "top" === i && m || "bottom" === i && g,
                y = -1 !== ["top", "bottom"].indexOf(i),
                b = !!t.flipVariations && (y && "start" === o && h || y && "end" === o && p || !y && "start" === o && m || !y && "end" === o && g);(d || v || b) && (e.flipped = !0, (d || v) && (i = s[l + 1]), b && (o = function (e) {
              return "end" === e ? "start" : "start" === e ? "end" : e;
            }(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = T({}, e.offsets.popper, N(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, "flip"));
          }), e;
        }, behavior: "flip", padding: 5, boundariesElement: "viewport" }, inner: { order: 700, enabled: !1, fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              i = e.offsets,
              r = i.popper,
              o = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = O(t), e.offsets.popper = C(r), e;
        } }, hide: { order: 800, enabled: !0, fn: function fn(e) {
          if (!B(e.instance.modifiers, "hide", "preventOverflow")) return e;var t = e.offsets.reference,
              n = L(e.instance.modifiers, function (e) {
            return "preventOverflow" === e.name;
          }).boundaries;if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
            if (!0 === e.hide) return e;e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === e.hide) return e;e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
          }return e;
        } }, computeStyle: { order: 850, enabled: !0, fn: function fn(e, t) {
          var n = t.x,
              i = t.y,
              r = e.offsets.popper,
              o = L(e.instance.modifiers, function (e) {
            return "applyStyle" === e.name;
          }).gpuAcceleration;void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s = void 0 !== o ? o : t.gpuAcceleration,
              a = E(d(e.instance.popper)),
              l = { position: r.position },
              c = { left: Math.floor(r.left), top: Math.round(r.top), bottom: Math.round(r.bottom), right: Math.floor(r.right) },
              u = "bottom" === n ? "top" : "bottom",
              f = "right" === i ? "left" : "right",
              h = H("transform"),
              p = void 0,
              m = void 0;if (m = "bottom" === u ? -a.height + c.bottom : c.top, p = "right" === f ? -a.width + c.right : c.left, s && h) l[h] = "translate3d(" + p + "px, " + m + "px, 0)", l[u] = 0, l[f] = 0, l.willChange = "transform";else {
            var g = "bottom" === u ? -1 : 1,
                v = "right" === f ? -1 : 1;l[u] = m * g, l[f] = p * v, l.willChange = u + ", " + f;
          }var y = { "x-placement": e.placement };return e.attributes = T({}, y, e.attributes), e.styles = T({}, l, e.styles), e.arrowStyles = T({}, e.offsets.arrow, e.arrowStyles), e;
        }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function fn(e) {
          var t, n;return q(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
          }), e.arrowElement && Object.keys(e.arrowStyles).length && q(e.arrowElement, e.arrowStyles), e;
        }, onLoad: function onLoad(e, t, n, i, r) {
          var o = k(r, t, e, n.positionFixed),
              s = A(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);return t.setAttribute("x-placement", s), q(t, { position: n.positionFixed ? "fixed" : "absolute" }), n;
        }, gpuAcceleration: void 0 } } },
      V = function () {
    function e(t, n) {
      var i = this,
          s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};b(this, e), this.scheduleUpdate = function () {
        return requestAnimationFrame(i.update);
      }, this.update = r(this.update.bind(this)), this.options = T({}, e.Defaults, s), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(T({}, e.Defaults.modifiers, s.modifiers)).forEach(function (t) {
        i.options.modifiers[t] = T({}, e.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return T({ name: e }, i.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (e) {
        e.enabled && o(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state);
      }), this.update();var a = this.options.eventsEnabled;a && this.enableEventListeners(), this.state.eventsEnabled = a;
    }return w(e, [{ key: "update", value: function value() {
        return function () {
          if (!this.state.isDestroyed) {
            var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };e.offsets.reference = k(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = A(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = N(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
          }
        }.call(this);
      } }, { key: "destroy", value: function value() {
        return function () {
          return this.state.isDestroyed = !0, j(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[H("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
        }.call(this);
      } }, { key: "enableEventListeners", value: function value() {
        return function () {
          this.state.eventsEnabled || (this.state = R(this.reference, this.options, this.state, this.scheduleUpdate));
        }.call(this);
      } }, { key: "disableEventListeners", value: function value() {
        return F.call(this);
      } }]), e;
  }();return V.Utils = ("undefined" != typeof window ? window : global).PopperUtils, V.placements = Y, V.Defaults = K, V;
}), function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper);
}(this, function (e, t, n) {
  "use strict";
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }function r(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
  }function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable;
      }))), i.forEach(function (t) {
        o(e, t, n[t]);
      });
    }return e;
  }t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;var a = function (e) {
    var t = "transitionend";function n(t) {
      var n = this,
          r = !1;return e(this).one(i.TRANSITION_END, function () {
        r = !0;
      }), setTimeout(function () {
        r || i.triggerTransitionEnd(n);
      }, t), this;
    }var i = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(e) {
        do {
          e += ~~(1e6 * Math.random());
        } while (document.getElementById(e));return e;
      }, getSelectorFromElement: function getSelectorFromElement(t) {
        var n = t.getAttribute("data-target");n && "#" !== n || (n = t.getAttribute("href") || "");try {
          return e(document).find(n).length > 0 ? n : null;
        } catch (e) {
          return null;
        }
      }, getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
        if (!t) return 0;var n = e(t).css("transition-duration");return parseFloat(n) ? (n = n.split(",")[0], 1e3 * parseFloat(n)) : 0;
      }, reflow: function reflow(e) {
        return e.offsetHeight;
      }, triggerTransitionEnd: function triggerTransitionEnd(n) {
        e(n).trigger(t);
      }, supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(t);
      }, isElement: function isElement(e) {
        return (e[0] || e).nodeType;
      }, typeCheckConfig: function typeCheckConfig(e, t, n) {
        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            var o = n[r],
                s = t[r],
                a = s && i.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".');
          }
        }var l;
      } };return e.fn.emulateTransitionEnd = n, e.event.special[i.TRANSITION_END] = { bindType: t, delegateType: t, handle: function handle(t) {
        if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
      } }, i;
  }(t),
      l = function (e) {
    var t = e.fn.alert,
        n = { CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api" },
        i = "alert",
        o = "fade",
        s = "show",
        l = function () {
      function t(e) {
        this._element = e;
      }var l = t.prototype;return l.close = function (e) {
        e = e || this._element;var t = this._getRootElement(e);this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
      }, l.dispose = function () {
        e.removeData(this._element, "bs.alert"), this._element = null;
      }, l._getRootElement = function (t) {
        var n = a.getSelectorFromElement(t),
            r = !1;return n && (r = e(n)[0]), r || (r = e(t).closest("." + i)[0]), r;
      }, l._triggerCloseEvent = function (t) {
        var i = e.Event(n.CLOSE);return e(t).trigger(i), i;
      }, l._removeElement = function (t) {
        var n = this;if (e(t).removeClass(s), e(t).hasClass(o)) {
          var i = a.getTransitionDurationFromElement(t);e(t).one(a.TRANSITION_END, function (e) {
            return n._destroyElement(t, e);
          }).emulateTransitionEnd(i);
        } else this._destroyElement(t);
      }, l._destroyElement = function (t) {
        e(t).detach().trigger(n.CLOSED).remove();
      }, t._jQueryInterface = function (n) {
        return this.each(function () {
          var i = e(this),
              r = i.data("bs.alert");r || (r = new t(this), i.data("bs.alert", r)), "close" === n && r[n](this);
        });
      }, t._handleDismiss = function (e) {
        return function (t) {
          t && t.preventDefault(), e.close(this);
        };
      }, r(t, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }]), t;
    }();return e(document).on(n.CLICK_DATA_API, '[data-dismiss="alert"]', l._handleDismiss(new l())), e.fn.alert = l._jQueryInterface, e.fn.alert.Constructor = l, e.fn.alert.noConflict = function () {
      return e.fn.alert = t, l._jQueryInterface;
    }, l;
  }(t),
      c = function (e) {
    var t = "button",
        n = e.fn[t],
        i = "active",
        o = "btn",
        s = "focus",
        a = '[data-toggle^="button"]',
        l = '[data-toggle="buttons"]',
        c = "input",
        u = ".active",
        f = ".btn",
        d = { CLICK_DATA_API: "click.bs.button.data-api", FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api" },
        h = function () {
      function t(e) {
        this._element = e;
      }var n = t.prototype;return n.toggle = function () {
        var t = !0,
            n = !0,
            r = e(this._element).closest(l)[0];if (r) {
          var o = e(this._element).find(c)[0];if (o) {
            if ("radio" === o.type) if (o.checked && e(this._element).hasClass(i)) t = !1;else {
              var s = e(r).find(u)[0];s && e(s).removeClass(i);
            }if (t) {
              if (o.hasAttribute("disabled") || r.hasAttribute("disabled") || o.classList.contains("disabled") || r.classList.contains("disabled")) return;o.checked = !e(this._element).hasClass(i), e(o).trigger("change");
            }o.focus(), n = !1;
          }
        }n && this._element.setAttribute("aria-pressed", !e(this._element).hasClass(i)), t && e(this._element).toggleClass(i);
      }, n.dispose = function () {
        e.removeData(this._element, "bs.button"), this._element = null;
      }, t._jQueryInterface = function (n) {
        return this.each(function () {
          var i = e(this).data("bs.button");i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]();
        });
      }, r(t, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }]), t;
    }();return e(document).on(d.CLICK_DATA_API, a, function (t) {
      t.preventDefault();var n = t.target;e(n).hasClass(o) || (n = e(n).closest(f)), h._jQueryInterface.call(e(n), "toggle");
    }).on(d.FOCUS_BLUR_DATA_API, a, function (t) {
      var n = e(t.target).closest(f)[0];e(n).toggleClass(s, /^focus(in)?$/.test(t.type));
    }), e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function () {
      return e.fn[t] = n, h._jQueryInterface;
    }, h;
  }(t),
      u = function (e) {
    var t = "carousel",
        n = "bs.carousel",
        i = "." + n,
        o = e.fn[t],
        l = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
        c = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
        u = "next",
        f = "prev",
        d = "left",
        h = "right",
        p = { SLIDE: "slide" + i, SLID: "slid" + i, KEYDOWN: "keydown" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i, TOUCHEND: "touchend" + i, LOAD_DATA_API: "load.bs.carousel.data-api", CLICK_DATA_API: "click.bs.carousel.data-api" },
        m = "carousel",
        g = "active",
        v = "slide",
        y = "carousel-item-right",
        b = "carousel-item-left",
        w = "carousel-item-next",
        _ = "carousel-item-prev",
        T = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
        C = function () {
      function o(t, n) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(T.INDICATORS)[0], this._addEventListeners();
      }var C = o.prototype;return C.next = function () {
        this._isSliding || this._slide(u);
      }, C.nextWhenVisible = function () {
        !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next();
      }, C.prev = function () {
        this._isSliding || this._slide(f);
      }, C.pause = function (t) {
        t || (this._isPaused = !0), e(this._element).find(T.NEXT_PREV)[0] && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }, C.cycle = function (e) {
        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }, C.to = function (t) {
        var n = this;this._activeElement = e(this._element).find(T.ACTIVE_ITEM)[0];var i = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) e(this._element).one(p.SLID, function () {
          return n.to(t);
        });else {
          if (i === t) return this.pause(), void this.cycle();var r = t > i ? u : f;this._slide(r, this._items[t]);
        }
      }, C.dispose = function () {
        e(this._element).off(i), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
      }, C._getConfig = function (e) {
        return e = s({}, l, e), a.typeCheckConfig(t, e, c), e;
      }, C._addEventListeners = function () {
        var t = this;this._config.keyboard && e(this._element).on(p.KEYDOWN, function (e) {
          return t._keydown(e);
        }), "hover" === this._config.pause && (e(this._element).on(p.MOUSEENTER, function (e) {
          return t.pause(e);
        }).on(p.MOUSELEAVE, function (e) {
          return t.cycle(e);
        }), "ontouchstart" in document.documentElement && e(this._element).on(p.TOUCHEND, function () {
          t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
            return t.cycle(e);
          }, 500 + t._config.interval);
        }));
      }, C._keydown = function (e) {
        if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {case 37:
            e.preventDefault(), this.prev();break;case 39:
            e.preventDefault(), this.next();}
      }, C._getItemIndex = function (t) {
        return this._items = e.makeArray(e(t).parent().find(T.ITEM)), this._items.indexOf(t);
      }, C._getItemByDirection = function (e, t) {
        var n = e === u,
            i = e === f,
            r = this._getItemIndex(t),
            o = this._items.length - 1;if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;var s = (r + (e === f ? -1 : 1)) % this._items.length;return -1 === s ? this._items[this._items.length - 1] : this._items[s];
      }, C._triggerSlideEvent = function (t, n) {
        var i = this._getItemIndex(t),
            r = this._getItemIndex(e(this._element).find(T.ACTIVE_ITEM)[0]),
            o = e.Event(p.SLIDE, { relatedTarget: t, direction: n, from: r, to: i });return e(this._element).trigger(o), o;
      }, C._setActiveIndicatorElement = function (t) {
        if (this._indicatorsElement) {
          e(this._indicatorsElement).find(T.ACTIVE).removeClass(g);var n = this._indicatorsElement.children[this._getItemIndex(t)];n && e(n).addClass(g);
        }
      }, C._slide = function (t, n) {
        var i,
            r,
            o,
            s = this,
            l = e(this._element).find(T.ACTIVE_ITEM)[0],
            c = this._getItemIndex(l),
            f = n || l && this._getItemByDirection(t, l),
            m = this._getItemIndex(f),
            C = Boolean(this._interval);if (t === u ? (i = b, r = w, o = d) : (i = y, r = _, o = h), f && e(f).hasClass(g)) this._isSliding = !1;else if (!this._triggerSlideEvent(f, o).isDefaultPrevented() && l && f) {
          this._isSliding = !0, C && this.pause(), this._setActiveIndicatorElement(f);var E = e.Event(p.SLID, { relatedTarget: f, direction: o, from: c, to: m });if (e(this._element).hasClass(v)) {
            e(f).addClass(r), a.reflow(f), e(l).addClass(i), e(f).addClass(i);var x = a.getTransitionDurationFromElement(l);e(l).one(a.TRANSITION_END, function () {
              e(f).removeClass(i + " " + r).addClass(g), e(l).removeClass(g + " " + r + " " + i), s._isSliding = !1, setTimeout(function () {
                return e(s._element).trigger(E);
              }, 0);
            }).emulateTransitionEnd(x);
          } else e(l).removeClass(g), e(f).addClass(g), this._isSliding = !1, e(this._element).trigger(E);C && this.cycle();
        }
      }, o._jQueryInterface = function (t) {
        return this.each(function () {
          var i = e(this).data(n),
              r = s({}, l, e(this).data());"object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (r = s({}, r, t));var a = "string" == typeof t ? t : r.slide;if (i || (i = new o(this, r), e(this).data(n, i)), "number" == typeof t) i.to(t);else if ("string" == typeof a) {
            if (void 0 === i[a]) throw new TypeError('No method named "' + a + '"');i[a]();
          } else r.interval && (i.pause(), i.cycle());
        });
      }, o._dataApiClickHandler = function (t) {
        var i = a.getSelectorFromElement(this);if (i) {
          var r = e(i)[0];if (r && e(r).hasClass(m)) {
            var l = s({}, e(r).data(), e(this).data()),
                c = this.getAttribute("data-slide-to");c && (l.interval = !1), o._jQueryInterface.call(e(r), l), c && e(r).data(n).to(c), t.preventDefault();
          }
        }
      }, r(o, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return l;
        } }]), o;
    }();return e(document).on(p.CLICK_DATA_API, T.DATA_SLIDE, C._dataApiClickHandler), e(window).on(p.LOAD_DATA_API, function () {
      e(T.DATA_RIDE).each(function () {
        var t = e(this);C._jQueryInterface.call(t, t.data());
      });
    }), e.fn[t] = C._jQueryInterface, e.fn[t].Constructor = C, e.fn[t].noConflict = function () {
      return e.fn[t] = o, C._jQueryInterface;
    }, C;
  }(t),
      f = function (e) {
    var t = "collapse",
        n = "bs.collapse",
        i = e.fn[t],
        o = { toggle: !0, parent: "" },
        l = { toggle: "boolean", parent: "(string|element)" },
        c = { SHOW: "show.bs.collapse", SHOWN: "shown.bs.collapse", HIDE: "hide.bs.collapse", HIDDEN: "hidden.bs.collapse", CLICK_DATA_API: "click.bs.collapse.data-api" },
        u = "show",
        f = "collapse",
        d = "collapsing",
        h = "collapsed",
        p = "width",
        m = "height",
        g = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
        v = function () {
      function i(t, n) {
        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));for (var i = e(g.DATA_TOGGLE), r = 0; r < i.length; r++) {
          var o = i[r],
              s = a.getSelectorFromElement(o);null !== s && e(s).filter(t).length > 0 && (this._selector = s, this._triggerArray.push(o));
        }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }var v = i.prototype;return v.toggle = function () {
        e(this._element).hasClass(u) ? this.hide() : this.show();
      }, v.show = function () {
        var t,
            r,
            o = this;if (!this._isTransitioning && !e(this._element).hasClass(u) && (this._parent && 0 === (t = e.makeArray(e(this._parent).find(g.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (r = e(t).not(this._selector).data(n)) && r._isTransitioning))) {
          var s = e.Event(c.SHOW);if (e(this._element).trigger(s), !s.isDefaultPrevented()) {
            t && (i._jQueryInterface.call(e(t).not(this._selector), "hide"), r || e(t).data(n, null));var l = this._getDimension();e(this._element).removeClass(f).addClass(d), this._element.style[l] = 0, this._triggerArray.length > 0 && e(this._triggerArray).removeClass(h).attr("aria-expanded", !0), this.setTransitioning(!0);var p = "scroll" + (l[0].toUpperCase() + l.slice(1)),
                m = a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END, function () {
              e(o._element).removeClass(d).addClass(f).addClass(u), o._element.style[l] = "", o.setTransitioning(!1), e(o._element).trigger(c.SHOWN);
            }).emulateTransitionEnd(m), this._element.style[l] = this._element[p] + "px";
          }
        }
      }, v.hide = function () {
        var t = this;if (!this._isTransitioning && e(this._element).hasClass(u)) {
          var n = e.Event(c.HIDE);if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
            var i = this._getDimension();if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", a.reflow(this._element), e(this._element).addClass(d).removeClass(f).removeClass(u), this._triggerArray.length > 0) for (var r = 0; r < this._triggerArray.length; r++) {
              var o = this._triggerArray[r],
                  s = a.getSelectorFromElement(o);if (null !== s) e(s).hasClass(u) || e(o).addClass(h).attr("aria-expanded", !1);
            }this.setTransitioning(!0);this._element.style[i] = "";var l = a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END, function () {
              t.setTransitioning(!1), e(t._element).removeClass(d).addClass(f).trigger(c.HIDDEN);
            }).emulateTransitionEnd(l);
          }
        }
      }, v.setTransitioning = function (e) {
        this._isTransitioning = e;
      }, v.dispose = function () {
        e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
      }, v._getConfig = function (e) {
        return (e = s({}, o, e)).toggle = Boolean(e.toggle), a.typeCheckConfig(t, e, l), e;
      }, v._getDimension = function () {
        return e(this._element).hasClass(p) ? p : m;
      }, v._getParent = function () {
        var t = this,
            n = null;a.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0];var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';return e(n).find(r).each(function (e, n) {
          t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n]);
        }), n;
      }, v._addAriaAndCollapsedClass = function (t, n) {
        if (t) {
          var i = e(t).hasClass(u);n.length > 0 && e(n).toggleClass(h, !i).attr("aria-expanded", i);
        }
      }, i._getTargetFromElement = function (t) {
        var n = a.getSelectorFromElement(t);return n ? e(n)[0] : null;
      }, i._jQueryInterface = function (t) {
        return this.each(function () {
          var r = e(this),
              a = r.data(n),
              l = s({}, o, r.data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t);if (!a && l.toggle && /show|hide/.test(t) && (l.toggle = !1), a || (a = new i(this, l), r.data(n, a)), "string" == typeof t) {
            if (void 0 === a[t]) throw new TypeError('No method named "' + t + '"');a[t]();
          }
        });
      }, r(i, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return o;
        } }]), i;
    }();return e(document).on(c.CLICK_DATA_API, g.DATA_TOGGLE, function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();var i = e(this),
          r = a.getSelectorFromElement(this);e(r).each(function () {
        var t = e(this),
            r = t.data(n) ? "toggle" : i.data();v._jQueryInterface.call(t, r);
      });
    }), e.fn[t] = v._jQueryInterface, e.fn[t].Constructor = v, e.fn[t].noConflict = function () {
      return e.fn[t] = i, v._jQueryInterface;
    }, v;
  }(t),
      d = function (e) {
    var t = "dropdown",
        i = "bs.dropdown",
        o = "." + i,
        l = e.fn[t],
        c = new RegExp("38|40|27"),
        u = { HIDE: "hide" + o, HIDDEN: "hidden" + o, SHOW: "show" + o, SHOWN: "shown" + o, CLICK: "click" + o, CLICK_DATA_API: "click.bs.dropdown.data-api", KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api", KEYUP_DATA_API: "keyup.bs.dropdown.data-api" },
        f = "disabled",
        d = "show",
        h = "dropup",
        p = "dropright",
        m = "dropleft",
        g = "dropdown-menu-right",
        v = "position-static",
        y = '[data-toggle="dropdown"]',
        b = ".dropdown form",
        w = ".dropdown-menu",
        _ = ".navbar-nav",
        T = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        C = "top-start",
        E = "top-end",
        x = "bottom-start",
        S = "bottom-end",
        D = "right-start",
        A = "left-start",
        k = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
        I = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
        O = function () {
      function l(e, t) {
        this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
      }var b = l.prototype;return b.toggle = function () {
        if (!this._element.disabled && !e(this._element).hasClass(f)) {
          var t = l._getParentFromElement(this._element),
              i = e(this._menu).hasClass(d);if (l._clearMenus(), !i) {
            var r = { relatedTarget: this._element },
                o = e.Event(u.SHOW, r);if (e(t).trigger(o), !o.isDefaultPrevented()) {
              if (!this._inNavbar) {
                if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var s = this._element;"parent" === this._config.reference ? s = t : a.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(t).addClass(v), this._popper = new n(s, this._menu, this._getPopperConfig());
              }"ontouchstart" in document.documentElement && 0 === e(t).closest(_).length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(d), e(t).toggleClass(d).trigger(e.Event(u.SHOWN, r));
            }
          }
        }
      }, b.dispose = function () {
        e.removeData(this._element, i), e(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
      }, b.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
      }, b._addEventListeners = function () {
        var t = this;e(this._element).on(u.CLICK, function (e) {
          e.preventDefault(), e.stopPropagation(), t.toggle();
        });
      }, b._getConfig = function (n) {
        return n = s({}, this.constructor.Default, e(this._element).data(), n), a.typeCheckConfig(t, n, this.constructor.DefaultType), n;
      }, b._getMenuElement = function () {
        if (!this._menu) {
          var t = l._getParentFromElement(this._element);this._menu = e(t).find(w)[0];
        }return this._menu;
      }, b._getPlacement = function () {
        var t = e(this._element).parent(),
            n = x;return t.hasClass(h) ? (n = C, e(this._menu).hasClass(g) && (n = E)) : t.hasClass(p) ? n = D : t.hasClass(m) ? n = A : e(this._menu).hasClass(g) && (n = S), n;
      }, b._detectNavbar = function () {
        return e(this._element).closest(".navbar").length > 0;
      }, b._getPopperConfig = function () {
        var e = this,
            t = {};"function" == typeof this._config.offset ? t.fn = function (t) {
          return t.offsets = s({}, t.offsets, e._config.offset(t.offsets) || {}), t;
        } : t.offset = this._config.offset;var n = { placement: this._getPlacement(), modifiers: { offset: t, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n;
      }, l._jQueryInterface = function (t) {
        return this.each(function () {
          var n = e(this).data(i);if (n || (n = new l(this, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : null), e(this).data(i, n)), "string" == typeof t) {
            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');n[t]();
          }
        });
      }, l._clearMenus = function (t) {
        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var n = e.makeArray(e(y)), r = 0; r < n.length; r++) {
          var o = l._getParentFromElement(n[r]),
              s = e(n[r]).data(i),
              a = { relatedTarget: n[r] };if (s) {
            var c = s._menu;if (e(o).hasClass(d) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(o, t.target))) {
              var f = e.Event(u.HIDE, a);e(o).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), n[r].setAttribute("aria-expanded", "false"), e(c).removeClass(d), e(o).removeClass(d).trigger(e.Event(u.HIDDEN, a)));
            }
          }
        }
      }, l._getParentFromElement = function (t) {
        var n,
            i = a.getSelectorFromElement(t);return i && (n = e(i)[0]), n || t.parentNode;
      }, l._dataApiKeydownHandler = function (t) {
        if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(w).length)) : c.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(f))) {
          var n = l._getParentFromElement(this),
              i = e(n).hasClass(d);if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
            var r = e(n).find(T).get();if (0 !== r.length) {
              var o = r.indexOf(t.target);38 === t.which && o > 0 && o--, 40 === t.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus();
            }
          } else {
            if (27 === t.which) {
              var s = e(n).find(y)[0];e(s).trigger("focus");
            }e(this).trigger("click");
          }
        }
      }, r(l, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return k;
        } }, { key: "DefaultType", get: function get() {
          return I;
        } }]), l;
    }();return e(document).on(u.KEYDOWN_DATA_API, y, O._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API, w, O._dataApiKeydownHandler).on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, O._clearMenus).on(u.CLICK_DATA_API, y, function (t) {
      t.preventDefault(), t.stopPropagation(), O._jQueryInterface.call(e(this), "toggle");
    }).on(u.CLICK_DATA_API, b, function (e) {
      e.stopPropagation();
    }), e.fn[t] = O._jQueryInterface, e.fn[t].Constructor = O, e.fn[t].noConflict = function () {
      return e.fn[t] = l, O._jQueryInterface;
    }, O;
  }(t),
      h = function (e) {
    var t = "modal",
        n = ".bs.modal",
        i = e.fn.modal,
        o = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        l = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        c = { HIDE: "hide.bs.modal", HIDDEN: "hidden.bs.modal", SHOW: "show.bs.modal", SHOWN: "shown.bs.modal", FOCUSIN: "focusin.bs.modal", RESIZE: "resize.bs.modal", CLICK_DISMISS: "click.dismiss.bs.modal", KEYDOWN_DISMISS: "keydown.dismiss.bs.modal", MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal", MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal", CLICK_DATA_API: "click.bs.modal.data-api" },
        u = "modal-scrollbar-measure",
        f = "modal-backdrop",
        d = "modal-open",
        h = "fade",
        p = "show",
        m = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" },
        g = function () {
      function i(t, n) {
        this._config = this._getConfig(n), this._element = t, this._dialog = e(t).find(m.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
      }var g = i.prototype;return g.toggle = function (e) {
        return this._isShown ? this.hide() : this.show(e);
      }, g.show = function (t) {
        var n = this;if (!this._isTransitioning && !this._isShown) {
          e(this._element).hasClass(h) && (this._isTransitioning = !0);var i = e.Event(c.SHOW, { relatedTarget: t });e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(d), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(c.CLICK_DISMISS, m.DATA_DISMISS, function (e) {
            return n.hide(e);
          }), e(this._dialog).on(c.MOUSEDOWN_DISMISS, function () {
            e(n._element).one(c.MOUSEUP_DISMISS, function (t) {
              e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
            });
          }), this._showBackdrop(function () {
            return n._showElement(t);
          }));
        }
      }, g.hide = function (t) {
        var n = this;if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
          var i = e.Event(c.HIDE);if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
            this._isShown = !1;var r = e(this._element).hasClass(h);if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(c.FOCUSIN), e(this._element).removeClass(p), e(this._element).off(c.CLICK_DISMISS), e(this._dialog).off(c.MOUSEDOWN_DISMISS), r) {
              var o = a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END, function (e) {
                return n._hideModal(e);
              }).emulateTransitionEnd(o);
            } else this._hideModal();
          }
        }
      }, g.dispose = function () {
        e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
      }, g.handleUpdate = function () {
        this._adjustDialog();
      }, g._getConfig = function (e) {
        return e = s({}, o, e), a.typeCheckConfig(t, e, l), e;
      }, g._showElement = function (t) {
        var n = this,
            i = e(this._element).hasClass(h);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && a.reflow(this._element), e(this._element).addClass(p), this._config.focus && this._enforceFocus();var r = e.Event(c.SHOWN, { relatedTarget: t }),
            o = function o() {
          n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(r);
        };if (i) {
          var s = a.getTransitionDurationFromElement(this._element);e(this._dialog).one(a.TRANSITION_END, o).emulateTransitionEnd(s);
        } else o();
      }, g._enforceFocus = function () {
        var t = this;e(document).off(c.FOCUSIN).on(c.FOCUSIN, function (n) {
          document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus();
        });
      }, g._setEscapeEvent = function () {
        var t = this;this._isShown && this._config.keyboard ? e(this._element).on(c.KEYDOWN_DISMISS, function (e) {
          27 === e.which && (e.preventDefault(), t.hide());
        }) : this._isShown || e(this._element).off(c.KEYDOWN_DISMISS);
      }, g._setResizeEvent = function () {
        var t = this;this._isShown ? e(window).on(c.RESIZE, function (e) {
          return t.handleUpdate(e);
        }) : e(window).off(c.RESIZE);
      }, g._hideModal = function () {
        var t = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
          e(document.body).removeClass(d), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(c.HIDDEN);
        });
      }, g._removeBackdrop = function () {
        this._backdrop && (e(this._backdrop).remove(), this._backdrop = null);
      }, g._showBackdrop = function (t) {
        var n = this,
            i = e(this._element).hasClass(h) ? h : "";if (this._isShown && this._config.backdrop) {
          if (this._backdrop = document.createElement("div"), this._backdrop.className = f, i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(c.CLICK_DISMISS, function (e) {
            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
          }), i && a.reflow(this._backdrop), e(this._backdrop).addClass(p), !t) return;if (!i) return void t();var r = a.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(r);
        } else if (!this._isShown && this._backdrop) {
          e(this._backdrop).removeClass(p);var o = function o() {
            n._removeBackdrop(), t && t();
          };if (e(this._element).hasClass(h)) {
            var s = a.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(a.TRANSITION_END, o).emulateTransitionEnd(s);
          } else o();
        } else t && t();
      }, g._adjustDialog = function () {
        var e = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }, g._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }, g._checkScrollbar = function () {
        var e = document.body.getBoundingClientRect();this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
      }, g._setScrollbar = function () {
        var t = this;if (this._isBodyOverflowing) {
          e(m.FIXED_CONTENT).each(function (n, i) {
            var r = e(i)[0].style.paddingRight,
                o = e(i).css("padding-right");e(i).data("padding-right", r).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px");
          }), e(m.STICKY_CONTENT).each(function (n, i) {
            var r = e(i)[0].style.marginRight,
                o = e(i).css("margin-right");e(i).data("margin-right", r).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px");
          }), e(m.NAVBAR_TOGGLER).each(function (n, i) {
            var r = e(i)[0].style.marginRight,
                o = e(i).css("margin-right");e(i).data("margin-right", r).css("margin-right", parseFloat(o) + t._scrollbarWidth + "px");
          });var n = document.body.style.paddingRight,
              i = e(document.body).css("padding-right");e(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
        }
      }, g._resetScrollbar = function () {
        e(m.FIXED_CONTENT).each(function (t, n) {
          var i = e(n).data("padding-right");void 0 !== i && e(n).css("padding-right", i).removeData("padding-right");
        }), e(m.STICKY_CONTENT + ", " + m.NAVBAR_TOGGLER).each(function (t, n) {
          var i = e(n).data("margin-right");void 0 !== i && e(n).css("margin-right", i).removeData("margin-right");
        });var t = e(document.body).data("padding-right");void 0 !== t && e(document.body).css("padding-right", t).removeData("padding-right");
      }, g._getScrollbarWidth = function () {
        var e = document.createElement("div");e.className = u, document.body.appendChild(e);var t = e.getBoundingClientRect().width - e.clientWidth;return document.body.removeChild(e), t;
      }, i._jQueryInterface = function (t, n) {
        return this.each(function () {
          var r = e(this).data("bs.modal"),
              o = s({}, i.Default, e(this).data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t);if (r || (r = new i(this, o), e(this).data("bs.modal", r)), "string" == typeof t) {
            if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');r[t](n);
          } else o.show && r.show(n);
        });
      }, r(i, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return o;
        } }]), i;
    }();return e(document).on(c.CLICK_DATA_API, m.DATA_TOGGLE, function (t) {
      var n,
          i = this,
          r = a.getSelectorFromElement(this);r && (n = e(r)[0]);var o = e(n).data("bs.modal") ? "toggle" : s({}, e(n).data(), e(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var l = e(n).one(c.SHOW, function (t) {
        t.isDefaultPrevented() || l.one(c.HIDDEN, function () {
          e(i).is(":visible") && i.focus();
        });
      });g._jQueryInterface.call(e(n), o, this);
    }), e.fn.modal = g._jQueryInterface, e.fn.modal.Constructor = g, e.fn.modal.noConflict = function () {
      return e.fn.modal = i, g._jQueryInterface;
    }, g;
  }(t),
      p = function (e) {
    var t = "tooltip",
        i = ".bs.tooltip",
        o = e.fn[t],
        l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        c = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" },
        u = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        f = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" },
        d = "show",
        h = "out",
        p = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, INSERTED: "inserted" + i, CLICK: "click" + i, FOCUSIN: "focusin" + i, FOCUSOUT: "focusout" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i },
        m = "fade",
        g = "show",
        v = ".tooltip-inner",
        y = ".arrow",
        b = "hover",
        w = "focus",
        _ = "click",
        T = "manual",
        C = function () {
      function o(e, t) {
        if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
      }var C = o.prototype;return C.enable = function () {
        this._isEnabled = !0;
      }, C.disable = function () {
        this._isEnabled = !1;
      }, C.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, C.toggle = function (t) {
        if (this._isEnabled) if (t) {
          var n = this.constructor.DATA_KEY,
              i = e(t.currentTarget).data(n);i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
        } else {
          if (e(this.getTipElement()).hasClass(g)) return void this._leave(null, this);this._enter(null, this);
        }
      }, C.dispose = function () {
        clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
      }, C.show = function () {
        var t = this;if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");var i = e.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
          e(this.element).trigger(i);var r = e.contains(this.element.ownerDocument.documentElement, this.element);if (i.isDefaultPrevented() || !r) return;var o = this.getTipElement(),
              s = a.getUID(this.constructor.NAME);o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && e(o).addClass(m);var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
              c = this._getAttachment(l);this.addAttachmentClass(c);var u = !1 === this.config.container ? document.body : e(this.config.container);e(o).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(u), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, o, { placement: c, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: y }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(e) {
              e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
            }, onUpdate: function onUpdate(e) {
              t._handlePopperPlacementChange(e);
            } }), e(o).addClass(g), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);var f = function f() {
            t.config.animation && t._fixTransition();var n = t._hoverState;t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === h && t._leave(null, t);
          };if (e(this.tip).hasClass(m)) {
            var d = a.getTransitionDurationFromElement(this.tip);e(this.tip).one(a.TRANSITION_END, f).emulateTransitionEnd(d);
          } else f();
        }
      }, C.hide = function (t) {
        var n = this,
            i = this.getTipElement(),
            r = e.Event(this.constructor.Event.HIDE),
            o = function o() {
          n._hoverState !== d && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t();
        };if (e(this.element).trigger(r), !r.isDefaultPrevented()) {
          if (e(i).removeClass(g), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger[_] = !1, this._activeTrigger[w] = !1, this._activeTrigger[b] = !1, e(this.tip).hasClass(m)) {
            var s = a.getTransitionDurationFromElement(i);e(i).one(a.TRANSITION_END, o).emulateTransitionEnd(s);
          } else o();this._hoverState = "";
        }
      }, C.update = function () {
        null !== this._popper && this._popper.scheduleUpdate();
      }, C.isWithContent = function () {
        return Boolean(this.getTitle());
      }, C.addAttachmentClass = function (t) {
        e(this.getTipElement()).addClass("bs-tooltip-" + t);
      }, C.getTipElement = function () {
        return this.tip = this.tip || e(this.config.template)[0], this.tip;
      }, C.setContent = function () {
        var t = e(this.getTipElement());this.setElementContent(t.find(v), this.getTitle()), t.removeClass(m + " " + g);
      }, C.setElementContent = function (t, n) {
        var i = this.config.html;"object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n);
      }, C.getTitle = function () {
        var e = this.element.getAttribute("data-original-title");return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
      }, C._getAttachment = function (e) {
        return u[e.toUpperCase()];
      }, C._setListeners = function () {
        var t = this;this.config.trigger.split(" ").forEach(function (n) {
          if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
            return t.toggle(e);
          });else if (n !== T) {
            var i = n === b ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                r = n === b ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;e(t.element).on(i, t.config.selector, function (e) {
              return t._enter(e);
            }).on(r, t.config.selector, function (e) {
              return t._leave(e);
            });
          }e(t.element).closest(".modal").on("hide.bs.modal", function () {
            return t.hide();
          });
        }), this.config.selector ? this.config = s({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
      }, C._fixTitle = function () {
        var e = _typeof(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
      }, C._enter = function (t, n) {
        var i = this.constructor.DATA_KEY;(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? w : b] = !0), e(n.getTipElement()).hasClass(g) || n._hoverState === d ? n._hoverState = d : (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
          n._hoverState === d && n.show();
        }, n.config.delay.show) : n.show());
      }, C._leave = function (t, n) {
        var i = this.constructor.DATA_KEY;(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? w : b] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = h, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
          n._hoverState === h && n.hide();
        }, n.config.delay.hide) : n.hide());
      }, C._isWithActiveTrigger = function () {
        for (var e in this._activeTrigger) {
          if (this._activeTrigger[e]) return !0;
        }return !1;
      }, C._getConfig = function (n) {
        return "number" == typeof (n = s({}, this.constructor.Default, e(this.element).data(), n)).delay && (n.delay = { show: n.delay, hide: n.delay }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), a.typeCheckConfig(t, n, this.constructor.DefaultType), n;
      }, C._getDelegateConfig = function () {
        var e = {};if (this.config) for (var t in this.config) {
          this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
        }return e;
      }, C._cleanTipClass = function () {
        var t = e(this.getTipElement()),
            n = t.attr("class").match(l);null !== n && n.length > 0 && t.removeClass(n.join(""));
      }, C._handlePopperPlacementChange = function (e) {
        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
      }, C._fixTransition = function () {
        var t = this.getTipElement(),
            n = this.config.animation;null === t.getAttribute("x-placement") && (e(t).removeClass(m), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
      }, o._jQueryInterface = function (t) {
        return this.each(function () {
          var n = e(this).data("bs.tooltip"),
              i = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t;if ((n || !/dispose|hide/.test(t)) && (n || (n = new o(this, i), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');n[t]();
          }
        });
      }, r(o, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return f;
        } }, { key: "NAME", get: function get() {
          return t;
        } }, { key: "DATA_KEY", get: function get() {
          return "bs.tooltip";
        } }, { key: "Event", get: function get() {
          return p;
        } }, { key: "EVENT_KEY", get: function get() {
          return i;
        } }, { key: "DefaultType", get: function get() {
          return c;
        } }]), o;
    }();return e.fn[t] = C._jQueryInterface, e.fn[t].Constructor = C, e.fn[t].noConflict = function () {
      return e.fn[t] = o, C._jQueryInterface;
    }, C;
  }(t),
      m = function (e) {
    var t = "popover",
        n = ".bs.popover",
        i = e.fn[t],
        o = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        a = s({}, p.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        l = s({}, p.DefaultType, { content: "(string|element|function)" }),
        c = "fade",
        u = "show",
        f = ".popover-header",
        d = ".popover-body",
        h = { HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, INSERTED: "inserted" + n, CLICK: "click" + n, FOCUSIN: "focusin" + n, FOCUSOUT: "focusout" + n, MOUSEENTER: "mouseenter" + n, MOUSELEAVE: "mouseleave" + n },
        m = function (i) {
      var s, p;function m() {
        return i.apply(this, arguments) || this;
      }p = i, (s = m).prototype = Object.create(p.prototype), s.prototype.constructor = s, s.__proto__ = p;var g = m.prototype;return g.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }, g.addAttachmentClass = function (t) {
        e(this.getTipElement()).addClass("bs-popover-" + t);
      }, g.getTipElement = function () {
        return this.tip = this.tip || e(this.config.template)[0], this.tip;
      }, g.setContent = function () {
        var t = e(this.getTipElement());this.setElementContent(t.find(f), this.getTitle());var n = this._getContent();"function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(d), n), t.removeClass(c + " " + u);
      }, g._getContent = function () {
        return this.element.getAttribute("data-content") || this.config.content;
      }, g._cleanTipClass = function () {
        var t = e(this.getTipElement()),
            n = t.attr("class").match(o);null !== n && n.length > 0 && t.removeClass(n.join(""));
      }, m._jQueryInterface = function (t) {
        return this.each(function () {
          var n = e(this).data("bs.popover"),
              i = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : null;if ((n || !/destroy|hide/.test(t)) && (n || (n = new m(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');n[t]();
          }
        });
      }, r(m, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return a;
        } }, { key: "NAME", get: function get() {
          return t;
        } }, { key: "DATA_KEY", get: function get() {
          return "bs.popover";
        } }, { key: "Event", get: function get() {
          return h;
        } }, { key: "EVENT_KEY", get: function get() {
          return n;
        } }, { key: "DefaultType", get: function get() {
          return l;
        } }]), m;
    }(p);return e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function () {
      return e.fn[t] = i, m._jQueryInterface;
    }, m;
  }(t),
      g = function (e) {
    var t = "scrollspy",
        n = e.fn[t],
        i = { offset: 10, method: "auto", target: "" },
        o = { offset: "number", method: "string", target: "(string|element)" },
        l = { ACTIVATE: "activate.bs.scrollspy", SCROLL: "scroll.bs.scrollspy", LOAD_DATA_API: "load.bs.scrollspy.data-api" },
        c = "dropdown-item",
        u = "active",
        f = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
        d = "offset",
        h = "position",
        p = function () {
      function n(t, n) {
        var i = this;this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(l.SCROLL, function (e) {
          return i._process(e);
        }), this.refresh(), this._process();
      }var p = n.prototype;return p.refresh = function () {
        var t = this,
            n = this._scrollElement === this._scrollElement.window ? d : h,
            i = "auto" === this._config.method ? n : this._config.method,
            r = i === h ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function (t) {
          var n,
              o = a.getSelectorFromElement(t);if (o && (n = e(o)[0]), n) {
            var s = n.getBoundingClientRect();if (s.width || s.height) return [e(n)[i]().top + r, o];
          }return null;
        }).filter(function (e) {
          return e;
        }).sort(function (e, t) {
          return e[0] - t[0];
        }).forEach(function (e) {
          t._offsets.push(e[0]), t._targets.push(e[1]);
        });
      }, p.dispose = function () {
        e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }, p._getConfig = function (n) {
        if ("string" != typeof (n = s({}, i, n)).target) {
          var r = e(n.target).attr("id");r || (r = a.getUID(t), e(n.target).attr("id", r)), n.target = "#" + r;
        }return a.typeCheckConfig(t, n, o), n;
      }, p._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }, p._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }, p._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }, p._process = function () {
        var e = this._getScrollTop() + this._config.offset,
            t = this._getScrollHeight(),
            n = this._config.offset + t - this._getOffsetHeight();if (this._scrollHeight !== t && this.refresh(), e >= n) {
          var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
        } else {
          if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var r = this._offsets.length; r--;) {
            this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r]);
          }
        }
      }, p._activate = function (t) {
        this._activeTarget = t, this._clear();var n = this._selector.split(",");n = n.map(function (e) {
          return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
        });var i = e(n.join(","));i.hasClass(c) ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)), e(this._scrollElement).trigger(l.ACTIVATE, { relatedTarget: t });
      }, p._clear = function () {
        e(this._selector).filter(f.ACTIVE).removeClass(u);
      }, n._jQueryInterface = function (t) {
        return this.each(function () {
          var i = e(this).data("bs.scrollspy");if (i || (i = new n(this, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), e(this).data("bs.scrollspy", i)), "string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');i[t]();
          }
        });
      }, r(n, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }, { key: "Default", get: function get() {
          return i;
        } }]), n;
    }();return e(window).on(l.LOAD_DATA_API, function () {
      for (var t = e.makeArray(e(f.DATA_SPY)), n = t.length; n--;) {
        var i = e(t[n]);p._jQueryInterface.call(i, i.data());
      }
    }), e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function () {
      return e.fn[t] = n, p._jQueryInterface;
    }, p;
  }(t),
      v = function (e) {
    var t = e.fn.tab,
        n = { HIDE: "hide.bs.tab", HIDDEN: "hidden.bs.tab", SHOW: "show.bs.tab", SHOWN: "shown.bs.tab", CLICK_DATA_API: "click.bs.tab.data-api" },
        i = "dropdown-menu",
        o = "active",
        s = "disabled",
        l = "fade",
        c = "show",
        u = ".dropdown",
        f = ".nav, .list-group",
        d = ".active",
        h = "> li > .active",
        p = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        m = ".dropdown-toggle",
        g = "> .dropdown-menu .active",
        v = function () {
      function t(e) {
        this._element = e;
      }var p = t.prototype;return p.show = function () {
        var t = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(o) || e(this._element).hasClass(s))) {
          var i,
              r,
              l = e(this._element).closest(f)[0],
              c = a.getSelectorFromElement(this._element);if (l) {
            var u = "UL" === l.nodeName ? h : d;r = (r = e.makeArray(e(l).find(u)))[r.length - 1];
          }var p = e.Event(n.HIDE, { relatedTarget: this._element }),
              m = e.Event(n.SHOW, { relatedTarget: r });if (r && e(r).trigger(p), e(this._element).trigger(m), !m.isDefaultPrevented() && !p.isDefaultPrevented()) {
            c && (i = e(c)[0]), this._activate(this._element, l);var g = function g() {
              var i = e.Event(n.HIDDEN, { relatedTarget: t._element }),
                  o = e.Event(n.SHOWN, { relatedTarget: r });e(r).trigger(i), e(t._element).trigger(o);
            };i ? this._activate(i, i.parentNode, g) : g();
          }
        }
      }, p.dispose = function () {
        e.removeData(this._element, "bs.tab"), this._element = null;
      }, p._activate = function (t, n, i) {
        var r = this,
            o = ("UL" === n.nodeName ? e(n).find(h) : e(n).children(d))[0],
            s = i && o && e(o).hasClass(l),
            c = function c() {
          return r._transitionComplete(t, o, i);
        };if (o && s) {
          var u = a.getTransitionDurationFromElement(o);e(o).one(a.TRANSITION_END, c).emulateTransitionEnd(u);
        } else c();
      }, p._transitionComplete = function (t, n, r) {
        if (n) {
          e(n).removeClass(c + " " + o);var s = e(n.parentNode).find(g)[0];s && e(s).removeClass(o), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
        }if (e(t).addClass(o), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), a.reflow(t), e(t).addClass(c), t.parentNode && e(t.parentNode).hasClass(i)) {
          var l = e(t).closest(u)[0];l && e(l).find(m).addClass(o), t.setAttribute("aria-expanded", !0);
        }r && r();
      }, t._jQueryInterface = function (n) {
        return this.each(function () {
          var i = e(this),
              r = i.data("bs.tab");if (r || (r = new t(this), i.data("bs.tab", r)), "string" == typeof n) {
            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');r[n]();
          }
        });
      }, r(t, null, [{ key: "VERSION", get: function get() {
          return "4.1.0";
        } }]), t;
    }();return e(document).on(n.CLICK_DATA_API, p, function (t) {
      t.preventDefault(), v._jQueryInterface.call(e(this), "show");
    }), e.fn.tab = v._jQueryInterface, e.fn.tab.Constructor = v, e.fn.tab.noConflict = function () {
      return e.fn.tab = t, v._jQueryInterface;
    }, v;
  }(t);!function (e) {
    if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t = e.fn.jquery.split(" ")[0].split(".");if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(t), e.Util = a, e.Alert = l, e.Button = c, e.Carousel = u, e.Collapse = f, e.Dropdown = d, e.Modal = h, e.Popover = m, e.Scrollspy = g, e.Tab = v, e.Tooltip = p, Object.defineProperty(e, "__esModule", { value: !0 });
}), function (e) {
  "use strict";
  function t(t) {
    return t.is('[type="checkbox"]') ? t.prop("checked") : t.is('[type="radio"]') ? !!e('[name="' + t.attr("name") + '"]:checked').length : t.is("select[multiple]") ? (t.val() || []).length : t.val();
  }var n = function n(i, r) {
    this.options = r, this.validators = e.extend({}, n.VALIDATORS, r.custom), this.$element = e(i), this.$btn = e('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]')), this.update(), this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", e.proxy(this.onInput, this)), this.$element.on("submit.bs.validator", e.proxy(this.onSubmit, this)), this.$element.on("reset.bs.validator", e.proxy(this.reset, this)), this.$element.find("[data-match]").each(function () {
      var n = e(this),
          i = n.attr("data-match");e(i).on("input.bs.validator", function (e) {
        t(n) && n.trigger("input.bs.validator");
      });
    }), this.$inputs.filter(function () {
      return t(e(this)) && !e(this).closest(".has-error").length;
    }).trigger("focusout"), this.$element.attr("novalidate", !0);
  };function i(t) {
    return this.each(function () {
      var i = e(this),
          r = e.extend({}, n.DEFAULTS, i.data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t),
          o = i.data("bs.validator");(o || "destroy" != t) && (o || i.data("bs.validator", o = new n(this, r)), "string" == typeof t && o[t]());
    });
  }n.VERSION = "0.11.9", n.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button)', n.FOCUS_OFFSET = 20, n.DEFAULTS = { delay: 500, html: !1, disable: !0, focus: !0, custom: {}, errors: { match: "Does not match", minlength: "Not long enough" }, feedback: { success: "glyphicon-ok", error: "glyphicon-remove" } }, n.VALIDATORS = { native: function native(e) {
      var t = e[0];if (t.checkValidity) return !t.checkValidity() && !t.validity.valid && (t.validationMessage || "error!");
    }, match: function match(t) {
      var i = t.attr("data-match");return t.val() !== e(i).val() && n.DEFAULTS.errors.match;
    }, minlength: function minlength(e) {
      var t = e.attr("data-minlength");return e.val().length < t && n.DEFAULTS.errors.minlength;
    } }, n.prototype.update = function () {
    var t = this;return this.$inputs = this.$element.find(n.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]').each(function () {
      t.clearErrors(e(this));
    })), this.toggleSubmit(), this;
  }, n.prototype.onInput = function (t) {
    var n = this,
        i = e(t.target),
        r = "focusout" !== t.type;this.$inputs.is(i) && this.validateInput(i, r).done(function () {
      n.toggleSubmit();
    });
  }, n.prototype.validateInput = function (n, i) {
    t(n);var r = n.data("bs.validator.errors");n.is('[type="radio"]') && (n = this.$element.find('input[name="' + n.attr("name") + '"]'));var o = e.Event("validate.bs.validator", { relatedTarget: n[0] });if (this.$element.trigger(o), !o.isDefaultPrevented()) {
      var s = this;return this.runValidators(n).done(function (t) {
        n.data("bs.validator.errors", t), t.length ? i ? s.defer(n, s.showErrors) : s.showErrors(n) : s.clearErrors(n), r && t.toString() === r.toString() || (o = t.length ? e.Event("invalid.bs.validator", { relatedTarget: n[0], detail: t }) : e.Event("valid.bs.validator", { relatedTarget: n[0], detail: r }), s.$element.trigger(o)), s.toggleSubmit(), s.$element.trigger(e.Event("validated.bs.validator", { relatedTarget: n[0] }));
      });
    }
  }, n.prototype.runValidators = function (n) {
    var i = [],
        r = e.Deferred();function o(e) {
      return function (e) {
        return n.attr("data-" + e + "-error");
      }(e) || ((t = n[0].validity).typeMismatch ? n.attr("data-type-error") : t.patternMismatch ? n.attr("data-pattern-error") : t.stepMismatch ? n.attr("data-step-error") : t.rangeOverflow ? n.attr("data-max-error") : t.rangeUnderflow ? n.attr("data-min-error") : t.valueMissing ? n.attr("data-required-error") : null) || n.attr("data-error");var t;
    }return n.data("bs.validator.deferred") && n.data("bs.validator.deferred").reject(), n.data("bs.validator.deferred", r), e.each(this.validators, e.proxy(function (e, r) {
      var s = null;!t(n) && !n.attr("required") || void 0 === n.attr("data-" + e) && "native" != e || !(s = r.call(this, n)) || (s = o(e) || s, !~i.indexOf(s) && i.push(s));
    }, this)), !i.length && t(n) && n.attr("data-remote") ? this.defer(n, function () {
      var s = {};s[n.attr("name")] = t(n), e.get(n.attr("data-remote"), s).fail(function (e, t, n) {
        i.push(o("remote") || n);
      }).always(function () {
        r.resolve(i);
      });
    }) : r.resolve(i), r.promise();
  }, n.prototype.validate = function () {
    var t = this;return e.when(this.$inputs.map(function (n) {
      return t.validateInput(e(this), !1);
    })).then(function () {
      t.toggleSubmit(), t.focusError();
    }), this;
  }, n.prototype.focusError = function () {
    if (this.options.focus) {
      var t = this.$element.find(".has-error:first :input");0 !== t.length && (e("html, body").animate({ scrollTop: t.offset().top - n.FOCUS_OFFSET }, 250), t.focus());
    }
  }, n.prototype.showErrors = function (t) {
    var n = this.options.html ? "html" : "text",
        i = t.data("bs.validator.errors"),
        r = t.closest(".form-group"),
        o = r.find(".help-block.with-errors"),
        s = r.find(".form-control-feedback");i.length && (i = e("<ul/>").addClass("list-unstyled").append(e.map(i, function (t) {
      return e("<li/>")[n](t);
    })), void 0 === o.data("bs.validator.originalContent") && o.data("bs.validator.originalContent", o.html()), o.empty().append(i), r.addClass("has-error has-danger"), r.hasClass("has-feedback") && s.removeClass(this.options.feedback.success) && s.addClass(this.options.feedback.error) && r.removeClass("has-success"));
  }, n.prototype.clearErrors = function (e) {
    var n = e.closest(".form-group"),
        i = n.find(".help-block.with-errors"),
        r = n.find(".form-control-feedback");i.html(i.data("bs.validator.originalContent")), n.removeClass("has-error has-danger has-success"), n.hasClass("has-feedback") && r.removeClass(this.options.feedback.error) && r.removeClass(this.options.feedback.success) && t(e) && r.addClass(this.options.feedback.success) && n.addClass("has-success");
  }, n.prototype.hasErrors = function () {
    return !!this.$inputs.filter(function () {
      return !!(e(this).data("bs.validator.errors") || []).length;
    }).length;
  }, n.prototype.isIncomplete = function () {
    return !!this.$inputs.filter("[required]").filter(function () {
      var n = t(e(this));return !("string" == typeof n ? e.trim(n) : n);
    }).length;
  }, n.prototype.onSubmit = function (e) {
    this.validate(), (this.isIncomplete() || this.hasErrors()) && e.preventDefault();
  }, n.prototype.toggleSubmit = function () {
    this.options.disable && this.$btn.toggleClass("disabled", this.isIncomplete() || this.hasErrors());
  }, n.prototype.defer = function (t, n) {
    if (n = e.proxy(n, this, t), !this.options.delay) return n();window.clearTimeout(t.data("bs.validator.timeout")), t.data("bs.validator.timeout", window.setTimeout(n, this.options.delay));
  }, n.prototype.reset = function () {
    return this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success), this.$inputs.removeData(["bs.validator.errors", "bs.validator.deferred"]).each(function () {
      var t = e(this),
          n = t.data("bs.validator.timeout");window.clearTimeout(n) && t.removeData("bs.validator.timeout");
    }), this.$element.find(".help-block.with-errors").each(function () {
      var t = e(this),
          n = t.data("bs.validator.originalContent");t.removeData("bs.validator.originalContent").html(n);
    }), this.$btn.removeClass("disabled"), this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success"), this;
  }, n.prototype.destroy = function () {
    return this.reset(), this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"), this.$inputs.off(".bs.validator"), this.options = null, this.validators = null, this.$element = null, this.$btn = null, this.$inputs = null, this;
  };var r = e.fn.validator;e.fn.validator = i, e.fn.validator.Constructor = n, e.fn.validator.noConflict = function () {
    return e.fn.validator = r, this;
  }, e(window).on("load", function () {
    e('form[data-toggle="validator"]').each(function () {
      var t = e(this);i.call(t, t.data());
    });
  });
}(jQuery), function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? e(require("jquery")) : e(window.jQuery || window.Zepto);
}(function (e) {
  var t,
      n,
      i,
      r,
      o,
      s,
      a = function a() {},
      l = !!window.jQuery,
      c = e(window),
      u = function u(e, n) {
    t.ev.on("mfp" + e + ".mfp", n);
  },
      f = function f(t, n, i, r) {
    var o = document.createElement("div");return o.className = "mfp-" + t, i && (o.innerHTML = i), r ? n && n.appendChild(o) : (o = e(o), n && o.appendTo(n)), o;
  },
      d = function d(n, i) {
    t.ev.triggerHandler("mfp" + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
  },
      h = function h(n) {
    return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn;
  },
      p = function p() {
    e.magnificPopup.instance || ((t = new a()).init(), e.magnificPopup.instance = t);
  };a.prototype = { constructor: a, init: function init() {
      var n = navigator.appVersion;t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = function () {
        var e = document.createElement("p").style,
            t = ["ms", "O", "Moz", "Webkit"];if (void 0 !== e.transition) return !0;for (; t.length;) {
          if (t.pop() + "Transition" in e) return !0;
        }return !1;
      }(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document), t.popupsCache = {};
    }, open: function open(n) {
      var r;if (!1 === n.isObj) {
        t.items = n.items.toArray(), t.index = 0;var s,
            a = n.items;for (r = 0; r < a.length; r++) {
          if ((s = a[r]).parsed && (s = s.el[0]), s === n.el[0]) {
            t.index = r;break;
          }
        }
      } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;if (!t.isOpen) {
        t.types = [], o = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = f("bg").on("click.mfp", function () {
          t.close();
        }), t.wrap = f("wrap").attr("tabindex", -1).on("click.mfp", function (e) {
          t._checkIfClose(e.target) && t.close();
        }), t.container = f("container", t.wrap)), t.contentContainer = f("content"), t.st.preloader && (t.preloader = f("preloader", t.container, t.st.tLoading));var l = e.magnificPopup.modules;for (r = 0; r < l.length; r++) {
          var p = l[r];p = p.charAt(0).toUpperCase() + p.slice(1), t["init" + p].call(t);
        }d("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (u("MarkupParse", function (e, t, n, i) {
          n.close_replaceWith = h(i.type);
        }), o += " mfp-close-btn-in") : t.wrap.append(h())), t.st.alignTop && (o += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({ overflow: t.st.overflowY, overflowX: "hidden", overflowY: t.st.overflowY }) : t.wrap.css({ top: c.scrollTop(), position: "absolute" }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({ height: i.height(), position: "absolute" }), t.st.enableEscapeKey && i.on("keyup.mfp", function (e) {
          27 === e.keyCode && t.close();
        }), c.on("resize.mfp", function () {
          t.updateSize();
        }), t.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && t.wrap.addClass(o);var m = t.wH = c.height(),
            g = {};if (t.fixedContentPos && t._hasScrollBar(m)) {
          var v = t._getScrollbarSize();v && (g.marginRight = v);
        }t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : g.overflow = "hidden");var y = t.st.mainClass;return t.isIE7 && (y += " mfp-ie7"), y && t._addClassToMFP(y), t.updateItemHTML(), d("BuildControls"), e("html").css(g), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function () {
          t.content ? (t._addClassToMFP("mfp-ready"), t._setFocus()) : t.bgOverlay.addClass("mfp-ready"), i.on("focusin.mfp", t._onFocusIn);
        }, 16), t.isOpen = !0, t.updateSize(m), d("Open"), n;
      }t.updateItemHTML();
    }, close: function close() {
      t.isOpen && (d("BeforeClose"), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP("mfp-removing"), setTimeout(function () {
        t._close();
      }, t.st.removalDelay)) : t._close());
    }, _close: function _close() {
      d("Close");var n = "mfp-removing mfp-ready ";if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
        var r = { marginRight: "" };t.isIE7 ? e("body, html").css("overflow", "") : r.overflow = "", e("html").css(r);
      }i.off("keyup.mfp focusin.mfp"), t.ev.off(".mfp"), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, d("AfterClose");
    }, updateSize: function updateSize(e) {
      if (t.isIOS) {
        var n = document.documentElement.clientWidth / window.innerWidth,
            i = window.innerHeight * n;t.wrap.css("height", i), t.wH = i;
      } else t.wH = e || c.height();t.fixedContentPos || t.wrap.css("height", t.wH), d("Resize");
    }, updateItemHTML: function updateItemHTML() {
      var n = t.items[t.index];t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));var i = n.type;if (d("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
        var o = !!t.st[i] && t.st[i].markup;d("FirstMarkupParse", o), t.currTemplate[i] = !o || e(o);
      }r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);t.appendContent(s, i), n.preloaded = !0, d("Change", n), r = n.type, t.container.prepend(t.contentContainer), d("AfterChange");
    }, appendContent: function appendContent(e, n) {
      t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[n] ? t.content.find(".mfp-close").length || t.content.append(h()) : t.content = e : t.content = "", d("BeforeAppend"), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content);
    }, parseEl: function parseEl(n) {
      var i,
          r = t.items[n];if (r.tagName ? r = { el: e(r) } : (i = r.type, r = { data: r, src: r.src }), r.el) {
        for (var o = t.types, s = 0; s < o.length; s++) {
          if (r.el.hasClass("mfp-" + o[s])) {
            i = o[s];break;
          }
        }r.src = r.el.attr("data-mfp-src"), r.src || (r.src = r.el.attr("href"));
      }return r.type = i || t.st.type || "inline", r.index = n, r.parsed = !0, t.items[n] = r, d("ElementParse", r), t.items[n];
    }, addGroup: function addGroup(e, n) {
      var i = function i(_i) {
        _i.mfpEl = this, t._openClick(_i, e, n);
      };n || (n = {});var r = "click.magnificPopup";n.mainEl = e, n.items ? (n.isObj = !0, e.off(r).on(r, i)) : (n.isObj = !1, n.delegate ? e.off(r).on(r, n.delegate, i) : (n.items = e, e.off(r).on(r, i)));
    }, _openClick: function _openClick(n, i, r) {
      if ((void 0 !== r.midClick ? r.midClick : e.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
        var o = void 0 !== r.disableOn ? r.disableOn : e.magnificPopup.defaults.disableOn;if (o) if (e.isFunction(o)) {
          if (!o.call(t)) return !0;
        } else if (c.width() < o) return !0;n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), r.el = e(n.mfpEl), r.delegate && (r.items = i.find(r.delegate)), t.open(r);
      }
    }, updateStatus: function updateStatus(e, i) {
      if (t.preloader) {
        n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);var r = { status: e, text: i };d("UpdateStatus", r), e = r.status, i = r.text, t.preloader.html(i), t.preloader.find("a").on("click", function (e) {
          e.stopImmediatePropagation();
        }), t.container.addClass("mfp-s-" + e), n = e;
      }
    }, _checkIfClose: function _checkIfClose(n) {
      if (!e(n).hasClass("mfp-prevent-close")) {
        var i = t.st.closeOnContentClick,
            r = t.st.closeOnBgClick;if (i && r) return !0;if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;if (n === t.content[0] || e.contains(t.content[0], n)) {
          if (i) return !0;
        } else if (r && e.contains(document, n)) return !0;return !1;
      }
    }, _addClassToMFP: function _addClassToMFP(e) {
      t.bgOverlay.addClass(e), t.wrap.addClass(e);
    }, _removeClassFromMFP: function _removeClassFromMFP(e) {
      this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
    }, _hasScrollBar: function _hasScrollBar(e) {
      return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || c.height());
    }, _setFocus: function _setFocus() {
      (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
    }, _onFocusIn: function _onFocusIn(n) {
      if (n.target !== t.wrap[0] && !e.contains(t.wrap[0], n.target)) return t._setFocus(), !1;
    }, _parseMarkup: function _parseMarkup(t, n, i) {
      var r;i.data && (n = e.extend(i.data, n)), d("MarkupParse", [t, n, i]), e.each(n, function (n, i) {
        if (void 0 === i || !1 === i) return !0;if ((r = n.split("_")).length > 1) {
          var o = t.find(".mfp-" + r[0]);if (o.length > 0) {
            var s = r[1];"replaceWith" === s ? o[0] !== i[0] && o.replaceWith(i) : "img" === s ? o.is("img") ? o.attr("src", i) : o.replaceWith(e("<img>").attr("src", i).attr("class", o.attr("class"))) : o.attr(r[1], i);
          }
        } else t.find(".mfp-" + n).html(i);
      });
    }, _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === t.scrollbarSize) {
        var e = document.createElement("div");e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e);
      }return t.scrollbarSize;
    } }, e.magnificPopup = { instance: null, proto: a.prototype, modules: [], open: function open(t, n) {
      return p(), (t = t ? e.extend(!0, {}, t) : {}).isObj = !0, t.index = n || 0, this.instance.open(t);
    }, close: function close() {
      return e.magnificPopup.instance && e.magnificPopup.instance.close();
    }, registerModule: function registerModule(t, n) {
      n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t);
    }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, e.fn.magnificPopup = function (n) {
    p();var i = e(this);if ("string" == typeof n) {
      if ("open" === n) {
        var r,
            o = l ? i.data("magnificPopup") : i[0].magnificPopup,
            s = parseInt(arguments[1], 10) || 0;o.items ? r = o.items[s] : (r = i, o.delegate && (r = r.find(o.delegate)), r = r.eq(s)), t._openClick({ mfpEl: r }, i, o);
      } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
    } else n = e.extend(!0, {}, n), l ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);return i;
  };var m,
      g,
      v,
      y = function y() {
    v && (g.after(v.addClass(m)).detach(), v = null);
  };e.magnificPopup.registerModule("inline", { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function initInline() {
        t.types.push("inline"), u("Close.inline", function () {
          y();
        });
      }, getInline: function getInline(n, i) {
        if (y(), n.src) {
          var r = t.st.inline,
              o = e(n.src);if (o.length) {
            var s = o[0].parentNode;s && s.tagName && (g || (m = r.hiddenClass, g = f(m), m = "mfp-" + m), v = o.after(g).detach().removeClass(m)), t.updateStatus("ready");
          } else t.updateStatus("error", r.tNotFound), o = e("<div>");return n.inlineElement = o, o;
        }return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
      } } });var b,
      w = function w() {
    b && e(document.body).removeClass(b);
  },
      _ = function _() {
    w(), t.req && t.req.abort();
  };e.magnificPopup.registerModule("ajax", { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function initAjax() {
        t.types.push("ajax"), b = t.st.ajax.cursor, u("Close.ajax", _), u("BeforeChange.ajax", _);
      }, getAjax: function getAjax(n) {
        b && e(document.body).addClass(b), t.updateStatus("loading");var i = e.extend({ url: n.src, success: function success(i, r, o) {
            var s = { data: i, xhr: o };d("ParseAjax", s), t.appendContent(e(s.data), "ajax"), n.finished = !0, w(), t._setFocus(), setTimeout(function () {
              t.wrap.addClass("mfp-ready");
            }, 16), t.updateStatus("ready"), d("AjaxContentAdded");
          }, error: function error() {
            w(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src));
          } }, t.st.ajax.settings);return t.req = e.ajax(i), "";
      } } });var T;e.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function initImage() {
        var n = t.st.image,
            i = ".image";t.types.push("image"), u("Open" + i, function () {
          "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor);
        }), u("Close" + i, function () {
          n.cursor && e(document.body).removeClass(n.cursor), c.off("resize.mfp");
        }), u("Resize" + i, t.resizeImage), t.isLowIE && u("AfterChange", t.resizeImage);
      }, resizeImage: function resizeImage() {
        var e = t.currItem;if (e && e.img && t.st.image.verticalFit) {
          var n = 0;t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n);
        }
      }, _onImageHasSize: function _onImageHasSize(e) {
        e.img && (e.hasSize = !0, T && clearInterval(T), e.isCheckingImgSize = !1, d("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1));
      }, findImageSize: function findImageSize(e) {
        var n = 0,
            i = e.img[0],
            r = function r(o) {
          T && clearInterval(T), T = setInterval(function () {
            i.naturalWidth > 0 ? t._onImageHasSize(e) : (n > 200 && clearInterval(T), 3 === ++n ? r(10) : 40 === n ? r(50) : 100 === n && r(500));
          }, o);
        };r(1);
      }, getImage: function getImage(n, i) {
        var r = 0,
            o = function o() {
          n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, d("ImageLoadComplete")) : ++r < 200 ? setTimeout(o, 100) : s());
        },
            s = function s() {
          n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", a.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0);
        },
            a = t.st.image,
            l = i.find(".mfp-img");if (l.length) {
          var c = document.createElement("img");c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = e(c).on("load.mfploader", o).on("error.mfploader", s), c.src = n.src, l.is("img") && (n.img = n.img.clone()), (c = n.img[0]).naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1);
        }return t._parseMarkup(i, { title: function (n) {
            if (n.data && void 0 !== n.data.title) return n.data.title;var i = t.st.image.titleSrc;if (i) {
              if (e.isFunction(i)) return i.call(t, n);if (n.el) return n.el.attr(i) || "";
            }return "";
          }(n), img_replaceWith: n.img }, n), t.resizeImage(), n.hasSize ? (T && clearInterval(T), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i);
      } } });var C;e.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function opener(e) {
        return e.is("img") ? e : e.find("img");
      } }, proto: { initZoom: function initZoom() {
        var e,
            n = t.st.zoom,
            i = ".zoom";if (n.enabled && t.supportsTransition) {
          var r,
              o,
              s = n.duration,
              a = function a(e) {
            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                i = "all " + n.duration / 1e3 + "s " + n.easing,
                r = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                o = "transition";return r["-webkit-" + o] = r["-moz-" + o] = r["-o-" + o] = r[o] = i, t.css(r), t;
          },
              l = function l() {
            t.content.css("visibility", "visible");
          };u("BuildControls" + i, function () {
            if (t._allowZoom()) {
              if (clearTimeout(r), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void l();(o = a(e)).css(t._getOffset()), t.wrap.append(o), r = setTimeout(function () {
                o.css(t._getOffset(!0)), r = setTimeout(function () {
                  l(), setTimeout(function () {
                    o.remove(), e = o = null, d("ZoomAnimationEnded");
                  }, 16);
                }, s);
              }, 16);
            }
          }), u("BeforeClose" + i, function () {
            if (t._allowZoom()) {
              if (clearTimeout(r), t.st.removalDelay = s, !e) {
                if (!(e = t._getItemToZoom())) return;o = a(e);
              }o.css(t._getOffset(!0)), t.wrap.append(o), t.content.css("visibility", "hidden"), setTimeout(function () {
                o.css(t._getOffset());
              }, 16);
            }
          }), u("Close" + i, function () {
            t._allowZoom() && (l(), o && o.remove(), e = null);
          });
        }
      }, _allowZoom: function _allowZoom() {
        return "image" === t.currItem.type;
      }, _getItemToZoom: function _getItemToZoom() {
        return !!t.currItem.hasSize && t.currItem.img;
      }, _getOffset: function _getOffset(n) {
        var i,
            r = (i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
            o = parseInt(i.css("padding-top"), 10),
            s = parseInt(i.css("padding-bottom"), 10);r.top -= e(window).scrollTop() - o;var a = { width: i.width(), height: (l ? i.innerHeight() : i[0].offsetHeight) - s - o };return void 0 === C && (C = void 0 !== document.createElement("p").style.MozTransform), C ? a["-moz-transform"] = a.transform = "translate(" + r.left + "px," + r.top + "px)" : (a.left = r.left, a.top = r.top), a;
      } } });var E = function E(e) {
    if (t.currTemplate.iframe) {
      var n = t.currTemplate.iframe.find("iframe");n.length && (e || (n[0].src = "//about:blank"), t.isIE8 && n.css("display", e ? "block" : "none"));
    }
  };e.magnificPopup.registerModule("iframe", { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function initIframe() {
        t.types.push("iframe"), u("BeforeChange", function (e, t, n) {
          t !== n && ("iframe" === t ? E() : "iframe" === n && E(!0));
        }), u("Close.iframe", function () {
          E();
        });
      }, getIframe: function getIframe(n, i) {
        var r = n.src,
            o = t.st.iframe;e.each(o.patterns, function () {
          if (r.indexOf(this.index) > -1) return this.id && (r = "string" == typeof this.id ? r.substr(r.lastIndexOf(this.id) + this.id.length, r.length) : this.id.call(this, r)), r = this.src.replace("%id%", r), !1;
        });var s = {};return o.srcAction && (s[o.srcAction] = r), t._parseMarkup(i, s, n), t.updateStatus("ready"), i;
      } } });var x = function x(e) {
    var n = t.items.length;return e > n - 1 ? e - n : e < 0 ? n + e : e;
  },
      S = function S(e, t, n) {
    return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
  };e.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function initGallery() {
        var n = t.st.gallery,
            r = ".mfp-gallery";if (t.direction = !0, !n || !n.enabled) return !1;o += " mfp-gallery", u("Open" + r, function () {
          n.navigateByImgClick && t.wrap.on("click" + r, ".mfp-img", function () {
            if (t.items.length > 1) return t.next(), !1;
          }), i.on("keydown" + r, function (e) {
            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
          });
        }), u("UpdateStatus" + r, function (e, n) {
          n.text && (n.text = S(n.text, t.currItem.index, t.items.length));
        }), u("MarkupParse" + r, function (e, i, r, o) {
          var s = t.items.length;r.counter = s > 1 ? S(n.tCounter, o.index, s) : "";
        }), u("BuildControls" + r, function () {
          if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
            var i = n.arrowMarkup,
                r = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close"),
                o = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close");r.click(function () {
              t.prev();
            }), o.click(function () {
              t.next();
            }), t.container.append(r.add(o));
          }
        }), u("Change" + r, function () {
          t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
            t.preloadNearbyImages(), t._preloadTimeout = null;
          }, 16);
        }), u("Close" + r, function () {
          i.off(r), t.wrap.off("click" + r), t.arrowRight = t.arrowLeft = null;
        });
      }, next: function next() {
        t.direction = !0, t.index = x(t.index + 1), t.updateItemHTML();
      }, prev: function prev() {
        t.direction = !1, t.index = x(t.index - 1), t.updateItemHTML();
      }, goTo: function goTo(e) {
        t.direction = e >= t.index, t.index = e, t.updateItemHTML();
      }, preloadNearbyImages: function preloadNearbyImages() {
        var e,
            n = t.st.gallery.preload,
            i = Math.min(n[0], t.items.length),
            r = Math.min(n[1], t.items.length);for (e = 1; e <= (t.direction ? r : i); e++) {
          t._preloadItem(t.index + e);
        }for (e = 1; e <= (t.direction ? i : r); e++) {
          t._preloadItem(t.index - e);
        }
      }, _preloadItem: function _preloadItem(n) {
        if (n = x(n), !t.items[n].preloaded) {
          var i = t.items[n];i.parsed || (i = t.parseEl(n)), d("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
            i.hasSize = !0;
          }).on("error.mfploader", function () {
            i.hasSize = !0, i.loadError = !0, d("LazyLoadError", i);
          }).attr("src", i.src)), i.preloaded = !0;
        }
      } } });e.magnificPopup.registerModule("retina", { options: { replaceSrc: function replaceSrc(e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return "@2x" + e;
        });
      }, ratio: 1 }, proto: { initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var e = t.st.retina,
              n = e.ratio;(n = isNaN(n) ? n() : n) > 1 && (u("ImageHasSize.retina", function (e, t) {
            t.img.css({ "max-width": t.img[0].naturalWidth / n, width: "100%" });
          }), u("ElementParse.retina", function (t, i) {
            i.src = e.replaceSrc(i, n);
          }));
        }
      } } }), p();
}), function (e) {
  "use strict";
  var t = e(".lv-google-map");t.length && (t.click(function () {
    t.find("iframe").css("pointer-events", "auto");
  }), t.mouseleave(function () {
    t.find("iframe").css("pointer-events", "none");
  }));
}(jQuery), function (e) {
  "use strict";
  var t = {},
      n = ["xs", "sm", "md", "lg", "xl", "xxl"];function i() {
    var n = e("body");1 != e(".lv-screen-data").length && n.append('<div class="lv-screen-data"></div>');var i,
        r = window.innerWidth,
        o = window.innerHeight;r < t.sm && (i = "xs"), r >= t.sm && r < t.md && (i = "sm"), r >= t.md && r < t.lg && (i = "md"), r >= t.lg && r < t.xl && (i = "lg"), r >= t.xl && r < t.xxl && (i = "xl"), r >= t.xxl && (i = "xxl"), e(".lv-screen-data").html(r + " x " + o + "<br>" + i).css({ position: "fixed", top: 0, padding: "10px 20px", background: "rgba(0,0,0,0.5)", "font-family": "Helvetica Neue", "font-size": "14px", color: "white", "z-index": 2147483646 }).click(function () {
      n.toggleClass("developer");
    });
  }!function () {
    for (var i, r = "", o = window.getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue("content").replace(/\\a/g, "").replace(/ /g, "").replace(/'/g, "").replace(/"/g, "").split("|"), s = 0; s < o.length; s++) {
      t[n[s]] = Number(o[s].replace("px", "")), r += "<tr><td>" + n[s] + "</td><td>" + o[s] + "</td></tr>";
    }i = '<table class="table breakpoints-table" style="width: 300px;">' + r + "</table>", e('[data-js="lv-responsive-table"]').append(i);
  }(), e("html[development]").length && (i(), e(window).resize(function () {
    i();
  }));
}(jQuery), function (e, t) {
  "use strict";
  var n = { bind: !!function () {}.bind, classList: "classList" in t.documentElement, rAF: !!(e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame) };function i(e) {
    this.callback = e, this.ticking = !1;
  }function r(t, n) {
    var o;n = function t(n) {
      if (arguments.length <= 0) throw new Error("Missing arguments in extend function");var i,
          r,
          o,
          s = n || {};for (r = 1; r < arguments.length; r++) {
        var a = arguments[r] || {};for (i in a) {
          "object" != _typeof(s[i]) || (o = s[i]) && void 0 !== e && (o === e || o.nodeType) ? s[i] = s[i] || a[i] : s[i] = t(s[i], a[i]);
        }
      }return s;
    }(n, r.options), this.lastKnownScrollY = 0, this.elem = t, this.debouncer = new i(this.update.bind(this)), this.tolerance = (o = n.tolerance) === Object(o) ? o : { down: o, up: o }, this.classes = n.classes, this.offset = n.offset, this.scroller = n.scroller, this.initialised = !1, this.onPin = n.onPin, this.onUnpin = n.onUnpin, this.onTop = n.onTop, this.onNotTop = n.onNotTop;
  }e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame, i.prototype = { constructor: i, update: function update() {
      this.callback && this.callback(), this.ticking = !1;
    }, requestTick: function requestTick() {
      this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0);
    }, handleEvent: function handleEvent() {
      this.requestTick();
    } }, r.prototype = { constructor: r, init: function init() {
      if (r.cutsTheMustard) return this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this;
    }, destroy: function destroy() {
      var e = this.classes;this.initialised = !1, this.elem.classList.remove(e.unpinned, e.pinned, e.top, e.initial), this.scroller.removeEventListener("scroll", this.debouncer, !1);
    }, attachEvent: function attachEvent() {
      this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent());
    }, unpin: function unpin() {
      var e = this.elem.classList,
          t = this.classes;!e.contains(t.pinned) && e.contains(t.unpinned) || (e.add(t.unpinned), e.remove(t.pinned), this.onUnpin && this.onUnpin.call(this));
    }, pin: function pin() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.unpinned) && (e.remove(t.unpinned), e.add(t.pinned), this.onPin && this.onPin.call(this));
    }, top: function top() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.top) || (e.add(t.top), e.remove(t.notTop), this.onTop && this.onTop.call(this));
    }, notTop: function notTop() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.notTop) || (e.add(t.notTop), e.remove(t.top), this.onNotTop && this.onNotTop.call(this));
    }, getScrollY: function getScrollY() {
      return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (t.documentElement || t.body.parentNode || t.body).scrollTop;
    }, getViewportHeight: function getViewportHeight() {
      return e.innerHeight || t.documentElement.clientHeight || t.body.clientHeight;
    }, getDocumentHeight: function getDocumentHeight() {
      var e = t.body,
          n = t.documentElement;return Math.max(e.scrollHeight, n.scrollHeight, e.offsetHeight, n.offsetHeight, e.clientHeight, n.clientHeight);
    }, getElementHeight: function getElementHeight(e) {
      return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight);
    }, getScrollerHeight: function getScrollerHeight() {
      return this.scroller === e || this.scroller === t.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller);
    }, isOutOfBounds: function isOutOfBounds(e) {
      var t = e < 0,
          n = e + this.getViewportHeight() > this.getScrollerHeight();return t || n;
    }, toleranceExceeded: function toleranceExceeded(e, t) {
      return Math.abs(e - this.lastKnownScrollY) >= this.tolerance[t];
    }, shouldUnpin: function shouldUnpin(e, t) {
      var n = e > this.lastKnownScrollY,
          i = e >= this.offset;return n && i && t;
    }, shouldPin: function shouldPin(e, t) {
      var n = e < this.lastKnownScrollY,
          i = e <= this.offset;return n && t || i;
    }, update: function update() {
      var e = this.getScrollY(),
          t = e > this.lastKnownScrollY ? "down" : "up",
          n = this.toleranceExceeded(e, t);this.isOutOfBounds(e) || (e <= this.offset ? this.top() : this.notTop(), this.shouldUnpin(e, n) ? this.unpin() : this.shouldPin(e, n) && this.pin(), this.lastKnownScrollY = e);
    } }, r.options = { tolerance: { up: 0, down: 0 }, offset: 0, scroller: e, classes: { pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", initial: "headroom" } }, r.cutsTheMustard = void 0 !== n && n.rAF && n.bind && n.classList, e.Headroom = r;
}(window, document), function (e) {
  e && (e.fn.headroom = function (t) {
    return this.each(function () {
      var n = e(this),
          i = n.data("headroom"),
          r = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t;r = e.extend(!0, {}, Headroom.options, r), i || ((i = new Headroom(this, r)).init(), n.data("headroom", i)), "string" == typeof t && i[t]();
    });
  }, e("[data-headroom]").each(function () {
    var t = e(this);t.headroom(t.data());
  }));
}(window.Zepto || window.jQuery), function (e) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Parallax = e();
  }
}(function () {
  return function e(t, n, i) {
    function r(s, a) {
      if (!n[s]) {
        if (!t[s]) {
          var l = "function" == typeof require && require;if (!a && l) return l(s, !0);if (o) return o(s, !0);var c = new Error("Cannot find module '" + s + "'");throw c.code = "MODULE_NOT_FOUND", c;
        }var u = n[s] = { exports: {} };t[s][0].call(u.exports, function (e) {
          var n = t[s][1][e];return r(n || e);
        }, u, u.exports, e, t, n, i);
      }return n[s].exports;
    }for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) {
      r(i[s]);
    }return r;
  }({ 1: [function (e, t, n) {
      "use strict";
      var i = Object.getOwnPropertySymbols,
          r = Object.prototype.hasOwnProperty,
          o = Object.prototype.propertyIsEnumerable;t.exports = function () {
        try {
          if (!Object.assign) return !1;var e = new String("abc");if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;for (var t = {}, n = 0; n < 10; n++) {
            t["_" + String.fromCharCode(n)] = n;
          }if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
            return t[e];
          }).join("")) return !1;var i = {};return "abcdefghijklmnopqrst".split("").forEach(function (e) {
            i[e] = e;
          }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("");
        } catch (e) {
          return !1;
        }
      }() ? Object.assign : function (e, t) {
        for (var n, s, a = function (e) {
          if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e);
        }(e), l = 1; l < arguments.length; l++) {
          for (var c in n = Object(arguments[l])) {
            r.call(n, c) && (a[c] = n[c]);
          }if (i) {
            s = i(n);for (var u = 0; u < s.length; u++) {
              o.call(n, s[u]) && (a[s[u]] = n[s[u]]);
            }
          }
        }return a;
      };
    }, {}], 2: [function (e, t, n) {
      (function (e) {
        (function () {
          var n, i, r, o, s, a;"undefined" != typeof performance && null !== performance && performance.now ? t.exports = function () {
            return performance.now();
          } : void 0 !== e && null !== e && e.hrtime ? (t.exports = function () {
            return (n() - s) / 1e6;
          }, i = e.hrtime, o = (n = function n() {
            var e;return 1e9 * (e = i())[0] + e[1];
          })(), a = 1e9 * e.uptime(), s = o - a) : Date.now ? (t.exports = function () {
            return Date.now() - r;
          }, r = Date.now()) : (t.exports = function () {
            return new Date().getTime() - r;
          }, r = new Date().getTime());
        }).call(this);
      }).call(this, e("_process"));
    }, { _process: 3 }], 3: [function (e, t, n) {
      var i,
          r,
          o = t.exports = {};function s() {
        throw new Error("setTimeout has not been defined");
      }function a() {
        throw new Error("clearTimeout has not been defined");
      }function l(e) {
        if (i === setTimeout) return setTimeout(e, 0);if ((i === s || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0);try {
          return i(e, 0);
        } catch (t) {
          try {
            return i.call(null, e, 0);
          } catch (t) {
            return i.call(this, e, 0);
          }
        }
      }!function () {
        try {
          i = "function" == typeof setTimeout ? setTimeout : s;
        } catch (e) {
          i = s;
        }try {
          r = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (e) {
          r = a;
        }
      }();var c,
          u = [],
          f = !1,
          d = -1;function h() {
        f && c && (f = !1, c.length ? u = c.concat(u) : d = -1, u.length && p());
      }function p() {
        if (!f) {
          var e = l(h);f = !0;for (var t = u.length; t;) {
            for (c = u, u = []; ++d < t;) {
              c && c[d].run();
            }d = -1, t = u.length;
          }c = null, f = !1, function (e) {
            if (r === clearTimeout) return clearTimeout(e);if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          }(e);
        }
      }function m(e, t) {
        this.fun = e, this.array = t;
      }function g() {}o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
          t[n - 1] = arguments[n];
        }u.push(new m(e, t)), 1 !== u.length || f || l(p);
      }, m.prototype.run = function () {
        this.fun.apply(null, this.array);
      }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = g, o.addListener = g, o.once = g, o.off = g, o.removeListener = g, o.removeAllListeners = g, o.emit = g, o.prependListener = g, o.prependOnceListener = g, o.listeners = function (e) {
        return [];
      }, o.binding = function (e) {
        throw new Error("process.binding is not supported");
      }, o.cwd = function () {
        return "/";
      }, o.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }, o.umask = function () {
        return 0;
      };
    }, {}], 4: [function (e, t, n) {
      (function (n) {
        for (var i = e("performance-now"), r = "undefined" == typeof window ? n : window, o = ["moz", "webkit"], s = "AnimationFrame", a = r["request" + s], l = r["cancel" + s] || r["cancelRequest" + s], c = 0; !a && c < o.length; c++) {
          a = r[o[c] + "Request" + s], l = r[o[c] + "Cancel" + s] || r[o[c] + "CancelRequest" + s];
        }if (!a || !l) {
          var u = 0,
              f = 0,
              d = [];a = function a(e) {
            if (0 === d.length) {
              var t = i(),
                  n = Math.max(0, 1e3 / 60 - (t - u));u = n + t, setTimeout(function () {
                var e = d.slice(0);d.length = 0;for (var t = 0; t < e.length; t++) {
                  if (!e[t].cancelled) try {
                    e[t].callback(u);
                  } catch (e) {
                    setTimeout(function () {
                      throw e;
                    }, 0);
                  }
                }
              }, Math.round(n));
            }return d.push({ handle: ++f, callback: e, cancelled: !1 }), f;
          }, l = function l(e) {
            for (var t = 0; t < d.length; t++) {
              d[t].handle === e && (d[t].cancelled = !0);
            }
          };
        }t.exports = function (e) {
          return a.call(r, e);
        }, t.exports.cancel = function () {
          l.apply(r, arguments);
        }, t.exports.polyfill = function () {
          r.requestAnimationFrame = a, r.cancelAnimationFrame = l;
        };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, { "performance-now": 2 }], 5: [function (e, t, n) {
      "use strict";
      var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }();var r = e("raf"),
          o = e("object-assign"),
          s = { propertyCache: {}, vendors: [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]], clamp: function clamp(e, t, n) {
          return t < n ? e < t ? t : e > n ? n : e : e < n ? n : e > t ? t : e;
        }, data: function data(e, t) {
          return s.deserialize(e.getAttribute("data-" + t));
        }, deserialize: function deserialize(e) {
          return "true" === e || "false" !== e && ("null" === e ? null : !isNaN(parseFloat(e)) && isFinite(e) ? parseFloat(e) : e);
        }, camelCase: function camelCase(e) {
          return e.replace(/-+(.)?/g, function (e, t) {
            return t ? t.toUpperCase() : "";
          });
        }, accelerate: function accelerate(e) {
          s.css(e, "transform", "translate3d(0,0,0) rotate(0.0001deg)"), s.css(e, "transform-style", "preserve-3d"), s.css(e, "backface-visibility", "hidden");
        }, transformSupport: function transformSupport(e) {
          for (var t = document.createElement("div"), n = !1, i = null, r = !1, o = null, a = null, l = 0, c = s.vendors.length; l < c; l++) {
            if (null !== s.vendors[l] ? (o = s.vendors[l][0] + "transform", a = s.vendors[l][1] + "Transform") : (o = "transform", a = "transform"), void 0 !== t.style[a]) {
              n = !0;break;
            }
          }switch (e) {case "2D":
              r = n;break;case "3D":
              if (n) {
                var u = document.body || document.createElement("body"),
                    f = document.documentElement,
                    d = f.style.overflow,
                    h = !1;document.body || (h = !0, f.style.overflow = "hidden", f.appendChild(u), u.style.overflow = "hidden", u.style.background = ""), u.appendChild(t), t.style[a] = "translate3d(1px,1px,1px)", r = void 0 !== (i = window.getComputedStyle(t).getPropertyValue(o)) && i.length > 0 && "none" !== i, f.style.overflow = d, u.removeChild(t), h && (u.removeAttribute("style"), u.parentNode.removeChild(u));
              }}return r;
        }, css: function css(e, t, n) {
          var i = s.propertyCache[t];if (!i) for (var r = 0, o = s.vendors.length; r < o; r++) {
            if (i = null !== s.vendors[r] ? s.camelCase(s.vendors[r][1] + "-" + t) : t, void 0 !== e.style[i]) {
              s.propertyCache[t] = i;break;
            }
          }e.style[i] = n;
        } },
          a = { relativeInput: !1, clipRelativeInput: !1, inputElement: null, hoverOnly: !1, calibrationThreshold: 100, calibrationDelay: 500, supportDelay: 500, calibrateX: !1, calibrateY: !0, invertX: !0, invertY: !0, limitX: !1, limitY: !1, scalarX: 10, scalarY: 10, frictionX: .1, frictionY: .1, originX: .5, originY: .5, pointerEvents: !1, precision: 1, onReady: null, selector: null },
          l = function () {
        function e(t, n) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), this.element = t;var i = { calibrateX: s.data(this.element, "calibrate-x"), calibrateY: s.data(this.element, "calibrate-y"), invertX: s.data(this.element, "invert-x"), invertY: s.data(this.element, "invert-y"), limitX: s.data(this.element, "limit-x"), limitY: s.data(this.element, "limit-y"), scalarX: s.data(this.element, "scalar-x"), scalarY: s.data(this.element, "scalar-y"), frictionX: s.data(this.element, "friction-x"), frictionY: s.data(this.element, "friction-y"), originX: s.data(this.element, "origin-x"), originY: s.data(this.element, "origin-y"), pointerEvents: s.data(this.element, "pointer-events"), precision: s.data(this.element, "precision"), relativeInput: s.data(this.element, "relative-input"), clipRelativeInput: s.data(this.element, "clip-relative-input"), hoverOnly: s.data(this.element, "hover-only"), inputElement: document.querySelector(s.data(this.element, "input-element")), selector: s.data(this.element, "selector") };for (var r in i) {
            null === i[r] && delete i[r];
          }o(this, a, i, n), this.inputElement || (this.inputElement = this.element), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depthsX = [], this.depthsY = [], this.raf = null, this.bounds = null, this.elementPositionX = 0, this.elementPositionY = 0, this.elementWidth = 0, this.elementHeight = 0, this.elementCenterX = 0, this.elementCenterY = 0, this.elementRangeX = 0, this.elementRangeY = 0, this.calibrationX = 0, this.calibrationY = 0, this.inputX = 0, this.inputY = 0, this.motionX = 0, this.motionY = 0, this.velocityX = 0, this.velocityY = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onDeviceMotion = this.onDeviceMotion.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onMotionTimer = this.onMotionTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.windowWidth = null, this.windowHeight = null, this.windowCenterX = null, this.windowCenterY = null, this.windowRadiusX = null, this.windowRadiusY = null, this.portrait = !1, this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), this.motionSupport = !!window.DeviceMotionEvent && !this.desktop, this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop, this.orientationStatus = 0, this.motionStatus = 0, this.initialise();
        }return i(e, [{ key: "initialise", value: function value() {
            void 0 === this.transform2DSupport && (this.transform2DSupport = s.transformSupport("2D"), this.transform3DSupport = s.transformSupport("3D")), this.transform3DSupport && s.accelerate(this.element), "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"), this.pointerEvents || (this.element.style.pointerEvents = "none"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay);
          } }, { key: "doReadyCallback", value: function value() {
            this.onReady && this.onReady();
          } }, { key: "updateLayers", value: function value() {
            this.selector ? this.layers = this.element.querySelectorAll(this.selector) : this.layers = this.element.children, this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."), this.depthsX = [], this.depthsY = [];for (var e = 0; e < this.layers.length; e++) {
              var t = this.layers[e];this.transform3DSupport && s.accelerate(t), t.style.display = "block";var n = s.data(t, "depth") || 0;this.depthsX.push(s.data(t, "depth-x") || n), this.depthsY.push(s.data(t, "depth-y") || n);
            }
          } }, { key: "updateDimensions", value: function value() {
            this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.windowCenterX = this.windowWidth * this.originX, this.windowCenterY = this.windowHeight * this.originY, this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX), this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY);
          } }, { key: "updateBounds", value: function value() {
            this.bounds = this.inputElement.getBoundingClientRect(), this.elementPositionX = this.bounds.left, this.elementPositionY = this.bounds.top, this.elementWidth = this.bounds.width, this.elementHeight = this.bounds.height, this.elementCenterX = this.elementWidth * this.originX, this.elementCenterY = this.elementHeight * this.originY, this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX), this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY);
          } }, { key: "queueCalibration", value: function value(e) {
            clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, e);
          } }, { key: "enable", value: function value() {
            this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = !1, window.addEventListener("deviceorientation", this.onDeviceOrientation), this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1, window.addEventListener("devicemotion", this.onDeviceMotion), this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0, this.calibrationY = 0, this.portrait = !1, window.addEventListener("mousemove", this.onMouseMove), this.doReadyCallback()), window.addEventListener("resize", this.onWindowResize), this.raf = r(this.onAnimationFrame));
          } }, { key: "disable", value: function value() {
            this.enabled && (this.enabled = !1, this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("resize", this.onWindowResize), r.cancel(this.raf));
          } }, { key: "calibrate", value: function value(e, t) {
            this.calibrateX = void 0 === e ? this.calibrateX : e, this.calibrateY = void 0 === t ? this.calibrateY : t;
          } }, { key: "invert", value: function value(e, t) {
            this.invertX = void 0 === e ? this.invertX : e, this.invertY = void 0 === t ? this.invertY : t;
          } }, { key: "friction", value: function value(e, t) {
            this.frictionX = void 0 === e ? this.frictionX : e, this.frictionY = void 0 === t ? this.frictionY : t;
          } }, { key: "scalar", value: function value(e, t) {
            this.scalarX = void 0 === e ? this.scalarX : e, this.scalarY = void 0 === t ? this.scalarY : t;
          } }, { key: "limit", value: function value(e, t) {
            this.limitX = void 0 === e ? this.limitX : e, this.limitY = void 0 === t ? this.limitY : t;
          } }, { key: "origin", value: function value(e, t) {
            this.originX = void 0 === e ? this.originX : e, this.originY = void 0 === t ? this.originY : t;
          } }, { key: "setInputElement", value: function value(e) {
            this.inputElement = e, this.updateDimensions();
          } }, { key: "setPosition", value: function value(e, t, n) {
            t = t.toFixed(this.precision) + "px", n = n.toFixed(this.precision) + "px", this.transform3DSupport ? s.css(e, "transform", "translate3d(" + t + "," + n + ",0)") : this.transform2DSupport ? s.css(e, "transform", "translate(" + t + "," + n + ")") : (e.style.left = t, e.style.top = n);
          } }, { key: "onOrientationTimer", value: function value() {
            this.orientationSupport && 0 === this.orientationStatus ? (this.disable(), this.orientationSupport = !1, this.enable()) : this.doReadyCallback();
          } }, { key: "onMotionTimer", value: function value() {
            this.motionSupport && 0 === this.motionStatus ? (this.disable(), this.motionSupport = !1, this.enable()) : this.doReadyCallback();
          } }, { key: "onCalibrationTimer", value: function value() {
            this.calibrationFlag = !0;
          } }, { key: "onWindowResize", value: function value() {
            this.updateDimensions();
          } }, { key: "onAnimationFrame", value: function value() {
            this.updateBounds();var e = this.inputX - this.calibrationX,
                t = this.inputY - this.calibrationY;(Math.abs(e) > this.calibrationThreshold || Math.abs(t) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.motionX = this.calibrateX ? t : this.inputY, this.motionY = this.calibrateY ? e : this.inputX) : (this.motionX = this.calibrateX ? e : this.inputX, this.motionY = this.calibrateY ? t : this.inputY), this.motionX *= this.elementWidth * (this.scalarX / 100), this.motionY *= this.elementHeight * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.motionX = s.clamp(this.motionX, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.motionY = s.clamp(this.motionY, -this.limitY, this.limitY)), this.velocityX += (this.motionX - this.velocityX) * this.frictionX, this.velocityY += (this.motionY - this.velocityY) * this.frictionY;for (var n = 0; n < this.layers.length; n++) {
              var i = this.layers[n],
                  o = this.depthsX[n],
                  a = this.depthsY[n],
                  l = this.velocityX * (o * (this.invertX ? -1 : 1)),
                  c = this.velocityY * (a * (this.invertY ? -1 : 1));this.setPosition(i, l, c);
            }this.raf = r(this.onAnimationFrame);
          } }, { key: "rotate", value: function value(e, t) {
            var n = (e || 0) / 30,
                i = (t || 0) / 30,
                r = this.windowHeight > this.windowWidth;this.portrait !== r && (this.portrait = r, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.calibrationX = n, this.calibrationY = i), this.inputX = n, this.inputY = i;
          } }, { key: "onDeviceOrientation", value: function value(e) {
            var t = e.beta,
                n = e.gamma;null !== t && null !== n && (this.orientationStatus = 1, this.rotate(t, n));
          } }, { key: "onDeviceMotion", value: function value(e) {
            var t = e.rotationRate.beta,
                n = e.rotationRate.gamma;null !== t && null !== n && (this.motionStatus = 1, this.rotate(t, n));
          } }, { key: "onMouseMove", value: function value(e) {
            var t = e.clientX,
                n = e.clientY;if (this.hoverOnly && (t < this.elementPositionX || t > this.elementPositionX + this.elementWidth || n < this.elementPositionY || n > this.elementPositionY + this.elementHeight)) return this.inputX = 0, void (this.inputY = 0);this.relativeInput ? (this.clipRelativeInput && (t = Math.max(t, this.elementPositionX), t = Math.min(t, this.elementPositionX + this.elementWidth), n = Math.max(n, this.elementPositionY), n = Math.min(n, this.elementPositionY + this.elementHeight)), this.elementRangeX && this.elementRangeY && (this.inputX = (t - this.elementPositionX - this.elementCenterX) / this.elementRangeX, this.inputY = (n - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (t - this.windowCenterX) / this.windowRadiusX, this.inputY = (n - this.windowCenterY) / this.windowRadiusY);
          } }, { key: "destroy", value: function value() {
            this.disable(), clearTimeout(this.calibrationTimer), clearTimeout(this.detectionTimer), this.element.removeAttribute("style");for (var e = 0; e < this.layers.length; e++) {
              this.layers[e].removeAttribute("style");
            }delete this.element, delete this.layers;
          } }, { key: "version", value: function value() {
            return "3.1.0";
          } }]), e;
      }();t.exports = l;
    }, { "object-assign": 1, raf: 4 }] }, {}, [5])(5);
}), function (e) {
  e("head").append('<style type="text/css">.sn-pxg .pxg-set{user-select:none;-moz-user-select:none;-webkit-user-select:none;}.sn-pxg span.pxg-source{position:relative;display:inline-block;z-index:2;}.sn-pxg U.pxg-set,.sn-pxg U.pxg-set S,.sn-pxg U.pxg-set S B{left:0;right:0;top:0;bottom:0;height:inherit;width:inherit;position:absolute;display:inline-block;text-decoration:none;font-weight:inherit;}.sn-pxg U.pxg-set S{overflow:hidden;}.sn-pxg U.pxg-set{text-decoration:none;z-index:1;display:inline-block;position:relative;}</style>'), e.fn.pxgradient = function (t) {
    (t = e.extend({ step: 10, colors: ["#ffcc00", "#cc0000", "#000000"], dir: "y" }, t)).RGBcolors = [];for (var n = 0; n < t.colors.length; n++) {
      t.RGBcolors[n] = i(t.colors[n]);
    }return this.each(function (n, i) {
      var o = e(i);if (!o.hasClass("sn-pxg")) {
        var s = o.html();o.html('<span class="pxg-source" style="visibility: hidden;">' + s + "</span>").append('<u class="pxg-set"></u>');var a = o.find(".pxg-set"),
            l = o.find(".pxg-source"),
            c = l.innerWidth(),
            u = l.innerHeight();if (l.hide(), o.addClass("sn-pxg"), "x" == t.dir) var f = c;else if ("y" == t.dir) f = u;var d = Math.floor(f / t.step),
            h = d;f - d * t.step > 0 && h++, a.css({ width: c, height: u });var p = 0,
            m = "";if ("x" == t.dir) for (n = 0; n < h; n++) {
          var g = r(p, f);m += '<s style="height:' + u + "px;width:" + t.step + "px;left:" + p + "px;color:" + g + '"><b style="left:-' + p + "px;width:" + c + "px;height:" + u + 'px;">' + s + "</b></s>", p += t.step;
        } else if ("y" == t.dir) for (n = 0; n < h; n++) {
          g = r(p, f);m += '<s style="width:' + c + "px;height:" + t.step + "px;top:" + p + "px;color:" + g + '"><b style="top:-' + p + "px;height:" + c + "px;height:" + u + 'px;">' + s + "</b></s>", p += t.step;
        }a.append(m);
      }
    });function i(e) {
      return "#" == e.substr(0, 1) && (e = e.substr(1)), 3 == e.length && (e = e.substr(0, 1) + e.substr(0, 1) + e.substr(1, 1) + e.substr(1, 1) + e.substr(2, 1) + e.substr(2, 1)), [parseInt(e.substr(0, 2), 16), parseInt(e.substr(2, 2), 16), parseInt(e.substr(4, 2), 16)];
    }function r(e, n) {
      for (var i = e > 0 ? e / n : 0, r = 0; r < t.colors.length; r++) {
        if (fStopPosition = r / (t.colors.length - 1), fLastPosition = r > 0 ? (r - 1) / (t.colors.length - 1) : 0, i == fStopPosition) return t.colors[r];if (i < fStopPosition) return fCurrentStop = (i - fLastPosition) / (fStopPosition - fLastPosition), o(t.RGBcolors[r - 1], t.RGBcolors[r], fCurrentStop);
      }return t.colors[t.colors.length - 1];
    }function o(e, t, n) {
      for (var i, r, o = [], s = 0; s < 3; s++) {
        o[s] = e[s] + Math.round((t[s] - e[s]) * n);
      }return i = o, "#" + (r = "0123456789abcdef").charAt(parseInt(i[0] / 16)) + r.charAt(i[0] % 16) + r.charAt(parseInt(i[1] / 16)) + r.charAt(i[1] % 16) + r.charAt(parseInt(i[2] / 16)) + r.charAt(i[2] % 16);
    }
  };
}(jQuery), function (e) {
  "use strict";
  var t,
      n = e("html"),
      i = e(".global-header"),
      r = e(".lv-off-canvas .dropdown"),
      o = e(".lv-page"),
      s = e(".lv-off-canvas"),
      a = e('a[href*="#"]:not([href="#"])', s),
      l = e('<span class="submenu-trigger"><i class="fa fa-angle-right"></i></span>');e("[data-menu-toggle]").click(function (r) {
    e(".has-open-menu").length || (n.removeClass("has-closed-menu").addClass("has-open-menu"), t = setInterval(function () {
      e(".has-open-menu").length ? e(".global-header").css({ top: e(window).scrollTop() + "px" }) : (e(".global-header").removeAttr("style"), clearInterval(t));
    }, 100), setTimeout(function () {
      o.click(function (r) {
        r.stopPropagation(), e(".has-open-menu").length && (i.removeAttr("style"), clearInterval(t), n.removeClass("has-open-menu").addClass("has-closed-menu"), e(this).unbind("click"));
      });
    }, 10));
  }), a.click(function (e) {
    e.preventDefault(), e.stopPropagation(), i.removeAttr("style"), clearInterval(t), n.removeClass("has-open-menu").addClass("has-closed-menu"), o.unbind("click");
  }), l.click(function (t) {
    t.preventDefault(), t.stopPropagation(), e(this).parent().next(".dropdown").addClass("is-open");
  }), r.click(function (t) {
    e(this).removeClass("is-open"), t.stopPropagation();
  }), e(".lv-off-canvas .has-dropdown > a").append(l);
}(jQuery), $(window).on("load", function () {
  $("html").addClass("has-loaded"), pixelGradient();
}), $(function () {
  $('[data-toggle="tooltip"]').tooltip();
}), $(".global-header").headroom((_$$headroom = { offset: 60, tolerance: 0 }, _defineProperty(_$$headroom, "tolerance", { up: 5, down: 0 }), _defineProperty(_$$headroom, "classes", { initial: "headroom", pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom" }), _defineProperty(_$$headroom, "onPin", function onPin() {}), _defineProperty(_$$headroom, "onUnpin", function onUnpin() {}), _defineProperty(_$$headroom, "onTop", function onTop() {}), _defineProperty(_$$headroom, "onNotTop", function onNotTop() {}), _defineProperty(_$$headroom, "onBottom", function onBottom() {}), _defineProperty(_$$headroom, "onNotBottom", function onNotBottom() {}), _$$headroom));
