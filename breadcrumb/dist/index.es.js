import e,{useMemo as a}from"react";import{connect as m}from"react-redux";import{Link as r}from"react-router-dom";import{BreadCrumb as l}from"primereact/breadcrumb";import{HFNContext as t,store as s,breadcrumb as o}from"sami-redux";const{BREADCRUMB:u}=o,c=(e,a)=>{let m={menu:e};!0===a&&(m.showHome=!0),s.dispatch({type:u,payload:m})};var n=m((e=>({menu:e.breadcrumb.menu,hasHome:e.breadcrumb.hasHome})),null,null,{context:t,pure:!0})((({menu:m,hasHome:t,id:s,style:o,className:u})=>{const[c,n]=a((()=>{const a=t&&l[0]?l[0]:null;let l=m.map(((a,l)=>({...a,template:(a,t)=>e.createElement(r,{to:`/${a.url}`,className:`${m.length-1===l?"disabled":""} ${t.className}`,key:l},e.createElement("span",{className:t.labelClassName},a.label))})));return t&&l.shift(),[l,a]}),[m,t]);return e.createElement(l,{id:s||null,style:o||null,className:u||null,model:c,home:n})}));export{c as breadcrumb,n as default};