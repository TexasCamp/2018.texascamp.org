(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"4sg1":function(e,n,t){"use strict";var a=t("h4VS"),l=t("lTCR"),i=t.n(l),s=t("0dmp"),r=t("wd/R"),o=t.n(r),u=t("KxFL");function c(){var e=Object(a.a)(['\n  query allNews {\n    nodeQuery(offset: 0, limit: 999, filter: { type: "news" }) {\n      entities {\n        id: entityId\n        ...NewsTeaserFragment\n      }\n    }\n  }\n\n  fragment NewsTeaserFragment on NodeNews {\n    entityId\n    title\n    body {\n      value\n      summary\n    }\n    fieldNewsDate {\n      value\n    }\n  }\n']);return c=function(){return e},e}var d=i()(c()),m=function(e){return e.map((function(e){return{title:e.title,body:e.body.value,summary:e.body.summary,publishedDate:e.fieldNewsDate&&o.a.utc(e.fieldNewsDate.value),urlString:Object(u.g)(e.title),id:e.entityId}}))},p=Object(s.a)(d,{props:function(e){var n=e.data,t=n.nodeQuery,a=(t=void 0===t?{}:t).entities,l=void 0===a?[]:a;return{newsList:n.loading?[]:m(l)}}});n.a=p},BV52:function(e,n,t){"use strict";var a=t("q1tI"),l=t.n(a),i=t("YFqc"),s=t.n(i),r=t("H2Aw"),o=t("Ogzj"),u=t("/4k+"),c=t("Fl18"),d=t("EDo9"),m=t.n(d),p=l.a.createElement,f=function(e){var n=e.msg,t=e.linkText,a=e.linkUrl;return p("div",{className:m.a.Wrapper},p(r.a,{title:"Page not found"}),p(u.a,null),p("div",{className:m.a.contentWrapper},p(o.a,null),p("div",{className:m.a.content},p("div",{className:m.a.detail},p("div",null,p("h1",null,"Page not found"),p("p",null,n),p("p",null,p(s.a,{href:a},p("a",null,t))))),p(c.a,null))))};f.defaultProps={msg:"These aren't the droids you're looking for.",linkUrl:"/",linkText:"Back to the front page"},n.a=f},EDo9:function(e,n,t){e.exports={contentWrapper:"components-NotFound-styles__contentWrapper--BSKz1",content:"components-NotFound-styles__content--3dHuV shared-css-compose__contentWrapper--1QUeL",detail:"components-NotFound-styles__detail--31-rH shared-css-compose__contentArea--3lHpT"}},H2Aw:function(e,n,t){"use strict";var a=t("q1tI"),l=t.n(a),i=t("8Kt/"),s=t.n(i),r=l.a.createElement;n.a=function(e){var n,t=e.title;return n=t?"Texas Camp 2018 - ".concat(t):"Texas Camp 2018",r(s.a,null,r("title",null,n))}},f6P9:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),i=t("XfWh"),s=t.n(i),r=t("nOHt"),o=t("Sk6F"),u=t("H2Aw"),c=t("Ogzj"),d=t("/4k+"),m=t("Fl18"),p=t("BV52"),f=t("4sg1"),v=t("KxFL"),w=t("Yqdq"),N=t.n(w),y=l.a.createElement,b=function(e){var n=e.newsItem,t=n.publishedDate?Object(v.b)(n.publishedDate):"";return y("div",null,y(u.a,{title:n.title}),y(d.a,null),y("div",{className:N.a.contentWrapper},y(c.a,null),y("div",{className:N.a.content},y("h1",{className:N.a.title},n.title),y("div",{className:N.a.detail},y("div",{className:N.a.section},y("div",{className:N.a.field},y("div",{className:N.a.fieldLabel},"Published"),y("div",null,t))),y("div",{className:N.a.mainContent},Object(v.a)(n.body))),y(m.a,null))))};n.default=s()(Object(o.a)(),f.a,r.withRouter)((function(e){var n=e.router,t=e.loading,a=e.newsList;if(!t){var l=n.query.newsTitle,i=a.find((function(e){return e.urlString===l}));return i?y(b,{newsItem:i}):y(p.a,{linkText:"Back to more news",linkUrl:"/News"})}return null}))},xRcr:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news/[newsTitle]",function(){return t("f6P9")}])}},[["xRcr",1,0,2,4,5,6,3]]]);