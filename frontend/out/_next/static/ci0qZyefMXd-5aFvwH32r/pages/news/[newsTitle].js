(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"4sg1":function(e,n,t){"use strict";var a=t("rt45"),l=t("lTCR"),i=t.n(l),r=t("0dmp"),s=t("wd/R"),u=t.n(s),o=t("KxFL");function d(){var e=Object(a.a)(['\n  query allNews {\n    nodeQuery(offset: 0, limit: 999, filter: { type: "news" }) {\n      entities {\n        id: entityId\n        ...NewsTeaserFragment\n      }\n    }\n  }\n\n  fragment NewsTeaserFragment on NodeNews {\n    entityId\n    title\n    body {\n      value\n      summary\n    }\n    fieldNewsDate {\n      value\n    }\n  }\n']);return d=function(){return e},e}var c=i()(d()),f=function(e){return e.map(function(e){return{title:e.title,body:e.body.value,summary:e.body.summary,publishedDate:e.fieldNewsDate&&u.a.utc(e.fieldNewsDate.value),urlString:Object(o.g)(e.title),id:e.entityId}})},m=Object(r.a)(c,{props:function(e){var n=e.data,t=n.nodeQuery,a=(t=void 0===t?{}:t).entities,l=void 0===a?[]:a;return{newsList:n.loading?[]:f(l)}}});n.a=m},BV52:function(e,n,t){"use strict";var a=t("q1tI"),l=t.n(a),i=t("YFqc"),r=t.n(i),s=t("H2Aw"),u=t("Ogzj"),o=t("/4k+"),d=t("Fl18"),c=t("EDo9"),f=t.n(c),m=l.a.createElement,w=function(e){var n=e.msg,t=e.linkText,a=e.linkUrl;return m("div",{className:f.a.Wrapper},m(s.a,{title:"Page not found"}),m(o.a,null),m("div",{className:f.a.contentWrapper},m(u.a,null),m("div",{className:f.a.content},m("div",{className:f.a.detail},m("div",null,m("h1",null,"Page not found"),m("p",null,n),m("p",null,m(r.a,{href:a},m("a",null,t))))),m(d.a,null))))};w.defaultProps={msg:"These aren't the droids you're looking for.",linkUrl:"/",linkText:"Back to the front page"},n.a=w},f6P9:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),i=t("XfWh"),r=t.n(i),s=t("nOHt"),u=t("Sk6F"),o=t("H2Aw"),d=t("Ogzj"),c=t("/4k+"),f=t("Fl18"),m=t("BV52"),w=t("4sg1"),v=t("KxFL"),p=t("Yqdq"),N=t.n(p),b=l.a.createElement,g=function(e){var n=e.newsItem,t=n.publishedDate?Object(v.b)(n.publishedDate):"";return b("div",null,b(o.a,{title:n.title}),b(c.a,null),b("div",{className:N.a.contentWrapper},b(d.a,null),b("div",{className:N.a.content},b("h1",{className:N.a.title},n.title),b("div",{className:N.a.detail},b("div",{className:N.a.section},b("div",{className:N.a.field},b("div",{className:N.a.fieldLabel},"Published"),b("div",null,t))),b("div",{className:N.a.mainContent},Object(v.a)(n.body))),b(f.a,null))))};n.default=r()(u.a,w.a,s.withRouter)(function(e){var n=e.router,t=e.loading,a=e.newsList;if(!t){var l=n.query.newsTitle,i=a.find(function(e){return e.urlString===l});return i?b(g,{newsItem:i}):b(m.a,{linkText:"Back to more news",linkUrl:"/News"})}return null})},xRcr:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news/[newsTitle]",function(){return t("f6P9")}])}},[["xRcr",1,0,2]]]);