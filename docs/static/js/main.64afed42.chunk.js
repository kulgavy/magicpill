(this.webpackJsonpmagicpill=this.webpackJsonpmagicpill||[]).push([[0],{21:function(e){e.exports=JSON.parse('{"title":"Frontend Template"}')},22:function(e){e.exports=JSON.parse('{"title":"\u0422\u0435\u043c\u043f\u043b\u0435\u0439\u0442 \u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0430"}')},32:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r,c=n(1),i=n.n(c),s=n(10),l=n.n(s),a=(n(32),n(18).a),o=n(0),u=a("text-white"),b=a("text-gray-300"),m=a(u,"text-3xl","md:text-6xl","font-bold","text-center","mb-3"),p=function(e){var t=e.children;return Object(o.jsx)("p",{className:m,children:t})},d=a(u,"text-xl","md:text-2xl","font-bold","text-center","mb-3"),h=function(e){var t=e.children;return Object(o.jsx)("p",{className:d,children:t})},j=a(b,"mb-2"),x=function(e){var t=e.children;return Object(o.jsx)("p",{className:j,children:t})};function g(e){switch(e){case r.en:return"\ud83c\uddec\ud83c\udde7";case r.ru:return"\ud83c\uddf7\ud83c\uddfa"}}!function(e){e.en="en",e.ru="ru"}(r||(r={}));var f=r,O=n(55),v=n(23),w=n(19),N=n(20),C=n(2),y=n(7),k=n(9),M=n.n(k),P=n(13),z=new y.StorageAdapter({read:function(){var e=Object(P.a)(M.a.mark((function e(t){var n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem(t),e.abrupt("return",null===n?void 0:n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),write:function(){var e=Object(P.a)(M.a.mark((function e(t,n){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem(t,n);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}),S=function(){function e(){Object(w.a)(this,e),this.language=f.en,Object(C.makeAutoObservable)(this)}return Object(N.a)(e,[{key:"isSynchronized",get:function(){return Object(y.isSynchronized)(this)}}]),e}(),I=Object(y.persistence)({name:"AppStore",properties:["language"],adapter:z})(new S),J={en:n(21),ru:n(22)},_=Object(v.a)((function(e){var t=e.children;return Object(o.jsx)(O.a,{locale:I.language,defaultLocale:f.en,messages:J[I.language],children:t})})),A=a("flex","flex-row","items-center","justify-center","mb-4"),B=a("py-2","px-4","focus:outline-none","mx-1","text-4xl","rounded","hover:bg-green-button-start");function E(){return Object(o.jsx)("div",{className:A,children:Object.values(f).map((function(e){return Object(o.jsx)("button",{className:B,onClick:function(){I.language=e},children:g(e)},e)}))})}var F=a("container","mx-auto","pb-10","max-w-2xl","p-4","sm:px-8"),L=function(e){var t=e.children;return Object(o.jsx)("div",{className:F,children:t})},T=a("text-white","text-center"),q=a("text-green-source");var D,G,H=function(){return Object(o.jsxs)("p",{className:T,children:["\u0421\u043f\u0430\u0441\u0438\u0431\u043e, \u0447\u0442\u043e \u0434\u043e\u0447\u0438\u0442\u0430\u043b\u0438 \u0434\u043e \u043a\u043e\u043d\u0446\u0430! \u041a\u043e\u0434 \u044d\u0442\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430"," ",Object(o.jsx)("a",{className:q,target:"_blank",rel:"noreferrer",href:"https://github.com/backmeupplz/magicpill",children:"\u043e\u0442\u043a\u0440\u044b\u0442"}),". \u0421\u0430\u0439\u0442 \u0441\u043e\u0437\u0434\u0430\u043d"," ",Object(o.jsx)("a",{className:q,target:"_blank",rel:"noreferrer",href:"https://t.me/borodutch",children:"@borodutch"})," ","\u0438"," ",Object(o.jsx)("a",{className:q,target:"_blank",rel:"noreferrer",href:"https://t.me/purplesoop",children:"@purplesoop"})," ","\u0441 \u043b\u044e\u0431\u043e\u0432\u044c\u044e."]})},K=n(24),Q=n(25),R=a("border","p-4","min-w-full","rounded","border-green-source","text-green-source","font-bold","focus:outline-none","bg-gradient-to-b","from-green-button-start","to-green-button-end","hover:text-white","hover:bg-green-button-start"),U=function(e){var t=e.onClick;return Object(o.jsx)("button",{className:R,onClick:t,children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})},V=a("rounded","my-4","bg-gradient-to-br","p-6"),W=a("flex","flex-row","items-start","justify-between","mb-4"),X=a("text-2xl","md:text-4xl","font-bold","text-bronze-full","mb-2"),Y=a("text-xl","md:text-2xl","font-bold","text-white"),Z=a("text-gray-300"),$=a("w-20"),ee=a("text-green-source"),te=a("text-white"),ne=a("list-inside","list-disc","my-6"),re=function(e){var t=e.tier,n=Object(c.useState)(!1),r=Object(Q.a)(n,2),i=r[0],s=r[1];return Object(o.jsxs)("div",{className:a.apply(void 0,[V].concat(Object(K.a)(t.gradient))),children:[Object(o.jsxs)("div",{className:W,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:X,children:t.title}),Object(o.jsx)("p",{className:Z,children:"\u0426\u0415\u041d\u0410:"})]}),Object(o.jsx)("img",{className:$,src:"images/".concat(t.image,".png"),alt:"avatar"})]}),Object(o.jsx)("p",{className:Y,children:t.price}),Object(o.jsx)("ul",{className:ne,children:t.benefits.map((function(e){return Object(o.jsxs)("li",{className:te,children:[e.title," ",Object(o.jsx)("a",{className:ee,target:"_blank",rel:"noreferrer",href:e.source,children:"\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a"})]},e.title)}))}),i?Object(o.jsx)("p",{className:te,children:"\u041d\u0430 \u0441\u0430\u043c\u043e\u043c \u0434\u0435\u043b\u0435, \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430! \u041f\u0440\u043e\u0441\u0442\u043e \u043e\u0442\u043a\u0430\u0436\u0438\u0442\u0435\u0441\u044c \u043e\u0442 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432, \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445 \u0432\u044b\u0448\u0435, \u0438 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0432\u0441\u0435 \u043e\u0431\u0435\u0449\u0430\u043d\u043d\u044b\u0435 \u0431\u0435\u043d\u0435\u0444\u0438\u0442\u044b!"}):Object(o.jsx)(U,{onClick:function(){s(!0)}})]})},ce=n(4);!function(e){e.bronze="bronze",e.silver="silver",e.gold="gold",e.platinum="platinum",e.diamond="diamond"}(G||(G={}));var ie=(D={},Object(ce.a)(D,G.bronze,{title:"\u0411\u0440\u043e\u043d\u0437\u0430",price:"\u041e\u0442\u043a\u0430\u0437 \u043e\u0442 \u043f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u043e\u0433\u043e \u043c\u044f\u0441\u0430 (\u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u043f\u0442\u0438\u0446\u044b)",image:G.bronze,gradient:["from-bronze-semifull","to-bronze-semitransparent"],benefits:[{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0440\u0438\u0441\u043a\u0430 \u0438\u0448\u0435\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0431\u043e\u043b\u0435\u0437\u043d\u0438 \u0441\u0435\u0440\u0434\u0446\u0430 \u043d\u0430 84%",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3483430"},{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0440\u0438\u0441\u043a\u0430 \u0434\u0438\u0430\u0431\u0435\u0442\u0430 II \u0442\u0438\u043f\u0430 \u043d\u0430 51%",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3483430"},{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0440\u0438\u0441\u043a\u0430 \u043a\u043e\u043b\u043e\u0440\u0435\u043a\u0442\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u043a\u0430 \u043d\u0430 35%",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2661797/ "}]}),Object(ce.a)(D,G.silver,{title:"\u0421\u0435\u0440\u0435\u0431\u0440\u043e",price:"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c + \u043e\u0442\u043a\u0430\u0437 \u043e\u0442 \u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e \u043c\u044f\u0441\u0430",image:G.silver,gradient:["from-silver-semifull","to-silver-semitransparent"],benefits:[{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0440\u0438\u0441\u043a\u0430 \u043e\u0431\u0449\u0435\u0439 \u0441\u043c\u0435\u0440\u0442\u043d\u043e\u0441\u0442\u0438 \u043d\u0430 21%",source:"https://pubmed.ncbi.nlm.nih.gov/27557655"},{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0440\u0438\u0441\u043a\u0430 \u0441\u043c\u0435\u0440\u0442\u043d\u043e\u0441\u0442\u0438 \u043e\u0442 \u0441\u0435\u0440\u0434\u0435\u0447\u043d\u043e-\u0441\u043e\u0441\u0443\u0434\u0438\u0441\u0442\u044b\u0445 \u0437\u0430\u0431\u043e\u043b\u0435\u0432\u0430\u043d\u0438\u0439 \u043d\u0430 29%",source:"https://pubmed.ncbi.nlm.nih.gov/27557655"},{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0440\u0438\u0441\u043a\u0430 \u0434\u0438\u0430\u0431\u0435\u0442\u0430 \u043d\u0430 32%",source:"https://pubmed.ncbi.nlm.nih.gov/27597529"},{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0440\u0438\u0441\u043a\u0430 \u0441\u043c\u0435\u0440\u0442\u0438 \u043e\u0442 \u0441\u0435\u0440\u0434\u0435\u0447\u043d\u043e-\u0441\u043e\u0441\u0443\u0434\u0438\u0441\u0442\u044b\u0445 \u0437\u0430\u0431\u043e\u043b\u0435\u0432\u0430\u043d\u0438\u0439 \u043d\u0430 15%",source:"https://pubmed.ncbi.nlm.nih.gov/27597529"},{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0440\u0438\u0441\u043a\u0430 \u0438\u043d\u0441\u0443\u043b\u044c\u0442\u0430 \u043d\u0430 11%",source:"https://pubmed.ncbi.nlm.nih.gov/27597529"},{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0440\u0438\u0441\u043a\u0430 \u0440\u0430\u043a\u0430 \u0433\u0440\u0443\u0434\u0438 \u043d\u0430 11%",source:"https://pubmed.ncbi.nlm.nih.gov/27597529"},{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0440\u0438\u0441\u043a\u0430 \u0440\u0430\u043a\u0430 \u043f\u0440\u043e\u0441\u0442\u0430\u0442\u044b \u043d\u0430 19%",source:"https://pubmed.ncbi.nlm.nih.gov/27597529"}]}),Object(ce.a)(D,G.gold,{title:"\u0417\u043e\u043b\u043e\u0442\u043e",price:"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c + \u043e\u0442\u043a\u0430\u0437 \u043e\u0442 \u043c\u044f\u0441\u0430 \u043f\u0442\u0438\u0446\u044b (\u043f\u0435\u0441\u043a\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u0442\u0432\u043e)",image:G.gold,gradient:["from-gold-semifull","to-gold-semitransparent"],benefits:[{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0418\u041c\u0422 \u043d\u0430 2.5 \u043a\u0433/\u043c^2",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5216044"},{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0440\u0438\u0441\u043a\u0430 \u0440\u0430\u043a\u0430 \u043d\u0430 16%",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3565018"},{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0440\u0438\u0441\u043a\u0430 \u0434\u0438\u0430\u0431\u0435\u0442\u0430 \u043d\u0430 38%",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5216044"}]}),Object(ce.a)(D,G.platinum,{title:"\u041f\u043b\u0430\u0442\u0438\u043d\u0430",price:"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c + \u043e\u0442\u043a\u0430\u0437 \u043e\u0442 \u0440\u044b\u0431\u044b \u0438 \u043c\u043e\u0440\u0435\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 (\u043b\u0430\u043a\u0442\u043e, \u043b\u0430\u043a\u0442\u043e-\u043e\u0432\u043e \u0438 \u043e\u0432\u043e \u0432\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u0442\u0432\u043e)",image:G.platinum,gradient:["from-platinum-semifull","to-platinum-semitransparent"],benefits:[{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0418\u041c\u0422 \u043d\u0430 3 \u043a\u0433/\u043c^2",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5216044"},{title:"C\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0440\u0438\u0441\u043a\u0430 \u0440\u0430\u043a\u0430 \u043d\u0430 9%",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3565018"},{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0440\u0438\u0441\u043a\u0430 \u0441\u043c\u0435\u0440\u0442\u0438 \u043e\u0442 \u0438\u0448\u0435\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0431\u043e\u043b\u0435\u0437\u043d\u0438 \u0441\u0435\u0440\u0434\u0446\u0430 \u043d\u0430 24%",source:"https://pubmed.ncbi.nlm.nih.gov/10479225"},{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0440\u0438\u0441\u043a\u0430 \u0434\u0438\u0430\u0431\u0435\u0442\u0430 \u043d\u0430 48%",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5216044"}]}),Object(ce.a)(D,G.diamond,{title:"\u0411\u0440\u0438\u043b\u043b\u0438\u0430\u043d\u0442",price:"\u041e\u0442\u043a\u0430\u0437 \u043e\u0442 \u0432\u0441\u0435\u0445 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 \u0436\u0438\u0432\u043e\u0442\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f",image:G.diamond,gradient:["from-diamond-semifull","to-diamond-semitransparent"],benefits:[{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0440\u0438\u0441\u043a\u0430 \u0434\u0438\u0430\u0431\u0435\u0442\u0430 \u043d\u0430 74%",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5216044"},{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0440\u0438\u0441\u043a\u0430 \u0440\u0430\u043a\u0430 \u043d\u0430 15%",source:"https://pubmed.ncbi.nlm.nih.gov/26853923"},{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0418\u041c\u0422 \u043d\u0430 5 \u043a\u0433/\u043c^2",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5216044"},{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0440\u0438\u0441\u043a\u0430 \u0441\u043c\u0435\u0440\u0442\u0438 \u043e\u0442 \u0441\u0435\u0440\u0434\u0435\u0447\u043d\u043e-\u0441\u043e\u0441\u0443\u0434\u0438\u0441\u0442\u044b\u0445 \u0437\u0430\u0431\u043e\u043b\u0435\u0432\u0430\u043d\u0438\u0439 \u043d\u0430 20%",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6089671"},{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u043e\u0431\u0449\u0435\u0433\u043e \u0432\u043e\u0441\u043f\u0430\u043b\u0435\u043d\u0438\u044f \u043d\u0430 46%",source:"https://pubmed.ncbi.nlm.nih.gov/33303765"},{title:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0440\u0438\u0441\u043a\u0430 \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u043d\u043e\u0433\u043e \u0434\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0430 67%",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7692016"}]}),D);var se=function(){return Object(o.jsx)("div",{children:Object.values(ie).map((function(e){return Object(o.jsx)(re,{tier:e},e.title)}))})},le=a("my-6"),ae=a("my-12"),oe=function(){return Object(o.jsx)(_,{children:Object(o.jsxs)(L,{children:[Object(o.jsx)(E,{}),Object(o.jsx)(p,{children:"\u041c\u0430\u0433\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0438\u043b\u044e\u043b\u044f"}),Object(o.jsx)(h,{children:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044c\u0442\u0435, \u0447\u0442\u043e \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u043e, \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0440\u0430\u0437 \u0432 \u0434\u0435\u043d\u044c, \u0432\u044b \u0441\u0438\u043b\u044c\u043d\u043e \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u0435 \u0440\u0438\u0441\u043a\u0438 \u0443\u043c\u0435\u0440\u0435\u0442\u044c"}),Object(o.jsxs)("div",{className:le,children:[Object(o.jsx)(x,{children:"\u0410 \u0442\u0435\u043f\u0435\u0440\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044c\u0442\u0435, \u0447\u0442\u043e \u044d\u0442\u043e \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u043e \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0432\u0441\u0435\u043c! \u0417\u0432\u0443\u0447\u0438\u0442 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0445\u043e\u0440\u043e\u0448\u043e, \u0447\u0442\u043e\u0431\u044b \u0431\u044b\u0442\u044c \u043f\u0440\u0430\u0432\u0434\u043e\u0439."}),Object(o.jsx)(x,{children:"\u041e\u0434\u043d\u0430\u043a\u043e \u043d\u0430\u0443\u043a\u0430 \u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u0430. \u041d\u0435\u0442 \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u0441\u043e\u043c\u043d\u0435\u043d\u0438\u0439 \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u044d\u0442\u043e \u043c\u0430\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u043e \u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u041f\u0440\u043e\u0441\u0442\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0434\u0438\u0435\u0442\u044b \u043c\u043e\u0433\u0443\u0442 \u0441\u043f\u0430\u0441\u0442\u0438 \u0432\u0430\u0441 \u0438 \u0432\u0430\u0448\u0438\u0445 \u0431\u043b\u0438\u0437\u043a\u0438\u0445 \u043e\u0442 \u0442\u043e\u043f-10 \u0437\u0430\u0431\u043e\u043b\u0435\u0432\u0430\u043d\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0443\u0431\u0438\u0432\u0430\u044e\u0442 \u043b\u044e\u0434\u0435\u0439 \u043f\u043e \u0432\u0441\u0435\u043c\u0443 \u043c\u0438\u0440\u0443."}),Object(o.jsx)(x,{children:'\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 "\u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443 \u043d\u0430 \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435" \u043d\u0438\u0436\u0435, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0434\u043e\u0439\u0434\u0435\u0442 \u0432\u0430\u0448\u0435\u0439 \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u043e\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438 \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e. \u0427\u0435\u043c \u044d\u043b\u0438\u0442\u043d\u0435\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430, \u0442\u0435\u043c \u043c\u0435\u043d\u044c\u0448\u0435 \u0440\u0438\u0441\u043a\u0438 \u0443\u043c\u0435\u0440\u0435\u0442\u044c.'}),Object(o.jsx)(x,{children:"\u041d\u0435 \u0432\u0435\u0440\u044c\u0442\u0435 \u043d\u0430 \u0441\u043b\u043e\u0432\u043e \u043d\u0438\u043a\u043e\u043c\u0443 \u2014 \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0439\u0442\u0435 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e."}),Object(o.jsx)(x,{children:"\u041f\u043e\u043c\u043d\u0438\u0442\u0435, \u043a\u0430\u043a \u0442\u0430\u0431\u0430\u0447\u043d\u0430\u044f \u0438\u043d\u0434\u0443\u0441\u0442\u0440\u0438\u044f \u043f\u044b\u0442\u0430\u043b\u0430\u0441\u044c \u0434\u043e\u043a\u0430\u0437\u0430\u0442\u044c, \u0447\u0442\u043e \u043a\u0443\u0440\u0435\u043d\u0438\u0435 \u2014 \u043f\u043e\u043b\u0435\u0437\u043d\u043e? \u041c\u044b \u043d\u0430\u0445\u043e\u0434\u0438\u043c\u0441\u044f \u0442\u043e\u0447\u043d\u043e \u0432 \u0442\u043e\u0439 \u0436\u0435 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438 \u0441\u0435\u0439\u0447\u0430\u0441. \u041d\u0430\u0443\u043a\u0430 \u0443\u0436\u0435 \u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u0430 \u043e \u0432\u0440\u0435\u0434\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432, \u043d\u043e \u0434\u043e \u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u044d\u0442\u043e \u0435\u0449\u0435 \u043d\u0435 \u0434\u043e\u0448\u043b\u043e."})]}),Object(o.jsx)(h,{children:"\u041f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0435 \u043d\u0438\u0436\u0435 \u0431\u0435\u043d\u0435\u0444\u0438\u0442\u044b \u043d\u0430\u0443\u0447\u043d\u043e \u0434\u043e\u043a\u0430\u0437\u0430\u043d\u044b, \u043c\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u0435 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f"}),Object(o.jsx)(p,{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0438 \u043d\u0430 \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435"}),Object(o.jsx)("div",{className:ae,children:Object(o.jsx)(se,{})}),Object(o.jsx)(H,{})]})})};l.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(oe,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.64afed42.chunk.js.map