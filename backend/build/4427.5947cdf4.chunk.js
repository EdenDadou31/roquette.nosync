(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[4427],{86961:(I,p,e)=>{var n=e(13578),m=e(27138),l="[object Boolean]";function x(i){return i===!0||i===!1||m(i)&&n(i)==l}I.exports=x},92249:(I,p,e)=>{var n=e(37997);function m(l){return n(l)&&l!=+l}I.exports=m},37997:(I,p,e)=>{var n=e(13578),m=e(27138),l="[object Number]";function x(i){return typeof i=="number"||m(i)&&n(i)==l}I.exports=x},76368:(I,p,e)=>{"use strict";e.d(p,{D:()=>i});var n=e(74081),m=e(93415),l=e(67621);function x(A,L,E){if(!A||!L||!E)return{display:"none"};const{x:C,y:O}=E;return{transform:`translate(${C}px, ${O}px)`}}const i=({renderItem:A})=>{const{itemType:L,isDragging:E,item:C,initialOffset:O,currentOffset:d,mouseOffset:$}=(0,l.useDragLayer)(u=>({item:u.getItem(),itemType:u.getItemType(),initialOffset:u.getInitialSourceClientOffset(),currentOffset:u.getSourceClientOffset(),isDragging:u.isDragging(),mouseOffset:u.getClientOffset()}));return E?(0,n.jsx)(m.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%",children:(0,n.jsx)(m.x,{style:x(O,d,$),children:A({type:L,item:C})})}):null}},24414:(I,p,e)=>{"use strict";e.d(p,{a:()=>T,b:()=>P,c:()=>K,d:()=>y,g:()=>u,i:()=>M,m:()=>S,s:()=>U,u:()=>D});var n=e(27279),m=e(67621),l=e(45648),x=e(66333),i=e(15530),A=e(98934),L=e(86961),E=e(10124),C=e(92249),O=e(51527),d=e(47853);const u=r=>`content-manager.${r}`;(0,n.createContext)();const g=(r,o,{onCancel:s,onDropItem:t,onGrabItem:c,onMoveItem:f})=>{const[a,h]=(0,n.useState)(!1),B=j=>{a&&(j==="UP"?f(o-1,o):j==="DOWN"&&f(o+1,o))},b=()=>{a?(t&&t(o),h(!1)):(c&&c(o),h(!0))},_=()=>{a&&(h(!1),s&&s(o))};return j=>{if(r&&!(j.key==="Tab"&&!a))switch(j.preventDefault(),j.key){case" ":case"Enter":b();break;case"Escape":_();break;case"ArrowDown":case"ArrowRight":B("DOWN");break;case"ArrowUp":case"ArrowLeft":B("UP");break}}},D=(r,{type:o="STRAPI_DND",index:s,item:t={},onStart:c,onEnd:f,onGrabItem:a,onDropItem:h,onCancel:B,onMoveItem:b,dropSensitivity:_="regular"})=>{const R=(0,n.useRef)(null),[{handlerId:j},Z]=(0,m.useDrop)({accept:o,collect(k){return{handlerId:k.getHandlerId()}},hover(k,Q){if(!R.current)return;const z=k.index,F=s;if(z!==F){if(_==="regular"){const J=R.current.getBoundingClientRect(),V=(J.bottom-J.top)/2,X=Q.getClientOffset().y-J.top;if(z<F&&X<V||z>F&&X>V)return}b(F,z),k.index=F}}}),[{isDragging:v},Y,H]=(0,m.useDrag)({type:o,item(){c&&c();const{width:k}=R.current?.getBoundingClientRect()??{};return{index:s,width:k,...t}},end(){f&&f()},canDrag:r,isDragging:t.id?k=>t.id===k.getItem().id:void 0,collect:k=>({isDragging:k.isDragging()})}),G=g(r,s,{onGrabItem:a,onDropItem:h,onCancel:B,onMoveItem:b});return[{handlerId:j,isDragging:v,handleKeyDown:G},R,Z,Y,H]},y=()=>r=>r["content-manager_app"]||x.J,P=()=>(0,l.P1)(y(),r=>({collectionTypeLinks:r.collectionTypeLinks,singleTypeLinks:r.singleTypeLinks})),S=()=>(0,l.P1)(y(),({components:r,models:o})=>({schemas:[...r,...o]})),U=(0,l.P1)(y(),r=>r.fieldSizes),w=(r,o)=>{typeof r=="function"?r(o):r!=null&&(r.current=o)},K=(...r)=>o=>r.forEach(s=>w(s,o));function M(r){return["integer","biginteger","decimal","float","number"].includes(r)}d.kM(d.nK,"defined",function(){return this.test("defined",i.I0.required,r=>r!==void 0)}),d.kM(d.IX,"notEmptyMin",function(r){return this.test("notEmptyMin",i.I0.min,o=>E(o)?!0:o.length>=r)}),d.kM(d.Z_,"isInferior",function(r,o){return this.test("isInferior",r,function(s){return!s||Number.isNaN(O(s))?!0:O(o)>=O(s)})}),d.kM(d.Z_,"isSuperior",function(r,o){return this.test("isSuperior",r,function(s){return!s||Number.isNaN(O(s))?!0:O(s)>=O(o)})});const W=r=>A(r,["attributes"],{}),T=(r,{components:o},s={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1,isJSONTestDisabled:!1})=>{const t=W(r);return d.Ry().shape(Object.keys(t).reduce((c,f)=>{const a=t[f];if(a.type!=="relation"&&a.type!=="component"&&a.type!=="dynamiczone"){const h=N(a.type,a,s);c[f]=h}if(a.type==="relation"&&(c[f]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(a.relationType)?d.Ry().nullable():d.IX().nullable()),a.type==="component"){const h=T(o[a.component],{components:o},{...s,isFromComponent:!0});if(a.repeatable===!0){const{min:b,max:_,required:R}=a;let j=d.Vo(Z=>{let v=d.IX().of(h);return b?R?v=v.min(b,i.I0.min):R!==!0&&E(Z)?v=v.nullable():v=v.min(b,i.I0.min):R&&!s.isDraft&&(v=v.min(1,i.I0.required)),_&&(v=v.max(_,i.I0.max)),v});return c[f]=j,c}const B=d.Vo(b=>b!==void 0?a.required===!0&&!s.isDraft?h.defined():h.nullable():a.required===!0?d.Ry().defined():d.Ry().nullable());return c[f]=B,c}if(a.type==="dynamiczone"){let h=d.IX().of(d.Vo(({__component:_})=>T(o[_],{components:o},{...s,isFromComponent:!0})));const{max:B,min:b}=a;b?a.required?h=h.test("min",i.I0.min,_=>s.isCreatingEntry?_&&_.length>=b:_===void 0?!0:_!==null&&_.length>=b).test("required",i.I0.required,_=>s.isCreatingEntry?_!==null||_!==void 0:_===void 0?!0:_!==null):h=h.notEmptyMin(b):a.required&&!s.isDraft&&(h=h.test("required",i.I0.required,_=>s.isCreatingEntry?_!==null||_!==void 0:_===void 0?!0:_!==null)),B&&(h=h.max(B,i.I0.max)),c[f]=h}return c},{}))},N=(r,o,s)=>{let t=d.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(r)&&(t=d.Z_()),r==="blocks"&&(t=d.nK().test("isJSON",i.I0.json,c=>s.isJSONTestDisabled||s.isDraft?!0:!(c&&!Array.isArray(c)))),r==="json"&&(t=d.nK(i.I0.json).test("isJSON",i.I0.json,c=>{if(s.isJSONTestDisabled||!c||!c.length)return!0;try{return JSON.parse(c),!0}catch{return!1}}).nullable().test("required",i.I0.required,c=>!(o.required&&(!c||!c.length)))),r==="email"&&(t=t.email(i.I0.email)),["number","integer","float","decimal"].includes(r)&&(t=d.Rx().transform(c=>C(c)?void 0:c).typeError()),r==="biginteger"&&(t=d.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(r)&&(t=d.hT()),Object.keys(o).forEach(c=>{const f=o[c];if(f||!L(f)&&Number.isInteger(Math.floor(f))||f===0)switch(c){case"required":{s.isDraft||(r==="password"&&s.isCreatingEntry&&(t=t.required(i.I0.required)),r!=="password"&&(s.isCreatingEntry?t=t.required(i.I0.required):t=t.test("required",i.I0.required,a=>a===void 0&&!s.isFromComponent?!0:M(r)?a===0?!0:!!a:r==="boolean"?a!=null:r==="date"||r==="datetime"?typeof a=="string"?!E(a):!E(a?.toString()):!E(a))));break}case"max":{r==="biginteger"?t=t.isInferior(i.I0.max,f):t=t.max(f,i.I0.max);break}case"maxLength":t=t.max(f,i.I0.maxLength);break;case"min":{r==="biginteger"?t=t.isSuperior(i.I0.min,f):t=t.min(f,i.I0.min);break}case"minLength":{s.isDraft||(t=t.min(f,i.I0.minLength));break}case"regex":t=t.matches(new RegExp(f),{message:i.I0.regex,excludeEmptyString:!o.required});break;case"lowercase":["text","textarea","email","string"].includes(r)&&(t=t.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(r)&&(t=t.strict().uppercase());break;case"positive":M(r)&&(t=t.positive());break;case"negative":M(r)&&(t=t.negative());break;default:t=t.nullable()}}),t}},45322:(I,p,e)=>{"use strict";e.d(p,{U:()=>$,y:()=>O});var n=e(74081),m=e(27279),l=e(19003),x=e(39267),i=e(74513),A=e(32370),L=e(10701),E=e(93415);const C=({theme:u,expanded:g,variant:D,disabled:y,error:P})=>P?`1px solid ${u.colors.danger600} !important`:y?`1px solid ${u.colors.neutral150}`:g?`1px solid ${u.colors.primary600}`:D==="primary"?`1px solid ${u.colors.neutral0}`:`1px solid ${u.colors.neutral100}`,O=(0,l.ZP)(A.Z)``,d=(0,l.ZP)(E.x)`
  border: ${C};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:u})=>u.colors.primary600};

    ${O} {
      color: ${({theme:u,expanded:g})=>g?void 0:u.colors.primary700};
    }

    ${A.Z} {
      color: ${({theme:u,expanded:g})=>g?void 0:u.colors.primary600};
    }

    & > ${L.k} {
      background: ${({theme:u})=>u.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:u})=>u.colors.primary200};
    }
  }
`,$=({children:u,disabled:g=!1,error:D,expanded:y=!1,hasErrorMessage:P=!0,id:S,onToggle:U,toggle:w,size:K="M",variant:M="primary",shadow:W})=>{const T=(0,i.M)(S),N=m.useMemo(()=>({expanded:y,onToggle:U,toggle:w,id:T,size:K,variant:M,disabled:g}),[g,y,T,U,K,w,M]);return(0,n.jsxs)(x.S.Provider,{value:N,children:[(0,n.jsx)(d,{"data-strapi-expanded":y,disabled:g,"aria-disabled":g,expanded:y,hasRadius:!0,variant:M,error:D,shadow:W,children:u}),D&&P&&(0,n.jsx)(E.x,{paddingTop:1,children:(0,n.jsx)(A.Z,{variant:"pi",textColor:"danger600",children:D})})]})}},34642:(I,p,e)=>{"use strict";e.d(p,{v:()=>x});var n=e(74081),m=e(39267),l=e(93415);const x=({children:i,...A})=>{const{expanded:L,id:E}=(0,m.A)();if(!L)return null;const C=`accordion-content-${E}`,O=`accordion-label-${E}`,d=`accordion-desc-${E}`;return(0,n.jsx)(l.x,{role:"region",id:C,"aria-labelledby":O,"aria-describedby":d,...A,children:i})}},39267:(I,p,e)=>{"use strict";e.d(p,{A:()=>l,S:()=>m});var n=e(27279);const m=(0,n.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),l=()=>(0,n.useContext)(m)},24920:(I,p,e)=>{"use strict";e.d(p,{B:()=>u});var n=e(74081),m=e(10411),l=e(19003),x=e(45322),i=e(39267);const A=({expanded:g,disabled:D,variant:y})=>{let P="neutral100";return g?P="primary100":D?P="neutral150":y==="primary"&&(P="neutral0"),P};var L=e(1782),E=e(50703),C=e(10701),O=e(32370);const d=(0,l.ZP)(L.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:g,expanded:D})=>D?g.colors.primary600:g.colors.neutral500};
    }
  }
`,$=(0,l.ZP)(C.k)`
  min-height: ${({theme:g,size:D})=>g.sizes.accordions[D]};
  border-radius: ${({theme:g,expanded:D})=>D?`${g.borderRadius} ${g.borderRadius} 0 0`:g.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:g})=>g.colors.primary600};
      }
    }
  }
`,u=({title:g,description:D,as:y="span",togglePosition:P="right",action:S,...U})=>{const{onToggle:w,toggle:K,expanded:M,id:W,size:T,variant:N,disabled:r}=(0,i.A)(),o=`accordion-content-${W}`,s=`accordion-label-${W}`,t=`accordion-desc-${W}`,c=T==="M"?6:4,f=T==="M"?c:c-2,a=A({expanded:M,disabled:r,variant:N}),B={as:y,fontWeight:T==="S"?"bold":void 0,id:s,textColor:M?"primary600":"neutral700",ellipsis:!0,variant:T==="M"?"delta":void 0},b=M?"primary600":"neutral600",_=M?"primary200":"neutral200",R=T==="M"?`${32/16}rem`:`${24/16}rem`,j=()=>{r||(K&&!w?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),K()):w&&w())},Z=(0,n.jsx)(C.k,{justifyContent:"center",borderRadius:"50%",height:R,width:R,transform:M?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:_,cursor:r?"not-allowed":"pointer",onClick:j,shrink:0,children:(0,n.jsx)(E.J,{as:m.Z,width:T==="M"?`${11/16}rem`:`${8/16}rem`,color:M?"primary600":"neutral600"})});return(0,n.jsx)($,{paddingBottom:f,paddingLeft:c,paddingRight:c,paddingTop:f,background:a,expanded:M,size:T,justifyContent:"space-between",cursor:r?"not-allowed":"",children:(0,n.jsxs)(C.k,{gap:3,flex:1,maxWidth:"100%",children:[P==="left"&&Z,(0,n.jsx)(d,{onClick:j,"aria-disabled":r,"aria-expanded":M,"aria-controls":o,"aria-labelledby":s,"data-strapi-accordion-toggle":!0,expanded:M,type:"button",flex:1,minWidth:0,...U,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x.y,{...B,children:g}),D&&(0,n.jsx)(O.Z,{as:"p",id:t,textColor:b,children:D})]})}),P==="right"&&(0,n.jsxs)(C.k,{gap:3,children:[Z,S]}),P==="left"&&S]})})}},76827:(I,p,e)=>{"use strict";e.d(p,{Z:()=>l});var n=e(74081);const m=x=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...x,children:(0,n.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),l=m},33039:(I,p,e)=>{"use strict";e.d(p,{Z:()=>l});var n=e(74081);const m=x=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...x,children:[(0,n.jsx)("path",{fill:"#212134",d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,n.jsx)("path",{fill:"#212134",d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,n.jsx)("path",{fill:"#212134",d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,n.jsx)("path",{fill:"#212134",d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,n.jsx)("path",{fill:"#212134",d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,n.jsx)("path",{fill:"#212134",d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,n.jsx)("path",{fill:"#212134",d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"})]}),l=m},77225:(I,p,e)=>{"use strict";e.d(p,{Z:()=>l});var n=e(74081);const m=x=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...x,children:[(0,n.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,n.jsx)("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),l=m}}]);
