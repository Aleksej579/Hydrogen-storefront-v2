import{c as i}from"/build/_shared/chunk-3UFFP3LY.js";import{m as n,s as r,y as s}from"/build/_shared/chunk-G2CXSP6I.js";import{c as e}from"/build/_shared/chunk-MEPKJ2VW.js";var t=e(s()),c=()=>[{title:"Hydrogen | Blogs"}];function g(){let{blogs:l}=r();return(0,t.jsxs)("div",{className:"blogs mt-6",children:[(0,t.jsx)("h1",{children:"Blogs"}),(0,t.jsx)("div",{className:"blogs-grid",children:(0,t.jsx)(i,{connection:l,children:({nodes:u,isLoading:a,PreviousLink:d,NextLink:p})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d,{children:a?"Loading...":(0,t.jsx)("span",{children:"\u2191 Load previous"})}),u.map(o=>(0,t.jsx)(n,{className:"blog",prefetch:"intent",to:`/blogs/${o.handle}`,children:(0,t.jsx)("h2",{children:o.title})},o.handle)),(0,t.jsx)(p,{children:a?"Loading...":(0,t.jsx)("span",{children:"Load more \u2193"})})]})})})]})}export{g as default,c as meta};

