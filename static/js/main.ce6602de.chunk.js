(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,n,a){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},function(e,n,a){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},function(e,n,a){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,n,a){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,,,function(e,n,a){e.exports={App:"App_App__1Sc4o"}},function(e,n,a){e.exports=a(16)},,,,,function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(8),o=a.n(c),s=(a(15),a(9)),l=a.n(s),u=a(6),m=a(1),p=a(2),i=a.n(p),h=function(e){e.type;var n=e.onChange,a=e.onChangeText,t=e.onKeyPress,c=e.onEnter,o=e.error,s=e.className,l=e.spanClassName,u=Object(m.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),p="".concat(i.a.error," ").concat(l||""),h="".concat(i.a.errorInput," ").concat(s?i.a.superInput:"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){t&&t(e),c&&"Enter"===e.key&&c()},className:h},u)),o&&r.a.createElement("span",{className:p},o))},d=a(3),_=a.n(d),E=a(4),C=a.n(E),b=function(e){var n=e.red,a=e.className,t=Object(m.a)(e,["red","className"]),c="".concat(n?C.a.red:C.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:c},t))},g=a(5),f=a.n(g),k=function(e){e.type,e.onChange,e.onChangeChecked;var n=e.className,a=(e.spanClassName,e.children),t=Object(m.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(f.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){},className:c},t)),a&&r.a.createElement("span",{className:f.a.spanClassName},a))};var N=function(){var e=Object(t.useState)(""),n=Object(u.a)(e,2),a=n[0],c=n[1],o=a?"":"error",s=function(){o?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},l=Object(t.useState)(!1),m=Object(u.a)(l,2),p=m[0],i=m[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:_.a.column},r.a.createElement(h,{value:a,onChangeText:c,onEnter:s,error:o}),r.a.createElement(h,{className:_.a.blue}),r.a.createElement(b,null,"default"),r.a.createElement(b,{red:!0,onClick:s},"delete "),r.a.createElement(b,{disabled:!0},"disabled"),r.a.createElement(k,{checked:p,onChangeChecked:i},"some text "),r.a.createElement(k,{checked:p,onChange:function(e){return i(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var x=function(){return r.a.createElement("div",{className:l.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.ce6602de.chunk.js.map