import { getCurrentInstance as re, ref as $, openBlock as D, createElementBlock as q, normalizeClass as I, createElementVNode as m, renderSlot as G, mergeModels as Ee, useModel as Ce, watch as z, withDirectives as ve, vModelDynamic as yt, createCommentVNode as Q, vModelText as ht, getCurrentScope as mt, onScopeDispose as gt, unref as S, defineComponent as Ie, createBlock as Ne, Teleport as wt, createVNode as De, normalizeProps as Tt, guardReactiveProps as St, withCtx as ue, computed as U, useAttrs as kt, inject as Pe, toRef as xt, onMounted as _e, onBeforeUnmount as et, normalizeStyle as Ae, withKeys as Et, withModifiers as qe, Transition as je, mergeProps as Oe, toHandlers as We, vShow as Fe, nextTick as tt, reactive as Ke, createTextVNode as ze } from "vue";
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
    const t = e, n = re(), a = $(null);
    return a.value = t.id ? t.id : "squick-badgen-" + n.uid, (r, l) => (D(), q("div", {
      class: I(`badgen transition inline-flex flex-nowrap shadow-sm ${e.TwdRoundedLeft} ${e.TwdRoundedRight}`)
    }, [
      m("div", {
        class: I(`px-1.5 py-0.5 select-none bg-gradient-to-b from-gray-500 to-gray-700 text-white text-xs ${e.TwdRoundedLeft}`)
      }, [
        m("span", Ct, [
          G(r.$slots, "label-left")
        ])
      ], 2),
      m("div", {
        class: I(`px-1.5 py-0.5 select-none bg-gradient-to-b from-${e.TwdColor}-300 to-${e.TwdColor}-500 text-white text-xs ${e.TwdRoundedRight}`)
      }, [
        m("span", Nt, [
          G(r.$slots, "label-right")
        ])
      ], 2)
    ], 2));
  }
}, sa = {
  __name: "squickBreakpoint",
  props: {
    space: {
      type: Number,
      default: 4
    },
    posX: {
      type: String,
      default: "right",
      validator: (e) => ["left", "right"].includes(e)
    },
    posY: {
      type: String,
      default: "bottom",
      validator: (e) => ["top", "bottom"].includes(e)
    },
    TwdRounded: {
      type: String,
      default: "rounded"
    }
  },
  setup(e) {
    return (t, n) => (D(), q("div", {
      class: I(`select-none absolute ${e.posX}-${e.space} ${e.posY}-${e.space} text-white opacity-90 text-center ${e.TwdRounded} shadow shadow-black`)
    }, [
      m("div", {
        class: I(`bg-amber-600 w-10 pb-1 sm:hidden flex justify-center items-center ${e.TwdRounded}`)
      }, " xs ", 2),
      m("div", {
        class: I(`bg-lime-600 w-10 pb-1 hidden sm:flex md:hidden sm:justify-center sm:items-center ${e.TwdRounded}`)
      }, " sm ", 2),
      m("div", {
        class: I(`bg-emerald-600 w-10 pb-1 hidden md:flex lg:hidden md:justify-center md:items-center ${e.TwdRounded}`)
      }, " md ", 2),
      m("div", {
        class: I(`bg-cyan-600 w-10 pb-1 hidden lg:flex xl:hidden lg:justify-center lg:items-center ${e.TwdRounded}`)
      }, " lg ", 2),
      m("div", {
        class: I(`bg-blue-600 w-10 pb-1 hidden xl:flex 2xl:hidden xl:justify-center xl:items-center ${e.TwdRounded}`)
      }, " xl ", 2),
      m("div", {
        class: I(`bg-violet-600 w-10 pb-1 hidden 2xl:flex 2xl:justify-center 2xl:items-center ${e.TwdRounded}`)
      }, " 2xl ", 2)
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
    const t = e, n = re(), a = $(null);
    return a.value = t.id ? t.id : "squick-button-" + n.uid, (r, l) => (D(), q("button", {
      id: a.value,
      ref_key: "uniqueId",
      ref: a,
      name: e.name,
      title: e.title,
      type: e.mode,
      class: I(`
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
        active:ring-2
        disabled:cursor-not-allowed
        disabled:opacity-75
        disabled:bg-gray-100
        ${e.TwdRounded}
        ${e.TwdWidth}
        `),
      disabled: e.disabled
    }, [
      G(r.$slots, "default")
    ], 10, Ot));
  }
}, Rt = ["id", "name", "title", "type", "disabled", "required", "readonly", "placeholder"], $t = {
  key: 0,
  class: "px-2.5 w-12 text-sm absolute inset-y-0 right-0 flex justify-center items-center"
}, Bt = /* @__PURE__ */ m("path", {
  d: "M3 3l18 18M10.5 10.677a2 2 0 002.823 2.823",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), It = /* @__PURE__ */ m("path", {
  d: "M7.362 7.561C5.68 8.74 4.279 10.42 3 12c1.889 2.991 5.282 6 9 6 1.55 0 3.043-.523 4.395-1.35M12 6c4.008 0 6.701 3.158 9 6a15.66 15.66 0 01-1.078 1.5",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), Dt = [
  Bt,
  It
], Mt = /* @__PURE__ */ m("path", {
  d: "M12 14a2 2 0 100-4 2 2 0 000 4z",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), Lt = /* @__PURE__ */ m("path", {
  d: "M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), Vt = [
  Mt,
  Lt
], ua = {
  __name: "squickInput",
  props: Ee({
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
    const t = e, n = Ce(e, "modelValue", { local: !0 }), a = re(), r = $(null), l = $(t.password ? "password" : "text");
    z(() => t.password, (u, d) => {
      l.value = u ? "password" : "text";
    });
    const o = () => {
      l.value = l.value === "password" ? "text" : "password";
    };
    return r.value = t.id ? t.id : "squick-input-" + a.uid, (u, d) => (D(), q("div", {
      class: I(`relative inline-flex ${e.TwdWidth}`)
    }, [
      ve(m("input", {
        id: r.value,
        name: e.name,
        title: e.title,
        type: l.value,
        class: I(`
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
      }, null, 10, Rt), [
        [
          yt,
          n.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      e.showPassword && e.password ? (D(), q("div", $t, [
        l.value === "password" ? (D(), q("svg", {
          key: 0,
          class: "w-5 h-5 stroke-gray-400 hover:cursor-pointer",
          "stroke-width": "1.5",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          onClick: d[1] || (d[1] = (b) => o())
        }, Dt)) : Q("", !0),
        l.value === "text" ? (D(), q("svg", {
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
}, Pt = ["id"], At = /* @__PURE__ */ m("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), qt = /* @__PURE__ */ m("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), jt = [
  At,
  qt
], da = {
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
    const t = e, n = re(), a = $(null);
    return z(() => t.show, (r, l) => {
      r === !0 && a.value.focus();
    }), a.value = t.id ? t.id : "squick-overlay-" + n.uid, (r, l) => (D(), q("div", {
      id: a.value,
      ref_key: "uniqueId",
      ref: a,
      class: "relative inline-flex h-full",
      tabindex: "0"
    }, [
      G(r.$slots, "default"),
      e.show ? (D(), q("div", {
        key: 0,
        class: I(`
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
        (D(), q("svg", {
          class: I(`z-50 animate-spin h-5 w-5 ${e.dark ? "text-" + e.TwdColor + "-100" : "text-" + e.TwdColor + "-500"}`),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24"
        }, jt, 2))
      ], 2)) : Q("", !0)
    ], 8, Pt));
  }
}, Wt = ["id", "name", "title", "disabled", "required", "readonly", "placeholder"], ca = {
  __name: "squickTextarea",
  props: Ee({
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
    const t = e, n = Ce(e, "modelValue", { local: !0 }), a = re(), r = $(null);
    return r.value = t.id ? t.id : "squick-textarea-" + a.uid, (l, o) => (D(), q("div", {
      class: I(`relative inline-flex ${e.TwdWidth}`)
    }, [
      ve(m("textarea", {
        id: r.value,
        name: e.name,
        title: e.title,
        class: I(`
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
      }, null, 10, Wt), [
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
  return mt() ? (gt(e), !0) : !1;
}
function at(e) {
  return typeof e == "function" ? e() : S(e);
}
const Kt = typeof window < "u" && typeof document < "u", zt = Object.prototype.toString, Ht = (e) => zt.call(e) === "[object Object]", Ut = () => {
};
function ot(e) {
  var t;
  const n = at(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Gt = Kt ? window : void 0;
function ee(...e) {
  let t, n, a, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, a, r] = e, t = Gt) : [t, n, a, r] = e, !t)
    return Ut;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const l = [], o = () => {
    l.forEach((y) => y()), l.length = 0;
  }, u = (y, f, E, x) => (y.addEventListener(f, E, x), () => y.removeEventListener(f, E, x)), d = z(
    () => [ot(t), at(r)],
    ([y, f]) => {
      if (o(), !y)
        return;
      const E = Ht(f) ? { ...f } : f;
      l.push(
        ...n.flatMap((x) => a.map((N) => u(y, x, N, E)))
      );
    },
    { immediate: !0, flush: "post" }
  ), b = () => {
    d(), o();
  };
  return nt(b), b;
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var rt = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], we = /* @__PURE__ */ rt.join(","), lt = typeof Element > "u", oe = lt ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Te = !lt && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, Se = function e(t, n) {
  var a;
  n === void 0 && (n = !0);
  var r = t == null || (a = t.getAttribute) === null || a === void 0 ? void 0 : a.call(t, "inert"), l = r === "" || r === "true", o = l || n && t && e(t.parentNode);
  return o;
}, Yt = function(t) {
  var n, a = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return a === "" || a === "true";
}, it = function(t, n, a) {
  if (Se(t))
    return [];
  var r = Array.prototype.slice.apply(t.querySelectorAll(we));
  return n && oe.call(t, we) && r.unshift(t), r = r.filter(a), r;
}, st = function e(t, n, a) {
  for (var r = [], l = Array.from(t); l.length; ) {
    var o = l.shift();
    if (!Se(o, !1))
      if (o.tagName === "SLOT") {
        var u = o.assignedElements(), d = u.length ? u : o.children, b = e(d, !0, a);
        a.flatten ? r.push.apply(r, b) : r.push({
          scopeParent: o,
          candidates: b
        });
      } else {
        var y = oe.call(o, we);
        y && a.filter(o) && (n || !t.includes(o)) && r.push(o);
        var f = o.shadowRoot || // check for an undisclosed shadow
        typeof a.getShadowRoot == "function" && a.getShadowRoot(o), E = !Se(f, !1) && (!a.shadowRootFilter || a.shadowRootFilter(o));
        if (f && E) {
          var x = e(f === !0 ? o.children : f.children, !0, a);
          a.flatten ? r.push.apply(r, x) : r.push({
            scopeParent: o,
            candidates: x
          });
        } else
          l.unshift.apply(l, o.children);
      }
  }
  return r;
}, ut = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, ae = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Yt(t)) && !ut(t) ? 0 : t.tabIndex;
}, Xt = function(t, n) {
  var a = ae(t);
  return a < 0 && n && !ut(t) ? 0 : a;
}, Zt = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, dt = function(t) {
  return t.tagName === "INPUT";
}, Qt = function(t) {
  return dt(t) && t.type === "hidden";
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
  var n = t.form || Te(t), a = function(u) {
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
  return dt(t) && t.type === "radio";
}, nn = function(t) {
  return tn(t) && !en(t);
}, an = function(t) {
  var n, a = t && Te(t), r = (n = a) === null || n === void 0 ? void 0 : n.host, l = !1;
  if (a && a !== t) {
    var o, u, d;
    for (l = !!((o = r) !== null && o !== void 0 && (u = o.ownerDocument) !== null && u !== void 0 && u.contains(r) || t != null && (d = t.ownerDocument) !== null && d !== void 0 && d.contains(t)); !l && r; ) {
      var b, y, f;
      a = Te(r), r = (b = a) === null || b === void 0 ? void 0 : b.host, l = !!((y = r) !== null && y !== void 0 && (f = y.ownerDocument) !== null && f !== void 0 && f.contains(r));
    }
  }
  return l;
}, He = function(t) {
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
        var d = t.parentElement, b = Te(t);
        if (d && !d.shadowRoot && r(d) === !0)
          return He(t);
        t.assignedSlot ? t = t.assignedSlot : !d && b !== t.ownerDocument ? t = b.host : t = d;
      }
      t = u;
    }
    if (an(t))
      return !t.getClientRects().length;
    if (a !== "legacy-full")
      return !0;
  } else if (a === "non-zero-area")
    return He(t);
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
}, ke = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  Se(n) || Qt(n) || on(n, t) || // For a details element with a summary, the summary element gets the focus
  Jt(n) || rn(n));
}, Be = function(t, n) {
  return !(nn(n) || ae(n) < 0 || !ke(t, n));
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
  return n.getShadowRoot ? a = st([t], n.includeContainer, {
    filter: Be.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: ln
  }) : a = it(t, n.includeContainer, Be.bind(null, n)), sn(a);
}, dn = function(t, n) {
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
  return oe.call(t, we) === !1 ? !1 : Be(n, t);
}, cn = /* @__PURE__ */ rt.concat("iframe").join(","), Re = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return oe.call(t, cn) === !1 ? !1 : ke(n, t);
};
/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function Ue(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Ge(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ue(Object(n), !0).forEach(function(a) {
      fn(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ue(Object(n)).forEach(function(a) {
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
var Ye = {
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
}, be = function(t) {
  return (t == null ? void 0 : t.key) === "Tab" || (t == null ? void 0 : t.keyCode) === 9;
}, hn = function(t) {
  return be(t) && !t.shiftKey;
}, mn = function(t) {
  return be(t) && t.shiftKey;
}, Xe = function(t) {
  return setTimeout(t, 0);
}, Ze = function(t, n) {
  var a = -1;
  return t.every(function(r, l) {
    return n(r) ? (a = l, !1) : !0;
  }), a;
}, ce = function(t) {
  for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    a[r - 1] = arguments[r];
  return typeof t == "function" ? t.apply(void 0, a) : t;
}, he = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, gn = [], wn = function(t, n) {
  var a = (n == null ? void 0 : n.document) || document, r = (n == null ? void 0 : n.trapStack) || gn, l = Ge({
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
    return o.containerGroups.findIndex(function(g) {
      var w = g.container, C = g.tabbableNodes;
      return w.contains(i) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (c == null ? void 0 : c.includes(w)) || C.find(function(F) {
        return F === i;
      });
    });
  }, y = function(i) {
    var s = l[i];
    if (typeof s == "function") {
      for (var c = arguments.length, g = new Array(c > 1 ? c - 1 : 0), w = 1; w < c; w++)
        g[w - 1] = arguments[w];
      s = s.apply(void 0, g);
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
    if (i === void 0 || !Re(i, l.tabbableOptions))
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
      var s = un(i, l.tabbableOptions), c = dn(i, l.tabbableOptions), g = s.length > 0 ? s[0] : void 0, w = s.length > 0 ? s[s.length - 1] : void 0, C = c.find(function(V) {
        return se(V);
      }), F = c.slice().reverse().find(function(V) {
        return se(V);
      }), A = !!s.find(function(V) {
        return ae(V) > 0;
      });
      return {
        container: i,
        tabbableNodes: s,
        focusableNodes: c,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: A,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: g,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: w,
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
        lastDomTabbableNode: F,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(X) {
          var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, P = s.indexOf(X);
          return P < 0 ? _ ? c.slice(c.indexOf(X) + 1).find(function(ne) {
            return se(ne);
          }) : c.slice(0, c.indexOf(X)).reverse().find(function(ne) {
            return se(ne);
          }) : s[P + (_ ? 1 : -1)];
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
  }, x = function h(i) {
    var s = i.activeElement;
    if (s)
      return s.shadowRoot && s.shadowRoot.activeElement !== null ? h(s.shadowRoot) : s;
  }, N = function h(i) {
    if (i !== !1 && i !== x(document)) {
      if (!i || !i.focus) {
        h(f());
        return;
      }
      i.focus({
        preventScroll: !!l.preventScroll
      }), o.mostRecentlyFocusedNode = i, pn(i) && i.select();
    }
  }, H = function(i) {
    var s = y("setReturnFocus", i);
    return s || (s === !1 ? !1 : i);
  }, j = function(i) {
    var s = i.target, c = i.event, g = i.isBackward, w = g === void 0 ? !1 : g;
    s = s || he(c), E();
    var C = null;
    if (o.tabbableGroups.length > 0) {
      var F = b(s, c), A = F >= 0 ? o.containerGroups[F] : void 0;
      if (F < 0)
        w ? C = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : C = o.tabbableGroups[0].firstTabbableNode;
      else if (w) {
        var V = Ze(o.tabbableGroups, function(ie) {
          var de = ie.firstTabbableNode;
          return s === de;
        });
        if (V < 0 && (A.container === s || Re(s, l.tabbableOptions) && !se(s, l.tabbableOptions) && !A.nextTabbableNode(s, !1)) && (V = F), V >= 0) {
          var X = V === 0 ? o.tabbableGroups.length - 1 : V - 1, _ = o.tabbableGroups[X];
          C = ae(s) >= 0 ? _.lastTabbableNode : _.lastDomTabbableNode;
        } else
          be(c) || (C = A.nextTabbableNode(s, !1));
      } else {
        var P = Ze(o.tabbableGroups, function(ie) {
          var de = ie.lastTabbableNode;
          return s === de;
        });
        if (P < 0 && (A.container === s || Re(s, l.tabbableOptions) && !se(s, l.tabbableOptions) && !A.nextTabbableNode(s)) && (P = F), P >= 0) {
          var ne = P === o.tabbableGroups.length - 1 ? 0 : P + 1, le = o.tabbableGroups[ne];
          C = ae(s) >= 0 ? le.firstTabbableNode : le.firstDomTabbableNode;
        } else
          be(c) || (C = A.nextTabbableNode(s));
      }
    } else
      C = y("fallbackFocus");
    return C;
  }, O = function(i) {
    var s = he(i);
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
  }, L = function(i) {
    var s = he(i), c = b(s, i) >= 0;
    if (c || s instanceof Document)
      c && (o.mostRecentlyFocusedNode = s);
    else {
      i.stopImmediatePropagation();
      var g, w = !0;
      if (o.mostRecentlyFocusedNode)
        if (ae(o.mostRecentlyFocusedNode) > 0) {
          var C = b(o.mostRecentlyFocusedNode), F = o.containerGroups[C].tabbableNodes;
          if (F.length > 0) {
            var A = F.findIndex(function(V) {
              return V === o.mostRecentlyFocusedNode;
            });
            A >= 0 && (l.isKeyForward(o.recentNavEvent) ? A + 1 < F.length && (g = F[A + 1], w = !1) : A - 1 >= 0 && (g = F[A - 1], w = !1));
          }
        } else
          o.containerGroups.some(function(V) {
            return V.tabbableNodes.some(function(X) {
              return ae(X) > 0;
            });
          }) || (w = !1);
      else
        w = !1;
      w && (g = j({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: l.isKeyBackward(o.recentNavEvent)
      })), N(g || o.mostRecentlyFocusedNode || f());
    }
    o.recentNavEvent = void 0;
  }, W = function(i) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = i;
    var c = j({
      event: i,
      isBackward: s
    });
    c && (be(i) && i.preventDefault(), N(c));
  }, Y = function(i) {
    if (yn(i) && ce(l.escapeDeactivates, i) !== !1) {
      i.preventDefault(), u.deactivate();
      return;
    }
    (l.isKeyForward(i) || l.isKeyBackward(i)) && W(i, l.isKeyBackward(i));
  }, v = function(i) {
    var s = he(i);
    b(s, i) >= 0 || ce(l.clickOutsideDeactivates, i) || ce(l.allowOutsideClick, i) || (i.preventDefault(), i.stopImmediatePropagation());
  }, k = function() {
    if (o.active)
      return Ye.activateTrap(r, u), o.delayInitialFocusTimer = l.delayInitialFocus ? Xe(function() {
        N(f());
      }) : N(f()), a.addEventListener("focusin", L, !0), a.addEventListener("mousedown", O, {
        capture: !0,
        passive: !1
      }), a.addEventListener("touchstart", O, {
        capture: !0,
        passive: !1
      }), a.addEventListener("click", v, {
        capture: !0,
        passive: !1
      }), a.addEventListener("keydown", Y, {
        capture: !0,
        passive: !1
      }), u;
  }, p = function() {
    if (o.active)
      return a.removeEventListener("focusin", L, !0), a.removeEventListener("mousedown", O, !0), a.removeEventListener("touchstart", O, !0), a.removeEventListener("click", v, !0), a.removeEventListener("keydown", Y, !0), u;
  }, B = function(i) {
    var s = i.some(function(c) {
      var g = Array.from(c.removedNodes);
      return g.some(function(w) {
        return w === o.mostRecentlyFocusedNode;
      });
    });
    s && N(f());
  }, M = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(B) : void 0, J = function() {
    M && (M.disconnect(), o.active && !o.paused && o.containers.map(function(i) {
      M.observe(i, {
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
      var s = d(i, "onActivate"), c = d(i, "onPostActivate"), g = d(i, "checkCanFocusTrap");
      g || E(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = a.activeElement, s == null || s();
      var w = function() {
        g && E(), k(), J(), c == null || c();
      };
      return g ? (g(o.containers.concat()).then(w, w), this) : (w(), this);
    },
    deactivate: function(i) {
      if (!o.active)
        return this;
      var s = Ge({
        onDeactivate: l.onDeactivate,
        onPostDeactivate: l.onPostDeactivate,
        checkCanReturnFocus: l.checkCanReturnFocus
      }, i);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, p(), o.active = !1, o.paused = !1, J(), Ye.deactivateTrap(r, u);
      var c = d(s, "onDeactivate"), g = d(s, "onPostDeactivate"), w = d(s, "checkCanReturnFocus"), C = d(s, "returnFocus", "returnFocusOnDeactivate");
      c == null || c();
      var F = function() {
        Xe(function() {
          C && N(H(o.nodeFocusedBeforeActivation)), g == null || g();
        });
      };
      return C && w ? (w(H(o.nodeFocusedBeforeActivation)).then(F, F), this) : (F(), this);
    },
    pause: function(i) {
      if (o.paused || !o.active)
        return this;
      var s = d(i, "onPause"), c = d(i, "onPostPause");
      return o.paused = !0, s == null || s(), p(), J(), c == null || c(), this;
    },
    unpause: function(i) {
      if (!o.paused || !o.active)
        return this;
      var s = d(i, "onUnpause"), c = d(i, "onPostUnpause");
      return o.paused = !1, s == null || s(), E(), k(), J(), c == null || c(), this;
    },
    updateContainerElements: function(i) {
      var s = [].concat(i).filter(Boolean);
      return o.containers = s.map(function(c) {
        return typeof c == "string" ? a.querySelector(c) : c;
      }), o.active && E(), J(), this;
    }
  }, u.updateContainerElements(t), u;
};
function Tn(e, t = {}) {
  let n;
  const { immediate: a, ...r } = t, l = $(!1), o = $(!1), u = (f) => n && n.activate(f), d = (f) => n && n.deactivate(f), b = () => {
    n && (n.pause(), o.value = !0);
  }, y = () => {
    n && (n.unpause(), o.value = !1);
  };
  return z(
    () => ot(e),
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
  ), nt(() => d()), {
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
function me(e, t, n) {
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
function Qe(e = !1) {
  const t = $(e), n = $(t.value ? 0 : void 0);
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
  const { modelValueLocal: n, onEntering: a, onEnter: r, onLeaving: l, onLeave: o } = t, u = $(n.value), [d, b, y] = Qe(u.value), [f, E, x] = Qe(u.value), N = U(() => typeof e.contentTransition == "string" ? { name: e.contentTransition } : { ...e.contentTransition }), H = U(() => typeof e.overlayTransition == "string" ? { name: e.overlayTransition } : { ...e.overlayTransition }), j = U(
    () => (e.hideOverlay || E.value === 2) && b.value === 2
    /* Leave */
  );
  z(
    j,
    (W) => {
      W && (u.value = !1);
    }
  ), z(b, (W) => {
    if (W === 1) {
      if (!u.value)
        return;
      a == null || a();
    } else if (W === 0) {
      if (!u.value)
        return;
      r == null || r();
    } else
      W === 3 ? l == null || l() : W === 2 && (o == null || o());
  });
  async function O() {
    u.value = !0, await tt(), d.value = !0, f.value = !0;
  }
  function L() {
    d.value = !1, f.value = !1;
  }
  return {
    visible: u,
    contentVisible: d,
    contentListeners: y,
    contentTransition: N,
    overlayVisible: f,
    overlayListeners: x,
    overlayTransition: H,
    enterTransition: O,
    leaveTransition: L
  };
}
function xn(e, t, n) {
  const { vfmRootEl: a, vfmContentEl: r, visible: l, modelValueLocal: o } = n, u = $();
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
  const n = $(!!e.modelValue);
  return z(() => e.modelValue, (a) => {
    n.value = !!a;
  }), z(n, (a) => {
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
let Le = !1;
if (typeof window < "u") {
  const e = {
    get passive() {
      Le = !0;
    }
  };
  window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
}
const ct = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
let te = [], xe = !1, ge = 0, ft = -1, pe, ye;
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
}, Rn = (e, t) => {
  let n = !1;
  return Fn(e).forEach((a) => {
    Nn(a) && On(a, t) && (n = !0);
  }), n;
}, vt = (e) => te.some(() => Rn(e, -ge)), Ve = (e) => {
  const t = e || window.event;
  return vt(t.target) || t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
}, $n = (e) => {
  if (ye === void 0) {
    const t = !!e && e.reserveScrollBarGap === !0, n = window.innerWidth - document.documentElement.clientWidth;
    if (t && n > 0) {
      const a = parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
      ye = document.body.style.paddingRight, document.body.style.paddingRight = `${a + n}px`;
    }
  }
  pe === void 0 && (pe = document.body.style.overflow, document.body.style.overflow = "hidden");
}, Bn = () => {
  ye !== void 0 && (document.body.style.paddingRight = ye, ye = void 0), pe !== void 0 && (document.body.style.overflow = pe, pe = void 0);
}, In = (e) => e ? e.scrollHeight - e.scrollTop <= e.clientHeight : !1, Dn = (e, t) => (ge = e.targetTouches[0].clientY - ft, vt(e.target) ? !1 : t && t.scrollTop === 0 && ge > 0 || In(t) && ge < 0 ? Ve(e) : (e.stopPropagation(), !0)), Mn = (e, t) => {
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
    a.targetTouches.length === 1 && (ft = a.targetTouches[0].clientY);
  }, e.ontouchmove = (a) => {
    a.targetTouches.length === 1 && Dn(a, e);
  }, xe || (document.addEventListener("touchmove", Ve, Le ? { passive: !1 } : void 0), xe = !0)) : $n(t);
}, Ln = (e) => {
  if (!e) {
    console.error(
      "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
    );
    return;
  }
  te = te.filter((t) => t.targetElement !== e), ct ? (e.ontouchstart = null, e.ontouchmove = null, xe && te.length === 0 && (document.removeEventListener("touchmove", Ve, Le ? { passive: !1 } : void 0), xe = !1)) : te.length || Bn();
};
function Vn(e, t) {
  const { lockScrollEl: n, modelValueLocal: a } = t;
  let r;
  z(n, (u) => {
    u && (r = u);
  }, { immediate: !0 }), z(() => e.lockScroll, (u) => {
    u ? o() : l();
  }), et(() => {
    l();
  });
  function l() {
    r && Ln(r);
  }
  function o() {
    a.value && e.lockScroll && r && Mn(r, {
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
  const t = $();
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
const $e = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vov = e.style.visibility === "hidden" ? "" : e.style.visibility, n && t ? n.beforeEnter(e) : fe(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: a }) {
    !t != !n && (a ? t ? (a.beforeEnter(e), fe(e, !0), a.enter(e)) : a.leave(e, () => {
      fe(e, !1);
    }) : fe(e, t));
  },
  beforeUnmount(e, { value: t }) {
    fe(e, t);
  }
};
function fe(e, t) {
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
  ), x = $(!1), N = U(() => E.value ? f(d.value) > f(b.value) ? d.value > 0 ? "left" : "right" : b.value > 0 ? "up" : "down" : "none"), H = (p, B) => {
    o.x = p, o.y = B;
  }, j = (p, B) => {
    u.x = p, u.y = B;
  };
  let O, L;
  function W(p) {
    O.capture && !O.passive && p.preventDefault();
    const { x: B, y: M } = Je(p);
    H(B, M), j(B, M), n == null || n(p), L = [
      ee(e, "mousemove", Y, O),
      ee(e, "touchmove", Y, O),
      ee(e, "mouseup", v, O),
      ee(e, "touchend", v, O),
      ee(e, "touchcancel", v, O)
    ];
  }
  function Y(p) {
    const { x: B, y: M } = Je(p);
    j(B, M), !x.value && E.value && (x.value = !0), x.value && (a == null || a(p));
  }
  function v(p) {
    x.value && (r == null || r(p, N.value)), x.value = !1, L.forEach((B) => B());
  }
  let k = [];
  return _e(() => {
    const p = qn(window == null ? void 0 : window.document);
    l ? O = p ? { passive: !0 } : { capture: !1 } : O = p ? { passive: !1, capture: !0 } : { capture: !0 }, k = [
      ee(e, "mousedown", W, O),
      ee(e, "touchstart", W, O)
    ];
  }), {
    isSwiping: x,
    direction: N,
    coordsStart: o,
    coordsEnd: u,
    lengthX: d,
    lengthY: b,
    stop: () => {
      k.forEach((p) => p()), L.forEach((p) => p());
    }
  };
}
function Wn(e, t) {
  const { vfmContentEl: n, modelValueLocal: a } = t, r = 0.1, l = 300, o = $(), u = U(() => {
    if (!(e.swipeToClose === void 0 || e.swipeToClose === "none"))
      return e.showSwipeBanner ? o.value : n.value;
  }), d = $(0), b = $(!0);
  let y = Z, f = !0, E, x = !1;
  const { lengthX: N, lengthY: H, direction: j, isSwiping: O } = jn(u, {
    threshold: e.threshold,
    onSwipeStart(v) {
      y = ee(document, "selectionchange", () => {
        var k;
        b.value = (k = window.getSelection()) == null ? void 0 : k.isCollapsed;
      }), E = (/* @__PURE__ */ new Date()).getTime(), x = Y(v == null ? void 0 : v.target);
    },
    onSwipe() {
      var v, k, p, B;
      if (x && b.value && j.value === e.swipeToClose) {
        if (j.value === "up") {
          const M = me(Math.abs(H.value || 0), 0, ((v = u.value) == null ? void 0 : v.offsetHeight) || 0) - (e.threshold || 0);
          d.value = M;
        } else if (j.value === "down") {
          const M = me(Math.abs(H.value || 0), 0, ((k = u.value) == null ? void 0 : k.offsetHeight) || 0) - (e.threshold || 0);
          d.value = -M;
        } else if (j.value === "right") {
          const M = me(Math.abs(N.value || 0), 0, ((p = u.value) == null ? void 0 : p.offsetWidth) || 0) - (e.threshold || 0);
          d.value = -M;
        } else if (j.value === "left") {
          const M = me(Math.abs(N.value || 0), 0, ((B = u.value) == null ? void 0 : B.offsetWidth) || 0) - (e.threshold || 0);
          d.value = M;
        }
      }
    },
    onSwipeEnd(v, k) {
      if (y(), !b.value) {
        b.value = !0;
        return;
      }
      const p = (/* @__PURE__ */ new Date()).getTime(), B = k === e.swipeToClose, M = (() => {
        var h, i;
        if (k === "up" || k === "down")
          return Math.abs((H == null ? void 0 : H.value) || 0) > r * (((h = u.value) == null ? void 0 : h.offsetHeight) || 0);
        if (k === "left" || k === "right")
          return Math.abs((N == null ? void 0 : N.value) || 0) > r * (((i = u.value) == null ? void 0 : i.offsetWidth) || 0);
      })(), J = p - E <= l;
      if (f && x && B && (M || J)) {
        a.value = !1;
        return;
      }
      d.value = 0;
    }
  }), L = U(() => {
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
      class: { "vfm-bounce-back": !O.value },
      style: { transform: `${v}(${-d.value}px)` }
    };
  });
  z(
    () => b.value,
    (v) => {
      v || (d.value = 0);
    }
  ), z(
    () => a.value,
    (v) => {
      v && (d.value = 0);
    }
  ), z(
    () => d.value,
    (v, k) => {
      switch (e.swipeToClose) {
        case "down":
        case "right":
          f = v < k;
          break;
        case "up":
        case "left":
          f = v > k;
          break;
      }
    }
  );
  function W(v) {
    e.preventNavigationGestures && v.preventDefault();
  }
  function Y(v) {
    const k = v == null ? void 0 : v.tagName;
    if (!k || ["INPUT", "TEXTAREA"].includes(k))
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
    return v === u.value ? p : p && Y(v == null ? void 0 : v.parentElement);
  }
  return {
    vfmContentEl: n,
    swipeBannerEl: o,
    bindSwipe: L,
    onTouchStartSwipeBanner: W
  };
}
const Kn = Symbol("vfm"), zn = Symbol("internalVfm"), Hn = /* @__PURE__ */ Ie({
  __name: "CoreModal",
  props: Me,
  emits: ["update:modelValue", "beforeOpen", "opened", "beforeClose", "closed", "clickOutside"],
  setup(e, { emit: t }) {
    const n = e, { modals: a, openedModals: r } = Pe(Kn, {
      modals: [],
      openedModals: []
    }), {
      openLastOverlay: l,
      moveToLastOpenedModals: o,
      deleteFromOpenedModals: u,
      moveToLastOpenedModalOverlays: d,
      deleteFromOpenedModalOverlays: b,
      deleteFromModals: y
    } = Pe(zn, {
      openLastOverlay: Z,
      moveToLastOpenedModals: Z,
      deleteFromOpenedModals: Z,
      moveToLastOpenedModalOverlays: Z,
      deleteFromOpenedModalOverlays: Z,
      deleteFromModals: Z
    }), f = $(), E = $(), { focus: x, blur: N } = Cn(n, { focusEl: f }), { zIndex: H, refreshZIndex: j, resetZIndex: O } = An(n), { modelValueLocal: L } = En(n, t), { enableBodyScroll: W, disableBodyScroll: Y } = Vn(n, {
      lockScrollEl: f,
      modelValueLocal: L
    }), { emitEvent: v } = Pn(t);
    let k = Z;
    const {
      visible: p,
      contentVisible: B,
      contentListeners: M,
      contentTransition: J,
      overlayVisible: h,
      overlayListeners: i,
      overlayTransition: s,
      enterTransition: c,
      leaveTransition: g
    } = kn(n, {
      modelValueLocal: L,
      onEntering() {
        tt(() => {
          Y(), x();
        });
      },
      onEnter() {
        v("opened"), k("opened");
      },
      onLeave() {
        u(ne()), O(), W(), v("closed"), k("closed");
      }
    }), { onEsc: w, onMouseupRoot: C, onMousedown: F } = xn(n, t, { vfmRootEl: f, vfmContentEl: E, visible: p, modelValueLocal: L }), {
      swipeBannerEl: A,
      bindSwipe: V,
      onTouchStartSwipeBanner: X
    } = Wn(n, { vfmContentEl: E, modelValueLocal: L }), _ = xt(n, "hideOverlay"), P = U(() => ({
      modalId: n.modalId,
      hideOverlay: _,
      overlayVisible: h,
      focus: x,
      toggle(T) {
        return new Promise((R) => {
          k = Sn((pt) => R(pt));
          const K = typeof T == "boolean" ? T : !L.value;
          L.value = K, t("update:modelValue", K);
        });
      }
    }));
    function ne() {
      return P;
    }
    const le = U(() => r.indexOf(P));
    z(() => [n.zIndexFn, le.value], () => {
      p.value && j(le.value);
    }), _e(() => {
      a.push(P);
    }), L.value && ie(), z(L, (T) => {
      T ? ie() : de();
    });
    async function ie() {
      v("beforeOpen"), o(P), d(P), j(le.value), l(), c();
    }
    function de() {
      v("beforeClose"), b(P), l(), N(), g();
    }
    return et(() => {
      W(), y(P), u(P), b(P), N(), l();
    }), (T, R) => T.displayDirective !== "if" || S(p) ? ve((D(), q("div", {
      key: 0,
      ref_key: "vfmRootEl",
      ref: f,
      class: I(["vfm vfm--fixed vfm--inset", { "vfm--prevent-none": T.background === "interactive" }]),
      style: Ae({ zIndex: S(H) }),
      role: "dialog",
      "aria-modal": "true",
      onKeydown: R[7] || (R[7] = Et(() => S(w)(), ["esc"])),
      onMouseup: R[8] || (R[8] = qe(() => S(C)(), ["self"])),
      onMousedown: R[9] || (R[9] = qe((K) => S(F)(K), ["self"]))
    }, [
      _.value ? Q("", !0) : (D(), Ne(je, Oe({ key: 0 }, S(s), { appear: !0 }, We(S(i))), {
        default: ue(() => [
          T.displayDirective !== "if" || S(h) ? ve((D(), q("div", {
            key: 0,
            class: I(["vfm__overlay vfm--overlay vfm--absolute vfm--inset vfm--prevent-none", T.overlayClass]),
            style: Ae(T.overlayStyle),
            "aria-hidden": "true"
          }, null, 6)), [
            [Fe, T.displayDirective !== "show" || S(h)],
            [S($e), T.displayDirective !== "visible" || S(h)]
          ]) : Q("", !0)
        ]),
        _: 1
      }, 16)),
      De(je, Oe(S(J), { appear: !0 }, We(S(M))), {
        default: ue(() => [
          T.displayDirective !== "if" || S(B) ? ve((D(), q("div", Oe({
            key: 0,
            ref_key: "vfmContentEl",
            ref: E,
            class: ["vfm__content vfm--outline-none", [T.contentClass, { "vfm--prevent-auto": T.background === "interactive" }]],
            style: T.contentStyle,
            tabindex: "0"
          }, S(V), {
            onMousedown: R[6] || (R[6] = () => S(F)())
          }), [
            G(T.$slots, "default"),
            T.showSwipeBanner ? (D(), q("div", {
              key: 0,
              ref_key: "swipeBannerEl",
              ref: A,
              class: "vfm-swipe-banner-container",
              onTouchstart: R[2] || (R[2] = (K) => S(X)(K))
            }, [
              G(T.$slots, "swipe-banner", {}, () => [
                m("div", {
                  class: "vfm-swipe-banner-back",
                  onTouchstart: R[0] || (R[0] = (K) => T.swipeToClose === "left" && K.preventDefault())
                }, null, 32),
                m("div", {
                  class: "vfm-swipe-banner-forward",
                  onTouchstart: R[1] || (R[1] = (K) => T.swipeToClose === "right" && K.preventDefault())
                }, null, 32)
              ])
            ], 544)) : !T.showSwipeBanner && T.preventNavigationGestures ? (D(), q("div", {
              key: 1,
              class: "vfm-swipe-banner-container",
              onTouchstart: R[5] || (R[5] = (K) => S(X)(K))
            }, [
              m("div", {
                class: "vfm-swipe-banner-back",
                onTouchstart: R[3] || (R[3] = (K) => T.swipeToClose === "left" && K.preventDefault())
              }, null, 32),
              m("div", {
                class: "vfm-swipe-banner-forward",
                onTouchstart: R[4] || (R[4] = (K) => T.swipeToClose === "right" && K.preventDefault())
              }, null, 32)
            ], 32)) : Q("", !0)
          ], 16)), [
            [Fe, T.displayDirective !== "show" || S(B)],
            [S($e), T.displayDirective !== "visible" || S(B)]
          ]) : Q("", !0)
        ]),
        _: 3
      }, 16)
    ], 38)), [
      [Fe, T.displayDirective !== "show" || S(p)],
      [S($e), T.displayDirective !== "visible" || S(p)]
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
}, Gn = Ie({
  inheritAttrs: !1
}), bt = /* @__PURE__ */ Ie({
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
    return (a, r) => (D(), Ne(wt, {
      to: a.teleportTo ? a.teleportTo : void 0,
      disabled: !a.teleportTo
    }, [
      De(Hn, Tt(St(S(n))), {
        default: ue(() => [
          G(a.$slots, "default")
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
}, fa = {
  __name: "squickDialog",
  props: Ee({
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
    const t = e, n = Ce(e, "modelValue", { local: !0 }), a = re(), r = $(null), l = () => {
      n.value = !1;
    };
    return r.value = t.id ? t.id : "btn-" + a.uid, (o, u) => (D(), Ne(S(bt), {
      modalId: r.value,
      class: I("flex justify-center items-center"),
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
      default: ue(() => [
        m("div", Qn, [
          G(o.$slots, "default", {}, () => [
            ze("Hello!")
          ])
        ]),
        e.mode === "alert" ? (D(), q("div", Jn, [
          De(Ft, { onClick: l }, {
            default: ue(() => [
              ze("OK")
            ]),
            _: 1
          })
        ])) : Q("", !0)
      ]),
      _: 3
    }, 8, ["modalId", "content-class", "content-transition", "overlay-transition", "modelValue"]));
  }
};
const _n = { class: "p-4 empty:hidden flex flex-nowrap justify-between border-b border-gray-200 space-x-4" }, ea = { class: "grow" }, ta = /* @__PURE__ */ m("strong", null, "Hello!", -1), na = /* @__PURE__ */ m("svg", {
  class: "transition inline stroke-black dark:stroke-white hover:stroke-red-500",
  width: "24px",
  height: "24px",
  "stroke-width": "1.5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ m("path", {
    d: "M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), aa = [
  na
], oa = { class: "p-4 empty:hidden" }, ra = { class: "p-4 empty:hidden" }, va = {
  __name: "squickModal",
  props: Ee({
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
      default: "w-full md:w-1/2"
    },
    responsiveWidth: {
      type: String,
      default: null
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
    const t = e, n = Ce(e, "modelValue", { local: !0 }), a = re(), r = $(null), l = () => {
      n.value = !1;
    };
    return r.value = t.id ? t.id : "btn-" + a.uid, (o, u) => (D(), Ne(S(bt), {
      modalId: r.value,
      class: I(`flex justify-${e.posX} items-${e.posY}`),
      "content-class": `flex flex-col ${e.TwdWidth} max-w-full shadow-sm bg-white dark:bg-gray-900 border dark:border-gray-700 ${e.TwdRounded}`,
      "content-transition": `vfm-${e.transitionContent}`,
      "overlay-transition": `vfm-${e.transitionOverlay}`,
      contentStyle: `${e.responsiveWidth !== null ? `width: ${e.responsiveWidth}px;` : ""}`,
      modelValue: n.value,
      "onUpdate:modelValue": u[0] || (u[0] = (d) => n.value = d),
      clickToClose: !1,
      focusTrap: {
        allowOutsideClick: !0,
        returnFocusOnDeactivate: !1
      }
    }, {
      default: ue(() => [
        m("div", _n, [
          m("div", ea, [
            G(o.$slots, "modal-header", {}, () => [
              ta
            ])
          ]),
          m("button", {
            type: "button",
            onClick: l
          }, aa)
        ]),
        m("div", oa, [
          G(o.$slots, "modal-body")
        ]),
        m("div", ra, [
          G(o.$slots, "modal-footer")
        ])
      ]),
      _: 3
    }, 8, ["modalId", "class", "content-class", "content-transition", "overlay-transition", "contentStyle", "modelValue"]));
  }
};
export {
  ia as squickBadgen,
  sa as squickBreakpoint,
  Ft as squickButton,
  fa as squickDialog,
  ua as squickInput,
  va as squickModal,
  da as squickOverlay,
  ca as squickTextarea
};
