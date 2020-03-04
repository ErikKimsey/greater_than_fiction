if (self.CavalryLogger) { CavalryLogger.start_js(["jxPhC"]); }

__d("CometKeyCommandContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(null);e.exports=a}),null);
__d("CometKeyCommandUtilsContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(null);e.exports=a}),null);
__d("CometKeyCommandsTypedLoggerLite",["Banzai","generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:CometKeyCommandsLoggerConfig")}),null);
__d("createKeyCommand",[],(function(a,b,c,d,e,f){"use strict";var g=["alt","command","shift"];function a(a){return g.filter(function(b){return(a==null?void 0:a[b])===!0}).concat(a==null?void 0:a.key).join(" ")}e.exports=a}),null);
__d("createKeyCommandWrapper",["CometKeyCommandContext","CometKeyCommandsTypedLoggerLite","CometKeyCommandUtilsContext","React","createKeyCommand","recoverableViolation","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("CometKeyCommandsTypedLoggerLite").log,h={wrapperFocusable:{":focus":{outline:"iqfcb0g7"}}};function i(a){if(a instanceof HTMLInputElement)return a.type!=="hidden"&&a.type!=="file"&&!a.disabled;return a instanceof HTMLSelectElement||a instanceof HTMLTextAreaElement?!a.disabled:a instanceof HTMLElement&&a.isContentEditable}function a(a,c){__p&&__p();return function(d){__p&&__p();var e=b("React").useContext(b("CometKeyCommandContext")),f=b("React").useContext(b("CometKeyCommandUtilsContext")),j=f&&f.setActiveWrapper,k=b("React").useState(function(){return new Map()}),l=k[0];k[1];k=b("React").useState(function(){__p&&__p();return{addCommands:function(a){__p&&__p();a.forEach(function(a){var c=a.command;if(c!=null){c=b("createKeyCommand")(c);l.has(c)&&b("recoverableViolation")("Conflicting key command registered","comet_ax");l.set(c,a);f&&f.notifyCommandUpdate()}});return function(){a.forEach(function(a){var c=a.command;c=b("createKeyCommand")(c);var d=l.get(c);d===a&&l["delete"](c)}),f&&f.notifyCommandUpdate()}},applyCommand:function(a,b){__p&&__p();var c=l.get(a);if(c===null||c===void 0)return!1;if(!c.triggerFromInputs&&i(b.target))return!1;if(!(b.type==="keyup"&&c.triggerOnKeyup||b.type==="keydown"&&!c.triggerOnKeyup))return!1;c.shouldPreventDefault!==!1&&b.preventDefault();b=c.handler;if(b!==null&&b!==void 0){b();b=c.description;g({key_combo:a,key_context:d.debugName,key_description:b});return c.shouldStopPropagation!==!1}return!1},debugName:d.debugName,getCommandMap:function(){return l},getParent:function(){return e},removeCommand:function(a){l["delete"](a),f&&f.notifyCommandUpdate()}}});var m=k[0];k[1];k=b("React").useCallback(function(){if(!j){b("recoverableViolation")("setActiveWrapper is undefined in "+(d.debugName!=null?d.debugName:"unknown"),"comet_ax");return}j(m)},[j,m,d.debugName]);if(a||d.elementType!==void 0){var n=d.elementType!==void 0?d.elementType:"div";k={className:b("stylex")(d.isWrapperFocusable?h.wrapperFocusable:void 0,d.xstyle),"data-testid":"Keycommand_wrapper"+(d.debugName!=null?"_"+d.debugName:""),onFocusCapture:a?k:void 0,tabIndex:d.isWrapperFocusable?-1:void 0};n=b("React").createElement(n,k,d.children)}else n=b("React").createElement(b("React").Fragment,null,d.children);c&&(n=b("React").createElement(c.Provider,{value:m},n));return b("React").createElement(b("CometKeyCommandContext").Provider,{value:m},n)}}e.exports=a}),null);
__d("createKeyCommandWidget",["React","createKeyCommandWrapper","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();a===void 0&&(a=!0);var c=b("React").createContext();a=b("createKeyCommandWrapper")(a,c);function d(a){var d=b("React").useContext(c);b("React").useEffect(function(){if(!d){b("recoverableViolation")("Attempting to register a key command outside of its widget scope. Calls to useKeyCommand must be within its widget's wrapper.","comet_ax");return}var c=d.addCommands(a);return c},[d,a])}return{Context:c,Wrapper:a,useKeyCommands:d}}e.exports=a}),null);
__d("CometKeyCommandWidget",["createKeyCommandWidget"],(function(a,b,c,d,e,f){"use strict";a=b("createKeyCommandWidget")();e.exports=a}),null);
__d("CometKeyCommandWrapper.react",["CometKeyCommandContext","CometKeyCommandWidget","React"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["children"]);return b("React").createElement(b("CometKeyCommandWidget").Wrapper,a,c)}e.exports=a}),null);
__d("useKeyCommands",["CometKeyCommandWidget"],(function(a,b,c,d,e,f){"use strict";e.exports=b("CometKeyCommandWidget").useKeyCommands}),null);
__d("CometComponentWithKeyCommands.react",["CometKeyCommandWrapper.react","React","stylex","useKeyCommands"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={displayInherit:{display:"a8s20v7p"},inherit:{alignContent:"tojvnm2t",alignItems:"a6sixzi8",flex:"ji37btr1",flexDirection:"k5wvi7nf",height:"bipmatt0",justifyContent:"cebpdrjk",maxHeight:"qowsmv63",maxWidth:"owwhemhu",minHeight:"dp1hu0rb",minWidth:"dhp61c6y",position:"l9j0dhe7",width:"iyyx5f41"}};function h(a){b("useKeyCommands")(a.commandConfigs);return null}function a(a){var c=a.children,d=a.commandConfigs,e=a.elementType,f=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","commandConfigs","elementType","xstyle"]);var i=e==="span"?g.inherit:[g.inherit,g.displayInherit];return b("React").createElement(b("CometKeyCommandWrapper.react"),babelHelpers["extends"]({elementType:e,xstyle:f!=null?f:i},a),b("React").createElement(h,{commandConfigs:d}),c)}e.exports=a}),null);
__d("BaseAccessibleElement.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.children;a=a.id;return b("React").createElement("span",{className:"pmk7jnqg g0aa4cga q45zohi1",id:a},c)}e.exports=a}),null);
__d("CometFocusLayer.react",["BaseAccessibleElement.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useCallback,h=b("React").useEffect,i=b("React").useRef,j=function(a){if(a.tabIndex<0)return!1;if(a.tabIndex>0||a.tabIndex===0&&a.getAttribute("tabIndex")!==null)return!0;if(a instanceof HTMLAnchorElement)return!!a.href&&a.rel!=="ignore";if(a instanceof HTMLInputElement)return a.type!=="hidden"&&a.type!=="file"&&!a.disabled;return a instanceof HTMLButtonElement||a instanceof HTMLSelectElement||a instanceof HTMLTextAreaElement?!a.disabled:!1},k=function(a){a=a;while(window!=null&&a!=null&&a!==document){var b=window.getComputedStyle(a);if(b.visibility==="hidden"||b.display==="none")return!1;a=a.parentNode}return a===document},l=function(a){return j(a)&&k(a)},m=function(a){return Array.from(a.getElementsByTagName("*")).find(l)},n=function(a){return Array.from(a.getElementsByTagName("*")).reverse().find(l)},o=function(a){a=m(a);a&&a.focus()},p=function(a){a=n(a);a&&a.focus()};function a(a){var c=a.autoFocus,d=c===void 0?!1:c;c=a.children;var e=i(null),f=i(null),j=i(null);a=g(function(a){e.current!=null&&(f.current!=null&&f.current===a.relatedTarget?p(e.current):j.current!=null&&j.current===a.relatedTarget&&o(e.current))},[e,j,f]);h(function(){d&&e.current!=null&&!e.current.contains(document.activeElement)&&e.current.focus()},[d]);return b("React").createElement(b("React").Fragment,null,b("React").createElement(b("BaseAccessibleElement.react"),null,b("React").createElement("div",{ref:f,tabIndex:0})),b("React").createElement("div",{className:"lzcic4wl",onBlurCapture:a,ref:e,tabIndex:-1},c),b("React").createElement(b("BaseAccessibleElement.react"),null,b("React").createElement("div",{ref:j,tabIndex:0})))}e.exports=a}),null);
__d("CometKeys",["Locale"],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({DELETE:"backspace",DOWN:"arrowdown",END:"end",ENTER:"enter",ESCAPE:"escape",HOME:"home",LEFT:b("Locale").isRTL()?"arrowright":"arrowleft",PAGE_DOWN:"pagedown",PAGE_UP:"pageup",QUESTION:"?",RIGHT:b("Locale").isRTL()?"arrowleft":"arrowright",SPACE:" ",TAB:"tab",UP:"arrowup",ONE:"1",TWO:"2",THREE:"3",FOUR:"4",FIVE:"5",SIX:"6",SEVEN:"7",EIGHT:"8",NINE:"9",ZERO:"0",A:"a",B:"b",C:"c",D:"d",E:"e",F:"f",G:"g",H:"h",I:"i",J:"j",K:"k",L:"l",M:"m",N:"n",O:"o",P:"p",Q:"q",R:"r",S:"s",T:"t",U:"u",V:"v",W:"w",X:"x",Y:"y",Z:"z"});e.exports=a}),null);
__d("CometHideLayerOnEscape.react",["fbt","CometComponentWithKeyCommands.react","CometKeys","React"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c=function(){a.onHide(),a.contextElement&&a.contextElement.focus()};c=[{command:{key:b("CometKeys").ESCAPE},description:g._("Close current view"),handler:c}];return b("React").createElement(b("CometComponentWithKeyCommands.react"),{commandConfigs:c,debugName:"ModalLayer",isWrapperFocusable:!0},a.children)}e.exports=a}),null);
__d("CometBadge.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){var c=a.children,d=a.color;d=d===void 0?"blue":d;var e=a.border;e=e===void 0?"none":e;var f=a.isProfileBadge;f=f===void 0?!1:f;a=a.size;a=a===void 0?8:a;return b("React").createElement("span",{className:b("stylex").dedupe(d==="blue"?{"background-color-1":"is6700om"}:{},e!=="none"?{"border-style-0.2":"ow4ym5g4"}:null,e==="white"?{"border-color-0.2":"mkextl8n"}:null,f===!1?{"margin-top-1":"kvgmc6g5","margin-end-1":"oi9244e8","margin-bottom-1":"arzshmzb","margin-start-1":"hcukyx3x"}:null,d==="gray"?{"background-color-1":"p2o8ms9n"}:null,d==="green"?{"background-color-1":"jllm4f4h"}:null,d==="red"?{"background-color-1":"gky8063y"}:null,{"border-radius-1":"fnhzkyyu","display-1":"pq6dq46d"},a===6?{"border-width-0.2":"a6q6sin5","height-1":"am38r5jf","width-1":"mx9os10e"}:null,a===7?{"border-width-0.2":"eo2kjs22","height-1":"ooasylqa","width-1":"c0wkt4kp"}:null,a===8?{"border-width-0.2":"eo2kjs22","height-1":"t6na6p9t","width-1":"c9rrlmt1"}:null,a===9?{"border-width-0.2":"eo2kjs22","height-1":"fz6q6hdd","width-1":"sx90ovx5"}:null,a===10?{"border-width-0.2":"eo2kjs22","height-1":"bsodd3zb","width-1":"xthkpp0z"}:null,a===12?{"border-width-0.2":"eo2kjs22","height-1":"cyypbtt7","width-1":"fwizqjfa"}:null,a===14?{"border-width-0.2":"eo2kjs22","height-1":"i4qgphn6","width-1":"gab7stmx"}:null,a===15?{"border-width-0.2":"eo2kjs22","height-1":"ed3p1gfi","width-1":"fhvfysw3"}:null,a===18?{"border-width-0.2":"eo2kjs22","height-1":"hm271qws","width-1":"ov9facns"}:null,a===20?{"border-width-0.2":"le0tkay7","height-1":"jnigpg78","width-1":"odw8uiq3"}:null,a===22?{"border-width-0.2":"le0tkay7","height-1":"p1ueia1e","width-1":"pgctjfs5"}:null,a===24?{"border-width-0.2":"le0tkay7","height-1":"rgmg9uty","width-1":"b73ngqbp"}:null,a===32?{"border-width-0.2":"le0tkay7","height-1":"k7cz35w2","width-1":"bsnbvmp4"}:null,a===41?{"border-width-0.2":"le0tkay7","height-1":"c9yomchb","width-1":"chsygg5i"}:null)},c)}e.exports=a}),null);
__d("BaseRowContext",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("React").createContext({columns:1})}),null);
__d("BaseRow.react",["BaseRowContext","React","cometTestID","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={row:{alignItems:"gs1a9yip",boxSizing:"rq0escxv",display:"j83agx80",justifyContent:"i1fnvgqd",position:"l9j0dhe7",zIndex:"du4w35lb"}},h={center:{justifyContent:"taijpn5t"},end:{justifyContent:"bkfpd7mw"},start:{justifyContent:"jifvfom9"}},i={center:{alignItems:"bp9cbjyn"},end:{alignItems:"aovydwv3"},start:{alignItems:"ll8tlv6m"}},j={backward:{flexDirection:"rl25f0pe"},forward:{flexDirection:"btwxx1t3"}},k={backward:{flexWrap:"kbz25j0m"},forward:{flexWrap:"lhclo0ds"}};function a(a,c){__p&&__p();var d=a.align;d=d===void 0?"justify":d;var e=a.children,f=a.columns;f=f===void 0?0:f;var l=a.direction;l=l===void 0?"forward":l;var m=a.testid,n=a.verticalAlign;n=n===void 0?"stretch":n;var o=a.wrap;o=o===void 0?"none":o;a=a.xstyle;return b("React").createElement("div",babelHelpers["extends"]({className:b("stylex")(g.row,h[d],i[n],k[o],j[l],a)},b("cometTestID")(m),{ref:c}),b("React").createElement(b("BaseRowContext").Provider,{value:{columns:f}},e))}e.exports=b("React").forwardRef(a)}),null);
__d("BaseRowItem.react",["BaseRowContext","React","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useContext,h={expanding:{flexBasis:"rj1gh0hx",flexGrow:"buofh1pr",flexShrink:"g5gj957u",minWidth:"hpfvmrgz"},item:{boxSizing:"rq0escxv",maxWidth:"d2edcug0",position:"l9j0dhe7",zIndex:"du4w35lb"}},i={1:{flexBasis:"d8ncny3e"},2:{flexBasis:"hkbzh7o3"},3:{flexBasis:"p8cu3f6v"},4:{flexBasis:"ftbm7790"},5:{flexBasis:"eot2utzp"},6:{flexBasis:"acumsrbk"},7:{flexBasis:"snx44xhi"},8:{flexBasis:"joeu7ti0"},9:{flexBasis:"dswtirgy"},10:{flexBasis:"t9lf192y"}},j={center:{alignSelf:"o8rfisnq"},end:{alignSelf:"c4hnarmi"},start:{alignSelf:"nqmvxvec"},stretch:{alignSelf:"ns4p8fja"}};function a(a,c){var d=a.children,e=a.xstyle,f=a.expanding;f=f===void 0?!1:f;var k=a.verticalAlign;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","xstyle","expanding","verticalAlign"]);var l=g(b("BaseRowContext"));l=l.columns;return b("React").createElement("div",babelHelpers["extends"]({},a,{className:b("stylex")(h.item,f&&h.expanding,l>0&&i[l],k!=null&&j[k],e),ref:c}),d)}e.exports=b("React").forwardRef(a)}),null);
__d("ariaGlimmerProps",["fbt","React"],(function(a,b,c,d,e,f,g){"use strict";a={"aria-busy":!0,"aria-valuemax":100,"aria-valuemin":0,"aria-valuetext":g._("Loading..."),role:"progressbar"};e.exports=a}),null);
__d("CometContextualLayerOrientationContext",["React"],(function(a,b,c,d,e,f){"use strict";a={align:"start",position:"below"};e.exports=b("React").createContext(a)}),null);
__d("CometContextualLayerTriggerPositioningContext",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("React").createContext(null)}),null);
__d("CometLink.react",["BaseLink.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g={displayBlock:{display:"a8c37x1j"},displayInlineBlock:{display:"q9uorilb"},root:{color:"oo9gr5id",":hover":{textDecoration:"gpro0wi8"}}};function a(a,c){var d=a.display;d=d===void 0?"inline":d;var e=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["display","xstyle"]);return b("React").createElement(b("BaseLink.react"),babelHelpers["extends"]({},a,{ref:c,xstyle:[g.root,d==="block"&&g.displayBlock,d==="inline-block"&&g.displayInlineBlock,e]}))}e.exports=b("React").forwardRef(a)}),null);
__d("CometMenuContext",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("React").createContext()}),null);
__d("CometPopover.react",["CometContextualLayerOrientationContext","CometContextualLayerTriggerPositioningContext","CometFocusLayer.react","Locale","React","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("Locale").isRTL(),h=6,i=16;function a(a,c){__p&&__p();var d=a.autoFocus;d=d===void 0?!1:d;var e=a.children,f=a.onBlur,j=a.onFocus;a=a.withArrow;a=a===void 0?!1:a;var k=b("React").useContext(b("CometContextualLayerOrientationContext")),l=k.align;k=k.position;var m=b("React").useContext(b("CometContextualLayerTriggerPositioningContext"));d=b("React").createElement(b("CometFocusLayer.react"),{autoFocus:d},b("React").createElement("div",{className:"oqq733wu stjgntxs ni8dbmo4 jgsskzai rq0escxv nwpbqux9 ptt86dso cwj9ozl2"},e));if(!a)return b("React").createElement("div",{className:"l9j0dhe7 hzruof5a",onBlur:f,onFocus:j,ref:c},d);e={};a={};if(k==="start"||k==="end"){var n=m?(m.bottom-m.top)/2:0,o=Math.max(n,i);n=o-n;l==="start"?(e.top=o-h,a.top=-n):l==="end"&&(e.bottom=o-h,a.bottom=-n)}else if(k==="above"||k==="below"){o=m?(m.right-m.left)/2:0;n=Math.max(o,i);m=n-o;g&&l==="start"||!g&&l==="end"?(e.right=n-h,a.right=-m):(g&&l==="end"||!g&&l==="start")&&(e.left=n-h,a.left=-m)}return b("React").createElement("div",{className:"l9j0dhe7 hzruof5a"+(k==="above"?" ama3r5zh":"")+(k==="below"?" swg4t2nn":"")+(k==="start"?" r70wmyd8":"")+(k==="end"?" aoep172s":""),onBlur:f,onFocus:j,ref:c,style:a},d,b("React").createElement("div",{className:b("stylex").dedupe({"border-bottom-color-1":"d06cv69u","border-end-color-1":"r7dfy6xl","border-start-color-1":"cdcbzqsl","border-style-0.2":"ow4ym5g4","border-top-color-1":"jgf7e1nu","border-width-0.2":"jucrb5e1","position-1":"pmk7jnqg"},(k==="above"||k==="below")&&l==="middle"?{"start-1":"h9efg1rk"}:null,(k==="start"||k==="end")&&l==="middle"?{"top-1":"rarmybbq"}:null,k==="above"?{"border-bottom-color-1":"j7g94pet","border-start-color-1":"b74d5cxt","box-shadow-1":"tpe1gtqi","top-1":"i42f9fw1"}:null,k==="above"&&!g?{"transform-0.1":"tkrgf6ux"}:null,k==="above"&&g?{"transform-0.1":"elk1aw29"}:null,k==="below"?{"border-end-color-1":"et4y5ytx","border-top-color-1":"np69z8it","bottom-1":"bssd97o4","box-shadow-1":"n4j0glhw"}:null,k==="below"&&!g?{"transform-0.1":"jrg050zf"}:null,k==="below"&&g?{"transform-0.1":"i3xc0qmo"}:null,k==="start"?{"border-bottom-color-1":"j7g94pet","border-end-color-1":"et4y5ytx","box-shadow-1":"jxfglsfo","start-1":"lu1ps8bl"}:null,k==="start"&&!g?{"transform-0.1":"sjvvki67"}:null,k==="start"&&g?{"transform-0.1":"rmnkhzw0"}:null,k==="end"?{"border-bottom-color-1":"j7g94pet","border-start-color-1":"b74d5cxt","box-shadow-1":"tpe1gtqi","end-1":"p72yiolg"}:null,k==="end"&&!g?{"transform-0.1":"rmnkhzw0"}:null,k==="end"&&g?{"transform-0.1":"sjvvki67"}:null),style:e}))}e.exports=b("React").forwardRef(a)}),null);
__d("TetraHeadlineWithAddOn.react",["BaseRow.react","BaseRowItem.react","React","TetraText.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g={addOn:{display:"j83agx80",flexDirection:"cbu4d94t",justifyContent:"taijpn5t",marginStart:"dhix69tm"},nonBreakingSpace:{visibility:"kr9hpln1",width:"ttbfdpzt"}};function a(a){var c=a.addOn,d=a.children,e=a.color,f=a.isSemanticHeading,h=a.numberOfLines;a=a.type;return b("React").createElement(b("TetraText.react"),{isSemanticHeading:f,type:a},b("React").createElement(b("BaseRow.react"),{verticalAlign:"center"},b("React").createElement(b("BaseRowItem.react"),{expanding:!0},b("React").createElement(b("TetraText.react"),{color:e,isSemanticHeading:!1,numberOfLines:h,type:a},d)),b("React").createElement(b("BaseRowItem.react"),{verticalAlign:"start",xstyle:g.addOn},b("React").createElement(b("BaseRow.react"),{verticalAlign:"center"},b("React").createElement(b("BaseRowItem.react"),{xstyle:g.nonBreakingSpace},"\xa0"),b("React").createElement(b("BaseRowItem.react"),null,b("React").createElement(b("BaseRow.react"),null,c))))))}e.exports=a}),null);
__d("getTetraTextHierarchyStyle",["memoizeWithArgs"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("memoizeWithArgs")(function(a,b){switch(a){case 1:return{bodyType:"body1",headlineType:"headlineEmphasized1",metaType:"meta1"};case 2:return{bodyType:"body2",headlineType:"headlineEmphasized2",metaType:"meta2"};case 3:return{bodyType:"body3",headlineType:b===!0?"headline3":"headlineEmphasized3",metaType:"meta3"};default:case 4:return{bodyType:"body4",headlineType:b===!0?"headline4":"headlineEmphasized4",metaType:"meta4"};case"entityHeader1":return{bodyType:"body2",headlineType:"entityHeaderHeadline1",metaType:"entityHeaderMeta1"};case"entityHeader2":return{bodyType:"body2",headlineType:"entityHeaderHeadline2",metaType:"entityHeaderMeta2"}}},function(a,b){return String(a)+(b===!0?"":"e")});e.exports=a}),null);
__d("TetraTextPairing.react",["CometLink.react","React","TetraHeadlineWithAddOn.react","TetraText.react","cometTestID","getTetraTextHierarchyStyle","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={item:{marginBottom:"qzhwtbm6",marginTop:"knvmm38d"},root:{display:"j83agx80",flexDirection:"cbu4d94t",marginBottom:"ew0dbk1b",marginTop:"irj2b8pg"}},h={1:{marginBottom:"q9se6cdp",marginTop:"p984guvr"},2:{marginBottom:"mysgfdmx",marginTop:"hddg9phg"},entityHeader1:{marginBottom:"obtkqiv7",marginTop:"sv5sfqaa"},entityHeader2:{marginBottom:"obtkqiv7",marginTop:"sv5sfqaa"}},i={1:{marginBottom:"px9k8yfb",marginTop:"hk9dxy2p"},2:{marginBottom:"w0hvl6rk",marginTop:"qjjbsfad"},entityHeader1:{marginBottom:"bi6gxh9e",marginTop:"aov4n071"},entityHeader2:{marginBottom:"bi6gxh9e",marginTop:"aov4n071"}};function a(a){__p&&__p();var c=a.body,d=a.bodyColor;d=d===void 0?"primary":d;var e=a.bodyLineLimit,f=a.headline,j=a.headlineAddOn,k=a.headlineColor;k=k===void 0?"primary":k;var l=a.headlineLineLimit,m=a.headlineUrl,n=a.isSemanticHeading,o=a.level,p=a.meta,q=a.metaColor;q=q===void 0?"secondary":q;var r=a.metaLineLimit,s=a.metaLocation;s=s===void 0?"below":s;var t=a.reduceEmphasis;t=t===void 0?!1:t;var u=a.testid;a=a.textAlign;a=a===void 0?"default":a;t=b("getTetraTextHierarchyStyle")(o,t);var v=t.bodyType,w=t.headlineType;t=t.metaType;var x=b("stylex")(g.item,i[o]);j=f!=null&&b("React").createElement("div",{className:x},j!=null?b("React").createElement(b("TetraHeadlineWithAddOn.react"),{addOn:j,color:k,isSemanticHeading:n,numberOfLines:l,type:w},f):b("React").createElement(b("TetraText.react"),{align:a,color:k,isSemanticHeading:n,numberOfLines:l,type:w},f));m!=null&&(j=b("React").createElement(b("CometLink.react"),{href:m},j));k=p!=null&&b("React").createElement("div",{className:x},b("React").createElement(b("TetraText.react"),{align:a,color:q,isSemanticHeading:n,numberOfLines:r,type:t},p));return b("React").createElement("div",babelHelpers["extends"]({className:b("stylex")(g.root,h[o])},b("cometTestID")(u)),s==="above"&&k,j,c!=null&&b("React").createElement("div",{className:x},b("React").createElement(b("TetraText.react"),{align:a,color:d,isSemanticHeading:!1,numberOfLines:e,type:v},c)),s==="below"&&k)}e.exports=a}),null);
__d("useMergeRefs",["React","mergeRefs"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useMemo;function a(a,c){return g(function(){return b("mergeRefs")(a,c)},[a,c])}e.exports=a}),null);
__d("useCometLoadingStateTracker",["requireCond","cr:1075529","cr:683059","CometVisualCompletionConstants","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useEffect,h=b("React").useRef,i=(c={},c[b("CometVisualCompletionConstants").LOADING_ELEMENT_ATTR]=!0,c);function a(){var a=h(null);g(function(){var c=a.current,d=[];b("cr:1075529")&&c!=null&&d.concat(b("cr:1075529").trackLoadingState(c));b("cr:683059")&&c!=null&&b("cr:683059").inAboveTheFold(c)&&d.push(b("cr:683059").waitOnLoadingElement(c));return function(){d.forEach(function(a){a()})}},[]);return[i,a]}e.exports=a}),null);
__d("useInterval",["React","clearInterval","setIntervalAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useEffect,h=b("React").useRef;e.exports=function(a,c,d){__p&&__p();d===void 0&&(d=[]);var e=h(a);g(function(){e.current=a},[a]);var f=a!=null;g(function(){if(!f)return;var a=b("setIntervalAcrossTransitions")(function(){var a=e.current;if(a==null)return;a()},c);return function(){return b("clearInterval")(a)}},[f,c].concat(d))}}),null);
__d("usePrevious",["React"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useEffect,h=b("React").useRef;function a(a){var b=h(null);g(function(){b.current=a});return b.current}e.exports=a}),null);