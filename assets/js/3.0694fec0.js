(window.webpackJsonp=window.webpackJsonp||[]).push([[3],[,,,,,,,,,,,,,,function(t,n,e){var r=e(16),i=e(26),o=e(21),a=e(28),s=e(36),c=function(t,n,e){var u,l,f,p,v=t&c.F,d=t&c.G,h=t&c.S,g=t&c.P,x=t&c.B,m=d?r:h?r[n]||(r[n]={}):(r[n]||{}).prototype,y=d?i:i[n]||(i[n]={}),w=y.prototype||(y.prototype={});for(u in d&&(e=n),e)f=((l=!v&&m&&void 0!==m[u])?m:e)[u],p=x&&l?s(f,r):g&&"function"==typeof f?s(Function.call,f):f,m&&a(m,u,f,t&c.U),y[u]!=f&&o(y,u,p),g&&w[u]!=f&&(w[u]=f)};r.core=i,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,e){var r=e(32)("wks"),i=e(33),o=e(16).Symbol,a="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)("Symbol."+t))}).store=r},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(17);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(34),i=e(44);t.exports=e(22)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(18)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(24),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(19);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(16),i=e(21),o=e(35),a=e(33)("src"),s=e(66),c=(""+s).split("toString");e(26).inspectSource=function(t){return s.call(t)},(t.exports=function(t,n,e,s){var u="function"==typeof e;u&&(o(e,"name")||i(e,"name",n)),t[n]!==e&&(u&&(o(e,a)||i(e,a,t[n]?""+t[n]:c.join(String(n)))),t===r?t[n]=e:s?t[n]?t[n]=e:i(t,n,e):(delete t[n],i(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||s.call(this)}))},function(t,n,e){"use strict";var r=e(18);t.exports=function(t,n){return!!t&&r((function(){n?t.call(null,(function(){}),1):t.call(null)}))}},function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},function(t,n,e){t.exports=!e(71)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(26),i=e(16),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(52)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(20),i=e(54),o=e(56),a=Object.defineProperty;n.f=e(22)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(57);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(36),i=e(41),o=e(27),a=e(23),s=e(67);t.exports=function(t,n){var e=1==t,c=2==t,u=3==t,l=4==t,f=6==t,p=5==t||f,v=n||s;return function(n,s,d){for(var h,g,x=o(n),m=i(x),y=r(s,d,3),w=a(m.length),b=0,_=e?v(n,w):c?v(n,0):void 0;w>b;b++)if((p||b in m)&&(g=y(h=m[b],b,x),t))if(e)_[b]=g;else if(g)switch(t){case 3:return!0;case 5:return h;case 6:return b;case 2:_.push(h)}else if(l)return!1;return f?-1:u||l?l:_}}},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},,function(t,n,e){var r=e(41),i=e(19);t.exports=function(t){return r(i(t))}},function(t,n,e){var r=e(25);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){"use strict";var r=e(14),i=e(37)(1);r(r.P+r.F*!e(29)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},function(t,n,e){var r=e(60),i=e(102),o=e(103),a=Object.defineProperty;n.f=e(31)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(15)("unscopables"),i=Array.prototype;null==i[r]&&e(21)(i,r,{}),t.exports=function(t){i[r][t]=!0}},function(t,n,e){var r=e(40),i=e(23),o=e(47);t.exports=function(t){return function(n,e,a){var s,c=r(n),u=i(c.length),l=o(a,u);if(t&&e!=e){for(;u>l;)if((s=c[l++])!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===e)return t||l||0;return!t&&-1}}},function(t,n,e){var r=e(24),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=r(t))<0?i(t+n,0):o(t,n)}},,function(t,n,e){var r=e(43),i=e(72);t.exports=e(31)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){},function(t,n){t.exports=!1},,function(t,n,e){t.exports=!e(22)&&!e(18)((function(){return 7!=Object.defineProperty(e(55)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(17),i=e(16).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,e){var r=e(17);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(25);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(38),i=e(30),o=e(79),a=e(49),s=e(61),c=function(t,n,e){var u,l,f,p=t&c.F,v=t&c.G,d=t&c.S,h=t&c.P,g=t&c.B,x=t&c.W,m=v?i:i[n]||(i[n]={}),y=m.prototype,w=v?r:d?r[n]:(r[n]||{}).prototype;for(u in v&&(e=n),e)(l=!p&&w&&void 0!==w[u])&&s(m,u)||(f=l?w[u]:e[u],m[u]=v&&"function"!=typeof w[u]?e[u]:g&&l?o(f,r):x&&w[u]==f?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):h&&"function"==typeof f?o(Function.call,f):f,h&&((m.virtual||(m.virtual={}))[u]=f,t&c.R&&y&&!y[u]&&a(y,u,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,e){var r=e(50);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},,,,,function(t,n,e){t.exports=e(32)("native-function-to-string",Function.toString)},function(t,n,e){var r=e(68);t.exports=function(t,n){return new(r(t))(n)}},function(t,n,e){var r=e(17),i=e(58),o=e(15)("species");t.exports=function(t){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=void 0),r(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},function(t,n,e){var r=e(17),i=e(25),o=e(15)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},,function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},,,,,function(t,n,e){"use strict";var r=e(14),i=e(46)(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e(45)("includes")},function(t,n,e){"use strict";var r=e(14),i=e(92);r(r.P+r.F*e(93)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(101);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(50),i=e(38).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},,,,,,,,,,,,function(t,n,e){var r=e(69),i=e(19);t.exports=function(t,n,e){if(r(n))throw TypeError("String#"+e+" doesn't accept regex!");return String(i(t))}},function(t,n,e){var r=e(15)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,!"/./"[t](n)}catch(t){}}return!0}},function(t,n,e){var r=e(14);r(r.P,"Array",{fill:e(95)}),e(45)("fill")},function(t,n,e){"use strict";var r=e(27),i=e(47),o=e(23);t.exports=function(t){for(var n=r(this),e=o(n.length),a=arguments.length,s=i(a>1?arguments[1]:void 0,e),c=a>2?arguments[2]:void 0,u=void 0===c?e:i(c,e);u>s;)n[s++]=t;return n}},function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(98),i=e.n(r);function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),i()(t,r.key,r)}}function a(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}},function(t,n,e){t.exports=e(99)},function(t,n,e){e(100);var r=e(30).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){var r=e(59);r(r.S+r.F*!e(31),"Object",{defineProperty:e(43).f})},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){t.exports=!e(31)&&!e(71)((function(){return 7!=Object.defineProperty(e(80)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(50);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){"use strict";var r=e(51);e.n(r).a},,,,,,,,,,,,,,,,,,,function(t,n,e){},,,,function(t,n,e){"use strict";e(77),e(78),e(42),e(94);var r=e(96),i=e(97),o=[["",void 0],["",void 0],["",void 0],["",void 0],["Document Dataset","/jobs/document-dataset/"],["",void 0],["Have a Data Hub","/jobs/have-a-data-hub/"],["",void 0],["Find Datasets","/jobs/find-datasets/"],["Pull Dataset","/jobs/pull-dataset/"],["Version Dataset","/jobs/version-dataset/"],["Validate Dataset","/jobs/validate-dataset/"],["Pipeline\nTransformations","/jobs/pipeline-transformations/"],["Publish Dataset","/jobs/publish-dataset/"],["Do Analysis &\nMachine Learning","/jobs/do-analysis-and-machine-learning/"],["Scale Scope","/jobs/scale-scope/"],["Data Audit","/jobs/data-audit/"],["Do Initial\nData Exploration","/jobs/do-initial-data-exploration/"],["Quickly\nEdit Dataset","/jobs/quickly-edit-dataset/"],["Store Dataset","/jobs/store-dataset/"],["Data API","/jobs/data-api/"],["Create\nVisualizations","/jobs/create-visualizations/"],["Orchestrate\nData Platform","/jobs/orchestrate-data-platform/"],["Scale Size","/jobs/scale-size/"],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0]],a=function(){function t(n){Object(r.a)(this,t),this.shape=[8,3],this.domNode=n}return Object(i.a)(t,[{key:"configure",value:function(){var t=this,n=Honeycomb.extendHex({size:71,orientation:"flat",currentIndex:function(){var n=this.toPoint(),e=t.gridType.pointToHex([n.x,n.y]);return e.x+1+(e.y+1)*t.shape[0]},render:function(n){var e=this.toPoint(),r=e.x,i=e.y,a=this.toPoint(),s=this.center().add(a),c=(t.gridType.pointToHex([a.x,a.y]),this.corners()),u=this.currentIndex(),l={width:1,color:"#999"};""===o[u][0]&&(l={}),this.draw=n.polygon(c.map((function(t){var n=t.x,e=t.y;return"".concat(n,",").concat(e)}))).fill("none").stroke(l).translate(r,i);var f=o[u][0],p=f.includes("\n")?s.y-26:s.y-13;n.text(f).font({size:13,anchor:"middle",leading:1.4,fill:"#1A98FF"}).translate(s.x,p)},openAnchor:function(){var t=this.currentIndex();""!==o[t][0]&&window.open(o[t][1])},highlight:function(){var t=this.currentIndex();""!==o[t][0]&&this.draw.stop(!0,!0).fill({opacity:.2,color:"#6a8bad"}).animate(1e3).fill({opacity:0,color:"none"})}});this.gridType=Honeycomb.defineGrid(n)}},{key:"setup",value:function(){var t=this.shape;this.configure();var n=SVG(this.domNode);this.gridInstance=this.gridType.rectangle({width:t[0],height:t[1],onCreate:function(t){t.render(n)}})}},{key:"setupMouseOverEvent",value:function(){var t=this;this.domNode.addEventListener("mouseover",(function(n){var e=n.offsetX,r=n.offsetY,i=t.gridType.pointToHex([e,r]),o=t.gridInstance.get(i);o&&o.highlight()}))}},{key:"setupClickEvent",value:function(){var t=this;this.domNode.addEventListener("click",(function(n){var e=n.offsetX,r=n.offsetY,i=t.gridType.pointToHex([e,r]),o=t.gridInstance.get(i);o&&o.openAnchor()}))}}]),t}(),s={mounted:function(){var t=new a(this.$refs.diagram);t.setup(),t.setupMouseOverEvent(),t.setupClickEvent()}},c=(e(104),e(0)),u=Object(c.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"diagram",staticClass:"jobs-diagram"})}),[],!1,null,"0d86f00b",null);n.a=u.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";var r=e(123);e.n(r).a},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);var r={components:{JobsDiagram:e(127).a}},i=(e(230),e(0)),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"flex flex-row flex-wrap"},[e("div",{staticClass:"w-1/3 mx-auto"},[e("div",{staticClass:"text-gray-800 text-center p-6"},[e("img",{staticClass:"forwho mx-auto py-12",attrs:{src:"/img/for-researchers.svg"}}),t._v(" "),e("h2",{staticClass:"text-3xl"},[t._v("For Researchers")]),t._v(" "),e("p",{staticClass:"text-gray-800 text-xl pt-2 font-light pb-12"},[t._v("Easily create reproducible"),e("br"),t._v(" research")])])]),t._v(" "),e("div",{staticClass:"w-1/3 mx-auto"},[e("div",{staticClass:"text-gray-800 text-center p-6"},[e("img",{staticClass:"forwho mx-auto py-12",attrs:{src:"/img/for-data-scientists.svg"}}),t._v(" "),e("h2",{staticClass:"text-3xl"},[t._v("For Data Scientists")]),t._v(" "),e("p",{staticClass:"text-gray-800 text-xl pt-2 font-light pb-12"},[t._v("Create pipelines without"),e("br"),t._v(" effort")])])]),t._v(" "),e("div",{staticClass:"w-1/3 mx-auto"},[e("div",{staticClass:"text-gray-800 text-center p-6"},[e("img",{staticClass:"forwho mx-auto py-12",attrs:{src:"/img/for-data-engineers.svg"}}),t._v(" "),e("h2",{staticClass:"text-3xl"},[t._v("For Data Engineers")]),t._v(" "),e("p",{staticClass:"text-gray-800 text-xl pt-2 font-light pb-12"},[t._v("Standardize data"),e("br"),t._v(" platforms")])])])]),t._v(" "),e("div",{staticClass:"banner problems pb-24"},[e("h2",{staticClass:"text-3xl pt-32 pl-8"},[t._v("\n    Problems that we solve\n  ")]),t._v(" "),e("p",{staticClass:"description text-lg font-light pt-4 pl-8"},[t._v("Those are the problems that we solve..")]),t._v(" "),e("JobsDiagram",{staticClass:"px-48 pt-12"})],1),t._v(" "),e("div",{staticClass:"banner"},[e("h2",{staticClass:"text-3xl pl-8"},[t._v("Some of Our Tooling")]),t._v(" "),e("div",{staticClass:"banner flex flex-row pt-12"},[e("div",{staticClass:"w-1/4 text-center mx-auto p-8"},[e("img",{staticClass:"w-32 mx-auto py-12",attrs:{src:"/img/data-package.svg"}}),t._v(" "),e("h2",{staticClass:"text-xl"},[t._v("Data Package")]),t._v(" "),e("p",{staticClass:"text-lg font-light pt-4"},[t._v("This tool is doing X and Y and also doing Z..")]),t._v(" "),e("a",{staticClass:"links-github",attrs:{href:"www.github.com"}},[t._v("GitHub "),e("img",{staticClass:"w-4 h-4 inline",attrs:{src:"https://image.flaticon.com/icons/png/512/724/724827.png"}})])]),t._v(" "),e("div",{staticClass:"w-1/4 mx-auto text-center p-8"},[e("img",{staticClass:"w-24 mx-auto py-12",attrs:{src:"/img/goodtables.svg"}}),t._v(" "),e("h2",{staticClass:"text-xl pt-4"},[t._v("GoodTables")]),t._v(" "),e("p",{staticClass:"text-lg font-light pt-4"},[t._v("This tool is doing X and Y and also doing Z..")]),t._v(" "),e("a",{staticClass:"links-github",attrs:{href:"www.github.com"}},[t._v("GitHub "),e("img",{staticClass:"w-4 h-4 inline",attrs:{src:"https://image.flaticon.com/icons/png/512/724/724827.png"}})])]),t._v(" "),e("div",{staticClass:"w-1/4 mx-auto text-center p-8"},[e("img",{staticClass:"w-24 mx-auto py-12",attrs:{src:"/img/datahub.svg"}}),t._v(" "),e("h2",{staticClass:"text-xl pt-4"},[t._v("DataHub")]),t._v(" "),e("p",{staticClass:"text-lg font-light pt-4"},[t._v("This tool is doing X and Y and also doing Z..")]),t._v(" "),e("a",{staticClass:"links-github",attrs:{href:"www.github.com"}},[t._v("GitHub "),e("img",{staticClass:"w-4 h-4 inline",attrs:{src:"https://image.flaticon.com/icons/png/512/724/724827.png"}})])]),t._v(" "),e("div",{staticClass:"w-1/4 mx-auto text-center p-8"},[e("img",{staticClass:"w-24 mx-auto py-12",attrs:{src:"/img/dataflows.svg"}}),t._v(" "),e("h2",{staticClass:"text-xl pt-4"},[t._v("DataFlows")]),t._v(" "),e("p",{staticClass:"text-lg font-light pt-4"},[t._v("This tool is doing X and Y and also doing Z..")]),t._v(" "),e("a",{staticClass:"links-github",attrs:{href:"www.github.com"}},[t._v("GitHub "),e("img",{staticClass:"w-4 h-4 inline",attrs:{src:"https://image.flaticon.com/icons/png/512/724/724827.png"}})])])])]),t._v(" "),e("div",{staticClass:"banner pt-24 pb-40"},[e("div",{staticClass:"flex flex-row mx-auto"},[e("div",{staticClass:"w-1/2 pt-12 pl-8"},[e("img",{staticClass:"shadow-xl",attrs:{src:"/img/json-file-dp.png"}})]),t._v(" "),e("div",{staticClass:"w-1/2 pl-20 pt-6"},[e("h2",{staticClass:"text-3xl font-light pb-4"},[t._v("Any dataset format,"),e("br"),t._v(" compatible with "),e("span",{staticClass:"highlighted"},[t._v(" everything ")])])])])]),t._v(" "),e("div",{staticClass:"banner pb-40 "},[e("div",{staticClass:"flex flex-row mx-auto text-right"},[e("div",{staticClass:"w-1/2 pr-20"},[e("h2",{staticClass:"text-3xl font-light pt-6 pb-4"},[t._v("Declarative "),e("span",{staticClass:"highlighted"},[t._v("pipelines")])])]),t._v(" "),e("div",{staticClass:"w-1/2 pt-12"},[e("img",{staticClass:"shadow-xl",attrs:{src:"/img/json-file-dp.png"}})])])]),t._v(" "),e("div",{staticClass:"banner py-24"},[e("h2",{staticClass:"text-3xl"},[t._v("Trusted by")]),t._v(" "),e("div",{staticClass:"banner flex flex-row flex-wrap mx-40"},[e("div",{staticClass:"w-1/5 mx-auto py-12"},[e("img",{staticClass:"w-32 mx-auto py-16",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png"}})]),t._v(" "),e("div",{staticClass:"w-1/5 mx-auto py-12"},[e("img",{staticClass:"w-64 mx-auto py-16",attrs:{src:"https://numfocus.org/wp-content/uploads/2016/07/pandas-logo-300.png"}})]),t._v(" "),e("div",{staticClass:"w-1/5 mx-auto py-12"},[e("img",{staticClass:"w-32 mx-auto py-16",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png"}})]),t._v(" "),e("div",{staticClass:"w-1/5 mx-auto py-12"},[e("img",{staticClass:"w-64 mx-auto py-16",attrs:{src:"https://numfocus.org/wp-content/uploads/2016/07/pandas-logo-300.png"}})]),t._v(" "),e("div",{staticClass:"w-1/5 mx-auto py-12"},[e("img",{staticClass:"w-32 mx-auto py-16",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png"}})])])])])}),[],!1,null,null,null);n.default=o.exports}]]);