import{u as ae,l as Be}from"./lodash-DUWtrxUu.js";import{u as rt}from"./chunk-DV5RB7II-DCWKsGYO.js";import{bh as L,bi as st,bj as ve,bk as re,bl as nt,bm as it,r as _,b as z,a0 as Ge,j as r,B as lt,m as O,ai as Q,bn as ie,T as U,z as Y,x as X,bo as G,bp as ot}from"./index-Y1lUIdzc.js";import{_ as me,a as Ue,b as ze,e as ut,i as be,c as ct,d as dt,f as se,g as pt}from"./_isIndex-DnXbCqj1.js";import{X as Ke}from"./x-mark-mini-DF1mQQBa.js";import{R as K,T as He,P as H,C as q,A as ft}from"./index-_7F4tK6e.js";import{D as he}from"./date-picker-BCWKbKWJ.js";import{R as gt,I as vt,a as mt}from"./index-DNYiGEVn.js";var bt=me;function ht(){this.__data__=new bt,this.size=0}var xt=ht;function yt(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a}var _t=yt;function jt(e){return this.__data__.get(e)}var $t=jt;function Tt(e){return this.__data__.has(e)}var wt=Tt,At=me,St=Ue,Ot=ze,Ct=200;function Nt(e,t){var a=this.__data__;if(a instanceof At){var s=a.__data__;if(!St||s.length<Ct-1)return s.push([e,t]),this.size=++a.size,this;a=this.__data__=new Ot(s)}return a.set(e,t),this.size=a.size,this}var Pt=Nt,Et=me,Dt=xt,It=_t,Ft=$t,Mt=wt,Lt=Pt;function R(e){var t=this.__data__=new Et(e);this.size=t.size}R.prototype.clear=Dt;R.prototype.delete=It;R.prototype.get=Ft;R.prototype.has=Mt;R.prototype.set=Lt;var Rt=R,kt="__lodash_hash_undefined__";function Vt(e){return this.__data__.set(e,kt),this}var Bt=Vt;function Gt(e){return this.__data__.has(e)}var Ut=Gt,zt=ze,Kt=Bt,Ht=Ut;function Z(e){var t=-1,a=e==null?0:e.length;for(this.__data__=new zt;++t<a;)this.add(e[t])}Z.prototype.add=Z.prototype.push=Kt;Z.prototype.has=Ht;var qt=Z;function Jt(e,t){for(var a=-1,s=e==null?0:e.length;++a<s;)if(t(e[a],a,e))return!0;return!1}var Wt=Jt;function Yt(e,t){return e.has(t)}var Xt=Yt,Qt=qt,Zt=Wt,ea=Xt,ta=1,aa=2;function ra(e,t,a,s,i,n){var u=a&ta,o=e.length,d=t.length;if(o!=d&&!(u&&d>o))return!1;var c=n.get(e),p=n.get(t);if(c&&p)return c==t&&p==e;var v=-1,b=!0,T=a&aa?new Qt:void 0;for(n.set(e,t),n.set(t,e);++v<o;){var l=e[v],g=t[v];if(s)var y=u?s(g,l,v,t,e,n):s(l,g,v,e,t,n);if(y!==void 0){if(y)continue;b=!1;break}if(T){if(!Zt(t,function(m,h){if(!ea(T,h)&&(l===m||i(l,m,a,s,n)))return T.push(h)})){b=!1;break}}else if(!(l===g||i(l,g,a,s,n))){b=!1;break}}return n.delete(e),n.delete(t),b}var qe=ra,sa=L,na=sa.Uint8Array,ia=na;function la(e){var t=-1,a=Array(e.size);return e.forEach(function(s,i){a[++t]=[i,s]}),a}var oa=la;function ua(e){var t=-1,a=Array(e.size);return e.forEach(function(s){a[++t]=s}),a}var ca=ua,xe=st,ye=ia,da=ut,pa=qe,fa=oa,ga=ca,va=1,ma=2,ba="[object Boolean]",ha="[object Date]",xa="[object Error]",ya="[object Map]",_a="[object Number]",ja="[object RegExp]",$a="[object Set]",Ta="[object String]",wa="[object Symbol]",Aa="[object ArrayBuffer]",Sa="[object DataView]",_e=xe?xe.prototype:void 0,le=_e?_e.valueOf:void 0;function Oa(e,t,a,s,i,n,u){switch(a){case Sa:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Aa:return!(e.byteLength!=t.byteLength||!n(new ye(e),new ye(t)));case ba:case ha:case _a:return da(+e,+t);case xa:return e.name==t.name&&e.message==t.message;case ja:case Ta:return e==t+"";case ya:var o=fa;case $a:var d=s&va;if(o||(o=ga),e.size!=t.size&&!d)return!1;var c=u.get(e);if(c)return c==t;s|=ma,u.set(e,t);var p=pa(o(e),o(t),s,i,n,u);return u.delete(e),p;case wa:if(le)return le.call(e)==le.call(t)}return!1}var Ca=Oa;function Na(e,t){for(var a=-1,s=t.length,i=e.length;++a<s;)e[i+a]=t[a];return e}var Pa=Na,Ea=Pa,Da=be;function Ia(e,t,a){var s=t(e);return Da(e)?s:Ea(s,a(e))}var Fa=Ia;function Ma(e,t){for(var a=-1,s=e==null?0:e.length,i=0,n=[];++a<s;){var u=e[a];t(u,a,e)&&(n[i++]=u)}return n}var La=Ma;function Ra(){return[]}var ka=Ra,Va=La,Ba=ka,Ga=Object.prototype,Ua=Ga.propertyIsEnumerable,je=Object.getOwnPropertySymbols,za=je?function(e){return e==null?[]:(e=Object(e),Va(je(e),function(t){return Ua.call(e,t)}))}:Ba,Ka=za;function Ha(e,t){for(var a=-1,s=Array(e);++a<e;)s[a]=t(a);return s}var qa=Ha,Ja=ve,Wa=re,Ya="[object Arguments]";function Xa(e){return Wa(e)&&Ja(e)==Ya}var Qa=Xa,$e=Qa,Za=re,Je=Object.prototype,er=Je.hasOwnProperty,tr=Je.propertyIsEnumerable,ar=$e(function(){return arguments}())?$e:function(e){return Za(e)&&er.call(e,"callee")&&!tr.call(e,"callee")},rr=ar,ee={exports:{}};function sr(){return!1}var nr=sr;ee.exports;(function(e,t){var a=L,s=nr,i=t&&!t.nodeType&&t,n=i&&!0&&e&&!e.nodeType&&e,u=n&&n.exports===i,o=u?a.Buffer:void 0,d=o?o.isBuffer:void 0,c=d||s;e.exports=c})(ee,ee.exports);var We=ee.exports,ir=9007199254740991;function lr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ir}var Ye=lr,or=ve,ur=Ye,cr=re,dr="[object Arguments]",pr="[object Array]",fr="[object Boolean]",gr="[object Date]",vr="[object Error]",mr="[object Function]",br="[object Map]",hr="[object Number]",xr="[object Object]",yr="[object RegExp]",_r="[object Set]",jr="[object String]",$r="[object WeakMap]",Tr="[object ArrayBuffer]",wr="[object DataView]",Ar="[object Float32Array]",Sr="[object Float64Array]",Or="[object Int8Array]",Cr="[object Int16Array]",Nr="[object Int32Array]",Pr="[object Uint8Array]",Er="[object Uint8ClampedArray]",Dr="[object Uint16Array]",Ir="[object Uint32Array]",j={};j[Ar]=j[Sr]=j[Or]=j[Cr]=j[Nr]=j[Pr]=j[Er]=j[Dr]=j[Ir]=!0;j[dr]=j[pr]=j[Tr]=j[fr]=j[wr]=j[gr]=j[vr]=j[mr]=j[br]=j[hr]=j[xr]=j[yr]=j[_r]=j[jr]=j[$r]=!1;function Fr(e){return cr(e)&&ur(e.length)&&!!j[or(e)]}var Mr=Fr;function Lr(e){return function(t){return e(t)}}var Rr=Lr,te={exports:{}};te.exports;(function(e,t){var a=nt,s=t&&!t.nodeType&&t,i=s&&!0&&e&&!e.nodeType&&e,n=i&&i.exports===s,u=n&&a.process,o=function(){try{var d=i&&i.require&&i.require("util").types;return d||u&&u.binding&&u.binding("util")}catch{}}();e.exports=o})(te,te.exports);var kr=te.exports,Vr=Mr,Br=Rr,Te=kr,we=Te&&Te.isTypedArray,Gr=we?Br(we):Vr,Xe=Gr,Ur=qa,zr=rr,Kr=be,Hr=We,qr=ct,Jr=Xe,Wr=Object.prototype,Yr=Wr.hasOwnProperty;function Xr(e,t){var a=Kr(e),s=!a&&zr(e),i=!a&&!s&&Hr(e),n=!a&&!s&&!i&&Jr(e),u=a||s||i||n,o=u?Ur(e.length,String):[],d=o.length;for(var c in e)(t||Yr.call(e,c))&&!(u&&(c=="length"||i&&(c=="offset"||c=="parent")||n&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||qr(c,d)))&&o.push(c);return o}var Qr=Xr,Zr=Object.prototype;function es(e){var t=e&&e.constructor,a=typeof t=="function"&&t.prototype||Zr;return e===a}var ts=es;function as(e,t){return function(a){return e(t(a))}}var rs=as,ss=rs,ns=ss(Object.keys,Object),is=ns,ls=ts,os=is,us=Object.prototype,cs=us.hasOwnProperty;function ds(e){if(!ls(e))return os(e);var t=[];for(var a in Object(e))cs.call(e,a)&&a!="constructor"&&t.push(a);return t}var ps=ds,fs=dt,gs=Ye;function vs(e){return e!=null&&gs(e.length)&&!fs(e)}var ms=vs,bs=Qr,hs=ps,xs=ms;function ys(e){return xs(e)?bs(e):hs(e)}var _s=ys,js=Fa,$s=Ka,Ts=_s;function ws(e){return js(e,Ts,$s)}var As=ws,Ae=As,Ss=1,Os=Object.prototype,Cs=Os.hasOwnProperty;function Ns(e,t,a,s,i,n){var u=a&Ss,o=Ae(e),d=o.length,c=Ae(t),p=c.length;if(d!=p&&!u)return!1;for(var v=d;v--;){var b=o[v];if(!(u?b in t:Cs.call(t,b)))return!1}var T=n.get(e),l=n.get(t);if(T&&l)return T==t&&l==e;var g=!0;n.set(e,t),n.set(t,e);for(var y=u;++v<d;){b=o[v];var m=e[b],h=t[b];if(s)var w=u?s(h,m,b,t,e,n):s(m,h,b,e,t,n);if(!(w===void 0?m===h||i(m,h,a,s,n):w)){g=!1;break}y||(y=b=="constructor")}if(g&&!y){var A=e.constructor,N=t.constructor;A!=N&&"constructor"in e&&"constructor"in t&&!(typeof A=="function"&&A instanceof A&&typeof N=="function"&&N instanceof N)&&(g=!1)}return n.delete(e),n.delete(t),g}var Ps=Ns,Es=se,Ds=L,Is=Es(Ds,"DataView"),Fs=Is,Ms=se,Ls=L,Rs=Ms(Ls,"Promise"),ks=Rs,Vs=se,Bs=L,Gs=Vs(Bs,"Set"),Us=Gs,zs=se,Ks=L,Hs=zs(Ks,"WeakMap"),qs=Hs,ce=Fs,de=Ue,pe=ks,fe=Us,ge=qs,Qe=ve,k=pt,Se="[object Map]",Js="[object Object]",Oe="[object Promise]",Ce="[object Set]",Ne="[object WeakMap]",Pe="[object DataView]",Ws=k(ce),Ys=k(de),Xs=k(pe),Qs=k(fe),Zs=k(ge),I=Qe;(ce&&I(new ce(new ArrayBuffer(1)))!=Pe||de&&I(new de)!=Se||pe&&I(pe.resolve())!=Oe||fe&&I(new fe)!=Ce||ge&&I(new ge)!=Ne)&&(I=function(e){var t=Qe(e),a=t==Js?e.constructor:void 0,s=a?k(a):"";if(s)switch(s){case Ws:return Pe;case Ys:return Se;case Xs:return Oe;case Qs:return Ce;case Zs:return Ne}return t});var en=I,oe=Rt,tn=qe,an=Ca,rn=Ps,Ee=en,De=be,Ie=We,sn=Xe,nn=1,Fe="[object Arguments]",Me="[object Array]",W="[object Object]",ln=Object.prototype,Le=ln.hasOwnProperty;function on(e,t,a,s,i,n){var u=De(e),o=De(t),d=u?Me:Ee(e),c=o?Me:Ee(t);d=d==Fe?W:d,c=c==Fe?W:c;var p=d==W,v=c==W,b=d==c;if(b&&Ie(e)){if(!Ie(t))return!1;u=!0,p=!1}if(b&&!p)return n||(n=new oe),u||sn(e)?tn(e,t,a,s,i,n):an(e,t,d,a,s,i,n);if(!(a&nn)){var T=p&&Le.call(e,"__wrapped__"),l=v&&Le.call(t,"__wrapped__");if(T||l){var g=T?e.value():e,y=l?t.value():t;return n||(n=new oe),i(g,y,a,s,n)}}return b?(n||(n=new oe),rn(e,t,a,s,i,n)):!1}var un=on,cn=un,Re=re;function Ze(e,t,a,s,i){return e===t?!0:e==null||t==null||!Re(e)&&!Re(t)?e!==e&&t!==t:cn(e,t,a,s,Ze,i)}var dn=Ze,pn=dn;function fn(e,t){return pn(e,t)}var gn=fn;const vn=it(gn);var et=_.createContext(null),J=()=>{const e=_.useContext(et);if(!e)throw new Error("useDataTableFacetedFilterContext must be used within a DataTableFacetedFilter");return e},mn=({hadPreviousValue:e,label:t,value:a,readonly:s,hasOperator:i,onRemove:n})=>{const{t:u}=z(),o=d=>{d.stopPropagation(),n()};return r.jsxs("div",{className:"bg-ui-bg-field transition-fg shadow-borders-base text-ui-fg-subtle flex cursor-default select-none items-stretch overflow-hidden rounded-md",children:[!e&&r.jsx(ft,{}),r.jsx("div",{className:O("flex items-center justify-center whitespace-nowrap px-2 py-1",{"border-r":!!(a||e)}),children:r.jsx(U,{size:"small",weight:"plus",leading:"compact",children:t})}),r.jsxs("div",{className:"flex w-full items-center overflow-hidden",children:[i&&!!(a||e)&&r.jsx("div",{className:"border-r p-1 px-2",children:r.jsx(U,{size:"small",weight:"plus",leading:"compact",className:"text-ui-fg-muted",children:u("general.is")})}),!!(a||e)&&r.jsx(He,{asChild:!0,className:O("flex-1 cursor-pointer overflow-hidden border-r p-1 px-2",{"hover:bg-ui-bg-field-hover":!s,"data-[state=open]:bg-ui-bg-field-hover":!s}),children:r.jsx(U,{size:"small",leading:"compact",weight:"plus",className:"truncate text-nowrap",children:a||" "})})]}),!s&&!!(a||e)&&r.jsx("button",{onClick:o,className:O("text-ui-fg-muted transition-fg flex items-center justify-center p-1","hover:bg-ui-bg-subtle-hover","active:bg-ui-bg-subtle-pressed active:text-ui-fg-base"),children:r.jsx(Ke,{})})]})},ne=mn,bn=({filter:e,prefix:t,readonly:a,openOnMount:s})=>{const[i,n]=_.useState(s),[u,o]=_.useState(!1),{getFullDate:d}=rt(),{key:c,label:p}=e,{removeFilter:v}=J(),b=ae({param:c,prefix:t}),T=hn(),l=f=>{b.add(JSON.stringify(f)),o(!1)},g=()=>{b.delete(),o(f=>!f)},y=b.get(),m=xn(y),h=ke(m,"$gte"),w=ke(m,"$lte"),A=(f,C)=>{const B=C==="start"?"$gte":"$lte",at=f?f.toISOString():void 0;b.add(JSON.stringify({...m||{},[B]:at}))},N=()=>{const f=T.find(C=>vn(C.value,m));return f==null?void 0:f.label},F=f=>f?d({date:f}):void 0,E=()=>[h,w].map(F).filter(Boolean).join(" - "),D=N()||E(),[V,$]=_.useState(D),P=()=>{b.delete(),v(c)};let S=null;const x=f=>{n(f),$(D),S&&clearTimeout(S),!f&&!y.length&&(S=setTimeout(()=>{v(c)},200))};return r.jsxs(K,{modal:!0,open:i,onOpenChange:x,children:[r.jsx(ne,{hadPreviousValue:!!V,label:p,value:D,onRemove:P,readonly:a}),!a&&r.jsx(H,{children:r.jsxs(q,{"data-name":"date_filter_content",align:"start",sideOffset:8,collisionPadding:24,className:O("bg-ui-bg-base text-ui-fg-base shadow-elevation-flyout h-full max-h-[var(--radix-popper-available-height)] w-[300px] overflow-auto rounded-lg"),onInteractOutside:f=>{var C;f.target instanceof HTMLElement&&((C=f.target.attributes.getNamedItem("data-name"))==null?void 0:C.value)==="filters_menu_content"&&f.preventDefault()},children:[r.jsxs("ul",{className:"w-full p-1",children:[T.map(f=>{const C=b.get().includes(JSON.stringify(f.value));return r.jsx("li",{children:r.jsxs("button",{className:"bg-ui-bg-base hover:bg-ui-bg-base-hover focus-visible:bg-ui-bg-base-pressed text-ui-fg-base data-[disabled]:text-ui-fg-disabled txt-compact-small relative flex w-full cursor-pointer select-none items-center rounded-md px-2 py-1.5 outline-none transition-colors data-[disabled]:pointer-events-none",type:"button",onClick:()=>{l(f.value)},children:[r.jsx("div",{className:O("transition-fg flex h-5 w-5 items-center justify-center",{"[&_svg]:invisible":!C}),children:r.jsx(Q,{})}),f.label]})},f.label)}),r.jsx("li",{children:r.jsxs("button",{className:"bg-ui-bg-base hover:bg-ui-bg-base-hover focus-visible:bg-ui-bg-base-pressed text-ui-fg-base data-[disabled]:text-ui-fg-disabled txt-compact-small relative flex w-full cursor-pointer select-none items-center rounded-md px-2 py-1.5 outline-none transition-colors data-[disabled]:pointer-events-none",type:"button",onClick:g,children:[r.jsx("div",{className:O("transition-fg flex h-5 w-5 items-center justify-center",{"[&_svg]:invisible":!u}),children:r.jsx(Q,{})}),ie("filters.date.custom")]})})]}),u&&r.jsxs("div",{className:"border-t px-1 pb-3 pt-1",children:[r.jsxs("div",{children:[r.jsx("div",{className:"px-2 py-1",children:r.jsx(U,{size:"xsmall",leading:"compact",weight:"plus",children:ie("filters.date.from")})}),r.jsx("div",{className:"px-2 py-1",children:r.jsx(he,{modal:!0,maxValue:w,value:h,onChange:f=>A(f,"start")})})]}),r.jsxs("div",{children:[r.jsx("div",{className:"px-2 py-1",children:r.jsx(U,{size:"xsmall",leading:"compact",weight:"plus",children:ie("filters.date.to")})}),r.jsx("div",{className:"px-2 py-1",children:r.jsx(he,{modal:!0,minValue:h,value:w||void 0,onChange:f=>{A(f,"end")}})})]})]})]})})]})},M=new Date;M.setHours(0,0,0,0);var hn=()=>{const{t:e}=z();return _.useMemo(()=>[{label:e("filters.date.today"),value:{$gte:M.toISOString()}},{label:e("filters.date.lastSevenDays"),value:{$gte:new Date(M.getTime()-7*24*60*60*1e3).toISOString()}},{label:e("filters.date.lastThirtyDays"),value:{$gte:new Date(M.getTime()-30*24*60*60*1e3).toISOString()}},{label:e("filters.date.lastNinetyDays"),value:{$gte:new Date(M.getTime()-90*24*60*60*1e3).toISOString()}},{label:e("filters.date.lastTwelveMonths"),value:{$gte:new Date(M.getTime()-365*24*60*60*1e3).toISOString()}}],[e])},xn=e=>e!=null&&e.length?JSON.parse(e.join(",")):null,ke=(e,t)=>e!=null&&e[t]?new Date(e[t]):void 0,yn=({filter:e,prefix:t,readonly:a,openOnMount:s})=>{const{t:i}=z(),[n,u]=_.useState(s),{key:o,label:d}=e,{removeFilter:c}=J(),p=ae({param:o,prefix:t,multiple:!1}),v=p.get(),[b,T]=_.useState(v),[l,g]=_.useState(_n(v)),y=_.useCallback(Be.debounce(($,P)=>{const S=$.target.value,x=JSON.parse((v==null?void 0:v.join(","))||"{}"),f=!isNaN(Number(x)),C=B=>{if(!S&&f){p.delete();return}if(x&&!S){delete x[B],p.add(JSON.stringify(x));return}if(!x){p.add(JSON.stringify({[B]:S}));return}p.add(JSON.stringify({...x,[B]:S}))};switch(P){case"eq":S?p.add(S):p.delete();break;case"lt":case"gt":C(P);break}},500),[p,v]);_.useEffect(()=>()=>{y.cancel()},[y]);let m=null;const h=$=>{u($),T(v),m&&clearTimeout(m),!$&&!v.length&&(m=setTimeout(()=>{c(o)},200))},w=()=>{p.delete(),c(o)},A=[{operator:"exact",label:i("filters.compare.exact")},{operator:"range",label:i("filters.compare.range")}],N=`${o}-gt`,F=`${o}-lt`,E=o,D=Ve(v,i),V=Ve(b,i);return r.jsxs(K,{modal:!0,open:n,onOpenChange:h,children:[r.jsx(ne,{hasOperator:!0,hadPreviousValue:!!V,label:d,value:D,onRemove:w,readonly:a}),!a&&r.jsx(H,{children:r.jsxs(q,{"data-name":"number_filter_content",align:"start",sideOffset:8,collisionPadding:24,className:O("bg-ui-bg-base text-ui-fg-base shadow-elevation-flyout max-h-[var(--radix-popper-available-height)] w-[300px] divide-y overflow-y-auto rounded-lg outline-none"),onInteractOutside:$=>{var P;$.target instanceof HTMLElement&&((P=$.target.attributes.getNamedItem("data-name"))==null?void 0:P.value)==="filters_menu_content"&&$.preventDefault()},children:[r.jsx("div",{className:"p-1",children:r.jsx(gt,{value:l,onValueChange:$=>g($),className:"flex flex-col items-start",orientation:"vertical",autoFocus:!0,children:A.map($=>r.jsxs(vt,{value:$.operator,className:"txt-compact-small hover:bg-ui-bg-base-hover focus-visible:bg-ui-bg-base-hover active:bg-ui-bg-base-pressed transition-fg grid w-full grid-cols-[20px_1fr] gap-2 rounded-[4px] px-2 py-1.5 text-left outline-none",children:[r.jsx("div",{className:"size-5",children:r.jsx(mt,{children:r.jsx(Q,{})})}),r.jsx("span",{className:"w-full",children:$.label})]},$.operator))})}),r.jsx("div",{children:l==="range"?r.jsxs("div",{className:"px-1 pb-3 pt-1",children:[r.jsx("div",{className:"px-2 py-1.5",children:r.jsx(Y,{size:"xsmall",weight:"plus",htmlFor:N,children:i("filters.compare.greaterThan")})}),r.jsx("div",{className:"px-2 py-0.5",children:r.jsx(X,{name:N,size:"small",type:"number",defaultValue:ue(v,"gt"),onChange:$=>y($,"gt")})}),r.jsx("div",{className:"px-2 py-1.5",children:r.jsx(Y,{size:"xsmall",weight:"plus",htmlFor:F,children:i("filters.compare.lessThan")})}),r.jsx("div",{className:"px-2 py-0.5",children:r.jsx(X,{name:F,size:"small",type:"number",defaultValue:ue(v,"lt"),onChange:$=>y($,"lt")})})]},"range"):r.jsxs("div",{className:"px-1 pb-3 pt-1",children:[r.jsx("div",{className:"px-2 py-1.5",children:r.jsx(Y,{size:"xsmall",weight:"plus",htmlFor:E,children:d})}),r.jsx("div",{className:"px-2 py-0.5",children:r.jsx(X,{name:E,size:"small",type:"number",defaultValue:ue(v,"eq"),onChange:$=>y($,"eq")})})]},"exact")})]})})]})},Ve=(e,t)=>{const a=JSON.parse((e==null?void 0:e.join(","))||"{}");let s="";if(typeof a=="object"){const i=[];a.gt&&i.push(t("filters.compare.greaterThanLabel",{value:a.gt})),a.lt&&i.push(t("filters.compare.lessThanLabel",{value:a.lt})),s=i.join(` ${t("filters.compare.andLabel")} `)}return typeof a=="number"&&(s=a.toString()),s},tt=e=>{if(!e)return;const t=e.join(",");if(t)return JSON.parse(t)},ue=(e,t)=>{const a=tt(e);if(typeof a=="object")return a[t];if(typeof a=="number"&&t==="eq")return a},_n=e=>typeof tt(e)=="object"?"range":"exact",jn=({filter:e,prefix:t,readonly:a,multiple:s,searchable:i,options:n,openOnMount:u})=>{const[o,d]=_.useState(u),[c,p]=_.useState(""),[v,b]=_.useState(null),{t:T}=z(),{removeFilter:l}=J(),{key:g,label:y}=e,m=ae({param:g,prefix:t,multiple:s}),h=m.get(),w=h.map(x=>{var f;return(f=n.find(C=>C.value===x))==null?void 0:f.label}).filter(Boolean),[A,N]=_.useState(w),F=()=>{m.delete(),l(g)};let E=null;const D=x=>{d(x),N(w),E&&clearTimeout(E),!x&&!h.length&&(E=setTimeout(()=>{l(g)},200))},V=()=>{p(""),v&&v.focus()},$=x=>{m.get().includes(String(x))?m.delete(String(x)):m.add(String(x))},P=w?Array.isArray(w)?w:[w]:null,S=A?Array.isArray(A)?A:[A]:null;return r.jsxs(K,{modal:!0,open:o,onOpenChange:D,children:[r.jsx(ne,{hasOperator:!0,hadPreviousValue:!!(S!=null&&S.length),readonly:a,label:y,value:P==null?void 0:P.join(", "),onRemove:F}),!a&&r.jsx(H,{children:r.jsx(q,{hideWhenDetached:!0,align:"start",sideOffset:8,collisionPadding:8,className:O("bg-ui-bg-base text-ui-fg-base shadow-elevation-flyout z-[1] h-full max-h-[200px] w-[300px] overflow-hidden rounded-lg outline-none"),onInteractOutside:x=>{var f;x.target instanceof HTMLElement&&((f=x.target.attributes.getNamedItem("data-name"))==null?void 0:f.value)==="filters_menu_content"&&(x.preventDefault(),x.stopPropagation())},children:r.jsxs(G,{className:"h-full",children:[i&&r.jsx("div",{className:"border-b p-1",children:r.jsxs("div",{className:"grid grid-cols-[1fr_20px] gap-x-2 rounded-md px-2 py-1",children:[r.jsx(G.Input,{ref:b,value:c,onValueChange:p,className:"txt-compact-small placeholder:text-ui-fg-muted bg-transparent outline-none",placeholder:"Search"}),r.jsx("div",{className:"flex h-5 w-5 items-center justify-center",children:r.jsx("button",{disabled:!c,onClick:V,className:O("transition-fg text-ui-fg-muted focus-visible:bg-ui-bg-base-pressed rounded-md outline-none",{invisible:!c}),children:r.jsx(Ke,{})})})]})}),r.jsx(G.Empty,{className:"txt-compact-small flex items-center justify-center p-1",children:r.jsx("span",{className:"w-full px-2 py-1 text-center",children:T("general.noResultsTitle")})}),r.jsx(G.List,{className:"h-full max-h-[163px] min-h-[0] overflow-auto p-1 outline-none",children:n.map(x=>{const f=m.get().includes(String(x.value));return r.jsxs(G.Item,{className:"bg-ui-bg-base hover:bg-ui-bg-base-hover aria-selected:bg-ui-bg-base-pressed focus-visible:bg-ui-bg-base-pressed text-ui-fg-base data-[disabled]:text-ui-fg-disabled txt-compact-small relative flex cursor-pointer select-none items-center gap-x-2 rounded-md px-2 py-1.5 outline-none transition-colors data-[disabled]:pointer-events-none",value:x.label,onSelect:()=>{$(x.value)},children:[r.jsx("div",{className:O("transition-fg flex h-5 w-5 items-center justify-center",{"[&_svg]:invisible":!f}),children:s?r.jsx(ot,{}):r.jsx(Q,{})}),x.label]},String(x.value))})})]})})})]})},$n=({filter:e,prefix:t,readonly:a,openOnMount:s})=>{const[i,n]=_.useState(s),{key:u,label:o}=e,{removeFilter:d}=J(),c=ae({param:u,prefix:t}),p=c.get(),[v,b]=_.useState(p==null?void 0:p[0]),T=_.useCallback(Be.debounce(m=>{const h=m.target.value;h?c.add(h):c.delete()},500),[c]);_.useEffect(()=>()=>{T.cancel()},[T]);let l=null;const g=m=>{n(m),b(p==null?void 0:p[0]),l&&clearTimeout(l),!m&&!p.length&&(l=setTimeout(()=>{d(u)},200))},y=()=>{c.delete(),d(u)};return r.jsxs(K,{modal:!0,open:i,onOpenChange:g,children:[r.jsx(ne,{hasOperator:!0,hadPreviousValue:!!v,label:o,value:p==null?void 0:p[0],onRemove:y,readonly:a}),!a&&r.jsx(H,{children:r.jsx(q,{hideWhenDetached:!0,align:"start",sideOffset:8,collisionPadding:8,className:O("bg-ui-bg-base text-ui-fg-base shadow-elevation-flyout z-[1] h-full max-h-[200px] w-[300px] overflow-hidden rounded-lg outline-none"),onInteractOutside:m=>{var h;m.target instanceof HTMLElement&&((h=m.target.attributes.getNamedItem("data-name"))==null?void 0:h.value)==="filters_menu_content"&&(m.preventDefault(),m.stopPropagation())},children:r.jsxs("div",{className:"px-1 pb-3 pt-1",children:[r.jsx("div",{className:"px-2 py-1.5",children:r.jsx(Y,{size:"xsmall",weight:"plus",htmlFor:u,children:o})}),r.jsx("div",{className:"px-2 py-0.5",children:r.jsx(X,{name:u,size:"small",defaultValue:(p==null?void 0:p[0])||void 0,onChange:T})})]})})})]})},In=({filters:e,readonly:t,prefix:a})=>{const{t:s}=z(),[i]=Ge(),[n,u]=_.useState(!1),[o,d]=_.useState(wn({searchParams:i,filters:e,prefix:a})),c=e.filter(l=>!o.find(g=>g.key===l.key)),p=_.useRef(!0);_.useEffect(()=>{if(p.current){const l=new URLSearchParams(i);e.forEach(g=>{const y=a?`${a}_${g.key}`:g.key;l.get(y)&&!o.find(h=>h.key===g.key)&&(g.type==="select"?d(h=>[...h,{...g,multiple:g.multiple,options:g.options,openOnMount:!1}]):d(h=>[...h,{...g,openOnMount:!1}]))})}p.current=!1},[o,e,a,i]);const v=l=>{u(!1),d(g=>[...g,{...l,openOnMount:!0}])},b=_.useCallback(l=>{d(g=>g.filter(y=>y.key!==l))},[]),T=_.useCallback(()=>{d([])},[]);return r.jsx(et.Provider,{value:_.useMemo(()=>({removeFilter:b,removeAllFilters:T}),[T,b]),children:r.jsxs("div",{className:"max-w-2/3 flex flex-wrap items-center gap-2",children:[o.map(l=>{switch(l.type){case"select":return r.jsx(jn,{filter:l,prefix:a,readonly:t,options:l.options,multiple:l.multiple,searchable:l.searchable,openOnMount:l.openOnMount},l.key);case"date":return r.jsx(bn,{filter:l,prefix:a,readonly:t,openOnMount:l.openOnMount},l.key);case"string":return r.jsx($n,{filter:l,prefix:a,readonly:t,openOnMount:l.openOnMount},l.key);case"number":return r.jsx(yn,{filter:l,prefix:a,readonly:t,openOnMount:l.openOnMount},l.key)}}),!t&&c.length>0&&r.jsxs(K,{modal:!0,open:n,onOpenChange:u,children:[r.jsx(He,{asChild:!0,id:"filters_menu_trigger",children:r.jsx(lt,{size:"small",variant:"secondary",children:s("filters.addFilter")})}),r.jsx(H,{children:r.jsx(q,{className:O("bg-ui-bg-base text-ui-fg-base shadow-elevation-flyout z-[1] h-full max-h-[200px] w-[300px] overflow-auto rounded-lg p-1 outline-none"),"data-name":"filters_menu_content",align:"start",sideOffset:8,collisionPadding:8,onCloseAutoFocus:l=>{o.find(y=>y.openOnMount)&&l.preventDefault()},children:c.map(l=>r.jsx("div",{className:"bg-ui-bg-base hover:bg-ui-bg-base-hover focus-visible:bg-ui-bg-base-pressed text-ui-fg-base data-[disabled]:text-ui-fg-disabled txt-compact-small relative flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 outline-none transition-colors data-[disabled]:pointer-events-none",role:"menuitem",onClick:()=>{v(l)},children:l.label},l.key))})})]}),!t&&o.length>0&&r.jsx(Tn,{filters:e,prefix:a})]})})},Tn=({filters:e,prefix:t})=>{const{removeAllFilters:a}=J(),[s,i]=Ge(),n=()=>{i(u=>{const o=new URLSearchParams(u);return e.forEach(d=>{o.delete(t?`${t}_${d.key}`:d.key)}),o}),a()};return r.jsx("button",{type:"button",onClick:n,className:O("text-ui-fg-muted transition-fg txt-compact-small-plus rounded-md px-2 py-1","hover:text-ui-fg-subtle","focus-visible:shadow-borders-focus"),children:"Clear all"})},wn=({searchParams:e,filters:t,prefix:a})=>{const s=new URLSearchParams(e),i=[];return t.forEach(n=>{const u=a?`${a}_${n.key}`:n.key;s.get(u)&&(n.type==="select"?i.push({...n,multiple:n.multiple,options:n.options,openOnMount:!1}):i.push({...n,openOnMount:!1}))}),i};export{In as D};
