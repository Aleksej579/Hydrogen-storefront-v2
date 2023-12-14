import {
  favicon_default
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-A4EUSYOS.js";
import {
  qe
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-JGA3I4LR.js";
import {
  require_jsx_runtime
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-VI4NOKQS.js";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-X5N6I3H5.js";
import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-GSFMRAPZ.js";
import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-SI57YLV3.js";
import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-P5MQTD6C.js";
import {
  __toESM
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-SVHZQSAC.js";

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/virtual-root.jsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/assets/styles.css
var styles_default = "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_assets/styles-XSEDMSGB.css";

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/components/Layout.jsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function Layout(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hydrogen-virtual-route", children: props.children });
}

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/virtual-root.jsx
var links = () => {
  return [
    { rel: "stylesheet", href: styles_default },
    { rel: "icon", type: "image/svg+xml", href: favicon_default }
  ];
};
function App() {
  const nonce = qe();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("title", { children: "Hydrogen" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "meta",
            {
              name: "description",
              content: "A custom storefront powered by Hydrogen"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Meta, {}),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Links, {})
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Outlet, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ScrollRestoration, { nonce }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Scripts, { nonce })
        ]
      })
    ]
  });
}
function ErrorBoundary() {
  const nonce = qe();
  const error = useRouteError();
  let errorMessage = "Unknown error";
  let errorStatus = 500;
  if (isRouteErrorResponse(error)) {
    errorMessage = error?.data?.message ?? error.data;
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("title", { children: "Hydrogen" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "meta",
            {
              name: "description",
              content: "A custom storefront powered by Hydrogen"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Meta, {}),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Links, {})
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
            className: "route-error",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { children: "Please report this error" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { children: errorStatus }),
              errorMessage && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("fieldset", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("pre", { children: errorMessage }) })
            ]
          }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ScrollRestoration, { nonce }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Scripts, { nonce })
        ]
      })
    ]
  });
}
export {
  ErrorBoundary,
  App as default,
  links
};
//# sourceMappingURL=http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/virtual-routes/virtual-root-NSL4IKHI.js.map
