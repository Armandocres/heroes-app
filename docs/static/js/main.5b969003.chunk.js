(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{48:function(e,r,a){"use strict";a.r(r);var c=a(1),t=a(20),s=a.n(t),n=a(10),i=Object(c.createContext)(),l=a(4),o="[auth] login",h="[auth] logout",j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;switch(r.type){case o:return Object(l.a)(Object(l.a)({},r.payload),{},{logged:!0});case h:return{logged:!1};default:return e}},u=a(5),d=a(2),b=a(0),m=function(e){var r=e.history,a=Object(c.useContext)(i).dispatch,t=localStorage.getItem("lastPath")||"/";return Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)("hr",{}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){a({type:o,payload:{name:"Armando"}}),r.replace(t)},children:"Login"})]})},p=function(){var e=Object(c.useContext)(i),r=e.user.name,a=e.dispatch,t=Object(d.g)();return Object(b.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(b.jsx)(u.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(b.jsx)("div",{className:"navbar-collapse",children:Object(b.jsxs)("div",{className:"navbar-nav",children:[Object(b.jsx)(u.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(b.jsx)(u.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(b.jsx)(u.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(b.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(b.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(b.jsx)("span",{className:"nav-item nav-link text-info",children:r}),Object(b.jsx)("button",{className:"nav-item nav-link btn",onClick:function(){t.replace("/login"),a({type:h})},children:"Logout"})]})})]})},O=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],v=function(e){var r=e.id,a=e.superhero,c=(e.publisher,e.alter_ego),t=e.first_appearance,s=e.characters;return Object(b.jsx)("div",{className:"col",style:{maxWidth:540},children:Object(b.jsxs)("div",{className:"card h-100 border-dark mb-3",children:[Object(b.jsx)("div",{className:"col-md-4 m-auto",children:Object(b.jsx)("img",{src:"./assets/heroes/".concat(r,".jpg"),className:"card-img rounded",alt:a})}),Object(b.jsx)("div",{className:"col-md-8 m-auto",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("h5",{className:"card-title",children:[a," "]}),Object(b.jsxs)("p",{className:"card-text",children:[c," "]}),c!==s&&Object(b.jsx)("p",{className:"crad-text",children:s}),Object(b.jsx)("p",{className:"card-text",children:Object(b.jsx)("small",{className:"text-muted",children:t})}),Object(b.jsx)(u.b,{to:"./hero/".concat(r),children:"M\xe1s..."})]})})]})})},x=function(e){var r=e.publisher,a=Object(c.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e," no es v\xe1lido"));return O.filter((function(r){return r.publisher===e}))}(r)}),[r]);return Object(b.jsx)("div",{className:"row row-cols-2 row-cols-md-3 g-4 animate__animated animate__fadeIn",children:a.map((function(e){return Object(b.jsx)(v,Object(l.a)({},e),e.id)}))})},f=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Hola desde Marvel Screen"}),Object(b.jsx)("hr",{}),Object(b.jsx)(x,{publisher:"Marvel Comics"})]})},g=function(e){var r=e.history,a=Object(d.i)().heroeId,t=Object(c.useMemo)((function(){return e=a,O.find((function(r){return r.id===e}));var e}),[a]);if(!t)return Object(b.jsx)(d.a,{to:"/"});var s=t.superhero,n=t.publisher,i=t.alter_ego,l=t.first_appearance,o=t.characters;return Object(b.jsxs)("div",{className:"row mt-5",children:[Object(b.jsx)("div",{className:"col-4",children:Object(b.jsx)("img",{className:"animate__animated animate__fadeInLeft img-thumbnail",src:"../assets/heroes/".concat(a,".jpg"),alt:a})}),Object(b.jsxs)("div",{className:"col-8",children:[Object(b.jsx)("h3",{children:s}),Object(b.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsx)("b",{children:"Alter ego: "})," ",i]}),Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsx)("b",{children:"Publisher: "})," ",n]}),Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsx)("b",{children:"First appearance: "})," ",l]})]}),Object(b.jsx)("h5",{children:"characters"}),Object(b.jsx)("p",{children:o}),Object(b.jsx)("button",{onClick:function(){r.length<=2?r.push("/"):r.goBack()},className:"btn btn-outline-info",children:"Regresar"})]})]})},C=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"DC Screen"}),Object(b.jsx)("hr",{}),Object(b.jsx)(x,{publisher:"DC Comics"})]})},_=a(23),N=a.n(_),y=a(12),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(c.useState)(e),a=Object(n.a)(r,2),t=a[0],s=a[1],i=function(){s(e)},o=function(e){var r=e.target;s(Object(l.a)(Object(l.a)({},t),{},Object(y.a)({},r.name,r.value)))};return[t,o,i]},k=function(e){var r=e.history,a=Object(d.h)().search,t=N.a.parse(a).q,s=void 0===t?"":t,i=S({searchText:s}),o=Object(n.a)(i,2),h=o[0],j=o[1],u=h.searchText,m=Object(c.useMemo)((function(){return""===(e=s)?[]:(e=e.toLowerCase(),O.filter((function(r){return r.superhero.toLowerCase().includes(e)})));var e}),[s]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Seacrh Screen"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-5",children:[Object(b.jsx)("h4",{children:"Search Form"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.push("?q=".concat(u))},children:[Object(b.jsxs)("label",{htmlFor:"searchText",children:["Busca tu heroe",Object(b.jsx)("input",{type:"text",placeholder:"Superman",className:"form-control",name:"searchText",value:u,onChange:j,autoComplete:"off"})]}),Object(b.jsx)("button",{type:"submit",className:"btn m-1 btn-block btn-outline-primary",children:"Search..."})]})]}),Object(b.jsxs)("div",{className:"col-7",children:[Object(b.jsx)("h4",{children:" Resultado "}),""===s&&Object(b.jsx)("div",{className:"alert alert-info",children:"Search a hero"}),""!==s&&0===m.length&&Object(b.jsxs)("div",{className:"alert alert-danger",children:["There is no a hero with ",s]}),m.map((function(e){return Object(b.jsx)(v,Object(l.a)({},e),e.id)}))]})]})]})},M=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(d.d,{children:[Object(b.jsx)(d.b,{exact:!0,path:"/marvel",component:f}),Object(b.jsx)(d.b,{exact:!0,path:"/dc",component:C}),Object(b.jsx)(d.b,{exact:!0,path:"/hero/:heroeId",component:g}),Object(b.jsx)(d.b,{exact:!0,path:"/search",component:k}),Object(b.jsx)(d.a,{to:"/marvel"})]})})]})},D=a(13),w=["isAuth","component"],A=function(e){var r=e.isAuth,a=e.component,c=Object(D.a)(e,w);return localStorage.setItem("lastPath",c.location.pathname),Object(b.jsx)(d.b,Object(l.a)(Object(l.a)({},c),{},{component:function(e){return r?Object(b.jsx)(a,Object(l.a)({},e)):Object(b.jsx)(d.a,{to:"/login"})}}))},B=["isAuth","component"],T=function(e){var r=e.isAuth,a=e.component,c=Object(D.a)(e,B);return Object(b.jsx)(d.b,Object(l.a)(Object(l.a)({},c),{},{component:function(e){return r?Object(b.jsx)(d.a,{to:"/"}):Object(b.jsx)(a,Object(l.a)({},e))}}))},J=function(){var e=Object(c.useContext)(i).user;return Object(b.jsx)(u.a,{children:Object(b.jsx)("div",{children:Object(b.jsxs)(d.d,{children:[Object(b.jsx)(T,{exact:!0,path:"/login",isAuth:e.logged,component:m}),Object(b.jsx)(A,{path:"/",isAuth:e.logged,component:M})]})})})},F=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},I=function(){var e=Object(c.useReducer)(j,{},F),r=Object(n.a)(e,2),a=r[0],t=r[1];return Object(c.useEffect)((function(){localStorage.setItem("user",JSON.stringify(a))}),[a]),Object(b.jsx)(i.Provider,{value:{user:a,dispatch:t},children:Object(b.jsx)(J,{})})};s.a.render(Object(b.jsx)(I,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.5b969003.chunk.js.map