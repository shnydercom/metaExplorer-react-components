!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,function(){return function(e){function t(t){for(var o,l,c=t[0],a=t[1],s=t[2],d=0,f=[];d<c.length;d++)l=c[d],i[l]&&f.push(i[l][0]),i[l]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(u&&u(t);f.length;)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var a=n[c];0!==i[a]&&(o=!1)}o&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},i={0:0},r=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=a;return r.push([17,1]),n()}([,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);t.MiniButton=e=>o.createElement("div",{ref:e.btnRef,style:e.btnStyle,className:`minitoolbox-minibutton ${e.className}`,onMouseEnter:e.onMouseEnter,onMouseOut:e.onMouseOut,onClick:e.onClick},o.createElement("div",{className:"minitoolbox-minibutton-display"},o.createElement("img",{src:e.iconSrc}),e.children))},,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(4);t.Watch=e=>o.createElement("div",{className:`minitoolbox-watchmenu ${e.watchClass?e.watchClass:""}`,style:e.watchStyle},e.btnProps.map((e,t)=>o.createElement(i.MiniButton,Object.assign({className:`minitoolbox-watchmenu-btn-${t}`,key:`minibtn-${t}`},e))),o.createElement("div",{className:"minitoolbox-watchmenu-preview"},e.children))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(4);t.Phone=e=>o.createElement("div",{className:`minitoolbox-phonemenu ${e.phoneClass?e.phoneClass:""}`,style:e.phoneStyle,ref:e.phoneRef},e.btnProps.map((e,t)=>o.createElement(i.MiniButton,Object.assign({className:`minitoolbox-phonemenu-btn-${t}`,key:`minibtn-${t}`},e))),o.createElement("div",{className:"minitoolbox-phonemenu-preview"},e.children))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(8),r={position:"absolute",pointerEvents:"none",zIndex:100,left:0,top:0,width:"100%",height:"100%"};function l(e,t,n){if(!e||!t)return{display:"none"};const o=`translate(${t.x-e.x}px, ${t.y-e.y}px)`;return{transform:o,WebkitTransform:o}}t.DragLayerWChildren=e=>{const{itemType:t,isDragging:n,item:c,initialOffset:a,initialClientOffset:s,currentOffset:u}=i.useDragLayer(e=>({item:e.getItem(),itemType:e.getItemType(),initialClientOffset:e.getInitialClientOffset(),initialOffset:e.getInitialSourceClientOffset(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()}));return n?o.createElement("div",{style:r},o.createElement("div",{style:l(a,u)},"asdf",function(){if(e.includedItemId&&c)return e.includedItemId===c.id&&e.children?o.createElement(o.Fragment,null,e.children):null;for(let n=0;n<e.acceptedItemTypes.length;n++)if(e.acceptedItemTypes[n]===t&&e.children)return o.createElement(o.Fragment,null,e.children);return null}())):null},t.default=t.DragLayerWChildren},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ItemTypes={MiniToolBox:"minitoolbox",Block:"block"}},,,function(e,t,n){"use strict";function o(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),o(n(18)),o(n(19)),o(n(20)),o(n(21)),o(n(22)),o(n(42))},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";function o(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),o(n(23)),o(n(30)),o(n(31)),o(n(14)),o(n(13)),o(n(4)),o(n(12)),o(n(11))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(8),r=n(4),l=n(11),c=n(12),a=n(13);t.CSS_CLASSNAME="minitoolbox",t.MiniToolBox=e=>{const[n,s]=o.useState(!1),[u,d]=o.useState(!1),[f,p]=o.useState("phoneEd"),[{isDragging:m},g,h]=i.useDrag({item:{id:e.id,left:e.left,top:e.top,type:e.type},collect:e=>({isDragging:e.isDragging()})}),y=[{iconSrc:"/static/minimize.svg",onClick:()=>{console.log(n),b()}},{iconSrc:"/static/maximize.svg",onClick:()=>{}},{iconSrc:"/static/up.svg",onClick:()=>{}}],b=()=>{s(!n),n||d(!1)},v=[{iconSrc:"/static/minimize.svg",onClick:()=>{b(),console.log(n)}},{iconSrc:"/static/maximize.svg",onClick:()=>{}},{iconSrc:"/static/up.svg",onClick:()=>{}}],S=i=>o.createElement("div",{onMouseOver:n?e=>d(!0):e=>{},onMouseOut:n?t=>{d(!1),e.onOutDragHandle&&e.onOutDragHandle()}:e=>{},className:`${t.CSS_CLASSNAME}-enclosing ${O||""}`},o.createElement("div",{onClick:n?e=>{p("watchEd"),b()}:e=>{},className:`\n\t\t\t${t.CSS_CLASSNAME}-watchcontainer\n\t\t\t${t.CSS_CLASSNAME}-watchcontainer-${n?"mini":"max"}\n\t\t\t${t.CSS_CLASSNAME}-watchcontainer-${"watchEd"===f?"active":"inactive"}\n\t\t\t${n?u&&"watchEd"!==f?"mini-open":"mini-closed":""}\n\t\t\t`},o.createElement(l.Watch,{btnProps:v,watchClass:`${t.CSS_CLASSNAME}-${n?"mini":"max"}`},n||"watchEd"!==f?null:e.children)),o.createElement("div",{onMouseOut:t=>{e.onOutDragHandle&&e.onOutDragHandle()},onClick:n?e=>{p("phoneEd"),b()}:e=>{},className:`\n\t\t\t${t.CSS_CLASSNAME}-phonecontainer\n\t\t\t${t.CSS_CLASSNAME}-phonecontainer-${n?"mini":"max"} \n\t\t\t${t.CSS_CLASSNAME}-phonecontainer-${"phoneEd"===f?"active":"inactive"}\n\t\t\t${n?u&&"phoneEd"!==f?"mini-open":"mini-closed":""}\n\t\t\t`},o.createElement(c.Phone,{btnProps:y,phoneClass:`${t.CSS_CLASSNAME}-${n?"mini":"max"} `},n||"phoneEd"!==f?null:e.children)),i?o.createElement(r.MiniButton,{className:"minitoolbox-dndhandle",iconSrc:"/static/move.svg",onClick:()=>{},btnStyle:{pointerEvents:"all"},onMouseOut:t=>{e.onOutDragHandle&&e.onOutDragHandle()},onMouseEnter:t=>{e.onOverDragHandle&&e.onOverDragHandle()}}):o.createElement(r.MiniButton,{className:"minitoolbox-dndhandle",iconSrc:"/static/move.svg",btnRef:g,onClick:()=>{},btnStyle:{pointerEvents:"all"},onMouseOut:t=>{e.onOutDragHandle&&e.onOutDragHandle()},onMouseEnter:t=>{e.onOverDragHandle&&e.onOverDragHandle()}})),{className:O}=e;return o.createElement("div",{className:`${t.CSS_CLASSNAME}-root`,style:{left:e.left,top:e.top}},o.createElement(a.default,{acceptedItemTypes:[e.type]},S(!0)),o.createElement("div",{ref:h,style:{height:0,width:0}}),m?null:S(!1))}},,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DND_MINI_TOOLBOX_TYPE="minitoolbox"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(8),r=n(14),l=n(32),c=n(33),a={width:"100%",height:"100%",position:"absolute",top:0,left:0},s={top:20,left:80};t.DropContainer=e=>{let t=Object.assign({},a);o.useEffect(()=>{if(console.log("effect triggered"),!Array.isArray(e.children))return void u({a:Object.assign({},s)});const t=e.children,n={};t.forEach(e=>{console.log(e);const t=e.props;console.log(t),!t.id||!t.top&&0!==t.top||!t.left&&0!==t.left||!t.type?n[c.generate()]=s:n[t.id]={top:t.top,left:t.left}}),u(n)},[e]);const[n,u]=o.useState({}),[,d]=i.useDrop({accept:[r.ItemTypes.MiniToolBox,r.ItemTypes.Block],drop(t,n){const o=n.getDifferenceFromInitialOffset(),i=Math.round(t.left+o.x),l=Math.round(t.top+o.y);return console.log(t),t.type===r.ItemTypes.MiniToolBox&&f(t.id,i,l),t.type===r.ItemTypes.Block?e.onBlockDropped?(e.onBlockDropped(Object.assign({},t)),Object.assign({},t)):(console.warn("dropped a block element but no onBlockDropped-handler was provided"),Object.assign({},t)):t.data?Object.assign({},t):void 0}}),f=(e,t,o)=>{console.log("moving blox"),u(l.default(n,{[e]:{$merge:{left:t,top:o}}}))};return t.pointerEvents=e.isDropZoneClickthrough?"none":"all",o.createElement("div",{ref:d,style:t},Object.keys(n).map((t,i)=>{const{left:r,top:l}=n[t],c={left:r,top:l},a=Array.isArray(e.children);if(!a&&i>0)return null;const s=a?e.children[i]:e.children;return i>e.children.length-1?null:s?o.cloneElement(s,c):null}))}},,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(43))},function(e,t,n){}])});