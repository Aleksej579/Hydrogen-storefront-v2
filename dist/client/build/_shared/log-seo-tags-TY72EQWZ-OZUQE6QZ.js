import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-SVHZQSAC.js";

// node_modules/@shopify/hydrogen/dist/production/log-seo-tags-TY72EQWZ.js
function s({ headTags: n }) {
  return a(n), null;
}
var c = "text-transform: uppercase;";
var l = "text-transform: uppercase; font-weight: bold; text-transform: uppercase;font-weight: bold";
function a(n) {
  console.log(" "), console.log("%cSEO Meta Tags", `${l}`), console.log(" "), n.forEach((e) => {
    if (e.tag === "script") {
      if (console.log("%c\u2022 JSON LD ", c), e.children)
        try {
          console.table(JSON.parse(e.children), ["name", "content"]);
        } catch {
          console.log(e.children);
        }
    } else {
      if (console.log(`%c\u2022 ${e.tag} `, c), e.children)
        if (typeof e.children == "string")
          console.log(`\u21B3 ${e.children}`);
        else
          try {
            Object.entries(JSON.parse(e.children)).map(([t, o]) => console.log(`\u21B3 ${o}`));
          } catch {
            console.log(e.children);
          }
      if (e.props.property === "og:image:url") {
        let t = e.props.content;
        i(t).then((o) => {
          let r = `font-size: 400px; padding: 10px; background: white url(${o}) no-repeat center; background-size: contain;`;
          console.log("%c\u2022 Share image preview", c), console.log("%c  ", r), console.log(`\u21B3 ${t}`);
        }).catch((o) => {
          console.error(o);
        });
      }
      Object.entries(e.props).map(([t, o]) => {
        console.log(`\u21B3 ${t} \u2192 ${o}`);
      });
    }
    console.log(" ");
  });
}
async function i(n) {
  let o = await (await (await fetch(n)).blob()).arrayBuffer();
  return `data:image/png;base64,${g(o)}`;
}
function g(n) {
  let e = "", t = new Uint8Array(n), o = t.byteLength;
  for (let r = 0; r < o; r++)
    e += String.fromCharCode(t[r]);
  return btoa(e);
}
export {
  s as default,
  a as logSeoTags
};
//# sourceMappingURL=http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/log-seo-tags-TY72EQWZ-OZUQE6QZ.js.map
