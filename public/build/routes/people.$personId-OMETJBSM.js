import {
  GroupsList
} from "/build/_shared/chunk-ZM5ZMPFN.js";
import "/build/_shared/chunk-QZTXNDX4.js";
import {
  app_default
} from "/build/_shared/chunk-VBSRPLQ4.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Form,
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

// app/routes/people.$personId.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\people.$personId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\people.$personId.tsx"
  );
}
var meta = () => {
  return [{
    title: "Person"
  }];
};
var links = () => [{
  rel: "stylesheet",
  href: app_default
}];
function Person() {
  _s();
  const person = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: [
      person.name,
      " "
    ] }, void 0, true, {
      fileName: "app/routes/people.$personId.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupsList, { groups: person.groups, name: "Groups" }, void 0, false, {
      fileName: "app/routes/people.$personId.tsx",
      lineNumber: 57,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/people.$personId.tsx",
      lineNumber: 56,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "editor", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { name: "destroy", method: "post", onSubmit: (event) => {
        const response = confirm("Please confirm you want to delete this record.");
        if (!response) {
          event.preventDefault();
        }
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { "aria-label": "delete", name: "_action", className: "inline-block", children: "Delete" }, void 0, false, {
        fileName: "app/routes/people.$personId.tsx",
        lineNumber: 66,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/people.$personId.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "edit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Edit" }, void 0, false, {
        fileName: "app/routes/people.$personId.tsx",
        lineNumber: 72,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/people.$personId.tsx",
        lineNumber: 71,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/people.$personId.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/people.$personId.tsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}
_s(Person, "vA3YW74I1A8IzBgAHgL6sftqGHQ=", false, function() {
  return [useLoaderData];
});
_c = Person;
var _c;
$RefreshReg$(_c, "Person");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Person as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/people.$personId-OMETJBSM.js.map
