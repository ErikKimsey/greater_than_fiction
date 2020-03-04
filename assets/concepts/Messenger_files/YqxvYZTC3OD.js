if (self.CavalryLogger) { CavalryLogger.start_js(["WL7Hp"]); }

__d("AdsCCMenuComponentTypes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({EMPTY:null,MENU:null,XOUT:null});c=b("keyMirror")({SAVE:null,UNSAVE:null,HIDE:null,EMAIL:null,FEEDBACK:null});e.exports={MenuOptions:a,MenuItems:c}}),null);
__d("AdsCCCategoryConfig",["ix","cssVar","AdsCCMenuComponentTypes","asset","keyMirror"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("AdsCCMenuComponentTypes").MenuItems,j=b("AdsCCMenuComponentTypes").MenuOptions;function k(a,b,c){__p&&__p();if(a==="HELP")if(c)if(b==="SAVED")return[i.UNSAVE,i.FEEDBACK];else return[i.FEEDBACK,i.SAVE];else return[i.FEEDBACK];else if(c)if(b==="SAVED")return[i.UNSAVE,i.FEEDBACK];else return[i.HIDE,i.FEEDBACK,i.SAVE];else return[i.HIDE,i.FEEDBACK]}function a(a,b,c,d){__p&&__p();switch(a){case"ACTIVE_FEEDBACK":return{menuItems:[i.HIDE,i.FEEDBACK],menuOption:j.MENU,surveyID:159827751363772};case"ACTIVE_FEEDBACK_SUCCESS_MESSAGE":return{menuItems:[],menuOption:j.XOUT};case"ERROR":return{menuItems:d?[i.FEEDBACK,i.HIDE]:[i.FEEDBACK],menuOption:j.MENU,surveyID:565355047184984};case"HELP":return{menuItems:k(a,c,b),menuOption:j.MENU,surveyID:2000931193457614};case"LEGAL_AND_POLICY":return{menuItems:[i.HIDE,i.FEEDBACK],menuOption:j.MENU,surveyID:418587488613508};case"NEW_PRODUCT":return{menuItems:k(a,c,b),menuOption:j.MENU,surveyID:1668220866602791};case"RECOMMENDATION_BEST_PRACTICE":return{menuItems:k(a,c,b),menuOption:j.MENU,surveyID:210791859525567};case"RECOMMENDATION_PERSONALIZED":return{menuItems:k(a,c,b),menuOption:j.MENU,surveyID:210791859525567};case"RELEASE_NOTE":return{menuItems:[],menuOption:j.EMPTY};case"WARNING":return{menuItems:[i.FEEDBACK],menuOption:j.MENU,surveyID:565355047184984};default:return{menuItems:[],menuOption:j.XOUT}}}d=(c={},c.ACTIVE_FEEDBACK={color:"#3578E5",icon:g("489670"),notifIcon:g("489671")},c.ACTIVE_FEEDBACK_SUCCESS_MESSAGE={color:"#00A400",icon:g("506114"),notifIcon:g("506115")},c.ERROR={color:"#FA383E",icon:g("503377"),notifIcon:g("503378")},c.HELP={color:"#89A1AC",icon:g("596900"),notifIcon:g("596901")},c.LEGAL_AND_POLICY={color:"#444950",icon:g("503360"),notifIcon:g("503361")},c.NEW_PRODUCT={color:"#8C72CB",icon:g("503370"),notifIcon:g("503371")},c.RECOMMENDATION_BEST_PRACTICE={color:"#6BCEBB",icon:g("503332"),notifIcon:g("503333")},c.RECOMMENDATION_PERSONALIZED={color:"#6BCEBB",icon:g("503353"),notifIcon:g("503354")},c.RELEASE_NOTE={color:"#444950",icon:g("567577"),notifIcon:g("567578")},c.WARNING={color:"#FFBA00",icon:g("480793"),notifIcon:g("480794")},c);f=b("keyMirror")({HORIZONTAL:null,VERTICAL:null});h=b("keyMirror")({LOADING:null,LOADED:null});e.exports={CardLayout:f,CardState:h,CATEGORY_CONFIG:d,CATEGORY_CONFIG_MENU:a}}),null);
__d("PopupWindow",["DOMDimensions","DOMQuery","Layer","Popup","getViewportDimensions"],(function(a,b,c,d,e,f){__p&&__p();var g={_opts:{allowShrink:!0,strategy:"vector",timeout:100,widthElement:null},init:function(a){Object.assign(g._opts,a),setInterval(g._resizeCheck,g._opts.timeout)},_resizeCheck:function(){__p&&__p();var a=b("getViewportDimensions")(),c=g._getDocumentSize(),d=b("Layer").getTopmostLayer();if(d){d=d.getRoot().firstChild;var e=b("DOMDimensions").getElementDimensions(d);e.height+=b("DOMDimensions").measureElementBox(d,"height",!0,!0,!0);e.width+=b("DOMDimensions").measureElementBox(d,"width",!0,!0,!0);c.height=Math.max(c.height,e.height);c.width=Math.max(c.width,e.width)}d=c.height-a.height;e=c.width-a.width;e<0&&!g._opts.widthElement&&(e=0);e=e>1?e:0;!g._opts.allowShrink&&d<0&&(d=0);if(d||e)try{window.console&&window.console.firebug,window.resizeBy(e,d),e&&window.moveBy(e/-2,0)}catch(a){}},_getDocumentSize:function(){var c=b("DOMDimensions").getDocumentDimensions();g._opts.strategy==="offsetHeight"&&(c.height=document.body.offsetHeight);if(g._opts.widthElement){var d=b("DOMQuery").scry(document.body,g._opts.widthElement)[0];d&&(c.width=b("DOMDimensions").getElementDimensions(d).width)}d=a.Dialog;d&&d.max_bottom&&d.max_bottom>c.height&&(c.height=d.max_bottom);return c},open:function(a,c,d,e){return b("Popup").open(a,d,c,e)}};e.exports=g}),null);
__d("PromiseUtil",["Promise","nullthrows","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g={allSettled:function(a){var c=b("Promise").all(a);return b("Promise").all(a.map(function(a){return b("Promise").resolve(a).then(void 0,function(a){return void 0})})).then(function(){return c})},allSettledInSeries:function(a){var c=[];return a.reduce(function(a,b){return a.then(b).then(function(){return void 0},function(a){c.push(a);return void 0})},b("Promise").resolve()).then(function(){if(c.length)throw c[0]})},exponentialBackoff:function(a,b,c){b===void 0&&(b=Math.sqrt(2));c===void 0&&(c=1);var d=c;c=function(){var a=d;d*=b;return a};return g.rateLimit(a,c)},forEach:function(a,c){return a.then(function(a){return b("Promise").resolve(c(a)).then(function(){return a})})},forEachError:function(a,c){return a.then(void 0,function(a){return b("Promise").resolve(c(a)).then(function(){throw a})})},iterateUntil:function(a,c){var d=function d(e){return c(e)?b("Promise").resolve(e):b("Promise").resolve(a(e)).then(d)};return d},pollUntilImpl:function(a,c){var d,e=new(b("Promise"))(function(b,e){var f=function(){try{var c=a();c&&b(c.value)}catch(a){e(a)}};d=setInterval(f,1e3*c)});return e["finally"](function(){return clearInterval(b("nullthrows")(d))})},pollUntil:function(a,b){b===void 0&&(b=1);return g.pollUntilImpl(function(){var b=a();return b?{value:b}:void 0},b)},rateLimit:function(a,b){__p&&__p();var c=[],d=void 0,e=0;return function(){var f=b();for(var h=arguments.length,i=new Array(h),j=0;j<h;j++)i[j]=arguments[j];c=i;d||(d=g.wait(e+f-Date.now()/1e3).then(function(){e=Date.now()/1e3;d=void 0;return a.apply(void 0,c)}));return d}},rateLimitWithLastResult:function(a,c){var d=!1,e=void 0;return function(){d||(b("promiseDone")(g.wait(c()),function(){return d=!1}),e=a.apply(void 0,arguments),d=!0);return e}},repeatUntil:function(a,c){var d=function d(){return b("Promise").resolve(a()).then(function(a){return c(a)?b("Promise").resolve(a):d()})};return d},repeatWhileErrorUntil:function(a,c,d){var e=function e(){return b("Promise").resolve(a()).then(function(a){c(a);return b("Promise").resolve(a)},function(a){return d(a)?e():b("Promise").reject(a)})};return e},series:function(a,c){c=c;return a.reduce(function(a,b){return a.then(b)},b("Promise").resolve(c))},wait:function(a){return 0<a?new(b("Promise"))(function(b,c){return setTimeout(b,1e3*a)}):b("Promise").resolve()},waitAtMost:function(a,b){return g.waitOrElse(a,b,function(){throw new Error("Promise timed out")})},waitOrElse:function(a,c,d){var e=!1;return b("Promise").race([a.then(function(a){e=!0;return a},function(a){e=!0;throw a}),g.wait(c).then(function(){return e?void 0:d()})])}};e.exports=g}),null);
__d("deepFreezeValue",["ImmutableValue"],(function(a,b,c,d,e,f){__p&&__p();function a(a){if(a===null||a===void 0)return;switch(typeof a){case"string":return;case"boolean":return;case"number":return;case"function":return;default:b("ImmutableValue").deepFreezeRootNode(a)}}e.exports=a}),null);
__d("FavIcon",["DOM"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i;function j(){var a=b("DOM").scry(document.head,"link");a&&a.forEach(function(a){(a.rel.indexOf("icon")!=-1||a.rel.indexOf("shortcut icon")!=-1)&&b("DOM").remove(a)})}a={isToggledResource:function(){return i&&g instanceof HTMLLinkElement&&g.href===i?!0:!1},set:function(a){g&&b("DOM").remove(g),j(),g=b("DOM").create("link",{type:"image/x-icon",rel:"icon",href:a}),b("DOM").appendContent(b("DOM").find(document,"head"),g)},setToggleResources:function(a,b){g=document.querySelector('link[rel*=icon][href*=".ico"]'),g instanceof HTMLLinkElement&&(h=b!=null?b:g.href,i=a)},toggle:function(){if(!g||!i)return;if(g.href===h){this.set(i);return}this.set(h)},toggleSet:function(a){if(!g||!i||!h)return;a=a?i:h;g.href!==a&&this.set(a)}};e.exports=a}),null);
__d("WorkGalahadAppTabChatsAction.react",["ix","fbt","Image.react","Link.react","MessengerURIConstants","React","asset"],(function(a,b,c,d,e,f,g,h){"use strict";function a(){return b("React").createElement(b("Link.react"),{"aria-label":h._("Create New Chat"),href:b("MessengerURIConstants").FACEBOOK_PREFIX+b("MessengerURIConstants").COMPOSE_SUBPATH},b("React").createElement(b("Image.react"),{src:g("470511")}))}e.exports=a}),null);
__d("StaticSearchSource",["AbstractSearchSource","SearchSourceCallbackManager","TokenizeUtil"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e,f){__p&&__p();var g;e===void 0&&(e=!1);f===void 0&&(f=!0);g=a.call(this)||this;g.$StaticSearchSource2=c;g.$StaticSearchSource3=e;g.$StaticSearchSource4=f;g.$StaticSearchSource1=new(b("SearchSourceCallbackManager"))({parseFn:b("TokenizeUtil").parse,matchFn:b("TokenizeUtil").isQueryMatch,indexFn:d});g.$StaticSearchSource1.addLocalEntries(g.$StaticSearchSource2);return g}var d=c.prototype;d.searchImpl=function(a,b,c){!a?b(this.$StaticSearchSource4?this.$StaticSearchSource2:[],a):(this.$StaticSearchSource3&&this.$StaticSearchSource1.setQueryStringAsExhausted(a),this.$StaticSearchSource1.search(a,b))};d.getSearchableEntries=function(){return this.$StaticSearchSource2};return c}(b("AbstractSearchSource"));e.exports=a}),null);
__d("CancelablePromise",["Promise","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){var c=this;this.$1=new(b("Promise"))(function(d,e){b("promiseDone")(a.then(function(a){return c.$2?e({isCanceled:!0}):d(a)})["catch"](function(a){return c.$2?e({isCanceled:!0}):e(a)}))});this.$2=!1}var c=a.prototype;c.getPromise=function(){return this.$1};c.cancel=function(){this.$2=!0};return a}();e.exports=a}),null);
__d("StrSet",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$2={},this.$1=0,a&&this.addAll(a)}var b=a.prototype;b.add=function(a){Object.prototype.hasOwnProperty.call(this.$2,a)||(this.$2[a]=!0,this.$1++);return this};b.addAll=function(a){a.forEach(this.add,this);return this};b.remove=function(a){Object.prototype.hasOwnProperty.call(this.$2,a)&&(delete this.$2[a],this.$1--);return this};b.removeAll=function(a){a.forEach(this.remove,this);return this};b.toArray=function(){return Object.keys(this.$2)};b.toMap=function(a){var b={};Object.keys(this.$2).forEach(function(c){b[c]=typeof a==="function"?a(c):a||!0});return b};b.contains=function(a){return Object.prototype.hasOwnProperty.call(this.$2,a)};b.count=function(){return this.$1};b.clear=function(){this.$2={};this.$1=0;return this};b.clone=function(){return new a(this)};b.forEach=function(a,b){Object.keys(this.$2).forEach(a,b)};b.map=function(a,b){return Object.keys(this.$2).map(a,b)};b.some=function(a,b){return Object.keys(this.$2).some(a,b)};b.every=function(a,b){return Object.keys(this.$2).every(a,b)};b.filter=function(b,c){return new a(Object.keys(this.$2).filter(b,c))};b.union=function(a){return this.clone().addAll(a)};b.intersect=function(a){return this.filter(function(b){return a.contains(b)})};b.difference=function(a){var b=this;return a.filter(function(a){return!b.contains(a)})};b.equals=function(a){__p&&__p();var b=function(a,b){return a===b?0:a<b?-1:1},c=this.toArray();a=a.toArray();if(c.length!==a.length)return!1;var d=c.length;c=c.sort(b);a=a.sort(b);while(d--)if(c[d]!==a[d])return!1;return!0};return a}();e.exports=a}),null);
__d("serializeFormQueryMap",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){return[].concat(Array.from(a.querySelectorAll("input")),Array.from(a.querySelectorAll("select")),Array.from(a.querySelectorAll("textarea")),Array.from(a.querySelectorAll("button")))}function h(a,b){__p&&__p();g(a).forEach(function(a){__p&&__p();if(!a.name||a.disabled)return;var c=a.type;if(c==="submit"||c==="reset"||c==="button"||c==="image"||c==="file")return;if((c==="radio"||c==="checkbox")&&!a.checked)return;if(a.nodeName==="SELECT"){for(var d=0,e=a.options.length;d<e;d++){var f=a.options[d];f.selected&&b("select",a.name,f.value)}return}b(c,a.name,a.value||"")})}function a(a){var b={};h(a,function(a,c,d){a=b[c];Object.prototype.hasOwnProperty.call(b,c)?Array.isArray(a)?a.push(d):b[c]=[a,d]:b[c]=d});return b}e.exports=a}),null);
__d("groupArray",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c={};a.forEach(function(d,e){e=b(d,e,a);c[e]||(c[e]=[]);c[e].push(d)});return c}e.exports=a}),null);
__d("intersectArrays",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];var d=b.splice(0,1)[0]||[],e=b.map(function(a){return new Set(a)});return d.filter(function(a){return e.every(function(b){return b.has(a)})})}e.exports=a}),null);
__d("range",[],(function(a,b,c,d,e,f){__p&&__p();function a(a,b,c){c=c==null||c===0?a<b?1:-1:c;var d=-1;b=Math.max(Math.ceil((b-a)/c),0);var e=Array(b);a=a;while(b--)e[++d]=a,a+=c;return e}e.exports=a}),null);
__d("Queue",[],(function(a,b,c,d,e,f){__p&&__p();var g={};a=function(){"use strict";__p&&__p();function a(a){this._timeout=null,this._interval=(a==null?void 0:a.interval)||0,this._processor=a==null?void 0:a.processor,this._queue=[],this._stopped=!0}var b=a.prototype;b._dispatch=function(a){__p&&__p();var b=this;a===void 0;if(this._stopped||this._queue.length===0)return;a=this._processor;if(a==null){this._stopped=!0;throw new Error("No processor available")}var c=this._interval;if(c!=null)a.call(this,this._queue.shift()),this._timeout=setTimeout(function(){return b._dispatch()},c);else while(this._queue.length)a.call(this,this._queue.shift())};b.enqueue=function(a){this._processor&&!this._stopped?this._processor(a):this._queue.push(a);return this};b.start=function(a){a&&(this._processor=a);this._stopped=!1;this._dispatch();return this};b.isStarted=function(){return!this._stopped};b.dispatch=function(){this._dispatch(!0)};b.stop=function(a){this._stopped=!0;a&&this._timeout!=null&&clearTimeout(this._timeout);return this};b.merge=function(a,b){if(b){(b=this._queue).unshift.apply(b,a._queue)}else{(b=this._queue).push.apply(b,a._queue)}a._queue=[];this._dispatch();return this};b.getLength=function(){return this._queue.length};a.get=function(b,c){var d;b in g?d=g[b]:d=g[b]=new a(c);return d};a.exists=function(a){return a in g};a.remove=function(a){return delete g[a]};return a}();e.exports=a}),null);
__d("BinaryIndexedTree",["invariant"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=function(a){return Math.floor(a/2)},i=a.Int32Array||function(a){var b=[];for(var a=a-1;a>=0;--a)b[a]=0;return b};function j(a){var b=1;while(b<a)b*=2;return b}b=function(){__p&&__p();function a(a){this.$1=a.length;this.$2=j(this.$1);this.$3=new i(2*this.$2);var b;for(b=0;b<this.$1;++b)this.$3[this.$2+b]=a[b];for(b=this.$2-1;b>0;--b)this.$3[b]=this.$3[2*b]+this.$3[2*b+1]}a.uniform=function(b,c){var d=[];for(var b=b-1;b>=0;--b)d[b]=c;return new a(d)};a.empty=function(b){return a.uniform(b,0)};var b=a.prototype;b.set=function(a,b){0<=a&&a<this.$1||g(0,5188,a);a=this.$2+a;this.$3[a]=b;a=h(a);for(;a!==0;a=h(a))this.$3[a]=this.$3[2*a]+this.$3[2*a+1]};b.get=function(a){0<=a&&a<this.$1||g(0,5188,a);a=this.$2+a;return this.$3[a]};b.getSize=function(){return this.$1};b.sumUntil=function(a){0<=a&&a<this.$1+1||g(0,5188,a);if(a===0)return 0;a=this.$2+a-1;var b=this.$3[a];for(;a!==1;a=h(a))a%2===1&&(b+=this.$3[a-1]);return b};b.sumTo=function(a){0<=a&&a<this.$1||g(0,5188,a);return this.sumUntil(a+1)};b.sum=function(a,b){a<=b||g(0,5189);return this.sumUntil(b)-this.sumUntil(a)};b.greatestLowerBound=function(a){__p&&__p();if(a<0)return-1;var b=1;if(this.$3[b]<=a)return this.$1;while(b<this.$2){var c=this.$3[2*b];a<c?b=2*b:(b=2*b+1,a-=c)}return b-this.$2};b.greatestStrictLowerBound=function(a){__p&&__p();if(a<=0)return-1;var b=1;if(this.$3[b]<a)return this.$1;while(b<this.$2){var c=this.$3[2*b];a<=c?b=2*b:(b=2*b+1,a-=c)}return b-this.$2};b.leastUpperBound=function(a){return this.greatestStrictLowerBound(a)+1};b.leastStrictUpperBound=function(a){return this.greatestLowerBound(a)+1};return a}();e.exports=b}),null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("object-assign-4.1.1",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={};var g={exports:a};function h(){__p&&__p();var a=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function d(a){if(a===null||a===void 0)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(a)}function e(){__p&&__p();try{if(!Object.assign)return!1;var a=new String("abc");a[5]="de";if(Object.getOwnPropertyNames(a)[0]==="5")return!1;var b={};for(var a=0;a<10;a++)b["_"+String.fromCharCode(a)]=a;a=Object.getOwnPropertyNames(b).map(function(a){return b[a]});if(a.join("")!=="0123456789")return!1;var c={};"abcdefghijklmnopqrst".split("").forEach(function(a){c[a]=a});return Object.keys(Object.assign({},c)).join("")!=="abcdefghijklmnopqrst"?!1:!0}catch(a){return!1}}g.exports=e()?Object.assign:function(e,f){__p&&__p();var g,h=d(e),i;for(var j=1;j<arguments.length;j++){g=Object(arguments[j]);for(var k in g)b.call(g,k)&&(h[k]=g[k]);if(a){i=a(g);for(var l=0;l<i.length;l++)c.call(g,i[l])&&(h[i[l]]=g[i[l]])}}return h}}var i=!1,j=function(){i||(i=!0,h());return g.exports};b=function(a){switch(a){case void 0:return j()}};e.exports=b}),null);
__d("URLSearchParams",[],(function(a,b,c,d,e,f){__p&&__p();var g=/\+/g,h=/[!\'()*]/g,i=/%20/g;function j(a){return encodeURIComponent(a).replace(i,"+").replace(h,function(a){return"%"+a.charCodeAt(0).toString(16)})}function k(a){return decodeURIComponent((a=a)!=null?a:"").replace(g," ")}var l=typeof Symbol==="function"?Symbol.iterator:"@@iterator";a=function(){"use strict";__p&&__p();function a(a){a===void 0&&(a="");a=a;a[0]==="?"&&(a=a.substr(1));this.$1=a.length?a.split("&").map(function(a){a=a.split("=");var b=a[0];a=a[1];return[k(b),k(a)]}):[]}var b=a.prototype;b.append=function(a,b){this.$1.push([a,String(b)])};b["delete"]=function(a){for(var b=0;b<this.$1.length;b++)this.$1[b][0]===a&&(this.$1.splice(b,1),b--)};b.entries=function(){return this.$1[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]()};b.get=function(a){for(var b=0,c=this.$1.length;b<c;b++)if(this.$1[b][0]===a)return this.$1[b][1];return null};b.getAll=function(a){var b=[];for(var c=0,d=this.$1.length;c<d;c++)this.$1[c][0]===a&&b.push(this.$1[c][1]);return b};b.has=function(a){for(var b=0,c=this.$1.length;b<c;b++)if(this.$1[b][0]===a)return!0;return!1};b.keys=function(){var a=this.$1.map(function(a){var b=a[0];a[1];return b});return a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]()};b.set=function(a,b){var c=!1;for(var d=0;d<this.$1.length;d++)this.$1[d][0]===a&&(c?(this.$1.splice(d,1),d--):(this.$1[d][1]=String(b),c=!0));c||this.$1.push([a,String(b)])};b.toString=function(){return this.$1.map(function(a){var b=a[0];a=a[1];return j(b)+"="+j(a)}).join("&")};b.values=function(){var a=this.$1.map(function(a){a[0];a=a[1];return a});return a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]()};b[l]=function(){return this.entries()};return a}();e.exports=a}),null);