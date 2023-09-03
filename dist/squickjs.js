import { getCurrentInstance as re, ref as B, openBlock as R, createElementBlock as j, normalizeClass as z, createElementVNode as x, renderSlot as Y, mergeModels as xe, useModel as Ee, watch as W, withDirectives as ce, vModelDynamic as yt, createCommentVNode as Q, vModelText as ht, getCurrentScope as mt, onScopeDispose as gt, unref as T, defineComponent as De, createBlock as Ce, Teleport as wt, createVNode as Re, normalizeProps as Tt, guardReactiveProps as St, withCtx as se, computed as U, useAttrs as kt, inject as Ve, toRef as xt, onMounted as Je, onBeforeUnmount as _e, normalizeStyle as Pe, withKeys as Et, withModifiers as Ae, Transition as qe, mergeProps as Ne, toHandlers as je, vShow as Oe, nextTick as et, reactive as Ke, createTextVNode as We } from "vue";
const Ct = { class: "flex justify-center items-center drop-shadow-[1px_1px_rgba(0,0,0,0.3)]" }, Nt = { class: "flex justify-center items-center drop-shadow-[1px_1px_rgba(0,0,0,0.3)]" }, ia = {
  __name: "squickBadgen",
  props: {
    id: {
      type: String,
      default: null
    },
    TwdColor: {
      type: String,
      default: "lime"
    },
    TwdRoundedLeft: {
      type: String,
      default: "rounded-l"
    },
    TwdRoundedRight: {
      type: String,
      default: "rounded-r"
    }
  },
  setup(e) {
    const t = e, n = re(), a = B(null);
    return a.value = t.id ? t.id : "squick-badgen-" + n.uid, (r, l) => (R(), j("div", {
      class: z(`badgen transition inline-flex flex-nowrap shadow-sm ${e.TwdRoundedLeft} ${e.TwdRoundedRight}`)
    }, [
      x("div", {
        class: z(`px-1.5 py-0.5 select-none bg-gradient-to-b from-gray-500 to-gray-700 text-white text-xs ${e.TwdRoundedLeft}`)
      }, [
        x("span", Ct, [
          Y(r.$slots, "label-left")
        ])
      ], 2),
      x("div", {
        class: z(`px-1.5 py-0.5 select-none bg-gradient-to-b from-${e.TwdColor}-300 to-${e.TwdColor}-500 text-white text-xs ${e.TwdRoundedRight}`)
      }, [
        x("span", Nt, [
          Y(r.$slots, "label-right")
        ])
      ], 2)
    ], 2));
  }
}, Ot = ["id", "name", "title", "type", "disabled"], Ft = {
  __name: "squickButton",
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: "MyButton"
    },
    title: {
      type: String,
      default: "MyButton"
    },
    mode: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    TwdColor: {
      type: String,
      default: "indigo"
    },
    TwdRounded: {
      type: String,
      default: "rounded"
    },
    TwdWidth: {
      type: String,
      default: "w-auto"
    }
  },
  setup(e) {
    const t = e, n = re(), a = B(null);
    return a.value = t.id ? t.id : "squick-button-" + n.uid, (r, l) => (R(), j("button", {
      id: a.value,
      ref_key: "uniqueId",
      ref: a,
      name: e.name,
      title: e.title,
      type: e.mode,
      class: z(`
        transition
        flex justify-center items-center
        px-2.5
        py-1.5
        text-sm
        shadow-sm
        outline-none
        border
        border-gray-300
        bg-white
        bg-gradient-to-b from-white to-gray-100
        hover:bg-none hover:bg-gray-100
        focus:ring-4
        focus:ring-${e.TwdColor}-500/20
        focus:border-${e.TwdColor}-400
        disabled:cursor-not-allowed
        disabled:opacity-75
        disabled:bg-gray-100
        ${e.TwdRounded}
        ${e.TwdWidth}
        `),
      disabled: e.disabled
    }, [
      Y(r.$slots, "default")
    ], 10, Ot));
  }
}, Bt = ["id", "name", "title", "type", "disabled", "required", "readonly", "placeholder"], It = {
  key: 0,
  class: "px-2.5 w-12 text-sm absolute inset-y-0 right-0 flex justify-center items-center"
}, Dt = /* @__PURE__ */ x("path", {
  d: "M3 3l18 18M10.5 10.677a2 2 0 002.823 2.823",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), Rt = /* @__PURE__ */ x("path", {
  d: "M7.362 7.561C5.68 8.74 4.279 10.42 3 12c1.889 2.991 5.282 6 9 6 1.55 0 3.043-.523 4.395-1.35M12 6c4.008 0 6.701 3.158 9 6a15.66 15.66 0 01-1.078 1.5",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), Mt = [
  Dt,
  Rt
], $t = /* @__PURE__ */ x("path", {
  d: "M12 14a2 2 0 100-4 2 2 0 000 4z",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), Lt = /* @__PURE__ */ x("path", {
  d: "M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), Vt = [
  $t,
  Lt
], sa = {
  __name: "squickInput",
  props: xe({
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: "MyInput"
    },
    title: {
      type: String,
      default: "MyInput"
    },
    placeholder: {
      type: String,
      default: "Write something..."
    },
    password: {
      type: Boolean,
      default: !1
    },
    showPassword: {
      type: Boolean,
      default: !1
    },
    generatePassword: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    TwdColor: {
      type: String,
      default: "indigo"
    },
    TwdRounded: {
      type: String,
      default: "rounded"
    },
    TwdWidth: {
      type: String,
      default: "w-auto"
    }
  }, {
    modelValue: { local: !0 }
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = Ee(e, "modelValue", { local: !0 }), a = re(), r = B(null), l = B(t.password ? "password" : "text");
    W(() => t.password, (u, d) => {
      l.value = u ? "password" : "text";
    });
    const o = () => {
      l.value = l.value === "password" ? "text" : "password";
    };
    return r.value = t.id ? t.id : "squick-input-" + a.uid, (u, d) => (R(), j("div", {
      class: z(`relative inline-flex ${e.TwdWidth}`)
    }, [
      ce(x("input", {
        id: r.value,
        name: e.name,
        title: e.title,
        type: l.value,
        class: z(`
            transition
            w-full
            block
            px-2.5
            py-1.5
            text-sm
            shadow-sm
            border
            border-gray-300
            focus:ring-4
            focus:ring-${e.TwdColor}-500/20
            focus:border-${e.TwdColor}-400
            read-only:cursor-not-allowed
            read-only:opacity-75
            disabled:cursor-not-allowed
            disabled:opacity-75
            disabled:bg-gray-100
            placeholder:text-gray-300
            ${e.TwdRounded} ${e.showPassword && e.password ? "pr-12" : ""}`),
        disabled: e.disabled,
        required: e.required,
        readonly: e.readonly,
        placeholder: e.placeholder,
        "onUpdate:modelValue": d[0] || (d[0] = (b) => n.value = b)
      }, null, 10, Bt), [
        [
          yt,
          n.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      e.showPassword && e.password ? (R(), j("div", It, [
        l.value === "password" ? (R(), j("svg", {
          key: 0,
          class: "w-5 h-5 stroke-gray-400 hover:cursor-pointer",
          "stroke-width": "1.5",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          onClick: d[1] || (d[1] = (b) => o())
        }, Mt)) : Q("", !0),
        l.value === "text" ? (R(), j("svg", {
          key: 1,
          class: "w-5 h-5 stroke-gray-400 hover:cursor-pointer",
          "stroke-width": "1.5",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          onClick: d[2] || (d[2] = (b) => o())
        }, Vt)) : Q("", !0)
      ])) : Q("", !0)
    ], 2));
  }
}, Pt = ["id"], At = /* @__PURE__ */ x("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), qt = /* @__PURE__ */ x("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), jt = [
  At,
  qt
], ua = {
  __name: "squickOverlay",
  props: {
    id: {
      type: String,
      default: null
    },
    show: {
      type: Boolean,
      default: !1
    },
    dark: {
      type: Boolean,
      default: !1
    },
    blur: {
      type: Boolean,
      default: !1
    },
    TwdColor: {
      type: String,
      default: "neutral"
    },
    TwdRounded: {
      type: String,
      default: "rounded"
    }
  },
  setup(e) {
    const t = e, n = re(), a = B(null);
    return W(() => t.show, (r, l) => {
      r === !0 && a.value.focus();
    }), a.value = t.id ? t.id : "squick-overlay-" + n.uid, (r, l) => (R(), j("div", {
      id: a.value,
      ref_key: "uniqueId",
      ref: a,
      class: "relative inline-flex h-full",
      tabindex: "0"
    }, [
      Y(r.$slots, "default"),
      e.show ? (R(), j("div", {
        key: 0,
        class: z(`
        absolute
        border
        border-transparent
        flex items-center justify-center
        left-0
        top-0
        w-full
        h-full
        z-40
        bg-${e.dark ? e.TwdColor + "-500" : e.TwdColor + "-100"}/80
                ${e.blur ? "backdrop-blur-sm" : ""}
                ${e.TwdRounded}`)
      }, [
        (R(), j("svg", {
          class: z(`z-50 animate-spin h-5 w-5 ${e.dark ? "text-" + e.TwdColor + "-100" : "text-" + e.TwdColor + "-500"}`),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24"
        }, jt, 2))
      ], 2)) : Q("", !0)
    ], 8, Pt));
  }
}, Kt = ["id", "name", "title", "disabled", "required", "readonly", "placeholder"], da = {
  __name: "squickTextarea",
  props: xe({
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: "MyTextarea"
    },
    title: {
      type: String,
      default: "MyTextarea"
    },
    placeholder: {
      type: String,
      default: "Write something..."
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    TwdColor: {
      type: String,
      default: "indigo"
    },
    TwdRounded: {
      type: String,
      default: "rounded"
    },
    TwdWidth: {
      type: String,
      default: "w-auto"
    }
  }, {
    modelValue: { local: !0 }
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = Ee(e, "modelValue", { local: !0 }), a = re(), r = B(null);
    return r.value = t.id ? t.id : "squick-textarea-" + a.uid, (l, o) => (R(), j("div", {
      class: z(`relative inline-flex ${e.TwdWidth}`)
    }, [
      ce(x("textarea", {
        id: r.value,
        name: e.name,
        title: e.title,
        class: z(`
            transition
            w-full
            block
            px-2.5
            py-1.5
            text-sm
            shadow-sm
            border
            border-gray-300
            focus:ring-4
            focus:ring-${e.TwdColor}-500/20
            focus:border-${e.TwdColor}-400
            read-only:cursor-not-allowed
            read-only:opacity-75
            disabled:cursor-not-allowed
            disabled:opacity-75
            disabled:bg-gray-100
            placeholder:text-gray-300
            ${e.TwdRounded}`),
        disabled: e.disabled,
        required: e.required,
        readonly: e.readonly,
        placeholder: e.placeholder,
        "onUpdate:modelValue": o[0] || (o[0] = (u) => n.value = u)
      }, null, 10, Kt), [
        [
          ht,
          n.value,
          void 0,
          { trim: !0 }
        ]
      ])
    ], 2));
  }
};
function tt(e) {
  return mt() ? (gt(e), !0) : !1;
}
function nt(e) {
  return typeof e == "function" ? e() : T(e);
}
const Wt = typeof window < "u" && typeof document < "u", zt = Object.prototype.toString, Ht = (e) => zt.call(e) === "[object Object]", Ut = () => {
};
function at(e) {
  var t;
  const n = nt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Gt = Wt ? window : void 0;
function ee(...e) {
  let t, n, a, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, a, r] = e, t = Gt) : [t, n, a, r] = e, !t)
    return Ut;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const l = [], o = () => {
    l.forEach((y) => y()), l.length = 0;
  }, u = (y, f, E, h) => (y.addEventListener(f, E, h), () => y.removeEventListener(f, E, h)), d = W(
    () => [at(t), nt(r)],
    ([y, f]) => {
      if (o(), !y)
        return;
      const E = Ht(f) ? { ...f } : f;
      l.push(
        ...n.flatMap((h) => a.map((P) => u(y, h, P, E)))
      );
    },
    { immediate: !0, flush: "post" }
  ), b = () => {
    d(), o();
  };
  return tt(b), b;
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var ot = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], ge = /* @__PURE__ */ ot.join(","), rt = typeof Element > "u", oe = rt ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, we = !rt && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, Te = function e(t, n) {
  var a;
  n === void 0 && (n = !0);
  var r = t == null || (a = t.getAttribute) === null || a === void 0 ? void 0 : a.call(t, "inert"), l = r === "" || r === "true", o = l || n && t && e(t.parentNode);
  return o;
}, Yt = function(t) {
  var n, a = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return a === "" || a === "true";
}, lt = function(t, n, a) {
  if (Te(t))
    return [];
  var r = Array.prototype.slice.apply(t.querySelectorAll(ge));
  return n && oe.call(t, ge) && r.unshift(t), r = r.filter(a), r;
}, it = function e(t, n, a) {
  for (var r = [], l = Array.from(t); l.length; ) {
    var o = l.shift();
    if (!Te(o, !1))
      if (o.tagName === "SLOT") {
        var u = o.assignedElements(), d = u.length ? u : o.children, b = e(d, !0, a);
        a.flatten ? r.push.apply(r, b) : r.push({
          scopeParent: o,
          candidates: b
        });
      } else {
        var y = oe.call(o, ge);
        y && a.filter(o) && (n || !t.includes(o)) && r.push(o);
        var f = o.shadowRoot || // check for an undisclosed shadow
        typeof a.getShadowRoot == "function" && a.getShadowRoot(o), E = !Te(f, !1) && (!a.shadowRootFilter || a.shadowRootFilter(o));
        if (f && E) {
          var h = e(f === !0 ? o.children : f.children, !0, a);
          a.flatten ? r.push.apply(r, h) : r.push({
            scopeParent: o,
            candidates: h
          });
        } else
          l.unshift.apply(l, o.children);
      }
  }
  return r;
}, st = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, ae = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Yt(t)) && !st(t) ? 0 : t.tabIndex;
}, Xt = function(t, n) {
  var a = ae(t);
  return a < 0 && n && !st(t) ? 0 : a;
}, Zt = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, ut = function(t) {
  return t.tagName === "INPUT";
}, Qt = function(t) {
  return ut(t) && t.type === "hidden";
}, Jt = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(a) {
    return a.tagName === "SUMMARY";
  });
  return n;
}, _t = function(t, n) {
  for (var a = 0; a < t.length; a++)
    if (t[a].checked && t[a].form === n)
      return t[a];
}, en = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || we(t), a = function(u) {
    return n.querySelectorAll('input[type="radio"][name="' + u + '"]');
  }, r;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    r = a(window.CSS.escape(t.name));
  else
    try {
      r = a(t.name);
    } catch (o) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message), !1;
    }
  var l = _t(r, t.form);
  return !l || l === t;
}, tn = function(t) {
  return ut(t) && t.type === "radio";
}, nn = function(t) {
  return tn(t) && !en(t);
}, an = function(t) {
  var n, a = t && we(t), r = (n = a) === null || n === void 0 ? void 0 : n.host, l = !1;
  if (a && a !== t) {
    var o, u, d;
    for (l = !!((o = r) !== null && o !== void 0 && (u = o.ownerDocument) !== null && u !== void 0 && u.contains(r) || t != null && (d = t.ownerDocument) !== null && d !== void 0 && d.contains(t)); !l && r; ) {
      var b, y, f;
      a = we(r), r = (b = a) === null || b === void 0 ? void 0 : b.host, l = !!((y = r) !== null && y !== void 0 && (f = y.ownerDocument) !== null && f !== void 0 && f.contains(r));
    }
  }
  return l;
}, ze = function(t) {
  var n = t.getBoundingClientRect(), a = n.width, r = n.height;
  return a === 0 && r === 0;
}, on = function(t, n) {
  var a = n.displayCheck, r = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var l = oe.call(t, "details>summary:first-of-type"), o = l ? t.parentElement : t;
  if (oe.call(o, "details:not([open]) *"))
    return !0;
  if (!a || a === "full" || a === "legacy-full") {
    if (typeof r == "function") {
      for (var u = t; t; ) {
        var d = t.parentElement, b = we(t);
        if (d && !d.shadowRoot && r(d) === !0)
          return ze(t);
        t.assignedSlot ? t = t.assignedSlot : !d && b !== t.ownerDocument ? t = b.host : t = d;
      }
      t = u;
    }
    if (an(t))
      return !t.getClientRects().length;
    if (a !== "legacy-full")
      return !0;
  } else if (a === "non-zero-area")
    return ze(t);
  return !1;
}, rn = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var a = 0; a < n.children.length; a++) {
          var r = n.children.item(a);
          if (r.tagName === "LEGEND")
            return oe.call(n, "fieldset[disabled] *") ? !0 : !r.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Se = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  Te(n) || Qt(n) || on(n, t) || // For a details element with a summary, the summary element gets the focus
  Jt(n) || rn(n));
}, Ie = function(t, n) {
  return !(nn(n) || ae(n) < 0 || !Se(t, n));
}, ln = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, sn = function e(t) {
  var n = [], a = [];
  return t.forEach(function(r, l) {
    var o = !!r.scopeParent, u = o ? r.scopeParent : r, d = Xt(u, o), b = o ? e(r.candidates) : u;
    d === 0 ? o ? n.push.apply(n, b) : n.push(u) : a.push({
      documentOrder: l,
      tabIndex: d,
      item: r,
      isScope: o,
      content: b
    });
  }), a.sort(Zt).reduce(function(r, l) {
    return l.isScope ? r.push.apply(r, l.content) : r.push(l.content), r;
  }, []).concat(n);
}, un = function(t, n) {
  n = n || {};
  var a;
  return n.getShadowRoot ? a = it([t], n.includeContainer, {
    filter: Ie.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: ln
  }) : a = lt(t, n.includeContainer, Ie.bind(null, n)), sn(a);
}, dn = function(t, n) {
  n = n || {};
  var a;
  return n.getShadowRoot ? a = it([t], n.includeContainer, {
    filter: Se.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : a = lt(t, n.includeContainer, Se.bind(null, n)), a;
}, ie = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return oe.call(t, ge) === !1 ? !1 : Ie(n, t);
}, cn = /* @__PURE__ */ ot.concat("iframe").join(","), Fe = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return oe.call(t, cn) === !1 ? !1 : Se(n, t);
};
/*!
* focus-trap 7.5.2
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function He(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? He(Object(n), !0).forEach(function(a) {
      fn(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : He(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function fn(e, t, n) {
  return t = bn(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function vn(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t || "default");
    if (typeof a != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bn(e) {
  var t = vn(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var Ge = {
  activateTrap: function(t, n) {
    if (t.length > 0) {
      var a = t[t.length - 1];
      a !== n && a.pause();
    }
    var r = t.indexOf(n);
    r === -1 || t.splice(r, 1), t.push(n);
  },
  deactivateTrap: function(t, n) {
    var a = t.indexOf(n);
    a !== -1 && t.splice(a, 1), t.length > 0 && t[t.length - 1].unpause();
  }
}, pn = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, yn = function(t) {
  return (t == null ? void 0 : t.key) === "Escape" || (t == null ? void 0 : t.key) === "Esc" || (t == null ? void 0 : t.keyCode) === 27;
}, fe = function(t) {
  return (t == null ? void 0 : t.key) === "Tab" || (t == null ? void 0 : t.keyCode) === 9;
}, hn = function(t) {
  return fe(t) && !t.shiftKey;
}, mn = function(t) {
  return fe(t) && t.shiftKey;
}, Ye = function(t) {
  return setTimeout(t, 0);
}, Xe = function(t, n) {
  var a = -1;
  return t.every(function(r, l) {
    return n(r) ? (a = l, !1) : !0;
  }), a;
}, ue = function(t) {
  for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    a[r - 1] = arguments[r];
  return typeof t == "function" ? t.apply(void 0, a) : t;
}, ye = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, gn = [], wn = function(t, n) {
  var a = (n == null ? void 0 : n.document) || document, r = (n == null ? void 0 : n.trapStack) || gn, l = Ue({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: hn,
    isKeyBackward: mn
  }, n), o = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, u, d = function(i, s, c) {
    return i && i[s] !== void 0 ? i[s] : l[c || s];
  }, b = function(i, s) {
    var c = typeof (s == null ? void 0 : s.composedPath) == "function" ? s.composedPath() : void 0;
    return o.containerGroups.findIndex(function(m) {
      var g = m.container, C = m.tabbableNodes;
      return g.contains(i) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (c == null ? void 0 : c.includes(g)) || C.find(function(I) {
        return I === i;
      });
    });
  }, y = function(i) {
    var s = l[i];
    if (typeof s == "function") {
      for (var c = arguments.length, m = new Array(c > 1 ? c - 1 : 0), g = 1; g < c; g++)
        m[g - 1] = arguments[g];
      s = s.apply(void 0, m);
    }
    if (s === !0 && (s = void 0), !s) {
      if (s === void 0 || s === !1)
        return s;
      throw new Error("`".concat(i, "` was specified but was not a node, or did not return a node"));
    }
    var C = s;
    if (typeof s == "string" && (C = a.querySelector(s), !C))
      throw new Error("`".concat(i, "` as selector refers to no known node"));
    return C;
  }, f = function() {
    var i = y("initialFocus");
    if (i === !1)
      return !1;
    if (i === void 0 || !Fe(i, l.tabbableOptions))
      if (b(a.activeElement) >= 0)
        i = a.activeElement;
      else {
        var s = o.tabbableGroups[0], c = s && s.firstTabbableNode;
        i = c || y("fallbackFocus");
      }
    if (!i)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return i;
  }, E = function() {
    if (o.containerGroups = o.containers.map(function(i) {
      var s = un(i, l.tabbableOptions), c = dn(i, l.tabbableOptions), m = s.length > 0 ? s[0] : void 0, g = s.length > 0 ? s[s.length - 1] : void 0, C = c.find(function(V) {
        return ie(V);
      }), I = c.slice().reverse().find(function(V) {
        return ie(V);
      }), L = !!s.find(function(V) {
        return ae(V) > 0;
      });
      return {
        container: i,
        tabbableNodes: s,
        focusableNodes: c,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: L,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: m,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: g,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: C,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: I,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(J) {
          var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, G = s.indexOf(J);
          return G < 0 ? _ ? c.slice(c.indexOf(J) + 1).find(function(K) {
            return ie(K);
          }) : c.slice(0, c.indexOf(J)).reverse().find(function(K) {
            return ie(K);
          }) : s[G + (_ ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(i) {
      return i.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !y("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function(i) {
      return i.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, h = function k(i) {
    if (i !== !1 && i !== a.activeElement) {
      if (!i || !i.focus) {
        k(f());
        return;
      }
      i.focus({
        preventScroll: !!l.preventScroll
      }), o.mostRecentlyFocusedNode = i, pn(i) && i.select();
    }
  }, P = function(i) {
    var s = y("setReturnFocus", i);
    return s || (s === !1 ? !1 : i);
  }, H = function(i) {
    var s = i.target, c = i.event, m = i.isBackward, g = m === void 0 ? !1 : m;
    s = s || ye(c), E();
    var C = null;
    if (o.tabbableGroups.length > 0) {
      var I = b(s, c), L = I >= 0 ? o.containerGroups[I] : void 0;
      if (I < 0)
        g ? C = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : C = o.tabbableGroups[0].firstTabbableNode;
      else if (g) {
        var V = Xe(o.tabbableGroups, function(ne) {
          var le = ne.firstTabbableNode;
          return s === le;
        });
        if (V < 0 && (L.container === s || Fe(s, l.tabbableOptions) && !ie(s, l.tabbableOptions) && !L.nextTabbableNode(s, !1)) && (V = I), V >= 0) {
          var J = V === 0 ? o.tabbableGroups.length - 1 : V - 1, _ = o.tabbableGroups[J];
          C = ae(s) >= 0 ? _.lastTabbableNode : _.lastDomTabbableNode;
        } else
          fe(c) || (C = L.nextTabbableNode(s, !1));
      } else {
        var G = Xe(o.tabbableGroups, function(ne) {
          var le = ne.lastTabbableNode;
          return s === le;
        });
        if (G < 0 && (L.container === s || Fe(s, l.tabbableOptions) && !ie(s, l.tabbableOptions) && !L.nextTabbableNode(s)) && (G = I), G >= 0) {
          var K = G === o.tabbableGroups.length - 1 ? 0 : G + 1, pe = o.tabbableGroups[K];
          C = ae(s) >= 0 ? pe.firstTabbableNode : pe.firstDomTabbableNode;
        } else
          fe(c) || (C = L.nextTabbableNode(s));
      }
    } else
      C = y("fallbackFocus");
    return C;
  }, M = function(i) {
    var s = ye(i);
    if (!(b(s, i) >= 0)) {
      if (ue(l.clickOutsideDeactivates, i)) {
        u.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: l.returnFocusOnDeactivate
        });
        return;
      }
      ue(l.allowOutsideClick, i) || i.preventDefault();
    }
  }, D = function(i) {
    var s = ye(i), c = b(s, i) >= 0;
    if (c || s instanceof Document)
      c && (o.mostRecentlyFocusedNode = s);
    else {
      i.stopImmediatePropagation();
      var m, g = !0;
      if (o.mostRecentlyFocusedNode)
        if (ae(o.mostRecentlyFocusedNode) > 0) {
          var C = b(o.mostRecentlyFocusedNode), I = o.containerGroups[C].tabbableNodes;
          if (I.length > 0) {
            var L = I.findIndex(function(V) {
              return V === o.mostRecentlyFocusedNode;
            });
            L >= 0 && (l.isKeyForward(o.recentNavEvent) ? L + 1 < I.length && (m = I[L + 1], g = !1) : L - 1 >= 0 && (m = I[L - 1], g = !1));
          }
        } else
          o.containerGroups.some(function(V) {
            return V.tabbableNodes.some(function(J) {
              return ae(J) > 0;
            });
          }) || (g = !1);
      else
        g = !1;
      g && (m = H({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: l.isKeyBackward(o.recentNavEvent)
      })), h(m || o.mostRecentlyFocusedNode || f());
    }
    o.recentNavEvent = void 0;
  }, $ = function(i) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = i;
    var c = H({
      event: i,
      isBackward: s
    });
    c && (fe(i) && i.preventDefault(), h(c));
  }, A = function(i) {
    if (yn(i) && ue(l.escapeDeactivates, i) !== !1) {
      i.preventDefault(), u.deactivate();
      return;
    }
    (l.isKeyForward(i) || l.isKeyBackward(i)) && $(i, l.isKeyBackward(i));
  }, X = function(i) {
    var s = ye(i);
    b(s, i) >= 0 || ue(l.clickOutsideDeactivates, i) || ue(l.allowOutsideClick, i) || (i.preventDefault(), i.stopImmediatePropagation());
  }, v = function() {
    if (o.active)
      return Ge.activateTrap(r, u), o.delayInitialFocusTimer = l.delayInitialFocus ? Ye(function() {
        h(f());
      }) : h(f()), a.addEventListener("focusin", D, !0), a.addEventListener("mousedown", M, {
        capture: !0,
        passive: !1
      }), a.addEventListener("touchstart", M, {
        capture: !0,
        passive: !1
      }), a.addEventListener("click", X, {
        capture: !0,
        passive: !1
      }), a.addEventListener("keydown", A, {
        capture: !0,
        passive: !1
      }), u;
  }, S = function() {
    if (o.active)
      return a.removeEventListener("focusin", D, !0), a.removeEventListener("mousedown", M, !0), a.removeEventListener("touchstart", M, !0), a.removeEventListener("click", X, !0), a.removeEventListener("keydown", A, !0), u;
  }, p = function(i) {
    var s = i.some(function(c) {
      var m = Array.from(c.removedNodes);
      return m.some(function(g) {
        return g === o.mostRecentlyFocusedNode;
      });
    });
    s && h(f());
  }, N = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(p) : void 0, O = function() {
    N && (N.disconnect(), o.active && !o.paused && o.containers.map(function(i) {
      N.observe(i, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return u = {
    get active() {
      return o.active;
    },
    get paused() {
      return o.paused;
    },
    activate: function(i) {
      if (o.active)
        return this;
      var s = d(i, "onActivate"), c = d(i, "onPostActivate"), m = d(i, "checkCanFocusTrap");
      m || E(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = a.activeElement, s == null || s();
      var g = function() {
        m && E(), v(), O(), c == null || c();
      };
      return m ? (m(o.containers.concat()).then(g, g), this) : (g(), this);
    },
    deactivate: function(i) {
      if (!o.active)
        return this;
      var s = Ue({
        onDeactivate: l.onDeactivate,
        onPostDeactivate: l.onPostDeactivate,
        checkCanReturnFocus: l.checkCanReturnFocus
      }, i);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, S(), o.active = !1, o.paused = !1, O(), Ge.deactivateTrap(r, u);
      var c = d(s, "onDeactivate"), m = d(s, "onPostDeactivate"), g = d(s, "checkCanReturnFocus"), C = d(s, "returnFocus", "returnFocusOnDeactivate");
      c == null || c();
      var I = function() {
        Ye(function() {
          C && h(P(o.nodeFocusedBeforeActivation)), m == null || m();
        });
      };
      return C && g ? (g(P(o.nodeFocusedBeforeActivation)).then(I, I), this) : (I(), this);
    },
    pause: function(i) {
      if (o.paused || !o.active)
        return this;
      var s = d(i, "onPause"), c = d(i, "onPostPause");
      return o.paused = !0, s == null || s(), S(), O(), c == null || c(), this;
    },
    unpause: function(i) {
      if (!o.paused || !o.active)
        return this;
      var s = d(i, "onUnpause"), c = d(i, "onPostUnpause");
      return o.paused = !1, s == null || s(), E(), v(), O(), c == null || c(), this;
    },
    updateContainerElements: function(i) {
      var s = [].concat(i).filter(Boolean);
      return o.containers = s.map(function(c) {
        return typeof c == "string" ? a.querySelector(c) : c;
      }), o.active && E(), O(), this;
    }
  }, u.updateContainerElements(t), u;
};
function Tn(e, t = {}) {
  let n;
  const { immediate: a, ...r } = t, l = B(!1), o = B(!1), u = (f) => n && n.activate(f), d = (f) => n && n.deactivate(f), b = () => {
    n && (n.pause(), o.value = !0);
  }, y = () => {
    n && (n.unpause(), o.value = !1);
  };
  return W(
    () => at(e),
    (f) => {
      f && (n = wn(f, {
        ...r,
        onActivate() {
          l.value = !0, t.onActivate && t.onActivate();
        },
        onDeactivate() {
          l.value = !1, t.onDeactivate && t.onDeactivate();
        }
      }), a && u());
    },
    { flush: "post" }
  ), tt(() => d()), {
    hasFocus: l,
    isPaused: o,
    activate: u,
    deactivate: d,
    pause: b,
    unpause: y
  };
}
const Sn = (e) => (...t) => {
  e && (e == null || e(...t), e = null);
}, Z = () => {
};
function he(e, t, n) {
  return e > n ? n : e < t ? t : e;
}
const Me = {
  /**
   * @description An uniq name for the open/close a modal via vfm.open/vfm.close APIs.
   * @default `undefined`
   * @example Symbol: `Symbol('MyModal')`
   * @example String: `'AUniqString'`
   * @example Number: `300`
   */
  modalId: {
    type: [String, Number, Symbol],
    default: void 0
  },
  /**
   * @description Display the modal or not.
   * @default `undefined`
   * @example
   * ```js
   * const showModal = ref(false)
   * v-model="showModal"
   * ```
   */
  modelValue: {
    type: Boolean,
    default: void 0
  },
  /**
   * @description Render the modal via `if` or `show`.
   * @default `'if'`
   * @example
   * ```js
   * displayDirective: 'if'
   * ```
   * @example
   * ```js
   * displayDirective: 'show'
   * ```
   */
  displayDirective: {
    type: String,
    default: "if",
    validator: (e) => ["if", "show", "visible"].includes(e)
  },
  /**
   * @description Hide the overlay or not.
   * @default `undefined`
   * @example
   * ```js
   * hideOverlay="true"
   * ```
   */
  hideOverlay: {
    type: Boolean,
    default: void 0
  },
  /**
   * @description Customize the overlay transition.
   * @default `undefined`
   */
  overlayTransition: {
    type: [String, Object],
    default: void 0
  },
  /**
   * @description Customize the content transition.
   * @default `undefined`
   */
  contentTransition: {
    type: [String, Object],
    default: void 0
  },
  /**
   * @description Bind class to vfm__overlay.
   * @default `undefined`
   */
  overlayClass: {
    type: void 0,
    default: void 0
  },
  /**
   * @description Bind class to vfm__content.
   * @default `undefined`
   */
  contentClass: {
    type: void 0,
    default: void 0
  },
  /**
   * @description Bind style to vfm__overlay.
   * @default `undefined`
   */
  overlayStyle: {
    type: [String, Object, Array],
    default: void 0
  },
  /**
   * @description Bind style to vfm__content.
   * @default `undefined`
   */
  contentStyle: {
    type: [String, Object, Array],
    default: void 0
  },
  /**
   * @description Is it allow to close the modal by clicking the overlay.
   * @default `true`
   */
  clickToClose: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Is it allow to close the modal by keypress `esc`.
   * @default `true`
   */
  escToClose: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Is it allow to click outside of the vfm__content when the modal is opened
   * @default `'non-interactive'`
   */
  background: {
    type: String,
    default: "non-interactive",
    validator: (e) => ["interactive", "non-interactive"].includes(e)
  },
  /**
   * @description
   * * Use `{ disabled: true }` to disable the focusTrap.
   * * Checkout the createOptions type here https://github.com/focus-trap/focus-trap for more.
   * @default `{ allowOutsideClick: true }`
   */
  focusTrap: {
    type: [Boolean, Object],
    default: () => ({
      allowOutsideClick: !0
    })
  },
  /**
   * @description Lock body scroll or not when the modal is opened.
   * @default `true`
   */
  lockScroll: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Creates a padding-right when scroll is locked to prevent the page from jumping
   * @default `true`
   */
  reserveScrollBarGap: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Define how to increase the zIndex when there are nested modals
   * @default `({ index }) => 1000 + 2 * index`
   */
  zIndexFn: {
    type: Function,
    default: ({ index: e }) => 1e3 + 2 * e
  },
  /**
   * @description The direction of swiping to close the modal
   * @default `none`
   * @example
   * Set swipeToClose="none" to disable swiping to close
   * ```js
   * swipeToClose="none"
   * ```
   */
  swipeToClose: {
    type: String,
    default: "none",
    validator: (e) => ["none", "up", "right", "down", "left"].includes(e)
  },
  /**
   * @description Threshold for swipe to close
   * @default `0`
   */
  threshold: {
    type: Number,
    default: 0
  },
  /**
   * @description If set `:showSwipeBanner="true"`, only allow clicking `swipe-banner` slot to swipe to close
   * @default `undefined`
   * @example
   * ```js
   * swipeToClose="right"
   * :showSwipeBanner="true"
   * ```
   * ```html
   * <VueFinalModal
   *   ...
   *   swipeToClose="right"
   *   :showSwipeBanner="true"
   * >
   *   <template #swipe-banner>
   *     <div style="position: absolute; height: 100%; top: 0; left: 0; width: 10px;" />
   *   </template>
   *   ...modal content
   * </VueFinalModal>
   * ```
   */
  showSwipeBanner: {
    type: Boolean,
    default: void 0
  },
  /**
   * @description When set `:preventNavigationGestures="true"`, there will be two invisible bars for prevent navigation gestures including swiping back/forward on mobile webkit. For example: Safari mobile.
   * @default `undefined`
   * @example
   * Set preventNavigationGestures="true" to prevent Safari navigation gestures including swiping back/forward.
   * ```js
   * :preventNavigationGestures="true"
   * ```
   */
  preventNavigationGestures: {
    type: Boolean,
    default: void 0
  }
};
function Ze(e = !1) {
  const t = B(e), n = B(t.value ? 0 : void 0);
  return [t, n, {
    beforeEnter() {
      n.value = 1;
    },
    afterEnter() {
      n.value = 0;
    },
    beforeLeave() {
      n.value = 3;
    },
    afterLeave() {
      n.value = 2;
    }
  }];
}
function kn(e, t) {
  const { modelValueLocal: n, onEntering: a, onEnter: r, onLeaving: l, onLeave: o } = t, u = B(n.value), [d, b, y] = Ze(u.value), [f, E, h] = Ze(u.value), P = U(() => typeof e.contentTransition == "string" ? { name: e.contentTransition } : { ...e.contentTransition }), H = U(() => typeof e.overlayTransition == "string" ? { name: e.overlayTransition } : { ...e.overlayTransition }), M = U(
    () => (e.hideOverlay || E.value === 2) && b.value === 2
    /* Leave */
  );
  W(
    M,
    (A) => {
      A && (u.value = !1);
    }
  ), W(b, (A) => {
    if (A === 1) {
      if (!u.value)
        return;
      a == null || a();
    } else if (A === 0) {
      if (!u.value)
        return;
      r == null || r();
    } else
      A === 3 ? l == null || l() : A === 2 && (o == null || o());
  });
  async function D() {
    u.value = !0, await et(), d.value = !0, f.value = !0;
  }
  function $() {
    d.value = !1, f.value = !1;
  }
  return {
    visible: u,
    contentVisible: d,
    contentListeners: y,
    contentTransition: P,
    overlayVisible: f,
    overlayListeners: h,
    overlayTransition: H,
    enterTransition: D,
    leaveTransition: $
  };
}
function xn(e, t, n) {
  const { vfmRootEl: a, vfmContentEl: r, visible: l, modelValueLocal: o } = n, u = B();
  function d() {
    l.value && e.escToClose && (o.value = !1);
  }
  function b(f) {
    u.value = f == null ? void 0 : f.target;
  }
  function y() {
    var f;
    u.value === a.value && (e.clickToClose ? o.value = !1 : ((f = r.value) == null || f.focus(), t("clickOutside")));
  }
  return {
    onEsc: d,
    onMouseupRoot: y,
    onMousedown: b
  };
}
function En(e, t) {
  const n = B(!!e.modelValue);
  return W(() => e.modelValue, (a) => {
    n.value = !!a;
  }), W(n, (a) => {
    a !== e.modelValue && t("update:modelValue", a);
  }), {
    modelValueLocal: n
  };
}
function Cn(e, t) {
  if (e.focusTrap === !1)
    return {
      focus() {
      },
      blur() {
      }
    };
  const { focusEl: n } = t, { hasFocus: a, activate: r, deactivate: l } = Tn(n, e.focusTrap);
  function o() {
    requestAnimationFrame(() => {
      r();
    });
  }
  function u() {
    a.value && l();
  }
  return { focus: o, blur: u };
}
let $e = !1;
if (typeof window < "u") {
  const e = {
    get passive() {
      $e = !0;
    }
  };
  window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
}
const dt = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
let te = [], ke = !1, me = 0, ct = -1, ve, be;
const Nn = (e) => {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const t = window.getComputedStyle(e);
  return ["auto", "scroll"].includes(t.overflowY) && e.scrollHeight > e.clientHeight;
}, On = (e, t) => !(e.scrollTop === 0 && t < 0 || e.scrollTop + e.clientHeight + t >= e.scrollHeight && t > 0), Fn = (e) => {
  const t = [];
  for (; e; ) {
    if (t.push(e), e.classList.contains("vfm"))
      return t;
    e = e.parentElement;
  }
  return t;
}, Bn = (e, t) => {
  let n = !1;
  return Fn(e).forEach((a) => {
    Nn(a) && On(a, t) && (n = !0);
  }), n;
}, ft = (e) => te.some(() => Bn(e, -me)), Le = (e) => {
  const t = e || window.event;
  return ft(t.target) || t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
}, In = (e) => {
  if (be === void 0) {
    const t = !!e && e.reserveScrollBarGap === !0, n = window.innerWidth - document.documentElement.clientWidth;
    if (t && n > 0) {
      const a = parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
      be = document.body.style.paddingRight, document.body.style.paddingRight = `${a + n}px`;
    }
  }
  ve === void 0 && (ve = document.body.style.overflow, document.body.style.overflow = "hidden");
}, Dn = () => {
  be !== void 0 && (document.body.style.paddingRight = be, be = void 0), ve !== void 0 && (document.body.style.overflow = ve, ve = void 0);
}, Rn = (e) => e ? e.scrollHeight - e.scrollTop <= e.clientHeight : !1, Mn = (e, t) => (me = e.targetTouches[0].clientY - ct, ft(e.target) ? !1 : t && t.scrollTop === 0 && me > 0 || Rn(t) && me < 0 ? Le(e) : (e.stopPropagation(), !0)), $n = (e, t) => {
  if (!e) {
    console.error(
      "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
    );
    return;
  }
  if (te.some((a) => a.targetElement === e))
    return;
  const n = {
    targetElement: e,
    options: t || {}
  };
  te = [...te, n], dt ? (e.ontouchstart = (a) => {
    a.targetTouches.length === 1 && (ct = a.targetTouches[0].clientY);
  }, e.ontouchmove = (a) => {
    a.targetTouches.length === 1 && Mn(a, e);
  }, ke || (document.addEventListener("touchmove", Le, $e ? { passive: !1 } : void 0), ke = !0)) : In(t);
}, Ln = (e) => {
  if (!e) {
    console.error(
      "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
    );
    return;
  }
  te = te.filter((t) => t.targetElement !== e), dt ? (e.ontouchstart = null, e.ontouchmove = null, ke && te.length === 0 && (document.removeEventListener("touchmove", Le, $e ? { passive: !1 } : void 0), ke = !1)) : te.length || Dn();
};
function Vn(e, t) {
  const { lockScrollEl: n, modelValueLocal: a } = t;
  let r;
  W(n, (u) => {
    u && (r = u);
  }, { immediate: !0 }), W(() => e.lockScroll, (u) => {
    u ? o() : l();
  }), _e(() => {
    l();
  });
  function l() {
    r && Ln(r);
  }
  function o() {
    a.value && e.lockScroll && r && $n(r, {
      reserveScrollBarGap: e.reserveScrollBarGap,
      allowTouchMove: (u) => {
        for (; u && u !== document.body; ) {
          if (u.getAttribute("vfm-scroll-lock-ignore") !== null)
            return !0;
          u = u.parentElement;
        }
        return !1;
      }
    });
  }
  return {
    enableBodyScroll: l,
    disableBodyScroll: o
  };
}
function Pn(e) {
  function t(n) {
    switch (n) {
      case "beforeOpen":
        e(n);
        break;
      case "beforeClose":
        e(n);
        break;
      case "opened":
        e(n);
        break;
      case "closed":
        e(n);
        break;
    }
  }
  return {
    emitEvent: t
  };
}
function An(e) {
  const t = B();
  function n(r) {
    var l;
    t.value = (l = e.zIndexFn) == null ? void 0 : l.call(e, { index: r <= -1 ? 0 : r });
  }
  function a() {
    t.value = void 0;
  }
  return {
    zIndex: t,
    refreshZIndex: n,
    resetZIndex: a
  };
}
const Be = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vov = e.style.visibility === "hidden" ? "" : e.style.visibility, n && t ? n.beforeEnter(e) : de(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: a }) {
    !t != !n && (a ? t ? (a.beforeEnter(e), de(e, !0), a.enter(e)) : a.leave(e, () => {
      de(e, !1);
    }) : de(e, t));
  },
  beforeUnmount(e, { value: t }) {
    de(e, t);
  }
};
function de(e, t) {
  e.style.visibility = t ? e._vov : "hidden";
}
const Qe = (e) => {
  if (e instanceof MouseEvent) {
    const { clientX: t, clientY: n } = e;
    return { x: t, y: n };
  } else {
    const { clientX: t, clientY: n } = e.targetTouches[0];
    return { x: t, y: n };
  }
};
function qn(e) {
  if (!e)
    return !1;
  let t = !1;
  const n = {
    get passive() {
      return t = !0, !1;
    }
  };
  return e.addEventListener("x", Z, n), e.removeEventListener("x", Z), t;
}
function jn(e, {
  threshold: t = 0,
  onSwipeStart: n,
  onSwipe: a,
  onSwipeEnd: r,
  passive: l = !0
}) {
  const o = Ke({ x: 0, y: 0 }), u = Ke({ x: 0, y: 0 }), d = U(() => o.x - u.x), b = U(() => o.y - u.y), { max: y, abs: f } = Math, E = U(
    () => y(f(d.value), f(b.value)) >= t
  ), h = B(!1), P = U(() => E.value ? f(d.value) > f(b.value) ? d.value > 0 ? "left" : "right" : b.value > 0 ? "up" : "down" : "none"), H = (p, N) => {
    o.x = p, o.y = N;
  }, M = (p, N) => {
    u.x = p, u.y = N;
  };
  let D, $;
  function A(p) {
    D.capture && !D.passive && p.preventDefault();
    const { x: N, y: O } = Qe(p);
    H(N, O), M(N, O), n == null || n(p), $ = [
      ee(e, "mousemove", X, D),
      ee(e, "touchmove", X, D),
      ee(e, "mouseup", v, D),
      ee(e, "touchend", v, D),
      ee(e, "touchcancel", v, D)
    ];
  }
  function X(p) {
    const { x: N, y: O } = Qe(p);
    M(N, O), !h.value && E.value && (h.value = !0), h.value && (a == null || a(p));
  }
  function v(p) {
    h.value && (r == null || r(p, P.value)), h.value = !1, $.forEach((N) => N());
  }
  let S = [];
  return Je(() => {
    const p = qn(window == null ? void 0 : window.document);
    l ? D = p ? { passive: !0 } : { capture: !1 } : D = p ? { passive: !1, capture: !0 } : { capture: !0 }, S = [
      ee(e, "mousedown", A, D),
      ee(e, "touchstart", A, D)
    ];
  }), {
    isSwiping: h,
    direction: P,
    coordsStart: o,
    coordsEnd: u,
    lengthX: d,
    lengthY: b,
    stop: () => {
      S.forEach((p) => p()), $.forEach((p) => p());
    }
  };
}
function Kn(e, t) {
  const { vfmContentEl: n, modelValueLocal: a } = t, r = 0.1, l = 300, o = B(), u = U(() => {
    if (!(e.swipeToClose === void 0 || e.swipeToClose === "none"))
      return e.showSwipeBanner ? o.value : n.value;
  }), d = B(0), b = B(!0);
  let y = Z, f = !0, E, h = !1;
  const { lengthX: P, lengthY: H, direction: M, isSwiping: D } = jn(u, {
    threshold: e.threshold,
    onSwipeStart(v) {
      y = ee(document, "selectionchange", () => {
        var S;
        b.value = (S = window.getSelection()) == null ? void 0 : S.isCollapsed;
      }), E = (/* @__PURE__ */ new Date()).getTime(), h = X(v == null ? void 0 : v.target);
    },
    onSwipe() {
      var v, S, p, N;
      if (h && b.value && M.value === e.swipeToClose) {
        if (M.value === "up") {
          const O = he(Math.abs(H.value || 0), 0, ((v = u.value) == null ? void 0 : v.offsetHeight) || 0) - (e.threshold || 0);
          d.value = O;
        } else if (M.value === "down") {
          const O = he(Math.abs(H.value || 0), 0, ((S = u.value) == null ? void 0 : S.offsetHeight) || 0) - (e.threshold || 0);
          d.value = -O;
        } else if (M.value === "right") {
          const O = he(Math.abs(P.value || 0), 0, ((p = u.value) == null ? void 0 : p.offsetWidth) || 0) - (e.threshold || 0);
          d.value = -O;
        } else if (M.value === "left") {
          const O = he(Math.abs(P.value || 0), 0, ((N = u.value) == null ? void 0 : N.offsetWidth) || 0) - (e.threshold || 0);
          d.value = O;
        }
      }
    },
    onSwipeEnd(v, S) {
      if (y(), !b.value) {
        b.value = !0;
        return;
      }
      const p = (/* @__PURE__ */ new Date()).getTime(), N = S === e.swipeToClose, O = (() => {
        var i, s;
        if (S === "up" || S === "down")
          return Math.abs((H == null ? void 0 : H.value) || 0) > r * (((i = u.value) == null ? void 0 : i.offsetHeight) || 0);
        if (S === "left" || S === "right")
          return Math.abs((P == null ? void 0 : P.value) || 0) > r * (((s = u.value) == null ? void 0 : s.offsetWidth) || 0);
      })(), k = p - E <= l;
      if (f && h && N && (O || k)) {
        a.value = !1;
        return;
      }
      d.value = 0;
    }
  }), $ = U(() => {
    if (e.swipeToClose === "none")
      return;
    const v = (() => {
      switch (e.swipeToClose) {
        case "up":
        case "down":
          return "translateY";
        case "left":
        case "right":
          return "translateX";
      }
    })();
    return {
      class: { "vfm-bounce-back": !D.value },
      style: { transform: `${v}(${-d.value}px)` }
    };
  });
  W(
    () => b.value,
    (v) => {
      v || (d.value = 0);
    }
  ), W(
    () => a.value,
    (v) => {
      v && (d.value = 0);
    }
  ), W(
    () => d.value,
    (v, S) => {
      switch (e.swipeToClose) {
        case "down":
        case "right":
          f = v < S;
          break;
        case "up":
        case "left":
          f = v > S;
          break;
      }
    }
  );
  function A(v) {
    e.preventNavigationGestures && v.preventDefault();
  }
  function X(v) {
    const S = v == null ? void 0 : v.tagName;
    if (!S || ["INPUT", "TEXTAREA"].includes(S))
      return !1;
    const p = (() => {
      switch (e.swipeToClose) {
        case "up":
          return (v == null ? void 0 : v.scrollTop) + (v == null ? void 0 : v.clientHeight) === (v == null ? void 0 : v.scrollHeight);
        case "left":
          return (v == null ? void 0 : v.scrollLeft) + (v == null ? void 0 : v.clientWidth) === (v == null ? void 0 : v.scrollWidth);
        case "down":
          return (v == null ? void 0 : v.scrollTop) === 0;
        case "right":
          return (v == null ? void 0 : v.scrollLeft) === 0;
        default:
          return !1;
      }
    })();
    return v === u.value ? p : p && X(v == null ? void 0 : v.parentElement);
  }
  return {
    vfmContentEl: n,
    swipeBannerEl: o,
    bindSwipe: $,
    onTouchStartSwipeBanner: A
  };
}
const Wn = Symbol("vfm"), zn = Symbol("internalVfm"), Hn = /* @__PURE__ */ De({
  __name: "CoreModal",
  props: Me,
  emits: ["update:modelValue", "beforeOpen", "opened", "beforeClose", "closed", "clickOutside"],
  setup(e, { emit: t }) {
    const n = e, { modals: a, openedModals: r } = Ve(Wn, {
      modals: [],
      openedModals: []
    }), {
      openLastOverlay: l,
      moveToLastOpenedModals: o,
      deleteFromOpenedModals: u,
      moveToLastOpenedModalOverlays: d,
      deleteFromOpenedModalOverlays: b,
      deleteFromModals: y
    } = Ve(zn, {
      openLastOverlay: Z,
      moveToLastOpenedModals: Z,
      deleteFromOpenedModals: Z,
      moveToLastOpenedModalOverlays: Z,
      deleteFromOpenedModalOverlays: Z,
      deleteFromModals: Z
    }), f = B(), E = B(), { focus: h, blur: P } = Cn(n, { focusEl: f }), { zIndex: H, refreshZIndex: M, resetZIndex: D } = An(n), { modelValueLocal: $ } = En(n, t), { enableBodyScroll: A, disableBodyScroll: X } = Vn(n, {
      lockScrollEl: f,
      modelValueLocal: $
    }), { emitEvent: v } = Pn(t);
    let S = Z;
    const {
      visible: p,
      contentVisible: N,
      contentListeners: O,
      contentTransition: k,
      overlayVisible: i,
      overlayListeners: s,
      overlayTransition: c,
      enterTransition: m,
      leaveTransition: g
    } = kn(n, {
      modelValueLocal: $,
      onEntering() {
        et(() => {
          X(), h();
        });
      },
      onEnter() {
        v("opened"), S("opened");
      },
      onLeave() {
        u(pe()), D(), A(), v("closed"), S("closed");
      }
    }), { onEsc: C, onMouseupRoot: I, onMousedown: L } = xn(n, t, { vfmRootEl: f, vfmContentEl: E, visible: p, modelValueLocal: $ }), {
      swipeBannerEl: V,
      bindSwipe: J,
      onTouchStartSwipeBanner: _
    } = Kn(n, { vfmContentEl: E, modelValueLocal: $ }), G = xt(n, "hideOverlay"), K = U(() => ({
      modalId: n.modalId,
      hideOverlay: G,
      overlayVisible: i,
      focus: h,
      toggle(w) {
        return new Promise((F) => {
          S = Sn((pt) => F(pt));
          const q = typeof w == "boolean" ? w : !$.value;
          $.value = q, t("update:modelValue", q);
        });
      }
    }));
    function pe() {
      return K;
    }
    const ne = U(() => r.indexOf(K));
    W(() => [n.zIndexFn, ne.value], () => {
      p.value && M(ne.value);
    }), Je(() => {
      a.push(K);
    }), $.value && le(), W($, (w) => {
      w ? le() : bt();
    });
    async function le() {
      v("beforeOpen"), o(K), d(K), M(ne.value), l(), m();
    }
    function bt() {
      v("beforeClose"), b(K), l(), P(), g();
    }
    return _e(() => {
      A(), y(K), u(K), b(K), P(), l();
    }), (w, F) => w.displayDirective !== "if" || T(p) ? ce((R(), j("div", {
      key: 0,
      ref_key: "vfmRootEl",
      ref: f,
      class: z(["vfm vfm--fixed vfm--inset", { "vfm--prevent-none": w.background === "interactive" }]),
      style: Pe({ zIndex: T(H) }),
      role: "dialog",
      "aria-modal": "true",
      onKeydown: F[7] || (F[7] = Et(() => T(C)(), ["esc"])),
      onMouseup: F[8] || (F[8] = Ae(() => T(I)(), ["self"])),
      onMousedown: F[9] || (F[9] = Ae((q) => T(L)(q), ["self"]))
    }, [
      G.value ? Q("", !0) : (R(), Ce(qe, Ne({ key: 0 }, T(c), { appear: !0 }, je(T(s))), {
        default: se(() => [
          w.displayDirective !== "if" || T(i) ? ce((R(), j("div", {
            key: 0,
            class: z(["vfm__overlay vfm--overlay vfm--absolute vfm--inset vfm--prevent-none", w.overlayClass]),
            style: Pe(w.overlayStyle),
            "aria-hidden": "true"
          }, null, 6)), [
            [Oe, w.displayDirective !== "show" || T(i)],
            [T(Be), w.displayDirective !== "visible" || T(i)]
          ]) : Q("", !0)
        ]),
        _: 1
      }, 16)),
      Re(qe, Ne(T(k), { appear: !0 }, je(T(O))), {
        default: se(() => [
          w.displayDirective !== "if" || T(N) ? ce((R(), j("div", Ne({
            key: 0,
            ref_key: "vfmContentEl",
            ref: E,
            class: ["vfm__content vfm--outline-none", [w.contentClass, { "vfm--prevent-auto": w.background === "interactive" }]],
            style: w.contentStyle,
            tabindex: "0"
          }, T(J), {
            onMousedown: F[6] || (F[6] = () => T(L)())
          }), [
            Y(w.$slots, "default"),
            w.showSwipeBanner ? (R(), j("div", {
              key: 0,
              ref_key: "swipeBannerEl",
              ref: V,
              class: "vfm-swipe-banner-container",
              onTouchstart: F[2] || (F[2] = (q) => T(_)(q))
            }, [
              Y(w.$slots, "swipe-banner", {}, () => [
                x("div", {
                  class: "vfm-swipe-banner-back",
                  onTouchstart: F[0] || (F[0] = (q) => w.swipeToClose === "left" && q.preventDefault())
                }, null, 32),
                x("div", {
                  class: "vfm-swipe-banner-forward",
                  onTouchstart: F[1] || (F[1] = (q) => w.swipeToClose === "right" && q.preventDefault())
                }, null, 32)
              ])
            ], 544)) : !w.showSwipeBanner && w.preventNavigationGestures ? (R(), j("div", {
              key: 1,
              class: "vfm-swipe-banner-container",
              onTouchstart: F[5] || (F[5] = (q) => T(_)(q))
            }, [
              x("div", {
                class: "vfm-swipe-banner-back",
                onTouchstart: F[3] || (F[3] = (q) => w.swipeToClose === "left" && q.preventDefault())
              }, null, 32),
              x("div", {
                class: "vfm-swipe-banner-forward",
                onTouchstart: F[4] || (F[4] = (q) => w.swipeToClose === "right" && q.preventDefault())
              }, null, 32)
            ], 32)) : Q("", !0)
          ], 16)), [
            [Oe, w.displayDirective !== "show" || T(N)],
            [T(Be), w.displayDirective !== "visible" || T(N)]
          ]) : Q("", !0)
        ]),
        _: 3
      }, 16)
    ], 38)), [
      [Oe, w.displayDirective !== "show" || T(p)],
      [T(Be), w.displayDirective !== "visible" || T(p)]
    ]) : Q("", !0);
  }
}), Un = {
  ...Me,
  /**
   * @description Set `null | false` to disable teleport.
   * @default `'body'`
   * @example
   * ```js
   * teleportTo: '#modals'
   * ```
   */
  teleportTo: {
    type: [String, null, Boolean, Object],
    default: "body"
  }
}, Gn = De({
  inheritAttrs: !1
}), vt = /* @__PURE__ */ De({
  ...Gn,
  __name: "VueFinalModal",
  props: Un,
  emits: ["update:modelValue", "beforeOpen", "opened", "beforeClose", "closed", "clickOutside"],
  setup(e, { emit: t }) {
    const n = Zn({
      props: e,
      modalProps: Me,
      emit: t
    });
    return (a, r) => (R(), Ce(wt, {
      to: a.teleportTo ? a.teleportTo : void 0,
      disabled: !a.teleportTo
    }, [
      Re(Hn, Tt(St(T(n))), {
        default: se(() => [
          Y(a.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 8, ["to", "disabled"]));
  }
});
function Yn(e, t) {
  return Object.keys(t).reduce((n, a) => (n[a] = e[a], n), {});
}
function Xn(e) {
  return e ? {
    "onUpdate:modelValue": (t) => e("update:modelValue", t),
    onBeforeClose: () => e("beforeClose"),
    onClosed: () => e("closed"),
    onBeforeOpen: () => e("beforeOpen"),
    onOpened: () => e("opened"),
    /** onClickOutside will only be emitted when clickToClose equal to `false` */
    onClickOutside: () => e("clickOutside")
  } : {};
}
function Zn(e) {
  const { props: t, modalProps: n, emit: a } = e, r = U(() => Yn(t, n)), l = Xn(a), o = kt();
  return U(() => ({
    ...r.value,
    ...l,
    ...o
  }));
}
const Qn = { class: "p-4 empty:hidden" }, Jn = {
  key: 0,
  class: "p-4 w-full flex justify-end"
}, ca = {
  __name: "squickDialog",
  props: xe({
    id: {
      type: String,
      default: null
    },
    transitionOverlay: {
      type: String,
      default: "fade"
    },
    transitionContent: {
      type: String,
      default: "slide-up"
    },
    mode: {
      type: String,
      default: "alert"
    },
    TwdColor: {
      type: String,
      default: "indigo"
    },
    TwdRounded: {
      type: String,
      default: "rounded"
    }
  }, {
    modelValue: {
      required: !0,
      default: !1,
      local: !0
    }
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = Ee(e, "modelValue", { local: !0 }), a = re(), r = B(null), l = () => {
      n.value = !1;
    };
    return r.value = t.id ? t.id : "btn-" + a.uid, (o, u) => (R(), Ce(T(vt), {
      modalId: r.value,
      class: z("flex justify-center items-center"),
      "content-class": `flex flex-col w-64 max-w-xl mx-4 shadow-sm bg-white dark:bg-gray-900 border dark:border-gray-700 ${e.TwdRounded}`,
      "content-transition": `vfm-${e.transitionContent}`,
      "overlay-transition": `vfm-${e.transitionOverlay}`,
      modelValue: n.value,
      "onUpdate:modelValue": u[0] || (u[0] = (d) => n.value = d),
      clickToClose: !1,
      focusTrap: {
        allowOutsideClick: !0,
        returnFocusOnDeactivate: !1
      }
    }, {
      default: se(() => [
        x("div", Qn, [
          Y(o.$slots, "default", {}, () => [
            We("Hello!")
          ])
        ]),
        e.mode === "alert" ? (R(), j("div", Jn, [
          Re(Ft, { onClick: l }, {
            default: se(() => [
              We("OK")
            ]),
            _: 1
          })
        ])) : Q("", !0)
      ]),
      _: 3
    }, 8, ["modalId", "content-class", "content-transition", "overlay-transition", "modelValue"]));
  }
};
const _n = { class: "p-4 empty:hidden flex flex-nowrap justify-between border-b border-gray-200 space-x-4" }, ea = { class: "grow" }, ta = /* @__PURE__ */ x("strong", null, "Hello!", -1), na = /* @__PURE__ */ x("svg", {
  class: "transition inline stroke-black dark:stroke-white hover:stroke-red-500",
  width: "24px",
  height: "24px",
  "stroke-width": "1.5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ x("path", {
    d: "M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), aa = [
  na
], oa = { class: "p-4 empty:hidden" }, ra = { class: "p-4 empty:hidden" }, fa = {
  __name: "squickModal",
  props: xe({
    id: {
      type: String,
      default: null
    },
    transitionOverlay: {
      type: String,
      default: "fade"
    },
    transitionContent: {
      type: String,
      default: "slide-up"
    },
    TwdColor: {
      type: String,
      default: "indigo"
    },
    TwdRounded: {
      type: String,
      default: "rounded"
    }
  }, {
    modelValue: {
      required: !0,
      default: !1,
      local: !0
    }
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = Ee(e, "modelValue", { local: !0 }), a = re(), r = B(null), l = () => {
      n.value = !1;
    };
    return r.value = t.id ? t.id : "btn-" + a.uid, (o, u) => (R(), Ce(T(vt), {
      modalId: r.value,
      class: z("flex justify-center items-center"),
      "content-class": `flex flex-col w-64 max-w-xl mx-4 shadow-sm bg-white dark:bg-gray-900 border dark:border-gray-700 ${e.TwdRounded}`,
      "content-transition": `vfm-${e.transitionContent}`,
      "overlay-transition": `vfm-${e.transitionOverlay}`,
      modelValue: n.value,
      "onUpdate:modelValue": u[0] || (u[0] = (d) => n.value = d),
      clickToClose: !1,
      focusTrap: {
        allowOutsideClick: !0,
        returnFocusOnDeactivate: !1
      }
    }, {
      default: se(() => [
        x("div", _n, [
          x("div", ea, [
            Y(o.$slots, "modal-header", {}, () => [
              ta
            ])
          ]),
          x("button", {
            type: "button",
            onClick: l
          }, aa)
        ]),
        x("div", oa, [
          Y(o.$slots, "modal-body")
        ]),
        x("div", ra, [
          Y(o.$slots, "modal-footer")
        ])
      ]),
      _: 3
    }, 8, ["modalId", "content-class", "content-transition", "overlay-transition", "modelValue"]));
  }
};
export {
  ia as squickBadgen,
  Ft as squickButton,
  ca as squickDialog,
  sa as squickInput,
  fa as squickModal,
  ua as squickOverlay,
  da as squickTextarea
};
