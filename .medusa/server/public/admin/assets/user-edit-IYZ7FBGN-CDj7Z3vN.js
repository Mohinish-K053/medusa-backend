import{a2 as f,a4 as c,b as u,R as h,cL as p,j as s,H as y,a8 as b,a9 as g,d_ as v,w as e,x as m,B as x}from"./index-Y1lUIdzc.js";import{K as F}from"./chunk-6HTZNHPT-BhjAERei.js";import{b as n,u as _}from"./chunk-JGQGO74V-B5U9Jk_n.js";import"./prompt-4rFXDKY3.js";var w=f({first_name:c().optional(),last_name:c().optional()}),E=({user:t})=>{const{t:r}=u(),{handleSuccess:i}=_(),a=b({defaultValues:{first_name:t.first_name||"",last_name:t.last_name||""},resolver:g(w)}),{mutateAsync:l,isPending:d}=v(t.id),j=a.handleSubmit(async o=>{await l(o,{onSuccess:()=>{i()}})});return s.jsx(n.Form,{form:a,children:s.jsxs(F,{onSubmit:j,className:"flex flex-1 flex-col overflow-hidden",children:[s.jsxs(n.Body,{className:"flex max-w-full flex-1 flex-col gap-y-8 overflow-y-auto",children:[s.jsx(e.Field,{control:a.control,name:"first_name",render:({field:o})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:r("fields.firstName")}),s.jsx(e.Control,{children:s.jsx(m,{...o})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:a.control,name:"last_name",render:({field:o})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:r("fields.lastName")}),s.jsx(e.Control,{children:s.jsx(m,{...o})}),s.jsx(e.ErrorMessage,{})]})})]}),s.jsx(n.Footer,{children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(n.Close,{asChild:!0,children:s.jsx(x,{size:"small",variant:"secondary",children:r("actions.cancel")})}),s.jsx(x,{size:"small",type:"submit",isLoading:d,children:r("actions.save")})]})})]})})},N=()=>{const{t}=u(),{id:r}=h(),{user:i,isPending:a,isError:l,error:d}=p(r);if(l)throw d;return s.jsxs(n,{children:[s.jsx(n.Header,{children:s.jsx(y,{children:t("users.editUser")})}),!a&&i&&s.jsx(E,{user:i})]})};export{N as Component};
