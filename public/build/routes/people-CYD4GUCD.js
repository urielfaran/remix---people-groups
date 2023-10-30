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

// app/routes/people.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\people.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\people.tsx"
  );
  import.meta.hot.lastModified = "1698671350481.1936";
}
var meta = () => {
  return [{
    title: "People | List"
  }];
};
function PeopleIndex() {
  _s();
  const people = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "sidebar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "People List" }, void 0, false, {
        fileName: "app/routes/people.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: "search-form", role: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "search", name: "name", placeholder: "Type a name...", className: "border-2 rounded py-2 px-3" }, void 0, false, {
          fileName: "app/routes/people.tsx",
          lineNumber: 55,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/people.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/people.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", name: "_action", value: "create", children: "New" }, void 0, false, {
          fileName: "app/routes/people.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/people.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/people.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: people.map((person) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: person._id, children: person.name ? person.name : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "No Name" }, void 0, false, {
        fileName: "app/routes/people.tsx",
        lineNumber: 68,
        columnNumber: 48
      }, this) }, void 0, false, {
        fileName: "app/routes/people.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this) }, person._id, false, {
        fileName: "app/routes/people.tsx",
        lineNumber: 66,
        columnNumber: 35
      }, this)) }, void 0, false, {
        fileName: "app/routes/people.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/people.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/people.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "detail", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/people.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/people.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Back" }, void 0, false, {
      fileName: "app/routes/people.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/people.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_s(PeopleIndex, "ORe8ZhNJcvebPwjPo1lSfRloRRg=", false, function() {
  return [useLoaderData];
});
_c = PeopleIndex;
var _c;
$RefreshReg$(_c, "PeopleIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PeopleIndex as default,
  meta
};
//# sourceMappingURL=/build/routes/people-CYD4GUCD.js.map
