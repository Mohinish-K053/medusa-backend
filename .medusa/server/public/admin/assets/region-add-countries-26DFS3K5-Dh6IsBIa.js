import{u as k,a as T,b as E}from"./chunk-NOAFLTPV-BqIOnpmD.js";import{u as I,_ as A}from"./chunk-X3LH6P65-DvLbEi23.js";import{a2 as F,ad as z,a4 as B,R as D,e1 as H,j as o,b as M,r as g,a8 as N,a9 as K,cI as L,e3 as O,t as x,B as S}from"./index-Y1lUIdzc.js";import"./lodash-DUWtrxUu.js";import"./chunk-TMAS4ILY-t4ytNcuu.js";import{K as V}from"./chunk-6HTZNHPT-BhjAERei.js";import{R as n,u as q}from"./chunk-JGQGO74V-B5U9Jk_n.js";import{C as b}from"./checkbox-D7KNssHu.js";import{c as G}from"./index-9K2jTE_Z.js";import"./chunk-C76H5USB-BCy-xx4z.js";import"./chunk-YEDAFXMB-D3WzQLUo.js";import"./chunk-AOFGTNG6-Dpy6BdS0.js";import"./table-BdEctOfn.js";import"./chunk-WX2SMNCD-Bs4d-wZh.js";import"./plus-mini-Db18lP5m.js";import"./command-bar-BA0L0gzp.js";import"./index-_7F4tK6e.js";import"./chunk-DV5RB7II-DCWKsGYO.js";import"./format-BIas-G4J.js";import"./_isIndex-DnXbCqj1.js";import"./x-mark-mini-DF1mQQBa.js";import"./date-picker-BCWKbKWJ.js";import"./popover-Du9XRt9H.js";import"./triangle-left-mini-gvt7COK9.js";import"./index-DNYiGEVn.js";import"./prompt-4rFXDKY3.js";var Q=F({countries:z(B()).min(1)}),m=50,p="ac",U=({region:r})=>{const{t:e}=M(),{handleSuccess:a}=q(),[t,l]=g.useState({}),u=N({defaultValues:{countries:[]},resolver:K(Q)}),{setValue:h}=u;g.useEffect(()=>{const s=Object.keys(t).filter(i=>t[i]);h("countries",s,{shouldDirty:!0,shouldTouch:!0})},[t,h]);const{searchParams:C,raw:j}=k({pageSize:m,prefix:p}),{countries:_,count:f}=T({countries:L.map((s,i)=>({display_name:s.display_name,name:s.name,id:i,iso_2:s.iso_2,iso_3:s.iso_3,num_code:s.num_code,region_id:null,region:{}})),...C}),y=Z(),{table:R}=I({data:_||[],columns:y,count:f,enablePagination:!0,enableRowSelection:s=>{var i;return((i=r.countries)==null?void 0:i.findIndex(c=>c.iso_2===s.original.iso_2))===-1},getRowId:s=>s.iso_2,pageSize:m,rowSelection:{state:t,updater:l},prefix:p}),{mutateAsync:v,isPending:P}=O(r.id),w=u.handleSubmit(async s=>{var c;const i=[...((c=r.countries)==null?void 0:c.map(d=>d.iso_2))??[],...s.countries];await v({countries:i},{onSuccess:()=>{x.success(e("regions.toast.countries")),a()},onError:d=>{x.error(d.message)}})});return o.jsx(n.Form,{form:u,children:o.jsxs(V,{onSubmit:w,className:"flex h-full flex-col overflow-hidden",children:[o.jsx(n.Header,{children:o.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[o.jsx(n.Close,{asChild:!0,children:o.jsx(S,{size:"small",variant:"secondary",children:e("actions.cancel")})}),o.jsx(S,{size:"small",isLoading:P,type:"submit",children:e("actions.add")})]})}),o.jsx(n.Body,{className:"overflow-hidden",children:o.jsx(A,{table:R,columns:y,pageSize:m,count:f,search:"autofocus",pagination:!0,layout:"fill",orderBy:[{key:"display_name",label:e("fields.name")},{key:"iso_2",label:e("fields.code")}],queryObject:j,prefix:p})})]})})},X=G(),Z=()=>{const r=E();return g.useMemo(()=>[X.display({id:"select",header:({table:e})=>o.jsx(b,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:a=>e.toggleAllPageRowsSelected(!!a)}),cell:({row:e})=>{const a=!e.getCanSelect();return o.jsx(b,{checked:e.getIsSelected()||a,disabled:a,onCheckedChange:t=>e.toggleSelected(!!t),onClick:t=>{t.stopPropagation()}})}}),...r],[r])},je=()=>{const{id:r}=D(),{region:e,isPending:a,isError:t,error:l}=H(r,{fields:"*payment_providers"});if(t)throw l;return o.jsx(n,{children:!a&&e&&o.jsx(U,{region:e})})};export{je as Component};
