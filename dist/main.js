!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(window,function(){return function(e){function t(t){for(var i,s,c=t[0],l=t[1],a=t[2],f=0,p=[];f<c.length;f++)s=c[f],o[s]&&p.push(o[s][0]),o[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(u&&u(t);p.length;)p.shift()();return r.push.apply(r,a||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},o={0:0},r=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var u=l;return r.push([14,1]),n()}([,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1);t.MiniButton=e=>i.createElement("div",{ref:e.btnRef,style:e.btnStyle,className:`minitoolbox-minibutton ${e.className}`,onMouseEnter:e.onMouseEnter,onMouseOut:e.onMouseOut,onClick:e.onClick},i.createElement("div",{className:"minitoolbox-minibutton-display"},i.createElement("img",{src:e.iconSrc}),e.children))},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(6);t.Watch=e=>i.createElement("div",{className:`minitoolbox-watchmenu ${e.watchClass?e.watchClass:""}`,style:e.watchStyle},e.btnProps.map((e,t)=>i.createElement(o.MiniButton,Object.assign({className:`minitoolbox-watchmenu-btn-${t}`,key:`minibtn-${t}`},e))),i.createElement("div",{className:"minitoolbox-watchmenu-preview"},e.children))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(6);t.Phone=e=>i.createElement("div",{className:`minitoolbox-phonemenu ${e.phoneClass?e.phoneClass:""}`,style:e.phoneStyle,ref:e.phoneRef},e.btnProps.map((e,t)=>i.createElement(o.MiniButton,Object.assign({className:`minitoolbox-phonemenu-btn-${t}`,key:`minibtn-${t}`},e))),i.createElement("div",{className:"minitoolbox-phonemenu-preview"},e.children))},,,,function(e,t,n){"use strict";function i(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),i(n(15)),i(n(16)),i(n(17)),i(n(18)),i(n(19)),i(n(29)),i(n(31))},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";function i(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),i(n(20)),i(n(23)),i(n(24)),i(n(6)),i(n(10)),i(n(9))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(9),r=n(10);t.CSS_CLASSNAME="minitoolbox",t.MiniToolBox=e=>{const[n,s]=i.useState(!1),[c,l]=i.useState(!1),[a,u]=i.useState("phoneEd"),f=[{iconSrc:"/static/minimize.svg",onClick:()=>{console.log(n),p()}},{iconSrc:"/static/maximize.svg",onClick:()=>{}},{iconSrc:"/static/up.svg",onClick:()=>{}}],p=()=>{s(!n),n||l(!1)},d=[{iconSrc:"/static/minimize.svg",onClick:()=>{p(),console.log(n)}},{iconSrc:"/static/maximize.svg",onClick:()=>{}},{iconSrc:"/static/up.svg",onClick:()=>{}}],{className:m}=e;return i.createElement("div",{className:`${t.CSS_CLASSNAME}-root`},(()=>i.createElement("div",{onMouseOver:n?e=>l(!0):e=>{},onMouseOut:n?e=>{l(!1)}:e=>{},className:`${t.CSS_CLASSNAME}-enclosing ${m||""}`},i.createElement("div",{onClick:n?e=>{u("watchEd"),p()}:e=>{},className:`\n\t\t\t${t.CSS_CLASSNAME}-watchcontainer\n\t\t\t${t.CSS_CLASSNAME}-watchcontainer-${n?"mini":"max"}\n\t\t\t${t.CSS_CLASSNAME}-watchcontainer-${"watchEd"===a?"active":"inactive"}\n\t\t\t${n?c&&"watchEd"!==a?"mini-open":"mini-closed":""}\n\t\t\t`},i.createElement(o.Watch,{btnProps:d,watchClass:`${t.CSS_CLASSNAME}-${n?"mini":"max"}`},n||"watchEd"!==a?null:e.children)),i.createElement("div",{onClick:n?e=>{u("phoneEd"),p()}:e=>{},className:`\n\t\t\t${t.CSS_CLASSNAME}-phonecontainer\n\t\t\t${t.CSS_CLASSNAME}-phonecontainer-${n?"mini":"max"} \n\t\t\t${t.CSS_CLASSNAME}-phonecontainer-${"phoneEd"===a?"active":"inactive"}\n\t\t\t${n?c&&"phoneEd"!==a?"mini-open":"mini-closed":""}\n\t\t\t`},i.createElement(r.Phone,{btnProps:f,phoneClass:`${t.CSS_CLASSNAME}-${n?"mini":"max"} `},n||"phoneEd"!==a?null:e.children))))())}},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ItemTypes={MiniToolBox:"minitoolbox",Block:"block"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(4),r={position:"absolute",pointerEvents:"none",zIndex:100,left:0,top:0,width:"100%",height:"100%"};function s(e,t,n){if(!e||!t)return{display:"none"};const i=`translate(${t.x-e.x}px, ${t.y-e.y}px)`;return{transform:i,WebkitTransform:i}}t.DragLayerWChildren=e=>{const{itemType:t,isDragging:n,item:c,initialOffset:l,initialClientOffset:a,currentOffset:u}=o.useDragLayer(e=>({item:e.getItem(),itemType:e.getItemType(),initialClientOffset:e.getInitialClientOffset(),initialOffset:e.getInitialSourceClientOffset(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()}));return n?i.createElement("div",{style:r},i.createElement("div",{style:s(l,u)},"asdf",function(){if(e.includedItemId&&c)return e.includedItemId===c.id&&e.children?i.createElement(i.Fragment,null,e.children):null;for(let n=0;n<e.acceptedItemTypes.length;n++)if(e.acceptedItemTypes[n]===t&&e.children)return i.createElement(i.Fragment,null,e.children);return null}())):null},t.default=t.DragLayerWChildren},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(30))},function(e,t,n){},function(e,t,n){"use strict";function i(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),i(n(32)),i(n(33)),i(n(34)),i(n(37))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(4),r={width:"100%",height:"100%",opacity:0,left:0,top:0,position:"absolute",pointerEvents:"all",zIndex:99,backgroundColor:"blue"};t.DragContainer=function(e){const[{isDragging:t},n]=o.useDrag({item:{id:e.id,type:e.type,sourceBhv:e.sourceBhv,targetBhv:e.targetBhv,data:e.data},collect:e=>({isDragging:e.isDragging()}),end(e,t){console.log(e),t.didDrop(),console.log(t.didDrop())}}),s=()=>e.children,c=()=>{if(t)switch(e.sourceBhv){case"sGone":return console.log("gone"),i.createElement("div",{ref:null,style:{height:0,width:0}})}return s()},l={pointerEvents:t?"none":"all"};return e.isWithDragHandle?i.createElement("div",{ref:null,style:l,className:`${e.className} ${t?e.className+"-drag":""}`},i.createElement("div",{className:`${e.className+"-handle"}`},i.createElement("div",{ref:n,style:r})),s()):i.createElement("div",{style:l,className:`${e.className} ${t?e.className+"-drag":""}`},i.createElement("div",{style:{position:"relative"}},c(),i.createElement("div",{ref:n,style:r},c())))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(4),r={pointerEvents:"none",opacity:0,visibility:"hidden"};t.DropContainer=function(e){const[{isActive:t,isDragging:n},s]=o.useDrop({hover:e=>{console.log(e)},accept:e.acceptedItemTypes,collect:e=>({isActive:e.canDrop()&&e.isOver(),isDragging:e.getItem()}),drop(t,n){const i=n.getInitialSourceClientOffset(),o=n.getDifferenceFromInitialOffset(),r=Math.round(o.x+i.x),s=Math.round(o.y+i.y);return e.onItemDropped&&e.onItemDropped(Object.assign({},t),{top:s,left:r}),Object.assign({},t)}});return i.createElement("div",{ref:s,style:e.onlyAppearOnDrag&&!n?Object.assign({},e.style,r):Object.assign({},e.style),className:`${e.className} ${t?e.className+"-active":""}`},e.children)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=(n(35),n(36)),r=n(4);t.MoveContainer=function(e){const{itemType:t,isDragging:n,item:s,initialOffset:c,initialClientOffset:l,currentOffset:a}=r.useDragLayer(e=>({item:e.getItem(),itemType:e.getItemType(),initialClientOffset:e.getInitialClientOffset(),initialOffset:e.getInitialSourceClientOffset(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()}));i.useEffect(()=>{const t=e.positionMap,n={};for(const e in t)if(t.hasOwnProperty(e)){const i=t[e];n[e]={top:i.pos.top,left:i.pos.left}}f(n)},[e]);const[u,f]=i.useState({});return i.createElement("div",{className:`${e.className}`,style:{pointerEvents:"none"}},i.createElement("div",{style:{position:"relative",height:"100%",width:"100%"}},Object.keys(u).map((t,n)=>{const{left:r,top:s}=u[t],c={left:r,top:s},l=e.positionMap[t].child;return l?i.createElement(o.MoveWrapper,Object.assign({},c),l):null})))}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1);t.MoveWrapper=e=>i.createElement("div",{style:{position:"absolute",left:e.left,top:e.top}},e.children)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(4),r={position:"absolute",pointerEvents:"none",zIndex:100,left:0,top:0,width:"100%",height:"100%"};function s(e,t,n){if(!e||!t)return{display:"none"};console.dir({os:e,curos:t,ico:n});const i=`translate(${t.x}px, ${t.y}px)`;return{width:"fit-content",transform:i,WebkitTransform:i}}t.TransitComponent=function(e){const{itemType:t,isDragging:n,item:c,initialOffset:l,initialClientOffset:a,currentOffset:u}=o.useDragLayer(e=>({item:e.getItem(),itemType:e.getItemType(),initialClientOffset:e.getInitialClientOffset(),initialOffset:e.getInitialSourceClientOffset(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()}));return n?i.createElement("div",{style:r,className:e.className},i.createElement("div",{style:s(l,u,a)},function(){const n=e.transitComponents.find(e=>e.forType===t);return n?n.componentFactory(c)(c):null}())):null}}])});