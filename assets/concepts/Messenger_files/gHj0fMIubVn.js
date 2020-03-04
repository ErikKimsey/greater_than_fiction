if (self.CavalryLogger) { CavalryLogger.start_js(["1zprb"]); }

__d("CometRouterDispatcherContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext();e.exports=a}),null);
__d("useCometRouterDispatcher",["CometRouterDispatcherContext","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useContext;function a(){return g(b("CometRouterDispatcherContext"))}e.exports=a}),null);
__d("SchedulerTracing-dev",["ReactFeatureFlags"],(function(a,b,c,d,e,f){"use strict"}),null);
__d("SchedulerTracing",["requireCond","SchedulerTracing-dev","cr:687059"],(function(a,b,c,d,e,f){"use strict";a=b("cr:687059");e.exports=a}),null);
__d("JSTracing",["SchedulerTracing","performanceNow"],(function(a,b,c,d,e,f){"use strict";a={clear:function(a){return b("SchedulerTracing").unstable_clear(a)},getCurrent:function(){return b("SchedulerTracing").unstable_getCurrent()},trace:function(a,c,d){d===void 0&&(d=b("performanceNow")());return b("SchedulerTracing").unstable_trace(a,d,c)},wrap:function(a){return b("SchedulerTracing").unstable_wrap(a)}};e.exports=a}),null);
__d("CometTrackingCodeContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext({click_tracking_linkshim_cb:[],encrypted_click_tracking:[],encrypted_tracking:[]});e.exports=a}),null);
__d("CometTrackingNodesContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext([]);e.exports=a}),null);
__d("ReactEventsContextMenu-dev",["react"],(function(a,b,c,d,e,f){"use strict"}),null);
__d("ReactEventsContextMenu-prod",["react"],(function(a,b,c,d,e,f){"use strict";var g=b("react").unstable_createResponder("ContextMenu",{targetEventTypes:"undefined"!==typeof window&&null!=window.PointerEvent?["contextmenu_active","pointerdown"]:["contextmenu_active","touchstart","mousedown"],getInitialState:function(){return{pointerType:""}},onEvent:function(a,b,c,d){var e=a.nativeEvent,f=a.pointerType;c.disabled||("contextmenu"===a.type?(f=c.onContextMenu,!1===c.preventDefault||e.defaultPrevented||e.preventDefault(),"function"===typeof f&&(e=a.nativeEvent,a=a.target,f=b.getTimeStamp(),b.dispatchEvent({altKey:e.altKey,buttons:null!=e.buttons?e.buttons:0,ctrlKey:e.ctrlKey,metaKey:e.metaKey,pageX:e.pageX,pageY:e.pageY,pointerType:d.pointerType,shiftKey:e.shiftKey,target:a,timeStamp:f,type:"contextmenu",x:e.clientX,y:e.clientY},c.onContextMenu,0)),d.pointerType=""):d.pointerType=f)}});e.exports={ContextMenuResponder:g,useContextMenu:function(a){return b("react").unstable_useResponder(g,a)}}}),null);
__d("ReactEventsContextMenu",["ReactEventsContextMenu-dev","ReactEventsContextMenu-prod"],(function(a,b,c,d,e,f){a=b("ReactEventsContextMenu-prod");e.exports=a}),null);
__d("ReactEventsFocus-dev",["react"],(function(a,b,c,d,e,f){"use strict"}),null);
__d("ReactEventsFocus-prod",["react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=!0,h="undefined"!==typeof window&&null!=window.navigator?/^Mac/.test(window.navigator.platform):!1;a=["focus","blur"];c="undefined"!==typeof window&&null!=window.PointerEvent?["keydown","keyup","pointermove","pointerdown","pointerup"]:"keydown keyup mousedown touchmove touchstart touchend".split(" ");function i(a){return"function"===typeof a}function j(a,b,c,d){a=a.type,g=!1,c=c.focusTarget,null===c||!b.isTargetWithinResponderScope(c)||"mousedown"!==a&&"touchstart"!==a&&"pointerdown"!==a||d(!1)}function k(a,b,c,d){__p&&__p();switch(a.type){case"pointermove":case"pointerdown":case"pointerup":c.pointerType=a.nativeEvent.pointerType;j(a,b,c,d);break;case"keydown":case"keyup":var e=c.focusTarget,f=a.nativeEvent;a=f.key;var i=f.metaKey,k=f.altKey;f=f.ctrlKey;"Enter"!==a&&" "!==a&&("Tab"!==a||i||!h&&k||f)||(c.pointerType="keyboard",g=!0,null!==e&&b.isTargetWithinResponderScope(e)&&d(!0));break;case"touchmove":case"touchstart":case"touchend":c.pointerType="touch";c.isEmulatingMouseEvents=!0;j(a,b,c,d);break;case"mousedown":c.isEmulatingMouseEvents?c.isEmulatingMouseEvents=!1:(c.pointerType="mouse",j(a,b,c,d))}}function l(a,b,c){var d=c.pointerType,e=c.focusTarget,f=b.onBlur;i(f)&&(d={target:e,type:"blur",pointerType:d,timeStamp:a.getTimeStamp()},a.dispatchEvent(d,f,0));f=b.onFocusChange;i(f)&&a.dispatchEvent(!1,f,0);c.isFocusVisible&&m(a,b,!1)}function m(a,b,c){b=b.onFocusVisibleChange,i(b)&&a.dispatchEvent(c,b,0)}var n=b("react").unstable_createResponder("Focus",{targetEventTypes:a,rootEventTypes:c,getInitialState:function(){return{focusTarget:null,isEmulatingMouseEvents:!1,isFocused:!1,isFocusVisible:!1,pointerType:""}},onEvent:function(a,b,c,d){var e=a.type,f=a.target;if(c.disabled)d.isFocused&&(l(b,c,d),d.isFocused=!1,d.focusTarget=null);else switch(e){case"focus":d.focusTarget=b.getResponderNode();d.isFocused||d.focusTarget!==f||(d.isFocused=!0,d.isFocusVisible=g,e=d.pointerType,f=d.focusTarget,a=c.onFocus,i(a)&&(e={target:f,type:"focus",pointerType:e,timeStamp:b.getTimeStamp()},b.dispatchEvent(e,a,0)),a=c.onFocusChange,i(a)&&b.dispatchEvent(!0,a,0),d.isFocusVisible&&m(b,c,!0));d.isEmulatingMouseEvents=!1;break;case"blur":d.isFocused&&(l(b,c,d),d.isFocusVisible=g,d.isFocused=!1),null==a.nativeEvent.relatedTarget&&(d.pointerType=""),d.isEmulatingMouseEvents=!1}},onRootEvent:function(a,b,c,d){k(a,b,d,function(a){d.isFocused&&d.isFocusVisible!==a&&(d.isFocusVisible=a,m(b,c,a))})},onUnmount:function(a,b,c){c.isFocused&&l(a,b,c)}});function o(a,b,c,d){var e=b.onFocusWithinChange;i(e)&&a.dispatchEvent(d,e,0);c.isFocusVisible&&(b=b.onFocusWithinVisibleChange,i(b)&&a.dispatchEvent(d,b,0))}var p=b("react").unstable_createResponder("FocusWithin",{targetEventTypes:a,rootEventTypes:c,getInitialState:function(){return{focusTarget:null,isEmulatingMouseEvents:!1,isFocused:!1,isFocusVisible:!1,pointerType:""}},onEvent:function(a,b,c,d){__p&&__p();var e=a.type;a=a.nativeEvent.relatedTarget;if(c.disabled)d.isFocused&&(o(b,c,d,!1),d.isFocused=!1,d.focusTarget=null);else switch(e){case"focus":d.focusTarget=b.getResponderNode();d.isFocused||(d.isFocused=!0,d.isFocusVisible=g,o(b,c,d,!0));!d.isFocusVisible&&g&&(d.isFocusVisible=g,c=c.onFocusWithinVisibleChange,i(c)&&b.dispatchEvent(!0,c,0));break;case"blur":d.isFocused&&!b.isTargetWithinResponder(a)&&(o(b,c,d,!1),d.isFocused=!1)}},onRootEvent:function(a,b,c,d){k(a,b,d,function(a){if(d.isFocused&&d.isFocusVisible!==a){d.isFocusVisible=a;var e=c.onFocusWithinVisibleChange;i(e)&&b.dispatchEvent(a,e,0)}})},onUnmount:function(a,b,c){c.isFocused&&o(a,b,c,!1)}});e.exports={FocusResponder:n,useFocus:function(a){return b("react").unstable_useResponder(n,a)},FocusWithinResponder:p,useFocusWithin:function(a){return b("react").unstable_useResponder(p,a)}}}),null);
__d("ReactEventsFocus",["ReactEventsFocus-dev","ReactEventsFocus-prod"],(function(a,b,c,d,e,f){a=b("ReactEventsFocus-prod");e.exports=a}),null);
__d("ReactEventsHover-dev",["react"],(function(a,b,c,d,e,f){"use strict"}),null);
__d("ReactEventsHover-prod",["react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){return"function"===typeof a}function h(a,b,c,d){var e=null,f=null,g=null,h=null,i=null,j=null,k="";a&&(j=a.nativeEvent,k=a.pointerType,e=j.clientX,f=j.clientY,g=j.pageX,h=j.pageY,i=j.screenX,j=j.screenY);return{pointerType:k,target:d,type:c,timeStamp:b.getTimeStamp(),clientX:e,clientY:f,pageX:g,pageY:h,screenX:i,screenY:j,x:e,y:f}}function i(a,b,c,d){var e=d.hoverTarget;if((null===a||!b.isTargetWithinResponderScope(a.nativeEvent.relatedTarget))&&(d.isHovered=!0,!d.isActiveHovered)){d.isActiveHovered=!0;var f=c.onHoverStart;g(f)&&(a=h(a,b,"hoverstart",e),b.dispatchEvent(a,f,1));c=c.onHoverChange;g(c)&&b.dispatchEvent(d.isActiveHovered,c,1)}}function j(a,b,c,d){d=d.hoverTarget,c=c.onHoverMove,g(c)&&(a=h(a,b,"hovermove",d),b.dispatchEvent(a,c,1))}function k(a,b,c,d){__p&&__p();var e=d.hoverTarget;if((null===a||!b.isTargetWithinResponderScope(a.nativeEvent.relatedTarget))&&(d.isHovered=!1,d.isActiveHovered)){d.isActiveHovered=!1;var f=c.onHoverEnd;g(f)&&(a=h(a,b,"hoverend",e),b.dispatchEvent(a,f,1));c=c.onHoverChange;g(c)&&b.dispatchEvent(d.isActiveHovered,c,1);d.hoverTarget=null;d.isTouched=!1}}function a(a,b,c){c.isHovered&&k(null,a,b,c)}c={targetEventTypes:["pointerover","pointermove","pointerout","pointercancel"],getInitialState:function(){return{isActiveHovered:!1,isHovered:!1}},allowMultipleHostChildren:!1,allowEventHooks:!0,onEvent:function(a,b,c,d){var e=a.pointerType,f=a.type;if(c.disabled)d.isHovered&&k(a,b,c,d);else switch(f){case"pointerover":d.isHovered||"touch"===e||(d.hoverTarget=b.getResponderNode(),i(a,b,c,d));break;case"pointermove":d.isHovered&&null!==d.hoverTarget&&j(a,b,c,d);break;case"pointerout":case"pointercancel":d.isHovered&&k(a,b,c,d)}},onUnmount:a};d={targetEventTypes:["mouseover","mousemove","mouseout","touchstart"],getInitialState:function(){return{isActiveHovered:!1,isHovered:!1,isTouched:!1,ignoreEmulatedMouseEvents:!1}},allowMultipleHostChildren:!1,allowEventHooks:!0,onEvent:function(a,b,c,d){__p&&__p();var e=a.type;if(c.disabled)d.isHovered&&(k(a,b,c,d),d.ignoreEmulatedMouseEvents=!1),d.isTouched=!1;else switch(e){case"mouseover":d.isHovered||d.ignoreEmulatedMouseEvents||(d.hoverTarget=b.getResponderNode(),i(a,b,c,d));break;case"mousemove":d.isHovered&&null!==d.hoverTarget&&!d.ignoreEmulatedMouseEvents?j(a,b,c,d):d.isHovered||"mousemove"!==e||(d.ignoreEmulatedMouseEvents=!1,d.isTouched=!1);break;case"mouseout":d.isHovered&&k(a,b,c,d);break;case"touchstart":d.isHovered||(d.isTouched=!0,d.ignoreEmulatedMouseEvents=!0)}},onUnmount:a};var l=b("react").unstable_createResponder("Hover","undefined"!==typeof window&&null!=window.PointerEvent?c:d);e.exports={HoverResponder:l,useHover:function(a){return b("react").unstable_useResponder(l,a)}}}),null);
__d("ReactEventsHover",["ReactEventsHover-dev","ReactEventsHover-prod"],(function(a,b,c,d,e,f){a=b("ReactEventsHover-prod");e.exports=a}),null);
__d("ReactEventsPress-dev",["react","ReactEventsTap","ReactEventsKeyboard"],(function(a,b,c,d,e,f){"use strict"}),null);
__d("ReactEventsPress-prod",["react","ReactEventsTap","ReactEventsKeyboard"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={};function h(a,b){return{altKey:a.altKey,buttons:a.buttons,ctrlKey:a.ctrlKey,defaultPrevented:a.defaultPrevented,key:a.key,metaKey:a.metaKey,pageX:a.pageX,pageY:a.pageX,pointerType:a.pointerType,shiftKey:a.shiftKey,target:a.target,timeStamp:a.timeStamp,type:b,x:a.x,y:a.y}}function i(a){var b=a.key,c=a.target;a=c.tagName;c=c.isContentEditable;return("Enter"===b||" "===b)&&"INPUT"!==a&&"TEXTAREA"!==a&&!0!==c}e.exports={usePress:function(a){__p&&__p();var c=a||g;a=c.disabled;var d=c.preventDefault,e=c.onPress,f=c.onPressChange,j=c.onPressEnd,k=c.onPressMove,l=c.onPressStart;c=b("react").useState(null);var m=c[0],n=c[1];c=b("ReactEventsTap").useTap({disabled:a||"keyboard"===m,preventDefault:d,onTapStart:function(a){null==m&&(n("tap"),null!=l&&l(h(a,"pressstart")))},onTapChange:f,onTapUpdate:function(a){"tap"===m&&null!=k&&k(h(a,"pressmove"))},onTapEnd:function(a){"tap"===m&&(null!=j&&j(h(a,"pressend")),null!=e&&4!==a.buttons&&e(h(a,"press")),n(null))},onTapCancel:function(a){"tap"===m&&(null!=j&&j(h(a,"pressend")),n(null))}});a=b("ReactEventsKeyboard").useKeyboard({disabled:a||"tap"===m,preventClick:!1!==d,preventKeys:!1!==d?[" ","Enter"]:[],onClick:function(a){null==m&&null!=e&&e(h(a,"press"))},onKeyDown:function(a){if(null==m&&i(a))return n("keyboard"),null!=l&&l(h(a,"pressstart")),null!=f&&f(!0),!1},onKeyUp:function(a){if("keyboard"===m&&i(a))return null!=f&&f(!1),null!=j&&j(h(a,"pressend")),null!=e&&e(h(a,"press")),n(null),!1}});return[c,a]}}}),null);
__d("ReactEventsPress",["ReactEventsPress-dev","ReactEventsPress-prod"],(function(a,b,c,d,e,f){a=b("ReactEventsPress-prod");e.exports=a}),null);
__d("Pressability",["ReactEventsContextMenu","ReactEventsFocus","ReactEventsHover","ReactEventsPressLegacy"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ReactEventsContextMenu").useContextMenu,h=b("ReactEventsFocus").useFocus,i=b("ReactEventsHover").useHover,j=b("ReactEventsPressLegacy").usePress;function a(a){var b=a.disabled,c=a.pressRetentionOffset,d=a.preventContextMenu,e=a.preventDefault,f=a.onPress,k=a.onPressStart,l=a.onPressEnd,m=a.onPressMove,n=a.onContextMenu,o=a.onPressChange,p=a.onHoverStart,q=a.onHoverMove,r=a.onHoverEnd,s=a.onHoverChange,t=a.onFocus,u=a.onBlur,v=a.onFocusChange;a=a.onFocusVisibleChange;c=j({disabled:b,pressRetentionOffset:c,preventDefault:e,onPress:f,onPressStart:k,onPressEnd:l,onPressMove:m,onPressChange:o});f=i({disabled:b,preventDefault:e,onHoverStart:p,onHoverMove:q,onHoverEnd:r,onHoverChange:s});k=h({disabled:b,preventDefault:e,onFocus:t,onBlur:u,onFocusChange:v,onFocusVisibleChange:a});l=g({disabled:b,onContextMenu:n,preventDefault:d||!1});return[c,f,k,l]}e.exports={usePressability:a}}),null);
__d("TextAncestorContext.react",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(!1);e.exports=a}),null);
__d("createLayoutEvent",[],(function(a,b,c,d,e,f){function a(a){var b=a.getBoundingClientRect(),c=b.left,d=b.top,e=b.width;b=b.height;c={x:c,y:d,width:e,height:b};d={layout:c,target:a,timeStamp:Date.now()};return d}e.exports=a}),null);
__d("getDOMComponentType",[],(function(a,b,c,d,e,f){__p&&__p();var g={article:"article",banner:"header",complementary:"aside",contentinfo:"footer",figure:"figure",form:"form",heading:"h1",label:"label",link:"a",list:"ul",listitem:"li",main:"main",navigation:"nav",none:"div",region:"section"};function a(a,b){var c="div";if(a==="menuitem"&&b!=null&&b.url!=null)c="a";else if(a!=null){b=g[a];b!=null&&(c=b)}return c}e.exports=a}),null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("resize-observer-polyfill-1.5.1",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={},h={exports:g},i;function j(){__p&&__p();(function(b,c){typeof g==="object"&&typeof h!=="undefined"?h.exports=c():typeof i==="function"&&i.amd?i(c):b.ResizeObserver=c()})(this,function(){__p&&__p();var b=function(){__p&&__p();if(typeof Map!=="undefined")return Map;function a(a,b){var c=-1;a.some(function(d,a){if(d[0]===b){c=a;return!0}return!1});return c}return function(){__p&&__p();function b(){this.__entries__=[]}Object.defineProperty(b.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0});b.prototype.get=function(b){b=a(this.__entries__,b);b=this.__entries__[b];return b&&b[1]};b.prototype.set=function(c,d){var b=a(this.__entries__,c);~b?this.__entries__[b][1]=d:this.__entries__.push([c,d])};b.prototype["delete"]=function(b){var c=this.__entries__;b=a(c,b);~b&&c.splice(b,1)};b.prototype.has=function(b){return!!~a(this.__entries__,b)};b.prototype.clear=function(){this.__entries__.splice(0)};b.prototype.forEach=function(a,b){b===void 0&&(b=null);for(var c=0,d=this.__entries__;c<d.length;c++){var e=d[c];a.call(b,e[1],e[0])}};return b}()}(),c=typeof window!=="undefined"&&typeof document!=="undefined"&&window.document===document,d=function(){if(typeof a!=="undefined"&&a.Math===Math)return a;if(typeof self!=="undefined"&&self.Math===Math)return self;return typeof window!=="undefined"&&window.Math===Math?window:Function("return this")()}(),e=function(){return typeof requestAnimationFrame==="function"?requestAnimationFrame.bind(d):function(a){return setTimeout(function(){return a(Date.now())},1e3/60)}}(),f=2;function g(a,b){__p&&__p();var c=!1,d=!1,g=0;function h(){c&&(c=!1,a()),d&&j()}function i(){e(h)}function j(){var a=Date.now();if(c){if(a-g<f)return;d=!0}else c=!0,d=!1,setTimeout(i,b);g=a}return j}var h=20,i=["top","right","bottom","left","width","height","size","weight"],j=typeof MutationObserver!=="undefined",k=function(){__p&&__p();function a(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=g(this.refresh.bind(this),h)}a.prototype.addObserver=function(a){~this.observers_.indexOf(a)||this.observers_.push(a),this.connected_||this.connect_()};a.prototype.removeObserver=function(b){var a=this.observers_;b=a.indexOf(b);~b&&a.splice(b,1);!a.length&&this.connected_&&this.disconnect_()};a.prototype.refresh=function(){var a=this.updateObservers_();a&&this.refresh()};a.prototype.updateObservers_=function(){var a=this.observers_.filter(function(a){return a.gatherActive(),a.hasActive()});a.forEach(function(a){return a.broadcastActive()});return a.length>0};a.prototype.connect_=function(){if(!c||this.connected_)return;document.addEventListener("transitionend",this.onTransitionEnd_);window.addEventListener("resize",this.refresh);j?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0);this.connected_=!0};a.prototype.disconnect_=function(){if(!c||!this.connected_)return;document.removeEventListener("transitionend",this.onTransitionEnd_);window.removeEventListener("resize",this.refresh);this.mutationsObserver_&&this.mutationsObserver_.disconnect();this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh);this.mutationsObserver_=null;this.mutationEventsAdded_=!1;this.connected_=!1};a.prototype.onTransitionEnd_=function(a){a=a.propertyName;var b=a===void 0?"":a;a=i.some(function(a){return!!~b.indexOf(a)});a&&this.refresh()};a.getInstance=function(){this.instance_||(this.instance_=new a());return this.instance_};a.instance_=null;return a}(),l=function(a,b){for(var c=0,d=Object.keys(b);c<d.length;c++){var e=d[c];Object.defineProperty(a,e,{value:b[e],enumerable:!1,writable:!1,configurable:!0})}return a},m=function(a){a=a&&a.ownerDocument&&a.ownerDocument.defaultView;return a||d},n=x(0,0,0,0);function o(a){return parseFloat(a)||0}function p(a){var b=[];for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];return b.reduce(function(b,c){c=a["border-"+c+"-width"];return b+o(c)},0)}function q(a){var b=["top","right","bottom","left"],c={};for(var d=0,b=b;d<b.length;d++){var e=b[d],f=a["padding-"+e];c[e]=o(f)}return c}function r(a){a=a.getBBox();return x(0,0,a.width,a.height)}function s(a){__p&&__p();var b=a.clientWidth,c=a.clientHeight;if(!b&&!c)return n;var d=m(a).getComputedStyle(a),e=q(d),f=e.left+e.right,g=e.top+e.bottom,h=o(d.width),i=o(d.height);d.boxSizing==="border-box"&&(Math.round(h+f)!==b&&(h-=p(d,"left","right")+f),Math.round(i+g)!==c&&(i-=p(d,"top","bottom")+g));if(!u(a)){d=Math.round(h+f)-b;a=Math.round(i+g)-c;Math.abs(d)!==1&&(h-=d);Math.abs(a)!==1&&(i-=a)}return x(e.left,e.top,h,i)}var t=function(){return typeof SVGGraphicsElement!=="undefined"?function(a){return a instanceof m(a).SVGGraphicsElement}:function(a){return a instanceof m(a).SVGElement&&typeof a.getBBox==="function"}}();function u(a){return a===m(a).document.documentElement}function v(a){if(!c)return n;return t(a)?r(a):s(a)}function w(a){var b=a.x,c=a.y,d=a.width;a=a.height;var e=typeof DOMRectReadOnly!=="undefined"?DOMRectReadOnly:Object;e=Object.create(e.prototype);l(e,{x:b,y:c,width:d,height:a,top:c,right:b+d,bottom:a+c,left:b});return e}function x(a,b,c,d){return{x:a,y:b,width:c,height:d}}var y=function(){__p&&__p();function a(a){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=x(0,0,0,0),this.target=a}a.prototype.isActive=function(){var a=v(this.target);this.contentRect_=a;return a.width!==this.broadcastWidth||a.height!==this.broadcastHeight};a.prototype.broadcastRect=function(){var a=this.contentRect_;this.broadcastWidth=a.width;this.broadcastHeight=a.height;return a};return a}(),z=function(){function a(a,b){b=w(b);l(this,{target:a,contentRect:b})}return a}(),A=function(){__p&&__p();function a(a,c,d){this.activeObservations_=[];this.observations_=new b();if(typeof a!=="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=a;this.controller_=c;this.callbackCtx_=d}a.prototype.observe=function(a){__p&&__p();if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(typeof Element==="undefined"||!(Element instanceof Object))return;if(!(a instanceof m(a).Element))throw new TypeError('parameter 1 is not of type "Element".');var b=this.observations_;if(b.has(a))return;b.set(a,new y(a));this.controller_.addObserver(this);this.controller_.refresh()};a.prototype.unobserve=function(a){__p&&__p();if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(typeof Element==="undefined"||!(Element instanceof Object))return;if(!(a instanceof m(a).Element))throw new TypeError('parameter 1 is not of type "Element".');var b=this.observations_;if(!b.has(a))return;b["delete"](a);b.size||this.controller_.removeObserver(this)};a.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)};a.prototype.gatherActive=function(){var a=this;this.clearActive();this.observations_.forEach(function(b){b.isActive()&&a.activeObservations_.push(b)})};a.prototype.broadcastActive=function(){if(!this.hasActive())return;var a=this.callbackCtx_,b=this.activeObservations_.map(function(a){return new z(a.target,a.broadcastRect())});this.callback_.call(a,b,a);this.clearActive()};a.prototype.clearActive=function(){this.activeObservations_.splice(0)};a.prototype.hasActive=function(){return this.activeObservations_.length>0};return a}(),B=typeof WeakMap!=="undefined"?new WeakMap():new b(),C=function(){function a(b){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var c=k.getInstance(),d=new A(b,c,this);B.set(this,d)}return a}();["observe","unobserve","disconnect"].forEach(function(a){C.prototype[a]=function(){var b;return(b=B.get(this))[a].apply(b,arguments)}});var D=function(){return typeof d.ResizeObserver!=="undefined"?d.ResizeObserver:C}();return D})}var k=!1,l=function(){k||(k=!0,j());return h.exports};b=function(a){switch(a){case void 0:return l()}};e.exports=b}),null);
__d("resize-observer-polyfill",["resize-observer-polyfill-1.5.1"],(function(a,b,c,d,e,f){e.exports=b("resize-observer-polyfill-1.5.1")()}),null);
__d("useResizeObserver",["FBLogger","React","ReactDOM","gkx","resize-observer-polyfill","uniqueID","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useCallback,h=b("React").useRef;function a(a){var c=h(null),d=h(a);b("useLayoutEffect_SAFE_FOR_SSR")(function(){d.current=a},[a]);return g(function(b){var a=function(a,b,c){d.current&&d.current(a,b,c)};b=b==null?null:n(b,a);c.current&&c.current();c.current=b},[])}var i=null,j=new Map();function k(){i==null&&(i=new(b("resize-observer-polyfill"))(m));return i}function l(a){return b("gkx")("1050822")?b("ReactDOM").unstable_batchedUpdates(a):a()}function m(a){__p&&__p();var c=new Map(a.map(function(a){return[a.target,a.contentRect]})),d=new Set(j.keys());l(function(){__p&&__p();for(var a=c,e=Array.isArray(a),f=0,a=e?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=a.length)break;g=a[f++]}else{f=a.next();if(f.done)break;g=f.value}g=g;var h=g[0];g=g[1];var i=j.get(h);if(i!=null)for(var i=i,k=Array.isArray(i),l=0,i=k?i:i[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var m;if(k){if(l>=i.length)break;m=i[l++]}else{l=i.next();if(l.done)break;m=l.value}m=m;m=m[1];try{m(g,h,c)}catch(a){b("FBLogger")("useResizeObserver").catching(a)}}else d.has(h)||b("FBLogger")("useResizeObserver").mustfix("ResizeObserver observed resizing of an element that it should not be observing")}})}function n(a,c){var d,e=b("uniqueID")();d=(d=j.get(a))!=null?d:new Map();d.set(e,c);j.set(a,d);k().observe(a);return o(a,e)}function o(a,b){return function(){var c=j.get(a);if(c==null)return;c["delete"](b);c.size===0&&(k().unobserve(a),j["delete"](a))}}e.exports=a}),null);
__d("View.react",["cx","React","TextAncestorContext.react","createLayoutEvent","getDOMComponentType","joinClasses","recoverableViolation","stylex","useResizeObserver"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("React").useCallback,i=b("React").useContext;function a(a){__p&&__p();var c=a.accessibilityLabel,d=a.accessibilityLiveRegion,e=a.accessibilityRelationship,f=a.accessibilityRole,g=a.accessibilityState,k=a.accessibilityValue,l=a.children,m=a.className_DEPRECATED,n=a.focusable,o=a.forwardedRef,p=a.link,q=a.listeners,r=a.nativeID,s=a.onLayout,t=a.pointerEvents,u=a.style,v=a.testID,w=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["accessibilityLabel","accessibilityLiveRegion","accessibilityRelationship","accessibilityRole","accessibilityState","accessibilityValue","children","className_DEPRECATED","focusable","forwardedRef","link","listeners","nativeID","onLayout","pointerEvents","style","testID","xstyle"]);var x=b("getDOMComponentType")(f,p),y=g==null?void 0:g.disabled,z=g==null?void 0:g.hidden,A=x==="a"&&y!==!0,B=i(b("TextAncestorContext.react")),C=b("useResizeObserver")(h(function(a,c){if(s!=null){a=b("createLayoutEvent")(c);s(a)}},[s])),D="";t==="auto"?D="_7yl6":t==="none"?D="_7yl7":t==="box-only"?D="_7yjq":t==="box-none"&&(D="_7yjr");t=h(function(a){typeof o==="function"?o(a):o!=null&&(o.current=a),C(a)},[o,C]);var E=-1,F=x==="a"||f==="button";y!==!0&&z!==!0&&((n===!0||F&&n!==!1)&&(E=0));F=b("React").createElement(x,babelHelpers["extends"]({},a,{"aria-atomic":d!=null?!0:void 0,"aria-busy":g==null?void 0:g.busy,"aria-checked":g==null?void 0:g.checked,"aria-disabled":y===!0?y:void 0,"aria-expanded":g==null?void 0:g.expanded,"aria-hidden":z,"aria-modal":g==null?void 0:g.modal,"aria-orientation":g==null?void 0:g.orientation,"aria-pressed":g==null?void 0:g.pressed,"aria-readonly":g==null?void 0:g.readonly,"aria-required":g==null?void 0:g.required,"aria-selected":g==null?void 0:g.selected,"aria-activedescendant":e==null?void 0:e.activedescendant,"aria-controls":e==null?void 0:e.controls,"aria-describedby":e==null?void 0:e.describedby,"aria-details":e==null?void 0:e.details,"aria-haspopup":e==null?void 0:e.haspopup,"aria-labelledby":e==null?void 0:e.labelledby,"aria-owns":e==null?void 0:e.owns,"aria-valuemax":k==null?void 0:k.max,"aria-valuemin":k==null?void 0:k.min,"aria-valuenow":k==null?void 0:k.now,"aria-valuetext":k==null?void 0:k.text,href:A?p==null?void 0:p.url:void 0,rel:A?p==null?void 0:p.rel:void 0,target:A?p==null?void 0:p.target:void 0,"aria-label":c,"aria-live":d,children:l,className:b("joinClasses")(b("stylex")(j.root,w),D,m),"data-testid":v,id:r,listeners:q,ref:t,role:f==="none"?"presentation":f,style:u,tabIndex:E}));return B?b("React").createElement(b("TextAncestorContext.react").Provider,{value:!1},b("React").createElement("div",{className:b("stylex")(j.hasTextAncestor)},F)):F}var j={root:{alignItems:"j6ppah52",backgroundColor:"gwqq051r",borderColor:"kp27d9ay",borderStyle:"j19bpbye",borderWidth:"cqfod8h9",boxSizing:"j15lmy46",display:"mhpyb8q1",flexBasis:"hqei3or6",flexDirection:"hksehcli",flexShrink:"qn48kkt2",listStyle:"ml8yefb7",marginTop:"sjt171p7",marginEnd:"mbud3w5v",marginBottom:"q1lreroj",marginStart:"ne1cnhmk",minHeight:"e25qgkwl",minWidth:"dleo0hsq",paddingTop:"nmrbqzff",paddingEnd:"dkz24dle",paddingBottom:"jsjdzft0",paddingStart:"hrt4ufkz",position:"ldbk9mvm",WebkitTapHighlightColor:"nzcichbp",textAlign:"s3yjlek5",textDecoration:"jum59pk4",zIndex:"l2p5uvp1"},hasTextAncestor:{display:"bg81nzyz",verticalAlign:"ld47erq5"}};e.exports=a}),null);
__d("Pressable.react",["Pressability","React","View.react","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("Pressability").usePressability,h=b("React").useState,i=[];function a(a){__p&&__p();var c=h(!1),d=c[0];c=c[1];var e=h(!1),f=e[0];e=e[1];var l=h(!1),m=l[0];l=l[1];var n=h(!1),o=n[0];n=n[1];var p=a.children,q=a.className_DEPRECATED,r=a.disabled,s=a.focusable,t=a.preventDefault,u=a.style,v=a.xstyle;v=v===void 0?i:v;var w=a.onBlur,x=a.onFocus,y=a.onFocusChange,z=a.onFocusVisibleChange,A=a.onHoverChange,B=a.onHoverEnd,C=a.onHoverMove,D=a.onHoverStart,E=a.onContextMenu,F=a.onPress,G=a.onPressChange,H=a.onPressEnd,I=a.onPressMove,J=a.onPressStart,K=a.pressRetentionOffset,L=a.preventContextMenu,M=a.testOnly_state;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","className_DEPRECATED","disabled","focusable","preventDefault","style","xstyle","onBlur","onFocus","onFocusChange","onFocusVisibleChange","onHoverChange","onHoverEnd","onHoverMove","onHoverStart","onContextMenu","onPress","onPressChange","onPressEnd","onPressMove","onPressStart","pressRetentionOffset","preventContextMenu","testOnly_state"]);d={disabled:r===!0||(M==null?void 0:M.disabled)===!0||!1,focused:d||(M==null?void 0:M.focused)===!0,focusVisible:f||(M==null?void 0:M.focusVisible)===!0,hovered:m||(M==null?void 0:M.hovered)===!0,pressed:o||(M==null?void 0:M.pressed)===!0};f=typeof p==="function"?p(d):p;m=typeof q==="function"?q(d):q;o=typeof u==="function"?u(d):u;M=typeof v==="function"?v(d):v;p=babelHelpers["extends"]({},a,{children:f,className_DEPRECATED:m,focusable:s!==!1,style:o,xstyle:[k.root,d.disabled&&k.disabled,!d.focusVisible&&k.focusNotVisible,M]});q=g({onBlur:w,onFocus:x,onFocusChange:j(c,y),onFocusVisibleChange:j(e,z),onHoverChange:j(l,A),onHoverEnd:B,onHoverMove:C,onHoverStart:D,onContextMenu:E,onPress:F,onPressChange:j(n,G),onPressEnd:H,onPressMove:I,onPressStart:J,disabled:r,pressRetentionOffset:K,preventContextMenu:L,preventDefault:t==null?!0:t});return b("React").createElement(b("View.react"),babelHelpers["extends"]({},p,{listeners:q}))}function j(a,b){return function(c){a(c),b&&b(c)}}var k={root:{cursor:"oa93ft74",touchAction:"p70ern7q"},disabled:{cursor:"jiz4xmru"},focusNotVisible:{outline:"isl1h4mh"}};e.exports=a}),null);
__d("SchedulerTracing-prod",["ReactFeatureFlags"],(function(a,b,c,d,e,f){"use strict";__p&&__p();Object.defineProperty(f,"__esModule",{value:!0});b("ReactFeatureFlags");var g=0;f.__interactionsRef=null;f.__subscriberRef=null;f.unstable_clear=function(a){return a()};f.unstable_getCurrent=function(){return null};f.unstable_getThreadID=function(){return++g};f.unstable_trace=function(a,b,c){return c()};f.unstable_wrap=function(a){return a};f.unstable_subscribe=function(){};f.unstable_unsubscribe=function(){}}),null);
__d("react-dom",["react-dom-0.0.0"],(function(a,b,c,d,e,f){e.exports=b("react-dom-0.0.0")()}),null);