function yx(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Bv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hv={exports:{}},Hu={},Wv={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),vx=Symbol.for("react.portal"),_x=Symbol.for("react.fragment"),wx=Symbol.for("react.strict_mode"),Ex=Symbol.for("react.profiler"),Ix=Symbol.for("react.provider"),Tx=Symbol.for("react.context"),xx=Symbol.for("react.forward_ref"),Sx=Symbol.for("react.suspense"),kx=Symbol.for("react.memo"),Ax=Symbol.for("react.lazy"),Ng=Symbol.iterator;function Px(t){return t===null||typeof t!="object"?null:(t=Ng&&t[Ng]||t["@@iterator"],typeof t=="function"?t:null)}var Gv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kv=Object.assign,qv={};function Rs(t,e,n){this.props=t,this.context=e,this.refs=qv,this.updater=n||Gv}Rs.prototype.isReactComponent={};Rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qv(){}Qv.prototype=Rs.prototype;function jf(t,e,n){this.props=t,this.context=e,this.refs=qv,this.updater=n||Gv}var Vf=jf.prototype=new Qv;Vf.constructor=jf;Kv(Vf,Rs.prototype);Vf.isPureReactComponent=!0;var Og=Array.isArray,Yv=Object.prototype.hasOwnProperty,Uf={current:null},Xv={key:!0,ref:!0,__self:!0,__source:!0};function Jv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Yv.call(e,r)&&!Xv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ea,type:t,key:s,ref:o,props:i,_owner:Uf.current}}function bx(t,e){return{$$typeof:Ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $f(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ea}function Cx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dg=/\/+/g;function od(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Cx(""+t.key):e.toString(36)}function Al(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ea:case vx:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+od(o,0):r,Og(i)?(n="",t!=null&&(n=t.replace(Dg,"$&/")+"/"),Al(i,e,n,"",function(c){return c})):i!=null&&($f(i)&&(i=bx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Dg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Og(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+od(s,l);o+=Al(s,e,n,u,i)}else if(u=Px(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+od(s,l++),o+=Al(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function nl(t,e,n){if(t==null)return t;var r=[],i=0;return Al(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Rx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},Pl={transition:null},Nx={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:Pl,ReactCurrentOwner:Uf};function Zv(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:nl,forEach:function(t,e,n){nl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nl(t,function(){e++}),e},toArray:function(t){return nl(t,function(e){return e})||[]},only:function(t){if(!$f(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Rs;ee.Fragment=_x;ee.Profiler=Ex;ee.PureComponent=jf;ee.StrictMode=wx;ee.Suspense=Sx;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nx;ee.act=Zv;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Kv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Uf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Yv.call(e,u)&&!Xv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ea,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:Tx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ix,_context:t},t.Consumer=t};ee.createElement=Jv;ee.createFactory=function(t){var e=Jv.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:xx,render:t}};ee.isValidElement=$f;ee.lazy=function(t){return{$$typeof:Ax,_payload:{_status:-1,_result:t},_init:Rx}};ee.memo=function(t,e){return{$$typeof:kx,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Pl.transition;Pl.transition={};try{t()}finally{Pl.transition=e}};ee.unstable_act=Zv;ee.useCallback=function(t,e){return dt.current.useCallback(t,e)};ee.useContext=function(t){return dt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return dt.current.useEffect(t,e)};ee.useId=function(){return dt.current.useId()};ee.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return dt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};ee.useRef=function(t){return dt.current.useRef(t)};ee.useState=function(t){return dt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return dt.current.useTransition()};ee.version="18.3.1";Wv.exports=ee;var P=Wv.exports;const Y=Bv(P),eh=yx({__proto__:null,default:Y},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ox=P,Dx=Symbol.for("react.element"),Lx=Symbol.for("react.fragment"),Mx=Object.prototype.hasOwnProperty,Fx=Ox.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jx={key:!0,ref:!0,__self:!0,__source:!0};function e1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Mx.call(e,r)&&!jx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Dx,type:t,key:s,ref:o,props:i,_owner:Fx.current}}Hu.Fragment=Lx;Hu.jsx=e1;Hu.jsxs=e1;Hv.exports=Hu;var y=Hv.exports,th={},t1={exports:{}},Ot={},n1={exports:{}},r1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,W){var Q=z.length;z.push(W);e:for(;0<Q;){var X=Q-1>>>1,oe=z[X];if(0<i(oe,W))z[X]=W,z[Q]=oe,Q=X;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var W=z[0],Q=z.pop();if(Q!==W){z[0]=Q;e:for(var X=0,oe=z.length,te=oe>>>1;X<te;){var Ht=2*(X+1)-1,st=z[Ht],Wt=Ht+1,xt=z[Wt];if(0>i(st,Q))Wt<oe&&0>i(xt,st)?(z[X]=xt,z[Wt]=Q,X=Wt):(z[X]=st,z[Ht]=Q,X=Ht);else if(Wt<oe&&0>i(xt,Q))z[X]=xt,z[Wt]=Q,X=Wt;else break e}}return W}function i(z,W){var Q=z.sortIndex-W.sortIndex;return Q!==0?Q:z.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],h=1,p=null,m=3,E=!1,k=!1,R=!1,C=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var W=n(c);W!==null;){if(W.callback===null)r(c);else if(W.startTime<=z)r(c),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(c)}}function D(z){if(R=!1,S(z),!k)if(n(u)!==null)k=!0,ln(M);else{var W=n(c);W!==null&&ft(D,W.startTime-z)}}function M(z,W){k=!1,R&&(R=!1,w(v),v=-1),E=!0;var Q=m;try{for(S(W),p=n(u);p!==null&&(!(p.expirationTime>W)||z&&!b());){var X=p.callback;if(typeof X=="function"){p.callback=null,m=p.priorityLevel;var oe=X(p.expirationTime<=W);W=t.unstable_now(),typeof oe=="function"?p.callback=oe:p===n(u)&&r(u),S(W)}else r(u);p=n(u)}if(p!==null)var te=!0;else{var Ht=n(c);Ht!==null&&ft(D,Ht.startTime-W),te=!1}return te}finally{p=null,m=Q,E=!1}}var U=!1,T=null,v=-1,x=5,I=-1;function b(){return!(t.unstable_now()-I<x)}function N(){if(T!==null){var z=t.unstable_now();I=z;var W=!0;try{W=T(!0,z)}finally{W?A():(U=!1,T=null)}}else U=!1}var A;if(typeof _=="function")A=function(){_(N)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,Tt=fe.port2;fe.port1.onmessage=N,A=function(){Tt.postMessage(null)}}else A=function(){C(N,0)};function ln(z){T=z,U||(U=!0,A())}function ft(z,W){v=C(function(){z(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){k||E||(k=!0,ln(M))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var W=3;break;default:W=m}var Q=m;m=W;try{return z()}finally{m=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,W){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=m;m=z;try{return W()}finally{m=Q}},t.unstable_scheduleCallback=function(z,W,Q){var X=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?X+Q:X):Q=X,z){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=Q+oe,z={id:h++,callback:W,priorityLevel:z,startTime:Q,expirationTime:oe,sortIndex:-1},Q>X?(z.sortIndex=Q,e(c,z),n(u)===null&&z===n(c)&&(R?(w(v),v=-1):R=!0,ft(D,Q-X))):(z.sortIndex=oe,e(u,z),k||E||(k=!0,ln(M))),z},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(z){var W=m;return function(){var Q=m;m=W;try{return z.apply(this,arguments)}finally{m=Q}}}})(r1);n1.exports=r1;var Vx=n1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ux=P,Nt=Vx;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i1=new Set,Bo={};function Ci(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(Bo[t]=e,t=0;t<e.length;t++)i1.add(e[t])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nh=Object.prototype.hasOwnProperty,$x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lg={},Mg={};function zx(t){return nh.call(Mg,t)?!0:nh.call(Lg,t)?!1:$x.test(t)?Mg[t]=!0:(Lg[t]=!0,!1)}function Bx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Hx(t,e,n,r){if(e===null||typeof e>"u"||Bx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var zf=/[\-:]([a-z])/g;function Bf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zf,Bf);Ge[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zf,Bf);Ge[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zf,Bf);Ge[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hf(t,e,n,r){var i=Ge.hasOwnProperty(e)?Ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Hx(e,n,i,r)&&(n=null),r||i===null?zx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qn=Ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rl=Symbol.for("react.element"),Wi=Symbol.for("react.portal"),Gi=Symbol.for("react.fragment"),Wf=Symbol.for("react.strict_mode"),rh=Symbol.for("react.profiler"),s1=Symbol.for("react.provider"),o1=Symbol.for("react.context"),Gf=Symbol.for("react.forward_ref"),ih=Symbol.for("react.suspense"),sh=Symbol.for("react.suspense_list"),Kf=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),a1=Symbol.for("react.offscreen"),Fg=Symbol.iterator;function no(t){return t===null||typeof t!="object"?null:(t=Fg&&t[Fg]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,ad;function po(t){if(ad===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ad=e&&e[1]||""}return`
`+ad+t}var ld=!1;function ud(t,e){if(!t||ld)return"";ld=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{ld=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?po(t):""}function Wx(t){switch(t.tag){case 5:return po(t.type);case 16:return po("Lazy");case 13:return po("Suspense");case 19:return po("SuspenseList");case 0:case 2:case 15:return t=ud(t.type,!1),t;case 11:return t=ud(t.type.render,!1),t;case 1:return t=ud(t.type,!0),t;default:return""}}function oh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gi:return"Fragment";case Wi:return"Portal";case rh:return"Profiler";case Wf:return"StrictMode";case ih:return"Suspense";case sh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case o1:return(t.displayName||"Context")+".Consumer";case s1:return(t._context.displayName||"Context")+".Provider";case Gf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kf:return e=t.displayName||null,e!==null?e:oh(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return oh(t(e))}catch{}}return null}function Gx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oh(e);case 8:return e===Wf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function l1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Kx(t){var e=l1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function il(t){t._valueTracker||(t._valueTracker=Kx(t))}function u1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=l1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ah(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function c1(t,e){e=e.checked,e!=null&&Hf(t,"checked",e,!1)}function lh(t,e){c1(t,e);var n=Pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uh(t,e.type,n):e.hasOwnProperty("defaultValue")&&uh(t,e.type,Pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uh(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var mo=Array.isArray;function os(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Pr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ch(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ug(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(mo(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pr(n)}}function d1(t,e){var n=Pr(e.value),r=Pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $g(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function h1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?h1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sl,f1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sl=sl||document.createElement("div"),sl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qx=["Webkit","ms","Moz","O"];Object.keys(xo).forEach(function(t){qx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xo[e]=xo[t]})});function p1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xo.hasOwnProperty(t)&&xo[t]?(""+e).trim():e+"px"}function m1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=p1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Qx=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hh(t,e){if(e){if(Qx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function fh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ph=null;function qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mh=null,as=null,ls=null;function zg(t){if(t=xa(t)){if(typeof mh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Qu(e),mh(t.stateNode,t.type,e))}}function g1(t){as?ls?ls.push(t):ls=[t]:as=t}function y1(){if(as){var t=as,e=ls;if(ls=as=null,zg(t),e)for(t=0;t<e.length;t++)zg(e[t])}}function v1(t,e){return t(e)}function _1(){}var cd=!1;function w1(t,e,n){if(cd)return t(e,n);cd=!0;try{return v1(t,e,n)}finally{cd=!1,(as!==null||ls!==null)&&(_1(),y1())}}function Wo(t,e){var n=t.stateNode;if(n===null)return null;var r=Qu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var gh=!1;if($n)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){gh=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{gh=!1}function Yx(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var So=!1,Ql=null,Yl=!1,yh=null,Xx={onError:function(t){So=!0,Ql=t}};function Jx(t,e,n,r,i,s,o,l,u){So=!1,Ql=null,Yx.apply(Xx,arguments)}function Zx(t,e,n,r,i,s,o,l,u){if(Jx.apply(this,arguments),So){if(So){var c=Ql;So=!1,Ql=null}else throw Error(j(198));Yl||(Yl=!0,yh=c)}}function Ri(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function E1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bg(t){if(Ri(t)!==t)throw Error(j(188))}function eS(t){var e=t.alternate;if(!e){if(e=Ri(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bg(i),t;if(s===r)return Bg(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function I1(t){return t=eS(t),t!==null?T1(t):null}function T1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=T1(t);if(e!==null)return e;t=t.sibling}return null}var x1=Nt.unstable_scheduleCallback,Hg=Nt.unstable_cancelCallback,tS=Nt.unstable_shouldYield,nS=Nt.unstable_requestPaint,Pe=Nt.unstable_now,rS=Nt.unstable_getCurrentPriorityLevel,Qf=Nt.unstable_ImmediatePriority,S1=Nt.unstable_UserBlockingPriority,Xl=Nt.unstable_NormalPriority,iS=Nt.unstable_LowPriority,k1=Nt.unstable_IdlePriority,Wu=null,gn=null;function sS(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(Wu,t,void 0,(t.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:lS,oS=Math.log,aS=Math.LN2;function lS(t){return t>>>=0,t===0?32:31-(oS(t)/aS|0)|0}var ol=64,al=4194304;function go(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=go(l):(s&=o,s!==0&&(r=go(s)))}else o=n&~i,o!==0?r=go(o):s!==0&&(r=go(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-tn(e),i=1<<n,r|=t[n],e&=~i;return r}function uS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-tn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=uS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function vh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function A1(){var t=ol;return ol<<=1,!(ol&4194240)&&(ol=64),t}function dd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ia(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-tn(e),t[e]=n}function dS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-tn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Yf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-tn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function P1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var b1,Xf,C1,R1,N1,_h=!1,ll=[],yr=null,vr=null,_r=null,Go=new Map,Ko=new Map,sr=[],hS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wg(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(e.pointerId)}}function io(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=xa(e),e!==null&&Xf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function fS(t,e,n,r,i){switch(e){case"focusin":return yr=io(yr,t,e,n,r,i),!0;case"dragenter":return vr=io(vr,t,e,n,r,i),!0;case"mouseover":return _r=io(_r,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Go.set(s,io(Go.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ko.set(s,io(Ko.get(s)||null,t,e,n,r,i)),!0}return!1}function O1(t){var e=ni(t.target);if(e!==null){var n=Ri(e);if(n!==null){if(e=n.tag,e===13){if(e=E1(n),e!==null){t.blockedOn=e,N1(t.priority,function(){C1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ph=r,n.target.dispatchEvent(r),ph=null}else return e=xa(n),e!==null&&Xf(e),t.blockedOn=n,!1;e.shift()}return!0}function Gg(t,e,n){bl(t)&&n.delete(e)}function pS(){_h=!1,yr!==null&&bl(yr)&&(yr=null),vr!==null&&bl(vr)&&(vr=null),_r!==null&&bl(_r)&&(_r=null),Go.forEach(Gg),Ko.forEach(Gg)}function so(t,e){t.blockedOn===e&&(t.blockedOn=null,_h||(_h=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,pS)))}function qo(t){function e(i){return so(i,t)}if(0<ll.length){so(ll[0],t);for(var n=1;n<ll.length;n++){var r=ll[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yr!==null&&so(yr,t),vr!==null&&so(vr,t),_r!==null&&so(_r,t),Go.forEach(e),Ko.forEach(e),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)O1(n),n.blockedOn===null&&sr.shift()}var us=Qn.ReactCurrentBatchConfig,Zl=!0;function mS(t,e,n,r){var i=le,s=us.transition;us.transition=null;try{le=1,Jf(t,e,n,r)}finally{le=i,us.transition=s}}function gS(t,e,n,r){var i=le,s=us.transition;us.transition=null;try{le=4,Jf(t,e,n,r)}finally{le=i,us.transition=s}}function Jf(t,e,n,r){if(Zl){var i=wh(t,e,n,r);if(i===null)Ed(t,e,r,eu,n),Wg(t,r);else if(fS(i,t,e,n,r))r.stopPropagation();else if(Wg(t,r),e&4&&-1<hS.indexOf(t)){for(;i!==null;){var s=xa(i);if(s!==null&&b1(s),s=wh(t,e,n,r),s===null&&Ed(t,e,r,eu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ed(t,e,r,null,n)}}var eu=null;function wh(t,e,n,r){if(eu=null,t=qf(r),t=ni(t),t!==null)if(e=Ri(t),e===null)t=null;else if(n=e.tag,n===13){if(t=E1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return eu=t,null}function D1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rS()){case Qf:return 1;case S1:return 4;case Xl:case iS:return 16;case k1:return 536870912;default:return 16}default:return 16}}var hr=null,Zf=null,Cl=null;function L1(){if(Cl)return Cl;var t,e=Zf,n=e.length,r,i="value"in hr?hr.value:hr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Cl=i.slice(t,1<r?1-r:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function Kg(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ul:Kg,this.isPropagationStopped=Kg,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ep=Dt(Ns),Ta=xe({},Ns,{view:0,detail:0}),yS=Dt(Ta),hd,fd,oo,Gu=xe({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(hd=t.screenX-oo.screenX,fd=t.screenY-oo.screenY):fd=hd=0,oo=t),hd)},movementY:function(t){return"movementY"in t?t.movementY:fd}}),qg=Dt(Gu),vS=xe({},Gu,{dataTransfer:0}),_S=Dt(vS),wS=xe({},Ta,{relatedTarget:0}),pd=Dt(wS),ES=xe({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),IS=Dt(ES),TS=xe({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xS=Dt(TS),SS=xe({},Ns,{data:0}),Qg=Dt(SS),kS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PS[t])?!!e[t]:!1}function tp(){return bS}var CS=xe({},Ta,{key:function(t){if(t.key){var e=kS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?AS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tp,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),RS=Dt(CS),NS=xe({},Gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yg=Dt(NS),OS=xe({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tp}),DS=Dt(OS),LS=xe({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),MS=Dt(LS),FS=xe({},Gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jS=Dt(FS),VS=[9,13,27,32],np=$n&&"CompositionEvent"in window,ko=null;$n&&"documentMode"in document&&(ko=document.documentMode);var US=$n&&"TextEvent"in window&&!ko,M1=$n&&(!np||ko&&8<ko&&11>=ko),Xg=" ",Jg=!1;function F1(t,e){switch(t){case"keyup":return VS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function j1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ki=!1;function $S(t,e){switch(t){case"compositionend":return j1(e);case"keypress":return e.which!==32?null:(Jg=!0,Xg);case"textInput":return t=e.data,t===Xg&&Jg?null:t;default:return null}}function zS(t,e){if(Ki)return t==="compositionend"||!np&&F1(t,e)?(t=L1(),Cl=Zf=hr=null,Ki=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return M1&&e.locale!=="ko"?null:e.data;default:return null}}var BS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!BS[t.type]:e==="textarea"}function V1(t,e,n,r){g1(r),e=tu(e,"onChange"),0<e.length&&(n=new ep("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ao=null,Qo=null;function HS(t){Y1(t,0)}function Ku(t){var e=Yi(t);if(u1(e))return t}function WS(t,e){if(t==="change")return e}var U1=!1;if($n){var md;if($n){var gd="oninput"in document;if(!gd){var ey=document.createElement("div");ey.setAttribute("oninput","return;"),gd=typeof ey.oninput=="function"}md=gd}else md=!1;U1=md&&(!document.documentMode||9<document.documentMode)}function ty(){Ao&&(Ao.detachEvent("onpropertychange",$1),Qo=Ao=null)}function $1(t){if(t.propertyName==="value"&&Ku(Qo)){var e=[];V1(e,Qo,t,qf(t)),w1(HS,e)}}function GS(t,e,n){t==="focusin"?(ty(),Ao=e,Qo=n,Ao.attachEvent("onpropertychange",$1)):t==="focusout"&&ty()}function KS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ku(Qo)}function qS(t,e){if(t==="click")return Ku(e)}function QS(t,e){if(t==="input"||t==="change")return Ku(e)}function YS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var rn=typeof Object.is=="function"?Object.is:YS;function Yo(t,e){if(rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nh.call(e,i)||!rn(t[i],e[i]))return!1}return!0}function ny(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ry(t,e){var n=ny(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ny(n)}}function z1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?z1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function B1(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function rp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function XS(t){var e=B1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&z1(n.ownerDocument.documentElement,n)){if(r!==null&&rp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ry(n,s);var o=ry(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var JS=$n&&"documentMode"in document&&11>=document.documentMode,qi=null,Eh=null,Po=null,Ih=!1;function iy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ih||qi==null||qi!==ql(r)||(r=qi,"selectionStart"in r&&rp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Po&&Yo(Po,r)||(Po=r,r=tu(Eh,"onSelect"),0<r.length&&(e=new ep("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=qi)))}function cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qi={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},yd={},H1={};$n&&(H1=document.createElement("div").style,"AnimationEvent"in window||(delete Qi.animationend.animation,delete Qi.animationiteration.animation,delete Qi.animationstart.animation),"TransitionEvent"in window||delete Qi.transitionend.transition);function qu(t){if(yd[t])return yd[t];if(!Qi[t])return t;var e=Qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in H1)return yd[t]=e[n];return t}var W1=qu("animationend"),G1=qu("animationiteration"),K1=qu("animationstart"),q1=qu("transitionend"),Q1=new Map,sy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){Q1.set(t,e),Ci(e,[t])}for(var vd=0;vd<sy.length;vd++){var _d=sy[vd],ZS=_d.toLowerCase(),ek=_d[0].toUpperCase()+_d.slice(1);jr(ZS,"on"+ek)}jr(W1,"onAnimationEnd");jr(G1,"onAnimationIteration");jr(K1,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(q1,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tk=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function oy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Zx(r,e,void 0,t),t.currentTarget=null}function Y1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;oy(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;oy(i,l,c),s=u}}}if(Yl)throw t=yh,Yl=!1,yh=null,t}function me(t,e){var n=e[Ah];n===void 0&&(n=e[Ah]=new Set);var r=t+"__bubble";n.has(r)||(X1(e,t,2,!1),n.add(r))}function wd(t,e,n){var r=0;e&&(r|=4),X1(n,t,r,e)}var dl="_reactListening"+Math.random().toString(36).slice(2);function Xo(t){if(!t[dl]){t[dl]=!0,i1.forEach(function(n){n!=="selectionchange"&&(tk.has(n)||wd(n,!1,t),wd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[dl]||(e[dl]=!0,wd("selectionchange",!1,e))}}function X1(t,e,n,r){switch(D1(e)){case 1:var i=mS;break;case 4:i=gS;break;default:i=Jf}n=i.bind(null,e,n,t),i=void 0,!gh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ed(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ni(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}w1(function(){var c=s,h=qf(n),p=[];e:{var m=Q1.get(t);if(m!==void 0){var E=ep,k=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":E=RS;break;case"focusin":k="focus",E=pd;break;case"focusout":k="blur",E=pd;break;case"beforeblur":case"afterblur":E=pd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=qg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=_S;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=DS;break;case W1:case G1:case K1:E=IS;break;case q1:E=MS;break;case"scroll":E=yS;break;case"wheel":E=jS;break;case"copy":case"cut":case"paste":E=xS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Yg}var R=(e&4)!==0,C=!R&&t==="scroll",w=R?m!==null?m+"Capture":null:m;R=[];for(var _=c,S;_!==null;){S=_;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,w!==null&&(D=Wo(_,w),D!=null&&R.push(Jo(_,D,S)))),C)break;_=_.return}0<R.length&&(m=new E(m,k,null,n,h),p.push({event:m,listeners:R}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==ph&&(k=n.relatedTarget||n.fromElement)&&(ni(k)||k[zn]))break e;if((E||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,E?(k=n.relatedTarget||n.toElement,E=c,k=k?ni(k):null,k!==null&&(C=Ri(k),k!==C||k.tag!==5&&k.tag!==6)&&(k=null)):(E=null,k=c),E!==k)){if(R=qg,D="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(R=Yg,D="onPointerLeave",w="onPointerEnter",_="pointer"),C=E==null?m:Yi(E),S=k==null?m:Yi(k),m=new R(D,_+"leave",E,n,h),m.target=C,m.relatedTarget=S,D=null,ni(h)===c&&(R=new R(w,_+"enter",k,n,h),R.target=S,R.relatedTarget=C,D=R),C=D,E&&k)t:{for(R=E,w=k,_=0,S=R;S;S=Bi(S))_++;for(S=0,D=w;D;D=Bi(D))S++;for(;0<_-S;)R=Bi(R),_--;for(;0<S-_;)w=Bi(w),S--;for(;_--;){if(R===w||w!==null&&R===w.alternate)break t;R=Bi(R),w=Bi(w)}R=null}else R=null;E!==null&&ay(p,m,E,R,!1),k!==null&&C!==null&&ay(p,C,k,R,!0)}}e:{if(m=c?Yi(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var M=WS;else if(Zg(m))if(U1)M=QS;else{M=KS;var U=GS}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=qS);if(M&&(M=M(t,c))){V1(p,M,n,h);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&uh(m,"number",m.value)}switch(U=c?Yi(c):window,t){case"focusin":(Zg(U)||U.contentEditable==="true")&&(qi=U,Eh=c,Po=null);break;case"focusout":Po=Eh=qi=null;break;case"mousedown":Ih=!0;break;case"contextmenu":case"mouseup":case"dragend":Ih=!1,iy(p,n,h);break;case"selectionchange":if(JS)break;case"keydown":case"keyup":iy(p,n,h)}var T;if(np)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ki?F1(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(M1&&n.locale!=="ko"&&(Ki||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ki&&(T=L1()):(hr=h,Zf="value"in hr?hr.value:hr.textContent,Ki=!0)),U=tu(c,v),0<U.length&&(v=new Qg(v,t,null,n,h),p.push({event:v,listeners:U}),T?v.data=T:(T=j1(n),T!==null&&(v.data=T)))),(T=US?$S(t,n):zS(t,n))&&(c=tu(c,"onBeforeInput"),0<c.length&&(h=new Qg("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=T))}Y1(p,e)})}function Jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Wo(t,n),s!=null&&r.unshift(Jo(t,s,i)),s=Wo(t,e),s!=null&&r.push(Jo(t,s,i))),t=t.return}return r}function Bi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ay(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Wo(n,s),u!=null&&o.unshift(Jo(n,u,l))):i||(u=Wo(n,s),u!=null&&o.push(Jo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var nk=/\r\n?/g,rk=/\u0000|\uFFFD/g;function ly(t){return(typeof t=="string"?t:""+t).replace(nk,`
`).replace(rk,"")}function hl(t,e,n){if(e=ly(e),ly(t)!==e&&n)throw Error(j(425))}function nu(){}var Th=null,xh=null;function Sh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kh=typeof setTimeout=="function"?setTimeout:void 0,ik=typeof clearTimeout=="function"?clearTimeout:void 0,uy=typeof Promise=="function"?Promise:void 0,sk=typeof queueMicrotask=="function"?queueMicrotask:typeof uy<"u"?function(t){return uy.resolve(null).then(t).catch(ok)}:kh;function ok(t){setTimeout(function(){throw t})}function Id(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qo(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),hn="__reactFiber$"+Os,Zo="__reactProps$"+Os,zn="__reactContainer$"+Os,Ah="__reactEvents$"+Os,ak="__reactListeners$"+Os,lk="__reactHandles$"+Os;function ni(t){var e=t[hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zn]||n[hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cy(t);t!==null;){if(n=t[hn])return n;t=cy(t)}return e}t=n,n=t.parentNode}return null}function xa(t){return t=t[hn]||t[zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Yi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Qu(t){return t[Zo]||null}var Ph=[],Xi=-1;function Vr(t){return{current:t}}function ge(t){0>Xi||(t.current=Ph[Xi],Ph[Xi]=null,Xi--)}function de(t,e){Xi++,Ph[Xi]=t.current,t.current=e}var br={},rt=Vr(br),gt=Vr(!1),gi=br;function vs(t,e){var n=t.type.contextTypes;if(!n)return br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yt(t){return t=t.childContextTypes,t!=null}function ru(){ge(gt),ge(rt)}function dy(t,e,n){if(rt.current!==br)throw Error(j(168));de(rt,e),de(gt,n)}function J1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,Gx(t)||"Unknown",i));return xe({},n,r)}function iu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,gi=rt.current,de(rt,t),de(gt,gt.current),!0}function hy(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=J1(t,e,gi),r.__reactInternalMemoizedMergedChildContext=t,ge(gt),ge(rt),de(rt,t)):ge(gt),de(gt,n)}var bn=null,Yu=!1,Td=!1;function Z1(t){bn===null?bn=[t]:bn.push(t)}function uk(t){Yu=!0,Z1(t)}function Ur(){if(!Td&&bn!==null){Td=!0;var t=0,e=le;try{var n=bn;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}bn=null,Yu=!1}catch(i){throw bn!==null&&(bn=bn.slice(t+1)),x1(Qf,Ur),i}finally{le=e,Td=!1}}return null}var Ji=[],Zi=0,su=null,ou=0,Mt=[],Ft=0,yi=null,Rn=1,Nn="";function Yr(t,e){Ji[Zi++]=ou,Ji[Zi++]=su,su=t,ou=e}function e_(t,e,n){Mt[Ft++]=Rn,Mt[Ft++]=Nn,Mt[Ft++]=yi,yi=t;var r=Rn;t=Nn;var i=32-tn(r)-1;r&=~(1<<i),n+=1;var s=32-tn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rn=1<<32-tn(e)+i|n<<i|r,Nn=s+t}else Rn=1<<s|n<<i|r,Nn=t}function ip(t){t.return!==null&&(Yr(t,1),e_(t,1,0))}function sp(t){for(;t===su;)su=Ji[--Zi],Ji[Zi]=null,ou=Ji[--Zi],Ji[Zi]=null;for(;t===yi;)yi=Mt[--Ft],Mt[Ft]=null,Nn=Mt[--Ft],Mt[Ft]=null,Rn=Mt[--Ft],Mt[Ft]=null}var Pt=null,At=null,ve=!1,Yt=null;function t_(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,At=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,At=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=yi!==null?{id:Rn,overflow:Nn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,At=null,!0):!1;default:return!1}}function bh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ch(t){if(ve){var e=At;if(e){var n=e;if(!fy(t,e)){if(bh(t))throw Error(j(418));e=wr(n.nextSibling);var r=Pt;e&&fy(t,e)?t_(r,n):(t.flags=t.flags&-4097|2,ve=!1,Pt=t)}}else{if(bh(t))throw Error(j(418));t.flags=t.flags&-4097|2,ve=!1,Pt=t}}}function py(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function fl(t){if(t!==Pt)return!1;if(!ve)return py(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sh(t.type,t.memoizedProps)),e&&(e=At)){if(bh(t))throw n_(),Error(j(418));for(;e;)t_(t,e),e=wr(e.nextSibling)}if(py(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){At=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}At=null}}else At=Pt?wr(t.stateNode.nextSibling):null;return!0}function n_(){for(var t=At;t;)t=wr(t.nextSibling)}function _s(){At=Pt=null,ve=!1}function op(t){Yt===null?Yt=[t]:Yt.push(t)}var ck=Qn.ReactCurrentBatchConfig;function ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function pl(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function my(t){var e=t._init;return e(t._payload)}function r_(t){function e(w,_){if(t){var S=w.deletions;S===null?(w.deletions=[_],w.flags|=16):S.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=xr(w,_),w.index=0,w.sibling=null,w}function s(w,_,S){return w.index=S,t?(S=w.alternate,S!==null?(S=S.index,S<_?(w.flags|=2,_):S):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,S,D){return _===null||_.tag!==6?(_=Cd(S,w.mode,D),_.return=w,_):(_=i(_,S),_.return=w,_)}function u(w,_,S,D){var M=S.type;return M===Gi?h(w,_,S.props.children,D,S.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===rr&&my(M)===_.type)?(D=i(_,S.props),D.ref=ao(w,_,S),D.return=w,D):(D=jl(S.type,S.key,S.props,null,w.mode,D),D.ref=ao(w,_,S),D.return=w,D)}function c(w,_,S,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=Rd(S,w.mode,D),_.return=w,_):(_=i(_,S.children||[]),_.return=w,_)}function h(w,_,S,D,M){return _===null||_.tag!==7?(_=ui(S,w.mode,D,M),_.return=w,_):(_=i(_,S),_.return=w,_)}function p(w,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Cd(""+_,w.mode,S),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case rl:return S=jl(_.type,_.key,_.props,null,w.mode,S),S.ref=ao(w,null,_),S.return=w,S;case Wi:return _=Rd(_,w.mode,S),_.return=w,_;case rr:var D=_._init;return p(w,D(_._payload),S)}if(mo(_)||no(_))return _=ui(_,w.mode,S,null),_.return=w,_;pl(w,_)}return null}function m(w,_,S,D){var M=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return M!==null?null:l(w,_,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case rl:return S.key===M?u(w,_,S,D):null;case Wi:return S.key===M?c(w,_,S,D):null;case rr:return M=S._init,m(w,_,M(S._payload),D)}if(mo(S)||no(S))return M!==null?null:h(w,_,S,D,null);pl(w,S)}return null}function E(w,_,S,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return w=w.get(S)||null,l(_,w,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case rl:return w=w.get(D.key===null?S:D.key)||null,u(_,w,D,M);case Wi:return w=w.get(D.key===null?S:D.key)||null,c(_,w,D,M);case rr:var U=D._init;return E(w,_,S,U(D._payload),M)}if(mo(D)||no(D))return w=w.get(S)||null,h(_,w,D,M,null);pl(_,D)}return null}function k(w,_,S,D){for(var M=null,U=null,T=_,v=_=0,x=null;T!==null&&v<S.length;v++){T.index>v?(x=T,T=null):x=T.sibling;var I=m(w,T,S[v],D);if(I===null){T===null&&(T=x);break}t&&T&&I.alternate===null&&e(w,T),_=s(I,_,v),U===null?M=I:U.sibling=I,U=I,T=x}if(v===S.length)return n(w,T),ve&&Yr(w,v),M;if(T===null){for(;v<S.length;v++)T=p(w,S[v],D),T!==null&&(_=s(T,_,v),U===null?M=T:U.sibling=T,U=T);return ve&&Yr(w,v),M}for(T=r(w,T);v<S.length;v++)x=E(T,w,v,S[v],D),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?v:x.key),_=s(x,_,v),U===null?M=x:U.sibling=x,U=x);return t&&T.forEach(function(b){return e(w,b)}),ve&&Yr(w,v),M}function R(w,_,S,D){var M=no(S);if(typeof M!="function")throw Error(j(150));if(S=M.call(S),S==null)throw Error(j(151));for(var U=M=null,T=_,v=_=0,x=null,I=S.next();T!==null&&!I.done;v++,I=S.next()){T.index>v?(x=T,T=null):x=T.sibling;var b=m(w,T,I.value,D);if(b===null){T===null&&(T=x);break}t&&T&&b.alternate===null&&e(w,T),_=s(b,_,v),U===null?M=b:U.sibling=b,U=b,T=x}if(I.done)return n(w,T),ve&&Yr(w,v),M;if(T===null){for(;!I.done;v++,I=S.next())I=p(w,I.value,D),I!==null&&(_=s(I,_,v),U===null?M=I:U.sibling=I,U=I);return ve&&Yr(w,v),M}for(T=r(w,T);!I.done;v++,I=S.next())I=E(T,w,v,I.value,D),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?v:I.key),_=s(I,_,v),U===null?M=I:U.sibling=I,U=I);return t&&T.forEach(function(N){return e(w,N)}),ve&&Yr(w,v),M}function C(w,_,S,D){if(typeof S=="object"&&S!==null&&S.type===Gi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case rl:e:{for(var M=S.key,U=_;U!==null;){if(U.key===M){if(M=S.type,M===Gi){if(U.tag===7){n(w,U.sibling),_=i(U,S.props.children),_.return=w,w=_;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===rr&&my(M)===U.type){n(w,U.sibling),_=i(U,S.props),_.ref=ao(w,U,S),_.return=w,w=_;break e}n(w,U);break}else e(w,U);U=U.sibling}S.type===Gi?(_=ui(S.props.children,w.mode,D,S.key),_.return=w,w=_):(D=jl(S.type,S.key,S.props,null,w.mode,D),D.ref=ao(w,_,S),D.return=w,w=D)}return o(w);case Wi:e:{for(U=S.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(w,_.sibling),_=i(_,S.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=Rd(S,w.mode,D),_.return=w,w=_}return o(w);case rr:return U=S._init,C(w,_,U(S._payload),D)}if(mo(S))return k(w,_,S,D);if(no(S))return R(w,_,S,D);pl(w,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,S),_.return=w,w=_):(n(w,_),_=Cd(S,w.mode,D),_.return=w,w=_),o(w)):n(w,_)}return C}var ws=r_(!0),i_=r_(!1),au=Vr(null),lu=null,es=null,ap=null;function lp(){ap=es=lu=null}function up(t){var e=au.current;ge(au),t._currentValue=e}function Rh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function cs(t,e){lu=t,ap=es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mt=!0),t.firstContext=null)}function $t(t){var e=t._currentValue;if(ap!==t)if(t={context:t,memoizedValue:e,next:null},es===null){if(lu===null)throw Error(j(308));es=t,lu.dependencies={lanes:0,firstContext:t}}else es=es.next=t;return e}var ri=null;function cp(t){ri===null?ri=[t]:ri.push(t)}function s_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Bn(t,r)}function Bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ir=!1;function dp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function o_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Bn(t,n)}return i=r.interleaved,i===null?(e.next=e,cp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Bn(t,n)}function Nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yf(t,n)}}function gy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uu(t,e,n,r){var i=t.updateQueue;ir=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,h=c=u=null,l=s;do{var m=l.lane,E=l.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,R=l;switch(m=e,E=n,R.tag){case 1:if(k=R.payload,typeof k=="function"){p=k.call(E,p,m);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=R.payload,m=typeof k=="function"?k.call(E,p,m):k,m==null)break e;p=xe({},p,m);break e;case 2:ir=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else E={eventTime:E,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=E,u=p):h=h.next=E,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);_i|=o,t.lanes=o,t.memoizedState=p}}function yy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Sa={},yn=Vr(Sa),ea=Vr(Sa),ta=Vr(Sa);function ii(t){if(t===Sa)throw Error(j(174));return t}function hp(t,e){switch(de(ta,e),de(ea,t),de(yn,Sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=dh(e,t)}ge(yn),de(yn,e)}function Es(){ge(yn),ge(ea),ge(ta)}function a_(t){ii(ta.current);var e=ii(yn.current),n=dh(e,t.type);e!==n&&(de(ea,t),de(yn,n))}function fp(t){ea.current===t&&(ge(yn),ge(ea))}var Ee=Vr(0);function cu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xd=[];function pp(){for(var t=0;t<xd.length;t++)xd[t]._workInProgressVersionPrimary=null;xd.length=0}var Ol=Qn.ReactCurrentDispatcher,Sd=Qn.ReactCurrentBatchConfig,vi=0,Te=null,Re=null,Me=null,du=!1,bo=!1,na=0,dk=0;function Ye(){throw Error(j(321))}function mp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!rn(t[n],e[n]))return!1;return!0}function gp(t,e,n,r,i,s){if(vi=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ol.current=t===null||t.memoizedState===null?mk:gk,t=n(r,i),bo){s=0;do{if(bo=!1,na=0,25<=s)throw Error(j(301));s+=1,Me=Re=null,e.updateQueue=null,Ol.current=yk,t=n(r,i)}while(bo)}if(Ol.current=hu,e=Re!==null&&Re.next!==null,vi=0,Me=Re=Te=null,du=!1,e)throw Error(j(300));return t}function yp(){var t=na!==0;return na=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Te.memoizedState=Me=t:Me=Me.next=t,Me}function zt(){if(Re===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Re.next;var e=Me===null?Te.memoizedState:Me.next;if(e!==null)Me=e,Re=t;else{if(t===null)throw Error(j(310));Re=t,t={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Me===null?Te.memoizedState=Me=t:Me=Me.next=t}return Me}function ra(t,e){return typeof e=="function"?e(t):e}function kd(t){var e=zt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var h=c.lane;if((vi&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Te.lanes|=h,_i|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,rn(r,e.memoizedState)||(mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,_i|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ad(t){var e=zt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);rn(s,e.memoizedState)||(mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function l_(){}function u_(t,e){var n=Te,r=zt(),i=e(),s=!rn(r.memoizedState,i);if(s&&(r.memoizedState=i,mt=!0),r=r.queue,vp(h_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,ia(9,d_.bind(null,n,r,i,e),void 0,null),je===null)throw Error(j(349));vi&30||c_(n,e,i)}return i}function c_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function d_(t,e,n,r){e.value=n,e.getSnapshot=r,f_(e)&&p_(t)}function h_(t,e,n){return n(function(){f_(e)&&p_(t)})}function f_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!rn(t,n)}catch{return!0}}function p_(t){var e=Bn(t,1);e!==null&&nn(e,t,1,-1)}function vy(t){var e=cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},e.queue=t,t=t.dispatch=pk.bind(null,Te,t),[e.memoizedState,t]}function ia(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function m_(){return zt().memoizedState}function Dl(t,e,n,r){var i=cn();Te.flags|=t,i.memoizedState=ia(1|e,n,void 0,r===void 0?null:r)}function Xu(t,e,n,r){var i=zt();r=r===void 0?null:r;var s=void 0;if(Re!==null){var o=Re.memoizedState;if(s=o.destroy,r!==null&&mp(r,o.deps)){i.memoizedState=ia(e,n,s,r);return}}Te.flags|=t,i.memoizedState=ia(1|e,n,s,r)}function _y(t,e){return Dl(8390656,8,t,e)}function vp(t,e){return Xu(2048,8,t,e)}function g_(t,e){return Xu(4,2,t,e)}function y_(t,e){return Xu(4,4,t,e)}function v_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function __(t,e,n){return n=n!=null?n.concat([t]):null,Xu(4,4,v_.bind(null,e,t),n)}function _p(){}function w_(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function E_(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function I_(t,e,n){return vi&21?(rn(n,e)||(n=A1(),Te.lanes|=n,_i|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=n)}function hk(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=Sd.transition;Sd.transition={};try{t(!1),e()}finally{le=n,Sd.transition=r}}function T_(){return zt().memoizedState}function fk(t,e,n){var r=Tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},x_(t))S_(e,n);else if(n=s_(t,e,n,r),n!==null){var i=ut();nn(n,t,r,i),k_(n,e,r)}}function pk(t,e,n){var r=Tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(x_(t))S_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,rn(l,o)){var u=e.interleaved;u===null?(i.next=i,cp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=s_(t,e,i,r),n!==null&&(i=ut(),nn(n,t,r,i),k_(n,e,r))}}function x_(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function S_(t,e){bo=du=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function k_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yf(t,n)}}var hu={readContext:$t,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},mk={readContext:$t,useCallback:function(t,e){return cn().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:_y,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Dl(4194308,4,v_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Dl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Dl(4,2,t,e)},useMemo:function(t,e){var n=cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=fk.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=cn();return t={current:t},e.memoizedState=t},useState:vy,useDebugValue:_p,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=vy(!1),e=t[0];return t=hk.bind(null,t[1]),cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=cn();if(ve){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),je===null)throw Error(j(349));vi&30||c_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,_y(h_.bind(null,r,s,t),[t]),r.flags|=2048,ia(9,d_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=cn(),e=je.identifierPrefix;if(ve){var n=Nn,r=Rn;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gk={readContext:$t,useCallback:w_,useContext:$t,useEffect:vp,useImperativeHandle:__,useInsertionEffect:g_,useLayoutEffect:y_,useMemo:E_,useReducer:kd,useRef:m_,useState:function(){return kd(ra)},useDebugValue:_p,useDeferredValue:function(t){var e=zt();return I_(e,Re.memoizedState,t)},useTransition:function(){var t=kd(ra)[0],e=zt().memoizedState;return[t,e]},useMutableSource:l_,useSyncExternalStore:u_,useId:T_,unstable_isNewReconciler:!1},yk={readContext:$t,useCallback:w_,useContext:$t,useEffect:vp,useImperativeHandle:__,useInsertionEffect:g_,useLayoutEffect:y_,useMemo:E_,useReducer:Ad,useRef:m_,useState:function(){return Ad(ra)},useDebugValue:_p,useDeferredValue:function(t){var e=zt();return Re===null?e.memoizedState=t:I_(e,Re.memoizedState,t)},useTransition:function(){var t=Ad(ra)[0],e=zt().memoizedState;return[t,e]},useMutableSource:l_,useSyncExternalStore:u_,useId:T_,unstable_isNewReconciler:!1};function qt(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Nh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ju={isMounted:function(t){return(t=t._reactInternals)?Ri(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),i=Tr(t),s=Mn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(nn(e,t,i,r),Nl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),i=Tr(t),s=Mn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(nn(e,t,i,r),Nl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=Tr(t),i=Mn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Er(t,i,r),e!==null&&(nn(e,t,r,n),Nl(e,t,r))}};function wy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yo(n,r)||!Yo(i,s):!0}function A_(t,e,n){var r=!1,i=br,s=e.contextType;return typeof s=="object"&&s!==null?s=$t(s):(i=yt(e)?gi:rt.current,r=e.contextTypes,s=(r=r!=null)?vs(t,i):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ju,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ey(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ju.enqueueReplaceState(e,e.state,null)}function Oh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},dp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=$t(s):(s=yt(e)?gi:rt.current,i.context=vs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ju.enqueueReplaceState(i,i.state,null),uu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Is(t,e){try{var n="",r=e;do n+=Wx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Pd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Dh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vk=typeof WeakMap=="function"?WeakMap:Map;function P_(t,e,n){n=Mn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){pu||(pu=!0,Hh=r),Dh(t,e)},n}function b_(t,e,n){n=Mn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Dh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dh(t,e),typeof r!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Iy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new vk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Nk.bind(null,t,e,n),e.then(t,t))}function Ty(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mn(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var _k=Qn.ReactCurrentOwner,mt=!1;function lt(t,e,n,r){e.child=t===null?i_(e,null,n,r):ws(e,t.child,n,r)}function Sy(t,e,n,r,i){n=n.render;var s=e.ref;return cs(e,i),r=gp(t,e,n,r,s,i),n=yp(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(ve&&n&&ip(e),e.flags|=1,lt(t,e,r,i),e.child)}function ky(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ap(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,C_(t,e,s,r,i)):(t=jl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yo,n(o,r)&&t.ref===e.ref)return Hn(t,e,i)}return e.flags|=1,t=xr(s,r),t.ref=e.ref,t.return=e,e.child=t}function C_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Yo(s,r)&&t.ref===e.ref)if(mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(mt=!0);else return e.lanes=t.lanes,Hn(t,e,i)}return Lh(t,e,n,r,i)}function R_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(ns,kt),kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(ns,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(ns,kt),kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(ns,kt),kt|=r;return lt(t,e,i,n),e.child}function N_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lh(t,e,n,r,i){var s=yt(n)?gi:rt.current;return s=vs(e,s),cs(e,i),n=gp(t,e,n,r,s,i),r=yp(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(ve&&r&&ip(e),e.flags|=1,lt(t,e,n,i),e.child)}function Ay(t,e,n,r,i){if(yt(n)){var s=!0;iu(e)}else s=!1;if(cs(e,i),e.stateNode===null)Ll(t,e),A_(e,n,r),Oh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$t(c):(c=yt(n)?gi:rt.current,c=vs(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Ey(e,o,r,c),ir=!1;var m=e.memoizedState;o.state=m,uu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||gt.current||ir?(typeof h=="function"&&(Nh(e,n,h,r),u=e.memoizedState),(l=ir||wy(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,o_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:qt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=$t(u):(u=yt(n)?gi:rt.current,u=vs(e,u));var E=n.getDerivedStateFromProps;(h=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Ey(e,o,r,u),ir=!1,m=e.memoizedState,o.state=m,uu(e,r,o,i);var k=e.memoizedState;l!==p||m!==k||gt.current||ir?(typeof E=="function"&&(Nh(e,n,E,r),k=e.memoizedState),(c=ir||wy(e,n,c,r,m,k,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Mh(t,e,n,r,s,i)}function Mh(t,e,n,r,i,s){N_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hy(e,n,!1),Hn(t,e,s);r=e.stateNode,_k.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ws(e,t.child,null,s),e.child=ws(e,null,l,s)):lt(t,e,l,s),e.memoizedState=r.state,i&&hy(e,n,!0),e.child}function O_(t){var e=t.stateNode;e.pendingContext?dy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dy(t,e.context,!1),hp(t,e.containerInfo)}function Py(t,e,n,r,i){return _s(),op(i),e.flags|=256,lt(t,e,n,r),e.child}var Fh={dehydrated:null,treeContext:null,retryLane:0};function jh(t){return{baseLanes:t,cachePool:null,transitions:null}}function D_(t,e,n){var r=e.pendingProps,i=Ee.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(Ee,i&1),t===null)return Ch(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=tc(o,r,0,null),t=ui(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=jh(n),e.memoizedState=Fh,t):wp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return wk(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=xr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=xr(l,s):(s=ui(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?jh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Fh,r}return s=t.child,t=s.sibling,r=xr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function wp(t,e){return e=tc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ml(t,e,n,r){return r!==null&&op(r),ws(e,t.child,null,n),t=wp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Pd(Error(j(422))),ml(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=tc({mode:"visible",children:r.children},i,0,null),s=ui(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ws(e,t.child,null,o),e.child.memoizedState=jh(o),e.memoizedState=Fh,s);if(!(e.mode&1))return ml(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Pd(s,r,void 0),ml(t,e,o,r)}if(l=(o&t.childLanes)!==0,mt||l){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Bn(t,i),nn(r,t,i,-1))}return kp(),r=Pd(Error(j(421))),ml(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ok.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,At=wr(i.nextSibling),Pt=e,ve=!0,Yt=null,t!==null&&(Mt[Ft++]=Rn,Mt[Ft++]=Nn,Mt[Ft++]=yi,Rn=t.id,Nn=t.overflow,yi=e),e=wp(e,r.children),e.flags|=4096,e)}function by(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Rh(t.return,e,n)}function bd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function L_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(lt(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&by(t,n,e);else if(t.tag===19)by(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&cu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),bd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&cu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}bd(e,!0,n,null,s);break;case"together":bd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_i|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ek(t,e,n){switch(e.tag){case 3:O_(e),_s();break;case 5:a_(e);break;case 1:yt(e.type)&&iu(e);break;case 4:hp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(au,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?D_(t,e,n):(de(Ee,Ee.current&1),t=Hn(t,e,n),t!==null?t.sibling:null);de(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return L_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,R_(t,e,n)}return Hn(t,e,n)}var M_,Vh,F_,j_;M_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vh=function(){};F_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ii(yn.current);var s=null;switch(n){case"input":i=ah(t,i),r=ah(t,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=ch(t,i),r=ch(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=nu)}hh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};j_=function(t,e,n,r){n!==r&&(e.flags|=4)};function lo(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ik(t,e,n){var r=e.pendingProps;switch(sp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return yt(e.type)&&ru(),Xe(e),null;case 3:return r=e.stateNode,Es(),ge(gt),ge(rt),pp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yt!==null&&(Kh(Yt),Yt=null))),Vh(t,e),Xe(e),null;case 5:fp(e);var i=ii(ta.current);if(n=e.type,t!==null&&e.stateNode!=null)F_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return Xe(e),null}if(t=ii(yn.current),fl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[hn]=e,r[Zo]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<yo.length;i++)me(yo[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":jg(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":Ug(r,s),me("invalid",r)}hh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&hl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&hl(r.textContent,l,t),i=["children",""+l]):Bo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":il(r),Vg(r,s,!0);break;case"textarea":il(r),$g(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=nu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=h1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[hn]=e,t[Zo]=r,M_(t,e,!1,!1),e.stateNode=t;e:{switch(o=fh(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<yo.length;i++)me(yo[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":jg(t,r),i=ah(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),me("invalid",t);break;case"textarea":Ug(t,r),i=ch(t,r),me("invalid",t);break;default:i=r}hh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?m1(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&f1(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ho(t,u):typeof u=="number"&&Ho(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&Hf(t,s,u,o))}switch(n){case"input":il(t),Vg(t,r,!1);break;case"textarea":il(t),$g(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Pr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?os(t,!!r.multiple,s,!1):r.defaultValue!=null&&os(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=nu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)j_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=ii(ta.current),ii(yn.current),fl(e)){if(r=e.stateNode,n=e.memoizedProps,r[hn]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:hl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&hl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[hn]=e,e.stateNode=r}return Xe(e),null;case 13:if(ge(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&At!==null&&e.mode&1&&!(e.flags&128))n_(),_s(),e.flags|=98560,s=!1;else if(s=fl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[hn]=e}else _s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),s=!1}else Yt!==null&&(Kh(Yt),Yt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?Ne===0&&(Ne=3):kp())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return Es(),Vh(t,e),t===null&&Xo(e.stateNode.containerInfo),Xe(e),null;case 10:return up(e.type._context),Xe(e),null;case 17:return yt(e.type)&&ru(),Xe(e),null;case 19:if(ge(Ee),s=e.memoizedState,s===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)lo(s,!1);else{if(Ne!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cu(t),o!==null){for(e.flags|=128,lo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(Ee,Ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>Ts&&(e.flags|=128,r=!0,lo(s,!1),e.lanes=4194304)}else{if(!r)if(t=cu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),lo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return Xe(e),null}else 2*Pe()-s.renderingStartTime>Ts&&n!==1073741824&&(e.flags|=128,r=!0,lo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=Ee.current,de(Ee,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return Sp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kt&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function Tk(t,e){switch(sp(e),e.tag){case 1:return yt(e.type)&&ru(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Es(),ge(gt),ge(rt),pp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return fp(e),null;case 13:if(ge(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));_s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(Ee),null;case 4:return Es(),null;case 10:return up(e.type._context),null;case 22:case 23:return Sp(),null;case 24:return null;default:return null}}var gl=!1,et=!1,xk=typeof WeakSet=="function"?WeakSet:Set,B=null;function ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function Uh(t,e,n){try{n()}catch(r){ke(t,e,r)}}var Cy=!1;function Sk(t,e){if(Th=Zl,t=B1(),rp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,h=0,p=t,m=null;t:for(;;){for(var E;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(E=p.firstChild)!==null;)m=p,p=E;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++h===r&&(u=o),(E=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xh={focusedElem:t,selectionRange:n},Zl=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var R=k.memoizedProps,C=k.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?R:qt(e.type,R),C);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(D){ke(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return k=Cy,Cy=!1,k}function Co(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Uh(e,n,s)}i=i.next}while(i!==r)}}function Zu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $h(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function V_(t){var e=t.alternate;e!==null&&(t.alternate=null,V_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hn],delete e[Zo],delete e[Ah],delete e[ak],delete e[lk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function U_(t){return t.tag===5||t.tag===3||t.tag===4}function Ry(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||U_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nu));else if(r!==4&&(t=t.child,t!==null))for(zh(t,e,n),t=t.sibling;t!==null;)zh(t,e,n),t=t.sibling}function Bh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bh(t,e,n),t=t.sibling;t!==null;)Bh(t,e,n),t=t.sibling}var $e=null,Qt=!1;function er(t,e,n){for(n=n.child;n!==null;)$_(t,e,n),n=n.sibling}function $_(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(Wu,n)}catch{}switch(n.tag){case 5:et||ts(n,e);case 6:var r=$e,i=Qt;$e=null,er(t,e,n),$e=r,Qt=i,$e!==null&&(Qt?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Qt?(t=$e,n=n.stateNode,t.nodeType===8?Id(t.parentNode,n):t.nodeType===1&&Id(t,n),qo(t)):Id($e,n.stateNode));break;case 4:r=$e,i=Qt,$e=n.stateNode.containerInfo,Qt=!0,er(t,e,n),$e=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Uh(n,e,o),i=i.next}while(i!==r)}er(t,e,n);break;case 1:if(!et&&(ts(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ke(n,e,l)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,er(t,e,n),et=r):er(t,e,n);break;default:er(t,e,n)}}function Ny(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xk),e.forEach(function(r){var i=Dk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,Qt=!1;break e;case 3:$e=l.stateNode.containerInfo,Qt=!0;break e;case 4:$e=l.stateNode.containerInfo,Qt=!0;break e}l=l.return}if($e===null)throw Error(j(160));$_(s,o,i),$e=null,Qt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ke(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)z_(e,t),e=e.sibling}function z_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),un(t),r&4){try{Co(3,t,t.return),Zu(3,t)}catch(R){ke(t,t.return,R)}try{Co(5,t,t.return)}catch(R){ke(t,t.return,R)}}break;case 1:Kt(e,t),un(t),r&512&&n!==null&&ts(n,n.return);break;case 5:if(Kt(e,t),un(t),r&512&&n!==null&&ts(n,n.return),t.flags&32){var i=t.stateNode;try{Ho(i,"")}catch(R){ke(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&c1(i,s),fh(l,o);var c=fh(l,s);for(o=0;o<u.length;o+=2){var h=u[o],p=u[o+1];h==="style"?m1(i,p):h==="dangerouslySetInnerHTML"?f1(i,p):h==="children"?Ho(i,p):Hf(i,h,p,c)}switch(l){case"input":lh(i,s);break;case"textarea":d1(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?os(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?os(i,!!s.multiple,s.defaultValue,!0):os(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zo]=s}catch(R){ke(t,t.return,R)}}break;case 6:if(Kt(e,t),un(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){ke(t,t.return,R)}}break;case 3:if(Kt(e,t),un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qo(e.containerInfo)}catch(R){ke(t,t.return,R)}break;case 4:Kt(e,t),un(t);break;case 13:Kt(e,t),un(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Tp=Pe())),r&4&&Ny(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(et=(c=et)||h,Kt(e,t),et=c):Kt(e,t),un(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(B=t,h=t.child;h!==null;){for(p=B=h;B!==null;){switch(m=B,E=m.child,m.tag){case 0:case 11:case 14:case 15:Co(4,m,m.return);break;case 1:ts(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(R){ke(r,n,R)}}break;case 5:ts(m,m.return);break;case 22:if(m.memoizedState!==null){Dy(p);continue}}E!==null?(E.return=m,B=E):Dy(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=p1("display",o))}catch(R){ke(t,t.return,R)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(R){ke(t,t.return,R)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Kt(e,t),un(t),r&4&&Ny(t);break;case 21:break;default:Kt(e,t),un(t)}}function un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(U_(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ho(i,""),r.flags&=-33);var s=Ry(t);Bh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ry(t);zh(t,l,o);break;default:throw Error(j(161))}}catch(u){ke(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kk(t,e,n){B=t,B_(t)}function B_(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||et;l=gl;var c=et;if(gl=o,(et=u)&&!c)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?Ly(i):u!==null?(u.return=o,B=u):Ly(i);for(;s!==null;)B=s,B_(s),s=s.sibling;B=i,gl=l,et=c}Oy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):Oy(t)}}function Oy(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:et||Zu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&qo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}et||e.flags&512&&$h(e)}catch(m){ke(e,e.return,m)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function Dy(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function Ly(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zu(4,e)}catch(u){ke(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ke(e,i,u)}}var s=e.return;try{$h(e)}catch(u){ke(e,s,u)}break;case 5:var o=e.return;try{$h(e)}catch(u){ke(e,o,u)}}}catch(u){ke(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var Ak=Math.ceil,fu=Qn.ReactCurrentDispatcher,Ep=Qn.ReactCurrentOwner,Vt=Qn.ReactCurrentBatchConfig,se=0,je=null,Ce=null,We=0,kt=0,ns=Vr(0),Ne=0,sa=null,_i=0,ec=0,Ip=0,Ro=null,pt=null,Tp=0,Ts=1/0,Pn=null,pu=!1,Hh=null,Ir=null,yl=!1,fr=null,mu=0,No=0,Wh=null,Ml=-1,Fl=0;function ut(){return se&6?Pe():Ml!==-1?Ml:Ml=Pe()}function Tr(t){return t.mode&1?se&2&&We!==0?We&-We:ck.transition!==null?(Fl===0&&(Fl=A1()),Fl):(t=le,t!==0||(t=window.event,t=t===void 0?16:D1(t.type)),t):1}function nn(t,e,n,r){if(50<No)throw No=0,Wh=null,Error(j(185));Ia(t,n,r),(!(se&2)||t!==je)&&(t===je&&(!(se&2)&&(ec|=n),Ne===4&&or(t,We)),vt(t,r),n===1&&se===0&&!(e.mode&1)&&(Ts=Pe()+500,Yu&&Ur()))}function vt(t,e){var n=t.callbackNode;cS(t,e);var r=Jl(t,t===je?We:0);if(r===0)n!==null&&Hg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hg(n),e===1)t.tag===0?uk(My.bind(null,t)):Z1(My.bind(null,t)),sk(function(){!(se&6)&&Ur()}),n=null;else{switch(P1(r)){case 1:n=Qf;break;case 4:n=S1;break;case 16:n=Xl;break;case 536870912:n=k1;break;default:n=Xl}n=X_(n,H_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function H_(t,e){if(Ml=-1,Fl=0,se&6)throw Error(j(327));var n=t.callbackNode;if(ds()&&t.callbackNode!==n)return null;var r=Jl(t,t===je?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=gu(t,r);else{e=r;var i=se;se|=2;var s=G_();(je!==t||We!==e)&&(Pn=null,Ts=Pe()+500,li(t,e));do try{Ck();break}catch(l){W_(t,l)}while(!0);lp(),fu.current=s,se=i,Ce!==null?e=0:(je=null,We=0,e=Ne)}if(e!==0){if(e===2&&(i=vh(t),i!==0&&(r=i,e=Gh(t,i))),e===1)throw n=sa,li(t,0),or(t,r),vt(t,Pe()),n;if(e===6)or(t,r);else{if(i=t.current.alternate,!(r&30)&&!Pk(i)&&(e=gu(t,r),e===2&&(s=vh(t),s!==0&&(r=s,e=Gh(t,s))),e===1))throw n=sa,li(t,0),or(t,r),vt(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Xr(t,pt,Pn);break;case 3:if(or(t,r),(r&130023424)===r&&(e=Tp+500-Pe(),10<e)){if(Jl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=kh(Xr.bind(null,t,pt,Pn),e);break}Xr(t,pt,Pn);break;case 4:if(or(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-tn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ak(r/1960))-r,10<r){t.timeoutHandle=kh(Xr.bind(null,t,pt,Pn),r);break}Xr(t,pt,Pn);break;case 5:Xr(t,pt,Pn);break;default:throw Error(j(329))}}}return vt(t,Pe()),t.callbackNode===n?H_.bind(null,t):null}function Gh(t,e){var n=Ro;return t.current.memoizedState.isDehydrated&&(li(t,e).flags|=256),t=gu(t,e),t!==2&&(e=pt,pt=n,e!==null&&Kh(e)),t}function Kh(t){pt===null?pt=t:pt.push.apply(pt,t)}function Pk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!rn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~Ip,e&=~ec,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-tn(e),r=1<<n;t[n]=-1,e&=~r}}function My(t){if(se&6)throw Error(j(327));ds();var e=Jl(t,0);if(!(e&1))return vt(t,Pe()),null;var n=gu(t,e);if(t.tag!==0&&n===2){var r=vh(t);r!==0&&(e=r,n=Gh(t,r))}if(n===1)throw n=sa,li(t,0),or(t,e),vt(t,Pe()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,pt,Pn),vt(t,Pe()),null}function xp(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Ts=Pe()+500,Yu&&Ur())}}function wi(t){fr!==null&&fr.tag===0&&!(se&6)&&ds();var e=se;se|=1;var n=Vt.transition,r=le;try{if(Vt.transition=null,le=1,t)return t()}finally{le=r,Vt.transition=n,se=e,!(se&6)&&Ur()}}function Sp(){kt=ns.current,ge(ns)}function li(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ik(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(sp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ru();break;case 3:Es(),ge(gt),ge(rt),pp();break;case 5:fp(r);break;case 4:Es();break;case 13:ge(Ee);break;case 19:ge(Ee);break;case 10:up(r.type._context);break;case 22:case 23:Sp()}n=n.return}if(je=t,Ce=t=xr(t.current,null),We=kt=e,Ne=0,sa=null,Ip=ec=_i=0,pt=Ro=null,ri!==null){for(e=0;e<ri.length;e++)if(n=ri[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ri=null}return t}function W_(t,e){do{var n=Ce;try{if(lp(),Ol.current=hu,du){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}du=!1}if(vi=0,Me=Re=Te=null,bo=!1,na=0,Ep.current=null,n===null||n.return===null){Ne=1,sa=e,Ce=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var E=Ty(o);if(E!==null){E.flags&=-257,xy(E,o,l,s,e),E.mode&1&&Iy(s,c,e),e=E,u=c;var k=e.updateQueue;if(k===null){var R=new Set;R.add(u),e.updateQueue=R}else k.add(u);break e}else{if(!(e&1)){Iy(s,c,e),kp();break e}u=Error(j(426))}}else if(ve&&l.mode&1){var C=Ty(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),xy(C,o,l,s,e),op(Is(u,l));break e}}s=u=Is(u,l),Ne!==4&&(Ne=2),Ro===null?Ro=[s]:Ro.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=P_(s,u,e);gy(s,w);break e;case 1:l=u;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Ir===null||!Ir.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=b_(s,l,e);gy(s,D);break e}}s=s.return}while(s!==null)}q_(n)}catch(M){e=M,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function G_(){var t=fu.current;return fu.current=hu,t===null?hu:t}function kp(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),je===null||!(_i&268435455)&&!(ec&268435455)||or(je,We)}function gu(t,e){var n=se;se|=2;var r=G_();(je!==t||We!==e)&&(Pn=null,li(t,e));do try{bk();break}catch(i){W_(t,i)}while(!0);if(lp(),se=n,fu.current=r,Ce!==null)throw Error(j(261));return je=null,We=0,Ne}function bk(){for(;Ce!==null;)K_(Ce)}function Ck(){for(;Ce!==null&&!tS();)K_(Ce)}function K_(t){var e=Y_(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?q_(t):Ce=e,Ep.current=null}function q_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Tk(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ne=6,Ce=null;return}}else if(n=Ik(n,e,kt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);Ne===0&&(Ne=5)}function Xr(t,e,n){var r=le,i=Vt.transition;try{Vt.transition=null,le=1,Rk(t,e,n,r)}finally{Vt.transition=i,le=r}return null}function Rk(t,e,n,r){do ds();while(fr!==null);if(se&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dS(t,s),t===je&&(Ce=je=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yl||(yl=!0,X_(Xl,function(){return ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vt.transition,Vt.transition=null;var o=le;le=1;var l=se;se|=4,Ep.current=null,Sk(t,n),z_(n,t),XS(xh),Zl=!!Th,xh=Th=null,t.current=n,kk(n),nS(),se=l,le=o,Vt.transition=s}else t.current=n;if(yl&&(yl=!1,fr=t,mu=i),s=t.pendingLanes,s===0&&(Ir=null),sS(n.stateNode),vt(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pu)throw pu=!1,t=Hh,Hh=null,t;return mu&1&&t.tag!==0&&ds(),s=t.pendingLanes,s&1?t===Wh?No++:(No=0,Wh=t):No=0,Ur(),null}function ds(){if(fr!==null){var t=P1(mu),e=Vt.transition,n=le;try{if(Vt.transition=null,le=16>t?16:t,fr===null)var r=!1;else{if(t=fr,fr=null,mu=0,se&6)throw Error(j(331));var i=se;for(se|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(B=c;B!==null;){var h=B;switch(h.tag){case 0:case 11:case 15:Co(8,h,s)}var p=h.child;if(p!==null)p.return=h,B=p;else for(;B!==null;){h=B;var m=h.sibling,E=h.return;if(V_(h),h===c){B=null;break}if(m!==null){m.return=E,B=m;break}B=E}}}var k=s.alternate;if(k!==null){var R=k.child;if(R!==null){k.child=null;do{var C=R.sibling;R.sibling=null,R=C}while(R!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Co(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,B=w;break e}B=s.return}}var _=t.current;for(B=_;B!==null;){o=B;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,B=S;else e:for(o=_;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Zu(9,l)}}catch(M){ke(l,l.return,M)}if(l===o){B=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,B=D;break e}B=l.return}}if(se=i,Ur(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(Wu,t)}catch{}r=!0}return r}finally{le=n,Vt.transition=e}}return!1}function Fy(t,e,n){e=Is(n,e),e=P_(t,e,1),t=Er(t,e,1),e=ut(),t!==null&&(Ia(t,1,e),vt(t,e))}function ke(t,e,n){if(t.tag===3)Fy(t,t,n);else for(;e!==null;){if(e.tag===3){Fy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ir===null||!Ir.has(r))){t=Is(n,t),t=b_(e,t,1),e=Er(e,t,1),t=ut(),e!==null&&(Ia(e,1,t),vt(e,t));break}}e=e.return}}function Nk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,je===t&&(We&n)===n&&(Ne===4||Ne===3&&(We&130023424)===We&&500>Pe()-Tp?li(t,0):Ip|=n),vt(t,e)}function Q_(t,e){e===0&&(t.mode&1?(e=al,al<<=1,!(al&130023424)&&(al=4194304)):e=1);var n=ut();t=Bn(t,e),t!==null&&(Ia(t,e,n),vt(t,n))}function Ok(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Q_(t,n)}function Dk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),Q_(t,n)}var Y_;Y_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gt.current)mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mt=!1,Ek(t,e,n);mt=!!(t.flags&131072)}else mt=!1,ve&&e.flags&1048576&&e_(e,ou,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ll(t,e),t=e.pendingProps;var i=vs(e,rt.current);cs(e,n),i=gp(null,e,r,t,i,n);var s=yp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(r)?(s=!0,iu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dp(e),i.updater=Ju,e.stateNode=i,i._reactInternals=e,Oh(e,r,t,n),e=Mh(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&ip(e),lt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ll(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Mk(r),t=qt(r,t),i){case 0:e=Lh(null,e,r,t,n);break e;case 1:e=Ay(null,e,r,t,n);break e;case 11:e=Sy(null,e,r,t,n);break e;case 14:e=ky(null,e,r,qt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Lh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Ay(t,e,r,i,n);case 3:e:{if(O_(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,o_(t,e),uu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Is(Error(j(423)),e),e=Py(t,e,r,n,i);break e}else if(r!==i){i=Is(Error(j(424)),e),e=Py(t,e,r,n,i);break e}else for(At=wr(e.stateNode.containerInfo.firstChild),Pt=e,ve=!0,Yt=null,n=i_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),r===i){e=Hn(t,e,n);break e}lt(t,e,r,n)}e=e.child}return e;case 5:return a_(e),t===null&&Ch(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Sh(r,i)?o=null:s!==null&&Sh(r,s)&&(e.flags|=32),N_(t,e),lt(t,e,o,n),e.child;case 6:return t===null&&Ch(e),null;case 13:return D_(t,e,n);case 4:return hp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ws(e,null,r,n):lt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Sy(t,e,r,i,n);case 7:return lt(t,e,e.pendingProps,n),e.child;case 8:return lt(t,e,e.pendingProps.children,n),e.child;case 12:return lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(au,r._currentValue),r._currentValue=o,s!==null)if(rn(s.value,o)){if(s.children===i.children&&!gt.current){e=Hn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Mn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Rh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Rh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}lt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,cs(e,n),i=$t(i),r=r(i),e.flags|=1,lt(t,e,r,n),e.child;case 14:return r=e.type,i=qt(r,e.pendingProps),i=qt(r.type,i),ky(t,e,r,i,n);case 15:return C_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Ll(t,e),e.tag=1,yt(r)?(t=!0,iu(e)):t=!1,cs(e,n),A_(e,r,i),Oh(e,r,i,n),Mh(null,e,r,!0,t,n);case 19:return L_(t,e,n);case 22:return R_(t,e,n)}throw Error(j(156,e.tag))};function X_(t,e){return x1(t,e)}function Lk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new Lk(t,e,n,r)}function Ap(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Mk(t){if(typeof t=="function")return Ap(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gf)return 11;if(t===Kf)return 14}return 2}function xr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function jl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ap(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Gi:return ui(n.children,i,s,e);case Wf:o=8,i|=8;break;case rh:return t=jt(12,n,e,i|2),t.elementType=rh,t.lanes=s,t;case ih:return t=jt(13,n,e,i),t.elementType=ih,t.lanes=s,t;case sh:return t=jt(19,n,e,i),t.elementType=sh,t.lanes=s,t;case a1:return tc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case s1:o=10;break e;case o1:o=9;break e;case Gf:o=11;break e;case Kf:o=14;break e;case rr:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ui(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function tc(t,e,n,r){return t=jt(22,t,r,e),t.elementType=a1,t.lanes=n,t.stateNode={isHidden:!1},t}function Cd(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function Rd(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Fk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dd(0),this.expirationTimes=dd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pp(t,e,n,r,i,s,o,l,u){return t=new Fk(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dp(s),t}function jk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function J_(t){if(!t)return br;t=t._reactInternals;e:{if(Ri(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(yt(n))return J1(t,n,e)}return e}function Z_(t,e,n,r,i,s,o,l,u){return t=Pp(n,r,!0,t,i,s,o,l,u),t.context=J_(null),n=t.current,r=ut(),i=Tr(n),s=Mn(r,i),s.callback=e??null,Er(n,s,i),t.current.lanes=i,Ia(t,i,r),vt(t,r),t}function nc(t,e,n,r){var i=e.current,s=ut(),o=Tr(i);return n=J_(n),e.context===null?e.context=n:e.pendingContext=n,e=Mn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Er(i,e,o),t!==null&&(nn(t,i,o,s),Nl(t,i,o)),o}function yu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bp(t,e){jy(t,e),(t=t.alternate)&&jy(t,e)}function Vk(){return null}var ew=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cp(t){this._internalRoot=t}rc.prototype.render=Cp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));nc(t,e,null,null)};rc.prototype.unmount=Cp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wi(function(){nc(null,t,null,null)}),e[zn]=null}};function rc(t){this._internalRoot=t}rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=R1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&O1(t)}};function Rp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ic(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vy(){}function Uk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=yu(o);s.call(c)}}var o=Z_(e,r,t,0,null,!1,!1,"",Vy);return t._reactRootContainer=o,t[zn]=o.current,Xo(t.nodeType===8?t.parentNode:t),wi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=yu(u);l.call(c)}}var u=Pp(t,0,!1,null,null,!1,!1,"",Vy);return t._reactRootContainer=u,t[zn]=u.current,Xo(t.nodeType===8?t.parentNode:t),wi(function(){nc(e,u,n,r)}),u}function sc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=yu(o);l.call(u)}}nc(e,o,t,i)}else o=Uk(n,e,t,i,r);return yu(o)}b1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=go(e.pendingLanes);n!==0&&(Yf(e,n|1),vt(e,Pe()),!(se&6)&&(Ts=Pe()+500,Ur()))}break;case 13:wi(function(){var r=Bn(t,1);if(r!==null){var i=ut();nn(r,t,1,i)}}),bp(t,1)}};Xf=function(t){if(t.tag===13){var e=Bn(t,134217728);if(e!==null){var n=ut();nn(e,t,134217728,n)}bp(t,134217728)}};C1=function(t){if(t.tag===13){var e=Tr(t),n=Bn(t,e);if(n!==null){var r=ut();nn(n,t,e,r)}bp(t,e)}};R1=function(){return le};N1=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};mh=function(t,e,n){switch(e){case"input":if(lh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Qu(r);if(!i)throw Error(j(90));u1(r),lh(r,i)}}}break;case"textarea":d1(t,n);break;case"select":e=n.value,e!=null&&os(t,!!n.multiple,e,!1)}};v1=xp;_1=wi;var $k={usingClientEntryPoint:!1,Events:[xa,Yi,Qu,g1,y1,xp]},uo={findFiberByHostInstance:ni,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zk={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=I1(t),t===null?null:t.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||Vk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{Wu=vl.inject(zk),gn=vl}catch{}}Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$k;Ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rp(e))throw Error(j(200));return jk(t,e,null,n)};Ot.createRoot=function(t,e){if(!Rp(t))throw Error(j(299));var n=!1,r="",i=ew;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pp(t,1,!1,null,null,n,!1,r,i),t[zn]=e.current,Xo(t.nodeType===8?t.parentNode:t),new Cp(e)};Ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=I1(e),t=t===null?null:t.stateNode,t};Ot.flushSync=function(t){return wi(t)};Ot.hydrate=function(t,e,n){if(!ic(e))throw Error(j(200));return sc(null,t,e,!0,n)};Ot.hydrateRoot=function(t,e,n){if(!Rp(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ew;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Z_(e,null,t,1,n??null,i,!1,s,o),t[zn]=e.current,Xo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new rc(e)};Ot.render=function(t,e,n){if(!ic(e))throw Error(j(200));return sc(null,t,e,!1,n)};Ot.unmountComponentAtNode=function(t){if(!ic(t))throw Error(j(40));return t._reactRootContainer?(wi(function(){sc(null,null,t,!1,function(){t._reactRootContainer=null,t[zn]=null})}),!0):!1};Ot.unstable_batchedUpdates=xp;Ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ic(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return sc(t,e,n,!1,r)};Ot.version="18.3.1-next-f1338f8080-20240426";function tw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tw)}catch(t){console.error(t)}}tw(),t1.exports=Ot;var nw=t1.exports,Uy=nw;th.createRoot=Uy.createRoot,th.hydrateRoot=Uy.hydrateRoot;var Bk=Object.defineProperty,Hk=(t,e,n)=>e in t?Bk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Nd=(t,e,n)=>(Hk(t,typeof e!="symbol"?e+"":e,n),n);let Wk=class{constructor(){Nd(this,"current",this.detect()),Nd(this,"handoffState","pending"),Nd(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},ci=new Wk;function oc(t){return ci.isServer?null:t instanceof Node?t.ownerDocument:t!=null&&t.hasOwnProperty("current")&&t.current instanceof Node?t.current.ownerDocument:document}function ac(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e}))}function $r(){let t=[],e={addEventListener(n,r,i,s){return n.addEventListener(r,i,s),e.add(()=>n.removeEventListener(r,i,s))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return e.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return e.requestAnimationFrame(()=>e.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return e.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return ac(()=>{r.current&&n[0]()}),e.add(()=>{r.current=!1})},style(n,r,i){let s=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:i}),this.add(()=>{Object.assign(n.style,{[r]:s})})},group(n){let r=$r();return n(r),this.add(()=>r.dispose())},add(n){return t.includes(n)||t.push(n),()=>{let r=t.indexOf(n);if(r>=0)for(let i of t.splice(r,1))i()}},dispose(){for(let n of t.splice(0))n()}};return e}function Np(){let[t]=P.useState($r);return P.useEffect(()=>()=>t.dispose(),[t]),t}let ct=(t,e)=>{ci.isServer?P.useEffect(t,e):P.useLayoutEffect(t,e)};function Ni(t){let e=P.useRef(t);return ct(()=>{e.current=t},[t]),e}let Ie=function(t){let e=Ni(t);return Y.useCallback((...n)=>e.current(...n),[e])},Gk=P.createContext(void 0);function Kk(){return P.useContext(Gk)}function qh(...t){return Array.from(new Set(t.flatMap(e=>typeof e=="string"?e.split(" "):[]))).filter(Boolean).join(" ")}function Cr(t,e,...n){if(t in e){let i=e[t];return typeof i=="function"?i(...n):i}let r=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Cr),r}var vu=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(vu||{}),pr=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(pr||{});function Bt(){let t=Qk();return P.useCallback(e=>qk({mergeRefs:t,...e}),[t])}function qk({ourProps:t,theirProps:e,slot:n,defaultTag:r,features:i,visible:s=!0,name:o,mergeRefs:l}){l=l??Yk;let u=rw(e,t);if(s)return _l(u,n,r,o,l);let c=i??0;if(c&2){let{static:h=!1,...p}=u;if(h)return _l(p,n,r,o,l)}if(c&1){let{unmount:h=!0,...p}=u;return Cr(h?0:1,{0(){return null},1(){return _l({...p,hidden:!0,style:{display:"none"}},n,r,o,l)}})}return _l(u,n,r,o,l)}function _l(t,e={},n,r,i){let{as:s=n,children:o,refName:l="ref",...u}=Od(t,["unmount","static"]),c=t.ref!==void 0?{[l]:t.ref}:{},h=typeof o=="function"?o(e):o;"className"in u&&u.className&&typeof u.className=="function"&&(u.className=u.className(e)),u["aria-labelledby"]&&u["aria-labelledby"]===u.id&&(u["aria-labelledby"]=void 0);let p={};if(e){let m=!1,E=[];for(let[k,R]of Object.entries(e))typeof R=="boolean"&&(m=!0),R===!0&&E.push(k.replace(/([A-Z])/g,C=>`-${C.toLowerCase()}`));if(m){p["data-headlessui-state"]=E.join(" ");for(let k of E)p[`data-${k}`]=""}}if(s===P.Fragment&&(Object.keys(Jr(u)).length>0||Object.keys(Jr(p)).length>0))if(!P.isValidElement(h)||Array.isArray(h)&&h.length>1){if(Object.keys(Jr(u)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(Jr(u)).concat(Object.keys(Jr(p))).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`))}else{let m=h.props,E=m==null?void 0:m.className,k=typeof E=="function"?(...w)=>qh(E(...w),u.className):qh(E,u.className),R=k?{className:k}:{},C=rw(h.props,Jr(Od(u,["ref"])));for(let w in p)w in C&&delete p[w];return P.cloneElement(h,Object.assign({},C,p,c,{ref:i(Xk(h),c.ref)},R))}return P.createElement(s,Object.assign({},Od(u,["ref"]),s!==P.Fragment&&c,s!==P.Fragment&&p),h)}function Qk(){let t=P.useRef([]),e=P.useCallback(n=>{for(let r of t.current)r!=null&&(typeof r=="function"?r(n):r.current=n)},[]);return(...n)=>{if(!n.every(r=>r==null))return t.current=n,e}}function Yk(...t){return t.every(e=>e==null)?void 0:e=>{for(let n of t)n!=null&&(typeof n=="function"?n(e):n.current=e)}}function rw(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let r of t)for(let i in r)i.startsWith("on")&&typeof r[i]=="function"?(n[i]!=null||(n[i]=[]),n[i].push(r[i])):e[i]=r[i];if(e.disabled||e["aria-disabled"])for(let r in n)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r)&&(n[r]=[i=>{var s;return(s=i==null?void 0:i.preventDefault)==null?void 0:s.call(i)}]);for(let r in n)Object.assign(e,{[r](i,...s){let o=n[r];for(let l of o){if((i instanceof Event||(i==null?void 0:i.nativeEvent)instanceof Event)&&i.defaultPrevented)return;l(i,...s)}}});return e}function It(t){var e;return Object.assign(P.forwardRef(t),{displayName:(e=t.displayName)!=null?e:t.name})}function Jr(t){let e=Object.assign({},t);for(let n in e)e[n]===void 0&&delete e[n];return e}function Od(t,e=[]){let n=Object.assign({},t);for(let r of e)r in n&&delete n[r];return n}function Xk(t){return Y.version.split(".")[0]>="19"?t.props.ref:t.ref}let Jk="span";var _u=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(_u||{});function Zk(t,e){var n;let{features:r=1,...i}=t,s={ref:e,"aria-hidden":(r&2)===2?!0:(n=i["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return Bt()({ourProps:s,theirProps:i,slot:{},defaultTag:Jk,name:"Hidden"})}let Qh=It(Zk),iw=Symbol();function eA(t,e=!0){return Object.assign(t,{[iw]:e})}function xn(...t){let e=P.useRef(t);P.useEffect(()=>{e.current=t},[t]);let n=Ie(r=>{for(let i of e.current)i!=null&&(typeof i=="function"?i(r):i.current=r)});return t.every(r=>r==null||(r==null?void 0:r[iw]))?void 0:n}let Op=P.createContext(null);Op.displayName="DescriptionContext";function sw(){let t=P.useContext(Op);if(t===null){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,sw),e}return t}function tA(){let[t,e]=P.useState([]);return[t.length>0?t.join(" "):void 0,P.useMemo(()=>function(n){let r=Ie(s=>(e(o=>[...o,s]),()=>e(o=>{let l=o.slice(),u=l.indexOf(s);return u!==-1&&l.splice(u,1),l}))),i=P.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props,value:n.value}),[r,n.slot,n.name,n.props,n.value]);return Y.createElement(Op.Provider,{value:i},n.children)},[e])]}let nA="p";function rA(t,e){let n=P.useId(),r=Kk(),{id:i=`headlessui-description-${n}`,...s}=t,o=sw(),l=xn(e);ct(()=>o.register(i),[i,o.register]);let u=r||!1,c=P.useMemo(()=>({...o.slot,disabled:u}),[o.slot,u]),h={ref:l,...o.props,id:i};return Bt()({ourProps:h,theirProps:s,slot:c,defaultTag:nA,name:o.name||"Description"})}let iA=It(rA),sA=Object.assign(iA,{});var ow=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(ow||{});let oA=P.createContext(()=>{});function aA({value:t,children:e}){return Y.createElement(oA.Provider,{value:t},e)}let lA=class extends Map{constructor(e){super(),this.factory=e}get(e){let n=super.get(e);return n===void 0&&(n=this.factory(e),this.set(e,n)),n}};function aw(t,e){let n=t(),r=new Set;return{getSnapshot(){return n},subscribe(i){return r.add(i),()=>r.delete(i)},dispatch(i,...s){let o=e[i].call(n,...s);o&&(n=o,r.forEach(l=>l()))}}}function lw(t){return P.useSyncExternalStore(t.subscribe,t.getSnapshot,t.getSnapshot)}let uA=new lA(()=>aw(()=>[],{ADD(t){return this.includes(t)?this:[...this,t]},REMOVE(t){let e=this.indexOf(t);if(e===-1)return this;let n=this.slice();return n.splice(e,1),n}}));function Ds(t,e){let n=uA.get(e),r=P.useId(),i=lw(n);if(ct(()=>{if(t)return n.dispatch("ADD",r),()=>n.dispatch("REMOVE",r)},[n,t]),!t)return!1;let s=i.indexOf(r),o=i.length;return s===-1&&(s=o,o+=1),s===o-1}let Yh=new Map,Oo=new Map;function $y(t){var e;let n=(e=Oo.get(t))!=null?e:0;return Oo.set(t,n+1),n!==0?()=>zy(t):(Yh.set(t,{"aria-hidden":t.getAttribute("aria-hidden"),inert:t.inert}),t.setAttribute("aria-hidden","true"),t.inert=!0,()=>zy(t))}function zy(t){var e;let n=(e=Oo.get(t))!=null?e:1;if(n===1?Oo.delete(t):Oo.set(t,n-1),n!==1)return;let r=Yh.get(t);r&&(r["aria-hidden"]===null?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",r["aria-hidden"]),t.inert=r.inert,Yh.delete(t))}function cA(t,{allowed:e,disallowed:n}={}){let r=Ds(t,"inert-others");ct(()=>{var i,s;if(!r)return;let o=$r();for(let u of(i=n==null?void 0:n())!=null?i:[])u&&o.add($y(u));let l=(s=e==null?void 0:e())!=null?s:[];for(let u of l){if(!u)continue;let c=oc(u);if(!c)continue;let h=u.parentElement;for(;h&&h!==c.body;){for(let p of h.children)l.some(m=>p.contains(m))||o.add($y(p));h=h.parentElement}}return o.dispose},[r,e,n])}function dA(t,e,n){let r=Ni(i=>{let s=i.getBoundingClientRect();s.x===0&&s.y===0&&s.width===0&&s.height===0&&n()});P.useEffect(()=>{if(!t)return;let i=e===null?null:e instanceof HTMLElement?e:e.current;if(!i)return;let s=$r();if(typeof ResizeObserver<"u"){let o=new ResizeObserver(()=>r.current(i));o.observe(i),s.add(()=>o.disconnect())}if(typeof IntersectionObserver<"u"){let o=new IntersectionObserver(()=>r.current(i));o.observe(i),s.add(()=>o.disconnect())}return()=>s.dispose()},[e,r,t])}let wu=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(","),hA=["[data-autofocus]"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var Cn=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t[t.AutoFocus=64]="AutoFocus",t))(Cn||{}),Xh=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(Xh||{}),fA=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(fA||{});function pA(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(wu)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}function mA(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(hA)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var uw=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(uw||{});function gA(t,e=0){var n;return t===((n=oc(t))==null?void 0:n.body)?!1:Cr(e,{0(){return t.matches(wu)},1(){let r=t;for(;r!==null;){if(r.matches(wu))return!0;r=r.parentElement}return!1}})}var yA=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(yA||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Fn(t){t==null||t.focus({preventScroll:!0})}let vA=["textarea","input"].join(",");function _A(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,vA))!=null?n:!1}function wA(t,e=n=>n){return t.slice().sort((n,r)=>{let i=e(n),s=e(r);if(i===null||s===null)return 0;let o=i.compareDocumentPosition(s);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Do(t,e,{sorted:n=!0,relativeTo:r=null,skipElements:i=[]}={}){let s=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t.ownerDocument,o=Array.isArray(t)?n?wA(t):t:e&64?mA(t):pA(t);i.length>0&&o.length>1&&(o=o.filter(E=>!i.some(k=>k!=null&&"current"in k?(k==null?void 0:k.current)===E:k===E))),r=r??s.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,o.indexOf(r))-1;if(e&4)return Math.max(0,o.indexOf(r))+1;if(e&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=e&32?{preventScroll:!0}:{},h=0,p=o.length,m;do{if(h>=p||h+p<=0)return 0;let E=u+h;if(e&16)E=(E+p)%p;else{if(E<0)return 3;if(E>=p)return 1}m=o[E],m==null||m.focus(c),h+=l}while(m!==s.activeElement);return e&6&&_A(m)&&m.select(),2}function cw(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function EA(){return/Android/gi.test(window.navigator.userAgent)}function IA(){return cw()||EA()}function co(t,e,n,r){let i=Ni(n);P.useEffect(()=>{if(!t)return;function s(o){i.current(o)}return document.addEventListener(e,s,r),()=>document.removeEventListener(e,s,r)},[t,e,r])}function dw(t,e,n,r){let i=Ni(n);P.useEffect(()=>{if(!t)return;function s(o){i.current(o)}return window.addEventListener(e,s,r),()=>window.removeEventListener(e,s,r)},[t,e,r])}const By=30;function TA(t,e,n){let r=Ds(t,"outside-click"),i=Ni(n),s=P.useCallback(function(u,c){if(u.defaultPrevented)return;let h=c(u);if(h===null||!h.getRootNode().contains(h)||!h.isConnected)return;let p=function m(E){return typeof E=="function"?m(E()):Array.isArray(E)||E instanceof Set?E:[E]}(e);for(let m of p)if(m!==null&&(m.contains(h)||u.composed&&u.composedPath().includes(m)))return;return!gA(h,uw.Loose)&&h.tabIndex!==-1&&u.preventDefault(),i.current(u,h)},[i,e]),o=P.useRef(null);co(r,"pointerdown",u=>{var c,h;o.current=((h=(c=u.composedPath)==null?void 0:c.call(u))==null?void 0:h[0])||u.target},!0),co(r,"mousedown",u=>{var c,h;o.current=((h=(c=u.composedPath)==null?void 0:c.call(u))==null?void 0:h[0])||u.target},!0),co(r,"click",u=>{IA()||o.current&&(s(u,()=>o.current),o.current=null)},!0);let l=P.useRef({x:0,y:0});co(r,"touchstart",u=>{l.current.x=u.touches[0].clientX,l.current.y=u.touches[0].clientY},!0),co(r,"touchend",u=>{let c={x:u.changedTouches[0].clientX,y:u.changedTouches[0].clientY};if(!(Math.abs(c.x-l.current.x)>=By||Math.abs(c.y-l.current.y)>=By))return s(u,()=>u.target instanceof HTMLElement?u.target:null)},!0),dw(r,"blur",u=>s(u,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function ka(...t){return P.useMemo(()=>oc(...t),[...t])}function hw(t,e,n,r){let i=Ni(n);P.useEffect(()=>{t=t??window;function s(o){i.current(o)}return t.addEventListener(e,s,r),()=>t.removeEventListener(e,s,r)},[t,e,r])}function xA(){let t;return{before({doc:e}){var n;let r=e.documentElement,i=(n=e.defaultView)!=null?n:window;t=Math.max(0,i.innerWidth-r.clientWidth)},after({doc:e,d:n}){let r=e.documentElement,i=Math.max(0,r.clientWidth-r.offsetWidth),s=Math.max(0,t-i);n.style(r,"paddingRight",`${s}px`)}}}function SA(){return cw()?{before({doc:t,d:e,meta:n}){function r(i){return n.containers.flatMap(s=>s()).some(s=>s.contains(i))}e.microTask(()=>{var i;if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let l=$r();l.style(t.documentElement,"scrollBehavior","auto"),e.add(()=>e.microTask(()=>l.dispose()))}let s=(i=window.scrollY)!=null?i:window.pageYOffset,o=null;e.addEventListener(t,"click",l=>{if(l.target instanceof HTMLElement)try{let u=l.target.closest("a");if(!u)return;let{hash:c}=new URL(u.href),h=t.querySelector(c);h&&!r(h)&&(o=h)}catch{}},!0),e.addEventListener(t,"touchstart",l=>{if(l.target instanceof HTMLElement)if(r(l.target)){let u=l.target;for(;u.parentElement&&r(u.parentElement);)u=u.parentElement;e.style(u,"overscrollBehavior","contain")}else e.style(l.target,"touchAction","none")}),e.addEventListener(t,"touchmove",l=>{if(l.target instanceof HTMLElement){if(l.target.tagName==="INPUT")return;if(r(l.target)){let u=l.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&l.preventDefault()}else l.preventDefault()}},{passive:!1}),e.add(()=>{var l;let u=(l=window.scrollY)!=null?l:window.pageYOffset;s!==u&&window.scrollTo(0,s),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})})}}:{}}function kA(){return{before({doc:t,d:e}){e.style(t.documentElement,"overflow","hidden")}}}function AA(t){let e={};for(let n of t)Object.assign(e,n(e));return e}let si=aw(()=>new Map,{PUSH(t,e){var n;let r=(n=this.get(t))!=null?n:{doc:t,count:0,d:$r(),meta:new Set};return r.count++,r.meta.add(e),this.set(t,r),this},POP(t,e){let n=this.get(t);return n&&(n.count--,n.meta.delete(e)),this},SCROLL_PREVENT({doc:t,d:e,meta:n}){let r={doc:t,d:e,meta:AA(n)},i=[SA(),xA(),kA()];i.forEach(({before:s})=>s==null?void 0:s(r)),i.forEach(({after:s})=>s==null?void 0:s(r))},SCROLL_ALLOW({d:t}){t.dispose()},TEARDOWN({doc:t}){this.delete(t)}});si.subscribe(()=>{let t=si.getSnapshot(),e=new Map;for(let[n]of t)e.set(n,n.documentElement.style.overflow);for(let n of t.values()){let r=e.get(n.doc)==="hidden",i=n.count!==0;(i&&!r||!i&&r)&&si.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&si.dispatch("TEARDOWN",n)}});function PA(t,e,n=()=>({containers:[]})){let r=lw(si),i=e?r.get(e):void 0,s=i?i.count>0:!1;return ct(()=>{if(!(!e||!t))return si.dispatch("PUSH",e,n),()=>si.dispatch("POP",e,n)},[t,e]),s}function bA(t,e,n=()=>[document.body]){let r=Ds(t,"scroll-lock");PA(r,e,i=>{var s;return{containers:[...(s=i.containers)!=null?s:[],n]}})}function CA(t=0){let[e,n]=P.useState(t),r=P.useCallback(u=>n(u),[e]),i=P.useCallback(u=>n(c=>c|u),[e]),s=P.useCallback(u=>(e&u)===u,[e]),o=P.useCallback(u=>n(c=>c&~u),[n]),l=P.useCallback(u=>n(c=>c^u),[n]);return{flags:e,setFlag:r,addFlag:i,hasFlag:s,removeFlag:o,toggleFlag:l}}var RA={},Hy,Wy;typeof process<"u"&&typeof globalThis<"u"&&typeof Element<"u"&&((Hy=process==null?void 0:RA)==null?void 0:Hy.NODE_ENV)==="test"&&typeof((Wy=Element==null?void 0:Element.prototype)==null?void 0:Wy.getAnimations)>"u"&&(Element.prototype.getAnimations=function(){return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.","Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.","","Example usage:","```js","import { mockAnimationsApi } from 'jsdom-testing-mocks'","mockAnimationsApi()","```"].join(`
`)),[]});var NA=(t=>(t[t.None=0]="None",t[t.Closed=1]="Closed",t[t.Enter=2]="Enter",t[t.Leave=4]="Leave",t))(NA||{});function OA(t){let e={};for(let n in t)t[n]===!0&&(e[`data-${n}`]="");return e}function DA(t,e,n,r){let[i,s]=P.useState(n),{hasFlag:o,addFlag:l,removeFlag:u}=CA(t&&i?3:0),c=P.useRef(!1),h=P.useRef(!1),p=Np();return ct(()=>{var m;if(t){if(n&&s(!0),!e){n&&l(3);return}return(m=r==null?void 0:r.start)==null||m.call(r,n),LA(e,{inFlight:c,prepare(){h.current?h.current=!1:h.current=c.current,c.current=!0,!h.current&&(n?(l(3),u(4)):(l(4),u(2)))},run(){h.current?n?(u(3),l(4)):(u(4),l(3)):n?u(1):l(1)},done(){var E;h.current&&typeof e.getAnimations=="function"&&e.getAnimations().length>0||(c.current=!1,u(7),n||s(!1),(E=r==null?void 0:r.end)==null||E.call(r,n))}})}},[t,n,e,p]),t?[i,{closed:o(1),enter:o(2),leave:o(4),transition:o(2)||o(4)}]:[n,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function LA(t,{prepare:e,run:n,done:r,inFlight:i}){let s=$r();return FA(t,{prepare:e,inFlight:i}),s.nextFrame(()=>{n(),s.requestAnimationFrame(()=>{s.add(MA(t,r))})}),s.dispose}function MA(t,e){var n,r;let i=$r();if(!t)return i.dispose;let s=!1;i.add(()=>{s=!0});let o=(r=(n=t.getAnimations)==null?void 0:n.call(t).filter(l=>l instanceof CSSTransition))!=null?r:[];return o.length===0?(e(),i.dispose):(Promise.allSettled(o.map(l=>l.finished)).then(()=>{s||e()}),i.dispose)}function FA(t,{inFlight:e,prepare:n}){if(e!=null&&e.current){n();return}let r=t.style.transition;t.style.transition="none",n(),t.offsetHeight,t.style.transition=r}function Dp(t,e){let n=P.useRef([]),r=Ie(t);P.useEffect(()=>{let i=[...n.current];for(let[s,o]of e.entries())if(n.current[s]!==o){let l=r(e,i);return n.current=e,l}},[r,...e])}let lc=P.createContext(null);lc.displayName="OpenClosedContext";var Zt=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(Zt||{});function uc(){return P.useContext(lc)}function jA({value:t,children:e}){return Y.createElement(lc.Provider,{value:t},e)}function VA({children:t}){return Y.createElement(lc.Provider,{value:null},t)}function UA(t){function e(){document.readyState!=="loading"&&(t(),document.removeEventListener("DOMContentLoaded",e))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",e),e())}let ar=[];UA(()=>{function t(e){if(!(e.target instanceof HTMLElement)||e.target===document.body||ar[0]===e.target)return;let n=e.target;n=n.closest(wu),ar.unshift(n??e.target),ar=ar.filter(r=>r!=null&&r.isConnected),ar.splice(10)}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})});function fw(t){let e=Ie(t),n=P.useRef(!1);P.useEffect(()=>(n.current=!1,()=>{n.current=!0,ac(()=>{n.current&&e()})}),[e])}function $A(){let t=typeof document>"u";return"useSyncExternalStore"in eh?(e=>e.useSyncExternalStore)(eh)(()=>()=>{},()=>!1,()=>!t):!1}function Aa(){let t=$A(),[e,n]=P.useState(ci.isHandoffComplete);return e&&ci.isHandoffComplete===!1&&n(!1),P.useEffect(()=>{e!==!0&&n(!0)},[e]),P.useEffect(()=>ci.handoff(),[]),t?!1:e}let pw=P.createContext(!1);function zA(){return P.useContext(pw)}function Gy(t){return Y.createElement(pw.Provider,{value:t.force},t.children)}function BA(t){let e=zA(),n=P.useContext(gw),r=ka(t),[i,s]=P.useState(()=>{var o;if(!e&&n!==null)return(o=n.current)!=null?o:null;if(ci.isServer)return null;let l=r==null?void 0:r.getElementById("headlessui-portal-root");if(l)return l;if(r===null)return null;let u=r.createElement("div");return u.setAttribute("id","headlessui-portal-root"),r.body.appendChild(u)});return P.useEffect(()=>{i!==null&&(r!=null&&r.body.contains(i)||r==null||r.body.appendChild(i))},[i,r]),P.useEffect(()=>{e||n!==null&&s(n.current)},[n,s,e]),i}let mw=P.Fragment,HA=It(function(t,e){let n=t,r=P.useRef(null),i=xn(eA(p=>{r.current=p}),e),s=ka(r),o=BA(r),[l]=P.useState(()=>{var p;return ci.isServer?null:(p=s==null?void 0:s.createElement("div"))!=null?p:null}),u=P.useContext(Jh),c=Aa();ct(()=>{!o||!l||o.contains(l)||(l.setAttribute("data-headlessui-portal",""),o.appendChild(l))},[o,l]),ct(()=>{if(l&&u)return u.register(l)},[u,l]),fw(()=>{var p;!o||!l||(l instanceof Node&&o.contains(l)&&o.removeChild(l),o.childNodes.length<=0&&((p=o.parentElement)==null||p.removeChild(o)))});let h=Bt();return c?!o||!l?null:nw.createPortal(h({ourProps:{ref:i},theirProps:n,slot:{},defaultTag:mw,name:"Portal"}),l):null});function WA(t,e){let n=xn(e),{enabled:r=!0,...i}=t,s=Bt();return r?Y.createElement(HA,{...i,ref:n}):s({ourProps:{ref:n},theirProps:i,slot:{},defaultTag:mw,name:"Portal"})}let GA=P.Fragment,gw=P.createContext(null);function KA(t,e){let{target:n,...r}=t,i={ref:xn(e)},s=Bt();return Y.createElement(gw.Provider,{value:n},s({ourProps:i,theirProps:r,defaultTag:GA,name:"Popover.Group"}))}let Jh=P.createContext(null);function qA(){let t=P.useContext(Jh),e=P.useRef([]),n=Ie(s=>(e.current.push(s),t&&t.register(s),()=>r(s))),r=Ie(s=>{let o=e.current.indexOf(s);o!==-1&&e.current.splice(o,1),t&&t.unregister(s)}),i=P.useMemo(()=>({register:n,unregister:r,portals:e}),[n,r,e]);return[e,P.useMemo(()=>function({children:s}){return Y.createElement(Jh.Provider,{value:i},s)},[i])]}let QA=It(WA),yw=It(KA),YA=Object.assign(QA,{Group:yw});function XA(t,e=typeof document<"u"?document.defaultView:null,n){let r=Ds(t,"escape");hw(e,"keydown",i=>{r&&(i.defaultPrevented||i.key===ow.Escape&&n(i))})}function JA(){var t;let[e]=P.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[n,r]=P.useState((t=e==null?void 0:e.matches)!=null?t:!1);return ct(()=>{if(!e)return;function i(s){r(s.matches)}return e.addEventListener("change",i),()=>e.removeEventListener("change",i)},[e]),n}function ZA({defaultContainers:t=[],portals:e,mainTreeNode:n}={}){let r=ka(n),i=Ie(()=>{var s,o;let l=[];for(let u of t)u!==null&&(u instanceof HTMLElement?l.push(u):"current"in u&&u.current instanceof HTMLElement&&l.push(u.current));if(e!=null&&e.current)for(let u of e.current)l.push(u);for(let u of(s=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?s:[])u!==document.body&&u!==document.head&&u instanceof HTMLElement&&u.id!=="headlessui-portal-root"&&(n&&(u.contains(n)||u.contains((o=n==null?void 0:n.getRootNode())==null?void 0:o.host))||l.some(c=>u.contains(c))||l.push(u));return l});return{resolveContainers:i,contains:Ie(s=>i().some(o=>o.contains(s)))}}let vw=P.createContext(null);function Ky({children:t,node:e}){let[n,r]=P.useState(null),i=_w(e??n);return Y.createElement(vw.Provider,{value:i},t,i===null&&Y.createElement(Qh,{features:_u.Hidden,ref:s=>{var o,l;if(s){for(let u of(l=(o=oc(s))==null?void 0:o.querySelectorAll("html > *, body > *"))!=null?l:[])if(u!==document.body&&u!==document.head&&u instanceof HTMLElement&&u!=null&&u.contains(s)){r(u);break}}}}))}function _w(t=null){var e;return(e=P.useContext(vw))!=null?e:t}function Lp(){let t=P.useRef(!1);return ct(()=>(t.current=!0,()=>{t.current=!1}),[]),t}var vo=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(vo||{});function e2(){let t=P.useRef(0);return dw(!0,"keydown",e=>{e.key==="Tab"&&(t.current=e.shiftKey?1:0)},!0),t}function ww(t){if(!t)return new Set;if(typeof t=="function")return new Set(t());let e=new Set;for(let n of t.current)n.current instanceof HTMLElement&&e.add(n.current);return e}let t2="div";var ei=(t=>(t[t.None=0]="None",t[t.InitialFocus=1]="InitialFocus",t[t.TabLock=2]="TabLock",t[t.FocusLock=4]="FocusLock",t[t.RestoreFocus=8]="RestoreFocus",t[t.AutoFocus=16]="AutoFocus",t))(ei||{});function n2(t,e){let n=P.useRef(null),r=xn(n,e),{initialFocus:i,initialFocusFallback:s,containers:o,features:l=15,...u}=t;Aa()||(l=0);let c=ka(n);o2(l,{ownerDocument:c});let h=a2(l,{ownerDocument:c,container:n,initialFocus:i,initialFocusFallback:s});l2(l,{ownerDocument:c,container:n,containers:o,previousActiveElement:h});let p=e2(),m=Ie(_=>{let S=n.current;S&&(D=>D())(()=>{Cr(p.current,{[vo.Forwards]:()=>{Do(S,Cn.First,{skipElements:[_.relatedTarget,s]})},[vo.Backwards]:()=>{Do(S,Cn.Last,{skipElements:[_.relatedTarget,s]})}})})}),E=Ds(!!(l&2),"focus-trap#tab-lock"),k=Np(),R=P.useRef(!1),C={ref:r,onKeyDown(_){_.key=="Tab"&&(R.current=!0,k.requestAnimationFrame(()=>{R.current=!1}))},onBlur(_){if(!(l&4))return;let S=ww(o);n.current instanceof HTMLElement&&S.add(n.current);let D=_.relatedTarget;D instanceof HTMLElement&&D.dataset.headlessuiFocusGuard!=="true"&&(Ew(S,D)||(R.current?Do(n.current,Cr(p.current,{[vo.Forwards]:()=>Cn.Next,[vo.Backwards]:()=>Cn.Previous})|Cn.WrapAround,{relativeTo:_.target}):_.target instanceof HTMLElement&&Fn(_.target)))}},w=Bt();return Y.createElement(Y.Fragment,null,E&&Y.createElement(Qh,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:m,features:_u.Focusable}),w({ourProps:C,theirProps:u,defaultTag:t2,name:"FocusTrap"}),E&&Y.createElement(Qh,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:m,features:_u.Focusable}))}let r2=It(n2),i2=Object.assign(r2,{features:ei});function s2(t=!0){let e=P.useRef(ar.slice());return Dp(([n],[r])=>{r===!0&&n===!1&&ac(()=>{e.current.splice(0)}),r===!1&&n===!0&&(e.current=ar.slice())},[t,ar,e]),Ie(()=>{var n;return(n=e.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function o2(t,{ownerDocument:e}){let n=!!(t&8),r=s2(n);Dp(()=>{n||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&Fn(r())},[n]),fw(()=>{n&&Fn(r())})}function a2(t,{ownerDocument:e,container:n,initialFocus:r,initialFocusFallback:i}){let s=P.useRef(null),o=Ds(!!(t&1),"focus-trap#initial-focus"),l=Lp();return Dp(()=>{if(t===0)return;if(!o){i!=null&&i.current&&Fn(i.current);return}let u=n.current;u&&ac(()=>{if(!l.current)return;let c=e==null?void 0:e.activeElement;if(r!=null&&r.current){if((r==null?void 0:r.current)===c){s.current=c;return}}else if(u.contains(c)){s.current=c;return}if(r!=null&&r.current)Fn(r.current);else{if(t&16){if(Do(u,Cn.First|Cn.AutoFocus)!==Xh.Error)return}else if(Do(u,Cn.First)!==Xh.Error)return;if(i!=null&&i.current&&(Fn(i.current),(e==null?void 0:e.activeElement)===i.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}s.current=e==null?void 0:e.activeElement})},[i,o,t]),s}function l2(t,{ownerDocument:e,container:n,containers:r,previousActiveElement:i}){let s=Lp(),o=!!(t&4);hw(e==null?void 0:e.defaultView,"focus",l=>{if(!o||!s.current)return;let u=ww(r);n.current instanceof HTMLElement&&u.add(n.current);let c=i.current;if(!c)return;let h=l.target;h&&h instanceof HTMLElement?Ew(u,h)?(i.current=h,Fn(h)):(l.preventDefault(),l.stopPropagation(),Fn(c)):Fn(i.current)},!0)}function Ew(t,e){for(let n of t)if(n.contains(e))return!0;return!1}function Iw(t){var e;return!!(t.enter||t.enterFrom||t.enterTo||t.leave||t.leaveFrom||t.leaveTo)||((e=t.as)!=null?e:xw)!==P.Fragment||Y.Children.count(t.children)===1}let cc=P.createContext(null);cc.displayName="TransitionContext";var u2=(t=>(t.Visible="visible",t.Hidden="hidden",t))(u2||{});function c2(){let t=P.useContext(cc);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}function d2(){let t=P.useContext(dc);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}let dc=P.createContext(null);dc.displayName="NestingContext";function hc(t){return"children"in t?hc(t.children):t.current.filter(({el:e})=>e.current!==null).filter(({state:e})=>e==="visible").length>0}function Tw(t,e){let n=Ni(t),r=P.useRef([]),i=Lp(),s=Np(),o=Ie((E,k=pr.Hidden)=>{let R=r.current.findIndex(({el:C})=>C===E);R!==-1&&(Cr(k,{[pr.Unmount](){r.current.splice(R,1)},[pr.Hidden](){r.current[R].state="hidden"}}),s.microTask(()=>{var C;!hc(r)&&i.current&&((C=n.current)==null||C.call(n))}))}),l=Ie(E=>{let k=r.current.find(({el:R})=>R===E);return k?k.state!=="visible"&&(k.state="visible"):r.current.push({el:E,state:"visible"}),()=>o(E,pr.Unmount)}),u=P.useRef([]),c=P.useRef(Promise.resolve()),h=P.useRef({enter:[],leave:[]}),p=Ie((E,k,R)=>{u.current.splice(0),e&&(e.chains.current[k]=e.chains.current[k].filter(([C])=>C!==E)),e==null||e.chains.current[k].push([E,new Promise(C=>{u.current.push(C)})]),e==null||e.chains.current[k].push([E,new Promise(C=>{Promise.all(h.current[k].map(([w,_])=>_)).then(()=>C())})]),k==="enter"?c.current=c.current.then(()=>e==null?void 0:e.wait.current).then(()=>R(k)):R(k)}),m=Ie((E,k,R)=>{Promise.all(h.current[k].splice(0).map(([C,w])=>w)).then(()=>{var C;(C=u.current.shift())==null||C()}).then(()=>R(k))});return P.useMemo(()=>({children:r,register:l,unregister:o,onStart:p,onStop:m,wait:c,chains:h}),[l,o,r,p,m,h,c])}let xw=P.Fragment,Sw=vu.RenderStrategy;function h2(t,e){var n,r;let{transition:i=!0,beforeEnter:s,afterEnter:o,beforeLeave:l,afterLeave:u,enter:c,enterFrom:h,enterTo:p,entered:m,leave:E,leaveFrom:k,leaveTo:R,...C}=t,[w,_]=P.useState(null),S=P.useRef(null),D=Iw(t),M=xn(...D?[S,e,_]:e===null?[]:[e]),U=(n=C.unmount)==null||n?pr.Unmount:pr.Hidden,{show:T,appear:v,initial:x}=c2(),[I,b]=P.useState(T?"visible":"hidden"),N=d2(),{register:A,unregister:fe}=N;ct(()=>A(S),[A,S]),ct(()=>{if(U===pr.Hidden&&S.current){if(T&&I!=="visible"){b("visible");return}return Cr(I,{hidden:()=>fe(S),visible:()=>A(S)})}},[I,S,A,fe,T,U]);let Tt=Aa();ct(()=>{if(D&&Tt&&I==="visible"&&S.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[S,I,Tt,D]);let ln=x&&!v,ft=v&&T&&x,z=P.useRef(!1),W=Tw(()=>{z.current||(b("hidden"),fe(S))},N),Q=Ie(xt=>{z.current=!0;let ji=xt?"enter":"leave";W.onStart(S,ji,Wr=>{Wr==="enter"?s==null||s():Wr==="leave"&&(l==null||l())})}),X=Ie(xt=>{let ji=xt?"enter":"leave";z.current=!1,W.onStop(S,ji,Wr=>{Wr==="enter"?o==null||o():Wr==="leave"&&(u==null||u())}),ji==="leave"&&!hc(W)&&(b("hidden"),fe(S))});P.useEffect(()=>{D&&i||(Q(T),X(T))},[T,D,i]);let oe=!(!i||!D||!Tt||ln),[,te]=DA(oe,w,T,{start:Q,end:X}),Ht=Jr({ref:M,className:((r=qh(C.className,ft&&c,ft&&h,te.enter&&c,te.enter&&te.closed&&h,te.enter&&!te.closed&&p,te.leave&&E,te.leave&&!te.closed&&k,te.leave&&te.closed&&R,!te.transition&&T&&m))==null?void 0:r.trim())||void 0,...OA(te)}),st=0;I==="visible"&&(st|=Zt.Open),I==="hidden"&&(st|=Zt.Closed),te.enter&&(st|=Zt.Opening),te.leave&&(st|=Zt.Closing);let Wt=Bt();return Y.createElement(dc.Provider,{value:W},Y.createElement(jA,{value:st},Wt({ourProps:Ht,theirProps:C,defaultTag:xw,features:Sw,visible:I==="visible",name:"Transition.Child"})))}function f2(t,e){let{show:n,appear:r=!1,unmount:i=!0,...s}=t,o=P.useRef(null),l=Iw(t),u=xn(...l?[o,e]:e===null?[]:[e]);Aa();let c=uc();if(n===void 0&&c!==null&&(n=(c&Zt.Open)===Zt.Open),n===void 0)throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[h,p]=P.useState(n?"visible":"hidden"),m=Tw(()=>{n||p("hidden")}),[E,k]=P.useState(!0),R=P.useRef([n]);ct(()=>{E!==!1&&R.current[R.current.length-1]!==n&&(R.current.push(n),k(!1))},[R,n]);let C=P.useMemo(()=>({show:n,appear:r,initial:E}),[n,r,E]);ct(()=>{n?p("visible"):!hc(m)&&o.current!==null&&p("hidden")},[n,m]);let w={unmount:i},_=Ie(()=>{var M;E&&k(!1),(M=t.beforeEnter)==null||M.call(t)}),S=Ie(()=>{var M;E&&k(!1),(M=t.beforeLeave)==null||M.call(t)}),D=Bt();return Y.createElement(dc.Provider,{value:m},Y.createElement(cc.Provider,{value:C},D({ourProps:{...w,as:P.Fragment,children:Y.createElement(kw,{ref:u,...w,...s,beforeEnter:_,beforeLeave:S})},theirProps:{},defaultTag:P.Fragment,features:Sw,visible:h==="visible",name:"Transition"})))}function p2(t,e){let n=P.useContext(cc)!==null,r=uc()!==null;return Y.createElement(Y.Fragment,null,!n&&r?Y.createElement(Zh,{ref:e,...t}):Y.createElement(kw,{ref:e,...t}))}let Zh=It(f2),kw=It(h2),Mp=It(p2),m2=Object.assign(Zh,{Child:Mp,Root:Zh});var g2=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(g2||{}),y2=(t=>(t[t.SetTitleId=0]="SetTitleId",t))(y2||{});let v2={0(t,e){return t.titleId===e.id?t:{...t,titleId:e.id}}},Fp=P.createContext(null);Fp.displayName="DialogContext";function fc(t){let e=P.useContext(Fp);if(e===null){let n=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,fc),n}return e}function _2(t,e){return Cr(e.type,v2,t,e)}let qy=It(function(t,e){let n=P.useId(),{id:r=`headlessui-dialog-${n}`,open:i,onClose:s,initialFocus:o,role:l="dialog",autoFocus:u=!0,__demoMode:c=!1,unmount:h=!1,...p}=t,m=P.useRef(!1);l=function(){return l==="dialog"||l==="alertdialog"?l:(m.current||(m.current=!0,console.warn(`Invalid role [${l}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let E=uc();i===void 0&&E!==null&&(i=(E&Zt.Open)===Zt.Open);let k=P.useRef(null),R=xn(k,e),C=ka(k),w=i?0:1,[_,S]=P.useReducer(_2,{titleId:null,descriptionId:null,panelRef:P.createRef()}),D=Ie(()=>s(!1)),M=Ie(X=>S({type:0,id:X})),U=Aa()?w===0:!1,[T,v]=qA(),x={get current(){var X;return(X=_.panelRef.current)!=null?X:k.current}},I=_w(),{resolveContainers:b}=ZA({mainTreeNode:I,portals:T,defaultContainers:[x]}),N=E!==null?(E&Zt.Closing)===Zt.Closing:!1;cA(c||N?!1:U,{allowed:Ie(()=>{var X,oe;return[(oe=(X=k.current)==null?void 0:X.closest("[data-headlessui-portal]"))!=null?oe:null]}),disallowed:Ie(()=>{var X;return[(X=I==null?void 0:I.closest("body > *:not(#headlessui-portal-root)"))!=null?X:null]})}),TA(U,b,X=>{X.preventDefault(),D()}),XA(U,C==null?void 0:C.defaultView,X=>{X.preventDefault(),X.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),D()}),bA(c||N?!1:U,C,b),dA(U,k,D);let[A,fe]=tA(),Tt=P.useMemo(()=>[{dialogState:w,close:D,setTitleId:M,unmount:h},_],[w,_,D,M,h]),ln=P.useMemo(()=>({open:w===0}),[w]),ft={ref:R,id:r,role:l,tabIndex:-1,"aria-modal":c?void 0:w===0?!0:void 0,"aria-labelledby":_.titleId,"aria-describedby":A,unmount:h},z=!JA(),W=ei.None;U&&!c&&(W|=ei.RestoreFocus,W|=ei.TabLock,u&&(W|=ei.AutoFocus),z&&(W|=ei.InitialFocus));let Q=Bt();return Y.createElement(VA,null,Y.createElement(Gy,{force:!0},Y.createElement(YA,null,Y.createElement(Fp.Provider,{value:Tt},Y.createElement(yw,{target:k},Y.createElement(Gy,{force:!1},Y.createElement(fe,{slot:ln},Y.createElement(v,null,Y.createElement(i2,{initialFocus:o,initialFocusFallback:k,containers:b,features:W},Y.createElement(aA,{value:D},Q({ourProps:ft,theirProps:p,slot:ln,defaultTag:w2,features:E2,visible:w===0,name:"Dialog"})))))))))))}),w2="div",E2=vu.RenderStrategy|vu.Static;function I2(t,e){let{transition:n=!1,open:r,...i}=t,s=uc(),o=t.hasOwnProperty("open")||s!==null,l=t.hasOwnProperty("onClose");if(!o&&!l)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!o)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!l)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!s&&typeof t.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${t.open}`);if(typeof t.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${t.onClose}`);return(r!==void 0||n)&&!i.static?Y.createElement(Ky,null,Y.createElement(m2,{show:r,transition:n,unmount:i.unmount},Y.createElement(qy,{ref:e,...i}))):Y.createElement(Ky,null,Y.createElement(qy,{ref:e,open:r,...i}))}let T2="div";function x2(t,e){let n=P.useId(),{id:r=`headlessui-dialog-panel-${n}`,transition:i=!1,...s}=t,[{dialogState:o,unmount:l},u]=fc("Dialog.Panel"),c=xn(e,u.panelRef),h=P.useMemo(()=>({open:o===0}),[o]),p=Ie(C=>{C.stopPropagation()}),m={ref:c,id:r,onClick:p},E=i?Mp:P.Fragment,k=i?{unmount:l}:{},R=Bt();return Y.createElement(E,{...k},R({ourProps:m,theirProps:s,slot:h,defaultTag:T2,name:"Dialog.Panel"}))}let S2="div";function k2(t,e){let{transition:n=!1,...r}=t,[{dialogState:i,unmount:s}]=fc("Dialog.Backdrop"),o=P.useMemo(()=>({open:i===0}),[i]),l={ref:e,"aria-hidden":!0},u=n?Mp:P.Fragment,c=n?{unmount:s}:{},h=Bt();return Y.createElement(u,{...c},h({ourProps:l,theirProps:r,slot:o,defaultTag:S2,name:"Dialog.Backdrop"}))}let A2="h2";function P2(t,e){let n=P.useId(),{id:r=`headlessui-dialog-title-${n}`,...i}=t,[{dialogState:s,setTitleId:o}]=fc("Dialog.Title"),l=xn(e);P.useEffect(()=>(o(r),()=>o(null)),[r,o]);let u=P.useMemo(()=>({open:s===0}),[s]),c={ref:l,id:r};return Bt()({ourProps:c,theirProps:i,slot:u,defaultTag:A2,name:"Dialog.Title"})}let b2=It(I2),Aw=It(x2);It(k2);let C2=It(P2),R2=Object.assign(b2,{Panel:Aw,Title:C2,Description:sA});function N2({title:t,titleId:e,...n},r){return P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},n),t?P.createElement("title",{id:e},t):null,P.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const O2=P.forwardRef(N2);function D2({title:t,titleId:e,...n},r){return P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},n),t?P.createElement("title",{id:e},t):null,P.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const L2=P.forwardRef(D2);/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oa(){return oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oa.apply(this,arguments)}var mr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(mr||(mr={}));const Qy="popstate";function M2(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:u=""}=Oi(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),ef("",{pathname:o,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");l=c===-1?u:u.slice(0,c)}return l+"#"+(typeof s=="string"?s:Pw(s))}function r(i,s){jp(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return j2(e,n,r,t)}function Oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function jp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function F2(){return Math.random().toString(36).substr(2,8)}function Yy(t,e){return{usr:t.state,key:t.key,idx:e}}function ef(t,e,n,r){return n===void 0&&(n=null),oa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Oi(e):e,{state:n,key:e&&e.key||r||F2()})}function Pw(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Oi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function j2(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=mr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(oa({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function p(){l=mr.Pop;let C=h(),w=C==null?null:C-c;c=C,u&&u({action:l,location:R.location,delta:w})}function m(C,w){l=mr.Push;let _=ef(R.location,C,w);n&&n(_,C),c=h()+1;let S=Yy(_,c),D=R.createHref(_);try{o.pushState(S,"",D)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(D)}s&&u&&u({action:l,location:R.location,delta:1})}function E(C,w){l=mr.Replace;let _=ef(R.location,C,w);n&&n(_,C),c=h();let S=Yy(_,c),D=R.createHref(_);o.replaceState(S,"",D),s&&u&&u({action:l,location:R.location,delta:0})}function k(C){let w=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof C=="string"?C:Pw(C);return _=_.replace(/ $/,"%20"),Oe(w,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,w)}let R={get action(){return l},get location(){return t(i,o)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Qy,p),u=C,()=>{i.removeEventListener(Qy,p),u=null}},createHref(C){return e(i,C)},createURL:k,encodeLocation(C){let w=k(C);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:E,go(C){return o.go(C)}};return R}var Xy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Xy||(Xy={}));function V2(t,e,n){return n===void 0&&(n="/"),U2(t,e,n,!1)}function U2(t,e,n,r){let i=typeof e=="string"?Oi(e):e,s=Rw(i.pathname||"/",n);if(s==null)return null;let o=bw(t);$2(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=J2(s);l=Y2(o[u],c,r)}return l}function bw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Oe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=di([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(Oe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),bw(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:q2(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Cw(s.path))i(s,o,u)}),e}function Cw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Cw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function $2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Q2(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const z2=/^:[\w-]+$/,B2=3,H2=2,W2=1,G2=10,K2=-2,Jy=t=>t==="*";function q2(t,e){let n=t.split("/"),r=n.length;return n.some(Jy)&&(r+=K2),e&&(r+=H2),n.filter(i=>!Jy(i)).reduce((i,s)=>i+(z2.test(s)?B2:s===""?W2:G2),r)}function Q2(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Y2(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",p=Zy({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Zy({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:di([s,p.pathname]),pathnameBase:iP(di([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=di([s,p.pathnameBase]))}return o}function Zy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=X2(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,h,p)=>{let{paramName:m,isOptional:E}=h;if(m==="*"){let R=l[p]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const k=l[p];return E&&!k?c[m]=void 0:c[m]=(k||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function X2(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),jp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function J2(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return jp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Rw(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Z2(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Oi(t):t;return{pathname:n?n.startsWith("/")?n:eP(n,e):e,search:sP(r),hash:oP(i)}}function eP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Dd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function nP(t,e){let n=tP(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function rP(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Oi(t):(i=oa({},t),Oe(!i.pathname||!i.pathname.includes("?"),Dd("?","pathname","search",i)),Oe(!i.pathname||!i.pathname.includes("#"),Dd("#","pathname","hash",i)),Oe(!i.search||!i.search.includes("#"),Dd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=Z2(i,l),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const di=t=>t.join("/").replace(/\/\/+/g,"/"),iP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),sP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,oP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function aP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Nw=["post","put","patch","delete"];new Set(Nw);const lP=["get",...Nw];new Set(lP);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},aa.apply(this,arguments)}const Vp=P.createContext(null),uP=P.createContext(null),pc=P.createContext(null),mc=P.createContext(null),Ls=P.createContext({outlet:null,matches:[],isDataRoute:!1}),Ow=P.createContext(null);function gc(){return P.useContext(mc)!=null}function Dw(){return gc()||Oe(!1),P.useContext(mc).location}function Lw(t){P.useContext(pc).static||P.useLayoutEffect(t)}function cP(){let{isDataRoute:t}=P.useContext(Ls);return t?TP():dP()}function dP(){gc()||Oe(!1);let t=P.useContext(Vp),{basename:e,future:n,navigator:r}=P.useContext(pc),{matches:i}=P.useContext(Ls),{pathname:s}=Dw(),o=JSON.stringify(nP(i,n.v7_relativeSplatPath)),l=P.useRef(!1);return Lw(()=>{l.current=!0}),P.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=rP(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:di([e,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[e,r,o,s,t])}function hP(t,e){return fP(t,e)}function fP(t,e,n,r){gc()||Oe(!1);let{navigator:i}=P.useContext(pc),{matches:s}=P.useContext(Ls),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Dw(),h;if(e){var p;let C=typeof e=="string"?Oi(e):e;u==="/"||(p=C.pathname)!=null&&p.startsWith(u)||Oe(!1),h=C}else h=c;let m=h.pathname||"/",E=m;if(u!=="/"){let C=u.replace(/^\//,"").split("/");E="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let k=V2(t,{pathname:E}),R=vP(k&&k.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:di([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:di([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&R?P.createElement(mc.Provider,{value:{location:aa({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:mr.Pop}},R):R}function pP(){let t=IP(),e=aP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:i},n):null,null)}const mP=P.createElement(pP,null);class gP extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?P.createElement(Ls.Provider,{value:this.props.routeContext},P.createElement(Ow.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function yP(t){let{routeContext:e,match:n,children:r}=t,i=P.useContext(Vp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(Ls.Provider,{value:e},r)}function vP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);h>=0||Oe(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:m,errors:E}=n,k=p.route.loader&&m[p.route.id]===void 0&&(!E||E[p.route.id]===void 0);if(p.route.lazy||k){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,p,m)=>{let E,k=!1,R=null,C=null;n&&(E=l&&p.route.id?l[p.route.id]:void 0,R=p.route.errorElement||mP,u&&(c<0&&m===0?(k=!0,C=null):c===m&&(k=!0,C=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),_=()=>{let S;return E?S=R:k?S=C:p.route.Component?S=P.createElement(p.route.Component,null):p.route.element?S=p.route.element:S=h,P.createElement(yP,{match:p,routeContext:{outlet:h,matches:w,isDataRoute:n!=null},children:S})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?P.createElement(gP,{location:n.location,revalidation:n.revalidation,component:R,error:E,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):_()},null)}var Mw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Mw||{}),Eu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Eu||{});function _P(t){let e=P.useContext(Vp);return e||Oe(!1),e}function wP(t){let e=P.useContext(uP);return e||Oe(!1),e}function EP(t){let e=P.useContext(Ls);return e||Oe(!1),e}function Fw(t){let e=EP(),n=e.matches[e.matches.length-1];return n.route.id||Oe(!1),n.route.id}function IP(){var t;let e=P.useContext(Ow),n=wP(Eu.UseRouteError),r=Fw(Eu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function TP(){let{router:t}=_P(Mw.UseNavigateStable),e=Fw(Eu.UseNavigateStable),n=P.useRef(!1);return Lw(()=>{n.current=!0}),P.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,aa({fromRouteId:e},s)))},[t,e])}function An(t){Oe(!1)}function xP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=mr.Pop,navigator:s,static:o=!1,future:l}=t;gc()&&Oe(!1);let u=e.replace(/^\/*/,"/"),c=P.useMemo(()=>({basename:u,navigator:s,static:o,future:aa({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Oi(r));let{pathname:h="/",search:p="",hash:m="",state:E=null,key:k="default"}=r,R=P.useMemo(()=>{let C=Rw(h,u);return C==null?null:{location:{pathname:C,search:p,hash:m,state:E,key:k},navigationType:i}},[u,h,p,m,E,k,i]);return R==null?null:P.createElement(pc.Provider,{value:c},P.createElement(mc.Provider,{children:n,value:R}))}function SP(t){let{children:e,location:n}=t;return hP(tf(e),n)}new Promise(()=>{});function tf(t,e){e===void 0&&(e=[]);let n=[];return P.Children.forEach(t,(r,i)=>{if(!P.isValidElement(r))return;let s=[...e,i];if(r.type===P.Fragment){n.push.apply(n,tf(r.props.children,s));return}r.type!==An&&Oe(!1),!r.props.index||!r.props.children||Oe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=tf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const kP="6";try{window.__reactRouterVersion=kP}catch{}const AP="startTransition",e0=eh[AP];function PP(t){let{basename:e,children:n,future:r,window:i}=t,s=P.useRef();s.current==null&&(s.current=M2({window:i,v5Compat:!0}));let o=s.current,[l,u]=P.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=P.useCallback(p=>{c&&e0?e0(()=>u(p)):u(p)},[u,c]);return P.useLayoutEffect(()=>o.listen(h),[o,h]),P.createElement(xP,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var t0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(t0||(t0={}));var n0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(n0||(n0={}));var r0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Vw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[h],n[p],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new CP;const m=s<<2|l>>4;if(r.push(m),c!==64){const E=l<<4&240|c>>2;if(r.push(E),p!==64){const k=c<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RP=function(t){const e=jw(t);return Vw.encodeByteArray(e,!0)},Iu=function(t){return RP(t).replace(/\./g,"")},Uw=function(t){try{return Vw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=()=>NP().__FIREBASE_DEFAULTS__,DP=()=>{if(typeof process>"u"||typeof r0>"u")return;const t=r0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},LP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uw(t[1]);return e&&JSON.parse(e)},yc=()=>{try{return OP()||DP()||LP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$w=t=>{var e,n;return(n=(e=yc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},MP=t=>{const e=$w(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},zw=()=>{var t;return(t=yc())===null||t===void 0?void 0:t.config},Bw=t=>{var e;return(e=yc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Iu(JSON.stringify(n)),Iu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function UP(){var t;const e=(t=yc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $P(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zP(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function BP(){return!UP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ww(){try{return typeof indexedDB=="object"}catch{return!1}}function Gw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function HP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP="FirebaseError";class an extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=WP,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?GP(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new an(i,l,r)}}function GP(t,e){return t.replace(KP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const KP=/\{\$([^}]+)}/g;function qP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function la(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(i0(s)&&i0(o)){if(!la(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function i0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _o(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function wo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function QP(t,e){const n=new YP(t,e);return n.subscribe.bind(n)}class YP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");XP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ld),i.error===void 0&&(i.error=Ld),i.complete===void 0&&(i.complete=Ld);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ld(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=1e3,ZP=2,eb=4*60*60*1e3,tb=.5;function s0(t,e=JP,n=ZP){const r=e*Math.pow(n,t),i=Math.round(tb*r*(Math.random()-.5)*2);return Math.min(eb,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new FP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ib(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rb(t){return t===Zr?void 0:t}function ib(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const ob={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},ab=ne.INFO,lb={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},ub=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=lb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vc{constructor(e){this.name=e,this._logLevel=ab,this._logHandler=ub,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ob[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const cb=(t,e)=>e.some(n=>t instanceof n);let o0,a0;function db(){return o0||(o0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hb(){return a0||(a0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kw=new WeakMap,nf=new WeakMap,qw=new WeakMap,Md=new WeakMap,Up=new WeakMap;function fb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kw.set(n,t)}).catch(()=>{}),Up.set(e,t),e}function pb(t){if(nf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});nf.set(t,e)}let rf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mb(t){rf=t(rf)}function gb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fd(this),e,...n);return qw.set(r,e.sort?e.sort():[e]),Sr(r)}:hb().includes(t)?function(...e){return t.apply(Fd(this),e),Sr(Kw.get(this))}:function(...e){return Sr(t.apply(Fd(this),e))}}function yb(t){return typeof t=="function"?gb(t):(t instanceof IDBTransaction&&pb(t),cb(t,db())?new Proxy(t,rf):t)}function Sr(t){if(t instanceof IDBRequest)return fb(t);if(Md.has(t))return Md.get(t);const e=yb(t);return e!==t&&(Md.set(t,e),Up.set(e,t)),e}const Fd=t=>Up.get(t);function Qw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Sr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Sr(o.result),u.oldVersion,u.newVersion,Sr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const vb=["get","getKey","getAll","getAllKeys","count"],_b=["put","add","delete","clear"],jd=new Map;function l0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jd.get(e))return jd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_b.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vb.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return jd.set(e,s),s}mb(t=>({...t,get:(e,n,r)=>l0(e,n)||t.get(e,n,r),has:(e,n)=>!!l0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Eb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Eb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sf="@firebase/app",u0="0.10.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new vc("@firebase/app"),Ib="@firebase/app-compat",Tb="@firebase/analytics-compat",xb="@firebase/analytics",Sb="@firebase/app-check-compat",kb="@firebase/app-check",Ab="@firebase/auth",Pb="@firebase/auth-compat",bb="@firebase/database",Cb="@firebase/database-compat",Rb="@firebase/functions",Nb="@firebase/functions-compat",Ob="@firebase/installations",Db="@firebase/installations-compat",Lb="@firebase/messaging",Mb="@firebase/messaging-compat",Fb="@firebase/performance",jb="@firebase/performance-compat",Vb="@firebase/remote-config",Ub="@firebase/remote-config-compat",$b="@firebase/storage",zb="@firebase/storage-compat",Bb="@firebase/firestore",Hb="@firebase/vertexai-preview",Wb="@firebase/firestore-compat",Gb="firebase",Kb="10.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="[DEFAULT]",qb={[sf]:"fire-core",[Ib]:"fire-core-compat",[xb]:"fire-analytics",[Tb]:"fire-analytics-compat",[kb]:"fire-app-check",[Sb]:"fire-app-check-compat",[Ab]:"fire-auth",[Pb]:"fire-auth-compat",[bb]:"fire-rtdb",[Cb]:"fire-rtdb-compat",[Rb]:"fire-fn",[Nb]:"fire-fn-compat",[Ob]:"fire-iid",[Db]:"fire-iid-compat",[Lb]:"fire-fcm",[Mb]:"fire-fcm-compat",[Fb]:"fire-perf",[jb]:"fire-perf-compat",[Vb]:"fire-rc",[Ub]:"fire-rc-compat",[$b]:"fire-gcs",[zb]:"fire-gcs-compat",[Bb]:"fire-fst",[Wb]:"fire-fst-compat",[Hb]:"fire-vertex","fire-js":"fire-js",[Gb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=new Map,Qb=new Map,af=new Map;function c0(t,e){try{t.container.addComponent(e)}catch(n){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wn(t){const e=t.name;if(af.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;af.set(e,t);for(const n of Tu.values())c0(n,t);for(const n of Qb.values())c0(n,t);return!0}function Li(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kr=new Di("app","Firebase",Yb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=Kb;function $p(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:of,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw kr.create("bad-app-name",{appName:String(i)});if(n||(n=zw()),!n)throw kr.create("no-options");const s=Tu.get(i);if(s){if(la(n,s.options)&&la(r,s.config))return s;throw kr.create("duplicate-app",{appName:i})}const o=new sb(i);for(const u of af.values())o.addComponent(u);const l=new Xb(n,r,o);return Tu.set(i,l),l}function zp(t=of){const e=Tu.get(t);if(!e&&t===of&&zw())return $p();if(!e)throw kr.create("no-app",{appName:t});return e}function Ut(t,e,n){var r;let i=(r=qb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(l.join(" "));return}wn(new sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="firebase-heartbeat-database",Zb=1,ua="firebase-heartbeat-store";let Vd=null;function Yw(){return Vd||(Vd=Qw(Jb,Zb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ua)}catch(n){console.warn(n)}}}}).catch(t=>{throw kr.create("idb-open",{originalErrorMessage:t.message})})),Vd}async function eC(t){try{const n=(await Yw()).transaction(ua),r=await n.objectStore(ua).get(Xw(t));return await n.done,r}catch(e){if(e instanceof an)Wn.warn(e.message);else{const n=kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wn.warn(n.message)}}}async function d0(t,e){try{const r=(await Yw()).transaction(ua,"readwrite");await r.objectStore(ua).put(e,Xw(t)),await r.done}catch(n){if(n instanceof an)Wn.warn(n.message);else{const r=kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wn.warn(r.message)}}}function Xw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=1024,nC=30*24*60*60*1e3;class rC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n,r;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=h0();return console.log("heartbeats",(e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats),((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=nC}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Wn.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=h0(),{heartbeatsToSend:r,unsentEntries:i}=iC(this._heartbeatsCache.heartbeats),s=Iu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Wn.warn(n),""}}}function h0(){return new Date().toISOString().substring(0,10)}function iC(t,e=tC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),f0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),f0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ww()?Gw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return d0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return d0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function f0(t){return Iu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t){wn(new sn("platform-logger",e=>new wb(e),"PRIVATE")),wn(new sn("heartbeat",e=>new rC(e),"PRIVATE")),Ut(sf,u0,t),Ut(sf,u0,"esm2017"),Ut("fire-js","")}oC("");function Bp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Jw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aC=Jw,Zw=new Di("auth","Firebase",Jw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=new vc("@firebase/auth");function lC(t,...e){xu.logLevel<=ne.WARN&&xu.warn(`Auth (${Ms}): ${t}`,...e)}function Vl(t,...e){xu.logLevel<=ne.ERROR&&xu.error(`Auth (${Ms}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t,...e){throw Hp(t,...e)}function vn(t,...e){return Hp(t,...e)}function eE(t,e,n){const r=Object.assign(Object.assign({},aC()),{[e]:n});return new Di("auth","Firebase",r).create(e,{appName:t.name})}function jn(t){return eE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Zw.create(t,...e)}function K(t,e,...n){if(!t)throw Hp(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vl(e),new Error(e)}function Gn(t,e){t||On(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uC(){return p0()==="http:"||p0()==="https:"}function p0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uC()||Hw()||"connection"in navigator)?navigator.onLine:!0}function dC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gn(n>e,"Short delay should be less than long delay!"),this.isMobile=VP()||$P()}get(){return cC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t,e){Gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=new ba(3e4,6e4);function zr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Br(t,e,n,r,i={}){return nE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Pa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),tE.fetch()(rE(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function nE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hC),e);try{const i=new mC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw wl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw wl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw wl(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw eE(t,h,c);on(t,h)}}catch(i){if(i instanceof an)throw i;on(t,"network-request-failed",{message:String(i)})}}async function Ca(t,e,n,r,i={}){const s=await Br(t,e,n,r,i);return"mfaPendingCredential"in s&&on(t,"multi-factor-auth-required",{_serverResponse:s}),s}function rE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Wp(t.config,i):`${t.config.apiScheme}://${i}`}function pC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),fC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vn(t,e,r);return i.customData._tokenResponse=n,i}function m0(t){return t!==void 0&&t.enterprise!==void 0}class gC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function yC(t,e){return Br(t,"GET","/v2/recaptchaConfig",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(t,e){return Br(t,"POST","/v1/accounts:delete",e)}async function iE(t,e){return Br(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _C(t,e=!1){const n=wt(t),r=await n.getIdToken(e),i=Gp(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Lo(Ud(i.auth_time)),issuedAtTime:Lo(Ud(i.iat)),expirationTime:Lo(Ud(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ud(t){return Number(t)*1e3}function Gp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Uw(n);return i?JSON.parse(i):(Vl("Failed to decode base64 JWT payload"),null)}catch(i){return Vl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function g0(t){const e=Gp(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof an&&wC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lo(this.lastLoginAt),this.creationTime=Lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Su(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ca(t,iE(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?sE(s.providerUserInfo):[],l=TC(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new uf(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function IC(t){const e=wt(t);await Su(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function sE(t){return t.map(e=>{var{providerId:n}=e,r=Bp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC(t,e){const n=await nE(t,{},async()=>{const r=Pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=rE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",tE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function SC(t,e){return Br(t,"POST","/v2/accounts:revokeToken",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):g0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=g0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await xC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new hs;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Bp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new EC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new uf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ca(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _C(this,e)}reload(){return IC(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Su(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(jn(this.auth));const e=await this.getIdToken();return await ca(this,vC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:S,emailVerified:D,isAnonymous:M,providerData:U,stsTokenManager:T}=n;K(S&&T,e,"internal-error");const v=hs.fromJSON(this.name,T);K(typeof S=="string",e,"internal-error"),tr(p,e.name),tr(m,e.name),K(typeof D=="boolean",e,"internal-error"),K(typeof M=="boolean",e,"internal-error"),tr(E,e.name),tr(k,e.name),tr(R,e.name),tr(C,e.name),tr(w,e.name),tr(_,e.name);const x=new Dn({uid:S,auth:e,email:m,emailVerified:D,displayName:p,isAnonymous:M,photoURL:k,phoneNumber:E,tenantId:R,stsTokenManager:v,createdAt:w,lastLoginAt:_});return U&&Array.isArray(U)&&(x.providerData=U.map(I=>Object.assign({},I))),C&&(x._redirectEventId=C),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new hs;i.updateFromServerResponse(n);const s=new Dn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Su(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?sE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new hs;l.updateFromIdToken(r);const u=new Dn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new uf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=new Map;function Ln(t){Gn(t instanceof Function,"Expected a class definition");let e=y0.get(t);return e?(Gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,y0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}oE.type="NONE";const v0=oE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t,e,n){return`firebase:${t}:${e}:${n}`}class fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ul(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ul("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fs(Ln(v0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Ln(v0);const o=Ul(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const h=await c._get(o);if(h){const p=Dn._fromJSON(e,h);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new fs(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new fs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(aE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hE(e))return"Blackberry";if(fE(e))return"Webos";if(lE(e))return"Safari";if((e.includes("chrome/")||uE(e))&&!e.includes("edge/"))return"Chrome";if(dE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function aE(t=it()){return/firefox\//i.test(t)}function lE(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uE(t=it()){return/crios\//i.test(t)}function cE(t=it()){return/iemobile/i.test(t)}function dE(t=it()){return/android/i.test(t)}function hE(t=it()){return/blackberry/i.test(t)}function fE(t=it()){return/webos/i.test(t)}function Kp(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kC(t=it()){var e;return Kp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function AC(){return zP()&&document.documentMode===10}function pE(t=it()){return Kp(t)||dE(t)||fE(t)||hE(t)||/windows phone/i.test(t)||cE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(t,e=[]){let n;switch(t){case"Browser":n=_0(it());break;case"Worker":n=`${_0(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ms}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bC(t,e={}){return Br(t,"GET","/v2/passwordPolicy",zr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=6;class RC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:CC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new w0(this),this.idTokenSubscription=new w0(this),this.beforeStateQueue=new PC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await iE(this,{idToken:e}),r=await Dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(fn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Su(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(jn(this));const n=e?wt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bC(this),n=new RC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Di("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await SC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Mi(t){return wt(t)}class w0{constructor(e){this.auth=e,this.observer=null,this.addObserver=QP(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _c={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function OC(t){_c=t}function gE(t){return _c.loadJS(t)}function DC(){return _c.recaptchaEnterpriseScript}function LC(){return _c.gapiScript}function MC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const FC="recaptcha-enterprise",jC="NO_RECAPTCHA";class VC{constructor(e){this.type=FC,this.auth=Mi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{yC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new gC(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;m0(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(jC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&m0(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=DC();u.length!==0&&(u+=l),gE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function E0(t,e,n,r=!1){const i=new VC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function cf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await E0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await E0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(t,e){const n=Li(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(la(s,e??{}))return i;on(i,"already-initialized")}return n.initialize({options:e})}function $C(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zC(t,e,n){const r=Mi(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=yE(e),{host:o,port:l}=BC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),HC()}function yE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BC(t){const e=yE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:I0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:I0(o)}}}function I0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function HC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function WC(t,e){return Br(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GC(t,e){return Ca(t,"POST","/v1/accounts:signInWithPassword",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KC(t,e){return Ca(t,"POST","/v1/accounts:signInWithEmailLink",zr(t,e))}async function qC(t,e){return Ca(t,"POST","/v1/accounts:signInWithEmailLink",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da extends qp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new da(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new da(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cf(e,n,"signInWithPassword",GC);case"emailLink":return KC(e,{email:this._email,oobCode:this._password});default:on(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cf(e,r,"signUpPassword",WC);case"emailLink":return qC(e,{idToken:n,email:this._email,oobCode:this._password});default:on(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t,e){return Ca(t,"POST","/v1/accounts:signInWithIdp",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC="http://localhost";class Ei extends qp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Bp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ps(e,n)}buildRequest(){const e={requestUri:QC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XC(t){const e=_o(wo(t)).link,n=e?_o(wo(e)).deep_link_id:null,r=_o(wo(t)).deep_link_id;return(r?_o(wo(r)).link:null)||r||n||e||t}class Qp{constructor(e){var n,r,i,s,o,l;const u=_o(wo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,p=YC((i=u.mode)!==null&&i!==void 0?i:null);K(c&&h&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=XC(e);try{return new Qp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.providerId=Fs.PROVIDER_ID}static credential(e,n){return da._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qp.parseLink(n);return K(r,"argument-error"),da._fromEmailAndCode(e,r.code,r.tenantId)}}Fs.PROVIDER_ID="password";Fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends vE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Ra{constructor(){super("facebook.com")}static credential(e){return Ei._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Ra{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ei._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Ra{constructor(){super("github.com")}static credential(e){return Ei._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Ra{constructor(){super("twitter.com")}static credential(e,n){return Ei._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JC(t,e){return Ca(t,"POST","/v1/accounts:signUp",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Dn._fromIdTokenResponse(e,r,i),o=T0(r);return new Ii({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=T0(r);return new Ii({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function T0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends an{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ku.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ku(e,n,r,i)}}function _E(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ku._fromErrorAndOperation(t,s,e,r):s})}async function ZC(t,e,n=!1){const r=await ca(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ii._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(t,e,n=!1){const{auth:r}=t;if(fn(r.app))return Promise.reject(jn(r));const i="reauthenticate";try{const s=await ca(t,_E(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Gp(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),Ii._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&on(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wE(t,e,n=!1){if(fn(t.app))return Promise.reject(jn(t));const r="signIn",i=await _E(t,r,e),s=await Ii._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function tR(t,e){return wE(Mi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EE(t){const e=Mi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nR(t,e,n){if(fn(t.app))return Promise.reject(jn(t));const r=Mi(t),o=await cf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",JC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&EE(t),u}),l=await Ii._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function rR(t,e,n){return fn(t.app)?Promise.reject(jn(t)):tR(wt(t),Fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&EE(t),r})}function iR(t,e,n,r){return wt(t).onIdTokenChanged(e,n,r)}function sR(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}const Au="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Au,"1"),this.storage.removeItem(Au),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=1e3,aR=10;class TE extends IE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);AC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},oR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}TE.type="LOCAL";const lR=TE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE extends IE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xE.type="SESSION";const SE=xE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await uR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Yp("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return window}function dR(t){_n().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function hR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pR(){return kE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE="firebaseLocalStorageDb",mR=1,Pu="firebaseLocalStorage",PE="fbase_key";class Na{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ec(t,e){return t.transaction([Pu],e?"readwrite":"readonly").objectStore(Pu)}function gR(){const t=indexedDB.deleteDatabase(AE);return new Na(t).toPromise()}function df(){const t=indexedDB.open(AE,mR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Pu,{keyPath:PE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Pu)?e(r):(r.close(),await gR(),e(await df()))})})}async function x0(t,e,n){const r=Ec(t,!0).put({[PE]:e,value:n});return new Na(r).toPromise()}async function yR(t,e){const n=Ec(t,!1).get(e),r=await new Na(n).toPromise();return r===void 0?null:r.value}function S0(t,e){const n=Ec(t,!0).delete(e);return new Na(n).toPromise()}const vR=800,_R=3;class bE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await df(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_R)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wc._getInstance(pR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hR(),!this.activeServiceWorker)return;this.sender=new cR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await df();return await x0(e,Au,"1"),await S0(e,Au),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>x0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>S0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ec(i,!1).getAll();return new Na(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bE.type="LOCAL";const wR=bE;new ba(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(t,e){return e?Ln(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp extends qp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IR(t){return wE(t.auth,new Xp(t),t.bypassAuthState)}function TR(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),eR(n,new Xp(t),t.bypassAuthState)}async function xR(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),ZC(n,new Xp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IR;case"linkViaPopup":case"linkViaRedirect":return xR;case"reauthViaPopup":case"reauthViaRedirect":return TR;default:on(this.auth,"internal-error")}}resolve(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=new ba(2e3,1e4);class rs extends CE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,rs.currentPopupAction&&rs.currentPopupAction.cancel(),rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Gn(this.filter.length===1,"Popup operations only handle one event");const e=Yp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SR.get())};e()}}rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR="pendingRedirect",$l=new Map;class AR extends CE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$l.get(this.auth._key());if(!e){try{const r=await PR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$l.set(this.auth._key(),e)}return this.bypassAuthState||$l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PR(t,e){const n=RR(e),r=CR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function bR(t,e){$l.set(t._key(),e)}function CR(t){return Ln(t._redirectPersistence)}function RR(t){return Ul(kR,t.config.apiKey,t.name)}async function NR(t,e,n=!1){if(fn(t.app))return Promise.reject(jn(t));const r=Mi(t),i=ER(r,e),o=await new AR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=10*60*1e3;class DR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!RE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OR&&this.cachedEventUids.clear(),this.cachedEventUids.has(k0(e))}saveEventToCache(e){this.cachedEventUids.add(k0(e)),this.lastProcessedEventTime=Date.now()}}function k0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function RE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return RE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MR(t,e={}){return Br(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jR=/^https?/;async function VR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MR(t);for(const n of e)try{if(UR(n))return}catch{}on(t,"unauthorized-domain")}function UR(t){const e=lf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jR.test(n))return!1;if(FR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=new ba(3e4,6e4);function A0(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zR(t){return new Promise((e,n)=>{var r,i,s;function o(){A0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{A0(),n(vn(t,"network-request-failed"))},timeout:$R.get()})}if(!((i=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_n().gapi)===null||s===void 0)&&s.load)o();else{const l=MC("iframefcb");return _n()[l]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},gE(`${LC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw zl=null,e})}let zl=null;function BR(t){return zl=zl||zR(t),zl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=new ba(5e3,15e3),WR="__/auth/iframe",GR="emulator/auth/iframe",KR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QR(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wp(e,GR):`https://${t.config.authDomain}/${WR}`,r={apiKey:e.apiKey,appName:t.name,v:Ms},i=qR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Pa(r).slice(1)}`}async function YR(t){const e=await BR(t),n=_n().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:QR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),l=_n().setTimeout(()=>{s(o)},HR.get());function u(){_n().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JR=500,ZR=600,eN="_blank",tN="http://localhost";class P0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nN(t,e,n,r=JR,i=ZR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},XR),{width:r.toString(),height:i.toString(),top:s,left:o}),c=it().toLowerCase();n&&(l=uE(c)?eN:n),aE(c)&&(e=e||tN,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[E,k])=>`${m}${E}=${k},`,"");if(kC(c)&&l!=="_self")return rN(e||"",l),new P0(null);const p=window.open(e||"",l,h);K(p,t,"popup-blocked");try{p.focus()}catch{}return new P0(p)}function rN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN="__/auth/handler",sN="emulator/auth/handler",oN=encodeURIComponent("fac");async function b0(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ms,eventId:i};if(e instanceof vE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof Ra){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const u=await t._getAppCheckToken(),c=u?`#${oN}=${encodeURIComponent(u)}`:"";return`${aN(t)}?${Pa(l).slice(1)}${c}`}function aN({config:t}){return t.emulator?Wp(t,sN):`https://${t.authDomain}/${iN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="webStorageSupport";class lN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=SE,this._completeRedirectFn=NR,this._overrideRedirectResult=bR}async _openPopup(e,n,r,i){var s;Gn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await b0(e,n,r,lf(),i);return nN(e,o,Yp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await b0(e,n,r,lf(),i);return dR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Gn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YR(e),r=new DR(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($d,{type:$d},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$d];o!==void 0&&n(!!o),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pE()||lE()||Kp()}}const uN=lN;var C0="@firebase/auth",R0="1.7.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hN(t){wn(new sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mE(t)},c=new NC(r,i,s,u);return $C(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wn(new sn("auth-internal",e=>{const n=Mi(e.getProvider("auth").getImmediate());return(r=>new cN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(C0,R0,dN(t)),Ut(C0,R0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=5*60,pN=Bw("authIdTokenMaxAge")||fN;let N0=null;const mN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pN)return;const i=n==null?void 0:n.token;N0!==i&&(N0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gN(t=zp()){const e=Li(t,"auth");if(e.isInitialized())return e.getImmediate();const n=UC(t,{popupRedirectResolver:uN,persistence:[wR,lR,SE]}),r=Bw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=mN(s.toString());sR(n,o,()=>o(n.currentUser)),iR(n,l=>o(l))}}const i=$w("auth");return i&&zC(n,`http://${i}`),n}function yN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}OC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",yN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hN("Browser");var vN="firebase",_N="10.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut(vN,_N,"app");var O0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var NE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function x(){}x.prototype=v.prototype,T.D=v.prototype,T.prototype=new x,T.prototype.constructor=T,T.C=function(I,b,N){for(var A=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)A[fe-2]=arguments[fe];return v.prototype[b].apply(I,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,v,x){x||(x=0);var I=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)I[b]=v.charCodeAt(x++)|v.charCodeAt(x++)<<8|v.charCodeAt(x++)<<16|v.charCodeAt(x++)<<24;else for(b=0;16>b;++b)I[b]=v[x++]|v[x++]<<8|v[x++]<<16|v[x++]<<24;v=T.g[0],x=T.g[1],b=T.g[2];var N=T.g[3],A=v+(N^x&(b^N))+I[0]+3614090360&4294967295;v=x+(A<<7&4294967295|A>>>25),A=N+(b^v&(x^b))+I[1]+3905402710&4294967295,N=v+(A<<12&4294967295|A>>>20),A=b+(x^N&(v^x))+I[2]+606105819&4294967295,b=N+(A<<17&4294967295|A>>>15),A=x+(v^b&(N^v))+I[3]+3250441966&4294967295,x=b+(A<<22&4294967295|A>>>10),A=v+(N^x&(b^N))+I[4]+4118548399&4294967295,v=x+(A<<7&4294967295|A>>>25),A=N+(b^v&(x^b))+I[5]+1200080426&4294967295,N=v+(A<<12&4294967295|A>>>20),A=b+(x^N&(v^x))+I[6]+2821735955&4294967295,b=N+(A<<17&4294967295|A>>>15),A=x+(v^b&(N^v))+I[7]+4249261313&4294967295,x=b+(A<<22&4294967295|A>>>10),A=v+(N^x&(b^N))+I[8]+1770035416&4294967295,v=x+(A<<7&4294967295|A>>>25),A=N+(b^v&(x^b))+I[9]+2336552879&4294967295,N=v+(A<<12&4294967295|A>>>20),A=b+(x^N&(v^x))+I[10]+4294925233&4294967295,b=N+(A<<17&4294967295|A>>>15),A=x+(v^b&(N^v))+I[11]+2304563134&4294967295,x=b+(A<<22&4294967295|A>>>10),A=v+(N^x&(b^N))+I[12]+1804603682&4294967295,v=x+(A<<7&4294967295|A>>>25),A=N+(b^v&(x^b))+I[13]+4254626195&4294967295,N=v+(A<<12&4294967295|A>>>20),A=b+(x^N&(v^x))+I[14]+2792965006&4294967295,b=N+(A<<17&4294967295|A>>>15),A=x+(v^b&(N^v))+I[15]+1236535329&4294967295,x=b+(A<<22&4294967295|A>>>10),A=v+(b^N&(x^b))+I[1]+4129170786&4294967295,v=x+(A<<5&4294967295|A>>>27),A=N+(x^b&(v^x))+I[6]+3225465664&4294967295,N=v+(A<<9&4294967295|A>>>23),A=b+(v^x&(N^v))+I[11]+643717713&4294967295,b=N+(A<<14&4294967295|A>>>18),A=x+(N^v&(b^N))+I[0]+3921069994&4294967295,x=b+(A<<20&4294967295|A>>>12),A=v+(b^N&(x^b))+I[5]+3593408605&4294967295,v=x+(A<<5&4294967295|A>>>27),A=N+(x^b&(v^x))+I[10]+38016083&4294967295,N=v+(A<<9&4294967295|A>>>23),A=b+(v^x&(N^v))+I[15]+3634488961&4294967295,b=N+(A<<14&4294967295|A>>>18),A=x+(N^v&(b^N))+I[4]+3889429448&4294967295,x=b+(A<<20&4294967295|A>>>12),A=v+(b^N&(x^b))+I[9]+568446438&4294967295,v=x+(A<<5&4294967295|A>>>27),A=N+(x^b&(v^x))+I[14]+3275163606&4294967295,N=v+(A<<9&4294967295|A>>>23),A=b+(v^x&(N^v))+I[3]+4107603335&4294967295,b=N+(A<<14&4294967295|A>>>18),A=x+(N^v&(b^N))+I[8]+1163531501&4294967295,x=b+(A<<20&4294967295|A>>>12),A=v+(b^N&(x^b))+I[13]+2850285829&4294967295,v=x+(A<<5&4294967295|A>>>27),A=N+(x^b&(v^x))+I[2]+4243563512&4294967295,N=v+(A<<9&4294967295|A>>>23),A=b+(v^x&(N^v))+I[7]+1735328473&4294967295,b=N+(A<<14&4294967295|A>>>18),A=x+(N^v&(b^N))+I[12]+2368359562&4294967295,x=b+(A<<20&4294967295|A>>>12),A=v+(x^b^N)+I[5]+4294588738&4294967295,v=x+(A<<4&4294967295|A>>>28),A=N+(v^x^b)+I[8]+2272392833&4294967295,N=v+(A<<11&4294967295|A>>>21),A=b+(N^v^x)+I[11]+1839030562&4294967295,b=N+(A<<16&4294967295|A>>>16),A=x+(b^N^v)+I[14]+4259657740&4294967295,x=b+(A<<23&4294967295|A>>>9),A=v+(x^b^N)+I[1]+2763975236&4294967295,v=x+(A<<4&4294967295|A>>>28),A=N+(v^x^b)+I[4]+1272893353&4294967295,N=v+(A<<11&4294967295|A>>>21),A=b+(N^v^x)+I[7]+4139469664&4294967295,b=N+(A<<16&4294967295|A>>>16),A=x+(b^N^v)+I[10]+3200236656&4294967295,x=b+(A<<23&4294967295|A>>>9),A=v+(x^b^N)+I[13]+681279174&4294967295,v=x+(A<<4&4294967295|A>>>28),A=N+(v^x^b)+I[0]+3936430074&4294967295,N=v+(A<<11&4294967295|A>>>21),A=b+(N^v^x)+I[3]+3572445317&4294967295,b=N+(A<<16&4294967295|A>>>16),A=x+(b^N^v)+I[6]+76029189&4294967295,x=b+(A<<23&4294967295|A>>>9),A=v+(x^b^N)+I[9]+3654602809&4294967295,v=x+(A<<4&4294967295|A>>>28),A=N+(v^x^b)+I[12]+3873151461&4294967295,N=v+(A<<11&4294967295|A>>>21),A=b+(N^v^x)+I[15]+530742520&4294967295,b=N+(A<<16&4294967295|A>>>16),A=x+(b^N^v)+I[2]+3299628645&4294967295,x=b+(A<<23&4294967295|A>>>9),A=v+(b^(x|~N))+I[0]+4096336452&4294967295,v=x+(A<<6&4294967295|A>>>26),A=N+(x^(v|~b))+I[7]+1126891415&4294967295,N=v+(A<<10&4294967295|A>>>22),A=b+(v^(N|~x))+I[14]+2878612391&4294967295,b=N+(A<<15&4294967295|A>>>17),A=x+(N^(b|~v))+I[5]+4237533241&4294967295,x=b+(A<<21&4294967295|A>>>11),A=v+(b^(x|~N))+I[12]+1700485571&4294967295,v=x+(A<<6&4294967295|A>>>26),A=N+(x^(v|~b))+I[3]+2399980690&4294967295,N=v+(A<<10&4294967295|A>>>22),A=b+(v^(N|~x))+I[10]+4293915773&4294967295,b=N+(A<<15&4294967295|A>>>17),A=x+(N^(b|~v))+I[1]+2240044497&4294967295,x=b+(A<<21&4294967295|A>>>11),A=v+(b^(x|~N))+I[8]+1873313359&4294967295,v=x+(A<<6&4294967295|A>>>26),A=N+(x^(v|~b))+I[15]+4264355552&4294967295,N=v+(A<<10&4294967295|A>>>22),A=b+(v^(N|~x))+I[6]+2734768916&4294967295,b=N+(A<<15&4294967295|A>>>17),A=x+(N^(b|~v))+I[13]+1309151649&4294967295,x=b+(A<<21&4294967295|A>>>11),A=v+(b^(x|~N))+I[4]+4149444226&4294967295,v=x+(A<<6&4294967295|A>>>26),A=N+(x^(v|~b))+I[11]+3174756917&4294967295,N=v+(A<<10&4294967295|A>>>22),A=b+(v^(N|~x))+I[2]+718787259&4294967295,b=N+(A<<15&4294967295|A>>>17),A=x+(N^(b|~v))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(b+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+b&4294967295,T.g[3]=T.g[3]+N&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var x=v-this.blockSize,I=this.B,b=this.h,N=0;N<v;){if(b==0)for(;N<=x;)i(this,T,N),N+=this.blockSize;if(typeof T=="string"){for(;N<v;)if(I[b++]=T.charCodeAt(N++),b==this.blockSize){i(this,I),b=0;break}}else for(;N<v;)if(I[b++]=T[N++],b==this.blockSize){i(this,I),b=0;break}}this.h=b,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var x=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=x&255,x/=256;for(this.u(T),T=Array(16),v=x=0;4>v;++v)for(var I=0;32>I;I+=8)T[x++]=this.g[v]>>>I&255;return T};function s(T,v){var x=l;return Object.prototype.hasOwnProperty.call(x,T)?x[T]:x[T]=v(T)}function o(T,v){this.h=v;for(var x=[],I=!0,b=T.length-1;0<=b;b--){var N=T[b]|0;I&&N==v||(x[b]=N,I=!1)}this.g=x}var l={};function u(T){return-128<=T&&128>T?s(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return C(c(-T));for(var v=[],x=1,I=0;T>=x;I++)v[I]=T/x|0,x*=4294967296;return new o(v,0)}function h(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return C(h(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=c(Math.pow(v,8)),I=p,b=0;b<T.length;b+=8){var N=Math.min(8,T.length-b),A=parseInt(T.substring(b,b+N),v);8>N?(N=c(Math.pow(v,N)),I=I.j(N).add(c(A))):(I=I.j(x),I=I.add(c(A)))}return I}var p=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-C(this).m();for(var T=0,v=1,x=0;x<this.g.length;x++){var I=this.i(x);T+=(0<=I?I:4294967296+I)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(R(this))return"-"+C(this).toString(T);for(var v=c(Math.pow(T,6)),x=this,I="";;){var b=D(x,v).g;x=w(x,b.j(v));var N=((0<x.g.length?x.g[0]:x.h)>>>0).toString(T);if(x=b,k(x))return N+I;for(;6>N.length;)N="0"+N;I=N+I}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function R(T){return T.h==-1}t.l=function(T){return T=w(this,T),R(T)?-1:k(T)?0:1};function C(T){for(var v=T.g.length,x=[],I=0;I<v;I++)x[I]=~T.g[I];return new o(x,~T.h).add(m)}t.abs=function(){return R(this)?C(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),x=[],I=0,b=0;b<=v;b++){var N=I+(this.i(b)&65535)+(T.i(b)&65535),A=(N>>>16)+(this.i(b)>>>16)+(T.i(b)>>>16);I=A>>>16,N&=65535,A&=65535,x[b]=A<<16|N}return new o(x,x[x.length-1]&-2147483648?-1:0)};function w(T,v){return T.add(C(v))}t.j=function(T){if(k(this)||k(T))return p;if(R(this))return R(T)?C(this).j(C(T)):C(C(this).j(T));if(R(T))return C(this.j(C(T)));if(0>this.l(E)&&0>T.l(E))return c(this.m()*T.m());for(var v=this.g.length+T.g.length,x=[],I=0;I<2*v;I++)x[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<T.g.length;b++){var N=this.i(I)>>>16,A=this.i(I)&65535,fe=T.i(b)>>>16,Tt=T.i(b)&65535;x[2*I+2*b]+=A*Tt,_(x,2*I+2*b),x[2*I+2*b+1]+=N*Tt,_(x,2*I+2*b+1),x[2*I+2*b+1]+=A*fe,_(x,2*I+2*b+1),x[2*I+2*b+2]+=N*fe,_(x,2*I+2*b+2)}for(I=0;I<v;I++)x[I]=x[2*I+1]<<16|x[2*I];for(I=v;I<2*v;I++)x[I]=0;return new o(x,0)};function _(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function S(T,v){this.g=T,this.h=v}function D(T,v){if(k(v))throw Error("division by zero");if(k(T))return new S(p,p);if(R(T))return v=D(C(T),v),new S(C(v.g),C(v.h));if(R(v))return v=D(T,C(v)),new S(C(v.g),v.h);if(30<T.g.length){if(R(T)||R(v))throw Error("slowDivide_ only works with positive integers.");for(var x=m,I=v;0>=I.l(T);)x=M(x),I=M(I);var b=U(x,1),N=U(I,1);for(I=U(I,2),x=U(x,2);!k(I);){var A=N.add(I);0>=A.l(T)&&(b=b.add(x),N=A),I=U(I,1),x=U(x,1)}return v=w(T,b.j(v)),new S(b,v)}for(b=p;0<=T.l(v);){for(x=Math.max(1,Math.floor(T.m()/v.m())),I=Math.ceil(Math.log(x)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),N=c(x),A=N.j(v);R(A)||0<A.l(T);)x-=I,N=c(x),A=N.j(v);k(N)&&(N=m),b=b.add(N),T=w(T,A)}return new S(b,T)}t.A=function(T){return D(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),x=[],I=0;I<v;I++)x[I]=this.i(I)&T.i(I);return new o(x,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),x=[],I=0;I<v;I++)x[I]=this.i(I)|T.i(I);return new o(x,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),x=[],I=0;I<v;I++)x[I]=this.i(I)^T.i(I);return new o(x,this.h^T.h)};function M(T){for(var v=T.g.length+1,x=[],I=0;I<v;I++)x[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(x,T.h)}function U(T,v){var x=v>>5;v%=32;for(var I=T.g.length-x,b=[],N=0;N<I;N++)b[N]=0<v?T.i(N+x)>>>v|T.i(N+x+1)<<32-v:T.i(N+x);return new o(b,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,NE=o}).apply(typeof O0<"u"?O0:typeof self<"u"?self:typeof window<"u"?window:{});var El=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var OE,DE,Eo,LE,Bl,hf,ME,FE,jE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof El=="object"&&El];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var O=a[g];if(!(O in f))break e;f=f[O]}a=a[a.length-1],g=f[a],d=d(g),d!=g&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function s(a,d){a instanceof String&&(a+="");var f=0,g=!1,O={next:function(){if(!g&&f<a.length){var L=f++;return{value:d(L,a[L]),done:!1}}return g=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return s(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function p(a,d,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,g),a.apply(d,O)}}return function(){return a.apply(d,arguments)}}function m(a,d,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,m.apply(null,arguments)}function E(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function k(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,O,L){for(var $=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)$[ue-2]=arguments[ue];return d.prototype[O].apply(g,$)}}function R(a){const d=a.length;if(0<d){const f=Array(d);for(let g=0;g<d;g++)f[g]=a[g];return f}return[]}function C(a,d){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const O=a.length||0,L=g.length||0;a.length=O+L;for(let $=0;$<L;$++)a[O+$]=g[$]}else a.push(g)}}class w{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function _(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var M=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function U(a,d,f){for(const g in a)d.call(f,a[g],g,a)}function T(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function v(a){const d={};for(const f in a)d[f]=a[f];return d}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,d){let f,g;for(let O=1;O<arguments.length;O++){g=arguments[O];for(f in g)a[f]=g[f];for(let L=0;L<x.length;L++)f=x[L],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function b(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function N(a){l.setTimeout(()=>{throw a},0)}function A(){var a=W;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class fe{constructor(){this.h=this.g=null}add(d,f){const g=Tt.get();g.set(d,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Tt=new w(()=>new ln,a=>a.reset());class ln{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ft,z=!1,W=new fe,Q=()=>{const a=l.Promise.resolve(void 0);ft=()=>{a.then(X)}};var X=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(f){N(f)}var d=Tt;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}z=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var Ht=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,d),l.removeEventListener("test",f,d)}catch{}return a}();function st(a,d){if(te.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(M){e:{try{D(d.nodeName);var O=!0;break e}catch{}O=!1}O||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Wt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&st.aa.h.call(this)}}k(st,te);var Wt={2:"touch",3:"pen",4:"mouse"};st.prototype.h=function(){st.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var xt="closure_listenable_"+(1e6*Math.random()|0),ji=0;function Wr(a,d,f,g,O){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!g,this.ha=O,this.key=++ji,this.da=this.fa=!1}function Va(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ua(a){this.src=a,this.g={},this.h=0}Ua.prototype.add=function(a,d,f,g,O){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var $=jc(a,d,g,O);return-1<$?(d=a[$],f||(d.fa=!1)):(d=new Wr(d,this.src,L,!!g,O),d.fa=f,a.push(d)),d};function Fc(a,d){var f=d.type;if(f in a.g){var g=a.g[f],O=Array.prototype.indexOf.call(g,d,void 0),L;(L=0<=O)&&Array.prototype.splice.call(g,O,1),L&&(Va(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function jc(a,d,f,g){for(var O=0;O<a.length;++O){var L=a[O];if(!L.da&&L.listener==d&&L.capture==!!f&&L.ha==g)return O}return-1}var Vc="closure_lm_"+(1e6*Math.random()|0),Uc={};function Om(a,d,f,g,O){if(Array.isArray(d)){for(var L=0;L<d.length;L++)Om(a,d[L],f,g,O);return null}return f=Mm(f),a&&a[xt]?a.K(d,f,c(g)?!!g.capture:!!g,O):zT(a,d,f,!1,g,O)}function zT(a,d,f,g,O,L){if(!d)throw Error("Invalid event type");var $=c(O)?!!O.capture:!!O,ue=zc(a);if(ue||(a[Vc]=ue=new Ua(a)),f=ue.add(d,f,g,$,L),f.proxy)return f;if(g=BT(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Ht||(O=$),O===void 0&&(O=!1),a.addEventListener(d.toString(),g,O);else if(a.attachEvent)a.attachEvent(Lm(d.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function BT(){function a(f){return d.call(a.src,a.listener,f)}const d=HT;return a}function Dm(a,d,f,g,O){if(Array.isArray(d))for(var L=0;L<d.length;L++)Dm(a,d[L],f,g,O);else g=c(g)?!!g.capture:!!g,f=Mm(f),a&&a[xt]?(a=a.i,d=String(d).toString(),d in a.g&&(L=a.g[d],f=jc(L,f,g,O),-1<f&&(Va(L[f]),Array.prototype.splice.call(L,f,1),L.length==0&&(delete a.g[d],a.h--)))):a&&(a=zc(a))&&(d=a.g[d.toString()],a=-1,d&&(a=jc(d,f,g,O)),(f=-1<a?d[a]:null)&&$c(f))}function $c(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[xt])Fc(d.i,a);else{var f=a.type,g=a.proxy;d.removeEventListener?d.removeEventListener(f,g,a.capture):d.detachEvent?d.detachEvent(Lm(f),g):d.addListener&&d.removeListener&&d.removeListener(g),(f=zc(d))?(Fc(f,a),f.h==0&&(f.src=null,d[Vc]=null)):Va(a)}}}function Lm(a){return a in Uc?Uc[a]:Uc[a]="on"+a}function HT(a,d){if(a.da)a=!0;else{d=new st(d,this);var f=a.listener,g=a.ha||a.src;a.fa&&$c(a),a=f.call(g,d)}return a}function zc(a){return a=a[Vc],a instanceof Ua?a:null}var Bc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mm(a){return typeof a=="function"?a:(a[Bc]||(a[Bc]=function(d){return a.handleEvent(d)}),a[Bc])}function Ke(){oe.call(this),this.i=new Ua(this),this.M=this,this.F=null}k(Ke,oe),Ke.prototype[xt]=!0,Ke.prototype.removeEventListener=function(a,d,f,g){Dm(this,a,d,f,g)};function ot(a,d){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=d.type||d,typeof d=="string")d=new te(d,a);else if(d instanceof te)d.target=d.target||a;else{var O=d;d=new te(g,a),I(d,O)}if(O=!0,f)for(var L=f.length-1;0<=L;L--){var $=d.g=f[L];O=$a($,g,!0,d)&&O}if($=d.g=a,O=$a($,g,!0,d)&&O,O=$a($,g,!1,d)&&O,f)for(L=0;L<f.length;L++)$=d.g=f[L],O=$a($,g,!1,d)&&O}Ke.prototype.N=function(){if(Ke.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],g=0;g<f.length;g++)Va(f[g]);delete a.g[d],a.h--}}this.F=null},Ke.prototype.K=function(a,d,f,g){return this.i.add(String(a),d,!1,f,g)},Ke.prototype.L=function(a,d,f,g){return this.i.add(String(a),d,!0,f,g)};function $a(a,d,f,g){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var O=!0,L=0;L<d.length;++L){var $=d[L];if($&&!$.da&&$.capture==f){var ue=$.listener,Ue=$.ha||$.src;$.fa&&Fc(a.i,$),O=ue.call(Ue,g)!==!1&&O}}return O&&!g.defaultPrevented}function Fm(a,d,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function jm(a){a.g=Fm(()=>{a.g=null,a.i&&(a.i=!1,jm(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class WT extends oe{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:jm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zs(a){oe.call(this),this.h=a,this.g={}}k(zs,oe);var Vm=[];function Um(a){U(a.g,function(d,f){this.g.hasOwnProperty(f)&&$c(d)},a),a.g={}}zs.prototype.N=function(){zs.aa.N.call(this),Um(this)},zs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hc=l.JSON.stringify,GT=l.JSON.parse,KT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Wc(){}Wc.prototype.h=null;function $m(a){return a.h||(a.h=a.i())}function zm(){}var Bs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gc(){te.call(this,"d")}k(Gc,te);function Kc(){te.call(this,"c")}k(Kc,te);var Gr={},Bm=null;function za(){return Bm=Bm||new Ke}Gr.La="serverreachability";function Hm(a){te.call(this,Gr.La,a)}k(Hm,te);function Hs(a){const d=za();ot(d,new Hm(d))}Gr.STAT_EVENT="statevent";function Wm(a,d){te.call(this,Gr.STAT_EVENT,a),this.stat=d}k(Wm,te);function at(a){const d=za();ot(d,new Wm(d,a))}Gr.Ma="timingevent";function Gm(a,d){te.call(this,Gr.Ma,a),this.size=d}k(Gm,te);function Ws(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function Gs(){this.g=!0}Gs.prototype.xa=function(){this.g=!1};function qT(a,d,f,g,O,L){a.info(function(){if(a.g)if(L)for(var $="",ue=L.split("&"),Ue=0;Ue<ue.length;Ue++){var ae=ue[Ue].split("=");if(1<ae.length){var qe=ae[0];ae=ae[1];var Qe=qe.split("_");$=2<=Qe.length&&Qe[1]=="type"?$+(qe+"="+ae+"&"):$+(qe+"=redacted&")}}else $=null;else $=L;return"XMLHTTP REQ ("+g+") [attempt "+O+"]: "+d+`
`+f+`
`+$})}function QT(a,d,f,g,O,L,$){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+O+"]: "+d+`
`+f+`
`+L+" "+$})}function Vi(a,d,f,g){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+XT(a,f)+(g?" "+g:"")})}function YT(a,d){a.info(function(){return"TIMEOUT: "+d})}Gs.prototype.info=function(){};function XT(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var O=g[1];if(Array.isArray(O)&&!(1>O.length)){var L=O[0];if(L!="noop"&&L!="stop"&&L!="close")for(var $=1;$<O.length;$++)O[$]=""}}}}return Hc(f)}catch{return d}}var Ba={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Km={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qc;function Ha(){}k(Ha,Wc),Ha.prototype.g=function(){return new XMLHttpRequest},Ha.prototype.i=function(){return{}},qc=new Ha;function Xn(a,d,f,g){this.j=a,this.i=d,this.l=f,this.R=g||1,this.U=new zs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qm}function qm(){this.i=null,this.g="",this.h=!1}var Qm={},Qc={};function Yc(a,d,f){a.L=1,a.v=qa(Sn(d)),a.m=f,a.P=!0,Ym(a,null)}function Ym(a,d){a.F=Date.now(),Wa(a),a.A=Sn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),cg(f.i,"t",g),a.C=0,f=a.j.J,a.h=new qm,a.g=Pg(a.j,f?d:null,!a.m),0<a.O&&(a.M=new WT(m(a.Y,a,a.g),a.O)),d=a.U,f=a.g,g=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(Vm[0]=O.toString()),O=Vm);for(var L=0;L<O.length;L++){var $=Om(f,O[L],g||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Hs(),qT(a.i,a.u,a.A,a.l,a.R,a.m)}Xn.prototype.ca=function(a){a=a.target;const d=this.M;d&&kn(a)==3?d.j():this.Y(a)},Xn.prototype.Y=function(a){try{if(a==this.g)e:{const Qe=kn(this.g);var d=this.g.Ba();const zi=this.g.Z();if(!(3>Qe)&&(Qe!=3||this.g&&(this.h.h||this.g.oa()||yg(this.g)))){this.J||Qe!=4||d==7||(d==8||0>=zi?Hs(3):Hs(2)),Xc(this);var f=this.g.Z();this.X=f;t:if(Xm(this)){var g=yg(this.g);a="";var O=g.length,L=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kr(this),Ks(this);var $="";break t}this.h.i=new l.TextDecoder}for(d=0;d<O;d++)this.h.h=!0,a+=this.h.i.decode(g[d],{stream:!(L&&d==O-1)});g.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,QT(this.i,this.u,this.A,this.l,this.R,Qe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Ue=this.g;if((ue=Ue.g?Ue.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ue)){var ae=ue;break t}}ae=null}if(f=ae)Vi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jc(this,f);else{this.o=!1,this.s=3,at(12),Kr(this),Ks(this);break e}}if(this.P){f=!0;let Gt;for(;!this.J&&this.C<$.length;)if(Gt=JT(this,$),Gt==Qc){Qe==4&&(this.s=4,at(14),f=!1),Vi(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==Qm){this.s=4,at(15),Vi(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else Vi(this.i,this.l,Gt,null),Jc(this,Gt);if(Xm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qe!=4||$.length!=0||this.h.h||(this.s=1,at(16),f=!1),this.o=this.o&&f,!f)Vi(this.i,this.l,$,"[Invalid Chunked Response]"),Kr(this),Ks(this);else if(0<$.length&&!this.W){this.W=!0;var qe=this.j;qe.g==this&&qe.ba&&!qe.M&&(qe.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),id(qe),qe.M=!0,at(11))}}else Vi(this.i,this.l,$,null),Jc(this,$);Qe==4&&Kr(this),this.o&&!this.J&&(Qe==4?xg(this.j,this):(this.o=!1,Wa(this)))}else mx(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),Kr(this),Ks(this)}}}catch{}finally{}};function Xm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function JT(a,d){var f=a.C,g=d.indexOf(`
`,f);return g==-1?Qc:(f=Number(d.substring(f,g)),isNaN(f)?Qm:(g+=1,g+f>d.length?Qc:(d=d.slice(g,g+f),a.C=g+f,d)))}Xn.prototype.cancel=function(){this.J=!0,Kr(this)};function Wa(a){a.S=Date.now()+a.I,Jm(a,a.I)}function Jm(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ws(m(a.ba,a),d)}function Xc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Xn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(YT(this.i,this.A),this.L!=2&&(Hs(),at(17)),Kr(this),this.s=2,Ks(this)):Jm(this,this.S-a)};function Ks(a){a.j.G==0||a.J||xg(a.j,a)}function Kr(a){Xc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Um(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Jc(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||Zc(f.h,a))){if(!a.K&&Zc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var O=g;if(O[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Za(f),Xa(f);else break e;rd(f),at(18)}}else f.za=O[1],0<f.za-f.T&&37500>O[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ws(m(f.Za,f),6e3));if(1>=tg(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Qr(f,11)}else if((a.K||f.g==a)&&Za(f),!_(d))for(O=f.Da.g.parse(d),d=0;d<O.length;d++){let ae=O[d];if(f.T=ae[0],ae=ae[1],f.G==2)if(ae[0]=="c"){f.K=ae[1],f.ia=ae[2];const qe=ae[3];qe!=null&&(f.la=qe,f.j.info("VER="+f.la));const Qe=ae[4];Qe!=null&&(f.Aa=Qe,f.j.info("SVER="+f.Aa));const zi=ae[5];zi!=null&&typeof zi=="number"&&0<zi&&(g=1.5*zi,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Gt=a.g;if(Gt){const tl=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(tl){var L=g.h;L.g||tl.indexOf("spdy")==-1&&tl.indexOf("quic")==-1&&tl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(ed(L,L.h),L.h=null))}if(g.D){const sd=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;sd&&(g.ya=sd,pe(g.I,g.D,sd))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var $=a;if(g.qa=Ag(g,g.J?g.ia:null,g.W),$.K){ng(g.h,$);var ue=$,Ue=g.L;Ue&&(ue.I=Ue),ue.B&&(Xc(ue),Wa(ue)),g.g=$}else Ig(g);0<f.i.length&&Ja(f)}else ae[0]!="stop"&&ae[0]!="close"||Qr(f,7);else f.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Qr(f,7):nd(f):ae[0]!="noop"&&f.l&&f.l.ta(ae),f.v=0)}}Hs(4)}catch{}}var ZT=class{constructor(a,d){this.g=a,this.map=d}};function Zm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function tg(a){return a.h?1:a.g?a.g.size:0}function Zc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function ed(a,d){a.g?a.g.add(d):a.h=d}function ng(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Zm.prototype.cancel=function(){if(this.i=rg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function rg(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return R(a.i)}function ex(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],f=a.length,g=0;g<f;g++)d.push(a[g]);return d}d=[],f=0;for(g in a)d[f++]=a[g];return d}function tx(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const g in a)d[f++]=g;return d}}}function ig(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=tx(a),g=ex(a),O=g.length,L=0;L<O;L++)d.call(void 0,g[L],f&&f[L],a)}var sg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nx(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),O=null;if(0<=g){var L=a[f].substring(0,g);O=a[f].substring(g+1)}else L=a[f];d(L,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function qr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof qr){this.h=a.h,Ga(this,a.j),this.o=a.o,this.g=a.g,Ka(this,a.s),this.l=a.l;var d=a.i,f=new Ys;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),og(this,f),this.m=a.m}else a&&(d=String(a).match(sg))?(this.h=!1,Ga(this,d[1]||"",!0),this.o=qs(d[2]||""),this.g=qs(d[3]||"",!0),Ka(this,d[4]),this.l=qs(d[5]||"",!0),og(this,d[6]||"",!0),this.m=qs(d[7]||"")):(this.h=!1,this.i=new Ys(null,this.h))}qr.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Qs(d,ag,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Qs(d,ag,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Qs(f,f.charAt(0)=="/"?sx:ix,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Qs(f,ax)),a.join("")};function Sn(a){return new qr(a)}function Ga(a,d,f){a.j=f?qs(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ka(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function og(a,d,f){d instanceof Ys?(a.i=d,lx(a.i,a.h)):(f||(d=Qs(d,ox)),a.i=new Ys(d,a.h))}function pe(a,d,f){a.i.set(d,f)}function qa(a){return pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function qs(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Qs(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,rx),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function rx(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ag=/[#\/\?@]/g,ix=/[#\?:]/g,sx=/[#\?]/g,ox=/[#\?@]/g,ax=/#/g;function Ys(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Jn(a){a.g||(a.g=new Map,a.h=0,a.i&&nx(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=Ys.prototype,t.add=function(a,d){Jn(this),this.i=null,a=Ui(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function lg(a,d){Jn(a),d=Ui(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function ug(a,d){return Jn(a),d=Ui(a,d),a.g.has(d)}t.forEach=function(a,d){Jn(this),this.g.forEach(function(f,g){f.forEach(function(O){a.call(d,O,g,this)},this)},this)},t.na=function(){Jn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let g=0;g<d.length;g++){const O=a[g];for(let L=0;L<O.length;L++)f.push(d[g])}return f},t.V=function(a){Jn(this);let d=[];if(typeof a=="string")ug(this,a)&&(d=d.concat(this.g.get(Ui(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},t.set=function(a,d){return Jn(this),this.i=null,a=Ui(this,a),ug(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function cg(a,d,f){lg(a,d),0<f.length&&(a.i=null,a.g.set(Ui(a,d),R(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var g=d[f];const L=encodeURIComponent(String(g)),$=this.V(g);for(g=0;g<$.length;g++){var O=L;$[g]!==""&&(O+="="+encodeURIComponent(String($[g]))),a.push(O)}}return this.i=a.join("&")};function Ui(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function lx(a,d){d&&!a.j&&(Jn(a),a.i=null,a.g.forEach(function(f,g){var O=g.toLowerCase();g!=O&&(lg(this,g),cg(this,O,f))},a)),a.j=d}function ux(a,d){const f=new Gs;if(l.Image){const g=new Image;g.onload=E(Zn,f,"TestLoadImage: loaded",!0,d,g),g.onerror=E(Zn,f,"TestLoadImage: error",!1,d,g),g.onabort=E(Zn,f,"TestLoadImage: abort",!1,d,g),g.ontimeout=E(Zn,f,"TestLoadImage: timeout",!1,d,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else d(!1)}function cx(a,d){const f=new Gs,g=new AbortController,O=setTimeout(()=>{g.abort(),Zn(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:g.signal}).then(L=>{clearTimeout(O),L.ok?Zn(f,"TestPingServer: ok",!0,d):Zn(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),Zn(f,"TestPingServer: error",!1,d)})}function Zn(a,d,f,g,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),g(f)}catch{}}function dx(){this.g=new KT}function hx(a,d,f){const g=f||"";try{ig(a,function(O,L){let $=O;c(O)&&($=Hc(O)),d.push(g+L+"="+encodeURIComponent($))})}catch(O){throw d.push(g+"type="+encodeURIComponent("_badmap")),O}}function Xs(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Xs,Wc),Xs.prototype.g=function(){return new Qa(this.l,this.j)},Xs.prototype.i=function(a){return function(){return a}}({});function Qa(a,d){Ke.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Qa,Ke),t=Qa.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Zs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Js(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Zs(this)),this.g&&(this.readyState=3,Zs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function dg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Js(this):Zs(this),this.readyState==3&&dg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Js(this))},t.Qa=function(a){this.g&&(this.response=a,Js(this))},t.ga=function(){this.g&&Js(this)};function Js(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Zs(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function Zs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Qa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hg(a){let d="";return U(a,function(f,g){d+=g,d+=":",d+=f,d+=`\r
`}),d}function td(a,d,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=hg(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):pe(a,d,f))}function Se(a){Ke.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Se,Ke);var fx=/^https?$/i,px=["POST","PUT"];t=Se.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qc.g(),this.v=this.o?$m(this.o):$m(qc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(L){fg(this,L);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var O in g)f.set(O,g[O]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const L of g.keys())f.set(L,g.get(L));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(px,d,void 0))||g||O||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of f)this.g.setRequestHeader(L,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gg(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){fg(this,L)}};function fg(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,pg(a),Ya(a)}function pg(a){a.A||(a.A=!0,ot(a,"complete"),ot(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ot(this,"complete"),ot(this,"abort"),Ya(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ya(this,!0)),Se.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?mg(this):this.bb())},t.bb=function(){mg(this)};function mg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||kn(a)!=4||a.Z()!=2)){if(a.u&&kn(a)==4)Fm(a.Ea,0,a);else if(ot(a,"readystatechange"),kn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var g;if(g=$===0){var O=String(a.D).match(sg)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),g=!fx.test(O?O.toLowerCase():"")}f=g}if(f)ot(a,"complete"),ot(a,"success");else{a.m=6;try{var L=2<kn(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",pg(a)}}finally{Ya(a)}}}}function Ya(a,d){if(a.g){gg(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||ot(a,"ready");try{f.onreadystatechange=g}catch{}}}function gg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function kn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),GT(d)}};function yg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function mx(a){const d={};a=(a.g&&2<=kn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var f=b(a[g]);const O=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=d[O]||[];d[O]=L,L.push(f)}T(d,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function eo(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function vg(a){this.Aa=0,this.i=[],this.j=new Gs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=eo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=eo("baseRetryDelayMs",5e3,a),this.cb=eo("retryDelaySeedMs",1e4,a),this.Wa=eo("forwardChannelMaxRetries",2,a),this.wa=eo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Zm(a&&a.concurrentRequestLimit),this.Da=new dx,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=vg.prototype,t.la=8,t.G=1,t.connect=function(a,d,f,g){at(0),this.W=a,this.H=d||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Ag(this,null,this.W),Ja(this)};function nd(a){if(_g(a),a.G==3){var d=a.U++,f=Sn(a.I);if(pe(f,"SID",a.K),pe(f,"RID",d),pe(f,"TYPE","terminate"),to(a,f),d=new Xn(a,a.j,d),d.L=2,d.v=qa(Sn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=d.v,f=!0),f||(d.g=Pg(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Wa(d)}kg(a)}function Xa(a){a.g&&(id(a),a.g.cancel(),a.g=null)}function _g(a){Xa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Za(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ja(a){if(!eg(a.h)&&!a.s){a.s=!0;var d=a.Ga;ft||Q(),z||(ft(),z=!0),W.add(d,a),a.B=0}}function gx(a,d){return tg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ws(m(a.Ga,a,d),Sg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new Xn(this,this.j,a);let L=this.o;if(this.S&&(L?(L=v(L),I(L,this.S)):L=this.S),this.m!==null||this.O||(O.H=L,L=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Eg(this,O,d),f=Sn(this.I),pe(f,"RID",a),pe(f,"CVER",22),this.D&&pe(f,"X-HTTP-Session-Id",this.D),to(this,f),L&&(this.O?d="headers="+encodeURIComponent(String(hg(L)))+"&"+d:this.m&&td(f,this.m,L)),ed(this.h,O),this.Ua&&pe(f,"TYPE","init"),this.P?(pe(f,"$req",d),pe(f,"SID","null"),O.T=!0,Yc(O,f,null)):Yc(O,f,d),this.G=2}}else this.G==3&&(a?wg(this,a):this.i.length==0||eg(this.h)||wg(this))};function wg(a,d){var f;d?f=d.l:f=a.U++;const g=Sn(a.I);pe(g,"SID",a.K),pe(g,"RID",f),pe(g,"AID",a.T),to(a,g),a.m&&a.o&&td(g,a.m,a.o),f=new Xn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Eg(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ed(a.h,f),Yc(f,g,d)}function to(a,d){a.H&&U(a.H,function(f,g){pe(d,g,f)}),a.l&&ig({},function(f,g){pe(d,g,f)})}function Eg(a,d,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var O=a.i;let L=-1;for(;;){const $=["count="+f];L==-1?0<f?(L=O[0].g,$.push("ofs="+L)):L=0:$.push("ofs="+L);let ue=!0;for(let Ue=0;Ue<f;Ue++){let ae=O[Ue].g;const qe=O[Ue].map;if(ae-=L,0>ae)L=Math.max(0,O[Ue].g-100),ue=!1;else try{hx(qe,$,"req"+ae+"_")}catch{g&&g(qe)}}if(ue){g=$.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,g}function Ig(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;ft||Q(),z||(ft(),z=!0),W.add(d,a),a.v=0}}function rd(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ws(m(a.Fa,a),Sg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Tg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ws(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Xa(this),Tg(this))};function id(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Tg(a){a.g=new Xn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Sn(a.qa);pe(d,"RID","rpc"),pe(d,"SID",a.K),pe(d,"AID",a.T),pe(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&pe(d,"TO",a.ja),pe(d,"TYPE","xmlhttp"),to(a,d),a.m&&a.o&&td(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=qa(Sn(d)),f.m=null,f.P=!0,Ym(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Xa(this),rd(this),at(19))};function Za(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function xg(a,d){var f=null;if(a.g==d){Za(a),id(a),a.g=null;var g=2}else if(Zc(a.h,d))f=d.D,ng(a.h,d),g=1;else return;if(a.G!=0){if(d.o)if(g==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var O=a.B;g=za(),ot(g,new Gm(g,f)),Ja(a)}else Ig(a);else if(O=d.s,O==3||O==0&&0<d.X||!(g==1&&gx(a,d)||g==2&&rd(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),O){case 1:Qr(a,5);break;case 4:Qr(a,10);break;case 3:Qr(a,6);break;default:Qr(a,2)}}}function Sg(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function Qr(a,d){if(a.j.info("Error code "+d),d==2){var f=m(a.fb,a),g=a.Xa;const O=!g;g=new qr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ga(g,"https"),qa(g),O?ux(g.toString(),f):cx(g.toString(),f)}else at(2);a.G=0,a.l&&a.l.sa(d),kg(a),_g(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function kg(a){if(a.G=0,a.ka=[],a.l){const d=rg(a.h);(d.length!=0||a.i.length!=0)&&(C(a.ka,d),C(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function Ag(a,d,f){var g=f instanceof qr?Sn(f):new qr(f);if(g.g!="")d&&(g.g=d+"."+g.g),Ka(g,g.s);else{var O=l.location;g=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;var L=new qr(null);g&&Ga(L,g),d&&(L.g=d),O&&Ka(L,O),f&&(L.l=f),g=L}return f=a.D,d=a.ya,f&&d&&pe(g,f,d),pe(g,"VER",a.la),to(a,g),g}function Pg(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Se(new Xs({eb:f})):new Se(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function bg(){}t=bg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function el(){}el.prototype.g=function(a,d){return new St(a,d)};function St(a,d){Ke.call(this),this.g=new vg(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!_(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!_(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new $i(this)}k(St,Ke),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){nd(this.g)},St.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Hc(a),a=f);d.i.push(new ZT(d.Ya++,a)),d.G==3&&Ja(d)},St.prototype.N=function(){this.g.l=null,delete this.j,nd(this.g),delete this.g,St.aa.N.call(this)};function Cg(a){Gc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}k(Cg,Gc);function Rg(){Kc.call(this),this.status=1}k(Rg,Kc);function $i(a){this.g=a}k($i,bg),$i.prototype.ua=function(){ot(this.g,"a")},$i.prototype.ta=function(a){ot(this.g,new Cg(a))},$i.prototype.sa=function(a){ot(this.g,new Rg)},$i.prototype.ra=function(){ot(this.g,"b")},el.prototype.createWebChannel=el.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,jE=function(){return new el},FE=function(){return za()},ME=Gr,hf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ba.NO_ERROR=0,Ba.TIMEOUT=8,Ba.HTTP_ERROR=6,Bl=Ba,Km.COMPLETE="complete",LE=Km,zm.EventType=Bs,Bs.OPEN="a",Bs.CLOSE="b",Bs.ERROR="c",Bs.MESSAGE="d",Ke.prototype.listen=Ke.prototype.K,Eo=zm,DE=Xs,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,OE=Se}).apply(typeof El<"u"?El:typeof self<"u"?self:typeof window<"u"?window:{});const D0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js="10.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new vc("@firebase/firestore");function ho(){return Ti.logLevel}function G(t,...e){if(Ti.logLevel<=ne.DEBUG){const n=e.map(Jp);Ti.debug(`Firestore (${js}): ${t}`,...n)}}function xi(t,...e){if(Ti.logLevel<=ne.ERROR){const n=e.map(Jp);Ti.error(`Firestore (${js}): ${t}`,...n)}}function bu(t,...e){if(Ti.logLevel<=ne.WARN){const n=e.map(Jp);Ti.warn(`Firestore (${js}): ${t}`,...n)}}function Jp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${js}) INTERNAL ASSERTION FAILED: `+t;throw xi(e),new Error(e)}function De(t,e){t||re()}function he(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class EN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class IN{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new hi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new hi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new hi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string"),new VE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new Ze(e)}}class TN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new TN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class SN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.R=n.token,new SN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=AN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function xs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.timestamp=e}static fromTimestamp(e){return new we(e)}static min(){return new we(new Ve(0,0))}static max(){return new we(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ha.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ha?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends ha{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const PN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends ha{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return PN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Ae.fromString(e))}static fromName(e){return new J(Ae.fromString(e).popFirst(5))}static empty(){return new J(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Ae(e.slice()))}}function bN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=we.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new Rr(i,J.empty(),e)}function CN(t){return new Rr(t.readTime,t.key,-1)}class Rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rr(we.min(),J.empty(),-1)}static max(){return new Rr(we.max(),J.empty(),-1)}}function RN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ON{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $E(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==NN)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++l,l===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function DN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ic(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}zE.oe=-1;function Zp(t){return t==null}function Cu(t){return t===0&&1/t==-1/0}function LN(t){return typeof t=="number"&&Number.isInteger(t)&&!Cu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Oa(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function BE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new Et(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Il(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Il(this.root,e,this.comparator,!1)}getReverseIterator(){return new Il(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Il(this.root,e,this.comparator,!0)}}class Il{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ze.RED,this.left=i??ze.EMPTY,this.right=s??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new Et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new M0(this.data.getIterator())}getIteratorFrom(e){return new M0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class M0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new en([])}unionWith(e){let n=new nt(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new en(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new MN("Invalid base64 string: "+s):s}}(e);return new En(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new En(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}En.EMPTY_BYTE_STRING=new En("");const FN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Si(t){if(De(!!t),typeof t=="string"){let e=0;const n=FN.exec(t);if(De(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fa(t){return typeof t=="string"?En.fromBase64String(t):En.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function HE(t){const e=t.mapValue.fields.__previous_value__;return em(e)?HE(e):e}function Ru(t){const e=Si(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Nu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Nu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Nu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?em(t)?4:UN(t)?9007199254740991:VN(t)?10:11:re()}function In(t,e){if(t===e)return!0;const n=Ss(t);if(n!==Ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ru(t).isEqual(Ru(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Si(i.timestampValue),l=Si(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return fa(i.bytesValue).isEqual(fa(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Be(i.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Be(i.integerValue)===Be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Be(i.doubleValue),l=Be(s.doubleValue);return o===l?Cu(o)===Cu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return xs(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(L0(o)!==L0(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!In(o[u],l[u])))return!1;return!0}(t,e);default:return re()}}function pa(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function ks(t,e){if(t===e)return 0;const n=Ss(t),r=Ss(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Be(s.integerValue||s.doubleValue),u=Be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return F0(t.timestampValue,e.timestampValue);case 4:return F0(Ru(t),Ru(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,o){const l=fa(s),u=fa(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const h=ce(l[c],u[c]);if(h!==0)return h}return ce(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ce(Be(s.latitude),Be(o.latitude));return l!==0?l:ce(Be(s.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return j0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,h;const p=s.fields||{},m=o.fields||{},E=(l=p.value)===null||l===void 0?void 0:l.arrayValue,k=(u=m.value)===null||u===void 0?void 0:u.arrayValue,R=ce(((c=E==null?void 0:E.values)===null||c===void 0?void 0:c.length)||0,((h=k==null?void 0:k.values)===null||h===void 0?void 0:h.length)||0);return R!==0?R:j0(E,k)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Tl.mapValue&&o===Tl.mapValue)return 0;if(s===Tl.mapValue)return 1;if(o===Tl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let p=0;p<u.length&&p<h.length;++p){const m=ce(u[p],h[p]);if(m!==0)return m;const E=ks(l[u[p]],c[h[p]]);if(E!==0)return E}return ce(u.length,h.length)}(t.mapValue,e.mapValue);default:throw re()}}function F0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Si(t),r=Si(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function j0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ks(n[i],r[i]);if(s)return s}return ce(n.length,r.length)}function As(t){return ff(t)}function ff(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Si(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return fa(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ff(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ff(n.fields[o])}`;return i+"}"}(t.mapValue):re()}function pf(t){return!!t&&"integerValue"in t}function tm(t){return!!t&&"arrayValue"in t}function Hl(t){return!!t&&"mapValue"in t}function VN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Mo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Oa(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Mo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function UN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Hl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mo(n)}setAll(e){let n=He.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Mo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Hl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Hl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Oa(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Jt(Mo(this.value))}}function WE(t){const e=[];return Oa(t.fields,(n,r)=>{const i=new He([n]);if(Hl(r)){const s=WE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new en(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Xt(e,0,we.min(),we.min(),we.min(),Jt.empty(),0)}static newFoundDocument(e,n,r,i){return new Xt(e,1,n,we.min(),r,i,0)}static newNoDocument(e,n){return new Xt(e,2,n,we.min(),we.min(),Jt.empty(),0)}static newUnknownDocument(e,n){return new Xt(e,3,n,we.min(),we.min(),Jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n){this.position=e,this.inclusive=n}}function V0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=ks(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function U0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n="asc"){this.field=e,this.dir=n}}function $N(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{}class Fe extends GE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new BN(e,n,r):n==="array-contains"?new GN(e,r):n==="in"?new KN(e,r):n==="not-in"?new qN(e,r):n==="array-contains-any"?new QN(e,r):new Fe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new HN(e,r):new WN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ks(n,this.value)):n!==null&&Ss(this.value)===Ss(n)&&this.matchesComparison(ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nr extends GE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Nr(e,n)}matches(e){return KE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function KE(t){return t.op==="and"}function qE(t){return zN(t)&&KE(t)}function zN(t){for(const e of t.filters)if(e instanceof Nr)return!1;return!0}function mf(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+As(t.value);if(qE(t))return t.filters.map(e=>mf(e)).join(",");{const e=t.filters.map(n=>mf(n)).join(",");return`${t.op}(${e})`}}function QE(t,e){return t instanceof Fe?function(r,i){return i instanceof Fe&&r.op===i.op&&r.field.isEqual(i.field)&&In(r.value,i.value)}(t,e):t instanceof Nr?function(r,i){return i instanceof Nr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&QE(o,i.filters[l]),!0):!1}(t,e):void re()}function YE(t){return t instanceof Fe?function(n){return`${n.field.canonicalString()} ${n.op} ${As(n.value)}`}(t):t instanceof Nr?function(n){return n.op.toString()+" {"+n.getFilters().map(YE).join(" ,")+"}"}(t):"Filter"}class BN extends Fe{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class HN extends Fe{constructor(e,n){super(e,"in",n),this.keys=XE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class WN extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=XE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function XE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class GN extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tm(n)&&pa(n.arrayValue,this.value)}}class KN extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pa(this.value.arrayValue,n)}}class qN extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(pa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!pa(this.value.arrayValue,n)}}class QN extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>pa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function $0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new YN(t,e,n,r,i,s,o)}function nm(t){const e=he(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>mf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Zp(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>As(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>As(r)).join(",")),e.ue=n}return e.ue}function rm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$N(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!QE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!U0(t.startAt,e.startAt)&&U0(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function XN(t,e,n,r,i,s,o,l){return new Tc(t,e,n,r,i,s,o,l)}function JN(t){return new Tc(t)}function z0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ZN(t){return t.collectionGroup!==null}function Fo(t){const e=he(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new nt(He.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Du(s,r))}),n.has(He.keyField().canonicalString())||e.ce.push(new Du(He.keyField(),r))}return e.ce}function fi(t){const e=he(t);return e.le||(e.le=eO(e,Fo(t))),e.le}function eO(t,e){if(t.limitType==="F")return $0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Du(i.field,s)});const n=t.endAt?new Ou(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ou(t.startAt.position,t.startAt.inclusive):null;return $0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gf(t,e,n){return new Tc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function JE(t,e){return rm(fi(t),fi(e))&&t.limitType===e.limitType}function ZE(t){return`${nm(fi(t))}|lt:${t.limitType}`}function fo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>YE(i)).join(", ")}]`),Zp(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>As(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>As(i)).join(",")),`Target(${r})`}(fi(t))}; limitType=${t.limitType})`}function im(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):J.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Fo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=V0(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Fo(r),i)||r.endAt&&!function(o,l,u){const c=V0(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Fo(r),i))}(t,e)}function tO(t){return(e,n)=>{let r=!1;for(const i of Fo(t)){const s=nO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function nO(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ks(u,c):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Oa(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return BE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=new Et(J.comparator);function Lu(){return rO}const eI=new Et(J.comparator);function xl(...t){let e=eI;for(const n of t)e=e.insert(n.key,n);return e}function tI(t){let e=eI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function oi(){return jo()}function nI(){return jo()}function jo(){return new Vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const iO=new Et(J.comparator),sO=new nt(J.comparator);function tt(...t){let e=sO;for(const n of t)e=e.add(n);return e}const oO=new nt(ce);function aO(){return oO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cu(e)?"-0":e}}function rI(t){return{integerValue:""+t}}function lO(t,e){return LN(e)?rI(e):sm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(){this._=void 0}}function uO(t,e,n){return t instanceof Mu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&em(s)&&(s=HE(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ma?sI(t,e):t instanceof ga?oI(t,e):function(i,s){const o=iI(i,s),l=B0(o)+B0(i.Pe);return pf(o)&&pf(i.Pe)?rI(l):sm(i.serializer,l)}(t,e)}function cO(t,e,n){return t instanceof ma?sI(t,e):t instanceof ga?oI(t,e):n}function iI(t,e){return t instanceof Fu?function(r){return pf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Mu extends xc{}class ma extends xc{constructor(e){super(),this.elements=e}}function sI(t,e){const n=aI(e);for(const r of t.elements)n.some(i=>In(i,r))||n.push(r);return{arrayValue:{values:n}}}class ga extends xc{constructor(e){super(),this.elements=e}}function oI(t,e){let n=aI(e);for(const r of t.elements)n=n.filter(i=>!In(i,r));return{arrayValue:{values:n}}}class Fu extends xc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function B0(t){return Be(t.integerValue||t.doubleValue)}function aI(t){return tm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function dO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ma&&i instanceof ma||r instanceof ga&&i instanceof ga?xs(r.elements,i.elements,In):r instanceof Fu&&i instanceof Fu?In(r.Pe,i.Pe):r instanceof Mu&&i instanceof Mu}(t.transform,e.transform)}class hO{constructor(e,n){this.version=e,this.transformResults=n}}class Vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vn}static exists(e){return new Vn(void 0,e)}static updateTime(e){return new Vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sc{}function lI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new cI(t.key,Vn.none()):new Da(t.key,t.data,Vn.none());{const n=t.data,r=Jt.empty();let i=new nt(He.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Fi(t.key,r,new en(i.toArray()),Vn.none())}}function fO(t,e,n){t instanceof Da?function(i,s,o){const l=i.value.clone(),u=W0(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Fi?function(i,s,o){if(!Wl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=W0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(uI(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Vo(t,e,n,r){return t instanceof Da?function(s,o,l,u){if(!Wl(s.precondition,o))return l;const c=s.value.clone(),h=G0(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fi?function(s,o,l,u){if(!Wl(s.precondition,o))return l;const c=G0(s.fieldTransforms,u,o),h=o.data;return h.setAll(uI(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Wl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function pO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=iI(r.transform,i||null);s!=null&&(n===null&&(n=Jt.empty()),n.set(r.field,s))}return n||null}function H0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xs(r,i,(s,o)=>dO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Da extends Sc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fi extends Sc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function uI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function W0(t,e,n){const r=new Map;De(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,cO(o,l,n[i]))}return r}function G0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,uO(s,o,e))}return r}class cI extends Sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mO extends Sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&fO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Vo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Vo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=nI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=lI(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(we.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),tt())}isEqual(e){return this.batchId===e.batchId&&xs(this.mutations,e.mutations,(n,r)=>H0(n,r))&&xs(this.baseMutations,e.baseMutations,(n,r)=>H0(n,r))}}class om{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){De(e.mutations.length===r.length);let i=function(){return iO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new om(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,ie;function vO(t){switch(t){default:return re();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function _O(t){if(t===void 0)return xi("GRPC error has no .code"),V.UNKNOWN;switch(t){case be.OK:return V.OK;case be.CANCELLED:return V.CANCELLED;case be.UNKNOWN:return V.UNKNOWN;case be.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case be.INTERNAL:return V.INTERNAL;case be.UNAVAILABLE:return V.UNAVAILABLE;case be.UNAUTHENTICATED:return V.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case be.NOT_FOUND:return V.NOT_FOUND;case be.ALREADY_EXISTS:return V.ALREADY_EXISTS;case be.PERMISSION_DENIED:return V.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case be.ABORTED:return V.ABORTED;case be.OUT_OF_RANGE:return V.OUT_OF_RANGE;case be.UNIMPLEMENTED:return V.UNIMPLEMENTED;case be.DATA_LOSS:return V.DATA_LOSS;default:return re()}}(ie=be||(be={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new NE([4294967295,4294967295],0);class wO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function EO(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function IO(t,e){return yf(t,e.toTimestamp())}function ms(t){return De(!!t),we.fromTimestamp(function(n){const r=Si(n);return new Ve(r.seconds,r.nanos)}(t))}function dI(t,e){return vf(t,e).canonicalString()}function vf(t,e){const n=function(i){return new Ae(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function TO(t){const e=Ae.fromString(t);return De(RO(e)),e}function _f(t,e){return dI(t.databaseId,e.path)}function xO(t){const e=TO(t);return e.length===4?Ae.emptyPath():kO(e)}function SO(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kO(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function K0(t,e,n){return{name:_f(t,e),fields:n.value.mapValue.fields}}function AO(t,e){let n;if(e instanceof Da)n={update:K0(t,e.key,e.value)};else if(e instanceof cI)n={delete:_f(t,e.key)};else if(e instanceof Fi)n={update:K0(t,e.key,e.data),updateMask:CO(e.fieldMask)};else{if(!(e instanceof mO))return re();n={verify:_f(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Mu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ma)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ga)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Fu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:IO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:re()}(t,e.precondition)),n}function PO(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?ms(i.updateTime):ms(s);return o.isEqual(we.min())&&(o=ms(s)),new hO(o,i.transformResults||[])}(n,e))):[]}function bO(t){let e=xO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){De(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(p){const m=hI(p);return m instanceof Nr&&qE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(k){return new Du(Hi(k.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Zp(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,E=p.values||[];return new Ou(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,E=p.values||[];return new Ou(E,m)}(n.endAt)),XN(e,i,o,s,l,"F",u,c)}function hI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Hi(n.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Hi(n.unaryFilter.field);return Fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Hi(n.unaryFilter.field);return Fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Hi(n.unaryFilter.field);return Fe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return Fe.create(Hi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Nr.create(n.compositeFilter.filters.map(r=>hI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function Hi(t){return He.fromServerFormat(t.fieldPath)}function CO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function RO(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e){this.ct=e}}function OO(t){const e=bO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(){this.un=new LO}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Rr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class LO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new nt(Ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new nt(Ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ps(0)}static kn(){return new Ps(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(){this.changes=new Vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Vo(r.mutation,i,en.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,tt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=tt()){const i=oi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=xl();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=oi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,tt()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Lu();const o=jo(),l=function(){return jo()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Fi)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Vo(h.mutation,c,h.mutation.getFieldMask(),Ve.now())):o.set(c.key,en.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var p;return l.set(c,new FO(h,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=jo();let i=new Et((o,l)=>o-l),s=tt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||en.empty();h=l.applyToLocalView(c,h),r.set(u,h);const p=(i.get(l.batchId)||tt()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,h=u.value,p=nI();h.forEach(m=>{if(!s.has(m)){const E=lI(n.get(m),r.get(m));E!==null&&p.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ZN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(oi());let l=-1,u=s;return o.next(c=>F.forEach(c,(h,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,tt())).next(h=>({batchId:l,changes:tI(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=xl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=xl();return this.indexManager.getCollectionParents(e,s).next(l=>F.forEach(l,u=>{const c=function(p,m){return new Tc(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Xt.newInvalidDocument(h)))});let l=xl();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Vo(h.mutation,c,en.empty(),Ve.now()),im(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ms(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:OO(i.bundledQuery),readTime:ms(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(){this.overlays=new Et(J.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=oi();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=oi(),s=n.length+1,o=new J(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Et((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=oi(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const l=oi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>l.set(c,h)),!(l.size()>=i)););return F.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new yO(n,r));let s=this.Ir.get(n);s===void 0&&(s=tt(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(){this.sessionToken=En.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.Tr=new nt(Le.Er),this.dr=new nt(Le.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Le(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new J(new Ae([])),r=new Le(n,e),i=new Le(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new J(new Ae([])),r=new Le(n,e),i=new Le(n,e+1);let s=tt();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Le(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return J.comparator(e.key,n.key)||ce(e.wr,n.wr)}static Ar(e,n){return ce(e.wr,n.wr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new nt(Le.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gO(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Le(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),i=new Le(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(ce);return n.forEach(i=>{const s=new Le(i,0),o=new Le(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const o=new Le(new J(s),0);let l=new nt(ce);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),F.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){De(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new Le(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Le(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e){this.Mr=e,this.docs=function(){return new Et(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():Xt.newInvalidDocument(n))}getEntries(e,n){let r=Lu();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Xt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Lu();const o=n.path,l=new J(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||RN(CN(h),r)<=0||(i.has(h.key)||im(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){re()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new HO(this)}getSize(e){return F.resolve(this.size)}}class HO extends MO{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e){this.persistence=e,this.Nr=new Vs(n=>nm(n),rm),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.Lr=0,this.Br=new am,this.targetCount=0,this.kr=Ps.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ps(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e,n){this.qr={},this.overlays={},this.Qr=new zE(0),this.Kr=!1,this.Kr=!0,this.$r=new $O,this.referenceDelegate=e(this),this.Ur=new WO(this),this.indexManager=new DO,this.remoteDocumentCache=function(i){return new BO(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new NO(n),this.Gr=new VO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new zO(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new KO(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class KO extends ON{constructor(e){super(),this.currentSequenceNumber=e}}class lm{constructor(e){this.persistence=e,this.Jr=new am,this.Yr=null}static Zr(e){return new lm(e)}get Xr(){if(this.Yr)return this.Yr;throw re()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=J.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,we.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=tt(),i=tt();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new um(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return BP()?8:DN(it())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new qO;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ho()<=ne.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",fo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(ho()<=ne.DEBUG&&G("QueryEngine","Query:",fo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ho()<=ne.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",fo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fi(n))):F.resolve())}Yi(e,n){if(z0(n))return F.resolve(null);let r=fi(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=gf(n,null,"F"),r=fi(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=tt(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,gf(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return z0(n)||i.isEqual(we.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(ho()<=ne.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fo(n)),this.rs(e,o,n,bN(i,-1)).next(l=>l))})}ts(e,n){let r=new nt(tO(e));return n.forEach((i,s)=>{im(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ho()<=ne.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",fo(n)),this.Ji.getDocumentsMatchingQuery(e,n,Rr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Et(ce),this._s=new Vs(s=>nm(s),rm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jO(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function XO(t,e,n,r){return new YO(t,e,n,r)}async function fI(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=tt();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){l.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function JO(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,h){const p=c.batch,m=p.keys();let E=F.resolve();return m.forEach(k=>{E=E.next(()=>h.getEntry(u,k)).next(R=>{const C=c.docVersions.get(k);De(C!==null),R.version.compareTo(C)<0&&(p.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),h.addEntry(R)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=tt();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function ZO(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function e4(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class q0{constructor(){this.activeTargetIds=aO()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class t4{constructor(){this.so=new q0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new q0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl=null;function zd(){return Sl===null?Sl=function(){return 268435456+Math.round(2147483648*Math.random())}():Sl++,"0x"+Sl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="WebChannelConnection";class s4 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=zd(),u=this.xo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(G("RestConnection",`Received RPC '${n}' ${l}: `,h),h),h=>{throw bu("RestConnection",`RPC '${n}' ${l} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+js}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=r4[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=zd();return new Promise((o,l)=>{const u=new OE;u.setWithCredentials(!0),u.listenOnce(LE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Bl.NO_ERROR:const h=u.getResponseJson();G(Je,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Bl.TIMEOUT:G(Je,`RPC '${e}' ${s} timed out`),l(new q(V.DEADLINE_EXCEEDED,"Request time out"));break;case Bl.HTTP_ERROR:const p=u.getStatus();if(G(Je,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m==null?void 0:m.error;if(E&&E.status&&E.message){const k=function(C){const w=C.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(w)>=0?w:V.UNKNOWN}(E.status);l(new q(k,E.message))}else l(new q(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(V.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{G(Je,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);G(Je,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=zd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=jE(),l=FE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new DE({})),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");G(Je,`Creating RPC '${e}' stream ${i}: ${h}`,u);const p=o.createWebChannel(h,u);let m=!1,E=!1;const k=new i4({Io:C=>{E?G(Je,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(m||(G(Je,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),G(Je,`RPC '${e}' stream ${i} sending:`,C),p.send(C))},To:()=>p.close()}),R=(C,w,_)=>{C.listen(w,S=>{try{_(S)}catch(D){setTimeout(()=>{throw D},0)}})};return R(p,Eo.EventType.OPEN,()=>{E||(G(Je,`RPC '${e}' stream ${i} transport opened.`),k.yo())}),R(p,Eo.EventType.CLOSE,()=>{E||(E=!0,G(Je,`RPC '${e}' stream ${i} transport closed`),k.So())}),R(p,Eo.EventType.ERROR,C=>{E||(E=!0,bu(Je,`RPC '${e}' stream ${i} transport errored:`,C),k.So(new q(V.UNAVAILABLE,"The operation could not be completed")))}),R(p,Eo.EventType.MESSAGE,C=>{var w;if(!E){const _=C.data[0];De(!!_);const S=_,D=S.error||((w=S[0])===null||w===void 0?void 0:w.error);if(D){G(Je,`RPC '${e}' stream ${i} received error:`,D);const M=D.status;let U=function(x){const I=be[x];if(I!==void 0)return _O(I)}(M),T=D.message;U===void 0&&(U=V.INTERNAL,T="Unknown error status: "+M+" with message "+D.message),E=!0,k.So(new q(U,T)),p.close()}else G(Je,`RPC '${e}' stream ${i} received:`,_),k.bo(_)}}),R(l,ME.STAT_EVENT,C=>{C.stat===hf.PROXY?G(Je,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===hf.NOPROXY&&G(Je,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function Bd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(t){return new wO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new pI(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(xi(n.toString()),xi("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class a4 extends o4{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return De(!!e.streamToken),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=PO(e.writeResults,e.commitTime),r=ms(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=SO(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>AO(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,vf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,vf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class u4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(xi(n),this.D_=!1):G("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ma(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=he(u);c.L_.add(4),await La(c),c.q_.set("Unknown"),c.L_.delete(4),await Ac(c)}(this))})}),this.q_=new u4(r,i)}}async function Ac(t){if(Ma(t))for(const e of t.B_)await e(!0)}async function La(t){for(const e of t.B_)await e(!1)}function Ma(t){return he(t).L_.size===0}async function mI(t,e,n){if(!Ic(e))throw e;t.L_.add(1),await La(t),t.q_.set("Offline"),n||(n=()=>ZO(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ac(t)})}function gI(t,e){return e().catch(n=>mI(t,n,e))}async function Pc(t){const e=he(t),n=Or(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;d4(e);)try{const i=await e4(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,h4(e,i)}catch(i){await mI(e,i)}yI(e)&&vI(e)}function d4(t){return Ma(t)&&t.O_.length<10}function h4(t,e){t.O_.push(e);const n=Or(t);n.r_()&&n.V_&&n.m_(e.mutations)}function yI(t){return Ma(t)&&!Or(t).n_()&&t.O_.length>0}function vI(t){Or(t).start()}async function f4(t){Or(t).p_()}async function p4(t){const e=Or(t);for(const n of t.O_)e.m_(n.mutations)}async function m4(t,e,n){const r=t.O_.shift(),i=om.from(r,e,n);await gI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Pc(t)}async function g4(t,e){e&&Or(t).V_&&await async function(r,i){if(function(o){return vO(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();Or(r).s_(),await gI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Pc(r)}}(t,e),yI(t)&&vI(t)}async function Y0(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=Ma(n);n.L_.add(3),await La(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ac(n)}async function y4(t,e){const n=he(t);e?(n.L_.delete(2),await Ac(n)):e||(n.L_.add(2),await La(n),n.q_.set("Unknown"))}function Or(t){return t.U_||(t.U_=function(n,r,i){const s=he(n);return s.w_(),new a4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:f4.bind(null,t),mo:g4.bind(null,t),f_:p4.bind(null,t),g_:m4.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Pc(t)):(await t.U_.stop(),t.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new hi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new cm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _I(t,e){if(xi("AsyncQueue",`${e}: ${t}`),Ic(t))return new q(V.UNAVAILABLE,`${e}: ${t}`);throw t}class v4{constructor(){this.queries=X0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=he(n),s=i.queries;i.queries=X0(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new q(V.ABORTED,"Firestore shutting down"))}}function X0(){return new Vs(t=>ZE(t),JE)}function _4(t){t.Y_.forEach(e=>{e.next()})}var J0,Z0;(Z0=J0||(J0={})).ea="default",Z0.Cache="cache";class w4{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Vs(l=>ZE(l),JE),this.Ma=new Map,this.xa=new Set,this.Oa=new Et(J.comparator),this.Na=new Map,this.La=new am,this.Ba={},this.ka=new Map,this.qa=Ps.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function E4(t,e,n){const r=S4(t);try{const i=await function(o,l){const u=he(o),c=Ve.now(),h=l.reduce((E,k)=>E.add(k.key),tt());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let k=Lu(),R=tt();return u.cs.getEntries(E,h).next(C=>{k=C,k.forEach((w,_)=>{_.isValidDocument()||(R=R.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,k)).next(C=>{p=C;const w=[];for(const _ of l){const S=pO(_,p.get(_.key).overlayedDocument);S!=null&&w.push(new Fi(_.key,S,WE(S.value.mapValue),Vn.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,w,l)}).next(C=>{m=C;const w=C.applyToLocalDocumentSet(p,R);return u.documentOverlayCache.saveOverlays(E,C.batchId,w)})}).then(()=>({batchId:m.batchId,changes:tI(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Et(ce)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await bc(r,i.changes),await Pc(r.remoteStore)}catch(i){const s=_I(i,"Failed to persist write");n.reject(s)}}function ev(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=he(o);u.onlineState=l;let c=!1;u.queries.forEach((h,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&_4(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function I4(t,e){const n=he(t),r=e.batch.batchId;try{const i=await JO(n.localStore,e);EI(n,r,null),wI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bc(n,i)}catch(i){await $E(i)}}async function T4(t,e,n){const r=he(t);try{const i=await function(o,l){const u=he(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(De(p!==null),h=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);EI(r,e,n),wI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await bc(r,i)}catch(i){await $E(i)}}function wI(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function EI(t,e,n){const r=he(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}async function bc(t,e,n){const r=he(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(h=void 0)===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=um.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=he(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(c,m=>F.forEach(m.$i,E=>h.persistence.referenceDelegate.addReference(p,m.targetId,E)).next(()=>F.forEach(m.Ui,E=>h.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))}catch(p){if(!Ic(p))throw p;G("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const E=h.os.get(m),k=E.snapshotVersion,R=E.withLastLimboFreeSnapshotVersion(k);h.os=h.os.insert(m,R)}}}(r.localStore,s))}async function x4(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await fI(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new q(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bc(n,r.hs)}}function S4(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=I4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=T4.bind(null,e),e}class tv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=kc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return XO(this.persistence,new QO,e.initialUser,this.serializer)}createPersistence(e){return new GO(lm.Zr,this.serializer)}createSharedClientState(e){return new t4}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class k4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ev(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=x4.bind(null,this.syncEngine),await y4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new v4}()}createDatastore(e){const n=kc(e.databaseInfo.databaseId),r=function(s){return new s4(s)}(e.databaseInfo);return function(s,o,l,u){return new l4(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new c4(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ev(this.syncEngine,n,0),function(){return Q0.D()?new Q0:new n4}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,h){const p=new w4(i,s,o,l,u,c);return h&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=he(i);G("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await La(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ze.UNAUTHENTICATED,this.clientId=UE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_I(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Hd(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function nv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await b4(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Y0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Y0(e.remoteStore,i)),t._onlineComponents=e}function P4(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function b4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!P4(n))throw n;bu("Error using user provided cache. Falling back to memory cache: "+n),await Hd(t,new tv)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Hd(t,new tv);return t._offlineComponents}async function C4(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await nv(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await nv(t,new k4))),t._onlineComponents}function R4(t){return C4(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(t,e,n){if(!n)throw new q(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function N4(t,e,n,r){if(e===!0&&r===!0)throw new q(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function iv(t){if(!J.isDocumentKey(t))throw new q(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sv(t){if(J.isDocumentKey(t))throw new q(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function xI(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dm(t);throw new q(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}N4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=II((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ov({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ov(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wN;switch(r.type){case"firstParty":return new xN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=rv.get(n);r&&(G("ComponentProvider","Removing Datastore"),rv.delete(n),r.terminate())}(this),Promise.resolve()}}function O4(t,e,n,r={}){var i;const s=(t=xI(t,Cc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&bu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ze.MOCK_USER;else{l=jP(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ze(c)}t._authCredentials=new EN(new VE(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hm(this.firestore,e,this._query)}}class Un{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Un(this.firestore,e,this._key)}}class Ar extends hm{constructor(e,n,r){super(e,n,JN(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Un(this.firestore,null,new J(e))}withConverter(e){return new Ar(this.firestore,e,this._path)}}function fm(t,e,...n){if(t=wt(t),TI("collection","path",e),t instanceof Cc){const r=Ae.fromString(e,...n);return sv(r),new Ar(t,null,r)}{if(!(t instanceof Un||t instanceof Ar))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return sv(r),new Ar(t.firestore,null,r)}}function D4(t,e,...n){if(t=wt(t),arguments.length===1&&(e=UE.newId()),TI("doc","path",e),t instanceof Cc){const r=Ae.fromString(e,...n);return iv(r),new Un(t,null,new J(r))}{if(!(t instanceof Un||t instanceof Ar))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return iv(r),new Un(t.firestore,t instanceof Ar?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new pI(this,"async_queue_retry"),this.Eu=()=>{const n=Bd();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=Bd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=Bd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new hi;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!Ic(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw xi("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=cm.createAndSchedule(this,e,n,r,s=>this.Vu(s));return this.lu.push(i),i}du(){this.hu&&re()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class SI extends Cc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new L4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kI(this),this._firestoreClient.terminate()}}function M4(t,e){const n=typeof t=="object"?t:zp(),r=typeof t=="string"?t:"(default)",i=Li(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=MP("firestore");s&&O4(i,...s)}return i}function F4(t){return t._firestoreClient||kI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function kI(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,h){return new jN(l,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,II(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new A4(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ya(En.fromBase64String(e))}catch(n){throw new q(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ya(En.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j4=/^__.*__$/;class V4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Da(e,this.data,n,this.fieldTransforms)}}function RI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class pm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new pm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return ju(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(RI(this.wu)&&j4.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class U4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||kc(e)}Nu(e,n,r,i=!1){return new pm({wu:e,methodName:n,Ou:r,path:He.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $4(t){const e=t._freezeSettings(),n=kc(t._databaseId);return new U4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function z4(t,e,n,r,i,s={}){const o=t.Nu(s.merge||s.mergeFields?2:0,e,n,i);LI("Data must be an object, but it was:",o,r);const l=OI(r,o);let u,c;if(s.merge)u=new en(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const m=B4(e,p,n);if(!o.contains(m))throw new q(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);G4(h,m)||h.push(m)}u=new en(h),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new V4(new Jt(l),u,c)}function NI(t,e){if(DI(t=wt(t)))return LI("Unsupported field value:",e,t),OI(t,e);if(t instanceof PI)return function(r,i){if(!RI(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=NI(l,i.Fu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=wt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ve.fromDate(r);return{timestampValue:yf(i.serializer,s)}}if(r instanceof Ve){const s=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yf(i.serializer,s)}}if(r instanceof bI)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ya)return{bytesValue:EO(i.serializer,r._byteString)};if(r instanceof Un){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:dI(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof CI)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Mu("VectorValues must only contain numeric values.");return sm(l.serializer,u)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${dm(r)}`)}(t,e)}function OI(t,e){const n={};return BE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Oa(t,(r,i)=>{const s=NI(i,e.bu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function DI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof bI||t instanceof ya||t instanceof Un||t instanceof PI||t instanceof CI)}function LI(t,e,n){if(!DI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=dm(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function B4(t,e,n){if((e=wt(e))instanceof AI)return e._internalPath;if(typeof e=="string")return W4(t,e);throw ju("Field path arguments must be of type string or ",t,!1,void 0,n)}const H4=new RegExp("[~\\*/\\[\\]]");function W4(t,e,n){if(e.search(H4)>=0)throw ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new AI(...e.split("."))._internalPath}catch{throw ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ju(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(V.INVALID_ARGUMENT,l+t+u)}function G4(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K4(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function mm(t,e){const n=xI(t.firestore,SI),r=D4(t),i=K4(t.converter,e);return q4(n,[z4($4(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Vn.exists(!1))]).then(()=>r)}function q4(t,e){return function(r,i){const s=new hi;return r.asyncQueue.enqueueAndForget(async()=>E4(await R4(r),i,s)),s.promise}(F4(t),e)}(function(e,n=!0){(function(i){js=i})(Ms),wn(new sn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new SI(new IN(r.getProvider("auth-internal")),new kN(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nu(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ut(D0,"4.7.0",e),Ut(D0,"4.7.0","esm2017")})();const Q4={apiKey:"AIzaSyCHwr1gZormpKCcsaX91JLiA8eE7RIEfW8",authDomain:"harmony-hub-30b3c.firebaseapp.com",projectId:"harmony-hub-30b3c",storageBucket:"harmony-hub-30b3c.appspot.com",messagingSenderId:"882342365121",appId:"1:882342365121:web:0587715dcffd7b5a8b1140",measurementId:"G-R9Z8JXTBK7"},MI=$p(Q4),va=gN(MI),gm=M4(MI),Y4=()=>{const[t,e]=P.useState(""),[n,r]=P.useState(""),[i,s]=P.useState(""),[o,l]=P.useState(!1),[u,c]=P.useState(""),[h,p]=P.useState(""),m=cP(),E=async()=>{if(o&&n!==i){c("Passwords do not match.");return}try{o?(await nR(va,t,n),p("Sign-up successful! You can now sign in."),e(""),r(""),s(""),l(!1)):(await rR(va,t,n),p("Sign-in successful!"),e(""),r(""),m("/home"))}catch(k){c(k.message)}};return y.jsx("div",{className:"relative isolate px-6 pt-14 lg:px-8 overflow-hidden min-h-screen",children:y.jsx("div",{className:"mx-auto max-w-2xl py-32 sm:py-48 lg:py-56",children:y.jsxs("div",{className:"text-center",children:[y.jsx("h1",{className:"text-4xl font-bold tracking-normal md:tracking-widest sm:text-6xl animate-text bg-gradient-to-r from-gray-600 via-red-500 to-gray-900 dark:animate-text dark:bg-gradient-to-r dark:from-gray-300 dark:via-red-500 dark:to-gray-100 bg-clip-text text-transparent",children:"Harmony Hub"}),y.jsxs("div",{className:"mt-2 flex flex-col items-center",children:[y.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:k=>e(k.target.value),className:"mb-2 p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"}),y.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:k=>r(k.target.value),className:"mb-2 p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"}),o&&y.jsx("input",{type:"password",placeholder:"Confirm Password",value:i,onChange:k=>s(k.target.value),className:"mb-2 p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"}),y.jsx("button",{onClick:E,className:"rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400",children:o?"Sign Up":"Sign In"}),y.jsx("button",{onClick:()=>l(!o),className:"mt-2 text-sm font-semibold text-gray-900 dark:text-gray-100",children:o?"Already have an account? Sign In":"No account? Sign Up"}),h&&y.jsx("p",{className:"text-green-500 mt-2",children:h}),u&&y.jsx("p",{className:"text-red-500 mt-2",children:u})]})]})})})};function Dr(){return P.useEffect(()=>{const t={text1:document.getElementById("text1"),text2:document.getElementById("text2")},e=["Love is patient,","love is kind.","It does not envy,","it does not boast,","it is not proud.","It does not dishonor others,","it is not self-seeking,","it is not easily angered,","it keeps no record of wrongs.","Love does not delight in evil","but rejoices with the truth.","It always protects,","always trusts,","always hopes,","always perseveres.","Love never fails."],n=1.25,r=.5;let i=e.length-1,s=new Date,o=0,l=r;t.text1.textContent=e[i%e.length],t.text2.textContent=e[(i+1)%e.length];function u(){o-=l,l=0;let m=o/n;m>1&&(l=r,m=1),c(m)}function c(m){t.text2.style.filter=`blur(${Math.min(8/m-8,100)}px)`,t.text2.style.opacity=`${Math.pow(m,.4)*100}%`,m=1-m,t.text1.style.filter=`blur(${Math.min(8/m-8,100)}px)`,t.text1.style.opacity=`${Math.pow(m,.4)*100}%`,t.text1.textContent=e[i%e.length],t.text2.textContent=e[(i+1)%e.length]}function h(){o=0,t.text2.style.filter="",t.text2.style.opacity="100%",t.text1.style.filter="",t.text1.style.opacity="0%"}function p(){requestAnimationFrame(p);let m=new Date,E=l>0,k=(m-s)/1e3;s=m,l-=k,l<=0?(E&&i++,u()):h()}p()},[]),y.jsxs("div",{id:"container",children:[y.jsx("span",{id:"text1"}),y.jsx("span",{id:"text2"}),y.jsx("svg",{id:"filters",children:y.jsx("defs",{children:y.jsx("filter",{id:"threshold",children:y.jsx("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 255 -140"})})})})]})}const X4=()=>{const[t,e]=P.useState(!1),n=()=>{e(!t)};return y.jsxs("div",{className:"relative isolate px-6 pt-14 lg:px-8 overflow-hidden min-h-screen",children:[y.jsx("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80","aria-hidden":"true",children:y.jsx("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#f87171] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),y.jsxs("div",{className:"mx-auto max-w-2xl py-32 sm:py-48 lg:py-56",children:[y.jsx("div",{className:"sm:mb-8 sm:flex sm:justify-center text-center",children:y.jsxs("div",{className:"relative rounded-full px-2 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-700 hover:ring-gray-900/20 dark:hover:ring-gray-500 tracking-tightest md:tracking-widest max-w-max mx-auto",children:["❤️ All You Need is Love"," ",y.jsxs("a",{href:"#",className:"font-semibold text-red-600 dark:text-red-400",onClick:n,children:[y.jsx("span",{className:"absolute inset-0","aria-hidden":"true"}),"| Love is All You Need ",y.jsx("span",{"aria-hidden":"true",children:"→"})]})]})}),y.jsxs("div",{className:"text-center",children:[y.jsx("h1",{className:"text-4xl font-bold tracking-normal md:tracking-widest sm:text-6xl animate-text bg-gradient-to-r from-gray-600 via-red-500 to-gray-900 dark:animate-text dark:bg-gradient-to-r dark:from-gray-300 dark:via-red-500 dark:to-gray-100 bg-clip-text text-transparent",children:"Harmony Hub"}),y.jsx(Dr,{className:""})]})]}),y.jsx("div",{className:"absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]","aria-hidden":"true",children:y.jsx("div",{className:"relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#34d399] to-[#f87171] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),t&&y.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",children:y.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg",children:[y.jsx("h2",{className:"text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4",children:"About Harmony Hub"}),y.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:"Harmony Hub is a platform designed to foster connections and build meaningful relationships. Here, you can reflect on shared experiences, set goals together, and document memorable moments. Our aim is to create a space where love and communication flourish."}),y.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:"Use this platform to strengthen your bond by recording your journey and celebrating your shared achievements. Explore the features and make the most of your experience together."}),y.jsx("button",{onClick:n,className:"rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400",children:"Close"})]})})]})},av=()=>{};let ym={},FI={},jI=null,VI={mark:av,measure:av};try{typeof window<"u"&&(ym=window),typeof document<"u"&&(FI=document),typeof MutationObserver<"u"&&(jI=MutationObserver),typeof performance<"u"&&(VI=performance)}catch{}const{userAgent:lv=""}=ym.navigator||{},Lr=ym,ye=FI,uv=jI,kl=VI;Lr.document;const Yn=!!ye.documentElement&&!!ye.head&&typeof ye.addEventListener=="function"&&typeof ye.createElement=="function",UI=~lv.indexOf("MSIE")||~lv.indexOf("Trident/");var _e="classic",$I="duotone",bt="sharp",Ct="sharp-duotone",J4=[_e,$I,bt,Ct],Z4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},cv={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},eD=["kit"],tD=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,nD=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,rD={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},iD={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},sD={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},oD={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},aD={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},lD={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},zI={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},uD=["solid","regular","light","thin","duotone","brands"],BI=[1,2,3,4,5,6,7,8,9,10],cD=BI.concat([11,12,13,14,15,16,17,18,19,20]),Io={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},dD=[...Object.keys(oD),...uD,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Io.GROUP,Io.SWAP_OPACITY,Io.PRIMARY,Io.SECONDARY].concat(BI.map(t=>"".concat(t,"x"))).concat(cD.map(t=>"w-".concat(t))),hD={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},fD={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},pD={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},dv={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Kn="___FONT_AWESOME___",wf=16,HI="fa",WI="svg-inline--fa",ki="data-fa-i2svg",Ef="data-fa-pseudo-element",mD="data-fa-pseudo-element-pending",vm="data-prefix",_m="data-icon",hv="fontawesome-i2svg",gD="async",yD=["HTML","HEAD","STYLE","SCRIPT"],GI=(()=>{try{return!0}catch{return!1}})(),KI=[_e,bt,Ct];function Fa(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[_e]}})}const qI={...zI};qI[_e]={...zI[_e],...cv.kit,...cv["kit-duotone"]};const pi=Fa(qI),If={...lD};If[_e]={...If[_e],...dv.kit,...dv["kit-duotone"]};const _a=Fa(If),Tf={...aD};Tf[_e]={...Tf[_e],...pD.kit};const mi=Fa(Tf),xf={...sD};xf[_e]={...xf[_e],...fD.kit};const vD=Fa(xf),_D=tD,QI="fa-layers-text",wD=nD,ED={...Z4};Fa(ED);const ID=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Wd=Io,bs=new Set;Object.keys(_a[_e]).map(bs.add.bind(bs));Object.keys(_a[bt]).map(bs.add.bind(bs));Object.keys(_a[Ct]).map(bs.add.bind(bs));const TD=[...eD,...dD],Uo=Lr.FontAwesomeConfig||{};function xD(t){var e=ye.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function SD(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}ye&&typeof ye.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=SD(xD(n));i!=null&&(Uo[r]=i)});const YI={styleDefault:"solid",familyDefault:"classic",cssPrefix:HI,replacementClass:WI,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Uo.familyPrefix&&(Uo.cssPrefix=Uo.familyPrefix);const Cs={...YI,...Uo};Cs.autoReplaceSvg||(Cs.observeMutations=!1);const H={};Object.keys(YI).forEach(t=>{Object.defineProperty(H,t,{enumerable:!0,set:function(e){Cs[t]=e,$o.forEach(n=>n(H))},get:function(){return Cs[t]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(t){Cs.cssPrefix=t,$o.forEach(e=>e(H))},get:function(){return Cs.cssPrefix}});Lr.FontAwesomeConfig=H;const $o=[];function kD(t){return $o.push(t),()=>{$o.splice($o.indexOf(t),1)}}const nr=wf,pn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function AD(t){if(!t||!Yn)return;const e=ye.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=ye.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ye.head.insertBefore(e,r),t}const PD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function wa(){let t=12,e="";for(;t-- >0;)e+=PD[Math.random()*62|0];return e}function Us(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function wm(t){return t.classList?Us(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function XI(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bD(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(XI(t[n]),'" '),"").trim()}function Rc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Em(t){return t.size!==pn.size||t.x!==pn.x||t.y!==pn.y||t.rotate!==pn.rotate||t.flipX||t.flipY}function CD(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function RD(t){let{transform:e,width:n=wf,height:r=wf,startCentered:i=!1}=t,s="";return i&&UI?s+="translate(".concat(e.x/nr-n/2,"em, ").concat(e.y/nr-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/nr,"em), calc(-50% + ").concat(e.y/nr,"em)) "):s+="translate(".concat(e.x/nr,"em, ").concat(e.y/nr,"em) "),s+="scale(".concat(e.size/nr*(e.flipX?-1:1),", ").concat(e.size/nr*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var ND=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function JI(){const t=HI,e=WI,n=H.cssPrefix,r=H.replacementClass;let i=ND;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let fv=!1;function Gd(){H.autoAddCss&&!fv&&(AD(JI()),fv=!0)}var OD={mixout(){return{dom:{css:JI,insertCss:Gd}}},hooks(){return{beforeDOMElementCreation(){Gd()},beforeI2svg(){Gd()}}}};const qn=Lr||{};qn[Kn]||(qn[Kn]={});qn[Kn].styles||(qn[Kn].styles={});qn[Kn].hooks||(qn[Kn].hooks={});qn[Kn].shims||(qn[Kn].shims=[]);var mn=qn[Kn];const ZI=[],eT=function(){ye.removeEventListener("DOMContentLoaded",eT),Vu=1,ZI.map(t=>t())};let Vu=!1;Yn&&(Vu=(ye.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ye.readyState),Vu||ye.addEventListener("DOMContentLoaded",eT));function DD(t){Yn&&(Vu?setTimeout(t,0):ZI.push(t))}function ja(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?XI(t):"<".concat(e," ").concat(bD(n),">").concat(r.map(ja).join(""),"</").concat(e,">")}function pv(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Kd=function(e,n,r,i){var s=Object.keys(e),o=s.length,l=n,u,c,h;for(r===void 0?(u=1,h=e[s[0]]):(u=0,h=r);u<o;u++)c=s[u],h=l(h,e[c],c,e);return h};function LD(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Sf(t){const e=LD(t);return e.length===1?e[0].toString(16):null}function MD(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function mv(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function kf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=mv(e);typeof mn.hooks.addPack=="function"&&!r?mn.hooks.addPack(t,mv(e)):mn.styles[t]={...mn.styles[t]||{},...i},t==="fas"&&kf("fa",e)}const{styles:ti,shims:FD}=mn,jD={[_e]:Object.values(mi[_e]),[bt]:Object.values(mi[bt]),[Ct]:Object.values(mi[Ct])};let Im=null,tT={},nT={},rT={},iT={},sT={};const VD={[_e]:Object.keys(pi[_e]),[bt]:Object.keys(pi[bt]),[Ct]:Object.keys(pi[Ct])};function UD(t){return~TD.indexOf(t)}function $D(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!UD(i)?i:null}const oT=()=>{const t=r=>Kd(ti,(i,s,o)=>(i[o]=Kd(s,r,{}),i),{});tT=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=s}),r)),nT=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=s}),r)),sT=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(l=>{r[l]=s}),r});const e="far"in ti||H.autoFetchSvg,n=Kd(FD,(r,i)=>{const s=i[0];let o=i[1];const l=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});rT=n.names,iT=n.unicodes,Im=Nc(H.styleDefault,{family:H.familyDefault})};kD(t=>{Im=Nc(t.styleDefault,{family:H.familyDefault})});oT();function Tm(t,e){return(tT[t]||{})[e]}function zD(t,e){return(nT[t]||{})[e]}function gr(t,e){return(sT[t]||{})[e]}function aT(t){return rT[t]||{prefix:null,iconName:null}}function BD(t){const e=iT[t],n=Tm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Mr(){return Im}const xm=()=>({prefix:null,iconName:null,rest:[]});function Nc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=_e}=e,r=pi[n][t],i=_a[n][t]||_a[n][r],s=t in mn.styles?t:null;return i||s||null}const HD={[_e]:Object.keys(mi[_e]),[bt]:Object.keys(mi[bt]),[Ct]:Object.keys(mi[Ct])};function Oc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[_e]:"".concat(H.cssPrefix,"-").concat(_e),[bt]:"".concat(H.cssPrefix,"-").concat(bt),[Ct]:"".concat(H.cssPrefix,"-").concat(Ct)};let i=null,s=_e;const o=J4.filter(u=>u!==$I);o.forEach(u=>{(t.includes(r[u])||t.some(c=>HD[u].includes(c)))&&(s=u)});const l=t.reduce((u,c)=>{const h=$D(H.cssPrefix,c);if(ti[c]?(c=jD[s].includes(c)?vD[s][c]:c,i=c,u.prefix=c):VD[s].indexOf(c)>-1?(i=c,u.prefix=Nc(c,{family:s})):h?u.iconName=h:c!==H.replacementClass&&!o.some(p=>c===r[p])&&u.rest.push(c),!n&&u.prefix&&u.iconName){const p=i==="fa"?aT(u.iconName):{},m=gr(u.prefix,u.iconName);p.prefix&&(i=null),u.iconName=p.iconName||m||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!ti.far&&ti.fas&&!H.autoFetchSvg&&(u.prefix="fas")}return u},xm());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===bt&&(ti.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=gr(l.prefix,l.iconName)||l.iconName),!l.prefix&&s===Ct&&(ti.fasds||H.autoFetchSvg)&&(l.prefix="fasds",l.iconName=gr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=Mr()||"fas"),l}class WD{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},kf(s,i[s]);const o=mi[_e][s];o&&kf(o,i[s]),oT()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:l}=r[i],u=l[2];e[s]||(e[s]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[s][c]=l)}),e[s][o]=l}),e}}let gv=[],is={};const gs={},GD=Object.keys(gs);function KD(t,e){let{mixoutsTo:n}=e;return gv=t,is={},Object.keys(gs).forEach(r=>{GD.indexOf(r)===-1&&delete gs[r]}),gv.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{is[o]||(is[o]=[]),is[o].push(s[o])})}r.provides&&r.provides(gs)}),n}function Af(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(is[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Ai(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(is[t]||[]).forEach(s=>{s.apply(null,n)})}function Fr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return gs[t]?gs[t].apply(null,e):void 0}function Pf(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Mr();if(e)return e=gr(n,e)||e,pv(lT.definitions,n,e)||pv(mn.styles,n,e)}const lT=new WD,qD=()=>{H.autoReplaceSvg=!1,H.observeMutations=!1,Ai("noAuto")},QD={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Yn?(Ai("beforeI2svg",t),Fr("pseudoElements2svg",t),Fr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,DD(()=>{XD({autoReplaceSvgRoot:e}),Ai("watch",t)})}},YD={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:gr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Nc(t[0]);return{prefix:n,iconName:gr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(H.cssPrefix,"-"))>-1||t.match(_D))){const e=Oc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Mr(),iconName:gr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Mr();return{prefix:e,iconName:gr(e,t)||t}}}},Lt={noAuto:qD,config:H,dom:QD,parse:YD,library:lT,findIconDefinition:Pf,toHtml:ja},XD=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=ye}=t;(Object.keys(mn.styles).length>0||H.autoFetchSvg)&&Yn&&H.autoReplaceSvg&&Lt.dom.i2svg({node:e})};function Dc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ja(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Yn)return;const n=ye.createElement("div");return n.innerHTML=t.html,n.children}}),t}function JD(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(Em(o)&&n.found&&!r.found){const{width:l,height:u}=n,c={x:l/u/2,y:.5};i.style=Rc({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function ZD(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(H.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function Sm(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:l,maskId:u,titleId:c,extra:h,watchable:p=!1}=t,{width:m,height:E}=n.found?n:e,k=r==="fak",R=[H.replacementClass,i?"".concat(H.cssPrefix,"-").concat(i):""].filter(M=>h.classes.indexOf(M)===-1).filter(M=>M!==""||!!M).concat(h.classes).join(" ");let C={children:[],attributes:{...h.attributes,"data-prefix":r,"data-icon":i,class:R,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(E)}};const w=k&&!~h.classes.indexOf("fa-fw")?{width:"".concat(m/E*16*.0625,"em")}:{};p&&(C.attributes[ki]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(c||wa())},children:[l]}),delete C.attributes.title);const _={...C,prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:s,symbol:o,styles:{...w,...h.styles}},{children:S,attributes:D}=n.found&&e.found?Fr("generateAbstractMask",_)||{children:[],attributes:{}}:Fr("generateAbstractIcon",_)||{children:[],attributes:{}};return _.children=S,_.attributes=D,o?ZD(_):JD(_)}function yv(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:l=!1}=t,u={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};l&&(u[ki]="");const c={...o.styles};Em(i)&&(c.transform=RD({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const h=Rc(c);h.length>0&&(u.style=h);const p=[];return p.push({tag:"span",attributes:u,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function e5(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=Rc(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:qd}=mn;function bf(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(Wd.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(Wd.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(Wd.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const t5={found:!1,width:512,height:512};function n5(t,e){!GI&&!H.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Cf(t,e){let n=e;return e==="fa"&&H.styleDefault!==null&&(e=Mr()),new Promise((r,i)=>{if(n==="fa"){const s=aT(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&qd[e]&&qd[e][t]){const s=qd[e][t];return r(bf(s))}n5(t,e),r({...t5,icon:H.showMissingIcons&&t?Fr("missingIconAbstract")||{}:{}})})}const vv=()=>{},Rf=H.measurePerformance&&kl&&kl.mark&&kl.measure?kl:{mark:vv,measure:vv},To='FA "6.6.0"',r5=t=>(Rf.mark("".concat(To," ").concat(t," begins")),()=>uT(t)),uT=t=>{Rf.mark("".concat(To," ").concat(t," ends")),Rf.measure("".concat(To," ").concat(t),"".concat(To," ").concat(t," begins"),"".concat(To," ").concat(t," ends"))};var km={begin:r5,end:uT};const Gl=()=>{};function _v(t){return typeof(t.getAttribute?t.getAttribute(ki):null)=="string"}function i5(t){const e=t.getAttribute?t.getAttribute(vm):null,n=t.getAttribute?t.getAttribute(_m):null;return e&&n}function s5(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(H.replacementClass)}function o5(){return H.autoReplaceSvg===!0?Kl.replace:Kl[H.autoReplaceSvg]||Kl.replace}function a5(t){return ye.createElementNS("http://www.w3.org/2000/svg",t)}function l5(t){return ye.createElement(t)}function cT(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?a5:l5}=e;if(typeof t=="string")return ye.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(cT(s,{ceFn:n}))}),r}function u5(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Kl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(cT(n),e)}),e.getAttribute(ki)===null&&H.keepOriginalSource){let n=ye.createComment(u5(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~wm(e).indexOf(H.replacementClass))return Kl.replace(t);const r=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,l)=>(l===H.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>ja(s)).join(`
`);e.setAttribute(ki,""),e.innerHTML=i}};function wv(t){t()}function dT(t,e){const n=typeof e=="function"?e:Gl;if(t.length===0)n();else{let r=wv;H.mutateApproach===gD&&(r=Lr.requestAnimationFrame||wv),r(()=>{const i=o5(),s=km.begin("mutate");t.map(i),s(),n()})}}let Am=!1;function hT(){Am=!0}function Nf(){Am=!1}let Uu=null;function Ev(t){if(!uv||!H.observeMutations)return;const{treeCallback:e=Gl,nodeCallback:n=Gl,pseudoElementsCallback:r=Gl,observeMutationsRoot:i=ye}=t;Uu=new uv(s=>{if(Am)return;const o=Mr();Us(s).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!_v(l.addedNodes[0])&&(H.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&H.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&_v(l.target)&&~ID.indexOf(l.attributeName))if(l.attributeName==="class"&&i5(l.target)){const{prefix:u,iconName:c}=Oc(wm(l.target));l.target.setAttribute(vm,u||o),c&&l.target.setAttribute(_m,c)}else s5(l.target)&&n(l.target)})}),Yn&&Uu.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function c5(){Uu&&Uu.disconnect()}function d5(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function h5(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Oc(wm(t));return i.prefix||(i.prefix=Mr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=zD(i.prefix,t.innerText)||Tm(i.prefix,Sf(t.innerText))),!i.iconName&&H.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function f5(t){const e=Us(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return H.autoA11y&&(n?e["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(r||wa()):(e["aria-hidden"]="true",e.focusable="false")),e}function p5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:pn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Iv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=h5(t),s=f5(t),o=Af("parseNodeAttributes",{},t);let l=e.styleParser?d5(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:pn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s},...o}}const{styles:m5}=mn;function fT(t){const e=H.autoReplaceSvg==="nest"?Iv(t,{styleParser:!1}):Iv(t);return~e.extra.classes.indexOf(QI)?Fr("generateLayersText",t,e):Fr("generateSvgReplacementMutation",t,e)}let Tn=new Set;KI.map(t=>{Tn.add("fa-".concat(t))});Object.keys(pi[_e]).map(Tn.add.bind(Tn));Object.keys(pi[bt]).map(Tn.add.bind(Tn));Object.keys(pi[Ct]).map(Tn.add.bind(Tn));Tn=[...Tn];function Tv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Yn)return Promise.resolve();const n=ye.documentElement.classList,r=h=>n.add("".concat(hv,"-").concat(h)),i=h=>n.remove("".concat(hv,"-").concat(h)),s=H.autoFetchSvg?Tn:KI.map(h=>"fa-".concat(h)).concat(Object.keys(m5));s.includes("fa")||s.push("fa");const o=[".".concat(QI,":not([").concat(ki,"])")].concat(s.map(h=>".".concat(h,":not([").concat(ki,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=Us(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const u=km.begin("onTree"),c=l.reduce((h,p)=>{try{const m=fT(p);m&&h.push(m)}catch(m){GI||m.name==="MissingIcon"&&console.error(m)}return h},[]);return new Promise((h,p)=>{Promise.all(c).then(m=>{dT(m,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),h()})}).catch(m=>{u(),p(m)})})}function g5(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fT(t).then(n=>{n&&dT([n],e)})}function y5(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Pf(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Pf(i||{})),t(r,{...n,mask:i})}}const v5=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=pn,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:l=null,classes:u=[],attributes:c={},styles:h={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:E}=t;return Dc({type:"icon",...t},()=>(Ai("beforeDOMElementCreation",{iconDefinition:t,params:e}),H.autoA11y&&(o?c["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(l||wa()):(c["aria-hidden"]="true",c.focusable="false")),Sm({icons:{main:bf(E),mask:i?bf(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:{...pn,...n},symbol:r,title:o,maskId:s,titleId:l,extra:{attributes:c,styles:h,classes:u}})))};var _5={mixout(){return{icon:y5(v5)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Tv,t.nodeCallback=g5,t}}},provides(t){t.i2svg=function(e){const{node:n=ye,callback:r=()=>{}}=e;return Tv(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:l,symbol:u,mask:c,maskId:h,extra:p}=n;return new Promise((m,E)=>{Promise.all([Cf(r,o),c.iconName?Cf(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[R,C]=k;m([e,Sm({icons:{main:R,mask:C},prefix:o,iconName:r,transform:l,symbol:u,maskId:h,title:i,titleId:s,extra:p,watchable:!0})])}).catch(E)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const l=Rc(o);l.length>0&&(r.style=l);let u;return Em(s)&&(u=Fr("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},w5={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Dc({type:"layer"},()=>{Ai("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},E5={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return Dc({type:"counter",content:t},()=>(Ai("beforeDOMElementCreation",{content:t,params:e}),e5({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(H.cssPrefix,"-layers-counter"),...r]}})))}}}},I5={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=pn,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return Dc({type:"text",content:t},()=>(Ai("beforeDOMElementCreation",{content:t,params:e}),yv({content:t,transform:{...pn,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(H.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,l=null;if(UI){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,l=c.height/u}return H.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,yv({content:e.innerHTML,width:o,height:l,transform:i,title:r,extra:s,watchable:!0})])}}};const T5=new RegExp('"',"ug"),xv=[1105920,1112319],Sv={FontAwesome:{normal:"fas",400:"fas"},...iD,...rD,...hD},Of=Object.keys(Sv).reduce((t,e)=>(t[e.toLowerCase()]=Sv[e],t),{}),x5=Object.keys(Of).reduce((t,e)=>{const n=Of[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function S5(t){const e=t.replace(T5,""),n=MD(e,0),r=n>=xv[0]&&n<=xv[1],i=e.length===2?e[0]===e[1]:!1;return{value:Sf(i?e[0]:e),isSecondary:r||i}}function k5(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(Of[n]||{})[i]||x5[n]}function kv(t,e){const n="".concat(mD).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Us(t.children).filter(m=>m.getAttribute(Ef)===e)[0],l=Lr.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),c=u.match(wD),h=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&p!=="none"&&p!==""){const m=l.getPropertyValue("content");let E=k5(u,h);const{value:k,isSecondary:R}=S5(m),C=c[0].startsWith("FontAwesome");let w=Tm(E,k),_=w;if(C){const S=BD(k);S.iconName&&S.prefix&&(w=S.iconName,E=S.prefix)}if(w&&!R&&(!o||o.getAttribute(vm)!==E||o.getAttribute(_m)!==_)){t.setAttribute(n,_),o&&t.removeChild(o);const S=p5(),{extra:D}=S;D.attributes[Ef]=e,Cf(w,E).then(M=>{const U=Sm({...S,icons:{main:M,mask:xm()},prefix:E,iconName:_,extra:D,watchable:!0}),T=ye.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=U.map(v=>ja(v)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function A5(t){return Promise.all([kv(t,"::before"),kv(t,"::after")])}function P5(t){return t.parentNode!==document.head&&!~yD.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ef)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Av(t){if(Yn)return new Promise((e,n)=>{const r=Us(t.querySelectorAll("*")).filter(P5).map(A5),i=km.begin("searchPseudoElements");hT(),Promise.all(r).then(()=>{i(),Nf(),e()}).catch(()=>{i(),Nf(),n()})})}var b5={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Av,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=ye}=e;H.searchPseudoElements&&Av(n)}}};let Pv=!1;var C5={mixout(){return{dom:{unwatch(){hT(),Pv=!0}}}},hooks(){return{bootstrap(){Ev(Af("mutationObserverCallbacks",{}))},noAuto(){c5()},watch(t){const{observeMutationsRoot:e}=t;Pv?Nf():Ev(Af("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const bv=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var R5={mixout(){return{parse:{transform:t=>bv(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=bv(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:h,path:p};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...m.path}}]}]}}}};const Qd={x:0,y:0,width:"100%",height:"100%"};function Cv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function N5(t){return t.tag==="g"?t.children:[t]}var O5={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Oc(n.split(" ").map(i=>i.trim())):xm();return r.prefix||(r.prefix=Mr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:l}=e;const{width:u,icon:c}=i,{width:h,icon:p}=s,m=CD({transform:l,containerWidth:h,iconWidth:u}),E={tag:"rect",attributes:{...Qd,fill:"white"}},k=c.children?{children:c.children.map(Cv)}:{},R={tag:"g",attributes:{...m.inner},children:[Cv({tag:c.tag,attributes:{...c.attributes,...m.path},...k})]},C={tag:"g",attributes:{...m.outer},children:[R]},w="mask-".concat(o||wa()),_="clip-".concat(o||wa()),S={tag:"mask",attributes:{...Qd,id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[E,C]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:N5(p)},S]};return n.push(D,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(w,")"),...Qd}}),{children:n,attributes:r}}}},D5={provides(t){let e=!1;Lr.matchMedia&&(e=Lr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},L5={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},M5=[OD,_5,w5,E5,I5,b5,C5,R5,O5,D5,L5];KD(M5,{mixoutsTo:Lt});Lt.noAuto;Lt.config;Lt.library;Lt.dom;const Df=Lt.parse;Lt.findIconDefinition;Lt.toHtml;const F5=Lt.icon;Lt.layer;Lt.text;Lt.counter;var pT={exports:{}},j5="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",V5=j5,U5=V5;function mT(){}function gT(){}gT.resetWarningCache=mT;var $5=function(){function t(r,i,s,o,l,u){if(u!==U5){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:gT,resetWarningCache:mT};return n.PropTypes=n,n};pT.exports=$5();var z5=pT.exports;const Z=Bv(z5);function Rv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function dn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Rv(Object(n),!0).forEach(function(r){ss(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Rv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function $u(t){"@babel/helpers - typeof";return $u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$u(t)}function ss(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function B5(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function H5(t,e){if(t==null)return{};var n=B5(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Lf(t){return W5(t)||G5(t)||K5(t)||q5()}function W5(t){if(Array.isArray(t))return Mf(t)}function G5(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function K5(t,e){if(t){if(typeof t=="string")return Mf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mf(t,e)}}function Mf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function q5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q5(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,l=t.flash,u=t.spin,c=t.spinPulse,h=t.spinReverse,p=t.pulse,m=t.fixedWidth,E=t.inverse,k=t.border,R=t.listItem,C=t.flip,w=t.size,_=t.rotation,S=t.pull,D=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":h,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":m,"fa-inverse":E,"fa-border":k,"fa-li":R,"fa-flip":C===!0,"fa-flip-horizontal":C==="horizontal"||C==="both","fa-flip-vertical":C==="vertical"||C==="both"},ss(e,"fa-".concat(w),typeof w<"u"&&w!==null),ss(e,"fa-rotate-".concat(_),typeof _<"u"&&_!==null&&_!==0),ss(e,"fa-pull-".concat(S),typeof S<"u"&&S!==null),ss(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(D).map(function(M){return D[M]?M:null}).filter(function(M){return M})}function Y5(t){return t=t-0,t===t}function yT(t){return Y5(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var X5=["style"];function J5(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Z5(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=yT(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[J5(i)]=s:e[i]=s,e},{})}function vT(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return vT(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var h=e.attributes[c];switch(c){case"class":u.attrs.className=h,delete e.attributes.class;break;case"style":u.attrs.style=Z5(h);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=h:u.attrs[yT(c)]=h}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,l=H5(n,X5);return i.attrs.style=dn(dn({},i.attrs.style),o),t.apply(void 0,[e.tag,dn(dn({},i.attrs),l)].concat(Lf(r)))}var _T=!1;try{_T=!0}catch{}function eL(){if(!_T&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Nv(t){if(t&&$u(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Df.icon)return Df.icon(t);if(t===null)return null;if(t&&$u(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Yd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ss({},t,e):{}}var Ov={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Hr=Y.forwardRef(function(t,e){var n=dn(dn({},Ov),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,l=n.title,u=n.titleId,c=n.maskId,h=Nv(r),p=Yd("classes",[].concat(Lf(Q5(n)),Lf((o||"").split(" ")))),m=Yd("transform",typeof n.transform=="string"?Df.transform(n.transform):n.transform),E=Yd("mask",Nv(i)),k=F5(h,dn(dn(dn(dn({},p),m),E),{},{symbol:s,title:l,titleId:u,maskId:c}));if(!k)return eL("Could not find icon",h),null;var R=k.abstract,C={ref:e};return Object.keys(n).forEach(function(w){Ov.hasOwnProperty(w)||(C[w]=n[w])}),tL(R[0],C)});Hr.displayName="FontAwesomeIcon";Hr.propTypes={beat:Z.bool,border:Z.bool,beatFade:Z.bool,bounce:Z.bool,className:Z.string,fade:Z.bool,flash:Z.bool,mask:Z.oneOfType([Z.object,Z.array,Z.string]),maskId:Z.string,fixedWidth:Z.bool,inverse:Z.bool,flip:Z.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Z.oneOfType([Z.object,Z.array,Z.string]),listItem:Z.bool,pull:Z.oneOf(["right","left"]),pulse:Z.bool,rotation:Z.oneOf([0,90,180,270]),shake:Z.bool,size:Z.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Z.bool,spinPulse:Z.bool,spinReverse:Z.bool,symbol:Z.oneOfType([Z.bool,Z.string]),title:Z.string,titleId:Z.string,transform:Z.oneOfType([Z.string,Z.object]),swapOpacity:Z.bool};var tL=vT.bind(null,Y.createElement);const nL={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},$s=nL,rL=()=>{const[t,e]=P.useState(""),[n,r]=P.useState(""),[i,s]=P.useState(""),[o,l]=P.useState(""),[u,c]=P.useState(!1),h=C=>{e(C.target.value)},p=C=>{r(C.target.value)},m=C=>{s(C.target.value)},E=C=>{l(C.target.value)},k=()=>{c(!u)},R=async()=>{try{const C=va.currentUser;if(C){const w={partner1Reflection:t,partner2Reflection:n,memorableMoments:i,sharedGoals:o,timestamp:new Date},_=fm(gm,`users/${C.email}/journals`);await mm(_,w),console.log("Journal saved:",w),alert("Journal saved successfully!")}else alert("User is not authenticated.")}catch(C){console.error("Error saving journal:",C),alert("Failed to save journal.")}};return y.jsxs("div",{className:"relative isolate px-6 pt-14 lg:px-8",children:[y.jsx("div",{className:"absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl","aria-hidden":"true",style:{bottom:"auto"},children:y.jsx("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#f87171] opacity-30",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),y.jsx("div",{className:"absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl","aria-hidden":"true",style:{top:"auto"},children:y.jsx("div",{className:"relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#34d399] to-[#f87171] opacity-30",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),y.jsxs("div",{className:"mx-auto max-w-2xl py-32 sm:py-48 lg:py-56",children:[y.jsx("div",{className:"sm:mb-8 sm:flex sm:justify-center text-center",children:y.jsxs("div",{className:"relative rounded-full px-2 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-700 hover:ring-gray-900/20 dark:hover:ring-gray-500 tracking-tightest md:tracking-widest max-w-max mx-auto",children:[y.jsx("span",{children:"A Journal Meant for Two"})," ",y.jsxs("a",{href:"#",className:"font-semibold text-red-600 dark:text-red-400",onClick:k,children:[y.jsx("span",{className:"absolute inset-0","aria-hidden":"true"}),"| Share Your Love",y.jsx(Hr,{icon:$s,className:"ml-2 text-red-600 dark:text-red-400"})]})]})}),y.jsxs("div",{className:"text-center",children:[y.jsx("h1",{className:"text-4xl font-bold tracking-normal md:tracking-widest sm:text-6xl animate-text bg-gradient-to-r from-gray-600 via-red-500 to-gray-900 dark:animate-text dark:bg-gradient-to-r dark:from-gray-300 dark:via-red-500 dark:to-gray-100 bg-clip-text text-transparent",children:"Shared Journal"}),y.jsx(Dr,{className:""})]}),y.jsx("div",{className:"mt-10",children:y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[y.jsxs("div",{className:"bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6",children:[y.jsx("h2",{className:"text-2xl font-bold text-gray-700 dark:text-gray-200",children:"Today's Reflections"}),y.jsxs("div",{className:"mt-4",children:[y.jsx("h3",{className:"text-xl text-gray-600 dark:text-gray-300",children:"Partner 1"}),y.jsx("textarea",{value:t,onChange:h,className:"w-full h-24 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200",placeholder:"Write your thoughts here..."})]}),y.jsxs("div",{className:"mt-4",children:[y.jsx("h3",{className:"text-xl text-gray-600 dark:text-gray-300",children:"Partner 2"}),y.jsx("textarea",{value:n,onChange:p,className:"w-full h-24 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200",placeholder:"Write your thoughts here..."})]})]}),y.jsxs("div",{className:"bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6",children:[y.jsx("h2",{className:"text-2xl font-bold text-gray-700 dark:text-gray-200",children:"Memorable Moments & Goals"}),y.jsxs("div",{className:"mt-4",children:[y.jsx("h3",{className:"text-xl text-gray-600 dark:text-gray-300",children:"Memorable Moments"}),y.jsx("textarea",{value:i,onChange:m,className:"w-full h-24 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200",placeholder:"Write your memorable moments here..."})]}),y.jsxs("div",{className:"mt-4",children:[y.jsx("h3",{className:"text-xl text-gray-600 dark:text-gray-300",children:"Shared Goals"}),y.jsx("textarea",{value:o,onChange:E,className:"w-full h-24 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200",placeholder:"Write your shared goals here..."})]})]})]})}),y.jsx("div",{className:"text-center mt-6",children:y.jsx("button",{onClick:R,className:"rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400",children:"Save Journal"})})]}),u&&y.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",children:y.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg",children:[y.jsx("h2",{className:"text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4",children:"About Shared Journals"}),y.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:"A shared journal allows both partners to reflect on their experiences, thoughts, and goals together. It strengthens communication and deepens the connection between partners by providing a space to share and document their journey."}),y.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:"To use this shared journal, each partner can enter their reflections in the sections provided. You can also set shared goals and record memorable moments that you experience together."}),y.jsx("button",{onClick:k,className:"rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400",children:"Close"})]})})]})},iL=()=>{const[t,e]=P.useState(""),[n,r]=P.useState(""),[i,s]=P.useState(""),[o,l]=P.useState(""),[u,c]=P.useState(!1),h=C=>{e(C.target.value)},p=C=>{r(C.target.value)},m=C=>{s(C.target.value)},E=C=>{l(C.target.value)},k=()=>{c(!u)},R=async()=>{try{const C=va.currentUser;if(C){const w={partner1Perspective:t,partner2Perspective:n,commonGround:i,resolutionStrategy:o,timestamp:new Date},_=fm(gm,`users/${C.email}/compromises`);await mm(_,w),console.log("Compromise saved:",w),alert("Compromise saved successfully!")}else alert("User is not authenticated.")}catch(C){console.error("Error saving compromise:",C),alert("Failed to save compromise.")}};return y.jsxs("div",{className:"relative isolate px-6 pt-14 lg:px-8 min-h-screen overflow-hidden",children:[y.jsx("div",{className:"absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-30rem]","aria-hidden":"true",children:y.jsx("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#f87171] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),y.jsxs("div",{className:"mx-auto max-w-2xl py-32 sm:py-48 lg:py-56",children:[y.jsx("div",{className:"sm:mb-8 sm:flex sm:justify-center text-center",children:y.jsxs("div",{className:"relative rounded-full px-2 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-700 hover:ring-gray-900/20 dark:hover:ring-gray-500 tracking-tightest md:tracking-widest max-w-max mx-auto",children:[y.jsx("span",{children:"It's Better to Give Than Receive"})," ",y.jsxs("a",{href:"#",className:"font-semibold text-red-600 dark:text-red-400",onClick:k,children:[y.jsx("span",{className:"absolute inset-0","aria-hidden":"true"}),"| Meet in the Middle",y.jsx(Hr,{icon:$s,className:"ml-2 text-red-600 dark:text-red-400"})]})]})}),y.jsxs("div",{className:"text-center",children:[y.jsx("h1",{className:"text-4xl font-bold tracking-normal md:tracking-widest sm:text-6xl animate-text bg-gradient-to-r from-gray-600 via-red-500 to-gray-900 dark:animate-text dark:bg-gradient-to-r dark:from-gray-300 dark:via-red-500 dark:to-gray-100 bg-clip-text text-transparent",children:"Compromise Planner"}),y.jsx(Dr,{className:""})]}),y.jsxs("div",{className:"mt-10",children:[y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[y.jsxs("div",{className:"bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6",children:[y.jsx("h2",{className:"text-2xl font-bold text-gray-700 dark:text-gray-200",children:"Partner 1 Perspective"}),y.jsx("textarea",{value:t,onChange:h,className:"w-full h-32 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200",placeholder:"Partner 1, express your thoughts here..."})]}),y.jsxs("div",{className:"bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6",children:[y.jsx("h2",{className:"text-2xl font-bold text-gray-700 dark:text-gray-200",children:"Partner 2 Perspective"}),y.jsx("textarea",{value:n,onChange:p,className:"w-full h-32 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200",placeholder:"Partner 2, express your thoughts here..."})]}),y.jsxs("div",{className:"bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 col-span-1 md:col-span-2",children:[y.jsx("h2",{className:"text-2xl font-bold text-gray-700 dark:text-gray-200",children:"Common Ground"}),y.jsx("textarea",{value:i,onChange:m,className:"w-full h-32 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200",placeholder:"Identify areas of agreement..."})]}),y.jsxs("div",{className:"bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 col-span-1 md:col-span-2",children:[y.jsx("h2",{className:"text-2xl font-bold text-gray-700 dark:text-gray-200",children:"Resolution Strategy"}),y.jsx("textarea",{value:o,onChange:E,className:"w-full h-32 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200",placeholder:"Plan your compromise strategy..."})]})]}),y.jsx("div",{className:"mt-8 text-center",children:y.jsx("button",{onClick:R,className:"rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400",children:"Save Compromise"})})]})]}),u&&y.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",children:y.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg",children:[y.jsx("h2",{className:"text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4",children:"About Compromise Planning"}),y.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:"A compromise planner helps partners find common ground and develop a resolution strategy. It's a useful tool for navigating disagreements and ensuring that both partners' perspectives are considered."}),y.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:"To use this tool effectively, each partner should provide their perspective, identify common ground, and agree on a resolution strategy. This process fosters understanding and collaboration."}),y.jsx("button",{onClick:k,className:"rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400",children:"Close"})]})})]})},sL=()=>{const[t,e]=P.useState([]),[n,r]=P.useState(""),[i,s]=P.useState(""),[o,l]=P.useState(""),[u,c]=P.useState([]),[h,p]=P.useState(null),[m,E]=P.useState([]),[k,R]=P.useState(!1),[C,w]=P.useState(!1),[_,S]=P.useState(!1),D=I=>{const N=Array.from(I.target.files).map(A=>URL.createObjectURL(A));c([...u,...N])},M=()=>{const I={audio:!0};navigator.mediaDevices.getUserMedia(I).then(b=>{const N=new MediaRecorder(b);p(N);const A=[];N.ondataavailable=fe=>{fe.data&&fe.data.size>0&&A.push(fe.data)},N.onstop=()=>{const fe=new Dr;E([fe])},N.start(),R(!0)}).catch(b=>{console.error("Error accessing microphone:",b)})},U=()=>{h&&k&&(h.stop(),R(!1))},T=()=>{if(m.length>0){const I=m[0],b=new Audio(URL.createObjectURL(I));b.play(),w(!0),b.addEventListener("ended",()=>{w(!1)})}},v=()=>{S(!_)},x=async()=>{try{const I=va.currentUser;if(I){const b={gratitudeNotes:t,partner1Note:n,partner2Note:i,sharedNote:o,images:u,recordedBlobs:m,timestamp:new Date},N=fm(gm,`users/${I.email}/gratitudes`);await mm(N,b),console.log("Gratitude saved:",b),alert("Gratitude saved successfully!")}else alert("User is not authenticated.")}catch(I){console.error("Error saving gratitude:",I),alert("Failed to save gratitude.")}};return y.jsxs("div",{className:"relative isolate px-6 pt-14 lg:px-8 min-h-screen overflow-hidden",children:[y.jsx("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80","aria-hidden":"true",children:y.jsx("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#f87171] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),y.jsx("div",{className:"absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]","aria-hidden":"true",children:y.jsx("div",{className:"relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#34d399] to-[#f87171] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),y.jsxs("div",{className:"relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 z-10",children:[y.jsx("div",{className:"sm:mb-8 sm:flex sm:justify-center text-center",children:y.jsxs("div",{className:"relative rounded-full px-2 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-700 hover:ring-gray-900/20 dark:hover:ring-gray-500 tracking-tightest md:tracking-widest max-w-max mx-auto",children:["Put Some Gratitude"," ",y.jsxs("a",{href:"#",className:"font-semibold text-red-600 dark:text-red-400",onClick:v,children:[y.jsx("span",{className:"absolute inset-0","aria-hidden":"true"}),"| In Your Attitude",y.jsx("span",{"aria-hidden":"true"}),y.jsx(Hr,{icon:$s,className:"ml-2 text-red-600 dark:text-red-400"})]})]})}),y.jsxs("div",{className:"text-center",children:[y.jsx("h1",{className:"text-4xl font-bold tracking-normal md:tracking-widest sm:text-6xl animate-text bg-gradient-to-r from-gray-600 via-red-500 to-gray-900 dark:animate-text dark:bg-gradient-to-r dark:from-gray-300 dark:via-red-500 dark:to-gray-100 bg-clip-text text-transparent",children:"Gratitude Board"}),y.jsx(Dr,{className:""})]}),y.jsxs("div",{className:"mt-10 grid grid-cols-1 md:grid-cols-2 gap-8",children:[y.jsxs("div",{className:"bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6",children:[y.jsx("h2",{className:"text-2xl font-bold text-gray-700 dark:text-gray-200",children:"Partner 1 Gratitude"}),y.jsx("textarea",{className:"w-full h-24 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200",value:n,onChange:I=>r(I.target.value),placeholder:"Partner 1, express your gratitude here..."})]}),y.jsxs("div",{className:"bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6",children:[y.jsx("h2",{className:"text-2xl font-bold text-gray-700 dark:text-gray-200",children:"Partner 2 Gratitude"}),y.jsx("textarea",{className:"w-full h-24 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200",value:i,onChange:I=>s(I.target.value),placeholder:"Partner 2, express your gratitude here..."})]}),y.jsxs("div",{className:"bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 col-span-1 md:col-span-2",children:[y.jsx("h2",{className:"text-2xl font-bold text-gray-700 dark:text-gray-200",children:"Shared Gratitude"}),y.jsx("textarea",{className:"w-full h-24 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200",value:o,onChange:I=>l(I.target.value),placeholder:"Share something you're grateful for..."}),y.jsx("input",{type:"file",accept:"image/*",multiple:!0,className:"mt-4",onChange:D}),y.jsx("div",{className:"flex flex-wrap gap-2 mt-4",children:u.map((I,b)=>y.jsx("img",{src:I,alt:`Uploaded ${b}`,className:"w-24 h-24 object-cover rounded-lg"},b))}),y.jsxs("div",{className:"bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 col-span-1 md:col-span-2",children:[y.jsx("h2",{className:"text-2xl font-bold text-gray-700 dark:text-gray-200",children:"Voice Memo"}),y.jsx("div",{className:"flex justify-between items-center",children:y.jsxs("div",{className:"flex-grow mr-2",children:[k?y.jsx("button",{onClick:U,className:"px-4 py-2 bg-red-600 text-white rounded-lg",children:"Stop Recording"}):y.jsx("button",{onClick:M,className:"px-4 py-2 bg-green-600 text-white rounded-lg",children:"Start Recording"}),m.length>0&&!C&&y.jsx("button",{onClick:T,className:"ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg",children:"Play Recording"})]})})]})]})]}),y.jsx("div",{className:"text-center mt-8",children:y.jsx("div",{className:"mt-8 text-center",children:y.jsx("button",{onClick:x,className:"rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400",children:"Save Board"})})})]}),_&&y.jsxs("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[y.jsx("div",{className:"absolute inset-0 bg-black opacity-50"}),y.jsxs("div",{className:"relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-lg mx-auto",children:[y.jsx("h2",{className:"text-xl font-bold mb-4 text-gray-800 dark:text-gray-200",children:"About Gratitude Boards"}),y.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"The gratitude board is a powerful tool for couples to record their daily moments of gratitude. By adding notes, images, and voice memos, you create a lasting record of your positive experiences. It's a great way to stay connected and appreciative of each other, enhancing your relationship and creating a shared history of joy and gratitude."}),y.jsx("button",{className:"rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400",onClick:v,children:"Close"})]})]})]})},oL=()=>{const[t,e]=P.useState(""),[n,r]=P.useState(!1),i=()=>{const l=["Cook a new recipe together","Have a picnic in the park","Explore a local museum","Watch a classic movie at home","Go stargazing","Attend a virtual concert or event"],u=Math.floor(Math.random()*l.length);return l[u]},s=()=>{const l=i();e(l)},o=()=>{r(!n)};return y.jsxs("div",{className:"relative isolate px-6 pt-14 lg:px-8 min-h-screen overflow-hidden",children:[y.jsx("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80","aria-hidden":"true",children:y.jsx("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff7f7f] to-[#34d399] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),y.jsx("div",{className:"absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]","aria-hidden":"true",children:y.jsx("div",{className:"relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff7f7f] to-[#34d399] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),y.jsxs("div",{className:"relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 z-10",children:[y.jsx("div",{className:"sm:mb-8 sm:flex sm:justify-center text-center",children:y.jsxs("div",{className:"relative rounded-full px-2 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-700 hover:ring-gray-900/20 dark:hover:ring-gray-500 tracking-tightest md:tracking-widest max-w-max mx-auto",children:["Remember and Plan"," ",y.jsxs("a",{href:"#",className:"font-semibold text-red-600 dark:text-red-400",onClick:o,children:[y.jsx("span",{className:"absolute inset-0","aria-hidden":"true"}),"| Create Moments Together",y.jsx("span",{"aria-hidden":"true"}),y.jsx(Hr,{icon:$s,className:"ml-2 text-red-600 dark:text-red-400"})]})]})}),y.jsxs("div",{className:"text-center",children:[y.jsx("h1",{className:"text-4xl font-bold tracking-normal md:tracking-widest sm:text-6xl animate-text bg-gradient-to-r from-gray-600 via-red-500 to-gray-900 dark:animate-text dark:bg-gradient-to-r dark:from-gray-300 dark:via-red-500 dark:to-gray-100 bg-clip-text text-transparent",children:"Date Night Timeline"}),y.jsx(Dr,{className:""}),y.jsxs("div",{className:"mt-8",children:[y.jsx("p",{className:"text-lg text-gray-700 dark:text-gray-300 mb-4",children:"Looking for ideas? How about..."}),y.jsx("div",{className:"flex items-center justify-center",children:y.jsx("button",{onClick:s,className:"rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400",children:"Get a Date Idea"})}),t&&y.jsxs("p",{className:"mt-4 text-xl font-semibold text-center text-green-600 dark:text-green-400",children:["How about: ",t,"?"]})]})]})]}),n&&y.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",children:y.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg",children:[y.jsx("h2",{className:"text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4",children:"About Date Night"}),y.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:"A shared date night can strengthen your relationship by creating opportunities for quality time and shared experiences. This page helps you generate fun and creative date ideas that you can enjoy together."}),y.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:'To use this page, simply click the "Get a Date Idea" button to receive a random suggestion for a date night activity. You can also explore past date ideas and plan something special together.'}),y.jsx("button",{onClick:o,className:"rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400",children:"Close"})]})})]})},aL=()=>{const[t,e]=P.useState(!1),n=()=>{e(!t)};return y.jsxs("div",{className:"relative isolate px-6 pt-14 lg:px-8 min-h-screen overflow-hidden",children:[y.jsx("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80","aria-hidden":"true",children:y.jsx("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#f87171] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),y.jsx("div",{className:"absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]","aria-hidden":"true",children:y.jsx("div",{className:"relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#34d399] to-[#f87171] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),y.jsxs("div",{className:"mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 z-10",children:[y.jsx("div",{className:"sm:mb-8 sm:flex sm:justify-center text-center",children:y.jsxs("div",{className:"relative rounded-full px-2 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-700 hover:ring-gray-900/20 dark:hover:ring-gray-500 tracking-tightest md:tracking-widest max-w-max mx-auto",children:["Visualize Your Vulnerability"," ",y.jsxs("a",{href:"#",className:"font-semibold text-red-600 dark:text-red-400",onClick:n,children:[y.jsx("span",{className:"absolute inset-0","aria-hidden":"true"}),"| Data Analysis and Charts",y.jsx("span",{"aria-hidden":"true"}),y.jsx(Hr,{icon:$s,className:"ml-2 text-red-600 dark:text-red-400"})]})]})}),y.jsxs("div",{className:"text-center",children:[y.jsx("h1",{className:"text-4xl font-bold tracking-normal md:tracking-widest sm:text-6xl animate-text bg-gradient-to-r from-gray-600 via-red-500 to-gray-900 dark:animate-text dark:bg-gradient-to-r dark:from-gray-300 dark:via-red-500 dark:to-gray-100 bg-clip-text text-transparent py-2",children:"Communication Charts"}),y.jsx(Dr,{className:""})]}),y.jsxs("div",{className:"mt-12",children:[y.jsx("h2",{className:"text-2xl font-bold text-center mb-8",children:"Tools to Enhance Your Relationship"}),y.jsxs("div",{className:"flex flex-wrap justify-center gap-6",children:[y.jsxs("div",{className:"max-w-sm bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md p-6",children:[y.jsx("h3",{className:"text-xl font-semibold mb-4",children:"1. Active Listening"}),y.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Improve communication by practicing active listening techniques. Listen attentively without interrupting."})]}),y.jsxs("div",{className:"max-w-sm bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md p-6",children:[y.jsx("h3",{className:"text-xl font-semibold mb-4",children:"2. Conflict Resolution"}),y.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Learn strategies to resolve conflicts constructively, aiming for win-win solutions."})]}),y.jsxs("div",{className:"max-w-sm bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md p-6",children:[y.jsx("h3",{className:"text-xl font-semibold mb-4",children:"3. Emotional Intelligence"}),y.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Develop emotional intelligence to better understand and manage emotions in yourself and your partner."})]})]})]}),y.jsx("div",{className:"mt-12 text-center",children:y.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"For more personalized advice and guidance on improving communication in your relationship, consider consulting with a relationship counselor."})})]}),t&&y.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",children:y.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg",children:[y.jsx("h2",{className:"text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4",children:"About Data Analysis and Charts"}),y.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:"Data analysis and charts help visualize communication patterns and trends in your relationship. By examining these visual representations, you can gain insights into your interactions, identify areas for improvement, and track progress over time."}),y.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:"Tools like charts and graphs can illustrate things like frequency of communication, emotional tone, and conflict resolution success rates, helping you make data-driven decisions to enhance your relationship."}),y.jsx("button",{onClick:n,className:"rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400",children:"Close"})]})})]})},lL=()=>{const[t,e]=P.useState(!1),n=()=>{e(!t)};return y.jsxs("div",{className:"relative isolate px-6 pt-14 lg:px-8 min-h-screen overflow-hidden",children:[y.jsx("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80","aria-hidden":"true",children:y.jsx("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#f87171] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),y.jsx("div",{className:"absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]","aria-hidden":"true",children:y.jsx("div",{className:"relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#34d399] to-[#f87171] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),y.jsxs("div",{className:"relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 z-10",children:[y.jsx("div",{className:"sm:mb-8 sm:flex sm:justify-center text-center",children:y.jsxs("div",{className:"relative rounded-full px-2 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-700 hover:ring-gray-900/20 dark:hover:ring-gray-500 tracking-tightest md:tracking-widest max-w-max mx-auto",children:[y.jsx("span",{children:"Reflect with Compassion"})," ",y.jsxs("a",{href:"#",className:"font-semibold text-red-600 dark:text-red-400",onClick:n,children:[y.jsx("span",{className:"absolute inset-0","aria-hidden":"true"}),"| Embrace Growth",y.jsx(Hr,{icon:$s,className:"ml-2 text-red-600 dark:text-red-400"})]})]})}),y.jsxs("div",{className:"text-center",children:[y.jsx("h1",{className:"text-4xl font-bold tracking-normal md:tracking-widest sm:text-6xl animate-text bg-gradient-to-r from-gray-600 via-red-500 to-gray-900 dark:animate-text dark:bg-gradient-to-r dark:from-gray-300 dark:via-red-500 dark:to-gray-100 bg-clip-text text-transparent",children:"Relationship Insights"}),y.jsx(Dr,{className:""})]}),y.jsxs("div",{className:"mt-12",children:[y.jsx("h2",{className:"text-2xl font-bold text-center mb-8",children:"Self-Reflection and Compassionate Criticism"}),y.jsxs("div",{className:"flex flex-wrap justify-center gap-6",children:[y.jsxs("div",{className:"max-w-sm bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md p-6",children:[y.jsx("h3",{className:"text-xl font-semibold mb-4",children:"1. Embrace Vulnerability"}),y.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Practice vulnerability with your partner, acknowledging strengths and areas for mutual growth."})]}),y.jsxs("div",{className:"max-w-sm bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md p-6",children:[y.jsx("h3",{className:"text-xl font-semibold mb-4",children:"2. Communicate with Kindness"}),y.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Foster open communication with loving-kindness, promoting deeper understanding and connection."})]}),y.jsxs("div",{className:"max-w-sm bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md p-6",children:[y.jsx("h3",{className:"text-xl font-semibold mb-4",children:"3. Reflect and Improve Together"}),y.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Continuously reflect on experiences together, appreciating each other's journey and striving for mutual growth."})]})]})]}),y.jsx("div",{className:"mt-12 text-center",children:y.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Explore these insights with a focus on compassionate self-reflection and constructive criticism to nurture a strong and loving relationship."})})]}),t&&y.jsxs("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[y.jsx("div",{className:"absolute inset-0 bg-black opacity-50"}),y.jsxs("div",{className:"relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-lg mx-auto",children:[y.jsx("h2",{className:"text-xl font-bold mb-4 text-gray-800 dark:text-gray-200",children:"About Relationship Insights"}),y.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"This page provides insights on fostering healthy relationships through self-reflection and compassionate criticism. Each section highlights key strategies to improve communication, mutual understanding, and growth within your relationships."}),y.jsx("button",{className:"rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400",onClick:n,children:"Close"})]})]})]})},Dv=[{name:"Home",href:"#/home"},{name:"Shared Journal",href:"#/JournalPage"},{name:"Compromise Planner",href:"#/CompromisePage"},{name:"Gratitude Board",href:"#/GratitudePage"},{name:"Date Night Timeline",href:"#/DateNightPage"},{name:"Communication Charts",href:"#/CommunicationPage"},{name:"Relationship Insights",href:"#/InsightsPage"}];function uL(){const[t,e]=P.useState("light"),[n,r]=P.useState(!1);P.useEffect(()=>{const s=localStorage.getItem("theme");s&&e(s)},[]),P.useEffect(()=>{t==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme",t)},[t]);const i=()=>{e(s=>s==="light"?"dark":"light")};return y.jsx(PP,{children:y.jsxs("div",{className:"bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen",children:[y.jsxs("header",{className:"absolute inset-x-0 top-0 z-50",children:[y.jsxs("nav",{className:"flex items-center justify-between p-6 lg:px-8","aria-label":"Global",children:[y.jsx("div",{className:"flex lg:flex-1"}),y.jsx("div",{className:"flex lg:hidden",children:y.jsxs("button",{type:"button",title:"Open Menu",className:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300",onClick:()=>r(!0),children:[y.jsx("span",{className:"sr-only",children:"Open main menu"}),y.jsx(O2,{className:"h-6 w-6","aria-hidden":"true"})]})}),y.jsx("div",{className:"hidden lg:flex lg:gap-x-12",children:Dv.map(s=>y.jsx("a",{href:s.href,className:"text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 rounded-md px-3 py-2 hover:bg-gray-50/25 dark:hover:bg-gray-800/25 transition-colors duration-200",children:s.name},s.name))}),y.jsx("div",{className:"hidden lg:flex lg:flex-1 lg:justify-end",children:y.jsx("button",{title:"Toggle theme",onClick:i,className:"text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 rounded-md px-3 py-2 hover:bg-gray-50/25 dark:hover:bg-gray-800/25 transition-colors duration-200",children:t==="dark"?y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-6 w-6 inline",children:y.jsx("path",{d:"M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"})}):y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-6 w-6 inline",children:y.jsx("path",{fillRule:"evenodd",d:"M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z",clipRule:"evenodd"})})})})]}),y.jsxs(R2,{className:"lg:hidden",open:n,onClose:r,children:[y.jsx("div",{className:"flex inset-0 z-50"}),y.jsxs(Aw,{className:"fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-100 dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/25",children:[y.jsx("div",{className:"flex items-center justify-between",children:y.jsxs("button",{type:"button",className:"-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300",onClick:()=>r(!1),children:[y.jsx("span",{className:"sr-only",children:"Close menu"}),y.jsx(L2,{className:"h-6 w-6","aria-hidden":"true"})]})}),y.jsx("div",{className:"mt-6 flow-root",children:y.jsx("div",{className:"-my-6 divide-y divide-gray-700/25 dark:divide-gray-300/25",children:y.jsx("div",{className:"space-y-2 py-6",children:Dv.map(s=>y.jsx("a",{href:s.href,className:"-mx-1 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50/25 dark:hover:bg-gray-800/25",children:s.name},s.name))})})})]})]})]}),y.jsxs(SP,{children:[y.jsx(An,{path:"/",element:y.jsx(Y4,{})}),y.jsx(An,{path:"/home",element:y.jsx(X4,{})}),y.jsx(An,{path:"/JournalPage",element:y.jsx(rL,{})}),y.jsx(An,{path:"/CompromisePage",element:y.jsx(iL,{})}),y.jsx(An,{path:"/GratitudePage",element:y.jsx(sL,{})}),y.jsx(An,{path:"/DateNightPage",element:y.jsx(oL,{})}),y.jsx(An,{path:"/CommunicationPage",element:y.jsx(aL,{})}),y.jsx(An,{path:"/InsightsPage",element:y.jsx(lL,{})})]})]})})}const wT="@firebase/installations",Pm="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=1e4,IT=`w:${Pm}`,TT="FIS_v2",cL="https://firebaseinstallations.googleapis.com/v1",dL=60*60*1e3,hL="installations",fL="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Pi=new Di(hL,fL,pL);function xT(t){return t instanceof an&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST({projectId:t}){return`${cL}/projects/${t}/installations`}function kT(t){return{token:t.token,requestStatus:2,expiresIn:gL(t.expiresIn),creationTime:Date.now()}}async function AT(t,e){const r=(await e.json()).error;return Pi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function PT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function mL(t,{refreshToken:e}){const n=PT(t);return n.append("Authorization",yL(e)),n}async function bT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function gL(t){return Number(t.replace("s","000"))}function yL(t){return`${TT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=ST(t),i=PT(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:TT,appId:t.appId,sdkVersion:IT},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await bT(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:kT(c.authToken)}}else throw await AT("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _L(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wL=/^[cdef][\w-]{21}$/,Ff="";function EL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=IL(t);return wL.test(n)?n:Ff}catch{return Ff}}function IL(t){return _L(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=new Map;function NT(t,e){const n=Lc(t);OT(n,e),TL(n,e)}function OT(t,e){const n=RT.get(t);if(n)for(const r of n)r(e)}function TL(t,e){const n=xL();n&&n.postMessage({key:t,fid:e}),SL()}let ai=null;function xL(){return!ai&&"BroadcastChannel"in self&&(ai=new BroadcastChannel("[Firebase] FID Change"),ai.onmessage=t=>{OT(t.data.key,t.data.fid)}),ai}function SL(){RT.size===0&&ai&&(ai.close(),ai=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kL="firebase-installations-database",AL=1,bi="firebase-installations-store";let Xd=null;function bm(){return Xd||(Xd=Qw(kL,AL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bi)}}})),Xd}async function zu(t,e){const n=Lc(t),i=(await bm()).transaction(bi,"readwrite"),s=i.objectStore(bi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&NT(t,e.fid),e}async function DT(t){const e=Lc(t),r=(await bm()).transaction(bi,"readwrite");await r.objectStore(bi).delete(e),await r.done}async function Mc(t,e){const n=Lc(t),i=(await bm()).transaction(bi,"readwrite"),s=i.objectStore(bi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&NT(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cm(t){let e;const n=await Mc(t.appConfig,r=>{const i=PL(r),s=bL(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Ff?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function PL(t){const e=t||{fid:EL(),registrationStatus:0};return LT(e)}function bL(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Pi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=CL(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:RL(t)}:{installationEntry:e}}async function CL(t,e){try{const n=await vL(t,e);return zu(t.appConfig,n)}catch(n){throw xT(n)&&n.customData.serverCode===409?await DT(t.appConfig):await zu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function RL(t){let e=await Lv(t.appConfig);for(;e.registrationStatus===1;)await CT(100),e=await Lv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Cm(t);return r||n}return e}function Lv(t){return Mc(t,e=>{if(!e)throw Pi.create("installation-not-found");return LT(e)})}function LT(t){return NL(t)?{fid:t.fid,registrationStatus:0}:t}function NL(t){return t.registrationStatus===1&&t.registrationTime+ET<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OL({appConfig:t,heartbeatServiceProvider:e},n){const r=DL(t,n),i=mL(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:IT,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await bT(()=>fetch(r,l));if(u.ok){const c=await u.json();return kT(c)}else throw await AT("Generate Auth Token",u)}function DL(t,{fid:e}){return`${ST(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rm(t,e=!1){let n;const r=await Mc(t.appConfig,s=>{if(!MT(s))throw Pi.create("not-registered");const o=s.authToken;if(!e&&FL(o))return s;if(o.requestStatus===1)return n=LL(t,e),s;{if(!navigator.onLine)throw Pi.create("app-offline");const l=VL(s);return n=ML(t,l),l}});return n?await n:r.authToken}async function LL(t,e){let n=await Mv(t.appConfig);for(;n.authToken.requestStatus===1;)await CT(100),n=await Mv(t.appConfig);const r=n.authToken;return r.requestStatus===0?Rm(t,e):r}function Mv(t){return Mc(t,e=>{if(!MT(e))throw Pi.create("not-registered");const n=e.authToken;return UL(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ML(t,e){try{const n=await OL(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await zu(t.appConfig,r),n}catch(n){if(xT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await DT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await zu(t.appConfig,r)}throw n}}function MT(t){return t!==void 0&&t.registrationStatus===2}function FL(t){return t.requestStatus===2&&!jL(t)}function jL(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+dL}function VL(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function UL(t){return t.requestStatus===1&&t.requestTime+ET<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $L(t){const e=t,{installationEntry:n,registrationPromise:r}=await Cm(e);return r?r.catch(console.error):Rm(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zL(t,e=!1){const n=t;return await BL(n),(await Rm(n,e)).token}async function BL(t){const{registrationPromise:e}=await Cm(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HL(t){if(!t||!t.options)throw Jd("App Configuration");if(!t.name)throw Jd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Jd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Jd(t){return Pi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="installations",WL="installations-internal",GL=t=>{const e=t.getProvider("app").getImmediate(),n=HL(e),r=Li(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},KL=t=>{const e=t.getProvider("app").getImmediate(),n=Li(e,FT).getImmediate();return{getId:()=>$L(n),getToken:i=>zL(n,i)}};function qL(){wn(new sn(FT,GL,"PUBLIC")),wn(new sn(WL,KL,"PRIVATE"))}qL();Ut(wT,Pm);Ut(wT,Pm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="analytics",QL="firebase_id",YL="origin",XL=60*1e3,JL="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Nm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new vc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZL={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rt=new Di("analytics","Analytics",ZL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eM(t){if(!t.startsWith(Nm)){const e=Rt.create("invalid-gtag-resource",{gtagURL:t});return _t.warn(e.message),""}return t}function jT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function tM(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function nM(t,e){const n=tM("firebase-js-sdk-policy",{createScriptURL:eM}),r=document.createElement("script"),i=`${Nm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function rM(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function iM(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await jT(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){_t.error(l)}t("config",i,s)}async function sM(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await jT(n);for(const u of o){const c=l.find(p=>p.measurementId===u),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){_t.error(s)}}function oM(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await sM(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await iM(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){_t.error(l)}}return i}function aM(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=oM(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function lM(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Nm)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uM=30,cM=1e3;class dM{constructor(e={},n=cM){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const VT=new dM;function hM(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function fM(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:hM(r)},s=JL.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Rt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function pM(t,e=VT,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Rt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Rt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new yM;return setTimeout(async()=>{l.abort()},XL),UT({appId:r,apiKey:i,measurementId:s},o,l,e)}async function UT(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=VT){var s;const{appId:o,measurementId:l}=t;try{await mM(r,e)}catch(u){if(l)return _t.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await fM(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!gM(c)){if(i.deleteThrottleMetadata(o),l)return _t.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?s0(n,i.intervalMillis,uM):s0(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,p),_t.debug(`Calling attemptFetch again in ${h} millis`),UT(t,p,r,i)}}function mM(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function gM(t){if(!(t instanceof an)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class yM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function vM(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _M(){if(Ww())try{await Gw()}catch(t){return _t.warn(Rt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return _t.warn(Rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function wM(t,e,n,r,i,s,o){var l;const u=pM(t);u.then(E=>{n[E.measurementId]=E.appId,t.options.measurementId&&E.measurementId!==t.options.measurementId&&_t.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>_t.error(E)),e.push(u);const c=_M().then(E=>{if(E)return r.getId()}),[h,p]=await Promise.all([u,c]);lM(s)||nM(s,h.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[YL]="firebase",m.update=!0,p!=null&&(m[QL]=p),i("config",h.measurementId,m),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e){this.app=e}_delete(){return delete zo[this.app.options.appId],Promise.resolve()}}let zo={},Fv=[];const jv={};let Zd="dataLayer",IM="gtag",Vv,$T,Uv=!1;function TM(){const t=[];if(Hw()&&t.push("This is a browser extension environment."),HP()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Rt.create("invalid-analytics-context",{errorInfo:e});_t.warn(n.message)}}function xM(t,e,n){TM();const r=t.options.appId;if(!r)throw Rt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)_t.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rt.create("no-api-key");if(zo[r]!=null)throw Rt.create("already-exists",{id:r});if(!Uv){rM(Zd);const{wrappedGtag:s,gtagCore:o}=aM(zo,Fv,jv,Zd,IM);$T=s,Vv=o,Uv=!0}return zo[r]=wM(t,Fv,jv,e,Vv,Zd,n),new EM(t)}function SM(t=zp()){t=wt(t);const e=Li(t,Bu);return e.isInitialized()?e.getImmediate():kM(t)}function kM(t,e={}){const n=Li(t,Bu);if(n.isInitialized()){const i=n.getImmediate();if(la(e,n.getOptions()))return i;throw Rt.create("already-initialized")}return n.initialize({options:e})}function AM(t,e,n,r){t=wt(t),vM($T,zo[t.app.options.appId],e,n,r).catch(i=>_t.error(i))}const $v="@firebase/analytics",zv="0.10.7";function PM(){wn(new sn(Bu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return xM(r,i,n)},"PUBLIC")),wn(new sn("analytics-internal",t,"PRIVATE")),Ut($v,zv),Ut($v,zv,"esm2017");function t(e){try{const n=e.getProvider(Bu).getImmediate();return{logEvent:(r,i,s)=>AM(n,r,i,s)}}catch(n){throw Rt.create("interop-component-reg-failed",{reason:n})}}}PM();const bM={apiKey:"AIzaSyCHwr1gZormpKCcsaX91JLiA8eE7RIEfW8",authDomain:"harmony-hub-30b3c.firebaseapp.com",projectId:"harmony-hub-30b3c",storageBucket:"harmony-hub-30b3c.appspot.com",messagingSenderId:"882342365121",appId:"1:882342365121:web:0587715dcffd7b5a8b1140",measurementId:"G-R9Z8JXTBK7"},CM=$p(bM);SM(CM);const RM=th.createRoot(document.getElementById("app"));RM.render(y.jsx(uL,{}));
