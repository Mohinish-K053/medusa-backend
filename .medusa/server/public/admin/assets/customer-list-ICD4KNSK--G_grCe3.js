import{u as f,a as g,b as x}from"./chunk-IDYOGWSG-DWePUlL9.js";import{a as j,j as s,b as m,dB as y,H as C,L as h,B as v,r as k,k as T,A as _}from"./index-Y1lUIdzc.js";import{u as A,_ as P}from"./chunk-X3LH6P65-DvLbEi23.js";import"./lodash-DUWtrxUu.js";import"./chunk-TMAS4ILY-t4ytNcuu.js";import{S}from"./chunk-2RQLKDBF-D-5V31Nx.js";import{P as E}from"./pencil-square-CtD7b9NZ.js";import{C as w}from"./container-BuP7xY2N.js";import{c as D}from"./index-9K2jTE_Z.js";import"./chunk-C76H5USB-BCy-xx4z.js";import"./chunk-WYX5PIA3-BhQ5DJfk.js";import"./chunk-P3UUX2T6-Dg0JX98C.js";import"./chunk-DV5RB7II-DCWKsGYO.js";import"./format-BIas-G4J.js";import"./chunk-ADOCJB6L-C5_hYlOE.js";import"./chunk-YEDAFXMB-D3WzQLUo.js";import"./chunk-AOFGTNG6-Dpy6BdS0.js";import"./table-BdEctOfn.js";import"./chunk-WX2SMNCD-Bs4d-wZh.js";import"./plus-mini-Db18lP5m.js";import"./command-bar-BA0L0gzp.js";import"./index-_7F4tK6e.js";import"./_isIndex-DnXbCqj1.js";import"./x-mark-mini-DF1mQQBa.js";import"./date-picker-BCWKbKWJ.js";import"./popover-Du9XRt9H.js";import"./triangle-left-mini-gvt7COK9.js";import"./index-DNYiGEVn.js";import"./Trans-Dnf3kPA_.js";import"./check-BcecOcPv.js";var a=20,L=()=>{const{t:e}=m(),{searchParams:t,raw:n}=f({pageSize:a}),{customers:l,count:o,isLoading:c,isError:u,error:p}=y({...t},{placeholderData:T}),d=g(),i=H(),{table:b}=A({data:l??[],columns:i,count:o,enablePagination:!0,getRowId:r=>r.id,pageSize:a});if(u)throw p;return s.jsxs(w,{className:"divide-y p-0",children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[s.jsx(C,{children:e("customers.domain")}),s.jsx(h,{to:"/customers/create",children:s.jsx(v,{size:"small",variant:"secondary",children:e("actions.create")})})]}),s.jsx(P,{table:b,columns:i,pageSize:a,count:o,filters:d,orderBy:[{key:"email",label:e("fields.email")},{key:"first_name",label:e("fields.firstName")},{key:"last_name",label:e("fields.lastName")},{key:"has_account",label:e("customers.hasAccount")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],isLoading:c,navigateTo:r=>r.original.id,search:!0,queryObject:n,noRecords:{message:e("customers.list.noRecordsMessage")}})]})},z=({customer:e})=>{const{t}=m();return s.jsx(_,{groups:[{actions:[{icon:s.jsx(E,{}),label:t("actions.edit"),to:`/customers/${e.id}/edit`}]}]})},B=D(),H=()=>{const e=x();return k.useMemo(()=>[...e,B.display({id:"actions",cell:({row:t})=>s.jsx(z,{customer:t.original})})],[e])},pe=()=>{const{getWidgets:e}=j();return s.jsx(S,{widgets:{after:e("customer.list.after"),before:e("customer.list.before")},children:s.jsx(L,{})})};export{pe as Component};
