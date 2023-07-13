import{a as k,j as a,r as m,bF as H,bG as S,bH as y,bI as v,bJ as N,L as d,f as x,P as L,X as P,Y as _,bK as A,bL as E,bM as q}from"./index.93363c98.js";import{a as h}from"./App.d09279fe.js";import{Q as U,C as W,a as F,S as C}from"./CustomHeader.c892035b.js";import{C as T}from"./CustomSidebar.8eb13e9c.js";import{E as I}from"./edit.823f9eaf.js";const Y=()=>{const e=h(),{loading:t,sidebarOpen:l,errors:g,uploadData:n,options:s}=k(u=>u.artists),p=()=>{e(y())},c=u=>{u.preventDefault(),e(v())},r=u=>{u.preventDefault(),e(N())},f=[{label:"Title",required:!0,name:"title",type:"text",placeHolder:"Title",show:!0},{label:"Spotify Link",required:!1,name:"spotify_url",type:"text",placeHolder:"Spotify Link",show:!0},{label:"Apple Link",required:!1,name:"apple_url",type:"text",placeHolder:"Apple Link",show:!0},{label:"Facebook Link",required:!1,name:"facebook_url",type:"text",placeHolder:"Facebook Link",show:!0},{label:"Instragram Link",required:!1,name:"instagram_url",type:"text",placeHolder:"Instragram Link",show:!0},{label:"Youtube Link",required:!1,name:"youtube_url",type:"text",placeHolder:"Youtube Link",show:!0},{label:"User",required:!0,name:"user_id",type:"select",options:s==null?void 0:s.user,isMulti:!1,isClearable:!1,placeHolder:"Select User",disabled:n==null?void 0:n.isEdit,show:!0},{label:"Status",required:!1,name:"status",type:"select",options:s==null?void 0:s.status,isMulti:!1,isClearable:!1,placeHolder:"Status",show:n==null?void 0:n.isEdit}],b=[{name:"Save",type:"button",color:"primary",className:"me-1",onClick:c,show:!(n!=null&&n.isEdit)},{name:"Update",type:"button",color:"primary",className:"me-1",onClick:r,show:n==null?void 0:n.isEdit},{name:"Cancel",type:"button",color:"danger",className:"me-1",onClick:p,show:!0}];return a(m.exports.Fragment,{children:a(T,{open:l,toggleSidebar:p,title:n!=null&&n.isEdit?"Edit Artist":"Add new Artist",errors:g,data:n,onChange:u=>e(H(u)),onReset:()=>e(S({})),loading:t,fields:f,button:b})})},j=e=>{const t=h();return a("div",{className:"actions cursor-pointer",children:a("div",{onClick:()=>{t(y()),t(S({...e,isEdit:!0}))},children:a(I,{size:20})})})},z=[{name:"Title",minWidth:"250px",selector:e=>e.title,cell:e=>a("span",{className:"text-capitalize",children:e.title})},{name:"Spotify Link",minWidth:"180px",selector:e=>e==null?void 0:e.spotify_url,cell:e=>{var t,l;return a(d,{to:e==null?void 0:e.spotify_url,target:"_blank",children:((t=e==null?void 0:e.spotify_url)==null?void 0:t.length)>15?((l=e==null?void 0:e.spotify_url)==null?void 0:l.slice(0,15))+"...":e==null?void 0:e.spotify_url})}},{name:"Apple Link",minWidth:"180px",selector:e=>e==null?void 0:e.apple_url,cell:e=>{var t,l;return a(d,{to:e==null?void 0:e.apple_url,target:"_blank",children:((t=e==null?void 0:e.apple_url)==null?void 0:t.length)>15?((l=e==null?void 0:e.apple_url)==null?void 0:l.slice(0,15))+"...":e==null?void 0:e.apple_url})}},{name:"Facebook Link",minWidth:"180px",selector:e=>e==null?void 0:e.facebook_url,cell:e=>{var t,l;return a(d,{to:e==null?void 0:e.facebook_url,target:"_blank",children:((t=e==null?void 0:e.facebook_url)==null?void 0:t.length)>15?((l=e==null?void 0:e.facebook_url)==null?void 0:l.slice(0,15))+"...":e==null?void 0:e.facebook_url})}},{name:"Instagram Link",minWidth:"180px",selector:e=>e==null?void 0:e.instagram_url,cell:e=>{var t,l;return a(d,{to:e==null?void 0:e.instagram_url,target:"_blank",children:((t=e==null?void 0:e.instagram_url)==null?void 0:t.length)>15?((l=e==null?void 0:e.instagram_url)==null?void 0:l.slice(0,15))+"...":e==null?void 0:e.instagram_url})}},{name:"Youtube Link",minWidth:"180px",selector:e=>e==null?void 0:e.youtube_url,cell:e=>{var t,l;return a(d,{to:e==null?void 0:e.youtube_url,target:"_blank",children:((t=e==null?void 0:e.youtube_url)==null?void 0:t.length)>15?((l=e==null?void 0:e.youtube_url)==null?void 0:l.slice(0,15))+"...":e==null?void 0:e.youtube_url})}},{name:"User",minWidth:"120px",selector:e=>e==null?void 0:e.user,cell:e=>{var t,l;return x("span",{children:[(t=e==null?void 0:e.user)==null?void 0:t.first_name," ",(l=e==null?void 0:e.user)==null?void 0:l.last_name]})}},{name:"Status",minWidth:"120px",selector:e=>e.current_status,cell:e=>a("span",{className:"text-capitalize",children:e.current_status})},{name:"Action",minWidth:"120px",selector:e=>e==null?void 0:e.id,cell:e=>j(e)}],M=()=>{var b,u;const e=h(),{data:t,total:l,from:g,to:n,params:s,loading:p,options:c}=k(i=>i.artists),r=i=>{e(A(i))},f=()=>{e(y())};return a(m.exports.Fragment,{children:a(L,{className:"app-user-list",children:a(U,{noHeader:!0,subHeader:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:z,className:"react-dataTable",paginationComponent:()=>W(g,n,l,s==null?void 0:s.page,s==null?void 0:s.rowsPerPage,r),data:t,progressPending:p,highlightOnHover:!0,persistTableHead:!0,subHeaderComponent:a(F,{toggleSidebar:f,setParams:r,rowsPerPage:s==null?void 0:s.rowsPerPage,q:s==null?void 0:s.q,item:"Artist",searchPlaceHolder:"Search by Title/User Name",customComponent:x(P,{children:[a(_,{sm:"4"}),a(_,{sm:"4",children:a(C,{className:"react-select",classNamePrefix:"select",options:c==null?void 0:c.user,isClearable:!0,value:(b=c==null?void 0:c.user)==null?void 0:b.find(i=>(i==null?void 0:i.value)==(s==null?void 0:s.user)),onChange:i=>r({user:i==null?void 0:i.value,page:1}),placeholder:"Select User"})}),a(_,{sm:"4",children:a(C,{className:"react-select",classNamePrefix:"select",options:c==null?void 0:c.status,isClearable:!0,value:(u=c==null?void 0:c.status)==null?void 0:u.find(i=>(i==null?void 0:i.value)==(s==null?void 0:s.status)),onChange:i=>r({status:i==null?void 0:i.value,page:1}),placeholder:"Select Status"})})]})})})})})},J=()=>{const e=h(),{params:t}=k(l=>l.artists);return m.exports.useEffect(()=>{e(E())},[t]),m.exports.useEffect(()=>{e(q())},[]),x(m.exports.Fragment,{children:[a(L,{className:"app-user-list",children:a(M,{})}),a(Y,{})]})};export{J as default};