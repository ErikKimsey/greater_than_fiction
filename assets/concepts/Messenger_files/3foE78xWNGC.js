if (self.CavalryLogger) { CavalryLogger.start_js(["QRjsU"]); }

__d("MessengerMenu.react",["cx","Keys","MenuSeparator.react","MessengerDotComAndInboxM4Check.bs","ReactXUIMenu","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){a.isReactLegacyFactory={},a.type=a}c=function(a){babelHelpers.inheritsLoose(c,a);function c(c){var d=c.className;c=babelHelpers.objectWithoutPropertiesLoose(c,["className"]);return a.call(this,babelHelpers["extends"]({className:b("joinClasses")(d,"_2i-c"+(b("MessengerDotComAndInboxM4Check.bs").yes?" _6_n0":"")+" _150g")},c))||this}var d=c.prototype;d.handleKeydown=function(c,d){return c===b("Keys").DOWN||c===b("Keys").UP||c===b("Keys").SPACE?a.prototype.handleKeydown.call(this,c,d):!0};return c}(b("ReactXUIMenu"));a(c);c.Item=b("ReactXUIMenu").Item;c.Separator=b("MenuSeparator.react");e.exports=c}),null);
__d("XSettingsEmployeeBetaController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/settings/employee/beta_mode/",{enabled:{type:"Bool",defaultValue:!1}})}),null);
__d("MessengerBugNub.react",["cx","fbt","ix","AsyncRequest","CurrentUser","Image.react","Link.react","MessengerEnvironment","MessengerMenu.react","MessengerPopoverMenu.react","React","Tooltip","URI","WorkModeConfig","XSettingsEmployeeBetaController","gkx","goURI"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=i("86836"),k=i("86835"),l=i("86837");a=b("React").PropTypes;var m=b("MessengerMenu.react").Item,n=b("MessengerMenu.react").Separator,o=h._("Report a bug");c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("CurrentUser").isEmployee()||this.props.allowExternalReporting&&b("gkx")("984969")?b("React").createElement("div",{className:"_4_xe"+(b("gkx")("678606")?" _2jqn":"")},this.$1(),this.$2()):null};d.$2=function(){var a=b("CurrentUser").isEmployee()?"/ajax/bugs/employee_report":"/ajax/bugs/report";return b("React").createElement(b("Link.react"),babelHelpers["extends"]({"aria-label":o,href:"#",ajaxify:a,className:"_1fr8",rel:"dialog"},b("Tooltip").propsFor(o)),b("React").createElement("div",{className:"_1gng"},b("React").createElement(b("Image.react"),{src:j})))};d.$1=function(){var a=this.props.isBetaEnabled?k:l,c=h._("Internal preferences");return b("CurrentUser").isEmployee()?b("React").createElement(b("MessengerPopoverMenu.react"),babelHelpers["extends"]({className:"_1fr8",menu:this.$3()},b("Tooltip").propsFor(c)),b("React").createElement(b("Link.react"),{"aria-haspopup":"true","aria-label":c,className:"_1gng",href:"#",role:"button"},b("React").createElement(b("Image.react"),{src:a}))):null};d.$3=function(){__p&&__p();var a=this,c=null;if(this.props.unixName){var d=this.props.unixName+".sb";c=b("React").createElement(m,{label:"Sandbox",onclick:function(){return a.$4(d)}})}return b("React").createElement(b("MessengerMenu.react"),null,b("React").createElement(m,{label:"Public",onclick:function(){return a.$5(!1)}}),b("React").createElement(m,{label:"Beta",onclick:function(){return a.$5(!0)}}),b("React").createElement(n,null),b("React").createElement(m,{label:"C1 (trunkstable)",onclick:function(){return a.$4()}}),b("React").createElement(m,{label:"Intern",onclick:function(){return a.$4("intern")}}),b("React").createElement(m,{label:"Production",onclick:function(){return a.$4("prod")}}),c)};d.$5=function(a){var c=b("XSettingsEmployeeBetaController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(c).setData({enabled:a}).setMethod("POST").setAllowCrossPageTransition(!0).send()};d.$4=function(a){var c=b("MessengerEnvironment").facebookdotcom?".facebook.com":".messenger.com",d=b("WorkModeConfig").company_subdomain;d=d?d:"www";d=d+(a?"."+a:"")+c;b("goURI")(b("URI").getRequestURI().getQualifiedURI().setDomain(d))};return c}(b("React").PureComponent);c.propTypes={isBetaEnabled:a.bool,unixName:a.string};e.exports=c}),null);
__d("MessengerDialogs.re",["bs_curry","MessengerDialogs.bs"],(function(a,b,c,d,e,f){a=b("MessengerDialogs.bs").showDialog;f.showDialog=a;c=function(a,c){a=b("bs_curry")._2(b("MessengerDialogs.bs").removeDialog,a.dialog,c);return a};f.removeDialog=c;d=b("MessengerDialogs.bs").removeAllDialogs;f.removeAllDialogs=d}),null);
__d("MessengerContentSearchFunnelLogger",["FunnelLogger","MessengerContentSearchFunnelLoggerConstants"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("MessengerContentSearchFunnelLoggerConstants").FUNNEL_NAME,h=b("MessengerContentSearchFunnelLoggerConstants").FUNNEL_LOGGER_EVENTS,i=null,j=0,k=0,l=new Set(),m=0,n=0;function a(a,c){i!==null&&b("FunnelLogger").appendActionWithPayload(g,h.NUM_BROWSE_ACTIONS_WITHIN_THREAD,{threadID:i,numBrowseActions:j,numContextBrowse:n,msgs:Array.from(l)}),i=null,j=0,k=0,n=0,l.clear(),m=Date.now(),b("FunnelLogger").startFunnel(g),c&&b("FunnelLogger").addFunnelTag(g,c),b("FunnelLogger").setFunnelTimeout(g,86400),b("FunnelLogger").appendActionWithPayloadIfNew(g,h.INITIATE_CONTENT_SEARCH,babelHelpers["extends"]({query:a},c&&{entry_surface:c}))}function c(a){b("FunnelLogger").appendActionWithPayload(g,h.CHANGE_QUERY,{query:a})}function d(a){b("FunnelLogger").appendActionWithPayload(g,h.THREAD_IMPRESSIONS,{impressionList:a,latency:Date.now()-m})}function f(a,c){b("FunnelLogger").appendActionWithPayload(g,h.LOAD_MORE_THREADS,{impressionList:a,latency:c})}function o(){n+=1}function p(a,c){i!==null&&b("FunnelLogger").appendActionWithPayload(g,h.NUM_BROWSE_ACTIONS_WITHIN_THREAD,{threadID:i,numBrowseActions:j,numContextBrowse:n,msgs:Array.from(l)}),i=a,j=0,n=0,l.clear(),b("FunnelLogger").appendActionWithPayload(g,h.SELECT_THREAD,{thread_id:a,has_results:c})}function q(a){j+=1,k+=1}function r(a,c,d){i=c,l.add(a),b("FunnelLogger").appendActionWithPayload(g,h.LOAD_MESSAGE_IN_THREAD,{latency:d})}function s(a){i!==null&&b("FunnelLogger").appendActionWithPayload(g,h.NUM_BROWSE_ACTIONS_WITHIN_THREAD,{threadID:i,numBrowseActions:j,numContextBrowse:n,msgs:Array.from(l)}),a?b("FunnelLogger").appendActionWithTagAndPayloadIfNew(g,h.END_CONTENT_SEARCH,a,{totalBrowseActions:k}):b("FunnelLogger").appendActionWithPayloadIfNew(g,h.END_CONTENT_SEARCH,{totalBrowseActions:k}),b("FunnelLogger").endFunnel(g)}e.exports={browseMessageInThread:q,endFunnel:s,loadMessageInThread:r,logContextBrowse:o,logChangeQuery:c,logLoadMoreThreads:f,logThreadImpressions:d,logThreadSelect:p,startFunnel:a}}),null);
__d("MessengerThreadSearchIconSVGM4React.bs",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createElement("svg",{height:"22px",width:"22px",viewBox:"0 0 36 36"},b("React").createElement("g",{id:"magnifying-glass",fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1"},b("React").createElement("g",{id:"Search"},b("React").createElement("polygon",{id:"Bounding-Box",points:"0 36 36 36 36 0 0 0"}),b("React").createElement("path",{id:"Fill-1",d:"M15.499,9.000053 C11.909,9.000053 8.9995,11.9106492 8.9995,15.5009175 C8.9995,19.0911858 11.909,22.0022817 15.499,22.0022817 C19.0885,22.0022817 21.998,19.0911858 21.998,15.5009175 C21.998,11.9106492 19.0885,9.000053 15.499,9.000053 Z M25.4875,28.30874 L21.6335,23.8523894 C21.313,23.482068 20.7755,23.4056049 20.355,23.6574834 C18.934,24.5085729 17.276,25.0023347 15.499,25.0023347 C10.253,25.0023347 6,20.7483865 6,15.5009175 C6,10.2539482 10.253,6 15.499,6 C20.7445,6 24.9975,10.2539482 24.9975,15.5009175 C24.9975,17.2770608 24.5045,18.9357608 23.655,20.3565755 C23.4065,20.7708757 23.491,21.3016197 23.8555,21.6184668 L28.3065,25.4841024 L25.4875,28.30874 Z M28.3065,25.4841024 C29.183,26.2452352 29.231,27.5915859 28.4105,28.4131896 C27.591,29.2352931 26.247,29.1873162 25.4875,28.30874 L28.3065,25.4841024 Z",fill:"#000000"}))));f.icon=a}),null);
__d("MessengerThreadSearchIconSVGReact.bs",["React"],(function(a,b,c,d,e,f){"use strict";function a(a,c){return b("React").createElement("div",{className:a},b("React").createElement("svg",{viewBox:"8 8 48 48"},b("React").createElement("title",void 0,"search conversation"),b("React").createElement("circle",{cx:"28",cy:"28",fill:"none",r:"14",stroke:c,strokeMiterlimit:"10",strokeWidth:"2"}),b("React").createElement("path",{clipRule:"evenodd",d:"M50,50L37.9,37.9",fill:"none",fillRule:"evenodd",stroke:c,strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2"})))}f.make=a}),null);
__d("MessengerInfoPanelSearchReact.bs",["ix","cx","fbt","Keys","bs_curry","Image.bs","React","Bootload.bs","asset","Bootloader","bs_belt_Option","CurrentUser","ReasonReact.bs","bs_js_primitive","MessengerActions","MessengerURIStore","MessengerCustomColorUtils.bs","MessengerDotComAndInboxM4Check.bs","MessengerThreadSearchIconSVGReact.bs","MessengerContentSearchFunnelLogger","MessengerThreadSearchIconSVGM4React.bs","MessengerContentSearchFunnelLoggerConstants"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();function a(a){b("Bootloader").loadModules(["BootloadableMessengerContentSearchFunnelLogger.bs"],a,"MessengerInfoPanelSearchReact.bs");return 0}c=[a];var j=b("Bootload.bs").Create(c);function k(a,c){b("MessengerContentSearchFunnelLogger").startFunnel(a,b("MessengerContentSearchFunnelLoggerConstants").ENTRY_SURFACES.SEARCH_WITHIN_THREAD);return 0}function l(){var a=b("MessengerURIStore").getState().query;a=a==null;b("MessengerActions").changeQuery(a?"":void 0);return 0}function m(a){var c=b("bs_belt_Option").getWithDefault(b("bs_js_primitive").nullable_to_opt(b("MessengerURIStore").getState().query),"");a.preventDefault();b("bs_curry")._1(j[0],function(a){return k(c,a)});return l(0)}function n(a){if(a.keyCode===b("Keys").RETURN){a.preventDefault();return l(0)}else return 0}var o=b("MessengerDotComAndInboxM4Check.bs").yes?"_3szo _6y4w":"_3szo",p=b("ReasonReact.bs").statelessComponent("MessengerInfoPanelSearchReact");function q(a,c){return[p[0],p[1],p[2],p[3],p[4],p[5],p[6],p[7],function(){return b("React").createElement("div",{className:o,tabIndex:0,onKeyDown:n,onClick:m},b("React").createElement("div",{className:"_3szp"},b("CurrentUser").isWorkUser()?b("ReasonReact.bs").element(void 0,void 0,b("Image.bs").make(void 0,void 0,void 0,void 0,g("465522"),void 0,void 0,void 0,void 0,[])):b("MessengerDotComAndInboxM4Check.bs").yes?b("React").createElement("div",{className:"_6ybv"},b("MessengerThreadSearchIconSVGM4React.bs").icon):b("MessengerThreadSearchIconSVGReact.bs").make("_6b45",b("MessengerCustomColorUtils.bs").customColorOrBlue(a))),b("React").createElement("div",{className:"_3szq"},i._("Search in Conversation")))},p[9],p[10],p[11],p[12]]}d=b("ReasonReact.bs").wrapReasonForJs(p,function(a){return q(a.thread,[])});e=b("bs_belt_Option").getWithDefault;f.$pipe$unknown=e;f.BootloadableMessengerContentSearchFunnelLogger=c;f.LoadableMessengerContentSearchFunnelLoggerRe=j;f.handleLoggerLoad=k;f.showQuery=l;f.handleSearchThreadClick=m;f.handleSearchThreadKeyDown=n;f.rowClasses=o;f.component=p;f.make=q;f.jsComponent=d}),null);
__d("MessengerParticipants.re",["bs_curry","MessengerParticipants.bs"],(function(a,b,c,d,e,f){__p&&__p();a=function(a,c){a=b("bs_curry")._2(b("MessengerParticipants.bs").get,a,c);return a};f.get=a;c=b("MessengerParticipants.bs").getNow;f.getNow=c;d=function(a,c){a=b("bs_curry")._2(b("MessengerParticipants.bs").getMulti,a,c);return a};f.getMulti=d;e=function(a,c){a=b("bs_curry")._2(b("MessengerParticipants.bs").getMultiEager,a,c);return a};f.getMultiEager=e;a=function(a,c){a=b("bs_curry")._2(b("MessengerParticipants.bs").getMultiEagerMap,a,c);return a};f.getMultiEagerMap=a;c=b("MessengerParticipants.bs").removeCallback;f.removeCallback=c;d=function(a,c){a=b("bs_curry")._2(b("MessengerParticipants.bs").getOrderedBigImageMulti,a,c);return a};f.getOrderedBigImageMulti=d}),null);
__d("MessengerReasonDialogContainerReact.bs",["bs_list","bs_array","bs_block","bs_curry","React","ReasonReact.bs","MessengerDialogs.bs"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ReasonReact.bs").reducerComponent("MessengerReasonDialogContainer");function h(){__p&&__p();return[g[0],g[1],g[2],g[3],function(a){return b("MessengerDialogs.bs").addHandler(function(c){return b("bs_curry")._1(a[3],[c])})},g[5],g[6],g[7],function(a){a=a[1];if(a!==void 0)return b("React").createElement("div",void 0,b("bs_array").of_list(b("bs_list").rev(a)).map(function(a,c){return b("React").createElement("span",{key:String(c)},b("bs_curry")._1(a,0))}));else return null},function(){return void 0},g[10],function(a,c){return b("bs_block").__(0,[a[0]])},g[12]]}a=b("ReasonReact.bs").wrapReasonForJs(g,function(){return h([])});f.component=g;f.make=h;f.jsComponent=a}),null);
__d("MessengerPromotionDataDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.call(this,{strict:!0})||this}return b}(b("ExplicitRegistrationReactDispatcher"));e.exports=new a()}),null);
__d("MessengerPromotionDataActions",["MessengerPromotionDataDispatcher"],(function(a,b,c,d,e,f){"use strict";a={setPromotionData:function(a){b("MessengerPromotionDataDispatcher").dispatch({type:"SET_PROMOTION_DATA",promotionData:a})}};e.exports=a}),null);
__d("WorkchatAppKeyboardShortcut.react",["cx","React","immutable"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();b("immutable").List;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement("div",{className:"_2_xt _4lrb"},b("React").createElement("div",{className:"_4lrc"},this.props.label),b("React").createElement("div",{className:"_4lrl"},this.props.keys.map(function(a){return b("React").createElement("span",{className:"_4lrm",key:a},a)})))};return c}(b("React").Component);e.exports=a}),null);
__d("WorkchatAppKeyboardShortcutsDialog.react",["cx","fbt","MessengerDialog.react","MessengerDialogBody.react","MessengerDialogButton.react","MessengerDialogHeaderReact.re","MessengerDialogs.re","MessengerDialogTitleReact.re","React","WorkchatAppKeyboardShortcut.react","immutable"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("MessengerDialogHeaderReact.re").make,j=b("MessengerDialogTitleReact.re").make,k=b("immutable").List,l=function(a){return a==="darwin"?{CmdOrCtrl:"\u2318",Alt:"\u2387",Shift:"\u21e7",Tab:"\u21b9",Up:"\u2191",Down:"\u2193"}:{CmdOrCtrl:"Ctrl",Alt:"Alt",Shift:"Shift",Tab:"Tab",Up:"\u2191",Down:"\u2193"}},m=function(a){a=l(a);return k([{Header:"General",Shortcuts:k([{label:h._("Create new chat"),keys:k([a.CmdOrCtrl,"N"])},{label:h._("Search chats"),keys:k([a.CmdOrCtrl,"K"])},{label:h._("Show\/hide notifications"),keys:k([a.CmdOrCtrl,"/"])}])},{Header:"Navigation",Shortcuts:k([{label:h._("Go to previous chat"),keys:k([a.Alt,a.Up])},{label:h._("Go to next chat"),keys:k([a.Alt,a.Down])},{label:h._("Go to next element"),keys:k([a.Tab])},{label:h._("Open\/select element"),keys:k(["Spacebar"])}])},{Header:"In a Conversation",Shortcuts:k([{label:h._("Show\/hide information"),keys:k([a.CmdOrCtrl,"."])},{label:h._("Mute\/unmute chat"),keys:k([a.CmdOrCtrl,a.Shift,"M"])},{label:h._("Find in chat"),keys:k([a.CmdOrCtrl,"F"])}])},{Header:"During a Call",Shortcuts:k([{label:h._("Toggle mute"),keys:k(["M"])},{label:h._("Toggle video"),keys:k(["V"])}])}])};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=m(this.props.platform);return b("React").createElement(b("MessengerDialog.react"),{onToggle:this.$1,type:"default",width:560},b("React").createElement(i,null,b("React").createElement(j,null,h._("Keyboard Shortcuts")),b("React").createElement(b("MessengerDialogButton.react"),{action:"cancel",label:h._("Done"),type:"primary",use:"default"})),b("React").createElement(b("MessengerDialogBody.react"),null,this.$2(a)))};d.$2=function(a){return b("React").createElement("div",{className:"_4yne"},a.map(function(a,c){return b("React").createElement("div",{className:"_2_xt"+(c!==0?" _4ynf":""),key:a.Header},b("React").createElement("div",{className:"_4ynr"},a.Header),b("React").createElement("div",null,a.Shortcuts.map(function(a){return b("React").createElement(b("WorkchatAppKeyboardShortcut.react"),{key:a.label,keys:a.keys,label:a.label})})))}))};d.$1=function(a){a||b("MessengerDialogs.re").removeDialog({})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("WorkchatAppBridge",["fbt","Arbiter","CurrentLocale","CurrentUser","MercuryIDs","MercuryThreadActions","MercuryThreadInfo","MercuryThreadInformer","MessengerActions","MessengerDialogs.bs","MessengerInfoPanelSearchReact.bs","MessengerParticipants.bs","MessengerPromotionDataActions","MessengerSettingsActions","MessengerSettingsStore","MessengerState.bs","MessengerURIListener","MessengerURIStore","React","WorkchatAppKeyboardShortcutsDialog.react","gkx","immutable","setTimeout"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h={TOGGLE_NOTIFICATION_DIALOG:"TOGGLE_NOTIFICATION_DIALOG",getParticipants:function(a,c){var d=b("immutable").Map();return d.withMutations(function(d){a.participants&&a.participants.forEach(function(a){d.set(a,b("MessengerParticipants.bs").getNow(a))}),a.is_subscribed&&d.set(b("MercuryIDs").getParticipantIDFromUserID(c),b("MessengerParticipants.bs").getNow(b("MercuryIDs").getParticipantIDFromUserID(c)))})},toggleWorkNotificationJewel:function(){b("Arbiter").inform(h.TOGGLE_NOTIFICATION_DIALOG)},toggleKeyboardShortCutsList:function(a){b("MessengerDialogs.bs").showDialog(function(){return b("React").createElement(b("WorkchatAppKeyboardShortcutsDialog.react"),{platform:a})})},toggleInfoPanel:function(){var a=b("MessengerSettingsStore").getSettings().info_sidebar_collapsed;b("MessengerSettingsActions").changeSettings({info_sidebar_collapsed:!a})},getCurrentUser:function(){return{isWorkUser:b("CurrentUser").isWorkUser,isEmployee:b("CurrentUser").isEmployee,getID:b("CurrentUser").getID}},getCurrentLocale:function(){return b("CurrentLocale").get()},subscribeToUnseenMessageCount:function(a){var c=b("MercuryThreadInformer").get();c.subscribe("unseen-updated",function(){return a(b("MessengerState.bs").getUnseenUnreadCount(b("CurrentUser").getID()))});c.subscribe("unread-updated",function(){return a(b("MessengerState.bs").getUnseenUnreadCount(b("CurrentUser").getID()))})},enableDesktopNotifs:function(){b("MessengerSettingsActions").changeDesktopNotifs(!0)},onSampleTextFromThread:function(a){__p&&__p();function c(){var c=b("MessengerURIStore").getState().activeThreadID;if(!c)return;b("MessengerState.bs").getThreadMessagesRange(b("CurrentUser").getID(),c,0,10,function(b){b=b.map(function(a){return a.body}).join("\n");a(b)})}c();b("MessengerURIStore").addListener("change",function(){c()})},selectThread:function(a){b("MessengerActions").selectThread("thread:"+a)},newThread:function(){b("MessengerActions").changeDetailView("detail/compose")},searchInChat:function(){var a={preventDefault:function(){}};b("MessengerSettingsActions").changeSettings({info_sidebar_collapsed:!1});b("MessengerInfoPanelSearchReact.bs").handleSearchThreadClick(a)},restartURIListener:function(){b("MessengerURIListener").stop(),b("MessengerURIListener").start()},initReloadEveryDayHack:function(){if(!b("gkx")("1063307"))return;b("setTimeout")(function(){b("MessengerURIListener").stop()},1e3*60*60*24)},toggleMuteConversation:function(){var a=b("CurrentUser").getID(),c=b("MessengerURIStore").getState().activeThreadID;if(!c)return;var d=b("MessengerState.bs").getThreadMetaNow(a,c);if(!d)return;d=b("MercuryThreadInfo").isMuted(d);a=b("MercuryThreadActions").getForFBID(a);d?a.unmute(c):a.updateMuteSetting(c,-1)},showAppUpdateBanner:function(a){b("MessengerPromotionDataActions").setPromotionData({promotionID:null,promotionContent:g._("A new version is available with improvements and fixes."),primaryActionTitle:g._("Click to update"),primaryActionCallback:a})},init:function(){if(window.workchat===void 0||typeof window.workchat.initMainWindow!=="function")return;window.workchat.initMainWindow(this);this.initReloadEveryDayHack()}};e.exports=h}),null);
__d("MessengerCowatchConfig",["gkx"],(function(a,b,c,d,e,f){"use strict";a={isMessengerDotComEntrypointEnabled:function(){return b("gkx")("939331")},hasZenonCowatchCapability:function(){return b("gkx")("939331")},hasZenonGroupCowatchCapability:function(){return b("gkx")("939331")}};e.exports=a}),null);
__d("XMessengerDotComNUXLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/logging/promotion/",{promotion_id:{type:"Int",required:!0},instance_log_data:{type:"StringToStringMap",defaultValue:{}}})}),null);