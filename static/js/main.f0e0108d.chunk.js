(this["webpackJsonpwill-do"]=this["webpackJsonpwill-do"]||[]).push([[0],{38:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),i=c.n(a),n=c(26),r=c.n(n),j=(c(38),c(12)),l=c(8);var d=function(){return Object(s.jsxs)("nav",{className:"menu",children:[Object(s.jsx)(l.b,{className:"menu__item",activeClassName:"menu__item_active",exact:!0,to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(s.jsx)(l.b,{className:"menu__item",activeClassName:"menu__item_active",to:"/users_page",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"}),Object(s.jsx)(l.b,{className:"menu__item",activeClassName:"menu__item_active",to:"/auth",children:"\u041f\u043b\u043e\u0442\u0432\u0430"})]})};var o=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=t[0],i=t[1];Object(a.useEffect)((function(){window.addEventListener("scroll",n)}),[c]);var n=function(){window.scrollY>60?i(!0):i(!1)};return Object(s.jsx)("div",{className:c?"header header_scroll":"header",children:Object(s.jsxs)("div",{className:"header__container",children:[Object(s.jsx)("div",{className:"header__logo",children:"logo"}),Object(s.jsx)(d,{})]})})};var b=function(){return Object(s.jsx)("div",{className:"footer",children:Object(s.jsx)("div",{className:"footer__container",children:"\xa9 2020 Itauiti"})})},u=c(2),h=(c.p,c.p+"static/media/slider_img_2.12f92121.jpg");c.p;var m=function(){return Object(s.jsx)("div",{className:"slider",children:Object(s.jsxs)("div",{className:"slider__container",children:[Object(s.jsx)("button",{className:"slider__button",children:"pref"}),Object(s.jsx)("div",{className:"slider__img-container",children:Object(s.jsx)("img",{className:"slider__img",alt:"",src:h})}),Object(s.jsx)("button",{className:"slider__button",children:"next"})]})})},O=c(28),x=c(29),_=c(11),v=c(32),N=c(31),f=function(e){Object(v.a)(c,e);var t=Object(N.a)(c);function c(){var e;return Object(O.a)(this,c),(e=t.call(this)).state={isLiked:!1,counter:0},e.handeleLikeClick=e.handeleLikeClick.bind(Object(_.a)(e)),e}return Object(x.a)(c,[{key:"handeleLikeClick",value:function(){var e=this.state,t=e.isLiked,c=e.counter;t?this.setState({isLiked:!t,counter:c-1}):this.setState({isLiked:!t,counter:c+1})}},{key:"render",value:function(){var e=this.props,t=e.name,c=e.logo,a=this.state,i=a.isLiked,n=a.counter,r="".concat(i?"card__like-icon card__like-icon_liked":"card__like-icon");return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("img",{className:"card__user-img",src:c,alt:""}),Object(s.jsxs)("div",{className:"card__top",children:[Object(s.jsx)("h2",{className:"card__user-name",children:t}),Object(s.jsx)("p",{className:"card__text",children:"\u041f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u0446\u0435\u043b\u044c \u0442\u0430\u043a\u0430\u044f-\u0442\u043e, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e...., \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u044e!"})]}),Object(s.jsxs)("div",{className:"card__bottom",children:[Object(s.jsx)("button",{className:"card__link",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u2192"}),Object(s.jsxs)("div",{className:"card__icon-container",children:[Object(s.jsx)("div",{className:"card__like-counter",children:n}),Object(s.jsx)("button",{className:r,onClick:this.handeleLikeClick})]})]})]})}}]),c}(i.a.Component);var p=function(){var e=Object(a.useContext)(S);return Object(s.jsx)("div",{className:"cards-container",children:e.map((function(e,t){var c=e.name,a=e.picture;return Object(s.jsx)(f,{name:"".concat(c.first," ").concat(c.last),logo:a.medium},t)}))})};var k=function(){return Object(s.jsx)("div",{className:"main",children:Object(s.jsxs)("div",{className:"main__container",children:[Object(s.jsx)(m,{}),Object(s.jsx)(p,{})]})})};var g=function(){return Object(s.jsx)("div",{children:"UsersPage"})};var C=function(){return Object(s.jsx)("div",{children:"AuthPage"})},L=c(30),w=c.n(L),S=i.a.createContext();var E=function(){var e=!0?Object(s.jsxs)(u.d,{children:[Object(s.jsx)(u.b,{exact:!0,path:"/",children:Object(s.jsx)(k,{})}),Object(s.jsx)(u.b,{path:"/users_page",children:Object(s.jsx)(g,{})}),Object(s.jsx)(u.b,{path:"/auth",children:Object(s.jsx)(C,{})}),Object(s.jsx)(u.a,{to:"/"})]}):Object(s.jsxs)(u.d,{children:[Object(s.jsx)(u.b,{exact:!0,path:"/",children:Object(s.jsx)(k,{})}),Object(s.jsx)(u.b,{path:"/auth",children:Object(s.jsx)(C,{})}),Object(s.jsx)(u.a,{to:"/"})]}),t=Object(a.useState)([]),c=Object(j.a)(t,2),i=c[0],n=c[1];return Object(a.useEffect)((function(){w.a.get("https://randomuser.me/api?results=6").then((function(e){n(e.data.results)}))}),[]),Object(s.jsx)(l.a,{children:Object(s.jsxs)("div",{className:"app",children:[Object(s.jsxs)(S.Provider,{value:i,children:[Object(s.jsx)(o,{}),e]}),Object(s.jsx)(b,{})]})})};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(E,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.f0e0108d.chunk.js.map