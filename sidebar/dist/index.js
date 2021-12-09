"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-redux"),l=require("react-router-dom"),a=require("sami-redux"),n=require("primereact/panelmenu");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=r(e);const{SIDEBAR:i}=a.sidebar,u={context:a.HFNContext},m={toggle:e=>{a.store.dispatch({type:i,payload:e})}};var c=t.connect((e=>({visible:e.sidebar.visible})),null,null,u)((({id:t,style:a,className:r,position:i,visible:u,logo:c,text:d,menu:o,multiple:f,closeOnSelect:p=!0})=>{const E=e.useMemo((()=>{let e={};return"right"===i?e={left:"auto",right:"0"}:e.left="0",e}),[i]),N=e.useMemo((()=>{const e=t=>Array.isArray(t)&&t.length>0?t.map((t=>(Array.isArray(t.items)&&t.items.length>0?t.hasChild=!0:t.hasChild=!1,t.template=({label:e,url:t,icon:a,expanded:n,hasChild:r},i)=>s.default.createElement("div",{className:"menu"},t&&"string"==typeof t?s.default.createElement(l.Link,{to:t,className:`${i.className} menu-item`,onClick:()=>{r&&i.onClick(),p&&m.toggle()}},s.default.createElement("div",{className:"menu-title-wrapper"},a?s.default.createElement("i",{className:`menu-icon ${a}`}):null,s.default.createElement("span",{className:"menu-title"},e))):s.default.createElement("span",{className:"menu-item",onClick:r?i.onClick:null},s.default.createElement("div",{className:"menu-title-wrapper"},s.default.createElement("i",{className:`menu-icon ${a}`}),s.default.createElement("span",{className:"menu-title"},e)),r?s.default.createElement("div",null,n?s.default.createElement("i",{className:"menu-icon pi pi-angle-up"}):s.default.createElement("i",{className:"menu-icon pi pi-angle-false"})):null)),t.hasChild&&(t.items=e(t.items)),t))):[];return e(o)}),[o]);return u?s.default.createElement("div",{className:"hfn-sidebar-wrapper",style:E},s.default.createElement("div",{className:"sidebar"},s.default.createElement("div",{className:"sidebar-header-section"},c?s.default.createElement(l.Link,{to:"/"},s.default.createElement("img",{src:c,alt:"logo"})):d||null),s.default.createElement("div",{className:"hfn-sidebar-menu"},s.default.createElement("div",{className:"sidebar-menu"},s.default.createElement(n.PanelMenu,{id:t||null,style:a,className:r||null,model:N,multiple:f}))))):null}));exports.default=c,exports.sidebar=m;
