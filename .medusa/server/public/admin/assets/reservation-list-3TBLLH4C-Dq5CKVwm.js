import{a as h}from"./chunk-WYX5PIA3-BhQ5DJfk.js";import{P as x}from"./chunk-P3UUX2T6-Dg0JX98C.js";import{u as v,_ as j}from"./chunk-X3LH6P65-DvLbEi23.js";import{a as b,j as e,b as d,b2 as g,H as y,T as _,B as N,L as T,r as P,cS as S,dN as w,A as k}from"./index-Y1lUIdzc.js";import"./lodash-DUWtrxUu.js";import"./chunk-TMAS4ILY-t4ytNcuu.js";import{S as C}from"./chunk-2RQLKDBF-D-5V31Nx.js";import{u as R}from"./chunk-C76H5USB-BCy-xx4z.js";import{u as z}from"./use-prompt-BD90Slcr.js";import{P as L}from"./pencil-square-CtD7b9NZ.js";import{T as q}from"./trash-C91Uuii0.js";import{C as A}from"./container-BuP7xY2N.js";import{c as D}from"./index-9K2jTE_Z.js";import"./chunk-DV5RB7II-DCWKsGYO.js";import"./format-BIas-G4J.js";import"./chunk-YEDAFXMB-D3WzQLUo.js";import"./chunk-AOFGTNG6-Dpy6BdS0.js";import"./table-BdEctOfn.js";import"./chunk-WX2SMNCD-Bs4d-wZh.js";import"./plus-mini-Db18lP5m.js";import"./command-bar-BA0L0gzp.js";import"./index-_7F4tK6e.js";import"./_isIndex-DnXbCqj1.js";import"./x-mark-mini-DF1mQQBa.js";import"./date-picker-BCWKbKWJ.js";import"./popover-Du9XRt9H.js";import"./triangle-left-mini-gvt7COK9.js";import"./index-DNYiGEVn.js";import"./Trans-Dnf3kPA_.js";import"./check-BcecOcPv.js";import"./prompt-4rFXDKY3.js";var E=({reservation:r})=>{const{t}=d(),s=z(),{mutateAsync:i}=w(r.id),a=async()=>{await s({title:t("general.areYouSure"),description:t("reservations.deleteWarning"),confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await i()};return e.jsx(k,{groups:[{actions:[{label:t("actions.edit"),to:`${r.id}/edit`,icon:e.jsx(L,{})}]},{actions:[{label:t("actions.delete"),onClick:a,icon:e.jsx(q,{})}]}]})},o=D(),I=()=>{const{t:r}=d();return P.useMemo(()=>[o.accessor("inventory_item",{header:r("fields.sku"),cell:({getValue:t})=>{const s=t();return!s||!s.sku?e.jsx(x,{}):e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:s.sku})})}}),o.accessor("description",{header:r("fields.description"),cell:({getValue:t})=>{const s=t();return s?e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:s})}):e.jsx(x,{})}}),o.accessor("created_at",{header:r("fields.created"),cell:({getValue:t})=>{const s=t();return e.jsx(h,{date:s})}}),o.accessor("quantity",{header:()=>e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:r("fields.quantity")})}),cell:({getValue:t})=>{const s=t();return e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:s})})}}),o.display({id:"actions",cell:({row:t})=>{const s=t.original;return e.jsx(E,{reservation:s})}})],[r])},H=()=>{const{t:r}=d(),{stock_locations:t}=S({limit:1e3}),s=[];if(t){const i={type:"select",options:t.map(a=>({label:a.name,value:a.id})),key:"location_id",searchable:!0,label:r("fields.location")};s.push(i)}return s.push({type:"date",key:"created_at",label:r("fields.createdAt")}),s},B=({pageSize:r=20,prefix:t})=>{const s=R(["location_id","offset","created_at","quantity","updated_at","order"],t),{location_id:i,created_at:a,updated_at:n,quantity:p,offset:c,...l}=s;return{searchParams:{limit:r,offset:c?parseInt(c):void 0,location_id:i,created_at:a?JSON.parse(a):void 0,updated_at:n?JSON.parse(n):void 0,...l},raw:s}},u=20,F=()=>{const{t:r}=d(),{searchParams:t}=B({pageSize:u}),{reservations:s,count:i,isPending:a,isError:n,error:p}=g({...t}),c=H(),l=I(),{table:f}=v({data:s||[],columns:l,count:i,enablePagination:!0,getRowId:m=>m.id,pageSize:u});if(n)throw p;return e.jsxs(A,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsxs("div",{children:[e.jsx(y,{children:r("reservations.domain")}),e.jsx(_,{className:"text-ui-fg-subtle",size:"small",children:r("reservations.subtitle")})]}),e.jsx(N,{variant:"secondary",size:"small",asChild:!0,children:e.jsx(T,{to:"create",children:r("actions.create")})})]}),e.jsx(j,{table:f,columns:l,pageSize:u,count:i,isLoading:a,filters:c,pagination:!0,navigateTo:m=>m.id,search:!1})]})},je=()=>{const{getWidgets:r}=b();return e.jsx(C,{widgets:{before:r("reservation.list.before"),after:r("reservation.list.after")},children:e.jsx(F,{})})};export{je as Component};
