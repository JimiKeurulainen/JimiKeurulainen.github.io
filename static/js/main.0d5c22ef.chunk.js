(this.webpackJsonpjimikeurulainen=this.webpackJsonpjimikeurulainen||[]).push([[0],{13:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c(6),s=c.n(n),r=(c(3),c(2)),j=c.p+"static/media/Caret_U.62ea4e08.svg",l=c(1);function a(e){var t=Object(i.useState)("FRONT PAGE"),c=Object(r.a)(t,2),n=c[0],s=c[1];return!1===e.active?Object(l.jsxs)("button",{type:"button",onClick:function(){e.func[0](e.id),e.func[1](),s("FRONT PAGE")},style:{marginTop:"".concat(e.style,"vh")},children:[Object(l.jsx)("div",{style:{flexBasis:"3vh"},children:Object(l.jsx)("br",{})}),Object(l.jsx)("div",{style:{flexBasis:"12vh"},children:Object(l.jsx)("h2",{children:e.name})})]}):!0===e.active?Object(l.jsxs)("button",{type:"button",onClick:e.func,style:{marginTop:"".concat(e.style,"vh")},onMouseOver:function(){s("FRONT PAGE")},onMouseOut:function(){s(e.name)},children:[Object(l.jsx)("div",{id:"Indicator",children:Object(l.jsx)("img",{style:{filter:"invert()"},src:j,width:"20px",alt:"Upwards arrow"})}),Object(l.jsx)("div",{style:{flexBasis:"12vh"},children:Object(l.jsx)("h2",{children:n})})]}):void 0}var o=function(e){var t=["MY PROJECTS","ABOUT ME","CONTACT"],c=[],n=Object(i.useState)(!1),s=Object(r.a)(n,2),j=s[0],o=s[1],d=function(){return o((function(e){return!e}))},u=window.innerHeight,b=Object(i.useState)(0),O=Object(r.a)(b,2),v=O[0],h=O[1],x=[e.setActive,d];Object(i.useEffect)((function(){!1===j?(window.scrollTo(0,0),h(0)):!0===j&&(window.scrollBy(0,u),h(15))}),[j,u]);for(var f=0;f<3;f++)c.push(Object(l.jsx)(a,{id:f,active:!1,name:t[f],style:v,func:x},f));return!0===j&&(c.splice(e.active,1,Object(l.jsx)(a,{id:e.active,active:!0,name:t[e.active],style:v,func:d},e.active)),x.splice(1,1,console.log)),Object(l.jsx)("div",{id:"Navbar",children:c})};function d(e){var t=Object(i.useRef)(null),c=e.src;return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{id:"TxtHeader",children:Object(l.jsx)("h1",{children:e.title})}),Object(l.jsx)("div",{id:"ScrollMenu"})]}),Object(l.jsx)("iframe",{ref:t,title:"textBox",src:c})]})})}var u=function(e){var t=Object(i.useRef)(null);return Object(i.useEffect)((function(){var c=window.innerWidth;t.current.scrollTo(e.active*c,0)})),Object(l.jsx)("div",{id:"Carousel",ref:t,children:Object(l.jsxs)("div",{className:"Scrolled",children:[Object(l.jsx)(d,{title:"MY PROJECTS",src:"myprojects.html"}),Object(l.jsx)(d,{title:"ABOUT ME",src:"aboutme.html"}),Object(l.jsx)(d,{title:"CONTACT",src:"contact.html"})]})})};var b=function(e){var t=Object(i.useState)(0),c=Object(r.a)(t,2),n=c[0],s=c[1];return Object(i.useEffect)((function(){console.log(n)})),Object(l.jsxs)("div",{className:"Body",children:[e.children,Object(l.jsx)(o,{active:n,setActive:s}),Object(l.jsx)(u,{active:n})]})},O=c.p+"static/media/Caret_R.e5e60b22.svg",v=c.p+"static/media/Caret_L.b522d768.svg";var h=function(){var e=[],t=Object(i.useRef)(null),c=Object(i.useState)(0),n=Object(r.a)(c,2),s=n[0],j=n[1];setTimeout((function(){j(s+1)}),5e3);var a=window.innerWidth;Object(i.useEffect)((function(){s>10&&j(0),s<0&&j(10),t.current.scrollTo(s*a,0)}),[s,a]);for(var o=0;o<11;o++)e.push(Object(l.jsxs)("div",{style:{backgroundColor:"rgb(".concat(25*o,", 120, 120)"),paddingTop:"15vh",width:"100vw"},children:["PICTURE ",o," ",Object(l.jsx)("br",{}),s]},o));return Object(l.jsxs)("div",{ref:t,id:"Carousel",children:[Object(l.jsx)("button",{onClick:function(){j(s-1)},children:Object(l.jsx)("img",{src:v,width:"10px",alt:"Leftwards caret"})}),Object(l.jsx)("button",{onClick:function(){j(s+1)},style:{right:"0"},children:Object(l.jsx)("img",{src:O,width:"10px",alt:"Rigthwards caret"})}),Object(l.jsx)("div",{className:"Scrolled",style:{width:"".concat(a*e.length,"vw")},children:e})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),i(e),n(e),s(e),r(e)}))},f=c(7);s.a.render(Object(l.jsx)(f.a,{base:"/",children:Object(l.jsxs)(b,{children:[Object(l.jsxs)("div",{className:"Header",children:[Object(l.jsx)("h1",{children:"Jimi Keurulainen"}),Object(l.jsx)("p",{style:{color:"red"},children:"Website isn't very responsive yet!"})]}),Object(l.jsx)(h,{})]})}),document.getElementById("root")),x()},3:function(e,t,c){}},[[13,1,2]]]);
//# sourceMappingURL=main.0d5c22ef.chunk.js.map