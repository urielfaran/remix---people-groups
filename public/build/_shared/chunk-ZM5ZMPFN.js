import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  NavLink
} from "/build/_shared/chunk-FNYN433U.js";
import {
  createHotContext
} from "/build/_shared/chunk-5SRPZOGC.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/groupsList.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\groupsList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\groupsList.tsx"
  );
}
function GroupsList({
  groups,
  name
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "list-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-3xl", children: [
      name,
      ":"
    ] }, void 0, true, {
      fileName: "app/components/groupsList.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { id: "list", children: groups?.[0] ? groups?.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { id: "listLink", to: "/groups/" + group._id, prefetch: "intent", children: group.name }, void 0, false, {
      fileName: "app/components/groupsList.tsx",
      lineNumber: 36,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/components/groupsList.tsx",
      lineNumber: 35,
      columnNumber: 53
    }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "No ",
      name
    ] }, void 0, true, {
      fileName: "app/components/groupsList.tsx",
      lineNumber: 40,
      columnNumber: 34
    }, this) }, void 0, false, {
      fileName: "app/components/groupsList.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/groupsList.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c = GroupsList;
var _c;
$RefreshReg$(_c, "GroupsList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  GroupsList
};
//# sourceMappingURL=/build/_shared/chunk-ZM5ZMPFN.js.map
