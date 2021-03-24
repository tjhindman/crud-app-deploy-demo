(this["webpackJsonpcrud-app-demo"]=this["webpackJsonpcrud-app-demo"]||[]).push([[0],{57:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(16),s=n.n(c),o=n(19),u=(n(43),n(17)),i=n(6),j=n(61),l=n(63),b=n(3);var d=function(){return Object(b.jsx)("h1",{children:"Welcome Home"})},h=n(20),p=n(11),O="https://socialapp-api.herokuapp.com/",m=n(35),f=n(25),x="LOGIN",v=Object(m.a)(Object(f.persist)(Object(f.devtools)(Object(f.redux)((function(e,t){switch(t.type){case x:return{user:t.payload};case"LOGOUT":return{user:{}};default:return e}}),{user:{token:""},messages:[]}))));var g=function(e){var t=v((function(e){return e.dispatch})),n=Object(r.useState)({username:"",password:""}),a=Object(p.a)(n,2),c=a[0],s=a[1],o=function(e){var t=e.target.name,n=e.target.value;s((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(h.a)({},t,n))}))};function i(e){console.log(e)}return Object(r.useEffect)((function(){return window.addEventListener("message",i),function(){window.removeEventListener("message",i)}}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{id:"login-form",onSubmit:function(e){var n,r;e.preventDefault(),(n=c.username,r=c.password,fetch(O+"auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:r})}).then((function(e){return e.json()}))).then((function(e){return t({type:x,payload:e})}))},children:[Object(b.jsx)("label",{htmlFor:"username",children:"Username"}),Object(b.jsx)("input",{type:"text",name:"username",value:c.username,autoFocus:!0,required:!0,onChange:o}),Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",value:c.password,required:!0,onChange:o}),Object(b.jsx)("button",{type:"submit",children:"Login"})]}),Object(b.jsx)("button",{onClick:function(e){window.open("https://socialapp-api.herokuapp.com/auth/google/login")},children:"google login"})]})},y=n(64),w=n(59);var k=function(e){var t=Object(i.f)();return Object(b.jsx)(y.a,{style:{width:"18rem"},children:Object(b.jsxs)(y.a.Body,{children:[Object(b.jsx)(y.a.Title,{children:e.user.username}),Object(b.jsx)(y.a.Text,{children:e.user.displayName}),Object(b.jsxs)("div",{children:["About: ",e.user.about]}),Object(b.jsxs)("div",{children:["About: ",e.user.createdAt]}),Object(b.jsx)(w.a,{onClick:function(){return t.push("/users/".concat(e.user.username))},variant:"primary",children:"See user"})]})})};var C=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){fetch(O+"users").then((function(e){return e.json()})).then((function(e){a(e.users)}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Users List"}),n.map((function(e){return Object(b.jsx)(k,{user:e},e.username)}))]})},S=n(60),L=n(62);var N=function(e){var t=e.match,n=v((function(e){return e.user})),a=Object(r.useState)({}),c=Object(p.a)(a,2),s=c[0],o=c[1],u=Object(r.useState)(""),i=Object(p.a)(u,2),j=i[0],l=i[1],d=Object(r.useState)(""),h=Object(p.a)(d,2),m=h[0],f=h[1],x=Object(r.useState)({}),g=Object(p.a)(x,2),y=g[0],k=g[1];return Object(r.useEffect)((function(){var e;(e=t.params.username,fetch(O+"users/".concat(e)).then((function(e){return e.json()}))).then((function(e){o(e.user),l(e.user.displayName),f(e.user.about)}))}),[t]),Object(b.jsxs)(S.a,{children:[Object(b.jsxs)("div",{children:["Display Name: ",s.displayName]}),Object(b.jsxs)("div",{children:["Username: ",s.username]}),Object(b.jsx)("p",{children:"About Me:"}),Object(b.jsx)("p",{children:s.about}),Object(b.jsxs)(L.a,{onSubmit:function(e){e.preventDefault();var t={about:m,displayName:j};(function(e,t,n){return fetch(O+"users/".concat(t),{method:"PATCH",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()}))})(n.token,s.username,t).then((function(e){o(e.user)}))},children:[Object(b.jsxs)(L.a.Group,{controlId:"formBasicEmail",children:[Object(b.jsx)(L.a.Label,{children:"About"}),Object(b.jsx)(L.a.Control,{onChange:function(e){return f(e.target.value)},value:m,type:"text",placeholder:"About me..."})]}),Object(b.jsxs)(L.a.Group,{controlId:"formBasicEmail",children:[Object(b.jsx)(L.a.Label,{children:"Display Name"}),Object(b.jsx)(L.a.Control,{onChange:function(e){return l(e.target.value)},value:j,type:"text",placeholder:"my real name"})]}),Object(b.jsx)(w.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(b.jsx)("input",{type:"file",onChange:function(e){return k(e.target.files[0])}}),Object(b.jsx)("button",{onClick:function(e){(function(e,t,n){var r=new FormData;return r.append("picture",n),fetch(O+"users/".concat(t,"/picture"),{method:"PUT",headers:{Authorization:"Bearer "+e,"Content-Type":"multipart/form-data"},body:r}).then((function(e){return e.json()}))})(n.token,n.username,y).then((function(e){return console.log(e)}))},children:"update my photo"}),Object(b.jsx)("img",{src:"https://socialapp-api.herokuapp.com"+s.pictureLocation})]})};var A=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)(j.a,{bg:"light",expand:"lg",children:[Object(b.jsx)(j.a.Brand,{children:"User Management Portal"}),Object(b.jsxs)(l.a,{className:"mr-auto",children:[Object(b.jsx)(l.a.Link,{href:"/",children:"Home"}),Object(b.jsx)(l.a.Link,{href:"/users",children:"Users"}),Object(b.jsx)(l.a.Link,{href:"/login",children:"Login"})]})]}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{exact:!0,path:"/",component:d}),Object(b.jsx)(i.a,{exact:!0,path:"/login",component:g}),Object(b.jsx)(i.a,{exact:!0,path:"/users",component:C}),Object(b.jsx)(i.a,{path:"/users/:username",render:function(e){return Object(b.jsx)(N,Object(u.a)({},e))}})]})]})};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(o.a,{children:Object(b.jsx)(A,{})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.c69c9774.chunk.js.map