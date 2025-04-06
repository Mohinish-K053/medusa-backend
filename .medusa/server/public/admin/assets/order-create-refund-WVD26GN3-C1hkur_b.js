import{a as E}from"./chunk-4V4KZIY3-YKoQ2GbM.js";import{f as F}from"./chunk-OV5NMSY6-CzJZ0JaW.js";import{D as T}from"./chunk-7I5DQGWY-CwOWioty.js";import{g as I}from"./chunk-PDWBYQOW-BedvhUOI.js";import{g as L}from"./chunk-MWVM4TYO-bKUcYSnf.js";import{a2 as P,af as N,a4 as y,b as v,R as A,aS as w,cY as V,j as e,H as z,u as D,a0 as M,a8 as O,a9 as B,r as H,t as R,z as $,w as o,B as b}from"./index-Y1lUIdzc.js";import{a as K}from"./chunk-3UEMCYR5-DcThouTq.js";import{K as k}from"./chunk-6HTZNHPT-BhjAERei.js";import{b as m,u as q}from"./chunk-JGQGO74V-B5U9Jk_n.js";import{S as u}from"./select-bcm5ZSIZ.js";import{C as Q}from"./currency-input-DILw1BJE.js";import{T as U}from"./textarea-BjSeCORP.js";import"./chunk-K7S5TX6I-wjd0ChwH.js";import"./chunk-7DXVXBSA-CCclXhoB.js";import"./document-text-DnClgO6A.js";import"./arrow-down-right-mini-Da6ijv4h.js";import"./use-prompt-BD90Slcr.js";import"./prompt-4rFXDKY3.js";import"./x-circle-Cyz1COjb.js";import"./Trans-Dnf3kPA_.js";import"./container-BuP7xY2N.js";import"./status-badge-CWnS0WJX.js";import"./format-BIas-G4J.js";import"./triangles-mini-24hh2nEr.js";import"./check-BcecOcPv.js";import"./index.esm-CvQH8Yji.js";var W=P({amount:N(),refund_reason_id:y().nullish(),note:y().optional()}),Y=({order:i,refundReasons:j})=>{const{t:n}=v(),{handleSuccess:l}=q(),p=D(),[x]=M(),h=x.get("paymentId"),g=E(i),s=g.find(r=>r.id===h),f=(s==null?void 0:s.amount)||0,d=O({defaultValues:{amount:f,note:""},resolver:B(W)});H.useEffect(()=>{const r=i.summary.pending_difference,a=(s==null?void 0:s.amount)||0,c=r<0?Math.min(r,a):a,t=c<0?c*-1:c;d.setValue("amount",t)},[s]);const{mutateAsync:_,isPending:C}=K(i.id,s==null?void 0:s.id),S=d.handleSubmit(async r=>{await _({amount:r.amount,refund_reason_id:r.refund_reason_id,note:r.note},{onSuccess:()=>{R.success(n("orders.payment.refundPaymentSuccess",{amount:F(r.amount,s==null?void 0:s.currency_code)})),l()},onError:a=>{R.error(a.message)}})});return e.jsx(m.Form,{form:d,children:e.jsxs(k,{onSubmit:S,className:"flex size-full flex-col overflow-hidden",children:[e.jsx(m.Body,{className:"flex-1 overflow-auto",children:e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsxs(u,{value:s==null?void 0:s.id,onValueChange:r=>{p(`/orders/${i.id}/refund?paymentId=${r}`,{replace:!0})},children:[e.jsx($,{className:"txt-compact-small mb-[-6px] font-sans font-medium",children:n("orders.payment.selectPaymentToRefund")}),e.jsx(u.Trigger,{children:e.jsx(u.Value,{placeholder:n("orders.payment.selectPaymentToRefund")})}),e.jsx(u.Content,{children:g.map(r=>{const a=r.refunds.reduce((c,t)=>t.amount+c,0);return e.jsxs(u.Item,{value:r.id,disabled:!!r.canceled_at||a>=r.amount,children:[e.jsxs("span",{children:[I(r.amount,r.currency_code)," - "]}),e.jsx("span",{children:r.provider_id}),e.jsxs("span",{children:[" - (",r.id.replace("pay_",""),")"]})]},r.id)})})]}),e.jsx(o.Field,{control:d.control,name:"amount",rules:{required:!0,min:0,max:f},render:({field:{onChange:r,...a}})=>e.jsxs(o.Item,{children:[e.jsx(o.Label,{children:n("fields.amount")}),e.jsx(o.Control,{children:e.jsx(Q,{...a,min:0,onValueChange:c=>{const t=c?parseInt(c):"";t&&!isNaN(t)&&(t<0||t>f?d.setError("amount",{type:"manual",message:n("orders.payment.createRefundWrongQuantity",{number:f})}):d.clearErrors("amount")),r(t)},code:i.currency_code,symbol:L(i.currency_code),value:a.value})}),e.jsx(o.ErrorMessage,{})]})}),e.jsx(o.Field,{control:d.control,name:"note",render:({field:r})=>e.jsxs(o.Item,{children:[e.jsx(o.Label,{children:n("fields.note")}),e.jsx(o.Control,{children:e.jsx(U,{...r})}),e.jsx(o.ErrorMessage,{})]})})]})}),e.jsx(m.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(m.Close,{asChild:!0,children:e.jsx(b,{variant:"secondary",size:"small",children:n("actions.cancel")})}),e.jsx(b,{isLoading:C,type:"submit",variant:"primary",size:"small",disabled:!!Object.keys(d.formState.errors||{}).length,children:n("actions.save")})]})})]})})},ve=()=>{const{t:i}=v(),j=A(),{order:n}=w(j.id,{fields:T}),{refund_reasons:l,isLoading:p,isError:x,error:h}=V();if(x)throw h;return e.jsxs(m,{children:[e.jsx(m.Header,{children:e.jsx(z,{children:i("orders.payment.createRefund")})}),n&&!p&&l&&e.jsx(Y,{order:n,refundReasons:l})]})};export{ve as Component};
