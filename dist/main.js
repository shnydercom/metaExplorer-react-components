!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,function(){return function(e){function t(t){for(var o,l,a=t[0],c=t[1],s=t[2],f=0,p=[];f<a.length;f++)l=a[f],i[l]&&p.push(i[l][0]),i[l]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(u&&u(t);p.length;)p.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},i={0:0},r=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=c;return r.push([16,1]),n()}([,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);t.MiniButton=e=>o.createElement("div",{ref:e.btnRef,style:e.btnStyle,className:`minitoolbox-minibutton ${e.className}`,onMouseEnter:e.onMouseEnter,onMouseOut:e.onMouseOut,onClick:e.onClick},o.createElement("div",{className:"minitoolbox-minibutton-display"},o.createElement("img",{src:e.iconSrc}),e.children))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ItemTypes={MiniToolBox:"minitoolbox",Block:"block"}},,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(4);t.Watch=e=>o.createElement("div",{className:`minitoolbox-watchmenu ${e.watchClass?e.watchClass:""}`,style:e.watchStyle},e.btnProps.map((e,t)=>o.createElement(i.MiniButton,Object.assign({className:`minitoolbox-watchmenu-btn-${t}`,key:`minibtn-${t}`},e))),o.createElement("div",{className:"minitoolbox-watchmenu-preview"},e.children))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(4);t.Phone=e=>o.createElement("div",{className:`minitoolbox-phonemenu ${e.phoneClass?e.phoneClass:""}`,style:e.phoneStyle,ref:e.phoneRef},e.btnProps.map((e,t)=>o.createElement(i.MiniButton,Object.assign({className:`minitoolbox-phonemenu-btn-${t}`,key:`minibtn-${t}`},e))),o.createElement("div",{className:"minitoolbox-phonemenu-preview"},e.children))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(8),r=n(5),l={position:"absolute",pointerEvents:"none",zIndex:100,left:0,top:0,width:"100%",height:"100%"};function a(e,t,n){if(!e||!t)return{display:"none"};const o=`translate(${t.x-e.x}px, ${t.y-e.y}px)`;return{transform:o,WebkitTransform:o}}t.MiniToolBoxDragLayer=e=>{const{itemType:t,isDragging:n,item:c,initialOffset:s,initialClientOffset:u,currentOffset:f}=i.useDragLayer(e=>({item:e.getItem(),itemType:e.getItemType(),initialClientOffset:e.getInitialClientOffset(),initialOffset:e.getInitialSourceClientOffset(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()}));return n?o.createElement("div",{style:l},o.createElement("div",{style:a(s,f)},function(){switch(t){case r.ItemTypes.MiniToolBox:if(e.children)return o.createElement(o.Fragment,null,e.children);default:return null}}())):null},t.default=t.MiniToolBoxDragLayer},,,function(e,t,n){"use strict";function o(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),o(n(17)),o(n(18)),o(n(19)),o(n(20)),o(n(21))},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";function o(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),o(n(22)),o(n(29)),o(n(5)),o(n(13)),o(n(4)),o(n(12)),o(n(11))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(8),r=n(4),l=n(5),a=n(11),c=n(12),s=n(13);t.CSS_CLASSNAME="minitoolbox",t.MiniToolBox=e=>{const[n,u]=o.useState(!1),[f,p]=o.useState(!1),[d,m]=o.useState("phoneEd"),[{isDragging:h},g,y]=i.useDrag({item:{id:e.id,left:e.left,top:e.top,type:l.ItemTypes.MiniToolBox},collect:e=>({isDragging:e.isDragging()})}),v=[{iconSrc:"/static/minimize.svg",onClick:()=>{console.log(n),S()}},{iconSrc:"/static/maximize.svg",onClick:()=>{}},{iconSrc:"/static/up.svg",onClick:()=>{}}],S=()=>{u(!n),n||p(!1)},b=[{iconSrc:"/static/minimize.svg",onClick:()=>{S(),console.log(n)}},{iconSrc:"/static/maximize.svg",onClick:()=>{}},{iconSrc:"/static/up.svg",onClick:()=>{}}],O=i=>o.createElement("div",{onMouseOver:n?e=>p(!0):e=>{},onMouseOut:n?t=>{p(!1),e.onOutDragHandle&&e.onOutDragHandle()}:e=>{},className:`${t.CSS_CLASSNAME}-enclosing ${E||""}`},o.createElement("div",{onClick:n?e=>{m("watchEd"),S()}:e=>{},className:`\n\t\t\t${t.CSS_CLASSNAME}-watchcontainer\n\t\t\t${t.CSS_CLASSNAME}-watchcontainer-${n?"mini":"max"}\n\t\t\t${t.CSS_CLASSNAME}-watchcontainer-${"watchEd"===d?"active":"inactive"}\n\t\t\t${n?f&&"watchEd"!==d?"mini-open":"mini-closed":""}\n\t\t\t`,style:{pointerEvents:"all"}},o.createElement(a.Watch,{btnProps:b,watchClass:`${t.CSS_CLASSNAME}-${n?"mini":"max"}`},n||"watchEd"!==d?null:e.children)),o.createElement("div",{onMouseOut:t=>{e.onOutDragHandle&&e.onOutDragHandle()},onClick:n?e=>{m("phoneEd"),S()}:e=>{},className:`\n\t\t\t${t.CSS_CLASSNAME}-phonecontainer\n\t\t\t${t.CSS_CLASSNAME}-phonecontainer-${n?"mini":"max"} \n\t\t\t${t.CSS_CLASSNAME}-phonecontainer-${"phoneEd"===d?"active":"inactive"}\n\t\t\t${n?f&&"phoneEd"!==d?"mini-open":"mini-closed":""}\n\t\t\t`,style:{pointerEvents:"all"}},o.createElement(c.Phone,{btnProps:v,phoneClass:`${t.CSS_CLASSNAME}-${n?"mini":"max"} `},n||"phoneEd"!==d?null:e.children)),i?o.createElement(r.MiniButton,{className:"minitoolbox-dndhandle",iconSrc:"/static/move.svg",onClick:()=>{},btnStyle:{pointerEvents:"all"},onMouseOut:t=>{e.onOutDragHandle&&e.onOutDragHandle()},onMouseEnter:t=>{e.onOverDragHandle&&e.onOverDragHandle()}}):o.createElement(r.MiniButton,{className:"minitoolbox-dndhandle",iconSrc:"/static/move.svg",btnRef:g,onClick:()=>{},btnStyle:{pointerEvents:"all"},onMouseOut:t=>{e.onOutDragHandle&&e.onOutDragHandle()},onMouseEnter:t=>{e.onOverDragHandle&&e.onOverDragHandle()}})),{className:E}=e;return o.createElement("div",{className:`${t.CSS_CLASSNAME}-root`,style:{left:e.left,top:e.top}},o.createElement(s.default,{style:{left:e.left,top:e.top}},O(!0)),o.createElement("div",{ref:y,style:{height:0,width:0}}),h?null:O(!1))}},,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(8),r=n(5),l=n(30),a={width:"100%",height:"100%",position:"absolute",top:0,left:0},c={top:20,left:80};t.DropContainer=e=>{let t=Object.assign({},a);const[n,s]=o.useState({a:Object.assign({},c)}),[,u]=i.useDrop({accept:[r.ItemTypes.MiniToolBox,r.ItemTypes.Block],drop(e,t){const n=t.getDifferenceFromInitialOffset(),o=Math.round(e.left+n.x),i=Math.round(e.top+n.y);if(e.type===r.ItemTypes.MiniToolBox&&f(e.id,o,i),e.data)return Object.assign({},e)}}),f=(e,t,o)=>{s(l.default(n,{[e]:{$merge:{left:t,top:o}}}))};return t.pointerEvents=e.isDropZoneClickthrough?"none":"all",o.createElement("div",{ref:u,style:t},Object.keys(n).map((t,i)=>{const{left:r,top:l}=n[t],a={left:r,top:l},c=Array.isArray(e.children);if(!c&&i>0)return null;const s=c?e.children[i]:e.children;return i>e.children.length-1?null:s?o.cloneElement(s,a):null}))}}])});