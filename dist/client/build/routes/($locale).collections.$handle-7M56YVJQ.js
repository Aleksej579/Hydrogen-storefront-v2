import{a as m}from"/build/_shared/chunk-OXCD42SC.js";import{a as c,b as d,c as u}from"/build/_shared/chunk-3UFFP3LY.js";import{m as i,s,y as l}from"/build/_shared/chunk-G2CXSP6I.js";import{c as r}from"/build/_shared/chunk-MEPKJ2VW.js";var t=r(l()),p=({data:e})=>[{title:`Hydrogen | ${e?.collection.title??""} Collection`}];function g(){let{collection:e}=s();return(0,t.jsxs)("div",{className:"collection mt-6",children:[(0,t.jsx)("h1",{children:e.title}),(0,t.jsx)("p",{className:"collection-description",children:e.description}),(0,t.jsx)(u,{connection:e.products,children:({nodes:n,isLoading:a,PreviousLink:o,NextLink:f})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o,{children:a?"Loading...":(0,t.jsx)("span",{children:"\u2191 Load previous"})}),(0,t.jsx)(h,{products:n}),(0,t.jsx)("br",{}),(0,t.jsx)(f,{children:a?"Loading...":(0,t.jsx)("span",{children:"Load more \u2193"})})]})})]})}function h({products:e}){return(0,t.jsx)("div",{className:"products-grid",children:e.map((n,a)=>(0,t.jsx)(P,{product:n,loading:a<8?"eager":void 0},n.id))})}function P({product:e,loading:n}){let a=e.variants.nodes[0],o=m(e.handle,a.selectedOptions);return(0,t.jsxs)(i,{className:"product-item",prefetch:"intent",to:o,children:[e.featuredImage&&(0,t.jsx)(d,{alt:e.featuredImage.altText||e.title,aspectRatio:"1/1",data:e.featuredImage,loading:n,sizes:"(min-width: 45em) 400px, 100vw"}),(0,t.jsx)("h4",{children:e.title}),(0,t.jsx)("small",{children:(0,t.jsx)(c,{data:e.priceRange.minVariantPrice})})]},e.id)}var C=`#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
    variants(first: 1) {
      nodes {
        selectedOptions {
          name
          value
        }
      }
    }
  }
`,L=`#graphql
  ${C}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
`;export{g as default,p as meta};

