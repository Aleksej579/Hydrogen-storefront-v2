import{a as i,c as d}from"/build/_shared/chunk-3UFFP3LY.js";import{m as o,s as u,y as c}from"/build/_shared/chunk-G2CXSP6I.js";import{c as a}from"/build/_shared/chunk-MEPKJ2VW.js";var r=a(c()),f=()=>[{title:"Orders"}];function l(){let{customer:e}=u(),{orders:t,numberOfOrders:n}=e;return(0,r.jsxs)("div",{className:"orders",children:[(0,r.jsxs)("h2",{children:["Orders ",(0,r.jsxs)("small",{children:["(",n,")"]})]}),(0,r.jsx)("br",{}),t.nodes.length?(0,r.jsx)(O,{orders:t}):(0,r.jsx)(m,{})]})}function O({orders:e}){return(0,r.jsx)("div",{className:"acccount-orders",children:e?.nodes.length?(0,r.jsx)(d,{connection:e,children:({nodes:t,isLoading:n,PreviousLink:g,NextLink:p})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g,{children:n?"Loading...":(0,r.jsx)("span",{children:"\u2191 Load previous"})}),t.map(s=>(0,r.jsx)(C,{order:s},s.id)),(0,r.jsx)(p,{children:n?"Loading...":(0,r.jsx)("span",{children:"Load more \u2193"})})]})}):(0,r.jsx)(m,{})})}function m(){return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"You haven't placed any orders yet."}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:(0,r.jsx)(o,{to:"/collections",children:"Start Shopping \u2192"})})]})}function C({order:e}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("fieldset",{children:[(0,r.jsx)(o,{to:`/account/orders/${e.id}`,children:(0,r.jsxs)("strong",{children:["#",e.orderNumber]})}),(0,r.jsx)("p",{children:new Date(e.processedAt).toDateString()}),(0,r.jsx)("p",{children:e.financialStatus}),(0,r.jsx)("p",{children:e.fulfillmentStatus}),(0,r.jsx)(i,{data:e.currentTotalPrice}),(0,r.jsx)(o,{to:`/account/orders/${btoa(e.id)}`,children:"View Order \u2192"})]}),(0,r.jsx)("br",{})]})}var h=`#graphql
  fragment OrderItem on Order {
    currentTotalPrice {
      amount
      currencyCode
    }
    financialStatus
    fulfillmentStatus
    id
    lineItems(first: 10) {
      nodes {
        title
        variant {
          image {
            url
            altText
            height
            width
          }
        }
      }
    }
    orderNumber
    customerUrl
    statusUrl
    processedAt
  }
`,y=`#graphql
  fragment CustomerOrders on Customer {
    numberOfOrders
    orders(
      sortKey: PROCESSED_AT,
      reverse: true,
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...OrderItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        endCursor
        startCursor
      }
    }
  }
  ${h}
`,S=`#graphql
  ${y}
  query CustomerOrders(
    $country: CountryCode
    $customerAccessToken: String!
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      ...CustomerOrders
    }
  }
`;export{l as default,f as meta};

