(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{210:function(e,t,n){},299:function(e,t,n){},462:function(e,t,n){},466:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(26),i=n.n(r),s=(n(210),n(40)),o=n(468),l=n(472),u=n(471),j=n(86),d=n(147),b=n(38),m=n.n(b),h=n(98),p=n(70),f=n(200),O=n(473),x=n(470),v=n(474),y=n(92),w=n.n(y),k="".concat("https://x-meme-ankur.herokuapp.com"),C="(http(s)?://)[-a-zA-Z0-9@:%._+~#=]+(/).*",g="^[A-Za-z]+[\\s,]?[A-Za-z0-9]+.*$",S={labelCol:{span:4},wrapperCol:{span:18}},M=n(11),z=function(e){var t=e.visible,n=e.onClose,a=e.fetchMemes,r=e.title,i=e.isUpdate,o=e.disabled,l=e.value,u=e.memeId,j=Object(c.useState)(!1),b=Object(s.a)(j,2),y=b[0],z=b[1],N=Object(c.useState)(""),I=Object(s.a)(N,2),A=I[0],E=I[1],U=Object(c.useState)(""),L=Object(s.a)(U,2),P=L[0],T=L[1],Z=Object(c.useState)(""),_=Object(s.a)(Z,2),F=_[0],R=_[1],J=function(){n()},W=[Object(M.jsx)(p.a,{onClick:J,children:"Cancel"},"back")],X=function(){var e=Object(h.a)(m.a.mark((function e(){var t,c,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=A&&A.match("^[A-Za-z]+[\\s,]?[A-Za-z0-9]+$"),c=P&&P.match(C),r=F&&F.match(g),!(t&&c&&r)){e.next=8;break}return z(!0),e.next=7,w.a.post("".concat(k,"/memes"),{name:A,url:P,caption:F}).then(function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.b.success("Meme created!"),e.next=3,new Promise((function(e){return setTimeout(e,1e3)}));case 3:n();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(){a()})).catch((function(e){f.b.error("Meme already exists!"),z(!1)}));case 7:z(!1);case 8:A?t||f.b.error("Invalid name"):f.b.warning("Name cannot be empty"),P?c||f.b.error("Invalid url"):f.b.warning("Url cannot be empty"),F?r||f.b.error("Invalid caption"):f.b.warning("Caption cannot be empty");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(h.a)(m.a.mark((function e(){var t,c,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=P.match(C),c=F.match(g),!(t&&c||t&&!F||!P&&c)){e.next=10;break}return r={},t&&(r.url=P),c&&(r.caption=F),z(!0),e.next=9,w.a.patch("".concat(k,"/memes/").concat(u),r).then(function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.b.success("Meme updated!"),e.next=3,new Promise((function(e){return setTimeout(e,1e3)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(){a(),n()})).catch((function(e){f.b.error("Meme already exists!"),z(!1)}));case 9:z(!1);case 10:P||F?P&&!t&&f.b.error("Invalid url"):f.b.warning("Fill atleast one field"),F&&!c&&f.b.error("Invalid caption");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i?W.push(Object(M.jsx)(p.a,{type:"primary",loading:y,onClick:$,children:"Save"},"submit")):W.push(Object(M.jsx)(p.a,{type:"primary",loading:y,onClick:X,children:"Post"},"submit")),Object(M.jsx)(O.a,{title:r,visible:t,confirmLoading:y,onCancel:J,footer:W,children:Object(M.jsxs)(x.a,Object(d.a)(Object(d.a)({},S),{},{children:[Object(M.jsx)(x.a.Item,{label:"Name",children:Object(M.jsx)(v.a,{placeholder:"Name",onChange:function(e){return E(e.target.value)},value:l,disabled:o})}),Object(M.jsx)(x.a.Item,{label:"URL",children:Object(M.jsx)(v.a,{placeholder:"URL",onChange:function(e){return T(e.target.value)}})}),Object(M.jsx)(x.a.Item,{label:"Caption",children:Object(M.jsx)(v.a,{placeholder:"Caption",onChange:function(e){return R(e.target.value)}})})]}))})},N=n(477),I=n(478),A=(n(297),o.a.Meta),E=l.a.Title,U=l.a.Text,L=function(e){var t=e.meme,n=e.fetchMemes,a=t.name,r=t.url,i=t.caption,l=t.id,d=Object(c.useState)(!1),b=Object(s.a)(d,2),m=b[0],h=b[1];return Object(M.jsxs)("div",{children:[m?Object(M.jsx)(z,{visible:m,title:"Update Meme",value:a,memeId:l,disabled:!0,isUpdate:!0,onClose:function(){return h(!1)},fetchMemes:function(){return n()}}):null,Object(M.jsx)(o.a,{style:{width:300},hoverable:!0,cover:Object(M.jsx)(u.a,{width:300,height:300,src:r,preview:{src:r},fallback:"https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png"}),actions:[Object(M.jsx)(j.a,{title:"Edit meme",children:Object(M.jsx)(N.a,{style:{fontSize:30},onClick:function(){return h(!0)}},"edit")}),Object(M.jsx)(j.a,{title:"Copy image URL",children:Object(M.jsx)(I.a,{style:{fontSize:30},onClick:function(){return function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),f.b.success("Copied!")}(r)}},"copy")})],children:Object(M.jsx)(A,{title:Object(M.jsx)(E,{level:3,children:i}),description:Object(M.jsx)(U,{code:!0,children:"Posted by: ".concat(a)})})}),Object(M.jsx)("br",{})]})},P=n(87),T=n(55),Z=n(469),_=(n(299),function(e){var t=e.memes,n=e.fetchMemes,a=Object(c.useState)(1),r=Object(s.a)(a,2),i=r[0],o=r[1],l=Object(c.useState)([]),u=Object(s.a)(l,2),j=u[0],d=u[1],b=Object(c.useState)(!1),m=Object(s.a)(b,2),h=m[0],p=m[1],f=function(){p(window.innerWidth<=760)};return Object(c.useEffect)((function(){d(t.slice(0,8)),o(1),window.addEventListener("resize",f.bind(undefined)),f()}),[t]),Object(M.jsxs)("div",{className:"meme-list",children:[Object(M.jsx)(P.a,{gutter:[16,{xs:8,sm:16,md:24,lg:32}],justify:"center",style:{display:"flex",flexDirection:h?"column":""},children:j.map((function(e,t){return Object(M.jsx)(T.a,{className:"gutter-row",span:6,children:Object(M.jsx)(L,{meme:e,index:t,fetchMemes:n})})}))}),Object(M.jsx)(Z.a,{current:i,onChange:function(e){o(e);var n=8*e,c=n-8;d(t.slice(c,n)),document.documentElement.scrollTop=0},total:t.length/8*10})]})}),F=n(475),R=n(88),J=n(467),W=n(476),X=n(60),$=n(479),B=n(480),D=n(481),G=function(e){window.open(e)},q=n(196),H=n.n(q),K=(n(462),F.a.Footer),Q=l.a.Title,V=Object(M.jsx)(X.a,{style:{fontSize:60},spin:!0}),Y=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),i=Object(s.a)(r,2),o=i[0],l=i[1],u=Object(c.useState)(!1),d=Object(s.a)(u,2),b=d[0],m=d[1],h=Object(c.useState)(!1),f=Object(s.a)(h,2),O=f[0],x=f[1],v=function(){m(!0),w.a.get("".concat(k,"/memes")).then((function(e){0===e.data.length?x(!0):(x(!1),l(e.data))})).then((function(){return m(!1)})).catch((function(e){console.log(e)}))};return Object(c.useEffect)((function(){v()}),[]),Object(M.jsxs)("div",{children:[Object(M.jsxs)("div",{className:"app",children:[Object(M.jsxs)("div",{className:"header",children:[Object(M.jsx)("h1",{children:"Welcome to X-Meme"}),Object(M.jsx)(p.a,{type:"primary",onClick:function(){return a(!0)},size:"large",children:"Add meme"},"add-meme")]}),Object(M.jsxs)("div",{className:"content",children:[n?Object(M.jsx)(z,{visible:n,onClose:function(){a(!1)},fetchMemes:v,title:"Post Meme"}):null,O?Object(M.jsx)("div",{className:"content-empty",children:Object(M.jsx)(R.a,{description:"No memes here.."})}):null,b?Object(M.jsx)(J.a,{indicator:V}):Object(M.jsx)(_,{memes:o,fetchMemes:v})]}),Object(M.jsx)("div",{className:"footer",children:Object(M.jsxs)(K,{children:[Object(M.jsx)("div",{className:"footer-links",children:Object(M.jsxs)(W.b,{size:"middle",children:[Object(M.jsx)(j.a,{title:"Linkedin",children:Object(M.jsx)($.a,{style:{fontSize:48},onClick:function(){return G("https://www.linkedin.com/in/ankurchaudhary627/")}})}),Object(M.jsx)(j.a,{title:"Github",children:Object(M.jsx)(B.a,{style:{fontSize:48},onClick:function(){return G("https://github.com/ankurchaudhary627")}})}),Object(M.jsx)(j.a,{title:"Portfolio",children:Object(M.jsx)(D.a,{style:{fontSize:48},onClick:function(){return G("https://ankurchaudhary627.netlify.app")}})})]})}),Object(M.jsx)(Q,{level:5,children:"X-Meme App \xa92021 Created by Ankur Chaudhary"})]})})]}),Object(M.jsx)(H.a,{params:{particles:{number:{value:160,density:{enable:!1}},size:{value:10,random:!0},move:{direction:"bottom",out_mode:"out"},line_linked:{enable:!1}},interactivity:{events:{onclick:{enable:!0,mode:"remove"}},modes:{remove:{particles_nb:10}}}}})]})};i.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(Y,{})}),document.getElementById("root"))}},[[466,1,2]]]);