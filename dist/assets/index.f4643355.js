import{j as a,f as h,k as o,a as p,r as i,P as x,X as H,Y as u,by as T,bz as W,bA as _,bB as j}from"./index.93363c98.js";import{a as b}from"./App.d09279fe.js";import{Q as z,C as A,a as D,S as g}from"./CustomHeader.c892035b.js";const F=[{name:"ID",minWidth:"60px",selector:e=>e==null?void 0:e.id,cell:e=>a("span",{className:"text-capitalize",children:e==null?void 0:e.id})},{name:"Label",minWidth:"250px",selector:e=>e==null?void 0:e.title,cell:e=>a("span",{children:e==null?void 0:e.title})},{name:"User",minWidth:"120px",selector:e=>e==null?void 0:e.user,cell:e=>{var c,n;return h("span",{children:[(c=e==null?void 0:e.user)==null?void 0:c.first_name," ",(n=e==null?void 0:e.user)==null?void 0:n.last_name]})}},{name:"Status",minWidth:"120px",selector:e=>e.current_status,cell:e=>a("span",{className:"text-capitalize",children:e.current_status})}],U=()=>{var d,m;const e=b(),c=o(),{data:n,total:f,from:C,to:P,params:t,loading:v,options:l}=p(s=>s.supportCenters),r=s=>{e(T(s))},S=()=>{e(W())},N=s=>{c("/support-center/"+(s==null?void 0:s.id))};return a(i.exports.Fragment,{children:a(x,{className:"app-user-list",children:a(z,{noHeader:!0,subHeader:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:F,className:"react-dataTable",paginationComponent:()=>A(C,P,f,t==null?void 0:t.page,t==null?void 0:t.rowsPerPage,r),data:n,progressPending:v,highlightOnHover:!0,persistTableHead:!0,subHeaderComponent:a(D,{toggleSidebar:S,setParams:r,rowsPerPage:t==null?void 0:t.rowsPerPage,q:t==null?void 0:t.q,item:null,searchPlaceHolder:"Search by Title",customComponent:h(H,{children:[a(u,{sm:"4"}),a(u,{sm:"4",children:a(g,{className:"react-select",classNamePrefix:"select",options:l==null?void 0:l.user,isClearable:!0,value:(d=l==null?void 0:l.user)==null?void 0:d.find(s=>(s==null?void 0:s.value)==(t==null?void 0:t.user)),onChange:s=>r({user:s==null?void 0:s.value,page:1}),placeholder:"Select User"})}),a(u,{sm:"4",children:a(g,{className:"react-select",classNamePrefix:"select",options:l==null?void 0:l.status,isClearable:!0,value:(m=l==null?void 0:l.status)==null?void 0:m.find(s=>(s==null?void 0:s.value)==(t==null?void 0:t.status)),onChange:s=>r({status:s==null?void 0:s.value,page:1}),placeholder:"Select Status"})})]})}),onRowClicked:N})})})},E=()=>{const e=b(),{params:c}=p(n=>n.supportCenters);return i.exports.useEffect(()=>{e(_())},[c]),i.exports.useEffect(()=>{e(j())},[]),a(i.exports.Fragment,{children:a(x,{className:"app-user-list",children:a(U,{})})})};export{E as default};
