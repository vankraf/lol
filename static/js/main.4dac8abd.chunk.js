(this.webpackJsonplol=this.webpackJsonplol||[]).push([[0],{131:function(e,t,a){e.exports=a(171)},160:function(e,t,a){},161:function(e,t,a){e.exports=a.p+"static/media/app_test.eb004de1.png"},162:function(e,t,a){},171:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(37),r=a.n(c),i=a(25),o=a.n(i),m=a(41),s=a.n(m),u=a(32),p=a(31),E=a.n(p),d=a(50),f=a.n(d),b=(a(137),a(14)),v=a.n(b),g=a(11),h=a.n(g),y=a(17),k=a.n(y),_=a(15),C=a.n(_),P=a(47),w=a.n(P),j=a(16),O=a.n(j),x=a(48),S=a.n(x),A=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return l.a.createElement(v.a,{id:t},l.a.createElement(h.a,null,"Cooler"),n&&l.a.createElement(C.a,{title:"\u0421\u043c\u043e\u0442\u0440\u0438, \u044d\u0442\u043e \u0442\u044b)"},l.a.createElement(w.a,{before:n.photo_200?l.a.createElement(S.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),l.a.createElement(C.a,{title:"\u0422\u044b\u043a\u043d\u0438 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443"},l.a.createElement(O.a,null,l.a.createElement(k.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"\u041a\u043e\u0442\u044f"))),l.a.createElement(C.a,{title:"\u0422\u043e\u0436\u0435 \u0442\u044b\u043a\u043d\u0438"},l.a.createElement(O.a,null,l.a.createElement(k.a,{size:"xl",level:"2",onClick:a,"data-to":"app_test"},"App test"))))},I=a(27),U=a(40),z=a.n(U),K=a(38),V=a.n(K),W=a(39),B=a.n(W),J=a(49),N=a.n(J),T=(a(160),Object(I.b)()),G=function(e){return l.a.createElement(v.a,{id:e.id},l.a.createElement(h.a,{left:l.a.createElement(z.a,{onClick:e.go,"data-to":"home"},T===I.a?l.a.createElement(V.a,null):l.a.createElement(B.a,null))},"Cat"),l.a.createElement("img",{className:"Persik",src:N.a,alt:"Persik The Cat"}))},$=a(28),q=a.n($),D=(a(161),a(162),void 0);Object(I.b)();(void 0).state={activePanel:"panel1"};var F=function(e){return l.a.createElement(E.a,{activePanel:D.state.activePanel},l.a.createElement(v.a,{id:"panel1"},l.a.createElement(h.a,null,"1 \u044d\u0442\u0430\u0436"),l.a.createElement(C.a,null,l.a.createElement(O.a,{style:{background:"#232323"}},l.a.createElement(k.a,{level:"overlay_primary",align:"center",before:l.a.createElement(q.a,null),onClick:function(){return D.setState({activePanel:"panel2"})}},"\u043f\u043e\u0434\u043d\u044f\u0442\u044c\u0441\u044f \u043d\u0430 2")))),l.a.createElement(v.a,{id:"panel2"},l.a.createElement(h.a,null,"2 \u044d\u0442\u0430\u0436"),l.a.createElement(C.a,null,l.a.createElement(O.a,{style:{background:"#232323"}},l.a.createElement(k.a,{level:"overlay_primary",align:"center",before:l.a.createElement(q.a,null),onClick:function(){return D.setState({activePanel:"panel3"})}},"\u043f\u043e\u0434\u043d\u044f\u0442\u0441\u044f \u043d\u0430 3")))),l.a.createElement(v.a,{id:"panel3"},l.a.createElement(h.a,null,"3 \u044d\u0442\u0430\u0436"),l.a.createElement(C.a,null,l.a.createElement(O.a,{style:{background:"#232323"}},l.a.createElement(k.a,{level:"overlay_primary",align:"center",before:l.a.createElement(q.a,null),onClick:function(){return D.setState({activePanel:"panel4"})}},"\u043f\u043e\u0434\u043d\u044f\u0442\u044c\u0441\u044f \u043d\u0430 4")))),l.a.createElement(v.a,{id:"panel4"},l.a.createElement(h.a,null,"4 \u044d\u0442\u0430\u0436"),l.a.createElement(C.a,null,l.a.createElement(O.a,{style:{background:"#232323"}},l.a.createElement(k.a,{level:"overlay_primary",align:"center",before:l.a.createElement(q.a,null),onClick:function(){return D.setState({activePanel:"panel1"})}},"\u0441\u043f\u0443\u0441\u0442\u0438\u0442\u044c\u0441\u044f \u043d\u0430 1")))))},H=function(){var e=Object(n.useState)("home"),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),i=Object(u.a)(r,2),m=i[0],p=i[1],d=Object(n.useState)(l.a.createElement(f.a,{size:"large"})),b=Object(u.a)(d,2),v=b[0],g=b[1];Object(n.useEffect)((function(){o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var l=document.createAttribute("scheme");l.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(l)}})),function(){var e;s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(o.a.sendPromise("VKWebAppGetUserInfo"));case 2:e=t.sent,p(e),g(null);case 5:case"end":return t.stop()}}))}()}),[]);var h=function(e){c(e.currentTarget.dataset.to)};return l.a.createElement(E.a,{activePanel:a,popout:v},l.a.createElement(A,{id:"home",fetchedUser:m,go:h}),l.a.createElement(G,{id:"persik",go:h}),l.a.createElement(F,{id:"app_test",go:h}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.send("VKWebAppInit"),r.a.render(l.a.createElement(H,null),document.getElementById("root"))},49:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"}},[[131,1,2]]]);
//# sourceMappingURL=main.4dac8abd.chunk.js.map