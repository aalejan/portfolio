(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],{22:function(n,e,t){},30:function(n,e,t){},31:function(n,e,t){},32:function(n,e,t){},33:function(n,e,t){"use strict";t.r(e);var i,a,r,o,c=t(0),s=t(12),l=t.n(s),d=t(2),h=(t(22),t(3)),m=t(34),x=t(11),j=t(1),b=h.a.div(i||(i=Object(d.a)(["\n    //background-color:#caebf2 ;\n    padding-left: 1rem;\n    background-color: #0b172a;\n    color:white;\n    width:100%;\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    .social-links{\n        //animation: title-entrance 1.5s ease-in-out;\n        padding-top: 2rem;\n        display: flex;\n        justify-content: space-around;\n        text-align: center;\n        width: 30%;\n        margin: auto;\n    }\n    a{\n        color:white;\n        &:hover{\n           transform: scale(1.2);\n           transition: transform 150ms ease-in-out;\n        }\n    }\n    @media(max-width: 375px){\n        \n    }\n"]))),p=h.a.h2(a||(a=Object(d.a)(["\nfont-size: 16rem;\n// animation: title-entrance 1.5s ease-in-out;\n color:white;\n font-weight: 800;\n font-family: 'Lobster', cursive;\n @media (max-width: 375px){\n    font-size: 10rem;\n     padding-left:4rem;\n }\n"]))),f=h.a.div(r||(r=Object(d.a)(["\n    margin-top: 1rem;\n    font-size: 4.5rem;\n    color:white;\n    text-align: center;\n    //animation: title-entrance 1.5s ease-in-out;\n   // animation-delay:0.2s;\n    @media(max-width: 375px){\n        font-size: 1.5rem;\n        padding-left: 4rem;\n        margin-top: .5rem;\n    }\n"]))),u=function(){var n={hidden:{opacity:0},show:{opacity:1}};return Object(j.jsx)(b,{id:"About",children:Object(j.jsxs)(m.a.div,{variants:{hidden:{x:100},show:{x:0,transition:{duration:.75,ease:"easeOut",staggerChildren:1,when:"afterChildren"}}},initial:"hidden",animate:"show",className:"description",children:[Object(j.jsx)(m.a.h2,{variants:n,className:"title",children:Object(j.jsx)(p,{children:"Hi, I'm Alex"})}),Object(j.jsx)(f,{className:"subtitle",children:Object(j.jsx)(m.a.div,{variants:n,children:"I am an aspiring Web Devloper."})}),Object(j.jsxs)(m.a.div,{variants:n,className:"social-links",children:[Object(j.jsx)("a",{href:"https://www.linkedin.com/in/alexander-alejandro/",children:Object(j.jsx)(x.b,{size:"8rem"})}),Object(j.jsx)("a",{href:"https://github.com/aalejan",children:Object(j.jsx)(x.a,{size:"8rem"})})]})]})})},g=t(16),O=t.n(g);var w,v,A,k,y,N,S,C,E,Q,J=h.a.div(o||(o=Object(d.a)(["\nfont-family: 'Lobster', cursive;\nwidth: 60%;\nmargin: auto;\nmargin-top: 2rem;\nmargin-bottom: 2rem;\ndisplay: flex;\njustify-content: center;\nbox-shadow: 2px 2px 4px 5px #e6e8e6;\nborder-radius: 3px;\ninput:focus {\n        outline:none;\n    }\n\n.title{\n    font-family: 'Lobster', cursive;\n    font-size: 6rem;\n}\n\nform{\n    margin-top: 2rem;\n    display: flex;\n    flex-direction: column;\n    width: 500px;\n    input{\n        border-bottom: 1px solid black;\n       border-top: none;\n       border-right: none;\n       border-left: none;\n       margin-bottom: 1.5rem;\n    }\n    .submit{\n        width: 100px;\n        border: 1px solid black;\n        margin-top: 1rem;\n        border-radius: 10px;\n    }\n    div{\n        text-align: center;\n    }\n    textarea{\n        height: 100px;\n    }\n    textarea:focus{\n        outline:none;\n    }\n}\n@media(max-width: 375px){\n    form{\n        width:250px;\n        textarea{\n        height: 50px;\n        } \n    }\n   width: 80%;\n}\n@media(max-width: 414px){\n    form{\n        width:250px;\n        textarea{\n        height: 50px;\n        } \n    }\n   width: 80%;\n}\n\n"]))),I=function(){return Object(j.jsx)(J,{id:"Contact",children:Object(j.jsxs)("form",{className:"contact-form",onSubmit:function(n){n.preventDefault(),O.a.sendForm("service_cokwtqh","template_mt720vh",n.target,"user_tcnm7f96gYfYKXsxoBm7n").then((function(n){console.log(n.text)}),(function(n){console.log(n.text)})),n.target.reset()},children:[Object(j.jsx)("div",{className:"title",children:"Contact Me"}),Object(j.jsx)("label",{children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name"}),Object(j.jsx)("label",{children:"Email"}),Object(j.jsx)("input",{type:"email",name:"email"}),Object(j.jsx)("label",{children:"Message"}),Object(j.jsx)("textarea",{name:"message"}),Object(j.jsx)("input",{className:"submit",type:"submit",value:"Send Message"})]})})},Y=(t(30),t(17)),R=h.a.ul(w||(w=Object(d.a)(["\n\n  list-style: none;\n  display:",";\n  flex-flow: row nowrap;\n  li {\n    padding: 18px 10px;\n  }\n  @media (max-width: 768px) {\nz-index:2;\nflex-flow: column nowrap;\nbackground-color: #112443;\nposition: fixed;\ntransform: ",";\ntop: 0;\nright: 0;\nheight: 100vh;\nwidth: 300px;\npadding-top: 3.5rem;\ntransition: transform 0.3s ease-in-out;\nli {\n  \n  list-style: none;\n  font-size: 5rem;\n}\na{\n    text-decoration: none;\n    color:#ff3b3f;\n}\n}\n"])),(function(n){return n.open?"flex":"none"}),(function(n){return n.open?"translateX(0)":"translateX(100%)"})),z=function(n){var e=n.open;return Object(j.jsxs)(R,{open:e,children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#About",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"Projects",children:"Projects"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#Skills",children:"Skills"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#Contact",children:"Contact"})})]})},B=h.a.div(v||(v=Object(d.a)(["\n  width: 3rem;\n  height: 3rem;\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  z-index: 20;\n  display: none;\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n  div {\n    width: 3rem;\n    height: 0.5rem;\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"])),(function(n){return n.open?"#ccc":"white"}),(function(n){return n.open?"rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"translateX(100%)":"translateX(0)"}),(function(n){return n.open?0:1}),(function(n){return n.open?"rotate(-45deg)":"rotate(0)"})),q=function(){var n=Object(c.useState)(!1),e=Object(Y.a)(n,2),t=e[0],i=e[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(B,{open:t,onClick:function(){return i(!t)},children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]}),Object(j.jsx)(z,{open:t})]})},L=h.a.nav(A||(A=Object(d.a)(["\n    top: 0;\n    width: 100%;\n    background-color: #0b172a;\n    min-height: 10vh;\n   display:flex;\n   justify-content: flex-end;\n  \n    \n"]))),P=h.a.ul(k||(k=Object(d.a)(["\n    //animation: title-entrance 1.5s ease-in-out;\n    display: flex;\n    justify-content: space-between;\n    list-style: none;\n    font-size: 2.6rem;\n    padding: 2rem 0rem;\n    padding-right: 2rem;\n    width: 50%;\n    font-weight: 600;\n   \n    \n\n\n@media(max-width:826px){\n       li{\n           font-size: 1.3rem;\n       } \n    }\n   \n    @media (max-width: 768px){\n        display: none;\n    }\n\n @media(max-width: 414px){\n       li{\n           font-size: 1rem;\n       } \n    }\n    \n\n    @media(max-width: 360px){\n        li{\n            font-size: .6rem;\n        }\n    }\n\n   \n    \n"]))),D=h.a.a(y||(y=Object(d.a)(["\n    font-family: 'Inter', sans-serif;\n    cursor: pointer;\n    color:#ff3b3f;\n    position: relative;\n    &:after{\n        content:'';\n        position:absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        height: 2px;\n        background:currentColor;\n        transform: scaleX(0);\n        transform-origin:right;\n        transition: transform 350ms ease-in-out;\n    }\n    &:hover::after{\n        transform: scaleX(1);\n    }\n"]))),U=function(){var n={hidden:{opacity:0},show:{opacity:1,transition:{duration:2}}};return Object(j.jsx)("div",{children:Object(j.jsxs)(L,{className:"navbar",children:[Object(j.jsxs)(P,{className:"active",children:[Object(j.jsx)(m.a.li,{variants:n,initial:"hidden",animate:"show",children:Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(D,{href:"#About",children:"About"})})}),Object(j.jsx)(m.a.li,{variants:n,initial:"hidden",animate:"show",children:Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(D,{href:"#Projects",children:"Projects"})})}),Object(j.jsx)(m.a.li,{variants:n,initial:"hidden",animate:"show",children:Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(D,{href:"#Skills",children:"Skills"})})}),Object(j.jsx)(m.a.li,{variants:n,initial:"hidden",animate:"show",children:Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(D,{href:"#Contact",children:"Contact"})})})]}),Object(j.jsx)(q,{})]})})},H=h.a.div(N||(N=Object(d.a)(["\nbackground-color: white;\nwidth: 300px;\nborder-style: none;\nborder-radius: 4px;\nflex: 1 1 25rem;\nfont-size: 1.5rem;\n//box-shadow: 3px 3px 5px 6px #537661;\nbox-shadow: 3px 3px 5px 6px #394151;\nposition: relative;\ntransition: transform 250ms ease-in-out;\nheight: 300px;\nbutton{\n    color: black;\n    cursor: pointer;\n    position: absolute;\n    bottom: 10px;\n    right: 30px;\n    padding: 5px;\n    border: none;\n    border-radius: 5px;\n    background-color: #f9b775;\n}\nbutton a{\n    color:white;\n}\n\nimg{\n    position: absolute;\n    width: 100%;\n    height: 50%;\n}\n.card-info{\n    position: absolute;\n    top: 50%;\n    padding: 1.2rem;\n    h4{\n        text-align: center;\n        padding-bottom: 1rem;\n        font-size: 1.75rem;\n    }\n}\n\n&:hover{\n    transform: scale(1.1);\n}\n\n@media (max-width: 620px){\n    width: 15rem;\n    height: 15rem;\n    font-size: 8px;\n   \n    button{\n        font-size:.3rem;\n        padding: 2px;\n        right: 10px;\n        bottom: 5px;\n    }\n    .card-info{\n        padding-top: .5rem;\n         h4{\n             padding-bottom: .5rem;\n        font-size: 1rem;\n         }\n    }\n   \n}\n\n\n"]))),F=function(n){var e=n.description,t=n.img,i=n.title,a=n.code;return Object(j.jsx)("div",{children:Object(j.jsxs)(H,{className:"card",children:[Object(j.jsx)("img",{src:t,alt:""}),Object(j.jsxs)("div",{className:"card-info",children:[Object(j.jsx)("h4",{children:i}),Object(j.jsx)("p",{children:e})]}),Object(j.jsx)(m.a.button,{whileHover:{scale:1.2},children:Object(j.jsx)("a",{href:a,children:"Source Code"})})]})})},V=t.p+"static/media/CoinHub.e69acddc.png",G=t.p+"static/media/StarWars.900ab14b.png",T=h.a.div(S||(S=Object(d.a)(["\nh2{\n    font-family: 'Lobster', cursive;\n    color:white;\n\n}\npadding-bottom:2rem;\n//background-color: #bfefd2;\nbackground-color: #0b172a;\n    h2{\n    font-size: 8rem;\n    font-weight: 500;\n    text-align: center; \n    }\n\n"]))),Z=h.a.div(C||(C=Object(d.a)(["\nwidth: 60%;\nmargin: auto;\npadding-top: 3rem;\npadding-bottom: 3rem;\ndisplay: flex;\njustify-content: space-around;\n\n"]))),X=function(){return Object(j.jsxs)(T,{id:"Projects",children:[Object(j.jsx)("h2",{children:"Projects"}),Object(j.jsxs)(Z,{children:[Object(j.jsx)(F,{description:"Access to over 100 different crypto currencies and some exchanges to trade crypto on!",img:V,title:"CoinHub",code:"https://github.com/aalejan/crypto-app"}),Object(j.jsx)(F,{description:"This App allows you to enter any text you want and have it translated into the language of your favorite Star Wars characters!!",img:G,title:"Star Wars Translator",code:"https://github.com/aalejan/Star-Wars-Translator-App"})]})]})},M=(t(31),t.p+"static/media/ReactIcon.69bdee9b.png"),W=t.p+"static/media/HTMLlogo.svg.b7d94634.png",K=t.p+"static/media/CSSLogo.930d3a79.png",_=t.p+"static/media/JSLogo.2e10b2a2.png",$=t.p+"static/media/Bootstrap.054efa3f.png",nn=h.a.h2(E||(E=Object(d.a)(["\n    font-family: 'Lobster', cursive;\n    font-size: 8rem;\n    font-weight: 500;\n    text-align: center;\n"]))),en=h.a.div(Q||(Q=Object(d.a)(["\npadding-top: 4rem;\npadding-bottom:6rem;\nmargin: auto;\nwidth: 68%;\njustify-content: space-between;\ndisplay:flex;\nflex-wrap: wrap;\nimg{\n    height: 14rem;\n    border-radius:10px;\n}\n@media(max-width:375px){\n    img{\n        height:4rem;\n        width: 5rem;\n    }\n    width: 80%;\n}\n@media(max-width:414px){\n    img{\n        height:50px;\n    }\n    width: 90%;\n}\n\n"]))),tn=function(){return Object(j.jsxs)("div",{id:"Skills",children:[Object(j.jsx)("div",{className:"title",children:Object(j.jsx)(nn,{children:"Skills"})}),Object(j.jsxs)(en,{children:[Object(j.jsx)(m.a.div,{whileHover:{scale:1.3},className:"skill",children:Object(j.jsx)("img",{src:M,alt:""})}),Object(j.jsx)(m.a.div,{whileHover:{scale:1.3},children:Object(j.jsx)("img",{src:W,alt:""})}),Object(j.jsx)(m.a.div,{whileHover:{scale:1.3},children:Object(j.jsx)("img",{src:K,alt:""})}),Object(j.jsx)(m.a.div,{whileHover:{scale:1.3},children:Object(j.jsx)("img",{src:_,alt:""})}),Object(j.jsx)(m.a.div,{whileHover:{scale:1.3},children:Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:""})}),Object(j.jsx)(m.a.div,{whileHover:{scale:1.3},children:Object(j.jsx)("img",{src:$,alt:""})})]})]})},an=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(U,{}),Object(j.jsx)(u,{}),Object(j.jsx)(tn,{}),Object(j.jsx)(X,{}),Object(j.jsx)(I,{})]})};t(32);var rn=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(an,{})})};l.a.render(Object(j.jsx)(rn,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.d2d34de5.chunk.js.map