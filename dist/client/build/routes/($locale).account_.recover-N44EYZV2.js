import{j as a,m as r,t as s,y as n}from"/build/_shared/chunk-G2CXSP6I.js";import{c as o}from"/build/_shared/chunk-MEPKJ2VW.js";var e=o(n());function i(){let t=s();return(0,e.jsx)("div",{className:"account-recover",children:(0,e.jsx)("div",{children:t?.resetRequested?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h1",{children:"Request Sent."}),(0,e.jsx)("p",{children:"If that email address is in our system, you will receive an email with instructions about how to reset your password in a few minutes."}),(0,e.jsx)("br",{}),(0,e.jsx)(r,{to:"/account/login",children:"Return to Login"})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h1",{children:"Forgot Password."}),(0,e.jsx)("p",{children:"Enter the email address associated with your account to receive a link to reset your password."}),(0,e.jsx)("br",{}),(0,e.jsxs)(a,{method:"POST",children:[(0,e.jsxs)("fieldset",{children:[(0,e.jsx)("label",{htmlFor:"email",children:"Email"}),(0,e.jsx)("input",{"aria-label":"Email address",autoComplete:"email",autoFocus:!0,id:"email",name:"email",placeholder:"Email address",required:!0,type:"email"})]}),t?.error?(0,e.jsx)("p",{children:(0,e.jsx)("mark",{children:(0,e.jsx)("small",{children:t.error})})}):(0,e.jsx)("br",{}),(0,e.jsx)("button",{type:"submit",children:"Request Reset Link"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("br",{}),(0,e.jsx)("p",{children:(0,e.jsx)(r,{to:"/account/login",children:"Login \u2192"})})]})]})})})}export{i as default};
