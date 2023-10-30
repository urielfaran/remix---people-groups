import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Form,
  Link,
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-FNYN433U.js";
import {
  createHotContext
} from "/build/_shared/chunk-5SRPZOGC.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/groups.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\groups.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\groups.tsx"
  );
  import.meta.hot.lastModified = "1698671343369.6392";
}
var meta = () => {
  return [{
    title: "Groups | List"
  }];
};
function GroupsIndex() {
  _s();
  const groups = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "sidebar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "People List" }, void 0, false, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: "search-form", role: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "search", name: "name", placeholder: "Type a name...", className: "border-2 rounded py-2 px-3" }, void 0, false, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 55,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", name: "_action", value: "create", children: "New" }, void 0, false, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: group._id, children: group.name ? group.name : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "No Name" }, void 0, false, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 68,
        columnNumber: 46
      }, this) }, void 0, false, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this) }, group._id, false, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 66,
        columnNumber: 34
      }, this)) }, void 0, false, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/groups.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "detail", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/groups.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/groups.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Back" }, void 0, false, {
      fileName: "app/routes/groups.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/groups.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_s(GroupsIndex, "rQn36nB4a0dctJtHQP3oHF/p1Hc=", false, function() {
  return [useLoaderData];
});
_c = GroupsIndex;
var _c;
$RefreshReg$(_c, "GroupsIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  GroupsIndex as default,
  meta
};
//# sourceMappingURL=/build/routes/groups-B3R2GKD2.js.map
