import{k as D,b2 as rr,a as er,r as J,b3 as dr,j as e,f as n,P as nr,Q as lr,G as m,T as cr,X as i,Y as l,$ as c,b4 as ir}from"./index.fc0c5a58.js";import{h as K}from"./moment.4d75c86c.js";import{a as sr}from"./App.507f1bd6.js";const ar=()=>{var g,p,N,o,y,b,x,A,f,P,v,_,C,S,Y,k,R,M,F,E,L,j,B,G,I,T,W,H,O,Q,U,V,X,$,q,z;const a=sr(),Z=D(),{id:h}=rr(),{showData:r,options:u}=er(d=>d.audios);J.exports.useEffect(()=>{h&&a(dr(h))},[h]);const t=d=>{(r==null?void 0:r.status)!=(d==null?void 0:d.value)&&a(ir({id:h,data:{status:d==null?void 0:d.value}}))},w=d=>{const s=document.createElement("a");s.href=d,s.download=r==null?void 0:r.title,s.target="_blank",s.click()};return e(J.exports.Fragment,{children:n(nr,{children:[n(lr,{children:[e("div",{children:e("h4",{children:e(m,{color:"primary",className:"me-1",onClick:()=>Z("/audio/edit/"+h,{replace:!1}),children:"Edit"})})}),e("div",{className:"d-flex align-items-center",children:(g=u==null?void 0:u.status)==null?void 0:g.map(d=>e(m,{color:(r==null?void 0:r.status)==(d==null?void 0:d.value)?"primary":"secondary",className:"me-1",onClick:()=>t(d),children:d==null?void 0:d.label}))})]}),e("hr",{}),e(cr,{children:n(i,{children:[n(l,{md:"9",children:[n("div",{children:[e("h3",{className:"mx-1",children:"Audio Details"}),n(i,{className:"border rounded p-1",children:[n(l,{md:"4",children:[e(c,{children:"Release Title"}),e("h5",{children:(p=r==null?void 0:r.title)!=null?p:"N/A"})]}),n(l,{md:"4",children:[e(c,{children:"Version/Subtitle"}),e("h5",{children:(N=r==null?void 0:r.subtitle)!=null?N:"N/A"})]}),n(l,{md:"4",children:[e(c,{children:"Label Name"}),e("h5",{children:(y=(o=r==null?void 0:r.label)==null?void 0:o.title)!=null?y:"N/A"})]}),n(l,{md:"4",children:[e(c,{children:"Lyrics Language"}),e("h5",{children:(x=(b=r==null?void 0:r.language)==null?void 0:b.name)!=null?x:"N/A"})]}),n(l,{md:"4",children:[e(c,{children:"Genre"}),e("h5",{children:(f=(A=r==null?void 0:r.genre)==null?void 0:A.name)!=null?f:"N/A"})]}),n(l,{md:"4",children:[e(c,{children:"Subgenre"}),e("h5",{children:(v=(P=r==null?void 0:r.subgenre)==null?void 0:P.name)!=null?v:"N/A"})]}),n(l,{md:"4",children:[e(c,{children:"Main Release Date"}),e("h5",{children:K(r==null?void 0:r.main_release_date).format("DD MMM YYYY")})]}),n(l,{md:"4",children:[e(c,{children:"Original Release Date "}),e("h5",{children:K(r==null?void 0:r.original_release_date).format("DD MMM YYYY")})]}),n(l,{md:"4",children:[e(c,{children:"Format"}),e("h5",{children:(C=(_=r==null?void 0:r.format)==null?void 0:_.name)!=null?C:"N/A"})]}),n(l,{md:"4",children:[e(c,{children:"UPC/EAN"}),e("h5",{children:(S=r==null?void 0:r.upc)!=null?S:"N/A"})]}),n(l,{md:"4",children:[e(c,{children:"ISRC"}),e("h5",{children:(Y=r==null?void 0:r.isrc)!=null?Y:"N/A"})]}),n(l,{md:"4",children:[e(c,{children:"Parental Advisory"}),e("h5",{children:(R=(k=r==null?void 0:r.parental_advisory)==null?void 0:k.name)!=null?R:"N/A"})]}),n(l,{md:"4",children:[e(c,{children:"\u2117 line"}),e("h5",{children:(M=r==null?void 0:r.p_line)!=null?M:"N/A"})]}),n(l,{md:"4",children:[e(c,{children:"\xA9 line"}),e("h5",{children:(F=r==null?void 0:r.c_line)!=null?F:"N/A"})]}),n(l,{md:"4",children:[e(c,{children:"Producer Catalogue Number"}),e("h5",{children:(E=r==null?void 0:r.producer_catalogue_number)!=null?E:"N/A"})]})]})]}),(r==null?void 0:r.writter)&&n("div",{children:[e("h3",{className:"mx-1 mt-2",children:"Song Writer"}),e(i,{className:"border rounded p-1",children:n(l,{md:"4",children:[e(c,{children:"Song Writers"}),e("h5",{children:r==null?void 0:r.writter})]})})]}),((L=r==null?void 0:r.artists)==null?void 0:L.length)>0&&n("div",{children:[e("h3",{className:"mx-1 mt-2",children:"Artists"}),e(i,{className:"border rounded p-1",children:(j=r==null?void 0:r.artists)==null?void 0:j.map(d=>{var s;return n(l,{md:"4",children:[e(c,{children:d!=null&&d.isPrimary?"Primary Artist":"Secondary Artist"}),e("h5",{children:(s=d==null?void 0:d.artist)==null?void 0:s.title})]})})})]}),((B=r==null?void 0:r.composers)==null?void 0:B.length)>0&&n("div",{children:[e("h3",{className:"mx-1 mt-2",children:"Composers"}),e(i,{className:"border rounded p-1",children:(G=r==null?void 0:r.composers)==null?void 0:G.map(d=>n(l,{md:"4",children:[e(c,{children:d!=null&&d.isPrimary?"Primary Composer":"Secondary Composer"}),e("h5",{children:d==null?void 0:d.composer})]}))})]}),((I=r==null?void 0:r.producers)==null?void 0:I.length)>0&&n("div",{children:[e("h3",{className:"mx-1 mt-2",children:"Producers"}),e(i,{className:"border rounded p-1",children:(T=r==null?void 0:r.producers)==null?void 0:T.map(d=>n(l,{md:"4",children:[e(c,{children:d!=null&&d.isPrimary?"Primary Producer":"Secondary Producer"}),e("h5",{children:d==null?void 0:d.producer})]}))})]}),((W=r==null?void 0:r.arrangers)==null?void 0:W.length)>0&&n("div",{children:[e("h3",{className:"mx-1 mt-2",children:"Arrangers"}),e(i,{className:"border rounded p-1",children:(H=r==null?void 0:r.arrangers)==null?void 0:H.map(d=>n(l,{md:"4",children:[e(c,{children:d!=null&&d.isPrimary?"Primary Arranger":"Secondary Arranger"}),e("h5",{children:d==null?void 0:d.arranger})]}))})]}),((O=r==null?void 0:r.remixers)==null?void 0:O.length)>0&&n("div",{children:[e("h3",{className:"mx-1 mt-2",children:"Remixers"}),e(i,{className:"border rounded p-1",children:(Q=r==null?void 0:r.remixers)==null?void 0:Q.map(d=>n(l,{md:"4",children:[e(c,{children:d!=null&&d.isPrimary?"Primary Remixer":"Secondary Remixer"}),e("h5",{children:d==null?void 0:d.remixer})]}))})]}),((U=r==null?void 0:r.featurings)==null?void 0:U.length)>0&&n("div",{children:[e("h3",{className:"mx-1 mt-2",children:"Featurings"}),e(i,{className:"border rounded p-1",children:(V=r==null?void 0:r.featurings)==null?void 0:V.map(d=>n(l,{md:"4",children:[e(c,{children:d!=null&&d.isPrimary?"Primary Featuring":"Secondary Featuring"}),e("h5",{children:d==null?void 0:d.featuring})]}))})]})]}),e(l,{md:"3",children:n("div",{children:[e("h3",{className:"mx-1",children:"Player"}),n("div",{className:"border rounded p-1",children:[(r==null?void 0:r.images)&&((X=r==null?void 0:r.images)==null?void 0:X.image_download_url)&&n("sapn",{children:[e("img",{src:(r==null?void 0:r.images)&&(($=r==null?void 0:r.images)==null?void 0:$.image_download_url),width:"100%"}),e(m,{color:"primary",className:"mt-2",onClick:()=>{var d;return w((d=r==null?void 0:r.images)==null?void 0:d.image_download_url)},children:"Download Image"})]}),(r==null?void 0:r.files)&&((q=r==null?void 0:r.files)==null?void 0:q.file_download_url)&&e("video",{controls:!0,name:"media",width:"100%",height:60,children:e("source",{src:(z=r==null?void 0:r.files)==null?void 0:z.file_download_url,type:"audio/mpeg"})})]})]})})]})})]})})};export{ar as default};