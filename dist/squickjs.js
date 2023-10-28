import { getCurrentInstance as oe, ref as D, openBlock as F, createElementBlock as $, normalizeClass as z, createElementVNode as I, renderSlot as Y, createStaticVNode as yt, mergeModels as Ce, useModel as Ee, watch as W, withDirectives as fe, vModelDynamic as mt, createCommentVNode as H, vModelText as ht, getCurrentScope as gt, onScopeDispose as wt, unref as S, defineComponent as Me, createBlock as Ne, Teleport as St, createVNode as Le, normalizeProps as Tt, guardReactiveProps as kt, withCtx as ue, computed as G, useAttrs as xt, inject as $e, toRef as Ct, onMounted as _e, onBeforeUnmount as et, normalizeStyle as Ae, withKeys as Et, withModifiers as qe, Transition as je, mergeProps as Oe, toHandlers as Ke, vShow as Be, nextTick as tt, reactive as ze, createTextVNode as We } from "vue";
const Nt = { class: "flex justify-center items-center drop-shadow-[1px_1px_rgba(0,0,0,0.3)]" }, Ot = { class: "flex justify-center items-center drop-shadow-[1px_1px_rgba(0,0,0,0.3)]" }, sa = {
  __name: "squickBadgen",
  props: {
    id: {
      type: String,
      default: null
    },
    containerClass: {
      type: String,
      default: "badgen transition inline-flex flex-nowrap shadow-sm rounded"
    },
    leftContainerClass: {
      type: String,
      default: "px-1.5 py-0.5 select-none bg-gradient-to-b from-gray-500 to-gray-700 text-white text-xs rounded-l"
    },
    rightContainerClass: {
      type: String,
      default: "px-1.5 py-0.5 select-none bg-gradient-to-b from-lime-300 to-lime-500 text-white text-xs rounded-r"
    }
  },
  setup(e) {
    const t = e, n = oe(), a = D(null);
    return a.value = t.id ? t.id : "squick-badgen-" + n.uid, (o, l) => (F(), $("div", {
      class: z(e.containerClass)
    }, [
      I("div", {
        class: z(e.leftContainerClass)
      }, [
        I("span", Nt, [
          Y(o.$slots, "label-left")
        ])
      ], 2),
      I("div", {
        class: z(e.rightContainerClass)
      }, [
        I("span", Ot, [
          Y(o.$slots, "label-right")
        ])
      ], 2)
    ], 2));
  }
}, Bt = /* @__PURE__ */ yt('<div class="border border-amber-500 bg-amber-100 text-amber-800 ring-2 ring-amber-100 w-10 py-1 sm:hidden flex justify-center items-center rounded"> xs </div><div class="border border-lime-500 bg-lime-100 text-lime-800 ring-2 ring-lime-100 w-10 py-1 hidden sm:flex md:hidden sm:justify-center sm:items-center rounded"> sm </div><div class="border border-emerald-500 bg-emerald-100 text-emerald-800 ring-2 ring-emerald-100 w-10 py-1 hidden md:flex lg:hidden md:justify-center md:items-center rounded"> md </div><div class="border border-cyan-500 bg-cyan-100 text-cyan-800 ring-2 ring-cyan-100 w-10 py-1 hidden lg:flex xl:hidden lg:justify-center lg:items-center rounded"> lg </div><div class="border border-blue-500 bg-blue-100 text-blue-800 ring-2 ring-blue-100 w-10 py-1 hidden xl:flex 2xl:hidden xl:justify-center xl:items-center rounded"> xl </div><div class="border border-violet-500 bg-violet-100 text-violet-800 ring-2 ring-violet-100 w-10 py-1 hidden 2xl:flex 2xl:justify-center 2xl:items-center rounded"> 2xl </div>', 6), Ft = [
  Bt
], ua = {
  __name: "squickBreakpoint",
  props: {
    containerClass: {
      type: String,
      default: "select-none fixed right-4 bottom-4 opacity-90 text-center text-xs"
    }
  },
  setup(e) {
    return (t, n) => (F(), $("div", {
      class: z(e.containerClass)
    }, Ft, 2));
  }
}, It = ["id", "name", "title", "type", "disabled"], Dt = {
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
    containerClass: {
      type: String,
      default: "flex justify-center items-center px-2.5 py-1.5 text-sm shadow-sm outline-none border border-gray-300 bg-white bg-gradient-to-b from-white to-gray-100 hover:bg-none hover:bg-gray-100 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-400 active:ring-2 disabled:cursor-not-allowed disabled:opacity-75 disabled:bg-gray-100 rounded w-auto transition"
    }
  },
  setup(e) {
    const t = e, n = oe(), a = D(null);
    return a.value = t.id ? t.id : "squick-button-" + n.uid, (o, l) => (F(), $("button", {
      id: a.value,
      ref_key: "uniqueId",
      ref: a,
      name: e.name,
      title: e.title,
      type: e.mode,
      class: z(e.containerClass),
      disabled: e.disabled
    }, [
      Y(o.$slots, "default")
    ], 10, It));
  }
}, Mt = ["id", "name", "title", "type", "disabled", "required", "readonly", "placeholder"], Lt = {
  key: 0,
  class: "px-2.5 w-12 text-sm absolute inset-y-0 right-0 flex justify-center items-center"
}, Vt = /* @__PURE__ */ I("path", {
  d: "M3 3l18 18M10.5 10.677a2 2 0 002.823 2.823",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), Pt = /* @__PURE__ */ I("path", {
  d: "M7.362 7.561C5.68 8.74 4.279 10.42 3 12c1.889 2.991 5.282 6 9 6 1.55 0 3.043-.523 4.395-1.35M12 6c4.008 0 6.701 3.158 9 6a15.66 15.66 0 01-1.078 1.5",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), Rt = [
  Vt,
  Pt
], $t = /* @__PURE__ */ I("path", {
  d: "M12 14a2 2 0 100-4 2 2 0 000 4z",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), At = /* @__PURE__ */ I("path", {
  d: "M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), qt = [
  $t,
  At
], da = {
  __name: "squickInput",
  props: Ce({
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
    containerClass: {
      type: String,
      default: "w-full relative inline-flex w-auto"
    },
    inputClass: {
      type: String,
      default: "w-full block px-2.5 py-1.5 text-sm shadow-sm border border-gray-300 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-400 read-only:cursor-not-allowed read-only:opacity-75 disabled:cursor-not-allowed disabled:opacity-75 disabled:bg-gray-100 placeholder:text-gray-300 rounded transition"
    }
  }, {
    modelValue: { local: !0 }
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = Ee(e, "modelValue", { local: !0 }), a = oe(), o = D(null), l = D(t.password ? "password" : "text");
    W(() => t.password, (u, d) => {
      l.value = u ? "password" : "text";
    });
    const r = () => {
      l.value = l.value === "password" ? "text" : "password";
    };
    return o.value = t.id ? t.id : "squick-input-" + a.uid, (u, d) => (F(), $("div", {
      class: z(e.containerClass)
    }, [
      fe(I("input", {
        id: o.value,
        name: e.name,
        title: e.title,
        type: l.value,
        class: z(`${e.inputClass} ${e.showPassword && e.password ? "pr-12" : ""}`),
        disabled: e.disabled,
        required: e.required,
        readonly: e.readonly,
        placeholder: e.placeholder,
        "onUpdate:modelValue": d[0] || (d[0] = (b) => n.value = b)
      }, null, 10, Mt), [
        [
          mt,
          n.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      e.showPassword && e.password ? (F(), $("div", Lt, [
        l.value === "password" ? (F(), $("svg", {
          key: 0,
          class: "w-5 h-5 stroke-gray-400 hover:cursor-pointer",
          "stroke-width": "1.5",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          onClick: d[1] || (d[1] = (b) => r())
        }, Rt)) : H("", !0),
        l.value === "text" ? (F(), $("svg", {
          key: 1,
          class: "w-5 h-5 stroke-gray-400 hover:cursor-pointer",
          "stroke-width": "1.5",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          onClick: d[2] || (d[2] = (b) => r())
        }, qt)) : H("", !0)
      ])) : H("", !0)
    ], 2));
  }
}, jt = ["id"], Kt = /* @__PURE__ */ I("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), zt = /* @__PURE__ */ I("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Wt = [
  Kt,
  zt
], ca = {
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
    blur: {
      type: Boolean,
      default: !1
    },
    overlayClass: {
      type: String,
      default: "absolute w-full h-full bg-neutral-100/80 border border-transparent flex items-center justify-center left-0 top-0 rounded z-40"
    },
    svgClass: {
      type: String,
      default: "z-50 animate-spin h-5 w-5 text-gray-500"
    }
  },
  setup(e) {
    const t = e, n = oe(), a = D(null);
    return W(() => t.show, (o, l) => {
      o === !0 && a.value.focus();
    }), a.value = t.id ? t.id : "squick-overlay-" + n.uid, (o, l) => (F(), $("div", {
      id: a.value,
      ref_key: "uniqueId",
      ref: a,
      class: "relative inline-flex h-full",
      tabindex: "0"
    }, [
      Y(o.$slots, "default"),
      e.show ? (F(), $("div", {
        key: 0,
        class: z(`${e.overlayClass} ${e.blur ? "backdrop-blur-sm" : ""}`)
      }, [
        (F(), $("svg", {
          class: z(e.svgClass),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24"
        }, Wt, 2))
      ], 2)) : H("", !0)
    ], 8, jt));
  }
}, Ut = ["id", "name", "title", "disabled", "required", "readonly", "placeholder"], va = {
  __name: "squickTextarea",
  props: Ce({
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
    containerClass: {
      type: String,
      default: "w-full relative inline-flex w-auto"
    },
    textareaClass: {
      type: String,
      default: "w-full block px-2.5 py-1.5 min-h-[96px] max-h-96 text-sm shadow-sm border border-gray-300 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-400 read-only:cursor-not-allowed read-only:opacity-75 disabled:cursor-not-allowed disabled:opacity-75 disabled:bg-gray-100 placeholder:text-gray-300 rounded transition"
    }
  }, {
    modelValue: { local: !0 }
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = Ee(e, "modelValue", { local: !0 }), a = oe(), o = D(null);
    return o.value = t.id ? t.id : "squick-textarea-" + a.uid, (l, r) => (F(), $("div", {
      class: z(e.containerClass)
    }, [
      fe(I("textarea", {
        id: o.value,
        name: e.name,
        title: e.title,
        class: z(e.textareaClass),
        disabled: e.disabled,
        required: e.required,
        readonly: e.readonly,
        placeholder: e.placeholder,
        "onUpdate:modelValue": r[0] || (r[0] = (u) => n.value = u)
      }, `\r
        `, 10, Ut), [
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
function nt(e) {
  return gt() ? (wt(e), !0) : !1;
}
function at(e) {
  return typeof e == "function" ? e() : S(e);
}
const Gt = typeof window < "u" && typeof document < "u", Ht = Object.prototype.toString, Yt = (e) => Ht.call(e) === "[object Object]", Xt = () => {
};
function rt(e) {
  var t;
  const n = at(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Zt = Gt ? window : void 0;
function ee(...e) {
  let t, n, a, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, a, o] = e, t = Zt) : [t, n, a, o] = e, !t)
    return Xt;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const l = [], r = () => {
    l.forEach((y) => y()), l.length = 0;
  }, u = (y, v, x, k) => (y.addEventListener(v, x, k), () => y.removeEventListener(v, x, k)), d = W(
    () => [rt(t), at(o)],
    ([y, v]) => {
      if (r(), !y)
        return;
      const x = Yt(v) ? { ...v } : v;
      l.push(
        ...n.flatMap((k) => a.map((E) => u(y, k, E, x)))
      );
    },
    { immediate: !0, flush: "post" }
  ), b = () => {
    d(), r();
  };
  return nt(b), b;
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var ot = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], we = /* @__PURE__ */ ot.join(","), lt = typeof Element > "u", re = lt ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Se = !lt && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, Te = function e(t, n) {
  var a;
  n === void 0 && (n = !0);
  var o = t == null || (a = t.getAttribute) === null || a === void 0 ? void 0 : a.call(t, "inert"), l = o === "" || o === "true", r = l || n && t && e(t.parentNode);
  return r;
}, Qt = function(t) {
  var n, a = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return a === "" || a === "true";
}, it = function(t, n, a) {
  if (Te(t))
    return [];
  var o = Array.prototype.slice.apply(t.querySelectorAll(we));
  return n && re.call(t, we) && o.unshift(t), o = o.filter(a), o;
}, st = function e(t, n, a) {
  for (var o = [], l = Array.from(t); l.length; ) {
    var r = l.shift();
    if (!Te(r, !1))
      if (r.tagName === "SLOT") {
        var u = r.assignedElements(), d = u.length ? u : r.children, b = e(d, !0, a);
        a.flatten ? o.push.apply(o, b) : o.push({
          scopeParent: r,
          candidates: b
        });
      } else {
        var y = re.call(r, we);
        y && a.filter(r) && (n || !t.includes(r)) && o.push(r);
        var v = r.shadowRoot || // check for an undisclosed shadow
        typeof a.getShadowRoot == "function" && a.getShadowRoot(r), x = !Te(v, !1) && (!a.shadowRootFilter || a.shadowRootFilter(r));
        if (v && x) {
          var k = e(v === !0 ? r.children : v.children, !0, a);
          a.flatten ? o.push.apply(o, k) : o.push({
            scopeParent: r,
            candidates: k
          });
        } else
          l.unshift.apply(l, r.children);
      }
  }
  return o;
}, ut = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, ae = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Qt(t)) && !ut(t) ? 0 : t.tabIndex;
}, Jt = function(t, n) {
  var a = ae(t);
  return a < 0 && n && !ut(t) ? 0 : a;
}, _t = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, dt = function(t) {
  return t.tagName === "INPUT";
}, en = function(t) {
  return dt(t) && t.type === "hidden";
}, tn = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(a) {
    return a.tagName === "SUMMARY";
  });
  return n;
}, nn = function(t, n) {
  for (var a = 0; a < t.length; a++)
    if (t[a].checked && t[a].form === n)
      return t[a];
}, an = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || Se(t), a = function(u) {
    return n.querySelectorAll('input[type="radio"][name="' + u + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    o = a(window.CSS.escape(t.name));
  else
    try {
      o = a(t.name);
    } catch (r) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", r.message), !1;
    }
  var l = nn(o, t.form);
  return !l || l === t;
}, rn = function(t) {
  return dt(t) && t.type === "radio";
}, on = function(t) {
  return rn(t) && !an(t);
}, ln = function(t) {
  var n, a = t && Se(t), o = (n = a) === null || n === void 0 ? void 0 : n.host, l = !1;
  if (a && a !== t) {
    var r, u, d;
    for (l = !!((r = o) !== null && r !== void 0 && (u = r.ownerDocument) !== null && u !== void 0 && u.contains(o) || t != null && (d = t.ownerDocument) !== null && d !== void 0 && d.contains(t)); !l && o; ) {
      var b, y, v;
      a = Se(o), o = (b = a) === null || b === void 0 ? void 0 : b.host, l = !!((y = o) !== null && y !== void 0 && (v = y.ownerDocument) !== null && v !== void 0 && v.contains(o));
    }
  }
  return l;
}, Ue = function(t) {
  var n = t.getBoundingClientRect(), a = n.width, o = n.height;
  return a === 0 && o === 0;
}, sn = function(t, n) {
  var a = n.displayCheck, o = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var l = re.call(t, "details>summary:first-of-type"), r = l ? t.parentElement : t;
  if (re.call(r, "details:not([open]) *"))
    return !0;
  if (!a || a === "full" || a === "legacy-full") {
    if (typeof o == "function") {
      for (var u = t; t; ) {
        var d = t.parentElement, b = Se(t);
        if (d && !d.shadowRoot && o(d) === !0)
          return Ue(t);
        t.assignedSlot ? t = t.assignedSlot : !d && b !== t.ownerDocument ? t = b.host : t = d;
      }
      t = u;
    }
    if (ln(t))
      return !t.getClientRects().length;
    if (a !== "legacy-full")
      return !0;
  } else if (a === "non-zero-area")
    return Ue(t);
  return !1;
}, un = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var a = 0; a < n.children.length; a++) {
          var o = n.children.item(a);
          if (o.tagName === "LEGEND")
            return re.call(n, "fieldset[disabled] *") ? !0 : !o.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, ke = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  Te(n) || en(n) || sn(n, t) || // For a details element with a summary, the summary element gets the focus
  tn(n) || un(n));
}, De = function(t, n) {
  return !(on(n) || ae(n) < 0 || !ke(t, n));
}, dn = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, cn = function e(t) {
  var n = [], a = [];
  return t.forEach(function(o, l) {
    var r = !!o.scopeParent, u = r ? o.scopeParent : o, d = Jt(u, r), b = r ? e(o.candidates) : u;
    d === 0 ? r ? n.push.apply(n, b) : n.push(u) : a.push({
      documentOrder: l,
      tabIndex: d,
      item: o,
      isScope: r,
      content: b
    });
  }), a.sort(_t).reduce(function(o, l) {
    return l.isScope ? o.push.apply(o, l.content) : o.push(l.content), o;
  }, []).concat(n);
}, vn = function(t, n) {
  n = n || {};
  var a;
  return n.getShadowRoot ? a = st([t], n.includeContainer, {
    filter: De.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: dn
  }) : a = it(t, n.includeContainer, De.bind(null, n)), cn(a);
}, fn = function(t, n) {
  n = n || {};
  var a;
  return n.getShadowRoot ? a = st([t], n.includeContainer, {
    filter: ke.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : a = it(t, n.includeContainer, ke.bind(null, n)), a;
}, se = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return re.call(t, we) === !1 ? !1 : De(n, t);
}, bn = /* @__PURE__ */ ot.concat("iframe").join(","), Fe = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return re.call(t, bn) === !1 ? !1 : ke(n, t);
};
/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function Ge(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function He(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ge(Object(n), !0).forEach(function(a) {
      pn(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ge(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function pn(e, t, n) {
  return t = mn(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function yn(e, t) {
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
function mn(e) {
  var t = yn(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var Ye = {
  activateTrap: function(t, n) {
    if (t.length > 0) {
      var a = t[t.length - 1];
      a !== n && a.pause();
    }
    var o = t.indexOf(n);
    o === -1 || t.splice(o, 1), t.push(n);
  },
  deactivateTrap: function(t, n) {
    var a = t.indexOf(n);
    a !== -1 && t.splice(a, 1), t.length > 0 && t[t.length - 1].unpause();
  }
}, hn = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, gn = function(t) {
  return (t == null ? void 0 : t.key) === "Escape" || (t == null ? void 0 : t.key) === "Esc" || (t == null ? void 0 : t.keyCode) === 27;
}, be = function(t) {
  return (t == null ? void 0 : t.key) === "Tab" || (t == null ? void 0 : t.keyCode) === 9;
}, wn = function(t) {
  return be(t) && !t.shiftKey;
}, Sn = function(t) {
  return be(t) && t.shiftKey;
}, Xe = function(t) {
  return setTimeout(t, 0);
}, Ze = function(t, n) {
  var a = -1;
  return t.every(function(o, l) {
    return n(o) ? (a = l, !1) : !0;
  }), a;
}, ce = function(t) {
  for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    a[o - 1] = arguments[o];
  return typeof t == "function" ? t.apply(void 0, a) : t;
}, me = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Tn = [], kn = function(t, n) {
  var a = (n == null ? void 0 : n.document) || document, o = (n == null ? void 0 : n.trapStack) || Tn, l = He({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: wn,
    isKeyBackward: Sn
  }, n), r = {
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
    return r.containerGroups.findIndex(function(h) {
      var g = h.container, C = h.tabbableNodes;
      return g.contains(i) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (c == null ? void 0 : c.includes(g)) || C.find(function(O) {
        return O === i;
      });
    });
  }, y = function(i) {
    var s = l[i];
    if (typeof s == "function") {
      for (var c = arguments.length, h = new Array(c > 1 ? c - 1 : 0), g = 1; g < c; g++)
        h[g - 1] = arguments[g];
      s = s.apply(void 0, h);
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
  }, v = function() {
    var i = y("initialFocus");
    if (i === !1)
      return !1;
    if (i === void 0 || !Fe(i, l.tabbableOptions))
      if (b(a.activeElement) >= 0)
        i = a.activeElement;
      else {
        var s = r.tabbableGroups[0], c = s && s.firstTabbableNode;
        i = c || y("fallbackFocus");
      }
    if (!i)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return i;
  }, x = function() {
    if (r.containerGroups = r.containers.map(function(i) {
      var s = vn(i, l.tabbableOptions), c = fn(i, l.tabbableOptions), h = s.length > 0 ? s[0] : void 0, g = s.length > 0 ? s[s.length - 1] : void 0, C = c.find(function(P) {
        return se(P);
      }), O = c.slice().reverse().find(function(P) {
        return se(P);
      }), A = !!s.find(function(P) {
        return ae(P) > 0;
      });
      return {
        container: i,
        tabbableNodes: s,
        focusableNodes: c,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: A,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: h,
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
        lastDomTabbableNode: O,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Z) {
          var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, R = s.indexOf(Z);
          return R < 0 ? _ ? c.slice(c.indexOf(Z) + 1).find(function(ne) {
            return se(ne);
          }) : c.slice(0, c.indexOf(Z)).reverse().find(function(ne) {
            return se(ne);
          }) : s[R + (_ ? 1 : -1)];
        }
      };
    }), r.tabbableGroups = r.containerGroups.filter(function(i) {
      return i.tabbableNodes.length > 0;
    }), r.tabbableGroups.length <= 0 && !y("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (r.containerGroups.find(function(i) {
      return i.posTabIndexesFound;
    }) && r.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, k = function m(i) {
    var s = i.activeElement;
    if (s)
      return s.shadowRoot && s.shadowRoot.activeElement !== null ? m(s.shadowRoot) : s;
  }, E = function m(i) {
    if (i !== !1 && i !== k(document)) {
      if (!i || !i.focus) {
        m(v());
        return;
      }
      i.focus({
        preventScroll: !!l.preventScroll
      }), r.mostRecentlyFocusedNode = i, hn(i) && i.select();
    }
  }, U = function(i) {
    var s = y("setReturnFocus", i);
    return s || (s === !1 ? !1 : i);
  }, q = function(i) {
    var s = i.target, c = i.event, h = i.isBackward, g = h === void 0 ? !1 : h;
    s = s || me(c), x();
    var C = null;
    if (r.tabbableGroups.length > 0) {
      var O = b(s, c), A = O >= 0 ? r.containerGroups[O] : void 0;
      if (O < 0)
        g ? C = r.tabbableGroups[r.tabbableGroups.length - 1].lastTabbableNode : C = r.tabbableGroups[0].firstTabbableNode;
      else if (g) {
        var P = Ze(r.tabbableGroups, function(ie) {
          var de = ie.firstTabbableNode;
          return s === de;
        });
        if (P < 0 && (A.container === s || Fe(s, l.tabbableOptions) && !se(s, l.tabbableOptions) && !A.nextTabbableNode(s, !1)) && (P = O), P >= 0) {
          var Z = P === 0 ? r.tabbableGroups.length - 1 : P - 1, _ = r.tabbableGroups[Z];
          C = ae(s) >= 0 ? _.lastTabbableNode : _.lastDomTabbableNode;
        } else
          be(c) || (C = A.nextTabbableNode(s, !1));
      } else {
        var R = Ze(r.tabbableGroups, function(ie) {
          var de = ie.lastTabbableNode;
          return s === de;
        });
        if (R < 0 && (A.container === s || Fe(s, l.tabbableOptions) && !se(s, l.tabbableOptions) && !A.nextTabbableNode(s)) && (R = O), R >= 0) {
          var ne = R === r.tabbableGroups.length - 1 ? 0 : R + 1, le = r.tabbableGroups[ne];
          C = ae(s) >= 0 ? le.firstTabbableNode : le.firstDomTabbableNode;
        } else
          be(c) || (C = A.nextTabbableNode(s));
      }
    } else
      C = y("fallbackFocus");
    return C;
  }, N = function(i) {
    var s = me(i);
    if (!(b(s, i) >= 0)) {
      if (ce(l.clickOutsideDeactivates, i)) {
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
      ce(l.allowOutsideClick, i) || i.preventDefault();
    }
  }, V = function(i) {
    var s = me(i), c = b(s, i) >= 0;
    if (c || s instanceof Document)
      c && (r.mostRecentlyFocusedNode = s);
    else {
      i.stopImmediatePropagation();
      var h, g = !0;
      if (r.mostRecentlyFocusedNode)
        if (ae(r.mostRecentlyFocusedNode) > 0) {
          var C = b(r.mostRecentlyFocusedNode), O = r.containerGroups[C].tabbableNodes;
          if (O.length > 0) {
            var A = O.findIndex(function(P) {
              return P === r.mostRecentlyFocusedNode;
            });
            A >= 0 && (l.isKeyForward(r.recentNavEvent) ? A + 1 < O.length && (h = O[A + 1], g = !1) : A - 1 >= 0 && (h = O[A - 1], g = !1));
          }
        } else
          r.containerGroups.some(function(P) {
            return P.tabbableNodes.some(function(Z) {
              return ae(Z) > 0;
            });
          }) || (g = !1);
      else
        g = !1;
      g && (h = q({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: r.mostRecentlyFocusedNode,
        isBackward: l.isKeyBackward(r.recentNavEvent)
      })), E(h || r.mostRecentlyFocusedNode || v());
    }
    r.recentNavEvent = void 0;
  }, j = function(i) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    r.recentNavEvent = i;
    var c = q({
      event: i,
      isBackward: s
    });
    c && (be(i) && i.preventDefault(), E(c));
  }, X = function(i) {
    if (gn(i) && ce(l.escapeDeactivates, i) !== !1) {
      i.preventDefault(), u.deactivate();
      return;
    }
    (l.isKeyForward(i) || l.isKeyBackward(i)) && j(i, l.isKeyBackward(i));
  }, f = function(i) {
    var s = me(i);
    b(s, i) >= 0 || ce(l.clickOutsideDeactivates, i) || ce(l.allowOutsideClick, i) || (i.preventDefault(), i.stopImmediatePropagation());
  }, T = function() {
    if (r.active)
      return Ye.activateTrap(o, u), r.delayInitialFocusTimer = l.delayInitialFocus ? Xe(function() {
        E(v());
      }) : E(v()), a.addEventListener("focusin", V, !0), a.addEventListener("mousedown", N, {
        capture: !0,
        passive: !1
      }), a.addEventListener("touchstart", N, {
        capture: !0,
        passive: !1
      }), a.addEventListener("click", f, {
        capture: !0,
        passive: !1
      }), a.addEventListener("keydown", X, {
        capture: !0,
        passive: !1
      }), u;
  }, p = function() {
    if (r.active)
      return a.removeEventListener("focusin", V, !0), a.removeEventListener("mousedown", N, !0), a.removeEventListener("touchstart", N, !0), a.removeEventListener("click", f, !0), a.removeEventListener("keydown", X, !0), u;
  }, M = function(i) {
    var s = i.some(function(c) {
      var h = Array.from(c.removedNodes);
      return h.some(function(g) {
        return g === r.mostRecentlyFocusedNode;
      });
    });
    s && E(v());
  }, L = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(M) : void 0, J = function() {
    L && (L.disconnect(), r.active && !r.paused && r.containers.map(function(i) {
      L.observe(i, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return u = {
    get active() {
      return r.active;
    },
    get paused() {
      return r.paused;
    },
    activate: function(i) {
      if (r.active)
        return this;
      var s = d(i, "onActivate"), c = d(i, "onPostActivate"), h = d(i, "checkCanFocusTrap");
      h || x(), r.active = !0, r.paused = !1, r.nodeFocusedBeforeActivation = a.activeElement, s == null || s();
      var g = function() {
        h && x(), T(), J(), c == null || c();
      };
      return h ? (h(r.containers.concat()).then(g, g), this) : (g(), this);
    },
    deactivate: function(i) {
      if (!r.active)
        return this;
      var s = He({
        onDeactivate: l.onDeactivate,
        onPostDeactivate: l.onPostDeactivate,
        checkCanReturnFocus: l.checkCanReturnFocus
      }, i);
      clearTimeout(r.delayInitialFocusTimer), r.delayInitialFocusTimer = void 0, p(), r.active = !1, r.paused = !1, J(), Ye.deactivateTrap(o, u);
      var c = d(s, "onDeactivate"), h = d(s, "onPostDeactivate"), g = d(s, "checkCanReturnFocus"), C = d(s, "returnFocus", "returnFocusOnDeactivate");
      c == null || c();
      var O = function() {
        Xe(function() {
          C && E(U(r.nodeFocusedBeforeActivation)), h == null || h();
        });
      };
      return C && g ? (g(U(r.nodeFocusedBeforeActivation)).then(O, O), this) : (O(), this);
    },
    pause: function(i) {
      if (r.paused || !r.active)
        return this;
      var s = d(i, "onPause"), c = d(i, "onPostPause");
      return r.paused = !0, s == null || s(), p(), J(), c == null || c(), this;
    },
    unpause: function(i) {
      if (!r.paused || !r.active)
        return this;
      var s = d(i, "onUnpause"), c = d(i, "onPostUnpause");
      return r.paused = !1, s == null || s(), x(), T(), J(), c == null || c(), this;
    },
    updateContainerElements: function(i) {
      var s = [].concat(i).filter(Boolean);
      return r.containers = s.map(function(c) {
        return typeof c == "string" ? a.querySelector(c) : c;
      }), r.active && x(), J(), this;
    }
  }, u.updateContainerElements(t), u;
};
function xn(e, t = {}) {
  let n;
  const { immediate: a, ...o } = t, l = D(!1), r = D(!1), u = (v) => n && n.activate(v), d = (v) => n && n.deactivate(v), b = () => {
    n && (n.pause(), r.value = !0);
  }, y = () => {
    n && (n.unpause(), r.value = !1);
  };
  return W(
    () => rt(e),
    (v) => {
      v && (n = kn(v, {
        ...o,
        onActivate() {
          l.value = !0, t.onActivate && t.onActivate();
        },
        onDeactivate() {
          l.value = !1, t.onDeactivate && t.onDeactivate();
        }
      }), a && u());
    },
    { flush: "post" }
  ), nt(() => d()), {
    hasFocus: l,
    isPaused: r,
    activate: u,
    deactivate: d,
    pause: b,
    unpause: y
  };
}
const Cn = (e) => (...t) => {
  e && (e == null || e(...t), e = null);
}, Q = () => {
};
function he(e, t, n) {
  return e > n ? n : e < t ? t : e;
}
const Ve = {
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
function Qe(e = !1) {
  const t = D(e), n = D(t.value ? 0 : void 0);
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
function En(e, t) {
  const { modelValueLocal: n, onEntering: a, onEnter: o, onLeaving: l, onLeave: r } = t, u = D(n.value), [d, b, y] = Qe(u.value), [v, x, k] = Qe(u.value), E = G(() => typeof e.contentTransition == "string" ? { name: e.contentTransition } : { ...e.contentTransition }), U = G(() => typeof e.overlayTransition == "string" ? { name: e.overlayTransition } : { ...e.overlayTransition }), q = G(
    () => (e.hideOverlay || x.value === 2) && b.value === 2
    /* Leave */
  );
  W(
    q,
    (j) => {
      j && (u.value = !1);
    }
  ), W(b, (j) => {
    if (j === 1) {
      if (!u.value)
        return;
      a == null || a();
    } else if (j === 0) {
      if (!u.value)
        return;
      o == null || o();
    } else
      j === 3 ? l == null || l() : j === 2 && (r == null || r());
  });
  async function N() {
    u.value = !0, await tt(), d.value = !0, v.value = !0;
  }
  function V() {
    d.value = !1, v.value = !1;
  }
  return {
    visible: u,
    contentVisible: d,
    contentListeners: y,
    contentTransition: E,
    overlayVisible: v,
    overlayListeners: k,
    overlayTransition: U,
    enterTransition: N,
    leaveTransition: V
  };
}
function Nn(e, t, n) {
  const { vfmRootEl: a, vfmContentEl: o, visible: l, modelValueLocal: r } = n, u = D();
  function d() {
    l.value && e.escToClose && (r.value = !1);
  }
  function b(v) {
    u.value = v == null ? void 0 : v.target;
  }
  function y() {
    var v;
    u.value === a.value && (e.clickToClose ? r.value = !1 : ((v = o.value) == null || v.focus(), t("clickOutside")));
  }
  return {
    onEsc: d,
    onMouseupRoot: y,
    onMousedown: b
  };
}
function On(e, t) {
  const n = D(!!e.modelValue);
  return W(() => e.modelValue, (a) => {
    n.value = !!a;
  }), W(n, (a) => {
    a !== e.modelValue && t("update:modelValue", a);
  }), {
    modelValueLocal: n
  };
}
function Bn(e, t) {
  if (e.focusTrap === !1)
    return {
      focus() {
      },
      blur() {
      }
    };
  const { focusEl: n } = t, { hasFocus: a, activate: o, deactivate: l } = xn(n, e.focusTrap);
  function r() {
    requestAnimationFrame(() => {
      o();
    });
  }
  function u() {
    a.value && l();
  }
  return { focus: r, blur: u };
}
let Pe = !1;
if (typeof window < "u") {
  const e = {
    get passive() {
      Pe = !0;
    }
  };
  window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
}
const ct = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
let te = [], xe = !1, ge = 0, vt = -1, pe, ye;
const Fn = (e) => {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const t = window.getComputedStyle(e);
  return ["auto", "scroll"].includes(t.overflowY) && e.scrollHeight > e.clientHeight;
}, In = (e, t) => !(e.scrollTop === 0 && t < 0 || e.scrollTop + e.clientHeight + t >= e.scrollHeight && t > 0), Dn = (e) => {
  const t = [];
  for (; e; ) {
    if (t.push(e), e.classList.contains("vfm"))
      return t;
    e = e.parentElement;
  }
  return t;
}, Mn = (e, t) => {
  let n = !1;
  return Dn(e).forEach((a) => {
    Fn(a) && In(a, t) && (n = !0);
  }), n;
}, ft = (e) => te.some(() => Mn(e, -ge)), Re = (e) => {
  const t = e || window.event;
  return ft(t.target) || t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
}, Ln = (e) => {
  if (ye === void 0) {
    const t = !!e && e.reserveScrollBarGap === !0, n = window.innerWidth - document.documentElement.clientWidth;
    if (t && n > 0) {
      const a = parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
      ye = document.body.style.paddingRight, document.body.style.paddingRight = `${a + n}px`;
    }
  }
  pe === void 0 && (pe = document.body.style.overflow, document.body.style.overflow = "hidden");
}, Vn = () => {
  ye !== void 0 && (document.body.style.paddingRight = ye, ye = void 0), pe !== void 0 && (document.body.style.overflow = pe, pe = void 0);
}, Pn = (e) => e ? e.scrollHeight - e.scrollTop <= e.clientHeight : !1, Rn = (e, t) => (ge = e.targetTouches[0].clientY - vt, ft(e.target) ? !1 : t && t.scrollTop === 0 && ge > 0 || Pn(t) && ge < 0 ? Re(e) : (e.stopPropagation(), !0)), $n = (e, t) => {
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
  te = [...te, n], ct ? (e.ontouchstart = (a) => {
    a.targetTouches.length === 1 && (vt = a.targetTouches[0].clientY);
  }, e.ontouchmove = (a) => {
    a.targetTouches.length === 1 && Rn(a, e);
  }, xe || (document.addEventListener("touchmove", Re, Pe ? { passive: !1 } : void 0), xe = !0)) : Ln(t);
}, An = (e) => {
  if (!e) {
    console.error(
      "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
    );
    return;
  }
  te = te.filter((t) => t.targetElement !== e), ct ? (e.ontouchstart = null, e.ontouchmove = null, xe && te.length === 0 && (document.removeEventListener("touchmove", Re, Pe ? { passive: !1 } : void 0), xe = !1)) : te.length || Vn();
};
function qn(e, t) {
  const { lockScrollEl: n, modelValueLocal: a } = t;
  let o;
  W(n, (u) => {
    u && (o = u);
  }, { immediate: !0 }), W(() => e.lockScroll, (u) => {
    u ? r() : l();
  }), et(() => {
    l();
  });
  function l() {
    o && An(o);
  }
  function r() {
    a.value && e.lockScroll && o && $n(o, {
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
    disableBodyScroll: r
  };
}
function jn(e) {
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
function Kn(e) {
  const t = D();
  function n(o) {
    var l;
    t.value = (l = e.zIndexFn) == null ? void 0 : l.call(e, { index: o <= -1 ? 0 : o });
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
const Ie = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vov = e.style.visibility === "hidden" ? "" : e.style.visibility, n && t ? n.beforeEnter(e) : ve(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: a }) {
    !t != !n && (a ? t ? (a.beforeEnter(e), ve(e, !0), a.enter(e)) : a.leave(e, () => {
      ve(e, !1);
    }) : ve(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ve(e, t);
  }
};
function ve(e, t) {
  e.style.visibility = t ? e._vov : "hidden";
}
const Je = (e) => {
  if (e instanceof MouseEvent) {
    const { clientX: t, clientY: n } = e;
    return { x: t, y: n };
  } else {
    const { clientX: t, clientY: n } = e.targetTouches[0];
    return { x: t, y: n };
  }
};
function zn(e) {
  if (!e)
    return !1;
  let t = !1;
  const n = {
    get passive() {
      return t = !0, !1;
    }
  };
  return e.addEventListener("x", Q, n), e.removeEventListener("x", Q), t;
}
function Wn(e, {
  threshold: t = 0,
  onSwipeStart: n,
  onSwipe: a,
  onSwipeEnd: o,
  passive: l = !0
}) {
  const r = ze({ x: 0, y: 0 }), u = ze({ x: 0, y: 0 }), d = G(() => r.x - u.x), b = G(() => r.y - u.y), { max: y, abs: v } = Math, x = G(
    () => y(v(d.value), v(b.value)) >= t
  ), k = D(!1), E = G(() => x.value ? v(d.value) > v(b.value) ? d.value > 0 ? "left" : "right" : b.value > 0 ? "up" : "down" : "none"), U = (p, M) => {
    r.x = p, r.y = M;
  }, q = (p, M) => {
    u.x = p, u.y = M;
  };
  let N, V;
  function j(p) {
    N.capture && !N.passive && p.preventDefault();
    const { x: M, y: L } = Je(p);
    U(M, L), q(M, L), n == null || n(p), V = [
      ee(e, "mousemove", X, N),
      ee(e, "touchmove", X, N),
      ee(e, "mouseup", f, N),
      ee(e, "touchend", f, N),
      ee(e, "touchcancel", f, N)
    ];
  }
  function X(p) {
    const { x: M, y: L } = Je(p);
    q(M, L), !k.value && x.value && (k.value = !0), k.value && (a == null || a(p));
  }
  function f(p) {
    k.value && (o == null || o(p, E.value)), k.value = !1, V.forEach((M) => M());
  }
  let T = [];
  return _e(() => {
    const p = zn(window == null ? void 0 : window.document);
    l ? N = p ? { passive: !0 } : { capture: !1 } : N = p ? { passive: !1, capture: !0 } : { capture: !0 }, T = [
      ee(e, "mousedown", j, N),
      ee(e, "touchstart", j, N)
    ];
  }), {
    isSwiping: k,
    direction: E,
    coordsStart: r,
    coordsEnd: u,
    lengthX: d,
    lengthY: b,
    stop: () => {
      T.forEach((p) => p()), V.forEach((p) => p());
    }
  };
}
function Un(e, t) {
  const { vfmContentEl: n, modelValueLocal: a } = t, o = 0.1, l = 300, r = D(), u = G(() => {
    if (!(e.swipeToClose === void 0 || e.swipeToClose === "none"))
      return e.showSwipeBanner ? r.value : n.value;
  }), d = D(0), b = D(!0);
  let y = Q, v = !0, x, k = !1;
  const { lengthX: E, lengthY: U, direction: q, isSwiping: N } = Wn(u, {
    threshold: e.threshold,
    onSwipeStart(f) {
      y = ee(document, "selectionchange", () => {
        var T;
        b.value = (T = window.getSelection()) == null ? void 0 : T.isCollapsed;
      }), x = (/* @__PURE__ */ new Date()).getTime(), k = X(f == null ? void 0 : f.target);
    },
    onSwipe() {
      var f, T, p, M;
      if (k && b.value && q.value === e.swipeToClose) {
        if (q.value === "up") {
          const L = he(Math.abs(U.value || 0), 0, ((f = u.value) == null ? void 0 : f.offsetHeight) || 0) - (e.threshold || 0);
          d.value = L;
        } else if (q.value === "down") {
          const L = he(Math.abs(U.value || 0), 0, ((T = u.value) == null ? void 0 : T.offsetHeight) || 0) - (e.threshold || 0);
          d.value = -L;
        } else if (q.value === "right") {
          const L = he(Math.abs(E.value || 0), 0, ((p = u.value) == null ? void 0 : p.offsetWidth) || 0) - (e.threshold || 0);
          d.value = -L;
        } else if (q.value === "left") {
          const L = he(Math.abs(E.value || 0), 0, ((M = u.value) == null ? void 0 : M.offsetWidth) || 0) - (e.threshold || 0);
          d.value = L;
        }
      }
    },
    onSwipeEnd(f, T) {
      if (y(), !b.value) {
        b.value = !0;
        return;
      }
      const p = (/* @__PURE__ */ new Date()).getTime(), M = T === e.swipeToClose, L = (() => {
        var m, i;
        if (T === "up" || T === "down")
          return Math.abs((U == null ? void 0 : U.value) || 0) > o * (((m = u.value) == null ? void 0 : m.offsetHeight) || 0);
        if (T === "left" || T === "right")
          return Math.abs((E == null ? void 0 : E.value) || 0) > o * (((i = u.value) == null ? void 0 : i.offsetWidth) || 0);
      })(), J = p - x <= l;
      if (v && k && M && (L || J)) {
        a.value = !1;
        return;
      }
      d.value = 0;
    }
  }), V = G(() => {
    if (e.swipeToClose === "none")
      return;
    const f = (() => {
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
      class: { "vfm-bounce-back": !N.value },
      style: { transform: `${f}(${-d.value}px)` }
    };
  });
  W(
    () => b.value,
    (f) => {
      f || (d.value = 0);
    }
  ), W(
    () => a.value,
    (f) => {
      f && (d.value = 0);
    }
  ), W(
    () => d.value,
    (f, T) => {
      switch (e.swipeToClose) {
        case "down":
        case "right":
          v = f < T;
          break;
        case "up":
        case "left":
          v = f > T;
          break;
      }
    }
  );
  function j(f) {
    e.preventNavigationGestures && f.preventDefault();
  }
  function X(f) {
    const T = f == null ? void 0 : f.tagName;
    if (!T || ["INPUT", "TEXTAREA"].includes(T))
      return !1;
    const p = (() => {
      switch (e.swipeToClose) {
        case "up":
          return (f == null ? void 0 : f.scrollTop) + (f == null ? void 0 : f.clientHeight) === (f == null ? void 0 : f.scrollHeight);
        case "left":
          return (f == null ? void 0 : f.scrollLeft) + (f == null ? void 0 : f.clientWidth) === (f == null ? void 0 : f.scrollWidth);
        case "down":
          return (f == null ? void 0 : f.scrollTop) === 0;
        case "right":
          return (f == null ? void 0 : f.scrollLeft) === 0;
        default:
          return !1;
      }
    })();
    return f === u.value ? p : p && X(f == null ? void 0 : f.parentElement);
  }
  return {
    vfmContentEl: n,
    swipeBannerEl: r,
    bindSwipe: V,
    onTouchStartSwipeBanner: j
  };
}
const Gn = Symbol("vfm"), Hn = Symbol("internalVfm"), Yn = /* @__PURE__ */ Me({
  __name: "CoreModal",
  props: Ve,
  emits: ["update:modelValue", "beforeOpen", "opened", "beforeClose", "closed", "clickOutside"],
  setup(e, { emit: t }) {
    const n = e, { modals: a, openedModals: o } = $e(Gn, {
      modals: [],
      openedModals: []
    }), {
      openLastOverlay: l,
      moveToLastOpenedModals: r,
      deleteFromOpenedModals: u,
      moveToLastOpenedModalOverlays: d,
      deleteFromOpenedModalOverlays: b,
      deleteFromModals: y
    } = $e(Hn, {
      openLastOverlay: Q,
      moveToLastOpenedModals: Q,
      deleteFromOpenedModals: Q,
      moveToLastOpenedModalOverlays: Q,
      deleteFromOpenedModalOverlays: Q,
      deleteFromModals: Q
    }), v = D(), x = D(), { focus: k, blur: E } = Bn(n, { focusEl: v }), { zIndex: U, refreshZIndex: q, resetZIndex: N } = Kn(n), { modelValueLocal: V } = On(n, t), { enableBodyScroll: j, disableBodyScroll: X } = qn(n, {
      lockScrollEl: v,
      modelValueLocal: V
    }), { emitEvent: f } = jn(t);
    let T = Q;
    const {
      visible: p,
      contentVisible: M,
      contentListeners: L,
      contentTransition: J,
      overlayVisible: m,
      overlayListeners: i,
      overlayTransition: s,
      enterTransition: c,
      leaveTransition: h
    } = En(n, {
      modelValueLocal: V,
      onEntering() {
        tt(() => {
          X(), k();
        });
      },
      onEnter() {
        f("opened"), T("opened");
      },
      onLeave() {
        u(ne()), N(), j(), f("closed"), T("closed");
      }
    }), { onEsc: g, onMouseupRoot: C, onMousedown: O } = Nn(n, t, { vfmRootEl: v, vfmContentEl: x, visible: p, modelValueLocal: V }), {
      swipeBannerEl: A,
      bindSwipe: P,
      onTouchStartSwipeBanner: Z
    } = Un(n, { vfmContentEl: x, modelValueLocal: V }), _ = Ct(n, "hideOverlay"), R = G(() => ({
      modalId: n.modalId,
      hideOverlay: _,
      overlayVisible: m,
      focus: k,
      toggle(w) {
        return new Promise((B) => {
          T = Cn((pt) => B(pt));
          const K = typeof w == "boolean" ? w : !V.value;
          V.value = K, t("update:modelValue", K);
        });
      }
    }));
    function ne() {
      return R;
    }
    const le = G(() => o.indexOf(R));
    W(() => [n.zIndexFn, le.value], () => {
      p.value && q(le.value);
    }), _e(() => {
      a.push(R);
    }), V.value && ie(), W(V, (w) => {
      w ? ie() : de();
    });
    async function ie() {
      f("beforeOpen"), r(R), d(R), q(le.value), l(), c();
    }
    function de() {
      f("beforeClose"), b(R), l(), E(), h();
    }
    return et(() => {
      j(), y(R), u(R), b(R), E(), l();
    }), (w, B) => w.displayDirective !== "if" || S(p) ? fe((F(), $("div", {
      key: 0,
      ref_key: "vfmRootEl",
      ref: v,
      class: z(["vfm vfm--fixed vfm--inset", { "vfm--prevent-none": w.background === "interactive" }]),
      style: Ae({ zIndex: S(U) }),
      role: "dialog",
      "aria-modal": "true",
      onKeydown: B[7] || (B[7] = Et(() => S(g)(), ["esc"])),
      onMouseup: B[8] || (B[8] = qe(() => S(C)(), ["self"])),
      onMousedown: B[9] || (B[9] = qe((K) => S(O)(K), ["self"]))
    }, [
      _.value ? H("", !0) : (F(), Ne(je, Oe({ key: 0 }, S(s), { appear: !0 }, Ke(S(i))), {
        default: ue(() => [
          w.displayDirective !== "if" || S(m) ? fe((F(), $("div", {
            key: 0,
            class: z(["vfm__overlay vfm--overlay vfm--absolute vfm--inset vfm--prevent-none", w.overlayClass]),
            style: Ae(w.overlayStyle),
            "aria-hidden": "true"
          }, null, 6)), [
            [Be, w.displayDirective !== "show" || S(m)],
            [S(Ie), w.displayDirective !== "visible" || S(m)]
          ]) : H("", !0)
        ]),
        _: 1
      }, 16)),
      Le(je, Oe(S(J), { appear: !0 }, Ke(S(L))), {
        default: ue(() => [
          w.displayDirective !== "if" || S(M) ? fe((F(), $("div", Oe({
            key: 0,
            ref_key: "vfmContentEl",
            ref: x,
            class: ["vfm__content vfm--outline-none", [w.contentClass, { "vfm--prevent-auto": w.background === "interactive" }]],
            style: w.contentStyle,
            tabindex: "0"
          }, S(P), {
            onMousedown: B[6] || (B[6] = () => S(O)())
          }), [
            Y(w.$slots, "default"),
            w.showSwipeBanner ? (F(), $("div", {
              key: 0,
              ref_key: "swipeBannerEl",
              ref: A,
              class: "vfm-swipe-banner-container",
              onTouchstart: B[2] || (B[2] = (K) => S(Z)(K))
            }, [
              Y(w.$slots, "swipe-banner", {}, () => [
                I("div", {
                  class: "vfm-swipe-banner-back",
                  onTouchstart: B[0] || (B[0] = (K) => w.swipeToClose === "left" && K.preventDefault())
                }, null, 32),
                I("div", {
                  class: "vfm-swipe-banner-forward",
                  onTouchstart: B[1] || (B[1] = (K) => w.swipeToClose === "right" && K.preventDefault())
                }, null, 32)
              ])
            ], 544)) : !w.showSwipeBanner && w.preventNavigationGestures ? (F(), $("div", {
              key: 1,
              class: "vfm-swipe-banner-container",
              onTouchstart: B[5] || (B[5] = (K) => S(Z)(K))
            }, [
              I("div", {
                class: "vfm-swipe-banner-back",
                onTouchstart: B[3] || (B[3] = (K) => w.swipeToClose === "left" && K.preventDefault())
              }, null, 32),
              I("div", {
                class: "vfm-swipe-banner-forward",
                onTouchstart: B[4] || (B[4] = (K) => w.swipeToClose === "right" && K.preventDefault())
              }, null, 32)
            ], 32)) : H("", !0)
          ], 16)), [
            [Be, w.displayDirective !== "show" || S(M)],
            [S(Ie), w.displayDirective !== "visible" || S(M)]
          ]) : H("", !0)
        ]),
        _: 3
      }, 16)
    ], 38)), [
      [Be, w.displayDirective !== "show" || S(p)],
      [S(Ie), w.displayDirective !== "visible" || S(p)]
    ]) : H("", !0);
  }
}), Xn = {
  ...Ve,
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
}, Zn = Me({
  inheritAttrs: !1
}), bt = /* @__PURE__ */ Me({
  ...Zn,
  __name: "VueFinalModal",
  props: Xn,
  emits: ["update:modelValue", "beforeOpen", "opened", "beforeClose", "closed", "clickOutside"],
  setup(e, { emit: t }) {
    const n = _n({
      props: e,
      modalProps: Ve,
      emit: t
    });
    return (a, o) => (F(), Ne(St, {
      to: a.teleportTo ? a.teleportTo : void 0,
      disabled: !a.teleportTo
    }, [
      Le(Yn, Tt(kt(S(n))), {
        default: ue(() => [
          Y(a.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 8, ["to", "disabled"]));
  }
});
function Qn(e, t) {
  return Object.keys(t).reduce((n, a) => (n[a] = e[a], n), {});
}
function Jn(e) {
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
function _n(e) {
  const { props: t, modalProps: n, emit: a } = e, o = G(() => Qn(t, n)), l = Jn(a), r = xt();
  return G(() => ({
    ...o.value,
    ...l,
    ...r
  }));
}
const ea = { class: "p-4 empty:hidden" }, ta = {
  key: 0,
  class: "p-4 w-full flex justify-end"
}, fa = {
  __name: "squickDialog",
  props: Ce({
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
    contentClass: {
      type: String,
      default: "flex flex-col w-64 max-w-xl mx-4 shadow-sm bg-white border border-gray-400 dark:bg-gray-900 dark:border-gray-700 rounded relative"
    },
    overlayClass: {
      type: String,
      default: "!bg-neutral-100/80"
    },
    blur: {
      type: Boolean,
      default: !0
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
    const t = e, n = Ee(e, "modelValue", { local: !0 }), a = oe(), o = D(null), l = () => {
      n.value = !1;
    };
    return o.value = t.id ? t.id : "btn-" + a.uid, (r, u) => (F(), Ne(S(bt), {
      modalId: o.value,
      class: z("flex justify-center items-center"),
      contentClass: e.contentClass,
      overlayClass: `${e.overlayClass} ${e.blur ? "backdrop-blur-sm" : ""}`,
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
      default: ue(() => [
        I("div", ea, [
          Y(r.$slots, "default", {}, () => [
            We("Hello!")
          ])
        ]),
        e.mode === "alert" ? (F(), $("div", ta, [
          Le(Dt, { onClick: l }, {
            default: ue(() => [
              We("OK")
            ]),
            _: 1
          })
        ])) : H("", !0)
      ]),
      _: 3
    }, 8, ["modalId", "contentClass", "overlayClass", "content-transition", "overlay-transition", "modelValue"]));
  }
};
const na = /* @__PURE__ */ I("svg", {
  class: "transition inline stroke-black dark:stroke-white hover:stroke-red-500",
  width: "24px",
  height: "24px",
  "stroke-width": "1.5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ I("path", {
    d: "M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), aa = [
  na
], ra = { class: "p-4 empty:hidden border-b border-gray-200 space-x-4" }, oa = { class: "p-4 empty:hidden" }, la = { class: "p-4 empty:hidden" }, ba = {
  __name: "squickModal",
  props: Ce({
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
    contentClass: {
      type: String,
      default: "flex flex-col w-full md:w-1/2 max-w-full shadow-sm bg-white border border-gray-400 dark:bg-gray-900 dark:border-gray-700 rounded relative"
    },
    overlayClass: {
      type: String,
      default: "!bg-neutral-100/80"
    },
    blur: {
      type: Boolean,
      default: !0
    },
    posX: {
      type: String,
      default: "center",
      validator: (e) => ["start", "end", "center"].includes(e)
    },
    posY: {
      type: String,
      default: "center",
      validator: (e) => ["start", "end", "center"].includes(e)
    },
    responsiveWidth: {
      type: String,
      default: null
    },
    hideOverlay: {
      type: Boolean,
      default: !1
    },
    hideCloseButton: {
      type: Boolean,
      default: !1
    },
    lockScroll: {
      type: Boolean,
      default: !0
    },
    interactionOverlay: {
      type: String,
      default: "non-interactive",
      validator: (e) => ["non-interactive", "interactive"].includes(e)
    },
    focusTrap: {
      type: [Boolean, Object],
      default: () => ({ allowOutsideClick: !0 })
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
    const t = e, n = Ee(e, "modelValue", { local: !0 }), a = oe(), o = D(null), l = () => {
      n.value = !1;
    };
    return o.value = t.id ? t.id : "btn-" + a.uid, (r, u) => (F(), Ne(S(bt), {
      modalId: o.value,
      class: z(`flex justify-${e.posX} items-${e.posY}`),
      contentClass: e.contentClass,
      overlayClass: `${e.overlayClass} ${e.blur ? "backdrop-blur-sm" : ""}`,
      "content-transition": `vfm-${e.transitionContent}`,
      "overlay-transition": `vfm-${e.transitionOverlay}`,
      contentStyle: `${e.responsiveWidth !== null ? `width: ${e.responsiveWidth}px;` : ""}`,
      modelValue: n.value,
      "onUpdate:modelValue": u[0] || (u[0] = (d) => n.value = d),
      clickToClose: !1,
      hideOverlay: e.hideOverlay,
      lockScroll: e.lockScroll,
      background: e.interactionOverlay,
      focusTrap: e.focusTrap
    }, {
      default: ue(() => [
        e.hideCloseButton ? H("", !0) : (F(), $("button", {
          key: 0,
          class: "absolute right-2 top-1",
          type: "button",
          onClick: l
        }, aa)),
        I("div", ra, [
          Y(r.$slots, "modal-header")
        ]),
        I("div", oa, [
          Y(r.$slots, "modal-body")
        ]),
        I("div", la, [
          Y(r.$slots, "modal-footer")
        ])
      ]),
      _: 3
    }, 8, ["modalId", "class", "contentClass", "overlayClass", "content-transition", "overlay-transition", "contentStyle", "modelValue", "hideOverlay", "lockScroll", "background", "focusTrap"]));
  }
};
export {
  sa as squickBadgen,
  ua as squickBreakpoint,
  Dt as squickButton,
  fa as squickDialog,
  da as squickInput,
  ba as squickModal,
  ca as squickOverlay,
  va as squickTextarea
};
