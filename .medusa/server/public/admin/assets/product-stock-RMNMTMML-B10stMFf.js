import{D as re}from"./chunk-NOZD6HRU-Dl7MFGmc.js";import{r as d,aw as ae,a6 as m,b as C,d as oe,j as e,at as le,ax as ce,ay as de,az as I,s as B,a8 as ue,a9 as me,aA as fe,t as A,B as W,aB as he,V as pe,ab as ve}from"./index-Y1lUIdzc.js";import{b as ye,D as xe,d as y,u as je,a as _e}from"./chunk-GE4APTT2-Do06S6cg.js";import{P as be}from"./chunk-AM2BU2RH-Jz_rw4zs.js";import{c as Q}from"./chunk-6GU6IDUA-CDc7wW5L.js";import{K as ge}from"./chunk-6HTZNHPT-BhjAERei.js";import{R as v,u as ke}from"./chunk-JGQGO74V-B5U9Jk_n.js";import{u as Se}from"./use-prompt-BD90Slcr.js";import"./index.esm-CvQH8Yji.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./_isIndex-DnXbCqj1.js";import"./index-9K2jTE_Z.js";import"./checkbox-D7KNssHu.js";import"./prompt-4rFXDKY3.js";var we=Object.defineProperty,P=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,Z=(t,a,n)=>a in t?we(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,Pe=(t,a)=>{for(var n in a)J.call(a,n)&&Z(t,n,a[n]);if(P)for(var n of P(a))X.call(a,n)&&Z(t,n,a[n]);return t},Ne=(t,a)=>{var n={};for(var s in t)J.call(t,s)&&a.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&P)for(var s of P(t))a.indexOf(s)<0&&X.call(t,s)&&(n[s]=t[s]);return n};const ee=d.forwardRef((t,a)=>{var n=t,{color:s="currentColor"}=n,r=Ne(n,["color"]);return d.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:a},r),d.createElement("g",{stroke:s,strokeWidth:1.5,clipPath:"url(#a)"},d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m6.829 6.784.037-.018a.671.671 0 0 1 .95.763l-.633 2.537a.67.67 0 0 0 .951.763l.037-.018M7.5 4.1h.007v.007H7.5z"}),d.createElement("circle",{cx:7.5,cy:7.5,r:6.36})),d.createElement("defs",null,d.createElement("clipPath",{id:"a"},d.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}))))});ee.displayName="InformationCircle";async function Ie(t,a){let s=0,r=0,i=[];do{const{variants:c,count:u}=await B.admin.product.listVariants(t,{id:a,offset:s,limit:20,fields:"id,title,sku,inventory_items,inventory_items.*,inventory_items.inventory,inventory_items.inventory.id,inventory_items.inventory.title,inventory_items.inventory.sku,*inventory_items.inventory.location_levels,product.thumbnail"});i=[...i,...c],r=u,s+=20}while(i.length<r);const{stock_locations:o}=await B.admin.stockLocation.list({limit:9999,fields:"id,name"});return{variants:i,locations:o}}var it=async({params:t,request:a})=>{var o;const n=t.id,r=((o=new URLSearchParams(a.url).get(be))==null?void 0:o.split(","))||void 0,i=Ie(n,r);return ae({data:i})},De=({duplicateOf:t,children:a})=>{const{watchedValue:n}=je({duplicateOf:t});return e.jsx("div",{className:"bg-ui-bg-base txt-compact-small text-ui-fg-subtle flex size-full cursor-not-allowed items-center justify-between overflow-hidden px-4 py-2.5 outline-none",children:typeof a=="function"?a({value:n}):a})};function w(t){return t.id.startsWith("variant_")}function Ce(t){return t.inventory_items&&t.inventory_items.length>0}function Ee(t){const a={},n={};return t.forEach(s=>{const r=s.inventory_items;r&&r.forEach(i=>{const o=a[i.inventory_item_id];if(o){n[i.inventory_item_id]={id:o.id,title:o.title||"",sku:o.sku||""};return}a[i.inventory_item_id]=s})}),n}var D=_e(),Te=(t=[],a={})=>{const{t:n}=C(),s=d.useCallback(r=>{const i=a[r.inventory_item_id],o=!!i&&i.id!==r.variant_id;return o?{isDisabled:o,item:i}:{isDisabled:!1,item:void 0}},[a]);return d.useMemo(()=>[D.column({id:"title",name:"Title",header:"Title",cell:r=>{var u,f,h,l;const i=r.row.original;if(w(i))return e.jsx(y,{context:r,children:e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(he,{size:"small",src:(u=i.product)==null?void 0:u.thumbnail}),e.jsx("span",{children:i.title||"-"})]})});const{isDisabled:o,item:c}=s(i);return o?e.jsx(y,{context:r,color:"normal",children:e.jsxs("div",{className:"flex size-full items-center justify-between gap-x-2",children:[e.jsx("span",{title:((f=i.inventory)==null?void 0:f.title)||void 0,className:"text-ui-fg-disabled",children:((h=i.inventory)==null?void 0:h.title)||"-"}),e.jsx(pe,{content:c.sku?n("products.stock.tooltips.alreadyManagedWithSku",{title:c.title,sku:c.sku}):n("products.stock.tooltips.alreadyManaged",{title:c.title}),children:e.jsx(ee,{})})]})}):e.jsx(y,{context:r,color:"normal",children:((l=i.inventory)==null?void 0:l.title)||"-"})},disableHiding:!0}),D.column({id:"sku",name:"SKU",header:"SKU",cell:r=>{var c,u;const i=r.row.original;if(w(i))return e.jsx(y,{context:r,children:i.sku||"-"});const{isDisabled:o}=s(i);return o?e.jsx(y,{context:r,color:"normal",children:e.jsx("span",{className:"text-ui-fg-disabled",children:((c=i.inventory)==null?void 0:c.sku)||"-"})}):e.jsx(y,{context:r,color:"normal",children:((u=i.inventory)==null?void 0:u.sku)||"-"})},disableHiding:!0}),...t.map(r=>D.column({id:`location_${r.id}`,name:r.name,header:r.name,field:i=>{const o=i.row.original;if(w(o))return null;const{isDisabled:c}=s(o);return c?null:`variants.${o.variant_id}.inventory_items.${o.inventory_item_id}.locations.${r.id}`},type:"togglable-number",cell:i=>{const o=i.row.original;if(w(o))return e.jsx(y,{context:i});const{isDisabled:c,item:u}=s(o);return c?e.jsx(De,{duplicateOf:`variants.${u.id}.inventory_items.${o.inventory_item_id}.locations.${r.id}`,children:({value:f})=>{const{checked:h,quantity:l}=f;return e.jsxs("div",{className:"flex size-full items-center gap-x-2",children:[e.jsx(ve,{className:"shrink-0 cursor-not-allowed",tabIndex:-1,size:"small",checked:h,disabled:!0}),e.jsx("span",{className:"text-ui-fg-disabled flex size-full items-center justify-end",children:l})]})}}):e.jsx(re,{context:i,disabledToggleTooltip:n("inventory.stock.disabledToggleTooltip"),placeholder:n("inventory.stock.placeholder")})}}))],[t,s,n])},Oe=m.object({id:m.string().optional(),quantity:m.union([m.number(),m.string()]),checked:m.boolean(),disabledToggle:m.boolean()}),ze=m.record(Oe),Re=m.object({locations:ze}),qe=m.object({inventory_items:m.record(Re)}),Le=m.object({variants:m.record(qe)}),Ve=({variants:t,locations:a,onLoaded:n})=>{const{t:s}=C(),{handleSuccess:r,setCloseOnEscape:i}=ke(),o=Se();d.useEffect(()=>{n()},[n]);const[c,u]=d.useState(!1),f=ue({defaultValues:Y(t,a),resolver:me(Le)}),h=d.useRef(Y(t,a)),l=d.useMemo(()=>Ee(t),[t]),_=Te(a,l),{mutateAsync:b,isPending:g}=fe(),te=f.handleSubmit(async N=>{var E,T,O,z,R,q,L,V,H,M,K,$,F,G;const x={create:[],update:[],delete:[],force:!0};for(const[j,ie]of Object.entries(N.variants))for(const[k,ne]of Object.entries(ie.inventory_items))for(const[S,p]of Object.entries(ne.locations)){if(p.id)if(((L=(q=(R=(z=(O=(T=(E=h.current)==null?void 0:E.variants)==null?void 0:T[j])==null?void 0:O.inventory_items)==null?void 0:z[k])==null?void 0:R.locations)==null?void 0:q[S])==null?void 0:L.checked)&&!p.checked)x.delete.push(p.id);else{const U=p.quantity!==""?Q(p.quantity):0,se=(G=(F=($=(K=(M=(H=(V=h.current)==null?void 0:V.variants)==null?void 0:H[j])==null?void 0:M.inventory_items)==null?void 0:K[k])==null?void 0:$.locations)==null?void 0:F[S])==null?void 0:G.quantity;U!==se&&x.update.push({inventory_item_id:k,location_id:S,stocked_quantity:U})}!p.id&&p.quantity!==""&&x.create.push({inventory_item_id:k,location_id:S,stocked_quantity:Q(p.quantity)})}if(x.delete.length>0){u(!0);const j=await o({title:s("general.areYouSure"),description:s("inventory.stock.disablePrompt",{count:x.delete.length}),confirmText:s("actions.continue"),cancelText:s("actions.cancel"),variant:"confirmation"});if(u(!1),!j)return}await b(x,{onSuccess:()=>{A.success(s("inventory.stock.successToast")),r()},onError:j=>{A.error(j.message)}})});return e.jsx(v.Form,{form:f,children:e.jsxs(ge,{onSubmit:te,className:"flex h-full flex-col",children:[e.jsx(v.Header,{}),e.jsx(v.Body,{className:"flex-1",children:e.jsx(xe,{state:f,columns:_,data:t,getSubRows:He,onEditingChange:N=>i(!N),disableInteractions:g||c,multiColumnSelection:!0})}),e.jsx(v.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-2",children:[e.jsx(v.Close,{asChild:!0,children:e.jsx(W,{variant:"secondary",size:"small",type:"button",children:s("actions.cancel")})}),e.jsx(W,{type:"submit",size:"small",isLoading:g,children:s("actions.save")})]})})]})})};function He(t){if(Ce(t))return t.inventory_items}function Y(t,a){return{variants:t.reduce((n,s)=>{var i;const r=(i=s.inventory_items)==null?void 0:i.reduce((o,c)=>{const u=a.reduce((f,h)=>{var _,b;const l=(b=(_=c.inventory)==null?void 0:_.location_levels)==null?void 0:b.find(g=>g.location_id===h.id);return f[h.id]={id:l==null?void 0:l.id,quantity:(l==null?void 0:l.stocked_quantity)!==void 0?l==null?void 0:l.stocked_quantity:"",checked:!!l,disabledToggle:((l==null?void 0:l.incoming_quantity)||0)>0||((l==null?void 0:l.reserved_quantity)||0)>0},f},{});return o[c.inventory_item_id]={locations:u},o},{});return n[s.id]={inventory_items:r||{}},n},{})}}var nt=()=>{const{t}=C(),a=oe(),[n,s]=d.useState(!1),r=d.useRef();d.useEffect(()=>(r.current=setTimeout(()=>{s(!0)},200),()=>{r.current&&clearTimeout(r.current)}),[]);const i=()=>{r.current&&clearTimeout(r.current),s(!1)};return e.jsxs("div",{children:[e.jsx("div",{className:"fixed inset-x-0 top-0 z-50 h-1",children:e.jsx(le,{children:n?e.jsx(ce,{duration:5}):null})}),e.jsxs(v,{children:[e.jsx(v.Title,{asChild:!0,children:e.jsx("span",{className:"sr-only",children:t("products.stock.heading")})}),e.jsx(v.Description,{asChild:!0,children:e.jsx("span",{className:"sr-only",children:t("products.stock.description")})}),e.jsx(d.Suspense,{fallback:e.jsx(Me,{}),children:e.jsx(de,{resolve:a.data,children:o=>e.jsx(Ve,{variants:o.variants,locations:o.locations,onLoaded:i})})})]})]})},Me=()=>e.jsx("div",{className:"relative flex size-full flex-col items-center justify-center divide-y",children:e.jsxs("div",{className:"flex size-full flex-col divide-y",children:[e.jsx("div",{className:"px-4 py-2",children:e.jsx(I,{className:"h-7 w-7"})}),e.jsx("div",{className:"flex-1 overflow-auto",children:e.jsx(ye,{columns:Array.from({length:10})})}),e.jsxs("div",{className:"bg-ui-bg-base flex items-center justify-end gap-x-2 p-4",children:[e.jsx(I,{className:"h-7 w-[59px]"}),e.jsx(I,{className:"h-7 w-[46px]"})]})]})});export{nt as Component,it as loader};
