import{I as Fe}from"./chunk-QJ6SBVJ2-BUnWNUb0.js";import{R as _t,C as jt,O as yt}from"./chunk-P3DRE4IY-CArVFgiE.js";import{M as Le}from"./chunk-NNBHHXXN-Dw7XFATF.js";import{c as vt,d as It,e as Nt,u as St,f as Ct,g as Pt,h as Et,i as wt,j as qt,k as kt,l as At,m as Mt,n as Dt,o as Rt,p as Tt,q as Ot}from"./chunk-PZK777PT-CTViHBqS.js";import{g as Be}from"./chunk-PXZ7QYKX-DZ_CHK12.js";import{c as Ht,o as Ft}from"./chunk-VLT6UQCY-y__4KuSF.js";import{D as Lt}from"./chunk-7I5DQGWY-CwOWioty.js";import{a as J}from"./chunk-PDWBYQOW-BedvhUOI.js";import{a6 as O,R as Bt,u as zt,b as L,aS as Vt,aV as Ut,r as v,j as e,a8 as Gt,a9 as $t,cS as Qt,y as ze,t as R,H as je,B as ne,w as p,T as V,I as oe,ab as Xt,cW as Jt,aB as Ve,x as ye,A as Ue,X as Ee,s as Ge,cX as Wt}from"./index-Y1lUIdzc.js";import{P as $e,a as Qe}from"./chunk-IQBAUTU5-BDTfX8oe.js";import{u as Xe,_ as Je}from"./chunk-X3LH6P65-DvLbEi23.js";import"./lodash-DUWtrxUu.js";import{C as re}from"./chunk-3LLQ6F7F-qUyHTYvj.js";import{c as we}from"./chunk-MWVM4TYO-bKUcYSnf.js";import"./chunk-TMAS4ILY-t4ytNcuu.js";import{u as We}from"./chunk-C76H5USB-BCy-xx4z.js";import{u as Ke}from"./chunk-BF3VCHXD-CBkSj8cA.js";import{K as Kt}from"./chunk-6HTZNHPT-BhjAERei.js";import{R as $,u as Zt,a as Ze,S as z}from"./chunk-JGQGO74V-B5U9Jk_n.js";import{u as Yt}from"./use-prompt-BD90Slcr.js";import{P as qe}from"./pencil-square-CtD7b9NZ.js";import{D as en}from"./document-text-DnClgO6A.js";import{X as Ye}from"./x-circle-Cyz1COjb.js";import{A as et}from"./alert-D6y07IKk.js";import{C as ke}from"./currency-input-DILw1BJE.js";import{C as le}from"./checkbox-D7KNssHu.js";import{c as tt}from"./index-9K2jTE_Z.js";import"./Trans-Dnf3kPA_.js";import"./chunk-P3UUX2T6-Dg0JX98C.js";import"./chunk-YEDAFXMB-D3WzQLUo.js";import"./chunk-AOFGTNG6-Dpy6BdS0.js";import"./table-BdEctOfn.js";import"./chunk-WX2SMNCD-Bs4d-wZh.js";import"./plus-mini-Db18lP5m.js";import"./command-bar-BA0L0gzp.js";import"./index-_7F4tK6e.js";import"./x-mark-mini-DF1mQQBa.js";import"./triangles-mini-24hh2nEr.js";import"./chunk-DV5RB7II-DCWKsGYO.js";import"./format-BIas-G4J.js";import"./_isIndex-DnXbCqj1.js";import"./date-picker-BCWKbKWJ.js";import"./popover-Du9XRt9H.js";import"./triangle-left-mini-gvt7COK9.js";import"./index-DNYiGEVn.js";import"./prompt-4rFXDKY3.js";import"./index.esm-CvQH8Yji.js";var te=tt(),tn=i=>{const{t:l}=L();return v.useMemo(()=>[te.display({id:"select",header:({table:o})=>e.jsx(le,{checked:o.getIsSomePageRowsSelected()?"indeterminate":o.getIsAllPageRowsSelected(),onCheckedChange:d=>o.toggleAllPageRowsSelected(!!d)}),cell:({row:o})=>{const d=o.getCanSelect();return e.jsx(le,{disabled:!d,checked:o.getIsSelected(),onCheckedChange:n=>o.toggleSelected(!!n),onClick:n=>{n.stopPropagation()}})}}),te.display({id:"product",header:()=>e.jsx($e,{}),cell:({row:o})=>e.jsx(Qe,{product:{thumbnail:o.original.thumbnail,title:o.original.product_title}})}),te.accessor("variant.sku",{header:l("fields.sku"),cell:({getValue:o})=>o()||"-"}),te.accessor("variant.title",{header:l("fields.variant")}),te.accessor("quantity",{header:()=>e.jsx("div",{className:"flex size-full items-center overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:l("fields.quantity")})}),cell:({getValue:o,row:d})=>Be(d.original)}),te.accessor("refundable_total",{header:()=>e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:l("fields.price")})}),cell:({getValue:o})=>{const d=o()||0,n=J(d,i);return e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:n})})}})],[l,i])},nn=()=>{const{t:i}=L();return[{key:"returnable_quantity",label:i("orders.returns.returnableQuantityLabel"),type:"number"},{key:"refundable_amount",label:i("orders.returns.refundableAmountLabel"),type:"number"},{key:"created_at",label:i("fields.createdAt"),type:"date"},{key:"updated_at",label:i("fields.updatedAt"),type:"date"}]},sn=({pageSize:i=50,prefix:l})=>{const o=We(["q","offset","order","created_at","updated_at","returnable_quantity","refundable_amount"],l),{offset:d,created_at:n,updated_at:f,refundable_amount:m,returnable_quantity:y,...I}=o;return{searchParams:{...I,limit:i,offset:d?Number(d):0,created_at:n?JSON.parse(n):void 0,updated_at:f?JSON.parse(f):void 0,refundable_amount:m?JSON.parse(m):void 0,returnable_quantity:y?JSON.parse(y):void 0},raw:o}},fe=50,Ae="rit",an=({onSelectionChange:i,selectedItems:l,items:o,currencyCode:d})=>{const{t:n}=L(),[f,m]=v.useState(l.reduce((g,S)=>(g[S]=!0,g),{})),y=g=>{const S=typeof g=="function"?g(f):g;m(S),i(Object.keys(S))},{searchParams:I,raw:_}=sn({pageSize:fe,prefix:Ae}),E=v.useMemo(()=>{const{order:g,offset:S,limit:F,q:w,created_at:W,updated_at:K,refundable_amount:Z,returnable_quantity:Q}=I;let A=o;if(w&&(A=A.filter(B=>{var U;return B.product_title.toLowerCase().includes(w.toLowerCase())||B.variant_title.toLowerCase().includes(w.toLowerCase())||((U=B.variant_sku)==null?void 0:U.toLowerCase().includes(w.toLowerCase()))})),g){const B=g[0]==="-"?"desc":"asc",U=g.replace("-","");A=on(A,U,B)}return W&&(A=Me(A,W,"created_at")),K&&(A=Me(A,K,"updated_at")),Q&&(A=Re(A,Q,"returnable_quantity",d)),Z&&(A=Re(A,Z,"refundable_amount",d)),A.slice(S,S+F)},[o,d,I]),q=tn(d),k=nn(),{table:C}=Xe({data:E,columns:q,count:E.length,enablePagination:!0,getRowId:g=>g.id,pageSize:fe,enableRowSelection:g=>Be(g.original)>0,rowSelection:{state:f,updater:y}});return e.jsx("div",{className:"flex size-full flex-col overflow-hidden",children:e.jsx(Je,{table:C,columns:q,pageSize:fe,count:E.length,filters:k,pagination:!0,layout:"fill",search:!0,orderBy:[{key:"product_title",label:n("fields.product")},{key:"variant_title",label:n("fields.variant")},{key:"sku",label:n("fields.sku")},{key:"returnable_quantity",label:n("orders.fields.returnableQuantity")},{key:"refundable_amount",label:n("orders.fields.refundableAmount")}],prefix:Ae,queryObject:_})})},on=(i,l,o)=>i.sort((d,n)=>{let f,m;return l==="product_title"?(f=d.product_title,m=n.product_title):l==="variant_title"?(f=d.variant_title,m=n.variant_title):l==="sku"?(f=d.variant_sku,m=n.variant_sku):l==="returnable_quantity"?(f=d.quantity-(d.returned_quantity||0),m=n.quantity-(n.returned_quantity||0)):l==="refundable_amount"&&(f=d.refundable||0,m=n.refundable||0),f<m?o==="asc"?-1:1:f>m?o==="asc"?1:-1:0}),Me=(i,l,o)=>{const{gt:d,gte:n,lt:f,lte:m}=l;return i.filter(y=>{const I=new Date(y[o]);let _=!0;return d&&(_=_&&I>new Date(d)),n&&(_=_&&I>=new Date(n)),f&&(_=_&&I<new Date(f)),m&&(_=_&&I<=new Date(m)),_})},De={eq:void 0,gt:void 0,gte:void 0,lt:void 0,lte:void 0},Re=(i,l,o,d)=>{const{eq:n,gt:f,lt:m,gte:y,lte:I}=typeof l=="object"?{...De,...l}:{...De,eq:l};return i.filter(_=>{const E=_.quantity-(_.returned_quantity||0),q=J(_.refundable||0,d),k=o==="returnable_quantity"?E:q;if(n)return k===n;let C=!0;return f&&(C=C&&k>f),y&&(C=C&&k>=y),m&&(C=C&&k<m),I&&(C=C&&k<=I),C})};function rn({item:i,previewItem:l,currencyCode:o,form:d,onRemove:n,onUpdate:f,index:m}){const{t:y}=L(),{return_reasons:I=[]}=Jt({fields:"+label"}),_=d.watch(`inbound_items.${m}`),E=typeof _.reason_id=="string",q=typeof _.note=="string";return e.jsxs("div",{className:"bg-ui-bg-subtle shadow-elevation-card-rest my-2 rounded-xl ",children:[e.jsxs("div",{className:"flex flex-col items-center gap-x-2 gap-y-2 border-b p-3 text-sm md:flex-row",children:[e.jsxs("div",{className:"flex flex-1 items-center gap-x-3",children:[e.jsx(Ve,{src:i.thumbnail}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{children:[e.jsxs(V,{className:"txt-small",as:"span",weight:"plus",children:[i.title," "]}),i.variant_sku&&e.jsxs("span",{children:["(",i.variant_sku,")"]})]}),e.jsx(V,{as:"div",className:"text-ui-fg-subtle txt-small",children:i.product_title})]})]}),e.jsxs("div",{className:"flex flex-1 justify-between",children:[e.jsxs("div",{className:"flex flex-grow items-center gap-2",children:[e.jsx(p.Field,{control:d.control,name:`inbound_items.${m}.quantity`,render:({field:k})=>e.jsxs(p.Item,{children:[e.jsx(p.Control,{children:e.jsx(ye,{...k,className:"bg-ui-bg-base txt-small w-[67px] rounded-lg",min:1,max:i.quantity,type:"number",onBlur:C=>{const g=C.target.value,S=g===""?null:Number(g);k.onChange(S),S&&f({quantity:S})}})}),e.jsx(p.ErrorMessage,{})]})}),e.jsx(V,{className:"txt-small text-ui-fg-subtle",children:y("fields.qty")})]}),e.jsx("div",{className:"text-ui-fg-subtle txt-small mr-2 flex flex-shrink-0",children:e.jsx(Le,{currencyCode:o,amount:l.return_requested_total})}),e.jsx(Ue,{groups:[{actions:[!E&&{label:y("actions.addReason"),onClick:()=>d.setValue(`inbound_items.${m}.reason_id`,""),icon:e.jsx(jt,{})},!q&&{label:y("actions.addNote"),onClick:()=>d.setValue(`inbound_items.${m}.note`,""),icon:e.jsx(en,{})},{label:y("actions.remove"),onClick:n,icon:e.jsx(Ye,{})}].filter(Boolean)}]})]})]}),e.jsxs(e.Fragment,{children:[E&&e.jsxs("div",{className:"grid grid-cols-1 gap-2 p-3 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(p.Label,{children:y("orders.returns.reason")}),e.jsx(p.Hint,{className:"!mt-1",children:y("orders.returns.reasonHint")})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"flex-grow",children:e.jsx(p.Field,{control:d.control,name:`inbound_items.${m}.reason_id`,render:({field:{ref:k,value:C,onChange:g,...S}})=>e.jsxs(p.Item,{children:[e.jsx(p.Control,{children:e.jsx(re,{className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover",value:C,onChange:F=>{f({reason_id:F}),g(F)},...S,options:I.map(F=>({label:F.label,value:F.id}))})}),e.jsx(p.ErrorMessage,{})]})})}),e.jsx(oe,{type:"button",className:"flex-shrink",variant:"transparent",onClick:()=>{d.setValue(`inbound_items.${m}.reason_id`,null),f({reason_id:null})},children:e.jsx(Ee,{className:"text-ui-fg-muted"})})]})]}),q&&e.jsxs("div",{className:"grid grid-cols-1 gap-2 p-3 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(p.Label,{children:y("orders.returns.note")}),e.jsx(p.Hint,{className:"!mt-1",children:y("orders.returns.noteHint")})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"flex-grow",children:e.jsx(p.Field,{control:d.control,name:`inbound_items.${m}.note`,render:({field:{ref:k,...C}})=>e.jsxs(p.Item,{children:[e.jsx(p.Control,{children:e.jsx(ye,{...C,onBlur:()=>{C.onChange(C.value),f({internal_note:C.value})},className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover"})}),e.jsx(p.ErrorMessage,{})]})})}),e.jsx(oe,{type:"button",className:"flex-shrink",variant:"transparent",onClick:()=>{d.setValue(`inbound_items.${m}.note`,null),f({internal_note:null})},children:e.jsx(Ee,{className:"text-ui-fg-muted"})})]})]})]})]})}var ln=O.object({inbound_items:O.array(O.object({item_id:O.string(),quantity:O.number(),reason_id:O.string().nullish(),note:O.string().nullish()})),outbound_items:O.array(O.object({item_id:O.string(),quantity:O.number()})),location_id:O.string().optional(),inbound_option_id:O.string().nullish(),outbound_option_id:O.string().nullish(),send_notification:O.boolean().optional()}),ae=tt(),dn=i=>{const{t:l}=L();return v.useMemo(()=>[ae.display({id:"select",header:({table:o})=>e.jsx(le,{checked:o.getIsSomePageRowsSelected()?"indeterminate":o.getIsAllPageRowsSelected(),onCheckedChange:d=>o.toggleAllPageRowsSelected(!!d)}),cell:({row:o})=>{const d=o.getCanSelect();return e.jsx(le,{disabled:!d,checked:o.getIsSelected(),onCheckedChange:n=>o.toggleSelected(!!n),onClick:n=>{n.stopPropagation()}})}}),ae.display({id:"product",header:()=>e.jsx($e,{}),cell:({row:o})=>e.jsx(Qe,{product:o.original.product})}),ae.accessor("sku",{header:l("fields.sku"),cell:({getValue:o})=>o()||"-"}),ae.accessor("title",{header:l("fields.title")})],[l,i])},cn=()=>{const{t:i}=L();return[{key:"created_at",label:i("fields.createdAt"),type:"date"},{key:"updated_at",label:i("fields.updatedAt"),type:"date"}]},un=({pageSize:i=50,prefix:l})=>{const o=We(["q","offset","order","created_at","updated_at"],l),{offset:d,created_at:n,updated_at:f,...m}=o;return{searchParams:{...m,limit:i,offset:d?Number(d):0,created_at:n?JSON.parse(n):void 0,updated_at:f?JSON.parse(f):void 0},raw:o}},he=50,Te="rit",mn=({onSelectionChange:i,selectedItems:l,currencyCode:o})=>{const{t:d}=L(),[n,f]=v.useState(l.reduce((g,S)=>(g[S]=!0,g),{})),m=g=>{const S=typeof g=="function"?g(n):g;f(S),i(Object.keys(S))},{searchParams:y,raw:I}=un({pageSize:he,prefix:Te}),{variants:_=[],count:E}=Wt({...y,fields:"*inventory_items.inventory.location_levels,+inventory_quantity"}),q=dn(o),k=cn(),{table:C}=Xe({data:_,columns:q,count:E,enablePagination:!0,getRowId:g=>g.id,pageSize:he,enableRowSelection:g=>!0,rowSelection:{state:n,updater:m}});return e.jsx("div",{className:"flex size-full flex-col overflow-hidden",children:e.jsx(Je,{table:C,columns:q,pageSize:he,count:E,filters:k,pagination:!0,layout:"fill",search:!0,orderBy:[{key:"product_id",label:d("fields.product")},{key:"title",label:d("fields.title")},{key:"sku",label:d("fields.sku")}],prefix:Te,queryObject:I})})};function pn({previewItem:i,currencyCode:l,form:o,onRemove:d,onUpdate:n,index:f}){const{t:m}=L();return e.jsx("div",{className:"bg-ui-bg-subtle shadow-elevation-card-rest my-2 rounded-xl ",children:e.jsxs("div",{className:"flex flex-col items-center gap-x-2 gap-y-2 border-b p-3 text-sm md:flex-row",children:[e.jsxs("div",{className:"flex flex-1 items-center gap-x-3",children:[e.jsx(Ve,{src:i.thumbnail}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{children:[e.jsxs(V,{className:"txt-small",as:"span",weight:"plus",children:[i.title," "]}),i.variant_sku&&e.jsxs("span",{children:["(",i.variant_sku,")"]})]}),e.jsx(V,{as:"div",className:"text-ui-fg-subtle txt-small",children:i.product_title})]})]}),e.jsxs("div",{className:"flex flex-1 justify-between",children:[e.jsxs("div",{className:"flex flex-grow items-center gap-2",children:[e.jsx(p.Field,{control:o.control,name:`outbound_items.${f}.quantity`,render:({field:y})=>e.jsxs(p.Item,{children:[e.jsx(p.Control,{children:e.jsx(ye,{...y,className:"bg-ui-bg-base txt-small w-[67px] rounded-lg",min:1,type:"number",onBlur:I=>{const _=I.target.value,E=_===""?null:Number(_);y.onChange(E),E&&n({quantity:E})}})}),e.jsx(p.ErrorMessage,{})]})}),e.jsx(V,{className:"txt-small text-ui-fg-subtle",children:m("fields.qty")})]}),e.jsx("div",{className:"text-ui-fg-subtle txt-small mr-2 flex flex-shrink-0",children:e.jsx(Le,{currencyCode:l,amount:i.total})}),e.jsx(Ue,{groups:[{actions:[{label:m("actions.remove"),onClick:d,icon:e.jsx(Ye,{})}].filter(Boolean)}]})]})]})})}var xe=[],Oe=[],fn=({order:i,preview:l,claim:o,form:d})=>{const{t:n}=L(),{setIsOpen:f}=Ze(),[m,y]=v.useState({}),{shipping_options:I=[]}=Ke({limit:999,fields:"*prices,+service_zone.fulfillment_set.location.id"}),_=I.filter(b=>!!b.rules.find(h=>h.attribute==="is_return"&&h.value==="false")),{mutateAsync:E}=Mt(o.id,i.id),{mutateAsync:q}=Dt(o.id,i.id),{mutateAsync:k}=Rt(o.id,i.id),{mutateAsync:C}=Tt(o.id,i.id),{mutateAsync:g}=Ot(o.id,i.id),S=v.useMemo(()=>{var b;return(b=l==null?void 0:l.items)==null?void 0:b.filter(h=>{var u;return!!((u=h.actions)!=null&&u.find(x=>x.claim_id===o.id&&x.action==="ITEM_ADD"))})},[l.items]),F=v.useMemo(()=>{var b;return new Map((b=i==null?void 0:i.items)==null?void 0:b.map(h=>[h.variant_id,h]))},[i.items]),{fields:w,append:W,remove:K,update:Z}=ze({name:"outbound_items",control:d.control}),Q=v.useMemo(()=>new Map(S.map(b=>[b.variant_id,b])),[S,w]);v.useEffect(()=>{const b={};S.forEach(h=>{const u=w.findIndex(x=>x.item_id===h.id);b[h.id]=!0,u>-1?w[u].quantity!==h.detail.quantity&&Z(u,{...w[u],quantity:h.detail.quantity}):W({item_id:h.id,quantity:h.detail.quantity,variant_id:h.variant_id},{shouldFocus:!1})}),w.forEach((h,u)=>{h.item_id in b||K(u)})},[S]);const A=d.watch("location_id"),B=!w.length,U=async()=>{var b,h;xe.length&&await k({items:xe.map(u=>({variant_id:u,quantity:1}))},{onError:u=>{R.error(u.message)}});for(const u of Oe){const x=(h=(b=S.find(N=>N.variant_id===u))==null?void 0:b.actions)==null?void 0:h.find(N=>N.action==="ITEM_ADD");x!=null&&x.id&&await g(x==null?void 0:x.id,{onError:N=>{R.error(N.message)}})}f("outbound-items",!1)},de=async b=>{const u=l.shipping_methods.filter(x=>{var D;const N=(D=x.actions)==null?void 0:D.find(M=>M.action==="SHIPPING_ADD"&&!M.return_id);return N&&!(N!=null&&N.return_id)}).filter(Boolean).map(x=>{var D;const N=(D=x.actions)==null?void 0:D.find(M=>M.action==="SHIPPING_ADD"&&!M.return_id);if(N)return q(N.id)});await Promise.all(u),await E({shipping_option_id:b},{onError:x=>{R.error(x.message)}})},ce=v.useMemo(()=>A?!w.map(h=>{var x,N;const u=F.get(h.variant_id);return!(u!=null&&u.variant_id)||!(u!=null&&u.variant)||!((x=u.variant)!=null&&x.manage_inventory)?!0:(N=m[u.variant_id])==null?void 0:N.find(D=>D.location_id===A)}).every(Boolean):!1,[w,m,A]);return v.useEffect(()=>{(async()=>{const h={};if(!w.length)return h;const u=w.map(N=>N==null?void 0:N.variant_id).filter(Boolean);return(await Ge.admin.productVariant.list({id:u,fields:"*inventory.location_levels"})).variants.forEach(N=>{var D,M;h[N.id]=((M=(D=N.inventory)==null?void 0:D[0])==null?void 0:M.location_levels)||[]}),h})().then(h=>{y(h)})},[w]),e.jsxs("div",{children:[e.jsxs("div",{className:"mt-8 flex items-center justify-between",children:[e.jsx(je,{level:"h2",children:n("orders.returns.outbound")}),e.jsxs(z,{id:"outbound-items",children:[e.jsx(z.Trigger,{asChild:!0,children:e.jsx("a",{className:"focus-visible:shadow-borders-focus transition-fg txt-compact-small-plus cursor-pointer text-blue-500 outline-none hover:text-blue-400",children:n("actions.addItems")})}),e.jsxs(z.Content,{children:[e.jsx(z.Header,{}),e.jsx(mn,{selectedItems:w.map(b=>b.variant_id),currencyCode:i.currency_code,onSelectionChange:b=>{const h=w.map(u=>u.variant_id);xe=b.filter(u=>!h.includes(u)),Oe=h.filter(u=>!b.includes(u))}}),e.jsx(z.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx($.Close,{asChild:!0,children:e.jsx(ne,{type:"button",variant:"secondary",size:"small",children:n("actions.cancel")})}),e.jsx(ne,{type:"submit",variant:"primary",size:"small",role:"button",onClick:async()=>await U(),children:n("actions.save")},"submit-button")]})})})]})]})]}),B&&e.jsx(Fe,{}),w.map((b,h)=>Q.get(b.variant_id)&&e.jsx(pn,{previewItem:Q.get(b.variant_id),currencyCode:i.currency_code,form:d,onRemove:()=>{var x,N,D;const u=(D=(N=(x=S.find(M=>M.id===b.item_id))==null?void 0:x.actions)==null?void 0:N.find(M=>M.action==="ITEM_ADD"))==null?void 0:D.id;u&&g(u,{onError:M=>{R.error(M.message)}})},onUpdate:u=>{var N,D,M;const x=(M=(D=(N=S.find(X=>X.id===b.item_id))==null?void 0:N.actions)==null?void 0:D.find(X=>X.action==="ITEM_ADD"))==null?void 0:M.id;x&&C({...u,actionId:x},{onError:X=>{R.error(X.message)}})},index:h},b.id)),!B&&e.jsx("div",{className:"mt-8 flex flex-col gap-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(p.Label,{children:n("orders.claims.outboundShipping")}),e.jsx(p.Hint,{className:"!mt-1",children:n("orders.claims.outboundShippingHint")})]}),e.jsx(p.Field,{control:d.control,name:"outbound_option_id",render:({field:{value:b,onChange:h,...u}})=>e.jsx(p.Item,{children:e.jsx(p.Control,{children:e.jsx(re,{value:b??void 0,onChange:x=>{h(x),x&&de(x)},...u,options:_.map(x=>({label:x.name,value:x.id})),disabled:!_.length,noResultsPlaceholder:e.jsx(yt,{})})})})})]})}),ce&&e.jsxs(et,{variant:"warning",dismissible:!0,className:"mt-4 p-5",children:[e.jsx("div",{className:"text-ui-fg-subtle txt-small pb-2 font-medium leading-[20px]",children:n("orders.returns.noInventoryLevel")}),e.jsx(V,{className:"text-ui-fg-subtle txt-small leading-normal",children:n("orders.returns.noInventoryLevelDesc")})]})]})},ge=[],He=[],be=!1,hn=({order:i,preview:l,claim:o,orderReturn:d})=>{var Se;const{t:n}=L(),{handleSuccess:f}=Zt(),{setIsOpen:m}=Ze(),[y,I]=v.useState(!1),[_,E]=v.useState(!1),[q,k]=v.useState(0),[C,g]=v.useState(0),[S,F]=v.useState({}),{mutateAsync:w,isPending:W}=Nt(o.id,i.id),{mutateAsync:K,isPending:Z}=St(o.id,i.id),{mutateAsync:Q,isPending:A}=Ft((Se=l==null?void 0:l.order_change)==null?void 0:Se.return_id,i.id),{mutateAsync:B,isPending:U}=Ct(o.id,i.id),{mutateAsync:de,isPending:ce}=Pt(o.id,i.id),{mutateAsync:b,isPending:h}=Et(o.id,i.id),{mutateAsync:u,isPending:x}=wt(o.id,i.id),{mutateAsync:N,isPending:D}=qt(o.id,i.id),{mutateAsync:M,isPending:X}=kt(o.id,i.id),{mutateAsync:ve,isPending:nt}=At(o.id,i.id),st=W||Z||U||ce||x||h||D||nt||X||A,G=v.useMemo(()=>{var s;return(s=l==null?void 0:l.items)==null?void 0:s.filter(r=>{var t;return!!((t=r.actions)!=null&&t.find(a=>a.claim_id===o.id))})},[l.items]),se=G.filter(s=>{var r;return!!((r=s.actions)!=null&&r.find(t=>t.action==="RETURN_ITEM"))}),ue=G.filter(s=>{var r;return!!((r=s.actions)!=null&&r.find(t=>t.action==="ITEM_ADD"))}),me=v.useMemo(()=>{var s;return new Map((s=i==null?void 0:i.items)==null?void 0:s.map(r=>[r.id,r]))},[i.items]),T=Gt({defaultValues:()=>{const s=l.shipping_methods.find(t=>{var a;return!!((a=t.actions)!=null&&a.find(c=>c.action==="SHIPPING_ADD"&&!!c.return_id))}),r=l.shipping_methods.find(t=>{var a;return!!((a=t.actions)!=null&&a.find(c=>c.action==="SHIPPING_ADD"&&!c.return_id))});return Promise.resolve({inbound_items:se.map(t=>{var c,j;const a=(c=t.actions)==null?void 0:c.find(P=>P.action==="RETURN_ITEM");return{item_id:t.id,variant_id:t.variant_id,quantity:t.detail.return_requested_quantity,note:a==null?void 0:a.internal_note,reason_id:(j=a==null?void 0:a.details)==null?void 0:j.reason_id}}),outbound_items:ue.map(t=>({item_id:t.id,variant_id:t.variant_id,quantity:t.detail.quantity})),inbound_option_id:s?s.shipping_option_id:"",outbound_option_id:r?r.shipping_option_id:"",location_id:d==null?void 0:d.location_id,send_notification:!1})},resolver:$t(ln)}),Y=T.watch("location_id"),{stock_locations:it=[]}=Qt({limit:999}),{shipping_options:at=[]}=Ke({limit:999,fields:"*prices,+service_zone.fulfillment_set.location.id",stock_location_id:Y},{enabled:!!Y}),ot=at.filter(s=>!!s.rules.find(r=>r.attribute==="is_return"&&r.value==="true")),pe=l.shipping_methods.find(s=>{var r;return!!((r=s.actions)!=null&&r.find(t=>t.action==="SHIPPING_ADD"&&!!t.return_id))}),ee=l.shipping_methods.find(s=>{var r;return!!((r=s.actions)!=null&&r.find(t=>t.action==="SHIPPING_ADD"&&!t.return_id))});v.useEffect(()=>{pe&&k(pe.total)},[pe]),v.useEffect(()=>{ee&&g(ee.total)},[ee]);const{fields:H,append:rt,remove:lt,update:dt}=ze({name:"inbound_items",control:T.control}),Ie=v.useMemo(()=>new Map(G.map(s=>[s.id,s])),[G,H]);v.useEffect(()=>{const s={};se.forEach(r=>{var a,c;const t=H.findIndex(j=>j.item_id===r.id);if(s[r.id]=!0,t>-1){if(H[t].quantity!==r.detail.return_requested_quantity){const j=(a=r.actions)==null?void 0:a.find(P=>P.action==="RETURN_ITEM");dt(t,{...H[t],quantity:r.detail.return_requested_quantity,note:j==null?void 0:j.internal_note,reason_id:(c=j==null?void 0:j.details)==null?void 0:c.reason_id})}}else rt({item_id:r.id,quantity:r.detail.return_requested_quantity},{shouldFocus:!1})}),H.forEach((r,t)=>{r.item_id in s||lt(t)})},[G]),v.useEffect(()=>{const s=l.shipping_methods.find(t=>{var a;return!!((a=t.actions)!=null&&a.find(c=>c.action==="SHIPPING_ADD"&&!!c.return_id))});s?T.setValue("inbound_option_id",s.shipping_option_id):T.setValue("inbound_option_id",null);const r=l.shipping_methods.find(t=>{var a;return!!((a=t.actions)!=null&&a.find(c=>c.action==="SHIPPING_ADD"&&!c.return_id))});r?T.setValue("outbound_option_id",r.shipping_option_id):T.setValue("outbound_option_id",null)},[l.shipping_methods]),v.useEffect(()=>{T.setValue("location_id",d==null?void 0:d.location_id)},[d]);const ie=!se.length,Ne=!ue.length,ct=T.watch("inbound_option_id"),ut=T.watch("outbound_option_id"),mt=Yt(),pt=T.handleSubmit(async s=>{await mt({title:n("general.areYouSure"),description:n("orders.claims.confirmText"),confirmText:n("actions.continue"),cancelText:n("actions.cancel"),variant:"confirmation"})&&await w({no_notification:!s.send_notification},{onSuccess:()=>{R.success(n("orders.claims.toast.confirmedSuccessfully")),f()},onError:t=>{R.error(t.message)}})}),ft=async()=>{var s,r,t;ge.length&&await N({items:ge.map(a=>({id:a,quantity:1}))},{onError:a=>{R.error(a.message)}});for(const a of He){const c=(t=(r=(s=G.find(j=>j.id===a))==null?void 0:s.actions)==null?void 0:r.find(j=>j.action==="RETURN_ITEM"))==null?void 0:t.id;c&&await ve(c,{onError:j=>{R.error(j.message)}})}m("inbound-items",!1)},ht=async s=>{await Q({location_id:s})},xt=async s=>{const t=l.shipping_methods.filter(a=>{var j;const c=(j=a.actions)==null?void 0:j.find(P=>P.action==="SHIPPING_ADD"&&!!P.return_id);return c&&!(c!=null&&c.return_id)}).filter(Boolean).map(a=>{var j;const c=(j=a.actions)==null?void 0:j.find(P=>P.action==="SHIPPING_ADD"&&!!P.return_id);if(c)return u(c.id)});await Promise.all(t),await B({shipping_option_id:s},{onError:a=>{R.error(a.message)}})};v.useEffect(()=>{var s;y&&((s=document.getElementById("js-shipping-inbound-input"))==null||s.focus())},[y]),v.useEffect(()=>{var s;_&&((s=document.getElementById("js-shipping-outbound-input"))==null||s.focus())},[_]);const gt=v.useMemo(()=>Y?!H.map(r=>{var a,c;const t=me.get(r.item_id);return!(t!=null&&t.variant_id)||!(t!=null&&t.variant)||!((a=t.variant)!=null&&a.manage_inventory)?!0:(c=S[t.variant_id])==null?void 0:c.find(j=>j.location_id===Y)}).every(Boolean):!1,[H,S,Y]);v.useEffect(()=>{(async()=>{const r={};if(!H.length)return r;const t=H.map(c=>c==null?void 0:c.variant_id).filter(Boolean);return(await Ge.admin.productVariant.list({id:t,fields:"*inventory.location_levels"})).variants.forEach(c=>{var j,P;r[c.id]=((P=(j=c.inventory)==null?void 0:j[0])==null?void 0:P.location_levels)||[]}),r})().then(r=>{F(r)})},[H]),v.useEffect(()=>()=>{be&&(K(void 0,{onSuccess:()=>{R.success(n("orders.claims.actions.cancelClaim.successToast"))},onError:s=>{R.error(s.message)}}),be=!1)},[]);const bt=v.useMemo(()=>{const s=l.shipping_methods.find(r=>{var t;return!!((t=r.actions)!=null&&t.find(a=>a.action==="SHIPPING_ADD"&&!!a.return_id))});return(s==null?void 0:s.total)||0},[l.shipping_methods]);return e.jsx($.Form,{form:T,children:e.jsxs(Kt,{onSubmit:pt,className:"flex h-full flex-col",children:[e.jsx($.Header,{}),e.jsx($.Body,{className:"flex size-full justify-center overflow-y-auto",children:e.jsxs("div",{className:"mt-16 w-[720px] max-w-[100%] px-4 md:p-0",children:[e.jsx(je,{level:"h1",children:n("orders.claims.create")}),e.jsxs("div",{className:"mt-8 flex items-center justify-between",children:[e.jsx(je,{level:"h2",children:n("orders.returns.inbound")}),e.jsxs(z,{id:"inbound-items",children:[e.jsx(z.Trigger,{asChild:!0,children:e.jsx("a",{className:"focus-visible:shadow-borders-focus transition-fg txt-compact-small-plus cursor-pointer text-blue-500 outline-none hover:text-blue-400",children:n("actions.addItems")})}),e.jsxs(z.Content,{children:[e.jsx(z.Header,{}),e.jsx(an,{items:i.items,selectedItems:H.map(s=>s.item_id),currencyCode:i.currency_code,onSelectionChange:s=>{const r=H.map(t=>t.item_id);ge=s.filter(t=>!r.includes(t)),He=r.filter(t=>!s.includes(t))}}),e.jsx(z.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx($.Close,{asChild:!0,children:e.jsx(ne,{type:"button",variant:"secondary",size:"small",children:n("actions.cancel")})}),e.jsx(ne,{type:"submit",variant:"primary",size:"small",role:"button",onClick:async()=>await ft(),children:n("actions.save")},"submit-button")]})})})]})]})]}),ie&&e.jsx(Fe,{}),H.map((s,r)=>Ie.get(s.item_id)&&me.get(s.item_id)&&e.jsx(rn,{item:me.get(s.item_id),previewItem:Ie.get(s.item_id),currencyCode:i.currency_code,form:T,onRemove:()=>{var a,c,j;const t=(j=(c=(a=G.find(P=>P.id===s.item_id))==null?void 0:a.actions)==null?void 0:c.find(P=>P.action==="RETURN_ITEM"))==null?void 0:j.id;t&&ve(t,{onError:P=>{R.error(P.message)}})},onUpdate:t=>{var c,j;const a=(j=(c=G.find(P=>P.id===s.item_id))==null?void 0:c.actions)==null?void 0:j.find(P=>P.action==="RETURN_ITEM");a&&M({...t,actionId:a.id},{onError:P=>{var Ce,Pe;(Ce=a.details)!=null&&Ce.quantity&&t.quantity&&T.setValue(`inbound_items.${r}.quantity`,(Pe=a.details)==null?void 0:Pe.quantity),R.error(P.message)}})},index:r},s.id)),!ie&&e.jsxs("div",{className:"mt-8 flex flex-col gap-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(p.Label,{children:n("orders.returns.location")}),e.jsx(p.Hint,{className:"!mt-1",children:n("orders.returns.locationHint")})]}),e.jsx(p.Field,{control:T.control,name:"location_id",render:({field:{value:s,onChange:r,...t}})=>e.jsx(p.Item,{children:e.jsx(p.Control,{children:e.jsx(re,{...t,value:s??void 0,onChange:a=>{r(a),ht(a)},options:(it??[]).map(a=>({label:a.name,value:a.id}))})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsxs(p.Label,{children:[n("orders.returns.inboundShipping"),e.jsxs(V,{size:"small",leading:"compact",className:"text-ui-fg-muted ml-1 inline",children:["(",n("fields.optional"),")"]})]}),e.jsx(p.Hint,{className:"!mt-1",children:n("orders.returns.inboundShippingHint")})]}),e.jsx(p.Field,{control:T.control,name:"inbound_option_id",render:({field:{value:s,onChange:r,...t}})=>e.jsx(p.Item,{children:e.jsx(p.Control,{children:e.jsx(re,{value:s??void 0,onChange:a=>{r(a),a&&xt(a)},...t,options:ot.map(a=>({label:a.name,value:a.id})),disabled:!Y,noResultsPlaceholder:e.jsx(_t,{})})})})})]})]}),gt&&e.jsxs(et,{variant:"warning",dismissible:!0,className:"mt-4 p-5",children:[e.jsx("div",{className:"text-ui-fg-subtle txt-small pb-2 font-medium leading-[20px]",children:n("orders.returns.noInventoryLevel")}),e.jsx(V,{className:"text-ui-fg-subtle txt-small leading-normal",children:n("orders.returns.noInventoryLevelDesc")})]}),e.jsx(fn,{form:T,preview:l,order:i,claim:o}),e.jsxs("div",{className:"mt-8 border-y border-dotted py-4",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:n("orders.returns.inboundTotal")}),e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:J(se.reduce((s,r)=>{var a;const t=(a=r.actions)==null?void 0:a.find(c=>c.action==="RETURN_ITEM");return s=s+((t==null?void 0:t.amount)||0),s},0)*-1,i.currency_code)})]}),e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:n("orders.claims.outboundTotal")}),e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:J(ue.reduce((s,r)=>{var a;const t=(a=r.actions)==null?void 0:a.find(c=>c.action==="ITEM_ADD");return s=s+((t==null?void 0:t.amount)||0),s},0),i.currency_code)})]}),e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:n("orders.returns.inboundShipping")}),e.jsxs("span",{className:"txt-small text-ui-fg-subtle flex items-center",children:[!y&&e.jsx(oe,{onClick:()=>I(!0),variant:"transparent",className:"text-ui-fg-muted",disabled:ie||!ct,children:e.jsx(qe,{})}),y?e.jsx(ke,{id:"js-shipping-inbound-input",onBlur:()=>{let s;l.shipping_methods.forEach(t=>{if(t.actions)for(const a of t.actions)a.action==="SHIPPING_ADD"&&a.return_id&&(s=a.id)});const r=q===""?null:parseFloat(q);s&&de({actionId:s,custom_amount:r},{onError:t=>{R.error(t.message)}}),I(!1)},symbol:we[i.currency_code.toUpperCase()].symbol_native,code:i.currency_code,onValueChange:k,value:q,disabled:ie}):J(bt,i.currency_code)]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:n("orders.claims.outboundShipping")}),e.jsxs("span",{className:"txt-small text-ui-fg-subtle flex items-center",children:[!_&&e.jsx(oe,{onClick:()=>E(!0),variant:"transparent",className:"text-ui-fg-muted",disabled:Ne||!ut,children:e.jsx(qe,{})}),_?e.jsx(ke,{id:"js-shipping-outbound-input",onBlur:()=>{let s;l.shipping_methods.forEach(t=>{if(t.actions)for(const a of t.actions)a.action==="SHIPPING_ADD"&&!a.return_id&&(s=a.id)});const r=C===""?null:parseFloat(C);s&&b({actionId:s,custom_amount:r},{onError:t=>{R.error(t.message)}}),E(!1)},symbol:we[i.currency_code.toUpperCase()].symbol_native,code:i.currency_code,onValueChange:g,value:C,disabled:Ne}):J((ee==null?void 0:ee.amount)??0,i.currency_code)]})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-between border-t border-dotted pt-4",children:[e.jsx("span",{className:"txt-small font-medium",children:n("orders.claims.refundAmount")}),e.jsx("span",{className:"txt-small font-medium",children:J(l.summary.pending_difference,i.currency_code)})]})]}),e.jsx("div",{className:"bg-ui-bg-field mt-8 rounded-lg border py-2 pl-2 pr-4",children:e.jsx(p.Field,{control:T.control,name:"send_notification",render:({field:{onChange:s,value:r,...t}})=>e.jsxs(p.Item,{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(p.Control,{className:"mr-4 self-start",children:e.jsx(Xt,{className:"mt-[2px]",checked:!!r,onCheckedChange:s,...t})}),e.jsxs("div",{className:"block",children:[e.jsx(p.Label,{children:n("orders.returns.sendNotification")}),e.jsx(p.Hint,{className:"!mt-1",children:n("orders.returns.sendNotificationHint")})]})]}),e.jsx(p.ErrorMessage,{})]})})}),e.jsx("div",{className:"p-8"})]})}),e.jsx($.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx($.Close,{asChild:!0,children:e.jsx(ne,{type:"button",onClick:()=>be=!0,variant:"secondary",size:"small",children:n("orders.claims.cancel.title")})}),e.jsx(ne,{type:"submit",variant:"primary",size:"small",isLoading:st,children:n("orders.claims.confirm")},"submit-button")]})})})]})})},_e=!1,ds=()=>{const{id:i}=Bt(),l=zt(),{t:o}=L(),{order:d}=Vt(i,{fields:Lt}),{order:n}=Ut(i),[f,m]=v.useState(),{mutateAsync:y}=vt(d.id),{claim:I}=It(f,void 0,{enabled:!!f}),{return:_}=Ht(I==null?void 0:I.return_id,void 0,{enabled:!!(I!=null&&I.return_id)});return v.useEffect(()=>{async function E(){if(!(_e||!n)){if(n.order_change){n.order_change.change_type==="claim"?m(n.order_change.claim_id):(l(`/orders/${n.id}`,{replace:!0}),R.error(o("orders.claims.activeChangeError")));return}_e=!0;try{const{claim:q}=await y({order_id:n.id,type:"replace"});m(q.id)}catch(q){R.error(q.message),l(`/orders/${n.id}`,{replace:!0})}finally{_e=!1}}}E()},[n]),e.jsx($,{children:I&&n&&d&&e.jsx(hn,{order:d,claim:I,preview:n,orderReturn:_})})};export{ds as Component};
