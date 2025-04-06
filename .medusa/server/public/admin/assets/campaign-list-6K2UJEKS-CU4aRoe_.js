import{a as x}from"./chunk-WYX5PIA3-BhQ5DJfk.js";import{T as p,a as b}from"./chunk-MSDRGCRR-1-W7PaOJ.js";import{P as h}from"./chunk-P3UUX2T6-Dg0JX98C.js";import{b as c,r as j,j as a,a as T,d3 as w,k as y,H as _,L as N,B as P,de as D,A as S,t as g}from"./index-Y1lUIdzc.js";import{c as v}from"./index-9K2jTE_Z.js";import{u as H,_ as k}from"./chunk-X3LH6P65-DvLbEi23.js";import"./lodash-DUWtrxUu.js";import{u as A}from"./chunk-C76H5USB-BCy-xx4z.js";import"./chunk-TMAS4ILY-t4ytNcuu.js";import{S as E}from"./chunk-2RQLKDBF-D-5V31Nx.js";import{u as q}from"./use-prompt-BD90Slcr.js";import{P as L}from"./pencil-square-CtD7b9NZ.js";import{T as O}from"./trash-C91Uuii0.js";import{C as z}from"./container-BuP7xY2N.js";import"./chunk-DV5RB7II-DCWKsGYO.js";import"./format-BIas-G4J.js";import"./chunk-YEDAFXMB-D3WzQLUo.js";import"./chunk-AOFGTNG6-Dpy6BdS0.js";import"./table-BdEctOfn.js";import"./chunk-WX2SMNCD-Bs4d-wZh.js";import"./plus-mini-Db18lP5m.js";import"./command-bar-BA0L0gzp.js";import"./index-_7F4tK6e.js";import"./_isIndex-DnXbCqj1.js";import"./x-mark-mini-DF1mQQBa.js";import"./date-picker-BCWKbKWJ.js";import"./popover-Du9XRt9H.js";import"./triangle-left-mini-gvt7COK9.js";import"./index-DNYiGEVn.js";import"./Trans-Dnf3kPA_.js";import"./check-BcecOcPv.js";import"./prompt-4rFXDKY3.js";var B=({prefix:e,pageSize:t=20})=>{const r=A(["offset","q","order","created_at","updated_at"],e),{offset:s,q:n,order:l,created_at:i,updated_at:m}=r;return{searchParams:{limit:t,offset:s?Number(s):0,order:l,created_at:i?JSON.parse(i):void 0,updated_at:m?JSON.parse(m):void 0,q:n},raw:r}},I=({description:e})=>e?a.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:a.jsx("span",{className:"truncate",children:e})}):a.jsx(h,{}),M=()=>{const{t:e}=c();return a.jsx("div",{className:"flex h-full w-full items-center",children:a.jsx("span",{className:"truncate",children:e("fields.description")})})},J=({name:e})=>e?a.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:a.jsx("span",{className:"truncate",children:e})}):a.jsx(h,{}),Q=()=>{const{t:e}=c();return a.jsx("div",{className:"flex h-full w-full items-center",children:a.jsx("span",{className:"truncate",children:e("fields.name")})})},o=v(),R=()=>{const{t:e}=c();return j.useMemo(()=>[o.accessor("name",{header:()=>a.jsx(Q,{}),cell:({getValue:t})=>a.jsx(J,{name:t()})}),o.accessor("description",{header:()=>a.jsx(M,{}),cell:({getValue:t})=>a.jsx(I,{description:t()})}),o.accessor("campaign_identifier",{header:()=>a.jsx(p,{text:e("campaigns.fields.identifier")}),cell:({getValue:t})=>{const r=t();return a.jsx(b,{text:r})}}),o.accessor("starts_at",{header:()=>a.jsx(p,{text:e("campaigns.fields.start_date")}),cell:({getValue:t})=>{const r=t();if(!r)return;const s=new Date(r);return a.jsx(x,{date:s})}}),o.accessor("ends_at",{header:()=>a.jsx(p,{text:e("campaigns.fields.end_date")}),cell:({getValue:t})=>{const r=t();if(!r)return;const s=new Date(r);return a.jsx(x,{date:s})}})],[e])},f=20,W=()=>{const{t:e}=c(),{raw:t,searchParams:r}=B({pageSize:f}),{campaigns:s,count:n,isPending:l,isError:i,error:m}=w(r,{placeholderData:y}),d=Y(),{table:C}=H({data:s??[],columns:d,count:n,enablePagination:!0,getRowId:u=>u.id,pageSize:f});if(i)throw m;return a.jsxs(z,{className:"divide-y p-0",children:[a.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[a.jsx(_,{level:"h2",children:e("campaigns.domain")}),a.jsx(N,{to:"/campaigns/create",children:a.jsx(P,{size:"small",variant:"secondary",children:e("actions.create")})})]}),a.jsx(k,{table:C,columns:d,count:n,pageSize:f,pagination:!0,search:!0,navigateTo:u=>u.id,isLoading:l,queryObject:t,orderBy:[{key:"name",label:e("fields.name")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}]})]})},$=({campaign:e})=>{const{t}=c(),r=q(),{mutateAsync:s}=D(e.id),n=async()=>{await r({title:t("general.areYouSure"),description:t("campaigns.deleteCampaignWarning",{name:e.name}),verificationInstruction:t("general.typeToConfirm"),verificationText:e.name,confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await s(void 0,{onSuccess:()=>{g.success(t("campaigns.delete.successToast",{name:e.name}))},onError:i=>{g.error(i.message)}})};return a.jsx(S,{groups:[{actions:[{icon:a.jsx(L,{}),label:t("actions.edit"),to:`/campaigns/${e.id}/edit`}]},{actions:[{icon:a.jsx(O,{}),label:t("actions.delete"),onClick:n}]}]})},G=v(),Y=()=>{const e=R();return j.useMemo(()=>[...e,G.display({id:"actions",cell:({row:t})=>a.jsx($,{campaign:t.original})})],[e])},Ne=()=>{const{getWidgets:e}=T();return a.jsx(E,{widgets:{after:e("campaign.list.after"),before:e("campaign.list.before")},hasOutlet:!0,children:a.jsx(W,{})})};export{Ne as Component};
