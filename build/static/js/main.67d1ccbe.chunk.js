(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t(14),a=t.n(o),c=t(3),u=t(0),i=function(e){var n=e.filter,t=e.handler;return Object(u.jsxs)("div",{children:["filter shown with ",Object(u.jsx)("input",{value:n,onChange:t})]})},s=function(e){var n=e.submitHandler,t=e.name,r=e.handleNameChange,o=e.number,a=e.handleNumberChange;return Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:t,onChange:r})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:o,onChange:a})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},l=function(e){var n=e.person,t=e.handleDeletePerson;return Object(u.jsxs)("p",{children:[n.name," ",n.number,"  ",Object(u.jsx)("button",{type:"button",id:n.id,onClick:t,children:"Delete"})]})},d=function(e){var n=e.persons,t=e.handleDeletePerson;return Object(u.jsx)(u.Fragment,{children:n.map((function(e){return Object(u.jsx)(l,{person:e,handleDeletePerson:t},e.name)}))})},f=function(e){var n=e.message;return null===n?null:Object(u.jsx)("div",{className:n.type,children:n.text})},h=t(4),b=t.n(h),j="/api/persons",m=function(){return b.a.get(j).then((function(e){return e.data}))},O=function(e){return b.a.post(j,e).then((function(e){return e.data}))},v=function(e,n){return b.a.put("".concat(j,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return b.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.data}))},g=(t(38),function(){var e=Object(r.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],a=Object(r.useState)(""),l=Object(c.a)(a,2),h=l[0],b=l[1],j=Object(r.useState)(""),g=Object(c.a)(j,2),x=g[0],w=g[1],C=Object(r.useState)(""),y=Object(c.a)(C,2),L=y[0],k=y[1],D=Object(r.useState)(null),N=Object(c.a)(D,2),S=N[0],P=N[1];Object(r.useEffect)((function(){m().then((function(e){console.log("promise fulfilled"),o(e)}))}),[]),console.log("render",t.length,"persons");var I=function(e,n){console.log(n,e),P({text:e,type:n}),setTimeout((function(){P(null)}),2e3)},E=L?t.filter((function(e){return e.name.toLowerCase().includes(L.toLowerCase())})):t;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(f,{message:S}),Object(u.jsx)(i,{filter:L,handler:function(e){console.log(e.target.value),k(e.target.value)}}),Object(u.jsx)("h2",{children:"Add a new"}),Object(u.jsx)(s,{submitHandler:function(e){e.preventDefault();var n={name:h,number:x},r=t.find((function(e){return e.name===h}));r?window.confirm("".concat(r.name," is already added to phonebook, replace the old number with the new one?"))&&v(r.id,n).then((function(e){o(t.map((function(n){return n.id===r.id?e:n})).sort((function(e,n){var t=e.name.toLowerCase(),r=n.name.toLowerCase();return t>r?1:t<r?-1:0}))),I("".concat(r.name," has been updated."),"info")})).catch((function(e){return I("Information of ".concat(n.name," has already been removed from server."),"error")})):O(n).then((function(e){o(e.sort((function(e,n){var t=e.name.toLowerCase(),r=n.name.toLowerCase();return t>r?1:t<r?-1:0}))),I("".concat(n.name," has been added."),"info")}));b(""),w("")},name:h,handleNameChange:function(e){console.log(e.target.value),b(e.target.value)},number:x,handleNumberChange:function(e){console.log(e.target.value),w(e.target.value)}}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(d,{persons:E,handleDeletePerson:function(e){var n=t.find((function(n){return n.id==e.target.id}));window.confirm("Delete ".concat(n.name," ?"))&&p(n.id).then((function(){o(t.filter((function(e){return e.id!==n.id})).sort((function(e,n){var t=e.name.toLowerCase(),r=n.name.toLowerCase();return t>r?1:t<r?-1:0}))),I("".concat(n.name," has been deleted."),"info")})).catch((function(e){return I("Information of ".concat(n.name," has already been removed from server."),"error")}))}})]})});a.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.67d1ccbe.chunk.js.map