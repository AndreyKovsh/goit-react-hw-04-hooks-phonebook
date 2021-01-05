(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{17:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),o=n.n(r),a=n(2),u=n.n(a),i=(n(17),n(11)),s=n(3),b=n(4),j=(n(18),n(10)),l=n.n(j);var h=function(e){var t=e.onSubmit,n=Object(r.useState)(""),o=Object(s.a)(n,2),a=o[0],u=o[1],i=Object(r.useState)(""),b=Object(s.a)(i,2),j=b[0],l=b[1],h=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":u(c);break;case"number":l(c);break;default:return}},d=function(){u(""),l("")};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(a,j),d()},children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{children:["Name",Object(c.jsx)("input",{type:"text",name:"name",value:a,onChange:h,placeholder:"Andrey Kovsh"})]}),Object(c.jsxs)("label",{children:["Phone number",Object(c.jsx)("input",{type:"text",name:"number",value:j,onChange:h,placeholder:"817-18-41"})]}),Object(c.jsx)("button",{type:"submit",children:"Add contact"})]})})})},d=function(e){var t=e.value,n=e.onChange;return Object(c.jsxs)("label",{children:["Find contacts by name",Object(c.jsx)("input",{type:"text",value:t,onChange:n})]})};var m=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(c.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.name,o=e.number;return Object(c.jsxs)("li",{children:[Object(c.jsxs)("p",{children:[Object(c.jsxs)("b",{children:[r," "]}),Object(c.jsx)("em",{children:o})]}),Object(c.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t)}))})};var O=function(){var e=Object(r.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("contacts")))&&void 0!==e?e:[]})),t=Object(s.a)(e,2),n=t[0],o=t[1];Object(r.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var a=Object(r.useState)(""),u=Object(s.a)(a,2),j=u[0],O=u[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(h,{onSubmit:function(e,t){var c={id:l.a.generate(),name:e,number:t};n.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))?Object(b.b)(" ".concat(e," is already in use.")):n.find((function(e){return e.number===t}))?Object(b.b)(" ".concat(t," is already in use.")):""===e.trim()||""===t.trim()?b.b.info(" Enter the contact's name and  phone number!"):/\d{3}[-]\d{2}[-]\d{2}/g.test(t)?o((function(e){return[c].concat(Object(i.a)(e)).sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:e.name.toLowerCase()<t.name.toLowerCase()?-1:0}))})):b.b.error(" Enter the correct  phone number(check format)!")}}),Object(c.jsx)("h2",{children:"Contacts"}),n.length>1&&Object(c.jsx)(d,{value:j,onChange:function(e){O(e.currentTarget.value)}}),n.length>0?Object(c.jsx)(m,{contacts:function(){var e=j.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDeleteContact:function(e){o(n.filter((function(t){return t.id!==e})))}}):Object(c.jsx)("p",{children:"Your phonebook is empty. Please add contact."}),Object(c.jsx)(b.a,{autoClose:3700})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};u.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),f()}},[[29,1,2]]]);
//# sourceMappingURL=main.1027b49c.chunk.js.map