var Nm=Object.create;var $o=Object.defineProperty;var Lm=Object.getOwnPropertyDescriptor;var Um=Object.getOwnPropertyNames;var Om=Object.getPrototypeOf,Fm=Object.prototype.hasOwnProperty;var To=(e,t)=>()=>(e&&(t=e(e=0)),t);var $t=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),ee=(e,t)=>{for(var r in t)$o(e,r,{get:t[r],enumerable:!0})},Pu=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Um(t))!Fm.call(e,o)&&o!==r&&$o(e,o,{get:()=>t[o],enumerable:!(n=Lm(t,o))||n.enumerable});return e};var C=(e,t,r)=>(r=e!=null?Nm(Om(e)):{},Pu(t||!e||!e.__esModule?$o(r,"default",{value:e,enumerable:!0}):r,e)),xi=e=>Pu($o({},"__esModule",{value:!0}),e);var Mu=$t(te=>{"use strict";var On=Symbol.for("react.element"),Mm=Symbol.for("react.portal"),Hm=Symbol.for("react.fragment"),jm=Symbol.for("react.strict_mode"),qm=Symbol.for("react.profiler"),Vm=Symbol.for("react.provider"),Bm=Symbol.for("react.context"),zm=Symbol.for("react.forward_ref"),Ym=Symbol.for("react.suspense"),Wm=Symbol.for("react.memo"),Gm=Symbol.for("react.lazy"),Au=Symbol.iterator;function Jm(e){return e===null||typeof e!="object"?null:(e=Au&&e[Au]||e["@@iterator"],typeof e=="function"?e:null)}var Iu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Du=Object.assign,Nu={};function un(e,t,r){this.props=e,this.context=t,this.refs=Nu,this.updater=r||Iu}un.prototype.isReactComponent={};un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lu(){}Lu.prototype=un.prototype;function Ri(e,t,r){this.props=e,this.context=t,this.refs=Nu,this.updater=r||Iu}var Ei=Ri.prototype=new Lu;Ei.constructor=Ri;Du(Ei,un.prototype);Ei.isPureReactComponent=!0;var $u=Array.isArray,Uu=Object.prototype.hasOwnProperty,Ci={current:null},Ou={key:!0,ref:!0,__self:!0,__source:!0};function Fu(e,t,r){var n,o={},a=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)Uu.call(t,n)&&!Ou.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(s===1)o.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)o[n]===void 0&&(o[n]=s[n]);return{$$typeof:On,type:e,key:a,ref:i,props:o,_owner:Ci.current}}function Xm(e,t){return{$$typeof:On,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ki(e){return typeof e=="object"&&e!==null&&e.$$typeof===On}function Km(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Tu=/\/+/g;function Si(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Km(""+e.key):t.toString(36)}function Do(e,t,r,n,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case On:case Mm:i=!0}}if(i)return i=e,o=o(i),e=n===""?"."+Si(i,0):n,$u(o)?(r="",e!=null&&(r=e.replace(Tu,"$&/")+"/"),Do(o,t,r,"",function(u){return u})):o!=null&&(ki(o)&&(o=Xm(o,r+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Tu,"$&/")+"/")+e)),t.push(o)),1;if(i=0,n=n===""?".":n+":",$u(e))for(var s=0;s<e.length;s++){a=e[s];var l=n+Si(a,s);i+=Do(a,t,r,l,o)}else if(l=Jm(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=n+Si(a,s++),i+=Do(a,t,r,l,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Io(e,t,r){if(e==null)return e;var n=[],o=0;return Do(e,n,"","",function(a){return t.call(r,a,o++)}),n}function Qm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var tt={current:null},No={transition:null},Zm={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:No,ReactCurrentOwner:Ci};te.Children={map:Io,forEach:function(e,t,r){Io(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Io(e,function(){t++}),t},toArray:function(e){return Io(e,function(t){return t})||[]},only:function(e){if(!ki(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=un;te.Fragment=Hm;te.Profiler=qm;te.PureComponent=Ri;te.StrictMode=jm;te.Suspense=Ym;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zm;te.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Du({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=Ci.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Uu.call(t,l)&&!Ou.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:On,type:e.type,key:o,ref:a,props:n,_owner:i}};te.createContext=function(e){return e={$$typeof:Bm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Vm,_context:e},e.Consumer=e};te.createElement=Fu;te.createFactory=function(e){var t=Fu.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:zm,render:e}};te.isValidElement=ki;te.lazy=function(e){return{$$typeof:Gm,_payload:{_status:-1,_result:e},_init:Qm}};te.memo=function(e,t){return{$$typeof:Wm,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=No.transition;No.transition={};try{e()}finally{No.transition=t}};te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};te.useCallback=function(e,t){return tt.current.useCallback(e,t)};te.useContext=function(e){return tt.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return tt.current.useDeferredValue(e)};te.useEffect=function(e,t){return tt.current.useEffect(e,t)};te.useId=function(){return tt.current.useId()};te.useImperativeHandle=function(e,t,r){return tt.current.useImperativeHandle(e,t,r)};te.useInsertionEffect=function(e,t){return tt.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return tt.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return tt.current.useMemo(e,t)};te.useReducer=function(e,t,r){return tt.current.useReducer(e,t,r)};te.useRef=function(e){return tt.current.useRef(e)};te.useState=function(e){return tt.current.useState(e)};te.useSyncExternalStore=function(e,t,r){return tt.current.useSyncExternalStore(e,t,r)};te.useTransition=function(){return tt.current.useTransition()};te.version="18.2.0"});var Ee=$t((SE,Hu)=>{"use strict";Hu.exports=Mu()});var mc={};ee(mc,{AbortedDeferredError:()=>It,Action:()=>le,IDLE_BLOCKER:()=>yr,IDLE_FETCHER:()=>ac,IDLE_NAVIGATION:()=>Lo,UNSAFE_DEFERRED_SYMBOL:()=>qn,UNSAFE_DeferredData:()=>Uo,UNSAFE_ErrorResponseImpl:()=>jr,UNSAFE_convertRouteMatchToUiMatch:()=>jo,UNSAFE_convertRoutesToDataRoutes:()=>Hn,UNSAFE_getPathContributingMatches:()=>Vr,UNSAFE_invariant:()=>U,UNSAFE_warning:()=>Tt,createBrowserHistory:()=>Mo,createHashHistory:()=>Ho,createMemoryHistory:()=>Fo,createPath:()=>qe,createRouter:()=>mn,createStaticHandler:()=>Ii,defer:()=>Br,generatePath:()=>fn,getStaticContextFromError:()=>Di,getToPathname:()=>yg,isDeferredData:()=>pc,isRouteErrorResponse:()=>$e,joinPaths:()=>pt,json:()=>Nt,matchPath:()=>Et,matchRoutes:()=>Le,normalizePathname:()=>nc,parsePath:()=>Ae,redirect:()=>Kt,redirectDocument:()=>hn,resolvePath:()=>qr,resolveTo:()=>pn,stripBasename:()=>Qe});function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ae.apply(this,arguments)}function Fo(e){e===void 0&&(e={});let{initialEntries:t=["/"],initialIndex:r,v5Compat:n=!1}=e,o;o=t.map((m,f)=>c(m,typeof m=="string"?null:m.state,f===0?"default":void 0));let a=l(r??o.length-1),i=le.Pop,s=null;function l(m){return Math.min(Math.max(m,0),o.length-1)}function u(){return o[a]}function c(m,f,y){f===void 0&&(f=null);let g=Xt(o?u().pathname:"/",m,f,y);return Tt(g.pathname.charAt(0)==="/","relative pathnames are not supported in memory history: "+JSON.stringify(m)),g}function d(m){return typeof m=="string"?m:qe(m)}return{get index(){return a},get action(){return i},get location(){return u()},createHref:d,createURL(m){return new URL(d(m),"http://localhost")},encodeLocation(m){let f=typeof m=="string"?Ae(m):m;return{pathname:f.pathname||"",search:f.search||"",hash:f.hash||""}},push(m,f){i=le.Push;let y=c(m,f);a+=1,o.splice(a,o.length,y),n&&s&&s({action:i,location:y,delta:1})},replace(m,f){i=le.Replace;let y=c(m,f);o[a]=y,n&&s&&s({action:i,location:y,delta:0})},go(m){i=le.Pop;let f=l(a+m),y=o[f];a=f,s&&s({action:i,location:y,delta:m})},listen(m){return s=m,()=>{s=null}}}}function Mo(e){e===void 0&&(e={});function t(n,o){let{pathname:a,search:i,hash:s}=n.location;return Xt("",{pathname:a,search:i,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:qe(o)}return ec(t,r,null,e)}function Ho(e){e===void 0&&(e={});function t(o,a){let{pathname:i="/",search:s="",hash:l=""}=Ae(o.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),Xt("",{pathname:i,search:s,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(o,a){let i=o.document.querySelector("base"),s="";if(i&&i.getAttribute("href")){let l=o.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof a=="string"?a:qe(a))}function n(o,a){Tt(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return ec(t,r,n,e)}function U(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Tt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function eg(){return Math.random().toString(36).substr(2,8)}function qu(e,t){return{usr:e.state,key:e.key,idx:t}}function Xt(e,t,r,n){return r===void 0&&(r=null),ae({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ae(t):t,{state:r,key:t&&t.key||n||eg()})}function qe(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Ae(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function ec(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:a=!1}=n,i=o.history,s=le.Pop,l=null,u=c();u==null&&(u=0,i.replaceState(ae({},i.state,{idx:u}),""));function c(){return(i.state||{idx:null}).idx}function d(){s=le.Pop;let g=c(),x=g==null?null:g-u;u=g,l&&l({action:s,location:y.location,delta:x})}function p(g,x){s=le.Push;let T=Xt(y.location,g,x);r&&r(T,g),u=c()+1;let R=qu(T,u),h=y.createHref(T);try{i.pushState(R,"",h)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;o.location.assign(h)}a&&l&&l({action:s,location:y.location,delta:1})}function m(g,x){s=le.Replace;let T=Xt(y.location,g,x);r&&r(T,g),u=c();let R=qu(T,u),h=y.createHref(T);i.replaceState(R,"",h),a&&l&&l({action:s,location:y.location,delta:0})}function f(g){let x=o.location.origin!=="null"?o.location.origin:o.location.href,T=typeof g=="string"?g:qe(g);return U(x,"No window.location.(origin|href) available to create URL for href: "+T),new URL(T,x)}let y={get action(){return s},get location(){return e(o,i)},listen(g){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(ju,d),l=g,()=>{o.removeEventListener(ju,d),l=null}},createHref(g){return t(o,g)},createURL:f,encodeLocation(g){let x=f(g);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:m,go(g){return i.go(g)}};return y}function rg(e){return e.index===!0}function Hn(e,t,r,n){return r===void 0&&(r=[]),n===void 0&&(n={}),e.map((o,a)=>{let i=[...r,a],s=typeof o.id=="string"?o.id:i.join("-");if(U(o.index!==!0||!o.children,"Cannot specify children on an index route"),U(!n[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),rg(o)){let l=ae({},o,t(o),{id:s});return n[s]=l,l}else{let l=ae({},o,t(o),{id:s,children:void 0});return n[s]=l,o.children&&(l.children=Hn(o.children,t,i,n)),l}})}function Le(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?Ae(t):t,o=Qe(n.pathname||"/",r);if(o==null)return null;let a=tc(e);ng(a);let i=null;for(let s=0;i==null&&s<a.length;++s)i=fg(a[s],hg(o));return i}function jo(e,t){let{route:r,pathname:n,params:o}=e;return{id:r.id,pathname:n,params:o,data:t[r.id],handle:r.handle}}function tc(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let o=(a,i,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:i,route:a};l.relativePath.startsWith("/")&&(U(l.relativePath.startsWith(n),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(n.length));let u=pt([n,l.relativePath]),c=r.concat(l);a.children&&a.children.length>0&&(U(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),tc(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:cg(u,a.index),routesMeta:c})};return e.forEach((a,i)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))o(a,i);else for(let l of rc(a.path))o(a,i,l)}),t}function rc(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return o?[a,""]:[a];let i=rc(n.join("/")),s=[];return s.push(...i.map(l=>l===""?a:[a,l].join("/"))),o&&s.push(...i),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function ng(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:dg(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}function cg(e,t){let r=e.split("/"),n=r.length;return r.some(Vu)&&(n+=ug),t&&(n+=ig),r.filter(o=>!Vu(o)).reduce((o,a)=>o+(og.test(a)?ag:a===""?sg:lg),n)}function dg(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function fg(e,t){let{routesMeta:r}=e,n={},o="/",a=[];for(let i=0;i<r.length;++i){let s=r[i],l=i===r.length-1,u=o==="/"?t:t.slice(o.length)||"/",c=Et({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(n,c.params);let d=s.route;a.push({params:n,pathname:pt([o,c.pathname]),pathnameBase:nc(pt([o,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(o=pt([o,c.pathnameBase]))}return a}function fn(e,t){t===void 0&&(t={});let r=e;r.endsWith("*")&&r!=="*"&&!r.endsWith("/*")&&(Tt(!1,'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".')),r=r.replace(/\*$/,"/*"));let n=r.startsWith("/")?"/":"",o=i=>i==null?"":typeof i=="string"?i:String(i),a=r.split(/\/+/).map((i,s,l)=>{if(s===l.length-1&&i==="*")return o(t["*"]);let c=i.match(/^:(\w+)(\??)$/);if(c){let[,d,p]=c,m=t[d];return U(p==="?"||m!=null,'Missing ":'+d+'" param'),o(m)}return i.replace(/\?$/g,"")}).filter(i=>!!i);return n+a.join("/")}function Et(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=pg(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:n.reduce((u,c,d)=>{if(c==="*"){let p=s[d]||"";i=a.slice(0,a.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=mg(s[d]||"",c),u},{}),pathname:a,pathnameBase:i,pattern:e}}function pg(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Tt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,s)=>(n.push(s),"/([^\\/]+)"));return e.endsWith("*")?(n.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function hg(e){try{return decodeURI(e)}catch(t){return Tt(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function mg(e,t){try{return decodeURIComponent(e)}catch(r){return Tt(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function Qe(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function qr(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?Ae(e):e;return{pathname:r?r.startsWith("/")?r:gg(r,t):t,search:vg(n),hash:wg(o)}}function gg(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function _i(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vr(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function pn(e,t,r,n){n===void 0&&(n=!1);let o;typeof e=="string"?o=Ae(e):(o=ae({},e),U(!o.pathname||!o.pathname.includes("?"),_i("?","pathname","search",o)),U(!o.pathname||!o.pathname.includes("#"),_i("#","pathname","hash",o)),U(!o.search||!o.search.includes("#"),_i("#","search","hash",o)));let a=e===""||o.pathname==="",i=a?"/":o.pathname,s;if(n||i==null)s=r;else{let d=t.length-1;if(i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),d-=1;o.pathname=p.join("/")}s=d>=0?t[d]:"/"}let l=qr(o,s),u=i&&i!=="/"&&i.endsWith("/"),c=(a||i===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}function yg(e){return e===""||e.pathname===""?"/":typeof e=="string"?Ae(e).pathname:e.pathname}function bg(e){return e instanceof Promise&&e._tracked===!0}function xg(e){if(!bg(e))return e;if(e._error)throw e._error;return e._data}function $e(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function mn(e){let t=e.window?e.window:typeof window<"u"?window:void 0,r=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",n=!r;U(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let v=e.detectErrorBoundary;o=w=>({hasErrorBoundary:v(w)})}else o=sc;let a={},i=Hn(e.routes,o,void 0,a),s,l=e.basename||"/",u=ae({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),c=null,d=new Set,p=null,m=null,f=null,y=e.hydrationData!=null,g=Le(i,e.history.location,l),x=null;if(g==null){let v=Pe(404,{pathname:e.history.location.pathname}),{matches:w,route:S}=Oo(i);g=w,x={[S.id]:v}}let T=!g.some(v=>v.route.lazy)&&(!g.some(v=>v.route.loader)||e.hydrationData!=null),R,h={historyAction:e.history.action,location:e.history.location,matches:g,initialized:T,navigation:Lo,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||x,fetchers:new Map,blockers:new Map},I=le.Pop,M=!1,P,Y=!1,De=new Map,He=null,Ne=!1,Ke=!1,hr=[],Yt=[],me=new Map,ko=0,In=-1,sn=new Map,Wt=new Set,ln=new Map,Ir=new Map,Dr=new Map,fi=!1;function bm(){if(c=e.history.listen(v=>{let{action:w,location:S,delta:D}=v;if(fi){fi=!1;return}Tt(Dr.size===0||D!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let G=Eu({currentLocation:h.location,nextLocation:S,historyAction:w});if(G&&D!=null){fi=!0,e.history.go(D*-1),Po(G,{state:"blocked",location:S,proceed(){Po(G,{state:"proceeding",proceed:void 0,reset:void 0,location:S}),e.history.go(D)},reset(){let W=new Map(h.blockers);W.set(G,yr),Be({blockers:W})}});return}return Nr(w,S)}),r){Ng(t,De);let v=()=>Lg(t,De);t.addEventListener("pagehide",v),He=()=>t.removeEventListener("pagehide",v)}return h.initialized||Nr(le.Pop,h.location),R}function xm(){c&&c(),He&&He(),d.clear(),P&&P.abort(),h.fetchers.forEach((v,w)=>hi(w)),h.blockers.forEach((v,w)=>Ru(w))}function Sm(v){return d.add(v),()=>d.delete(v)}function Be(v,w){h=ae({},h,v),d.forEach(S=>S(h,{unstable_viewTransitionOpts:w}))}function Dn(v,w){var S,D;let G=h.actionData!=null&&h.navigation.formMethod!=null&&Rt(h.navigation.formMethod)&&h.navigation.state==="loading"&&((S=v.state)==null?void 0:S._isRedirect)!==!0,W;w.actionData?Object.keys(w.actionData).length>0?W=w.actionData:W=null:G?W=h.actionData:W=null;let J=w.loaderData?Xu(h.loaderData,w.loaderData,w.matches||[],w.errors):h.loaderData,q=h.blockers;q.size>0&&(q=new Map(q),q.forEach((Re,ne)=>q.set(ne,yr)));let H=M===!0||h.navigation.formMethod!=null&&Rt(h.navigation.formMethod)&&((D=v.state)==null?void 0:D._isRedirect)!==!0;s&&(i=s,s=void 0),Ne||I===le.Pop||(I===le.Push?e.history.push(v,v.state):I===le.Replace&&e.history.replace(v,v.state));let pe;if(I===le.Pop){let Re=De.get(h.location.pathname);Re&&Re.has(v.pathname)?pe={currentLocation:h.location,nextLocation:v}:De.has(v.pathname)&&(pe={currentLocation:v,nextLocation:h.location})}else if(Y){let Re=De.get(h.location.pathname);Re?Re.add(v.pathname):(Re=new Set([v.pathname]),De.set(h.location.pathname,Re)),pe={currentLocation:h.location,nextLocation:v}}Be(ae({},w,{actionData:W,loaderData:J,historyAction:I,location:v,initialized:!0,navigation:Lo,revalidation:"idle",restoreScrollPosition:ku(v,w.matches||h.matches),preventScrollReset:H,blockers:q}),pe),I=le.Pop,M=!1,Y=!1,Ne=!1,Ke=!1,hr=[],Yt=[]}async function yu(v,w){if(typeof v=="number"){e.history.go(v);return}let S=Ai(h.location,h.matches,l,u.v7_prependBasename,v,w?.fromRouteId,w?.relative),{path:D,submission:G,error:W}=Bu(u.v7_normalizeFormMethod,!1,S,w),J=h.location,q=Xt(h.location,D,w&&w.state);q=ae({},q,e.history.encodeLocation(q));let H=w&&w.replace!=null?w.replace:void 0,pe=le.Push;H===!0?pe=le.Replace:H===!1||G!=null&&Rt(G.formMethod)&&G.formAction===h.location.pathname+h.location.search&&(pe=le.Replace);let Re=w&&"preventScrollReset"in w?w.preventScrollReset===!0:void 0,ne=Eu({currentLocation:J,nextLocation:q,historyAction:pe});if(ne){Po(ne,{state:"blocked",location:q,proceed(){Po(ne,{state:"proceeding",proceed:void 0,reset:void 0,location:q}),yu(v,w)},reset(){let he=new Map(h.blockers);he.set(ne,yr),Be({blockers:he})}});return}return await Nr(pe,q,{submission:G,pendingError:W,preventScrollReset:Re,replace:w&&w.replace,enableViewTransition:w&&w.unstable_viewTransition})}function Rm(){if(pi(),Be({revalidation:"loading"}),h.navigation.state!=="submitting"){if(h.navigation.state==="idle"){Nr(h.historyAction,h.location,{startUninterruptedRevalidation:!0});return}Nr(I||h.historyAction,h.navigation.location,{overrideNavigation:h.navigation})}}async function Nr(v,w,S){P&&P.abort(),P=null,I=v,Ne=(S&&S.startUninterruptedRevalidation)===!0,Tm(h.location,h.matches),M=(S&&S.preventScrollReset)===!0,Y=(S&&S.enableViewTransition)===!0;let D=s||i,G=S&&S.overrideNavigation,W=Le(D,w,l);if(!W){let he=Pe(404,{pathname:w.pathname}),{matches:_e,route:Lr}=Oo(D);mi(),Dn(w,{matches:_e,loaderData:{},errors:{[Lr.id]:he}});return}if(h.initialized&&!Ke&&Ag(h.location,w)&&!(S&&S.submission&&Rt(S.submission.formMethod))){Dn(w,{matches:W});return}P=new AbortController;let J=Fn(e.history,w,P.signal,S&&S.submission),q,H;if(S&&S.pendingError)H={[Fr(W).route.id]:S.pendingError};else if(S&&S.submission&&Rt(S.submission.formMethod)){let he=await Em(J,w,S.submission,W,{replace:S.replace});if(he.shortCircuited)return;q=he.pendingActionData,H=he.pendingActionError,G=Pi(w,S.submission),J=new Request(J.url,{signal:J.signal})}let{shortCircuited:pe,loaderData:Re,errors:ne}=await Cm(J,w,W,G,S&&S.submission,S&&S.fetcherSubmission,S&&S.replace,q,H);pe||(P=null,Dn(w,ae({matches:W},q?{actionData:q}:{},{loaderData:Re,errors:ne})))}async function Em(v,w,S,D,G){G===void 0&&(G={}),pi();let W=Ig(w,S);Be({navigation:W});let J,q=jn(D,w);if(!q.route.action&&!q.route.lazy)J={type:ge.error,error:Pe(405,{method:v.method,pathname:w.pathname,routeId:q.route.id})};else if(J=await Or("action",v,q,D,a,o,l),v.signal.aborted)return{shortCircuited:!0};if(Hr(J)){let H;return G&&G.replace!=null?H=G.replace:H=J.location===h.location.pathname+h.location.search,await Nn(h,J,{submission:S,replace:H}),{shortCircuited:!0}}if(Mr(J)){let H=Fr(D,q.route.id);return(G&&G.replace)!==!0&&(I=le.Push),{pendingActionData:{},pendingActionError:{[H.route.id]:J.error}}}if(vr(J))throw Pe(400,{type:"defer-action"});return{pendingActionData:{[q.route.id]:J.data}}}async function Cm(v,w,S,D,G,W,J,q,H){let pe=D||Pi(w,G),Re=G||W||Zu(pe),ne=s||i,[he,_e]=zu(e.history,h,S,Re,w,Ke,hr,Yt,ln,Wt,ne,l,q,H);if(mi(de=>!(S&&S.some(At=>At.route.id===de))||he&&he.some(At=>At.route.id===de)),In=++ko,he.length===0&&_e.length===0){let de=xu();return Dn(w,ae({matches:S,loaderData:{},errors:H||null},q?{actionData:q}:{},de?{fetchers:new Map(h.fetchers)}:{})),{shortCircuited:!0}}if(!Ne){_e.forEach(At=>{let gr=h.fetchers.get(At.key),bi=Mn(void 0,gr?gr.data:void 0);h.fetchers.set(At.key,bi)});let de=q||h.actionData;Be(ae({navigation:pe},de?Object.keys(de).length===0?{actionData:null}:{actionData:de}:{},_e.length>0?{fetchers:new Map(h.fetchers)}:{}))}_e.forEach(de=>{me.has(de.key)&&mr(de.key),de.controller&&me.set(de.key,de.controller)});let Lr=()=>_e.forEach(de=>mr(de.key));P&&P.signal.addEventListener("abort",Lr);let{results:Ur,loaderResults:Ln,fetcherResults:gi}=await wu(h.matches,S,he,_e,v);if(v.signal.aborted)return{shortCircuited:!0};P&&P.signal.removeEventListener("abort",Lr),_e.forEach(de=>me.delete(de.key));let Gt=Ku(Ur);if(Gt){if(Gt.idx>=he.length){let de=_e[Gt.idx-he.length].key;Wt.add(de)}return await Nn(h,Gt.result,{replace:J}),{shortCircuited:!0}}let{loaderData:Jt,errors:Ao}=Ju(h,S,he,Ln,H,_e,gi,Ir);Ir.forEach((de,At)=>{de.subscribe(gr=>{(gr||de.done)&&Ir.delete(At)})});let yi=xu(),vi=Su(In),wi=yi||vi||_e.length>0;return ae({loaderData:Jt,errors:Ao},wi?{fetchers:new Map(h.fetchers)}:{})}function vu(v){return h.fetchers.get(v)||ac}function km(v,w,S,D){if(n)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");me.has(v)&&mr(v);let G=s||i,W=Ai(h.location,h.matches,l,u.v7_prependBasename,S,w,D?.relative),J=Le(G,W,l);if(!J){_o(v,w,Pe(404,{pathname:W}));return}let{path:q,submission:H,error:pe}=Bu(u.v7_normalizeFormMethod,!0,W,D);if(pe){_o(v,w,pe);return}let Re=jn(J,q);if(M=(D&&D.preventScrollReset)===!0,H&&Rt(H.formMethod)){_m(v,w,q,Re,J,H);return}ln.set(v,{routeId:w,path:q}),Pm(v,w,q,Re,J,H)}async function _m(v,w,S,D,G,W){if(pi(),ln.delete(v),!D.route.action&&!D.route.lazy){let je=Pe(405,{method:W.formMethod,pathname:S,routeId:w});_o(v,w,je);return}let J=h.fetchers.get(v),q=Dg(W,J);h.fetchers.set(v,q),Be({fetchers:new Map(h.fetchers)});let H=new AbortController,pe=Fn(e.history,S,H.signal,W);me.set(v,H);let Re=ko,ne=await Or("action",pe,D,G,a,o,l);if(pe.signal.aborted){me.get(v)===H&&me.delete(v);return}if(Hr(ne))if(me.delete(v),In>Re){let je=cn(void 0);h.fetchers.set(v,je),Be({fetchers:new Map(h.fetchers)});return}else{Wt.add(v);let je=Mn(W);return h.fetchers.set(v,je),Be({fetchers:new Map(h.fetchers)}),Nn(h,ne,{fetcherSubmission:W})}if(Mr(ne)){_o(v,w,ne.error);return}if(vr(ne))throw Pe(400,{type:"defer-action"});let he=h.navigation.location||h.location,_e=Fn(e.history,he,H.signal),Lr=s||i,Ur=h.navigation.state!=="idle"?Le(Lr,h.navigation.location,l):h.matches;U(Ur,"Didn't find any matches after fetcher action");let Ln=++ko;sn.set(v,Ln);let gi=Mn(W,ne.data);h.fetchers.set(v,gi);let[Gt,Jt]=zu(e.history,h,Ur,W,he,Ke,hr,Yt,ln,Wt,Lr,l,{[D.route.id]:ne.data},void 0);Jt.filter(je=>je.key!==v).forEach(je=>{let Un=je.key,_u=h.fetchers.get(Un),Dm=Mn(void 0,_u?_u.data:void 0);h.fetchers.set(Un,Dm),me.has(Un)&&mr(Un),je.controller&&me.set(Un,je.controller)}),Be({fetchers:new Map(h.fetchers)});let Ao=()=>Jt.forEach(je=>mr(je.key));H.signal.addEventListener("abort",Ao);let{results:yi,loaderResults:vi,fetcherResults:wi}=await wu(h.matches,Ur,Gt,Jt,_e);if(H.signal.aborted)return;H.signal.removeEventListener("abort",Ao),sn.delete(v),me.delete(v),Jt.forEach(je=>me.delete(je.key));let de=Ku(yi);if(de){if(de.idx>=Gt.length){let je=Jt[de.idx-Gt.length].key;Wt.add(je)}return Nn(h,de.result)}let{loaderData:At,errors:gr}=Ju(h,h.matches,Gt,vi,void 0,Jt,wi,Ir);if(h.fetchers.has(v)){let je=cn(ne.data);h.fetchers.set(v,je)}let bi=Su(Ln);h.navigation.state==="loading"&&Ln>In?(U(I,"Expected pending action"),P&&P.abort(),Dn(h.navigation.location,{matches:Ur,loaderData:At,errors:gr,fetchers:new Map(h.fetchers)})):(Be(ae({errors:gr,loaderData:Xu(h.loaderData,At,Ur,gr)},bi||Jt.length>0?{fetchers:new Map(h.fetchers)}:{})),Ke=!1)}async function Pm(v,w,S,D,G,W){let J=h.fetchers.get(v),q=Mn(W,J?J.data:void 0);h.fetchers.set(v,q),Be({fetchers:new Map(h.fetchers)});let H=new AbortController,pe=Fn(e.history,S,H.signal);me.set(v,H);let Re=ko,ne=await Or("loader",pe,D,G,a,o,l);if(vr(ne)&&(ne=await hc(ne,pe.signal,!0)||ne),me.get(v)===H&&me.delete(v),pe.signal.aborted)return;if(Hr(ne))if(In>Re){let _e=cn(void 0);h.fetchers.set(v,_e),Be({fetchers:new Map(h.fetchers)});return}else{Wt.add(v),await Nn(h,ne);return}if(Mr(ne)){let _e=Fr(h.matches,w);h.fetchers.delete(v),Be({fetchers:new Map(h.fetchers),errors:{[_e.route.id]:ne.error}});return}U(!vr(ne),"Unhandled fetcher deferred data");let he=cn(ne.data);h.fetchers.set(v,he),Be({fetchers:new Map(h.fetchers)})}async function Nn(v,w,S){let{submission:D,fetcherSubmission:G,replace:W}=S===void 0?{}:S;w.revalidate&&(Ke=!0);let J=Xt(v.location,w.location,{_isRedirect:!0});if(U(J,"Expected a location on the redirect navigation"),r){let he=!1;if(w.reloadDocument)he=!0;else if(ic.test(w.location)){let _e=e.history.createURL(w.location);he=_e.origin!==t.location.origin||Qe(_e.pathname,l)==null}if(he){W?t.location.replace(w.location):t.location.assign(w.location);return}}P=null;let q=W===!0?le.Replace:le.Push,{formMethod:H,formAction:pe,formEncType:Re}=v.navigation;!D&&!G&&H&&pe&&Re&&(D=Zu(v.navigation));let ne=D||G;if(kg.has(w.status)&&ne&&Rt(ne.formMethod))await Nr(q,J,{submission:ae({},ne,{formAction:w.location}),preventScrollReset:M});else{let he=Pi(J,D);await Nr(q,J,{overrideNavigation:he,fetcherSubmission:G,preventScrollReset:M})}}async function wu(v,w,S,D,G){let W=await Promise.all([...S.map(H=>Or("loader",G,H,w,a,o,l)),...D.map(H=>H.matches&&H.match&&H.controller?Or("loader",Fn(e.history,H.path,H.controller.signal),H.match,H.matches,a,o,l):{type:ge.error,error:Pe(404,{pathname:H.path})})]),J=W.slice(0,S.length),q=W.slice(S.length);return await Promise.all([Qu(v,S,J,J.map(()=>G.signal),!1,h.loaderData),Qu(v,D.map(H=>H.match),q,D.map(H=>H.controller?H.controller.signal:null),!0)]),{results:W,loaderResults:J,fetcherResults:q}}function pi(){Ke=!0,hr.push(...mi()),ln.forEach((v,w)=>{me.has(w)&&(Yt.push(w),mr(w))})}function _o(v,w,S){let D=Fr(h.matches,w);hi(v),Be({errors:{[D.route.id]:S},fetchers:new Map(h.fetchers)})}function hi(v){let w=h.fetchers.get(v);me.has(v)&&!(w&&w.state==="loading"&&sn.has(v))&&mr(v),ln.delete(v),sn.delete(v),Wt.delete(v),h.fetchers.delete(v)}function mr(v){let w=me.get(v);U(w,"Expected fetch controller: "+v),w.abort(),me.delete(v)}function bu(v){for(let w of v){let S=vu(w),D=cn(S.data);h.fetchers.set(w,D)}}function xu(){let v=[],w=!1;for(let S of Wt){let D=h.fetchers.get(S);U(D,"Expected fetcher: "+S),D.state==="loading"&&(Wt.delete(S),v.push(S),w=!0)}return bu(v),w}function Su(v){let w=[];for(let[S,D]of sn)if(D<v){let G=h.fetchers.get(S);U(G,"Expected fetcher: "+S),G.state==="loading"&&(mr(S),sn.delete(S),w.push(S))}return bu(w),w.length>0}function Am(v,w){let S=h.blockers.get(v)||yr;return Dr.get(v)!==w&&Dr.set(v,w),S}function Ru(v){h.blockers.delete(v),Dr.delete(v)}function Po(v,w){let S=h.blockers.get(v)||yr;U(S.state==="unblocked"&&w.state==="blocked"||S.state==="blocked"&&w.state==="blocked"||S.state==="blocked"&&w.state==="proceeding"||S.state==="blocked"&&w.state==="unblocked"||S.state==="proceeding"&&w.state==="unblocked","Invalid blocker state transition: "+S.state+" -> "+w.state);let D=new Map(h.blockers);D.set(v,w),Be({blockers:D})}function Eu(v){let{currentLocation:w,nextLocation:S,historyAction:D}=v;if(Dr.size===0)return;Dr.size>1&&Tt(!1,"A router only supports one blocker at a time");let G=Array.from(Dr.entries()),[W,J]=G[G.length-1],q=h.blockers.get(W);if(!(q&&q.state==="proceeding")&&J({currentLocation:w,nextLocation:S,historyAction:D}))return W}function mi(v){let w=[];return Ir.forEach((S,D)=>{(!v||v(D))&&(S.cancel(),w.push(D),Ir.delete(D))}),w}function $m(v,w,S){if(p=v,f=w,m=S||null,!y&&h.navigation===Lo){y=!0;let D=ku(h.location,h.matches);D!=null&&Be({restoreScrollPosition:D})}return()=>{p=null,f=null,m=null}}function Cu(v,w){return m&&m(v,w.map(D=>jo(D,h.loaderData)))||v.key}function Tm(v,w){if(p&&f){let S=Cu(v,w);p[S]=f()}}function ku(v,w){if(p){let S=Cu(v,w),D=p[S];if(typeof D=="number")return D}return null}function Im(v){a={},s=Hn(v,o,void 0,a)}return R={get basename(){return l},get state(){return h},get routes(){return i},get window(){return t},initialize:bm,subscribe:Sm,enableScrollRestoration:$m,navigate:yu,fetch:km,revalidate:Rm,createHref:v=>e.history.createHref(v),encodeLocation:v=>e.history.encodeLocation(v),getFetcher:vu,deleteFetcher:hi,dispose:xm,getBlocker:Am,deleteBlocker:Ru,_internalFetchControllers:me,_internalActiveDeferreds:Ir,_internalSetRoutes:Im},R}function Ii(e,t){U(e.length>0,"You must provide a non-empty routes array to createStaticHandler");let r={},n=(t?t.basename:null)||"/",o;if(t!=null&&t.mapRouteProperties)o=t.mapRouteProperties;else if(t!=null&&t.detectErrorBoundary){let d=t.detectErrorBoundary;o=p=>({hasErrorBoundary:d(p)})}else o=sc;let a=Hn(e,o,void 0,r);async function i(d,p){let{requestContext:m}=p===void 0?{}:p,f=new URL(d.url),y=d.method,g=Xt("",qe(f),null,"default"),x=Le(a,g,n);if(!Ti(y)&&y!=="HEAD"){let R=Pe(405,{method:y}),{matches:h,route:I}=Oo(a);return{basename:n,location:g,matches:h,loaderData:{},actionData:null,errors:{[I.id]:R},statusCode:R.status,loaderHeaders:{},actionHeaders:{},activeDeferreds:null}}else if(!x){let R=Pe(404,{pathname:g.pathname}),{matches:h,route:I}=Oo(a);return{basename:n,location:g,matches:h,loaderData:{},actionData:null,errors:{[I.id]:R},statusCode:R.status,loaderHeaders:{},actionHeaders:{},activeDeferreds:null}}let T=await l(d,g,x,m);return dn(T)?T:ae({location:g,basename:n},T)}async function s(d,p){let{routeId:m,requestContext:f}=p===void 0?{}:p,y=new URL(d.url),g=d.method,x=Xt("",qe(y),null,"default"),T=Le(a,x,n);if(!Ti(g)&&g!=="HEAD"&&g!=="OPTIONS")throw Pe(405,{method:g});if(!T)throw Pe(404,{pathname:x.pathname});let R=m?T.find(P=>P.route.id===m):jn(T,x);if(m&&!R)throw Pe(403,{pathname:x.pathname,routeId:m});if(!R)throw Pe(404,{pathname:x.pathname});let h=await l(d,x,T,f,R);if(dn(h))return h;let I=h.errors?Object.values(h.errors)[0]:void 0;if(I!==void 0)throw I;if(h.actionData)return Object.values(h.actionData)[0];if(h.loaderData){var M;let P=Object.values(h.loaderData)[0];return(M=h.activeDeferreds)!=null&&M[R.route.id]&&(P[qn]=h.activeDeferreds[R.route.id]),P}}async function l(d,p,m,f,y){U(d.signal,"query()/queryRoute() requests must contain an AbortController signal");try{if(Rt(d.method.toLowerCase()))return await u(d,m,y||jn(m,p),f,y!=null);let g=await c(d,m,f,y);return dn(g)?g:ae({},g,{actionData:null,actionHeaders:{}})}catch(g){if(Tg(g)){if(g.type===ge.error)throw g.response;return g.response}if($g(g))return g;throw g}}async function u(d,p,m,f,y){let g;if(!m.route.action&&!m.route.lazy){let R=Pe(405,{method:d.method,pathname:new URL(d.url).pathname,routeId:m.route.id});if(y)throw R;g={type:ge.error,error:R}}else if(g=await Or("action",d,m,p,r,o,n,{isStaticRequest:!0,isRouteRequest:y,requestContext:f}),d.signal.aborted){let R=y?"queryRoute":"query";throw new Error(R+"() call aborted: "+d.method+" "+d.url)}if(Hr(g))throw new Response(null,{status:g.status,headers:{Location:g.location}});if(vr(g)){let R=Pe(400,{type:"defer-action"});if(y)throw R;g={type:ge.error,error:R}}if(y){if(Mr(g))throw g.error;return{matches:[m],loaderData:{},actionData:{[m.route.id]:g.data},errors:null,statusCode:200,loaderHeaders:{},actionHeaders:{},activeDeferreds:null}}if(Mr(g)){let R=Fr(p,m.route.id),h=await c(d,p,f,void 0,{[R.route.id]:g.error});return ae({},h,{statusCode:$e(g.error)?g.error.status:500,actionData:null,actionHeaders:ae({},g.headers?{[m.route.id]:g.headers}:{})})}let x=new Request(d.url,{headers:d.headers,redirect:d.redirect,signal:d.signal}),T=await c(x,p,f);return ae({},T,g.statusCode?{statusCode:g.statusCode}:{},{actionData:{[m.route.id]:g.data},actionHeaders:ae({},g.headers?{[m.route.id]:g.headers}:{})})}async function c(d,p,m,f,y){let g=f!=null;if(g&&!(f!=null&&f.route.loader)&&!(f!=null&&f.route.lazy))throw Pe(400,{method:d.method,pathname:new URL(d.url).pathname,routeId:f?.route.id});let T=(f?[f]:uc(p,Object.keys(y||{})[0])).filter(P=>P.route.loader||P.route.lazy);if(T.length===0)return{matches:p,loaderData:p.reduce((P,Y)=>Object.assign(P,{[Y.route.id]:null}),{}),errors:y||null,statusCode:200,loaderHeaders:{},activeDeferreds:null};let R=await Promise.all([...T.map(P=>Or("loader",d,P,p,r,o,n,{isStaticRequest:!0,isRouteRequest:g,requestContext:m}))]);if(d.signal.aborted){let P=g?"queryRoute":"query";throw new Error(P+"() call aborted: "+d.method+" "+d.url)}let h=new Map,I=dc(p,T,R,y,h),M=new Set(T.map(P=>P.route.id));return p.forEach(P=>{M.has(P.route.id)||(I.loaderData[P.route.id]=null)}),ae({},I,{matches:p,activeDeferreds:h.size>0?Object.fromEntries(h.entries()):null})}return{dataRoutes:a,query:i,queryRoute:s}}function Di(e,t,r){return ae({},t,{statusCode:500,errors:{[t._deepestRenderedBoundaryId||e[0].id]:r}})}function _g(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ai(e,t,r,n,o,a,i){let s,l;if(a!=null&&i!=="path"){s=[];for(let c of t)if(s.push(c),c.route.id===a){l=c;break}}else s=t,l=t[t.length-1];let u=pn(o||".",Vr(s).map(c=>c.pathnameBase),Qe(e.pathname,r)||e.pathname,i==="path");return o==null&&(u.search=e.search,u.hash=e.hash),(o==null||o===""||o===".")&&l&&l.route.index&&!Ni(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n&&r!=="/"&&(u.pathname=u.pathname==="/"?r:pt([r,u.pathname])),qe(u)}function Bu(e,t,r,n){if(!n||!_g(n))return{path:r};if(n.formMethod&&!Ti(n.formMethod))return{path:r,error:Pe(405,{method:n.formMethod})};let o=()=>({path:r,error:Pe(400,{type:"invalid-body"})}),a=n.formMethod||"get",i=e?a.toUpperCase():a.toLowerCase(),s=fc(r);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!Rt(i))return o();let p=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((m,f)=>{let[y,g]=f;return""+m+y+"="+g+`
`},""):String(n.body);return{path:r,submission:{formMethod:i,formAction:s,formEncType:n.formEncType,formData:void 0,json:void 0,text:p}}}else if(n.formEncType==="application/json"){if(!Rt(i))return o();try{let p=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:r,submission:{formMethod:i,formAction:s,formEncType:n.formEncType,formData:void 0,json:p,text:void 0}}}catch{return o()}}}U(typeof FormData=="function","FormData is not available in this environment");let l,u;if(n.formData)l=$i(n.formData),u=n.formData;else if(n.body instanceof FormData)l=$i(n.body),u=n.body;else if(n.body instanceof URLSearchParams)l=n.body,u=Gu(l);else if(n.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(n.body),u=Gu(l)}catch{return o()}let c={formMethod:i,formAction:s,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Rt(c.formMethod))return{path:r,submission:c};let d=Ae(r);return t&&d.search&&Ni(d.search)&&l.append("index",""),d.search="?"+l,{path:qe(d),submission:c}}function uc(e,t){let r=e;if(t){let n=e.findIndex(o=>o.route.id===t);n>=0&&(r=e.slice(0,n))}return r}function zu(e,t,r,n,o,a,i,s,l,u,c,d,p,m){let f=m?Object.values(m)[0]:p?Object.values(p)[0]:void 0,y=e.createURL(t.location),g=e.createURL(o),x=m?Object.keys(m)[0]:void 0,R=uc(r,x).filter((I,M)=>{if(I.route.lazy)return!0;if(I.route.loader==null)return!1;if(Pg(t.loaderData,t.matches[M],I)||i.some(De=>De===I.route.id))return!0;let P=t.matches[M],Y=I;return Yu(I,ae({currentUrl:y,currentParams:P.params,nextUrl:g,nextParams:Y.params},n,{actionResult:f,defaultShouldRevalidate:a||y.pathname+y.search===g.pathname+g.search||y.search!==g.search||cc(P,Y)}))}),h=[];return l.forEach((I,M)=>{if(!r.some(Ne=>Ne.route.id===I.routeId))return;let P=Le(c,I.path,d);if(!P){h.push({key:M,routeId:I.routeId,path:I.path,matches:null,match:null,controller:null});return}let Y=t.fetchers.get(M),De=jn(P,I.path),He=!1;u.has(M)?He=!1:s.includes(M)?He=!0:Y&&Y.state!=="idle"&&Y.data===void 0?He=a:He=Yu(De,ae({currentUrl:y,currentParams:t.matches[t.matches.length-1].params,nextUrl:g,nextParams:r[r.length-1].params},n,{actionResult:f,defaultShouldRevalidate:a})),He&&h.push({key:M,routeId:I.routeId,path:I.path,matches:P,match:De,controller:new AbortController})}),[R,h]}function Pg(e,t,r){let n=!t||r.route.id!==t.route.id,o=e[r.route.id]===void 0;return n||o}function cc(e,t){let r=e.route.path;return e.pathname!==t.pathname||r!=null&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function Yu(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if(typeof r=="boolean")return r}return t.defaultShouldRevalidate}async function Wu(e,t,r){if(!e.lazy)return;let n=await e.lazy();if(!e.lazy)return;let o=r[e.id];U(o,"No route found in manifest");let a={};for(let i in n){let l=o[i]!==void 0&&i!=="hasErrorBoundary";Tt(!l,'Route "'+o.id+'" has a static property "'+i+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+i+'" will be ignored.')),!l&&!tg.has(i)&&(a[i]=n[i])}Object.assign(o,a),Object.assign(o,ae({},t(o),{lazy:void 0}))}async function Or(e,t,r,n,o,a,i,s){s===void 0&&(s={});let l,u,c,d=f=>{let y,g=new Promise((x,T)=>y=T);return c=()=>y(),t.signal.addEventListener("abort",c),Promise.race([f({request:t,params:r.params,context:s.requestContext}),g])};try{let f=r.route[e];if(r.route.lazy)if(f){let y,g=await Promise.all([d(f).catch(x=>{y=x}),Wu(r.route,a,o)]);if(y)throw y;u=g[0]}else if(await Wu(r.route,a,o),f=r.route[e],f)u=await d(f);else if(e==="action"){let y=new URL(t.url),g=y.pathname+y.search;throw Pe(405,{method:t.method,pathname:g,routeId:r.route.id})}else return{type:ge.data,data:void 0};else if(f)u=await d(f);else{let y=new URL(t.url),g=y.pathname+y.search;throw Pe(404,{pathname:g})}U(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+r.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(f){l=ge.error,u=f}finally{c&&t.signal.removeEventListener("abort",c)}if(dn(u)){let f=u.status;if(Cg.has(f)){let x=u.headers.get("Location");if(U(x,"Redirects returned/thrown from loaders/actions must have a Location header"),!ic.test(x))x=Ai(new URL(t.url),n.slice(0,n.indexOf(r)+1),i,!0,x);else if(!s.isStaticRequest){let T=new URL(t.url),R=x.startsWith("//")?new URL(T.protocol+x):new URL(x),h=Qe(R.pathname,i)!=null;R.origin===T.origin&&h&&(x=R.pathname+R.search+R.hash)}if(s.isStaticRequest)throw u.headers.set("Location",x),u;return{type:ge.redirect,status:f,location:x,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(s.isRouteRequest)throw{type:l===ge.error?ge.error:ge.data,response:u};let y,g=u.headers.get("Content-Type");return g&&/\bapplication\/json\b/.test(g)?y=await u.json():y=await u.text(),l===ge.error?{type:l,error:new jr(f,u.statusText,y),headers:u.headers}:{type:ge.data,data:y,statusCode:u.status,headers:u.headers}}if(l===ge.error)return{type:l,error:u};if(pc(u)){var p,m;return{type:ge.deferred,deferredData:u,statusCode:(p=u.init)==null?void 0:p.status,headers:((m=u.init)==null?void 0:m.headers)&&new Headers(u.init.headers)}}return{type:ge.data,data:u}}function Fn(e,t,r,n){let o=e.createURL(fc(t)).toString(),a={signal:r};if(n&&Rt(n.formMethod)){let{formMethod:i,formEncType:s}=n;a.method=i.toUpperCase(),s==="application/json"?(a.headers=new Headers({"Content-Type":s}),a.body=JSON.stringify(n.json)):s==="text/plain"?a.body=n.text:s==="application/x-www-form-urlencoded"&&n.formData?a.body=$i(n.formData):a.body=n.formData}return new Request(o,a)}function $i(e){let t=new URLSearchParams;for(let[r,n]of e.entries())t.append(r,typeof n=="string"?n:n.name);return t}function Gu(e){let t=new FormData;for(let[r,n]of e.entries())t.append(r,n);return t}function dc(e,t,r,n,o){let a={},i=null,s,l=!1,u={};return r.forEach((c,d)=>{let p=t[d].route.id;if(U(!Hr(c),"Cannot handle redirect results in processLoaderData"),Mr(c)){let m=Fr(e,p),f=c.error;n&&(f=Object.values(n)[0],n=void 0),i=i||{},i[m.route.id]==null&&(i[m.route.id]=f),a[p]=void 0,l||(l=!0,s=$e(c.error)?c.error.status:500),c.headers&&(u[p]=c.headers)}else vr(c)?(o.set(p,c.deferredData),a[p]=c.deferredData.data):a[p]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(s=c.statusCode),c.headers&&(u[p]=c.headers)}),n&&(i=n,a[Object.keys(n)[0]]=void 0),{loaderData:a,errors:i,statusCode:s||200,loaderHeaders:u}}function Ju(e,t,r,n,o,a,i,s){let{loaderData:l,errors:u}=dc(t,r,n,o,s);for(let c=0;c<a.length;c++){let{key:d,match:p,controller:m}=a[c];U(i!==void 0&&i[c]!==void 0,"Did not find corresponding fetcher result");let f=i[c];if(!(m&&m.signal.aborted))if(Mr(f)){let y=Fr(e.matches,p?.route.id);u&&u[y.route.id]||(u=ae({},u,{[y.route.id]:f.error})),e.fetchers.delete(d)}else if(Hr(f))U(!1,"Unhandled fetcher revalidation redirect");else if(vr(f))U(!1,"Unhandled fetcher deferred data");else{let y=cn(f.data);e.fetchers.set(d,y)}}return{loaderData:l,errors:u}}function Xu(e,t,r,n){let o=ae({},t);for(let a of r){let i=a.route.id;if(t.hasOwnProperty(i)?t[i]!==void 0&&(o[i]=t[i]):e[i]!==void 0&&a.route.loader&&(o[i]=e[i]),n&&n.hasOwnProperty(i))break}return o}function Fr(e,t){return(t?e.slice(0,e.findIndex(n=>n.route.id===t)+1):[...e]).reverse().find(n=>n.route.hasErrorBoundary===!0)||e[0]}function Oo(e){let t=e.length===1?e[0]:e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Pe(e,t){let{pathname:r,routeId:n,method:o,type:a}=t===void 0?{}:t,i="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(i="Bad Request",o&&r&&n?s="You made a "+o+' request to "'+r+'" but '+('did not provide a `loader` for route "'+n+'", ')+"so there is no way to handle the request.":a==="defer-action"?s="defer() is not supported in actions":a==="invalid-body"&&(s="Unable to encode submission body")):e===403?(i="Forbidden",s='Route "'+n+'" does not match URL "'+r+'"'):e===404?(i="Not Found",s='No route matches URL "'+r+'"'):e===405&&(i="Method Not Allowed",o&&r&&n?s="You made a "+o.toUpperCase()+' request to "'+r+'" but '+('did not provide an `action` for route "'+n+'", ')+"so there is no way to handle the request.":o&&(s='Invalid request method "'+o.toUpperCase()+'"')),new jr(e||500,i,new Error(s),!0)}function Ku(e){for(let t=e.length-1;t>=0;t--){let r=e[t];if(Hr(r))return{result:r,idx:t}}}function fc(e){let t=typeof e=="string"?Ae(e):e;return qe(ae({},t,{hash:""}))}function Ag(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function vr(e){return e.type===ge.deferred}function Mr(e){return e.type===ge.error}function Hr(e){return(e&&e.type)===ge.redirect}function pc(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function dn(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function $g(e){if(!dn(e))return!1;let t=e.status,r=e.headers.get("Location");return t>=300&&t<=399&&r!=null}function Tg(e){return e&&dn(e.response)&&(e.type===ge.data||e.type===ge.error)}function Ti(e){return Eg.has(e.toLowerCase())}function Rt(e){return Sg.has(e.toLowerCase())}async function Qu(e,t,r,n,o,a){for(let i=0;i<r.length;i++){let s=r[i],l=t[i];if(!l)continue;let u=e.find(d=>d.route.id===l.route.id),c=u!=null&&!cc(u,l)&&(a&&a[l.route.id])!==void 0;if(vr(s)&&(o||c)){let d=n[i];U(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await hc(s,d,o).then(p=>{p&&(r[i]=p||r[i])})}}}async function hc(e,t,r){if(r===void 0&&(r=!1),!await e.deferredData.resolveData(t)){if(r)try{return{type:ge.data,data:e.deferredData.unwrappedData}}catch(o){return{type:ge.error,error:o}}return{type:ge.data,data:e.deferredData.data}}}function Ni(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function jn(e,t){let r=typeof t=="string"?Ae(t).search:t.search;if(e[e.length-1].route.index&&Ni(r||""))return e[e.length-1];let n=Vr(e);return n[n.length-1]}function Zu(e){let{formMethod:t,formAction:r,formEncType:n,text:o,formData:a,json:i}=e;if(!(!t||!r||!n)){if(o!=null)return{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:void 0,text:o};if(a!=null)return{formMethod:t,formAction:r,formEncType:n,formData:a,json:void 0,text:void 0};if(i!==void 0)return{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:i,text:void 0}}}function Pi(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Ig(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Mn(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Dg(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function cn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Ng(e,t){try{let r=e.sessionStorage.getItem(lc);if(r){let n=JSON.parse(r);for(let[o,a]of Object.entries(n||{}))a&&Array.isArray(a)&&t.set(o,new Set(a||[]))}}catch{}}function Lg(e,t){if(t.size>0){let r={};for(let[n,o]of t)r[n]=[...o];try{e.sessionStorage.setItem(lc,JSON.stringify(r))}catch(n){Tt(!1,"Failed to save applied view transitions in sessionStorage ("+n+").")}}}var le,ju,ge,tg,og,ag,ig,sg,lg,ug,Vu,pt,nc,vg,wg,Nt,It,Uo,Br,Kt,hn,jr,oc,Sg,Rg,Eg,Cg,kg,Lo,ac,yr,ic,sc,lc,qn,Qt=To(()=>{(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(le||(le={}));ju="popstate";(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ge||(ge={}));tg=new Set(["lazy","caseSensitive","path","id","index","children"]);og=/^:\w+$/,ag=3,ig=2,sg=1,lg=10,ug=-2,Vu=e=>e==="*";pt=e=>e.join("/").replace(/\/\/+/g,"/"),nc=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),vg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,wg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Nt=function(t,r){r===void 0&&(r={});let n=typeof r=="number"?{status:r}:r,o=new Headers(n.headers);return o.has("Content-Type")||o.set("Content-Type","application/json; charset=utf-8"),new Response(JSON.stringify(t),ae({},n,{headers:o}))},It=class extends Error{},Uo=class{constructor(t,r){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],U(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let n;this.abortPromise=new Promise((a,i)=>n=i),this.controller=new AbortController;let o=()=>n(new It("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",o),this.controller.signal.addEventListener("abort",o),this.data=Object.entries(t).reduce((a,i)=>{let[s,l]=i;return Object.assign(a,{[s]:this.trackPromise(s,l)})},{}),this.done&&this.unlistenAbortSignal(),this.init=r}trackPromise(t,r){if(!(r instanceof Promise))return r;this.deferredKeys.push(t),this.pendingKeysSet.add(t);let n=Promise.race([r,this.abortPromise]).then(o=>this.onSettle(n,t,void 0,o),o=>this.onSettle(n,t,o));return n.catch(()=>{}),Object.defineProperty(n,"_tracked",{get:()=>!0}),n}onSettle(t,r,n,o){if(this.controller.signal.aborted&&n instanceof It)return this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>n}),Promise.reject(n);if(this.pendingKeysSet.delete(r),this.done&&this.unlistenAbortSignal(),n===void 0&&o===void 0){let a=new Error('Deferred data for key "'+r+'" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');return Object.defineProperty(t,"_error",{get:()=>a}),this.emit(!1,r),Promise.reject(a)}return o===void 0?(Object.defineProperty(t,"_error",{get:()=>n}),this.emit(!1,r),Promise.reject(n)):(Object.defineProperty(t,"_data",{get:()=>o}),this.emit(!1,r),o)}emit(t,r){this.subscribers.forEach(n=>n(t,r))}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((t,r)=>this.pendingKeysSet.delete(r)),this.emit(!0)}async resolveData(t){let r=!1;if(!this.done){let n=()=>this.cancel();t.addEventListener("abort",n),r=await new Promise(o=>{this.subscribe(a=>{t.removeEventListener("abort",n),(a||this.done)&&o(a)})})}return r}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return U(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,r)=>{let[n,o]=r;return Object.assign(t,{[n]:xg(o)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}};Br=function(t,r){r===void 0&&(r={});let n=typeof r=="number"?{status:r}:r;return new Uo(t,n)},Kt=function(t,r){r===void 0&&(r=302);let n=r;typeof n=="number"?n={status:n}:typeof n.status>"u"&&(n.status=302);let o=new Headers(n.headers);return o.set("Location",t),new Response(null,ae({},n,{headers:o}))},hn=(e,t)=>{let r=Kt(e,t);return r.headers.set("X-Remix-Reload-Document","true"),r},jr=class{constructor(t,r,n,o){o===void 0&&(o=!1),this.status=t,this.statusText=r||"",this.internal=o,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};oc=["post","put","patch","delete"],Sg=new Set(oc),Rg=["get",...oc],Eg=new Set(Rg),Cg=new Set([301,302,303,307,308]),kg=new Set([307,308]),Lo={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ac={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},yr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},ic=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sc=e=>({hasErrorBoundary:Boolean(e.hasErrorBoundary)}),lc="remix-router-transitions";qn=Symbol("deferred")});var bc={};ee(bc,{AbortedDeferredError:()=>It,Await:()=>Jn,MemoryRouter:()=>Fi,Navigate:()=>Mi,NavigationType:()=>le,Outlet:()=>rr,Route:()=>Ko,Router:()=>Ft,RouterProvider:()=>Bg,Routes:()=>Hi,UNSAFE_DataRouterContext:()=>kt,UNSAFE_DataRouterStateContext:()=>Dt,UNSAFE_LocationContext:()=>wr,UNSAFE_NavigationContext:()=>rt,UNSAFE_RouteContext:()=>Ye,UNSAFE_mapRouteProperties:()=>Xn,UNSAFE_useRouteId:()=>zn,UNSAFE_useRoutesImpl:()=>Bn,createMemoryRouter:()=>qi,createPath:()=>qe,createRoutesFromChildren:()=>Yr,createRoutesFromElements:()=>Yr,defer:()=>Br,generatePath:()=>fn,isRouteErrorResponse:()=>$e,json:()=>Nt,matchPath:()=>Et,matchRoutes:()=>Le,parsePath:()=>Ae,redirect:()=>Kt,redirectDocument:()=>hn,renderMatches:()=>ji,resolvePath:()=>qr,unstable_useBlocker:()=>vn,useActionData:()=>Wn,useAsyncError:()=>yn,useAsyncValue:()=>Gn,useHref:()=>Zt,useInRouterContext:()=>Lt,useLoaderData:()=>Yn,useLocation:()=>we,useMatch:()=>zo,useMatches:()=>er,useNavigate:()=>Ut,useNavigation:()=>lt,useNavigationType:()=>Bo,useOutlet:()=>Vn,useOutletContext:()=>br,useParams:()=>gn,useResolvedPath:()=>Ot,useRevalidator:()=>Jo,useRouteError:()=>tr,useRouteLoaderData:()=>Xo,useRoutes:()=>Yo});function zr(){return zr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},zr.apply(this,arguments)}function Zt(e,t){let{relative:r}=t===void 0?{}:t;Lt()||U(!1);let{basename:n,navigator:o}=b.useContext(rt),{hash:a,pathname:i,search:s}=Ot(e,{relative:r}),l=i;return n!=="/"&&(l=i==="/"?n:pt([n,i])),o.createHref({pathname:l,search:s,hash:a})}function Lt(){return b.useContext(wr)!=null}function we(){return Lt()||U(!1),b.useContext(wr).location}function Bo(){return b.useContext(wr).navigationType}function zo(e){Lt()||U(!1);let{pathname:t}=we();return b.useMemo(()=>Et(e,t),[t,e])}function yc(e){b.useContext(rt).static||b.useLayoutEffect(e)}function Ut(){let{isDataRoute:e}=b.useContext(Ye);return e?qg():Ug()}function Ug(){Lt()||U(!1);let e=b.useContext(kt),{basename:t,navigator:r}=b.useContext(rt),{matches:n}=b.useContext(Ye),{pathname:o}=we(),a=JSON.stringify(Vr(n).map(l=>l.pathnameBase)),i=b.useRef(!1);return yc(()=>{i.current=!0}),b.useCallback(function(l,u){if(u===void 0&&(u={}),!i.current)return;if(typeof l=="number"){r.go(l);return}let c=pn(l,JSON.parse(a),o,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:pt([t,c.pathname])),(u.replace?r.replace:r.push)(c,u.state,u)},[t,r,a,o,e])}function br(){return b.useContext(vc)}function Vn(e){let t=b.useContext(Ye).outlet;return t&&b.createElement(vc.Provider,{value:e},t)}function gn(){let{matches:e}=b.useContext(Ye),t=e[e.length-1];return t?t.params:{}}function Ot(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=b.useContext(Ye),{pathname:o}=we(),a=JSON.stringify(Vr(n).map(i=>i.pathnameBase));return b.useMemo(()=>pn(e,JSON.parse(a),o,r==="path"),[e,a,o,r])}function Yo(e,t){return Bn(e,t)}function Bn(e,t,r){Lt()||U(!1);let{navigator:n}=b.useContext(rt),{matches:o}=b.useContext(Ye),a=o[o.length-1],i=a?a.params:{},s=a?a.pathname:"/",l=a?a.pathnameBase:"/",u=a&&a.route,c=we(),d;if(t){var p;let x=typeof t=="string"?Ae(t):t;l==="/"||(p=x.pathname)!=null&&p.startsWith(l)||U(!1),d=x}else d=c;let m=d.pathname||"/",f=l==="/"?m:m.slice(l.length)||"/",y=Le(e,{pathname:f}),g=wc(y&&y.map(x=>Object.assign({},x,{params:Object.assign({},i,x.params),pathname:pt([l,n.encodeLocation?n.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:pt([l,n.encodeLocation?n.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,r);return t&&g?b.createElement(wr.Provider,{value:{location:zr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:le.Pop}},g):g}function Og(){let e=tr(),t=$e(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:n},a={padding:"2px 4px",backgroundColor:n};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),r?b.createElement("pre",{style:o},r):null,null)}function Mg(e){let{routeContext:t,match:r,children:n}=e,o=b.useContext(kt);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),b.createElement(Ye.Provider,{value:t},n)}function wc(e,t,r){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),e==null){var o;if((o=r)!=null&&o.errors)e=r.matches;else return null}let a=e,i=(n=r)==null?void 0:n.errors;if(i!=null){let s=a.findIndex(l=>l.route.id&&i?.[l.route.id]);s>=0||U(!1),a=a.slice(0,Math.min(a.length,s+1))}return a.reduceRight((s,l,u)=>{let c=l.route.id?i?.[l.route.id]:null,d=null;r&&(d=l.route.errorElement||Fg);let p=t.concat(a.slice(0,u+1)),m=()=>{let f;return c?f=d:l.route.Component?f=b.createElement(l.route.Component,null):l.route.element?f=l.route.element:f=s,b.createElement(Mg,{match:l,routeContext:{outlet:s,matches:p,isDataRoute:r!=null},children:f})};return r&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?b.createElement(Li,{location:r.location,revalidation:r.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}function Oi(e){let t=b.useContext(kt);return t||U(!1),t}function xr(e){let t=b.useContext(Dt);return t||U(!1),t}function Hg(e){let t=b.useContext(Ye);return t||U(!1),t}function Go(e){let t=Hg(e),r=t.matches[t.matches.length-1];return r.route.id||U(!1),r.route.id}function zn(){return Go(ht.UseRouteId)}function lt(){return xr(ht.UseNavigation).navigation}function Jo(){let e=Oi(Wo.UseRevalidator),t=xr(ht.UseRevalidator);return b.useMemo(()=>({revalidate:e.router.revalidate,state:t.revalidation}),[e.router.revalidate,t.revalidation])}function er(){let{matches:e,loaderData:t}=xr(ht.UseMatches);return b.useMemo(()=>e.map(r=>jo(r,t)),[e,t])}function Yn(){let e=xr(ht.UseLoaderData),t=Go(ht.UseLoaderData);if(e.errors&&e.errors[t]!=null){console.error("You cannot `useLoaderData` in an errorElement (routeId: "+t+")");return}return e.loaderData[t]}function Xo(e){return xr(ht.UseRouteLoaderData).loaderData[e]}function Wn(){let e=xr(ht.UseActionData);return b.useContext(Ye)||U(!1),Object.values(e?.actionData||{})[0]}function tr(){var e;let t=b.useContext(gc),r=xr(ht.UseRouteError),n=Go(ht.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function Gn(){let e=b.useContext(qo);return e?._data}function yn(){let e=b.useContext(qo);return e?._error}function vn(e){let{router:t,basename:r}=Oi(Wo.UseBlocker),n=xr(ht.UseBlocker),[o,a]=b.useState(""),i=b.useCallback(s=>{if(typeof e!="function")return!!e;if(r==="/")return e(s);let{currentLocation:l,nextLocation:u,historyAction:c}=s;return e({currentLocation:zr({},l,{pathname:Qe(l.pathname,r)||l.pathname}),nextLocation:zr({},u,{pathname:Qe(u.pathname,r)||u.pathname}),historyAction:c})},[r,e]);return b.useEffect(()=>{let s=String(++jg);return a(s),()=>t.deleteBlocker(s)},[t]),b.useEffect(()=>{o!==""&&t.getBlocker(o,i)},[t,o,i]),o&&n.blockers.has(o)?n.blockers.get(o):yr}function qg(){let{router:e}=Oi(Wo.UseNavigateStable),t=Go(ht.UseNavigateStable),r=b.useRef(!1);return yc(()=>{r.current=!0}),b.useCallback(function(o,a){a===void 0&&(a={}),r.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,zr({fromRouteId:t},a)))},[e,t])}function Bg(e){let{fallbackElement:t,router:r,future:n}=e,[o,a]=b.useState(r.state),{v7_startTransition:i}=n||{},s=b.useCallback(d=>{i&&Vo?Vo(()=>a(d)):a(d)},[a,i]);b.useLayoutEffect(()=>r.subscribe(s),[r,s]);let l=b.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:d=>r.navigate(d),push:(d,p,m)=>r.navigate(d,{state:p,preventScrollReset:m?.preventScrollReset}),replace:(d,p,m)=>r.navigate(d,{replace:!0,state:p,preventScrollReset:m?.preventScrollReset})}),[r]),u=r.basename||"/",c=b.useMemo(()=>({router:r,navigator:l,static:!1,basename:u}),[r,l,u]);return b.createElement(b.Fragment,null,b.createElement(kt.Provider,{value:c},b.createElement(Dt.Provider,{value:o},b.createElement(Ft,{basename:u,location:o.location,navigationType:o.historyAction,navigator:l},o.initialized?b.createElement(zg,{routes:r.routes,state:o}):t))),null)}function zg(e){let{routes:t,state:r}=e;return Bn(t,void 0,r)}function Fi(e){let{basename:t,children:r,initialEntries:n,initialIndex:o,future:a}=e,i=b.useRef();i.current==null&&(i.current=Fo({initialEntries:n,initialIndex:o,v5Compat:!0}));let s=i.current,[l,u]=b.useState({action:s.action,location:s.location}),{v7_startTransition:c}=a||{},d=b.useCallback(p=>{c&&Vo?Vo(()=>u(p)):u(p)},[u,c]);return b.useLayoutEffect(()=>s.listen(d),[s,d]),b.createElement(Ft,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:s})}function Mi(e){let{to:t,replace:r,state:n,relative:o}=e;Lt()||U(!1);let{matches:a}=b.useContext(Ye),{pathname:i}=we(),s=Ut(),l=pn(t,Vr(a).map(c=>c.pathnameBase),i,o==="path"),u=JSON.stringify(l);return b.useEffect(()=>s(JSON.parse(u),{replace:r,state:n,relative:o}),[s,u,o,r,n]),null}function rr(e){return Vn(e.context)}function Ko(e){U(!1)}function Ft(e){let{basename:t="/",children:r=null,location:n,navigationType:o=le.Pop,navigator:a,static:i=!1}=e;Lt()&&U(!1);let s=t.replace(/^\/*/,"/"),l=b.useMemo(()=>({basename:s,navigator:a,static:i}),[s,a,i]);typeof n=="string"&&(n=Ae(n));let{pathname:u="/",search:c="",hash:d="",state:p=null,key:m="default"}=n,f=b.useMemo(()=>{let y=Qe(u,s);return y==null?null:{location:{pathname:y,search:c,hash:d,state:p,key:m},navigationType:o}},[s,u,c,d,p,m,o]);return f==null?null:b.createElement(rt.Provider,{value:l},b.createElement(wr.Provider,{children:r,value:f}))}function Hi(e){let{children:t,location:r}=e;return Yo(Yr(t),r)}function Jn(e){let{children:t,errorElement:r,resolve:n}=e;return b.createElement(Ui,{resolve:n,errorElement:r},b.createElement(Wg,null,t))}function Wg(e){let{children:t}=e,r=Gn(),n=typeof t=="function"?t(r):t;return b.createElement(b.Fragment,null,n)}function Yr(e,t){t===void 0&&(t=[]);let r=[];return b.Children.forEach(e,(n,o)=>{if(!b.isValidElement(n))return;let a=[...t,o];if(n.type===b.Fragment){r.push.apply(r,Yr(n.props.children,a));return}n.type!==Ko&&U(!1),!n.props.index||!n.props.children||U(!1);let i={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(i.children=Yr(n.props.children,a)),r.push(i)}),r}function ji(e){return wc(e)}function Xn(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:b.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:b.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}function qi(e,t){return mn({basename:t?.basename,future:zr({},t?.future,{v7_prependBasename:!0}),history:Fo({initialEntries:t?.initialEntries,initialIndex:t?.initialIndex}),hydrationData:t?.hydrationData,routes:e,mapRouteProperties:Xn}).initialize()}var b,kt,Dt,qo,rt,wr,Ye,gc,vc,Fg,Li,Wo,ht,jg,Vg,Vo,Ct,Yg,Ui,Qo=To(()=>{b=C(Ee());Qt();Qt();kt=b.createContext(null),Dt=b.createContext(null),qo=b.createContext(null),rt=b.createContext(null),wr=b.createContext(null),Ye=b.createContext({outlet:null,matches:[],isDataRoute:!1}),gc=b.createContext(null);vc=b.createContext(null);Fg=b.createElement(Og,null),Li=class extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?b.createElement(Ye.Provider,{value:this.props.routeContext},b.createElement(gc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};Wo=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Wo||{}),ht=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ht||{});jg=0;Vg="startTransition",Vo=b[Vg];Ct=function(e){return e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error",e}(Ct||{}),Yg=new Promise(()=>{}),Ui=class extends b.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,r){console.error("<Await> caught the following error during render",t,r)}render(){let{children:t,errorElement:r,resolve:n}=this.props,o=null,a=Ct.pending;if(!(n instanceof Promise))a=Ct.success,o=Promise.resolve(),Object.defineProperty(o,"_tracked",{get:()=>!0}),Object.defineProperty(o,"_data",{get:()=>n});else if(this.state.error){a=Ct.error;let i=this.state.error;o=Promise.reject().catch(()=>{}),Object.defineProperty(o,"_tracked",{get:()=>!0}),Object.defineProperty(o,"_error",{get:()=>i})}else n._tracked?(o=n,a=o._error!==void 0?Ct.error:o._data!==void 0?Ct.success:Ct.pending):(a=Ct.pending,Object.defineProperty(n,"_tracked",{get:()=>!0}),o=n.then(i=>Object.defineProperty(n,"_data",{get:()=>i}),i=>Object.defineProperty(n,"_error",{get:()=>i})));if(a===Ct.error&&o._error instanceof It)throw Yg;if(a===Ct.error&&!r)throw o._error;if(a===Ct.error)return b.createElement(qo.Provider,{value:o,children:r});if(a===Ct.success)return b.createElement(qo.Provider,{value:o,children:t});throw o}}});var Ic={};ee(Ic,{AbortedDeferredError:()=>It,Await:()=>Jn,BrowserRouter:()=>fy,Form:()=>Ue,HashRouter:()=>py,Link:()=>aa,MemoryRouter:()=>Fi,NavLink:()=>Gi,Navigate:()=>Mi,NavigationType:()=>le,Outlet:()=>rr,Route:()=>Ko,Router:()=>Ft,RouterProvider:()=>cy,Routes:()=>Hi,ScrollRestoration:()=>yy,UNSAFE_DataRouterContext:()=>kt,UNSAFE_DataRouterStateContext:()=>Dt,UNSAFE_LocationContext:()=>wr,UNSAFE_NavigationContext:()=>rt,UNSAFE_RouteContext:()=>Ye,UNSAFE_ViewTransitionContext:()=>Wi,UNSAFE_useRouteId:()=>zn,UNSAFE_useScrollRestoration:()=>ia,createBrowserRouter:()=>ay,createHashRouter:()=>iy,createMemoryRouter:()=>qi,createPath:()=>qe,createRoutesFromChildren:()=>Yr,createRoutesFromElements:()=>Yr,createSearchParams:()=>ra,defer:()=>Br,generatePath:()=>fn,isRouteErrorResponse:()=>$e,json:()=>Nt,matchPath:()=>Et,matchRoutes:()=>Le,parsePath:()=>Ae,redirect:()=>Kt,redirectDocument:()=>hn,renderMatches:()=>ji,resolvePath:()=>qr,unstable_HistoryRouter:()=>hy,unstable_useBlocker:()=>vn,unstable_usePrompt:()=>Tc,unstable_useViewTransitionState:()=>Qi,useActionData:()=>Wn,useAsyncError:()=>yn,useAsyncValue:()=>Gn,useBeforeUnload:()=>$c,useFetcher:()=>Ki,useFetchers:()=>Qn,useFormAction:()=>Xi,useHref:()=>Zt,useInRouterContext:()=>Lt,useLinkClickHandler:()=>kc,useLoaderData:()=>Yn,useLocation:()=>we,useMatch:()=>zo,useMatches:()=>er,useNavigate:()=>Ut,useNavigation:()=>lt,useNavigationType:()=>Bo,useOutlet:()=>Vn,useOutletContext:()=>br,useParams:()=>gn,useResolvedPath:()=>Ot,useRevalidator:()=>Jo,useRouteError:()=>tr,useRouteLoaderData:()=>Xo,useRoutes:()=>Yo,useSearchParams:()=>_c,useSubmit:()=>Ji});function mt(){return mt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},mt.apply(this,arguments)}function Yi(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function oa(e){return e!=null&&typeof e.tagName=="string"}function Gg(e){return oa(e)&&e.tagName.toLowerCase()==="button"}function Jg(e){return oa(e)&&e.tagName.toLowerCase()==="form"}function Xg(e){return oa(e)&&e.tagName.toLowerCase()==="input"}function Kg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Qg(e,t){return e.button===0&&(!t||t==="_self")&&!Kg(e)}function ra(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(o=>[r,o]):[[r,n]])},[]))}function Zg(e,t){let r=ra(e);return t&&t.forEach((n,o)=>{r.has(o)||t.getAll(o).forEach(a=>{r.append(o,a)})}),r}function ey(){if(Zo===null)try{new FormData(document.createElement("form"),0),Zo=!1}catch{Zo=!0}return Zo}function Bi(e){return e!=null&&!ty.has(e)?null:e}function Sc(e,t){let r,n,o,a,i;if(Jg(e)){let s=e.getAttribute("action");n=s?Qe(s,t):null,r=e.getAttribute("method")||ta,o=Bi(e.getAttribute("enctype"))||Vi,a=new FormData(e)}else if(Gg(e)||Xg(e)&&(e.type==="submit"||e.type==="image")){let s=e.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||s.getAttribute("action");if(n=l?Qe(l,t):null,r=e.getAttribute("formmethod")||s.getAttribute("method")||ta,o=Bi(e.getAttribute("formenctype"))||Bi(s.getAttribute("enctype"))||Vi,a=new FormData(s,e),!ey()){let{name:u,type:c,value:d}=e;if(c==="image"){let p=u?u+".":"";a.append(p+"x","0"),a.append(p+"y","0")}else u&&a.append(u,d)}}else{if(oa(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=ta,n=null,o=Vi,i=e}return a&&o==="text/plain"&&(i=a,a=void 0),{action:n,method:r.toLowerCase(),encType:o,formData:a,body:i}}function ay(e,t){return mn({basename:t?.basename,future:mt({},t?.future,{v7_prependBasename:!0}),history:Mo({window:t?.window}),hydrationData:t?.hydrationData||Rc(),routes:e,mapRouteProperties:Xn,window:t?.window}).initialize()}function iy(e,t){return mn({basename:t?.basename,future:mt({},t?.future,{v7_prependBasename:!0}),history:Ho({window:t?.window}),hydrationData:t?.hydrationData||Rc(),routes:e,mapRouteProperties:Xn,window:t?.window}).initialize()}function Rc(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=mt({},t,{errors:sy(t.errors)})),t}function sy(e){if(!e)return null;let t=Object.entries(e),r={};for(let[n,o]of t)if(o&&o.__type==="RouteErrorResponse")r[n]=new jr(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let a=window[o.__subType];if(typeof a=="function")try{let i=new a(o.message);i.stack="",r[n]=i}catch{}}if(r[n]==null){let a=new Error(o.message);a.stack="",r[n]=a}}else r[n]=o;return r}function uy(e){Sr?Sr(e):e()}function cy(e){let{fallbackElement:t,router:r,future:n}=e,[o,a]=E.useState(r.state),[i,s]=E.useState(),[l,u]=E.useState({isTransitioning:!1}),[c,d]=E.useState(),[p,m]=E.useState(),[f,y]=E.useState(),{v7_startTransition:g}=n||{},x=E.useCallback(M=>{g?uy(M):M()},[g]),T=E.useCallback((M,P)=>{let{unstable_viewTransitionOpts:Y}=P;!Y||r.window==null||typeof r.window.document.startViewTransition!="function"?x(()=>a(M)):p&&c?(c.resolve(),p.skipTransition(),y({state:M,currentLocation:Y.currentLocation,nextLocation:Y.nextLocation})):(s(M),u({isTransitioning:!0,currentLocation:Y.currentLocation,nextLocation:Y.nextLocation}))},[x,p,c,r.window]);E.useLayoutEffect(()=>r.subscribe(T),[r,T]),E.useEffect(()=>{l.isTransitioning&&d(new zi)},[l.isTransitioning]),E.useEffect(()=>{if(c&&i&&r.window){let M=i,P=c.promise,Y=r.window.document.startViewTransition(async()=>{x(()=>a(M)),await P});Y.finished.finally(()=>{d(void 0),m(void 0),s(void 0),u({isTransitioning:!1})}),m(Y)}},[x,i,c,r.window]),E.useEffect(()=>{c&&i&&o.location.key===i.location.key&&c.resolve()},[c,p,o.location,i]),E.useEffect(()=>{!l.isTransitioning&&f&&(s(f.state),u({isTransitioning:!0,currentLocation:f.currentLocation,nextLocation:f.nextLocation}),y(void 0))},[l.isTransitioning,f]);let R=E.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:M=>r.navigate(M),push:(M,P,Y)=>r.navigate(M,{state:P,preventScrollReset:Y?.preventScrollReset}),replace:(M,P,Y)=>r.navigate(M,{replace:!0,state:P,preventScrollReset:Y?.preventScrollReset})}),[r]),h=r.basename||"/",I=E.useMemo(()=>({router:r,navigator:R,static:!1,basename:h}),[r,R,h]);return E.createElement(E.Fragment,null,E.createElement(kt.Provider,{value:I},E.createElement(Dt.Provider,{value:o},E.createElement(Wi.Provider,{value:l},E.createElement(Ft,{basename:h,location:o.location,navigationType:o.historyAction,navigator:R},o.initialized?E.createElement(dy,{routes:r.routes,state:o}):t)))),null)}function dy(e){let{routes:t,state:r}=e;return Bn(t,void 0,r)}function fy(e){let{basename:t,children:r,future:n,window:o}=e,a=E.useRef();a.current==null&&(a.current=Mo({window:o,v5Compat:!0}));let i=a.current,[s,l]=E.useState({action:i.action,location:i.location}),{v7_startTransition:u}=n||{},c=E.useCallback(d=>{u&&Sr?Sr(()=>l(d)):l(d)},[l,u]);return E.useLayoutEffect(()=>i.listen(c),[i,c]),E.createElement(Ft,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:i})}function py(e){let{basename:t,children:r,future:n,window:o}=e,a=E.useRef();a.current==null&&(a.current=Ho({window:o,v5Compat:!0}));let i=a.current,[s,l]=E.useState({action:i.action,location:i.location}),{v7_startTransition:u}=n||{},c=E.useCallback(d=>{u&&Sr?Sr(()=>l(d)):l(d)},[l,u]);return E.useLayoutEffect(()=>i.listen(c),[i,c]),E.createElement(Ft,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:i})}function hy(e){let{basename:t,children:r,future:n,history:o}=e,[a,i]=E.useState({action:o.action,location:o.location}),{v7_startTransition:s}=n||{},l=E.useCallback(u=>{s&&Sr?Sr(()=>i(u)):i(u)},[i,s]);return E.useLayoutEffect(()=>o.listen(l),[o,l]),E.createElement(Ft,{basename:t,children:r,location:a.location,navigationType:a.action,navigator:o})}function yy(e){let{getKey:t,storageKey:r}=e;return ia({getKey:t,storageKey:r}),null}function Kn(e){let t=E.useContext(kt);return t||U(!1),t}function Cc(e){let t=E.useContext(Dt);return t||U(!1),t}function kc(e,t){let{target:r,replace:n,state:o,preventScrollReset:a,relative:i,unstable_viewTransition:s}=t===void 0?{}:t,l=Ut(),u=we(),c=Ot(e,{relative:i});return E.useCallback(d=>{if(Qg(d,r)){d.preventDefault();let p=n!==void 0?n:qe(u)===qe(c);l(e,{replace:p,state:o,preventScrollReset:a,relative:i,unstable_viewTransition:s})}},[u,l,c,n,o,r,e,a,i,s])}function _c(e){let t=E.useRef(ra(e)),r=E.useRef(!1),n=we(),o=E.useMemo(()=>Zg(n.search,r.current?null:t.current),[n.search]),a=Ut(),i=E.useCallback((s,l)=>{let u=ra(typeof s=="function"?s(o):s);r.current=!0,a("?"+u,l)},[a,o]);return[o,i]}function Pc(){if(typeof document>"u")throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")}function Ji(){let{router:e}=Kn(Wr.UseSubmit),{basename:t}=E.useContext(rt),r=zn();return E.useCallback(function(n,o){o===void 0&&(o={}),Pc();let{action:a,method:i,encType:s,formData:l,body:u}=Sc(n,t);e.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||i,formEncType:o.encType||s,replace:o.replace,state:o.state,fromRouteId:r,unstable_viewTransition:o.unstable_viewTransition})},[e,t,r])}function Ac(e,t){let{router:r}=Kn(Wr.UseSubmitFetcher),{basename:n}=E.useContext(rt);return E.useCallback(function(o,a){a===void 0&&(a={}),Pc();let{action:i,method:s,encType:l,formData:u,body:c}=Sc(o,n);t==null&&U(!1),r.fetch(e,t,a.action||i,{preventScrollReset:a.preventScrollReset,formData:u,body:c,formMethod:a.method||s,formEncType:a.encType||l})},[r,n,e,t])}function Xi(e,t){let{relative:r}=t===void 0?{}:t,{basename:n}=E.useContext(rt),o=E.useContext(Ye);o||U(!1);let[a]=o.matches.slice(-1),i=mt({},Ot(e||".",{relative:r})),s=we();if(e==null&&(i.search=s.search,a.route.index)){let l=new URLSearchParams(i.search);l.delete("index"),i.search=l.toString()?"?"+l.toString():""}return(!e||e===".")&&a.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(i.pathname=i.pathname==="/"?n:pt([n,i.pathname])),qe(i)}function vy(e,t){return E.forwardRef((n,o)=>{let a=Ac(e,t);return E.createElement(Ec,mt({},n,{ref:o,submit:a}))})}function Ki(){var e;let{router:t}=Kn(Wr.UseFetcher),r=E.useContext(Ye);r||U(!1);let n=(e=r.matches[r.matches.length-1])==null?void 0:e.route.id;n==null&&U(!1);let[o]=E.useState(()=>String(++wy)),[a]=E.useState(()=>(n||U(!1),vy(o,n))),[i]=E.useState(()=>c=>{t||U(!1),n||U(!1),t.fetch(o,n,c)}),s=Ac(o,n),l=t.getFetcher(o),u=E.useMemo(()=>mt({Form:a,submit:s,load:i},l),[l,a,s,i]);return E.useEffect(()=>()=>{if(!t){console.warn("No router available to clean up from useFetcher()");return}t.deleteFetcher(o)},[t,o]),u}function Qn(){return[...Cc(na.UseFetchers).fetchers.values()]}function ia(e){let{getKey:t,storageKey:r}=e===void 0?{}:e,{router:n}=Kn(Wr.UseScrollRestoration),{restoreScrollPosition:o,preventScrollReset:a}=Cc(na.UseScrollRestoration),{basename:i}=E.useContext(rt),s=we(),l=er(),u=lt();E.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),by(E.useCallback(()=>{if(u.state==="idle"){let c=(t?t(s,l):null)||s.key;ea[c]=window.scrollY}try{sessionStorage.setItem(r||xc,JSON.stringify(ea))}catch{}window.history.scrollRestoration="auto"},[r,t,u.state,s,l])),typeof document<"u"&&(E.useLayoutEffect(()=>{try{let c=sessionStorage.getItem(r||xc);c&&(ea=JSON.parse(c))}catch{}},[r]),E.useLayoutEffect(()=>{let c=t&&i!=="/"?(p,m)=>t(mt({},p,{pathname:Qe(p.pathname,i)||p.pathname}),m):t,d=n?.enableScrollRestoration(ea,()=>window.scrollY,c);return()=>d&&d()},[n,i,t]),E.useLayoutEffect(()=>{if(o!==!1){if(typeof o=="number"){window.scrollTo(0,o);return}if(s.hash){let c=document.getElementById(decodeURIComponent(s.hash.slice(1)));if(c){c.scrollIntoView();return}}a!==!0&&window.scrollTo(0,0)}},[s,o,a]))}function $c(e,t){let{capture:r}=t||{};E.useEffect(()=>{let n=r!=null?{capture:r}:void 0;return window.addEventListener("beforeunload",e,n),()=>{window.removeEventListener("beforeunload",e,n)}},[e,r])}function by(e,t){let{capture:r}=t||{};E.useEffect(()=>{let n=r!=null?{capture:r}:void 0;return window.addEventListener("pagehide",e,n),()=>{window.removeEventListener("pagehide",e,n)}},[e,r])}function Tc(e){let{when:t,message:r}=e,n=vn(t);E.useEffect(()=>{n.state==="blocked"&&(window.confirm(r)?setTimeout(n.proceed,0):n.reset())},[n,r]),E.useEffect(()=>{n.state==="blocked"&&!t&&n.reset()},[n,t])}function Qi(e,t){t===void 0&&(t={});let r=E.useContext(Wi);r==null&&U(!1);let{basename:n}=Kn(Wr.useViewTransitionState),o=Ot(e,{relative:t.relative});if(!r.isTransitioning)return!1;let a=Qe(r.currentLocation.pathname,n)||r.currentLocation.pathname,i=Qe(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Et(o.pathname,i)!=null||Et(o.pathname,a)!=null}var E,ta,Vi,Zo,ty,ry,ny,oy,Wi,ly,Sr,zi,my,gy,aa,Gi,Ue,Ec,Wr,na,wy,xc,ea,Rr=To(()=>{E=C(Ee());Qo();Qo();Qt();ta="get",Vi="application/x-www-form-urlencoded";Zo=null;ty=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);ry=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ny=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],oy=["reloadDocument","replace","state","method","action","onSubmit","submit","relative","preventScrollReset","unstable_viewTransition"];Wi=E.createContext({isTransitioning:!1}),ly="startTransition",Sr=E[ly];zi=class{constructor(){this.status="pending",this.promise=new Promise((t,r)=>{this.resolve=n=>{this.status==="pending"&&(this.status="resolved",t(n))},this.reject=n=>{this.status==="pending"&&(this.status="rejected",r(n))}})}};my=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,aa=E.forwardRef(function(t,r){let{onClick:n,relative:o,reloadDocument:a,replace:i,state:s,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=t,p=Yi(t,ry),{basename:m}=E.useContext(rt),f,y=!1;if(typeof u=="string"&&gy.test(u)&&(f=u,my))try{let R=new URL(window.location.href),h=u.startsWith("//")?new URL(R.protocol+u):new URL(u),I=Qe(h.pathname,m);h.origin===R.origin&&I!=null?u=I+h.search+h.hash:y=!0}catch{}let g=Zt(u,{relative:o}),x=kc(u,{replace:i,state:s,target:l,preventScrollReset:c,relative:o,unstable_viewTransition:d});function T(R){n&&n(R),R.defaultPrevented||x(R)}return E.createElement("a",mt({},p,{href:f||g,onClick:y||a?n:T,ref:r,target:l}))}),Gi=E.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:o=!1,className:a="",end:i=!1,style:s,to:l,unstable_viewTransition:u,children:c}=t,d=Yi(t,ny),p=Ot(l,{relative:d.relative}),m=we(),f=E.useContext(Dt),{navigator:y}=E.useContext(rt),g=f!=null&&Qi(p)&&u===!0,x=y.encodeLocation?y.encodeLocation(p).pathname:p.pathname,T=m.pathname,R=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;o||(T=T.toLowerCase(),R=R?R.toLowerCase():null,x=x.toLowerCase());let h=T===x||!i&&T.startsWith(x)&&T.charAt(x.length)==="/",I=R!=null&&(R===x||!i&&R.startsWith(x)&&R.charAt(x.length)==="/"),M={isActive:h,isPending:I,isTransitioning:g},P=h?n:void 0,Y;typeof a=="function"?Y=a(M):Y=[a,h?"active":null,I?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let De=typeof s=="function"?s(M):s;return E.createElement(aa,mt({},d,{"aria-current":P,className:Y,ref:r,style:De,to:l,unstable_viewTransition:u}),typeof c=="function"?c(M):c)}),Ue=E.forwardRef((e,t)=>{let r=Ji();return E.createElement(Ec,mt({},e,{submit:r,ref:t}))}),Ec=E.forwardRef((e,t)=>{let{reloadDocument:r,replace:n,state:o,method:a=ta,action:i,onSubmit:s,submit:l,relative:u,preventScrollReset:c,unstable_viewTransition:d}=e,p=Yi(e,oy),m=a.toLowerCase()==="get"?"get":"post",f=Xi(i,{relative:u});return E.createElement("form",mt({ref:t,method:m,action:f,onSubmit:r?s:g=>{if(s&&s(g),g.defaultPrevented)return;g.preventDefault();let x=g.nativeEvent.submitter,T=x?.getAttribute("formmethod")||a;l(x||g.currentTarget,{method:T,replace:n,state:o,relative:u,preventScrollReset:c,unstable_viewTransition:d})}},p))});(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Wr||(Wr={}));(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(na||(na={}));wy=0;xc="react-router-scroll-positions",ea={}});var Kc=$t(bn=>{"use strict";Object.defineProperty(bn,"__esModule",{value:!0});var Iy=Ee(),or=(Qt(),xi(mc)),is=(Qo(),xi(bc)),Er=(Rr(),xi(Ic));function Dy(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(r){if(r!=="default"){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}var nr=Dy(Iy);function Ny({basename:e,children:t,location:r="/"}){typeof r=="string"&&(r=Er.parsePath(r));let n=or.Action.Pop,o={pathname:r.pathname||"/",search:r.search||"",hash:r.hash||"",state:r.state||null,key:r.key||"default"},a=Gc();return nr.createElement(Er.Router,{basename:e,children:t,location:o,navigationType:n,navigator:a,static:!0})}function Ly({context:e,router:t,hydrate:r=!0,nonce:n}){t&&e||or.UNSAFE_invariant(!1);let o={router:t,navigator:Gc(),static:!0,staticContext:e,basename:e.basename||"/"},a="";if(r!==!1){let s={loaderData:e.loaderData,actionData:e.actionData,errors:Oy(e.errors)};a=`window.__staticRouterHydrationData = JSON.parse(${Vy(JSON.stringify(JSON.stringify(s)))});`}let{state:i}=o.router;return nr.createElement(nr.Fragment,null,nr.createElement(Er.UNSAFE_DataRouterContext.Provider,{value:o},nr.createElement(Er.UNSAFE_DataRouterStateContext.Provider,{value:i},nr.createElement(Er.UNSAFE_ViewTransitionContext.Provider,{value:{isTransitioning:!1}},nr.createElement(Er.Router,{basename:o.basename,location:i.location,navigationType:i.historyAction,navigator:o.navigator,static:o.static},nr.createElement(Uy,{routes:t.routes,state:i}))))),a?nr.createElement("script",{suppressHydrationWarning:!0,nonce:n,dangerouslySetInnerHTML:{__html:a}}):null)}function Uy({routes:e,state:t}){return is.UNSAFE_useRoutesImpl(e,void 0,t)}function Oy(e){if(!e)return null;let t=Object.entries(e),r={};for(let[n,o]of t)or.isRouteErrorResponse(o)?r[n]={...o,__type:"RouteErrorResponse"}:o instanceof Error?r[n]={message:o.message,__type:"Error",...o.name!=="Error"?{__subType:o.name}:{}}:r[n]=o;return r}function Gc(){return{createHref:Jc,encodeLocation:Xc,push(e){throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e)})\` somewhere in your app.`)},replace(e){throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e)}, { replace: true })\` somewhere in your app.`)},go(e){throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${e})\` somewhere in your app.`)},back(){throw new Error("You cannot use navigator.back() on the server because it is a stateless environment.")},forward(){throw new Error("You cannot use navigator.forward() on the server because it is a stateless environment.")}}}function Fy(e,t){return or.createStaticHandler(e,{...t,mapRouteProperties:is.UNSAFE_mapRouteProperties})}function My(e,t){let r={},n=or.UNSAFE_convertRoutesToDataRoutes(e,is.UNSAFE_mapRouteProperties,void 0,r),o=t.matches.map(i=>{let s=r[i.route.id]||i.route;return{...i,route:s}}),a=i=>`You cannot use router.${i}() on the server because it is a stateless environment`;return{get basename(){return t.basename},get state(){return{historyAction:or.Action.Pop,location:t.location,matches:o,loaderData:t.loaderData,actionData:t.actionData,errors:t.errors,initialized:!0,navigation:or.IDLE_NAVIGATION,restoreScrollPosition:null,preventScrollReset:!1,revalidation:"idle",fetchers:new Map,blockers:new Map}},get routes(){return n},get window(){},initialize(){throw a("initialize")},subscribe(){throw a("subscribe")},enableScrollRestoration(){throw a("enableScrollRestoration")},navigate(){throw a("navigate")},fetch(){throw a("fetch")},revalidate(){throw a("revalidate")},createHref:Jc,encodeLocation:Xc,getFetcher(){return or.IDLE_FETCHER},deleteFetcher(){throw a("deleteFetcher")},dispose(){throw a("dispose")},getBlocker(){return or.IDLE_BLOCKER},deleteBlocker(){throw a("deleteBlocker")},_internalFetchControllers:new Map,_internalActiveDeferreds:new Map,_internalSetRoutes(){throw a("_internalSetRoutes")}}}function Jc(e){return typeof e=="string"?e:Er.createPath(e)}function Xc(e){let t=typeof e=="string"?e:Er.createPath(e),r=Hy.test(t)?new URL(t):new URL(t,"http://localhost");return{pathname:r.pathname,search:r.search,hash:r.hash}}var Hy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jy={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},qy=/[&><\u2028\u2029]/g;function Vy(e){return e.replace(qy,t=>jy[t])}bn.StaticRouter=Ny;bn.StaticRouterProvider=Ly;bn.createStaticHandler=Fy;bn.createStaticRouter=My});var rf=$t(xn=>{"use strict";var Id=Ee();function X(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ct=Object.prototype.hasOwnProperty,tv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fd={},pd={};function Dd(e){return ct.call(pd,e)?!0:ct.call(fd,e)?!1:tv.test(e)?pd[e]=!0:(fd[e]=!0,!1)}function at(e,t,r,n,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ge[e]=new at(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ge[t]=new at(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ge[e]=new at(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ge[e]=new at(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ge[e]=new at(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ge[e]=new at(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ge[e]=new at(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ge[e]=new at(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ge[e]=new at(e,5,!1,e.toLowerCase(),null,!1,!1)});var vs=/[\-:]([a-z])/g;function ws(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(vs,ws);Ge[t]=new at(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(vs,ws);Ge[t]=new at(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(vs,ws);Ge[t]=new at(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ge[e]=new at(e,1,!1,e.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ge[e]=new at(e,1,!1,e.toLowerCase(),null,!0,!0)});var Sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rv=["Webkit","ms","Moz","O"];Object.keys(Sa).forEach(function(e){rv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sa[t]=Sa[e]})});var nv=/["'&<>]/;function ot(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=nv.exec(e);if(t){var r="",n,o=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==n&&(r+=e.substring(o,n)),o=n+1,r+=t}e=o!==n?r+e.substring(o,n):r}return e}var ov=/([A-Z])/g,av=/^ms-/,ps=Array.isArray;function ir(e,t){return{insertionMode:e,selectedValue:t}}function iv(e,t,r){switch(t){case"select":return ir(1,r.value!=null?r.value:r.defaultValue);case"svg":return ir(2,null);case"math":return ir(3,null);case"foreignObject":return ir(1,null);case"table":return ir(4,null);case"thead":case"tbody":case"tfoot":return ir(5,null);case"colgroup":return ir(7,null);case"tr":return ir(6,null)}return 4<=e.insertionMode||e.insertionMode===0?ir(1,null):e}var hd=new Map;function Nd(e,t,r){if(typeof r!="object")throw Error(X(62));t=!0;for(var n in r)if(ct.call(r,n)){var o=r[n];if(o!=null&&typeof o!="boolean"&&o!==""){if(n.indexOf("--")===0){var a=ot(n);o=ot((""+o).trim())}else{a=n;var i=hd.get(a);i!==void 0||(i=ot(a.replace(ov,"-$1").toLowerCase().replace(av,"-ms-")),hd.set(a,i)),a=i,o=typeof o=="number"?o===0||ct.call(Sa,n)?""+o:o+"px":ot((""+o).trim())}t?(t=!1,e.push(' style="',a,":",o)):e.push(";",a,":",o)}}t||e.push('"')}function yt(e,t,r,n){switch(r){case"style":Nd(e,t,n);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N"){if(t=Ge.hasOwnProperty(r)?Ge[r]:null,t!==null){switch(typeof n){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(r=t.attributeName,t.type){case 3:n&&e.push(" ",r,'=""');break;case 4:n===!0?e.push(" ",r,'=""'):n!==!1&&e.push(" ",r,'="',ot(n),'"');break;case 5:isNaN(n)||e.push(" ",r,'="',ot(n),'"');break;case 6:!isNaN(n)&&1<=n&&e.push(" ",r,'="',ot(n),'"');break;default:t.sanitizeURL&&(n=""+n),e.push(" ",r,'="',ot(n),'"')}}else if(Dd(r)){switch(typeof n){case"function":case"symbol":return;case"boolean":if(t=r.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(" ",r,'="',ot(n),'"')}}}function Ra(e,t,r){if(t!=null){if(r!=null)throw Error(X(60));if(typeof t!="object"||!("__html"in t))throw Error(X(61));t=t.__html,t!=null&&e.push(""+t)}}function sv(e){var t="";return Id.Children.forEach(e,function(r){r!=null&&(t+=r)}),t}function cs(e,t,r,n){e.push(Mt(r));var o=r=null,a;for(a in t)if(ct.call(t,a)){var i=t[a];if(i!=null)switch(a){case"children":r=i;break;case"dangerouslySetInnerHTML":o=i;break;default:yt(e,n,a,i)}}return e.push(">"),Ra(e,o,r),typeof r=="string"?(e.push(ot(r)),null):r}var lv=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,md=new Map;function Mt(e){var t=md.get(e);if(t===void 0){if(!lv.test(e))throw Error(X(65,e));t="<"+e,md.set(e,t)}return t}function uv(e,t,r,n,o){switch(t){case"select":e.push(Mt("select"));var a=null,i=null;for(c in r)if(ct.call(r,c)){var s=r[c];if(s!=null)switch(c){case"children":a=s;break;case"dangerouslySetInnerHTML":i=s;break;case"defaultValue":case"value":break;default:yt(e,n,c,s)}}return e.push(">"),Ra(e,i,a),a;case"option":i=o.selectedValue,e.push(Mt("option"));var l=s=null,u=null,c=null;for(a in r)if(ct.call(r,a)){var d=r[a];if(d!=null)switch(a){case"children":s=d;break;case"selected":u=d;break;case"dangerouslySetInnerHTML":c=d;break;case"value":l=d;default:yt(e,n,a,d)}}if(i!=null)if(r=l!==null?""+l:sv(s),ps(i)){for(n=0;n<i.length;n++)if(""+i[n]===r){e.push(' selected=""');break}}else""+i===r&&e.push(' selected=""');else u&&e.push(' selected=""');return e.push(">"),Ra(e,c,s),s;case"textarea":e.push(Mt("textarea")),c=i=a=null;for(s in r)if(ct.call(r,s)&&(l=r[s],l!=null))switch(s){case"children":c=l;break;case"value":a=l;break;case"defaultValue":i=l;break;case"dangerouslySetInnerHTML":throw Error(X(91));default:yt(e,n,s,l)}if(a===null&&i!==null&&(a=i),e.push(">"),c!=null){if(a!=null)throw Error(X(92));if(ps(c)&&1<c.length)throw Error(X(93));a=""+c}return typeof a=="string"&&a[0]===`
`&&e.push(`
`),a!==null&&e.push(ot(""+a)),null;case"input":e.push(Mt("input")),l=c=s=a=null;for(i in r)if(ct.call(r,i)&&(u=r[i],u!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(X(399,"input"));case"defaultChecked":l=u;break;case"defaultValue":s=u;break;case"checked":c=u;break;case"value":a=u;break;default:yt(e,n,i,u)}return c!==null?yt(e,n,"checked",c):l!==null&&yt(e,n,"checked",l),a!==null?yt(e,n,"value",a):s!==null&&yt(e,n,"value",s),e.push("/>"),null;case"menuitem":e.push(Mt("menuitem"));for(var p in r)if(ct.call(r,p)&&(a=r[p],a!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(X(400));default:yt(e,n,p,a)}return e.push(">"),null;case"title":e.push(Mt("title")),a=null;for(d in r)if(ct.call(r,d)&&(i=r[d],i!=null))switch(d){case"children":a=i;break;case"dangerouslySetInnerHTML":throw Error(X(434));default:yt(e,n,d,i)}return e.push(">"),a;case"listing":case"pre":e.push(Mt(t)),i=a=null;for(l in r)if(ct.call(r,l)&&(s=r[l],s!=null))switch(l){case"children":a=s;break;case"dangerouslySetInnerHTML":i=s;break;default:yt(e,n,l,s)}if(e.push(">"),i!=null){if(a!=null)throw Error(X(60));if(typeof i!="object"||!("__html"in i))throw Error(X(61));r=i.__html,r!=null&&(typeof r=="string"&&0<r.length&&r[0]===`
`?e.push(`
`,r):e.push(""+r))}return typeof a=="string"&&a[0]===`
`&&e.push(`
`),a;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Mt(t));for(var m in r)if(ct.call(r,m)&&(a=r[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(X(399,t));default:yt(e,n,m,a)}return e.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return cs(e,r,t,n);case"html":return o.insertionMode===0&&e.push("<!DOCTYPE html>"),cs(e,r,t,n);default:if(t.indexOf("-")===-1&&typeof r.is!="string")return cs(e,r,t,n);e.push(Mt(t)),i=a=null;for(u in r)if(ct.call(r,u)&&(s=r[u],s!=null))switch(u){case"children":a=s;break;case"dangerouslySetInnerHTML":i=s;break;case"style":Nd(e,n,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:Dd(u)&&typeof s!="function"&&typeof s!="symbol"&&e.push(" ",u,'="',ot(s),'"')}return e.push(">"),Ra(e,i,a),a}}function gd(e,t,r){if(e.push('<!--$?--><template id="'),r===null)throw Error(X(395));return e.push(r),e.push('"></template>')}function cv(e,t,r,n){switch(r.insertionMode){case 0:case 1:return e.push('<div hidden id="'),e.push(t.segmentPrefix),t=n.toString(16),e.push(t),e.push('">');case 2:return e.push('<svg aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=n.toString(16),e.push(t),e.push('">');case 3:return e.push('<math aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=n.toString(16),e.push(t),e.push('">');case 4:return e.push('<table hidden id="'),e.push(t.segmentPrefix),t=n.toString(16),e.push(t),e.push('">');case 5:return e.push('<table hidden><tbody id="'),e.push(t.segmentPrefix),t=n.toString(16),e.push(t),e.push('">');case 6:return e.push('<table hidden><tr id="'),e.push(t.segmentPrefix),t=n.toString(16),e.push(t),e.push('">');case 7:return e.push('<table hidden><colgroup id="'),e.push(t.segmentPrefix),t=n.toString(16),e.push(t),e.push('">');default:throw Error(X(397))}}function dv(e,t){switch(t.insertionMode){case 0:case 1:return e.push("</div>");case 2:return e.push("</svg>");case 3:return e.push("</math>");case 4:return e.push("</table>");case 5:return e.push("</tbody></table>");case 6:return e.push("</tr></table>");case 7:return e.push("</colgroup></table>");default:throw Error(X(397))}}var fv=/[<\u2028\u2029]/g;function ds(e){return JSON.stringify(e).replace(fv,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function pv(e,t){return t=t===void 0?"":t,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:t+"P:",segmentPrefix:t+"S:",boundaryPrefix:t+"B:",idPrefix:t,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:e}}function yd(e,t,r,n){return r.generateStaticMarkup?(e.push(ot(t)),!1):(t===""?e=n:(n&&e.push("<!-- -->"),e.push(ot(t)),e=!0),e)}var lo=Object.assign,hv=Symbol.for("react.element"),Ld=Symbol.for("react.portal"),Ud=Symbol.for("react.fragment"),Od=Symbol.for("react.strict_mode"),Fd=Symbol.for("react.profiler"),Md=Symbol.for("react.provider"),Hd=Symbol.for("react.context"),jd=Symbol.for("react.forward_ref"),qd=Symbol.for("react.suspense"),Vd=Symbol.for("react.suspense_list"),Bd=Symbol.for("react.memo"),bs=Symbol.for("react.lazy"),mv=Symbol.for("react.scope"),gv=Symbol.for("react.debug_trace_mode"),yv=Symbol.for("react.legacy_hidden"),vv=Symbol.for("react.default_value"),vd=Symbol.iterator;function hs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ud:return"Fragment";case Ld:return"Portal";case Fd:return"Profiler";case Od:return"StrictMode";case qd:return"Suspense";case Vd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hd:return(e.displayName||"Context")+".Consumer";case Md:return(e._context.displayName||"Context")+".Provider";case jd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bd:return t=e.displayName||null,t!==null?t:hs(e.type)||"Memo";case bs:t=e._payload,e=e._init;try{return hs(e(t))}catch{}}return null}var zd={};function wd(e,t){if(e=e.contextTypes,!e)return zd;var r={},n;for(n in e)r[n]=t[n];return r}var Jr=null;function Ia(e,t){if(e!==t){e.context._currentValue2=e.parentValue,e=e.parent;var r=t.parent;if(e===null){if(r!==null)throw Error(X(401))}else{if(r===null)throw Error(X(401));Ia(e,r)}t.context._currentValue2=t.value}}function Yd(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&Yd(e)}function Wd(e){var t=e.parent;t!==null&&Wd(t),e.context._currentValue2=e.value}function Gd(e,t){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(X(402));e.depth===t.depth?Ia(e,t):Gd(e,t)}function Jd(e,t){var r=t.parent;if(r===null)throw Error(X(402));e.depth===r.depth?Ia(e,r):Jd(e,r),t.context._currentValue2=t.value}function _a(e){var t=Jr;t!==e&&(t===null?Wd(e):e===null?Yd(t):t.depth===e.depth?Ia(t,e):t.depth>e.depth?Gd(t,e):Jd(t,e),Jr=e)}var bd={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function xd(e,t,r,n){var o=e.state!==void 0?e.state:null;e.updater=bd,e.props=r,e.state=o;var a={queue:[],replace:!1};e._reactInternals=a;var i=t.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue2:n,i=t.getDerivedStateFromProps,typeof i=="function"&&(i=i(r,o),o=i==null?o:lo({},o,i),e.state=o),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&bd.enqueueReplaceState(e,e.state,null),a.queue!==null&&0<a.queue.length)if(t=a.queue,i=a.replace,a.queue=null,a.replace=!1,i&&t.length===1)e.state=t[0];else{for(a=i?t[0]:e.state,o=!0,i=i?1:0;i<t.length;i++){var s=t[i];s=typeof s=="function"?s.call(e,a,r,n):s,s!=null&&(o?(o=!1,a=lo({},a,s)):lo(a,s))}e.state=a}else a.queue=null}var wv={id:1,overflow:""};function ms(e,t,r){var n=e.id;e=e.overflow;var o=32-Ea(n)-1;n&=~(1<<o),r+=1;var a=32-Ea(t)+o;if(30<a){var i=o-o%5;return a=(n&(1<<i)-1).toString(32),n>>=i,o-=i,{id:1<<32-Ea(t)+o|r<<o|n,overflow:a+e}}return{id:1<<a|r<<o|n,overflow:e}}var Ea=Math.clz32?Math.clz32:Sv,bv=Math.log,xv=Math.LN2;function Sv(e){return e>>>=0,e===0?32:31-(bv(e)/xv|0)|0}function Rv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ev=typeof Object.is=="function"?Object.is:Rv,sr=null,xs=null,Ca=null,ye=null,io=!1,Pa=!1,uo=0,kr=null,Da=0;function Gr(){if(sr===null)throw Error(X(321));return sr}function Sd(){if(0<Da)throw Error(X(312));return{memoizedState:null,queue:null,next:null}}function Ss(){return ye===null?Ca===null?(io=!1,Ca=ye=Sd()):(io=!0,ye=Ca):ye.next===null?(io=!1,ye=ye.next=Sd()):(io=!0,ye=ye.next),ye}function Rs(){xs=sr=null,Pa=!1,Ca=null,Da=0,ye=kr=null}function Xd(e,t){return typeof t=="function"?t(e):t}function Rd(e,t,r){if(sr=Gr(),ye=Ss(),io){var n=ye.queue;if(t=n.dispatch,kr!==null&&(r=kr.get(n),r!==void 0)){kr.delete(n),n=ye.memoizedState;do n=e(n,r.action),r=r.next;while(r!==null);return ye.memoizedState=n,[n,t]}return[ye.memoizedState,t]}return e=e===Xd?typeof t=="function"?t():t:r!==void 0?r(t):t,ye.memoizedState=e,e=ye.queue={last:null,dispatch:null},e=e.dispatch=Cv.bind(null,sr,e),[ye.memoizedState,e]}function Ed(e,t){if(sr=Gr(),ye=Ss(),t=t===void 0?null:t,ye!==null){var r=ye.memoizedState;if(r!==null&&t!==null){var n=r[1];e:if(n===null)n=!1;else{for(var o=0;o<n.length&&o<t.length;o++)if(!Ev(t[o],n[o])){n=!1;break e}n=!0}if(n)return r[0]}}return e=e(),ye.memoizedState=[e,t],e}function Cv(e,t,r){if(25<=Da)throw Error(X(301));if(e===sr)if(Pa=!0,e={action:r,next:null},kr===null&&(kr=new Map),r=kr.get(t),r===void 0)kr.set(t,e);else{for(t=r;t.next!==null;)t=t.next;t.next=e}}function kv(){throw Error(X(394))}function ba(){}var Cd={readContext:function(e){return e._currentValue2},useContext:function(e){return Gr(),e._currentValue2},useMemo:Ed,useReducer:Rd,useRef:function(e){sr=Gr(),ye=Ss();var t=ye.memoizedState;return t===null?(e={current:e},ye.memoizedState=e):t},useState:function(e){return Rd(Xd,e)},useInsertionEffect:ba,useLayoutEffect:function(){},useCallback:function(e,t){return Ed(function(){return e},t)},useImperativeHandle:ba,useEffect:ba,useDebugValue:ba,useDeferredValue:function(e){return Gr(),e},useTransition:function(){return Gr(),[!1,kv]},useId:function(){var e=xs.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-Ea(e)-1)).toString(32)+t;var r=ka;if(r===null)throw Error(X(404));return t=uo++,e=":"+r.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return Gr(),t(e._source)},useSyncExternalStore:function(e,t,r){if(r===void 0)throw Error(X(407));return r()}},ka=null,fs=Id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function _v(e){return console.error(e),null}function so(){}function Pv(e,t,r,n,o,a,i,s,l){var u=[],c=new Set;return t={destination:null,responseState:t,progressiveChunkSize:n===void 0?12800:n,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:c,pingedTasks:u,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:o===void 0?_v:o,onAllReady:a===void 0?so:a,onShellReady:i===void 0?so:i,onShellError:s===void 0?so:s,onFatalError:l===void 0?so:l},r=Aa(t,0,null,r,!1,!1),r.parentFlushed=!0,e=Es(t,e,null,r,c,zd,null,wv),u.push(e),t}function Es(e,t,r,n,o,a,i,s){e.allPendingTasks++,r===null?e.pendingRootTasks++:r.pendingTasks++;var l={node:t,ping:function(){var u=e.pingedTasks;u.push(l),u.length===1&&Zd(e)},blockedBoundary:r,blockedSegment:n,abortSet:o,legacyContext:a,context:i,treeContext:s};return o.add(l),l}function Aa(e,t,r,n,o,a){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:n,boundary:r,lastPushedText:o,textEmbedded:a}}function co(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function $a(e,t){var r=e.onShellError;r(t),r=e.onFatalError,r(t),e.destination!==null?(e.status=2,e.destination.destroy(t)):(e.status=1,e.fatalError=t)}function kd(e,t,r,n,o){for(sr={},xs=t,uo=0,e=r(n,o);Pa;)Pa=!1,uo=0,Da+=1,ye=null,e=r(n,o);return Rs(),e}function _d(e,t,r,n){var o=r.render(),a=n.childContextTypes;if(a!=null){var i=t.legacyContext;if(typeof r.getChildContext!="function")n=i;else{r=r.getChildContext();for(var s in r)if(!(s in a))throw Error(X(108,hs(n)||"Unknown",s));n=lo({},i,r)}t.legacyContext=n,vt(e,t,o),t.legacyContext=i}else vt(e,t,o)}function Pd(e,t){if(e&&e.defaultProps){t=lo({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function gs(e,t,r,n,o){if(typeof r=="function")if(r.prototype&&r.prototype.isReactComponent){o=wd(r,t.legacyContext);var a=r.contextType;a=new r(n,typeof a=="object"&&a!==null?a._currentValue2:o),xd(a,r,n,o),_d(e,t,a,r)}else{a=wd(r,t.legacyContext),o=kd(e,t,r,n,a);var i=uo!==0;if(typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0)xd(o,r,n,a),_d(e,t,o,r);else if(i){n=t.treeContext,t.treeContext=ms(n,1,0);try{vt(e,t,o)}finally{t.treeContext=n}}else vt(e,t,o)}else if(typeof r=="string"){switch(o=t.blockedSegment,a=uv(o.chunks,r,n,e.responseState,o.formatContext),o.lastPushedText=!1,i=o.formatContext,o.formatContext=iv(i,r,n),ys(e,t,a),o.formatContext=i,r){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:o.chunks.push("</",r,">")}o.lastPushedText=!1}else{switch(r){case yv:case gv:case Od:case Fd:case Ud:vt(e,t,n.children);return;case Vd:vt(e,t,n.children);return;case mv:throw Error(X(343));case qd:e:{r=t.blockedBoundary,o=t.blockedSegment,a=n.fallback,n=n.children,i=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},l=Aa(e,o.chunks.length,s,o.formatContext,!1,!1);o.children.push(l),o.lastPushedText=!1;var u=Aa(e,0,null,o.formatContext,!1,!1);u.parentFlushed=!0,t.blockedBoundary=s,t.blockedSegment=u;try{if(ys(e,t,n),e.responseState.generateStaticMarkup||u.lastPushedText&&u.textEmbedded&&u.chunks.push("<!-- -->"),u.status=1,Ta(s,u),s.pendingTasks===0)break e}catch(c){u.status=4,s.forceClientRender=!0,s.errorDigest=co(e,c)}finally{t.blockedBoundary=r,t.blockedSegment=o}t=Es(e,a,r,l,i,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof r=="object"&&r!==null)switch(r.$$typeof){case jd:if(n=kd(e,t,r.render,n,o),uo!==0){r=t.treeContext,t.treeContext=ms(r,1,0);try{vt(e,t,n)}finally{t.treeContext=r}}else vt(e,t,n);return;case Bd:r=r.type,n=Pd(r,n),gs(e,t,r,n,o);return;case Md:if(o=n.children,r=r._context,n=n.value,a=r._currentValue2,r._currentValue2=n,i=Jr,Jr=n={parent:i,depth:i===null?0:i.depth+1,context:r,parentValue:a,value:n},t.context=n,vt(e,t,o),e=Jr,e===null)throw Error(X(403));n=e.parentValue,e.context._currentValue2=n===vv?e.context._defaultValue:n,e=Jr=e.parent,t.context=e;return;case Hd:n=n.children,n=n(r._currentValue2),vt(e,t,n);return;case bs:o=r._init,r=o(r._payload),n=Pd(r,n),gs(e,t,r,n,void 0);return}throw Error(X(130,r==null?r:typeof r,""))}}function vt(e,t,r){if(t.node=r,typeof r=="object"&&r!==null){switch(r.$$typeof){case hv:gs(e,t,r.type,r.props,r.ref);return;case Ld:throw Error(X(257));case bs:var n=r._init;r=n(r._payload),vt(e,t,r);return}if(ps(r)){Ad(e,t,r);return}if(r===null||typeof r!="object"?n=null:(n=vd&&r[vd]||r["@@iterator"],n=typeof n=="function"?n:null),n&&(n=n.call(r))){if(r=n.next(),!r.done){var o=[];do o.push(r.value),r=n.next();while(!r.done);Ad(e,t,o)}return}throw e=Object.prototype.toString.call(r),Error(X(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}typeof r=="string"?(n=t.blockedSegment,n.lastPushedText=yd(t.blockedSegment.chunks,r,e.responseState,n.lastPushedText)):typeof r=="number"&&(n=t.blockedSegment,n.lastPushedText=yd(t.blockedSegment.chunks,""+r,e.responseState,n.lastPushedText))}function Ad(e,t,r){for(var n=r.length,o=0;o<n;o++){var a=t.treeContext;t.treeContext=ms(a,n,o);try{ys(e,t,r[o])}finally{t.treeContext=a}}}function ys(e,t,r){var n=t.blockedSegment.formatContext,o=t.legacyContext,a=t.context;try{return vt(e,t,r)}catch(l){if(Rs(),typeof l=="object"&&l!==null&&typeof l.then=="function"){r=l;var i=t.blockedSegment,s=Aa(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(s),i.lastPushedText=!1,e=Es(e,t.node,t.blockedBoundary,s,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,r.then(e,e),t.blockedSegment.formatContext=n,t.legacyContext=o,t.context=a,_a(a)}else throw t.blockedSegment.formatContext=n,t.legacyContext=o,t.context=a,_a(a),l}}function Av(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,Qd(this,t,e)}function Kd(e,t,r){var n=e.blockedBoundary;e.blockedSegment.status=3,n===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.push(null))):(n.pendingTasks--,n.forceClientRender||(n.forceClientRender=!0,e=r===void 0?Error(X(432)):r,n.errorDigest=t.onError(e),n.parentFlushed&&t.clientRenderedBoundaries.push(n)),n.fallbackAbortableTasks.forEach(function(o){return Kd(o,t,r)}),n.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(n=t.onAllReady,n()))}function Ta(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var r=t.children[0];r.id=t.id,r.parentFlushed=!0,r.status===1&&Ta(e,r)}else e.completedSegments.push(t)}function Qd(e,t,r){if(t===null){if(r.parentFlushed){if(e.completedRootSegment!==null)throw Error(X(389));e.completedRootSegment=r}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=so,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(r.parentFlushed&&r.status===1&&Ta(t,r),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(Av,e),t.fallbackAbortableTasks.clear()):r.parentFlushed&&r.status===1&&(Ta(t,r),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function Zd(e){if(e.status!==2){var t=Jr,r=fs.current;fs.current=Cd;var n=ka;ka=e.responseState;try{var o=e.pingedTasks,a;for(a=0;a<o.length;a++){var i=o[a],s=e,l=i.blockedSegment;if(l.status===0){_a(i.context);try{vt(s,i,i.node),s.responseState.generateStaticMarkup||l.lastPushedText&&l.textEmbedded&&l.chunks.push("<!-- -->"),i.abortSet.delete(i),l.status=1,Qd(s,i.blockedBoundary,l)}catch(f){if(Rs(),typeof f=="object"&&f!==null&&typeof f.then=="function"){var u=i.ping;f.then(u,u)}else{i.abortSet.delete(i),l.status=4;var c=i.blockedBoundary,d=f,p=co(s,d);if(c===null?$a(s,d):(c.pendingTasks--,c.forceClientRender||(c.forceClientRender=!0,c.errorDigest=p,c.parentFlushed&&s.clientRenderedBoundaries.push(c))),s.allPendingTasks--,s.allPendingTasks===0){var m=s.onAllReady;m()}}}finally{}}}o.splice(0,a),e.destination!==null&&Cs(e,e.destination)}catch(f){co(e,f),$a(e,f)}finally{ka=n,fs.current=r,r===Cd&&_a(t)}}}function xa(e,t,r){switch(r.parentFlushed=!0,r.status){case 0:var n=r.id=e.nextSegmentId++;return r.lastPushedText=!1,r.textEmbedded=!1,e=e.responseState,t.push('<template id="'),t.push(e.placeholderPrefix),e=n.toString(16),t.push(e),t.push('"></template>');case 1:r.status=2;var o=!0;n=r.chunks;var a=0;r=r.children;for(var i=0;i<r.length;i++){for(o=r[i];a<o.index;a++)t.push(n[a]);o=Na(e,t,o)}for(;a<n.length-1;a++)t.push(n[a]);return a<n.length&&(o=t.push(n[a])),o;default:throw Error(X(390))}}function Na(e,t,r){var n=r.boundary;if(n===null)return xa(e,t,r);if(n.parentFlushed=!0,n.forceClientRender)return e.responseState.generateStaticMarkup||(n=n.errorDigest,t.push("<!--$!-->"),t.push("<template"),n&&(t.push(' data-dgst="'),n=ot(n),t.push(n),t.push('"')),t.push("></template>")),xa(e,t,r),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e;if(0<n.pendingTasks){n.rootSegmentID=e.nextSegmentId++,0<n.completedSegments.length&&e.partialBoundaries.push(n);var o=e.responseState,a=o.nextSuspenseID++;return o=o.boundaryPrefix+a.toString(16),n=n.id=o,gd(t,e.responseState,n),xa(e,t,r),t.push("<!--/$-->")}if(n.byteSize>e.progressiveChunkSize)return n.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(n),gd(t,e.responseState,n.id),xa(e,t,r),t.push("<!--/$-->");if(e.responseState.generateStaticMarkup||t.push("<!--$-->"),r=n.completedSegments,r.length!==1)throw Error(X(391));return Na(e,t,r[0]),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e}function $d(e,t,r){return cv(t,e.responseState,r.formatContext,r.id),Na(e,t,r),dv(t,r.formatContext)}function Td(e,t,r){for(var n=r.completedSegments,o=0;o<n.length;o++)ef(e,t,r,n[o]);if(n.length=0,e=e.responseState,n=r.id,r=r.rootSegmentID,t.push(e.startInlineScript),e.sentCompleteBoundaryFunction?t.push('$RC("'):(e.sentCompleteBoundaryFunction=!0,t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),n===null)throw Error(X(395));return r=r.toString(16),t.push(n),t.push('","'),t.push(e.segmentPrefix),t.push(r),t.push('")</script>')}function ef(e,t,r,n){if(n.status===2)return!0;var o=n.id;if(o===-1){if((n.id=r.rootSegmentID)===-1)throw Error(X(392));return $d(e,t,n)}return $d(e,t,n),e=e.responseState,t.push(e.startInlineScript),e.sentCompleteSegmentFunction?t.push('$RS("'):(e.sentCompleteSegmentFunction=!0,t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),t.push(e.segmentPrefix),o=o.toString(16),t.push(o),t.push('","'),t.push(e.placeholderPrefix),t.push(o),t.push('")</script>')}function Cs(e,t){try{var r=e.completedRootSegment;if(r!==null&&e.pendingRootTasks===0){Na(e,t,r),e.completedRootSegment=null;var n=e.responseState.bootstrapChunks;for(r=0;r<n.length-1;r++)t.push(n[r]);r<n.length&&t.push(n[r])}var o=e.clientRenderedBoundaries,a;for(a=0;a<o.length;a++){var i=o[a];n=t;var s=e.responseState,l=i.id,u=i.errorDigest,c=i.errorMessage,d=i.errorComponentStack;if(n.push(s.startInlineScript),s.sentClientRenderFunction?n.push('$RX("'):(s.sentClientRenderFunction=!0,n.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),l===null)throw Error(X(395));if(n.push(l),n.push('"'),u||c||d){n.push(",");var p=ds(u||"");n.push(p)}if(c||d){n.push(",");var m=ds(c||"");n.push(m)}if(d){n.push(",");var f=ds(d);n.push(f)}if(!n.push(")</script>")){e.destination=null,a++,o.splice(0,a);return}}o.splice(0,a);var y=e.completedBoundaries;for(a=0;a<y.length;a++)if(!Td(e,t,y[a])){e.destination=null,a++,y.splice(0,a);return}y.splice(0,a);var g=e.partialBoundaries;for(a=0;a<g.length;a++){var x=g[a];e:{o=e,i=t;var T=x.completedSegments;for(s=0;s<T.length;s++)if(!ef(o,i,x,T[s])){s++,T.splice(0,s);var R=!1;break e}T.splice(0,s),R=!0}if(!R){e.destination=null,a++,g.splice(0,a);return}}g.splice(0,a);var h=e.completedBoundaries;for(a=0;a<h.length;a++)if(!Td(e,t,h[a])){e.destination=null,a++,h.splice(0,a);return}h.splice(0,a)}finally{e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.push(null)}}function $v(e,t){try{var r=e.abortableTasks;r.forEach(function(n){return Kd(n,e,t)}),r.clear(),e.destination!==null&&Cs(e,e.destination)}catch(n){co(e,n),$a(e,n)}}function Tv(){}function tf(e,t,r,n){var o=!1,a=null,i="",s={push:function(u){return u!==null&&(i+=u),!0},destroy:function(u){o=!0,a=u}},l=!1;if(e=Pv(e,pv(r,t?t.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,Tv,void 0,function(){l=!0},void 0,void 0),Zd(e),$v(e,n),e.status===1)e.status=2,s.destroy(e.fatalError);else if(e.status!==2&&e.destination===null){e.destination=s;try{Cs(e,s)}catch(u){co(e,u),$a(e,u)}}if(o)throw a;if(!l)throw Error(X(426));return i}xn.renderToNodeStream=function(){throw Error(X(207))};xn.renderToStaticMarkup=function(e,t){return tf(e,t,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};xn.renderToStaticNodeStream=function(){throw Error(X(208))};xn.renderToString=function(e,t){return tf(e,t,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};xn.version="18.2.0"});var tp=$t(Ys=>{"use strict";var $f=Ee();function K(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bt=null,xt=0;function F(e,t){if(t.length!==0)if(512<t.length)0<xt&&(e.enqueue(new Uint8Array(bt.buffer,0,xt)),bt=new Uint8Array(512),xt=0),e.enqueue(t);else{var r=bt.length-xt;r<t.length&&(r===0?e.enqueue(bt):(bt.set(t.subarray(0,r),xt),e.enqueue(bt),t=t.subarray(r)),bt=new Uint8Array(512),xt=0),bt.set(t,xt),xt+=t.length}}function be(e,t){return F(e,t),!0}function nf(e){bt&&0<xt&&(e.enqueue(new Uint8Array(bt.buffer,0,xt)),bt=null,xt=0)}var Tf=new TextEncoder;function Q(e){return Tf.encode(e)}function A(e){return Tf.encode(e)}function If(e,t){typeof e.error=="function"?e.error(t):e.close()}var dt=Object.prototype.hasOwnProperty,Iv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,of={},af={};function Df(e){return dt.call(af,e)?!0:dt.call(of,e)?!1:Iv.test(e)?af[e]=!0:(of[e]=!0,!1)}function it(e,t,r,n,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Xe[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Xe[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Xe[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Xe[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Xe[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Xe[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Xe[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Xe[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Xe[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var Os=/[\-:]([a-z])/g;function Fs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Os,Fs);Xe[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Os,Fs);Xe[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Os,Fs);Xe[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Xe[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Xe[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});var Oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dv=["Webkit","ms","Moz","O"];Object.keys(Oa).forEach(function(e){Dv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Oa[t]=Oa[e]})});var Nv=/["'&<>]/;function Je(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=Nv.exec(e);if(t){var r="",n,o=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==n&&(r+=e.substring(o,n)),o=n+1,r+=t}e=o!==n?r+e.substring(o,n):r}return e}var Lv=/([A-Z])/g,Uv=/^ms-/,Is=Array.isArray,Ov=A("<script>"),Fv=A("</script>"),Mv=A('<script src="'),Hv=A('<script type="module" src="'),sf=A('" async=""></script>'),jv=/(<\/|<)(s)(cript)/gi;function qv(e,t,r,n){return""+t+(r==="s"?"\\u0073":"\\u0053")+n}function Vv(e,t,r,n,o){e=e===void 0?"":e,t=t===void 0?Ov:A('<script nonce="'+Je(t)+'">');var a=[];if(r!==void 0&&a.push(t,Q((""+r).replace(jv,qv)),Fv),n!==void 0)for(r=0;r<n.length;r++)a.push(Mv,Q(Je(n[r])),sf);if(o!==void 0)for(n=0;n<o.length;n++)a.push(Hv,Q(Je(o[n])),sf);return{bootstrapChunks:a,startInlineScript:t,placeholderPrefix:A(e+"P:"),segmentPrefix:A(e+"S:"),boundaryPrefix:e+"B:",idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function Ht(e,t){return{insertionMode:e,selectedValue:t}}function Bv(e){return Ht(e==="http://www.w3.org/2000/svg"?2:e==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function zv(e,t,r){switch(t){case"select":return Ht(1,r.value!=null?r.value:r.defaultValue);case"svg":return Ht(2,null);case"math":return Ht(3,null);case"foreignObject":return Ht(1,null);case"table":return Ht(4,null);case"thead":case"tbody":case"tfoot":return Ht(5,null);case"colgroup":return Ht(7,null);case"tr":return Ht(6,null)}return 4<=e.insertionMode||e.insertionMode===0?Ht(1,null):e}var Ms=A("<!-- -->");function lf(e,t,r,n){return t===""?n:(n&&e.push(Ms),e.push(Q(Je(t))),!0)}var uf=new Map,Yv=A(' style="'),cf=A(":"),Wv=A(";");function Nf(e,t,r){if(typeof r!="object")throw Error(K(62));t=!0;for(var n in r)if(dt.call(r,n)){var o=r[n];if(o!=null&&typeof o!="boolean"&&o!==""){if(n.indexOf("--")===0){var a=Q(Je(n));o=Q(Je((""+o).trim()))}else{a=n;var i=uf.get(a);i!==void 0||(i=A(Je(a.replace(Lv,"-$1").toLowerCase().replace(Uv,"-ms-"))),uf.set(a,i)),a=i,o=typeof o=="number"?o===0||dt.call(Oa,n)?Q(""+o):Q(o+"px"):Q(Je((""+o).trim()))}t?(t=!1,e.push(Yv,a,cf,o)):e.push(Wv,a,cf,o)}}t||e.push(Xr)}var _r=A(" "),Sn=A('="'),Xr=A('"'),df=A('=""');function wt(e,t,r,n){switch(r){case"style":Nf(e,t,n);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N"){if(t=Xe.hasOwnProperty(r)?Xe[r]:null,t!==null){switch(typeof n){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(r=Q(t.attributeName),t.type){case 3:n&&e.push(_r,r,df);break;case 4:n===!0?e.push(_r,r,df):n!==!1&&e.push(_r,r,Sn,Q(Je(n)),Xr);break;case 5:isNaN(n)||e.push(_r,r,Sn,Q(Je(n)),Xr);break;case 6:!isNaN(n)&&1<=n&&e.push(_r,r,Sn,Q(Je(n)),Xr);break;default:t.sanitizeURL&&(n=""+n),e.push(_r,r,Sn,Q(Je(n)),Xr)}}else if(Df(r)){switch(typeof n){case"function":case"symbol":return;case"boolean":if(t=r.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(_r,Q(r),Sn,Q(Je(n)),Xr)}}}var Pr=A(">"),ff=A("/>");function Fa(e,t,r){if(t!=null){if(r!=null)throw Error(K(60));if(typeof t!="object"||!("__html"in t))throw Error(K(61));t=t.__html,t!=null&&e.push(Q(""+t))}}function Gv(e){var t="";return $f.Children.forEach(e,function(r){r!=null&&(t+=r)}),t}var ks=A(' selected=""');function _s(e,t,r,n){e.push(jt(r));var o=r=null,a;for(a in t)if(dt.call(t,a)){var i=t[a];if(i!=null)switch(a){case"children":r=i;break;case"dangerouslySetInnerHTML":o=i;break;default:wt(e,n,a,i)}}return e.push(Pr),Fa(e,o,r),typeof r=="string"?(e.push(Q(Je(r))),null):r}var Ps=A(`
`),Jv=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,pf=new Map;function jt(e){var t=pf.get(e);if(t===void 0){if(!Jv.test(e))throw Error(K(65,e));t=A("<"+e),pf.set(e,t)}return t}var Xv=A("<!DOCTYPE html>");function Kv(e,t,r,n,o){switch(t){case"select":e.push(jt("select"));var a=null,i=null;for(c in r)if(dt.call(r,c)){var s=r[c];if(s!=null)switch(c){case"children":a=s;break;case"dangerouslySetInnerHTML":i=s;break;case"defaultValue":case"value":break;default:wt(e,n,c,s)}}return e.push(Pr),Fa(e,i,a),a;case"option":i=o.selectedValue,e.push(jt("option"));var l=s=null,u=null,c=null;for(a in r)if(dt.call(r,a)){var d=r[a];if(d!=null)switch(a){case"children":s=d;break;case"selected":u=d;break;case"dangerouslySetInnerHTML":c=d;break;case"value":l=d;default:wt(e,n,a,d)}}if(i!=null)if(r=l!==null?""+l:Gv(s),Is(i)){for(n=0;n<i.length;n++)if(""+i[n]===r){e.push(ks);break}}else""+i===r&&e.push(ks);else u&&e.push(ks);return e.push(Pr),Fa(e,c,s),s;case"textarea":e.push(jt("textarea")),c=i=a=null;for(s in r)if(dt.call(r,s)&&(l=r[s],l!=null))switch(s){case"children":c=l;break;case"value":a=l;break;case"defaultValue":i=l;break;case"dangerouslySetInnerHTML":throw Error(K(91));default:wt(e,n,s,l)}if(a===null&&i!==null&&(a=i),e.push(Pr),c!=null){if(a!=null)throw Error(K(92));if(Is(c)&&1<c.length)throw Error(K(93));a=""+c}return typeof a=="string"&&a[0]===`
`&&e.push(Ps),a!==null&&e.push(Q(Je(""+a))),null;case"input":e.push(jt("input")),l=c=s=a=null;for(i in r)if(dt.call(r,i)&&(u=r[i],u!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(K(399,"input"));case"defaultChecked":l=u;break;case"defaultValue":s=u;break;case"checked":c=u;break;case"value":a=u;break;default:wt(e,n,i,u)}return c!==null?wt(e,n,"checked",c):l!==null&&wt(e,n,"checked",l),a!==null?wt(e,n,"value",a):s!==null&&wt(e,n,"value",s),e.push(ff),null;case"menuitem":e.push(jt("menuitem"));for(var p in r)if(dt.call(r,p)&&(a=r[p],a!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(K(400));default:wt(e,n,p,a)}return e.push(Pr),null;case"title":e.push(jt("title")),a=null;for(d in r)if(dt.call(r,d)&&(i=r[d],i!=null))switch(d){case"children":a=i;break;case"dangerouslySetInnerHTML":throw Error(K(434));default:wt(e,n,d,i)}return e.push(Pr),a;case"listing":case"pre":e.push(jt(t)),i=a=null;for(l in r)if(dt.call(r,l)&&(s=r[l],s!=null))switch(l){case"children":a=s;break;case"dangerouslySetInnerHTML":i=s;break;default:wt(e,n,l,s)}if(e.push(Pr),i!=null){if(a!=null)throw Error(K(60));if(typeof i!="object"||!("__html"in i))throw Error(K(61));r=i.__html,r!=null&&(typeof r=="string"&&0<r.length&&r[0]===`
`?e.push(Ps,Q(r)):e.push(Q(""+r)))}return typeof a=="string"&&a[0]===`
`&&e.push(Ps),a;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(jt(t));for(var m in r)if(dt.call(r,m)&&(a=r[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(K(399,t));default:wt(e,n,m,a)}return e.push(ff),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return _s(e,r,t,n);case"html":return o.insertionMode===0&&e.push(Xv),_s(e,r,t,n);default:if(t.indexOf("-")===-1&&typeof r.is!="string")return _s(e,r,t,n);e.push(jt(t)),i=a=null;for(u in r)if(dt.call(r,u)&&(s=r[u],s!=null))switch(u){case"children":a=s;break;case"dangerouslySetInnerHTML":i=s;break;case"style":Nf(e,n,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:Df(u)&&typeof s!="function"&&typeof s!="symbol"&&e.push(_r,Q(u),Sn,Q(Je(s)),Xr)}return e.push(Pr),Fa(e,i,a),a}}var Qv=A("</"),Zv=A(">"),ew=A('<template id="'),tw=A('"></template>'),rw=A("<!--$-->"),nw=A('<!--$?--><template id="'),ow=A('"></template>'),aw=A("<!--$!-->"),iw=A("<!--/$-->"),sw=A("<template"),lw=A('"'),uw=A(' data-dgst="');A(' data-msg="');A(' data-stck="');var cw=A("></template>");function hf(e,t,r){if(F(e,nw),r===null)throw Error(K(395));return F(e,r),be(e,ow)}var dw=A('<div hidden id="'),fw=A('">'),pw=A("</div>"),hw=A('<svg aria-hidden="true" style="display:none" id="'),mw=A('">'),gw=A("</svg>"),yw=A('<math aria-hidden="true" style="display:none" id="'),vw=A('">'),ww=A("</math>"),bw=A('<table hidden id="'),xw=A('">'),Sw=A("</table>"),Rw=A('<table hidden><tbody id="'),Ew=A('">'),Cw=A("</tbody></table>"),kw=A('<table hidden><tr id="'),_w=A('">'),Pw=A("</tr></table>"),Aw=A('<table hidden><colgroup id="'),$w=A('">'),Tw=A("</colgroup></table>");function Iw(e,t,r,n){switch(r.insertionMode){case 0:case 1:return F(e,dw),F(e,t.segmentPrefix),F(e,Q(n.toString(16))),be(e,fw);case 2:return F(e,hw),F(e,t.segmentPrefix),F(e,Q(n.toString(16))),be(e,mw);case 3:return F(e,yw),F(e,t.segmentPrefix),F(e,Q(n.toString(16))),be(e,vw);case 4:return F(e,bw),F(e,t.segmentPrefix),F(e,Q(n.toString(16))),be(e,xw);case 5:return F(e,Rw),F(e,t.segmentPrefix),F(e,Q(n.toString(16))),be(e,Ew);case 6:return F(e,kw),F(e,t.segmentPrefix),F(e,Q(n.toString(16))),be(e,_w);case 7:return F(e,Aw),F(e,t.segmentPrefix),F(e,Q(n.toString(16))),be(e,$w);default:throw Error(K(397))}}function Dw(e,t){switch(t.insertionMode){case 0:case 1:return be(e,pw);case 2:return be(e,gw);case 3:return be(e,ww);case 4:return be(e,Sw);case 5:return be(e,Cw);case 6:return be(e,Pw);case 7:return be(e,Tw);default:throw Error(K(397))}}var Nw=A('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),Lw=A('$RS("'),Uw=A('","'),Ow=A('")</script>'),Fw=A('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),Mw=A('$RC("'),Hw=A('","'),jw=A('")</script>'),qw=A('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),Vw=A('$RX("'),Bw=A('"'),zw=A(")</script>"),As=A(","),Yw=/[<\u2028\u2029]/g;function $s(e){return JSON.stringify(e).replace(Yw,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var ho=Object.assign,Ww=Symbol.for("react.element"),Lf=Symbol.for("react.portal"),Uf=Symbol.for("react.fragment"),Of=Symbol.for("react.strict_mode"),Ff=Symbol.for("react.profiler"),Mf=Symbol.for("react.provider"),Hf=Symbol.for("react.context"),jf=Symbol.for("react.forward_ref"),qf=Symbol.for("react.suspense"),Vf=Symbol.for("react.suspense_list"),Bf=Symbol.for("react.memo"),Hs=Symbol.for("react.lazy"),Gw=Symbol.for("react.scope"),Jw=Symbol.for("react.debug_trace_mode"),Xw=Symbol.for("react.legacy_hidden"),Kw=Symbol.for("react.default_value"),mf=Symbol.iterator;function Ds(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Uf:return"Fragment";case Lf:return"Portal";case Ff:return"Profiler";case Of:return"StrictMode";case qf:return"Suspense";case Vf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hf:return(e.displayName||"Context")+".Consumer";case Mf:return(e._context.displayName||"Context")+".Provider";case jf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bf:return t=e.displayName||null,t!==null?t:Ds(e.type)||"Memo";case Hs:t=e._payload,e=e._init;try{return Ds(e(t))}catch{}}return null}var zf={};function gf(e,t){if(e=e.contextTypes,!e)return zf;var r={},n;for(n in e)r[n]=t[n];return r}var Qr=null;function Wa(e,t){if(e!==t){e.context._currentValue=e.parentValue,e=e.parent;var r=t.parent;if(e===null){if(r!==null)throw Error(K(401))}else{if(r===null)throw Error(K(401));Wa(e,r)}t.context._currentValue=t.value}}function Yf(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&Yf(e)}function Wf(e){var t=e.parent;t!==null&&Wf(t),e.context._currentValue=e.value}function Gf(e,t){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(K(402));e.depth===t.depth?Wa(e,t):Gf(e,t)}function Jf(e,t){var r=t.parent;if(r===null)throw Error(K(402));e.depth===r.depth?Wa(e,r):Jf(e,r),t.context._currentValue=t.value}function qa(e){var t=Qr;t!==e&&(t===null?Wf(e):e===null?Yf(t):t.depth===e.depth?Wa(t,e):t.depth>e.depth?Gf(t,e):Jf(t,e),Qr=e)}var yf={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function vf(e,t,r,n){var o=e.state!==void 0?e.state:null;e.updater=yf,e.props=r,e.state=o;var a={queue:[],replace:!1};e._reactInternals=a;var i=t.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue:n,i=t.getDerivedStateFromProps,typeof i=="function"&&(i=i(r,o),o=i==null?o:ho({},o,i),e.state=o),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&yf.enqueueReplaceState(e,e.state,null),a.queue!==null&&0<a.queue.length)if(t=a.queue,i=a.replace,a.queue=null,a.replace=!1,i&&t.length===1)e.state=t[0];else{for(a=i?t[0]:e.state,o=!0,i=i?1:0;i<t.length;i++){var s=t[i];s=typeof s=="function"?s.call(e,a,r,n):s,s!=null&&(o?(o=!1,a=ho({},a,s)):ho(a,s))}e.state=a}else a.queue=null}var Qw={id:1,overflow:""};function Ns(e,t,r){var n=e.id;e=e.overflow;var o=32-Ma(n)-1;n&=~(1<<o),r+=1;var a=32-Ma(t)+o;if(30<a){var i=o-o%5;return a=(n&(1<<i)-1).toString(32),n>>=i,o-=i,{id:1<<32-Ma(t)+o|r<<o|n,overflow:a+e}}return{id:1<<a|r<<o|n,overflow:e}}var Ma=Math.clz32?Math.clz32:t0,Zw=Math.log,e0=Math.LN2;function t0(e){return e>>>=0,e===0?32:31-(Zw(e)/e0|0)|0}function r0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var n0=typeof Object.is=="function"?Object.is:r0,lr=null,js=null,Ha=null,ve=null,fo=!1,Va=!1,mo=0,Ar=null,Ga=0;function Kr(){if(lr===null)throw Error(K(321));return lr}function wf(){if(0<Ga)throw Error(K(312));return{memoizedState:null,queue:null,next:null}}function qs(){return ve===null?Ha===null?(fo=!1,Ha=ve=wf()):(fo=!0,ve=Ha):ve.next===null?(fo=!1,ve=ve.next=wf()):(fo=!0,ve=ve.next),ve}function Vs(){js=lr=null,Va=!1,Ha=null,Ga=0,ve=Ar=null}function Xf(e,t){return typeof t=="function"?t(e):t}function bf(e,t,r){if(lr=Kr(),ve=qs(),fo){var n=ve.queue;if(t=n.dispatch,Ar!==null&&(r=Ar.get(n),r!==void 0)){Ar.delete(n),n=ve.memoizedState;do n=e(n,r.action),r=r.next;while(r!==null);return ve.memoizedState=n,[n,t]}return[ve.memoizedState,t]}return e=e===Xf?typeof t=="function"?t():t:r!==void 0?r(t):t,ve.memoizedState=e,e=ve.queue={last:null,dispatch:null},e=e.dispatch=o0.bind(null,lr,e),[ve.memoizedState,e]}function xf(e,t){if(lr=Kr(),ve=qs(),t=t===void 0?null:t,ve!==null){var r=ve.memoizedState;if(r!==null&&t!==null){var n=r[1];e:if(n===null)n=!1;else{for(var o=0;o<n.length&&o<t.length;o++)if(!n0(t[o],n[o])){n=!1;break e}n=!0}if(n)return r[0]}}return e=e(),ve.memoizedState=[e,t],e}function o0(e,t,r){if(25<=Ga)throw Error(K(301));if(e===lr)if(Va=!0,e={action:r,next:null},Ar===null&&(Ar=new Map),r=Ar.get(t),r===void 0)Ar.set(t,e);else{for(t=r;t.next!==null;)t=t.next;t.next=e}}function a0(){throw Error(K(394))}function La(){}var Sf={readContext:function(e){return e._currentValue},useContext:function(e){return Kr(),e._currentValue},useMemo:xf,useReducer:bf,useRef:function(e){lr=Kr(),ve=qs();var t=ve.memoizedState;return t===null?(e={current:e},ve.memoizedState=e):t},useState:function(e){return bf(Xf,e)},useInsertionEffect:La,useLayoutEffect:function(){},useCallback:function(e,t){return xf(function(){return e},t)},useImperativeHandle:La,useEffect:La,useDebugValue:La,useDeferredValue:function(e){return Kr(),e},useTransition:function(){return Kr(),[!1,a0]},useId:function(){var e=js.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-Ma(e)-1)).toString(32)+t;var r=ja;if(r===null)throw Error(K(404));return t=mo++,e=":"+r.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return Kr(),t(e._source)},useSyncExternalStore:function(e,t,r){if(r===void 0)throw Error(K(407));return r()}},ja=null,Ts=$f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function i0(e){return console.error(e),null}function po(){}function s0(e,t,r,n,o,a,i,s,l){var u=[],c=new Set;return t={destination:null,responseState:t,progressiveChunkSize:n===void 0?12800:n,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:c,pingedTasks:u,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:o===void 0?i0:o,onAllReady:a===void 0?po:a,onShellReady:i===void 0?po:i,onShellError:s===void 0?po:s,onFatalError:l===void 0?po:l},r=Ba(t,0,null,r,!1,!1),r.parentFlushed=!0,e=Bs(t,e,null,r,c,zf,null,Qw),u.push(e),t}function Bs(e,t,r,n,o,a,i,s){e.allPendingTasks++,r===null?e.pendingRootTasks++:r.pendingTasks++;var l={node:t,ping:function(){var u=e.pingedTasks;u.push(l),u.length===1&&Zf(e)},blockedBoundary:r,blockedSegment:n,abortSet:o,legacyContext:a,context:i,treeContext:s};return o.add(l),l}function Ba(e,t,r,n,o,a){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:n,boundary:r,lastPushedText:o,textEmbedded:a}}function go(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function za(e,t){var r=e.onShellError;r(t),r=e.onFatalError,r(t),e.destination!==null?(e.status=2,If(e.destination,t)):(e.status=1,e.fatalError=t)}function Rf(e,t,r,n,o){for(lr={},js=t,mo=0,e=r(n,o);Va;)Va=!1,mo=0,Ga+=1,ve=null,e=r(n,o);return Vs(),e}function Ef(e,t,r,n){var o=r.render(),a=n.childContextTypes;if(a!=null){var i=t.legacyContext;if(typeof r.getChildContext!="function")n=i;else{r=r.getChildContext();for(var s in r)if(!(s in a))throw Error(K(108,Ds(n)||"Unknown",s));n=ho({},i,r)}t.legacyContext=n,St(e,t,o),t.legacyContext=i}else St(e,t,o)}function Cf(e,t){if(e&&e.defaultProps){t=ho({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ls(e,t,r,n,o){if(typeof r=="function")if(r.prototype&&r.prototype.isReactComponent){o=gf(r,t.legacyContext);var a=r.contextType;a=new r(n,typeof a=="object"&&a!==null?a._currentValue:o),vf(a,r,n,o),Ef(e,t,a,r)}else{a=gf(r,t.legacyContext),o=Rf(e,t,r,n,a);var i=mo!==0;if(typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0)vf(o,r,n,a),Ef(e,t,o,r);else if(i){n=t.treeContext,t.treeContext=Ns(n,1,0);try{St(e,t,o)}finally{t.treeContext=n}}else St(e,t,o)}else if(typeof r=="string"){switch(o=t.blockedSegment,a=Kv(o.chunks,r,n,e.responseState,o.formatContext),o.lastPushedText=!1,i=o.formatContext,o.formatContext=zv(i,r,n),Us(e,t,a),o.formatContext=i,r){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:o.chunks.push(Qv,Q(r),Zv)}o.lastPushedText=!1}else{switch(r){case Xw:case Jw:case Of:case Ff:case Uf:St(e,t,n.children);return;case Vf:St(e,t,n.children);return;case Gw:throw Error(K(343));case qf:e:{r=t.blockedBoundary,o=t.blockedSegment,a=n.fallback,n=n.children,i=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},l=Ba(e,o.chunks.length,s,o.formatContext,!1,!1);o.children.push(l),o.lastPushedText=!1;var u=Ba(e,0,null,o.formatContext,!1,!1);u.parentFlushed=!0,t.blockedBoundary=s,t.blockedSegment=u;try{if(Us(e,t,n),u.lastPushedText&&u.textEmbedded&&u.chunks.push(Ms),u.status=1,Ya(s,u),s.pendingTasks===0)break e}catch(c){u.status=4,s.forceClientRender=!0,s.errorDigest=go(e,c)}finally{t.blockedBoundary=r,t.blockedSegment=o}t=Bs(e,a,r,l,i,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof r=="object"&&r!==null)switch(r.$$typeof){case jf:if(n=Rf(e,t,r.render,n,o),mo!==0){r=t.treeContext,t.treeContext=Ns(r,1,0);try{St(e,t,n)}finally{t.treeContext=r}}else St(e,t,n);return;case Bf:r=r.type,n=Cf(r,n),Ls(e,t,r,n,o);return;case Mf:if(o=n.children,r=r._context,n=n.value,a=r._currentValue,r._currentValue=n,i=Qr,Qr=n={parent:i,depth:i===null?0:i.depth+1,context:r,parentValue:a,value:n},t.context=n,St(e,t,o),e=Qr,e===null)throw Error(K(403));n=e.parentValue,e.context._currentValue=n===Kw?e.context._defaultValue:n,e=Qr=e.parent,t.context=e;return;case Hf:n=n.children,n=n(r._currentValue),St(e,t,n);return;case Hs:o=r._init,r=o(r._payload),n=Cf(r,n),Ls(e,t,r,n,void 0);return}throw Error(K(130,r==null?r:typeof r,""))}}function St(e,t,r){if(t.node=r,typeof r=="object"&&r!==null){switch(r.$$typeof){case Ww:Ls(e,t,r.type,r.props,r.ref);return;case Lf:throw Error(K(257));case Hs:var n=r._init;r=n(r._payload),St(e,t,r);return}if(Is(r)){kf(e,t,r);return}if(r===null||typeof r!="object"?n=null:(n=mf&&r[mf]||r["@@iterator"],n=typeof n=="function"?n:null),n&&(n=n.call(r))){if(r=n.next(),!r.done){var o=[];do o.push(r.value),r=n.next();while(!r.done);kf(e,t,o)}return}throw e=Object.prototype.toString.call(r),Error(K(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}typeof r=="string"?(n=t.blockedSegment,n.lastPushedText=lf(t.blockedSegment.chunks,r,e.responseState,n.lastPushedText)):typeof r=="number"&&(n=t.blockedSegment,n.lastPushedText=lf(t.blockedSegment.chunks,""+r,e.responseState,n.lastPushedText))}function kf(e,t,r){for(var n=r.length,o=0;o<n;o++){var a=t.treeContext;t.treeContext=Ns(a,n,o);try{Us(e,t,r[o])}finally{t.treeContext=a}}}function Us(e,t,r){var n=t.blockedSegment.formatContext,o=t.legacyContext,a=t.context;try{return St(e,t,r)}catch(l){if(Vs(),typeof l=="object"&&l!==null&&typeof l.then=="function"){r=l;var i=t.blockedSegment,s=Ba(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(s),i.lastPushedText=!1,e=Bs(e,t.node,t.blockedBoundary,s,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,r.then(e,e),t.blockedSegment.formatContext=n,t.legacyContext=o,t.context=a,qa(a)}else throw t.blockedSegment.formatContext=n,t.legacyContext=o,t.context=a,qa(a),l}}function l0(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,Qf(this,t,e)}function Kf(e,t,r){var n=e.blockedBoundary;e.blockedSegment.status=3,n===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.close())):(n.pendingTasks--,n.forceClientRender||(n.forceClientRender=!0,e=r===void 0?Error(K(432)):r,n.errorDigest=t.onError(e),n.parentFlushed&&t.clientRenderedBoundaries.push(n)),n.fallbackAbortableTasks.forEach(function(o){return Kf(o,t,r)}),n.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(n=t.onAllReady,n()))}function Ya(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var r=t.children[0];r.id=t.id,r.parentFlushed=!0,r.status===1&&Ya(e,r)}else e.completedSegments.push(t)}function Qf(e,t,r){if(t===null){if(r.parentFlushed){if(e.completedRootSegment!==null)throw Error(K(389));e.completedRootSegment=r}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=po,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(r.parentFlushed&&r.status===1&&Ya(t,r),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(l0,e),t.fallbackAbortableTasks.clear()):r.parentFlushed&&r.status===1&&(Ya(t,r),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function Zf(e){if(e.status!==2){var t=Qr,r=Ts.current;Ts.current=Sf;var n=ja;ja=e.responseState;try{var o=e.pingedTasks,a;for(a=0;a<o.length;a++){var i=o[a],s=e,l=i.blockedSegment;if(l.status===0){qa(i.context);try{St(s,i,i.node),l.lastPushedText&&l.textEmbedded&&l.chunks.push(Ms),i.abortSet.delete(i),l.status=1,Qf(s,i.blockedBoundary,l)}catch(f){if(Vs(),typeof f=="object"&&f!==null&&typeof f.then=="function"){var u=i.ping;f.then(u,u)}else{i.abortSet.delete(i),l.status=4;var c=i.blockedBoundary,d=f,p=go(s,d);if(c===null?za(s,d):(c.pendingTasks--,c.forceClientRender||(c.forceClientRender=!0,c.errorDigest=p,c.parentFlushed&&s.clientRenderedBoundaries.push(c))),s.allPendingTasks--,s.allPendingTasks===0){var m=s.onAllReady;m()}}}finally{}}}o.splice(0,a),e.destination!==null&&zs(e,e.destination)}catch(f){go(e,f),za(e,f)}finally{ja=n,Ts.current=r,r===Sf&&qa(t)}}}function Ua(e,t,r){switch(r.parentFlushed=!0,r.status){case 0:var n=r.id=e.nextSegmentId++;return r.lastPushedText=!1,r.textEmbedded=!1,e=e.responseState,F(t,ew),F(t,e.placeholderPrefix),e=Q(n.toString(16)),F(t,e),be(t,tw);case 1:r.status=2;var o=!0;n=r.chunks;var a=0;r=r.children;for(var i=0;i<r.length;i++){for(o=r[i];a<o.index;a++)F(t,n[a]);o=Ja(e,t,o)}for(;a<n.length-1;a++)F(t,n[a]);return a<n.length&&(o=be(t,n[a])),o;default:throw Error(K(390))}}function Ja(e,t,r){var n=r.boundary;if(n===null)return Ua(e,t,r);if(n.parentFlushed=!0,n.forceClientRender)n=n.errorDigest,be(t,aw),F(t,sw),n&&(F(t,uw),F(t,Q(Je(n))),F(t,lw)),be(t,cw),Ua(e,t,r);else if(0<n.pendingTasks){n.rootSegmentID=e.nextSegmentId++,0<n.completedSegments.length&&e.partialBoundaries.push(n);var o=e.responseState,a=o.nextSuspenseID++;o=A(o.boundaryPrefix+a.toString(16)),n=n.id=o,hf(t,e.responseState,n),Ua(e,t,r)}else if(n.byteSize>e.progressiveChunkSize)n.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(n),hf(t,e.responseState,n.id),Ua(e,t,r);else{if(be(t,rw),r=n.completedSegments,r.length!==1)throw Error(K(391));Ja(e,t,r[0])}return be(t,iw)}function _f(e,t,r){return Iw(t,e.responseState,r.formatContext,r.id),Ja(e,t,r),Dw(t,r.formatContext)}function Pf(e,t,r){for(var n=r.completedSegments,o=0;o<n.length;o++)ep(e,t,r,n[o]);if(n.length=0,e=e.responseState,n=r.id,r=r.rootSegmentID,F(t,e.startInlineScript),e.sentCompleteBoundaryFunction?F(t,Mw):(e.sentCompleteBoundaryFunction=!0,F(t,Fw)),n===null)throw Error(K(395));return r=Q(r.toString(16)),F(t,n),F(t,Hw),F(t,e.segmentPrefix),F(t,r),be(t,jw)}function ep(e,t,r,n){if(n.status===2)return!0;var o=n.id;if(o===-1){if((n.id=r.rootSegmentID)===-1)throw Error(K(392));return _f(e,t,n)}return _f(e,t,n),e=e.responseState,F(t,e.startInlineScript),e.sentCompleteSegmentFunction?F(t,Lw):(e.sentCompleteSegmentFunction=!0,F(t,Nw)),F(t,e.segmentPrefix),o=Q(o.toString(16)),F(t,o),F(t,Uw),F(t,e.placeholderPrefix),F(t,o),be(t,Ow)}function zs(e,t){bt=new Uint8Array(512),xt=0;try{var r=e.completedRootSegment;if(r!==null&&e.pendingRootTasks===0){Ja(e,t,r),e.completedRootSegment=null;var n=e.responseState.bootstrapChunks;for(r=0;r<n.length-1;r++)F(t,n[r]);r<n.length&&be(t,n[r])}var o=e.clientRenderedBoundaries,a;for(a=0;a<o.length;a++){var i=o[a];n=t;var s=e.responseState,l=i.id,u=i.errorDigest,c=i.errorMessage,d=i.errorComponentStack;if(F(n,s.startInlineScript),s.sentClientRenderFunction?F(n,Vw):(s.sentClientRenderFunction=!0,F(n,qw)),l===null)throw Error(K(395));if(F(n,l),F(n,Bw),(u||c||d)&&(F(n,As),F(n,Q($s(u||"")))),(c||d)&&(F(n,As),F(n,Q($s(c||"")))),d&&(F(n,As),F(n,Q($s(d)))),!be(n,zw)){e.destination=null,a++,o.splice(0,a);return}}o.splice(0,a);var p=e.completedBoundaries;for(a=0;a<p.length;a++)if(!Pf(e,t,p[a])){e.destination=null,a++,p.splice(0,a);return}p.splice(0,a),nf(t),bt=new Uint8Array(512),xt=0;var m=e.partialBoundaries;for(a=0;a<m.length;a++){var f=m[a];e:{o=e,i=t;var y=f.completedSegments;for(s=0;s<y.length;s++)if(!ep(o,i,f,y[s])){s++,y.splice(0,s);var g=!1;break e}y.splice(0,s),g=!0}if(!g){e.destination=null,a++,m.splice(0,a);return}}m.splice(0,a);var x=e.completedBoundaries;for(a=0;a<x.length;a++)if(!Pf(e,t,x[a])){e.destination=null,a++,x.splice(0,a);return}x.splice(0,a)}finally{nf(t),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.close()}}function Af(e,t){try{var r=e.abortableTasks;r.forEach(function(n){return Kf(n,e,t)}),r.clear(),e.destination!==null&&zs(e,e.destination)}catch(n){go(e,n),za(e,n)}}Ys.renderToReadableStream=function(e,t){return new Promise(function(r,n){var o,a,i=new Promise(function(c,d){a=c,o=d}),s=s0(e,Vv(t?t.identifierPrefix:void 0,t?t.nonce:void 0,t?t.bootstrapScriptContent:void 0,t?t.bootstrapScripts:void 0,t?t.bootstrapModules:void 0),Bv(t?t.namespaceURI:void 0),t?t.progressiveChunkSize:void 0,t?t.onError:void 0,a,function(){var c=new ReadableStream({type:"bytes",pull:function(d){if(s.status===1)s.status=2,If(d,s.fatalError);else if(s.status!==2&&s.destination===null){s.destination=d;try{zs(s,d)}catch(p){go(s,p),za(s,p)}}},cancel:function(){Af(s)}},{highWaterMark:0});c.allReady=i,r(c)},function(c){i.catch(function(){}),n(c)},o);if(t&&t.signal){var l=t.signal,u=function(){Af(s,l.reason),l.removeEventListener("abort",u)};l.addEventListener("abort",u)}Zf(s)})};Ys.version="18.2.0"});var np=$t(Zr=>{"use strict";var Rn,rp;Rn=rf(),rp=tp();Zr.version=Rn.version;Zr.renderToString=Rn.renderToString;Zr.renderToStaticMarkup=Rn.renderToStaticMarkup;Zr.renderToNodeStream=Rn.renderToNodeStream;Zr.renderToStaticNodeStream=Rn.renderToStaticNodeStream;Zr.renderToReadableStream=rp.renderToReadableStream});var ap=$t(Xa=>{"use strict";var u0=Ee(),c0=Symbol.for("react.element"),d0=Symbol.for("react.fragment"),f0=Object.prototype.hasOwnProperty,p0=u0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h0={key:!0,ref:!0,__self:!0,__source:!0};function op(e,t,r){var n,o={},a=null,i=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)f0.call(t,n)&&!h0.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:c0,type:e,key:a,ref:i,props:o,_owner:p0.current}}Xa.Fragment=d0;Xa.jsx=op;Xa.jsxs=op});var L=$t((pC,ip)=>{"use strict";ip.exports=ap()});var hp=$t(tl=>{"use strict";tl.parse=A0;tl.serialize=$0;var _0=decodeURIComponent,P0=encodeURIComponent,ei=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function A0(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var r={},n=t||{},o=e.split(";"),a=n.decode||_0,i=0;i<o.length;i++){var s=o[i],l=s.indexOf("=");if(!(l<0)){var u=s.substring(0,l).trim();if(r[u]==null){var c=s.substring(l+1,s.length).trim();c[0]==='"'&&(c=c.slice(1,-1)),r[u]=T0(c,a)}}}return r}function $0(e,t,r){var n=r||{},o=n.encode||P0;if(typeof o!="function")throw new TypeError("option encode is invalid");if(!ei.test(e))throw new TypeError("argument name is invalid");var a=o(t);if(a&&!ei.test(a))throw new TypeError("argument val is invalid");var i=e+"="+a;if(n.maxAge!=null){var s=n.maxAge-0;if(isNaN(s)||!isFinite(s))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(s)}if(n.domain){if(!ei.test(n.domain))throw new TypeError("option domain is invalid");i+="; Domain="+n.domain}if(n.path){if(!ei.test(n.path))throw new TypeError("option path is invalid");i+="; Path="+n.path}if(n.expires){if(typeof n.expires.toUTCString!="function")throw new TypeError("option expires is invalid");i+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(i+="; HttpOnly"),n.secure&&(i+="; Secure"),n.sameSite){var l=typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite;switch(l){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return i}function T0(e,t){try{return t(e)}catch{return e}}});var Cp=$t((KC,Ro)=>{"use strict";var Pn={decodeValues:!0,map:!1,silent:!1};function sl(e){return typeof e=="string"&&!!e.trim()}function ll(e,t){var r=e.split(";").filter(sl),n=r.shift(),o=j0(n),a=o.name,i=o.value;t=t?Object.assign({},Pn,t):Pn;try{i=t.decodeValues?decodeURIComponent(i):i}catch(l){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+i+"'. Set options.decodeValues to false to disable this feature.",l)}var s={name:a,value:i};return r.forEach(function(l){var u=l.split("="),c=u.shift().trimLeft().toLowerCase(),d=u.join("=");c==="expires"?s.expires=new Date(d):c==="max-age"?s.maxAge=parseInt(d,10):c==="secure"?s.secure=!0:c==="httponly"?s.httpOnly=!0:c==="samesite"?s.sameSite=d:s[c]=d}),s}function j0(e){var t="",r="",n=e.split("=");return n.length>1?(t=n.shift(),r=n.join("=")):r=e,{name:t,value:r}}function Ep(e,t){if(t=t?Object.assign({},Pn,t):Pn,!e)return t.map?{}:[];if(e.headers)if(typeof e.headers.getSetCookie=="function")e=e.headers.getSetCookie();else if(e.headers["set-cookie"])e=e.headers["set-cookie"];else{var r=e.headers[Object.keys(e.headers).find(function(o){return o.toLowerCase()==="set-cookie"})];!r&&e.headers.cookie&&!t.silent&&console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=r}if(Array.isArray(e)||(e=[e]),t=t?Object.assign({},Pn,t):Pn,t.map){var n={};return e.filter(sl).reduce(function(o,a){var i=ll(a,t);return o[i.name]=i,o},n)}else return e.filter(sl).map(function(o){return ll(o,t)})}function q0(e){if(Array.isArray(e))return e;if(typeof e!="string")return[];var t=[],r=0,n,o,a,i,s;function l(){for(;r<e.length&&/\s/.test(e.charAt(r));)r+=1;return r<e.length}function u(){return o=e.charAt(r),o!=="="&&o!==";"&&o!==","}for(;r<e.length;){for(n=r,s=!1;l();)if(o=e.charAt(r),o===","){for(a=r,r+=1,l(),i=r;r<e.length&&u();)r+=1;r<e.length&&e.charAt(r)==="="?(s=!0,r=i,t.push(e.substring(n,a)),n=r):r=a+1}else r+=1;(!s||r>=e.length)&&t.push(e.substring(n,e.length))}return t}Ro.exports=Ep;Ro.exports.parse=Ep;Ro.exports.parseString=ll;Ro.exports.splitCookiesString=q0});var Mp=$t((Nk,Fp)=>{"use strict";Fp.exports=function(e){var t=e.directives,r=new Set,n=[];return Object.keys(t).forEach(function(o){var a=o.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();if(r.has(a))throw new Error("".concat(o," is specified more than once"));r.add(a);var i=t[o];Array.isArray(i)?i=i.join(" "):i===!0&&(i=""),i?n.push("".concat(a," ").concat(i)):i!==!1&&n.push(a)}),n.join("; ")}});var jp={};ee(jp,{default:()=>X0,logSeoTags:()=>Hp});function X0({headTags:e}){return Hp(e),null}function Hp(e){console.log(" "),console.log("%cSEO Meta Tags",`${K0}`),console.log(" "),e.forEach(t=>{if(t.tag==="script"){if(console.log("%c\u2022 JSON LD ",vl),t.children)try{console.table(JSON.parse(t.children),["name","content"])}catch{console.log(t.children)}}else{if(console.log(`%c\u2022 ${t.tag} `,vl),t.children)if(typeof t.children=="string")console.log(`\u21B3 ${t.children}`);else try{Object.entries(JSON.parse(t.children)).map(([r,n])=>console.log(`\u21B3 ${n}`))}catch{console.log(t.children)}if(t.props.property==="og:image:url"){let r=t.props.content;Q0(r).then(n=>{let o=`font-size: 400px; padding: 10px; background: white url(${n}) no-repeat center; background-size: contain;`;console.log("%c\u2022 Share image preview",vl),console.log("%c  ",o),console.log(`\u21B3 ${r}`)}).catch(n=>{console.error(n)})}Object.entries(t.props).map(([r,n])=>{console.log(`\u21B3 ${r} \u2192 ${n}`)})}console.log(" ")})}async function Q0(e){let t=await(await(await fetch(e)).blob()).arrayBuffer();return`data:image/png;base64,${Z0(t)}`}function Z0(e){let t="",r=new Uint8Array(e),n=r.byteLength;for(let o=0;o<n;o++)t+=String.fromCharCode(r[o]);return btoa(t)}var vl,K0,qp=To(()=>{vl="text-transform: uppercase;",K0="text-transform: uppercase; font-weight: bold; text-transform: uppercase;font-weight: bold"});var mu={};ee(mu,{assets:()=>wm,assetsBuildDirectory:()=>pE,entry:()=>gE,future:()=>hE,mode:()=>fE,publicPath:()=>mE,routes:()=>yE});var _l={};ee(_l,{default:()=>gh});function Te(){return Te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Te.apply(this,arguments)}var _=C(Ee());Rr();function wn(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}Rr();async function Dc(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch{return window.location.reload(),new Promise(()=>{})}}function Nc(e,t,r){let n=e.map(a=>{var i;let s=t[a.route.id];return((i=s.links)===null||i===void 0?void 0:i.call(s))||[]}).flat(1),o=Sy(e,r);return Fc(n,o)}function Zi(e){return e!=null&&typeof e.page=="string"}function xy(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Lc(e,t,r){let n=await Promise.all(e.map(async o=>{let a=await Dc(t.routes[o.route.id],r);return a.links?a.links():[]}));return Fc(n.flat(1).filter(xy).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function es(e,t,r,n,o,a){let i=Mc(e),s=(c,d)=>r[d]?c.route.id!==r[d].route.id:!0,l=(c,d)=>{var p;return r[d].pathname!==c.pathname||((p=r[d].route.path)===null||p===void 0?void 0:p.endsWith("*"))&&r[d].params["*"]!==c.params["*"]};return a==="data"&&o.search!==i.search?t.filter((c,d)=>{if(!n.routes[c.route.id].hasLoader)return!1;if(s(c,d)||l(c,d))return!0;if(c.route.shouldRevalidate){var m;let f=c.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((m=r[0])===null||m===void 0?void 0:m.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):t.filter((c,d)=>{let p=n.routes[c.route.id];return(a==="assets"||p.hasLoader)&&(s(c,d)||l(c,d))})}function Uc(e,t,r){let n=Mc(e);return ts(t.filter(o=>r.routes[o.route.id].hasLoader).map(o=>{let{pathname:a,search:i}=n,s=new URLSearchParams(i);return s.set("_data",o.route.id),`${a}?${s}`}))}function Oc(e,t){return ts(e.map(r=>{let n=t.routes[r.route.id],o=[n.module];return n.imports&&(o=o.concat(n.imports)),o}).flat(1))}function Sy(e,t){return ts(e.map(r=>{let n=t.routes[r.route.id],o=[n.module];return n.imports&&(o=o.concat(n.imports)),o}).flat(1))}function ts(e){return[...new Set(e)]}function Ry(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function Fc(e,t){let r=new Set,n=new Set(t);return e.reduce((o,a)=>{if(t&&!Zi(a)&&a.as==="script"&&a.href&&n.has(a.href))return o;let s=JSON.stringify(Ry(a));return r.has(s)||(r.add(s),o.push({key:s,link:a})),o},[])}function Mc(e){let t=Ae(e);return t.search===void 0&&(t.search=""),t}var Ey={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},Cy=/[&><\u2028\u2029]/g;function Zn(e){return e.replace(Cy,t=>Ey[t])}function rs(e){return{__html:e}}function jc(){let e=_.useContext(kt);return wn(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function sa(){let e=_.useContext(Dt);return wn(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var to=_.createContext(void 0);to.displayName="Remix";function ro(){let e=_.useContext(to);return wn(e,"You must render this element inside a <Remix> element"),e}function qc(e,t){let[r,n]=_.useState(!1),[o,a]=_.useState(!1),{onFocus:i,onBlur:s,onMouseEnter:l,onMouseLeave:u,onTouchStart:c}=t,d=_.useRef(null);_.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let f=g=>{g.forEach(x=>{a(x.isIntersecting)})},y=new IntersectionObserver(f,{threshold:.5});return d.current&&y.observe(d.current),()=>{y.disconnect()}}},[e]);let p=()=>{e==="intent"&&n(!0)},m=()=>{e==="intent"&&(n(!1),a(!1))};return _.useEffect(()=>{if(r){let f=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(f)}}},[r]),[o,d,{onFocus:eo(i,p),onBlur:eo(s,m),onMouseEnter:eo(l,p),onMouseLeave:eo(u,m),onTouchStart:eo(c,p)}]}var Vc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gt=_.forwardRef(({to:e,prefetch:t="none",...r},n)=>{let o=typeof e=="string"&&Vc.test(e),a=Zt(e),[i,s,l]=qc(t,r);return _.createElement(_.Fragment,null,_.createElement(Gi,Te({},r,l,{ref:Bc(n,s),to:e})),i&&!o?_.createElement(ua,{page:a}):null)});gt.displayName="NavLink";var B=_.forwardRef(({to:e,prefetch:t="none",...r},n)=>{let o=typeof e=="string"&&Vc.test(e),a=Zt(e),[i,s,l]=qc(t,r);return _.createElement(_.Fragment,null,_.createElement(aa,Te({},r,l,{ref:Bc(n,s),to:e})),i&&!o?_.createElement(ua,{page:a}):null)});B.displayName="Link";function eo(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function la(){let{manifest:e,routeModules:t}=ro(),{errors:r,matches:n}=sa(),o=r?n.slice(0,n.findIndex(i=>r[i.route.id])+1):n,a=_.useMemo(()=>Nc(o,t,e),[o,t,e]);return _.createElement(_.Fragment,null,a.map(({key:i,link:s})=>Zi(s)?_.createElement(ua,Te({key:i},s)):_.createElement("link",Te({key:i},s))))}function ua({page:e,...t}){let{router:r}=jc(),n=_.useMemo(()=>Le(r.routes,e),[r.routes,e]);return n?_.createElement(_y,Te({page:e,matches:n},t)):(console.warn(`Tried to prefetch ${e} but no routes matched.`),null)}function ky(e){let{manifest:t,routeModules:r}=ro(),[n,o]=_.useState([]);return _.useEffect(()=>{let a=!1;return Lc(e,t,r).then(i=>{a||o(i)}),()=>{a=!0}},[e,t,r]),n}function _y({page:e,matches:t,...r}){let n=we(),{manifest:o}=ro(),{matches:a}=sa(),i=_.useMemo(()=>es(e,t,a,o,n,"data"),[e,t,a,o,n]),s=_.useMemo(()=>es(e,t,a,o,n,"assets"),[e,t,a,o,n]),l=_.useMemo(()=>Uc(e,i,o),[i,e,o]),u=_.useMemo(()=>Oc(s,o),[s,o]),c=ky(s);return _.createElement(_.Fragment,null,l.map(d=>_.createElement("link",Te({key:d,rel:"prefetch",as:"fetch",href:d},r))),u.map(d=>_.createElement("link",Te({key:d,rel:"modulepreload",href:d},r))),c.map(({key:d,link:p})=>_.createElement("link",Te({key:d},p))))}function ca(){let{routeModules:e}=ro(),{errors:t,matches:r,loaderData:n}=sa(),o=we(),a=r,i=null;if(t){let c=r.findIndex(d=>t[d.route.id]);a=r.slice(0,c+1),i=t[r[c].route.id]}let s=[],l=null,u=[];for(let c=0;c<a.length;c++){let d=a[c],p=d.route.id,m=n[p],f=d.params,y=e[p],g=[],x={id:p,data:m,meta:[],params:d.params,pathname:d.pathname,handle:d.route.handle,error:i};if(u[c]=x,y!=null&&y.meta?g=typeof y.meta=="function"?y.meta({data:m,params:f,location:o,matches:u,error:i}):Array.isArray(y.meta)?[...y.meta]:y.meta:l&&(g=[...l]),g=g||[],!Array.isArray(g))throw new Error("The route at "+d.route.path+` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`);x.meta=g,u[c]=x,s=[...g],l=s}return _.createElement(_.Fragment,null,s.flat().map(c=>{if(!c)return null;if("tagName"in c){let{tagName:d,...p}=c;return Py(d)?_.createElement(d,Te({key:JSON.stringify(p)},p)):(console.warn(`A meta object uses an invalid tagName: ${d}. Expected either 'link' or 'meta'`),null)}if("title"in c)return _.createElement("title",{key:"title"},String(c.title));if("charset"in c&&(c.charSet??=c.charset,delete c.charset),"charSet"in c&&c.charSet!=null)return typeof c.charSet=="string"?_.createElement("meta",{key:"charSet",charSet:c.charSet}):null;if("script:ld+json"in c)try{let d=JSON.stringify(c["script:ld+json"]);return _.createElement("script",{key:`script:ld+json:${d}`,type:"application/ld+json",dangerouslySetInnerHTML:{__html:d}})}catch{return null}return _.createElement("meta",Te({key:JSON.stringify(c)},c))}))}function Py(e){return typeof e=="string"&&/^(meta|link)$/.test(e)}function ut(e){return _.createElement(Jn,e)}var ns=!1;function da(e){let{manifest:t,serverHandoffString:r,abortDelay:n,serializeError:o}=ro(),{router:a,static:i,staticContext:s}=jc(),{matches:l}=sa(),u=lt();_.useEffect(()=>{ns=!0},[]);let c=(R,h)=>{let I;return o&&h instanceof Error?I=o(h):I=h,`${JSON.stringify(R)}:__remixContext.p(!1, ${Zn(JSON.stringify(I))})`},d=(R,h,I)=>{let M;try{M=JSON.stringify(I)}catch(P){return c(h,P)}return`${JSON.stringify(h)}:__remixContext.p(${Zn(M)})`},p=(R,h,I)=>{let M;return o&&I instanceof Error?M=o(I):M=I,`__remixContext.r(${JSON.stringify(R)}, ${JSON.stringify(h)}, !1, ${Zn(JSON.stringify(M))})`},m=(R,h,I)=>{let M;try{M=JSON.stringify(I)}catch(P){return p(R,h,P)}return`__remixContext.r(${JSON.stringify(R)}, ${JSON.stringify(h)}, ${Zn(M)})`},f=[],y=_.useMemo(()=>{var R;let h=s?`window.__remixContext = ${r};`:" ",I=s?.activeDeferreds;h+=I?["__remixContext.p = function(v,e,p,x) {","  if (typeof e !== 'undefined') {",`    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,"    p=Promise.reject(x);","  } else {","    p=Promise.resolve(v);","  }","  return p;","};","__remixContext.n = function(i,k) {","  __remixContext.t = __remixContext.t || {};","  __remixContext.t[i] = __remixContext.t[i] || {};","  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});",typeof n=="number"?`setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${n});`:"","  return p;","};","__remixContext.r = function(i,k,v,e,p,x) {","  p = __remixContext.t[i][k];","  if (typeof e !== 'undefined') {",`    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,"    p.e(x);","  } else {","    p.r(v);","  }","};"].join(`
`)+Object.entries(I).map(([P,Y])=>{let De=new Set(Y.pendingKeys),He=Y.deferredKeys.map(Ne=>{if(De.has(Ne))return f.push(_.createElement(Hc,{key:`${P} | ${Ne}`,deferredData:Y,routeId:P,dataKey:Ne,scriptProps:e,serializeData:m,serializeError:p})),`${JSON.stringify(Ne)}:__remixContext.n(${JSON.stringify(P)}, ${JSON.stringify(Ne)})`;{let Ke=Y.data[Ne];return typeof Ke._error<"u"?c(Ne,Ke._error):d(P,Ne,Ke._data)}}).join(`,
`);return`Object.assign(__remixContext.state.loaderData[${JSON.stringify(P)}], {${He}});`}).join(`
`)+(f.length>0?`__remixContext.a=${f.length};`:""):"";let M=i?`${(R=t.hmr)!==null&&R!==void 0&&R.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}import ${JSON.stringify(t.url)};
${l.map((P,Y)=>`import * as route${Y} from ${JSON.stringify(t.routes[P.route.id].module)};`).join(`
`)}
window.__remixRouteModules = {${l.map((P,Y)=>`${JSON.stringify(P.route.id)}:route${Y}`).join(",")}};

import(${JSON.stringify(t.entry.module)});`:" ";return _.createElement(_.Fragment,null,_.createElement("script",Te({},e,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:rs(h),type:void 0})),_.createElement("script",Te({},e,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:rs(M),type:"module",async:!0})))},[]);if(!i&&typeof __remixContext=="object"&&__remixContext.a)for(let R=0;R<__remixContext.a;R++)f.push(_.createElement(Hc,{key:R,scriptProps:e,serializeData:m,serializeError:p}));let g=_.useMemo(()=>{if(u.location){let R=Le(a.routes,u.location);return wn(R,`No routes match path "${u.location.pathname}"`),R}return[]},[u.location,a.routes]),x=l.concat(g).map(R=>{let h=t.routes[R.route.id];return(h.imports||[]).concat([h.module])}).flat(1),T=ns?[]:t.entry.imports.concat(x);return ns?null:_.createElement(_.Fragment,null,_.createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin}),$y(T).map(R=>_.createElement("link",{key:R,rel:"modulepreload",href:R,crossOrigin:e.crossOrigin})),y,f)}function Hc({dataKey:e,deferredData:t,routeId:r,scriptProps:n,serializeData:o,serializeError:a}){return typeof document>"u"&&t&&e&&r&&wn(t.pendingKeys.includes(e),`Deferred data for route ${r} with key ${e} was not pending but tried to render a script for it.`),_.createElement(_.Suspense,{fallback:typeof document>"u"&&t&&e&&r?null:_.createElement("script",Te({},n,{async:!0,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:" "}}))},typeof document>"u"&&t&&e&&r?_.createElement(ut,{resolve:t.data[e],errorElement:_.createElement(Ay,{dataKey:e,routeId:r,scriptProps:n,serializeError:a}),children:i=>_.createElement("script",Te({},n,{async:!0,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:o(r,e,i)}}))}):_.createElement("script",Te({},n,{async:!0,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:" "}})))}function Ay({dataKey:e,routeId:t,scriptProps:r,serializeError:n}){let o=yn();return _.createElement("script",Te({},r,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:n(t,e,o)}}))}function $y(e){return[...new Set(e)]}function fa(){return er()}function se(){return Yn()}function nt(){return Wn()}function no(){return Ki()}var pa=()=>null;function Bc(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var We=C(Ee());Rr();var ha=class extends We.Component{constructor(t){super(t),this.state={error:t.error||null,location:t.location}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location?{error:t.error||null,location:t.location}:{error:t.error||r.error,location:r.location}}render(){return this.state.error?We.createElement(os,{error:this.state.error}):this.props.children}};function os({error:e}){if(console.error(e),$e(e))return We.createElement(zc,{title:"Unhandled Thrown Response!"},We.createElement("h1",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},e.status," ",e.statusText));let t;if(e instanceof Error)t=e;else{let r=e==null?"Unknown Error":typeof e=="object"&&"toString"in e?e.toString():JSON.stringify(e);t=new Error(r)}return We.createElement(zc,{title:"Application Error!"},We.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},We.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),We.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},t.stack)))}function zc({title:e,children:t}){return We.createElement("html",{lang:"en"},We.createElement("head",null,We.createElement("meta",{charSet:"utf-8"}),We.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),We.createElement("title",null,e)),We.createElement("body",null,t,We.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
              );
            `}})))}var Yc=C(Ee());Rr();function Ty(e){let t={};return Object.values(e).forEach(r=>{let n=r.parentId||"";t[n]||(t[n]=[]),t[n].push(r)}),t}function as(e,t,r,n="",o=Ty(e)){return(o[n]||[]).map(a=>{let i=t[a.id],s={caseSensitive:a.caseSensitive,Component:i.default,ErrorBoundary:i.ErrorBoundary?i.ErrorBoundary:a.id==="root"?()=>Yc.createElement(os,{error:tr()}):void 0,id:a.id,index:a.index,path:a.path,handle:t[a.id].handle},l=as(e,t,r,a.id,o);return l.length>0&&(s.children=l),s})}Rr();var ma=C(Ee());Rr();var Wc="positions";function ga({getKey:e,...t}){let r=we(),n=er();ia({getKey:e,storageKey:Wc});let o=ma.useMemo(()=>{if(!e)return null;let i=e(r,n);return i!==r.key?i:null},[]),a=((i,s)=>{if(!window.history.state||!window.history.state.key){let l=Math.random().toString(32).slice(2);window.history.replaceState({key:l},"")}try{let u=JSON.parse(sessionStorage.getItem(i)||"{}")[s||window.history.state.key];typeof u=="number"&&window.scrollTo(0,u)}catch(l){console.error(l),sessionStorage.removeItem(i)}}).toString();return ma.createElement("script",Te({},t,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${a})(${JSON.stringify(Wc)}, ${JSON.stringify(o)})`}}))}var ya=C(Ee()),va=C(Kc());function ss({context:e,url:t,abortDelay:r}){typeof t=="string"&&(t=new URL(t));let{manifest:n,routeModules:o,serverHandoffString:a}=e,i=as(n.routes,o,e.future),s=(0,va.createStaticRouter)(i,e.staticHandlerContext);return ya.createElement(to.Provider,{value:{manifest:n,routeModules:o,serverHandoffString:a,future:e.future,serializeError:e.serializeError,abortDelay:r}},ya.createElement(ha,{location:s.state.location},ya.createElement(va.StaticRouterProvider,{router:s,context:e.staticHandlerContext,hydrate:!1})))}function By(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,o,a,i,s=[],l=!0,u=!1;try{if(a=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(c){u=!0,o=c}finally{try{if(!l&&r.return!=null&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return s}}function zy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qc(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ad(n.key),n)}}function Yy(e,t,r){return t&&Qc(e.prototype,t),r&&Qc(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Zc(e,t,r){return t=ad(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function od(e,t){return Wy(e)||By(e,t)||Gy(e,t)||Jy()}function Wy(e){if(Array.isArray(e))return e}function Gy(e,t){if(e){if(typeof e=="string")return ed(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ed(e,t)}}function ed(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Jy(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xy(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ad(e){var t=Xy(e,"string");return typeof t=="symbol"?t:String(t)}function ar(e,t){var r=sd(e,t,"get");return Ky(e,r)}function id(e,t,r){var n=sd(e,t,"set");return Qy(e,n,r),r}function sd(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function Ky(e,t){return t.get?t.get.call(e):t.value}function Qy(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}function oo(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r}function ld(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function td(e,t,r){ld(e,t),t.set(e,r)}function rd(e,t){ld(e,t),t.add(e)}var ud=[" daum[ /]"," deusu/"," yadirectfetcher","(?:^| )site","(?:^|[^g])news","@[a-z]","\\(at\\)[a-z]","\\(github\\.com/","\\[at\\][a-z]","^12345","^<","^[\\w \\.\\-\\(\\)]+(/v?\\d+(\\.\\d+)?(\\.\\d{1,10})?)?$","^[^ ]{50,}$","^active","^ad muncher","^amaya","^anglesharp/","^anonymous","^avsdevicesdk/","^axios/","^bidtellect/","^biglotron","^btwebclient/","^castro","^clamav[ /]","^client/","^cobweb/","^coccoc","^custom","^ddg[_-]android","^discourse","^dispatch/\\d","^downcast/","^duckduckgo","^facebook","^fdm[ /]\\d","^getright/","^gozilla/","^hatena","^hobbit","^hotzonu","^hwcdn/","^jeode/","^jetty/","^jigsaw","^linkdex","^lwp[-: ]","^metauri","^microsoft bits","^movabletype","^mozilla/\\d\\.\\d \\(compatible;?\\)$","^mozilla/\\d\\.\\d \\w*$","^navermailapp","^netsurf","^offline explorer","^php","^postman","^postrank","^python","^read","^reed","^restsharp/","^snapchat","^space bison","^svn","^swcd ","^taringa","^test certificate info","^thumbor/","^tumblr/","^user-agent:mozilla","^valid","^venus/fedoraplanet","^w3c","^webbandit/","^webcopier","^wget","^whatsapp","^xenu link sleuth","^yahoo","^yandex","^zdm/\\d","^zoom marketplace/","^{{.*}}$","adbeat\\.com","appinsights","archive","ask jeeves/teoma","bit\\.ly/","bluecoat drtr","bot","browsex","burpcollaborator","capture","catch","check","chrome-lighthouse","chromeframe","cloud","crawl","cryptoapi","dareboost","datanyze","dataprovider","dejaclick","dmbrowser","download","evc-batch/","feed","firephp","freesafeip","gomezagent","google","headlesschrome/","http","httrack","hubspot marketing grader","hydra","ibisbrowser","images","inspect","iplabel","ips-agent","java","library","mail\\.ru/","manager","monitor","morningscore/","neustar wpm","nutch","offbyone","optimize","pageburst","pagespeed","perl","phantom","pingdom","powermarks","preview","proxy","ptst[ /]\\d","reader","rexx;","rigor","rss","scan","scrape","search","serp ?reputation ?management","server","sogou","sparkler/","speedcurve","spider","splash","statuscake","stumbleupon\\.com","supercleaner","synapse","synthetic","torrent","tracemyfile","transcoder","trendsmapresolver","twingly recon","url","virtuoso","wappalyzer","webglance","webkit2png","websitemetadataretriever","whatcms/","wordpress","zgrab"];function Zy(e){try{new RegExp("(?<! cu)bot").test("dangerbot")}catch{return e}return[["bot","(?<! cu)bot"],["google","(?<! (?:channel/|google/))google(?!(app|/google| pixel))"],["http","(?<!(?:lib))http"],["java","java(?!;)"],["search","(?<! ya(?:yandex)?)search"]].forEach(function(t){var r=od(t,2),n=r[0],o=r[1],a=e.lastIndexOf(n);~a&&e.splice(a,1,o)}),e}Zy(ud);var cd="i",Cr=new WeakMap,ao=new WeakMap,wa=new WeakSet,ls=new WeakSet,ev=function(){function e(t){var r=this;zy(this,e),rd(this,ls),rd(this,wa),td(this,Cr,{writable:!0,value:void 0}),td(this,ao,{writable:!0,value:void 0}),id(this,Cr,t||ud.slice()),oo(this,wa,us).call(this);var n=function(a){return r.test(a)};return Object.defineProperties(n,Object.entries(Object.getOwnPropertyDescriptors(e.prototype)).reduce(function(o,a){var i=od(a,2),s=i[0],l=i[1];return typeof l.value=="function"&&Object.assign(o,Zc({},s,{value:r[s].bind(r)})),typeof l.get=="function"&&Object.assign(o,Zc({},s,{get:function(){return r[s]}})),o},{}))}return Yy(e,[{key:"pattern",get:function(){return new RegExp(ar(this,ao))}},{key:"test",value:function(r){return Boolean(r)&&ar(this,ao).test(r)}},{key:"find",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=r.match(ar(this,ao));return n&&n[0]}},{key:"matches",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return ar(this,Cr).filter(function(n){return new RegExp(n,cd).test(r)})}},{key:"clear",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";this.exclude(this.matches(r))}},{key:"extend",value:function(){var r=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];[].push.apply(ar(this,Cr),n.filter(function(o){return oo(r,ls,nd).call(r,o)===-1}).map(function(o){return o.toLowerCase()})),oo(this,wa,us).call(this)}},{key:"exclude",value:function(){for(var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=r.length;n--;){var o=oo(this,ls,nd).call(this,r[n]);o>-1&&ar(this,Cr).splice(o,1)}oo(this,wa,us).call(this)}},{key:"spawn",value:function(r){return new e(r||ar(this,Cr))}}]),e}();function us(){id(this,ao,new RegExp(ar(this,Cr).join("|"),cd))}function nd(e){return ar(this,Cr).indexOf(e.toLowerCase())}var dd=new ev;var mh=C(np());function ft(e){if(!e){let t=`flattenConnection(): needs a 'connection' to flatten, but received '${e??""}' instead.`;return console.error(t+" Returning an empty array"),[]}return"nodes"in e?e.nodes:"edges"in e&&Array.isArray(e.edges)?e.edges.map(t=>{if(!t?.node)throw new Error("flattenConnection(): Connection edges must contain nodes");return t.node}):[]}var v0=C(L(),1),yo=C(Ee(),1);var En="2023-10";var Ws=e=>e.includes("mock.shop");function Js(e){let{storeDomain:t,privateStorefrontToken:r,publicStorefrontToken:n,storefrontApiVersion:o=En,contentType:a}=e;if(!t)throw new Error(Gs+`\`storeDomain\` is required when creating a new Storefront client.
Received "${t}".`);o!==En&&y0(`The Storefront API version that you're using is different than the version this build of Hydrogen React is targeting.
You may run into unexpected errors if these versions don't match. Received verion: "${o}"; expected version "${En}"`);let i=s=>{let l=s?.storeDomain??t;return l.includes("://")?l:`https://${l}`};return{getShopifyDomain:i,getStorefrontApiUrl(s){let l=i(s),u=l+(l.endsWith("/")?"api":"/api");return Ws(l)?u:`${u}/${s?.storefrontApiVersion??o}/graphql.json`},getPrivateTokenHeaders(s){if(!r&&!s?.privateStorefrontToken&&!Ws(t))throw new Error(Gs+"You did not pass in a `privateStorefrontToken` while using `createStorefrontClient()` or `getPrivateTokenHeaders()`");return{"content-type":(s?.contentType??a)==="graphql"?"application/graphql":"application/json","X-SDK-Variant":"hydrogen-react","X-SDK-Variant-Source":"react","X-SDK-Version":o,"Shopify-Storefront-Private-Token":s?.privateStorefrontToken??r??"",...s?.buyerIp?{"Shopify-Storefront-Buyer-IP":s.buyerIp}:{}}},getPublicTokenHeaders(s){if(!n&&!s?.publicStorefrontToken&&!Ws(t))throw new Error(Gs+"You did not pass in a `publicStorefrontToken` while using `createStorefrontClient()` or `getPublicTokenHeaders()`");let l=s?.contentType??a??"json";return m0(l,o,s?.publicStorefrontToken??n??"")}}}function m0(e,t,r){return{"content-type":e==="graphql"?"application/graphql":"application/json","X-SDK-Variant":"hydrogen-react","X-SDK-Variant-Source":"react","X-SDK-Version":t,"X-Shopify-Storefront-Access-Token":r}}var sp=new Set,Gs="[h2:error:createStorefrontClient] ",g0="[h2:warn:createStorefrontClient] ",y0=e=>{sp.has(e)||(console.warn(g0+e),sp.add(e))};var w0={storeDomain:"test",storefrontToken:"abc123",storefrontApiVersion:En,countryIsoCode:"US",languageIsoCode:"EN",getStorefrontApiUrl(){return""},getPublicTokenHeaders(){return{}},getShopifyDomain(){return""}},b0=(0,yo.createContext)(w0);function lp(){let e=(0,yo.useContext)(b0);if(!e)throw new Error("'useShop()' must be a descendent of <ShopifyProvider/>");return e}var Xs="Shopify-Storefront-Id",Ks="Shopify-Storefront-Y",Qs="Shopify-Storefront-S",en="_shopify_y",tn="_shopify_s";var x0=new Set(["domain","path","max-age","expires","samesite","secure","httponly"]);function up(e){let t={},r,n,o=0,a=e.split(/;\s*/g),i,s;for(;o<a.length;o++)if(n=a[o],r=n.indexOf("="),~r){if(i=n.substring(0,r++).trim(),s=n.substring(r).trim(),s[0]==='"'&&(s=s.substring(1,s.length-1)),~s.indexOf("%"))try{s=decodeURIComponent(s)}catch{}x0.has(n=i.toLowerCase())?n==="expires"?t.expires=new Date(s):n==="max-age"?t.maxage=+s:t[n]=s:t[i]=s}else(i=n.trim().toLowerCase())&&(i==="httponly"||i==="secure")&&(t[i]=!0);return t}function Ka(e){let t=up(e);return{[en]:t[en]||"",[tn]:t[tn]||""}}function Qa(e){let t={id:"",resource:null,resourceId:null,search:"",searchParams:new URLSearchParams,hash:""};if(typeof e!="string")return t;try{let{search:r,searchParams:n,pathname:o,hash:a}=new URL(e),i=o.split("/"),s=i[i.length-1],l=i[i.length-2];return!s||!l?t:{id:`${s}${r}${a}`||"",resource:l??null,resourceId:s||null,search:r,searchParams:n,hash:a}}catch{return t}}var wo=C(L(),1);var vo=C(Ee(),1);function Zs(e){let{countryIsoCode:t,languageIsoCode:r}=lp(),n=r.includes("_")?r.replace("_","-"):`${r}-${t}`;if(!n)throw new Error("useMoney(): Unable to get 'locale' from 'useShop()', which means that 'locale' was not passed to '<ShopifyProvider/>'. 'locale' is required for 'useMoney()' to work");let o=parseFloat(e.amount),a=(0,vo.useMemo)(()=>({style:"currency",currency:e.currencyCode}),[e.currencyCode]),i=Cn(n,a),s=Cn(n,{...a,currencyDisplay:"name"}),l=Cn(n,{...a,currencyDisplay:"narrowSymbol"}),u=Cn(n,{...a,minimumFractionDigits:0,maximumFractionDigits:0}),c=Cn(n),d=Cn(n,{minimumFractionDigits:0,maximumFractionDigits:0}),p=f=>f.type==="currency",m=(0,vo.useMemo)(()=>({original:()=>e,currencyCode:()=>e.currencyCode,localizedString:()=>i().format(o),parts:()=>i().formatToParts(o),withoutTrailingZeros:()=>o%1===0?u().format(o):i().format(o),withoutTrailingZerosAndCurrency:()=>o%1===0?d().format(o):c().format(o),currencyName:()=>{var f;return((f=s().formatToParts(o).find(p))==null?void 0:f.value)??e.currencyCode},currencySymbol:()=>{var f;return((f=i().formatToParts(o).find(p))==null?void 0:f.value)??e.currencyCode},currencyNarrowSymbol:()=>{var f;return((f=l().formatToParts(o).find(p))==null?void 0:f.value)??""},amount:()=>i().formatToParts(o).filter(f=>["decimal","fraction","group","integer","literal"].includes(f.type)).map(f=>f.value).join("")}),[e,o,s,i,l,c,u,d]);return(0,vo.useMemo)(()=>new Proxy(m,{get:(f,y)=>{var g;return(g=Reflect.get(f,y))==null?void 0:g.call(null)}}),[m])}function Cn(e,t){return(0,vo.useMemo)(()=>{let r;return()=>r??(r=new Intl.NumberFormat(e,t))},[e,t])}function xe({data:e,as:t,withoutCurrency:r,withoutTrailingZeros:n,measurement:o,measurementSeparator:a="/",...i}){if(!S0(e))throw new Error("<Money/> needs a valid 'data' prop that has 'amount' and 'currencyCode'");let s=Zs(e),l=t??"div",u=s.localizedString;return(r||n)&&(r&&!n?u=s.amount:!r&&n?u=s.withoutTrailingZeros:u=s.withoutTrailingZerosAndCurrency),(0,wo.jsxs)(l,{...i,children:[u,o&&o.referenceUnit&&(0,wo.jsxs)(wo.Fragment,{children:[a,o.referenceUnit]})]})}function S0(e){return typeof e.amount=="string"&&!!e.amount&&typeof e.currencyCode=="string"&&!!e.currencyCode}var bo=C(L(),1),qt=C(Ee(),1);var Ce=qt.forwardRef(({alt:e,aspectRatio:t,crop:r="center",data:n,decoding:o="async",height:a="auto",loader:i=Za,loading:s="lazy",sizes:l,src:u,srcSetOptions:c={intervals:15,startingWidth:200,incrementSize:200,placeholderWidth:100},width:d="100%",...p},m)=>{let f=qt.useMemo(()=>{let M=n?.width&&n?.height?n?.width:void 0,P=n?.width&&n?.height?n?.height:void 0;return{width:M,height:P,unitsMatch:Boolean(cp(M,P))}},[n]),y=qt.useMemo(()=>{let P=xo((d||"100%").toString()),Y=`${P.number}${P.unit}`,De=a==null,He=De?null:xo(a.toString()),Ne=He?`${He.number}${He.unit}`:"",Ke=De?"auto":Ne,hr=u||n?.url,Yt=n?.altText&&!e?n?.altText:e||"",me=t||(f.unitsMatch?[So(f.width),So(f.height)].join("/"):void 0);return{width:Y,height:Ke,src:hr,alt:Yt,aspectRatio:me}},[d,a,u,n,e,t,f,p?.key]),{intervals:g,startingWidth:x,incrementSize:T,placeholderWidth:R}=c,h=qt.useMemo(()=>C0(d,g,x,T),[d,g,x,T]);return dp(y.width)?(0,bo.jsx)(R0,{aspectRatio:t,crop:r,decoding:o,height:a,imageWidths:h,loader:i,loading:s,normalizedProps:y,passthroughProps:p,ref:m,width:d}):(0,bo.jsx)(E0,{aspectRatio:t,crop:r,decoding:o,imageWidths:h,loader:i,loading:s,normalizedProps:y,passthroughProps:p,placeholderWidth:R,ref:m,sizes:l})}),R0=qt.forwardRef(({aspectRatio:e,crop:t,decoding:r,height:n,imageWidths:o,loader:a=Za,loading:i,normalizedProps:s,passthroughProps:l,width:u},c)=>{let d=qt.useMemo(()=>{let p=So(u),m=So(n),f=e||(cp(s.width,s.height)?[p,m].join("/"):s.aspectRatio?s.aspectRatio:void 0),y=o===void 0?void 0:pp(o,f,t),g=m||(f&&p?p*(el(f)??1):void 0),x=fp(s.src,y,a),T=a({src:s.src,width:p,height:g,crop:s.height==="auto"?void 0:t});return{width:p,aspectRatio:f,height:g,srcSet:x,src:T}},[e,t,n,o,a,s,u]);return(0,bo.jsx)("img",{ref:c,alt:s.alt,decoding:r,height:d.height,loading:i,src:d.src,srcSet:d.srcSet,width:d.width,style:{aspectRatio:d.aspectRatio,...l.style},...l})}),E0=qt.forwardRef(({crop:e,decoding:t,imageWidths:r,loader:n=Za,loading:o,normalizedProps:a,passthroughProps:i,placeholderWidth:s,sizes:l},u)=>{let c=qt.useMemo(()=>{let d=r===void 0?void 0:pp(r,a.aspectRatio,e),p=a.aspectRatio&&s?s*(el(a.aspectRatio)??1):void 0,m=fp(a.src,d,n),f=n({src:a.src,width:s,height:p,crop:e});return{placeholderHeight:p,srcSet:m,src:f}},[e,r,n,a,s]);return(0,bo.jsx)("img",{ref:u,alt:a.alt,decoding:t,height:c.placeholderHeight,loading:o,sizes:l,src:c.src,srcSet:c.srcSet,width:s,...i,style:{width:a.width,aspectRatio:a.aspectRatio,...i.style}})});function Za({src:e,width:t,height:r,crop:n}){if(!e)return"";let o=new URL(e);return t&&o.searchParams.append("width",Math.round(t).toString()),r&&o.searchParams.append("height",Math.round(r).toString()),n&&o.searchParams.append("crop",n),o.href}function cp(e="100%",t="auto"){return xo(e.toString()).unit===xo(t.toString()).unit}function xo(e){let t=e.replace(/[0-9.]/g,""),r=parseFloat(e.replace(t,""));return{unit:t===""?r===void 0?"auto":"px":t,number:r}}function So(e){if(e===void 0)return;let{unit:t,number:r}=xo(e.toString());switch(t){case"em":return r*16;case"rem":return r*16;case"px":return r;case"":return r;default:return}}function dp(e){return typeof e=="number"||typeof e=="string"&&/\d(px|em|rem)$/.test(e)}function fp(e,t,r=Za){return e?t?.length===0||!t?e:t.map((n,o)=>`${r({src:e,width:n.width,height:n.height,crop:n.crop})} ${t.length===3?`${o+1}x`:`${n.width??0}w`}`).join(", "):""}function C0(e="100%",t,r,n){let o=Array.from({length:t},(i,s)=>s*n+r),a=Array.from({length:3},(i,s)=>(s+1)*(So(e)??0));return dp(e)?a:o}function el(e){if(!e)return;let[t,r]=e.split("/");return 1/(Number(t)/Number(r))}function pp(e,t,r="center"){return e?e.map(o=>({width:o,height:t?o*(el(t)??1):void 0,crop:r})):void 0}var ri=C(hp());var mp={};function ti(e,t){!e&&!mp[t]&&(mp[t]=!0,console.warn(t))}var rl=({sign:e,unsign:t})=>(r,n={})=>{let{secrets:o=[],...a}={path:"/",sameSite:"lax",...n};return O0(r,a.expires),{get name(){return r},get isSigned(){return o.length>0},get expires(){return typeof a.maxAge<"u"?new Date(Date.now()+a.maxAge*1e3):a.expires},async parse(i,s){if(!i)return null;let l=(0,ri.parse)(i,{...a,...s});return r in l?l[r]===""?"":await D0(t,l[r],o):null},async serialize(i,s){return(0,ri.serialize)(r,i===""?"":await I0(e,i,o),{...a,...s})}}},kn=e=>e!=null&&typeof e.name=="string"&&typeof e.isSigned=="boolean"&&typeof e.parse=="function"&&typeof e.serialize=="function";async function I0(e,t,r){let n=N0(t);return r.length>0&&(n=await e(n,r[0])),n}async function D0(e,t,r){if(r.length>0){for(let n of r){let o=await e(t,n);if(o!==!1)return gp(o)}return null}return gp(t)}function N0(e){return btoa(U0(encodeURIComponent(JSON.stringify(e))))}function gp(e){try{return JSON.parse(decodeURIComponent(L0(atob(e))))}catch{return{}}}function L0(e){let t=e.toString(),r="",n=0,o,a;for(;n<t.length;)o=t.charAt(n++),/[\w*+\-./@]/.exec(o)?r+=o:(a=o.charCodeAt(0),a<256?r+="%"+yp(a,2):r+="%u"+yp(a,4).toUpperCase());return r}function yp(e,t){let r=e.toString(16);for(;r.length<t;)r="0"+r;return r}function U0(e){let t=e.toString(),r="",n=0,o,a;for(;n<t.length;){if(o=t.charAt(n++),o==="%"){if(t.charAt(n)==="u"){if(a=t.slice(n+1,n+5),/^[\da-f]{4}$/i.exec(a)){r+=String.fromCharCode(parseInt(a,16)),n+=5;continue}}else if(a=t.slice(n,n+2),/^[\da-f]{2}$/i.exec(a)){r+=String.fromCharCode(parseInt(a,16)),n+=2;continue}}r+=o}return r}function O0(e,t){ti(!t,`The "${e}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`)}Qt();Qt();var ur=function(e){return e.Development="development",e.Production="production",e.Test="test",e}({});function vp(e){return e===ur.Development||e===ur.Production||e===ur.Test}function nl(e,t){if(e instanceof Error&&t!==ur.Development){let r=new Error("Unexpected Server Error");return r.stack=void 0,r}return e}function ol(e,t){return Object.entries(e).reduce((r,[n,o])=>Object.assign(r,{[n]:nl(o,t)}),{})}function _n(e,t){let r=nl(e,t);return{message:r.message,stack:r.stack}}function al(e,t){if(!e)return null;let r=Object.entries(e),n={};for(let[o,a]of r)if($e(a))n[o]={...a,__type:"RouteErrorResponse"};else if(a instanceof Error){let i=nl(a,t);n[o]={message:i.message,stack:i.stack,__type:"Error",...i.name!=="Error"?{__subType:i.name}:{}}}else n[o]=a;return n}var k=(e,t={})=>Nt(e,t),Vt=(e,t={})=>Br(e,t),z=(e,t=302)=>Kt(e,t);function bp(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function $r(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}var F0=new Set([301,302,303,307,308]);function il(e){return F0.has(e)}function xp(e){return il(e.status)}function M0(e){return e!=null&&typeof e.then=="function"&&e._tracked===!0}var H0="__deferred_promise:";function Sp(e,t,r){let n=new TextEncoder;return new ReadableStream({async start(a){let i={},s=[];for(let[u,c]of Object.entries(e.data))M0(c)?(i[u]=`${H0}${u}`,(typeof c._data<"u"||typeof c._error<"u")&&s.push(u)):i[u]=c;a.enqueue(n.encode(JSON.stringify(i)+`

`));for(let u of s)wp(a,n,u,e.data[u],r);let l=e.subscribe((u,c)=>{c&&wp(a,n,c,e.data[c],r)});await e.resolveData(t),l(),a.close()}})}function wp(e,t,r,n,o){"_error"in n?e.enqueue(t.encode("error:"+JSON.stringify({[r]:n._error instanceof Error?_n(n._error,o):n._error})+`

`)):e.enqueue(t.encode("data:"+JSON.stringify({[r]:n._data??null})+`

`))}Qt();function Rp(e){return Object.keys(e).reduce((t,r)=>(t[r]=e[r].module,t),{})}var kp=C(Cp());function _p(e,t){let r=t.errors?t.matches.findIndex(a=>t.errors[a.route.id]):-1,n=r>=0?t.matches.slice(0,r+1):t.matches,o;if(r>=0){let{actionHeaders:a,actionData:i,loaderHeaders:s,loaderData:l}=t;t.matches.slice(r).some(u=>{let c=u.route.id;return a[c]&&(!i||i[c]===void 0)?o=a[c]:s[c]&&l[c]===void 0&&(o=s[c]),o!=null})}return n.reduce((a,i,s)=>{let{id:l}=i.route,u=e.routes[l].module,c=t.loaderHeaders[l]||new Headers,d=t.actionHeaders[l]||new Headers,p=o!=null&&s===n.length-1,m=p&&o!==c&&o!==d;if(u.headers==null){let y=new Headers(a);return m&&rn(o,y),rn(d,y),rn(c,y),y}let f=new Headers(u.headers?typeof u.headers=="function"?u.headers({loaderHeaders:c,parentHeaders:a,actionHeaders:d,errorHeaders:p?o:void 0}):u.headers:void 0);return m&&rn(o,f),rn(d,f),rn(c,f),rn(a,f),f},new Headers)}function rn(e,t){let r=e.get("Set-Cookie");r&&(0,kp.splitCookiesString)(r).forEach(o=>{t.append("Set-Cookie",o)})}function Pp(e,t){if(e===!1||e===null||typeof e>"u")throw console.error("The following error is a bug in Remix; please open an issue! https://github.com/remix-run/remix/issues/new"),new Error(t)}Qt();function Ap(e,t){let r=Le(e,t);return r?r.map(n=>({params:n.params,pathname:n.pathname,route:n.route})):null}async function $p({loadContext:e,action:t,params:r,request:n,routeId:o}){let a=await t({request:Dp(Ip(n)),context:e,params:r});if(a===void 0)throw new Error(`You defined an action for route "${o}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);return $r(a)?a:k(a)}async function Tp({loadContext:e,loader:t,params:r,request:n,routeId:o}){let a=await t({request:Dp(Ip(n)),context:e,params:r});if(a===void 0)throw new Error(`You defined a loader for route "${o}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);return bp(a)?a.init&&il(a.init.status||200)?z(new Headers(a.init.headers).get("Location"),a.init):a:$r(a)?a:k(a)}function Ip(e){let t=new URL(e.url),r=t.searchParams.getAll("index");t.searchParams.delete("index");let n=[];for(let a of r)a&&n.push(a);for(let a of n)t.searchParams.append("index",a);let o={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return o.body&&(o.duplex="half"),new Request(t.href,o)}function Dp(e){let t=new URL(e.url);t.searchParams.delete("_data");let r={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return r.body&&(r.duplex="half"),new Request(t.href,r)}function Np(e){let t={};return Object.values(e).forEach(r=>{let n=r.parentId||"";t[n]||(t[n]=[]),t[n].push(r)}),t}function ul(e,t="",r=Np(e)){return(r[t]||[]).map(n=>({...n,children:ul(e,n.id,r)}))}function cl(e,t,r="",n=Np(e)){return(n[r]||[]).map(o=>{let a={hasErrorBoundary:o.id==="root"||o.module.ErrorBoundary!=null,id:o.id,path:o.path,loader:o.module.loader?i=>Tp({request:i.request,params:i.params,loadContext:i.context,loader:o.module.loader,routeId:o.id}):void 0,action:o.module.action?i=>$p({request:i.request,params:i.params,loadContext:i.context,action:o.module.action,routeId:o.id}):void 0,handle:o.module.handle};return o.index?{index:!0,...a}:{caseSensitive:o.caseSensitive,children:cl(e,t,o.id,n),...a}})}var V0={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},B0=/[&><\u2028\u2029]/g;function Lp(e){return e.replace(B0,t=>V0[t])}function dl(e){return Lp(JSON.stringify(e))}var fl=(e,t)=>{let r=ul(e.routes),n=cl(e.routes,e.future),o=vp(t)?t:ur.Production,a=Ii(n),i=e.entry.module.handleError||((s,{request:l})=>{o!==ur.Test&&!l.signal.aborted&&console.error($e(s)&&s.error?s.error:s)});return async function(l,u={}){let c=new URL(l.url),d=Ap(r,c.pathname),p=y=>i(y,{context:u,params:d&&d.length>0?d[0].params:{},request:l}),m;if(c.searchParams.has("_data")){let y=c.searchParams.get("_data");if(m=await z0(o,a,y,l,u,p),e.entry.module.handleDataRequest){var f;m=await e.entry.module.handleDataRequest(m,{context:u,params:(d==null||(f=d.find(g=>g.route.id==y))===null||f===void 0?void 0:f.params)||{},request:l})}}else d&&d[d.length-1].route.module.default==null&&d[d.length-1].route.module.ErrorBoundary==null?m=await W0(o,a,d.slice(-1)[0].route.id,l,u,p):m=await Y0(o,e,a,l,u,p);return l.method==="HEAD"?new Response(null,{headers:m.headers,status:m.status,statusText:m.statusText}):m}};async function z0(e,t,r,n,o,a){try{let i=await t.queryRoute(n,{routeId:r,requestContext:o});if(xp(i)){let s=new Headers(i.headers);return s.set("X-Remix-Redirect",s.get("Location")),s.set("X-Remix-Status",i.status),s.delete("Location"),i.headers.get("Set-Cookie")!==null&&s.set("X-Remix-Revalidate","yes"),new Response(null,{status:204,headers:s})}if(qn in i){let s=i[qn],l=Sp(s,n.signal,e),u=s.init||{},c=new Headers(u.headers);return c.set("Content-Type","text/remix-deferred"),c.set("X-Remix-Response","yes"),u.headers=c,new Response(l,u)}return i.headers.set("X-Remix-Response","yes"),i}catch(i){if($r(i))return i.headers.set("X-Remix-Catch","yes"),i;if($e(i))return i&&a(i),Up(i,e);let s=i instanceof Error?i:new Error("Unexpected Server Error");return a(s),Nt(_n(s,e),{status:500,headers:{"X-Remix-Error":"yes"}})}}async function Y0(e,t,r,n,o,a){let i;try{i=await r.query(n,{requestContext:o})}catch(c){return a(c),new Response(null,{status:500})}if($r(i))return i;i.errors&&(Object.values(i.errors).forEach(c=>{(!$e(c)||c.error)&&a(c)}),i.errors=ol(i.errors,e));let s=_p(t,i),l={manifest:t.assets,routeModules:Rp(t.routes),staticHandlerContext:i,serverHandoffString:dl({url:i.location.pathname,state:{loaderData:i.loaderData,actionData:i.actionData,errors:al(i.errors,e)},future:t.future}),future:t.future,serializeError:c=>_n(c,e)},u=t.entry.module.default;try{return await u(n,i.statusCode,s,l,o)}catch(c){a(c),i=Di(r.dataRoutes,i,c),i.errors&&(i.errors=ol(i.errors,e)),l={...l,staticHandlerContext:i,serverHandoffString:dl({url:i.location.pathname,state:{loaderData:i.loaderData,actionData:i.actionData,errors:al(i.errors,e)},future:t.future})};try{return await u(n,i.statusCode,s,l,o)}catch(d){return a(d),Op(d,e)}}}async function W0(e,t,r,n,o,a){try{let i=await t.queryRoute(n,{routeId:r,requestContext:o});return Pp($r(i),"Expected a Response to be returned from queryRoute"),i}catch(i){return $r(i)?(i.headers.set("X-Remix-Catch","yes"),i):$e(i)?(i&&a(i),Up(i,e)):(a(i),Op(i,e))}}function Up(e,t){return Nt(_n(e.error||new Error("Unexpected Server Error"),t),{status:e.status,statusText:e.statusText,headers:{"X-Remix-Error":"yes"}})}function Op(e,t){let r="Unexpected Server Error";return t!==ur.Production&&(r+=`

${String(e)}`),new Response(r,{status:500,headers:{"Content-Type":"text/plain"}})}function pl(e){return`__flash_${e}__`}var Eo=(e={},t="")=>{let r=new Map(Object.entries(e));return{get id(){return t},get data(){return Object.fromEntries(r)},has(n){return r.has(n)||r.has(pl(n))},get(n){if(r.has(n))return r.get(n);let o=pl(n);if(r.has(o)){let a=r.get(o);return r.delete(o),a}},set(n,o){r.set(n,o)},flash(n,o){r.set(pl(n),o)},unset(n){r.delete(n)}}};var hl=e=>({cookie:t,createData:r,readData:n,updateData:o,deleteData:a})=>{let i=kn(t)?t:e(t?.name||"__session",t);return ml(i),{async getSession(s,l){let u=s&&await i.parse(s,l),c=u&&await n(u);return Eo(c||{},u||"")},async commitSession(s,l){let{id:u,data:c}=s,d=l?.maxAge!=null?new Date(Date.now()+l.maxAge*1e3):l?.expires!=null?l.expires:i.expires;return u?await o(u,c,d):u=await r(c,d),i.serialize(u,l)},async destroySession(s,l){return await a(s.id),i.serialize("",{...l,maxAge:void 0,expires:new Date(0)})}}};function ml(e){ti(e.isSigned,`The "${e.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`)}var gl=e=>({cookie:t}={})=>{let r=kn(t)?t:e(t?.name||"__session",t);return ml(r),{async getSession(n,o){return Eo(n&&await r.parse(n,o)||{})},async commitSession(n,o){let a=await r.serialize(n.data,o);if(a.length>4096)throw new Error("Cookie length will exceed browser maximum. Length: "+a.length);return a},async destroySession(n,o){return r.serialize("",{...o,maxAge:void 0,expires:new Date(0)})}}};var yl=e=>({cookie:t}={})=>{let r=new Map;return e({cookie:t,async createData(n,o){let a=Math.random().toString(36).substring(2,10);return r.set(a,{data:n,expires:o}),a},async readData(n){if(r.has(n)){let{data:o,expires:a}=r.get(n);if(!a||a>new Date)return o;a&&r.delete(n)}return null},async updateData(n,o,a){r.set(n,{data:o,expires:a})},async deleteData(n){r.delete(n)}})};var ie=C(Ee(),1);var An=C(L(),1),Zp=C(Mp(),1);function eb(e){let t=Array.isArray(e)?e:[e],r="";for(let n of t)n!=null&&(typeof n=="object"?r+=JSON.stringify(n):r+=n.toString());return encodeURIComponent(r)}var ai="public",tb="private",eh="no-store",Vp={maxAge:"max-age",staleWhileRevalidate:"stale-while-revalidate",sMaxAge:"s-maxage",staleIfError:"stale-if-error"};function th(e){let t=[];return Object.keys(e).forEach(r=>{r==="mode"?t.push(e[r]):Vp[r]&&t.push(`${Vp[r]}=${e[r]}`)}),t.join(", ")}function rb(){return{mode:eh}}function xl(e){if(e?.mode&&e?.mode!==ai&&e?.mode!==tb)throw Error("'mode' must be either 'public' or 'private'")}function Sl(e){return xl(e),{mode:ai,maxAge:1,staleWhileRevalidate:9,...e}}function nb(e){return xl(e),{mode:ai,maxAge:3600,staleWhileRevalidate:82800,...e}}function Rl(e){return xl(e),{mode:ai,maxAge:1,staleWhileRevalidate:86399,...e}}function ob(e){return e}function rh(e){return String(e).includes("__proto__")?JSON.parse(e,ab):JSON.parse(e)}function ab(e,t){if(e!=="__proto__")return t}function oi(e,t){return e&&t?{...e,...t}:e||Rl()}function bl(e){return th(oi(e))}async function ib(e,t){if(!e)return;let r=await e.match(t);if(r)return r}async function sb(e,t,r,n){if(!e)return;let o=oi(n),a=bl(oi(o,{maxAge:(o.maxAge||0)+(o.staleWhileRevalidate||0)})),i=bl(oi(o));r.headers.set("cache-control",a),r.headers.set("real-cache-control",i),r.headers.set("cache-put-date",new Date().toUTCString()),await e.put(t,r)}async function lb(e,t){e&&await e.delete(t)}function ub(e,t){let r=e.headers.get("real-cache-control"),n=0;if(r){let o=r.match(/max-age=(\d*)/);o&&o.length>1&&(n=parseFloat(o[1]))}return[(new Date().valueOf()-new Date(t).valueOf())/1e3,n]}function cb(e,t){let r=t.headers.get("cache-put-date");if(!r)return!1;let[n,o]=ub(t,r);return n>o}var El={get:ib,set:sb,delete:lb,generateDefaultCacheControlHeader:bl,isStale:cb};function Cl(e){return`https://shopify.dev/?${e}`}function db(e){return e||Rl()}async function fb(e,t){if(!e)return;let r=Cl(t),n=new Request(r),o=await El.get(e,n);if(!o)return;let a=await o.text();try{return[rh(a),o]}catch{return[a,o]}}async function Bp(e,t,r,n){if(!e)return;let o=Cl(t),a=new Request(o),i=new Response(JSON.stringify(r));await El.set(e,a,i,db(n))}function pb(e,t){return El.isStale(new Request(Cl(e)),t)}function hb(e,t){return[e,{status:t.status,statusText:t.statusText,headers:Array.from(t.headers.entries())}]}function zp([e,t]){return[e,new Response(e,t)]}var mb=e=>!e?.errors,wl=new Set;async function gb(e,t,{strategy:r=Sl(),cacheInstance:n,shouldCacheResult:o=()=>!0,waitUntil:a,debugInfo:i}){let s=eb([...typeof e=="string"?[e]:e]),l;if(!n||!r||r.mode===eh)return await t();let u=await fb(n,s);if(u){let[d,p]=u,m=pb(s,p)?"STALE":"HIT";if(!wl.has(s)&&m==="STALE"){wl.add(s);let f=Promise.resolve().then(async()=>{let y=Date.now();try{let g=await t();o(g)&&(await Bp(n,s,g,r),l?.("PUT",y))}catch(g){g.message&&(g.message="SWR in sub-request failed: "+g.message),console.error(g)}finally{wl.delete(s)}});a?.(f)}return d}let c=await t();if(o(c)){let d=Promise.resolve().then(async()=>{await Bp(n,s,c,r)});a?.(d)}return c}async function yb(e,t,{cacheInstance:r,cache:n,cacheKey:o=[e,t],shouldCacheResponse:a=()=>!0,waitUntil:i,returnType:s="json",debugInfo:l}={}){return!n&&(!t.method||t.method==="GET")&&(n=Sl()),gb(o,async()=>{let u=await fetch(e,t),c;try{c=await u[s]()}catch{try{c=await u.text()}catch{throw new Error(`Storefront API response code: ${u.status} (Request Id: ${u.headers.get("x-request-id")})`)}}return hb(c,u)},{cacheInstance:r,waitUntil:i,strategy:n??null,debugInfo:l,shouldCacheResult:u=>a(...zp(u))}).then(zp)}var Yp="Custom-Storefront-Request-Group-ID",Wp="X-Shopify-Storefront-Access-Token",Gp="X-SDK-Variant",Jp="X-SDK-Variant-Source",Xp="X-SDK-Version";function vb(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`weak-${Math.random().toString(16).substring(2)}`}var nh="2023.10.3";function Kp(e){return e.replace(/\s*#.*$/gm,"").replace(/\s+/gm," ").trim()}var wb=/(^|}\s)query[\s({]/im,bb=/(^|}\s)mutation[\s({]/im;function xb(e,t){if(!wb.test(e))throw new Error(`[h2:error:${t}] Can only execute queries`)}function Sb(e,t){if(!bb.test(e))throw new Error(`[h2:error:${t}] Can only execute mutations`)}function Qp({response:e,errors:t,type:r,query:n,queryVariables:o,ErrorConstructor:a=Error,client:i="storefront"}){let s=e.headers.get("x-request-id"),l=(typeof t=="string"?t:t?.map?.(u=>u.message).join(`
`))||`API response error: ${e.status}`;throw new a(`[h2:error:${i}.${r}] `+l+(s?` - Request ID: ${s}`:""),{cause:JSON.stringify({errors:t,requestId:s})})}var oh=class extends Error{},Rb=e=>e instanceof oh,Eb={language:"EN",country:"US"};function ah(e){let{storefrontHeaders:t,cache:r,waitUntil:n,i18n:o,storefrontId:a,...i}=e,{getPublicTokenHeaders:s,getPrivateTokenHeaders:l,getStorefrontApiUrl:u,getShopifyDomain:c}=Js(i),d=(i.privateStorefrontToken?l:s)({contentType:"json",buyerIp:t?.buyerIp||""});if(d[Yp]=t?.requestGroupId||vb(),a&&(d[Xs]=a),d["user-agent"]=`Hydrogen ${nh}`,t&&t.cookie){let f=Ka(t.cookie??"");f[en]&&(d[Ks]=f[en]),f[tn]&&(d[Qs]=f[tn])}let p=JSON.stringify({"content-type":d["content-type"],"user-agent":d["user-agent"],[Gp]:d[Gp],[Jp]:d[Jp],[Xp]:d[Xp],[Wp]:d[Wp]});async function m({query:f,mutation:y,variables:g,cache:x,headers:T=[],storefrontApiVersion:R}){let h=T instanceof Headers?Object.fromEntries(T.entries()):Array.isArray(T)?Object.fromEntries(T):T;f=f??y;let I={...g};o&&(!g?.country&&/\$country/.test(f)&&(I.country=o.country),!g?.language&&/\$language/.test(f)&&(I.language=o.language));let M=u({storefrontApiVersion:R}),P=JSON.stringify({query:f,variables:I}),Y={method:"POST",headers:{...d,...h},body:P},De=[M,Y.method,p,Y.body],[He,Ne]=await yb(M,Y,{cacheInstance:y?void 0:r,cache:x||Rl(),cacheKey:De,shouldCacheResponse:mb,waitUntil:n,debugInfo:{graphql:P,requestId:Y.headers[Yp],purpose:t?.purpose}}),Ke={response:Ne,type:y?"mutation":"query",query:f,queryVariables:I,errors:void 0};if(!Ne.ok){let me;try{me=rh(He)}catch{me=[{message:He}]}Qp({...Ke,errors:me})}let{data:hr,errors:Yt}=He;return Yt?.length&&Qp({...Ke,errors:Yt,ErrorConstructor:oh}),hr}return{storefront:{query:(f,y)=>{f=Kp(f),xb(f,"storefront.query");let g=m({...y,query:f});return g.catch(()=>{}),g},mutate:(f,y)=>{f=Kp(f),Sb(f,"storefront.mutate");let g=m({...y,mutation:f});return g.catch(()=>{}),g},cache:r,CacheNone:rb,CacheLong:nb,CacheShort:Sl,CacheCustom:ob,generateCacheControlHeader:th,getPublicTokenHeaders:s,getPrivateTokenHeaders:l,getShopifyDomain:c,getApiUrl:u,isApiError:Rb,i18n:o??Eb}}}async function ih(e){let{storefront:t,request:r,noAdminRedirect:n,response:o=new Response("Not Found",{status:404})}=e,{pathname:a,search:i}=new URL(r.url),s=a+i;if(a==="/admin"&&!n)return z(`${t.getShopifyDomain()}/admin`);try{let{urlRedirects:l}=await t.query(kb,{variables:{query:"path:"+s}}),u=l?.edges?.[0]?.node?.target;if(u)return new Response(null,{status:301,headers:{location:u}});let c=new URLSearchParams(i),d=c.get("return_to")||c.get("redirect");if(d){if(Cb(d))return z(d);console.warn(`Cross-domain redirects are not supported. Tried to redirect from ${s} to ${d}`)}}catch(l){console.error(`Failed to fetch redirects from Storefront API for route ${s}`,l)}return o}function Cb(e){return!/^(([a-z+-]+:)?\/\/|[a-z+-]+:)/i.test(e.trim())}var kb=`#graphql
  query redirects($query: String) {
    urlRedirects(first: 1, query: $query) {
      edges {
        node {
          target
        }
      }
    }
  }
`;var Qk=(0,ie.lazy)(()=>Promise.resolve().then(()=>(qp(),jp)));function _t({connection:e,children:t=()=>(console.warn("<Pagination> requires children to work properly"),null)}){let r=lt().state==="loading",{endCursor:n,hasNextPage:o,hasPreviousPage:a,nextPageUrl:i,nodes:s,previousPageUrl:l,startCursor:u}=_b(e),c=(0,ie.useMemo)(()=>({pageInfo:{endCursor:n,hasPreviousPage:a,hasNextPage:o,startCursor:u},nodes:s}),[n,o,a,u,s]),d=(0,ie.useMemo)(()=>(0,ie.forwardRef)(function(m,f){return o?(0,ie.createElement)(B,{preventScrollReset:!0,...m,to:i,state:c,replace:!0,ref:f}):null}),[o,i,c]),p=(0,ie.useMemo)(()=>(0,ie.forwardRef)(function(m,f){return a?(0,ie.createElement)(B,{preventScrollReset:!0,...m,to:l,state:c,replace:!0,ref:f}):null}),[a,l,c]);return t({state:c,hasNextPage:o,hasPreviousPage:a,isLoading:r,nextPageUrl:i,nodes:s,previousPageUrl:l,NextLink:d,PreviousLink:p})}function ni(e){let t=new URLSearchParams(e);return t.delete("cursor"),t.delete("direction"),t.toString()}function Co(e){throw new Error(`The Pagination component requires ${"`"+e+"`"} to be a part of your query. See the guide on how to setup your query to include ${"`"+e+"`"}: https://shopify.dev/docs/custom-storefronts/hydrogen/data-fetching/pagination#setup-the-paginated-query`)}function _b(e){e.pageInfo||Co("pageInfo"),typeof e.pageInfo.startCursor>"u"&&Co("pageInfo.startCursor"),typeof e.pageInfo.endCursor>"u"&&Co("pageInfo.endCursor"),typeof e.pageInfo.hasNextPage>"u"&&Co("pageInfo.hasNextPage"),typeof e.pageInfo.hasPreviousPage>"u"&&Co("pageInfo.hasPreviousPage");let t=Ut(),{state:r,search:n,pathname:o}=we(),a=new URLSearchParams(n).get("direction")==="previous",i=(0,ie.useMemo)(()=>!globalThis?.window?.__hydrogenHydrated||!r||!r?.nodes?ft(e):a?[...ft(e),...r.nodes]:[...r.nodes,...ft(e)],[r,e]),s=(0,ie.useMemo)(()=>{let d=globalThis?.window?.__hydrogenHydrated,p=!d||r?.pageInfo?.startCursor===void 0?e.pageInfo.startCursor:r.pageInfo.startCursor,m=!d||r?.pageInfo?.endCursor===void 0?e.pageInfo.endCursor:r.pageInfo.endCursor,f=!d||r?.pageInfo?.hasPreviousPage===void 0?e.pageInfo.hasPreviousPage:r.pageInfo.hasPreviousPage,y=!d||r?.pageInfo?.hasNextPage===void 0?e.pageInfo.hasNextPage:r.pageInfo.hasNextPage;return r?.nodes&&(a?(p=e.pageInfo.startCursor,f=e.pageInfo.hasPreviousPage):(m=e.pageInfo.endCursor,y=e.pageInfo.hasNextPage)),{startCursor:p,endCursor:m,hasPreviousPage:f,hasNextPage:y}},[a,r,e.pageInfo.hasNextPage,e.pageInfo.hasPreviousPage,e.pageInfo.startCursor,e.pageInfo.endCursor]),l=(0,ie.useRef)({params:ni(n),pathname:o});(0,ie.useEffect)(()=>{window.__hydrogenHydrated=!0},[]),(0,ie.useEffect)(()=>{(ni(n)!==l.current.params||o!==l.current.pathname)&&(l.current={pathname:o,params:ni(n)},t(`${o}?${ni(n)}`,{replace:!0,preventScrollReset:!0,state:{nodes:void 0,pageInfo:void 0}}))},[o,n]);let u=(0,ie.useMemo)(()=>{let d=new URLSearchParams(n);return d.set("direction","previous"),s.startCursor&&d.set("cursor",s.startCursor),`?${d.toString()}`},[n,s.startCursor]),c=(0,ie.useMemo)(()=>{let d=new URLSearchParams(n);return d.set("direction","next"),s.endCursor&&d.set("cursor",s.endCursor),`?${d.toString()}`},[n,s.endCursor]);return{...s,previousPageUrl:u,nextPageUrl:c,nodes:i}}function Pt(e,t={pageBy:20}){if(typeof e?.url>"u")throw new Error("getPaginationVariables must be called with the Request object passed to your loader function");let{pageBy:r}=t,n=new URLSearchParams(new URL(e.url).search),o=n.get("cursor")??void 0;return(n.get("direction")==="previous"?"previous":"next")=="previous"?{last:r,startCursor:o??null}:{first:r,endCursor:o??null}}var Zk=`Shopify Hydrogen ${nh}`;function Pb(){return $b(Ab())}function Ab(){try{return crypto.getRandomValues(new Uint8Array(16))}catch{return new Uint8Array(16).map(()=>Math.random()*255|0)}}function $b(e){return Array.from(e,function(t){return("0"+(t&255).toString(16)).slice(-2)}).join("")}var sh="cartFormInput";function Oe({children:e,action:t,inputs:r,route:n}){let o=no();return(0,An.jsxs)(o.Form,{action:n||"",method:"post",children:[(t||r)&&(0,An.jsx)("input",{type:"hidden",name:sh,value:JSON.stringify({action:t,inputs:r})}),typeof e=="function"?e(o):e]})}Oe.INPUT_NAME=sh;Oe.ACTIONS={AttributesUpdateInput:"AttributesUpdateInput",BuyerIdentityUpdate:"BuyerIdentityUpdate",Create:"Create",DiscountCodesUpdate:"DiscountCodesUpdate",LinesAdd:"LinesAdd",LinesRemove:"LinesRemove",LinesUpdate:"LinesUpdate",NoteUpdate:"NoteUpdate",SelectedDeliveryOptionsUpdate:"SelectedDeliveryOptionsUpdate",MetafieldsSet:"MetafieldsSet",MetafieldDelete:"MetafieldDelete"};function Tb(e){let t={};for(let i of e.entries()){let s=i[0],l=e.getAll(s);t[s]=l.length>1?l:i[1]}let{cartFormInput:r,...n}=t,{action:o,inputs:a}=r?JSON.parse(String(r)):{};return{action:o,inputs:{...a,...n}}}Oe.getFormInput=Tb;var cr=`#graphql
  fragment CartApiError on CartUserError {
    message
    field
    code
  }
`,dr=`#graphql
  fragment CartApiMutation on Cart {
    id
    totalQuantity
  }
`;function Ib(e){return async(t,r)=>{let{cartId:n,...o}=r||{},{cartCreate:a}=await e.storefront.mutate(Db(e.cartFragment),{variables:{input:t,...o}});return a}}var Db=(e=dr)=>`#graphql
  mutation cartCreate(
    $input: CartInput!
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartCreate(input: $input) {
      cart {
        ...CartApiMutation
        checkoutUrl
      }
      errors: userErrors {
        ...CartApiError
      }
    }
  }
  ${e}
  ${cr}
`;function Nb(e){return async t=>{let r=e.getCartId();if(!r)return null;let{cart:n}=await e.storefront.query(Lb(e.cartFragment),{variables:{cartId:r,...t},cache:e.storefront.CacheNone()});return n}}var Lb=(e=Ub)=>`#graphql
  query CartQuery(
    $cartId: ID!
    $numCartLines: Int = 100
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cart(id: $cartId) {
      ...CartApiQuery
    }
  }

  ${e}
`,Ub=`#graphql
  fragment CartApiQuery on Cart {
    id
    checkoutUrl
    totalQuantity
    buyerIdentity {
      countryCode
      customer {
        id
        email
        firstName
        lastName
        displayName
      }
      email
      phone
    }
    lines(first: $numCartLines) {
      edges {
        node {
          id
          quantity
          attributes {
            key
            value
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            amountPerQuantity {
              amount
              currencyCode
            }
            compareAtAmountPerQuantity {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              availableForSale
              compareAtPrice {
                ...CartApiMoney
              }
              price {
                ...CartApiMoney
              }
              requiresShipping
              title
              image {
                ...CartApiImage
              }
              product {
                handle
                title
                id
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
    cost {
      subtotalAmount {
        ...CartApiMoney
      }
      totalAmount {
        ...CartApiMoney
      }
      totalDutyAmount {
        ...CartApiMoney
      }
      totalTaxAmount {
        ...CartApiMoney
      }
    }
    note
    attributes {
      key
      value
    }
    discountCodes {
      applicable
      code
    }
  }

  fragment CartApiMoney on MoneyV2 {
    currencyCode
    amount
  }

  fragment CartApiImage on Image {
    id
    url
    altText
    width
    height
  }
`;function Ob(e){return async(t,r)=>{let{cartLinesAdd:n}=await e.storefront.mutate(Fb(e.cartFragment),{variables:{cartId:e.getCartId(),lines:t,...r}});return n}}var Fb=(e=dr)=>`#graphql
  mutation cartLinesAdd(
    $cartId: ID!
    $lines: [CartLineInput!]!
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...CartApiMutation
      }
      errors: userErrors {
        ...CartApiError
      }
    }
  }

  ${e}
  ${cr}
`;function Mb(e){return async(t,r)=>{let{cartLinesUpdate:n}=await e.storefront.mutate(Hb(e.cartFragment),{variables:{cartId:e.getCartId(),lines:t,...r}});return n}}var Hb=(e=dr)=>`#graphql
  mutation cartLinesUpdate(
    $cartId: ID!
    $lines: [CartLineUpdateInput!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...CartApiMutation
      }
      errors: userErrors {
        ...CartApiError
      }
    }
  }

  ${e}
  ${cr}
`;function jb(e){return async(t,r)=>{let{cartLinesRemove:n}=await e.storefront.mutate(qb(e.cartFragment),{variables:{cartId:e.getCartId(),lineIds:t,...r}});return n}}var qb=(e=dr)=>`#graphql
  mutation cartLinesRemove(
    $cartId: ID!
    $lineIds: [ID!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...CartApiMutation
      }
      errors: userErrors {
        ...CartApiError
      }
    }
  }

  ${e}
  ${cr}
`;function Vb(e){return async(t,r)=>{let n=t.filter((a,i,s)=>s.indexOf(a)===i),{cartDiscountCodesUpdate:o}=await e.storefront.mutate(Bb(e.cartFragment),{variables:{cartId:e.getCartId(),discountCodes:n,...r}});return o}}var Bb=(e=dr)=>`#graphql
  mutation cartDiscountCodesUpdate(
    $cartId: ID!
    $discountCodes: [String!]
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
      cart {
        ...CartApiMutation
      }
      errors: userErrors {
        ...CartApiError
      }
    }
  }
  ${e}
  ${cr}
`;function zb(e){return async(t,r)=>{let{cartBuyerIdentityUpdate:n}=await e.storefront.mutate(Yb(e.cartFragment),{variables:{cartId:e.getCartId(),buyerIdentity:t,...r}});return n}}var Yb=(e=dr)=>`#graphql
  mutation cartBuyerIdentityUpdate(
    $cartId: ID!
    $buyerIdentity: CartBuyerIdentityInput!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        ...CartApiMutation
      }
      errors: userErrors {
        ...CartApiError
      }
    }
  }
  ${e}
  ${cr}
`;function Wb(e){return async(t,r)=>{let{cartNoteUpdate:n}=await e.storefront.mutate(Gb(e.cartFragment),{variables:{cartId:e.getCartId(),note:t,...r}});return n}}var Gb=(e=dr)=>`#graphql
  mutation cartNoteUpdate(
    $cartId: ID!
    $note: String
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartNoteUpdate(cartId: $cartId, note: $note) {
      cart {
        ...CartApiMutation
      }
      errors: userErrors {
        ...CartApiError
      }
    }
  }
  ${e}
  ${cr}
`;function Jb(e){return async(t,r)=>{let{cartSelectedDeliveryOptionsUpdate:n}=await e.storefront.mutate(Xb(e.cartFragment),{variables:{cartId:e.getCartId(),selectedDeliveryOptions:t,...r}});return n}}var Xb=(e=dr)=>`#graphql
  mutation cartSelectedDeliveryOptionsUpdate(
    $cartId: ID!
    $selectedDeliveryOptions: [CartSelectedDeliveryOptionInput!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartSelectedDeliveryOptionsUpdate(cartId: $cartId, selectedDeliveryOptions: $selectedDeliveryOptions) {
      cart {
        ...CartApiMutation
      }
      errors: userErrors {
        ...CartApiError
      }
    }
  }
  ${e}
  ${cr}
`;function Kb(e){return async(t,r)=>{let{cartAttributesUpdate:n}=await e.storefront.mutate(Qb(e.cartFragment),{variables:{cartId:r?.cartId||e.getCartId(),attributes:t}});return n}}var Qb=(e=dr)=>`#graphql
  mutation cartAttributesUpdate(
    $cartId: ID!
    $attributes: [AttributeInput!]!
  ) {
    cartAttributesUpdate(cartId: $cartId, attributes: $attributes) {
      cart {
        ...CartApiMutation
      }
      errors: userErrors {
        ...CartApiError
      }
    }
  }
  ${e}
  ${cr}
`;function Zb(e){return async(t,r)=>{let n=r?.cartId||e.getCartId(),o=t.map(i=>({...i,ownerId:n})),{cartMetafieldsSet:a}=await e.storefront.mutate(ex(),{variables:{metafields:o}});return{cart:{id:n},errors:a.errors}}}var ex=()=>`#graphql
  mutation cartMetafieldsSet(
    $metafields: [CartMetafieldsSetInput!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartMetafieldsSet(metafields: $metafields) {
      errors: userErrors {
        code
        elementIndex
        field
        message
      }
    }
  }
`;function tx(e){return async(t,r)=>{let n=r?.cartId||e.getCartId(),{cartMetafieldDelete:o}=await e.storefront.mutate(rx(),{variables:{input:{ownerId:n,key:t}}});return{cart:{id:n},errors:o.errors}}}var rx=()=>`#graphql
  mutation cartMetafieldDelete(
    $input: CartMetafieldDeleteInput!
  ) {
    cartMetafieldDelete(input: $input) {
      errors: userErrors {
        code
        field
        message
      }
    }
  }
`,nx=new Set(["domain","path","max-age","expires","samesite","secure","httponly"]);function ox(e){let t={},r,n,o=0,a=e.split(/;\s*/g),i,s;for(;o<a.length;o++)if(n=a[o],r=n.indexOf("="),~r){if(i=n.substring(0,r++).trim(),s=n.substring(r).trim(),s[0]==='"'&&(s=s.substring(1,s.length-1)),~s.indexOf("%"))try{s=decodeURIComponent(s)}catch{}nx.has(n=i.toLowerCase())?n==="expires"?t.expires=new Date(s):n==="max-age"?t.maxage=+s:t[n]=s:t[i]=s}else(i=n.trim().toLowerCase())&&(i==="httponly"||i==="secure")&&(t[i]=!0);return t}function ax(e,t,r={}){let n=e+"="+encodeURIComponent(t);return r.expires&&(n+="; Expires="+new Date(r.expires).toUTCString()),r.maxage!=null&&r.maxage>=0&&(n+="; Max-Age="+(r.maxage|0)),r.domain&&(n+="; Domain="+r.domain),r.path&&(n+="; Path="+r.path),r.samesite&&(n+="; SameSite="+r.samesite),(r.secure||r.samesite==="None")&&(n+="; Secure"),r.httponly&&(n+="; HttpOnly"),n}var lh=e=>{let t=ox(e.get("Cookie")||"");return()=>t.cart?`gid://shopify/Cart/${t.cart}`:void 0},uh=e=>t=>{let r=new Headers;return r.append("Set-Cookie",ax("cart",t.split("/").pop()||"",{path:"/",...e})),r};function ch(e){let{getCartId:t,setCartId:r,storefront:n,cartQueryFragment:o,cartMutateFragment:a}=e,i={storefront:n,getCartId:t,cartFragment:a},s=t(),l=Ib(i),u={get:Nb({storefront:n,getCartId:t,cartFragment:o}),getCartId:t,setCartId:r,create:l,addLines:async(c,d)=>s||d?.cartId?await Ob(i)(c,d):await l({lines:c},d),updateLines:Mb(i),removeLines:jb(i),updateDiscountCodes:async(c,d)=>s||d?.cartId?await Vb(i)(c,d):await l({discountCodes:c},d),updateBuyerIdentity:async(c,d)=>s||d?.cartId?await zb(i)(c,d):await l({buyerIdentity:c},d),updateNote:async(c,d)=>s||d?.cartId?await Wb(i)(c,d):await l({note:c},d),updateSelectedDeliveryOption:Jb(i),updateAttributes:async(c,d)=>s||d?.cartId?await Kb(i)(c,d):await l({attributes:c},d),setMetafields:async(c,d)=>s||d?.cartId?await Zb(i)(c,d):await l({metafields:c},d),deleteMetafield:tx(i)};return"customMethods"in e?{...u,...e.customMethods??{}}:u}function dh({handle:e,options:t=[],variants:r=[],productPath:n="products",children:o}){let a=r instanceof Array?r:ft(r),{searchParams:i,path:s,alreadyOnProductPage:l}=ix(e,n),u=t.filter(c=>c?.values?.length===1);return(0,ie.createElement)(ie.Fragment,null,...(0,ie.useMemo)(()=>t.filter(c=>c?.values?.length>1).map(c=>{let d,p=[];for(let m of c.values){let f=new URLSearchParams(l?i:void 0);f.set(c.name,m),u.forEach(R=>{f.set(R.name,R.values[0])});let y=a.find(R=>R?.selectedOptions?.every(h=>f.get(h?.name)===h?.value)),g=i.get(c.name),x=g?g===m:!1;x&&(d=m);let T="?"+f.toString();p.push({value:m,isAvailable:y?y.availableForSale:!0,to:s+T,search:T,isActive:x})}return o({option:{name:c.name,value:d,values:p}})}),[t,a,o]))}var fh=e=>{if(typeof e?.url>"u")throw new TypeError(`Expected a Request instance, got ${typeof e}`);let t=new URL(e.url).searchParams,r=[];return t.forEach((n,o)=>{r.push({name:o,value:n})}),r};function ix(e,t){let{pathname:r,search:n}=we();return(0,ie.useMemo)(()=>{let o=/(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/g.exec(r),a=o&&o.length>0;t=t.startsWith("/")?t.substring(1):t;let i=a?`${o[0]}${t}/${e}`:`/${t}/${e}`;return{searchParams:new URLSearchParams(n),alreadyOnProductPage:i===r,path:i}},[r,n,e,t])}var ph=(0,ie.createContext)(void 0),sx=ph.Provider,ii=()=>(0,ie.useContext)(ph);function hh(e={}){let t=Pb(),r=lx(t,e);return{nonce:t,header:r,NonceProvider:({children:n})=>(0,ie.createElement)(sx,{value:t},n)}}function lx(e,t={}){let r=`'nonce-${e}'`,n=Object.assign({},{baseUri:["'self'"],defaultSrc:["'self'",r,"https://cdn.shopify.com","https://shopify.com"],frameAncestors:["none"],styleSrc:["'self'","'unsafe-inline'","https://cdn.shopify.com"],connectSrc:["'self'","https://monorail-edge.shopifysvc.com"]},t);return n.scriptSrc instanceof Array&&!n.scriptSrc.includes(r)?n.scriptSrc.push(r):n.defaultSrc instanceof Array&&!n.defaultSrc.includes(r)&&n.defaultSrc.push(r),(0,Zp.default)({directives:n})}var e_=(0,ie.forwardRef)((e,t)=>{let r=ii();return(0,An.jsx)("script",{suppressHydrationWarning:!0,...e,nonce:r,ref:t})});var kl=C(L());async function gh(e,t,r,n){let{nonce:o,header:a,NonceProvider:i}=hh(),s=await(0,mh.renderToReadableStream)((0,kl.jsx)(i,{children:(0,kl.jsx)(ss,{context:n,url:e.url})}),{nonce:o,signal:e.signal,onError(l){console.error(l),t=500}});return dd(e.headers.get("user-agent"))&&await s.allReady,r.set("Content-Type","text/html"),r.set("Content-Security-Policy",a),new Response(s,{headers:r,status:t})}var Ll={};ee(Ll,{ErrorBoundary:()=>Xx,default:()=>Uh,links:()=>Gx,loader:()=>Jx,shouldRevalidate:()=>Wx,useRootLoaderData:()=>Tr});var Pl=new TextEncoder,ux=async(e,t)=>{let r=await yh(t,["sign"]),n=Pl.encode(e),o=await crypto.subtle.sign("HMAC",r,n),a=btoa(String.fromCharCode(...new Uint8Array(o))).replace(/=+$/,"");return e+"."+a},cx=async(e,t)=>{let r=e.lastIndexOf("."),n=e.slice(0,r),o=e.slice(r+1),a=await yh(t,["verify"]),i=Pl.encode(n),s=dx(atob(o));return await crypto.subtle.verify("HMAC",a,s,i)?n:!1};async function yh(e,t){return await crypto.subtle.importKey("raw",Pl.encode(e),{name:"HMAC",hash:"SHA-256"},!1,t)}function dx(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}var vh=rl({sign:ux,unsign:cx}),wh=gl(vh),fx=hl(vh),f_=yl(fx),px=Error.prototype.toString;Error.prototype.toString=function(){return this.stack||px.call(this)};function bh({build:e,mode:t,poweredByHeader:r=!0,getLoadContext:n}){let o=fl(e,t);return async a=>{let i=n?await n(a):void 0,s=await o(a,i);return r&&s.headers.append("powered-by","Shopify, Hydrogen"),s}}function xh(e){let t=e.headers;return{requestGroupId:t.get("request-id"),buyerIp:t.get("oxygen-buyer-ip"),cookie:t.get("cookie"),purpose:t.get("purpose")}}var Sh="/build/_assets/favicon-UY3DMFQ6.ico";var Rh="/build/_assets/reset-DK44YGCY.css";var Eh="/build/_assets/app-GW3TBNE2.css";var Dl=C(Ee());var Bt=C(L());function si({children:e,heading:t,id:r="aside"}){return(0,Bt.jsxs)("div",{"aria-modal":!0,className:"overlay",id:r,role:"dialog",children:[(0,Bt.jsx)("button",{className:"close-outside",onClick:()=>{history.go(-1),window.location.hash=""}}),(0,Bt.jsxs)("aside",{children:[(0,Bt.jsxs)("header",{children:[(0,Bt.jsx)("h3",{children:t}),(0,Bt.jsx)(yx,{})]}),(0,Bt.jsx)("main",{children:e})]})]})}function yx(){return(0,Bt.jsx)("a",{className:"close",href:"#",onChange:()=>history.go(-1),children:"\xD7"})}var $n=C(L());function Ch({menu:e,shop:t}){return(0,$n.jsx)("footer",{className:"footer",children:e&&t?.primaryDomain?.url&&(0,$n.jsx)(vx,{menu:e,primaryDomainUrl:t.primaryDomain.url})})}function vx({menu:e,primaryDomainUrl:t}){let{publicStoreDomain:r}=Tr();return(0,$n.jsx)("nav",{className:"footer-menu",role:"navigation",children:(e||wx).items.map(n=>{if(!n.url)return null;let o=n.url.includes("myshopify.com")||n.url.includes(r)||n.url.includes(t)?new URL(n.url).pathname:n.url;return!o.startsWith("/")?(0,$n.jsx)("a",{href:o,rel:"noopener noreferrer",target:"_blank",children:n.title},n.id):(0,$n.jsx)(gt,{end:!0,prefetch:"intent",style:bx,to:o,children:n.title},n.id)})})}var wx={id:"gid://shopify/Menu/199655620664",items:[{id:"gid://shopify/MenuItem/461633060920",resourceId:"gid://shopify/ShopPolicy/23358046264",tags:[],title:"Privacy Policy",type:"SHOP_POLICY",url:"/policies/privacy-policy",items:[]},{id:"gid://shopify/MenuItem/461633093688",resourceId:"gid://shopify/ShopPolicy/23358013496",tags:[],title:"Refund Policy",type:"SHOP_POLICY",url:"/policies/refund-policy",items:[]},{id:"gid://shopify/MenuItem/461633126456",resourceId:"gid://shopify/ShopPolicy/23358111800",tags:[],title:"Shipping Policy",type:"SHOP_POLICY",url:"/policies/shipping-policy",items:[]},{id:"gid://shopify/MenuItem/461633159224",resourceId:"gid://shopify/ShopPolicy/23358079032",tags:[],title:"Terms of Service",type:"SHOP_POLICY",url:"/policies/terms-of-service",items:[]}]};function bx({isActive:e,isPending:t}){return{fontWeight:e?"bold":void 0,color:t?"grey":"white"}}var kh=C(Ee());var Se=C(L());function _h({header:e,isLoggedIn:t,cart:r}){let{shop:n,menu:o}=e;return(0,Se.jsxs)("header",{className:"header shadow-md bg-[#660066]",children:[(0,Se.jsx)(gt,{prefetch:"intent",to:"/",style:li,end:!0,children:(0,Se.jsx)("strong",{children:n.name})}),(0,Se.jsx)($l,{menu:o,viewport:"desktop",primaryDomainUrl:e.shop.primaryDomain.url}),(0,Se.jsx)(xx,{isLoggedIn:t,cart:r})]})}function $l({menu:e,primaryDomainUrl:t,viewport:r}){let{publicStoreDomain:n}=Tr(),o=`header-menu-${r}`;function a(i){r==="mobile"&&(i.preventDefault(),window.location.href=i.currentTarget.href)}return(0,Se.jsxs)("nav",{className:o,role:"navigation",children:[r==="mobile"&&(0,Se.jsx)(gt,{end:!0,onClick:a,prefetch:"intent",style:li,to:"/",children:"Home"}),(e||Cx).items.map(i=>{if(!i.url)return null;let s=i.url.includes("myshopify.com")||i.url.includes(n)||i.url.includes(t)?new URL(i.url).pathname:i.url;return(0,Se.jsx)(gt,{className:"header-menu-item",end:!0,onClick:a,prefetch:"intent",style:li,to:s,children:i.title},i.id)})]})}function xx({isLoggedIn:e,cart:t}){return(0,Se.jsxs)("nav",{className:"header-ctas",role:"navigation",children:[(0,Se.jsx)(Sx,{}),(0,Se.jsx)(gt,{prefetch:"intent",to:"/account",style:li,children:e?"Account":"Sign in"}),(0,Se.jsx)(Rx,{}),(0,Se.jsx)(Ex,{cart:t})]})}function Sx(){return(0,Se.jsx)("a",{className:"header-menu-mobile-toggle",href:"#mobile-menu-aside",children:(0,Se.jsx)("h3",{children:"\u2630"})})}function Rx(){return(0,Se.jsx)("a",{href:"#search-aside",children:"Search"})}function Al({count:e}){return(0,Se.jsxs)("a",{href:"#cart-aside",children:["Cart ",e]})}function Ex({cart:e}){return(0,Se.jsx)(kh.Suspense,{fallback:(0,Se.jsx)(Al,{count:0}),children:(0,Se.jsx)(ut,{resolve:e,children:t=>t?(0,Se.jsx)(Al,{count:t.totalQuantity||0}):(0,Se.jsx)(Al,{count:0})})})}var Cx={id:"gid://shopify/Menu/199655587896",items:[{id:"gid://shopify/MenuItem/461609500728",resourceId:null,tags:[],title:"Collections",type:"HTTP",url:"/collections",items:[]},{id:"gid://shopify/MenuItem/461609533496",resourceId:null,tags:[],title:"Blog",type:"HTTP",url:"/blogs/journal",items:[]},{id:"gid://shopify/MenuItem/461609566264",resourceId:null,tags:[],title:"Policies",type:"HTTP",url:"/policies",items:[]},{id:"gid://shopify/MenuItem/461609599032",resourceId:"gid://shopify/Page/92591030328",tags:[],title:"About",type:"PAGE",url:"/pages/about",items:[]}]};function li({isActive:e,isPending:t}){return{fontWeight:e?"bold":void 0,color:t?"#FF5858":"#9F77B4"}}var Ph=C(Ee());function ui(e,t){let{pathname:r}=we();return(0,Ph.useMemo)(()=>Tl({handle:e,pathname:r,searchParams:new URLSearchParams,selectedOptions:t}),[e,t,r])}function Tl({handle:e,pathname:t,searchParams:r,selectedOptions:n}){let o=/(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/g.exec(t),i=o&&o.length>0?`${o[0]}products/${e}`:`/products/${e}`;n.forEach(l=>{r.set(l.name,l.value)});let s=r.toString();return i+(s?"?"+r.toString():"")}var N=C(L());function ci({layout:e,cart:t}){let r=Boolean(t?.lines?.nodes?.length||0),o=`cart-main ${t&&Boolean(t.discountCodes.filter(a=>a.applicable).length)?"with-discount":""}`;return(0,N.jsxs)("div",{className:o,children:[(0,N.jsx)(Nx,{hidden:r,layout:e}),(0,N.jsx)(kx,{cart:t,layout:e})]})}function kx({layout:e,cart:t}){let r=!!t&&t.totalQuantity>0;return(0,N.jsxs)("div",{className:"cart-details",children:[(0,N.jsx)(_x,{lines:t?.lines,layout:e}),r&&(0,N.jsxs)($x,{cost:t.cost,layout:e,children:[(0,N.jsx)(Lx,{discountCodes:t.discountCodes}),(0,N.jsx)(Ax,{checkoutUrl:t.checkoutUrl})]})]})}function _x({lines:e,layout:t}){return e?(0,N.jsx)("div",{"aria-labelledby":"cart-lines",children:(0,N.jsx)("ul",{children:e.nodes.map(r=>(0,N.jsx)(Px,{line:r,layout:t},r.id))})}):null}function Px({layout:e,line:t}){let{id:r,merchandise:n}=t,{product:o,title:a,image:i,selectedOptions:s}=n,l=ui(o.handle,s);return(0,N.jsxs)("li",{className:"cart-line",children:[i&&(0,N.jsx)(Ce,{alt:a,aspectRatio:"1/1",data:i,height:100,loading:"lazy",width:100}),(0,N.jsxs)("div",{children:[(0,N.jsx)(B,{prefetch:"intent",to:l,onClick:()=>{e==="aside"&&(window.location.href=l)},children:(0,N.jsx)("p",{children:(0,N.jsx)("strong",{children:o.title})})}),(0,N.jsx)(Dx,{line:t,as:"span"}),(0,N.jsx)("ul",{children:s.map(u=>(0,N.jsx)("li",{children:(0,N.jsxs)("small",{children:[u.name,": ",u.value]})},u.name))}),(0,N.jsx)(Ix,{line:t})]})]},r)}function Ax({checkoutUrl:e}){return e?(0,N.jsxs)("div",{children:[(0,N.jsx)("a",{href:e,target:"_self",children:(0,N.jsx)("p",{children:"Continue to Checkout \u2192"})}),(0,N.jsx)("br",{})]}):null}function $x({cost:e,layout:t,children:r=null}){return(0,N.jsxs)("div",{"aria-labelledby":"cart-summary",className:t==="page"?"cart-summary-page":"cart-summary-aside",children:[(0,N.jsx)("h4",{children:"Totals"}),(0,N.jsxs)("dl",{className:"cart-subtotal",children:[(0,N.jsx)("dt",{children:"Subtotal"}),(0,N.jsx)("dd",{children:e?.subtotalAmount?.amount?(0,N.jsx)(xe,{data:e?.subtotalAmount}):"-"})]}),r]})}function Tx({lineIds:e}){return(0,N.jsx)(Oe,{route:"/cart",action:Oe.ACTIONS.LinesRemove,inputs:{lineIds:e},children:(0,N.jsx)("button",{type:"submit",children:"Remove"})})}function Ix({line:e}){if(!e||typeof e?.quantity>"u")return null;let{id:t,quantity:r}=e,n=Number(Math.max(0,r-1).toFixed(0)),o=Number((r+1).toFixed(0));return(0,N.jsxs)("div",{className:"cart-line-quantiy",children:[(0,N.jsxs)("small",{children:["Quantity: ",r," \xA0\xA0"]}),(0,N.jsx)($h,{lines:[{id:t,quantity:n}],children:(0,N.jsx)("button",{"aria-label":"Decrease quantity",disabled:r<=1,name:"decrease-quantity",value:n,children:(0,N.jsx)("span",{children:"\u2212 "})})}),"\xA0",(0,N.jsx)($h,{lines:[{id:t,quantity:o}],children:(0,N.jsx)("button",{"aria-label":"Increase quantity",name:"increase-quantity",value:o,children:(0,N.jsx)("span",{children:"+"})})}),"\xA0",(0,N.jsx)(Tx,{lineIds:[t]})]})}function Dx({line:e,priceType:t="regular",...r}){if(!e?.cost?.amountPerQuantity||!e?.cost?.totalAmount)return null;let n=t==="regular"?e.cost.totalAmount:e.cost.compareAtAmountPerQuantity;return n==null?null:(0,N.jsx)("div",{children:(0,N.jsx)(xe,{withoutTrailingZeros:!0,...r,data:n})})}function Nx({hidden:e=!1,layout:t="aside"}){return(0,N.jsxs)("div",{hidden:e,children:[(0,N.jsx)("br",{}),(0,N.jsx)("p",{children:"Looks like you haven\u2019t added anything yet, let\u2019s get you started!"}),(0,N.jsx)("br",{}),(0,N.jsx)(B,{to:"/collections",onClick:()=>{t==="aside"&&(window.location.href="/collections")},children:"Continue shopping \u2192"})]})}function Lx({discountCodes:e}){let t=e?.filter(r=>r.applicable)?.map(({code:r})=>r)||[];return(0,N.jsxs)("div",{children:[(0,N.jsx)("dl",{hidden:!t.length,children:(0,N.jsxs)("div",{children:[(0,N.jsx)("dt",{children:"Discount(s)"}),(0,N.jsx)(Ah,{children:(0,N.jsxs)("div",{className:"cart-discount",children:[(0,N.jsx)("code",{children:t?.join(", ")}),"\xA0",(0,N.jsx)("button",{children:"Remove"})]})})]})}),(0,N.jsx)(Ah,{discountCodes:t,children:(0,N.jsxs)("div",{children:[(0,N.jsx)("input",{type:"text",name:"discountCode",placeholder:"Discount code"}),"\xA0",(0,N.jsx)("button",{type:"submit",children:"Apply"})]})})]})}function Ah({discountCodes:e,children:t}){return(0,N.jsx)(Oe,{route:"/cart",action:Oe.ACTIONS.DiscountCodesUpdate,inputs:{discountCodes:e||[]},children:t})}function $h({children:e,lines:t}){return(0,N.jsx)(Oe,{route:"/cart",action:Oe.ACTIONS.LinesUpdate,inputs:{lines:t},children:e})}var fr=C(Ee()),O=C(L()),Il=[{type:"queries",items:[]},{type:"products",items:[]},{type:"collections",items:[]},{type:"pages",items:[]},{type:"articles",items:[]}];function Th({searchTerm:e}){let t=(0,fr.useRef)(null);return(0,fr.useEffect)(()=>{function r(n){n.key==="k"&&n.metaKey&&(n.preventDefault(),t.current?.focus()),n.key==="Escape"&&t.current?.blur()}return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[]),(0,O.jsxs)(Ue,{method:"get",children:[(0,O.jsx)("input",{defaultValue:e,name:"q",placeholder:"Search\u2026",ref:t,type:"search"}),"\xA0",(0,O.jsx)("button",{type:"submit",children:"Search"})]})}function Ih({results:e}){if(!e)return null;let t=Object.keys(e);return(0,O.jsx)("div",{children:e&&t.map(r=>{let n=e[r];if(n.nodes[0]?.__typename==="Page"){let o=n;return n.nodes.length?(0,O.jsx)(Ox,{pages:o},"pages"):null}if(n.nodes[0]?.__typename==="Product"){let o=n;return n.nodes.length?(0,O.jsx)(Ux,{products:o},"products"):null}if(n.nodes[0]?.__typename==="Article"){let o=n;return n.nodes.length?(0,O.jsx)(Fx,{articles:o},"articles"):null}return null})})}function Ux({products:e}){return(0,O.jsxs)("div",{className:"search-result",children:[(0,O.jsx)("h2",{children:"Products"}),(0,O.jsx)(_t,{connection:e,children:({nodes:t,isLoading:r,NextLink:n,PreviousLink:o})=>{let a=t.map(i=>(0,O.jsx)("div",{className:"search-results-item",children:(0,O.jsx)(B,{prefetch:"intent",to:`/products/${i.handle}`,children:(0,O.jsx)("span",{children:i.title})})},i.id));return(0,O.jsxs)("div",{children:[(0,O.jsx)("div",{children:(0,O.jsx)(o,{children:r?"Loading...":(0,O.jsx)("span",{children:"\u2191 Load previous"})})}),(0,O.jsxs)("div",{children:[a,(0,O.jsx)("br",{})]}),(0,O.jsx)("div",{children:(0,O.jsx)(n,{children:r?"Loading...":(0,O.jsx)("span",{children:"Load more \u2193"})})})]})}}),(0,O.jsx)("br",{})]})}function Ox({pages:e}){return(0,O.jsxs)("div",{className:"search-result",children:[(0,O.jsx)("h2",{children:"Pages"}),(0,O.jsx)("div",{children:e?.nodes?.map(t=>(0,O.jsx)("div",{className:"search-results-item",children:(0,O.jsx)(B,{prefetch:"intent",to:`/pages/${t.handle}`,children:t.title})},t.id))}),(0,O.jsx)("br",{})]})}function Fx({articles:e}){return(0,O.jsxs)("div",{className:"search-result",children:[(0,O.jsx)("h2",{children:"Articles"}),(0,O.jsx)("div",{children:e?.nodes?.map(t=>(0,O.jsx)("div",{className:"search-results-item",children:(0,O.jsx)(B,{prefetch:"intent",to:`/blog/${t.handle}`,children:t.title})},t.id))}),(0,O.jsx)("br",{})]})}function Dh(){return(0,O.jsx)("p",{children:"No results, try a different search."})}function Nh({action:e,children:t,className:r="predictive-search-form",method:n="POST",...o}){let a=gn(),i=no(),s=(0,fr.useRef)(null);function l(u){let c=e??"/api/predictive-search",d=a.locale?`/${a.locale}${c}`:c,p=u.target.value||"";i.submit({q:p,limit:"6"},{method:n,action:d})}return(0,fr.useEffect)(()=>{s?.current?.setAttribute("type","search")},[]),(0,O.jsx)(i.Form,{...o,className:r,onSubmit:u=>{u.preventDefault(),u.stopPropagation(),!(!s?.current||s.current.value==="")&&s.current.blur()},children:t({fetchResults:l,inputRef:s,fetcher:i})})}function Lh(){let{results:e,totalResults:t,searchInputRef:r,searchTerm:n}=qx();function o(a){r.current&&(r.current.blur(),r.current.value="",window.location.href=a.currentTarget.href)}return t?(0,O.jsxs)("div",{className:"predictive-search-results",children:[(0,O.jsx)("div",{children:e.map(({type:a,items:i})=>(0,O.jsx)(Hx,{goToSearchResult:o,items:i,searchTerm:n,type:a},a))}),n.current&&(0,O.jsx)(B,{onClick:o,to:`/search?q=${n.current}`,children:(0,O.jsxs)("p",{children:["View all results for ",(0,O.jsx)("q",{children:n.current}),"\xA0 \u2192"]})})]}):(0,O.jsx)(Mx,{searchTerm:n})}function Mx({searchTerm:e}){return e.current?(0,O.jsxs)("p",{children:["No results found for ",(0,O.jsx)("q",{children:e.current})]}):null}function Hx({goToSearchResult:e,items:t,searchTerm:r,type:n}){let o=n==="queries",a=`/search?q=${r.current}&type=${Vx(n)}`;return(0,O.jsxs)("div",{className:"predictive-search-result",children:[(0,O.jsx)(B,{prefetch:"intent",to:a,onClick:e,children:(0,O.jsx)("h5",{children:o?"Suggestions":n})}),(0,O.jsx)("ul",{children:t.map(i=>(0,O.jsx)(jx,{goToSearchResult:e,item:i},i.id))})]},n)}function jx({goToSearchResult:e,item:t}){return(0,O.jsx)("li",{className:"predictive-search-result-item",children:(0,O.jsxs)(B,{onClick:e,to:t.url,children:[t.image?.url&&(0,O.jsx)(Ce,{alt:t.image.altText??"",src:t.image.url,width:50,height:50}),(0,O.jsxs)("div",{children:[t.styledTitle?(0,O.jsx)("div",{dangerouslySetInnerHTML:{__html:t.styledTitle}}):(0,O.jsx)("span",{children:t.title}),t?.price&&(0,O.jsx)("small",{children:(0,O.jsx)(xe,{data:t.price})})]})]})},t.id)}function qx(){let e=Qn(),t=(0,fr.useRef)(""),r=(0,fr.useRef)(null),n=e.find(a=>a.data?.searchResults);n?.state==="loading"&&(t.current=n.formData?.get("q")||"");let o=n?.data?.searchResults||{results:Il,totalResults:0};return(0,fr.useEffect)(()=>{r.current||(r.current=document.querySelector('input[type="search"]'))},[]),{...o,searchInputRef:r,searchTerm:t}}function Vx(e){let t={articles:"ARTICLE",collections:"COLLECTION",pages:"PAGE",products:"PRODUCT",queries:"QUERY"};return typeof e=="string"?t[e]:e.map(r=>t[r]).join(",")}var fe=C(L());function Nl({cart:e,children:t=null,footer:r,header:n,isLoggedIn:o}){return(0,fe.jsxs)(fe.Fragment,{children:[(0,fe.jsx)(Bx,{cart:e}),(0,fe.jsx)(zx,{}),(0,fe.jsx)(Yx,{menu:n?.menu,shop:n?.shop}),n&&(0,fe.jsx)(_h,{header:n,cart:e,isLoggedIn:o}),(0,fe.jsx)("main",{children:t}),(0,fe.jsx)(Dl.Suspense,{children:(0,fe.jsx)(ut,{resolve:r,children:a=>(0,fe.jsx)(Ch,{menu:a?.menu,shop:n?.shop})})})]})}function Bx({cart:e}){return(0,fe.jsx)(si,{id:"cart-aside",heading:"CART",children:(0,fe.jsx)(Dl.Suspense,{fallback:(0,fe.jsx)("p",{children:"Loading cart ..."}),children:(0,fe.jsx)(ut,{resolve:e,children:t=>(0,fe.jsx)(ci,{cart:t,layout:"aside"})})})})}function zx(){return(0,fe.jsx)(si,{id:"search-aside",heading:"SEARCH",children:(0,fe.jsxs)("div",{className:"predictive-search",children:[(0,fe.jsx)("br",{}),(0,fe.jsx)(Nh,{children:({fetchResults:e,inputRef:t})=>(0,fe.jsxs)("div",{children:[(0,fe.jsx)("input",{name:"q",onChange:e,onFocus:e,placeholder:"Search",ref:t,type:"search"}),"\xA0",(0,fe.jsx)("button",{type:"submit",children:"Search"})]})}),(0,fe.jsx)(Lh,{})]})})}function Yx({menu:e,shop:t}){return e&&t?.primaryDomain?.url&&(0,fe.jsx)(si,{id:"mobile-menu-aside",heading:"MENU",children:(0,fe.jsx)($l,{menu:e,viewport:"mobile",primaryDomainUrl:t.primaryDomain.url})})}var ue=C(L()),Wx=({formMethod:e,currentUrl:t,nextUrl:r})=>!!(e&&e!=="GET"||t.toString()===r.toString());function Gx(){return[{rel:"stylesheet",href:Rh},{rel:"stylesheet",href:Eh},{rel:"preconnect",href:"https://cdn.shopify.com"},{rel:"preconnect",href:"https://shop.app"},{rel:"icon",type:"image/svg+xml",href:Sh}]}var Tr=()=>{let[e]=fa();return e?.data};async function Jx({context:e}){let{storefront:t,session:r,cart:n}=e,o=await r.get("customerAccessToken"),a=e.env.PUBLIC_STORE_DOMAIN,{isLoggedIn:i,headers:s}=await Kx(r,o),l=n.get(),u=t.query(Zx,{cache:t.CacheLong(),variables:{footerMenuHandle:"footer"}}),c=t.query(Qx,{cache:t.CacheLong(),variables:{headerMenuHandle:"main-menu"}});return Vt({cart:l,footer:u,header:await c,isLoggedIn:i,publicStoreDomain:a},{headers:s})}function Uh(){let e=ii(),t=se();return(0,ue.jsxs)("html",{lang:"en",children:[(0,ue.jsxs)("head",{children:[(0,ue.jsx)("meta",{charSet:"utf-8"}),(0,ue.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,ue.jsx)(ca,{}),(0,ue.jsx)(la,{})]}),(0,ue.jsxs)("body",{children:[(0,ue.jsx)(Nl,{...t,children:(0,ue.jsx)(rr,{})}),(0,ue.jsx)(ga,{nonce:e}),(0,ue.jsx)(da,{nonce:e}),(0,ue.jsx)(pa,{nonce:e})]})]})}function Xx(){let e=tr(),t=Tr(),r=ii(),n="Unknown error",o=500;return $e(e)?(n=e?.data?.message??e.data,o=e.status):e instanceof Error&&(n=e.message),(0,ue.jsxs)("html",{lang:"en",children:[(0,ue.jsxs)("head",{children:[(0,ue.jsx)("meta",{charSet:"utf-8"}),(0,ue.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,ue.jsx)(ca,{}),(0,ue.jsx)(la,{})]}),(0,ue.jsxs)("body",{children:[(0,ue.jsx)(Nl,{...t,children:(0,ue.jsxs)("div",{className:"route-error",children:[(0,ue.jsx)("h1",{children:"Oops"}),(0,ue.jsx)("h2",{children:o}),n&&(0,ue.jsx)("fieldset",{children:(0,ue.jsx)("pre",{children:n})})]})}),(0,ue.jsx)(ga,{nonce:r}),(0,ue.jsx)(da,{nonce:r}),(0,ue.jsx)(pa,{nonce:r})]})]})}async function Kx(e,t){let r=!1,n=new Headers;if(!t?.accessToken||!t?.expiresAt)return{isLoggedIn:r,headers:n};let o=new Date(t.expiresAt).getTime(),a=Date.now();return o<a?(e.unset("customerAccessToken"),n.append("Set-Cookie",await e.commit())):r=!0,{isLoggedIn:r,headers:n}}var Oh=`#graphql
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
  fragment ChildMenuItem on MenuItem {
    ...MenuItem
  }
  fragment ParentMenuItem on MenuItem {
    ...MenuItem
    items {
      ...ChildMenuItem
    }
  }
  fragment Menu on Menu {
    id
    items {
      ...ParentMenuItem
    }
  }
`,Qx=`#graphql
  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }
  query Header(
    $country: CountryCode
    $headerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    shop {
      ...Shop
    }
    menu(handle: $headerMenuHandle) {
      ...Menu
    }
  }
  ${Oh}
`,Zx=`#graphql
  query Footer(
    $country: CountryCode
    $footerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    menu(handle: $footerMenuHandle) {
      ...Menu
    }
  }
  ${Oh}
`;var Ul={};ee(Ul,{action:()=>rS,default:()=>Fh,loader:()=>tS,meta:()=>eS});var Ze=C(L()),eS=()=>[{title:"Activate Account"}];async function tS({context:e}){return await e.session.get("customerAccessToken")?z("/account"):k({})}async function rS({request:e,context:t,params:r}){let{session:n,storefront:o}=t,{id:a,activationToken:i}=r;if(e.method!=="POST")return k({error:"Method not allowed"},{status:405});try{if(!a||!i)throw new Error("Missing token. The link you followed might be wrong.");let s=await e.formData(),l=s.has("password")?String(s.get("password")):null,u=s.has("passwordConfirm")?String(s.get("passwordConfirm")):null;if(!(l&&u&&l===u))throw new Error("Passwords do not match");let{customerActivate:d}=await o.mutate(nS,{variables:{id:`gid://shopify/Customer/${a}`,input:{password:l,activationToken:i}}});if(d?.customerUserErrors?.length)throw new Error(d.customerUserErrors[0].message);let{customerAccessToken:p}=d??{};if(!p)throw new Error("Could not activate account.");return n.set("customerAccessToken",p),z("/account",{headers:{"Set-Cookie":await n.commit()}})}catch(s){return s instanceof Error?k({error:s.message},{status:400}):k({error:s},{status:400})}}function Fh(){let t=nt()?.error??null;return(0,Ze.jsxs)("div",{className:"account-activate",children:[(0,Ze.jsx)("h1",{children:"Activate Account."}),(0,Ze.jsx)("p",{children:"Create your password to activate your account."}),(0,Ze.jsxs)(Ue,{method:"POST",children:[(0,Ze.jsxs)("fieldset",{children:[(0,Ze.jsx)("label",{htmlFor:"password",children:"Password"}),(0,Ze.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",placeholder:"Password","aria-label":"Password",minLength:8,required:!0,autoFocus:!0}),(0,Ze.jsx)("label",{htmlFor:"passwordConfirm",children:"Re-enter password"}),(0,Ze.jsx)("input",{id:"passwordConfirm",name:"passwordConfirm",type:"password",autoComplete:"current-password",placeholder:"Re-enter password","aria-label":"Re-enter password",minLength:8,required:!0})]}),t?(0,Ze.jsx)("p",{children:(0,Ze.jsx)("mark",{children:(0,Ze.jsx)("small",{children:t})})}):(0,Ze.jsx)("br",{}),(0,Ze.jsx)("button",{className:"bg-primary text-contrast rounded py-2 px-4 focus:shadow-outline block w-full",type:"submit",children:"Save"})]})]})}var nS=`#graphql
  mutation customerActivate(
    $id: ID!,
    $input: CustomerActivateInput!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerActivate(id: $id, input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;var Ol={};ee(Ol,{default:()=>Mh,loader:()=>aS,meta:()=>oS});var nn=C(L()),oS=({data:e})=>[{title:`Hydrogen | ${e?.article.title??""} article`}];async function aS({params:e,context:t}){let{blogHandle:r,articleHandle:n}=e;if(!n||!r)throw new Response("Not found",{status:404});let{blog:o}=await t.storefront.query(iS,{variables:{blogHandle:r,articleHandle:n}});if(!o?.articleByHandle)throw new Response(null,{status:404});let a=o.articleByHandle;return k({article:a})}function Mh(){let{article:e}=se(),{title:t,image:r,contentHtml:n,author:o}=e,a=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(new Date(e.publishedAt));return(0,nn.jsxs)("div",{className:"article mt-6",children:[(0,nn.jsxs)("h1",{children:[t,(0,nn.jsxs)("span",{children:[a," \xB7 ",o?.name]})]}),r&&(0,nn.jsx)(Ce,{data:r,sizes:"90vw",loading:"eager"}),(0,nn.jsx)("div",{dangerouslySetInnerHTML:{__html:n},className:"article"})]})}var iS=`#graphql
  query Article(
    $articleHandle: String!
    $blogHandle: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    blog(handle: $blogHandle) {
      articleByHandle(handle: $articleHandle) {
        title
        contentHtml
        publishedAt
        author: authorV2 {
          name
        }
        image {
          id
          altText
          url
          width
          height
        }
        seo {
          description
          title
        }
      }
    }
  }
`;var Fl={};ee(Fl,{action:()=>lS,default:()=>Hh,meta:()=>sS});var Ve=C(L()),sS=()=>[{title:"Reset Password"}];async function lS({request:e,context:t,params:r}){if(e.method!=="POST")return k({error:"Method not allowed"},{status:405});let{id:n,resetToken:o}=r,{session:a,storefront:i}=t;try{if(!n||!o)throw new Error("customer token or id not found");let s=await e.formData(),l=s.has("password")?String(s.get("password")):"",u=s.has("passwordConfirm")?String(s.get("passwordConfirm")):"";if(Boolean(l&&u)&&l!==u)throw new Error("Please provide matching passwords");let{customerReset:d}=await i.mutate(uS,{variables:{id:`gid://shopify/Customer/${n}`,input:{password:l,resetToken:o}}});if(d?.customerUserErrors?.length)throw new Error(d?.customerUserErrors[0].message);if(!d?.customerAccessToken)throw new Error("Access token not found. Please try again.");return a.set("customerAccessToken",d.customerAccessToken),z("/account",{headers:{"Set-Cookie":await a.commit()}})}catch(s){return s instanceof Error?k({error:s.message},{status:400}):k({error:s},{status:400})}}function Hh(){let e=nt();return(0,Ve.jsxs)("div",{className:"account-reset",children:[(0,Ve.jsx)("h1",{children:"Reset Password."}),(0,Ve.jsx)("p",{children:"Enter a new password for your account."}),(0,Ve.jsxs)(Ue,{method:"POST",children:[(0,Ve.jsxs)("fieldset",{children:[(0,Ve.jsx)("label",{htmlFor:"password",children:"Password"}),(0,Ve.jsx)("input",{"aria-label":"Password",autoComplete:"current-password",autoFocus:!0,id:"password",minLength:8,name:"password",placeholder:"Password",required:!0,type:"password"}),(0,Ve.jsx)("label",{htmlFor:"passwordConfirm",children:"Re-enter password"}),(0,Ve.jsx)("input",{"aria-label":"Re-enter password",autoComplete:"current-password",id:"passwordConfirm",minLength:8,name:"passwordConfirm",placeholder:"Re-enter password",required:!0,type:"password"})]}),e?.error?(0,Ve.jsx)("p",{children:(0,Ve.jsx)("mark",{children:(0,Ve.jsx)("small",{children:e.error})})}):(0,Ve.jsx)("br",{}),(0,Ve.jsx)("button",{type:"submit",children:"Reset"})]}),(0,Ve.jsx)("br",{}),(0,Ve.jsx)("p",{children:(0,Ve.jsx)("a",{href:"/account/login",children:"Back to login \u2192"})})]})}var uS=`#graphql
  mutation customerReset(
    $id: ID!,
    $input: CustomerResetInput!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerReset(id: $id, input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;var Ml={};ee(Ml,{default:()=>jh,loader:()=>dS,meta:()=>cS});var Fe=C(L()),cS=({data:e})=>[{title:`Hydrogen | ${e?.blog.title??""} blog`}],dS=async({request:e,params:t,context:{storefront:r}})=>{let n=Pt(e,{pageBy:4});if(!t.blogHandle)throw new Response("blog not found",{status:404});let{blog:o}=await r.query(pS,{variables:{blogHandle:t.blogHandle,...n}});if(!o?.articles)throw new Response("Not found",{status:404});return k({blog:o})};function jh(){let{blog:e}=se(),{articles:t}=e;return(0,Fe.jsxs)("div",{className:"blog mt-6",children:[(0,Fe.jsx)("h1",{children:e.title}),(0,Fe.jsx)("div",{className:"blog-grid",children:(0,Fe.jsx)(_t,{connection:t,children:({nodes:r,isLoading:n,PreviousLink:o,NextLink:a})=>(0,Fe.jsxs)(Fe.Fragment,{children:[(0,Fe.jsx)(o,{children:n?"Loading...":(0,Fe.jsx)("span",{children:"\u2191 Load previous"})}),r.map((i,s)=>(0,Fe.jsx)(fS,{article:i,loading:s<2?"eager":"lazy"},i.id)),(0,Fe.jsx)(a,{children:n?"Loading...":(0,Fe.jsx)("span",{children:"Load more \u2193"})})]})})})]})}function fS({article:e,loading:t}){let r=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(new Date(e.publishedAt));return(0,Fe.jsx)("div",{className:"blog-article",children:(0,Fe.jsxs)(B,{to:`/blogs/${e.blog.handle}/${e.handle}`,children:[e.image&&(0,Fe.jsx)("div",{className:"blog-article-image",children:(0,Fe.jsx)(Ce,{alt:e.image.altText||e.title,aspectRatio:"3/2",data:e.image,loading:t,sizes:"(min-width: 768px) 50vw, 100vw"})}),(0,Fe.jsx)("h3",{children:e.title}),(0,Fe.jsx)("small",{children:r})]})},e.id)}var pS=`#graphql
  query Blog(
    $language: LanguageCode
    $blogHandle: String!
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(language: $language) {
    blog(handle: $blogHandle) {
      title
      seo {
        title
        description
      }
      articles(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ArticleItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          hasNextPage
          endCursor
          startCursor
        }

      }
    }
  }
  fragment ArticleItem on Article {
    author: authorV2 {
      name
    }
    contentHtml
    handle
    id
    image {
      id
      altText
      url
      width
      height
    }
    publishedAt
    title
    blog {
      handle
    }
  }
`;var Hl={};ee(Hl,{CUSTOMER_FRAGMENT:()=>Bh,default:()=>qh,loader:()=>mS,meta:()=>hS});var re=C(L()),hS=()=>[{title:"Orders"}];async function mS({request:e,context:t}){let{session:r,storefront:n}=t,o=await r.get("customerAccessToken");if(!o?.accessToken)return z("/account/login");try{let a=Pt(e,{pageBy:20}),{customer:i}=await n.query(wS,{variables:{customerAccessToken:o.accessToken,country:n.i18n.country,language:n.i18n.language,...a},cache:n.CacheNone()});if(!i)throw new Error("Customer not found");return k({customer:i})}catch(a){return a instanceof Error?k({error:a.message},{status:400}):k({error:a},{status:400})}}function qh(){let{customer:e}=se(),{orders:t,numberOfOrders:r}=e;return(0,re.jsxs)("div",{className:"orders",children:[(0,re.jsxs)("h2",{children:["Orders ",(0,re.jsxs)("small",{children:["(",r,")"]})]}),(0,re.jsx)("br",{}),t.nodes.length?(0,re.jsx)(gS,{orders:t}):(0,re.jsx)(Vh,{})]})}function gS({orders:e}){return(0,re.jsx)("div",{className:"acccount-orders",children:e?.nodes.length?(0,re.jsx)(_t,{connection:e,children:({nodes:t,isLoading:r,PreviousLink:n,NextLink:o})=>(0,re.jsxs)(re.Fragment,{children:[(0,re.jsx)(n,{children:r?"Loading...":(0,re.jsx)("span",{children:"\u2191 Load previous"})}),t.map(a=>(0,re.jsx)(yS,{order:a},a.id)),(0,re.jsx)(o,{children:r?"Loading...":(0,re.jsx)("span",{children:"Load more \u2193"})})]})}):(0,re.jsx)(Vh,{})})}function Vh(){return(0,re.jsxs)("div",{children:[(0,re.jsx)("p",{children:"You haven't placed any orders yet."}),(0,re.jsx)("br",{}),(0,re.jsx)("p",{children:(0,re.jsx)(B,{to:"/collections",children:"Start Shopping \u2192"})})]})}function yS({order:e}){return(0,re.jsxs)(re.Fragment,{children:[(0,re.jsxs)("fieldset",{children:[(0,re.jsx)(B,{to:`/account/orders/${e.id}`,children:(0,re.jsxs)("strong",{children:["#",e.orderNumber]})}),(0,re.jsx)("p",{children:new Date(e.processedAt).toDateString()}),(0,re.jsx)("p",{children:e.financialStatus}),(0,re.jsx)("p",{children:e.fulfillmentStatus}),(0,re.jsx)(xe,{data:e.currentTotalPrice}),(0,re.jsx)(B,{to:`/account/orders/${btoa(e.id)}`,children:"View Order \u2192"})]}),(0,re.jsx)("br",{})]})}var vS=`#graphql
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
`,Bh=`#graphql
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
  ${vS}
`,wS=`#graphql
  ${Bh}
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
`;var jl={};ee(jl,{action:()=>bS,normalizePredictiveSearchResults:()=>Yh});var zh=["ARTICLE","COLLECTION","PAGE","PRODUCT","QUERY"];async function bS({request:e,params:t,context:r}){if(e.method!=="POST")throw new Error("Invalid request method");let n=await xS({params:t,request:e,context:r});return k(n)}async function xS({params:e,request:t,context:r}){let n=new URL(t.url),o=new URLSearchParams(n.search),a;try{a=await t.formData()}catch{}let i=String(a?.get("q")||o.get("q")||""),s=Number(a?.get("limit")||o.get("limit")||10),l=String(a?.get("type")||o.get("type")||"ANY"),u=l==="ANY"?zh:l.split(",").map(p=>p.toUpperCase()).filter(p=>zh.includes(p));if(!i)return{searchResults:{results:null,totalResults:0},searchTerm:i,searchTypes:u};let c=await r.storefront.query(SS,{variables:{limit:s,limitScope:"EACH",searchTerm:i,types:u}});if(!c)throw new Error("No data returned from Shopify API");return{searchResults:Yh(c.predictiveSearch,e.locale),searchTerm:i,searchTypes:u}}function Yh(e,t){let r=0;if(!e)return{results:Il,totalResults:r};function n(i,s){return s?i.trackingParameters?`?${s}&${i.trackingParameters}`:`?${s}`:i.trackingParameters?`?${i.trackingParameters}`:""}let o=t?`/${t}`:"",a=[];return e.queries.length&&a.push({type:"queries",items:e.queries.map(i=>{let s=n(i,`q=${encodeURIComponent(i.text)}`);return r++,{__typename:i.__typename,handle:"",id:i.text,image:void 0,title:i.text,styledTitle:i.styledText,url:`${o}/search${s}`}})}),e.products.length&&a.push({type:"products",items:e.products.map(i=>{r++;let s=n(i);return{__typename:i.__typename,handle:i.handle,id:i.id,image:i.variants?.nodes?.[0]?.image,title:i.title,url:`${o}/products/${i.handle}${s}`,price:i.variants.nodes[0].price}})}),e.collections.length&&a.push({type:"collections",items:e.collections.map(i=>{r++;let s=n(i);return{__typename:i.__typename,handle:i.handle,id:i.id,image:i.image,title:i.title,url:`${o}/collections/${i.handle}${s}`}})}),e.pages.length&&a.push({type:"pages",items:e.pages.map(i=>{r++;let s=n(i);return{__typename:i.__typename,handle:i.handle,id:i.id,image:void 0,title:i.title,url:`${o}/pages/${i.handle}${s}`}})}),e.articles.length&&a.push({type:"articles",items:e.articles.map(i=>{r++;let s=n(i);return{__typename:i.__typename,handle:i.handle,id:i.id,image:i.image,title:i.title,url:`${o}/blog/${i.handle}${s}`}})}),{results:a,totalResults:r}}var SS=`#graphql
  fragment PredictiveArticle on Article {
    __typename
    id
    title
    handle
    image {
      url
      altText
      width
      height
    }
    trackingParameters
  }
  fragment PredictiveCollection on Collection {
    __typename
    id
    title
    handle
    image {
      url
      altText
      width
      height
    }
    trackingParameters
  }
  fragment PredictivePage on Page {
    __typename
    id
    title
    handle
    trackingParameters
  }
  fragment PredictiveProduct on Product {
    __typename
    id
    title
    handle
    trackingParameters
    variants(first: 1) {
      nodes {
        id
        image {
          url
          altText
          width
          height
        }
        price {
          amount
          currencyCode
        }
      }
    }
  }
  fragment PredictiveQuery on SearchQuerySuggestion {
    __typename
    text
    styledText
    trackingParameters
  }
  query predictiveSearch(
    $country: CountryCode
    $language: LanguageCode
    $limit: Int!
    $limitScope: PredictiveSearchLimitScope!
    $searchTerm: String!
    $types: [PredictiveSearchType!]
  ) @inContext(country: $country, language: $language) {
    predictiveSearch(
      limit: $limit,
      limitScope: $limitScope,
      query: $searchTerm,
      types: $types,
    ) {
      articles {
        ...PredictiveArticle
      }
      collections {
        ...PredictiveCollection
      }
      pages {
        ...PredictivePage
      }
      products {
        ...PredictiveProduct
      }
      queries {
        ...PredictiveQuery
      }
    }
  }
`;var ql={};ee(ql,{default:()=>Wh,loader:()=>ES,meta:()=>RS});var ke=C(L()),RS=({data:e})=>[{title:`Hydrogen | ${e?.collection.title??""} Collection`}];async function ES({request:e,params:t,context:r}){let{handle:n}=t,{storefront:o}=r,a=Pt(e,{pageBy:8});if(!n)return z("/collections");let{collection:i}=await o.query(PS,{variables:{handle:n,...a}});if(!i)throw new Response(`Collection ${n} not found`,{status:404});return k({collection:i})}function Wh(){let{collection:e}=se();return(0,ke.jsxs)("div",{className:"collection mt-6",children:[(0,ke.jsx)("h1",{children:e.title}),(0,ke.jsx)("p",{className:"collection-description",children:e.description}),(0,ke.jsx)(_t,{connection:e.products,children:({nodes:t,isLoading:r,PreviousLink:n,NextLink:o})=>(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsx)(n,{children:r?"Loading...":(0,ke.jsx)("span",{children:"\u2191 Load previous"})}),(0,ke.jsx)(CS,{products:t}),(0,ke.jsx)("br",{}),(0,ke.jsx)(o,{children:r?"Loading...":(0,ke.jsx)("span",{children:"Load more \u2193"})})]})})]})}function CS({products:e}){return(0,ke.jsx)("div",{className:"products-grid",children:e.map((t,r)=>(0,ke.jsx)(kS,{product:t,loading:r<8?"eager":void 0},t.id))})}function kS({product:e,loading:t}){let r=e.variants.nodes[0],n=ui(e.handle,r.selectedOptions);return(0,ke.jsxs)(B,{className:"product-item",prefetch:"intent",to:n,children:[e.featuredImage&&(0,ke.jsx)(Ce,{alt:e.featuredImage.altText||e.title,aspectRatio:"1/1",data:e.featuredImage,loading:t,sizes:"(min-width: 45em) 400px, 100vw"}),(0,ke.jsx)("h4",{children:e.title}),(0,ke.jsx)("small",{children:(0,ke.jsx)(xe,{data:e.priceRange.minVariantPrice})})]},e.id)}var _S=`#graphql
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
`,PS=`#graphql
  ${_S}
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
`;var Vl={};ee(Vl,{default:()=>Gh,loader:()=>$S,meta:()=>AS});var $=C(L()),AS=({data:e})=>[{title:`Order ${e?.order?.name}`}];async function $S({params:e,context:t}){let{session:r,storefront:n}=t;if(!e.id)return z("/account/orders");let o=atob(e.id);if(!await r.get("customerAccessToken"))return z("/account/login");let{order:i}=await n.query(IS,{variables:{orderId:o}});if(!i||!("lineItems"in i))throw new Response("Order not found",{status:404});let s=ft(i.lineItems),u=ft(i.discountApplications)[0]?.value,c=u?.__typename==="MoneyV2"&&u,d=u?.__typename==="PricingPercentageValue"&&u?.percentage;return k({order:i,lineItems:s,discountValue:c,discountPercentage:d})}function Gh(){let{order:e,lineItems:t,discountValue:r,discountPercentage:n}=se();return(0,$.jsxs)("div",{className:"account-order",children:[(0,$.jsxs)("h2",{children:["Order ",e.name]}),(0,$.jsxs)("p",{children:["Placed on ",new Date(e.processedAt).toDateString()]}),(0,$.jsx)("br",{}),(0,$.jsxs)("div",{children:[(0,$.jsxs)("table",{children:[(0,$.jsx)("thead",{children:(0,$.jsxs)("tr",{children:[(0,$.jsx)("th",{scope:"col",children:"Product"}),(0,$.jsx)("th",{scope:"col",children:"Price"}),(0,$.jsx)("th",{scope:"col",children:"Quantity"}),(0,$.jsx)("th",{scope:"col",children:"Total"})]})}),(0,$.jsx)("tbody",{children:t.map((o,a)=>(0,$.jsx)(TS,{lineItem:o},a))}),(0,$.jsxs)("tfoot",{children:[(r&&r.amount||n)&&(0,$.jsxs)("tr",{children:[(0,$.jsx)("th",{scope:"row",colSpan:3,children:(0,$.jsx)("p",{children:"Discounts"})}),(0,$.jsx)("th",{scope:"row",children:(0,$.jsx)("p",{children:"Discounts"})}),(0,$.jsx)("td",{children:n?(0,$.jsxs)("span",{children:["-",n,"% OFF"]}):r&&(0,$.jsx)(xe,{data:r})})]}),(0,$.jsxs)("tr",{children:[(0,$.jsx)("th",{scope:"row",colSpan:3,children:(0,$.jsx)("p",{children:"Subtotal"})}),(0,$.jsx)("th",{scope:"row",children:(0,$.jsx)("p",{children:"Subtotal"})}),(0,$.jsx)("td",{children:(0,$.jsx)(xe,{data:e.subtotalPriceV2})})]}),(0,$.jsxs)("tr",{children:[(0,$.jsx)("th",{scope:"row",colSpan:3,children:"Tax"}),(0,$.jsx)("th",{scope:"row",children:(0,$.jsx)("p",{children:"Tax"})}),(0,$.jsx)("td",{children:(0,$.jsx)(xe,{data:e.totalTaxV2})})]}),(0,$.jsxs)("tr",{children:[(0,$.jsx)("th",{scope:"row",colSpan:3,children:"Total"}),(0,$.jsx)("th",{scope:"row",children:(0,$.jsx)("p",{children:"Total"})}),(0,$.jsx)("td",{children:(0,$.jsx)(xe,{data:e.totalPriceV2})})]})]})]}),(0,$.jsxs)("div",{children:[(0,$.jsx)("h3",{children:"Shipping Address"}),e?.shippingAddress?(0,$.jsxs)("address",{children:[(0,$.jsxs)("p",{children:[e.shippingAddress.firstName&&e.shippingAddress.firstName+" ",e.shippingAddress.lastName]}),e?.shippingAddress?.formatted?e.shippingAddress.formatted.map(o=>(0,$.jsx)("p",{children:o},o)):(0,$.jsx)($.Fragment,{})]}):(0,$.jsx)("p",{children:"No shipping address defined"}),(0,$.jsx)("h3",{children:"Status"}),(0,$.jsx)("div",{children:(0,$.jsx)("p",{children:e.fulfillmentStatus})})]})]}),(0,$.jsx)("br",{}),(0,$.jsx)("p",{children:(0,$.jsx)("a",{target:"_blank",href:e.statusUrl,rel:"noreferrer",children:"View Order Status \u2192"})})]})}function TS({lineItem:e}){return(0,$.jsxs)("tr",{children:[(0,$.jsx)("td",{children:(0,$.jsxs)("div",{children:[(0,$.jsx)(B,{to:`/products/${e.variant.product.handle}`,children:e?.variant?.image&&(0,$.jsx)("div",{children:(0,$.jsx)(Ce,{data:e.variant.image,width:96,height:96})})}),(0,$.jsxs)("div",{children:[(0,$.jsx)("p",{children:e.title}),(0,$.jsx)("small",{children:e.variant.title})]})]})}),(0,$.jsx)("td",{children:(0,$.jsx)(xe,{data:e.variant.price})}),(0,$.jsx)("td",{children:e.quantity}),(0,$.jsx)("td",{children:(0,$.jsx)(xe,{data:e.discountedTotalPrice})})]},e.variant.id)}var IS=`#graphql
  fragment OrderMoney on MoneyV2 {
    amount
    currencyCode
  }
  fragment AddressFull on MailingAddress {
    address1
    address2
    city
    company
    country
    countryCodeV2
    firstName
    formatted
    id
    lastName
    name
    phone
    province
    provinceCode
    zip
  }
  fragment DiscountApplication on DiscountApplication {
    value {
      __typename
      ... on MoneyV2 {
        ...OrderMoney
      }
      ... on PricingPercentageValue {
        percentage
      }
    }
  }
  fragment OrderLineProductVariant on ProductVariant {
    id
    image {
      altText
      height
      url
      id
      width
    }
    price {
      ...OrderMoney
    }
    product {
      handle
    }
    sku
    title
  }
  fragment OrderLineItemFull on OrderLineItem {
    title
    quantity
    discountAllocations {
      allocatedAmount {
        ...OrderMoney
      }
      discountApplication {
        ...DiscountApplication
      }
    }
    originalTotalPrice {
      ...OrderMoney
    }
    discountedTotalPrice {
      ...OrderMoney
    }
    variant {
      ...OrderLineProductVariant
    }
  }
  fragment Order on Order {
    id
    name
    orderNumber
    statusUrl
    processedAt
    fulfillmentStatus
    totalTaxV2 {
      ...OrderMoney
    }
    totalPriceV2 {
      ...OrderMoney
    }
    subtotalPriceV2 {
      ...OrderMoney
    }
    shippingAddress {
      ...AddressFull
    }
    discountApplications(first: 100) {
      nodes {
        ...DiscountApplication
      }
    }
    lineItems(first: 100) {
      nodes {
        ...OrderLineItemFull
      }
    }
  }
  query Order(
    $country: CountryCode
    $language: LanguageCode
    $orderId: ID!
  ) @inContext(country: $country, language: $language) {
    order: node(id: $orderId) {
      ... on Order {
        ...Order
      }
    }
  }
`;var Bl={};ee(Bl,{default:()=>Jh,loader:()=>DS});var et=C(L());async function DS({context:e,request:t}){let r=Pt(t,{pageBy:4}),{collections:n}=await e.storefront.query(US,{variables:r});return k({collections:n})}function Jh(){let{collections:e}=se();return(0,et.jsxs)("div",{className:"collections mt-6",children:[(0,et.jsx)("h1",{children:"Collections"}),(0,et.jsx)(_t,{connection:e,children:({nodes:t,isLoading:r,PreviousLink:n,NextLink:o})=>(0,et.jsxs)("div",{children:[(0,et.jsx)(n,{children:r?"Loading...":(0,et.jsx)("span",{children:"\u2191 Load previous"})}),(0,et.jsx)(NS,{collections:t}),(0,et.jsx)(o,{children:r?"Loading...":(0,et.jsx)("span",{children:"Load more \u2193"})})]})})]})}function NS({collections:e}){return(0,et.jsx)("div",{className:"collections-grid",children:e.map((t,r)=>(0,et.jsx)(LS,{collection:t,index:r},t.id))})}function LS({collection:e,index:t}){return(0,et.jsxs)(B,{className:"collection-item",to:`/collections/${e.handle}`,prefetch:"intent",children:[e?.image&&(0,et.jsx)(Ce,{alt:e.image.altText||e.title,aspectRatio:"1/1",data:e.image,loading:t<3?"eager":void 0}),(0,et.jsx)("h5",{children:e.title})]},e.id)}var US=`#graphql
  fragment Collection on Collection {
    id
    title
    handle
    image {
      id
      url
      altText
      width
      height
    }
  }
  query StoreCollections(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    collections(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...Collection
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;var Yl={};ee(Yl,{AddressForm:()=>zl,action:()=>MS,default:()=>Kh,loader:()=>FS,meta:()=>OS});var j=C(L()),OS=()=>[{title:"Addresses"}];async function FS({context:e}){let{session:t}=e;return await t.get("customerAccessToken")?k({}):z("/account/login")}async function MS({request:e,context:t}){let{storefront:r,session:n}=t;try{let o=await e.formData(),a=o.has("addressId")?String(o.get("addressId")):null;if(!a)throw new Error("You must provide an address id.");let i=await n.get("customerAccessToken");if(!i)return k({error:{[a]:"Unauthorized"}},{status:401});let{accessToken:s}=i,l=o.has("defaultAddress")?String(o.get("defaultAddress"))==="on":null,u={},c=["address1","address2","city","company","country","firstName","lastName","phone","province","zip"];for(let d of c){let p=o.get(d);typeof p=="string"&&(u[d]=p)}switch(e.method){case"POST":try{let{customerAddressCreate:d}=await r.mutate(BS,{variables:{customerAccessToken:s,address:u}});if(d?.customerUserErrors?.length){let m=d.customerUserErrors[0];throw new Error(m.message)}let p=d?.customerAddress;if(!p?.id)throw new Error("Expected customer address to be created, but the id is missing");if(l){let m=decodeURIComponent(p.id),{customerDefaultAddressUpdate:f}=await r.mutate(Xh,{variables:{customerAccessToken:s,addressId:m}});if(f?.customerUserErrors?.length){let y=f.customerUserErrors[0];throw new Error(y.message)}}return k({error:null,createdAddress:p,defaultAddress:l})}catch(d){return d instanceof Error?k({error:{[a]:d.message}},{status:400}):k({error:{[a]:d}},{status:400})}case"PUT":try{let{customerAddressUpdate:d}=await r.mutate(qS,{variables:{address:u,customerAccessToken:s,id:decodeURIComponent(a)}}),p=d?.customerAddress;if(d?.customerUserErrors?.length){let m=d.customerUserErrors[0];throw new Error(m.message)}if(l){let{customerDefaultAddressUpdate:m}=await r.mutate(Xh,{variables:{customerAccessToken:s,addressId:decodeURIComponent(a)}});if(m?.customerUserErrors?.length){let f=m.customerUserErrors[0];throw new Error(f.message)}}return k({error:null,updatedAddress:p,defaultAddress:l})}catch(d){return d instanceof Error?k({error:{[a]:d.message}},{status:400}):k({error:{[a]:d}},{status:400})}case"DELETE":try{let{customerAddressDelete:d}=await r.mutate(VS,{variables:{customerAccessToken:s,id:a}});if(d?.customerUserErrors?.length){let p=d.customerUserErrors[0];throw new Error(p.message)}return k({error:null,deletedAddress:a})}catch(d){return d instanceof Error?k({error:{[a]:d.message}},{status:400}):k({error:{[a]:d}},{status:400})}default:return k({error:{[a]:"Method not allowed"}},{status:405})}}catch(o){return o instanceof Error?k({error:o.message},{status:400}):k({error:o},{status:400})}}function Kh(){let{customer:e}=br(),{defaultAddress:t,addresses:r}=e;return(0,j.jsxs)("div",{className:"account-addresses",children:[(0,j.jsx)("h2",{children:"Addresses"}),(0,j.jsx)("br",{}),r.nodes.length?(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("legend",{children:"Create address"}),(0,j.jsx)(HS,{})]}),(0,j.jsx)("br",{}),(0,j.jsx)("hr",{}),(0,j.jsx)("br",{}),(0,j.jsx)(jS,{addresses:r,defaultAddress:t})]}):(0,j.jsx)("p",{children:"You have no addresses saved."})]})}function HS(){return(0,j.jsx)(zl,{address:{address1:"",address2:"",city:"",company:"",country:"",firstName:"",id:"new",lastName:"",phone:"",province:"",zip:""},defaultAddress:null,children:({stateForMethod:t})=>(0,j.jsx)("div",{children:(0,j.jsx)("button",{disabled:t("POST")!=="idle",formMethod:"POST",type:"submit",children:t("POST")!=="idle"?"Creating":"Create"})})})}function jS({addresses:e,defaultAddress:t}){return(0,j.jsxs)("div",{children:[(0,j.jsx)("legend",{children:"Existing addresses"}),e.nodes.map(r=>(0,j.jsx)(zl,{address:r,defaultAddress:t,children:({stateForMethod:n})=>(0,j.jsxs)("div",{children:[(0,j.jsx)("button",{disabled:n("PUT")!=="idle",formMethod:"PUT",type:"submit",children:n("PUT")!=="idle"?"Saving":"Save"}),(0,j.jsx)("button",{disabled:n("DELETE")!=="idle",formMethod:"DELETE",type:"submit",children:n("DELETE")!=="idle"?"Deleting":"Delete"})]})},r.id))]})}function zl({address:e,defaultAddress:t,children:r}){let{state:n,formMethod:o}=lt(),i=nt()?.error?.[e.id],s=t?.id===e.id;return(0,j.jsx)(Ue,{id:e.id,children:(0,j.jsxs)("fieldset",{children:[(0,j.jsx)("input",{type:"hidden",name:"addressId",defaultValue:e.id}),(0,j.jsx)("label",{htmlFor:"firstName",children:"First name*"}),(0,j.jsx)("input",{"aria-label":"First name",autoComplete:"given-name",defaultValue:e?.firstName??"",id:"firstName",name:"firstName",placeholder:"First name",required:!0,type:"text"}),(0,j.jsx)("label",{htmlFor:"lastName",children:"Last name*"}),(0,j.jsx)("input",{"aria-label":"Last name",autoComplete:"family-name",defaultValue:e?.lastName??"",id:"lastName",name:"lastName",placeholder:"Last name",required:!0,type:"text"}),(0,j.jsx)("label",{htmlFor:"company",children:"Company"}),(0,j.jsx)("input",{"aria-label":"Company",autoComplete:"organization",defaultValue:e?.company??"",id:"company",name:"company",placeholder:"Company",type:"text"}),(0,j.jsx)("label",{htmlFor:"address1",children:"Address line*"}),(0,j.jsx)("input",{"aria-label":"Address line 1",autoComplete:"address-line1",defaultValue:e?.address1??"",id:"address1",name:"address1",placeholder:"Address line 1*",required:!0,type:"text"}),(0,j.jsx)("label",{htmlFor:"address2",children:"Address line 2"}),(0,j.jsx)("input",{"aria-label":"Address line 2",autoComplete:"address-line2",defaultValue:e?.address2??"",id:"address2",name:"address2",placeholder:"Address line 2",type:"text"}),(0,j.jsx)("label",{htmlFor:"city",children:"City*"}),(0,j.jsx)("input",{"aria-label":"City",autoComplete:"address-level2",defaultValue:e?.city??"",id:"city",name:"city",placeholder:"City",required:!0,type:"text"}),(0,j.jsx)("label",{htmlFor:"province",children:"State / Province*"}),(0,j.jsx)("input",{"aria-label":"State",autoComplete:"address-level1",defaultValue:e?.province??"",id:"province",name:"province",placeholder:"State / Province",required:!0,type:"text"}),(0,j.jsx)("label",{htmlFor:"zip",children:"Zip / Postal Code*"}),(0,j.jsx)("input",{"aria-label":"Zip",autoComplete:"postal-code",defaultValue:e?.zip??"",id:"zip",name:"zip",placeholder:"Zip / Postal Code",required:!0,type:"text"}),(0,j.jsx)("label",{htmlFor:"country",children:"Country*"}),(0,j.jsx)("input",{"aria-label":"Country",autoComplete:"country-name",defaultValue:e?.country??"",id:"country",name:"country",placeholder:"Country",required:!0,type:"text"}),(0,j.jsx)("label",{htmlFor:"phone",children:"Phone"}),(0,j.jsx)("input",{"aria-label":"Phone",autoComplete:"tel",defaultValue:e?.phone??"",id:"phone",name:"phone",placeholder:"+16135551111",pattern:"^\\+?[1-9]\\d{3,14}$",type:"tel"}),(0,j.jsxs)("div",{children:[(0,j.jsx)("input",{defaultChecked:s,id:"defaultAddress",name:"defaultAddress",type:"checkbox"}),(0,j.jsx)("label",{htmlFor:"defaultAddress",children:"Set as default address"})]}),i?(0,j.jsx)("p",{children:(0,j.jsx)("mark",{children:(0,j.jsx)("small",{children:i})})}):(0,j.jsx)("br",{}),r({stateForMethod:l=>o===l?n:"idle"})]})})}var qS=`#graphql
  mutation customerAddressUpdate(
    $address: MailingAddressInput!
    $customerAccessToken: String!
    $id: ID!
    $country: CountryCode
    $language: LanguageCode
 ) @inContext(country: $country, language: $language) {
    customerAddressUpdate(
      address: $address
      customerAccessToken: $customerAccessToken
      id: $id
    ) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,VS=`#graphql
  mutation customerAddressDelete(
    $customerAccessToken: String!,
    $id: ID!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerAddressDelete(customerAccessToken: $customerAccessToken, id: $id) {
      customerUserErrors {
        code
        field
        message
      }
      deletedCustomerAddressId
    }
  }
`,Xh=`#graphql
  mutation customerDefaultAddressUpdate(
    $addressId: ID!
    $customerAccessToken: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerDefaultAddressUpdate(
      addressId: $addressId
      customerAccessToken: $customerAccessToken
    ) {
      customer {
        defaultAddress {
          id
        }
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,BS=`#graphql
  mutation customerAddressCreate(
    $address: MailingAddressInput!
    $customerAccessToken: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerAddressCreate(
      address: $address
      customerAccessToken: $customerAccessToken
    ) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;var Wl={};ee(Wl,{action:()=>YS,default:()=>Qh,loader:()=>zS});var Me=C(L());async function zS({context:e}){return await e.session.get("customerAccessToken")?z("/account"):k({})}async function YS({request:e,context:t}){if(e.method!=="POST")return k({error:"Method not allowed"},{status:405});let{storefront:r,session:n}=t,o=await e.formData(),a=String(o.has("email")?o.get("email"):""),i=o.has("password")?String(o.get("password")):null,s=o.has("passwordConfirm")?String(o.get("passwordConfirm")):null,l=i&&s&&i===s,u=Boolean(a&&i);try{if(!l)throw new Error("Passwords do not match");if(!u)throw new Error("Please provide both an email and a password.");let{customerCreate:c}=await r.mutate(WS,{variables:{input:{email:a,password:i}}});if(c?.customerUserErrors?.length)throw new Error(c?.customerUserErrors[0].message);let d=c?.customer;if(!d?.id)throw new Error("Could not create customer");let{customerAccessTokenCreate:p}=await r.mutate(GS,{variables:{input:{email:a,password:i}}});if(!p?.customerAccessToken?.accessToken)throw new Error("Missing access token");return n.set("customerAccessToken",p?.customerAccessToken),k({error:null,newCustomer:d},{status:302,headers:{"Set-Cookie":await n.commit(),Location:"/account"}})}catch(c){return c instanceof Error?k({error:c.message},{status:400}):k({error:c},{status:400})}}function Qh(){let t=nt()?.error||null;return(0,Me.jsxs)("div",{className:"login",children:[(0,Me.jsx)("h1",{children:"Register."}),(0,Me.jsxs)(Ue,{method:"POST",children:[(0,Me.jsxs)("fieldset",{children:[(0,Me.jsx)("label",{htmlFor:"email",children:"Email address"}),(0,Me.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,placeholder:"Email address","aria-label":"Email address",autoFocus:!0}),(0,Me.jsx)("label",{htmlFor:"password",children:"Password"}),(0,Me.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",placeholder:"Password","aria-label":"Password",minLength:8,required:!0}),(0,Me.jsx)("label",{htmlFor:"passwordConfirm",children:"Re-enter password"}),(0,Me.jsx)("input",{id:"passwordConfirm",name:"passwordConfirm",type:"password",autoComplete:"current-password",placeholder:"Re-enter password","aria-label":"Re-enter password",minLength:8,required:!0})]}),t?(0,Me.jsx)("p",{children:(0,Me.jsx)("mark",{children:(0,Me.jsx)("small",{children:t})})}):(0,Me.jsx)("br",{}),(0,Me.jsx)("button",{type:"submit",children:"Register"})]}),(0,Me.jsx)("br",{}),(0,Me.jsx)("p",{children:(0,Me.jsx)(B,{to:"/account/login",children:"Login \u2192"})})]})}var WS=`#graphql
  mutation customerCreate(
    $input: CustomerCreateInput!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerCreate(input: $input) {
      customer {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,GS=`#graphql
  mutation registerLogin(
    $input: CustomerAccessTokenCreateInput!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerAccessTokenCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`;var Gl={};ee(Gl,{action:()=>XS,default:()=>Zh,loader:()=>JS});var ce=C(L());async function JS({context:e}){return await e.session.get("customerAccessToken")?z("/account"):k({})}async function XS({request:e,context:t}){let{storefront:r}=t,n=await e.formData(),o=n.has("email")?String(n.get("email")):null;if(e.method!=="POST")return k({error:"Method not allowed"},{status:405});try{if(!o)throw new Error("Please provide an email.");return await r.mutate(KS,{variables:{email:o}}),k({resetRequested:!0})}catch(a){return a instanceof Error?k({error:a.message,resetRequested:!1},{status:400}):k({error:a,resetRequested:!1},{status:400})}}function Zh(){let e=nt();return(0,ce.jsx)("div",{className:"account-recover",children:(0,ce.jsx)("div",{children:e?.resetRequested?(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsx)("h1",{children:"Request Sent."}),(0,ce.jsx)("p",{children:"If that email address is in our system, you will receive an email with instructions about how to reset your password in a few minutes."}),(0,ce.jsx)("br",{}),(0,ce.jsx)(B,{to:"/account/login",children:"Return to Login"})]}):(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsx)("h1",{children:"Forgot Password."}),(0,ce.jsx)("p",{children:"Enter the email address associated with your account to receive a link to reset your password."}),(0,ce.jsx)("br",{}),(0,ce.jsxs)(Ue,{method:"POST",children:[(0,ce.jsxs)("fieldset",{children:[(0,ce.jsx)("label",{htmlFor:"email",children:"Email"}),(0,ce.jsx)("input",{"aria-label":"Email address",autoComplete:"email",autoFocus:!0,id:"email",name:"email",placeholder:"Email address",required:!0,type:"email"})]}),e?.error?(0,ce.jsx)("p",{children:(0,ce.jsx)("mark",{children:(0,ce.jsx)("small",{children:e.error})})}):(0,ce.jsx)("br",{}),(0,ce.jsx)("button",{type:"submit",children:"Request Reset Link"})]}),(0,ce.jsxs)("div",{children:[(0,ce.jsx)("br",{}),(0,ce.jsx)("p",{children:(0,ce.jsx)(B,{to:"/account/login",children:"Login \u2192"})})]})]})})})}var KS=`#graphql
  mutation customerRecover(
    $email: String!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;var Jl={};ee(Jl,{default:()=>em,loader:()=>ZS,meta:()=>QS});var zt=C(L()),QS=({data:e})=>[{title:`Hydrogen | ${e?.policy.title??""}`}];async function ZS({params:e,context:t}){if(!e.handle)throw new Response("No handle was passed in",{status:404});let r=e.handle.replace(/-([a-z])/g,(a,i)=>i.toUpperCase()),o=(await t.storefront.query(eR,{variables:{privacyPolicy:!1,shippingPolicy:!1,termsOfService:!1,refundPolicy:!1,[r]:!0,language:t.storefront.i18n?.language}})).shop?.[r];if(!o)throw new Response("Could not find the policy",{status:404});return k({policy:o})}function em(){let{policy:e}=se();return(0,zt.jsxs)("div",{className:"policy",children:[(0,zt.jsx)("br",{}),(0,zt.jsx)("br",{}),(0,zt.jsx)("div",{children:(0,zt.jsx)(B,{to:"/policies",children:"\u2190 Back to Policies"})}),(0,zt.jsx)("br",{}),(0,zt.jsx)("h1",{children:e.title}),(0,zt.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]})}var eR=`#graphql
  fragment Policy on ShopPolicy {
    body
    handle
    id
    title
    url
  }
  query Policy(
    $country: CountryCode
    $language: LanguageCode
    $privacyPolicy: Boolean!
    $refundPolicy: Boolean!
    $shippingPolicy: Boolean!
    $termsOfService: Boolean!
  ) @inContext(language: $language, country: $country) {
    shop {
      privacyPolicy @include(if: $privacyPolicy) {
        ...Policy
      }
      shippingPolicy @include(if: $shippingPolicy) {
        ...Policy
      }
      termsOfService @include(if: $termsOfService) {
        ...Policy
      }
      refundPolicy @include(if: $refundPolicy) {
        ...Policy
      }
    }
  }
`;var Xl={};ee(Xl,{default:()=>nm,loader:()=>rR,meta:()=>tR});var rm=C(Ee());var V=C(L()),tR=({data:e})=>[{title:`Hydrogen | ${e?.product.title??""}`}];async function rR({params:e,request:t,context:r}){let{handle:n}=e,{storefront:o}=r,a=fh(t).filter(c=>!c.name.startsWith("_sid")&&!c.name.startsWith("_pos")&&!c.name.startsWith("_psq")&&!c.name.startsWith("_ss")&&!c.name.startsWith("_v")&&!c.name.startsWith("fbclid"));if(!n)throw new Error("Expected product handle to be defined");let{product:i}=await o.query(cR,{variables:{handle:n,selectedOptions:a}});if(!i?.id)throw new Response(null,{status:404});let s=i.variants.nodes[0];if(Boolean(s.selectedOptions.find(c=>c.name==="Title"&&c.value==="Default Title")))i.selectedVariant=s;else if(!i.selectedVariant)throw nR({product:i,request:t});let u=o.query(fR,{variables:{handle:n}});return Vt({product:i,variants:u})}function nR({product:e,request:t}){let r=new URL(t.url),n=e.variants.nodes[0];return z(Tl({pathname:r.pathname,handle:e.handle,selectedOptions:n.selectedOptions,searchParams:new URLSearchParams(r.search)}),{status:302})}function nm(){let{product:e,variants:t}=se(),{selectedVariant:r}=e;return(0,V.jsxs)("div",{className:"product",children:[(0,V.jsx)(oR,{image:r?.image}),(0,V.jsx)(aR,{selectedVariant:r,product:e,variants:t})]})}function oR({image:e}){return e?(0,V.jsx)("div",{className:"product-image",children:(0,V.jsx)(Ce,{alt:e.altText||"Product Image",aspectRatio:"1/1",data:e,sizes:"(min-width: 45em) 50vw, 100vw"},e.id)}):(0,V.jsx)("div",{className:"product-image"})}function aR({selectedVariant:e,product:t,variants:r}){let{title:n,descriptionHtml:o}=t;return(0,V.jsxs)("div",{className:"product-main",children:[(0,V.jsx)("h1",{children:n}),(0,V.jsx)(iR,{selectedVariant:e}),(0,V.jsx)("br",{}),(0,V.jsx)(rm.Suspense,{fallback:(0,V.jsx)(tm,{product:t,selectedVariant:e,variants:[]}),children:(0,V.jsx)(ut,{errorElement:"There was a problem loading product variants",resolve:r,children:a=>(0,V.jsx)(tm,{product:t,selectedVariant:e,variants:a.product?.variants.nodes||[]})})}),(0,V.jsx)("br",{}),(0,V.jsx)("br",{}),(0,V.jsx)("p",{children:(0,V.jsx)("strong",{children:"Description"})}),(0,V.jsx)("br",{}),(0,V.jsx)("div",{dangerouslySetInnerHTML:{__html:o}}),(0,V.jsx)("br",{})]})}function iR({selectedVariant:e}){return(0,V.jsx)("div",{className:"product-price",children:e?.compareAtPrice?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("p",{children:"Sale"}),(0,V.jsx)("br",{}),(0,V.jsxs)("div",{className:"product-price-on-sale",children:[e?(0,V.jsx)(xe,{data:e.price}):null,(0,V.jsx)("s",{children:(0,V.jsx)(xe,{data:e.compareAtPrice})})]})]}):e?.price&&(0,V.jsx)(xe,{data:e?.price})})}function tm({product:e,selectedVariant:t,variants:r}){return(0,V.jsxs)("div",{className:"product-form",children:[(0,V.jsx)(dh,{handle:e.handle,options:e.options,variants:r,children:({option:n})=>(0,V.jsx)(sR,{option:n},n.name)}),(0,V.jsx)("br",{}),(0,V.jsx)(lR,{disabled:!t||!t.availableForSale,onClick:()=>{window.location.href=window.location.href+"#cart-aside"},lines:t?[{merchandiseId:t.id,quantity:1}]:[],children:t?.availableForSale?"Add to cart":"Sold out"})]})}function sR({option:e}){return(0,V.jsxs)("div",{className:"product-options",children:[(0,V.jsx)("h5",{children:e.name}),(0,V.jsx)("div",{className:"product-options-grid",children:e.values.map(({value:t,isAvailable:r,isActive:n,to:o})=>(0,V.jsx)(B,{className:"product-options-item",prefetch:"intent",preventScrollReset:!0,replace:!0,to:o,style:{border:n?"1px solid black":"1px solid transparent",opacity:r?1:.3},children:t},e.name+t))}),(0,V.jsx)("br",{})]},e.name)}function lR({analytics:e,children:t,disabled:r,lines:n,onClick:o}){return(0,V.jsx)(Oe,{route:"/cart",inputs:{lines:n},action:Oe.ACTIONS.LinesAdd,children:a=>(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("input",{name:"analytics",type:"hidden",value:JSON.stringify(e)}),(0,V.jsx)("button",{type:"submit",onClick:o,disabled:r??a.state!=="idle",children:t})]})})}var om=`#graphql
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
`,uR=`#graphql
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
  ${om}
`,cR=`#graphql
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
  ${uR}
`,dR=`#graphql
  fragment ProductVariants on Product {
    variants(first: 250) {
      nodes {
        ...ProductVariant
      }
    }
  }
  ${om}
`,fR=`#graphql
  ${dR}
  query ProductVariants(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...ProductVariants
    }
  }
`;var Kl={};ee(Kl,{action:()=>mR,default:()=>am,loader:()=>hR,meta:()=>pR});var oe=C(L()),pR=()=>[{title:"Profile"}];async function hR({context:e}){return await e.session.get("customerAccessToken")?k({}):z("/account/login")}async function mR({request:e,context:t}){let{session:r,storefront:n}=t;if(e.method!=="PUT")return k({error:"Method not allowed"},{status:405});let o=await e.formData(),a=await r.get("customerAccessToken");if(!a)return k({error:"Unauthorized"},{status:401});try{let i=gR(o),s={},l=["firstName","lastName","email","password","phone"];for(let[c,d]of o.entries())l.includes(c)&&(c==="acceptsMarketing"&&(s.acceptsMarketing=d==="on"),typeof d=="string"&&d.length&&(s[c]=d));i&&(s.password=i);let u=await n.mutate(yR,{variables:{customerAccessToken:a.accessToken,customer:s}});return u.customerUpdate?.customerUserErrors?.length?k({error:u.customerUpdate?.customerUserErrors[0]},{status:400}):(u.customerUpdate?.customerAccessToken?.accessToken&&r.set("customerAccessToken",u.customerUpdate?.customerAccessToken),k({error:null,customer:u.customerUpdate?.customer},{headers:{"Set-Cookie":await r.commit()}}))}catch(i){return k({error:i.message,customer:null},{status:400})}}function am(){let e=br(),{state:t}=lt(),r=nt(),n=r?.customer??e?.customer;return(0,oe.jsxs)("div",{className:"account-profile",children:[(0,oe.jsx)("h2",{children:"My profile"}),(0,oe.jsx)("br",{}),(0,oe.jsxs)(Ue,{method:"PUT",children:[(0,oe.jsx)("legend",{children:"Personal information"}),(0,oe.jsxs)("fieldset",{children:[(0,oe.jsx)("label",{htmlFor:"firstName",children:"First name"}),(0,oe.jsx)("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",placeholder:"First name","aria-label":"First name",defaultValue:n.firstName??"",minLength:2}),(0,oe.jsx)("label",{htmlFor:"lastName",children:"Last name"}),(0,oe.jsx)("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",placeholder:"Last name","aria-label":"Last name",defaultValue:n.lastName??"",minLength:2}),(0,oe.jsx)("label",{htmlFor:"phone",children:"Mobile"}),(0,oe.jsx)("input",{id:"phone",name:"phone",type:"tel",autoComplete:"tel",placeholder:"Mobile","aria-label":"Mobile",defaultValue:n.phone??""}),(0,oe.jsx)("label",{htmlFor:"email",children:"Email address"}),(0,oe.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,placeholder:"Email address","aria-label":"Email address",defaultValue:n.email??""}),(0,oe.jsxs)("div",{className:"account-profile-marketing",children:[(0,oe.jsx)("input",{id:"acceptsMarketing",name:"acceptsMarketing",type:"checkbox",placeholder:"Accept marketing","aria-label":"Accept marketing",defaultChecked:n.acceptsMarketing}),(0,oe.jsx)("label",{htmlFor:"acceptsMarketing",children:"\xA0 Subscribed to marketing communications"})]})]}),(0,oe.jsx)("br",{}),(0,oe.jsx)("legend",{children:"Change password (optional)"}),(0,oe.jsxs)("fieldset",{children:[(0,oe.jsx)("label",{htmlFor:"currentPassword",children:"Current password"}),(0,oe.jsx)("input",{id:"currentPassword",name:"currentPassword",type:"password",autoComplete:"current-password",placeholder:"Current password","aria-label":"Current password",minLength:8}),(0,oe.jsx)("label",{htmlFor:"newPassword",children:"New password"}),(0,oe.jsx)("input",{id:"newPassword",name:"newPassword",type:"password",placeholder:"New password","aria-label":"New password",minLength:8}),(0,oe.jsx)("label",{htmlFor:"newPasswordConfirm",children:"New password (confirm)"}),(0,oe.jsx)("input",{id:"newPasswordConfirm",name:"newPasswordConfirm",type:"password",placeholder:"New password (confirm)","aria-label":"New password confirm",minLength:8}),(0,oe.jsx)("small",{children:"Passwords must be at least 8 characters."})]}),r?.error?(0,oe.jsx)("p",{children:(0,oe.jsx)("mark",{children:(0,oe.jsx)("small",{children:r.error})})}):(0,oe.jsx)("br",{}),(0,oe.jsx)("button",{type:"submit",disabled:t!=="idle",children:t!=="idle"?"Updating":"Update"})]})]})}function gR(e){let t,r=e.get("currentPassword"),n=e.get("newPassword"),o=e.get("newPasswordConfirm"),a;if(n&&!r&&(a=new Error("Current password is required.")),n&&n!==o&&(a=new Error("New passwords must match.")),n&&r&&n===r&&(a=new Error("New password must be different than current password.")),a)throw a;return r&&n?t=n:t=r,String(t)}var yR=`#graphql
  # https://shopify.dev/docs/api/storefront/latest/mutations/customerUpdate
  mutation customerUpdate(
    $customerAccessToken: String!,
    $customer: CustomerUpdateInput!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    customerUpdate(customerAccessToken: $customerAccessToken, customer: $customer) {
      customer {
        acceptsMarketing
        email
        firstName
        id
        lastName
        phone
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;var Ql={};ee(Ql,{action:()=>bR,default:()=>im,loader:()=>wR,meta:()=>vR});var vR=()=>[{title:"Logout"}];async function wR(){return z("/account/login")}async function bR({request:e,context:t}){let{session:r}=t;return r.unset("customerAccessToken"),e.method!=="POST"?k({error:"Method not allowed"},{status:405}):z("/",{headers:{"Set-Cookie":await r.commit()}})}function im(){return null}var Zl={};ee(Zl,{default:()=>sm,loader:()=>xR});var on=C(L());async function xR({context:e}){let t=await e.storefront.query(SR),r=Object.values(t.shop||{});if(!r.length)throw new Response("No policies found",{status:404});return k({policies:r})}function sm(){let{policies:e}=se();return(0,on.jsxs)("div",{className:"policies",children:[(0,on.jsx)("h1",{children:"Policies"}),(0,on.jsx)("div",{children:e.map(t=>t?(0,on.jsx)("fieldset",{children:(0,on.jsx)(B,{to:`/policies/${t.handle}`,children:t.title})},t.id):null)})]})}var SR=`#graphql
  fragment PolicyItem on ShopPolicy {
    id
    title
    handle
  }
  query Policies ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    shop {
      privacyPolicy {
        ...PolicyItem
      }
      shippingPolicy {
        ...PolicyItem
      }
      termsOfService {
        ...PolicyItem
      }
      refundPolicy {
        ...PolicyItem
      }
      subscriptionPolicy {
        id
        title
        handle
      }
    }
  }
`;var eu={};ee(eu,{action:()=>CR,default:()=>lm,loader:()=>ER,meta:()=>RR});var Ie=C(L()),RR=()=>[{title:"Login"}];async function ER({context:e}){return await e.session.get("customerAccessToken")?z("/account"):k({})}async function CR({request:e,context:t}){let{session:r,storefront:n}=t;if(e.method!=="POST")return k({error:"Method not allowed"},{status:405});try{let o=await e.formData(),a=String(o.has("email")?o.get("email"):""),i=String(o.has("password")?o.get("password"):"");if(!Boolean(a&&i))throw new Error("Please provide both an email and a password.");let{customerAccessTokenCreate:l}=await n.mutate(kR,{variables:{input:{email:a,password:i}}});if(!l?.customerAccessToken?.accessToken)throw new Error(l?.customerUserErrors[0].message);let{customerAccessToken:u}=l;return r.set("customerAccessToken",u),z("/account",{headers:{"Set-Cookie":await r.commit()}})}catch(o){return o instanceof Error?k({error:o.message},{status:400}):k({error:o},{status:400})}}function lm(){let t=nt()?.error||null;return(0,Ie.jsxs)("div",{className:"login",children:[(0,Ie.jsx)("h1",{children:"Sign in."}),(0,Ie.jsxs)(Ue,{method:"POST",children:[(0,Ie.jsxs)("fieldset",{children:[(0,Ie.jsx)("label",{htmlFor:"email",children:"Email address"}),(0,Ie.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,placeholder:"Email address","aria-label":"Email address",autoFocus:!0}),(0,Ie.jsx)("label",{htmlFor:"password",children:"Password"}),(0,Ie.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",placeholder:"Password","aria-label":"Password",minLength:8,required:!0})]}),t?(0,Ie.jsx)("p",{children:(0,Ie.jsx)("mark",{children:(0,Ie.jsx)("small",{children:t})})}):(0,Ie.jsx)("br",{}),(0,Ie.jsx)("button",{type:"submit",children:"Sign in"})]}),(0,Ie.jsx)("br",{}),(0,Ie.jsxs)("div",{children:[(0,Ie.jsx)("p",{children:(0,Ie.jsx)(B,{to:"/account/recover",children:"Forgot password \u2192"})}),(0,Ie.jsx)("p",{children:(0,Ie.jsx)(B,{to:"/account/register",children:"Register \u2192"})})]})]})}var kR=`#graphql
  mutation login($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`;var tu={};ee(tu,{loader:()=>_R});async function _R({request:e,context:t,params:r}){let{cart:n}=t,{code:o}=r,a=new URL(e.url),i=new URLSearchParams(a.search),s=i.get("redirect")||i.get("return_to")||"/";s.includes("//")&&(s="/"),i.delete("redirect"),i.delete("return_to");let l=`${s}?${i}`;if(!o)return z(l);let u=await n.updateDiscountCodes([o]),c=n.setCartId(u.cart.id);return z(l,{status:303,headers:c})}var ru={};ee(ru,{loader:()=>AR});var PR=250;async function AR({request:e,context:{storefront:t}}){let r=await t.query(IR,{variables:{urlLimits:PR,language:t.i18n.language}});if(!r)throw new Response("No data found",{status:404});let n=$R({data:r,baseUrl:new URL(e.url).origin});return new Response(n,{headers:{"Content-Type":"application/xml","Cache-Control":`max-age=${60*60*24}`}})}function di(e){return e.replace(/[&<>'"]/g,t=>`&#${t.charCodeAt(0)};`)}function $R({data:e,baseUrl:t}){let r=ft(e.products).filter(i=>i.onlineStoreUrl).map(i=>{let l={url:`${t}/products/${di(i.handle)}`,lastMod:i.updatedAt,changeFreq:"daily"};return i.featuredImage?.url&&(l.image={url:di(i.featuredImage.url)},i.title&&(l.image.title=di(i.title)),i.featuredImage.altText&&(l.image.caption=di(i.featuredImage.altText))),l}),n=ft(e.collections).filter(i=>i.onlineStoreUrl).map(i=>({url:`${t}/collections/${i.handle}`,lastMod:i.updatedAt,changeFreq:"daily"})),o=ft(e.pages).filter(i=>i.onlineStoreUrl).map(i=>({url:`${t}/pages/${i.handle}`,lastMod:i.updatedAt,changeFreq:"weekly"}));return`
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    >
      ${[...r,...n,...o].map(TR).join("")}
    </urlset>`}function TR({url:e,lastMod:t,changeFreq:r,image:n}){let o=n?`<image:image>
        <image:loc>${n.url}</image:loc>
        <image:title>${n.title??""}</image:title>
        <image:caption>${n.caption??""}</image:caption>
      </image:image>`.trim():"";return`
    <url>
      <loc>${e}</loc>
      <lastmod>${t}</lastmod>
      <changefreq>${r}</changefreq>
      ${o}
    </url>
  `.trim()}var IR=`#graphql
  query Sitemap($urlLimits: Int, $language: LanguageCode)
  @inContext(language: $language) {
    products(
      first: $urlLimits
      query: "published_status:'online_store:visible'"
    ) {
      nodes {
        updatedAt
        handle
        onlineStoreUrl
        title
        featuredImage {
          url
          altText
        }
      }
    }
    collections(
      first: $urlLimits
      query: "published_status:'online_store:visible'"
    ) {
      nodes {
        updatedAt
        handle
        onlineStoreUrl
      }
    }
    pages(first: $urlLimits, query: "published_status:'published'") {
      nodes {
        updatedAt
        handle
        onlineStoreUrl
      }
    }
  }
`;var nu={};ee(nu,{default:()=>um,loader:()=>NR,meta:()=>DR});var Tn=C(L()),DR=({data:e})=>[{title:`Hydrogen | ${e?.page.title??""}`}];async function NR({params:e,context:t}){if(!e.handle)throw new Error("Missing page handle");let{page:r}=await t.storefront.query(LR,{variables:{handle:e.handle}});if(!r)throw new Response("Not Found",{status:404});return k({page:r})}function um(){let{page:e}=se();return(0,Tn.jsxs)("div",{className:"page",children:[(0,Tn.jsx)("header",{children:(0,Tn.jsx)("h1",{children:e.title})}),(0,Tn.jsx)("main",{dangerouslySetInnerHTML:{__html:e.body}})]})}var LR=`#graphql
  query Page(
    $language: LanguageCode,
    $country: CountryCode,
    $handle: String!
  )
  @inContext(language: $language, country: $country) {
    page(handle: $handle) {
      id
      title
      body
      seo {
        description
        title
      }
    }
  }
`;var ou={};ee(ou,{default:()=>cm,loader:()=>OR,meta:()=>UR});var st=C(L()),UR=()=>[{title:"Hydrogen | Blogs"}],OR=async({request:e,context:{storefront:t}})=>{let r=Pt(e,{pageBy:10}),{blogs:n}=await t.query(FR,{variables:{...r}});return k({blogs:n})};function cm(){let{blogs:e}=se();return(0,st.jsxs)("div",{className:"blogs mt-6",children:[(0,st.jsx)("h1",{children:"Blogs"}),(0,st.jsx)("div",{className:"blogs-grid",children:(0,st.jsx)(_t,{connection:e,children:({nodes:t,isLoading:r,PreviousLink:n,NextLink:o})=>(0,st.jsxs)(st.Fragment,{children:[(0,st.jsx)(n,{children:r?"Loading...":(0,st.jsx)("span",{children:"\u2191 Load previous"})}),t.map(a=>(0,st.jsx)(B,{className:"blog",prefetch:"intent",to:`/blogs/${a.handle}`,children:(0,st.jsx)("h2",{children:a.title})},a.handle)),(0,st.jsx)(o,{children:r?"Loading...":(0,st.jsx)("span",{children:"Load more \u2193"})})]})})})]})}var FR=`#graphql
  query Blogs(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    blogs(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      nodes {
        title
        handle
        seo {
          title
          description
        }
      }
    }
  }
`;var au={};ee(au,{default:()=>dm,loader:()=>MR});async function MR({request:e,context:t,params:r}){let{cart:n}=t,{lines:o}=r;if(!o)return z("/cart");let a=o.split(",").map(m=>{let f=m.split(":"),y=f[0],g=parseInt(f[1],10);return{merchandiseId:`gid://shopify/ProductVariant/${y}`,quantity:g}}),i=new URL(e.url),l=new URLSearchParams(i.search).get("discount"),u=l?[l]:[],c=await n.create({lines:a,discountCodes:u}),d=c.cart;if(c.errors?.length||!d)throw new Response("Link may be expired. Try checking the URL.",{status:410});let p=n.setCartId(d.id);if(d.checkoutUrl)return z(d.checkoutUrl,{headers:p});throw new Error("No checkout URL found")}function dm(){return null}var iu={};ee(iu,{loader:()=>HR});async function HR({context:e}){return await e.session.get("customerAccessToken")?z("/account"):z("/account/login")}var su={};ee(su,{CUSTOMER_FRAGMENT:()=>pm,default:()=>fm,loader:()=>qR,shouldRevalidate:()=>jR});var ze=C(L());function jR(){return!0}async function qR({request:e,context:t}){let{session:r,storefront:n}=t,{pathname:o}=new URL(e.url),a=await r.get("customerAccessToken"),i=!!a?.accessToken,s=o==="/account"||o==="/account/",l=/^\/account\/(orders|orders\/.*|profile|addresses|addresses\/.*)$/.test(o);if(i){if(s)return z("/account/orders")}else return l||s?(r.unset("customerAccessToken"),z("/account/login",{headers:{"Set-Cookie":await r.commit()}})):k({isLoggedIn:!1,isAccountHome:s,isPrivateRoute:l,customer:null});try{let{customer:u}=await n.query(YR,{variables:{customerAccessToken:a.accessToken,country:n.i18n.country,language:n.i18n.language},cache:n.CacheNone()});if(!u)throw new Error("Customer not found");return k({isLoggedIn:i,isPrivateRoute:l,isAccountHome:s,customer:u},{headers:{"Cache-Control":"no-cache, no-store, must-revalidate"}})}catch(u){return console.error("There was a problem loading account",u),r.unset("customerAccessToken"),z("/account/login",{headers:{"Set-Cookie":await r.commit()}})}}function fm(){let{customer:e,isPrivateRoute:t,isAccountHome:r}=se();return!t&&!r?(0,ze.jsx)(rr,{context:{customer:e}}):(0,ze.jsxs)(VR,{customer:e,children:[(0,ze.jsx)("br",{}),(0,ze.jsx)("br",{}),(0,ze.jsx)(rr,{context:{customer:e}})]})}function VR({customer:e,children:t}){let r=e?e.firstName?`Welcome, ${e.firstName}`:"Welcome to your account.":"Account Details";return(0,ze.jsxs)("div",{className:"account",children:[(0,ze.jsx)("h1",{children:r}),(0,ze.jsx)("br",{}),(0,ze.jsx)(BR,{}),t]})}function BR(){function e({isActive:t,isPending:r}){return{fontWeight:t?"bold":void 0,color:r?"grey":"black"}}return(0,ze.jsxs)("nav",{role:"navigation",children:[(0,ze.jsx)(gt,{to:"/account/orders",style:e,children:"Orders \xA0"}),"\xA0|\xA0",(0,ze.jsx)(gt,{to:"/account/profile",style:e,children:"\xA0 Profile \xA0"}),"\xA0|\xA0",(0,ze.jsx)(gt,{to:"/account/addresses",style:e,children:"\xA0 Addresses \xA0"}),"\xA0|\xA0",(0,ze.jsx)(zR,{})]})}function zR(){return(0,ze.jsxs)(Ue,{className:"account-logout",method:"POST",action:"/account/logout",children:["\xA0",(0,ze.jsx)("button",{type:"submit",children:"Sign out"})]})}var pm=`#graphql
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
`,YR=`#graphql
  query Customer(
    $customerAccessToken: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      ...Customer
    }
  }
  ${pm}
`;var uu={};ee(uu,{default:()=>hm,loader:()=>GR,meta:()=>WR});var lu=C(Ee());var Z=C(L()),WR=()=>[{title:"Clever Device 4U | Home"}];async function GR({context:e}){let{storefront:t}=e,r=t.query(eE),{collections:n}=await t.query(ZR),o=n.nodes[0],a=await t.query(rE),i=await t.query(tE);return Vt({featuredCollection:o,recommendedProducts:r,allCollections:a,productLeftImage:i})}function hm(){let e=se();return(0,Z.jsxs)("div",{className:"home",children:[(0,Z.jsx)(XR,{collection:e.featuredCollection}),(0,Z.jsx)(JR,{collection:e.allCollections}),(0,Z.jsx)(QR,{products:e.productLeftImage}),(0,Z.jsx)(KR,{products:e.recommendedProducts})]})}function JR(){let{allCollections:e}=se(),t=e.collections.nodes;return(0,Z.jsx)("ul",{className:"all_collections flex gap-4 mb-8",children:t.map(r=>(0,Z.jsxs)("li",{className:"relative border aspect-square h-fit w-1/4 mb-0 group",children:[(0,Z.jsx)("h1",{className:"absolute top-1/2 left-1/2 m-0 text-white -translate-y-2/4 -translate-x-2/4 text-base z-[1] group-hover:text-black",children:r.title}),(0,Z.jsx)(B,{className:"",to:`/collections/${r.handle}`,children:r.image&&(0,Z.jsx)("div",{className:"aspect-square group-hover:opacity-50",children:(0,Z.jsx)(Ce,{data:r.image,sizes:"100vw",className:"!aspect-square"})})})]},r.id))})}function XR({collection:e}){let t=e.image;return(0,Z.jsxs)(B,{className:"featured-collection",to:`/collections/${e.handle}`,children:[t&&(0,Z.jsx)("div",{className:"featured-collection-image",children:(0,Z.jsx)(Ce,{data:t,sizes:"100vw"})}),(0,Z.jsx)("h1",{className:"absolute top-1/2 left-1/2 m-0 text-[#17224F]/[.5] -translate-y-2/4 -translate-x-2/4 text-4xl",children:e.title})]})}function KR({products:e}){return(0,Z.jsxs)("div",{className:"recommended-products",children:[(0,Z.jsx)("h2",{children:"Recommended Products"}),(0,Z.jsx)(lu.Suspense,{fallback:(0,Z.jsx)("div",{children:"Loading..."}),children:(0,Z.jsx)(ut,{resolve:e,children:({products:t})=>(0,Z.jsx)("div",{className:"recommended-products-grid",children:t.nodes.map(r=>(0,Z.jsxs)(B,{className:"recommended-product",to:`/products/${r.handle}`,children:[(0,Z.jsx)(Ce,{data:r.images.nodes[0],aspectRatio:"1/1",sizes:"(min-width: 45em) 20vw, 50vw"}),(0,Z.jsx)("h4",{children:r.title}),(0,Z.jsx)("small",{children:(0,Z.jsx)(xe,{data:r.priceRange.minVariantPrice})})]},r.id))})})}),(0,Z.jsx)("br",{})]})}function QR({products:e}){return(0,Z.jsxs)("div",{className:"mb-12",children:[(0,Z.jsx)(lu.Suspense,{fallback:(0,Z.jsx)("div",{children:"Loading..."}),children:(0,Z.jsx)(ut,{resolve:e,children:({products:t})=>(0,Z.jsx)("div",{children:t.nodes.map(r=>(0,Z.jsxs)(B,{className:"flex w-2/3 mx-auto last:flex-row-reverse border first:mb-8 hover:drop-shadow-xl",to:`/products/${r.handle}`,children:[(0,Z.jsx)(Ce,{data:r.images.nodes[0],aspectRatio:"1/1",sizes:"(min-width: 45em) 20vw, 50vw",className:"!w-1/2"}),(0,Z.jsx)("h4",{className:"!w-1/2 bg-black text-white flex items-center p-5 m-0",children:r.description})]},r.id))})})}),(0,Z.jsx)("br",{})]})}var ZR=`#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`,eE=`#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`,tE=`#graphql
  fragment ProductLeftImage on Product {
    id
    title
    handle
    description
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query ProductLeftImage ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 2, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...ProductLeftImage
      }
    }
  }
`,rE=`#graphql
  query FeaturedCollections {
    collections(first: 10, query: "collection_type:smart") {
      nodes {
        id
        title
        handle
        image {
          id
          url
          altText
          width
          height
        }
      }
    }
  }
`;var cu={};ee(cu,{default:()=>mm,loader:()=>oE,meta:()=>nE});var an=C(L()),nE=()=>[{title:"Hydrogen | Search"}];async function oE({request:e,context:t}){let r=new URL(e.url),n=new URLSearchParams(r.search),o=Pt(e,{pageBy:8}),a=String(n.get("q")||"");if(!a)return{searchResults:{results:null,totalResults:0},searchTerm:a};let i=await t.storefront.query(aE,{variables:{query:a,...o}});if(!i)throw new Error("No search data returned from Shopify API");let s=Object.values(i).reduce((u,c)=>u+c.nodes.length,0);return Vt({searchTerm:a,searchResults:{results:i,totalResults:s}})}function mm(){let{searchTerm:e,searchResults:t}=se();return(0,an.jsxs)("div",{className:"search",children:[(0,an.jsx)("h1",{children:"Search"}),(0,an.jsx)(Th,{searchTerm:e}),!e||!t.totalResults?(0,an.jsx)(Dh,{}):(0,an.jsx)(Ih,{results:t.results})]})}var aE=`#graphql
  fragment SearchProduct on Product {
    __typename
    handle
    id
    publishedAt
    title
    trackingParameters
    vendor
    variants(first: 1) {
      nodes {
        id
        image {
          url
          altText
          width
          height
        }
        price {
          amount
          currencyCode
        }
        compareAtPrice {
          amount
          currencyCode
        }
        selectedOptions {
          name
          value
        }
        product {
          handle
          title
        }
      }
    }
  }
  fragment SearchPage on Page {
     __typename
     handle
    id
    title
    trackingParameters
  }
  fragment SearchArticle on Article {
    __typename
    handle
    id
    title
    trackingParameters
  }
  query search(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $query: String!
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    products: search(
      query: $query,
      unavailableProducts: HIDE,
      types: [PRODUCT],
      first: $first,
      sortKey: RELEVANCE,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...on Product {
          ...SearchProduct
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
    pages: search(
      query: $query,
      types: [PAGE],
      first: 10
    ) {
      nodes {
        ...on Page {
          ...SearchPage
        }
      }
    }
    articles: search(
      query: $query,
      types: [ARTICLE],
      first: 10
    ) {
      nodes {
        ...on Article {
          ...SearchArticle
        }
      }
    }
  }
`;var du={};ee(du,{action:()=>sE,default:()=>ym,meta:()=>iE});var gm=C(Ee());var pr=C(L()),iE=()=>[{title:"Hydrogen | Cart"}];async function sE({request:e,context:t}){let{session:r,cart:n}=t,[o,a]=await Promise.all([e.formData(),r.get("customerAccessToken")]),{action:i,inputs:s}=Oe.getFormInput(o);if(!i)throw new Error("No action provided");let l=200,u;switch(i){case Oe.ACTIONS.LinesAdd:u=await n.addLines(s.lines);break;case Oe.ACTIONS.LinesUpdate:u=await n.updateLines(s.lines);break;case Oe.ACTIONS.LinesRemove:u=await n.removeLines(s.lineIds);break;case Oe.ACTIONS.DiscountCodesUpdate:{let y=s.discountCode,g=y?[y]:[];g.push(...s.discountCodes),u=await n.updateDiscountCodes(g);break}case Oe.ACTIONS.BuyerIdentityUpdate:{u=await n.updateBuyerIdentity({...s.buyerIdentity,customerAccessToken:a?.accessToken});break}default:throw new Error(`${i} cart action is not defined`)}let c=u.cart.id,d=n.setCartId(u.cart.id),{cart:p,errors:m}=u,f=o.get("redirectTo")??null;return typeof f=="string"&&(l=303,d.set("Location",f)),k({cart:p,errors:m,analytics:{cartId:c}},{status:l,headers:d})}function ym(){let t=Tr().cart;return(0,pr.jsxs)("div",{className:"cart",children:[(0,pr.jsx)("h1",{children:"Cart"}),(0,pr.jsx)(gm.Suspense,{fallback:(0,pr.jsx)("p",{children:"Loading cart ..."}),children:(0,pr.jsx)(ut,{resolve:t,errorElement:(0,pr.jsx)("div",{children:"An error occurred"}),children:r=>(0,pr.jsx)(ci,{layout:"page",cart:r})})})]})}var pu={};ee(pu,{loader:()=>lE});async function lE({request:e,context:t}){let r=new URL(e.url),{shop:n}=await t.storefront.query(cE),o=Qa(n.id).id,a=uE({url:r.origin,shopId:o});return new Response(a,{status:200,headers:{"Content-Type":"text/plain","Cache-Control":`max-age=${60*60*24}`}})}function uE({url:e,shopId:t}){let r=e?`${e}/sitemap.xml`:void 0;return`
User-agent: *
${fu({sitemapUrl:r,shopId:t})}

# Google adsbot ignores robots.txt unless specifically named!
User-agent: adsbot-google
Disallow: /checkouts/
Disallow: /checkout
Disallow: /carts
Disallow: /orders
${t?`Disallow: /${t}/checkouts`:""}
${t?`Disallow: /${t}/orders`:""}
Disallow: /*?*oseid=*
Disallow: /*preview_theme_id*
Disallow: /*preview_script_id*

User-agent: Nutch
Disallow: /

User-agent: AhrefsBot
Crawl-delay: 10
${fu({sitemapUrl:r,shopId:t})}

User-agent: AhrefsSiteAudit
Crawl-delay: 10
${fu({sitemapUrl:r,shopId:t})}

User-agent: MJ12bot
Crawl-Delay: 10

User-agent: Pinterest
Crawl-delay: 1
`.trim()}function fu({shopId:e,sitemapUrl:t}){return`Disallow: /admin
Disallow: /cart
Disallow: /orders
Disallow: /checkouts/
Disallow: /checkout
${e?`Disallow: /${e}/checkouts`:""}
${e?`Disallow: /${e}/orders`:""}
Disallow: /carts
Disallow: /account
Disallow: /collections/*sort_by*
Disallow: /*/collections/*sort_by*
Disallow: /collections/*+*
Disallow: /collections/*%2B*
Disallow: /collections/*%2b*
Disallow: /*/collections/*+*
Disallow: /*/collections/*%2B*
Disallow: /*/collections/*%2b*
Disallow: */collections/*filter*&*filter*
Disallow: /blogs/*+*
Disallow: /blogs/*%2B*
Disallow: /blogs/*%2b*
Disallow: /*/blogs/*+*
Disallow: /*/blogs/*%2B*
Disallow: /*/blogs/*%2b*
Disallow: /*?*oseid=*
Disallow: /*preview_theme_id*
Disallow: /*preview_script_id*
Disallow: /policies/
Disallow: /*/*?*ls=*&ls=*
Disallow: /*/*?*ls%3D*%3Fls%3D*
Disallow: /*/*?*ls%3d*%3fls%3d*
Disallow: /search
Allow: /search/
Disallow: /search/?*
Disallow: /apple-app-site-association
Disallow: /.well-known/shopify/monorail
${t?`Sitemap: ${t}`:""}`}var cE=`#graphql
  query StoreRobots($country: CountryCode, $language: LanguageCode)
   @inContext(country: $country, language: $language) {
    shop {
      id
    }
  }
`;var hu={};ee(hu,{default:()=>vm,loader:()=>dE});async function dE({request:e}){throw new Response(`${new URL(e.url).pathname} not found`,{status:404})}function vm(){return null}var wm={entry:{module:"/build/entry.client-62NP2IXL.js",imports:["/build/_shared/chunk-G2CXSP6I.js","/build/_shared/chunk-MEPKJ2VW.js"]},routes:{root:{id:"root",parentId:void 0,path:"",index:void 0,caseSensitive:void 0,module:"/build/root-TEQJTV4S.js",imports:["/build/_shared/chunk-TYCIEDWG.js","/build/_shared/chunk-7SZMU7Y2.js","/build/_shared/chunk-OXCD42SC.js","/build/_shared/chunk-3UFFP3LY.js"],hasAction:!1,hasLoader:!0,hasErrorBoundary:!0},"routes/($locale).$":{id:"routes/($locale).$",parentId:"root",path:":locale?/*",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).$-Y3WREERO.js",imports:void 0,hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).[sitemap.xml]":{id:"routes/($locale).[sitemap.xml]",parentId:"root",path:":locale?/sitemap.xml",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).[sitemap.xml]-5K2IWONC.js",imports:void 0,hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale)._index":{id:"routes/($locale)._index",parentId:"root",path:":locale?",index:!0,caseSensitive:void 0,module:"/build/routes/($locale)._index-QJGFSG6M.js",imports:void 0,hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).account":{id:"routes/($locale).account",parentId:"root",path:":locale?/account",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).account-LCFC5YTL.js",imports:void 0,hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).account.$":{id:"routes/($locale).account.$",parentId:"routes/($locale).account",path:"*",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).account.$-GD3JVBUN.js",imports:void 0,hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).account.addresses":{id:"routes/($locale).account.addresses",parentId:"routes/($locale).account",path:"addresses",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).account.addresses-VAFSDHEP.js",imports:void 0,hasAction:!0,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).account.orders.$id":{id:"routes/($locale).account.orders.$id",parentId:"routes/($locale).account",path:"orders/:id",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).account.orders.$id-WVQ5RIPF.js",imports:["/build/_shared/chunk-3UFFP3LY.js"],hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).account.orders._index":{id:"routes/($locale).account.orders._index",parentId:"routes/($locale).account",path:"orders",index:!0,caseSensitive:void 0,module:"/build/routes/($locale).account.orders._index-3FGZRISO.js",imports:["/build/_shared/chunk-3UFFP3LY.js"],hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).account.profile":{id:"routes/($locale).account.profile",parentId:"routes/($locale).account",path:"profile",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).account.profile-V5YNZ4SN.js",imports:void 0,hasAction:!0,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).account_.activate.$id.$activationToken":{id:"routes/($locale).account_.activate.$id.$activationToken",parentId:"root",path:":locale?/account/activate/:id/:activationToken",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).account_.activate.$id.$activationToken-6JW3Q5P6.js",imports:void 0,hasAction:!0,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).account_.login":{id:"routes/($locale).account_.login",parentId:"root",path:":locale?/account/login",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).account_.login-ZMJFKGUZ.js",imports:void 0,hasAction:!0,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).account_.logout":{id:"routes/($locale).account_.logout",parentId:"root",path:":locale?/account/logout",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).account_.logout-WK4MNEOW.js",imports:void 0,hasAction:!0,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).account_.recover":{id:"routes/($locale).account_.recover",parentId:"root",path:":locale?/account/recover",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).account_.recover-N44EYZV2.js",imports:void 0,hasAction:!0,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).account_.register":{id:"routes/($locale).account_.register",parentId:"root",path:":locale?/account/register",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).account_.register-FLCP4ARZ.js",imports:void 0,hasAction:!0,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).account_.reset.$id.$resetToken":{id:"routes/($locale).account_.reset.$id.$resetToken",parentId:"root",path:":locale?/account/reset/:id/:resetToken",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).account_.reset.$id.$resetToken-UZX2XGRU.js",imports:void 0,hasAction:!0,hasLoader:!1,hasErrorBoundary:!1},"routes/($locale).api.predictive-search":{id:"routes/($locale).api.predictive-search",parentId:"root",path:":locale?/api/predictive-search",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).api.predictive-search-6YHSZXE2.js",imports:void 0,hasAction:!0,hasLoader:!1,hasErrorBoundary:!1},"routes/($locale).blogs.$blogHandle.$articleHandle":{id:"routes/($locale).blogs.$blogHandle.$articleHandle",parentId:"root",path:":locale?/blogs/:blogHandle/:articleHandle",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).blogs.$blogHandle.$articleHandle-VU5ILGP4.js",imports:void 0,hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).blogs.$blogHandle._index":{id:"routes/($locale).blogs.$blogHandle._index",parentId:"root",path:":locale?/blogs/:blogHandle",index:!0,caseSensitive:void 0,module:"/build/routes/($locale).blogs.$blogHandle._index-52UKF7XT.js",imports:void 0,hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).blogs._index":{id:"routes/($locale).blogs._index",parentId:"root",path:":locale?/blogs",index:!0,caseSensitive:void 0,module:"/build/routes/($locale).blogs._index-QFLCCZTG.js",imports:void 0,hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).cart":{id:"routes/($locale).cart",parentId:"root",path:":locale?/cart",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).cart-YKWO46TS.js",imports:void 0,hasAction:!0,hasLoader:!1,hasErrorBoundary:!1},"routes/($locale).cart.$lines":{id:"routes/($locale).cart.$lines",parentId:"routes/($locale).cart",path:":lines",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).cart.$lines-GAMQHR33.js",imports:void 0,hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).collections.$handle":{id:"routes/($locale).collections.$handle",parentId:"root",path:":locale?/collections/:handle",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).collections.$handle-7M56YVJQ.js",imports:void 0,hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).collections._index":{id:"routes/($locale).collections._index",parentId:"root",path:":locale?/collections",index:!0,caseSensitive:void 0,module:"/build/routes/($locale).collections._index-ZKFHXF2K.js",imports:void 0,hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).discount.$code":{id:"routes/($locale).discount.$code",parentId:"root",path:":locale?/discount/:code",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).discount.$code-LJ255DMS.js",imports:void 0,hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).pages.$handle":{id:"routes/($locale).pages.$handle",parentId:"root",path:":locale?/pages/:handle",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).pages.$handle-TWECI24O.js",imports:void 0,hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).policies.$handle":{id:"routes/($locale).policies.$handle",parentId:"root",path:":locale?/policies/:handle",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).policies.$handle-B4XY5YTC.js",imports:void 0,hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).policies._index":{id:"routes/($locale).policies._index",parentId:"root",path:":locale?/policies",index:!0,caseSensitive:void 0,module:"/build/routes/($locale).policies._index-FHOVTE6B.js",imports:void 0,hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).products.$handle":{id:"routes/($locale).products.$handle",parentId:"root",path:":locale?/products/:handle",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).products.$handle-GYQ2TCXM.js",imports:void 0,hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/($locale).search":{id:"routes/($locale).search",parentId:"root",path:":locale?/search",index:void 0,caseSensitive:void 0,module:"/build/routes/($locale).search-OZTJ2DKL.js",imports:void 0,hasAction:!1,hasLoader:!0,hasErrorBoundary:!1},"routes/[robots.txt]":{id:"routes/[robots.txt]",parentId:"root",path:"robots.txt",index:void 0,caseSensitive:void 0,module:"/build/routes/[robots.txt]-MPA2SZTG.js",imports:void 0,hasAction:!1,hasLoader:!0,hasErrorBoundary:!1}},version:"8588c9d6",hmr:void 0,url:"/build/manifest-8588C9D6.js"};var fE="production",pE="dist/client/build",hE={},mE="/build/",gE={module:_l},yE={root:{id:"root",parentId:void 0,path:"",index:void 0,caseSensitive:void 0,module:Ll},"routes/($locale).account_.activate.$id.$activationToken":{id:"routes/($locale).account_.activate.$id.$activationToken",parentId:"root",path:":locale?/account/activate/:id/:activationToken",index:void 0,caseSensitive:void 0,module:Ul},"routes/($locale).blogs.$blogHandle.$articleHandle":{id:"routes/($locale).blogs.$blogHandle.$articleHandle",parentId:"root",path:":locale?/blogs/:blogHandle/:articleHandle",index:void 0,caseSensitive:void 0,module:Ol},"routes/($locale).account_.reset.$id.$resetToken":{id:"routes/($locale).account_.reset.$id.$resetToken",parentId:"root",path:":locale?/account/reset/:id/:resetToken",index:void 0,caseSensitive:void 0,module:Fl},"routes/($locale).blogs.$blogHandle._index":{id:"routes/($locale).blogs.$blogHandle._index",parentId:"root",path:":locale?/blogs/:blogHandle",index:!0,caseSensitive:void 0,module:Ml},"routes/($locale).account.orders._index":{id:"routes/($locale).account.orders._index",parentId:"routes/($locale).account",path:"orders",index:!0,caseSensitive:void 0,module:Hl},"routes/($locale).api.predictive-search":{id:"routes/($locale).api.predictive-search",parentId:"root",path:":locale?/api/predictive-search",index:void 0,caseSensitive:void 0,module:jl},"routes/($locale).collections.$handle":{id:"routes/($locale).collections.$handle",parentId:"root",path:":locale?/collections/:handle",index:void 0,caseSensitive:void 0,module:ql},"routes/($locale).account.orders.$id":{id:"routes/($locale).account.orders.$id",parentId:"routes/($locale).account",path:"orders/:id",index:void 0,caseSensitive:void 0,module:Vl},"routes/($locale).collections._index":{id:"routes/($locale).collections._index",parentId:"root",path:":locale?/collections",index:!0,caseSensitive:void 0,module:Bl},"routes/($locale).account.addresses":{id:"routes/($locale).account.addresses",parentId:"routes/($locale).account",path:"addresses",index:void 0,caseSensitive:void 0,module:Yl},"routes/($locale).account_.register":{id:"routes/($locale).account_.register",parentId:"root",path:":locale?/account/register",index:void 0,caseSensitive:void 0,module:Wl},"routes/($locale).account_.recover":{id:"routes/($locale).account_.recover",parentId:"root",path:":locale?/account/recover",index:void 0,caseSensitive:void 0,module:Gl},"routes/($locale).policies.$handle":{id:"routes/($locale).policies.$handle",parentId:"root",path:":locale?/policies/:handle",index:void 0,caseSensitive:void 0,module:Jl},"routes/($locale).products.$handle":{id:"routes/($locale).products.$handle",parentId:"root",path:":locale?/products/:handle",index:void 0,caseSensitive:void 0,module:Xl},"routes/($locale).account.profile":{id:"routes/($locale).account.profile",parentId:"routes/($locale).account",path:"profile",index:void 0,caseSensitive:void 0,module:Kl},"routes/($locale).account_.logout":{id:"routes/($locale).account_.logout",parentId:"root",path:":locale?/account/logout",index:void 0,caseSensitive:void 0,module:Ql},"routes/($locale).policies._index":{id:"routes/($locale).policies._index",parentId:"root",path:":locale?/policies",index:!0,caseSensitive:void 0,module:Zl},"routes/($locale).account_.login":{id:"routes/($locale).account_.login",parentId:"root",path:":locale?/account/login",index:void 0,caseSensitive:void 0,module:eu},"routes/($locale).discount.$code":{id:"routes/($locale).discount.$code",parentId:"root",path:":locale?/discount/:code",index:void 0,caseSensitive:void 0,module:tu},"routes/($locale).[sitemap.xml]":{id:"routes/($locale).[sitemap.xml]",parentId:"root",path:":locale?/sitemap.xml",index:void 0,caseSensitive:void 0,module:ru},"routes/($locale).pages.$handle":{id:"routes/($locale).pages.$handle",parentId:"root",path:":locale?/pages/:handle",index:void 0,caseSensitive:void 0,module:nu},"routes/($locale).blogs._index":{id:"routes/($locale).blogs._index",parentId:"root",path:":locale?/blogs",index:!0,caseSensitive:void 0,module:ou},"routes/($locale).cart.$lines":{id:"routes/($locale).cart.$lines",parentId:"routes/($locale).cart",path:":lines",index:void 0,caseSensitive:void 0,module:au},"routes/($locale).account.$":{id:"routes/($locale).account.$",parentId:"routes/($locale).account",path:"*",index:void 0,caseSensitive:void 0,module:iu},"routes/($locale).account":{id:"routes/($locale).account",parentId:"root",path:":locale?/account",index:void 0,caseSensitive:void 0,module:su},"routes/($locale)._index":{id:"routes/($locale)._index",parentId:"root",path:":locale?",index:!0,caseSensitive:void 0,module:uu},"routes/($locale).search":{id:"routes/($locale).search",parentId:"root",path:":locale?/search",index:void 0,caseSensitive:void 0,module:cu},"routes/($locale).cart":{id:"routes/($locale).cart",parentId:"root",path:":locale?/cart",index:void 0,caseSensitive:void 0,module:du},"routes/[robots.txt]":{id:"routes/[robots.txt]",parentId:"root",path:"robots.txt",index:void 0,caseSensitive:void 0,module:pu},"routes/($locale).$":{id:"routes/($locale).$",parentId:"root",path:":locale?/*",index:void 0,caseSensitive:void 0,module:hu}};var pA={async fetch(e,t,r){try{if(!t?.SESSION_SECRET)throw new Error("SESSION_SECRET environment variable is not set");let n=r.waitUntil.bind(r),[o,a]=await Promise.all([caches.open("hydrogen"),gu.init(e,[t.SESSION_SECRET])]),{storefront:i}=ah({cache:o,waitUntil:n,i18n:vE(e),publicStorefrontToken:t.PUBLIC_STOREFRONT_API_TOKEN,privateStorefrontToken:t.PRIVATE_STOREFRONT_API_TOKEN,storeDomain:t.PUBLIC_STORE_DOMAIN,storefrontId:t.PUBLIC_STOREFRONT_ID,storefrontHeaders:xh(e)}),s=ch({storefront:i,getCartId:lh(e.headers),setCartId:uh(),cartQueryFragment:wE}),u=await bh({build:mu,mode:"production",getLoadContext:()=>({session:a,storefront:i,cart:s,env:t,waitUntil:n})})(e);return u.status===404?ih({request:e,response:u,storefront:i}):u}catch(n){return console.error(n),new Response("An unexpected error occurred",{status:500})}}};function vE(e){let r=new URL(e.url).pathname.split("/")[1]?.toUpperCase()??"",n="",[o,a]=["EN","US"];return/^[A-Z]{2}-[A-Z]{2}$/i.test(r)&&(n="/"+r,[o,a]=r.split("-")),{language:o,country:a,pathPrefix:n}}var gu=class{#t;#e;constructor(t,r){this.#t=t,this.#e=r}static async init(t,r){let n=wh({cookie:{name:"session",httpOnly:!0,path:"/",sameSite:"lax",secrets:r}}),o=await n.getSession(t.headers.get("Cookie"));return new this(n,o)}get has(){return this.#e.has}get get(){return this.#e.get}get flash(){return this.#e.flash}get unset(){return this.#e.unset}get set(){return this.#e.set}destroy(){return this.#t.destroySession(this.#e)}commit(){return this.#t.commitSession(this.#e)}},wE=`#graphql
  fragment Money on MoneyV2 {
    currencyCode
    amount
  }
  fragment CartLine on CartLine {
    id
    quantity
    attributes {
      key
      value
    }
    cost {
      totalAmount {
        ...Money
      }
      amountPerQuantity {
        ...Money
      }
      compareAtAmountPerQuantity {
        ...Money
      }
    }
    merchandise {
      ... on ProductVariant {
        id
        availableForSale
        compareAtPrice {
          ...Money
        }
        price {
          ...Money
        }
        requiresShipping
        title
        image {
          id
          url
          altText
          width
          height

        }
        product {
          handle
          title
          id
        }
        selectedOptions {
          name
          value
        }
      }
    }
  }
  fragment CartApiQuery on Cart {
    id
    checkoutUrl
    totalQuantity
    buyerIdentity {
      countryCode
      customer {
        id
        email
        firstName
        lastName
        displayName
      }
      email
      phone
    }
    lines(first: $numCartLines) {
      nodes {
        ...CartLine
      }
    }
    cost {
      subtotalAmount {
        ...Money
      }
      totalAmount {
        ...Money
      }
      totalDutyAmount {
        ...Money
      }
      totalTaxAmount {
        ...Money
      }
    }
    note
    attributes {
      key
      value
    }
    discountCodes {
      code
      applicable
    }
  }
`;export{gu as HydrogenSession,pA as default};
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@remix-run/router/dist/router.js:
  (**
   * @remix-run/router v1.10.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router/dist/index.js:
  (**
   * React Router v6.17.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router-dom/dist/index.js:
  (**
   * React Router DOM v6.17.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-dom/cjs/react-dom-server-legacy.browser.production.min.js:
  (**
   * @license React
   * react-dom-server-legacy.browser.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server.browser.production.min.js:
  (**
   * @license React
   * react-dom-server.browser.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

@remix-run/react/dist/esm/_virtual/_rollupPluginBabelHelpers.js:
  (**
   * @remix-run/react v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/invariant.js:
  (**
   * @remix-run/react v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/routeModules.js:
  (**
   * @remix-run/react v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/links.js:
  (**
   * @remix-run/react v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/markup.js:
  (**
   * @remix-run/react v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/components.js:
  (**
   * @remix-run/react v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/errorBoundaries.js:
  (**
   * @remix-run/react v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/routes.js:
  (**
   * @remix-run/react v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/scroll-restoration.js:
  (**
   * @remix-run/react v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/server.js:
  (**
   * @remix-run/react v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/index.js:
  (**
   * @remix-run/react v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/warnings.js:
  (**
   * @remix-run/server-runtime v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/cookies.js:
  (**
   * @remix-run/server-runtime v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/mode.js:
  (**
   * @remix-run/server-runtime v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/errors.js:
  (**
   * @remix-run/server-runtime v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/responses.js:
  (**
   * @remix-run/server-runtime v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/entry.js:
  (**
   * @remix-run/server-runtime v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/headers.js:
  (**
   * @remix-run/server-runtime v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/invariant.js:
  (**
   * @remix-run/server-runtime v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/routeMatching.js:
  (**
   * @remix-run/server-runtime v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/data.js:
  (**
   * @remix-run/server-runtime v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/routes.js:
  (**
   * @remix-run/server-runtime v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/markup.js:
  (**
   * @remix-run/server-runtime v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/serverHandoff.js:
  (**
   * @remix-run/server-runtime v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/server.js:
  (**
   * @remix-run/server-runtime v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/sessions.js:
  (**
   * @remix-run/server-runtime v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/sessions/cookieStorage.js:
  (**
   * @remix-run/server-runtime v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/sessions/memoryStorage.js:
  (**
   * @remix-run/server-runtime v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/index.js:
  (**
   * @remix-run/server-runtime v2.1.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@shopify/hydrogen/dist/production/index.js:
  (*! @see: https://shopify.dev/docs/api/storefront/latest/mutations/cartCreate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/queries/cart *)
  (*! @see: https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesAdd *)
  (*! @see: https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesUpdate *)
  (*! @see: https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesRemove *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartDiscountCodesUpdate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartBuyerIdentityUpdate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartNoteUpdate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartSelectedDeliveryOptionsUpdate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartMetafieldsSet *)
  (*! @see https://shopify.dev/docs/api/storefront/2023-10/mutations/cartMetafieldDelete *)
*/
//# sourceMappingURL=index.js.map
