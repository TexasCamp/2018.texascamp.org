(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"4sg1":function(e,n,t){"use strict";var a=t("h4VS"),r=t("lTCR"),i=t.n(r),l=t("0dmp"),s=t("wd/R"),u=t.n(s),o=t("KxFL");function c(){var e=Object(a.a)(['\n  query allNews {\n    nodeQuery(offset: 0, limit: 999, filter: { type: "news" }) {\n      entities {\n        id: entityId\n        ...NewsTeaserFragment\n      }\n    }\n  }\n\n  fragment NewsTeaserFragment on NodeNews {\n    entityId\n    title\n    body {\n      value\n      summary\n    }\n    fieldNewsDate {\n      value\n    }\n  }\n']);return c=function(){return e},e}var d=i()(c()),m=function(e){return e.map((function(e){return{title:e.title,body:e.body.value,summary:e.body.summary,publishedDate:e.fieldNewsDate&&u.a.utc(e.fieldNewsDate.value),urlString:Object(o.g)(e.title),id:e.entityId}}))},w=Object(l.a)(d,{props:function(e){var n=e.data,t=n.nodeQuery,a=(t=void 0===t?{}:t).entities,r=void 0===a?[]:a;return{newsList:n.loading?[]:m(r)}}});n.a=w},H2Aw:function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),i=t("8Kt/"),l=t.n(i),s=r.a.createElement;n.a=function(e){var n,t=e.title;return n=t?"Texas Camp 2018 - ".concat(t):"Texas Camp 2018",s(l.a,null,s("title",null,n))}},Ioif:function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),i=t("YFqc"),l=t.n(i),s=t("wd/R"),u=t.n(s),o=r.a.createElement,c=function(e){var n=e.children;return o("div",{dangerouslySetInnerHTML:{__html:n}})},d=t("KxFL"),m=t("Gyyi"),w=t.n(m),f=r.a.createElement;n.a=function(e){var n=e.newsTeaser,t=e.hompageNews,a=e.hompageNewsSecondColumn,r=n.body.replace(/(<([^>]+)>)/gi,""),i=r.length>200?"".concat(r.substr(0,200),"..."):r,s=n.summary?n.summary:i,o=n.publishedDate?Object(d.b)(u.a.utc(n.publishedDate)):"",m=t?w.a.hompageNews:w.a.newOverview,v=a?w.a.secondColumn:null;return f("div",{className:"".concat(w.a.teaserWrapper," ").concat(m," ").concat(v)},f(l.a,{href:"/news/[newsTitle]",as:"/news/".concat(n.urlString)},f("a",null,f("div",{className:w.a.date},o),f("h2",null,n.title),f(c,null,s),f("div",{className:w.a.moreLink},"More"))))}},TgFc:function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return w}));var a=t("q1tI"),r=t.n(a),i=(t("XfWh"),t("Sk6F"),t("H2Aw")),l=t("Ogzj"),s=t("/4k+"),u=t("Fl18"),o=t("Ioif"),c=(t("4sg1"),t("YKfZ")),d=t.n(c),m=r.a.createElement,w=!0;n.default=function(e){var n=e.loading,t=e.newsList;return!n&&m("div",null,m(s.a,null),m(i.a,{title:"News"}),m("div",{className:d.a.contentWrapper},m(l.a,null),m("div",{className:d.a.content},m("h1",{className:d.a.title},"News"),m("div",{className:d.a.detail},m("ul",null,t.sort((function(e,n){return n.publishedDate.format("X")-e.publishedDate.format("X")})).map((function(e){return m(o.a,{key:e.id,newsTeaser:e})})))),m(u.a,null))))||m("div",null,"loading")}},vDAS:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return t("TgFc")}])}},[["vDAS",1,0,2,4,5,6,3]]]);