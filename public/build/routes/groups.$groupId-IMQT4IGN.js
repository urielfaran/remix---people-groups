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
  NavLink,
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

// app/routes/groups.$groupId.tsx
var import_node = __toESM(require_node(), 1);

// app/components/peopleList.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\peopleList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\peopleList.tsx"
  );
  import.meta.hot.lastModified = "1698676031610.2788";
}
function PeopleList({
  people,
  name
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "list-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-3xl", children: name ? name + ":" : "" }, void 0, false, {
      fileName: "app/components/peopleList.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { id: "list", children: people?.[0] ? people?.map((person) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { id: "listLink", to: "/people/" + person._id, prefetch: "intent", children: person.name }, void 0, false, {
      fileName: "app/components/peopleList.tsx",
      lineNumber: 30,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/components/peopleList.tsx",
      lineNumber: 29,
      columnNumber: 54
    }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "No ",
      name
    ] }, void 0, true, {
      fileName: "app/components/peopleList.tsx",
      lineNumber: 33,
      columnNumber: 34
    }, this) }, void 0, false, {
      fileName: "app/components/peopleList.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/peopleList.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = PeopleList;
var _c;
$RefreshReg$(_c, "PeopleList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/groups.$groupId.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\groups.$groupId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\groups.$groupId.tsx"
  );
}
var meta = () => {
  return [{
    title: "Group"
  }];
};
var links = () => [{
  rel: "stylesheet",
  href: app_default
}];
function Group() {
  _s();
  const group = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: [
      group.name,
      " "
    ] }, void 0, true, {
      fileName: "app/routes/groups.$groupId.tsx",
      lineNumber: 56,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GroupsList, { groups: group.child_groups, name: "Child Groups" }, void 0, false, {
        fileName: "app/routes/groups.$groupId.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PeopleList, { people: group.people, name: "Children" }, void 0, false, {
        fileName: "app/routes/groups.$groupId.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-3xl", children: "Parent:" }, void 0, false, {
        fileName: "app/routes/groups.$groupId.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this),
      group.parent ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { id: "listLink", to: "/groups/" + group.parent._id, title: group.parent.name, prefetch: "intent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: group.parent.name }, void 0, false, {
        fileName: "app/routes/groups.$groupId.tsx",
        lineNumber: 63,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/groups.$groupId.tsx",
        lineNumber: 61,
        columnNumber: 33
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "No parent" }, void 0, false, {
        fileName: "app/routes/groups.$groupId.tsx",
        lineNumber: 64,
        columnNumber: 34
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/groups.$groupId.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { id: "editor", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { name: "destroy", method: "post", onSubmit: (event) => {
        const response = confirm("Please confirm you want to delete this record.");
        if (!response) {
          event.preventDefault();
        }
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { "aria-label": "delete", name: "_action", className: "inline-block", children: "Delete" }, void 0, false, {
        fileName: "app/routes/groups.$groupId.tsx",
        lineNumber: 74,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/groups.$groupId.tsx",
        lineNumber: 68,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { action: "edit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", children: "Edit" }, void 0, false, {
        fileName: "app/routes/groups.$groupId.tsx",
        lineNumber: 80,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/groups.$groupId.tsx",
        lineNumber: 79,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/groups.$groupId.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/groups.$groupId.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s(Group, "T9ysu3hshjC892MJpflZiyH+fnU=", false, function() {
  return [useLoaderData];
});
_c2 = Group;
var _c2;
$RefreshReg$(_c2, "Group");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Group as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/groups.$groupId-IMQT4IGN.js.map
