(this.webpackJsonpcortex=this.webpackJsonpcortex||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(36)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(14),i=n.n(r),o=(n(22),n(23),n(7));n(24);var c=function(e){return l.a.createElement("img",{className:"title",src:"./title-with-glow.png",alt:"Cortex Command Community Project",style:{top:e.yCenter-e.titleHeight/2,maxHeight:e.titleHeight}})};var m=function(e){return l.a.createElement("img",{src:"./moon.png",alt:"",style:{position:"fixed",top:e.yCenter,left:e.xCenter,display:"block",maxHeight:"176px",maxWidth:"176px",height:"auto",width:"auto"}})};n(25);var s=function(e){return l.a.createElement("div",{className:"planet",style:{display:"block",height:"auto",width:"auto",maxHeight:e.planetHeight+27,maxWidth:e.planetHeight+54,margin:"auto",position:"sticky",top:e.yCenter-(e.planetHeight+27)/2,marginTop:-1*(e.planetHeight+27)/2,zIndex:"9",marginBottom:"250px",textAlign:"center"}},l.a.createElement("div",{style:{position:"absolute",top:-27,bottom:-27,width:"100%",zIndex:"10",overflow:"hidden",textAlign:"initial"}},l.a.createElement("img",{src:"./station.png",className:"station",alt:"",style:{transformOrigin:"0 ".concat(e.planetHeight/2+27,"px")}})),l.a.createElement("img",{src:"./planet.png",alt:"",style:{height:"100%",width:"100%",maxHeight:e.planetHeight,maxWidth:e.planetHeight}}))};var u=function(e){var t=e.titleHeight,n=function(){return Math.min(550,window.innerHeight)/4},r=function(){return[0,window.innerHeight/2+n()]},i=function(){return window.innerHeight/2},u=function(){return window.innerHeight+n()},d=function(){return(window.innerWidth+550)/2-68.75},h=function(){return window.innerHeight-1.8*n()},p=function(){return window.pageYOffset<r()[1]?i():i()+r()[1]-window.pageYOffset},g=function(){return u()-window.pageYOffset},E=function(){var e=h()-.8*window.pageYOffset;return Math.max(e,-150)},f=function(){return d()-.2*window.pageYOffset},w=function(){b(p),S(f),T(E),N(g),L(Math.min(550,window.innerWidth))},x=Object(a.useState)(i()),v=Object(o.a)(x,2),y=v[0],b=v[1],C=Object(a.useState)(u()),H=Object(o.a)(C,2),k=H[0],N=H[1],O=Object(a.useState)(d()),j=Object(o.a)(O,2),W=j[0],S=j[1],z=Object(a.useState)(h()),I=Object(o.a)(z,2),D=I[0],T=I[1],B=Object(a.useState)(550),F=Object(o.a)(B,2),G=F[0],L=F[1];return Object(a.useEffect)((function(){return window.addEventListener("resize",w),window.addEventListener("scroll",w),function(){window.removeEventListener("resize",w),window.removeEventListener("scroll",w)}})),l.a.createElement(l.a.Fragment,null,l.a.createElement(c,{yCenter:y,titleHeight:t}),l.a.createElement(s,{yCenter:k,planetHeight:G}),l.a.createElement(m,{yCenter:D,xCenter:W}))};n(26);var d=function(){return l.a.createElement("div",{className:"header",style:{borderTop:"4px solid #f9de8f",borderBottom:"1px solid black",boxSizing:"border-box",borderLeft:"0",borderRight:"0",textAlign:"center",color:"white",fontSize:"30px",fontFamily:'"Montserrat", sans-serif',fontWeight:"bold"}},l.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",margin:"auto",padding:"0",maxWidth:"800px",justifyContent:"space-between",alignItems:"center",height:"100%"}},l.a.createElement("li",null,l.a.createElement("a",{href:"./"},l.a.createElement("span",null,"Home"))),l.a.createElement("li",null,l.a.createElement("a",{href:"./downloads"},l.a.createElement("span",null,"Downloads"))),l.a.createElement("li",null,l.a.createElement("a",{href:"./get-involved"},l.a.createElement("span",null,"Get Involved")))))};n(27);var h=function(){return l.a.createElement("div",{className:"footer",style:{minHeight:"200px",height:"100%",width:"100%",backgroundColor:"#242424",padding:"12px",boxSizing:"border-box"}},l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",margin:"auto",padding:"0",maxWidth:"800px",height:"100%"}},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h1",null,"Community")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://discord.com/invite/D2aGezA"},"Discord")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://forums.datarealms.com/"},l.a.createElement("span",null,"Fan Forums")))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h1",null,"Development")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/cortex-command-community"},l.a.createElement("span",null,"Github"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/cortex-command-community/Cortex-Command-Community-Project-Source/issues"},l.a.createElement("span",null,"Issues")))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h1",null,"Resources")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://wiki.datarealms.com/Cortex_Command"},l.a.createElement("span",null,"Wiki"))))))};n(28);var p=function(e){return l.a.createElement("div",{className:"card",style:{display:"flex",justifyContent:e.right?"flex-end":"flex-start"}},l.a.createElement("div",{className:"one",style:{width:"80%"}},l.a.createElement("div",{className:"two"},e.children)))};n(29);var g=function(e){return l.a.createElement("div",{className:"card-container",style:{display:"flex",flexDirection:"column",maxWidth:"800px",margin:"auto"}},e.children)};n(30);var E=function(e){return l.a.createElement("div",{className:"card-contents",style:{display:"flex",flexDirection:e.right?"row-reverse":"initial"}},l.a.createElement("div",{style:{flex:"1"}},l.a.createElement("div",{style:{padding:"8px 16px"}},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.body))),l.a.createElement("div",{style:{border:"2px solid black",backgroundColor:"black",height:"196px",width:"196px"}}))};var f=function(e){return l.a.createElement("div",{style:{position:"fixed",bottom:"20px",width:"100%",zIndex:"100"}},l.a.createElement("button",{onClick:function(){for(var e=0,t=[{scrollTo:"full-pager",viewCheck:"full-pager"},{scrollTo:"scroll-anchor",viewCheck:"card-container"}];e<t.length;e++){var n=t[e];if(document.getElementsByClassName(n.viewCheck)[0].getBoundingClientRect().bottom>window.innerHeight+1){document.getElementsByClassName(n.scrollTo)[0].scrollIntoView({block:"start",behavior:"smooth"});break}}},style:{border:"0",padding:"0",backgroundColor:"transparent",margin:"auto",display:"block",cursor:"pointer"}},l.a.createElement("img",{src:"./arrow.gif",alt:"Scroll to content"})))};var w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{position:"sticky",top:"0",zIndex:"1000"}},l.a.createElement(d,null)),l.a.createElement("div",{style:{backgroundColor:"#111"}},l.a.createElement(f,null),l.a.createElement(u,{titleHeight:161}),l.a.createElement("section",{className:"full-pager",style:{height:"100vh"}}),l.a.createElement("div",{style:{position:"relative",zIndex:"101",backgroundColor:"#111"}},l.a.createElement("div",{className:"scroll-anchor",style:{position:"relative",top:"-80px"}}),l.a.createElement(g,null,l.a.createElement(p,null,l.a.createElement(E,{title:"Upgraded Engine",body:"The source code has been enhanced to improve performance."})),l.a.createElement(p,{right:!0},l.a.createElement(E,{right:!0,title:"New Content",body:"New weapons, characters, and scenes."})),l.a.createElement(p,null,l.a.createElement(E,{title:"Improved Strategic Gameplay",body:"The team has focused on accentuating the most satisfying gameplay elements."}))),l.a.createElement("div",{style:{height:"48px"}}),l.a.createElement(h,null))))};var x=function(e){return l.a.createElement("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"}},l.a.createElement(d,null),l.a.createElement("div",{style:{margin:"auto",maxWidth:"800px",width:"100%",flex:"1"}},l.a.createElement("div",{style:{padding:"0 8px"}},e.children)),l.a.createElement(h,null))};var v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,null,l.a.createElement("h1",{style:{marginTop:"48px"}},"Downloads"),l.a.createElement("p",null,"Project files are available on Github."),l.a.createElement("br",null),l.a.createElement("p",null,"Visit Discord for information on how to download the most recent release.")))};var y=function(){return l.a.createElement(x,null,l.a.createElement("h1",{style:{marginTop:"48px"}},"Page Not Found"),l.a.createElement("p",null,"Sorry, but the page you were trying to view does not exist."))},b=n(15),C=n(1);var H=function(){return l.a.createElement(b.a,null,l.a.createElement(C.c,null,l.a.createElement(C.a,{exact:!0,path:"/"},l.a.createElement(w,null)),l.a.createElement(C.a,{path:"/downloads"},l.a.createElement(v,null)),l.a.createElement(C.a,null,l.a.createElement(y,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.d92baa64.chunk.js.map