(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+gcA":function(e,t){e.exports=function(e){var t=String(e).match(/^function (\w*)/);return null==t?"":t[1]}},"0BRo":function(e,t,n){var r=n("1s4d");e.exports=function(e,t,n){var a,o;if("function"===typeof e.indexOf)switch(typeof t){case"number":if(0===t){for(a=1/t;n<e.length;){if(0===(o=e[n])&&1/o===a)return n;n+=1}return-1}if(t!==t){for(;n<e.length;){if("number"===typeof(o=e[n])&&o!==o)return n;n+=1}return-1}return e.indexOf(t,n);case"string":case"boolean":case"function":case"undefined":return e.indexOf(t,n);case"object":if(null===t)return e.indexOf(t,n)}for(;n<e.length;){if(r(e[n],t))return n;n+=1}return-1}},"1s4d":function(e,t,n){var r=n("Wnyi"),a=n("zgIM"),o=r((function(e,t){return a(e,t,[],[])}));e.exports=o},"2uha":function(e,t,n){var r=n("0BRo");e.exports=function(e,t){return r(t,e,0)>=0}},"2v7o":function(e,t){e.exports=function(e,t,n){for(var r=0,a=n.length;r<a;){if(e(t,n[r]))return!0;r+=1}return!1}},"3IPS":function(e,t,n){var r=n("9svv"),a=n("Wnyi")((function(e,t){for(var n,a,o=new r,s=[],i=0;i<t.length;)n=e(a=t[i]),o.add(n)&&s.push(a),i+=1;return s}));e.exports=a},"7e6P":function(e,t,n){var r=n("cOqj"),a=n("Av+g"),o=n("l7rt"),s=!{toString:null}.propertyIsEnumerable("toString"),i=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],u=function(){"use strict";return arguments.propertyIsEnumerable("length")}(),c=function(e,t){for(var n=0;n<e.length;){if(e[n]===t)return!0;n+=1}return!1},l="function"!==typeof Object.keys||u?r((function(e){if(Object(e)!==e)return[];var t,n,r=[],l=u&&o(e);for(t in e)!a(t,e)||l&&"length"===t||(r[r.length]=t);if(s)for(n=i.length-1;n>=0;)a(t=i[n],e)&&!c(r,t)&&(r[r.length]=t),n-=1;return r})):r((function(e){return Object(e)!==e?[]:Object.keys(e)}));e.exports=l},"8XYY":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sponsors",function(){return n("sfDN")}])},"9svv":function(e,t,n){var r=n("2uha"),a=function(){function e(){this._nativeSet="function"===typeof Set?new Set:null,this._items={}}return e.prototype.add=function(e){return!o(e,!0,this)},e.prototype.has=function(e){return o(e,!1,this)},e}();function o(e,t,n){var a,o=typeof e;switch(o){case"string":case"number":return 0===e&&1/e===-1/0?!!n._items["-0"]||(t&&(n._items["-0"]=!0),!1):null!==n._nativeSet?t?(a=n._nativeSet.size,n._nativeSet.add(e),n._nativeSet.size===a):n._nativeSet.has(e):o in n._items?e in n._items[o]||(t&&(n._items[o][e]=!0),!1):(t&&(n._items[o]={},n._items[o][e]=!0),!1);case"boolean":if(o in n._items){var s=e?1:0;return!!n._items[o][s]||(t&&(n._items[o][s]=!0),!1)}return t&&(n._items[o]=e?[!1,!0]:[!0,!1]),!1;case"function":return null!==n._nativeSet?t?(a=n._nativeSet.size,n._nativeSet.add(e),n._nativeSet.size===a):n._nativeSet.has(e):o in n._items?!!r(e,n._items[o])||(t&&n._items[o].push(e),!1):(t&&(n._items[o]=[e]),!1);case"undefined":return!!n._items[o]||(t&&(n._items[o]=!0),!1);case"object":if(null===e)return!!n._items.null||(t&&(n._items.null=!0),!1);default:return(o=Object.prototype.toString.call(e))in n._items?!!r(e,n._items[o])||(t&&n._items[o].push(e),!1):(t&&(n._items[o]=[e]),!1)}}e.exports=a},"Av+g":function(e,t){e.exports=function(e,t){return Object.prototype.hasOwnProperty.call(t,e)}},DFNb:function(e,t){e.exports=function(e){return e}},H2Aw:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),s=n.n(o),i=a.a.createElement;t.a=function(e){var t,n=e.title;return t=n?"Texas Camp 2018 - ".concat(n):"Texas Camp 2018",i(s.a,null,i("title",null,t))}},P9nH:function(e,t,n){var r=n("cOqj")((function(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)}));e.exports=r},PHgV:function(e,t){e.exports="function"===typeof Object.is?Object.is:function(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}},THNH:function(e,t,n){var r=n("cOqj")(n("DFNb"));e.exports=r},l7rt:function(e,t,n){var r=n("Av+g"),a=Object.prototype.toString,o=function(){return"[object Arguments]"===a.call(arguments)?function(e){return"[object Arguments]"===a.call(e)}:function(e){return r("callee",e)}}();e.exports=o},sVP4:function(e,t,n){var r=n("THNH"),a=n("3IPS")(r);e.exports=a},sfDN:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("sVP4"),s=n.n(o),i=n("XfWh"),u=n.n(i),c=n("Sk6F"),l=n("H2Aw"),f=n("Ogzj"),p=n("/4k+"),v=n("Fl18"),m=n("ycwj"),d=n("mUf8"),y=n("xDXe"),g=n.n(y),h=a.a.createElement;t.default=u()(Object(c.a)({ssr:!0}),d.a)((function(e){var t=e.loading,n=e.sponsors,r=n.filter((function(e){return"Individual"===e.sponsorLevel})),a=n.filter((function(e){return"Individual"!==e.sponsorLevel})),o=s()(a.map((function(e){return e.sponsorLevel}))).sort((function(e,t){var n={Platinum:1,Gold:2,Silver:3,Bronze:4};return n[e]-n[t]}));return!t&&h("div",null,h(l.a,{title:"Sponsors"}),h(p.a,null),h("div",{className:g.a.contentWrapper},h(f.a,{image:"sponsors"}),h("div",{className:g.a.content},h("h1",{className:g.a.title},"Brought to you by"),h("div",{className:g.a.detail},h("div",{className:g.a.section},h("div",{className:g.a.field},h("div",{className:g.a.fieldLabel},"Sponsor"),h("p",null,"Download our sponsor prospectus to get started."),h("a",{href:"/TexasCamp_2018_Sponsor_Prospectus.pdf",className:g.a.button},"Download")),h("div",{className:g.a.field},h("div",{className:g.a.fieldLabel},"Questions?"),h("p",null,"Let us help you find the right fit."),h("a",{href:"mailto:hello@texascamp.org",className:g.a.button},"Contact us"))),h("div",{className:g.a.mainContent},h("p",{className:g.a.introText},"Thank you to our generous sponsors for helping make this event a reality. We couldn't do it without you!"),h("p",{className:g.a.introText},"Now is your chance to support your local Drupal community, recruit from a diverse Drupal talent pool, and showcase your brand to the Texas Drupal community."),h("div",{className:g.a.sponsorContainer},o.map((function(e){return h("div",{key:e},h("h2",null,e," sponsors"),h("div",{className:g.a.sponsors},(t=e,a.filter((function(e){return e.sponsorLevel===t}))).map((function(e){return h(m.a,{key:e.id,sponsor:e})}))));var t})),r.length>0&&h("div",{className:g.a.individualSponsors},h("h2",null,"Individual sponsors"),h("ul",null,r.map((function(e){var t=e.id,n=e.title,r=e.sponsorUrl;return h("li",{key:t},r?h("a",{href:r},n):n)}))))))),h(v.a,null))))}))},zgIM:function(e,t,n){var r=n("zm7I"),a=n("2v7o"),o=n("+gcA"),s=n("Av+g"),i=n("PHgV"),u=n("7e6P"),c=n("P9nH");function l(e,t,n,o){var s=r(e),i=r(t);function u(e,t){return f(e,t,n.slice(),o.slice())}return!a((function(e,t){return!a(u,t,e)}),i,s)}function f(e,t,n,r){if(i(e,t))return!0;var a=c(e);if(a!==c(t))return!1;if(null==e||null==t)return!1;if("function"===typeof e["fantasy-land/equals"]||"function"===typeof t["fantasy-land/equals"])return"function"===typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t)&&"function"===typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e);if("function"===typeof e.equals||"function"===typeof t.equals)return"function"===typeof e.equals&&e.equals(t)&&"function"===typeof t.equals&&t.equals(e);switch(a){case"Arguments":case"Array":case"Object":if("function"===typeof e.constructor&&"Promise"===o(e.constructor))return e===t;break;case"Boolean":case"Number":case"String":if(typeof e!==typeof t||!i(e.valueOf(),t.valueOf()))return!1;break;case"Date":if(!i(e.valueOf(),t.valueOf()))return!1;break;case"Error":return e.name===t.name&&e.message===t.message;case"RegExp":if(e.source!==t.source||e.global!==t.global||e.ignoreCase!==t.ignoreCase||e.multiline!==t.multiline||e.sticky!==t.sticky||e.unicode!==t.unicode)return!1}for(var p=n.length-1;p>=0;){if(n[p]===e)return r[p]===t;p-=1}switch(a){case"Map":return e.size===t.size&&l(e.entries(),t.entries(),n.concat([e]),r.concat([t]));case"Set":return e.size===t.size&&l(e.values(),t.values(),n.concat([e]),r.concat([t]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var v=u(e);if(v.length!==u(t).length)return!1;var m=n.concat([e]),d=r.concat([t]);for(p=v.length-1;p>=0;){var y=v[p];if(!s(y,t)||!f(t[y],e[y],m,d))return!1;p-=1}return!0}e.exports=f},zm7I:function(e,t){e.exports=function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}}},[["8XYY",1,0,2,4,5,3]]]);