import{V as p}from"./chunk-F6ZOHZVB-BxEhu5O1.js";import{a2 as j,a4 as y,R as f,b as u,eW as g,j as e,H as K,a8 as b,a9 as v,eZ as E,t as m,w as i,x as F,B as x}from"./index-Y1lUIdzc.js";import{K as A}from"./chunk-6HTZNHPT-BhjAERei.js";import{b as s,u as C}from"./chunk-JGQGO74V-B5U9Jk_n.js";import"./prompt-4rFXDKY3.js";var M=j({title:y().min(1)}),S=({apiKey:r})=>{const{t:a}=u(),{handleSuccess:n}=C(),t=b({defaultValues:{title:r.title},resolver:v(M)}),{mutateAsync:o,isPending:l}=E(r.id),h=t.handleSubmit(async c=>{await o(c,{onSuccess:({api_key:d})=>{m.success(a("apiKeyManagement.edit.successToast",{title:d.title})),n()},onError:d=>{m.error(d.message)}})});return e.jsx(s.Form,{form:t,children:e.jsxs(A,{onSubmit:h,className:"flex flex-1 flex-col",children:[e.jsx(s.Body,{children:e.jsx("div",{className:"flex flex-col gap-y-4",children:e.jsx(i.Field,{control:t.control,name:"title",render:({field:c})=>e.jsxs(i.Item,{children:[e.jsx(i.Label,{children:a("fields.title")}),e.jsx(i.Control,{children:e.jsx(F,{...c})}),e.jsx(i.ErrorMessage,{})]})})})}),e.jsx(s.Footer,{children:e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(s.Close,{asChild:!0,children:e.jsx(x,{size:"small",variant:"secondary",children:a("actions.cancel")})}),e.jsx(x,{size:"small",type:"submit",isLoading:l,children:a("actions.save")})]})})]})})},L=()=>{const{id:r}=f(),{t:a}=u(),{api_key:n,isLoading:t,isError:o,error:l}=g(r);if(o)throw l;return e.jsxs(s,{children:[e.jsxs(s.Header,{children:[e.jsx(s.Title,{asChild:!0,children:e.jsx(K,{children:a("apiKeyManagement.edit.header")})}),e.jsx(s.Description,{asChild:!0,children:e.jsx(p,{children:a("apiKeyManagement.edit.description")})})]}),!t&&!!n&&e.jsx(S,{apiKey:n})]})};export{L as Component};
