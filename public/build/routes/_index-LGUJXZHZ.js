import {
  tailwind_default
} from "/build/_shared/chunk-QZTXNDX4.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  NavLink
} from "/build/_shared/chunk-FNYN433U.js";
import {
  createHotContext
} from "/build/_shared/chunk-5SRPZOGC.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
}
var meta = () => {
  return [{
    title: "People | Groups"
  }];
};
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { className: "flex h-screen justify-center items-center text-center bg-[#f7f7f7]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/people", className: "relative block px-[0] py-[4px] [font:700_3rem_Raleway,_sans-serif] m-4", children: "People" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/groups", className: "relative block px-[0] py-[4px] [font:700_3rem_Raleway,_sans-serif] m-4", children: "Groups" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 39,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 33,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/_index-LGUJXZHZ.js.map
