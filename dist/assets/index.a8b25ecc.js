import{j as a,k as N,a as h,r,P as p,f as S,X as H,Y as u,br as T,bs as W,bt as j,bu as z}from"./index.fc0c5a58.js";import{a as x}from"./App.507f1bd6.js";import{Q as D,C as F,a as U,S as g}from"./CustomHeader.86a132b3.js";const k=[{name:"ID",minWidth:"60px",selector:e=>e==null?void 0:e.id,cell:e=>a("span",{className:"text-capitalize",children:e==null?void 0:e.id})},{name:"Label",minWidth:"250px",selector:e=>e==null?void 0:e.title,cell:e=>a("span",{children:e==null?void 0:e.title})},{name:"User",minWidth:"120px",selector:e=>e==null?void 0:e.user,cell:e=>{var c;return a("span",{className:"text-capitalize",children:(c=e==null?void 0:e.user)==null?void 0:c.name})}},{name:"Status",minWidth:"120px",selector:e=>e.current_status,cell:e=>a("span",{className:"text-capitalize",children:e.current_status})}],q=()=>{var d,m;const e=x(),c=N(),{data:i,total:b,from:C,to:f,params:t,loading:o,options:l}=h(s=>s.supportCenters),n=s=>{e(T(s))},P=()=>{e(W())},v=s=>{c("/support-center/"+(s==null?void 0:s.id))};return a(r.exports.Fragment,{children:a(p,{className:"app-user-list",children:a(D,{noHeader:!0,subHeader:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:k,className:"react-dataTable",paginationComponent:()=>F(C,f,b,t==null?void 0:t.page,t==null?void 0:t.rowsPerPage,n),data:i,progressPending:o,highlightOnHover:!0,persistTableHead:!0,subHeaderComponent:a(U,{toggleSidebar:P,setParams:n,rowsPerPage:t==null?void 0:t.rowsPerPage,q:t==null?void 0:t.q,item:null,searchPlaceHolder:"Search by Title",customComponent:S(H,{children:[a(u,{sm:"4"}),a(u,{sm:"4",children:a(g,{className:"react-select",classNamePrefix:"select",options:l==null?void 0:l.user,isClearable:!0,value:(d=l==null?void 0:l.user)==null?void 0:d.find(s=>(s==null?void 0:s.value)==(t==null?void 0:t.user)),onChange:s=>n({user:s==null?void 0:s.value,page:1}),placeholder:"Select User"})}),a(u,{sm:"4",children:a(g,{className:"react-select",classNamePrefix:"select",options:l==null?void 0:l.status,isClearable:!0,value:(m=l==null?void 0:l.status)==null?void 0:m.find(s=>(s==null?void 0:s.value)==(t==null?void 0:t.status)),onChange:s=>n({status:s==null?void 0:s.value,page:1}),placeholder:"Select Status"})})]})}),onRowClicked:v})})})},Q=()=>{const e=x(),{params:c}=h(i=>i.supportCenters);return r.exports.useEffect(()=>{e(j())},[c]),r.exports.useEffect(()=>{e(z())},[]),a(r.exports.Fragment,{children:a(p,{className:"app-user-list",children:a(q,{})})})};export{Q as default};
