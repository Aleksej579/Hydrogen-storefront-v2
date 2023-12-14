import {
  Image,
  rr
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-JGA3I4LR.js";
import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-VI4NOKQS.js";
import {
  require_jsx_dev_runtime
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-LEC4TUWW.js";
import {
  Link,
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

// app/routes/($locale).collections._index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/($locale).collections._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/($locale).collections._index.jsx"
  );
  import.meta.hot.lastModified = "1702303141090.8933";
}
function Collections() {
  _s();
  const {
    collections
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collections", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Collections" }, void 0, false, {
      fileName: "app/routes/($locale).collections._index.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(rr, { connection: collections, children: ({
      nodes,
      isLoading,
      PreviousLink,
      NextLink
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviousLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2191 Load previous" }, void 0, false, {
        fileName: "app/routes/($locale).collections._index.jsx",
        lineNumber: 61,
        columnNumber: 43
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).collections._index.jsx",
        lineNumber: 60,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CollectionsGrid, { collections: nodes }, void 0, false, {
        fileName: "app/routes/($locale).collections._index.jsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Load more \u2193" }, void 0, false, {
        fileName: "app/routes/($locale).collections._index.jsx",
        lineNumber: 65,
        columnNumber: 43
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).collections._index.jsx",
        lineNumber: 64,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).collections._index.jsx",
      lineNumber: 59,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).collections._index.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).collections._index.jsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}
_s(Collections, "6brbiW8AhZwVjyj0UPHG6QMQMU4=", false, function() {
  return [useLoaderData];
});
_c = Collections;
function CollectionsGrid({
  collections
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collections-grid", children: collections.map((collection, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CollectionItem, { collection, index }, collection.id, false, {
    fileName: "app/routes/($locale).collections._index.jsx",
    lineNumber: 83,
    columnNumber: 47
  }, this)) }, void 0, false, {
    fileName: "app/routes/($locale).collections._index.jsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
}
_c2 = CollectionsGrid;
function CollectionItem({
  collection,
  index
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "collection-item", to: `/collections/${collection.handle}`, prefetch: "intent", children: [
    collection?.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { alt: collection.image.altText || collection.title, aspectRatio: "1/1", data: collection.image, loading: index < 3 ? "eager" : void 0 }, void 0, false, {
      fileName: "app/routes/($locale).collections._index.jsx",
      lineNumber: 99,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { children: collection.title }, void 0, false, {
      fileName: "app/routes/($locale).collections._index.jsx",
      lineNumber: 100,
      columnNumber: 7
    }, this)
  ] }, collection.id, true, {
    fileName: "app/routes/($locale).collections._index.jsx",
    lineNumber: 98,
    columnNumber: 10
  }, this);
}
_c3 = CollectionItem;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "Collections");
$RefreshReg$(_c2, "CollectionsGrid");
$RefreshReg$(_c3, "CollectionItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Collections as default
};
//# sourceMappingURL=http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/routes/($locale).collections._index-ZQRZWCZG.js.map
