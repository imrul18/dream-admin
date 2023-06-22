import{a as C,j as s,r as d,bz as N,bA as P,bB as g,bC as v,P as S,f as U,X as y,Y as b,bD as H,bE as _,bF as E}from"./index.9b1955b3.js";import{a as f}from"./App.ad13b1dc.js";import{Q as R,C as D,a as q,S as x}from"./CustomHeader.b9d896cf.js";import{C as A}from"./CustomSidebar.404145d7.js";import{h as k}from"./moment.4d75c86c.js";const F=()=>{const e=f(),{loading:c,sidebarOpen:u,errors:o,uploadData:r,options:a}=C(i=>i.claimReleases),m=()=>{e(g())},l=i=>{i.preventDefault()},n=i=>{i.preventDefault(),e(v())},h=[{label:"Date",required:!0,name:"created_at",type:"text",placeHolder:"Date",isCopied:!0,disabled:!0,show:!0},{label:"URL",required:!1,name:"claim_url",type:"text",placeHolder:"URL",isCopied:!0,disabled:!0,show:!0},{label:"UPC/EAN",required:!1,name:"claim_upc",type:"text",placeHolder:"UPC/EAN",isCopied:!0,disabled:!0,show:!0},{label:"User",required:!1,name:"user_id",type:"select",options:a==null?void 0:a.user,isMulti:!1,isClearable:!1,disabled:!0,placeHolder:"User",show:!0},{label:"Status",required:!1,name:"status",type:"select",options:a==null?void 0:a.status,isMulti:!1,isClearable:!1,placeHolder:"Status",show:!0}],p=[{name:"Save",type:"button",color:"primary",className:"me-1",onClick:l,show:!(r!=null&&r.isEdit)},{name:"Update",type:"button",color:"primary",className:"me-1",onClick:n,show:r==null?void 0:r.isEdit},{name:"Cancel",type:"button",color:"danger",className:"me-1",onClick:m,show:!0}];return s(d.exports.Fragment,{children:s(A,{open:u,toggleSidebar:m,title:r!=null&&r.isEdit?"Edit Label":"Add new Label",errors:o,data:r,onChange:i=>e(N(i)),onReset:()=>e(P({})),loading:c,fields:h,button:p})})},L=[{name:"Date",minWidth:"180px",selector:e=>e==null?void 0:e.created_at,cell:e=>s("span",{children:k(e==null?void 0:e.created_at).format("DD MMM YYYY")})},{name:"URL",minWidth:"180px",selector:e=>e==null?void 0:e.claim_url,cell:e=>s("span",{children:e==null?void 0:e.claim_url})},{name:"UPC/EAN",minWidth:"180px",selector:e=>e==null?void 0:e.claim_upc,cell:e=>s("span",{children:e==null?void 0:e.claim_upc})},{name:"User",minWidth:"180px",selector:e=>{var c;return(c=e==null?void 0:e.user)==null?void 0:c.name},cell:e=>{var c;return s("span",{children:(c=e==null?void 0:e.user)==null?void 0:c.name})}},{name:"Status",minWidth:"180px",selector:e=>e==null?void 0:e.current_status,cell:e=>s("span",{children:e==null?void 0:e.current_status})}],M=()=>{var p,i;const e=f(),{data:c,total:u,from:o,to:r,params:a,loading:m,options:l}=C(t=>t.claimReleases),n=t=>{e(H(t))},h=()=>{e(g())};return s(d.exports.Fragment,{children:s(S,{className:"app-user-list",children:s(R,{noHeader:!0,subHeader:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:L,className:"react-dataTable",paginationComponent:()=>D(o,r,u,a==null?void 0:a.page,a==null?void 0:a.rowsPerPage,n),data:c,progressPending:m,highlightOnHover:!0,persistTableHead:!0,subHeaderComponent:s(q,{toggleSidebar:h,setParams:n,rowsPerPage:a==null?void 0:a.rowsPerPage,q:a==null?void 0:a.q,item:null,searchPlaceHolder:"Search by UPC",customComponent:U(y,{children:[s(b,{sm:"4"}),s(b,{sm:"4",children:s(x,{className:"react-select",classNamePrefix:"select",options:l==null?void 0:l.user,isClearable:!0,value:(p=l==null?void 0:l.user)==null?void 0:p.find(t=>(t==null?void 0:t.value)==(a==null?void 0:a.user)),onChange:t=>n({user:t==null?void 0:t.value,page:1}),placeholder:"Select User"})}),s(b,{sm:"4",children:s(x,{className:"react-select",classNamePrefix:"select",options:l==null?void 0:l.status,isClearable:!0,value:(i=l==null?void 0:l.status)==null?void 0:i.find(t=>(t==null?void 0:t.value)==(a==null?void 0:a.status)),onChange:t=>n({status:t==null?void 0:t.value,page:1}),placeholder:"Select Status"})})]})}),onRowClicked:t=>{e(g()),e(P({...t,isEdit:!0}))}})})})},B=()=>{const e=f(),{params:c}=C(u=>u.claimReleases);return d.exports.useEffect(()=>{e(_())},[c]),d.exports.useEffect(()=>{e(E())},[]),U(d.exports.Fragment,{children:[s(S,{className:"app-user-list",children:s(M,{})}),s(F,{})]})};export{B as default};