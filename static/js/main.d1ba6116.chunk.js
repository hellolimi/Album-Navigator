(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{71:function(t,e,n){"use strict";n.r(e);var o,r,a=n(0),i=n.n(a),c=n(35),l=n.n(c),s=n(5),d=n(6),b=n.p+"static/media/oswald-v36-latin-300.6397ef09.woff",u=n.p+"static/media/oswald-v36-latin-regular.3d1d485b.woff",f=n.p+"static/media/oswald-v36-latin-600.98b7df2b.woff",m=n.p+"static/media/noto-sans-kr-v13-latin-regular.68b6dc32.woff",j=Object(d.a)(o||(o=Object(s.a)(['\n    @font-face {\n        font-family: "Oswald";\n        src: local("Oswald"),\n        url(',') format(\'woff\');\n        font-weight: 300;\n        font-style: normal;\n    }\n    @font-face {\n        font-family: "Oswald";\n        src: local("Oswald"),\n        url(',') format(\'woff\');\n        font-weight: 400;\n        font-style: normal;\n    }\n    @font-face {\n        font-family: "Oswald";\n        src: local("Oswald"),\n        url(',') format(\'woff\');\n        font-weight: 600;\n        font-style: normal;\n    }\n\n    @font-face {\n        font-family: "NotoSans";\n        src: local("NotoSans"),\n        url(',") format('woff');\n        font-weight: 400;\n        font-style: normal;\n    }\n"])),b,u,f,m),p=n(4),h=n(41),O=n(2),g=n(17),x=n(20),w=n(1),v=d.b.div(r||(r=Object(s.a)(["\n    display: flex; flex-direction:column; text-align:center;\n    position: absolute; top:50%; left:50%; transform:translate(-50%, -50%);\n    h1 { margin-bottom:1rem; border-bottom:1px solid #FF9E9E; font-size:3.5rem; color:#666; line-height:7rem; font-weight:600; }\n    form{ display:flex; flex-direction:column; align-items: center;\n        > * { margin-bottom 1rem; height:3rem; width:380px; }\n        input{ padding:0 0.5rem; border:1px solid #ededed; }\n        button{ margin-bottom:0; background-color:#FF9E9E; border:none; border-radius:0.5rem; }\n        span{ height:1.25rem; line-height:1.25rem; font-size:0.975rem; color:#A50000; }\n    }\n"])));function y(){var t=Object(a.useState)({email:"",password:""}),e=Object(p.a)(t,2),n=e[0],o=e[1],r=n.email,i=n.password,c=Object(a.useState)(!1),l=Object(p.a)(c,2),s=l[0],d=l[1],b=Object(a.useCallback)((function(t){var e=t.target,n=e.name,r=e.value;o((function(t){return Object(x.a)(Object(x.a)({},t),{},Object(g.a)({},n,r))}))}),[]),u=Object(a.useCallback)((function(){/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(r)?d(!1):d(!0)}),[r]);return Object(w.jsxs)(v,{children:[Object(w.jsx)("h1",{children:"Album Navigator"}),Object(w.jsxs)("form",{onSubmit:function(){if(""!==r)if(""!==i){localStorage.setItem("token","1welcomeToAlbumNavigator1")}else alert("Please enter your password!");else alert("Please enter your email address!")},children:[Object(w.jsx)("input",{type:"email",required:!0,name:"email",placeholder:"Email",onChange:b,onBlur:u}),s&&Object(w.jsx)("span",{children:"Please enter a valid email address."}),Object(w.jsx)("input",{type:"password",required:!0,name:"password",placeholder:"Password",onChange:b}),Object(w.jsx)("button",{type:"submit",children:"Sign In"})]})]})}var E,k=i.a.memo(y),F=n(24),S=n(21),C=n.n(S),z=n(39),A=n(40),N=n.n(A),D=d.b.li(E||(E=Object(s.a)(["\n    position: relative; \n    padding:2.5rem 0; border-bottom:1px solid #FF9E9E;\n    .editBox { position:absolute; top:2.5rem; right:0; width:4rem;\n        > button { float:right; margin-bottom:0.5rem; border:none; background-color:transparent; color:#FF9E9E; font-size:0.875rem; }\n        > div{ float:right; display:flex; flex-direction:column; background-color:#FF9E9E;\n            button{ padding:1rem; border:none; background-color:transparent; color:#fff; font-weight:400; }\n        }\n    }\n    h4{ width:100%; margin-bottom:1.25rem; text-align:center; font-size:2rem; font-weight:300; }\n    img{ margin:0 auto; }\n\n    form{ text-align:center;  \n        fieldset{ margin-bottom:1rem; > * { height:3rem; }\n            input{ width:40%; margin-right:1rem; padding:0 0.5rem ; border:1px solid #ededed; }\n            button{ width:15%; background-color:#FF9E9E; border:none; border-radius:0.5rem; color:#fff; }\n        }\n    }\n"])));function I(t){var e=t.postId,n=t.postTitle,o=t.onDelete,r=t.onUpdate,i=Object(a.useState)(!1),c=Object(p.a)(i,2),l=c[0],s=c[1],d=Object(a.useState)(n),b=Object(p.a)(d,2),u=b[0],f=b[1],m=Object(a.useState)(!1),j=Object(p.a)(m,2),h=j[0],O=j[1],g=function(t){var e=t.target.name;console.log(e),"edit"===e?O((function(t){return!t})):s((function(t){return!t}))},x=Object(a.useCallback)((function(t){var e=t.target.value;f(e)}),[]);return Object(w.jsxs)(D,{children:[Object(w.jsxs)("div",{className:"editBox",children:[Object(w.jsx)("button",{type:"button",name:"edit",onClick:g,children:"\u25cf \u25cf \u25cf"}),h&&Object(w.jsxs)("div",{children:[Object(w.jsx)("button",{type:"button",name:"update",onClick:g,children:"Update"}),Object(w.jsx)("button",{type:"button",onClick:function(){o(e)},children:"Delete"})]})]}),l?Object(w.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==u&&(r(u,e),s(!1),O(!1))},children:[Object(w.jsxs)("fieldset",{children:[Object(w.jsx)("input",{type:"text",value:u,onChange:x}),Object(w.jsx)("button",{type:"submit",children:"Update!"})]}),Object(w.jsx)("img",{src:"http://placehold.it/580x400/cccccc/ffffff?text=demo-image",alt:"demo"})]}):Object(w.jsxs)("div",{children:[Object(w.jsx)("h4",{children:n}),Object(w.jsx)("img",{src:"http://placehold.it/580x400/cccccc/ffffff?text=demo-image",alt:"demo"})]})]})}var P=i.a.memo(I),T=n(72);function U(t){var e=t.data,n=t.onDelete,o=t.onUpdate;return Object(w.jsx)("div",{children:Object(w.jsx)("ul",{children:e.map((function(t){return Object(w.jsx)(P,{postId:t.id,postTitle:t.title,onDelete:n,onUpdate:o},Object(T.a)())}))})})}var Z,B=i.a.memo(U),q=d.b.div(Z||(Z=Object(s.a)(["\n    * { color:#FF9E9E; font-weight:bold; font-size:1.5rem; }\n    display:flex; justify-content:center; padding:2rem;\n    ul{ position:relative; top:3px; display:flex; \n        li{ width:2.5rem; height:2.5rem; \n            button { width:100%; height:100%; border:none; background-color:transparent;  }\n        }\n    }\n    button { width:2.5rem; height:2.5rem; border:none; background-color:transparent;  }\n    \n"])));function M(t){var e=t.postsToView,n=t.totalPosts,o=t.paginate,r=Object(a.useState)([]),i=Object(p.a)(r,2),c=i[0],l=i[1],s=Object(a.useState)({start:1,end:5}),d=Object(p.a)(s,2),b=d[0],u=d[1],f=function(t){var o=t.target.name,r=b.start,a=b.end,i=Math.ceil(n/e);"next"===o?a<i&&u((function(t){return{start:t.start++,end:t.end++}})):r>1&&u((function(t){return{start:t.start--,end:t.end--}}))};return Object(a.useEffect)((function(){!function(){for(var t=b.start,e=b.end,n=[],o=t;o<=e;o++)n.push(o);l(n)}()}),[n,e,b]),Object(w.jsxs)(q,{children:[Object(w.jsx)("button",{type:"button",name:"prev",onClick:f,children:"\u25c0"}),Object(w.jsx)("ul",{children:c.map((function(t){return Object(w.jsx)("li",{children:Object(w.jsx)("button",{onClick:function(){o(t)},children:t})},Object(T.a)())}))}),Object(w.jsx)("button",{type:"button",name:"next",onClick:f,children:"\u25b6"})]})}var J,V=i.a.memo(M),_=d.b.form(J||(J=Object(s.a)(["\n    display:flex; justify-content:center; align-items: center; border-bottom:1px solid #FF9E9E;\n    margin-bottom:1rem; padding:2rem 0;\n    > * { height:3rem; }\n    input{ width:50%; margin-right:1rem; padding:0 0.5rem ; border:1px solid #ededed; }\n    button{ width:15%; background-color:#FF9E9E; border:none; border-radius:0.5rem; color:#fff; font-weight:400; }\n"])));function G(t){var e=t.onCreate,n=Object(a.useState)(""),o=Object(p.a)(n,2),r=o[0],i=o[1],c=Object(a.useRef)(),l=Object(a.useCallback)((function(t){var e=t.target.value;i(e)}),[]);return Object(w.jsxs)(_,{onSubmit:function(t){t.preventDefault(),r&&(e(r),i(""))},children:[Object(w.jsx)("input",{type:"text",value:r,required:!0,placeholder:"Title...",ref:c,onChange:l}),Object(w.jsx)("button",{type:"submit",children:"Share"})]})}var L,R=i.a.memo(G),$=d.b.header(L||(L=Object(s.a)(["\n    position:fixed; top:0; left:0; z-index:1000;\n    width:100%; height:5rem; \n    background-color:#FFEEEE; border-bottom:1px solid #FF9E9E;\n    .wrap{ position:relative; \n        h1{ line-height:5rem; text-align:center; color:#666; font-size:2.5rem; font-weight:600; }\n        button{ \n            position:absolute; top:0; right:0; height:5rem; \n            border:none; background-color:transparent; \n            font-size:1.25rem; font-weight:600; color:#FF9E9E; \n        }\n    }\n"])));function H(t){return Object(w.jsx)($,{children:Object(w.jsxs)("div",{className:"wrap",children:[Object(w.jsx)("h1",{children:"Album Navigator"}),Object(w.jsx)("button",{type:"button",onClick:function(){var t=window.confirm("Do you really want to leave Albul Navigator?");console.log(t),t&&(localStorage.removeItem("token"),window.location.reload())},children:"Log Out \u21d2"})]})})}var K,Q=i.a.memo(H),W=d.b.div(K||(K=Object(s.a)(["\n    padding-top:5rem;\n"])));function X(t){var e=Object(a.useState)([]),n=Object(p.a)(e,2),o=n[0],r=n[1],i=Object(a.useState)(1),c=Object(p.a)(i,2),l=c[0],s=c[1];Object(a.useEffect)((function(){(function(){var t=Object(z.a)(C.a.mark((function t(){var e,n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://jsonplaceholder.typicode.com/albums",t.prev=1,t.next=4,N.a.get("https://jsonplaceholder.typicode.com/albums");case 4:e=t.sent,n=e.data,r(n.reverse()),t.next=12;break;case 9:throw t.prev=9,t.t0=t.catch(1),Error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}})()()}),[]);var d=function(t){var e={userid:11,id:o[o.length-1].id+1,title:t};r((function(t){return[e].concat(Object(F.a)(t))}))};return Object(w.jsxs)(W,{children:[Object(w.jsx)(Q,{}),Object(w.jsx)(R,{onCreate:d}),Object(w.jsx)(B,{data:function(t){var e=5*l,n=e-5;return t.slice(n,e)}(o),onDelete:function(t){r((function(e){return e.filter((function(e){return e.id!==t}))}))},onCreate:d,onUpdate:function(t,e){var n=o.findIndex((function(t){return t.id===e}));r((function(e){return[].concat(Object(F.a)(e),[o[n].title=t])}))}}),Object(w.jsx)(V,{postsToView:5,totalPosts:o.length,paginate:s})]})}var Y=i.a.memo(X);function tt(){var t=Object(a.useState)(!1),e=Object(p.a)(t,2),n=e[0],o=e[1];return Object(a.useEffect)((function(){localStorage.getItem("token")?o(!0):o(!1)}),[]),Object(w.jsx)(h.a,{children:Object(w.jsx)(O.c,{children:n?Object(w.jsx)(O.a,{exact:!0,path:"/",children:Object(w.jsx)(Y,{})}):Object(w.jsx)(O.a,{exact:!0,path:"/",children:Object(w.jsx)(k,{})})})})}var et,nt=i.a.memo(tt),ot=Object(d.a)(et||(et=Object(s.a)(["\n  *{ padding:0; margin:0; box-sizing:border-box; font-family: 'Oswald', 'NotoSans', 'Malgun Gothic', sans serif; font-weight:300; }\n  body{ background-color:#FFEEEE; }\n  li{ list-style:none; }\n  img{ display:block; }\n  fieldset{ border:none; }\n  button{ cursor:pointer; }\n  .wrap{ width:1180px; max-width:1180px; margin:0 auto; }\n  :root {\n    *{ font-size: 18px; }\n    @media screen and (max-width: 1024px) {\n      *{ font-size: 18px; }\n    }\n    @media screen and (max-width: 376px) {\n      *{ font-size: 16px; }\n    }\n  }\n"])));function rt(){return Object(w.jsxs)("div",{className:"wrap",children:[Object(w.jsx)(j,{}),Object(w.jsx)(ot,{}),Object(w.jsx)(nt,{})]})}var at=i.a.memo(rt);l.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(at,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.d1ba6116.chunk.js.map