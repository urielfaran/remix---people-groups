import "/build/_shared/chunk-AUYLHJJM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Form,
  init_dist,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-FNYN433U.js";
import {
  createHotContext
} from "/build/_shared/chunk-5SRPZOGC.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/people.$personId_.edit.tsx
init_dist();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\people.$personId_.edit.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\people.$personId_.edit.tsx"
  );
  import.meta.hot.lastModified = "1698675109821.4753";
}
function EditPerson() {
  _s();
  const person = useLoaderData();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: "contact-form", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Name:" }, void 0, false, {
        fileName: "app/routes/people.$personId_.edit.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { defaultValue: person.name, "aria-label": "name", name: "name", type: "text", placeholder: "Name" }, void 0, false, {
        fileName: "app/routes/people.$personId_.edit.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/people.$personId_.edit.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", name: "cancel", children: "Save" }, void 0, false, {
        fileName: "app/routes/people.$personId_.edit.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => navigate(-1), type: "button", children: "Cancel" }, void 0, false, {
        fileName: "app/routes/people.$personId_.edit.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/people.$personId_.edit.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/people.$personId_.edit.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_s(EditPerson, "Byv+3e8pmpoo4IrR9xpMgAj42f0=", false, function() {
  return [useLoaderData, useNavigate];
});
_c = EditPerson;
var _c;
$RefreshReg$(_c, "EditPerson");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditPerson as default
};
//# sourceMappingURL=/build/routes/people.$personId_.edit-C7FWHUS4.js.map
