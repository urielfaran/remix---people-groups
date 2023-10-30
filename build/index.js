var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/app.css
var app_default = "/build/_assets/app-GQVH5M7E.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Root | Root" }
], links = () => [
  { rel: "stylesheet", href: app_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/people.$personId_.edit.tsx
var people_personId_edit_exports = {};
__export(people_personId_edit_exports, {
  action: () => action,
  default: () => EditPerson,
  loader: () => loader
});
import { useLoaderData } from "@remix-run/react";
import { Form, redirect, useNavigate } from "react-router-dom";
import invariant from "tiny-invariant";

// app/api/connect.ts
import mongoose from "mongoose";
mongoose.set("strictQuery", !1);
async function dbConnect() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ServerSide"), console.log("Connected");
}

// app/api/models/person.model.ts
import mongoose2 from "mongoose";
var personSchema = new mongoose2.Schema({
  name: { type: String },
  groups: {
    type: [mongoose2.Schema.Types.ObjectId],
    ref: "group"
  }
}), personModel = mongoose2.models.person || mongoose2.model("person", personSchema, "Persons");

// app/api/models/group.model.ts
import mongoose3 from "mongoose";
var groupSchema = new mongoose3.Schema({
  name: { type: String },
  parent: {
    type: mongoose3.Schema.Types.ObjectId,
    ref: "group"
  },
  child_groups: {
    type: [mongoose3.Schema.Types.ObjectId],
    ref: "group"
  },
  people: {
    type: [mongoose3.Schema.Types.ObjectId],
    ref: "person"
  }
}), groupModel = mongoose3.models.group || mongoose3.model("group", groupSchema, "Groups");

// app/api/people.ts
async function getAllPeople(name) {
  await dbConnect();
  let people = await personModel.find({}).populate({ path: "groups", model: groupModel });
  return name == null ? people : people.filter(
    (person) => name ? person.name.toLowerCase().includes(name.toLowerCase()) : !0
  );
}
async function getPersonById(id) {
  return await personModel.findById(id).populate({ path: "groups", model: groupModel });
}
async function deletePerson(id) {
  console.log(id), await personModel.findByIdAndDelete(id);
}
async function createPerson() {
  await personModel.create({});
}
async function updatePerson(id, name) {
  await personModel.findByIdAndUpdate(id, { name });
}

// app/routes/people.$personId_.edit.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var loader = async ({ params }) => {
  invariant(params.personId, "Missing personId param");
  let person = await getPersonById(params.personId);
  if (!person)
    throw new Response("Not Found", { status: 404 });
  return person;
}, action = async ({ params, request }) => {
  invariant(params.personId, "Missing person Id param");
  let formData = await request.formData(), name = String(formData.get("name"));
  return await updatePerson(params.personId, name), redirect(`/people/${params.personId}`);
};
function EditPerson() {
  let person = useLoaderData(), navigate = useNavigate();
  return /* @__PURE__ */ jsxDEV3(Form, { id: "contact-form", method: "post", children: [
    /* @__PURE__ */ jsxDEV3("p", { children: [
      /* @__PURE__ */ jsxDEV3("span", { children: "Name:" }, void 0, !1, {
        fileName: "app/routes/people.$personId_.edit.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV3(
        "input",
        {
          defaultValue: person.name,
          "aria-label": "name",
          name: "name",
          type: "text",
          placeholder: "Name"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/people.$personId_.edit.tsx",
          lineNumber: 33,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/people.$personId_.edit.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV3("p", { children: [
      /* @__PURE__ */ jsxDEV3("button", { type: "submit", name: "cancel", children: "Save" }, void 0, !1, {
        fileName: "app/routes/people.$personId_.edit.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV3("button", { onClick: () => navigate(-1), type: "button", children: "Cancel" }, void 0, !1, {
        fileName: "app/routes/people.$personId_.edit.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/people.$personId_.edit.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/people.$personId_.edit.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this);
}

// app/routes/groups.$groupId_.edit.tsx
var groups_groupId_edit_exports = {};
__export(groups_groupId_edit_exports, {
  action: () => action2,
  default: () => EditGroup,
  loader: () => loader2
});
import { useLoaderData as useLoaderData2 } from "@remix-run/react";
import { Form as Form2, redirect as redirect2, useNavigate as useNavigate2 } from "react-router-dom";
import invariant2 from "tiny-invariant";

// app/api/groups.ts
var query = [
  {
    path: "child_groups",
    model: groupModel
  },
  {
    path: "people",
    model: personModel
  },
  {
    path: "parent",
    model: groupModel
  }
];
async function getAllGroups(name) {
  return await dbConnect(), (await groupModel.find({}).populate(query)).filter((group) => name ? group.name.toLowerCase().includes(name.toLowerCase()) : !0);
}
async function getGroupById(id) {
  return await groupModel.findById(id).populate(query);
}
async function deleteGroup(id) {
  console.log(id), await groupModel.findByIdAndDelete(id);
}
async function createGroup() {
  await groupModel.create({});
}
async function updateGroup(id, name) {
  await groupModel.findByIdAndUpdate(id, { name });
}

// app/routes/groups.$groupId_.edit.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var loader2 = async ({ params }) => {
  invariant2(params.groupId, "Missing groupId param");
  let person = await getGroupById(params.groupId);
  if (!person)
    throw new Response("Not Found", { status: 404 });
  return person;
}, action2 = async ({ params, request }) => {
  invariant2(params.groupId, "Missing groupId param");
  let formData = await request.formData(), name = String(formData.get("name"));
  return await updateGroup(params.groupId, name), redirect2(`/groups/${params.groupId}`);
};
function EditGroup() {
  let group = useLoaderData2(), navigate = useNavigate2();
  return /* @__PURE__ */ jsxDEV4(Form2, { id: "contact-form", method: "post", children: [
    /* @__PURE__ */ jsxDEV4("p", { children: [
      /* @__PURE__ */ jsxDEV4("span", { children: "Name" }, void 0, !1, {
        fileName: "app/routes/groups.$groupId_.edit.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV4(
        "input",
        {
          defaultValue: group.name,
          "aria-label": "name",
          name: "name",
          type: "text",
          placeholder: "Name"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/groups.$groupId_.edit.tsx",
          lineNumber: 33,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/groups.$groupId_.edit.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("p", { children: [
      /* @__PURE__ */ jsxDEV4("button", { type: "submit", name: "cancel", children: "Save" }, void 0, !1, {
        fileName: "app/routes/groups.$groupId_.edit.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV4("button", { onClick: () => navigate(-1), type: "button", children: "Cancel" }, void 0, !1, {
        fileName: "app/routes/groups.$groupId_.edit.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/groups.$groupId_.edit.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/groups.$groupId_.edit.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this);
}

// app/routes/people.$personId.tsx
var people_personId_exports = {};
__export(people_personId_exports, {
  action: () => action3,
  default: () => Person2,
  links: () => links2,
  loader: () => loader3,
  meta: () => meta2
});
import { redirect as redirect3 } from "@remix-run/node";
import { Form as Form3, useLoaderData as useLoaderData3 } from "@remix-run/react";
import invariant3 from "tiny-invariant";

// app/components/groupsList.tsx
import { NavLink } from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-D3T6U33B.css";

// app/components/groupsList.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function GroupsList({ groups, name }) {
  return /* @__PURE__ */ jsxDEV5("div", { id: "list-container", children: [
    /* @__PURE__ */ jsxDEV5("h3", { className: "text-3xl", children: [
      name,
      ":"
    ] }, void 0, !0, {
      fileName: "app/components/groupsList.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV5("ul", { id: "list", children: groups?.[0] ? groups?.map(
      (group) => /* @__PURE__ */ jsxDEV5("li", { children: /* @__PURE__ */ jsxDEV5(
        NavLink,
        {
          id: "listLink",
          to: "/groups/" + group._id,
          prefetch: "intent",
          children: group.name
        },
        void 0,
        !1,
        {
          fileName: "app/components/groupsList.tsx",
          lineNumber: 22,
          columnNumber: 29
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/groupsList.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ) : /* @__PURE__ */ jsxDEV5("p", { children: [
      "No ",
      name
    ] }, void 0, !0, {
      fileName: "app/components/groupsList.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/groupsList.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/groupsList.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/people.$personId.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var meta2 = () => [{ title: "Person" }], links2 = () => [
  { rel: "stylesheet", href: app_default }
], loader3 = async ({ params }) => {
  invariant3(params.personId, "Missing person Id param");
  let person = await getPersonById(params.personId);
  return console.log("fetching person... -->", person.name), person;
}, action3 = async ({ params }) => (invariant3(params.personId, "Missing person Id param"), await deletePerson(params.personId), redirect3("/people"));
function Person2() {
  let person = useLoaderData3();
  return /* @__PURE__ */ jsxDEV6("div", { children: [
    /* @__PURE__ */ jsxDEV6("h1", { children: [
      person.name,
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/people.$personId.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { children: /* @__PURE__ */ jsxDEV6(GroupsList, { groups: person.groups, name: "Groups" }, void 0, !1, {
      fileName: "app/routes/people.$personId.tsx",
      lineNumber: 36,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/people.$personId.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { id: "editor", children: [
      /* @__PURE__ */ jsxDEV6(
        Form3,
        {
          name: "destroy",
          method: "post",
          onSubmit: (event) => {
            confirm(
              "Please confirm you want to delete this record."
            ) || event.preventDefault();
          },
          children: /* @__PURE__ */ jsxDEV6(
            "button",
            {
              "aria-label": "delete",
              name: "_action",
              className: "inline-block",
              children: "Delete"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/people.$personId.tsx",
              lineNumber: 50,
              columnNumber: 21
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/people.$personId.tsx",
          lineNumber: 39,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV6(Form3, { action: "edit", children: /* @__PURE__ */ jsxDEV6("button", { type: "submit", children: "Edit" }, void 0, !1, {
        fileName: "app/routes/people.$personId.tsx",
        lineNumber: 59,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/people.$personId.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/people.$personId.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/people.$personId.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/groups.$groupId.tsx
var groups_groupId_exports = {};
__export(groups_groupId_exports, {
  action: () => action4,
  default: () => Group2,
  links: () => links3,
  loader: () => loader4,
  meta: () => meta3
});
import { redirect as redirect4 } from "@remix-run/node";
import { Form as Form5, NavLink as NavLink3, useLoaderData as useLoaderData4 } from "@remix-run/react";
import invariant4 from "tiny-invariant";

// app/components/peopleList.tsx
import { NavLink as NavLink2 } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function PeopleList({ people, name }) {
  return /* @__PURE__ */ jsxDEV7("div", { id: "list-container", children: [
    /* @__PURE__ */ jsxDEV7("h3", { className: "text-3xl", children: name ? name + ":" : "" }, void 0, !1, {
      fileName: "app/components/peopleList.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV7("ul", { id: "list", children: people?.[0] ? people?.map((person) => /* @__PURE__ */ jsxDEV7("li", { children: /* @__PURE__ */ jsxDEV7(
      NavLink2,
      {
        id: "listLink",
        to: "/people/" + person._id,
        prefetch: "intent",
        children: person.name
      },
      void 0,
      !1,
      {
        fileName: "app/components/peopleList.tsx",
        lineNumber: 17,
        columnNumber: 29
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/peopleList.tsx",
      lineNumber: 16,
      columnNumber: 25
    }, this)) : /* @__PURE__ */ jsxDEV7("p", { children: [
      "No ",
      name
    ] }, void 0, !0, {
      fileName: "app/components/peopleList.tsx",
      lineNumber: 26,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/peopleList.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/peopleList.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

// app/routes/groups.$groupId.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var meta3 = () => [{ title: "Group" }], links3 = () => [
  { rel: "stylesheet", href: app_default }
], loader4 = async ({ params }) => {
  invariant4(params.groupId, "Missing group Id param");
  let group = await getGroupById(params.groupId);
  return console.log("fetching group... -->", group.name), group;
}, action4 = async ({ params }) => (invariant4(params.groupId, "Missing person Id param"), await deleteGroup(params.groupId), redirect4("/groups"));
function Group2() {
  let group = useLoaderData4();
  return /* @__PURE__ */ jsxDEV8("div", { children: [
    /* @__PURE__ */ jsxDEV8("h1", { children: [
      group.name,
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/groups.$groupId.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { children: [
      /* @__PURE__ */ jsxDEV8(GroupsList, { groups: group.child_groups, name: "Child Groups" }, void 0, !1, {
        fileName: "app/routes/groups.$groupId.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV8(PeopleList, { people: group.people, name: "Children" }, void 0, !1, {
        fileName: "app/routes/groups.$groupId.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV8("h3", { className: "text-3xl", children: "Parent:" }, void 0, !1, {
        fileName: "app/routes/groups.$groupId.tsx",
        lineNumber: 39,
        columnNumber: 17
      }, this),
      group.parent ? /* @__PURE__ */ jsxDEV8(
        NavLink3,
        {
          id: "listLink",
          to: "/groups/" + group.parent._id,
          title: group.parent.name,
          prefetch: "intent",
          children: /* @__PURE__ */ jsxDEV8("div", { children: group.parent.name }, void 0, !1, {
            fileName: "app/routes/groups.$groupId.tsx",
            lineNumber: 47,
            columnNumber: 25
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/groups.$groupId.tsx",
          lineNumber: 41,
          columnNumber: 9
        },
        this
      ) : /* @__PURE__ */ jsxDEV8("p", { children: "No parent" }, void 0, !1, {
        fileName: "app/routes/groups.$groupId.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/groups.$groupId.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { id: "editor", children: [
      /* @__PURE__ */ jsxDEV8(
        Form5,
        {
          name: "destroy",
          method: "post",
          onSubmit: (event) => {
            confirm(
              "Please confirm you want to delete this record."
            ) || event.preventDefault();
          },
          children: /* @__PURE__ */ jsxDEV8(
            "button",
            {
              "aria-label": "delete",
              name: "_action",
              className: "inline-block",
              children: "Delete"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/groups.$groupId.tsx",
              lineNumber: 65,
              columnNumber: 21
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/groups.$groupId.tsx",
          lineNumber: 54,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV8(Form5, { action: "edit", children: /* @__PURE__ */ jsxDEV8("button", { type: "submit", children: "Edit" }, void 0, !1, {
        fileName: "app/routes/groups.$groupId.tsx",
        lineNumber: 74,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/groups.$groupId.tsx",
        lineNumber: 73,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/groups.$groupId.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/groups.$groupId.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/groups.tsx
var groups_exports = {};
__export(groups_exports, {
  action: () => action5,
  default: () => GroupsIndex,
  loader: () => loader5,
  meta: () => meta4
});
import { json } from "@remix-run/node";
import { Form as Form6, Link, Outlet as Outlet2, useLoaderData as useLoaderData5 } from "@remix-run/react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var meta4 = () => [
  { title: "Groups | List" }
], loader5 = async ({ request }) => {
  let name = new URL(request.url).searchParams.get("name");
  return await getAllGroups(name);
}, action5 = async ({ request }) => {
  let contact = await createGroup();
  return json({ contact });
};
function GroupsIndex() {
  let groups = useLoaderData5();
  return /* @__PURE__ */ jsxDEV9("body", { children: [
    /* @__PURE__ */ jsxDEV9("div", { id: "sidebar", children: [
      /* @__PURE__ */ jsxDEV9("h1", { children: "People List" }, void 0, !1, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9("div", { children: [
        /* @__PURE__ */ jsxDEV9(Form6, { id: "search-form", role: "search", children: /* @__PURE__ */ jsxDEV9("label", { className: "font-bold", children: /* @__PURE__ */ jsxDEV9(
          "input",
          {
            type: "search",
            name: "name",
            placeholder: "Type a name...",
            className: "border-2 rounded py-2 px-3"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/groups.tsx",
            lineNumber: 34,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV9(Form6, { method: "post", children: /* @__PURE__ */ jsxDEV9(
          "button",
          {
            type: "submit",
            name: "_action",
            value: "create",
            children: "New"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/groups.tsx",
            lineNumber: 43,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9("nav", { children: /* @__PURE__ */ jsxDEV9("ul", { children: groups.map((group) => /* @__PURE__ */ jsxDEV9("li", { children: /* @__PURE__ */ jsxDEV9(Link, { to: group._id, children: group.name ? group.name : /* @__PURE__ */ jsxDEV9("i", { children: "No Name" }, void 0, !1, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 59,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this) }, group._id, !1, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/groups.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { id: "detail", children: /* @__PURE__ */ jsxDEV9(Outlet2, {}, void 0, !1, {
      fileName: "app/routes/groups.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/groups.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9(Link, { to: "/", children: "Back" }, void 0, !1, {
      fileName: "app/routes/groups.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/groups.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/people.tsx
var people_exports = {};
__export(people_exports, {
  action: () => action6,
  default: () => PeopleIndex,
  loader: () => loader6,
  meta: () => meta5
});
import { json as json2 } from "@remix-run/node";
import { Form as Form7, Link as Link2, Outlet as Outlet3, useLoaderData as useLoaderData6 } from "@remix-run/react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var meta5 = () => [
  { title: "People | List" }
], loader6 = async ({ request }) => {
  let name = new URL(request.url).searchParams.get("name");
  return await getAllPeople(name);
}, action6 = async ({ request }) => {
  let contact = await createPerson();
  return json2({ contact });
};
function PeopleIndex() {
  let people = useLoaderData6();
  return /* @__PURE__ */ jsxDEV10("body", { children: [
    /* @__PURE__ */ jsxDEV10("div", { id: "sidebar", children: [
      /* @__PURE__ */ jsxDEV10("h1", { children: "People List" }, void 0, !1, {
        fileName: "app/routes/people.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { children: [
        /* @__PURE__ */ jsxDEV10(Form7, { id: "search-form", role: "search", children: /* @__PURE__ */ jsxDEV10("label", { className: "font-bold", children: /* @__PURE__ */ jsxDEV10(
          "input",
          {
            type: "search",
            name: "name",
            placeholder: "Type a name...",
            className: "border-2 rounded py-2 px-3"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/people.tsx",
            lineNumber: 33,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/people.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/people.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV10(Form7, { method: "post", children: /* @__PURE__ */ jsxDEV10(
          "button",
          {
            type: "submit",
            name: "_action",
            value: "create",
            children: "New"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/people.tsx",
            lineNumber: 42,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/people.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/people.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("nav", { children: /* @__PURE__ */ jsxDEV10("ul", { children: people.map((person) => /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10(Link2, { to: person._id, children: person.name ? person.name : /* @__PURE__ */ jsxDEV10("i", { children: "No Name" }, void 0, !1, {
        fileName: "app/routes/people.tsx",
        lineNumber: 58,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/people.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this) }, person._id, !1, {
        fileName: "app/routes/people.tsx",
        lineNumber: 54,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/people.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/people.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/people.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { id: "detail", children: /* @__PURE__ */ jsxDEV10(Outlet3, {}, void 0, !1, {
      fileName: "app/routes/people.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/people.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10(Link2, { to: "/", children: "Back" }, void 0, !1, {
      fileName: "app/routes/people.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/people.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  links: () => links4,
  meta: () => meta6
});
import { NavLink as NavLink4 } from "@remix-run/react";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var meta6 = () => [
  { title: "People | Groups" }
], links4 = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function Index() {
  return /* @__PURE__ */ jsxDEV11("div", { children: /* @__PURE__ */ jsxDEV11("body", { className: "flex h-screen justify-center items-center text-center bg-[#f7f7f7]", children: [
    /* @__PURE__ */ jsxDEV11(
      NavLink4,
      {
        to: "/people",
        className: "relative block px-[0] py-[4px] [font:700_3rem_Raleway,_sans-serif] m-4",
        children: "People"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 18,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11(
      NavLink4,
      {
        to: "/groups",
        className: "relative block px-[0] py-[4px] [font:700_3rem_Raleway,_sans-serif] m-4",
        children: "Groups"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 25,
        columnNumber: 17
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 17,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-MHXSSI65.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-FNYN433U.js", "/build/_shared/chunk-5SRPZOGC.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-K575LEVR.js", imports: ["/build/_shared/chunk-VBSRPLQ4.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-LGUJXZHZ.js", imports: ["/build/_shared/chunk-QZTXNDX4.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/groups": { id: "routes/groups", parentId: "root", path: "groups", index: void 0, caseSensitive: void 0, module: "/build/routes/groups-B3R2GKD2.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/groups.$groupId": { id: "routes/groups.$groupId", parentId: "routes/groups", path: ":groupId", index: void 0, caseSensitive: void 0, module: "/build/routes/groups.$groupId-IMQT4IGN.js", imports: ["/build/_shared/chunk-ZM5ZMPFN.js", "/build/_shared/chunk-QZTXNDX4.js", "/build/_shared/chunk-VBSRPLQ4.js", "/build/_shared/chunk-AUYLHJJM.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/groups.$groupId_.edit": { id: "routes/groups.$groupId_.edit", parentId: "routes/groups", path: ":groupId/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/groups.$groupId_.edit-W52CRTSO.js", imports: ["/build/_shared/chunk-AUYLHJJM.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/people": { id: "routes/people", parentId: "root", path: "people", index: void 0, caseSensitive: void 0, module: "/build/routes/people-CYD4GUCD.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/people.$personId": { id: "routes/people.$personId", parentId: "routes/people", path: ":personId", index: void 0, caseSensitive: void 0, module: "/build/routes/people.$personId-OMETJBSM.js", imports: ["/build/_shared/chunk-ZM5ZMPFN.js", "/build/_shared/chunk-QZTXNDX4.js", "/build/_shared/chunk-VBSRPLQ4.js", "/build/_shared/chunk-AUYLHJJM.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/people.$personId_.edit": { id: "routes/people.$personId_.edit", parentId: "routes/people", path: ":personId/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/people.$personId_.edit-C7FWHUS4.js", imports: ["/build/_shared/chunk-AUYLHJJM.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 } }, version: "6bfc0bf2", hmr: { runtime: "/build/_shared\\chunk-5SRPZOGC.js", timestamp: 1698676441561 }, url: "/build/manifest-6BFC0BF2.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/people.$personId_.edit": {
    id: "routes/people.$personId_.edit",
    parentId: "routes/people",
    path: ":personId/edit",
    index: void 0,
    caseSensitive: void 0,
    module: people_personId_edit_exports
  },
  "routes/groups.$groupId_.edit": {
    id: "routes/groups.$groupId_.edit",
    parentId: "routes/groups",
    path: ":groupId/edit",
    index: void 0,
    caseSensitive: void 0,
    module: groups_groupId_edit_exports
  },
  "routes/people.$personId": {
    id: "routes/people.$personId",
    parentId: "routes/people",
    path: ":personId",
    index: void 0,
    caseSensitive: void 0,
    module: people_personId_exports
  },
  "routes/groups.$groupId": {
    id: "routes/groups.$groupId",
    parentId: "routes/groups",
    path: ":groupId",
    index: void 0,
    caseSensitive: void 0,
    module: groups_groupId_exports
  },
  "routes/groups": {
    id: "routes/groups",
    parentId: "root",
    path: "groups",
    index: void 0,
    caseSensitive: void 0,
    module: groups_exports
  },
  "routes/people": {
    id: "routes/people",
    parentId: "root",
    path: "people",
    index: void 0,
    caseSensitive: void 0,
    module: people_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
