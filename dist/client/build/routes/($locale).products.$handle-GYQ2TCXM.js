import"/build/_shared/chunk-OXCD42SC.js";import{a as i,b as h,d as c,e as f}from"/build/_shared/chunk-3UFFP3LY.js";import{a as b,m as l,p as u,s as p,y as m}from"/build/_shared/chunk-G2CXSP6I.js";import{c as d}from"/build/_shared/chunk-MEPKJ2VW.js";var g=d(b());var t=d(m()),C=({data:e})=>[{title:`Hydrogen | ${e?.product.title??""}`}];function y(){let{product:e,variants:a}=p(),{selectedVariant:r}=e;return(0,t.jsxs)("div",{className:"product",children:[(0,t.jsx)(S,{image:r?.image}),(0,t.jsx)(T,{selectedVariant:r,product:e,variants:a})]})}function S({image:e}){return e?(0,t.jsx)("div",{className:"product-image",children:(0,t.jsx)(h,{alt:e.altText||"Product Image",aspectRatio:"1/1",data:e,sizes:"(min-width: 45em) 50vw, 100vw"},e.id)}):(0,t.jsx)("div",{className:"product-image"})}function T({selectedVariant:e,product:a,variants:r}){let{title:n,descriptionHtml:o}=a;return(0,t.jsxs)("div",{className:"product-main",children:[(0,t.jsx)("h1",{children:n}),(0,t.jsx)(w,{selectedVariant:e}),(0,t.jsx)("br",{}),(0,t.jsx)(g.Suspense,{fallback:(0,t.jsx)(v,{product:a,selectedVariant:e,variants:[]}),children:(0,t.jsx)(u,{errorElement:"There was a problem loading product variants",resolve:r,children:s=>(0,t.jsx)(v,{product:a,selectedVariant:e,variants:s.product?.variants.nodes||[]})})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Description"})}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:o}}),(0,t.jsx)("br",{})]})}function w({selectedVariant:e}){return(0,t.jsx)("div",{className:"product-price",children:e?.compareAtPrice?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:"Sale"}),(0,t.jsx)("br",{}),(0,t.jsxs)("div",{className:"product-price-on-sale",children:[e?(0,t.jsx)(i,{data:e.price}):null,(0,t.jsx)("s",{children:(0,t.jsx)(i,{data:e.compareAtPrice})})]})]}):e?.price&&(0,t.jsx)(i,{data:e?.price})})}function v({product:e,selectedVariant:a,variants:r}){return(0,t.jsxs)("div",{className:"product-form",children:[(0,t.jsx)(f,{handle:e.handle,options:e.options,variants:r,children:({option:n})=>(0,t.jsx)(A,{option:n},n.name)}),(0,t.jsx)("br",{}),(0,t.jsx)($,{disabled:!a||!a.availableForSale,onClick:()=>{window.location.href=window.location.href+"#cart-aside"},lines:a?[{merchandiseId:a.id,quantity:1}]:[],children:a?.availableForSale?"Add to cart":"Sold out"})]})}function A({option:e}){return(0,t.jsxs)("div",{className:"product-options",children:[(0,t.jsx)("h5",{children:e.name}),(0,t.jsx)("div",{className:"product-options-grid",children:e.values.map(({value:a,isAvailable:r,isActive:n,to:o})=>(0,t.jsx)(l,{className:"product-options-item",prefetch:"intent",preventScrollReset:!0,replace:!0,to:o,style:{border:n?"1px solid black":"1px solid transparent",opacity:r?1:.3},children:a},e.name+a))}),(0,t.jsx)("br",{})]},e.name)}function $({analytics:e,children:a,disabled:r,lines:n,onClick:o}){return(0,t.jsx)(c,{route:"/cart",inputs:{lines:n},action:c.ACTIONS.LinesAdd,children:s=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{name:"analytics",type:"hidden",value:JSON.stringify(e)}),(0,t.jsx)("button",{type:"submit",onClick:o,disabled:r??s.state!=="idle",children:a})]})})}var P=`#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
`,N=`#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    options {
      name
      values
    }
    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
      ...ProductVariant
    }
    variants(first: 1) {
      nodes {
        ...ProductVariant
      }
    }
    seo {
      description
      title
    }
  }
  ${P}
`,I=`#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${N}
`,O=`#graphql
  fragment ProductVariants on Product {
    variants(first: 250) {
      nodes {
        ...ProductVariant
      }
    }
  }
  ${P}
`,k=`#graphql
  ${O}
  query ProductVariants(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...ProductVariants
    }
  }
`;export{y as default,C as meta};

