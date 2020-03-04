if (self.CavalryLogger) { CavalryLogger.start_js(["grwWi"]); }

__d("ConnectionsPYMLTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:ConnectionsPYMLLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:ConnectionsPYMLLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ConnectionsPYMLLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setEvent=function(a){this.$1.event=a;return this};c.setLikeSource=function(a){this.$1.like_source=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={event:!0,like_source:!0,page_id:!0,time:!0,weight:!0};e.exports=a}),null);
__d("PagesIntegrityEventTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:PagesIntegrityEventLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:PagesIntegrityEventLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:PagesIntegrityEventLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAppversion=function(a){this.$1.appversion=a;return this};c.setClienttime=function(a){this.$1.clienttime=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setEventCallsite=function(a){this.$1.event_callsite=a;return this};c.setEventTarget=function(a){this.$1.event_target=a;return this};c.setException=function(a){this.$1.exception=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setReferrer=function(a){this.$1.referrer=a;return this};c.setTags=function(a){this.$1.tags=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setTargetID=function(a){this.$1.target_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={appversion:!0,clienttime:!0,event:!0,event_callsite:!0,event_target:!0,exception:!0,page_id:!0,referrer:!0,tags:!0,target_id:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("Tour",["Arbiter","LayerDestroyOnHide","LayerHideOnEscape","NavigationMessage","PageEvents"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(){a._instance&&a._instance.setTourComplete(),a._instance=this}var c=a.prototype;c.init=function(){this._pageLeaveToken=b("Arbiter").subscribe(b("PageEvents").AJAXPIPE_ONUNLOAD,this.handleLeavePage.bind(this));this._navigationBeginToken=b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,this.handleTransition.bind(this));this.steps={};return this};c.registerStep=function(a,c){a.disableBehavior(b("LayerDestroyOnHide")),a.disableBehavior(b("LayerHideOnEscape")),this.steps[c]=a,a.subscribe("show",function(){a.inform("tour-dialog-show",a)}),this.getTourStarted()||this.setTourStart()};c._unsubscribeSubscriptions=function(){this._navigationBeginToken.unsubscribe(),this._pageLeaveToken.unsubscribe()};c.handleLeavePage=function(){this._unsubscribeSubscriptions()};c.handleTransition=function(){this._unsubscribeSubscriptions()};c.handleTourStart=function(){};c.handleTourStop=function(){};c.handleTourComplete=function(){};c.showStep=function(a){a=this.steps[a];this.openDialog==a||this.hideOpenDialog();if(!a)return;this.openDialog=a;a.show()};c.hideOpenDialog=function(){this.openDialog&&(this.openDialog.hide(),this.openDialog=null)};c.getTourStarted=function(){return this.tourStarted};c.setTourStart=function(){this.tourStarted=!0,this.handleTourStart()};c.setTourStop=function(){this.tourStarted=!1,this.hideOpenDialog(),this.handleTourStop()};c.setTourComplete=function(){if(this.tourComplete)return;this.setTourStop();this.tourComplete=!0;this.handleTourComplete()};c.hideStep=function(a){a=this.steps[a];a&&a.hide()};a.getInstance=function(){return a._instance||(a._instance=new a())};return a}();Object.assign(a.prototype,{tourStarted:!1,tourComplete:!1,_navigationBeginToken:null,_pageLeaveToken:null,steps:{},openDialog:null});e.exports=a}),null);
__d("XPubcontentInteractionLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pubcontent/suggestions/interaction_logging/",{})}),null);
__d("PageFanning",["ActorURI","Animation","AsyncRequest","ConnectionsPYMLTypedLogger","CSS","DOM","Parent","URI","XPubcontentInteractionLoggingController","$","collectDataAttributes"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={setFanStatus:function(a,c,d,e,f,i,j){__p&&__p();var k={ft:{}};a&&(k={ft:b("collectDataAttributes")(a,["ft"]).ft});var l=new(b("URI"))(window.location.href).getQueryData();d&&(l.ref==="pyml_feed"?new(b("ConnectionsPYMLTypedLogger"))().setEvent("like_page").setLikeSource("profile").setPageID(parseInt(c,10)).log():l.ref==="pyml_permalink"&&new(b("ConnectionsPYMLTypedLogger"))().setEvent("like_page").setLikeSource("post_permalink").setPageID(parseInt(c,10)).log());f=f||function(b){b=b.getPayload();if(!b||!a)return;b.reload?g.reloadOnFanStatusChanged():h(a,b)};l={fbpage_id:c,add:d,reload:e};j!=null&&Object.assign(l,j);Object.assign(l,k);c="/ajax/pages/fan_status.php";j!=null&&j.actor_id!=null&&(c=b("ActorURI").create(c,j.actor_id));e=new(b("AsyncRequest"))().setURI(c).setData(l).setNectarModuleDataSafe(a).setHandler(f);i&&e.setErrorHandler(i);e.send();if(j.fan_origin==="PSYM"&&d&&j.egodata!==null){k={q:j.egodata,action:"fan",action_type:4};new(b("AsyncRequest"))().setMethod("POST").setURI(b("XPubcontentInteractionLoggingController").getURIBuilder().getURI()).setData(k).send()}return!1},reloadOnFanStatusChanged:function(){var a=b("URI").getRequestURI();window.location.href=a},toggleLikeOnFanStatusChanged:function(a,c){var d=b("$")("liked_pages_like_action_"+a);a=b("$")("liked_pages_undo_action_"+a);b("CSS").conditionClass(d,"hidden_elem",c);b("CSS").conditionClass(a,"hidden_elem",!c)}};function h(a,c){var d=c.feedback;if(!d)return;b("Parent").byClass(a,"fbTimelineEscapeSectionItem")&&(a=b("Parent").byClass(a,"fan_status_inactive")||a);var e=b("DOM").create("span",{className:"fan_status_inactive"},d);a.parentNode.replaceChild(e,a);d=function(){c.can_repeat_action&&e.parentNode.replaceChild(a,e)};new(b("Animation"))(e).duration(3e3).checkpoint().to("backgroundColor","#FFFFFF").duration(1e3).ondone(d).go()}e.exports=g}),null);
__d("PagePostEngagementFrictionDialog.react",["cx","fbt","FDSButton.react","FlexLayout.react","LeftRight.react","PagePostEngagementFictionDialogStrings","React","XUICloseButton.react","XUIDialog.react","XUIText.react","nullthrows"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=function(a){var c=b("nullthrows")(b("PagePostEngagementFictionDialogStrings").getStrings(a.fbid));c=a.engagementType==="page_like"?c.pageLikeHeader:c.pageReshareHeader;return b("React").createElement("div",{className:"_4mgg"},b("React").createElement(b("FlexLayout.react"),{align:"center",justify:"all"},b("React").createElement(b("XUIText.react"),{display:"inline",size:"header3",weight:"bold"},c),b("React").createElement(b("XUICloseButton.react"),{onClick:a.onXOut})))},j=function(a){var c=b("nullthrows")(b("PagePostEngagementFictionDialogStrings").getStrings(a.fbid));a=a.engagementType==="page_like"?c.pageLikeBody:c.pageReshareBody;return b("React").createElement("div",{className:"_4mgc"},b("React").createElement(b("XUIText.react"),{display:"block",size:"body1"},a))},k=h._("Cancel"),l=h._("Like Page"),m=h._("Share Post"),n=h._("Go to Page"),o=function(a){return b("React").createElement("div",{className:"_4mgh"},b("React").createElement(b("LeftRight.react"),null,a.onGoToPage!==null?b("React").createElement(b("FDSButton.react"),{label:n,onClick:a.onGoToPage,size:"medium"}):null,b("React").createElement("div",null,b("React").createElement(b("FDSButton.react"),{label:l,onClick:a.onLikePage,size:"medium"}),b("React").createElement("div",{className:"_69nv"},b("React").createElement(b("FDSButton.react"),{label:k,onClick:a.onCancel,size:"medium",use:"primary"})))))},p=function(a){return b("React").createElement("div",{className:"_4mgh"},b("React").createElement(b("LeftRight.react"),null,a.onGoToPage!==null?b("React").createElement(b("FDSButton.react"),{label:n,onClick:a.onGoToPage,size:"medium"}):null,b("React").createElement("div",null,b("React").createElement(b("FDSButton.react"),{label:m,onClick:a.onSharePost,size:"medium"}),b("React").createElement("div",{className:"_69nv"},b("React").createElement(b("FDSButton.react"),{label:k,onClick:a.onCancel,size:"medium",use:"primary"})))))},q=function(a){return a.engagementType==="page_like"?b("React").createElement(o,{onCancel:a.onCancel,onGoToPage:a.onGoToPage,onLikePage:b("nullthrows")(a.onLikePage)}):b("React").createElement(p,{onCancel:b("nullthrows")(a.onCancel),onGoToPage:a.onGoToPage,onSharePost:b("nullthrows")(a.onSharePost)})};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={requestedClose:!1},c.$2=function(){c.$1(c.props.onCancel)},c.$3=function(){c.$1(c.props.onLikePage)},c.$4=function(){c.$1(c.props.onSharePost)},c.$5=function(){c.$1(c.props.onGoToPage)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.$1=function(a){this.setState({requestedClose:!0}),a&&a()};d.render=function(){var a=!this.state.requestedClose&&this.props.shown;return b("React").createElement(b("XUIDialog.react"),{hideOnEscape:!1,isStrictlyControlled:!0,label:"Dialog that shows up when a user likes a Page that is dubious or reshares a post from a dubious Page",layerHideOnBlur:!1,onHide:this.$2,shown:a,width:400},b("React").createElement(i,{engagementType:this.props.engagementType,fbid:this.props.fbid,onXOut:this.$2}),b("React").createElement(j,{engagementType:this.props.engagementType,fbid:this.props.fbid}),b("React").createElement(q,{engagementType:this.props.engagementType,onCancel:this.$2,onGoToPage:this.props.onGoToPage!==null?this.$5:null,onLikePage:this.$3,onSharePost:this.$4}))};return c}(b("React").PureComponent);e.exports=a}),null);
__d("XPagesLikeAndReshareShownController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/integrity/transparency/reshareAndLikeFrictionShown/",{})}),null);
__d("PagePostEngagementFrictionActions",["AsyncRequest","DOM","FBLogger","PagePostEngagementFrictionDialog.react","React","ReactDOM","XPagesLikeAndReshareShownController","XVanityURLController","goURI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("DOM").create("div"),h=function(a,c,d,e,f,h){b("ReactDOM").unmountComponentAtNode(g),b("ReactDOM").render(b("React").createElement(b("PagePostEngagementFrictionDialog.react"),{engagementType:h,fbid:a,onCancel:c,onGoToPage:d,onLikePage:e,onSharePost:f,shown:!0}),g)},i=function(a,c){new(b("AsyncRequest"))().setURI(b("XPagesLikeAndReshareShownController").getURIBuilder().getURI()).setMethod("POST").setData({engagement_type:c,page_id:a}).setHandler(function(a){}).setErrorHandler(function(a){b("FBLogger")("pages_integrity").catching(a.toError()).warn("Unable to set that the user has seen the like/reshare friction dialog")}).send()};a=function(a){a=b("XVanityURLController").getURIBuilder().setString("vanity",a).getURI();b("goURI")(a)};c=function(a,b,c,d){h(a,c,d,b,null,"page_like"),i(a,"page_like")};d=function(a,b,c,d){h(a,c,d,null,b,"reshare"),i(a,"reshare")};e.exports={goToPage:a,showPageLikeEngagementFrictionDialog:c,showReshareEngagementFrictionDialog:d}}),null);
__d("PagesLikeFollowNotifDispatcher",["Arbiter","ExplicitRegistrationReactDispatcher","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){var d;d=a.call(this,c)||this;c=new(b("SubscriptionsHandler"))();c.addSubscriptions(b("Arbiter").subscribe("liked",function(a,b){return d.dispatchLike(b.profile_id)}),b("Arbiter").subscribe("unliked",function(a,b){return d.dispatchUnlike(b.profile_id)}));return d}var d=c.prototype;d.dispatchLike=function(a){this.dispatch({type:"like",data:{pageID:a,likeStatus:!0}})};d.dispatchUnlike=function(a){this.dispatch({type:"unlike",data:{pageID:a,likeStatus:!1}})};return c}(b("ExplicitRegistrationReactDispatcher"));e.exports=new a({strict:!0})}),null);
__d("PagesFollowStore",["FluxReduceStore","PagesLikeFollowNotifDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getInitialState=function(){return{}};c.reduce=function(a,b){var c=babelHelpers["extends"]({},a);switch(b.type){case"init_data":if(b.data.pageID in a)return a;c[b.data.pageID]=b.data.followStatus;return c;case"follow_changed":c[b.data.pageID]=b.data.followStatus;return c}return a};return b}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("PagesLikeFollowNotifDispatcher"))}),null);
__d("XPagesLikeCountController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/x/updateLikeCountDomString/",{page_id:{type:"Int",required:!0},like_id:{type:"String",required:!0}})}),null);
__d("XPagesQOCExperimentLogExposureController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/quality_of_connections_experiment/log_exposure/",{page_id:{type:"FBID",required:!0}})}),null);
__d("PageLikeButton",["Promise","Arbiter","AsyncRequest","AsyncResponse","DOM","EditSubscriptions","Event","FeedBlacklistButton","PageFanning","PagePostEngagementFrictionActions","PagePostEngagementFrictionStore","PagesFollowStore","PagesIntegrityEventTypedLogger","PagesLikeFollowNotifDispatcher","QualityOfConnectionsExperimentTypedLogger","SocialGoodCharityActionsLoggerUtils","SubscribeButton","Tour","XPagesLikeCountController","XPagesQOCExperimentLogExposureController","XPagesQualityOfConnectionsExperimentController","gkx","promiseDone","qex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("PagePostEngagementFrictionActions").goToPage,h=b("PagePostEngagementFrictionActions").showPageLikeEngagementFrictionDialog,i={init:function(a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){__p&&__p();var r=this;i=this._getOption(m,"isLazy");this._subscribe("liked",i,function(c,f){r._shouldUpdateButton(e,m,f)&&(a.swap(),j||d.suppressNextMouseEnter&&d.suppressNextMouseEnter(),r._getOption(m,"is_fundraiser")&&b("EditSubscriptions").toggleNotificationsOnJoin(e,!0))});this._subscribe("unliked",i,function(c,f){r._shouldUpdateButton(e,m,f)&&(a.unswap(),d.hideFlyout&&d.hideFlyout(),r._getOption(m,"is_fundraiser")&&b("EditSubscriptions").toggleNotificationsOnJoin(e,!1))});l&&this._subscribe("spm_callout",i,function(a,c){r._shouldUpdateButton(e,m,c)&&(l.show(),b("Arbiter")._releaseAllEvents("spm_callout"))});var s=function(b){var c=a.getCurrentButton();r._likeButtonAction(e,f,g,h,c,b,m,a,n,o,p,q)};b("Event").listen(c,"click",s);i&&b("Arbiter").subscribe("lazy_click",function(a,b){a=b.event;b=b.node;if(b!==c)return;s(a)})},_subscribe:function(a,c,d){c=c?[a,a+".lazy"]:[a];b("Arbiter").subscribe(c,d)},initCallout:function(a,c){var d=document.getElementById("pageActionLikeCalloutButton");b("Event").listen(d,"click",this._likeButtonAction(a,c,null,null,null,null))},initUnlike:function(a,c,d,e){var f=this,g=this._getOption(e,"actor_id");b("Event").listen(a,"click",function(a){f.doUnlikeAction(a,c,d,g,e)})},initUnlikeAndHide:function(a,c,d,e){var f=this,g=this._getOption(e,"actor_id");b("Event").listen(a,"click",function(h){f.doUnlikeAction(h,c,d,g,e),b("DOM").remove(a)})},doUnlikeAction:function(a,c,d,e,f,g,h){g===void 0&&(g=!1),h===void 0&&(h=!1),this._saveLike(a.target,c,!1,function(a){b("Arbiter").inform("liked",{profile_id:c,actor_id:e}),b("AsyncResponse").defaultErrorHandler(a)},d,null,null,f,!1,!1,g,h),this.informUnlike(c,e,g)},doLikeAction:function(a,c,d,e,f,g){__p&&__p();var h=this;f===void 0&&(f=!1);g===void 0&&(g=!1);var j=this._interceptLikeIfNecessary(c,d,e).then(function(j){if(j){j={actor_id:e};h._saveLike(a,c,!0,function(a){a.getError()!==1431019&&b("Arbiter").inform("unliked",{profile_id:c,actor_id:e}),b("AsyncResponse").defaultErrorHandler(a)},d,null,null,j,!1,f,!1,g);i.informLike(c,a,d,j,f)}},function(a){throw a});b("promiseDone")(j)},informLike:function(a,c,d,e,f){f===void 0&&(f=!1);e=this._getOption(e,"actor_id");c={profile_id:a,actor_id:e,target:c,origin:d};b("Arbiter").inform("liked",c);f||b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:a,actor_id:e,suppress:!0});c.connected=!0;d=b("PagesFollowStore").getState();(!(a in d)||!d[a]||d[a]!=="see_first")&&(f||b("PagesLikeFollowNotifDispatcher").dispatch({type:"follow_changed",data:{pageID:c.profile_id,followStatus:!0}}));b("Arbiter").inform(b("FeedBlacklistButton").UNBLACKLIST,c)},informLikeSuccess:function(a){a={profile_id:a};b("Arbiter").inform("liked_success",a);b("Arbiter").inform("spm_callout",a)},informUnlike:function(a,c,d){d===void 0&&(d=!1);var e={profile_id:a,actor_id:c};setTimeout(b("Arbiter").inform.bind(b("Arbiter"),"unliked",e),0);d||b("Arbiter").inform(b("SubscribeButton").UNSUBSCRIBED,{profile_id:a,actor_id:c,suppress:!0});e.connected=!1;d||setTimeout(function(){return b("PagesLikeFollowNotifDispatcher").dispatch({type:"follow_changed",data:{pageID:e.profile_id,followStatus:!1}})},0);b("Arbiter").inform(b("FeedBlacklistButton").BLACKLIST,e)},updateLikeCount:function(a,c){b("Arbiter").subscribe("liked_success",function(d,e){d=e.profile_id;if(c==d){e=b("XPagesLikeCountController").getURIBuilder().setInt("page_id",c).setString("like_id",a).getURI();new(b("AsyncRequest"))().setURI(e).send()}})},_saveLike:function(a,c,d,e,f,g,h,j,k,l,m,n){__p&&__p();k===void 0&&(k=!1);l===void 0&&(l=!1);m===void 0&&(m=!1);n===void 0&&(n=!1);var o=this._getOption(j,"actor_id"),p=this._getOption(j,"egodata");b("Tour").getInstance().hideStep("low_page_likes");this._getOption(j,"is_fundraiser")&&this._getOption(j,"logging_info")&&b("SocialGoodCharityActionsLoggerUtils").logJoinActionClick(d,this._getOption(j,"logging_info"));b("PageFanning").setFanStatus(a,c,d,!1,function(){i.informLikeSuccess(c),(!d&&this._getOption(j,"reload_on_unlike")||d&&this._getOption(j,"reload_on_like"))&&location.reload()}.bind(this),e,{fan_origin:f,fan_source:g,cat:h,actor_id:o,egodata:p,decouple_like_from_follow:l,decouple_unlike_from_unfollow:m,qoc_dialog_button:n});this._showQocExperimentDialog(k,c)},_likeButtonAction:function(a,c,d,e,f,g,h,i,j,k,l,m){var n=this,o=this._getOption(h,"actor_id");o=this._interceptLikeIfNecessary(a,c,o).then(function(b){b?n._continueProcessingLikeAfterIntercept(a,c,d,e,f,g,h,j,k,l):i!==null&&i!==void 0&&i.unswap!==null&&i.unswap!==void 0&&i.unswap()},function(a){throw a});if(m){m=b("qex")._("812260");m!==null&&new(b("QualityOfConnectionsExperimentTypedLogger"))().setExperimentGroup(m).setEvent("CLICK_LIKE").setPageID(a).log()}b("promiseDone")(o)},_continueProcessingLikeAfterIntercept:function(a,c,d,e,f,g,h,j,k,l){var m=this._getOption(h,"actor_id");this._saveLike(g.getTarget(),a,!0,function(c){b("Arbiter").inform("unliked",{profile_id:a,actor_id:m}),b("AsyncResponse").defaultErrorHandler(c)},c,d,e,h,j,k,l);i.informLike(a,f,c,h,!1,k)},_interceptLikeIfNecessary:function(a,c,d){var e=this;return new(b("Promise"))(function(f,i){i=b("PagePostEngagementFrictionStore").contains(a);i&&(b("gkx")("1119060")||c!=="page_profile")?(e._logEvent("fanning_friction_dialog_shown",c,a,d),h(a,function(){e._logEvent("fanning_friction_liked",c,a,d),f(!0)},function(){e._logEvent("fanning_friction_canceled",c,a,d),f(!1)},c!=="page_profile"?function(){e._logEvent("fanning_friction_went_to_page",c,a,d),f(!1),g(a)}:null)):f(!0)})},_logEvent:function(a,c,d,e){new(b("PagesIntegrityEventTypedLogger"))().setEvent(a).setPageID(d).setVC(e).addToExtraData(c,1).log()},_shouldUpdateButton:function(a,b,c){b=this._getOption(b,"actor_id");if(a===c.profile_id){if(b===null)return!0;if(c.actor_id!==null&&b===c.actor_id)return!0}return!1},_getOption:function(a,b){return a&&b in a?a[b]:null},_showQocExperimentDialog:function(a,c){if(a){a=b("XPagesQualityOfConnectionsExperimentController").getURIBuilder().setFBID("page_id",c).getURI();new(b("AsyncRequest"))().setURI(a).send()}},_logQocExperimentExposure:function(a){a=b("XPagesQOCExperimentLogExposureController").getURIBuilder().setFBID("page_id",a).getURI();new(b("AsyncRequest"))().setURI(a).send()}};e.exports=i;a.PageLikeButton=i}),null);