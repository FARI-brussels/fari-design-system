import { defineComponent as n, computed as l, createElementBlock as r, openBlock as d, normalizeClass as i, renderSlot as c } from "vue";
const m = ["disabled"], p = /* @__PURE__ */ n({
  name: "MyButton",
  __name: "Button",
  props: {
    variant: { default: "primary" },
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, s = l(() => [
      "my-btn",
      `my-btn--${t.variant}`,
      `my-btn--${t.size}`,
      { "my-btn--disabled": t.disabled }
    ]);
    return (o, a) => (d(), r("button", {
      class: i(s.value),
      disabled: o.disabled
    }, [
      c(o.$slots, "default", {}, void 0, !0)
    ], 10, m));
  }
}), u = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [o, a] of t)
    s[o] = a;
  return s;
}, _ = /* @__PURE__ */ u(p, [["__scopeId", "data-v-83510709"]]), f = {
  variables: () => Promise.resolve({              }),
  utilities: () => Promise.resolve({              })
};
export {
  _ as MyButton,
  f as styles
};
