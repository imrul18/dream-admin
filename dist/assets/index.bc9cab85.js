import{a as g,j as a,r as d,ao as x,ap as b,aq as h,ar as N,as as P,P as C,at as S,au as y,f as E}from"./index.29939c18.js";import{a as m}from"./App.0c5538cd.js";import{Q as H,C as v,a as q}from"./CustomHeader.9af06c63.js";import{C as w,E as A}from"./CustomSidebar.765a3984.js";const G=()=>{const e=m(),{loading:r,sidebarOpen:i,errors:u,uploadData:s,options:t}=g(n=>n.genres),c=()=>{e(h())},l=n=>{n.preventDefault(),e(N())},p=n=>{n.preventDefault(),e(P())},o=[{label:"Name",required:!0,name:"name",type:"text",placeHolder:"Genre Name",show:!0},{label:"Status",required:!0,name:"status",type:"select",options:t==null?void 0:t.status,isMulti:!1,isClearable:!1,placeHolder:"Status",show:s==null?void 0:s.isEdit}],f=[{name:"Save",type:"button",color:"primary",className:"me-1",onClick:l,show:!(s!=null&&s.isEdit)},{name:"Update",type:"button",color:"primary",className:"me-1",onClick:p,show:s==null?void 0:s.isEdit},{name:"Cancel",type:"button",color:"danger",className:"me-1",onClick:c,show:!0}];return a(d.exports.Fragment,{children:a(w,{open:i,toggleSidebar:c,title:s!=null&&s.isEdit?"Edit Genre":"Add new Genre",errors:u,data:s,onChange:n=>e(x(n)),onReset:()=>e(b({})),loading:r,fields:o,button:f})})},k=e=>{const r=m();return a("div",{className:"actions cursor-pointer",children:a("div",{onClick:()=>{r(h()),r(b({...e,isEdit:!0}))},children:a(A,{size:20})})})},F=[{name:"Name",minWidth:"180px",selector:e=>e.name,cell:e=>a("span",{className:"text-capitalize",children:e.name})},{name:"Status",minWidth:"120px",selector:e=>e.current_status,cell:e=>a("span",{className:"text-capitalize",children:e.current_status})},{name:"Action",minWidth:"120px",selector:e=>e==null?void 0:e.id,cell:e=>k(e)}],j=()=>{const e=m(),{data:r,total:i,from:u,to:s,params:t,loading:c}=g(o=>o.genres),l=o=>{e(S(o))},p=()=>{e(h())};return a(d.exports.Fragment,{children:a(C,{className:"app-user-list",children:a(H,{noHeader:!0,subHeader:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:F,className:"react-dataTable",paginationComponent:()=>v(u,s,i,t==null?void 0:t.page,t==null?void 0:t.rowsPerPage,l),data:r,progressPending:c,highlightOnHover:!0,persistTableHead:!0,subHeaderComponent:a(q,{toggleSidebar:p,setParams:l,rowsPerPage:t==null?void 0:t.rowsPerPage,q:t==null?void 0:t.q,item:"Genre",searchPlaceHolder:"Search by Genre Name"})})})})},O=()=>{const e=m(),{params:r}=g(i=>i.genres);return d.exports.useEffect(()=>{e(y())},[r]),E(d.exports.Fragment,{children:[a(C,{className:"app-user-list",children:a(j,{})}),a(G,{})]})};export{O as default};
