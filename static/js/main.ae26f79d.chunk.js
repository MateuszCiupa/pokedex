(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{107:function(e,t,n){e.exports=n(139)},139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(11),o=n.n(i),c=n(20),l=n(23),s=n.n(l),u=s()((function(e){return{container:{margin:e.spacing(2),marginTop:e.spacing(8)}}})),p=n(166),f=s()((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),margin:"auto",position:"relative",overflow:"hidden"},img:{margin:"auto",display:"block",width:96,height:115}}})),g=n(165),d=n(143),m=n(167),h=function(e){return"string"===typeof e&&e.length>0},E=function(e){return h(e)?"".concat(e[0].toUpperCase()).concat(e.slice(1,e.length)):"String"},b=n(174),v=s()((function(e){return{paper:{position:"absolute",padding:e.spacing(2),margin:"auto",height:"100%",width:"65%",left:0,top:0}}})),x=n(164),y=function(e){var t=e.fadeIn,n=e.setFadeIn,a=v();return r.a.createElement(x.a,{onClickAway:function(){t&&n(!1)}},r.a.createElement(b.a,{in:t,onEnter:function(){return n(!0)}},r.a.createElement(g.a,{className:a.paper},r.a.createElement(d.a,null,"elo"))))},k=function(e){var t,n=e.name,i=void 0===n?"Name":n,o=e.weight,l=void 0===o?"Weight":o,s=e.height,u=void 0===s?"Height":s,b=(e.pokeId,e.imgUrl),v=Object(a.useState)(!1),x=Object(c.a)(v,2),k=x[0],O=x[1],_=f();return r.a.createElement(p.a,{item:!0,xs:12,sm:4,xl:2},r.a.createElement(g.a,{className:_.paper},r.a.createElement(y,{fadeIn:k,setFadeIn:O}),r.a.createElement(p.a,{container:!0,spacing:2},r.a.createElement(p.a,{item:!0},r.a.createElement("img",{className:_.img,src:b,alt:"".concat(i," img")})),r.a.createElement(p.a,{item:!0,container:!0,xs:!0},r.a.createElement(p.a,{item:!0,container:!0,direction:"column",spacing:2},r.a.createElement(p.a,{item:!0},r.a.createElement(d.a,{variant:"subtitle1"},h(t=i)?t.split("-").map(E).join(" "):"String"),r.a.createElement(d.a,{variant:"body2",color:"textSecondary"},"Height ",u),r.a.createElement(d.a,{variant:"body2",color:"textSecondary"},"Weight ",l)),r.a.createElement(p.a,{item:!0,style:{alignSelf:"flex-end"}},r.a.createElement(m.a,{onClick:function(){return O((function(e){return!e}))}},"More")))))))},O=n(25),_="https://pokeapi.co/api/v2",j="".concat(_,"/pokemon"),C="".concat(j,"?offset=0&limit=1"),w=function(e,t){return fetch("".concat(j,"?offset=").concat(e,"&limit=").concat(t))},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.front_default,n=e.front_shiny,a=e.front_female,r=e.front_shiny_female;return t||(n||(a||(r||"".concat("/pokedex","/img/PokeUnknown.png"))))},I=Object(O.b)((function(e){return{pokeBuffer:e.pokeBuffer,stats:e.stats,filter:e.filter}}))((function(e){var t=e.pokeBuffer,n=e.stats.currentPage,a=e.filter,i=u();return r.a.createElement("div",{className:i.container},r.a.createElement(p.a,{container:!0,spacing:3},(a.active?a.results[n-1]:t[n-1]).map((function(e){var t=e.name,n=e.weight,a=e.height,i=e.id,o=e.sprites;return r.a.createElement(k,{key:t,name:t,imgUrl:T(o),weight:n,height:a,pokeId:i})}))))})),R=s()((function(e){return{root:{},fixedLeftBottom:{position:"fixed",bottom:e.spacing(4),left:e.spacing(4)},fixedRightBottom:{position:"fixed",bottom:e.spacing(4),right:e.spacing(4)},fixedMiddleBottom:{position:"fixed",bottom:e.spacing(4),left:"50%",transform:"translate(-50%, 0)"},fixedMiddleTop:{position:"fixed",top:e.spacing(2),left:"50%",transform:"translate(-50%, 0)"},pokeGrid:{marginTop:e.spacing(4)},fixedTop:{position:"fixed",top:e.spacing(2)},extendedIcon:{marginRight:e.spacing(1)}}})),S=n(31),L=n(30),F=n.n(L),P=n(51),B="pokedex/errors/RECEIVE_ERROR",N="pokedex/errors/CLEAR_ERROR",U=function(e){return{type:B,message:e}},A=n(19),M="pokedex/stats/SET_POKE_COUNT",G="pokedex/stats/INCR_PAGE",V="pokedex/stats/DECR_PAGE",D="pokedex/stats/SET_LEFT_LIMIT",z={pokeCount:void 0,pageCount:1,currentPage:1,leftLimit:!0,rightLimit:!1},H=function(e){return{type:"pokedex/stats/SET_CURRENT_PAGE",payload:e}},W="pokedex/pokeBuffer/RECEIVE_BUFFER_RESULT",J="pokedex/pokeBuffer/SET_BUFFER",X=function(e){return{type:J,payload:e}},K=function(e,t){return function(){var n=Object(P.a)(F.a.mark((function n(a){var r,i,o,c,l,s,u,p,f,g,d,m,h;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w(e,t);case 3:if((r=n.sent).ok){n.next=6;break}throw new Error(r.status);case 6:return n.next=8,r.json();case 8:i=n.sent,o=i.results,c=0;case 11:if(!(c<o.length)){n.next=33;break}return n.next=14,fetch(o[c].url);case 14:if((r=n.sent).ok){n.next=17;break}throw new Error(r.status);case 17:return n.next=19,r.json();case 19:l=n.sent,s=l.name,u=l.weight,p=l.height,f=l.abilities,g=l.base_experience,d=l.sprites,m=l.types,h=l.id,a({type:W,payload:{name:s,weight:u,height:p,abilities:f,base_experience:g,sprites:d,types:m,id:h},index:c});case 30:c++,n.next=11;break;case 33:n.next=39;break;case 35:n.prev=35,n.t0=n.catch(0),console.log(n.t0),a(U("Problem while loading normal"));case 39:case"end":return n.stop()}}),n,null,[[0,35]])})));return function(e){return n.apply(this,arguments)}}()},Q=n(173),Y=n(175),q=n(171),Z=n(98),$=n.n(Z),ee=n(172),te=n(168),ne=n(169),ae=n(170),re=n(52),ie=function(e,t){var n=Object(c.a)(t,2),a=n[0],r=n[1];return a?r?e>=a&&e<=r:e>=a:!r||e<=r},oe=function(e,t){if(!t.active)return!1;var n=e.height,a=e.weight,r=e.types,i=t.height,o=t.weight,c=t.type;if(i&&!ie(n,i)||o&&!ie(a,o))return!0;if(c){var l,s=Object(re.a)(r);try{for(s.s();!(l=s.n()).done;){if(l.value.type.name!==c)return!0}}catch(u){s.e(u)}finally{s.f()}}return!1},ce=function(e,t){if(!e||!t)return!1;var n=Object(c.a)(e,2),a=n[0],r=n[1],i=Object(c.a)(t,2),o=i[0],l=i[1];return a===o&&r===l},le="pokedex/filter/CLEAR_FILTER",se="pokedex/filter/SET_FIRST_ID",ue=function(){return function(e,t){t().filter.active&&(e(H(1)),e({type:le}))}},pe=function(){return function(e,t){e({type:"pokedex/filter/INIT_FILTER_BUFFER"});var n,a=t().pokeBuffer,r=Object(re.a)(a);try{for(r.s();!(n=r.n()).done;){var i,o=n.value,c=Object(re.a)(o);try{for(c.s();!(i=c.n()).done;){var l=i.value;e({type:"pokedex/filter/RECEIVE_FILTER_RESULT",payload:l})}}catch(s){c.e(s)}finally{c.f()}}}catch(s){r.e(s)}finally{r.f()}}},fe={active:!1,firstId:null,type:null,weight:null,height:null,results:[[]],pageCount:1},ge=n(176),de=Object(O.b)((function(e){return{filter:e.filter}}),(function(e){return{setFilterActive:function(t){return e(function(e){var t=e.weight,n=e.height,a=e.type;return function(e,r){var i=r().filter;(t&&!ce(t,i.weight)||n&&!ce(n,i.height)||a)&&(e({type:"pokedex/filter/SET_FILTER_ACTIVE",payload:{weight:t,height:n,type:a}}),e(H(1)),e(pe()))}}(t))},clearFilter:function(){return e(ue())}}}))((function(e){var t=e.open,n=e.setOpen,i=e.filter,o=e.clearFilter,l=e.setFilterActive,s=Object(a.useState)(null),u=Object(c.a)(s,2),p=u[0],f=u[1],g=Object(a.useState)(null),h=Object(c.a)(g,2),E=h[0],b=h[1];return r.a.createElement(ee.a,{open:t,onClose:function(){return n(!1)},onEnter:function(){f(i.weight?i.weight:[1,9999]),b(i.height?i.height:[1,145])},disableScrollLock:!0,fullWidth:!0},r.a.createElement(te.a,null,"Filter Pok\xe9mons"),r.a.createElement(ne.a,null,r.a.createElement(d.a,{gutterBottom:!0},"Height"),r.a.createElement(ge.a,{min:1,max:145,value:E,onChange:function(e,t){return b(t)},valueLabelDisplay:"auto"}),r.a.createElement(d.a,{gutterBottom:!0},"Weight"),r.a.createElement(ge.a,{min:1,max:9999,value:p,onChange:function(e,t){return f(t)},valueLabelDisplay:"auto"})),r.a.createElement(ae.a,null,r.a.createElement(m.a,{onClick:function(){n(!1),o()}},"Clear"),r.a.createElement(m.a,{color:"primary",onClick:function(){n(!1),l({height:E,weight:p})}},"Apply")))})),me=Object(O.b)((function(e){return{stats:e.stats,loading:e.loading,filter:e.filter}}),(function(e){return{startLoading:function(){return e(function(){var e=Object(P.a)(F.a.mark((function e(t){var n,a,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(C);case 3:if((n=e.sent).ok){e.next=6;break}throw new Error(n.status);case 6:return e.next=8,n.json();case 8:a=e.sent,r=a.count,t({type:M,payload:r}),t(X(Math.ceil(r/36))),t(K(0,r)),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0),t(U("Problem while buffering"));case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}())},setCurrentPage:function(t){return e(H(t))}}}))((function(e){var t=e.stats,n=t.pageCount,i=t.currentPage,o=e.startLoading,l=e.setCurrentPage,s=e.filter;Object(a.useEffect)((function(){o()}),[o]);var u=Object(a.useState)(!1),p=Object(c.a)(u,2),f=p[0],g=p[1],d=function(e,t){l(t)},m=R();return r.a.createElement("div",null,r.a.createElement(q.a,{variant:"extended",className:m.fixedRightBottom,onClick:function(){return g(!0)},color:"primary",style:{zIndex:1}},r.a.createElement($.a,{className:m.extendedIcon}),"Filter"),r.a.createElement(de,{open:f,setOpen:g}),r.a.createElement(Y.a,{display:{xs:"block",sm:"none"}},r.a.createElement(Q.a,{page:i,count:s.active?s.pageCount:n,size:"small",onChange:d,siblingCount:0,boundaryCount:1,color:"primary",className:m.fixedMiddleTop,style:{zIndex:1}})),r.a.createElement(Y.a,{display:{xs:"none",sm:"block"}},r.a.createElement(Q.a,{page:i,count:s.active?s.pageCount:n,size:"large",onChange:d,siblingCount:1,boundaryCount:2,color:"primary",className:m.fixedMiddleTop,style:{zIndex:1}})),r.a.createElement(I,null))})),he=n(77),Ee=n.n(he)()({palette:{}}),be=n(163),ve=n(29),xe=n(99),ye="pokedex/types/REQUEST_TYPES",ke=Object(ve.c)({error:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0,t=e.type,n=e.message;switch(t){case B:return n;case N:default:return""}},types:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case ye:return a;default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case le:return Object(A.a)({},e,{active:!1,weight:null,height:null,type:null,results:[[]],pageCount:1});case se:return Object(A.a)({},e,{firstId:a});case"pokedex/filter/INIT_FILTER_BUFFER":return Object(A.a)({},e,{pageCount:1,results:[[]]});case"pokedex/filter/SET_FILTER_ACTIVE":return Object(A.a)({},e,{},a,{active:!0});case W:case"pokedex/filter/RECEIVE_FILTER_RESULT":if(!e.active||oe(a,e))return e;var r=e.results[e.results.length-1].length;return r<36?Object(A.a)({},e,{results:[].concat(Object(S.a)(e.results.slice(0,e.results.length-1)),[[].concat(Object(S.a)(e.results[e.results.length-1]),[a])])}):Object(A.a)({},e,{pageCount:e.pageCount+1,results:[].concat(Object(S.a)(e.results),[[a]])});default:return e}},stats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload,r=t.index;switch(n){case M:return Object(A.a)({},e,{pokeCount:a});case G:return Object(A.a)({},e,{currentPage:e.currentPage+1});case V:return Object(A.a)({},e,{currentPage:e.currentPage-1});case"pokedex/stats/SET_RIGHT_LIMIT":return Object(A.a)({},e,{rightLimit:!!a});case D:return Object(A.a)({},e,{leftLimit:!!a});case"pokedex/stats/SET_CURRENT_PAGE":return a<=0||a>e.pageCount?e:Object(A.a)({},e,{currentPage:a});case W:var i=Math.ceil(r/36);return e.pageCount<i?Object(A.a)({},e,{pageCount:i}):e;default:return e}},pokeBuffer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[]],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload,r=t.index;switch(n){case J:return new Array(a).fill([]);case W:var i=Math.floor(r/36);return[].concat(Object(S.a)(e.slice(0,i)),[[].concat(Object(S.a)(e[i]),[a])],Object(S.a)(e.slice(i+1,e.length)));default:return e}}}),Oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ve.d,_e=Object(ve.e)(ke,Oe(Object(ve.a)(xe.a)));o.a.render(r.a.createElement(be.a,{theme:Ee},r.a.createElement(O.a,{store:_e},r.a.createElement(me,null))),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.ae26f79d.chunk.js.map