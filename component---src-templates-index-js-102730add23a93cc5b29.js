/*! For license information please see component---src-templates-index-js-102730add23a93cc5b29.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+6XX":function(t,e,n){var r=n("y1pI");t.exports=function(t){return r(this.__data__,t)>-1}},"/9aa":function(t,e,n){var r=n("NykK"),a=n("ExA7");t.exports=function(t){return"symbol"==typeof t||a(t)&&"[object Symbol]"==r(t)}},"2gN3":function(t,e,n){var r=n("Kz5y")["__core-js_shared__"];t.exports=r},"3Fdi":function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},"3tWz":function(t,e){var n=Array.prototype.join;t.exports=function(t,e){return null==t?"":n.call(t,e)}},"44Ds":function(t,e,n){var r=n("e4Nc");function a(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=t.apply(this,r);return n.cache=o.set(a,i)||o,i};return n.cache=new(a.Cache||r),n}a.Cache=r,t.exports=a},"4JlD":function(t,e,n){"use strict";var r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,n,s){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"==typeof t?o(i(t),(function(i){var s=encodeURIComponent(r(i))+n;return a(t[i])?o(t[i],(function(t){return s+encodeURIComponent(r(t))})).join(e):s+encodeURIComponent(r(t[i]))})).join(e):s?encodeURIComponent(r(s))+n+encodeURIComponent(r(t)):""};var a=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function o(t,e){if(t.map)return t.map(e);for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r));return n}var i=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}},"4kuk":function(t,e,n){var r=n("SfRM"),a=n("Hvzi"),o=n("u8Dt"),i=n("ekgI"),s=n("JSQU");function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=a,c.prototype.get=o,c.prototype.has=i,c.prototype.set=s,t.exports=c},"4uTw":function(t,e,n){var r=n("Z0cm"),a=n("9ggG"),o=n("GNiM"),i=n("dt0z");t.exports=function(t,e){return r(t)?t:a(t,e)?[t]:o(i(t))}},"9Nap":function(t,e,n){var r=n("/9aa");t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},"9ggG":function(t,e,n){var r=n("Z0cm"),a=n("/9aa"),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!a(t))||(i.test(t)||!o.test(t)||null!=e&&t in Object(e))}},AP2z:function(t,e,n){var r=n("nmnc"),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(c){}var a=i.call(t);return r&&(e?t[s]=n:delete t[s]),a}},Cwc5:function(t,e,n){var r=n("NKxu"),a=n("Npjl");t.exports=function(t,e){var n=a(t,e);return r(n)?n:void 0}},CxY0:function(t,e,n){"use strict";var r=n("GYWy"),a=n("Nehr");function o(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}e.parse=b,e.resolve=function(t,e){return b(t,!1,!0).resolve(e)},e.resolveObject=function(t,e){return t?b(t,!1,!0).resolveObject(e):e},e.format=function(t){a.isString(t)&&(t=b(t));return t instanceof o?t.format():o.prototype.format.call(t)},e.Url=o;var i=/^([a-z0-9.+-]+:)/i,s=/:[0-9]*$/,c=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,h=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),l=["'"].concat(h),u=["%","/","?",";","#"].concat(l),p=["/","?","#"],f=/^[+a-z0-9A-Z_-]{0,63}$/,m=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,v={javascript:!0,"javascript:":!0},g={javascript:!0,"javascript:":!0},y={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},d=n("s4NR");function b(t,e,n){if(t&&a.isObject(t)&&t instanceof o)return t;var r=new o;return r.parse(t,e,n),r}o.prototype.parse=function(t,e,n){if(!a.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var o=t.indexOf("?"),s=-1!==o&&o<t.indexOf("#")?"?":"#",h=t.split(s);h[0]=h[0].replace(/\\/g,"/");var b=t=h.join(s);if(b=b.trim(),!n&&1===t.split("#").length){var x=c.exec(b);if(x)return this.path=b,this.href=b,this.pathname=x[1],x[2]?(this.search=x[2],this.query=e?d.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var w=i.exec(b);if(w){var E=(w=w[0]).toLowerCase();this.protocol=E,b=b.substr(w.length)}if(n||w||b.match(/^\/\/[^@\/]+@[^@\/]+/)){var _="//"===b.substr(0,2);!_||w&&g[w]||(b=b.substr(2),this.slashes=!0)}if(!g[w]&&(_||w&&!y[w])){for(var j,O,k=-1,A=0;A<p.length;A++){-1!==(I=b.indexOf(p[A]))&&(-1===k||I<k)&&(k=I)}-1!==(O=-1===k?b.lastIndexOf("@"):b.lastIndexOf("@",k))&&(j=b.slice(0,O),b=b.slice(O+1),this.auth=decodeURIComponent(j)),k=-1;for(A=0;A<u.length;A++){var I;-1!==(I=b.indexOf(u[A]))&&(-1===k||I<k)&&(k=I)}-1===k&&(k=b.length),this.host=b.slice(0,k),b=b.slice(k),this.parseHost(),this.hostname=this.hostname||"";var S="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!S)for(var C=this.hostname.split(/\./),N=(A=0,C.length);A<N;A++){var z=C[A];if(z&&!z.match(f)){for(var U="",q=0,P=z.length;q<P;q++)z.charCodeAt(q)>127?U+="x":U+=z[q];if(!U.match(f)){var R=C.slice(0,A),F=C.slice(A+1),M=z.match(m);M&&(R.push(M[1]),F.unshift(M[2])),F.length&&(b="/"+F.join(".")+b),this.hostname=R.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),S||(this.hostname=r.toASCII(this.hostname));var T=this.port?":"+this.port:"",G=this.hostname||"";this.host=G+T,this.href+=this.host,S&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==b[0]&&(b="/"+b))}if(!v[E])for(A=0,N=l.length;A<N;A++){var W=l[A];if(-1!==b.indexOf(W)){var K=encodeURIComponent(W);K===W&&(K=escape(W)),b=b.split(W).join(K)}}var Y=b.indexOf("#");-1!==Y&&(this.hash=b.substr(Y),b=b.slice(0,Y));var Q=b.indexOf("?");if(-1!==Q?(this.search=b.substr(Q),this.query=b.substr(Q+1),e&&(this.query=d.parse(this.query)),b=b.slice(0,Q)):e&&(this.search="",this.query={}),b&&(this.pathname=b),y[E]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){T=this.pathname||"";var $=this.search||"";this.path=T+$}return this.href=this.format(),this},o.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var e=this.protocol||"",n=this.pathname||"",r=this.hash||"",o=!1,i="";this.host?o=t+this.host:this.hostname&&(o=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&a.isObject(this.query)&&Object.keys(this.query).length&&(i=d.stringify(this.query));var s=this.search||i&&"?"+i||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||y[e])&&!1!==o?(o="//"+(o||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):o||(o=""),r&&"#"!==r.charAt(0)&&(r="#"+r),s&&"?"!==s.charAt(0)&&(s="?"+s),e+o+(n=n.replace(/[?#]/g,(function(t){return encodeURIComponent(t)})))+(s=s.replace("#","%23"))+r},o.prototype.resolve=function(t){return this.resolveObject(b(t,!1,!0)).format()},o.prototype.resolveObject=function(t){if(a.isString(t)){var e=new o;e.parse(t,!1,!0),t=e}for(var n=new o,r=Object.keys(this),i=0;i<r.length;i++){var s=r[i];n[s]=this[s]}if(n.hash=t.hash,""===t.href)return n.href=n.format(),n;if(t.slashes&&!t.protocol){for(var c=Object.keys(t),h=0;h<c.length;h++){var l=c[h];"protocol"!==l&&(n[l]=t[l])}return y[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(t.protocol&&t.protocol!==n.protocol){if(!y[t.protocol]){for(var u=Object.keys(t),p=0;p<u.length;p++){var f=u[p];n[f]=t[f]}return n.href=n.format(),n}if(n.protocol=t.protocol,t.host||g[t.protocol])n.pathname=t.pathname;else{for(var m=(t.pathname||"").split("/");m.length&&!(t.host=m.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==m[0]&&m.unshift(""),m.length<2&&m.unshift(""),n.pathname=m.join("/")}if(n.search=t.search,n.query=t.query,n.host=t.host||"",n.auth=t.auth,n.hostname=t.hostname||t.host,n.port=t.port,n.pathname||n.search){var v=n.pathname||"",d=n.search||"";n.path=v+d}return n.slashes=n.slashes||t.slashes,n.href=n.format(),n}var b=n.pathname&&"/"===n.pathname.charAt(0),x=t.host||t.pathname&&"/"===t.pathname.charAt(0),w=x||b||n.host&&t.pathname,E=w,_=n.pathname&&n.pathname.split("/")||[],j=(m=t.pathname&&t.pathname.split("/")||[],n.protocol&&!y[n.protocol]);if(j&&(n.hostname="",n.port=null,n.host&&(""===_[0]?_[0]=n.host:_.unshift(n.host)),n.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===m[0]?m[0]=t.host:m.unshift(t.host)),t.host=null),w=w&&(""===m[0]||""===_[0])),x)n.host=t.host||""===t.host?t.host:n.host,n.hostname=t.hostname||""===t.hostname?t.hostname:n.hostname,n.search=t.search,n.query=t.query,_=m;else if(m.length)_||(_=[]),_.pop(),_=_.concat(m),n.search=t.search,n.query=t.query;else if(!a.isNullOrUndefined(t.search)){if(j)n.hostname=n.host=_.shift(),(S=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=S.shift(),n.host=n.hostname=S.shift());return n.search=t.search,n.query=t.query,a.isNull(n.pathname)&&a.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!_.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var O=_.slice(-1)[0],k=(n.host||t.host||_.length>1)&&("."===O||".."===O)||""===O,A=0,I=_.length;I>=0;I--)"."===(O=_[I])?_.splice(I,1):".."===O?(_.splice(I,1),A++):A&&(_.splice(I,1),A--);if(!w&&!E)for(;A--;A)_.unshift("..");!w||""===_[0]||_[0]&&"/"===_[0].charAt(0)||_.unshift(""),k&&"/"!==_.join("/").substr(-1)&&_.push("");var S,C=""===_[0]||_[0]&&"/"===_[0].charAt(0);j&&(n.hostname=n.host=C?"":_.length?_.shift():"",(S=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=S.shift(),n.host=n.hostname=S.shift()));return(w=w||n.host&&_.length)&&!C&&_.unshift(""),_.length?n.pathname=_.join("/"):(n.pathname=null,n.path=null),a.isNull(n.pathname)&&a.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=t.auth||n.auth,n.slashes=n.slashes||t.slashes,n.href=n.format(),n},o.prototype.parseHost=function(){var t=this.host,e=s.exec(t);e&&(":"!==(e=e[0])&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},E2jh:function(t,e,n){var r,a=n("2gN3"),o=(r=/[^.]+$/.exec(a&&a.keys&&a.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!o&&o in t}},EpBk:function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},GNiM:function(t,e,n){var r=n("I01J"),a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,i=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(a,(function(t,n,r,a){e.push(r?a.replace(o,"$1"):n||t)})),e}));t.exports=i},GYWy:function(t,e,n){(function(t,r){var a;!function(o){e&&e.nodeType,t&&t.nodeType;var i="object"==typeof r&&r;i.global!==i&&i.window!==i&&i.self;var s,c=2147483647,h=/^xn--/,l=/[^\x20-\x7E]/,u=/[\x2E\u3002\uFF0E\uFF61]/g,p={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},f=Math.floor,m=String.fromCharCode;function v(t){throw new RangeError(p[t])}function g(t,e){for(var n=t.length,r=[];n--;)r[n]=e(t[n]);return r}function y(t,e){var n=t.split("@"),r="";return n.length>1&&(r=n[0]+"@",t=n[1]),r+g((t=t.replace(u,".")).split("."),e).join(".")}function d(t){for(var e,n,r=[],a=0,o=t.length;a<o;)(e=t.charCodeAt(a++))>=55296&&e<=56319&&a<o?56320==(64512&(n=t.charCodeAt(a++)))?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),a--):r.push(e);return r}function b(t){return g(t,(function(t){var e="";return t>65535&&(e+=m((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=m(t)})).join("")}function x(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function w(t,e,n){var r=0;for(t=n?f(t/700):t>>1,t+=f(t/e);t>455;r+=36)t=f(t/35);return f(r+36*t/(t+38))}function E(t){var e,n,r,a,o,i,s,h,l,u,p,m=[],g=t.length,y=0,d=128,x=72;for((n=t.lastIndexOf("-"))<0&&(n=0),r=0;r<n;++r)t.charCodeAt(r)>=128&&v("not-basic"),m.push(t.charCodeAt(r));for(a=n>0?n+1:0;a<g;){for(o=y,i=1,s=36;a>=g&&v("invalid-input"),((h=(p=t.charCodeAt(a++))-48<10?p-22:p-65<26?p-65:p-97<26?p-97:36)>=36||h>f((c-y)/i))&&v("overflow"),y+=h*i,!(h<(l=s<=x?1:s>=x+26?26:s-x));s+=36)i>f(c/(u=36-l))&&v("overflow"),i*=u;x=w(y-o,e=m.length+1,0==o),f(y/e)>c-d&&v("overflow"),d+=f(y/e),y%=e,m.splice(y++,0,d)}return b(m)}function _(t){var e,n,r,a,o,i,s,h,l,u,p,g,y,b,E,_=[];for(g=(t=d(t)).length,e=128,n=0,o=72,i=0;i<g;++i)(p=t[i])<128&&_.push(m(p));for(r=a=_.length,a&&_.push("-");r<g;){for(s=c,i=0;i<g;++i)(p=t[i])>=e&&p<s&&(s=p);for(s-e>f((c-n)/(y=r+1))&&v("overflow"),n+=(s-e)*y,e=s,i=0;i<g;++i)if((p=t[i])<e&&++n>c&&v("overflow"),p==e){for(h=n,l=36;!(h<(u=l<=o?1:l>=o+26?26:l-o));l+=36)E=h-u,b=36-u,_.push(m(x(u+E%b,0))),h=f(E/b);_.push(m(x(h,0))),o=w(n,y,r==a),n=0,++r}++n,++e}return _.join("")}s={version:"1.4.1",ucs2:{decode:d,encode:b},decode:E,encode:_,toASCII:function(t){return y(t,(function(t){return l.test(t)?"xn--"+_(t):t}))},toUnicode:function(t){return y(t,(function(t){return h.test(t)?E(t.slice(4).toLowerCase()):t}))}},void 0===(a=function(){return s}.call(e,n,e,t))||(t.exports=a)}()}).call(this,n("YuTi")(t),n("yLpj"))},GoyQ:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},H8j4:function(t,e,n){var r=n("QkVE");t.exports=function(t,e){var n=r(this,t),a=n.size;return n.set(t,e),this.size+=n.size==a?0:1,this}},Hvzi:function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},I01J:function(t,e,n){var r=n("44Ds");t.exports=function(t){var e=r(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}},JHgL:function(t,e,n){var r=n("QkVE");t.exports=function(t){return r(this,t).get(t)}},JSQU:function(t,e,n){var r=n("YESw");t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},KMkd:function(t,e){t.exports=function(){this.__data__=[],this.size=0}},KfNM:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},Kz5y:function(t,e,n){var r=n("WFqU"),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();t.exports=o},MCvy:function(t,e){},NKxu:function(t,e,n){var r=n("lSCD"),a=n("E2jh"),o=n("GoyQ"),i=n("3Fdi"),s=/^\[object .+?Constructor\]$/,c=Function.prototype,h=Object.prototype,l=c.toString,u=h.hasOwnProperty,p=RegExp("^"+l.call(u).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!o(t)||a(t))&&(r(t)?p:s).test(i(t))}},Nehr:function(t,e,n){"use strict";t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},Npjl:function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},NykK:function(t,e,n){var r=n("nmnc"),a=n("AP2z"),o=n("KfNM"),i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?a(t):o(t)}},QkVE:function(t,e,n){var r=n("EpBk");t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},SfRM:function(t,e,n){var r=n("YESw");t.exports=function(){this.__data__=r?r(null):{},this.size=0}},TRom:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),o=n("1Qp6"),i=n("Wbzz"),s=n("CxY0"),c=n.n(s),h=n("N0cg"),l=n.n(h),u=n("MCvy"),p=n.n(u),f=n("mwIZ"),m=n.n(f),v=n("qhky"),g=function(t){var e=t.image;return e?a.a.createElement(v.a,null,a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:image",content:e}),a.a.createElement("meta",{property:"og:image",content:e}),a.a.createElement("meta",{property:"og:image:width",content:l.a.shareImageWidth}),a.a.createElement("meta",{property:"og:image:height",content:l.a.shareImageHeight})):null},y=function(t){var e=t.data,n=t.settings,r=t.canonical,o=t.title,i=t.description,s=t.image,h=t.type;n=n.allGhostSettings.edges[0].node;var u=c.a.resolve(l.a.siteUrl,n.logo||l.a.siteIcon),p=s||e.feature_image||m()(n,"cover_image",null);p=p?c.a.resolve(l.a.siteUrl,p):null,i=i||e.meta_description||e.description||l.a.siteDescriptionMeta||n.description,o=(o||e.meta_title||e.name||e.title)+" - "+n.title;var f={"@context":"https://schema.org/","@type":h,url:r,image:p?{"@type":"ImageObject",url:p,width:l.a.shareImageWidth,height:l.a.shareImageHeight}:void 0,publisher:{"@type":"Organization",name:n.title,logo:{"@type":"ImageObject",url:u,width:60,height:60}},mainEntityOfPage:{"@type":"WebPage","@id":l.a.siteUrl},description:i};return a.a.createElement(a.a.Fragment,null,a.a.createElement(v.a,null,a.a.createElement("title",null,o),a.a.createElement("meta",{name:"description",content:i}),a.a.createElement("link",{rel:"canonical",href:r}),a.a.createElement("meta",{property:"og:site_name",content:n.title}),a.a.createElement("meta",{property:"og:type",content:"website"}),a.a.createElement("meta",{property:"og:title",content:o}),a.a.createElement("meta",{property:"og:description",content:i}),a.a.createElement("meta",{property:"og:url",content:r}),a.a.createElement("meta",{name:"twitter:title",content:o}),a.a.createElement("meta",{name:"twitter:description",content:i}),a.a.createElement("meta",{name:"twitter:url",content:r}),n.twitter&&a.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+n.twitter.replace(/^@/,"")+"/"}),n.twitter&&a.a.createElement("meta",{name:"twitter:creator",content:n.twitter}),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f,void 0,4))),a.a.createElement(g,{image:p}))},d=function(t){return a.a.createElement(i.StaticQuery,{query:"2561578252",render:function(e){return a.a.createElement(y,Object.assign({settings:e},t))}})},b=n("3tWz"),x=n.n(b),w=n("wig9"),E=n.n(w),_=n("17x9"),j=n.n(_),O=function(t){var e=[];return e.push(t.website?t.website:null,t.twitter?"https://twitter.com/"+t.twitter.replace(/^@/,"")+"/":null,t.facebook?"https://www.facebook.com/"+t.facebook.replace(/^\//,"")+"/":null),e=E()(e),{name:t.name||null,sameAsArray:e.length?'["'+x()(e,'", "')+'"]':null,image:t.profile_image||null,facebookUrl:t.facebook?"https://www.facebook.com/"+t.facebook.replace(/^\//,"")+"/":null}};O.defaultProps={fetchAuthorData:!1},O.PropTypes={primaryAuthor:j.a.shape({name:j.a.string.isRequired,profile_image:j.a.string,website:j.a.string,twitter:j.a.string,facebook:j.a.string}).isRequired};var k=O,A=function(t){var e=t.data,n=t.settings,r=t.canonical;n=n.allGhostSettings.edges[0].node;var o=k(e),i=o.image||m()(n,"cover_image",null),s=e.name+" - "+n.title,c=e.bio||l.a.siteDescriptionMeta||n.description,h={"@context":"https://schema.org/","@type":"Person",name:e.name,sameAs:o.sameAsArray?o.sameAsArray:void 0,url:r,image:i?{"@type":"ImageObject",url:i,width:l.a.shareImageWidth,height:l.a.shareImageHeight}:void 0,mainEntityOfPage:{"@type":"WebPage","@id":l.a.siteUrl},description:c};return a.a.createElement(a.a.Fragment,null,a.a.createElement(v.a,null,a.a.createElement("title",null,s),a.a.createElement("meta",{name:"description",content:c}),a.a.createElement("link",{rel:"canonical",href:r}),a.a.createElement("meta",{property:"og:site_name",content:n.title}),a.a.createElement("meta",{property:"og:type",content:"profile"}),a.a.createElement("meta",{property:"og:title",content:s}),a.a.createElement("meta",{property:"og:description",content:c}),a.a.createElement("meta",{property:"og:url",content:r}),a.a.createElement("meta",{name:"twitter:title",content:s}),a.a.createElement("meta",{name:"twitter:description",content:c}),a.a.createElement("meta",{name:"twitter:url",content:r}),n.twitter&&a.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+n.twitter.replace(/^@/,"")+"/"}),n.twitter&&a.a.createElement("meta",{name:"twitter:creator",content:n.twitter}),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h,void 0,4))),a.a.createElement(g,{image:i}))},I=function(t){return a.a.createElement(i.StaticQuery,{query:"4145280475",render:function(e){return a.a.createElement(A,Object.assign({settings:e},t))}})},S=function(t){var e=t.data,n=t.settings,r=t.title,o=t.description,i=t.image,s=t.location,h=c.a.resolve(l.a.siteUrl,s.pathname),u=e.ghostPost,f=e.ghostTag,m=e.ghostAuthor,v=e.ghostPage;return n=n.allGhostSettings.edges[0].node,u?a.a.createElement(p.a,{data:u,canonical:h}):f?a.a.createElement(d,{data:f,canonical:h,type:"Series"}):m?a.a.createElement(I,{data:m,canonical:h}):v?a.a.createElement(d,{data:v,canonical:h,type:"WebSite"}):(r=r||l.a.siteTitleMeta||n.title,o=o||l.a.siteDescriptionMeta||n.description,i=(i=i||n.cover_image||null)?c.a.resolve(l.a.siteUrl,i):null,a.a.createElement(d,{data:{},canonical:h,title:r,description:o,image:i,type:"WebSite"}))};S.defaultProps={data:{}};var C=function(t){return a.a.createElement(i.StaticQuery,{query:"2358152166",render:function(e){return a.a.createElement(S,Object.assign({settings:e},t))}})};e.default=function(t){var e=t.data,n=t.location,r=t.pageContext,i=e.allGhostPost.edges;return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,{location:n}),a.a.createElement(o.a,{isHome:!0},a.a.createElement("div",{className:"container"},a.a.createElement("section",{className:"post-feed"},i.map((function(t){var e=t.node;return a.a.createElement(o.d,{key:e.id,post:e})}))),a.a.createElement(o.c,{pageContext:r}))))}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},Xi7e:function(t,e,n){var r=n("KMkd"),a=n("adU4"),o=n("tMB7"),i=n("+6XX"),s=n("Z8oC");function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=a,c.prototype.get=o,c.prototype.has=i,c.prototype.set=s,t.exports=c},YESw:function(t,e,n){var r=n("Cwc5")(Object,"create");t.exports=r},YuTi:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},Z0cm:function(t,e){var n=Array.isArray;t.exports=n},Z8oC:function(t,e,n){var r=n("y1pI");t.exports=function(t,e){var n=this.__data__,a=r(n,t);return a<0?(++this.size,n.push([t,e])):n[a][1]=e,this}},ZWtO:function(t,e,n){var r=n("4uTw"),a=n("9Nap");t.exports=function(t,e){for(var n=0,o=(e=r(e,t)).length;null!=t&&n<o;)t=t[a(e[n++])];return n&&n==o?t:void 0}},adU4:function(t,e,n){var r=n("y1pI"),a=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():a.call(e,n,1),--this.size,!0)}},dt0z:function(t,e,n){var r=n("zoYe");t.exports=function(t){return null==t?"":r(t)}},e4Nc:function(t,e,n){var r=n("fGT3"),a=n("k+1r"),o=n("JHgL"),i=n("pSRY"),s=n("H8j4");function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=a,c.prototype.get=o,c.prototype.has=i,c.prototype.set=s,t.exports=c},eUgh:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a}},ebwN:function(t,e,n){var r=n("Cwc5")(n("Kz5y"),"Map");t.exports=r},ekgI:function(t,e,n){var r=n("YESw"),a=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:a.call(e,t)}},fGT3:function(t,e,n){var r=n("4kuk"),a=n("Xi7e"),o=n("ebwN");t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(o||a),string:new r}}},"k+1r":function(t,e,n){var r=n("QkVE");t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},kd2E:function(t,e,n){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,n,o){e=e||"&",n=n||"=";var i={};if("string"!=typeof t||0===t.length)return i;var s=/\+/g;t=t.split(e);var c=1e3;o&&"number"==typeof o.maxKeys&&(c=o.maxKeys);var h=t.length;c>0&&h>c&&(h=c);for(var l=0;l<h;++l){var u,p,f,m,v=t[l].replace(s,"%20"),g=v.indexOf(n);g>=0?(u=v.substr(0,g),p=v.substr(g+1)):(u=v,p=""),f=decodeURIComponent(u),m=decodeURIComponent(p),r(i,f)?a(i[f])?i[f].push(m):i[f]=[i[f],m]:i[f]=m}return i};var a=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},lSCD:function(t,e,n){var r=n("NykK"),a=n("GoyQ");t.exports=function(t){if(!a(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},ljhN:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},mwIZ:function(t,e,n){var r=n("ZWtO");t.exports=function(t,e,n){var a=null==t?void 0:r(t,e);return void 0===a?n:a}},nmnc:function(t,e,n){var r=n("Kz5y").Symbol;t.exports=r},pSRY:function(t,e,n){var r=n("QkVE");t.exports=function(t){return r(this,t).has(t)}},s4NR:function(t,e,n){"use strict";e.decode=e.parse=n("kd2E"),e.encode=e.stringify=n("4JlD")},tMB7:function(t,e,n){var r=n("y1pI");t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},u8Dt:function(t,e,n){var r=n("YESw"),a=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return a.call(e,t)?e[t]:void 0}},wig9:function(t,e){t.exports=function(t){for(var e=-1,n=null==t?0:t.length,r=0,a=[];++e<n;){var o=t[e];o&&(a[r++]=o)}return a}},y1pI:function(t,e,n){var r=n("ljhN");t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},zoYe:function(t,e,n){var r=n("nmnc"),a=n("eUgh"),o=n("Z0cm"),i=n("/9aa"),s=r?r.prototype:void 0,c=s?s.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return a(e,t)+"";if(i(e))return c?c.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}}}]);
//# sourceMappingURL=component---src-templates-index-js-102730add23a93cc5b29.js.map