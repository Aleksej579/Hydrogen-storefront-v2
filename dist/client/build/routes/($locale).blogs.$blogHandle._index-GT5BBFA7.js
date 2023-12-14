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

// app/routes/($locale).blogs.$blogHandle._index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/($locale).blogs.$blogHandle._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/($locale).blogs.$blogHandle._index.jsx"
  );
  import.meta.hot.lastModified = "1702466467162.8293";
}
var meta = ({
  data
}) => {
  return [{
    title: `Hydrogen | ${data?.blog.title ?? ""} blog`
  }];
};
function Blog() {
  _s();
  const {
    blog
  } = useLoaderData();
  const {
    articles
  } = blog;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog mt-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: blog.title }, void 0, false, {
      fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(rr, { connection: articles, children: ({
      nodes,
      isLoading,
      PreviousLink,
      NextLink
    }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviousLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2191 Load previous" }, void 0, false, {
          fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
          lineNumber: 93,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
          lineNumber: 92,
          columnNumber: 17
        }, this),
        nodes.map((article, index) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArticleItem, { article, loading: index < 2 ? "eager" : "lazy" }, article.id, false, {
            fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
            lineNumber: 96,
            columnNumber: 22
          }, this);
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Load more \u2193" }, void 0, false, {
          fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
          lineNumber: 99,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
          lineNumber: 98,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
        lineNumber: 91,
        columnNumber: 18
      }, this);
    } }, void 0, false, {
      fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
      lineNumber: 84,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
    lineNumber: 81,
    columnNumber: 10
  }, this);
}
_s(Blog, "SHOFUFk+9xRgdR41JGjHYbh9Fpc=", false, function() {
  return [useLoaderData];
});
_c = Blog;
function ArticleItem({
  article,
  loading
}) {
  const publishedAt = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(article.publishedAt));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-article", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/blogs/${article.blog.handle}/${article.handle}`, children: [
    article.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-article-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { alt: article.image.altText || article.title, aspectRatio: "3/2", data: article.image, loading, sizes: "(min-width: 768px) 50vw, 100vw" }, void 0, false, {
      fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
      lineNumber: 130,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
      lineNumber: 129,
      columnNumber: 27
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: article.title }, void 0, false, {
      fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
      lineNumber: 132,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: publishedAt }, void 0, false, {
      fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
      lineNumber: 133,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
    lineNumber: 128,
    columnNumber: 7
  }, this) }, article.id, false, {
    fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
    lineNumber: 127,
    columnNumber: 10
  }, this);
}
_c2 = ArticleItem;
var _c;
var _c2;
$RefreshReg$(_c, "Blog");
$RefreshReg$(_c2, "ArticleItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Blog as default,
  meta
};
//# sourceMappingURL=http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/routes/($locale).blogs.$blogHandle._index-GT5BBFA7.js.map
