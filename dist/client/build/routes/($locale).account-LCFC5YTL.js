import{i as r,j as a,l as s,s as u,y as i}from"/build/_shared/chunk-G2CXSP6I.js";import{c}from"/build/_shared/chunk-MEPKJ2VW.js";var e=c(i());function l(){return!0}function d(){let{customer:o,isPrivateRoute:t,isAccountHome:n}=u();return!t&&!n?(0,e.jsx)(r,{context:{customer:o}}):(0,e.jsxs)(m,{customer:o,children:[(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsx)(r,{context:{customer:o}})]})}function m({customer:o,children:t}){let n=o?o.firstName?`Welcome, ${o.firstName}`:"Welcome to your account.":"Account Details";return(0,e.jsxs)("div",{className:"account",children:[(0,e.jsx)("h1",{children:n}),(0,e.jsx)("br",{}),(0,e.jsx)(f,{}),t]})}function f(){function o({isActive:t,isPending:n}){return{fontWeight:t?"bold":void 0,color:n?"grey":"black"}}return(0,e.jsxs)("nav",{role:"navigation",children:[(0,e.jsx)(s,{to:"/account/orders",style:o,children:"Orders \xA0"}),"\xA0|\xA0",(0,e.jsx)(s,{to:"/account/profile",style:o,children:"\xA0 Profile \xA0"}),"\xA0|\xA0",(0,e.jsx)(s,{to:"/account/addresses",style:o,children:"\xA0 Addresses \xA0"}),"\xA0|\xA0",(0,e.jsx)(g,{})]})}function g(){return(0,e.jsxs)(a,{className:"account-logout",method:"POST",action:"/account/logout",children:["\xA0",(0,e.jsx)("button",{type:"submit",children:"Sign out"})]})}var p=`#graphql
  fragment Customer on Customer {
    acceptsMarketing
    addresses(first: 6) {
      nodes {
        ...Address
      }
    }
    defaultAddress {
      ...Address
    }
    email
    firstName
    lastName
    numberOfOrders
    phone
  }
  fragment Address on MailingAddress {
    id
    formatted
    firstName
    lastName
    company
    address1
    address2
    country
    province
    city
    zip
    phone
  }
`,A=`#graphql
  query Customer(
    $customerAccessToken: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      ...Customer
    }
  }
  ${p}
`;export{d as default,l as shouldRevalidate};

