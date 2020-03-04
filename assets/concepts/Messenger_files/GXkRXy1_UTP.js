if (self.CavalryLogger) { CavalryLogger.start_js(["sBbYQ"]); }

__d("CometRouteStoreContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext();e.exports=a}),null);
__d("CometLruCache",["recoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(){__p&&__p();function a(a){this.$1=a,a<=0&&b("recoverableViolation")("CometLruCache: Unable to create instance of cache with zero or negative capacity.","CometLruCache"),this.$2=new Map()}var c=a.prototype;c.set=function(a,b){this.$2["delete"](a);this.$2.set(a,b);if(this.$2.size>this.$1){a=this.$2.keys().next();a.done||this.$2["delete"](a.value)}};c.get=function(a){var b=this.$2.get(a);b!=null&&(this.$2["delete"](a),this.$2.set(a,b));return b};c.has=function(a){return this.$2.has(a)};c["delete"]=function(a){this.$2["delete"](a)};c.size=function(){return this.$2.size};c.capacity=function(){return this.$1-this.$2.size};c.clear=function(){this.$2.clear()};return a}();function a(a){return new g(a)}e.exports={create:a}}),null);
__d("ConstUriUtils",["CometLruCache","PHPQuerySerializer","PHPQuerySerializerNoEncoding","UriNeedRawQuerySVConfig","URIRFC3986","URISchemes","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("CometLruCache").create(500),h=new RegExp("(^|\\.)facebook\\.com$","i"),i=new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),j=new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),k=b("UriNeedRawQuerySVConfig").uris.map(function(a){return p(a)});function l(a,b){__p&&__p();var c={};for(var a=a.entries(),d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;c[f[0]]=f[1]}return b.serialize(c)}function m(a,c){__p&&__p();var d=b("PHPQuerySerializer");["http","https"].includes(c)&&k.some(function(b){var c=b.components.domain;if(a===""||c==="")return!1;if(a.endsWith(c)){c=a.length-c.length-1;if(c===-1||a[c]===".")return b.valid}})&&(d=b("PHPQuerySerializerNoEncoding"));return d}function n(a,b){var c=b.protocol!=null&&b.protocol!==""?b.protocol:a.getProtocol();c=b.domain!=null?m(b.domain,c):a.getSerializer();c={domain:a.getDomain(),fragment:a.getFragment(),fragmentSeparator:a.hasFragmentSeparator(),isGeneric:a.isGeneric(),path:a.getPath(),port:a.getPort(),protocol:a.getProtocol(),queryParams:a.getQueryParams(),serializer:c,subdomain:a.getSubDomain()};a=babelHelpers["extends"]({},c,b);return r.getUribyObject(a)}function o(a){var b=a.protocol!==""?a.protocol+":"+(a.isGeneric?"":"//"):"",c=a.domain!==""?a.domain:"",d=a.port!==""?":"+a.port:"",e=a.path!==""?a.path:b!==""||c!==""||d!==""?"/":"",f=l(a.queryParams,a.serializer),g=f.length>0?"?":"",h=a.fragment!==""?"#"+a.fragment:"";a=a.fragment===""&&a.fragmentSeparator?"#":"";return""+b+c+d+e+g+f+a+h}function p(a){var c=a.trim();c=b("URIRFC3986").parse(c)||{fragment:null,host:null,isGenericURI:!1,query:null,scheme:null,userinfo:null};var d=c.host||"",e=d.split(".");e=e.length>=3?e[0]:"";var f=m(d,c.scheme||""),g=f.deserialize(c.query||"")||{};g=new Map(Object.entries(g));g=q({domain:d,fragment:c.fragment||"",fragmentSeparator:c.fragment==="",isGeneric:c.isGenericURI,path:c.path||"",port:c.port!=null?String(c.port):"",protocol:(c.scheme||"").toLowerCase(),queryParams:g,serializer:f,subdomain:e,userInfo:(d=c==null?void 0:c.userinfo)!=null?d:""},a);return g}function q(a,c){__p&&__p();var d={components:babelHelpers["extends"]({},a),error:"",valid:!0},e=d.components;if(!b("URISchemes").isAllowed(a.protocol)){d.valid=!1;d.error='The URI protocol "'+String(a.protocol)+'" is not allowed.';return d}if(j.test(a.domain||"")){d.valid=!1;d.error="This is an unsafe domain "+String(a.domain);return d}e.port=a.port!=null&&String(a.port)||"";if(Boolean(a.userInfo)){d.valid=!1;d.error="Invalid URI: (userinfo is not allowed in a URI "+String(a.userInfo)+")";return d}a=c!=null&&c!==""?c:o(e);if(e.domain===""&&e.path.indexOf("\\")!==-1){d.valid=!1;d.error="Invalid URI: (no domain but multiple back-slashes "+a+")";return d}if(!e.protocol&&i.test(a)){d.valid=!1;d.error="Invalid URI: (unsafe protocol-relative URI "+a+")";return d}if(e.domain!==""&&e.path!==""&&!e.path.startsWith("/")){d.valid=!1;d.error="Invalid URI: (domain and pathwhere path lacks leading slash "+a+")";return d}return d}var r=function(){__p&&__p();function a(a){this.queryParams=new Map(),this.domain=a.domain,this.fragment=a.fragment,this.fragmentSeparator=Boolean(a.fragmentSeparator),this.isGenericProtocol=Boolean(a.isGeneric),this.path=a.path,this.port=a.port,this.protocol=a.protocol,this.queryParams=a.queryParams,this.serializer=a.serializer,this.subdomain=a.subdomain}var c=a.prototype;c.addQueryParam=function(a,b){if(Boolean(a)){var c=this.getQueryParams();c.set(a,b);return n(this,{queryParams:c})}return this};c.addQueryParams=function(a){if(a.size>0){var b=this.getQueryParams();a.forEach(function(a,c){b.set(c,a)});return n(this,{queryParams:b})}return this};c.addQueryParamString=function(a){__p&&__p();if(Boolean(a)){a=a.startsWith("?")?a.slice(1):a;var b=this.getQueryParams();a.split("&").map(function(a){a=a.split("=");var c=a[0];a=a[1];b.set(c,a)});return n(this,{queryParams:b})}return this};c.addTrailingSlash=function(){var a=this.getPath();return a.length>0&&a[a.length-1]!=="/"?this.setPath(a+"/"):this};c.getDomain=function(){return this.domain};c.getFragment=function(){return this.fragment};c.getOrigin=function(){var a=this.getPort();return this.getProtocol()+"://"+this.getDomain()+(a?":"+a:"")};c.getPath=function(){return this.path};c.getPort=function(){return this.port};c.getProtocol=function(){return this.protocol.toLowerCase()};c.getQualifiedUri=function(){if(!this.getDomain()){var b=String(window.location.href);b=b.slice(0,b.indexOf("/",b.indexOf(":")+3));return a.getUri(b+this.toString())}return this};c.getQueryParam=function(a){a=this.queryParams.get(a);if(typeof a==="string")return a;else{a=JSON.stringify(a);return a==null?a:JSON.parse(a)}};c.getQueryParams=function(){return new Map(JSON.parse(JSON.stringify(Array.from(this.queryParams))))};c.getQueryString=function(){return l(this.queryParams,this.serializer)};c.getRegisteredDomain=function(){if(!this.getDomain())return"";if(!this.isFacebookUri())return null;var a=this.getDomain().split("."),b=a.indexOf("facebook");b===-1&&(b=a.indexOf("workplace"));return a.slice(b).join(".")};c.getSerializer=function(){return this.serializer};c.getSubDomain=function(){return this.subdomain};c.getUnqualifiedUri=function(){if(this.getDomain()){var b=this.toString();return a.getUri(b.slice(b.indexOf("/",b.indexOf(":")+3)))}return this};a.getUri=function(c){__p&&__p();c=c.trim();var d=g.get(c);if(d==null){var e=p(c);if(e.valid)d=new a(e.components),g.set(c,d);else{b("recoverableViolation")(e.error,"ConstUri");return null}}return d};a.getUribyObject=function(c){__p&&__p();var d=o(c),e=g.get(d);if(e==null){c=q(c);if(c.valid)e=new a(c.components),g.set(d,e);else{b("recoverableViolation")(c.error,"ConstUri");return null}}return e};c.hasFragmentSeparator=function(){return this.fragmentSeparator};c.isEmpty=function(){return!(this.getPath()||this.getProtocol()||this.getDomain()||this.getPort()||this.queryParams.size>0||this.getFragment())};c.isFacebookUri=function(){var a=this.toString();if(a==="")return!1;return!this.getDomain()&&!this.getProtocol()?!0:["https","http"].indexOf(this.getProtocol())!==-1&&h.test(this.getDomain())};c.isGeneric=function(){return this.isGenericProtocol};c.isSameOrigin=function(a){if(this.getProtocol()&&this.getProtocol()!==a.getProtocol())return!1;if(this.getDomain()&&this.getDomain()!==a.getDomain())return!1;if(this.getPort()&&this.getPort()!==a.getPort())return!1;return this.toString()===""||a.toString()===""?!1:!0};c.isSubdomainOfDomain=function(b){return a.isSubdomainOfDomain(this.domain,b,this.serializer)};a.isSubdomainOfDomain=function(a,b,c){__p&&__p();if(b===""||a==="")return!1;if(a.endsWith(b)){c=a.length-b.length-1;if(c===-1||a[c]==="."){a=this.getUri(b);return a!=null}}return!1};c.isSecure=function(){return this.getProtocol()==="https"};c.removeQueryParams=function(a){if(Array.isArray(a)&&a.length>0){var b=this.getQueryParams();a.map(function(a){return b["delete"](a)});return n(this,{queryParams:b})}return this};c.removeQueryParam=function(a){if(Boolean(a)){var b=this.getQueryParams();b["delete"](a);return n(this,{queryParams:b})}return this};c.replaceQueryParam=function(a,b){if(Boolean(a)){var c=this.getQueryParams();c.set(a,b);return n(this,{queryParams:c})}return this};c.replaceQueryParams=function(a){return n(this,{queryParams:a})};c.replaceQueryParamString=function(a){__p&&__p();if(a!=null){a=a.startsWith("?")?a.slice(1):a;var b=this.getQueryParams();a.split("&").map(function(a){a=a.split("=");var c=a[0];a=a[1];b.set(c,a)});return n(this,{queryParams:b})}return this};c.setDomain=function(a){if(Boolean(a)){var b=a.split(".");b=b.length>=3?b[0]:"";return n(this,{domain:a,subdomain:b})}return this};c.setFragment=function(a){return Boolean(a)?a==="#"?n(this,{fragmentSeparator:!0}):n(this,{fragment:a}):this};c.setPath=function(a){return a!=null?n(this,{path:a}):this};c.setPort=function(a){return Boolean(a)?n(this,{port:a}):this};c.setProtocol=function(a){return Boolean(a)?n(this,{protocol:a}):this};c.setSecure=function(a){return this.setProtocol(a?"https":"http")};c.setSubDomain=function(a){if(Boolean(a)){var b=this.domain.split(".");b.length>=3?b[0]=a:b.unshift(a);return n(this,{domain:b.join("."),subdomain:a})}return this};c.stripTrailingSlash=function(){return this.setPath(this.getPath().replace(/\/$/,""))};c.toString=function(){this.stringValue==null&&(this.stringValue=o({domain:this.domain,fragment:this.fragment,fragmentSeparator:this.fragmentSeparator,isGeneric:this.isGenericProtocol,path:this.path,port:this.port,protocol:this.protocol,queryParams:this.queryParams,serializer:this.serializer,subdomain:this.subdomain,userInfo:""}));return this.stringValue};a.isValidUri=function(b){var c=g.get(b);if(c!=null)return!0;c=p(b);if(c.valid){g.set(b,new a(c.components));return!0}return!1};return a}();function a(a){if(a instanceof r)return a;else return null}e.exports={getUri:r.getUri,isConstUri:a,isSubdomainOfDomain:r.isSubdomainOfDomain,isValidUri:r.isValidUri}}),null);
__d("isAppsDotUri",["URI"],(function(a,b,c,d,e,f){"use strict";function a(a){a=new(b("URI"))(a);var c=a.getRegisteredDomain();return a.getSubdomain()==="apps"&&c!=null&&c!==""}e.exports=a}),null);
__d("isCometRouterUrl",["ConstUriUtils","Env","URI","gkx","isAppsDotUri","isFacebookURI","isLinkshimURI","memoizeStringOnly"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(a){return a.indexOf("/l.php")!==-1||a.indexOf("/si/ajax/l/")!==-1||a.indexOf("/l/")!==-1||a.indexOf("l/")!==-1},h=function(a){return a==="/l.php"||a.startsWith("/si/ajax/l/")||a.startsWith("/l/")||a.startsWith("l/")},i=function(a){var c=a.getDomain();return c==null?!1:b("isFacebookURI")(a)&&c.startsWith("www")},j=/^(\/\w)/;a=b("memoizeStringOnly")(function(a){__p&&__p();if(a==null||a.startsWith("#"))return!1;var c=null,d=!1;if(b("gkx")("1103940")){c=b("ConstUriUtils").getUri(a);if(c!=null){if(!h(c.getPath())&&j.test(a))return!0;var e=b("ConstUriUtils").getUri(window.location.href);d=e&&c.isSameOrigin(e)||!1}}else{if(!g(a)&&j.test(a))return!0;c=new(b("URI"))(a);d=c.isSameOrigin()}return c!=null?!b("isLinkshimURI")(c)&&(d||b("isAppsDotUri")(a)||Boolean(b("Env").isCometSubdomain)&&i(c)):!1});e.exports=a}),null);
__d("normalizeCometRouterUrl",["URI","absoluteToRelative","isCometRouterUrl"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[b("absoluteToRelative"),a,c,d];function a(a){return a[a.length-1]==="/"?a.substring(0,a.length-1):a}function c(a){return a[0]!=="/"?"/"+a:a}function d(a){var c=new(b("URI"))(a),d=c.getQueryString();if(d==null||d==="")return a;a=d.split("&").sort().join("&");return c.getPath()+"?"+a}f=function(a){return!b("isCometRouterUrl")(a)?a:g.reduce(function(a,b){return b(a)},a)};e.exports=f}),null);
__d("useCometRoute",["CometRouteStoreContext","JSTracing","React","isCometRouterUrl","normalizeCometRouterUrl","promiseDone","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useContext,h=b("React").useEffect,i=b("React").useMemo,j=b("React").useState;function a(a){__p&&__p();var c=g(b("CometRouteStoreContext")),d=i(function(){return a!=null&&b("isCometRouterUrl")(a)?b("normalizeCometRouterUrl")(a):null},[a]),e=j(function(){return d!=null&&c!=null?c.getRoute(d):null}),f=e[0],k=e[1];h(function(){__p&&__p();if(d!=null&&c!=null){var e=!1;b("JSTracing").clear(function(){b("promiseDone")(c.fetchRoute(d),function(a){e!==!0&&k(a)},function(c){var d;b("recoverableViolation")("Something went wrong with fetching "+((d=a)!=null?d:"<null>")+": "+(c==null?void 0:c.errorType)+", "+(c==null?void 0:c.errorMsg),"comet_infa")})});return function(){e=!0}}},[c,d,a]);return f!=="UNMATCHED_TOKEN"?f:null}e.exports=a}),null);
__d("convertDomainFromApps",["URI","isAppsDotUri"],(function(a,b,c,d,e,f){"use strict";function a(a){if(b("isAppsDotUri")(a)){var c=new(b("URI"))(a),d=c.getPath();c.setPath("/apps"+d);return c.getUnqualifiedURI().valueOf()}return a}e.exports=a}),null);
__d("Text.next",["React","TextAncestorContext.react","createLayoutEvent","getDOMComponentType","joinClasses","recoverableViolation","stylex","useResizeObserver"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useCallback,h=b("React").useContext;function a(a){__p&&__p();var c=a.accessibilityLabel,d=a.accessibilityLiveRegion,e=a.accessibilityRelationship,f=a.accessibilityRole,j=a.accessibilityState,k=a.children,l=a.className_DEPRECATED,m=a.direction,n=a.focusable,o=a.forwardedRef,p=a.link,q=a.listeners,r=a.nativeID,s=a.numberOfLines,t=a.onLayout,u=a.selectable,v=a.style,w=a.testID,x=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["accessibilityLabel","accessibilityLiveRegion","accessibilityRelationship","accessibilityRole","accessibilityState","children","className_DEPRECATED","direction","focusable","forwardedRef","link","listeners","nativeID","numberOfLines","onLayout","selectable","style","testID","xstyle"]);var y=b("getDOMComponentType")(f,p),z=j==null?void 0:j.disabled,A=j==null?void 0:j.hidden,B=y==="a"&&z!==!0,C=h(b("TextAncestorContext.react")),D;switch(m){case"none":break;default:m!=null?D=m:C||(D="auto");break}var E=b("useResizeObserver")(g(function(a,c){if(t!=null){a=b("createLayoutEvent")(c);t(a)}},[t]));m=g(function(a){typeof o==="function"?o(a):o!=null&&(o.current=a),E(a)},[o,E]);var F,G=y==="a"||f==="button";G?z===!0||A===!0||n===!1?F=-1:F=0:z!==!0&&A!==!0&&n===!0&&(F=0);G=p==null?void 0:p.download;n=(G===!0||typeof G==="string")&&B;return b("React").createElement(y,babelHelpers["extends"]({},a,{"aria-atomic":d!=null?!0:void 0,"aria-busy":j==null?void 0:j.busy,"aria-checked":j==null?void 0:j.checked,"aria-disabled":z===!0?z:void 0,"aria-expanded":j==null?void 0:j.expanded,"aria-hidden":A,"aria-invalid":j==null?void 0:j.invalid,"aria-pressed":j==null?void 0:j.pressed,"aria-readonly":j==null?void 0:j.readonly,"aria-required":j==null?void 0:j.required,"aria-selected":j==null?void 0:j.selected,"aria-activedescendant":e==null?void 0:e.activedescendant,"aria-controls":e==null?void 0:e.controls,"aria-describedby":e==null?void 0:e.describedby,"aria-details":e==null?void 0:e.details,"aria-haspopup":e==null?void 0:e.haspopup,"aria-labelledby":e==null?void 0:e.labelledby,"aria-owns":e==null?void 0:e.owns,download:n?G:void 0,href:B?p==null?void 0:p.url:void 0,rel:B?p==null?void 0:p.rel:void 0,target:B?p==null?void 0:p.target:void 0,"aria-label":c,"aria-live":d,children:C?k:b("React").createElement(b("TextAncestorContext.react").Provider,{value:!0},k),className:b("joinClasses")(b("stylex")(i.root,C&&i.hasAncestor,s===1&&i.oneLine,s!=null&&s>1&&i.multiLine,u===!1&&i.notSelectable,x),l),"data-testid":w,dir:D,id:r,listeners:q,ref:m,role:f==="none"?"presentation":f,style:s!=null&&s>1?babelHelpers["extends"]({},v,{WebkitLineClamp:s}):v,tabIndex:F}))}var i={root:{backgroundColor:"gwqq051r",borderColor:"kp27d9ay",borderStyle:"j19bpbye",borderWidth:"cqfod8h9",boxSizing:"j15lmy46",display:"gg4ufbfw",listStyle:"ml8yefb7",marginTop:"sjt171p7",marginEnd:"mbud3w5v",marginBottom:"q1lreroj",marginStart:"ne1cnhmk",paddingTop:"nmrbqzff",paddingEnd:"dkz24dle",paddingBottom:"jsjdzft0",paddingStart:"hrt4ufkz",WebkitTapHighlightColor:"nzcichbp",textAlign:"s3yjlek5",textDecoration:"jum59pk4",whiteSpace:"snt3byg9",wordWrap:"hslttvbr",zIndex:"l2p5uvp1"},hasAncestor:{color:"ql2chy0m",fontFamily:"hrhduwpi",fontSize:"f2ftpaej",fontStretch:"a1vokb9m",fontStyle:"j72syopc",fontVariant:"ojhknlch",fontWeight:"luxzoy8x",lineHeight:"sejv1s5w",whiteSpace:"kyr7t6wt"},notSelectable:{userSelect:"xtmsxcvy"},oneLine:{maxWidth:"k35vlvlu",overflowX:"lrmmhk8i",overflowY:"jc90bbdt",textOverflow:"s3q82v3u",whiteSpace:"on8ca0v2"},multiLine:{WebkitBoxOrient:"awifqwkv",display:"lx4feg8q",maxWidth:"k35vlvlu",overflowX:"lrmmhk8i",overflowY:"jc90bbdt",textOverflow:"s3q82v3u"}};e.exports=a}),null);
__d("PressableText.react",["Pressability","React","Text.next","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("Pressability").usePressability,h=b("React").useState;function a(a){__p&&__p();var c=h(!1),d=c[0];c=c[1];var e=h(!1),f=e[0];e=e[1];var k=h(!1),l=k[0];k=k[1];var m=h(!1),n=m[0];m=m[1];var o=a.children,p=a.className_DEPRECATED,q=a.disabled,r=a.focusable,s=a.preventDefault,t=a.style,u=a.xstyle,v=a.onBlur,w=a.onFocus,x=a.onFocusChange,y=a.onFocusVisibleChange,z=a.onHoverChange,A=a.onHoverEnd,B=a.onHoverMove,C=a.onHoverStart,D=a.onContextMenu,E=a.onPress,F=a.onPressChange,G=a.onPressEnd,H=a.onPressMove,I=a.onPressStart,J=a.pressRetentionOffset,K=a.preventContextMenu,L=a.testOnly_state;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","className_DEPRECATED","disabled","focusable","preventDefault","style","xstyle","onBlur","onFocus","onFocusChange","onFocusVisibleChange","onHoverChange","onHoverEnd","onHoverMove","onHoverStart","onContextMenu","onPress","onPressChange","onPressEnd","onPressMove","onPressStart","pressRetentionOffset","preventContextMenu","testOnly_state"]);d={disabled:q===!0||(L==null?void 0:L.disabled)===!0||!1,focused:d||(L==null?void 0:L.focused)===!0,focusVisible:f||(L==null?void 0:L.focusVisible)===!0,hovered:l||(L==null?void 0:L.hovered)===!0,pressed:n||(L==null?void 0:L.pressed)===!0};f=typeof o==="function"?o(d):o;l=typeof p==="function"?p(d):p;n=typeof t==="function"?t(d):t;L=typeof u==="function"?u(d):u;o=babelHelpers["extends"]({},a,{children:f,className_DEPRECATED:l,focusable:r!==!1,style:n,xstyle:[j.root,d.disabled&&j.disabled,!d.focusVisible&&j.focusNotVisible,L]});p=g({onBlur:v,onFocus:w,onFocusChange:i(c,x),onFocusVisibleChange:i(e,y),onHoverChange:i(k,z),onHoverEnd:A,onHoverMove:B,onHoverStart:C,onContextMenu:D,onPress:E,onPressChange:i(m,F),onPressEnd:G,onPressMove:H,onPressStart:I,disabled:q,pressRetentionOffset:J,preventContextMenu:K,preventDefault:s==null?!0:s});return b("React").createElement(b("Text.next"),babelHelpers["extends"]({},o,{listeners:p}))}function i(a,b){return function(c){a(c),b&&b(c)}}var j={root:{cursor:"oa93ft74",touchAction:"p70ern7q"},disabled:{cursor:"jiz4xmru"},focusNotVisible:{outline:"isl1h4mh"}};e.exports=a}),null);
__d("CometFeedClickEventsLoggerContext",["React","emptyFunction"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(b("emptyFunction"));e.exports=a}),null);
__d("CometFeedLoggingExtraFieldsContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext({});e.exports=a}),null);
__d("getAbsoluteUrl",["URI"],(function(a,b,c,d,e,f){"use strict";function a(a){return a===null||a===void 0||a.trim()==="#"?a:new(b("URI"))(a).getQualifiedURI().toString()}e.exports=a}),null);
__d("useCometClickEventLogger",["CometFeedClickEventsLoggerContext","CometFeedLoggingExtraFieldsContext","CometTrackingCodeContext","CometTrackingNodesContext","React","getAbsoluteUrl"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useCallback,h=b("React").useContext;function a(){var a=h(b("CometFeedClickEventsLoggerContext")),c=h(b("CometTrackingNodesContext")),d=h(b("CometTrackingCodeContext")),e=d.encrypted_tracking[0],f=h(b("CometFeedLoggingExtraFieldsContext"));return g(function(d,g,h,i){h=b("getAbsoluteUrl")(h);a(d,c,e,g,h,f,i)},[a,c,e,f])}e.exports=a}),null);
__d("useExperimentalFeedTracking",["requireDeferred","React","useCometClickEventLogger","uuid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("requireDeferred")("Banzai"),h=b("React").useEffect,i=b("React").useRef;function a(a,c){__p&&__p();var d=i(null),e=b("useCometClickEventLogger")();h(function(){__p&&__p();var a=d.current;function f(a){var d=a.buttons,f=a.timeStamp,h=a.type,i=h==="contextmenu"?2:d===4?1:0;a.stopPropagation();var j=b("uuid")();g.loadImmediately(function(a){var b=babelHelpers["extends"]({},a.VITAL,{signal:!0});a.post("comet_metrics:click_audit",{click_type:i===1?"middle_click":i===2?"right_click":"",client_trace_id:j,href:c,ts:f},b)});e(f,i,c,j)}a&&(a.addEventListener("click",f),a.addEventListener("contextmenu",f))},[d,c,e]);return a?function(b){typeof a==="function"?a(b):a.current=b,d.current=b}:d}e.exports=a}),null);
__d("useFeedPressEventHandler",["requireDeferred","React","useCometClickEventLogger","uuid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("requireDeferred")("Banzai"),h=b("React").useCallback;function a(a,c){__p&&__p();var d=b("useCometClickEventLogger")();return h(function(e){__p&&__p();a&&a(e);var f=e.buttons,h=e.timeStamp;e=e.type;if(e==="press"||e==="contextmenu"||e==="pressstart"&&f===4){var i=e==="contextmenu"?2:f===4?1:0,j=b("uuid")();g.loadImmediately(function(a){var b=babelHelpers["extends"]({},a.VITAL,{signal:!0});a.post("comet_metrics:click_audit",{click_type:i===1?"middle_click":i===2?"right_click":"",client_trace_id:j,href:c,ts:h},b)});d(h,i,c,j)}},[a,d,c])}e.exports=a}),null);
__d("BaseButton.flare.react",["Pressable.react","PressableText.react","React","gkx","useExperimentalFeedTracking","useFeedPressEventHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();c=b("React").createContext;var g=b("React").useCallback,h=b("React").useContext,i=c(!1);function a(a,c){__p&&__p();var d=a["aria-activedescendant"],e=a["aria-checked"],f=a["aria-controls"],j=a["aria-describedby"],k=a["aria-expanded"],l=a["aria-haspopup"],m=a["aria-hidden"],n=a["aria-invalid"],o=a["aria-label"],p=a["aria-labelledby"],q=a.children,r=a.className_DEPRECATED,s=a.disabled;s=s===void 0?!1:s;var t=a.display;t=t===void 0?"inline":t;var u=a.focusable,v=a.id,w=a.label,x=a.onBlur,y=a.onClick,z=a.onContextMenu,A=a.onFocus,B=a.onFocusChange,C=a.onFocusVisibleChange,D=a.onHoverChange,E=a.onMouseDown,F=a.onMouseOut,G=a.onMouseOver,H=a.onPressChange,I=a.onPressOut,J=a.role,K=a.preventContextMenu,L=a.style,M=a.suppressHydrationWarning,N=a.testid,O=a.testOnly_pressed;O=O===void 0?!1:O;a=a.xstyle;var P=h(i);J=J==="presentation"?"none":J;var Q=g(function(a){a=a.children;return b("React").createElement(i.Provider,{value:!0},a)},[]);y=y;E=E;I=I;x=x;A=A;G=G;F=F;z=z;var R=c,S=y,T=E,U=z;b("gkx")("1115188")?R=b("useExperimentalFeedTracking")(c):(S=b("useFeedPressEventHandler")(y),T=b("useFeedPressEventHandler")(E),U=b("useFeedPressEventHandler")(z));y={accessibilityLabel:(c=o)!=null?c:w,accessibilityRelationship:{activedescendant:d,controls:f,describedby:j,haspopup:l,labelledby:p},accessibilityState:{checked:e,disabled:s,expanded:k,hidden:m,invalid:n},className_DEPRECATED:r,disabled:s,focusable:u,forwardedRef:R,nativeID:v,onBlur:x,onContextMenu:U,onFocus:A,onFocusChange:B,onFocusVisibleChange:C,onHoverChange:D,onHoverEnd:F,onHoverStart:G,onPress:S,onPressChange:H,onPressEnd:I,onPressStart:T,preventContextMenu:K,style:L,testID:N,testOnly_state:{disabled:!1,focusVisible:!1,focused:!1,hovered:!1,pressed:O},xstyle:a};if(t==="block"){E=J==="menuitem"||J==="none"||J==="switch"||J==="checkbox"||J==="radio"?J:"button";z=b("React").createElement(b("Pressable.react"),babelHelpers["extends"]({},y,{accessibilityRole:E}),b("React").createElement(Q,null,q))}else{o=J==="menuitem"||J==="none"?J:"button";z=b("React").createElement(b("PressableText.react"),babelHelpers["extends"]({},y,{accessibilityRole:o,direction:"none",suppressHydrationWarning:M}),b("React").createElement(Q,null,q))}return P?b("React").createElement("object",{type:"nested/pressable"},z):z}e.exports=b("React").forwardRef(a)}),null);
__d("CometClickIDParameterUtils",["ConstUriUtils","isCdnURI","isClickIDBlacklistSVDomainURI","isFacebookSVDomainURI","isFacebookURI","isFbDotComURI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="fbclid";c="doubleclick.net";var h=(d={},d[c]=[{extractor:function(a){a=a.getQueryString();return a!=null&&a.startsWith("http")?b("ConstUriUtils").getUri(a):null},injector:function(a,b,c){b=b.addQueryParam(g,c);if(b!=null){c=a.replaceQueryParams(b.getQueryParams());if(c!=null)return c}return a}}],d);function i(a){return a.getOrigin()!=="://"}function j(a){__p&&__p();var b=Object.keys(h).filter(function(b){return a.getDomain().endsWith(b)});b=b[0]||null;b=b!=null?h[b]:null;if(b==null)return null;b=b.map(function(b){var c=b.extractor(a);return c==null?null:{injector:b.injector,uri:c}}).filter(function(a){return a!=null});return b[0]||null}function k(a){var c=b("isClickIDBlacklistSVDomainURI")(a);if(c)return!0;c=j(a);return c!=null?k(c.uri):!1}function l(a){return!b("isFacebookURI")(a)&&!b("isFacebookSVDomainURI")(a)&&!b("isCdnURI")(a)&&!b("isFbDotComURI")(a)&&i(a)&&["http","https"].includes(a.getProtocol())&&!k(a)}function m(a,b){var c=j(a);if(c!=null)return c.injector(a,c.uri,b);c=a.addQueryParam(g,b);return c!=null?c:a}function a(a,b){return l(a)?m(a,b):a}e.exports={appendClickIDQueryParam:a}}),null);
__d("CometLynxGeneration",["ConstUriUtils","LinkshimHandlerConfig"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ConstUriUtils").getUri("/l.php");g!=null&&(g=g.setDomain(b("LinkshimHandlerConfig").linkshim_host));var h={getLynxURIProtocol:function(a){return b("LinkshimHandlerConfig").always_use_https?"https":a.getProtocol()==="http"?"http":"https"},getShimURI:function(){return g},getShimmedHref:function(a,b,c){var d=h.getLynxURIProtocol(a),e=h.getShimURI();e!=null&&(e=e.addQueryParams(new Map(Object.entries([["h",b],["u",a.toString()]]))));e!=null&&(e=e.setProtocol(d));b=c==null?void 0:c.trackingNodes;d=c==null?void 0:c.callbacks;b&&b.length&&e!=null&&(e=e.addQueryParam("__tn__",b.join("")));d&&d.length&&e!=null&&(e=e.addQueryParam("c",d));return e!=null?e:a}};e.exports=h}),null);
__d("CometLinkShimUtils",["ClickIDParameterUtils","CometClickIDParameterUtils","CometLynxGeneration","ConstUriUtils","LinkshimHandlerConfig","LynxGeneration","Random","URI","gkx","isFacebookURI","isLinkshimURI","killswitch"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=/^(#|\/\w)/;function h(a){if(g.test(a.toString()))return!1;var c=a.getProtocol();return(c==="http"||c==="https")&&!b("isFacebookURI")(a)}var i=new RegExp("^(l|lm|h)\\..*$","i");function j(a){if(b("killswitch")("LINK_UPGRADE_UNSHIMMED_JS"))return null;if(a.getProtocol()!=="http")return null;if(!b("isFacebookURI")(a))return null;return i.test(a.getDomain())?null:a.setProtocol("https")}var k={href:"#",shimmed:!1};function l(a,c,d){__p&&__p();if(a==null||a==="#")return k;a=b("ConstUriUtils").getUri(a);if(a==null)return k;var e=b("LinkshimHandlerConfig").link_react_default_hash;if(b("isLinkshimURI")(a)){var f=a.getQueryParams(),g=f.get("u");f=f.get("h");g=b("ConstUriUtils").getUri(String(g));g!=null&&(a=g,e=String(f))}g=b("LinkshimHandlerConfig").click_ids;if(!b("killswitch")("LINKSHIM_ADD_CLICK_ID_PARAM")&&g!=null&&g.length>0){f=Math.floor(b("Random").random()*g.length);g=g[f];a=b("CometClickIDParameterUtils").appendClickIDQueryParam(a,g)}f=j(a);f!=null&&(a=f);if(h(a)){g=b("CometLynxGeneration").getShimmedHref(a,e,{callbacks:c,trackingNodes:d});return{href:g.toString(),shimmed:!0}}else return{href:a.toString(),shimmed:!1}}function a(a,c,d){__p&&__p();if(b("gkx")("1103940"))return l(a,c,d);if(a==null||a==="#"||!b("URI").isValidURI(a))return k;var e=b("LinkshimHandlerConfig").link_react_default_hash;a=new(b("URI"))(a);if(b("isLinkshimURI")(a)){var f=a.getQueryData(),g=f.u;f=f.h;b("URI").isValidURI(g)&&(a=new(b("URI"))(g),e=f)}g=b("LinkshimHandlerConfig").click_ids;if(!b("killswitch")("LINKSHIM_ADD_CLICK_ID_PARAM")&&g!=null&&g.length>0){f=Math.floor(b("Random").random()*g.length);g=g[f];a=b("ClickIDParameterUtils").appendClickIDQueryParam(a,g)}f=j(a);f!=null&&(a=f);if(h(a)){g=b("LynxGeneration").getShimmedHref(a,e,{callbacks:c,trackingNodes:d});return{href:g.toString(),shimmed:!0}}else return{href:a.toString(),shimmed:!1}}e.exports={getLinkShimInfo:a,use_rel_no_opener:b("LinkshimHandlerConfig").use_rel_no_opener}}),null);
__d("BaseLink.flare.react",["CometLinkShimUtils","CometTrackingCodeContext","CometTrackingNodesContext","ConstUriUtils","JSScheduler","JSTracing","Pressable.react","PressableText.react","React","URI","clearTimeout","convertDomainFromApps","gkx","isCometRouterUrl","isFacebookURI","recoverableViolation","setTimeout","useCometRoute","useCometRouterDispatcher","useExperimentalFeedTracking","useFeedPressEventHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var aa=b("JSScheduler").scheduleSpeculativeCallback;c=b("React").createContext;var ba=b("React").useCallback,ca=b("React").useContext,da=b("React").useEffect,ea=b("React").useMemo,g=c(!1),fa=100;function h(a,c,d){__p&&__p();if(a!=null&&a!=="#"&&(d.length||c.length))if(b("gkx")("1103940")){var e=b("ConstUriUtils").getUri(a);if(e!=null){if(!b("isFacebookURI")(e))return a;d.length&&(e=e.addQueryParam("__cft__",d));c.length&&e!=null&&(e=e.addQueryParam("__tn__",c.join("")));return e!=null?e.toString():a}}else{e=new(b("URI"))(a);if(!b("isFacebookURI")(e))return a;d.length&&(e=e.addQueryData("__cft__",d));c.length&&(e=e.addQueryData("__tn__",c.join("")));return e.toString()}return a}function a(a,c){__p&&__p();var d=a["aria-activedescendant"],e=a["aria-checked"],f=a["aria-controls"],ga=a["aria-describedby"],ha=a["aria-expanded"],ia=a["aria-haspopup"],ja=a["aria-hidden"],ka=a["aria-invalid"],i=a["aria-label"],la=a["aria-labelledby"],j=a.children,ma=a.className_DEPRECATED,k=a.disabled,l=a.display;l=l===void 0?"inline":l;var m=a.download,n=a.href,na=a.id,o=a.label,p=a.onBlur,q=a.onClick,r=a.onContextMenu,s=a.onFocus,oa=a.onFocusChange,pa=a.onFocusVisibleChange,qa=a.onHoverChange,ra=a.onPressChange,t=a.onMouseDown,u=a.onMouseOut,v=a.onMouseOver,w=a.onPressOut,x=a.passthroughProps,y=a.preload,sa=a.preventContextMenu,ta=a.preventLocalNavigation,z=a.rel,A=a.replace,B=a.role,ua=a.onNavigate,C=a.routeTarget,va=a.style,wa=a.suppressHydrationWarning,D=a.target,xa=a.testid,E=a.testOnly_pressed;E=E===void 0?!1:E;var F=a.traceParams;a=a.xstyle;var G=b("useCometRouterDispatcher")(),H=b("React").useRef(null),I=b("React").useRef(null),J=b("React").useRef(null),K=b("React").useContext(b("CometTrackingNodesContext")),L=b("React").useContext(b("CometTrackingCodeContext")),M=L.encrypted_click_tracking,N=L.click_tracking_linkshim_cb,O=n!=null&&b("isCometRouterUrl")(n),P=ea(function(){var a=O?h(n,K,M):null;return a!=null?b("convertDomainFromApps")(a):null},[M,O,n,K]),Q=b("useCometRoute")(P),R=m===!0||typeof m==="string";L=b("React").useMemo(function(){if(R)return{href:n,isRouterLink:!1,shimmed:!1};if(P!=null){var a=Q&&Q.canonicalUrl!=null?h(Q.canonicalUrl,K,M):P;return{href:a,isRouterLink:!0,shimmed:!1}}a=b("CometLinkShimUtils").getLinkShimInfo(n,N,K);var c=a.shimmed?a.href:h(a.href,K,M);return{href:c,isRouterLink:!1,shimmed:a.shimmed}},[N,M,R,n,Q,P,K]);var S=L.isRouterLink,T=L.href;L=L.shimmed;var U=!1,V=!1,W=D;if(L){U=!0;W=(D=W)!=null?D:"_blank";V=!!b("CometLinkShimUtils").use_rel_no_opener&&W==="_blank"}L=z;U&&(L==null||L.indexOf("nofollow")<0)&&(L=L!=null?L+" nofollow":"nofollow");V&&(L==null||L.indexOf("noopener")<0)&&(L=L!=null?L+" noopener":"noopener");da(function(){S&&G!=null&&y===!0&&T!=null&&b("JSTracing").clear(function(){G.preloadRoute(T,C),H.current=T})},[G,T,S,y,C]);D=ca(g);z=ba(function(a){a=a.children;return b("React").createElement(g.Provider,{value:!0},a)},[]);U=o!=null?o:i;V=B==="presentation"?"none":B;o=q;i=t;B=w;q=p;t=s;var X=v,Y=u;w=r;p=c;var Z=o,$=i;s=w;b("gkx")("1115188")?p=b("useExperimentalFeedTracking")(c,T):(Z=b("useFeedPressEventHandler")(o,T),$=b("useFeedPressEventHandler")(i,T),s=b("useFeedPressEventHandler")(w,T));v=function(a){$&&$(a),G&&S&&P!=null&&(I.current=G.prerenderRoute(P,{passthroughProps:x,replace:A,target:C,traceParams:F}))};u=function(a){Z&&Z(a);if(!S)return;var c=W==null||W==="_self",d=!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey);!ta&&c&&d&&(G?P!=null&&(G.go(P,{eventTimestamp:a.timeStamp,onNavigate:ua,passthroughProps:x,replace:A,target:C,traceParams:F}),I.current=null):b("gkx")("708253")&&b("recoverableViolation")("A comet router link must exist in a CometRouterProvider to be clicked","comet_infra"))};r=function(a){X&&X(a);if(!S)return;T&&H.current!==T&&b("JSTracing").clear(function(){aa(function(){G!=null&&(J.current=b("setTimeout")(function(){H.current=T,G.prefetchRouteDefinition(T,!0,C),J.current=null},fa))})})};c=function(a){Y&&Y(a);b("clearTimeout")(J.current);J.current=null;var c=I.current;c&&(b("JSScheduler").next(function(){c.cancel()}),I.current=null)};o=S&&W!=="_blank"&&G!=null;w={accessibilityLabel:U,accessibilityRelationship:{activedescendant:d,controls:f,describedby:ga,haspopup:ia,labelledby:la},accessibilityState:{checked:e,disabled:k,expanded:ha,hidden:ja,invalid:ka},className_DEPRECATED:ma,disabled:k,forwardedRef:p,link:{download:m,rel:L,target:W,url:(i=T)!=null?i:"#"},nativeID:na,onBlur:q,onContextMenu:s,onFocus:t,onFocusChange:oa,onFocusVisibleChange:pa,onHoverChange:qa,onHoverEnd:c,onHoverStart:r,onPress:u,onPressChange:ra,onPressEnd:B,onPressStart:v,preventContextMenu:sa,preventDefault:o,style:va,testID:xa,testOnly_state:{disabled:!1,focusVisible:!1,focused:!1,hovered:!1,pressed:E},xstyle:a};if(l==="block"){U=V==="button"||V==="menuitem"||V==="none"||V==="switch"||V==="checkbox"||V==="radio"?V:"link";d=b("React").createElement(b("Pressable.react"),babelHelpers["extends"]({},w,{accessibilityRole:U}),b("React").createElement(z,null,j))}else{f=V==="button"||V==="menuitem"||V==="none"?V:"link";d=b("React").createElement(b("PressableText.react"),babelHelpers["extends"]({},w,{accessibilityRole:f,direction:"none",suppressHydrationWarning:wa}),b("React").createElement(z,null,j))}return D?b("React").createElement("object",{type:"nested/pressable"},d):d}e.exports=b("React").forwardRef(a)}),null);