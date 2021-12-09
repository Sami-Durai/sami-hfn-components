import e,{useEffect as a}from"react";import{useSelector as t}from"react-redux";import{useForm as n,Controller as l}from"react-hook-form";import o from"react-select";import r from"react-select/async";import i from"react-phone-input-2";import{InputText as s}from"primereact/inputtext";import{Password as c}from"primereact/password";import{InputTextarea as m}from"primereact/inputtextarea";import{Checkbox as u}from"primereact/checkbox";import{InputSwitch as p}from"primereact/inputswitch";import{Slider as d}from"primereact/slider";import{Calendar as f}from"primereact/calendar";import{Chips as g}from"primereact/chips";import{Button as h}from"primereact/button";import{Editor as C}from"primereact/editor";import{classNames as v}from"primereact/utils";import{modal as E}from"sami-modal";import y from"axios";function b(){return b=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},b.apply(this,arguments)}const N=process.env;let S={};try{S.placesAutoCompleteURI=N.REACT_APP_PLACES_AUTOCOMPLETE_URI||"https://us-central1-hfn-registration-qa.cloudfunctions.net/",S.srcmStaticDataURI=N.REACT_APP_STATIC_DATA_SRCM_URI||"https://static-gatsby-qa.web.app/srcmapi/",S.gPlacesSession=N.REACT_APP_GPLACES_SESSION_KEY||"74c576ef-7234-4f47-8b11-f8e41d247f3b"}catch{S.placesAutoCompleteURI="https://us-central1-hfn-registration-qa.cloudfunctions.net/",S.srcmStaticDataURI="https://static-gatsby-qa.web.app/srcmapi/",S.gPlacesSessionKey="74c576ef-7234-4f47-8b11-f8e41d247f3b"}const w=y.create({baseURL:S.placesAutoCompleteURI}),A=y.create({baseURL:S.srcmStaticDataURI});class O{getCachedCitySuggestions(e){return A.get(`cities/${e}.json`)}getCachedStateSuggestions(e){return A.get(`states/${e}.json`)}getCachedCountrySuggestions(){return A.get("countries/all.json")}getGPlaceSuggestions(e){return w.get("gplaces",{params:{session:S.gPlacesSessionKey,input:e}})}}const k=({name:a,state:t,country:n},{context:l})=>"menu"===l?e.createElement("div",{className:"cac-wrapper"},e.createElement("div",{className:"cac-name"},a),e.createElement("div",{className:"cac-sc-wrapper"},e.createElement("span",{className:"cac-sc"},t,t?e.createElement("span",null," , "):e.createElement(e.Fragment,null),n))):a?a+(t?", "+t:"")+(n?", "+n:""):null,R=async(e,a)=>{const t=e?e.trim().toLowerCase():null;let n=[];if(t){const e=new O;let a;try{a=await e.getCachedCitySuggestions(t[0]);let l=a.data.results;for(const e of l)if(e.active&&e.name.toLowerCase().startsWith(t)&&(n.push({...e,value:e.id,label:e.name}),20===n.length))break;if(0===n.length)try{a=await e.getGPlaceSuggestions(t),n=a.data}catch{console.log("Something went wong.")}}catch{try{a=await e.getGPlaceSuggestions(t),n=a.data}catch{console.log("Something went wong.")}}}a(n||[])},P=async(e,a)=>{const t=e?e.trim().toLowerCase():null;let n=[];if(t){const e=new O;let a;try{a=await e.getCachedStateSuggestions(t[0]);let l=a.data.results;for(const e of l)if(e.active&&e.name.toLowerCase().startsWith(t)&&(n.push({...e,value:e.id,label:e.name}),20===n.length))break;if(0===n.length)try{a=await e.getGPlaceSuggestions(t),n=a.data.map((e=>({...e,value:e.state_id,label:e.state})))}catch{console.log("Something went wong.")}}catch{try{a=await e.getGPlaceSuggestions(t),n=a.data.map((e=>({...e,value:e.state_id,label:e.state})))}catch{console.log("Something went wong.")}}}a(n||[])},L=async(e,a)=>{const t=e?e.trim().toLowerCase():null;let n=[];if(t){const e=new O;let a;try{a=await e.getCachedCountrySuggestions(t[0]);let l=a.data.results;for(const e of l)if(e.active&&e.name.toLowerCase().startsWith(t)&&(n.push({...e,value:e.id,label:e.name}),20===n.length))break;if(0===n.length)try{a=await e.getGPlaceSuggestions(t),n=a.data.map((e=>({...e,value:e.country_id,label:e.country})))}catch{console.log("Something went wong.")}}catch{try{a=await e.getGPlaceSuggestions(t),n=a.data.map((e=>({...e,value:e.country_id,label:e.country})))}catch{console.log("Something went wong.")}}}a(n||[])},x=({initialValues:y,fields:N,onFormSubmit:S,submitButtonGroup:w,formConfig:A})=>{const O=e.createElement("div",{className:"form-button-group"},e.createElement(h,{type:"button",className:"p-button p-button-secondary p-mr-2",label:"Cancel",onClick:()=>{E.toggle(!1)}}," "),e.createElement(h,{type:"submit",label:"Submit",className:"p-button p-button-primary"})),{register:x,handleSubmit:V,formState:{errors:F,isSubmitted:_},control:I,setValue:T,getValues:U}=n();a((()=>{Object.keys(y).forEach((e=>{T(e,y[e],{shouldValidate:!0,shouldDirty:!0})}))}),[]);const M=t((e=>e.dropdown));return e.createElement("form",{onSubmit:V((e=>{S(e,F)})),className:`form-wrapper ${A?A.formClassName:""}`,autoComplete:`${A?A.autoComplete:"on"}`},e.createElement("div",{className:`p-fluid form-section p-d-flex p-flex-wrap ${A?A.formSectionClassName:""}`},Object.keys(N).map(((a,t)=>{const{properties:n}=N[a];let h,E;if(h=n.primeFieldProps?n.primeFieldProps:{},n.validations)if("function"==typeof n.validations.validate){const e=e=>n.validations.validate(e,U);E={...n.validations,validate:e}}else E=n.validations;else E={};return!1===n.visibility?e.createElement(e.Fragment,{key:a}):e.createElement(e.Fragment,{key:a},e.createElement("div",{className:`p-field-wrapper p-col-12 ${n.fieldWrapperClassNames?n.fieldWrapperClassNames:""}`,key:a+t},-1===["Checkbox"].indexOf(n.type)?e.createElement("label",{htmlFor:"lastname1",className:`p-field-label ${n.fieldLabelClassNames?n.fieldLabelClassNames:""}`},E&&E.required&&E.required.value?e.createElement("em",null,"* "):e.createElement(e.Fragment,null),n.label,n.tooltip?e.createElement("span",{className:"tooltip-icon",title:n.tooltip}," ",e.createElement("i",{className:"uil uil-info-circle"})," "):e.createElement(e.Fragment,null)):null,e.createElement("div",{className:`p-field-section ${n.fieldSectionClassNames?n.fieldSectionClassNames:""}`},(()=>{switch(n.type){case"InputText":return e.createElement(s,b({},h,{className:v({"p-invalid":F[a]}),name:a},x(a,E)));case"Password":return e.createElement(c,b({},h,{className:v({"p-invalid":F[a]}),name:a},x(a,E)));case"InputTextarea":return e.createElement(m,b({},h,{className:v({"p-invalid":F[a]}),name:a},x(a,E)));case"Select":return e.createElement(l,{control:I,rules:E,name:a,defaultValue:null,render:({field:{onChange:t,value:l,name:r,ref:i}})=>e.createElement(o,b({className:v({"p-invalid":F[a]}),noOptionsMessage:()=>"No data found"},h,{name:r,value:l,onChange:e=>{t(e),h&&h.onChange&&"function"==typeof h.onChange&&h.onChange(e,T,_)},options:n.dropdownOptions&&Array.isArray(M[n.dropdownOptions])?M[n.dropdownOptions]:h.options||[],inputRef:i}))});case"MultiSelect":return e.createElement(l,{control:I,rules:E,name:a,defaultValue:null,render:({field:{onChange:t,value:l,name:r,ref:i}})=>e.createElement(o,b({className:v({"p-invalid":F[a]}),closeMenuOnSelect:!1,noOptionsMessage:()=>"No data found"},h,{name:r,value:l,isMulti:!0,onChange:e=>{t(e),h&&h.onChange&&"function"==typeof h.onChange&&h.onChange(e,T,_)},options:n.dropdownOptions&&Array.isArray(M[n.dropdownOptions])?M[n.dropdownOptions]:h.options||[],inputRef:i}))});case"AutoComplete":return e.createElement(l,{control:I,rules:E,name:a,defaultValue:null,render:({field:{onChange:t,value:l,name:o,ref:i}})=>e.createElement(r,b({className:v({"p-invalid":F[a]}),noOptionsMessage:()=>"No data found"},h,{name:o,value:l,autoComplete:"off",loadOptions:(e,a)=>{((e,a,t,n,l,o)=>{try{e.length>2&&t[n](e).then((e=>{let t=[],n=[];e&&e.data&&(Array.isArray(e.data)?n=e.data:Array.isArray(e.data.data)&&(n=e.data.data),t=n.map((e=>({...e,label:e[l],value:e[o]})))),a(t)}))}catch{a([]),console.log("Something went wrong.")}})(e,a,n.service,n.method,h.optionLabel||"name",h.optionValue||"id")},onChange:e=>{t(e),h&&h.onChange&&"function"==typeof h.onChange&&h.onChange(e,T,_)},inputRef:i}))});case"CityAutoComplete":return e.createElement(l,{control:I,rules:E,name:a,defaultValue:null,render:({field:{onChange:t,value:n,name:l,ref:o}})=>e.createElement(r,b({className:v({"p-invalid":F[a]}),noOptionsMessage:()=>"No data found",optionLabel:"name",optionValue:"id",formatOptionLabel:k},h,{name:l,value:n,autoComplete:"off",loadOptions:R,onChange:e=>{t(e),h&&h.onChange&&"function"==typeof h.onChange&&h.onChange(e,T,_)},inputRef:o}))});case"StateAutoComplete":return e.createElement(l,{control:I,rules:E,name:a,defaultValue:null,render:({field:{onChange:t,value:n,name:l,ref:o}})=>e.createElement(r,b({className:v({"p-invalid":F[a]}),noOptionsMessage:()=>"No data found",optionLabel:"name",optionValue:"id"},h,{name:l,value:n,autoComplete:"off",loadOptions:P,onChange:e=>{t(e),h&&h.onChange&&"function"==typeof h.onChange&&h.onChange(e,T,_)},inputRef:o}))});case"CountryAutoComplete":return e.createElement(l,{control:I,rules:E,name:a,defaultValue:null,render:({field:{onChange:t,value:n,name:l,ref:o}})=>e.createElement(r,b({className:v({"p-invalid":F[a]}),noOptionsMessage:()=>"No data found",optionLabel:"name",optionValue:"id"},h,{name:l,value:n,autoComplete:"off",loadOptions:L,onChange:e=>{t(e),h&&h.onChange&&"function"==typeof h.onChange&&h.onChange(e,T,_)},inputRef:o}))});case"Checkbox":return e.createElement("div",null,e.createElement(l,{name:a,control:I,rules:E,render:t=>e.createElement(u,b({className:v({"p-invalid":F[a]})},h,{inputId:a,onChange:e=>{t.field.onChange(e.checked),h&&h.onChange&&"function"==typeof h.onChange&&h.onChange(e,T)},checked:t.field.value}))}),e.createElement("label",{htmlFor:a,className:`p-pl-2 p-checkbox-label ${n.fieldLabelClassNames?n.fieldLabelClassNames:""}`},E&&E.required&&E.required.value?e.createElement("em",null,"* "):e.createElement(e.Fragment,null),n.label,n.tooltip?e.createElement("span",{className:"tooltip-icon",title:n.tooltip}," ",e.createElement("i",{className:"uil uil-info-circle"})," "):e.createElement(e.Fragment,null)));case"RadioButton":if(n.items)return n.items.map((t=>e.createElement("div",{key:t.key,className:"p-field-radiobutton"},e.createElement(l,{className:v({"p-invalid":F[a]}),name:a,control:I,rules:E,render:n=>e.createElement("input",b({type:"radio",id:t.key,value:t.key,name:a},h,{onClick:e=>{n.field.onChange(e.target.value),h&&h.onChange&&"function"==typeof h.onChange&&h.onChange(e,T)}}))}),e.createElement("label",{htmlFor:t.key},t.name))));break;case"InputSwitch":return e.createElement("div",null,e.createElement(l,{name:a,control:I,rules:E,render:t=>e.createElement(p,b({},h,{inputId:a,onChange:e=>{t.field.onChange(e.value),h&&h.onChange&&"function"==typeof h.onChange&&h.onChange(e,T)},checked:t.field.value}))}));case"FileUpload":if(!E.validate){let e=n.maxFileSize;if(e){let a=n.fileSizeError||"Selected file size is greater than allowed file size";E.validate=t=>!(Array.isArray(t)&&t[0]&&t[0].size&&t[0].size>1024*e*1024)||a}}return e.createElement(s,b({className:v({"p-invalid":F[a]}),type:"file"},h,{name:a},x(a,E)));case"Slider":return e.createElement("div",null,e.createElement(d,b({},h,{onSlideEnd:e=>{T(a,e.value)}})),e.createElement(s,b({type:"hidden",name:a},x(a,E))));case"Calendar":return e.createElement(l,{control:I,rules:E,name:a,defaultValue:null,render:t=>e.createElement(f,b({className:v({"p-invalid":F[a]})},h,{name:t.field.name,value:t.field.value,onChange:e=>{t.field.onChange(e.value),h&&h.onChange&&"function"==typeof h.onChange&&h.onChange(e,T)},optionLabel:"label",optionValue:"value",inputRef:t.field.ref}))});case"Chips":return e.createElement("div",null,e.createElement(l,{name:a,control:I,rules:E,render:t=>e.createElement(g,{className:v({"p-invalid":F[a]}),onChange:e=>{t.field.onChange(e.value),h&&h.onChange&&"function"==typeof h.onChange&&h.onChange(e,T)}})}),e.createElement("label",{htmlFor:a,className:"p-checkbox-label"},n.label));case"PhoneInput":return e.createElement(l,{control:I,rules:E,name:a,defaultValue:null,render:t=>e.createElement(i,b({className:v({"p-invalid":F[a]}),country:"in",value:t.field.value,name:t.field.name},h,{onChange:(e,a,n,l)=>{t.field.onChange(l),h&&h.onChange&&"function"==typeof h.onChange&&h.onChange(e,a,n,l,T)},inputRef:t.field.ref}))});case"RichTextEditor":return e.createElement(l,{control:I,rules:E,name:a,defaultValue:null,render:({field:{onChange:t,value:n,name:l,ref:o}})=>e.createElement(C,b({className:v({"p-invalid":F[a]}),style:{height:"165px"},value:n,name:l},h,{onTextChange:e=>{console.log(e),t(e.htmlValue),h&&h.onChange&&"function"==typeof h.onChange&&h.onChange(e.htmlValue,e,T,_)},inputRef:o}))});default:return e.createElement(e.Fragment,null,"Form field not available")}})()),e.createElement("div",{className:`p-error-section ${n.fieldErrorClassNames?n.fieldErrorClassNames:""}`},F[a]&&e.createElement("span",{role:"alert",className:"error"}," ",F[a].message," ")),n.hint?e.createElement("div",{className:`p-hint-section ${n.fieldHintClassNames?n.fieldHintClassNames:""}`},n.hint):e.createElement(e.Fragment,null)))}))),w&&"function"==typeof w?w():O)};export{x as default};
