import {
  require_jsx_dev_runtime
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-LEC4TUWW.js";
import {
  useLoaderData
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-X5N6I3H5.js";
import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-GSFMRAPZ.js";
import {
  createHotContext
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-SI57YLV3.js";
import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-P5MQTD6C.js";
import {
  __toESM
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-SVHZQSAC.js";

// app/routes/($locale).pages.$handle.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/($locale).pages.$handle.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/($locale).pages.$handle.jsx"
  );
  import.meta.hot.lastModified = "1702303140154.9133";
}
var meta = ({
  data
}) => {
  return [{
    title: `Hydrogen | ${data?.page.title ?? ""}`
  }];
};
function Page() {
  _s();
  const {
    page
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: page.title }, void 0, false, {
      fileName: "app/routes/($locale).pages.$handle.jsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).pages.$handle.jsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { dangerouslySetInnerHTML: {
      __html: page.body
    } }, void 0, false, {
      fileName: "app/routes/($locale).pages.$handle.jsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).pages.$handle.jsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_s(Page, "3NtuklEl4O0yHgF2kvqT1ubcBDw=", false, function() {
  return [useLoaderData];
});
_c = Page;
var _c;
$RefreshReg$(_c, "Page");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page as default,
  meta
};
//# sourceMappingURL=http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/routes/($locale).pages.$handle-TRGRD3C4.js.map
