import{S as h}from"./chunk-2RQLKDBF-D-5V31Nx.js";import{u as D}from"./chunk-FFVOUYTF-3q3mqksm.js";import{D as v,u as y,c as x}from"./chunk-MGPZHEOT-B6iKHyts.js";import{a as C,j as a,e8 as L,b as c,u as S,r as m,k as j}from"./index-Y1lUIdzc.js";import{u as A}from"./chunk-C76H5USB-BCy-xx4z.js";import{P}from"./pencil-square-CtD7b9NZ.js";import{C as w}from"./container-BuP7xY2N.js";import"./Trans-Dnf3kPA_.js";import"./x-mark-mini-DF1mQQBa.js";import"./check-BcecOcPv.js";import"./chunk-DV5RB7II-DCWKsGYO.js";import"./format-BIas-G4J.js";import"./checkbox-D7KNssHu.js";import"./index-9K2jTE_Z.js";import"./command-bar-BA0L0gzp.js";import"./index-_7F4tK6e.js";import"./table-BdEctOfn.js";import"./arrow-up-mini-Cmqcs3uy.js";import"./date-picker-BCWKbKWJ.js";import"./popover-Du9XRt9H.js";import"./triangle-left-mini-gvt7COK9.js";var n=20,E=()=>{const{q:e,order:i,offset:t}=A(["q","order","offset"]),{users:r,count:u,isPending:p,isError:d,error:f}=L({q:e,order:i,offset:t?parseInt(t):0,limit:n},{placeholderData:j}),g=T(),b=_(),{t:s}=c();if(d)throw f;return a.jsx(w,{className:"divide-y p-0",children:a.jsx(v,{data:r,columns:g,filters:b,getRowId:l=>l.id,rowCount:u,pageSize:n,heading:s("users.domain"),rowHref:l=>`${l.id}`,isLoading:p,action:{label:s("users.invite"),to:"invite"},emptyState:{empty:{heading:s("users.list.empty.heading"),description:s("users.list.empty.description")},filtered:{heading:s("users.list.filtered.heading"),description:s("users.list.filtered.description")}}})})},o=x(),T=()=>{const{t:e}=c(),i=S(),t=D();return m.useMemo(()=>[o.accessor("email",{header:e("fields.email"),cell:({row:r})=>r.original.email,enableSorting:!0,sortAscLabel:e("filters.sorting.alphabeticallyAsc"),sortDescLabel:e("filters.sorting.alphabeticallyDesc")}),o.accessor("first_name",{header:e("fields.firstName"),cell:({row:r})=>r.original.first_name||"-",enableSorting:!0,sortAscLabel:e("filters.sorting.alphabeticallyAsc"),sortDescLabel:e("filters.sorting.alphabeticallyDesc")}),o.accessor("last_name",{header:e("fields.lastName"),cell:({row:r})=>r.original.last_name||"-",enableSorting:!0,sortAscLabel:e("filters.sorting.alphabeticallyAsc"),sortDescLabel:e("filters.sorting.alphabeticallyDesc")}),...t,o.action({actions:[{label:e("actions.edit"),icon:a.jsx(P,{}),onClick:r=>{i(`${r.row.original.id}/edit`)}}]})],[e,i,t])},_=()=>{const e=y();return m.useMemo(()=>e,[e])},Y=()=>{const{getWidgets:e}=C();return a.jsx(h,{widgets:{after:e("user.list.after"),before:e("user.list.before")},children:a.jsx(E,{})})};export{Y as Component};
