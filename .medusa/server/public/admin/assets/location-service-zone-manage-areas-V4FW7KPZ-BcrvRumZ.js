import{G as x}from"./chunk-DO73XJPS-Vl_JDD2y.js";import{a6 as l,R as j,a_ as v,ar as g,j as e,b as S,a8 as y,cI as w,a9 as F,t as _,H as Z,B as h}from"./index-Y1lUIdzc.js";import{G as b}from"./chunk-PYIO3TDQ-D8Zv8hXV.js";import"./chunk-X3LH6P65-DvLbEi23.js";import"./lodash-DUWtrxUu.js";import"./chunk-X5VECN6S-R4_mgdrb.js";import"./chunk-TMAS4ILY-t4ytNcuu.js";import{c as A}from"./chunk-GVRV2SOJ-CTm2qCDu.js";import{K as E}from"./chunk-6HTZNHPT-BhjAERei.js";import{R as n,u as z,S as L}from"./chunk-JGQGO74V-B5U9Jk_n.js";import"./chunk-NOAFLTPV-BqIOnpmD.js";import"./chunk-C76H5USB-BCy-xx4z.js";import"./index-9K2jTE_Z.js";import"./checkbox-D7KNssHu.js";import"./chunk-YEDAFXMB-D3WzQLUo.js";import"./chunk-AOFGTNG6-Dpy6BdS0.js";import"./table-BdEctOfn.js";import"./chunk-WX2SMNCD-Bs4d-wZh.js";import"./plus-mini-Db18lP5m.js";import"./command-bar-BA0L0gzp.js";import"./index-_7F4tK6e.js";import"./x-mark-mini-DF1mQQBa.js";import"./chunk-DV5RB7II-DCWKsGYO.js";import"./format-BIas-G4J.js";import"./_isIndex-DnXbCqj1.js";import"./date-picker-BCWKbKWJ.js";import"./popover-Du9XRt9H.js";import"./triangle-left-mini-gvt7COK9.js";import"./index-DNYiGEVn.js";import"./chunk-BF3VCHXD-CBkSj8cA.js";import"./prompt-4rFXDKY3.js";var N=l.object({countries:l.array(l.object({iso_2:l.string().min(2),display_name:l.string()})).min(1)});function C({fulfillmentSetId:a,locationId:d,zone:t}){const{t:o}=S(),{handleSuccess:p}=z(),r=y({defaultValues:{countries:t.geo_zones.map(i=>{const s=w.find(m=>m.iso_2===i.country_code);return{iso_2:i.country_code,display_name:(s==null?void 0:s.display_name)||i.country_code.toUpperCase()}})},resolver:F(N)}),{mutateAsync:u,isPending:f}=A(a,t.id),c=r.handleSubmit(async i=>{await u({geo_zones:i.countries.map(({iso_2:s})=>({country_code:s,type:"country"}))},{onSuccess:()=>{_.success(o("stockLocations.serviceZones.manageAreas.successToast",{name:t.name})),p(`/settings/locations/${d}`)},onError:s=>{_.error(s.message)}})});return e.jsx(n.Form,{form:r,children:e.jsxs(E,{className:"flex h-full flex-col overflow-hidden",onSubmit:c,children:[e.jsx(n.Header,{}),e.jsx(n.Body,{className:"flex flex-1 flex-col overflow-auto",children:e.jsxs(L,{id:b,children:[e.jsx("div",{className:"flex flex-col items-center p-16",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8",children:[e.jsx(Z,{children:o("stockLocations.serviceZones.manageAreas.header",{name:t.name})}),e.jsx(x,{form:r})]})}),e.jsx(x.AreaDrawer,{form:r})]})}),e.jsx(n.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(n.Close,{asChild:!0,children:e.jsx(h,{variant:"secondary",size:"small",children:o("actions.cancel")})}),e.jsx(h,{type:"submit",size:"small",isLoading:f,children:o("actions.save")})]})})]})})}var le=()=>{var i,s;const{location_id:a,fset_id:d,zone_id:t}=j(),{stock_location:o,isPending:p,isFetching:r,isError:u,error:f}=v(a,{fields:"*fulfillment_sets.service_zones.geo_zones,fulfillment_sets.service_zones.name"}),c=(s=(i=o==null?void 0:o.fulfillment_sets)==null?void 0:i.find(m=>m.id===d))==null?void 0:s.service_zones.find(m=>m.id===t);if(!p&&!r&&!c)throw g({message:`Service zone with ID ${t} was not found`},404);if(u)throw f;return e.jsx(n,{prev:`/settings/locations/${a}`,children:c&&e.jsx(C,{zone:c,fulfillmentSetId:d,locationId:a})})};export{le as Component};
