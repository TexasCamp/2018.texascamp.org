(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{BV52:function(n,t,e){"use strict";var r=e("q1tI"),a=e.n(r),o=e("YFqc"),u=e.n(o),i=e("H2Aw"),c=e("Ogzj"),l=e("/4k+"),s=e("Fl18"),d=e("EDo9"),f=e.n(d),p=a.a.createElement,m=function(n){var t=n.msg,e=n.linkText,r=n.linkUrl;return p("div",{className:f.a.Wrapper},p(i.a,{title:"Page not found"}),p(l.a,null),p("div",{className:f.a.contentWrapper},p(c.a,null),p("div",{className:f.a.content},p("div",{className:f.a.detail},p("div",null,p("h1",null,"Page not found"),p("p",null,t),p("p",null,p(u.a,{href:r},p("a",null,e))))),p(s.a,null))))};m.defaultProps={msg:"These aren't the droids you're looking for.",linkUrl:"/",linkText:"Back to the front page"},t.a=m},EDo9:function(n,t,e){n.exports={contentWrapper:"components-NotFound-styles__contentWrapper--BSKz1",content:"components-NotFound-styles__content--3dHuV shared-css-compose__contentWrapper--1QUeL",detail:"components-NotFound-styles__detail--31-rH shared-css-compose__contentArea--3lHpT"}},H2Aw:function(n,t,e){"use strict";var r=e("q1tI"),a=e.n(r),o=e("8Kt/"),u=e.n(o),i=a.a.createElement;t.a=function(n){var t,e=n.title;return t=e?"Texas Camp 2018 - ".concat(e):"Texas Camp 2018",i(u.a,null,i("title",null,t))}},KxFL:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"f",(function(){return u})),e.d(t,"g",(function(){return i})),e.d(t,"e",(function(){return c})),e.d(t,"d",(function(){return l})),e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return d}));var r=e("q1tI"),a=e.n(r),o=function(n){return a.a.createElement("span",{dangerouslySetInnerHTML:{__html:n}})},u=function(n,t){if(!t)return n;var e=new RegExp("\\b".concat(t),"i");return n.filter((function(n){var t="object"===typeof n?JSON.stringify(n):n.toString();return e.test(t)}))},i=function(n){return n.toLowerCase().replace(/[^a-z0-9 ]/g,"").split(" ").join("-")},c=function(n,t){var e=Object.keys(t);return n.filter((function(n){return e.every((function(e){return!t[e].length||t[e].includes(n[e])}))}))},l=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-5;return n.utcOffset(t).format("h:mm")},s=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-5;return n.utcOffset(t).format("MMMM D, YYYY")},d=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-5;return n.utcOffset(t).format("dddd M/D/YYYY")}},nHyz:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return e("roMh")}])},roMh:function(n,t,e){"use strict";e.r(t);var r=e("h4VS"),a=e("q1tI"),o=e.n(a),u=e("XfWh"),i=e.n(u),c=e("lTCR"),l=e.n(c),s=e("nOHt"),d=e("0dmp"),f=e("Sk6F"),p=e("BV52"),m=e("H2Aw"),v=e("KxFL"),h=e("Ogzj"),g=e("/4k+"),w=e("Fl18"),y=e("haqk"),_=e.n(y),b=o.a.createElement,k=function(n){var t,e=n.title,r=n.body.value;switch(e){case"About Us":t="camper";break;case"Code of Conduct":t="watertower";break;case"Program":t="camper";break;case"Visiting Austin":t="watertower";break;default:t="snake"}return b("div",null,b(m.a,{title:e}),b(g.a,null),b("div",{className:_.a.contentWrapper},b(h.a,{image:t}),b("div",{className:_.a.content},b("h1",{className:_.a.title},e),b("div",{className:_.a.detail},b("div",{className:_.a.mainContent},Object(v.a)(r))),b(w.a,null))))},N=o.a.createElement;function O(){var n=Object(r.a)(["\n  query SplatRouterQuery($path: String!) {\n    route(path: $path) {\n      entity {\n        title\n        body {\n          value\n        }\n      }\n    }\n  }\n"]);return O=function(){return n},n}var E=l()(O()),H=Object(d.a)(E,{options:function(n){return{variables:{path:n.router.asPath}}},props:function(n){var t=n.data,e=t.route,r=t.loading;return{entity:e&&e.entity,loading:r}}});t.default=i()(s.withRouter,Object(f.a)(),H)((function(n){var t=n.loading,e=n.entity;if(t)return null;switch(e&&e.__typename){case"NodePage":return N(k,e);default:return N(p.a,null)}}))}},[["nHyz",1,0,2,4,5,3]]]);