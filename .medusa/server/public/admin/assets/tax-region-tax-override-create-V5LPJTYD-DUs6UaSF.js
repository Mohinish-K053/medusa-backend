import{T as M,c as E,a as Y,b as Z}from"./chunk-52GEX6O5-CQNmyGR9.js";import{a6 as i,R as ee,f4 as se,j as e,b as re,a8 as te,a9 as ae,t as oe,y as A,v as le,H as V,T as L,w as a,x as P,z as ie,E as ne,B as b,m as de,bv as ce,D as xe}from"./index-Y1lUIdzc.js";import{P as me}from"./chunk-YRY2CZ6I-BIDRs3Ak.js";import"./chunk-X3LH6P65-DvLbEi23.js";import"./lodash-DUWtrxUu.js";import"./chunk-TMAS4ILY-t4ytNcuu.js";import{b as ue}from"./chunk-5OOAHPXU-3GqWd--Z.js";import{S as pe}from"./chunk-CBJWO6K6-BbdnAwbJ.js";import{K as he}from"./chunk-6HTZNHPT-BhjAERei.js";import{R as m,u as fe,a as ge,S as p}from"./chunk-JGQGO74V-B5U9Jk_n.js";import{S as j}from"./select-bcm5ZSIZ.js";import"./chunk-V3MOBCDF-Fr8ItIPO.js";import"./chunk-W6676YBU-BBFBtZLa.js";import"./chunk-WYX5PIA3-BhQ5DJfk.js";import"./chunk-P3UUX2T6-Dg0JX98C.js";import"./chunk-DV5RB7II-DCWKsGYO.js";import"./format-BIas-G4J.js";import"./chunk-MSDRGCRR-1-W7PaOJ.js";import"./index-9K2jTE_Z.js";import"./chunk-QQGBEPB7-BoS8E5-t.js";import"./chunk-C76H5USB-BCy-xx4z.js";import"./chunk-W7625H47-D5yiJDQd.js";import"./chunk-ZJRFL6ZN-DgKUnC_H.js";import"./chunk-XWO5BP42-Dtv_ksXx.js";import"./chunk-G3QXMPRB-BX4qiC9M.js";import"./chunk-IQBAUTU5-BDTfX8oe.js";import"./chunk-ADOCJB6L-C5_hYlOE.js";import"./chunk-EMNHBSFU-Dq2MadKL.js";import"./chunk-GW6TVOAA-DRO0MN8s.js";import"./chunk-U6CSGYH6-D_aZr0qS.js";import"./x-mark-mini-DF1mQQBa.js";import"./checkbox-D7KNssHu.js";import"./index.esm-CvQH8Yji.js";import"./chunk-YEDAFXMB-D3WzQLUo.js";import"./chunk-AOFGTNG6-Dpy6BdS0.js";import"./table-BdEctOfn.js";import"./chunk-WX2SMNCD-Bs4d-wZh.js";import"./plus-mini-Db18lP5m.js";import"./command-bar-BA0L0gzp.js";import"./index-_7F4tK6e.js";import"./_isIndex-DnXbCqj1.js";import"./date-picker-BCWKbKWJ.js";import"./popover-Du9XRt9H.js";import"./triangle-left-mini-gvt7COK9.js";import"./index-DNYiGEVn.js";import"./prompt-4rFXDKY3.js";import"./triangles-mini-24hh2nEr.js";import"./check-BcecOcPv.js";var be=i.object({name:i.string().min(1),code:i.string().min(1),rate:i.object({float:i.number().optional(),value:i.string().optional()}).optional(),is_combinable:i.boolean().optional(),enabled_rules:i.object({product:i.boolean(),product_type:i.boolean()}),product:i.array(M).optional(),product_type:i.array(M).optional()}),je="tr",k=g=>`${je}-${g}`,ve=({taxRegion:g})=>{const{t:r}=re(),{handleSuccess:v}=fe(),{setIsOpen:y}=ge(),o=te({defaultValues:{name:"",code:"",is_combinable:!1,rate:{value:""},enabled_rules:{product:!0,product_type:!1},product:[],product_type:[]},resolver:ae(be)}),{mutateAsync:R,isPending:N}=ue(),z=o.handleSubmit(async s=>{var h;const{product:l,product_type:t}=s,c=E({reference_type:"product",references:l||[]}),u=E({reference_type:"product_type",references:t||[]}),n=[c,u].filter(d=>!!d).flatMap(d=>d);R({name:s.name,tax_region_id:g.id,rate:(h=s.rate)==null?void 0:h.float,code:s.code,is_combinable:s.is_combinable,rules:n,is_default:!1},{onSuccess:()=>{v()},onError:d=>{oe.error(d.message)}})}),B=A({control:o.control,name:"product"}),H=A({control:o.control,name:"product_type"}),S=s=>{switch(s){case"product":return B;case"product_type":return H}},F=[{value:"product",label:r("taxRegions.fields.targets.options.product")},{value:"product_type",label:r("taxRegions.fields.targets.options.productType")}],$={product:r("taxRegions.fields.targets.placeholders.product"),product_type:r("taxRegions.fields.targets.placeholders.productType")},K=s=>{const{fields:l,remove:t,append:c}=S(s),u=k(s);return n=>{if(!n.length){o.setValue(s,[],{shouldDirty:!0}),y(u,!1);return}const h=n.map(x=>x.value),d=n.filter(x=>!l.some(w=>w.value===x.value));for(const x of l)h.includes(x.value)||t(l.indexOf(x));c(d),y(u,!1)}},T=new Set(["product"]),I=s=>{o.setValue(s,[],{shouldDirty:!0}),o.setValue(`enabled_rules.${s}`,!1,{shouldDirty:!0}),T.delete(s)},O=s=>{o.setValue(`enabled_rules.${s}`,!0,{shouldDirty:!0}),o.setValue(s,[],{shouldDirty:!0}),T.add(s)},_=le({control:o.control,name:"enabled_rules"}),G=()=>{const s=Object.keys(_).find(l=>!_[l]);s&&O(s)},C=F.filter(s=>_[s.value]).sort((s,l)=>{const t=Array.from(T);return t.indexOf(l.value)-t.indexOf(s.value)}),W=s=>F.filter(l=>!C.some(t=>t.value===l.value)||l.value===s),q=Object.values(_).some(s=>!s);return e.jsx(m.Form,{form:o,children:e.jsxs(he,{onSubmit:z,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(m.Header,{}),e.jsx(m.Body,{className:"flex flex-1 flex-col overflow-hidden",children:e.jsx("div",{className:"flex flex-1 flex-col items-center overflow-y-auto",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16",children:[e.jsxs("div",{children:[e.jsx(m.Title,{asChild:!0,children:e.jsx(V,{children:r("taxRegions.taxOverrides.create.header")})}),e.jsx(m.Description,{asChild:!0,children:e.jsx(L,{size:"small",className:"text-ui-fg-subtle",children:r("taxRegions.taxOverrides.create.hint")})})]}),e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx("div",{className:"flex flex-col gap-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[e.jsx(a.Field,{control:o.control,name:"name",render:({field:s})=>e.jsxs(a.Item,{children:[e.jsx(a.Label,{children:r("fields.name")}),e.jsx(a.Control,{children:e.jsx(P,{...s})}),e.jsx(a.ErrorMessage,{})]})}),e.jsx(a.Field,{control:o.control,name:"rate",render:({field:{value:s,onChange:l,...t}})=>e.jsxs(a.Item,{children:[e.jsx(a.Label,{children:r("taxRegions.fields.taxRate")}),e.jsx(a.Control,{children:e.jsx(me,{...t,placeholder:"0.00",value:s==null?void 0:s.value,onValueChange:(c,u,n)=>l({value:c,float:n==null?void 0:n.float})})}),e.jsx(a.ErrorMessage,{})]})}),e.jsx(a.Field,{control:o.control,name:"code",render:({field:s})=>e.jsxs(a.Item,{children:[e.jsx(a.Label,{children:r("taxRegions.fields.taxCode")}),e.jsx(a.Control,{children:e.jsx(P,{...s})}),e.jsx(a.ErrorMessage,{})]})})]})})}),e.jsx(pe,{control:o.control,name:"is_combinable",label:r("taxRegions.fields.isCombinable.label"),description:r("taxRegions.fields.isCombinable.hint")}),e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between gap-x-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-x-1",children:[e.jsx(ie,{id:"tax_region_rules_label",htmlFor:"tax_region_rules",children:r("taxRegions.fields.targets.label")}),e.jsxs(L,{size:"small",leading:"compact",className:"text-ui-fg-muted",children:["(",r("fields.optional"),")"]})]}),e.jsx(ne,{id:"tax_region_rules_description",className:"text-pretty",children:r("taxRegions.fields.targets.hint")})]}),q&&e.jsx(b,{onClick:G,type:"button",size:"small",variant:"transparent",className:"text-ui-fg-interactive hover:text-ui-fg-interactive-hover flex-shrink-0",children:r("taxRegions.fields.targets.action")})]}),e.jsx("div",{id:"tax_region_rules","aria-labelledby":"tax_region_rules_label","aria-describedby":"tax_region_rules_description",role:"application",className:"flex flex-col gap-y-3",children:C.map((s,l)=>{const t=s.value,c=s.label,u=l===C.length-1,n=$[t],h=W(t),{fields:d,remove:x}=S(t),w=K(t),J=k(t),Q=D=>{I(t),O(D)};return e.jsx("div",{children:e.jsx(a.Field,{control:o.control,name:s.value,render:({field:{value:D,onChange:ye,...U}})=>e.jsxs(a.Item,{className:"space-y-0",children:[e.jsx(a.Label,{className:"sr-only",children:c}),e.jsxs("div",{className:de("bg-ui-bg-component shadow-elevation-card-rest transition-fg grid gap-1.5 rounded-xl py-1.5","aria-[invalid='true']:shadow-borders-error"),role:"application",...U,children:[e.jsxs("div",{className:"text-ui-fg-subtle grid gap-1.5 px-1.5 md:grid-cols-2",children:[u?e.jsxs(j,{value:t,onValueChange:Q,children:[e.jsx(j.Trigger,{className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover",children:e.jsx(j.Value,{})}),e.jsx(j.Content,{children:h.map(f=>e.jsx(j.Item,{value:f.value,children:f.label},f.value))})]}):e.jsx("div",{className:"bg-ui-bg-field shadow-borders-base txt-compact-small rounded-md px-2 py-1.5",children:c}),e.jsx("div",{className:"bg-ui-bg-field shadow-borders-base txt-compact-small rounded-md px-2 py-1.5",children:r("taxRegions.fields.targets.operators.in")})]}),e.jsxs("div",{className:"flex items-center gap-1.5 px-1.5",children:[e.jsxs(p,{id:J,children:[e.jsx(p.Trigger,{asChild:!0,children:e.jsxs("button",{type:"button",className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover shadow-borders-base txt-compact-small text-ui-fg-muted transition-fg focus-visible:shadow-borders-interactive-with-active flex flex-1 items-center gap-x-2 rounded-md px-2 py-1.5 outline-none",children:[e.jsx(ce,{}),n]})}),e.jsx(p.Trigger,{asChild:!0,children:e.jsx(b,{variant:"secondary",children:r("actions.browse")})}),e.jsxs(p.Content,{children:[e.jsxs(p.Header,{children:[e.jsx(p.Title,{asChild:!0,children:e.jsx(V,{className:"sr-only",children:r("taxRegions.fields.targets.modal.header")})}),e.jsx(p.Description,{className:"sr-only",children:r("taxRegions.fields.targets.hint")})]}),e.jsx(Y,{type:"focus",referenceType:t,state:d,setState:w})]})]}),e.jsx(b,{variant:"secondary",onClick:()=>I(t),type:"button",children:r("actions.delete")})]}),d.length>0?e.jsxs("div",{className:"flex flex-col gap-y-1.5",children:[e.jsx(xe,{variant:"dashed"}),e.jsx("div",{className:"flex flex-col gap-y-1.5 px-1.5",children:d.map((f,X)=>e.jsx(Z,{index:X,label:f.label,onRemove:x},f.id))})]}):null]}),e.jsx(a.ErrorMessage,{className:"mt-2"})]})})},t)})})]})]})})}),e.jsx(m.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(m.Close,{asChild:!0,children:e.jsx(b,{size:"small",variant:"secondary",children:r("actions.cancel")})}),e.jsx(b,{size:"small",type:"submit",isLoading:N,children:r("actions.save")})]})})]})})},fs=()=>{const{id:g,province_id:r}=ee(),{tax_region:v,isPending:y,isError:o,error:R}=se(r||g),N=!y&&!!v;if(o)throw R;return e.jsx(m,{children:N&&e.jsx(ve,{taxRegion:v})})};export{fs as Component};
