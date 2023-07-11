function Qp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Mc={exports:{}},ao={},Rc={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zr=Symbol.for("react.element"),Xp=Symbol.for("react.portal"),Kp=Symbol.for("react.fragment"),Gp=Symbol.for("react.strict_mode"),Zp=Symbol.for("react.profiler"),Jp=Symbol.for("react.provider"),em=Symbol.for("react.context"),tm=Symbol.for("react.forward_ref"),nm=Symbol.for("react.suspense"),rm=Symbol.for("react.memo"),im=Symbol.for("react.lazy"),Ku=Symbol.iterator;function om(e){return e===null||typeof e!="object"?null:(e=Ku&&e[Ku]||e["@@iterator"],typeof e=="function"?e:null)}var Ic={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dc=Object.assign,Fc={};function In(e,t,n){this.props=e,this.context=t,this.refs=Fc,this.updater=n||Ic}In.prototype.isReactComponent={};In.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};In.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ac(){}Ac.prototype=In.prototype;function Rl(e,t,n){this.props=e,this.context=t,this.refs=Fc,this.updater=n||Ic}var Il=Rl.prototype=new Ac;Il.constructor=Rl;Dc(Il,In.prototype);Il.isPureReactComponent=!0;var Gu=Array.isArray,Hc=Object.prototype.hasOwnProperty,Dl={current:null},bc={key:!0,ref:!0,__self:!0,__source:!0};function Uc(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Hc.call(t,r)&&!bc.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:zr,type:e,key:o,ref:a,props:i,_owner:Dl.current}}function am(e,t){return{$$typeof:zr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fl(e){return typeof e=="object"&&e!==null&&e.$$typeof===zr}function lm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zu=/\/+/g;function ra(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lm(""+e.key):t.toString(36)}function wi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case zr:case Xp:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ra(a,0):r,Gu(i)?(n="",e!=null&&(n=e.replace(Zu,"$&/")+"/"),wi(i,t,n,"",function(s){return s})):i!=null&&(Fl(i)&&(i=am(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Zu,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Gu(e))for(var l=0;l<e.length;l++){o=e[l];var u=r+ra(o,l);a+=wi(o,t,n,u,i)}else if(u=om(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=r+ra(o,l++),a+=wi(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Yr(e,t,n){if(e==null)return e;var r=[],i=0;return wi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function um(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},Si={transition:null},sm={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:Si,ReactCurrentOwner:Dl};j.Children={map:Yr,forEach:function(e,t,n){Yr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yr(e,function(){t++}),t},toArray:function(e){return Yr(e,function(t){return t})||[]},only:function(e){if(!Fl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=In;j.Fragment=Kp;j.Profiler=Zp;j.PureComponent=Rl;j.StrictMode=Gp;j.Suspense=nm;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sm;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dc({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Dl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)Hc.call(t,u)&&!bc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var s=0;s<u;s++)l[s]=arguments[s+2];r.children=l}return{$$typeof:zr,type:e.type,key:i,ref:o,props:r,_owner:a}};j.createContext=function(e){return e={$$typeof:em,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jp,_context:e},e.Consumer=e};j.createElement=Uc;j.createFactory=function(e){var t=Uc.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:tm,render:e}};j.isValidElement=Fl;j.lazy=function(e){return{$$typeof:im,_payload:{_status:-1,_result:e},_init:um}};j.memo=function(e,t){return{$$typeof:rm,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=Si.transition;Si.transition={};try{e()}finally{Si.transition=t}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(e,t){return ke.current.useCallback(e,t)};j.useContext=function(e){return ke.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};j.useEffect=function(e,t){return ke.current.useEffect(e,t)};j.useId=function(){return ke.current.useId()};j.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return ke.current.useMemo(e,t)};j.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};j.useRef=function(e){return ke.current.useRef(e)};j.useState=function(e){return ke.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return ke.current.useTransition()};j.version="18.2.0";Rc.exports=j;var $=Rc.exports;const pt=Yp($),Ju=Qp({__proto__:null,default:pt},[$]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm=$,fm=Symbol.for("react.element"),dm=Symbol.for("react.fragment"),pm=Object.prototype.hasOwnProperty,mm=cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hm={key:!0,ref:!0,__self:!0,__source:!0};function Bc(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)pm.call(t,r)&&!hm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:fm,type:e,key:o,ref:a,props:i,_owner:mm.current}}ao.Fragment=dm;ao.jsx=Bc;ao.jsxs=Bc;Mc.exports=ao;var x=Mc.exports,Ra={},Wc={exports:{}},Re={},Vc={exports:{}},Qc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(q,N){var z=q.length;q.push(N);e:for(;0<z;){var ee=z-1>>>1,ae=q[ee];if(0<i(ae,N))q[ee]=N,q[z]=ae,z=ee;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var N=q[0],z=q.pop();if(z!==N){q[0]=z;e:for(var ee=0,ae=q.length,Wr=ae>>>1;ee<Wr;){var Wt=2*(ee+1)-1,na=q[Wt],Vt=Wt+1,Vr=q[Vt];if(0>i(na,z))Vt<ae&&0>i(Vr,na)?(q[ee]=Vr,q[Vt]=z,ee=Vt):(q[ee]=na,q[Wt]=z,ee=Wt);else if(Vt<ae&&0>i(Vr,z))q[ee]=Vr,q[Vt]=z,ee=Vt;else break e}}return N}function i(q,N){var z=q.sortIndex-N.sortIndex;return z!==0?z:q.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],s=[],p=1,m=null,h=3,w=!1,g=!1,v=!1,O=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(q){for(var N=n(s);N!==null;){if(N.callback===null)r(s);else if(N.startTime<=q)r(s),N.sortIndex=N.expirationTime,t(u,N);else break;N=n(s)}}function y(q){if(v=!1,d(q),!g)if(n(u)!==null)g=!0,ea(C);else{var N=n(s);N!==null&&ta(y,N.startTime-q)}}function C(q,N){g=!1,v&&(v=!1,f(T),T=-1),w=!0;var z=h;try{for(d(N),m=n(u);m!==null&&(!(m.expirationTime>N)||q&&!_e());){var ee=m.callback;if(typeof ee=="function"){m.callback=null,h=m.priorityLevel;var ae=ee(m.expirationTime<=N);N=e.unstable_now(),typeof ae=="function"?m.callback=ae:m===n(u)&&r(u),d(N)}else r(u);m=n(u)}if(m!==null)var Wr=!0;else{var Wt=n(s);Wt!==null&&ta(y,Wt.startTime-N),Wr=!1}return Wr}finally{m=null,h=z,w=!1}}var E=!1,S=null,T=-1,H=5,L=-1;function _e(){return!(e.unstable_now()-L<H)}function St(){if(S!==null){var q=e.unstable_now();L=q;var N=!0;try{N=S(!0,q)}finally{N?Bt():(E=!1,S=null)}}else E=!1}var Bt;if(typeof c=="function")Bt=function(){c(St)};else if(typeof MessageChannel<"u"){var bn=new MessageChannel,Jo=bn.port2;bn.port1.onmessage=St,Bt=function(){Jo.postMessage(null)}}else Bt=function(){O(St,0)};function ea(q){S=q,E||(E=!0,Bt())}function ta(q,N){T=O(function(){q(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(q){q.callback=null},e.unstable_continueExecution=function(){g||w||(g=!0,ea(C))},e.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<q?Math.floor(1e3/q):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(q){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var z=h;h=N;try{return q()}finally{h=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(q,N){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var z=h;h=q;try{return N()}finally{h=z}},e.unstable_scheduleCallback=function(q,N,z){var ee=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ee+z:ee):z=ee,q){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=z+ae,q={id:p++,callback:N,priorityLevel:q,startTime:z,expirationTime:ae,sortIndex:-1},z>ee?(q.sortIndex=z,t(s,q),n(u)===null&&q===n(s)&&(v?(f(T),T=-1):v=!0,ta(y,z-ee))):(q.sortIndex=ae,t(u,q),g||w||(g=!0,ea(C))),q},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(q){var N=h;return function(){var z=h;h=N;try{return q.apply(this,arguments)}finally{h=z}}}})(Qc);Vc.exports=Qc;var vm=Vc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yc=$,Me=vm;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xc=new Set,fr={};function ln(e,t){On(e,t),On(e+"Capture",t)}function On(e,t){for(fr[e]=t,e=0;e<t.length;e++)Xc.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ia=Object.prototype.hasOwnProperty,ym=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,es={},ts={};function gm(e){return Ia.call(ts,e)?!0:Ia.call(es,e)?!1:ym.test(e)?ts[e]=!0:(es[e]=!0,!1)}function wm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sm(e,t,n,r){if(t===null||typeof t>"u"||wm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var Al=/[\-:]([a-z])/g;function Hl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Al,Hl);me[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Al,Hl);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Al,Hl);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function bl(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sm(t,n,i,r)&&(n=null),r||i===null?gm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=Yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xr=Symbol.for("react.element"),cn=Symbol.for("react.portal"),fn=Symbol.for("react.fragment"),Ul=Symbol.for("react.strict_mode"),Da=Symbol.for("react.profiler"),Kc=Symbol.for("react.provider"),Gc=Symbol.for("react.context"),Bl=Symbol.for("react.forward_ref"),Fa=Symbol.for("react.suspense"),Aa=Symbol.for("react.suspense_list"),Wl=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Zc=Symbol.for("react.offscreen"),ns=Symbol.iterator;function Un(e){return e===null||typeof e!="object"?null:(e=ns&&e[ns]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,ia;function Zn(e){if(ia===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ia=t&&t[1]||""}return`
`+ia+e}var oa=!1;function aa(e,t){if(!e||oa)return"";oa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{oa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zn(e):""}function xm(e){switch(e.tag){case 5:return Zn(e.type);case 16:return Zn("Lazy");case 13:return Zn("Suspense");case 19:return Zn("SuspenseList");case 0:case 2:case 15:return e=aa(e.type,!1),e;case 11:return e=aa(e.type.render,!1),e;case 1:return e=aa(e.type,!0),e;default:return""}}function Ha(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fn:return"Fragment";case cn:return"Portal";case Da:return"Profiler";case Ul:return"StrictMode";case Fa:return"Suspense";case Aa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gc:return(e.displayName||"Context")+".Consumer";case Kc:return(e._context.displayName||"Context")+".Provider";case Bl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wl:return t=e.displayName||null,t!==null?t:Ha(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return Ha(e(t))}catch{}}return null}function km(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ha(t);case 8:return t===Ul?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Em(e){var t=Jc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kr(e){e._valueTracker||(e._valueTracker=Em(e))}function ef(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Jc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ba(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function rs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tf(e,t){t=t.checked,t!=null&&bl(e,"checked",t,!1)}function Ua(e,t){tf(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ba(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ba(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function is(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ba(e,t,n){(t!=="number"||ji(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jn=Array.isArray;function kn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Wa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function os(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Jn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function nf(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function as(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function rf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Va(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?rf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gr,of=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gr=Gr||document.createElement("div"),Gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function dr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_m=["Webkit","ms","Moz","O"];Object.keys(nr).forEach(function(e){_m.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),nr[t]=nr[e]})});function af(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||nr.hasOwnProperty(e)&&nr[e]?(""+t).trim():t+"px"}function lf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=af(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Cm=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qa(e,t){if(t){if(Cm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Ya(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xa=null;function Vl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ka=null,En=null,_n=null;function ls(e){if(e=Mr(e)){if(typeof Ka!="function")throw Error(k(280));var t=e.stateNode;t&&(t=fo(t),Ka(e.stateNode,e.type,t))}}function uf(e){En?_n?_n.push(e):_n=[e]:En=e}function sf(){if(En){var e=En,t=_n;if(_n=En=null,ls(e),t)for(e=0;e<t.length;e++)ls(t[e])}}function cf(e,t){return e(t)}function ff(){}var la=!1;function df(e,t,n){if(la)return e(t,n);la=!0;try{return cf(e,t,n)}finally{la=!1,(En!==null||_n!==null)&&(ff(),sf())}}function pr(e,t){var n=e.stateNode;if(n===null)return null;var r=fo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Ga=!1;if(ht)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){Ga=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{Ga=!1}function Pm(e,t,n,r,i,o,a,l,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(p){this.onError(p)}}var rr=!1,Mi=null,Ri=!1,Za=null,qm={onError:function(e){rr=!0,Mi=e}};function Tm(e,t,n,r,i,o,a,l,u){rr=!1,Mi=null,Pm.apply(qm,arguments)}function Om(e,t,n,r,i,o,a,l,u){if(Tm.apply(this,arguments),rr){if(rr){var s=Mi;rr=!1,Mi=null}else throw Error(k(198));Ri||(Ri=!0,Za=s)}}function un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function us(e){if(un(e)!==e)throw Error(k(188))}function Nm(e){var t=e.alternate;if(!t){if(t=un(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return us(i),e;if(o===r)return us(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function mf(e){return e=Nm(e),e!==null?hf(e):null}function hf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hf(e);if(t!==null)return t;e=e.sibling}return null}var vf=Me.unstable_scheduleCallback,ss=Me.unstable_cancelCallback,Lm=Me.unstable_shouldYield,zm=Me.unstable_requestPaint,te=Me.unstable_now,$m=Me.unstable_getCurrentPriorityLevel,Ql=Me.unstable_ImmediatePriority,yf=Me.unstable_UserBlockingPriority,Ii=Me.unstable_NormalPriority,jm=Me.unstable_LowPriority,gf=Me.unstable_IdlePriority,lo=null,ot=null;function Mm(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(lo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:Dm,Rm=Math.log,Im=Math.LN2;function Dm(e){return e>>>=0,e===0?32:31-(Rm(e)/Im|0)|0}var Zr=64,Jr=4194304;function er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Di(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=er(l):(o&=a,o!==0&&(r=er(o)))}else a=n&~i,a!==0?r=er(a):o!==0&&(r=er(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),i=1<<n,r|=e[n],t&=~i;return r}function Fm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Am(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ke(o),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=Fm(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}function Ja(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wf(){var e=Zr;return Zr<<=1,!(Zr&4194240)&&(Zr=64),e}function ua(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $r(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function Hm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ke(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Yl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function Sf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xf,Xl,kf,Ef,_f,el=!1,ei=[],Nt=null,Lt=null,zt=null,mr=new Map,hr=new Map,Pt=[],bm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cs(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(t.pointerId)}}function Wn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Mr(t),t!==null&&Xl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Um(e,t,n,r,i){switch(t){case"focusin":return Nt=Wn(Nt,e,t,n,r,i),!0;case"dragenter":return Lt=Wn(Lt,e,t,n,r,i),!0;case"mouseover":return zt=Wn(zt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return mr.set(o,Wn(mr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,hr.set(o,Wn(hr.get(o)||null,e,t,n,r,i)),!0}return!1}function Cf(e){var t=Kt(e.target);if(t!==null){var n=un(t);if(n!==null){if(t=n.tag,t===13){if(t=pf(n),t!==null){e.blockedOn=t,_f(e.priority,function(){kf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=tl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xa=r,n.target.dispatchEvent(r),Xa=null}else return t=Mr(n),t!==null&&Xl(t),e.blockedOn=n,!1;t.shift()}return!0}function fs(e,t,n){xi(e)&&n.delete(t)}function Bm(){el=!1,Nt!==null&&xi(Nt)&&(Nt=null),Lt!==null&&xi(Lt)&&(Lt=null),zt!==null&&xi(zt)&&(zt=null),mr.forEach(fs),hr.forEach(fs)}function Vn(e,t){e.blockedOn===t&&(e.blockedOn=null,el||(el=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,Bm)))}function vr(e){function t(i){return Vn(i,e)}if(0<ei.length){Vn(ei[0],e);for(var n=1;n<ei.length;n++){var r=ei[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nt!==null&&Vn(Nt,e),Lt!==null&&Vn(Lt,e),zt!==null&&Vn(zt,e),mr.forEach(t),hr.forEach(t),n=0;n<Pt.length;n++)r=Pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)Cf(n),n.blockedOn===null&&Pt.shift()}var Cn=wt.ReactCurrentBatchConfig,Fi=!0;function Wm(e,t,n,r){var i=D,o=Cn.transition;Cn.transition=null;try{D=1,Kl(e,t,n,r)}finally{D=i,Cn.transition=o}}function Vm(e,t,n,r){var i=D,o=Cn.transition;Cn.transition=null;try{D=4,Kl(e,t,n,r)}finally{D=i,Cn.transition=o}}function Kl(e,t,n,r){if(Fi){var i=tl(e,t,n,r);if(i===null)ga(e,t,r,Ai,n),cs(e,r);else if(Um(i,e,t,n,r))r.stopPropagation();else if(cs(e,r),t&4&&-1<bm.indexOf(e)){for(;i!==null;){var o=Mr(i);if(o!==null&&xf(o),o=tl(e,t,n,r),o===null&&ga(e,t,r,Ai,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ga(e,t,r,null,n)}}var Ai=null;function tl(e,t,n,r){if(Ai=null,e=Vl(r),e=Kt(e),e!==null)if(t=un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=pf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ai=e,null}function Pf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($m()){case Ql:return 1;case yf:return 4;case Ii:case jm:return 16;case gf:return 536870912;default:return 16}default:return 16}}var Tt=null,Gl=null,ki=null;function qf(){if(ki)return ki;var e,t=Gl,n=t.length,r,i="value"in Tt?Tt.value:Tt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return ki=i.slice(e,1<r?1-r:void 0)}function Ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function ds(){return!1}function Ie(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ti:ds,this.isPropagationStopped=ds,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=Ie(Dn),jr=G({},Dn,{view:0,detail:0}),Qm=Ie(jr),sa,ca,Qn,uo=G({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qn&&(Qn&&e.type==="mousemove"?(sa=e.screenX-Qn.screenX,ca=e.screenY-Qn.screenY):ca=sa=0,Qn=e),sa)},movementY:function(e){return"movementY"in e?e.movementY:ca}}),ps=Ie(uo),Ym=G({},uo,{dataTransfer:0}),Xm=Ie(Ym),Km=G({},jr,{relatedTarget:0}),fa=Ie(Km),Gm=G({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),Zm=Ie(Gm),Jm=G({},Dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),e0=Ie(Jm),t0=G({},Dn,{data:0}),ms=Ie(t0),n0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=i0[e])?!!t[e]:!1}function Jl(){return o0}var a0=G({},jr,{key:function(e){if(e.key){var t=n0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?r0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jl,charCode:function(e){return e.type==="keypress"?Ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),l0=Ie(a0),u0=G({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hs=Ie(u0),s0=G({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jl}),c0=Ie(s0),f0=G({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),d0=Ie(f0),p0=G({},uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),m0=Ie(p0),h0=[9,13,27,32],eu=ht&&"CompositionEvent"in window,ir=null;ht&&"documentMode"in document&&(ir=document.documentMode);var v0=ht&&"TextEvent"in window&&!ir,Tf=ht&&(!eu||ir&&8<ir&&11>=ir),vs=String.fromCharCode(32),ys=!1;function Of(e,t){switch(e){case"keyup":return h0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dn=!1;function y0(e,t){switch(e){case"compositionend":return Nf(t);case"keypress":return t.which!==32?null:(ys=!0,vs);case"textInput":return e=t.data,e===vs&&ys?null:e;default:return null}}function g0(e,t){if(dn)return e==="compositionend"||!eu&&Of(e,t)?(e=qf(),ki=Gl=Tt=null,dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tf&&t.locale!=="ko"?null:t.data;default:return null}}var w0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!w0[e.type]:t==="textarea"}function Lf(e,t,n,r){uf(r),t=Hi(t,"onChange"),0<t.length&&(n=new Zl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var or=null,yr=null;function S0(e){bf(e,0)}function so(e){var t=hn(e);if(ef(t))return e}function x0(e,t){if(e==="change")return t}var zf=!1;if(ht){var da;if(ht){var pa="oninput"in document;if(!pa){var ws=document.createElement("div");ws.setAttribute("oninput","return;"),pa=typeof ws.oninput=="function"}da=pa}else da=!1;zf=da&&(!document.documentMode||9<document.documentMode)}function Ss(){or&&(or.detachEvent("onpropertychange",$f),yr=or=null)}function $f(e){if(e.propertyName==="value"&&so(yr)){var t=[];Lf(t,yr,e,Vl(e)),df(S0,t)}}function k0(e,t,n){e==="focusin"?(Ss(),or=t,yr=n,or.attachEvent("onpropertychange",$f)):e==="focusout"&&Ss()}function E0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return so(yr)}function _0(e,t){if(e==="click")return so(t)}function C0(e,t){if(e==="input"||e==="change")return so(t)}function P0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:P0;function gr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ia.call(t,i)||!Ze(e[i],t[i]))return!1}return!0}function xs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ks(e,t){var n=xs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xs(n)}}function jf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mf(){for(var e=window,t=ji();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ji(e.document)}return t}function tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function q0(e){var t=Mf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&jf(n.ownerDocument.documentElement,n)){if(r!==null&&tu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ks(n,o);var a=ks(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var T0=ht&&"documentMode"in document&&11>=document.documentMode,pn=null,nl=null,ar=null,rl=!1;function Es(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rl||pn==null||pn!==ji(r)||(r=pn,"selectionStart"in r&&tu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ar&&gr(ar,r)||(ar=r,r=Hi(nl,"onSelect"),0<r.length&&(t=new Zl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pn)))}function ni(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mn={animationend:ni("Animation","AnimationEnd"),animationiteration:ni("Animation","AnimationIteration"),animationstart:ni("Animation","AnimationStart"),transitionend:ni("Transition","TransitionEnd")},ma={},Rf={};ht&&(Rf=document.createElement("div").style,"AnimationEvent"in window||(delete mn.animationend.animation,delete mn.animationiteration.animation,delete mn.animationstart.animation),"TransitionEvent"in window||delete mn.transitionend.transition);function co(e){if(ma[e])return ma[e];if(!mn[e])return e;var t=mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rf)return ma[e]=t[n];return e}var If=co("animationend"),Df=co("animationiteration"),Ff=co("animationstart"),Af=co("transitionend"),Hf=new Map,_s="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){Hf.set(e,t),ln(t,[e])}for(var ha=0;ha<_s.length;ha++){var va=_s[ha],O0=va.toLowerCase(),N0=va[0].toUpperCase()+va.slice(1);Ht(O0,"on"+N0)}Ht(If,"onAnimationEnd");Ht(Df,"onAnimationIteration");Ht(Ff,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(Af,"onTransitionEnd");On("onMouseEnter",["mouseout","mouseover"]);On("onMouseLeave",["mouseout","mouseover"]);On("onPointerEnter",["pointerout","pointerover"]);On("onPointerLeave",["pointerout","pointerover"]);ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L0=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function Cs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Om(r,t,void 0,e),e.currentTarget=null}function bf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,s=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;Cs(i,l,s),o=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,s=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;Cs(i,l,s),o=u}}}if(Ri)throw e=Za,Ri=!1,Za=null,e}function U(e,t){var n=t[ul];n===void 0&&(n=t[ul]=new Set);var r=e+"__bubble";n.has(r)||(Uf(t,e,2,!1),n.add(r))}function ya(e,t,n){var r=0;t&&(r|=4),Uf(n,e,r,t)}var ri="_reactListening"+Math.random().toString(36).slice(2);function wr(e){if(!e[ri]){e[ri]=!0,Xc.forEach(function(n){n!=="selectionchange"&&(L0.has(n)||ya(n,!1,e),ya(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ri]||(t[ri]=!0,ya("selectionchange",!1,t))}}function Uf(e,t,n,r){switch(Pf(t)){case 1:var i=Wm;break;case 4:i=Vm;break;default:i=Kl}n=i.bind(null,t,n,e),i=void 0,!Ga||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ga(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Kt(l),a===null)return;if(u=a.tag,u===5||u===6){r=o=a;continue e}l=l.parentNode}}r=r.return}df(function(){var s=o,p=Vl(n),m=[];e:{var h=Hf.get(e);if(h!==void 0){var w=Zl,g=e;switch(e){case"keypress":if(Ei(n)===0)break e;case"keydown":case"keyup":w=l0;break;case"focusin":g="focus",w=fa;break;case"focusout":g="blur",w=fa;break;case"beforeblur":case"afterblur":w=fa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Xm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=c0;break;case If:case Df:case Ff:w=Zm;break;case Af:w=d0;break;case"scroll":w=Qm;break;case"wheel":w=m0;break;case"copy":case"cut":case"paste":w=e0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=hs}var v=(t&4)!==0,O=!v&&e==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var c=s,d;c!==null;){d=c;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,f!==null&&(y=pr(c,f),y!=null&&v.push(Sr(c,y,d)))),O)break;c=c.return}0<v.length&&(h=new w(h,g,null,n,p),m.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==Xa&&(g=n.relatedTarget||n.fromElement)&&(Kt(g)||g[vt]))break e;if((w||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,w?(g=n.relatedTarget||n.toElement,w=s,g=g?Kt(g):null,g!==null&&(O=un(g),g!==O||g.tag!==5&&g.tag!==6)&&(g=null)):(w=null,g=s),w!==g)){if(v=ps,y="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=hs,y="onPointerLeave",f="onPointerEnter",c="pointer"),O=w==null?h:hn(w),d=g==null?h:hn(g),h=new v(y,c+"leave",w,n,p),h.target=O,h.relatedTarget=d,y=null,Kt(p)===s&&(v=new v(f,c+"enter",g,n,p),v.target=d,v.relatedTarget=O,y=v),O=y,w&&g)t:{for(v=w,f=g,c=0,d=v;d;d=sn(d))c++;for(d=0,y=f;y;y=sn(y))d++;for(;0<c-d;)v=sn(v),c--;for(;0<d-c;)f=sn(f),d--;for(;c--;){if(v===f||f!==null&&v===f.alternate)break t;v=sn(v),f=sn(f)}v=null}else v=null;w!==null&&Ps(m,h,w,v,!1),g!==null&&O!==null&&Ps(m,O,g,v,!0)}}e:{if(h=s?hn(s):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var C=x0;else if(gs(h))if(zf)C=C0;else{C=E0;var E=k0}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=_0);if(C&&(C=C(e,s))){Lf(m,C,n,p);break e}E&&E(e,h,s),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Ba(h,"number",h.value)}switch(E=s?hn(s):window,e){case"focusin":(gs(E)||E.contentEditable==="true")&&(pn=E,nl=s,ar=null);break;case"focusout":ar=nl=pn=null;break;case"mousedown":rl=!0;break;case"contextmenu":case"mouseup":case"dragend":rl=!1,Es(m,n,p);break;case"selectionchange":if(T0)break;case"keydown":case"keyup":Es(m,n,p)}var S;if(eu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else dn?Of(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Tf&&n.locale!=="ko"&&(dn||T!=="onCompositionStart"?T==="onCompositionEnd"&&dn&&(S=qf()):(Tt=p,Gl="value"in Tt?Tt.value:Tt.textContent,dn=!0)),E=Hi(s,T),0<E.length&&(T=new ms(T,e,null,n,p),m.push({event:T,listeners:E}),S?T.data=S:(S=Nf(n),S!==null&&(T.data=S)))),(S=v0?y0(e,n):g0(e,n))&&(s=Hi(s,"onBeforeInput"),0<s.length&&(p=new ms("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:s}),p.data=S))}bf(m,t)})}function Sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=pr(e,n),o!=null&&r.unshift(Sr(e,o,i)),o=pr(e,t),o!=null&&r.push(Sr(e,o,i))),e=e.return}return r}function sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ps(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,s=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&s!==null&&(l=s,i?(u=pr(n,o),u!=null&&a.unshift(Sr(n,u,l))):i||(u=pr(n,o),u!=null&&a.push(Sr(n,u,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var z0=/\r\n?/g,$0=/\u0000|\uFFFD/g;function qs(e){return(typeof e=="string"?e:""+e).replace(z0,`
`).replace($0,"")}function ii(e,t,n){if(t=qs(t),qs(e)!==t&&n)throw Error(k(425))}function bi(){}var il=null,ol=null;function al(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ll=typeof setTimeout=="function"?setTimeout:void 0,j0=typeof clearTimeout=="function"?clearTimeout:void 0,Ts=typeof Promise=="function"?Promise:void 0,M0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ts<"u"?function(e){return Ts.resolve(null).then(e).catch(R0)}:ll;function R0(e){setTimeout(function(){throw e})}function wa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),vr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);vr(t)}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Os(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fn=Math.random().toString(36).slice(2),it="__reactFiber$"+Fn,xr="__reactProps$"+Fn,vt="__reactContainer$"+Fn,ul="__reactEvents$"+Fn,I0="__reactListeners$"+Fn,D0="__reactHandles$"+Fn;function Kt(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Os(e);e!==null;){if(n=e[it])return n;e=Os(e)}return t}e=n,n=e.parentNode}return null}function Mr(e){return e=e[it]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function fo(e){return e[xr]||null}var sl=[],vn=-1;function bt(e){return{current:e}}function B(e){0>vn||(e.current=sl[vn],sl[vn]=null,vn--)}function b(e,t){vn++,sl[vn]=e.current,e.current=t}var At={},we=bt(At),qe=bt(!1),tn=At;function Nn(e,t){var n=e.type.contextTypes;if(!n)return At;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Te(e){return e=e.childContextTypes,e!=null}function Ui(){B(qe),B(we)}function Ns(e,t,n){if(we.current!==At)throw Error(k(168));b(we,t),b(qe,n)}function Bf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,km(e)||"Unknown",i));return G({},n,r)}function Bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,tn=we.current,b(we,e),b(qe,qe.current),!0}function Ls(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Bf(e,t,tn),r.__reactInternalMemoizedMergedChildContext=e,B(qe),B(we),b(we,e)):B(qe),b(qe,n)}var ct=null,po=!1,Sa=!1;function Wf(e){ct===null?ct=[e]:ct.push(e)}function F0(e){po=!0,Wf(e)}function Ut(){if(!Sa&&ct!==null){Sa=!0;var e=0,t=D;try{var n=ct;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,po=!1}catch(i){throw ct!==null&&(ct=ct.slice(e+1)),vf(Ql,Ut),i}finally{D=t,Sa=!1}}return null}var yn=[],gn=0,Wi=null,Vi=0,Fe=[],Ae=0,nn=null,ft=1,dt="";function Yt(e,t){yn[gn++]=Vi,yn[gn++]=Wi,Wi=e,Vi=t}function Vf(e,t,n){Fe[Ae++]=ft,Fe[Ae++]=dt,Fe[Ae++]=nn,nn=e;var r=ft;e=dt;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var o=32-Ke(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,ft=1<<32-Ke(t)+i|n<<i|r,dt=o+e}else ft=1<<o|n<<i|r,dt=e}function nu(e){e.return!==null&&(Yt(e,1),Vf(e,1,0))}function ru(e){for(;e===Wi;)Wi=yn[--gn],yn[gn]=null,Vi=yn[--gn],yn[gn]=null;for(;e===nn;)nn=Fe[--Ae],Fe[Ae]=null,dt=Fe[--Ae],Fe[Ae]=null,ft=Fe[--Ae],Fe[Ae]=null}var $e=null,ze=null,V=!1,Xe=null;function Qf(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,ze=$t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nn!==null?{id:ft,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,ze=null,!0):!1;default:return!1}}function cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fl(e){if(V){var t=ze;if(t){var n=t;if(!zs(e,t)){if(cl(e))throw Error(k(418));t=$t(n.nextSibling);var r=$e;t&&zs(e,t)?Qf(r,n):(e.flags=e.flags&-4097|2,V=!1,$e=e)}}else{if(cl(e))throw Error(k(418));e.flags=e.flags&-4097|2,V=!1,$e=e}}}function $s(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function oi(e){if(e!==$e)return!1;if(!V)return $s(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!al(e.type,e.memoizedProps)),t&&(t=ze)){if(cl(e))throw Yf(),Error(k(418));for(;t;)Qf(e,t),t=$t(t.nextSibling)}if($s(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=$t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=$e?$t(e.stateNode.nextSibling):null;return!0}function Yf(){for(var e=ze;e;)e=$t(e.nextSibling)}function Ln(){ze=$e=null,V=!1}function iu(e){Xe===null?Xe=[e]:Xe.push(e)}var A0=wt.ReactCurrentBatchConfig;function Qe(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Qi=bt(null),Yi=null,wn=null,ou=null;function au(){ou=wn=Yi=null}function lu(e){var t=Qi.current;B(Qi),e._currentValue=t}function dl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pn(e,t){Yi=e,ou=wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(ou!==e)if(e={context:e,memoizedValue:t,next:null},wn===null){if(Yi===null)throw Error(k(308));wn=e,Yi.dependencies={lanes:0,firstContext:e}}else wn=wn.next=e;return t}var Gt=null;function uu(e){Gt===null?Gt=[e]:Gt.push(e)}function Xf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,uu(t)):(n.next=i.next,i.next=n),t.interleaved=n,yt(e,r)}function yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ct=!1;function su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,yt(e,n)}return i=r.interleaved,i===null?(t.next=t,uu(r)):(t.next=i.next,i.next=t),r.interleaved=t,yt(e,n)}function _i(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yl(e,n)}}function js(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xi(e,t,n,r){var i=e.updateQueue;Ct=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,s=u.next;u.next=null,a===null?o=s:a.next=s,a=u;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=s:l.next=s,p.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;a=0,p=s=u=null,l=o;do{var h=l.lane,w=l.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(h=t,w=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){m=g.call(w,m,h);break e}m=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(w,m,h):g,h==null)break e;m=G({},m,h);break e;case 2:Ct=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else w={eventTime:w,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(s=p=w,u=m):p=p.next=w,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(p===null&&(u=m),i.baseState=u,i.firstBaseUpdate=s,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);on|=a,e.lanes=a,e.memoizedState=m}}function Ms(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Gf=new Yc.Component().refs;function pl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var mo={isMounted:function(e){return(e=e._reactInternals)?un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),i=Rt(e),o=mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=jt(e,o,i),t!==null&&(Ge(t,e,i,r),_i(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),i=Rt(e),o=mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=jt(e,o,i),t!==null&&(Ge(t,e,i,r),_i(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=Rt(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=jt(e,i,r),t!==null&&(Ge(t,e,r,n),_i(t,e,r))}};function Rs(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!gr(n,r)||!gr(i,o):!0}function Zf(e,t,n){var r=!1,i=At,o=t.contextType;return typeof o=="object"&&o!==null?o=Ue(o):(i=Te(t)?tn:we.current,r=t.contextTypes,o=(r=r!=null)?Nn(e,i):At),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=mo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Is(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&mo.enqueueReplaceState(t,t.state,null)}function ml(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Gf,su(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ue(o):(o=Te(t)?tn:we.current,i.context=Nn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(pl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&mo.enqueueReplaceState(i,i.state,null),Xi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Gf&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ai(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ds(e){var t=e._init;return t(e._payload)}function Jf(e){function t(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=It(f,c),f.index=0,f.sibling=null,f}function o(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,c,d,y){return c===null||c.tag!==6?(c=qa(d,f.mode,y),c.return=f,c):(c=i(c,d),c.return=f,c)}function u(f,c,d,y){var C=d.type;return C===fn?p(f,c,d.props.children,y,d.key):c!==null&&(c.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_t&&Ds(C)===c.type)?(y=i(c,d.props),y.ref=Yn(f,c,d),y.return=f,y):(y=Ni(d.type,d.key,d.props,null,f.mode,y),y.ref=Yn(f,c,d),y.return=f,y)}function s(f,c,d,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=Ta(d,f.mode,y),c.return=f,c):(c=i(c,d.children||[]),c.return=f,c)}function p(f,c,d,y,C){return c===null||c.tag!==7?(c=en(d,f.mode,y,C),c.return=f,c):(c=i(c,d),c.return=f,c)}function m(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=qa(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Xr:return d=Ni(c.type,c.key,c.props,null,f.mode,d),d.ref=Yn(f,null,c),d.return=f,d;case cn:return c=Ta(c,f.mode,d),c.return=f,c;case _t:var y=c._init;return m(f,y(c._payload),d)}if(Jn(c)||Un(c))return c=en(c,f.mode,d,null),c.return=f,c;ai(f,c)}return null}function h(f,c,d,y){var C=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return C!==null?null:l(f,c,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Xr:return d.key===C?u(f,c,d,y):null;case cn:return d.key===C?s(f,c,d,y):null;case _t:return C=d._init,h(f,c,C(d._payload),y)}if(Jn(d)||Un(d))return C!==null?null:p(f,c,d,y,null);ai(f,d)}return null}function w(f,c,d,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(d)||null,l(c,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Xr:return f=f.get(y.key===null?d:y.key)||null,u(c,f,y,C);case cn:return f=f.get(y.key===null?d:y.key)||null,s(c,f,y,C);case _t:var E=y._init;return w(f,c,d,E(y._payload),C)}if(Jn(y)||Un(y))return f=f.get(d)||null,p(c,f,y,C,null);ai(c,y)}return null}function g(f,c,d,y){for(var C=null,E=null,S=c,T=c=0,H=null;S!==null&&T<d.length;T++){S.index>T?(H=S,S=null):H=S.sibling;var L=h(f,S,d[T],y);if(L===null){S===null&&(S=H);break}e&&S&&L.alternate===null&&t(f,S),c=o(L,c,T),E===null?C=L:E.sibling=L,E=L,S=H}if(T===d.length)return n(f,S),V&&Yt(f,T),C;if(S===null){for(;T<d.length;T++)S=m(f,d[T],y),S!==null&&(c=o(S,c,T),E===null?C=S:E.sibling=S,E=S);return V&&Yt(f,T),C}for(S=r(f,S);T<d.length;T++)H=w(S,f,T,d[T],y),H!==null&&(e&&H.alternate!==null&&S.delete(H.key===null?T:H.key),c=o(H,c,T),E===null?C=H:E.sibling=H,E=H);return e&&S.forEach(function(_e){return t(f,_e)}),V&&Yt(f,T),C}function v(f,c,d,y){var C=Un(d);if(typeof C!="function")throw Error(k(150));if(d=C.call(d),d==null)throw Error(k(151));for(var E=C=null,S=c,T=c=0,H=null,L=d.next();S!==null&&!L.done;T++,L=d.next()){S.index>T?(H=S,S=null):H=S.sibling;var _e=h(f,S,L.value,y);if(_e===null){S===null&&(S=H);break}e&&S&&_e.alternate===null&&t(f,S),c=o(_e,c,T),E===null?C=_e:E.sibling=_e,E=_e,S=H}if(L.done)return n(f,S),V&&Yt(f,T),C;if(S===null){for(;!L.done;T++,L=d.next())L=m(f,L.value,y),L!==null&&(c=o(L,c,T),E===null?C=L:E.sibling=L,E=L);return V&&Yt(f,T),C}for(S=r(f,S);!L.done;T++,L=d.next())L=w(S,f,T,L.value,y),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?T:L.key),c=o(L,c,T),E===null?C=L:E.sibling=L,E=L);return e&&S.forEach(function(St){return t(f,St)}),V&&Yt(f,T),C}function O(f,c,d,y){if(typeof d=="object"&&d!==null&&d.type===fn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Xr:e:{for(var C=d.key,E=c;E!==null;){if(E.key===C){if(C=d.type,C===fn){if(E.tag===7){n(f,E.sibling),c=i(E,d.props.children),c.return=f,f=c;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_t&&Ds(C)===E.type){n(f,E.sibling),c=i(E,d.props),c.ref=Yn(f,E,d),c.return=f,f=c;break e}n(f,E);break}else t(f,E);E=E.sibling}d.type===fn?(c=en(d.props.children,f.mode,y,d.key),c.return=f,f=c):(y=Ni(d.type,d.key,d.props,null,f.mode,y),y.ref=Yn(f,c,d),y.return=f,f=y)}return a(f);case cn:e:{for(E=d.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(f,c.sibling),c=i(c,d.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Ta(d,f.mode,y),c.return=f,f=c}return a(f);case _t:return E=d._init,O(f,c,E(d._payload),y)}if(Jn(d))return g(f,c,d,y);if(Un(d))return v(f,c,d,y);ai(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,d),c.return=f,f=c):(n(f,c),c=qa(d,f.mode,y),c.return=f,f=c),a(f)):n(f,c)}return O}var zn=Jf(!0),ed=Jf(!1),Rr={},at=bt(Rr),kr=bt(Rr),Er=bt(Rr);function Zt(e){if(e===Rr)throw Error(k(174));return e}function cu(e,t){switch(b(Er,t),b(kr,e),b(at,Rr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Va(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Va(t,e)}B(at),b(at,t)}function $n(){B(at),B(kr),B(Er)}function td(e){Zt(Er.current);var t=Zt(at.current),n=Va(t,e.type);t!==n&&(b(kr,e),b(at,n))}function fu(e){kr.current===e&&(B(at),B(kr))}var X=bt(0);function Ki(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xa=[];function du(){for(var e=0;e<xa.length;e++)xa[e]._workInProgressVersionPrimary=null;xa.length=0}var Ci=wt.ReactCurrentDispatcher,ka=wt.ReactCurrentBatchConfig,rn=0,K=null,ie=null,le=null,Gi=!1,lr=!1,_r=0,H0=0;function he(){throw Error(k(321))}function pu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function mu(e,t,n,r,i,o){if(rn=o,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ci.current=e===null||e.memoizedState===null?W0:V0,e=n(r,i),lr){o=0;do{if(lr=!1,_r=0,25<=o)throw Error(k(301));o+=1,le=ie=null,t.updateQueue=null,Ci.current=Q0,e=n(r,i)}while(lr)}if(Ci.current=Zi,t=ie!==null&&ie.next!==null,rn=0,le=ie=K=null,Gi=!1,t)throw Error(k(300));return e}function hu(){var e=_r!==0;return _r=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?K.memoizedState=le=e:le=le.next=e,le}function Be(){if(ie===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=le===null?K.memoizedState:le.next;if(t!==null)le=t,ie=e;else{if(e===null)throw Error(k(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},le===null?K.memoizedState=le=e:le=le.next=e}return le}function Cr(e,t){return typeof t=="function"?t(e):t}function Ea(e){var t=Be(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ie,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,u=null,s=o;do{var p=s.lane;if((rn&p)===p)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var m={lane:p,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(l=u=m,a=r):u=u.next=m,K.lanes|=p,on|=p}s=s.next}while(s!==null&&s!==o);u===null?a=r:u.next=l,Ze(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,K.lanes|=o,on|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _a(e){var t=Be(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Ze(o,t.memoizedState)||(Pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function nd(){}function rd(e,t){var n=K,r=Be(),i=t(),o=!Ze(r.memoizedState,i);if(o&&(r.memoizedState=i,Pe=!0),r=r.queue,vu(ad.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Pr(9,od.bind(null,n,r,i,t),void 0,null),ue===null)throw Error(k(349));rn&30||id(n,t,i)}return i}function id(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function od(e,t,n,r){t.value=n,t.getSnapshot=r,ld(t)&&ud(e)}function ad(e,t,n){return n(function(){ld(t)&&ud(e)})}function ld(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function ud(e){var t=yt(e,1);t!==null&&Ge(t,e,1,-1)}function Fs(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cr,lastRenderedState:e},t.queue=e,e=e.dispatch=B0.bind(null,K,e),[t.memoizedState,e]}function Pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function sd(){return Be().memoizedState}function Pi(e,t,n,r){var i=et();K.flags|=e,i.memoizedState=Pr(1|t,n,void 0,r===void 0?null:r)}function ho(e,t,n,r){var i=Be();r=r===void 0?null:r;var o=void 0;if(ie!==null){var a=ie.memoizedState;if(o=a.destroy,r!==null&&pu(r,a.deps)){i.memoizedState=Pr(t,n,o,r);return}}K.flags|=e,i.memoizedState=Pr(1|t,n,o,r)}function As(e,t){return Pi(8390656,8,e,t)}function vu(e,t){return ho(2048,8,e,t)}function cd(e,t){return ho(4,2,e,t)}function fd(e,t){return ho(4,4,e,t)}function dd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pd(e,t,n){return n=n!=null?n.concat([e]):null,ho(4,4,dd.bind(null,t,e),n)}function yu(){}function md(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hd(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vd(e,t,n){return rn&21?(Ze(n,t)||(n=wf(),K.lanes|=n,on|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function b0(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=ka.transition;ka.transition={};try{e(!1),t()}finally{D=n,ka.transition=r}}function yd(){return Be().memoizedState}function U0(e,t,n){var r=Rt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gd(e))wd(t,n);else if(n=Xf(e,t,n,r),n!==null){var i=xe();Ge(n,e,r,i),Sd(n,t,r)}}function B0(e,t,n){var r=Rt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gd(e))wd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Ze(l,a)){var u=t.interleaved;u===null?(i.next=i,uu(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Xf(e,t,i,r),n!==null&&(i=xe(),Ge(n,e,r,i),Sd(n,t,r))}}function gd(e){var t=e.alternate;return e===K||t!==null&&t===K}function wd(e,t){lr=Gi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yl(e,n)}}var Zi={readContext:Ue,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},W0={readContext:Ue,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:As,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pi(4194308,4,dd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pi(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=U0.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:Fs,useDebugValue:yu,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=Fs(!1),t=e[0];return e=b0.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=et();if(V){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ue===null)throw Error(k(349));rn&30||id(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,As(ad.bind(null,r,o,e),[e]),r.flags|=2048,Pr(9,od.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=et(),t=ue.identifierPrefix;if(V){var n=dt,r=ft;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=H0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},V0={readContext:Ue,useCallback:md,useContext:Ue,useEffect:vu,useImperativeHandle:pd,useInsertionEffect:cd,useLayoutEffect:fd,useMemo:hd,useReducer:Ea,useRef:sd,useState:function(){return Ea(Cr)},useDebugValue:yu,useDeferredValue:function(e){var t=Be();return vd(t,ie.memoizedState,e)},useTransition:function(){var e=Ea(Cr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:nd,useSyncExternalStore:rd,useId:yd,unstable_isNewReconciler:!1},Q0={readContext:Ue,useCallback:md,useContext:Ue,useEffect:vu,useImperativeHandle:pd,useInsertionEffect:cd,useLayoutEffect:fd,useMemo:hd,useReducer:_a,useRef:sd,useState:function(){return _a(Cr)},useDebugValue:yu,useDeferredValue:function(e){var t=Be();return ie===null?t.memoizedState=e:vd(t,ie.memoizedState,e)},useTransition:function(){var e=_a(Cr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:nd,useSyncExternalStore:rd,useId:yd,unstable_isNewReconciler:!1};function jn(e,t){try{var n="",r=t;do n+=xm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ca(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Y0=typeof WeakMap=="function"?WeakMap:Map;function xd(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){eo||(eo=!0,Cl=r),hl(e,t)},n}function kd(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){hl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){hl(e,t),typeof r!="function"&&(Mt===null?Mt=new Set([this]):Mt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Hs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Y0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=uh.bind(null,e,t,n),t.then(e,e))}function bs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Us(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,jt(n,t,1))),n.lanes|=1),e)}var X0=wt.ReactCurrentOwner,Pe=!1;function Se(e,t,n,r){t.child=e===null?ed(t,null,n,r):zn(t,e.child,n,r)}function Bs(e,t,n,r,i){n=n.render;var o=t.ref;return Pn(t,i),r=mu(e,t,n,r,o,i),n=hu(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gt(e,t,i)):(V&&n&&nu(t),t.flags|=1,Se(e,t,r,i),t.child)}function Ws(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Cu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ed(e,t,o,r,i)):(e=Ni(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:gr,n(a,r)&&e.ref===t.ref)return gt(e,t,i)}return t.flags|=1,e=It(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ed(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(gr(o,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,gt(e,t,i)}return vl(e,t,n,r,i)}function _d(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(xn,Le),Le|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,b(xn,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,b(xn,Le),Le|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,b(xn,Le),Le|=r;return Se(e,t,i,n),t.child}function Cd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function vl(e,t,n,r,i){var o=Te(n)?tn:we.current;return o=Nn(t,o),Pn(t,i),n=mu(e,t,n,r,o,i),r=hu(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gt(e,t,i)):(V&&r&&nu(t),t.flags|=1,Se(e,t,n,i),t.child)}function Vs(e,t,n,r,i){if(Te(n)){var o=!0;Bi(t)}else o=!1;if(Pn(t,i),t.stateNode===null)qi(e,t),Zf(t,n,r),ml(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,s=n.contextType;typeof s=="object"&&s!==null?s=Ue(s):(s=Te(n)?tn:we.current,s=Nn(t,s));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==s)&&Is(t,a,r,s),Ct=!1;var h=t.memoizedState;a.state=h,Xi(t,r,a,i),u=t.memoizedState,l!==r||h!==u||qe.current||Ct?(typeof p=="function"&&(pl(t,n,p,r),u=t.memoizedState),(l=Ct||Rs(t,n,l,r,h,u,s))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=s,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Kf(e,t),l=t.memoizedProps,s=t.type===t.elementType?l:Qe(t.type,l),a.props=s,m=t.pendingProps,h=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ue(u):(u=Te(n)?tn:we.current,u=Nn(t,u));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||h!==u)&&Is(t,a,r,u),Ct=!1,h=t.memoizedState,a.state=h,Xi(t,r,a,i);var g=t.memoizedState;l!==m||h!==g||qe.current||Ct?(typeof w=="function"&&(pl(t,n,w,r),g=t.memoizedState),(s=Ct||Rs(t,n,s,r,h,g,u)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=u,r=s):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return yl(e,t,n,r,o,i)}function yl(e,t,n,r,i,o){Cd(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Ls(t,n,!1),gt(e,t,o);r=t.stateNode,X0.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=zn(t,e.child,null,o),t.child=zn(t,null,l,o)):Se(e,t,l,o),t.memoizedState=r.state,i&&Ls(t,n,!0),t.child}function Pd(e){var t=e.stateNode;t.pendingContext?Ns(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ns(e,t.context,!1),cu(e,t.containerInfo)}function Qs(e,t,n,r,i){return Ln(),iu(i),t.flags|=256,Se(e,t,n,r),t.child}var gl={dehydrated:null,treeContext:null,retryLane:0};function wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function qd(e,t,n){var r=t.pendingProps,i=X.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),b(X,i&1),e===null)return fl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=go(a,r,0,null),e=en(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=wl(n),t.memoizedState=gl,e):gu(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return K0(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=It(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=It(l,o):(o=en(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?wl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=gl,r}return o=e.child,e=o.sibling,r=It(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function gu(e,t){return t=go({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function li(e,t,n,r){return r!==null&&iu(r),zn(t,e.child,null,n),e=gu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function K0(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Ca(Error(k(422))),li(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=go({mode:"visible",children:r.children},i,0,null),o=en(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&zn(t,e.child,null,a),t.child.memoizedState=wl(a),t.memoizedState=gl,o);if(!(t.mode&1))return li(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(k(419)),r=Ca(o,r,void 0),li(e,t,a,r)}if(l=(a&e.childLanes)!==0,Pe||l){if(r=ue,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,yt(e,i),Ge(r,e,i,-1))}return _u(),r=Ca(Error(k(421))),li(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=sh.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=$t(i.nextSibling),$e=t,V=!0,Xe=null,e!==null&&(Fe[Ae++]=ft,Fe[Ae++]=dt,Fe[Ae++]=nn,ft=e.id,dt=e.overflow,nn=t),t=gu(t,r.children),t.flags|=4096,t)}function Ys(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),dl(e.return,t,n)}function Pa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Td(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Se(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ys(e,n,t);else if(e.tag===19)Ys(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(b(X,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ki(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Pa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ki(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Pa(t,!0,n,null,o);break;case"together":Pa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),on|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=It(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=It(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function G0(e,t,n){switch(t.tag){case 3:Pd(t),Ln();break;case 5:td(t);break;case 1:Te(t.type)&&Bi(t);break;case 4:cu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;b(Qi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(b(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?qd(e,t,n):(b(X,X.current&1),e=gt(e,t,n),e!==null?e.sibling:null);b(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Td(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),b(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,_d(e,t,n)}return gt(e,t,n)}var Od,Sl,Nd,Ld;Od=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sl=function(){};Nd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Zt(at.current);var o=null;switch(n){case"input":i=ba(e,i),r=ba(e,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=Wa(e,i),r=Wa(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=bi)}Qa(n,r);var a;n=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var l=i[s];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fr.hasOwnProperty(s)?o||(o=[]):(o=o||[]).push(s,null));for(s in r){var u=r[s];if(l=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&u!==l&&(u!=null||l!=null))if(s==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(s,n)),n=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(fr.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&U("scroll",e),o||l===u||(o=[])):(o=o||[]).push(s,u))}n&&(o=o||[]).push("style",n);var s=o;(t.updateQueue=s)&&(t.flags|=4)}};Ld=function(e,t,n,r){n!==r&&(t.flags|=4)};function Xn(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Z0(e,t,n){var r=t.pendingProps;switch(ru(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Te(t.type)&&Ui(),ve(t),null;case 3:return r=t.stateNode,$n(),B(qe),B(we),du(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(oi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(Tl(Xe),Xe=null))),Sl(e,t),ve(t),null;case 5:fu(t);var i=Zt(Er.current);if(n=t.type,e!==null&&t.stateNode!=null)Nd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ve(t),null}if(e=Zt(at.current),oi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[it]=t,r[xr]=o,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<tr.length;i++)U(tr[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":rs(r,o),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},U("invalid",r);break;case"textarea":os(r,o),U("invalid",r)}Qa(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&ii(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ii(r.textContent,l,e),i=["children",""+l]):fr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&U("scroll",r)}switch(n){case"input":Kr(r),is(r,o,!0);break;case"textarea":Kr(r),as(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=bi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[it]=t,e[xr]=r,Od(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ya(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<tr.length;i++)U(tr[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":rs(e,r),i=ba(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),U("invalid",e);break;case"textarea":os(e,r),i=Wa(e,r),U("invalid",e);break;default:i=r}Qa(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?lf(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&of(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&dr(e,u):typeof u=="number"&&dr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(fr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&U("scroll",e):u!=null&&bl(e,o,u,a))}switch(n){case"input":Kr(e),is(e,r,!1);break;case"textarea":Kr(e),as(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?kn(e,!!r.multiple,o,!1):r.defaultValue!=null&&kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=bi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Ld(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Zt(Er.current),Zt(at.current),oi(t)){if(r=t.stateNode,n=t.memoizedProps,r[it]=t,(o=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:ii(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ii(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=t,t.stateNode=r}return ve(t),null;case 13:if(B(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&ze!==null&&t.mode&1&&!(t.flags&128))Yf(),Ln(),t.flags|=98560,o=!1;else if(o=oi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[it]=t}else Ln(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),o=!1}else Xe!==null&&(Tl(Xe),Xe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?oe===0&&(oe=3):_u())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return $n(),Sl(e,t),e===null&&wr(t.stateNode.containerInfo),ve(t),null;case 10:return lu(t.type._context),ve(t),null;case 17:return Te(t.type)&&Ui(),ve(t),null;case 19:if(B(X),o=t.memoizedState,o===null)return ve(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Xn(o,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ki(e),a!==null){for(t.flags|=128,Xn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return b(X,X.current&1|2),t.child}e=e.sibling}o.tail!==null&&te()>Mn&&(t.flags|=128,r=!0,Xn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ki(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!V)return ve(t),null}else 2*te()-o.renderingStartTime>Mn&&n!==1073741824&&(t.flags|=128,r=!0,Xn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=te(),t.sibling=null,n=X.current,b(X,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Eu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function J0(e,t){switch(ru(t),t.tag){case 1:return Te(t.type)&&Ui(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $n(),B(qe),B(we),du(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fu(t),null;case 13:if(B(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(X),null;case 4:return $n(),null;case 10:return lu(t.type._context),null;case 22:case 23:return Eu(),null;case 24:return null;default:return null}}var ui=!1,ge=!1,eh=typeof WeakSet=="function"?WeakSet:Set,P=null;function Sn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function xl(e,t,n){try{n()}catch(r){J(e,t,r)}}var Xs=!1;function th(e,t){if(il=Fi,e=Mf(),tu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,s=0,p=0,m=e,h=null;t:for(;;){for(var w;m!==n||i!==0&&m.nodeType!==3||(l=a+i),m!==o||r!==0&&m.nodeType!==3||(u=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(w=m.firstChild)!==null;)h=m,m=w;for(;;){if(m===e)break t;if(h===n&&++s===i&&(l=a),h===o&&++p===r&&(u=a),(w=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ol={focusedElem:e,selectionRange:n},Fi=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,O=g.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Qe(t.type,v),O);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){J(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return g=Xs,Xs=!1,g}function ur(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&xl(t,n,o)}i=i.next}while(i!==r)}}function vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function kl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zd(e){var t=e.alternate;t!==null&&(e.alternate=null,zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[xr],delete t[ul],delete t[I0],delete t[D0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $d(e){return e.tag===5||e.tag===3||e.tag===4}function Ks(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function El(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bi));else if(r!==4&&(e=e.child,e!==null))for(El(e,t,n),e=e.sibling;e!==null;)El(e,t,n),e=e.sibling}function _l(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_l(e,t,n),e=e.sibling;e!==null;)_l(e,t,n),e=e.sibling}var fe=null,Ye=!1;function xt(e,t,n){for(n=n.child;n!==null;)jd(e,t,n),n=n.sibling}function jd(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(lo,n)}catch{}switch(n.tag){case 5:ge||Sn(n,t);case 6:var r=fe,i=Ye;fe=null,xt(e,t,n),fe=r,Ye=i,fe!==null&&(Ye?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Ye?(e=fe,n=n.stateNode,e.nodeType===8?wa(e.parentNode,n):e.nodeType===1&&wa(e,n),vr(e)):wa(fe,n.stateNode));break;case 4:r=fe,i=Ye,fe=n.stateNode.containerInfo,Ye=!0,xt(e,t,n),fe=r,Ye=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&xl(n,t,a),i=i.next}while(i!==r)}xt(e,t,n);break;case 1:if(!ge&&(Sn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){J(n,t,l)}xt(e,t,n);break;case 21:xt(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,xt(e,t,n),ge=r):xt(e,t,n);break;default:xt(e,t,n)}}function Gs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new eh),t.forEach(function(r){var i=ch.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ve(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:fe=l.stateNode,Ye=!1;break e;case 3:fe=l.stateNode.containerInfo,Ye=!0;break e;case 4:fe=l.stateNode.containerInfo,Ye=!0;break e}l=l.return}if(fe===null)throw Error(k(160));jd(o,a,i),fe=null,Ye=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(s){J(i,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Md(t,e),t=t.sibling}function Md(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),Je(e),r&4){try{ur(3,e,e.return),vo(3,e)}catch(v){J(e,e.return,v)}try{ur(5,e,e.return)}catch(v){J(e,e.return,v)}}break;case 1:Ve(t,e),Je(e),r&512&&n!==null&&Sn(n,n.return);break;case 5:if(Ve(t,e),Je(e),r&512&&n!==null&&Sn(n,n.return),e.flags&32){var i=e.stateNode;try{dr(i,"")}catch(v){J(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&tf(i,o),Ya(l,a);var s=Ya(l,o);for(a=0;a<u.length;a+=2){var p=u[a],m=u[a+1];p==="style"?lf(i,m):p==="dangerouslySetInnerHTML"?of(i,m):p==="children"?dr(i,m):bl(i,p,m,s)}switch(l){case"input":Ua(i,o);break;case"textarea":nf(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?kn(i,!!o.multiple,w,!1):h!==!!o.multiple&&(o.defaultValue!=null?kn(i,!!o.multiple,o.defaultValue,!0):kn(i,!!o.multiple,o.multiple?[]:"",!1))}i[xr]=o}catch(v){J(e,e.return,v)}}break;case 6:if(Ve(t,e),Je(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){J(e,e.return,v)}}break;case 3:if(Ve(t,e),Je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vr(t.containerInfo)}catch(v){J(e,e.return,v)}break;case 4:Ve(t,e),Je(e);break;case 13:Ve(t,e),Je(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(xu=te())),r&4&&Gs(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(s=ge)||p,Ve(t,e),ge=s):Ve(t,e),Je(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!p&&e.mode&1)for(P=e,p=e.child;p!==null;){for(m=P=p;P!==null;){switch(h=P,w=h.child,h.tag){case 0:case 11:case 14:case 15:ur(4,h,h.return);break;case 1:Sn(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){J(r,n,v)}}break;case 5:Sn(h,h.return);break;case 22:if(h.memoizedState!==null){Js(m);continue}}w!==null?(w.return=h,P=w):Js(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,s?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,u=m.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=af("display",a))}catch(v){J(e,e.return,v)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=s?"":m.memoizedProps}catch(v){J(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ve(t,e),Je(e),r&4&&Gs(e);break;case 21:break;default:Ve(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($d(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(dr(i,""),r.flags&=-33);var o=Ks(e);_l(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Ks(e);El(e,l,a);break;default:throw Error(k(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nh(e,t,n){P=e,Rd(e)}function Rd(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ui;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ge;l=ui;var s=ge;if(ui=a,(ge=u)&&!s)for(P=i;P!==null;)a=P,u=a.child,a.tag===22&&a.memoizedState!==null?ec(i):u!==null?(u.return=a,P=u):ec(i);for(;o!==null;)P=o,Rd(o),o=o.sibling;P=i,ui=l,ge=s}Zs(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):Zs(e)}}function Zs(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||vo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ms(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ms(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var p=s.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&vr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ge||t.flags&512&&kl(t)}catch(h){J(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Js(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function ec(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vo(4,t)}catch(u){J(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){J(t,i,u)}}var o=t.return;try{kl(t)}catch(u){J(t,o,u)}break;case 5:var a=t.return;try{kl(t)}catch(u){J(t,a,u)}}}catch(u){J(t,t.return,u)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var rh=Math.ceil,Ji=wt.ReactCurrentDispatcher,wu=wt.ReactCurrentOwner,be=wt.ReactCurrentBatchConfig,M=0,ue=null,re=null,pe=0,Le=0,xn=bt(0),oe=0,qr=null,on=0,yo=0,Su=0,sr=null,Ce=null,xu=0,Mn=1/0,st=null,eo=!1,Cl=null,Mt=null,si=!1,Ot=null,to=0,cr=0,Pl=null,Ti=-1,Oi=0;function xe(){return M&6?te():Ti!==-1?Ti:Ti=te()}function Rt(e){return e.mode&1?M&2&&pe!==0?pe&-pe:A0.transition!==null?(Oi===0&&(Oi=wf()),Oi):(e=D,e!==0||(e=window.event,e=e===void 0?16:Pf(e.type)),e):1}function Ge(e,t,n,r){if(50<cr)throw cr=0,Pl=null,Error(k(185));$r(e,n,r),(!(M&2)||e!==ue)&&(e===ue&&(!(M&2)&&(yo|=n),oe===4&&qt(e,pe)),Oe(e,r),n===1&&M===0&&!(t.mode&1)&&(Mn=te()+500,po&&Ut()))}function Oe(e,t){var n=e.callbackNode;Am(e,t);var r=Di(e,e===ue?pe:0);if(r===0)n!==null&&ss(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ss(n),t===1)e.tag===0?F0(tc.bind(null,e)):Wf(tc.bind(null,e)),M0(function(){!(M&6)&&Ut()}),n=null;else{switch(Sf(r)){case 1:n=Ql;break;case 4:n=yf;break;case 16:n=Ii;break;case 536870912:n=gf;break;default:n=Ii}n=Bd(n,Id.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Id(e,t){if(Ti=-1,Oi=0,M&6)throw Error(k(327));var n=e.callbackNode;if(qn()&&e.callbackNode!==n)return null;var r=Di(e,e===ue?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=no(e,r);else{t=r;var i=M;M|=2;var o=Fd();(ue!==e||pe!==t)&&(st=null,Mn=te()+500,Jt(e,t));do try{ah();break}catch(l){Dd(e,l)}while(1);au(),Ji.current=o,M=i,re!==null?t=0:(ue=null,pe=0,t=oe)}if(t!==0){if(t===2&&(i=Ja(e),i!==0&&(r=i,t=ql(e,i))),t===1)throw n=qr,Jt(e,0),qt(e,r),Oe(e,te()),n;if(t===6)qt(e,r);else{if(i=e.current.alternate,!(r&30)&&!ih(i)&&(t=no(e,r),t===2&&(o=Ja(e),o!==0&&(r=o,t=ql(e,o))),t===1))throw n=qr,Jt(e,0),qt(e,r),Oe(e,te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Xt(e,Ce,st);break;case 3:if(qt(e,r),(r&130023424)===r&&(t=xu+500-te(),10<t)){if(Di(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ll(Xt.bind(null,e,Ce,st),t);break}Xt(e,Ce,st);break;case 4:if(qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ke(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rh(r/1960))-r,10<r){e.timeoutHandle=ll(Xt.bind(null,e,Ce,st),r);break}Xt(e,Ce,st);break;case 5:Xt(e,Ce,st);break;default:throw Error(k(329))}}}return Oe(e,te()),e.callbackNode===n?Id.bind(null,e):null}function ql(e,t){var n=sr;return e.current.memoizedState.isDehydrated&&(Jt(e,t).flags|=256),e=no(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&Tl(t)),e}function Tl(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function ih(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ze(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qt(e,t){for(t&=~Su,t&=~yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function tc(e){if(M&6)throw Error(k(327));qn();var t=Di(e,0);if(!(t&1))return Oe(e,te()),null;var n=no(e,t);if(e.tag!==0&&n===2){var r=Ja(e);r!==0&&(t=r,n=ql(e,r))}if(n===1)throw n=qr,Jt(e,0),qt(e,t),Oe(e,te()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xt(e,Ce,st),Oe(e,te()),null}function ku(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Mn=te()+500,po&&Ut())}}function an(e){Ot!==null&&Ot.tag===0&&!(M&6)&&qn();var t=M;M|=1;var n=be.transition,r=D;try{if(be.transition=null,D=1,e)return e()}finally{D=r,be.transition=n,M=t,!(M&6)&&Ut()}}function Eu(){Le=xn.current,B(xn)}function Jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,j0(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(ru(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ui();break;case 3:$n(),B(qe),B(we),du();break;case 5:fu(r);break;case 4:$n();break;case 13:B(X);break;case 19:B(X);break;case 10:lu(r.type._context);break;case 22:case 23:Eu()}n=n.return}if(ue=e,re=e=It(e.current,null),pe=Le=t,oe=0,qr=null,Su=yo=on=0,Ce=sr=null,Gt!==null){for(t=0;t<Gt.length;t++)if(n=Gt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Gt=null}return e}function Dd(e,t){do{var n=re;try{if(au(),Ci.current=Zi,Gi){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Gi=!1}if(rn=0,le=ie=K=null,lr=!1,_r=0,wu.current=null,n===null||n.return===null){oe=1,qr=t,re=null;break}e:{var o=e,a=n.return,l=n,u=t;if(t=pe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=bs(a);if(w!==null){w.flags&=-257,Us(w,a,l,o,t),w.mode&1&&Hs(o,s,t),t=w,u=s;var g=t.updateQueue;if(g===null){var v=new Set;v.add(u),t.updateQueue=v}else g.add(u);break e}else{if(!(t&1)){Hs(o,s,t),_u();break e}u=Error(k(426))}}else if(V&&l.mode&1){var O=bs(a);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Us(O,a,l,o,t),iu(jn(u,l));break e}}o=u=jn(u,l),oe!==4&&(oe=2),sr===null?sr=[o]:sr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=xd(o,u,t);js(o,f);break e;case 1:l=u;var c=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Mt===null||!Mt.has(d)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=kd(o,l,t);js(o,y);break e}}o=o.return}while(o!==null)}Hd(n)}catch(C){t=C,re===n&&n!==null&&(re=n=n.return);continue}break}while(1)}function Fd(){var e=Ji.current;return Ji.current=Zi,e===null?Zi:e}function _u(){(oe===0||oe===3||oe===2)&&(oe=4),ue===null||!(on&268435455)&&!(yo&268435455)||qt(ue,pe)}function no(e,t){var n=M;M|=2;var r=Fd();(ue!==e||pe!==t)&&(st=null,Jt(e,t));do try{oh();break}catch(i){Dd(e,i)}while(1);if(au(),M=n,Ji.current=r,re!==null)throw Error(k(261));return ue=null,pe=0,oe}function oh(){for(;re!==null;)Ad(re)}function ah(){for(;re!==null&&!Lm();)Ad(re)}function Ad(e){var t=Ud(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?Hd(e):re=t,wu.current=null}function Hd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=J0(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,re=null;return}}else if(n=Z0(n,t,Le),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);oe===0&&(oe=5)}function Xt(e,t,n){var r=D,i=be.transition;try{be.transition=null,D=1,lh(e,t,n,r)}finally{be.transition=i,D=r}return null}function lh(e,t,n,r){do qn();while(Ot!==null);if(M&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Hm(e,o),e===ue&&(re=ue=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||si||(si=!0,Bd(Ii,function(){return qn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=be.transition,be.transition=null;var a=D;D=1;var l=M;M|=4,wu.current=null,th(e,n),Md(n,e),q0(ol),Fi=!!il,ol=il=null,e.current=n,nh(n),zm(),M=l,D=a,be.transition=o}else e.current=n;if(si&&(si=!1,Ot=e,to=i),o=e.pendingLanes,o===0&&(Mt=null),Mm(n.stateNode),Oe(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(eo)throw eo=!1,e=Cl,Cl=null,e;return to&1&&e.tag!==0&&qn(),o=e.pendingLanes,o&1?e===Pl?cr++:(cr=0,Pl=e):cr=0,Ut(),null}function qn(){if(Ot!==null){var e=Sf(to),t=be.transition,n=D;try{if(be.transition=null,D=16>e?16:e,Ot===null)var r=!1;else{if(e=Ot,Ot=null,to=0,M&6)throw Error(k(331));var i=M;for(M|=4,P=e.current;P!==null;){var o=P,a=o.child;if(P.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var s=l[u];for(P=s;P!==null;){var p=P;switch(p.tag){case 0:case 11:case 15:ur(8,p,o)}var m=p.child;if(m!==null)m.return=p,P=m;else for(;P!==null;){p=P;var h=p.sibling,w=p.return;if(zd(p),p===s){P=null;break}if(h!==null){h.return=w,P=h;break}P=w}}}var g=o.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var O=v.sibling;v.sibling=null,v=O}while(v!==null)}}P=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,P=a;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ur(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,P=f;break e}P=o.return}}var c=e.current;for(P=c;P!==null;){a=P;var d=a.child;if(a.subtreeFlags&2064&&d!==null)d.return=a,P=d;else e:for(a=c;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:vo(9,l)}}catch(C){J(l,l.return,C)}if(l===a){P=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,P=y;break e}P=l.return}}if(M=i,Ut(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(lo,e)}catch{}r=!0}return r}finally{D=n,be.transition=t}}return!1}function nc(e,t,n){t=jn(n,t),t=xd(e,t,1),e=jt(e,t,1),t=xe(),e!==null&&($r(e,1,t),Oe(e,t))}function J(e,t,n){if(e.tag===3)nc(e,e,n);else for(;t!==null;){if(t.tag===3){nc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mt===null||!Mt.has(r))){e=jn(n,e),e=kd(t,e,1),t=jt(t,e,1),e=xe(),t!==null&&($r(t,1,e),Oe(t,e));break}}t=t.return}}function uh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(pe&n)===n&&(oe===4||oe===3&&(pe&130023424)===pe&&500>te()-xu?Jt(e,0):Su|=n),Oe(e,t)}function bd(e,t){t===0&&(e.mode&1?(t=Jr,Jr<<=1,!(Jr&130023424)&&(Jr=4194304)):t=1);var n=xe();e=yt(e,t),e!==null&&($r(e,t,n),Oe(e,n))}function sh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bd(e,n)}function ch(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),bd(e,n)}var Ud;Ud=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||qe.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,G0(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,V&&t.flags&1048576&&Vf(t,Vi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qi(e,t),e=t.pendingProps;var i=Nn(t,we.current);Pn(t,n),i=mu(null,t,r,e,i,n);var o=hu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Te(r)?(o=!0,Bi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,su(t),i.updater=mo,t.stateNode=i,i._reactInternals=t,ml(t,r,e,n),t=yl(null,t,r,!0,o,n)):(t.tag=0,V&&o&&nu(t),Se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=dh(r),e=Qe(r,e),i){case 0:t=vl(null,t,r,e,n);break e;case 1:t=Vs(null,t,r,e,n);break e;case 11:t=Bs(null,t,r,e,n);break e;case 14:t=Ws(null,t,r,Qe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),vl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Vs(e,t,r,i,n);case 3:e:{if(Pd(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Kf(e,t),Xi(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=jn(Error(k(423)),t),t=Qs(e,t,r,n,i);break e}else if(r!==i){i=jn(Error(k(424)),t),t=Qs(e,t,r,n,i);break e}else for(ze=$t(t.stateNode.containerInfo.firstChild),$e=t,V=!0,Xe=null,n=ed(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ln(),r===i){t=gt(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return td(t),e===null&&fl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,al(r,i)?a=null:o!==null&&al(r,o)&&(t.flags|=32),Cd(e,t),Se(e,t,a,n),t.child;case 6:return e===null&&fl(t),null;case 13:return qd(e,t,n);case 4:return cu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zn(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Bs(e,t,r,i,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,b(Qi,r._currentValue),r._currentValue=a,o!==null)if(Ze(o.value,a)){if(o.children===i.children&&!qe.current){t=gt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=mt(-1,n&-n),u.tag=2;var s=o.updateQueue;if(s!==null){s=s.shared;var p=s.pending;p===null?u.next=u:(u.next=p.next,p.next=u),s.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),dl(o.return,n,t),l.lanes|=n;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(k(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),dl(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Pn(t,n),i=Ue(i),r=r(i),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,i=Qe(r,t.pendingProps),i=Qe(r.type,i),Ws(e,t,r,i,n);case 15:return Ed(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),qi(e,t),t.tag=1,Te(r)?(e=!0,Bi(t)):e=!1,Pn(t,n),Zf(t,r,i),ml(t,r,i,n),yl(null,t,r,!0,e,n);case 19:return Td(e,t,n);case 22:return _d(e,t,n)}throw Error(k(156,t.tag))};function Bd(e,t){return vf(e,t)}function fh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new fh(e,t,n,r)}function Cu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dh(e){if(typeof e=="function")return Cu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bl)return 11;if(e===Wl)return 14}return 2}function It(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ni(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Cu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case fn:return en(n.children,i,o,t);case Ul:a=8,i|=8;break;case Da:return e=He(12,n,t,i|2),e.elementType=Da,e.lanes=o,e;case Fa:return e=He(13,n,t,i),e.elementType=Fa,e.lanes=o,e;case Aa:return e=He(19,n,t,i),e.elementType=Aa,e.lanes=o,e;case Zc:return go(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kc:a=10;break e;case Gc:a=9;break e;case Bl:a=11;break e;case Wl:a=14;break e;case _t:a=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=He(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function en(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function go(e,t,n,r){return e=He(22,e,r,t),e.elementType=Zc,e.lanes=n,e.stateNode={isHidden:!1},e}function qa(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function Ta(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ph(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ua(0),this.expirationTimes=ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ua(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pu(e,t,n,r,i,o,a,l,u){return e=new ph(e,t,n,l,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=He(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},su(o),e}function mh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Wd(e){if(!e)return At;e=e._reactInternals;e:{if(un(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Te(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Te(n))return Bf(e,n,t)}return t}function Vd(e,t,n,r,i,o,a,l,u){return e=Pu(n,r,!0,e,i,o,a,l,u),e.context=Wd(null),n=e.current,r=xe(),i=Rt(n),o=mt(r,i),o.callback=t??null,jt(n,o,i),e.current.lanes=i,$r(e,i,r),Oe(e,r),e}function wo(e,t,n,r){var i=t.current,o=xe(),a=Rt(i);return n=Wd(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jt(i,t,a),e!==null&&(Ge(e,i,a,o),_i(e,i,a)),a}function ro(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qu(e,t){rc(e,t),(e=e.alternate)&&rc(e,t)}function hh(){return null}var Qd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tu(e){this._internalRoot=e}So.prototype.render=Tu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));wo(e,t,null,null)};So.prototype.unmount=Tu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){wo(null,e,null,null)}),t[vt]=null}};function So(e){this._internalRoot=e}So.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ef();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pt.length&&t!==0&&t<Pt[n].priority;n++);Pt.splice(n,0,e),n===0&&Cf(e)}};function Ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ic(){}function vh(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var s=ro(a);o.call(s)}}var a=Vd(t,r,e,0,null,!1,!1,"",ic);return e._reactRootContainer=a,e[vt]=a.current,wr(e.nodeType===8?e.parentNode:e),an(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var s=ro(u);l.call(s)}}var u=Pu(e,0,!1,null,null,!1,!1,"",ic);return e._reactRootContainer=u,e[vt]=u.current,wr(e.nodeType===8?e.parentNode:e),an(function(){wo(t,u,n,r)}),u}function ko(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var u=ro(a);l.call(u)}}wo(t,a,e,i)}else a=vh(n,t,e,i,r);return ro(a)}xf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=er(t.pendingLanes);n!==0&&(Yl(t,n|1),Oe(t,te()),!(M&6)&&(Mn=te()+500,Ut()))}break;case 13:an(function(){var r=yt(e,1);if(r!==null){var i=xe();Ge(r,e,1,i)}}),qu(e,1)}};Xl=function(e){if(e.tag===13){var t=yt(e,134217728);if(t!==null){var n=xe();Ge(t,e,134217728,n)}qu(e,134217728)}};kf=function(e){if(e.tag===13){var t=Rt(e),n=yt(e,t);if(n!==null){var r=xe();Ge(n,e,t,r)}qu(e,t)}};Ef=function(){return D};_f=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Ka=function(e,t,n){switch(t){case"input":if(Ua(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=fo(r);if(!i)throw Error(k(90));ef(r),Ua(r,i)}}}break;case"textarea":nf(e,n);break;case"select":t=n.value,t!=null&&kn(e,!!n.multiple,t,!1)}};cf=ku;ff=an;var yh={usingClientEntryPoint:!1,Events:[Mr,hn,fo,uf,sf,ku]},Kn={findFiberByHostInstance:Kt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gh={bundleType:Kn.bundleType,version:Kn.version,rendererPackageName:Kn.rendererPackageName,rendererConfig:Kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mf(e),e===null?null:e.stateNode},findFiberByHostInstance:Kn.findFiberByHostInstance||hh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ci.isDisabled&&ci.supportsFiber)try{lo=ci.inject(gh),ot=ci}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yh;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ou(t))throw Error(k(200));return mh(e,t,null,n)};Re.createRoot=function(e,t){if(!Ou(e))throw Error(k(299));var n=!1,r="",i=Qd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Pu(e,1,!1,null,null,n,!1,r,i),e[vt]=t.current,wr(e.nodeType===8?e.parentNode:e),new Tu(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=mf(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return an(e)};Re.hydrate=function(e,t,n){if(!xo(t))throw Error(k(200));return ko(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!Ou(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Qd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Vd(t,null,e,1,n??null,i,!1,o,a),e[vt]=t.current,wr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new So(t)};Re.render=function(e,t,n){if(!xo(t))throw Error(k(200));return ko(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!xo(e))throw Error(k(40));return e._reactRootContainer?(an(function(){ko(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1};Re.unstable_batchedUpdates=ku;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xo(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return ko(e,t,n,!1,r)};Re.version="18.2.0-next-9e3b772b8-20220608";function Yd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yd)}catch(e){console.error(e)}}Yd(),Wc.exports=Re;var Xd=Wc.exports,oc=Xd;Ra.createRoot=oc.createRoot,Ra.hydrateRoot=oc.hydrateRoot;const wh="/FIMAZ-pagina/assets/LOGO-32b98c9f.png";var Kd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ac=pt.createContext&&pt.createContext(Kd),Dt=globalThis&&globalThis.__assign||function(){return Dt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Dt.apply(this,arguments)},Sh=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Gd(e){return e&&e.map(function(t,n){return pt.createElement(t.tag,Dt({key:n},t.attr),Gd(t.child))})}function Nu(e){return function(t){return pt.createElement(xh,Dt({attr:Dt({},e.attr)},t),Gd(e.child))}}function xh(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=Sh(e,["attr","size","title"]),l=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),pt.createElement("svg",Dt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:u,style:Dt(Dt({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&pt.createElement("title",null,o),e.children)};return ac!==void 0?pt.createElement(ac.Consumer,null,function(n){return t(n)}):t(Kd)}function kh(e){return Nu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}function Eh(e){return Nu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"}}]})(e)}const _h=({IsOpen:e,onClick:t})=>x.jsxs("span",{onClick:t,children:[x.jsx(kh,{className:`@apply duration-[1s]; absolute right-4 top-5 cursor-pointer text-2xl text-gray-700 transition-opacity md:hidden  ${e?"opacity-0":" opacity-100"} transition ease-out `}),x.jsx(Eh,{className:`@apply duration-[1s]; absolute right-1 top-2 cursor-pointer text-5xl text-gray-700 transition-opacity md:hidden ${e?" text-red-500 opacity-100":"opacity-0"}`})]});var Z={},Lu={},Ir={},Dr={},Zd="Expected a function",lc=0/0,Ch="[object Symbol]",Ph=/^\s+|\s+$/g,qh=/^[-+]0x[0-9a-f]+$/i,Th=/^0b[01]+$/i,Oh=/^0o[0-7]+$/i,Nh=parseInt,Lh=typeof Qr=="object"&&Qr&&Qr.Object===Object&&Qr,zh=typeof self=="object"&&self&&self.Object===Object&&self,$h=Lh||zh||Function("return this")(),jh=Object.prototype,Mh=jh.toString,Rh=Math.max,Ih=Math.min,Oa=function(){return $h.Date.now()};function Dh(e,t,n){var r,i,o,a,l,u,s=0,p=!1,m=!1,h=!0;if(typeof e!="function")throw new TypeError(Zd);t=uc(t)||0,io(n)&&(p=!!n.leading,m="maxWait"in n,o=m?Rh(uc(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h);function w(E){var S=r,T=i;return r=i=void 0,s=E,a=e.apply(T,S),a}function g(E){return s=E,l=setTimeout(f,t),p?w(E):a}function v(E){var S=E-u,T=E-s,H=t-S;return m?Ih(H,o-T):H}function O(E){var S=E-u,T=E-s;return u===void 0||S>=t||S<0||m&&T>=o}function f(){var E=Oa();if(O(E))return c(E);l=setTimeout(f,v(E))}function c(E){return l=void 0,h&&r?w(E):(r=i=void 0,a)}function d(){l!==void 0&&clearTimeout(l),s=0,r=u=i=l=void 0}function y(){return l===void 0?a:c(Oa())}function C(){var E=Oa(),S=O(E);if(r=arguments,i=this,u=E,S){if(l===void 0)return g(u);if(m)return l=setTimeout(f,t),w(u)}return l===void 0&&(l=setTimeout(f,t)),a}return C.cancel=d,C.flush=y,C}function Fh(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(Zd);return io(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Dh(e,t,{leading:r,maxWait:t,trailing:i})}function io(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Ah(e){return!!e&&typeof e=="object"}function Hh(e){return typeof e=="symbol"||Ah(e)&&Mh.call(e)==Ch}function uc(e){if(typeof e=="number")return e;if(Hh(e))return lc;if(io(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=io(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ph,"");var n=Th.test(e);return n||Oh.test(e)?Nh(e.slice(2),n?2:8):qh.test(e)?lc:+e}var bh=Fh,Fr={};Object.defineProperty(Fr,"__esModule",{value:!0});Fr.addPassiveEventListener=function(t,n,r){var i=function(){var o=!1;try{var a=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("test",null,a)}catch{}return o}();t.addEventListener(n,r,i?{passive:!0}:!1)};Fr.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r)};Object.defineProperty(Dr,"__esModule",{value:!0});var Uh=bh,Bh=Vh(Uh),Wh=Fr;function Vh(e){return e&&e.__esModule?e:{default:e}}var Qh=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,Bh.default)(t,n)},Q={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=Qh(function(i){Q.scrollHandler(t)},n);Q.scrollSpyContainers.push(t),(0,Wh.addPassiveEventListener)(t,"scroll",r)}},isMounted:function(t){return Q.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=Q.scrollSpyContainers[Q.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(Q.currentPositionX(t),Q.currentPositionY(t))})},addStateHandler:function(t){Q.spySetState.push(t)},addSpyHandler:function(t,n){var r=Q.scrollSpyContainers[Q.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t),t(Q.currentPositionX(n),Q.currentPositionY(n))},updateStates:function(){Q.spySetState.forEach(function(t){return t()})},unmount:function(t,n){Q.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),Q.spySetState&&Q.spySetState.length&&Q.spySetState.indexOf(t)>-1&&Q.spySetState.splice(Q.spySetState.indexOf(t),1),document.removeEventListener("scroll",Q.scrollHandler)},update:function(){return Q.scrollSpyContainers.forEach(function(t){return Q.scrollHandler(t)})}};Dr.default=Q;var An={},Ar={};Object.defineProperty(Ar,"__esModule",{value:!0});var Yh=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,i=r?"#"+r:"",o=window&&window.location,a=i?o.pathname+o.search+i:o.pathname+o.search;n?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},Xh=function(){return window.location.hash.replace(/^#/,"")},Kh=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},Gh=function(t){return getComputedStyle(t).position!=="static"},Na=function(t,n){for(var r=t.offsetTop,i=t.offsetParent;i&&!n(i);)r+=i.offsetTop,i=i.offsetParent;return{offsetTop:r,offsetParent:i}},Zh=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(Gh(t)){if(n.offsetParent!==t){var i=function(p){return p===t||p===document},o=Na(n,i),a=o.offsetTop,l=o.offsetParent;if(l!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return a}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var u=function(p){return p===document};return Na(n,u).offsetTop-Na(t,u).offsetTop};Ar.default={updateHash:Yh,getHash:Xh,filterElementInContainer:Kh,scrollOffset:Zh};var Eo={},zu={};Object.defineProperty(zu,"__esModule",{value:!0});zu.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var $u={};Object.defineProperty($u,"__esModule",{value:!0});var Jh=Fr,ev=["mousedown","mousewheel","touchmove","keydown"];$u.default={subscribe:function(t){return typeof document<"u"&&ev.forEach(function(n){return(0,Jh.addPassiveEventListener)(document,n,t)})}};var Hr={};Object.defineProperty(Hr,"__esModule",{value:!0});var Ol={registered:{},scrollEvent:{register:function(t,n){Ol.registered[t]=n},remove:function(t){Ol.registered[t]=null}}};Hr.default=Ol;Object.defineProperty(Eo,"__esModule",{value:!0});var tv=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nv=Ar;_o(nv);var rv=zu,sc=_o(rv),iv=$u,ov=_o(iv),av=Hr,tt=_o(av);function _o(e){return e&&e.__esModule?e:{default:e}}var Jd=function(t){return sc.default[t.smooth]||sc.default.defaultEasing},lv=function(t){return typeof t=="function"?t:function(){return t}},uv=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Nl=function(){return uv()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),ep=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},tp=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},np=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},sv=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,i=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)},cv=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,i=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)},fv=function e(t,n,r){var i=n.data;if(!n.ignoreCancelEvents&&i.cancel){tt.default.registered.end&&tt.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),i.start===null&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:t(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var o=e.bind(null,t,n);Nl.call(window,o);return}tt.default.registered.end&&tt.default.registered.end(i.to,i.target,i.currentPosition)},ju=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},br=function(t,n,r,i){if(n.data=n.data||ep(),window.clearTimeout(n.data.delayTimeout),ov.default.subscribe(function(){n.data.cancel=!0}),ju(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?tp(n):np(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){tt.default.registered.end&&tt.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=lv(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=i;var o=Jd(n),a=fv.bind(null,o,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){tt.default.registered.begin&&tt.default.registered.begin(n.data.to,n.data.target),Nl.call(window,a)},n.delay);return}tt.default.registered.begin&&tt.default.registered.begin(n.data.to,n.data.target),Nl.call(window,a)},Co=function(t){return t=tv({},t),t.data=t.data||ep(),t.absolute=!0,t},dv=function(t){br(0,Co(t))},pv=function(t,n){br(t,Co(n))},mv=function(t){t=Co(t),ju(t),br(t.horizontal?sv(t):cv(t),t)},hv=function(t,n){n=Co(n),ju(n);var r=n.horizontal?tp(n):np(n);br(t+r,n)};Eo.default={animateTopScroll:br,getAnimationType:Jd,scrollToTop:dv,scrollToBottom:mv,scrollTo:pv,scrollMore:hv};Object.defineProperty(An,"__esModule",{value:!0});var vv=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yv=Ar,gv=Mu(yv),wv=Eo,Sv=Mu(wv),xv=Hr,fi=Mu(xv);function Mu(e){return e&&e.__esModule?e:{default:e}}var di={},cc=void 0;An.default={unmount:function(){di={}},register:function(t,n){di[t]=n},unregister:function(t){delete di[t]},get:function(t){return di[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return cc=t},getActiveLink:function(){return cc},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=vv({},n,{absolute:!1});var i=n.containerId,o=n.container,a=void 0;i?a=document.getElementById(i):o&&o.nodeType?a=o:a=document,n.absolute=!0;var l=n.horizontal,u=gv.default.scrollOffset(a,r,l)+(n.offset||0);if(!n.smooth){fi.default.registered.begin&&fi.default.registered.begin(t,r),a===document?n.horizontal?window.scrollTo(u,0):window.scrollTo(0,u):a.scrollTop=u,fi.default.registered.end&&fi.default.registered.end(t,r);return}Sv.default.animateTopScroll(u,n,t,r)}};var rp={exports:{}},kv="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ev=kv,_v=Ev;function ip(){}function op(){}op.resetWarningCache=ip;var Cv=function(){function e(r,i,o,a,l,u){if(u!==_v){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:op,resetWarningCache:ip};return n.PropTypes=n,n};rp.exports=Cv();var Po=rp.exports,qo={};Object.defineProperty(qo,"__esModule",{value:!0});var Pv=Ar,La=qv(Pv);function qv(e){return e&&e.__esModule?e:{default:e}}var Tv={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,i=r.get(t);if(i&&(n||t!==r.getActiveLink())){var o=this.containers[t]||document;r.scrollTo(t,{container:o})}},getHash:function(){return La.default.getHash()},changeHash:function(t,n){this.isInitialized()&&La.default.getHash()!==t&&La.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};qo.default=Tv;Object.defineProperty(Ir,"__esModule",{value:!0});var pi=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ov=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Nv=$,fc=Ur(Nv),Lv=Dr,mi=Ur(Lv),zv=An,$v=Ur(zv),jv=Po,W=Ur(jv),Mv=qo,kt=Ur(Mv);function Ur(e){return e&&e.__esModule?e:{default:e}}function Rv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Iv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Dv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var dc={to:W.default.string.isRequired,containerId:W.default.string,container:W.default.object,activeClass:W.default.string,activeStyle:W.default.object,spy:W.default.bool,horizontal:W.default.bool,smooth:W.default.oneOfType([W.default.bool,W.default.string]),offset:W.default.number,delay:W.default.number,isDynamic:W.default.bool,onClick:W.default.func,duration:W.default.oneOfType([W.default.number,W.default.func]),absolute:W.default.bool,onSetActive:W.default.func,onSetInactive:W.default.func,ignoreCancelEvents:W.default.bool,hashSpy:W.default.bool,saveHashHistory:W.default.bool,spyThrottle:W.default.number};Ir.default=function(e,t){var n=t||$v.default,r=function(o){Dv(a,o);function a(l){Rv(this,a);var u=Iv(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,l));return i.call(u),u.state={active:!1},u}return Ov(a,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,s=this.props.container;return u&&!s?document.getElementById(u):s&&s.nodeType?s:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();mi.default.isMounted(u)||mi.default.mount(u,this.props.spyThrottle),this.props.hashSpy&&(kt.default.isMounted()||kt.default.mount(n),kt.default.mapContainer(this.props.to,u)),mi.default.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){mi.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var s={};this.state&&this.state.active?s=pi({},this.props.style,this.props.activeStyle):s=pi({},this.props.style);var p=pi({},this.props);for(var m in dc)p.hasOwnProperty(m)&&delete p[m];return p.className=u,p.style=s,p.onClick=this.handleClick,fc.default.createElement(e,p)}}]),a}(fc.default.PureComponent),i=function(){var a=this;this.scrollTo=function(l,u){n.scrollTo(l,pi({},a.state,u))},this.handleClick=function(l){a.props.onClick&&a.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),a.scrollTo(a.props.to,a.props)},this.spyHandler=function(l,u){var s=a.getScrollSpyContainer();if(!(kt.default.isMounted()&&!kt.default.isInitialized())){var p=a.props.horizontal,m=a.props.to,h=null,w=void 0,g=void 0;if(p){var v=0,O=0,f=0;if(s.getBoundingClientRect){var c=s.getBoundingClientRect();f=c.left}if(!h||a.props.isDynamic){if(h=n.get(m),!h)return;var d=h.getBoundingClientRect();v=d.left-f+l,O=v+d.width}var y=l-a.props.offset;w=y>=Math.floor(v)&&y<Math.floor(O),g=y<Math.floor(v)||y>=Math.floor(O)}else{var C=0,E=0,S=0;if(s.getBoundingClientRect){var T=s.getBoundingClientRect();S=T.top}if(!h||a.props.isDynamic){if(h=n.get(m),!h)return;var H=h.getBoundingClientRect();C=H.top-S+u,E=C+H.height}var L=u-a.props.offset;w=L>=Math.floor(C)&&L<Math.floor(E),g=L<Math.floor(C)||L>=Math.floor(E)}var _e=n.getActiveLink();if(g){if(m===_e&&n.setActiveLink(void 0),a.props.hashSpy&&kt.default.getHash()===m){var St=a.props.saveHashHistory,Bt=St===void 0?!1:St;kt.default.changeHash("",Bt)}a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive(m,h))}if(w&&(_e!==m||a.state.active===!1)){n.setActiveLink(m);var bn=a.props.saveHashHistory,Jo=bn===void 0?!1:bn;a.props.hashSpy&&kt.default.changeHash(m,Jo),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(m,h))}}}};return r.propTypes=dc,r.defaultProps={offset:0},r};Object.defineProperty(Lu,"__esModule",{value:!0});var Fv=$,pc=ap(Fv),Av=Ir,Hv=ap(Av);function ap(e){return e&&e.__esModule?e:{default:e}}function bv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function mc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Uv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Bv=function(e){Uv(t,e);function t(){var n,r,i,o;bv(this,t);for(var a=arguments.length,l=Array(a),u=0;u<a;u++)l[u]=arguments[u];return o=(r=(i=mc(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(l))),i),i.render=function(){return pc.default.createElement("a",i.props,i.props.children)},r),mc(i,o)}return t}(pc.default.Component);Lu.default=(0,Hv.default)(Bv);var Ru={};Object.defineProperty(Ru,"__esModule",{value:!0});var Wv=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Vv=$,hc=lp(Vv),Qv=Ir,Yv=lp(Qv);function lp(e){return e&&e.__esModule?e:{default:e}}function Xv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Kv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Gv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Zv=function(e){Gv(t,e);function t(){return Xv(this,t),Kv(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return Wv(t,[{key:"render",value:function(){return hc.default.createElement("input",this.props,this.props.children)}}]),t}(hc.default.Component);Ru.default=(0,Yv.default)(Zv);var Iu={},To={};Object.defineProperty(To,"__esModule",{value:!0});var Jv=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e1=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),t1=$,vc=Oo(t1),n1=Xd;Oo(n1);var r1=An,yc=Oo(r1),i1=Po,gc=Oo(i1);function Oo(e){return e&&e.__esModule?e:{default:e}}function o1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a1(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function l1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}To.default=function(e){var t=function(n){l1(r,n);function r(i){o1(this,r);var o=a1(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return o.childBindings={domNode:null},o}return e1(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;yc.default.unregister(this.props.name)}},{key:"registerElems",value:function(o){yc.default.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return vc.default.createElement(e,Jv({},this.props,{parentBindings:this.childBindings}))}}]),r}(vc.default.Component);return t.propTypes={name:gc.default.string,id:gc.default.string},t};Object.defineProperty(Iu,"__esModule",{value:!0});var wc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u1=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s1=$,Sc=Du(s1),c1=To,f1=Du(c1),d1=Po,xc=Du(d1);function Du(e){return e&&e.__esModule?e:{default:e}}function p1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m1(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function h1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var up=function(e){h1(t,e);function t(){return p1(this,t),m1(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u1(t,[{key:"render",value:function(){var r=this,i=wc({},this.props);return i.parentBindings&&delete i.parentBindings,Sc.default.createElement("div",wc({},i,{ref:function(a){r.props.parentBindings.domNode=a}}),this.props.children)}}]),t}(Sc.default.Component);up.propTypes={name:xc.default.string,id:xc.default.string};Iu.default=(0,f1.default)(up);var za=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kc=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function Ec(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Cc(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var hi=$,Qt=Dr,$a=An,Y=Po,Et=qo,Pc={to:Y.string.isRequired,containerId:Y.string,container:Y.object,activeClass:Y.string,spy:Y.bool,smooth:Y.oneOfType([Y.bool,Y.string]),offset:Y.number,delay:Y.number,isDynamic:Y.bool,onClick:Y.func,duration:Y.oneOfType([Y.number,Y.func]),absolute:Y.bool,onSetActive:Y.func,onSetInactive:Y.func,ignoreCancelEvents:Y.bool,hashSpy:Y.bool,spyThrottle:Y.number},v1={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||$a,i=function(a){Cc(l,a);function l(u){Ec(this,l);var s=_c(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,u));return o.call(s),s.state={active:!1},s}return kc(l,[{key:"getScrollSpyContainer",value:function(){var s=this.props.containerId,p=this.props.container;return s?document.getElementById(s):p&&p.nodeType?p:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var s=this.getScrollSpyContainer();Qt.isMounted(s)||Qt.mount(s,this.props.spyThrottle),this.props.hashSpy&&(Et.isMounted()||Et.mount(r),Et.mapContainer(this.props.to,s)),this.props.spy&&Qt.addStateHandler(this.stateHandler),Qt.addSpyHandler(this.spyHandler,s),this.setState({container:s})}}},{key:"componentWillUnmount",value:function(){Qt.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var s="";this.state&&this.state.active?s=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():s=this.props.className;var p=za({},this.props);for(var m in Pc)p.hasOwnProperty(m)&&delete p[m];return p.className=s,p.onClick=this.handleClick,hi.createElement(t,p)}}]),l}(hi.Component),o=function(){var l=this;this.scrollTo=function(u,s){r.scrollTo(u,za({},l.state,s))},this.handleClick=function(u){l.props.onClick&&l.props.onClick(u),u.stopPropagation&&u.stopPropagation(),u.preventDefault&&u.preventDefault(),l.scrollTo(l.props.to,l.props)},this.stateHandler=function(){r.getActiveLink()!==l.props.to&&(l.state!==null&&l.state.active&&l.props.onSetInactive&&l.props.onSetInactive(),l.setState({active:!1}))},this.spyHandler=function(u){var s=l.getScrollSpyContainer();if(!(Et.isMounted()&&!Et.isInitialized())){var p=l.props.to,m=null,h=0,w=0,g=0;if(s.getBoundingClientRect){var v=s.getBoundingClientRect();g=v.top}if(!m||l.props.isDynamic){if(m=r.get(p),!m)return;var O=m.getBoundingClientRect();h=O.top-g+u,w=h+O.height}var f=u-l.props.offset,c=f>=Math.floor(h)&&f<Math.floor(w),d=f<Math.floor(h)||f>=Math.floor(w),y=r.getActiveLink();if(d)return p===y&&r.setActiveLink(void 0),l.props.hashSpy&&Et.getHash()===p&&Et.changeHash(),l.props.spy&&l.state.active&&(l.setState({active:!1}),l.props.onSetInactive&&l.props.onSetInactive()),Qt.updateStates();if(c&&y!==p)return r.setActiveLink(p),l.props.hashSpy&&Et.changeHash(p),l.props.spy&&(l.setState({active:!0}),l.props.onSetActive&&l.props.onSetActive(p)),Qt.updateStates()}}};return i.propTypes=Pc,i.defaultProps={offset:0},i},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){Cc(i,r);function i(o){Ec(this,i);var a=_c(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return a.childBindings={domNode:null},a}return kc(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(a){this.props.name!==a.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;$a.unregister(this.props.name)}},{key:"registerElems",value:function(a){$a.register(a,this.childBindings.domNode)}},{key:"render",value:function(){return hi.createElement(t,za({},this.props,{parentBindings:this.childBindings}))}}]),i}(hi.Component);return n.propTypes={name:Y.string,id:Y.string},n}},y1=v1;Object.defineProperty(Z,"__esModule",{value:!0});Z.Helpers=Z.ScrollElement=Z.ScrollLink=Z.animateScroll=Z.scrollSpy=Z.Events=Z.scroller=Z.Element=Z.Button=wp=Z.Link=void 0;var g1=Lu,sp=ut(g1),w1=Ru,cp=ut(w1),S1=Iu,fp=ut(S1),x1=An,dp=ut(x1),k1=Hr,pp=ut(k1),E1=Dr,mp=ut(E1),_1=Eo,hp=ut(_1),C1=Ir,vp=ut(C1),P1=To,yp=ut(P1),q1=y1,gp=ut(q1);function ut(e){return e&&e.__esModule?e:{default:e}}var wp=Z.Link=sp.default;Z.Button=cp.default;Z.Element=fp.default;Z.scroller=dp.default;Z.Events=pp.default;Z.scrollSpy=mp.default;Z.animateScroll=hp.default;Z.ScrollLink=vp.default;Z.ScrollElement=yp.default;Z.Helpers=gp.default;Z.default={Link:sp.default,Button:cp.default,Element:fp.default,scroller:dp.default,Events:pp.default,scrollSpy:mp.default,animateScroll:hp.default,ScrollLink:vp.default,ScrollElement:yp.default,Helpers:gp.default};const T1=({title:e,closeHam:t,id:n,activeSelection:r})=>x.jsx("div",{children:x.jsx(wp,{activeClass:"active",smooth:!0,spy:!0,to:n,children:x.jsx("li",{onClick:()=>{t(!1)},className:`@apply  cursor-pointer border-b-[3px] border-gray-400  py-5 pl-6 text-lg transition-all delay-75 ease-in hover:text-primary md:my-0 md:ml-4 md:w-auto  md:px-4 md:py-7 md:text-gray-700    ${n===r?" text-primary md:border-gray-800 md:bg-primary md:text-white md:hover:text-white":"text-white md:border-white "}`,children:e})})}),O1=({IsOpen:e,navItems:t,closeHam:n,activeSection:r})=>{const i=t.map(o=>x.jsx(T1,{title:o.NavTitle,closeHam:n,id:o.id,activeSelection:r},o.id));return x.jsx("ul",{className:`absolute left-0 right-0  z-[-10] mx-auto w-80  bg-gray-900 shadow-xl transition-all duration-700 ease-in-out md:static md:z-auto md:m-0 md:flex md:w-auto md:items-center md:bg-white md:pb-0 md:pl-0 md:shadow-none${e?" top-16":" top-[-490px]  md:opacity-100"}`,children:i})},N1=({navItems:e})=>{const[t,n]=$.useState(!1),[r,i]=$.useState(null),o=()=>{n(!t),console.log(t)},a=()=>{const l=window.scrollY;e.forEach(u=>{const s=document.getElementById(u.id);if(s){const{offsetTop:p,offsetHeight:m}=s;l>=p-100&&l<p+m-100&&i(u.id)}})};return $.useEffect(()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}),[]),x.jsx("nav",{id:"Navbar",className:"fixed left-0 top-0 z-10 w-full   shadow-md md:p-0",children:x.jsxs("div",{className:"items-center justify-between bg-white px-7 py-4 md:flex md:p-0 md:px-10",children:[x.jsx("div",{children:x.jsx("img",{className:" w-28 p-2 transition-all hover:rotate-[-3deg] hover:scale-105 md:w-36 ",src:wh})}),x.jsx(_h,{IsOpen:t,onClick:o}),x.jsx(O1,{IsOpen:t,navItems:e,closeHam:n,activeSection:r})]})})},L1=()=>x.jsx("section",{id:"inicio",className:'h-[800px]   border-b-8 border-primary bg-[rgba(0,0,0,0.63)]  bg-[url("hero.jpg")] bg-cover bg-fixed  bg-center bg-no-repeat pt-3 bg-blend-darken md:h-[1500px]',children:x.jsxs("div",{className:" flex flex-col items-center justify-center gap-2  pt-[100px]  md:pt-[480px]",children:[x.jsxs("div",{className:"  rounded-md bg-[#ffffff2d] p-5 backdrop-blur-md",children:[x.jsxs("h1",{className:"mb-4 text-center text-5xl text-white md:w-[600px] md:text-8xl",children:[x.jsx("span",{className:"text-primary",children:"FIMAZ"})," 2023"]}),x.jsx("h4",{className:"text-center  text-white",children:"Feria Inmobiliaria de Mazatlán"})]}),x.jsx("div",{className:"container mx-auto w-[90%] text-center",children:x.jsx("p",{className:"text-md text-md pt-5 text-gray-200 md:m-auto md:w-[85%] md:text-lg ",children:"FIMAZ (Feria Inmobiliaria de Mazatlán) es un evento especializado en el sector inmobiliario que proporciona una plataforma para que los profesionales y empresas del ramo exhiban sus proyectos y servicios, establezcan contactos, aprendan de expertos y se mantengan actualizados sobre las últimas tendencias del mercado. Es un lugar donde los interesados en la compra, venta o inversión en bienes raíces pueden encontrar información relevante y establecer conexiones valiosas."})}),x.jsx("button",{className:" text mt-9 w-[70%]  rounded-xl bg-primary p-5 text-white transition-all hover:scale-110 md:w-[250px]",children:"¿Quieres ser expositor?"})]})}),z1=()=>x.jsx("footer",{className:" mt-auto w-full bg-gray-800 p-10 text-center text-white",children:x.jsxs("div",{className:" md:[100px] flex flex-wrap justify-center gap-[40px]",children:[x.jsxs("div",{children:[x.jsx("h4",{children:"Informacion"}),x.jsxs("ul",{children:[x.jsx("li",{children:"Lorem ipsum dolor sit."}),x.jsx("li",{children:"Lorem ipsum dolor sit."}),x.jsx("li",{children:"Lorem ipsum dolor sit."}),x.jsx("li",{children:"Lorem ipsum dolor sit."}),x.jsx("li",{children:"Lorem ipsum dolor sit."}),x.jsx("li",{children:"Lorem ipsum dolor sit."})]})]}),x.jsxs("div",{children:[x.jsx("h4",{children:"Informacion"}),x.jsxs("ul",{children:[x.jsx("li",{children:"Lorem ipsum dolor sit."}),x.jsx("li",{children:"Lorem ipsum dolor sit."}),x.jsx("li",{children:"Lorem ipsum dolor sit."}),x.jsx("li",{children:"Lorem ipsum dolor sit."}),x.jsx("li",{children:"Lorem ipsum dolor sit."}),x.jsx("li",{children:"Lorem ipsum dolor sit."})]})]}),x.jsxs("div",{children:[x.jsx("h4",{children:"Informacion"}),x.jsxs("ul",{children:[x.jsx("li",{children:"Lorem ipsum dolor sit."}),x.jsx("li",{children:"Lorem ipsum dolor sit."}),x.jsx("li",{children:"Lorem ipsum dolor sit."}),x.jsx("li",{children:"Lorem ipsum dolor sit."}),x.jsx("li",{children:"Lorem ipsum dolor sit."}),x.jsx("li",{children:"Lorem ipsum dolor sit."})]})]}),x.jsxs("div",{children:[x.jsx("h4",{children:"Informacion"}),x.jsxs("ul",{children:[x.jsx("li",{children:"Lorem ipsum dolor sit."}),x.jsx("li",{children:"Lorem ipsum dolor sit."}),x.jsx("li",{children:"Lorem ipsum dolor sit."}),x.jsx("li",{children:"Lorem ipsum dolor sit."}),x.jsx("li",{children:"Lorem ipsum dolor sit."}),x.jsx("li",{children:"Lorem ipsum dolor sit."})]})]})]})});function $1(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function j1(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var M1=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(j1(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=$1(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ye="-ms-",oo="-moz-",R="-webkit-",Sp="comm",Fu="rule",Au="decl",R1="@import",xp="@keyframes",I1="@layer",D1=Math.abs,No=String.fromCharCode,F1=Object.assign;function A1(e,t){return de(e,0)^45?(((t<<2^de(e,0))<<2^de(e,1))<<2^de(e,2))<<2^de(e,3):0}function kp(e){return e.trim()}function H1(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function Ll(e,t){return e.indexOf(t)}function de(e,t){return e.charCodeAt(t)|0}function Tr(e,t,n){return e.slice(t,n)}function nt(e){return e.length}function Hu(e){return e.length}function vi(e,t){return t.push(e),e}function b1(e,t){return e.map(t).join("")}var Lo=1,Rn=1,Ep=0,Ne=0,ne=0,Hn="";function zo(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Lo,column:Rn,length:a,return:""}}function Gn(e,t){return F1(zo("",null,null,"",null,null,0),e,{length:-e.length},t)}function U1(){return ne}function B1(){return ne=Ne>0?de(Hn,--Ne):0,Rn--,ne===10&&(Rn=1,Lo--),ne}function je(){return ne=Ne<Ep?de(Hn,Ne++):0,Rn++,ne===10&&(Rn=1,Lo++),ne}function lt(){return de(Hn,Ne)}function Li(){return Ne}function Br(e,t){return Tr(Hn,e,t)}function Or(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _p(e){return Lo=Rn=1,Ep=nt(Hn=e),Ne=0,[]}function Cp(e){return Hn="",e}function zi(e){return kp(Br(Ne-1,zl(e===91?e+2:e===40?e+1:e)))}function W1(e){for(;(ne=lt())&&ne<33;)je();return Or(e)>2||Or(ne)>3?"":" "}function V1(e,t){for(;--t&&je()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return Br(e,Li()+(t<6&&lt()==32&&je()==32))}function zl(e){for(;je();)switch(ne){case e:return Ne;case 34:case 39:e!==34&&e!==39&&zl(ne);break;case 40:e===41&&zl(e);break;case 92:je();break}return Ne}function Q1(e,t){for(;je()&&e+ne!==47+10;)if(e+ne===42+42&&lt()===47)break;return"/*"+Br(t,Ne-1)+"*"+No(e===47?e:je())}function Y1(e){for(;!Or(lt());)je();return Br(e,Ne)}function X1(e){return Cp($i("",null,null,null,[""],e=_p(e),0,[0],e))}function $i(e,t,n,r,i,o,a,l,u){for(var s=0,p=0,m=a,h=0,w=0,g=0,v=1,O=1,f=1,c=0,d="",y=i,C=o,E=r,S=d;O;)switch(g=c,c=je()){case 40:if(g!=108&&de(S,m-1)==58){Ll(S+=I(zi(c),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:S+=zi(c);break;case 9:case 10:case 13:case 32:S+=W1(g);break;case 92:S+=V1(Li()-1,7);continue;case 47:switch(lt()){case 42:case 47:vi(K1(Q1(je(),Li()),t,n),u);break;default:S+="/"}break;case 123*v:l[s++]=nt(S)*f;case 125*v:case 59:case 0:switch(c){case 0:case 125:O=0;case 59+p:f==-1&&(S=I(S,/\f/g,"")),w>0&&nt(S)-m&&vi(w>32?Tc(S+";",r,n,m-1):Tc(I(S," ","")+";",r,n,m-2),u);break;case 59:S+=";";default:if(vi(E=qc(S,t,n,s,p,i,l,d,y=[],C=[],m),o),c===123)if(p===0)$i(S,t,E,E,y,o,m,l,C);else switch(h===99&&de(S,3)===110?100:h){case 100:case 108:case 109:case 115:$i(e,E,E,r&&vi(qc(e,E,E,0,0,i,l,d,i,y=[],m),C),i,C,m,l,r?y:C);break;default:$i(S,E,E,E,[""],C,0,l,C)}}s=p=w=0,v=f=1,d=S="",m=a;break;case 58:m=1+nt(S),w=g;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&B1()==125)continue}switch(S+=No(c),c*v){case 38:f=p>0?1:(S+="\f",-1);break;case 44:l[s++]=(nt(S)-1)*f,f=1;break;case 64:lt()===45&&(S+=zi(je())),h=lt(),p=m=nt(d=S+=Y1(Li())),c++;break;case 45:g===45&&nt(S)==2&&(v=0)}}return o}function qc(e,t,n,r,i,o,a,l,u,s,p){for(var m=i-1,h=i===0?o:[""],w=Hu(h),g=0,v=0,O=0;g<r;++g)for(var f=0,c=Tr(e,m+1,m=D1(v=a[g])),d=e;f<w;++f)(d=kp(v>0?h[f]+" "+c:I(c,/&\f/g,h[f])))&&(u[O++]=d);return zo(e,t,n,i===0?Fu:l,u,s,p)}function K1(e,t,n){return zo(e,t,n,Sp,No(U1()),Tr(e,2,-2),0)}function Tc(e,t,n,r){return zo(e,t,n,Au,Tr(e,0,r),Tr(e,r+1,-1),r)}function Tn(e,t){for(var n="",r=Hu(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function G1(e,t,n,r){switch(e.type){case I1:if(e.children.length)break;case R1:case Au:return e.return=e.return||e.value;case Sp:return"";case xp:return e.return=e.value+"{"+Tn(e.children,r)+"}";case Fu:e.value=e.props.join(",")}return nt(n=Tn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Z1(e){var t=Hu(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function J1(e){return function(t){t.root||(t=t.return)&&e(t)}}function ey(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ty=function(t,n,r){for(var i=0,o=0;i=o,o=lt(),i===38&&o===12&&(n[r]=1),!Or(o);)je();return Br(t,Ne)},ny=function(t,n){var r=-1,i=44;do switch(Or(i)){case 0:i===38&&lt()===12&&(n[r]=1),t[r]+=ty(Ne-1,n,r);break;case 2:t[r]+=zi(i);break;case 4:if(i===44){t[++r]=lt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=No(i)}while(i=je());return t},ry=function(t,n){return Cp(ny(_p(t),n))},Oc=new WeakMap,iy=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Oc.get(r))&&!i){Oc.set(t,!0);for(var o=[],a=ry(n,o),l=r.props,u=0,s=0;u<a.length;u++)for(var p=0;p<l.length;p++,s++)t.props[s]=o[u]?a[u].replace(/&\f/g,l[p]):l[p]+" "+a[u]}}},oy=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Pp(e,t){switch(A1(e,t)){case 5103:return R+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return R+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return R+e+oo+e+ye+e+e;case 6828:case 4268:return R+e+ye+e+e;case 6165:return R+e+ye+"flex-"+e+e;case 5187:return R+e+I(e,/(\w+).+(:[^]+)/,R+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return R+e+ye+"flex-item-"+I(e,/flex-|-self/,"")+e;case 4675:return R+e+ye+"flex-line-pack"+I(e,/align-content|flex-|-self/,"")+e;case 5548:return R+e+ye+I(e,"shrink","negative")+e;case 5292:return R+e+ye+I(e,"basis","preferred-size")+e;case 6060:return R+"box-"+I(e,"-grow","")+R+e+ye+I(e,"grow","positive")+e;case 4554:return R+I(e,/([^-])(transform)/g,"$1"+R+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,R+"$1"),/(image-set)/,R+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,R+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,R+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+R+e+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,R+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nt(e)-1-t>6)switch(de(e,t+1)){case 109:if(de(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+R+"$2-$3$1"+oo+(de(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ll(e,"stretch")?Pp(I(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(de(e,t+1)!==115)break;case 6444:switch(de(e,nt(e)-3-(~Ll(e,"!important")&&10))){case 107:return I(e,":",":"+R)+e;case 101:return I(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+R+(de(e,14)===45?"inline-":"")+"box$3$1"+R+"$2$3$1"+ye+"$2box$3")+e}break;case 5936:switch(de(e,t+11)){case 114:return R+e+ye+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return R+e+ye+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return R+e+ye+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return R+e+ye+e+e}return e}var ay=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Au:t.return=Pp(t.value,t.length);break;case xp:return Tn([Gn(t,{value:I(t.value,"@","@"+R)})],i);case Fu:if(t.length)return b1(t.props,function(o){switch(H1(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Tn([Gn(t,{props:[I(o,/:(read-\w+)/,":"+oo+"$1")]})],i);case"::placeholder":return Tn([Gn(t,{props:[I(o,/:(plac\w+)/,":"+R+"input-$1")]}),Gn(t,{props:[I(o,/:(plac\w+)/,":"+oo+"$1")]}),Gn(t,{props:[I(o,/:(plac\w+)/,ye+"input-$1")]})],i)}return""})}},ly=[ay],uy=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var O=v.getAttribute("data-emotion");O.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||ly,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var O=v.getAttribute("data-emotion").split(" "),f=1;f<O.length;f++)o[O[f]]=!0;l.push(v)});var u,s=[iy,oy];{var p,m=[G1,J1(function(v){p.insert(v)})],h=Z1(s.concat(i,m)),w=function(O){return Tn(X1(O),h)};u=function(O,f,c,d){p=c,w(O?O+"{"+f.styles+"}":f.styles),d&&(g.inserted[f.name]=!0)}}var g={key:n,sheet:new M1({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:u};return g.sheet.hydrate(l),g},qp={exports:{}},F={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se=typeof Symbol=="function"&&Symbol.for,bu=se?Symbol.for("react.element"):60103,Uu=se?Symbol.for("react.portal"):60106,$o=se?Symbol.for("react.fragment"):60107,jo=se?Symbol.for("react.strict_mode"):60108,Mo=se?Symbol.for("react.profiler"):60114,Ro=se?Symbol.for("react.provider"):60109,Io=se?Symbol.for("react.context"):60110,Bu=se?Symbol.for("react.async_mode"):60111,Do=se?Symbol.for("react.concurrent_mode"):60111,Fo=se?Symbol.for("react.forward_ref"):60112,Ao=se?Symbol.for("react.suspense"):60113,sy=se?Symbol.for("react.suspense_list"):60120,Ho=se?Symbol.for("react.memo"):60115,bo=se?Symbol.for("react.lazy"):60116,cy=se?Symbol.for("react.block"):60121,fy=se?Symbol.for("react.fundamental"):60117,dy=se?Symbol.for("react.responder"):60118,py=se?Symbol.for("react.scope"):60119;function De(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case bu:switch(e=e.type,e){case Bu:case Do:case $o:case Mo:case jo:case Ao:return e;default:switch(e=e&&e.$$typeof,e){case Io:case Fo:case bo:case Ho:case Ro:return e;default:return t}}case Uu:return t}}}function Tp(e){return De(e)===Do}F.AsyncMode=Bu;F.ConcurrentMode=Do;F.ContextConsumer=Io;F.ContextProvider=Ro;F.Element=bu;F.ForwardRef=Fo;F.Fragment=$o;F.Lazy=bo;F.Memo=Ho;F.Portal=Uu;F.Profiler=Mo;F.StrictMode=jo;F.Suspense=Ao;F.isAsyncMode=function(e){return Tp(e)||De(e)===Bu};F.isConcurrentMode=Tp;F.isContextConsumer=function(e){return De(e)===Io};F.isContextProvider=function(e){return De(e)===Ro};F.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===bu};F.isForwardRef=function(e){return De(e)===Fo};F.isFragment=function(e){return De(e)===$o};F.isLazy=function(e){return De(e)===bo};F.isMemo=function(e){return De(e)===Ho};F.isPortal=function(e){return De(e)===Uu};F.isProfiler=function(e){return De(e)===Mo};F.isStrictMode=function(e){return De(e)===jo};F.isSuspense=function(e){return De(e)===Ao};F.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===$o||e===Do||e===Mo||e===jo||e===Ao||e===sy||typeof e=="object"&&e!==null&&(e.$$typeof===bo||e.$$typeof===Ho||e.$$typeof===Ro||e.$$typeof===Io||e.$$typeof===Fo||e.$$typeof===fy||e.$$typeof===dy||e.$$typeof===py||e.$$typeof===cy)};F.typeOf=De;qp.exports=F;var my=qp.exports,Op=my,hy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Np={};Np[Op.ForwardRef]=hy;Np[Op.Memo]=vy;var yy=!0;function Lp(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Wu=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||yy===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},zp=function(t,n,r){Wu(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function gy(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var wy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Sy=/[A-Z]|^ms/g,xy=/_EMO_([^_]+?)_([^]*?)_EMO_/g,$p=function(t){return t.charCodeAt(1)===45},Nc=function(t){return t!=null&&typeof t!="boolean"},ja=ey(function(e){return $p(e)?e:e.replace(Sy,"-$&").toLowerCase()}),Lc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(xy,function(r,i,o){return rt={name:i,styles:o,next:rt},i})}return wy[t]!==1&&!$p(t)&&typeof n=="number"&&n!==0?n+"px":n};function Nr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return rt={name:n.name,styles:n.styles,next:rt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)rt={name:r.name,styles:r.styles,next:rt},r=r.next;var i=n.styles+";";return i}return ky(e,t,n)}case"function":{if(e!==void 0){var o=rt,a=n(e);return rt=o,Nr(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function ky(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Nr(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":Nc(a)&&(r+=ja(o)+":"+Lc(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)Nc(a[l])&&(r+=ja(o)+":"+Lc(o,a[l])+";");else{var u=Nr(e,t,a);switch(o){case"animation":case"animationName":{r+=ja(o)+":"+u+";";break}default:r+=o+"{"+u+"}"}}}return r}var zc=/label:\s*([^\s;\n{]+)\s*(;|$)/g,rt,Vu=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";rt=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Nr(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Nr(r,n,t[l]),i&&(o+=a[l]);zc.lastIndex=0;for(var u="",s;(s=zc.exec(o))!==null;)u+="-"+s[1];var p=gy(o)+u;return{name:p,styles:o,next:rt}},Ey=function(t){return t()},_y=Ju["useInsertionEffect"]?Ju["useInsertionEffect"]:!1,jp=_y||Ey,Qu={}.hasOwnProperty,Mp=$.createContext(typeof HTMLElement<"u"?uy({key:"css"}):null);Mp.Provider;var Rp=function(t){return $.forwardRef(function(n,r){var i=$.useContext(Mp);return t(n,i,r)})},Ip=$.createContext({}),$l="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Cy=function(t,n){var r={};for(var i in n)Qu.call(n,i)&&(r[i]=n[i]);return r[$l]=t,r},Py=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Wu(n,r,i),jp(function(){return zp(n,r,i)}),null},qy=Rp(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[$l],o=[r],a="";typeof e.className=="string"?a=Lp(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=Vu(o,void 0,$.useContext(Ip));a+=t.key+"-"+l.name;var u={};for(var s in e)Qu.call(e,s)&&s!=="css"&&s!==$l&&(u[s]=e[s]);return u.ref=n,u.className=a,$.createElement($.Fragment,null,$.createElement(Py,{cache:t,serialized:l,isStringTag:typeof i=="string"}),$.createElement(i,u))}),Ty=qy,Oy=x.Fragment;function ce(e,t,n){return Qu.call(t,"css")?x.jsx(Ty,Cy(e,t),n):x.jsx(e,t,n)}function Dp(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Vu(t)}var _=function(){var t=Dp.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Ny=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var o=t[r];if(o!=null){var a=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))a=e(o);else{a="";for(var l in o)o[l]&&l&&(a&&(a+=" "),a+=l)}break}default:a=o}a&&(i&&(i+=" "),i+=a)}}return i};function Ly(e,t,n){var r=[],i=Lp(e,r,n);return r.length<2?n:i+t(r)}var zy=function(t){var n=t.cache,r=t.serializedArr;return jp(function(){for(var i=0;i<r.length;i++)zp(n,r[i],!1)}),null},Ma=Rp(function(e,t){var n=!1,r=[],i=function(){for(var s=arguments.length,p=new Array(s),m=0;m<s;m++)p[m]=arguments[m];var h=Vu(p,t.registered);return r.push(h),Wu(t,h,!1),t.key+"-"+h.name},o=function(){for(var s=arguments.length,p=new Array(s),m=0;m<s;m++)p[m]=arguments[m];return Ly(t.registered,i,Ny(p))},a={css:i,cx:o,theme:$.useContext(Ip)},l=e.children(a);return n=!0,$.createElement($.Fragment,null,$.createElement(zy,{cache:t,serializedArr:r}),l)}),$y=Object.defineProperty,jy=(e,t,n)=>t in e?$y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,yi=(e,t,n)=>(jy(e,typeof t!="symbol"?t+"":t,n),n),jl=new Map,gi=new WeakMap,$c=0,My=void 0;function Ry(e){return e?(gi.has(e)||($c+=1,gi.set(e,$c.toString())),gi.get(e)):"0"}function Iy(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Ry(e.root):e[t]}`).toString()}function Dy(e){let t=Iy(e),n=jl.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver(a=>{a.forEach(l=>{var u;const s=l.isIntersecting&&i.some(p=>l.intersectionRatio>=p);e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=s),(u=r.get(l.target))==null||u.forEach(p=>{p(s,l)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},jl.set(t,n)}return n}function Fp(e,t,n={},r=My){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const u=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:i,observer:o,elements:a}=Dy(n);let l=a.get(e)||[];return a.has(e)||a.set(e,l),l.push(t),o.observe(e),function(){l.splice(l.indexOf(t),1),l.length===0&&(a.delete(e),o.unobserve(e)),a.size===0&&(o.disconnect(),jl.delete(i))}}function Fy(e){return typeof e.children!="function"}var jc=class extends $.Component{constructor(e){super(e),yi(this,"node",null),yi(this,"_unobserveCb",null),yi(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),yi(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Fy(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:o}=this.props;this._unobserveCb=Fp(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:w,entry:g}=this.state;return e({inView:w,entry:g,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:i,rootMargin:o,onChange:a,skip:l,trackVisibility:u,delay:s,initialInView:p,fallbackInView:m,...h}=this.props;return $.createElement(t||"div",{ref:this.handleNode,...h},e)}};function Ap({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:o,skip:a,initialInView:l,fallbackInView:u,onChange:s}={}){var p;const[m,h]=$.useState(null),w=$.useRef(),[g,v]=$.useState({inView:!!l,entry:void 0});w.current=s,$.useEffect(()=>{if(a||!m)return;let d;return d=Fp(m,(y,C)=>{v({inView:y,entry:C}),w.current&&w.current(y,C),C.isIntersecting&&o&&d&&(d(),d=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},u),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,m,i,r,o,a,n,u,t]);const O=(p=g.entry)==null?void 0:p.target,f=$.useRef();!m&&O&&!o&&!a&&f.current!==O&&(f.current=O,v({inView:!!l,entry:void 0}));const c=[h,g.inView,g.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}var Hp={exports:{}},A={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yu=Symbol.for("react.element"),Xu=Symbol.for("react.portal"),Uo=Symbol.for("react.fragment"),Bo=Symbol.for("react.strict_mode"),Wo=Symbol.for("react.profiler"),Vo=Symbol.for("react.provider"),Qo=Symbol.for("react.context"),Ay=Symbol.for("react.server_context"),Yo=Symbol.for("react.forward_ref"),Xo=Symbol.for("react.suspense"),Ko=Symbol.for("react.suspense_list"),Go=Symbol.for("react.memo"),Zo=Symbol.for("react.lazy"),Hy=Symbol.for("react.offscreen"),bp;bp=Symbol.for("react.module.reference");function We(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Yu:switch(e=e.type,e){case Uo:case Wo:case Bo:case Xo:case Ko:return e;default:switch(e=e&&e.$$typeof,e){case Ay:case Qo:case Yo:case Zo:case Go:case Vo:return e;default:return t}}case Xu:return t}}}A.ContextConsumer=Qo;A.ContextProvider=Vo;A.Element=Yu;A.ForwardRef=Yo;A.Fragment=Uo;A.Lazy=Zo;A.Memo=Go;A.Portal=Xu;A.Profiler=Wo;A.StrictMode=Bo;A.Suspense=Xo;A.SuspenseList=Ko;A.isAsyncMode=function(){return!1};A.isConcurrentMode=function(){return!1};A.isContextConsumer=function(e){return We(e)===Qo};A.isContextProvider=function(e){return We(e)===Vo};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yu};A.isForwardRef=function(e){return We(e)===Yo};A.isFragment=function(e){return We(e)===Uo};A.isLazy=function(e){return We(e)===Zo};A.isMemo=function(e){return We(e)===Go};A.isPortal=function(e){return We(e)===Xu};A.isProfiler=function(e){return We(e)===Wo};A.isStrictMode=function(e){return We(e)===Bo};A.isSuspense=function(e){return We(e)===Xo};A.isSuspenseList=function(e){return We(e)===Ko};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Uo||e===Wo||e===Bo||e===Xo||e===Ko||e===Hy||typeof e=="object"&&e!==null&&(e.$$typeof===Zo||e.$$typeof===Go||e.$$typeof===Vo||e.$$typeof===Qo||e.$$typeof===Yo||e.$$typeof===bp||e.getModuleId!==void 0)};A.typeOf=We;Hp.exports=A;var by=Hp.exports;_`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;_`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;_`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;_`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;_`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;_`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;const Up=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Uy({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Up,iterationCount:i=1}){return Dp`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function By(e){return e==null}function Wy(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Bp(e,t){return n=>n?e():t()}function Lr(e){return Bp(e,()=>null)}function Ml(e){return Lr(()=>({opacity:0}))(e)}const Wp=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:o=0,keyframes:a=Up,triggerOnce:l=!1,className:u,style:s,childClassName:p,childStyle:m,children:h,onVisibilityChange:w}=e,g=$.useMemo(()=>Uy({keyframes:a,duration:i}),[i,a]);return By(h)?null:Wy(h)?ce(Qy,{...e,animationStyles:g,children:String(h)}):by.isFragment(h)?ce(Vp,{...e,animationStyles:g}):ce(Oy,{children:$.Children.map(h,(v,O)=>{if(!$.isValidElement(v))return null;const f=r+(t?O*i*n:0);switch(v.type){case"ol":case"ul":return ce(Ma,{children:({cx:c})=>ce(v.type,{...v.props,className:c(u,v.props.className),style:Object.assign({},s,v.props.style),children:ce(Wp,{...e,children:v.props.children})})});case"li":return ce(jc,{threshold:o,triggerOnce:l,onChange:w,children:({inView:c,ref:d})=>ce(Ma,{children:({cx:y})=>ce(v.type,{...v.props,ref:d,className:y(p,v.props.className),css:Lr(()=>g)(c),style:Object.assign({},m,v.props.style,Ml(!c),{animationDelay:f+"ms"})})})});default:return ce(jc,{threshold:o,triggerOnce:l,onChange:w,children:({inView:c,ref:d})=>ce("div",{ref:d,className:u,css:Lr(()=>g)(c),style:Object.assign({},s,Ml(!c),{animationDelay:f+"ms"}),children:ce(Ma,{children:({cx:y})=>ce(v.type,{...v.props,className:y(p,v.props.className),style:Object.assign({},m,v.props.style)})})})})}})})},Vy={display:"inline-block",whiteSpace:"pre"},Qy=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:o=1e3,fraction:a=0,triggerOnce:l=!1,className:u,style:s,children:p,onVisibilityChange:m}=e,{ref:h,inView:w}=Ap({triggerOnce:l,threshold:a,onChange:m});return Bp(()=>ce("div",{ref:h,className:u,style:Object.assign({},s,Vy),children:p.split("").map((g,v)=>ce("span",{css:Lr(()=>t)(w),style:{animationDelay:i+v*o*r+"ms"},children:g},v))}),()=>ce(Vp,{...e,children:p}))(n)},Vp=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:o,children:a,onVisibilityChange:l}=e,{ref:u,inView:s}=Ap({triggerOnce:r,threshold:n,onChange:l});return ce("div",{ref:u,className:i,css:Lr(()=>t)(s),style:Object.assign({},o,Ml(!s)),children:a})};_`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;_`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;_`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;_`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;_`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`;_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`;_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;_`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;_`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;_`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;_`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;_`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;_`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;_`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;_`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const Yy=({paddingTop:e,title:t,id:n})=>x.jsx("section",{className:`mt-[50px]  ${e}`,id:n,children:x.jsx(Wp,{triggerOnce:!0,children:x.jsxs(x.Fragment,{children:[t,x.jsxs("div",{className:"flex justify-center",children:[x.jsx("p",{className:"w-[1000px] text-center",children:"Somos una empresa dentro de un consorcio dedicada a la publicidad digital, especializada en las redes sociales en el ámbito inmobiliario, donde nuestros principales proyectos son inmobiliarios como: Monarca Residencial, Las Primaveras, Hacienda Los Girasoles, 3 Puntos de Fuga, VATA Desarrollos Inmobiliarios, OCAR Arrendamientos, Sikada La Bloquera y próximamente Infinity View."}),x.jsx("div",{className:"flex"})]})]})})}),Xy=({paddingTop:e,title:t,id:n})=>x.jsxs("section",{className:`${e}`,id:n,children:[t,x.jsx("div",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, possimus tenetur assumenda et veniam eligendi adipisci ad. Magni consequuntur odio voluptates, cupiditate unde fuga aperiam nobis. Dicta veritatis excepturi officiis aut, harum, odit sapiente suscipit autem iste magnam atque libero. Ipsa harum itaque maiores. Debitis corrupti repudiandae nesciunt illo perspiciatis. Asperiores minima quis, est ipsum assumenda eum animi facere, sit non quae illum blanditiis labore dolorem ducimus! Rerum, accusantium quos corrupti dolores sed possimus obcaecati et iure consequuntur doloremque aspernatur perspiciatis non voluptate aliquid ad neque fugiat modi? Repellat atque consectetur numquam fugiat repellendus accusantium, cupiditate dolorem aperiam consequuntur quisquam aliquam sit explicabo ipsum eum obcaecati nisi cumque? Sequi consequatur aut enim aliquam quis blanditiis vitae rem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, possimus tenetur assumenda et veniam eligendi adipisci ad. Magni consequuntur odio voluptates, cupiditate unde fuga aperiam nobis. Dicta veritatis excepturi officiis aut, harum, odit sapiente suscipit autem iste magnam atque libero. Ipsa harum itaque maiores. Debitis corrupti repudiandae nesciunt illo perspiciatis. Asperiores minima quis, est ipsum assumenda eum animi facere, sit non quae illum blanditiis labore dolorem ducimus! Rerum, accusantium quos corrupti dolores sed possimus obcaecati et iure consequuntur doloremque aspernatur perspiciatis non voluptate aliquid ad neque fugiat modi? Repellat atque consectetur numquam fugiat repellendus accusantium, cupiditate dolorem aperiam consequuntur quisquam aliquam sit explicabo ipsum eum obcaecati nisi cumque? Sequi consequatur aut enim aliquam quis blanditiis vitae rem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, possimus tenetur assumenda et veniam eligendi adipisci ad. Magni consequuntur odio voluptates, cupiditate unde fuga aperiam nobis. Dicta veritatis excepturi officiis aut, harum, odit sapiente suscipit autem iste magnam atque libero. Ipsa harum itaque maiores. Debitis corrupti repudiandae nesciunt illo perspiciatis. Asperiores minima quis, est ipsum assumenda eum animi facere, sit non quae illum blanditiis labore dolorem ducimus! Rerum, accusantium quos corrupti dolores sed possimus obcaecati et iure consequuntur doloremque aspernatur perspiciatis non voluptate aliquid ad neque fugiat modi? Repellat atque consectetur numquam fugiat repellendus accusantium, cupiditate dolorem aperiam consequuntur quisquam aliquam sit explicabo ipsum eum obcaecati nisi cumque? Sequi consequatur aut enim aliquam quis blanditiis vitae rem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, possimus tenetur assumenda et veniam eligendi adipisci ad. Magni consequuntur odio voluptates, cupiditate unde fuga aperiam nobis. Dicta veritatis excepturi officiis aut, harum, odit sapiente suscipit autem iste magnam atque libero. Ipsa harum itaque maiores. Debitis corrupti repudiandae nesciunt illo perspiciatis. Asperiores minima quis, est ipsum assumenda eum animi facere, sit non quae illum blanditiis labore dolorem ducimus! Rerum, accusantium quos corrupti dolores sed possimus obcaecati et iure consequuntur doloremque aspernatur perspiciatis non voluptate aliquid ad neque fugiat modi? Repellat atque consectetur numquam fugiat repellendus accusantium, cupiditate dolorem aperiam consequuntur quisquam aliquam sit explicabo ipsum eum obcaecati nisi cumque? Sequi consequatur aut enim aliquam quis blanditiis vitae rem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, possimus tenetur assumenda et veniam eligendi adipisci ad. Magni consequuntur odio voluptates, cupiditate unde fuga aperiam nobis. Dicta veritatis excepturi officiis aut, harum, odit sapiente suscipit autem iste magnam atque libero. Ipsa harum itaque maiores. Debitis corrupti repudiandae nesciunt illo perspiciatis. Asperiores minima quis, est ipsum assumenda eum animi facere, sit non quae illum blanditiis labore dolorem ducimus! Rerum, accusantium quos corrupti dolores sed possimus obcaecati et iure consequuntur doloremque aspernatur perspiciatis non voluptate aliquid ad neque fugiat modi? Repellat atque consectetur numquam fugiat repellendus accusantium, cupiditate dolorem aperiam consequuntur quisquam aliquam sit explicabo ipsum eum obcaecati nisi cumque? Sequi consequatur aut enim aliquam quis blanditiis vitae rem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, possimus tenetur assumenda et veniam eligendi adipisci ad. Magni consequuntur odio voluptates, cupiditate unde fuga aperiam nobis. Dicta veritatis excepturi officiis aut, harum, odit sapiente suscipit autem iste magnam atque libero. Ipsa harum itaque maiores. Debitis corrupti repudiandae nesciunt illo perspiciatis. Asperiores minima quis, est ipsum assumenda eum animi facere, sit non quae illum blanditiis labore dolorem ducimus! Rerum, accusantium quos corrupti dolores sed possimus obcaecati et iure consequuntur doloremque aspernatur perspiciatis non voluptate aliquid ad neque fugiat modi? Repellat atque consectetur numquam fugiat repellendus accusantium, cupiditate dolorem aperiam consequuntur quisquam aliquam sit explicabo ipsum eum obcaecati nisi cumque? Sequi consequatur aut enim aliquam quis blanditiis vitae rem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, possimus tenetur assumenda et veniam eligendi adipisci ad. Magni consequuntur odio voluptates, cupiditate unde fuga aperiam nobis. Dicta veritatis excepturi officiis aut, harum, odit sapiente suscipit autem iste magnam atque libero. Ipsa harum itaque maiores. Debitis corrupti repudiandae nesciunt illo perspiciatis. Asperiores minima quis, est ipsum assumenda eum animi facere, sit non quae illum blanditiis labore dolorem ducimus! Rerum, accusantium quos corrupti dolores sed possimus obcaecati et iure consequuntur doloremque aspernatur perspiciatis non voluptate aliquid ad neque fugiat modi? Repellat atque consectetur numquam fugiat repellendus accusantium, cupiditate dolorem aperiam consequuntur quisquam aliquam sit explicabo ipsum eum obcaecati nisi cumque? Sequi consequatur aut enim aliquam quis blanditiis vitae rem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, possimus tenetur assumenda et veniam eligendi adipisci ad. Magni consequuntur odio voluptates, cupiditate unde fuga aperiam nobis. Dicta veritatis excepturi officiis aut, harum, odit sapiente suscipit autem iste magnam atque libero. Ipsa harum itaque maiores. Debitis corrupti repudiandae nesciunt illo perspiciatis. Asperiores minima quis, est ipsum assumenda eum animi facere, sit non quae illum blanditiis labore dolorem ducimus! Rerum, accusantium quos corrupti dolores sed possimus obcaecati et iure consequuntur doloremque aspernatur perspiciatis non voluptate aliquid ad neque fugiat modi? Repellat atque consectetur numquam fugiat repellendus accusantium, cupiditate dolorem aperiam consequuntur quisquam aliquam sit explicabo ipsum eum obcaecati nisi cumque? Sequi consequatur aut enim aliquam quis blanditiis vitae rem numquam fugiat repellendus accusantium, cupiditate dolorem aperiam consequuntur quisquam aliquam sit explicabo ipsum eum obcaecati nisi cumque? Sequi consequatur aut enim aliquam quis blanditiis vitae rem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, possimus tenetur assumenda et veniam eligendi adipisci ad. Magni consequuntur odio voluptates, cupiditate unde fuga aperiam nobis. Dicta veritatis excepturi officiis aut, harum, odit sapiente suscipit autem iste magnam atque libero. Ipsa harum itaque maiores. Debitis corrupti repudiandae nesciunt illo perspiciatis. Asperiores minima quis, est ipsum assumenda eum animi facere, sit non quae illum blanditiis labore dolorem ducimus! Rerum, accusantium quos corrupti dolores sed possimus obcaecati et iure consequuntur doloremque aspernatur perspiciatis non voluptate aliquid ad neque fugiat modi? Repellat atque consectetur numquam fugiat repellendus accusantium, cupiditate dolorem aperiam consequuntur quisquam aliquam sit explicabo ipsum eum obcaecati nisi cumque? Sequi consequatur aut enim aliquam quis blanditiis vitae rem"})]}),Ky=({paddingTop:e,title:t,id:n})=>x.jsxs("section",{className:`mb-[150px] ${e}`,id:n,children:[t,x.jsx("div",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error adipisci, culpa excepturi ab id, non et optio accusamus esse dolorem nihil deserunt quo nulla nam. Voluptatibus quo earum eius numquam corrupti doloremque quasi animi corporis natus recusandae aliquid, nam tenetur fuga magnam at nobis sed illo quod iste autem ducimus hic tempore veniam? Fuga voluptates laborum eius nostrum ipsam commodi aperiam corporis perspiciatis, quaerat veritatis odio! Eaque, dignissimos molestias deleniti itaque exercitationem repellendus doloribus magnam, ipsam rem voluptate sint quia. Est sint delectus molestias nisi ad cupiditate quaerat vel, ullam possimus sapiente, dolorem eius. Aspernatur neque repellendus, commodi velit perspiciatis ex ipsam mollitia consequatur ut dolore quo unde, dolorum debitis id voluptatibus facere officia culpa obcaecati consectetur recusandae? At veniam officiis repudiandae enim. Molestiae aperiam cupiditate voluptatem eum rem, quia vel facilis! Nemo, blanditiis! Magni quo quas repudiandae libero doloremque ad, explicabo a quam, atque minus vitae dolorem consectetur adipisci sed, assumenda aliquid! Illo neque laboriosam minima veritatis ea unde. Blanditiis dolore incidunt sapiente provident debitis ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque fuga doloremque, temporibus, reprehenderit voluptates autem nisi voluptate est, enim voluptatem hic mollitia nobis ratione aliquam laboriosam? Officiis nulla, harum, eum assumenda laboriosam totam quis sed dignissimos ullam voluptas reprehenderit eius dolor similique cumque rerum impedit deleniti dolores labore consequuntur fugit. Ipsam, illo placeat eaque ipsum sint aliquid quia eligendi dolores dolorum minus nulla nostrum quod enim quaerat animi soluta neque repellat error! Sint, totam. Labore cupiditate beatae sequi, fugiat quis sapiente inventore rem doloremque esse nam quo rerum dignissimos. Quasi, omnis, ex quo fuga molestiae eligendi molestias quae eaque explicabo, minima saepe. Atque, explicabo necessitatibus dolorem veniam neque perferendis excepturi iste quidem placeat sint voluptatem natus odio ad. Nesciunt, hic incidunt maxime exercitationem voluptates dignissimos beatae sint amet inventore sit numquam consectetur accusantium quam corrupti officia dolorum porro eius. Earum repellendus molestias enim. Possimus magni at soluta fugit voluptatem molestiae. Reprehenderit odit voluptas consequatur, nihil sapiente quasi maxime molestias magnam minima beatae obcaecati repellat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error adipisci, culpa excepturi ab id, non et optio accusamus esse dolorem nihil deserunt quo nulla nam. Voluptatibus quo earum eius numquam corrupti doloremque quasi animi corporis natus recusandae aliquid, nam tenetur fuga magnam at nobis sed illo quod iste autem ducimus hic tempore veniam? Fuga voluptates laborum eius nostrum ipsam commodi aperiam corporis perspiciatis, quaerat veritatis odio! Eaque, dignissimos molestias deleniti itaque exercitationem repellendus doloribus magnam, ipsam rem voluptate sint quia. Est sint delectus molestias nisi ad cupiditate quaerat vel, ullam possimus sapiente, dolorem eius. Aspernatur neque repellendus, commodi velit perspiciatis ex ipsam mollitia consequatur ut dolore quo unde, dolorum debitis id voluptatibus facere officia culpa obcaecati consectetur recusandae? At veniam officiis repudiandae enim. Molestiae aperiam cupiditate voluptatem eum rem, quia vel facilis! Nemo, blanditiis! Magni quo quas repudiandae libero doloremque ad, explicabo a quam, atque minus vitae dolorem consectetur adipisci sed, assumenda aliquid! Illo neque laboriosam minima veritatis ea unde. Blanditiis dolore incidunt sapiente provident debitis ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque fuga doloremque, temporibus, reprehenderit voluptates autem nisi voluptate est, enim voluptatem hic mollitia nobis ratione aliquam laboriosam? Officiis nulla, harum, eum assumenda laboriosam totam quis sed dignissimos ullam voluptas reprehenderit eius dolor similique cumque rerum impedit deleniti dolores labore consequuntur fugit. Ipsam, illo placeat eaque ipsum sint aliquid quia eligendi dolores dolorum minus nulla nostrum quod enim quaerat animi soluta neque repellat error! Sint, totam. Labore cupiditate beatae sequi, fugiat quis sapiente inventore rem doloremque esse nam quo rerum dignissimos. Quasi, omnis, ex quo fuga molestiae eligendi molestias quae eaque explicabo, minima saepe. Atque, explicabo necessitatibus dolorem veniam neque perferendis excepturi iste quidem placeat sint voluptatem natus odio ad. Nesciunt, hic incidunt maxime exercitationem voluptates dignissimos beatae sint amet inventore sit numquam consectetur accusantium quam corrupti officia dolorum porro eius. Earum repellendus molestias enim. Possimus magni at soluta fugit voluptatem molestiae. Reprehenderit odit voluptas consequatur, nihil sapiente quasi maxime molestias magnam minima beatae obcaecati repellat possimus tenetur assumenda et veniam eligendi adipisci ad. Magni consequuntur odio voluptates, cupiditate unde fuga aperiam nobis. Dicta veritatis excepturi officiis aut, harum, odit sapiente suscipit autem iste magnam atque libero. Ipsa harum itaque maiores. Debitis corrupti repudiandae nesciunt illo perspiciatis. Asperiores minima quis, est ipsum assumenda eum animi facere, sit non quae illum blanditiis labore dolorem ducimus! Rerum, accusantium quos corrupti dolores sed possimus obcaecati et iure consequuntur doloremque aspernatur perspiciatis non voluptate aliquid ad neque fugiat modi? Repellat atque consectetur numquam fugiat repellendus accusantium, cupiditate dolorem aperiam consequuntur quisquam aliquam sit explicabo ipsum eum obcaecati nisi cumque? Sequi consequatur aut enim aliquam quis blanditiis vitae rem numquam fugiat repellendus accusantium, cupiditate dolorem aperiam consequuntur quisquam aliquam sit explicabo ipsum eum obcaecati nisi cumque? Sequi consequatur aut enim aliquam quis blanditiis vitae rem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, possimus tenetur assumenda et veniam eligendi adipisci ad. Magni consequuntur odio voluptates, cupiditate unde fuga aperiam nobis. Dicta veritatis excepturi officiis aut, harum, odit sapiente suscipit autem iste magnam atque libero. Ipsa harum itaque maiores. Debitis corrupti repudiandae nesciunt illo perspiciatis. Asperiores minima quis, est ipsum assumenda eum animi facere, sit non quae illum blanditiis labore dolorem ducimus! Rerum, accusantium quos corrupti dolores sed possimus obcaecati et iure consequuntur doloremque aspernatur perspiciatis non voluptate aliquid ad neque fugiat modi? Repellat atque consectetur numquam fugiat repellendus accusantium, cupiditate dolorem aperiam consequuntur quisquam aliquam sit explicabo ipsum eum obcaecati nisi cumque? Sequi consequatur aut enim aliquam quis blanditiis vitae rem possimus tenetur assumenda et veniam eligendi adipisci ad. Magni consequuntur odio voluptates, cupiditate unde fuga aperiam nobis. Dicta veritatis excepturi officiis aut, harum, odit sapiente suscipit autem iste magnam atque libero. Ipsa harum itaque maiores. Debitis corrupti repudiandae nesciunt illo perspiciatis. Asperiores minima quis, est ipsum assumenda eum animi facere, sit non quae illum blanditiis labore dolorem ducimus! Rerum, accusantium quos corrupti dolores sed possimus obcaecati et iure consequuntur doloremque aspernatur perspiciatis non voluptate aliquid ad neque fugiat modi? Repellat atque consectetur numquam fugiat repellendus accusantium, cupiditate dolorem aperiam consequuntur quisquam aliquam sit explicabo ipsum eum obcaecati nisi cumque? Sequi consequatur aut enim aliquam quis blanditiis vitae rem numquam fugiat repellendus accusantium, cupiditate dolorem aperiam consequuntur quisquam aliquam sit explicabo ipsum eum obcaecati nisi cumque? Sequi consequatur aut enim aliquam quis blanditiis vitae rem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, possimus tenetur assumenda et veniam eligendi adipisci ad. Magni consequuntur odio voluptates, cupiditate unde fuga aperiam nobis. Dicta veritatis excepturi officiis aut, harum, odit sapiente suscipit autem iste magnam atque libero. Ipsa harum itaque maiores. Debitis corrupti repudiandae nesciunt illo perspiciatis. Asperiores minima quis, est ipsum assumenda eum animi facere, sit non quae illum blanditiis labore dolorem ducimus! Rerum, accusantium quos corrupti dolores sed possimus obcaecati et iure consequuntur doloremque aspernatur perspiciatis non voluptate aliquid ad neque fugiat modi? Repellat atque consectetur numquam fugiat repellendus accusantium, cupiditate dolorem aperiam consequuntur quisquam aliquam sit explicabo ipsum eum obcaecati nisi cumque? Sequi consequatur aut enim aliquam quis blanditiis vitae rem"})]}),Gy=({navItems:e})=>{const t="pt-28";return x.jsxs("div",{className:"container mx-auto flex w-[80%] flex-col gap-10 md:w-[100%] md:gap-40",children:[x.jsx(Yy,{title:e[1].SectionTitle,paddingTop:t,id:e[1].id}),x.jsx(Xy,{title:e[2].SectionTitle,paddingTop:t,id:e[2].id}),x.jsx(Ky,{title:e[3].SectionTitle,paddingTop:t,id:e[3].id})]})};function Zy(e){return Nu({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 3.172l-6.414 6.414c-.781.781-.781 2.047 0 2.828s2.047.781 2.828 0l1.586-1.586v7.242c0 1.104.895 2 2 2 1.104 0 2-.896 2-2v-7.242l1.586 1.586c.391.391.902.586 1.414.586s1.023-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-6.414-6.414z"}}]})(e)}const Jy=()=>{const[e,t]=$.useState(!1),n=()=>{window.pageYOffset>200?t(!0):t(!1)},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return $.useEffect(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}),[]),x.jsx("button",{onClick:r,className:` ${e?"visible opacity-100":"invisible opacity-0"} fixed bottom-4 right-4 rounded-xl border-4 border-gray-800 bg-primary p-3 text-white transition-all duration-300`,children:x.jsx(Zy,{className:" text-lg md:text-3xl"})})};function eg(){const e=[{NavTitle:"Inicio",id:"inicio",SectionTitle:x.jsx("h2",{children:"Inicio"})},{NavTitle:"¿Quienes somos?",id:"¿quienes somos?",SectionTitle:x.jsxs("h2",{className:"mb-9 text-center",children:["¿Quienes ",x.jsx("span",{className:" text-primary",children:"somos"}),"?"]})},{NavTitle:"Precios",id:"precios",SectionTitle:x.jsxs("h2",{className:"mb-9 text-center",children:[x.jsx("span",{className:" text-primary",children:"P"}),"recios"]})},{NavTitle:"Contacto",id:"contacto",SectionTitle:x.jsx("h2",{className:"mb-9 text-center underline decoration-primary decoration-[2px] underline-offset-8",children:"Contacto"})}];return x.jsxs("div",{className:" flex min-h-[100vh] flex-col",children:[x.jsx(N1,{navItems:e}),x.jsx(L1,{}),x.jsx(Gy,{navItems:e}),x.jsx(z1,{}),x.jsx(Jy,{})]})}Ra.createRoot(document.getElementById("root")).render(x.jsx(pt.StrictMode,{children:x.jsx(eg,{})}));
