if (self.CavalryLogger) { CavalryLogger.start_js(["AlsYP"]); }

__d("MessengerForwardChatFlowSharedAttachmentsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:MessengerForwardChatFlowSharedAttachmentsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:MessengerForwardChatFlowSharedAttachmentsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MessengerForwardChatFlowSharedAttachmentsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAttachmentID=function(a){this.$1.attachment_id=a;return this};c.setAttachmentType=function(a){this.$1.attachment_type=a;return this};c.setIsFromViewer=function(a){this.$1.is_from_viewer=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={attachment_id:!0,attachment_type:!0,is_from_viewer:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("ChatPhotoForwardButton.react",["cx","fbt","Link.react","MessagingForwardAttachmentDialog.react","MessengerForwardChatFlowSharedAttachmentsTypedLogger","MessengerPhotoForwardConfig","React","TooltipData"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={dialogShown:!1},d.$2=function(){d.props.attachmentIDs[0]&&d.props.attachmentTypes[0]&&new(b("MessengerForwardChatFlowSharedAttachmentsTypedLogger"))().setAttachmentID(d.props.attachmentIDs[0]).setIsFromViewer(d.props.isFromViewer).setAttachmentType(d.props.attachmentTypes[0]).log(),d.setState({dialogShown:!0})},d.$3=function(){d.setState({dialogShown:!1})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=h._("Forward"),c=this.props.isFromViewer?"left":"right";c=Object.assign({"data-tooltip-alignh":c},b("TooltipData").propsFor(a,c));var d=b("MessengerPhotoForwardConfig").showArrowIcon?"_3xqa":"_2t5t";return b("React").createElement("div",null,this.$1(),b("React").createElement(b("Link.react"),babelHelpers["extends"]({},this.props,c,{"aria-label":a,onClick:this.$2,ref:"forwardButton",role:"button",className:"_2t5q"+(this.props.isFromViewer?"":" _1_47")+(this.props.isFromViewer?" _1_48":"")}),b("React").createElement("div",{className:d})))};d.$1=function(){if(!this.state.dialogShown)return null;var a=h._("Forward in separate messages");return b("React").createElement(b("MessagingForwardAttachmentDialog.react"),{attachmentID:this.props.attachmentIDs[0],onClose:this.$3,shown:this.state.dialogShown,title:a})};return c}(b("React").PureComponent);c.propTypes={attachmentIDs:a.arrayOf(a.string).isRequired,isFromViewer:a.bool.isRequired};e.exports=c}),null);