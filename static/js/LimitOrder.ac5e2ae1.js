(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["LimitOrder"],{"1bb8":function(e,t,o){"use strict";o.r(t);o("99af"),o("fb6a"),o("a9e3");var n=o("7a23"),r=o("e524"),i=o.n(r),l=function(e){return Object(n["pushScopeId"])("data-v-1297ab9f"),e=e(),Object(n["popScopeId"])(),e},c={class:"bridge-tx-container"},a={class:"status-container"},d={class:"icon-container"},s={class:"tx-info"},m={class:"tx-info_li"},u={class:"token-container"},f={class:"icon-token-container mr-5"},b=["src"],v={class:"mr-5"},O={class:"tx-info_li"},j={class:"token-container"},p={class:"icon-token-container mr-5"},_=["src"],g={class:"mr-5"},k={class:"tx-info_li"},h={class:"flex items-center"},y={key:0,class:"tx-info_li"},I={class:"flex items-center justify-end"},N={class:"tx-info_li"},x={class:"flex items-center"},E={class:"tx-info_li"},V={class:"flex items-center"},$={key:0},S={key:1,class:"tx-info_li"},D={class:"flex items-center"},B=["href"],w={class:"iconfont icon-copy",style:{"margin-left":"0.1rem"}},C={key:2,class:"tx-info_li"},T={class:"flex items-center"},M={class:"tx-info_li"},A={class:"flex items-center",style:{"text-align":"right"}},F=["innerHTML"],U={class:"flex items-center justify-center btn-container"},L={class:"status-container"},z={class:"icon-container"},P={class:"tx-info"},K={class:"tx-info_li"},G={class:"token-container"},R={class:"icon-token-container mr-5"},q=["src"],H={class:"mr-5"},J={class:"tx-info_li"},Y={class:"token-container"},W={class:"icon-token-container mr-5"},Z=["src"],Q={class:"mr-5"},X={class:"tx-info_li"},ee={class:"flex items-center"},te={class:"tx-info_li"},oe={class:"flex flex-col"},ne={class:"color-999 text-size-12 items-end"},re={class:"tx-info_li"},ie={key:0,class:"flex items-center"},le={class:"label"},ce={key:1,class:"flex items-center"},ae={class:"label"},de={key:0,class:"tx-info_li"},se={key:1,class:"tx-info_li"},me={key:2,class:"tx-info_li"},ue={class:"flex items-center"},fe=["href"],be={class:"iconfont icon-copy",style:{"margin-left":"0.1rem"}},ve={key:3,class:"tx-info_li"},Oe={class:"flex items-center"},je={class:"tx-info_li"},pe=l((function(){return Object(n["createElementVNode"])("div",{class:"flex items-center"},null,-1)})),_e={key:0,class:"tx-info_li sub-li"},ge={style:{color:"#666","font-size":"0.24rem"}},ke={class:"flex items-center"},he=["href"],ye={class:"iconfont icon-copy",style:{"margin-left":"0.1rem"}},Ie={style:{color:"#666","font-size":"0.24rem"}},Ne=Object(n["createTextVNode"])(" ("),xe={class:"flex items-center text-size-12"},Ee={class:"mr-5"},Ve=l((function(){return Object(n["createElementVNode"])("img",{style:{width:"0.3rem",margin:"0.02rem 0.01rem 0"},src:i.a,alt:"",srcset:""},null,-1)})),$e={class:"mr-5"},Se=Object(n["createTextVNode"])(") "),De=l((function(){return Object(n["createElementVNode"])("span",{style:{flex:"1"}},null,-1)})),Be={class:"flex items-center"},we=["href"],Ce={class:"iconfont icon-copy",style:{"margin-left":"0.1rem"}},Te={key:2,class:"tx-info_li sub-li"},Me={style:{color:"#666","font-size":"0.24rem"}},Ae={class:"flex items-center"},Fe=["href"],Ue={class:"iconfont icon-copy",style:{"margin-left":"0.1rem"}},Le={class:"flex items-center justify-center btn-container"};function ze(e,t,r,i,l,ze){var Pe,Ke,Ge,Re,qe,He,Je,Ye,We,Ze,Qe,Xe,et,tt,ot,nt,rt,it,lt,ct,at,dt,st,mt,ut,ft,bt,vt,Ot,jt,pt,_t,gt,kt,ht,yt,It,Nt,xt,Et,Vt,$t,St,Dt,Bt,wt,Ct,Tt,Mt,At,Ft,Ut,Lt,zt,Pt,Kt,Gt,Rt,qt,Ht,Jt,Yt,Wt,Zt=Object(n["resolveComponent"])("van-nav-bar"),Qt=Object(n["resolveComponent"])("van-icon"),Xt=Object(n["resolveComponent"])("van-loading"),eo=Object(n["resolveComponent"])("van-image"),to=Object(n["resolveComponent"])("van-button"),oo=Object(n["resolveComponent"])("van-divider"),no=Object(n["resolveDirective"])("copy");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[Object(n["createVNode"])(Zt,{"left-text":"","left-arrow":"",fixed:"",placeholder:"","safe-area-inset-top":"","z-index":"2",title:e.$t("limitOrderDetails"),onClickLeft:t[0]||(t[0]=function(t){return e.$router.go(-1)}),onClickRight:t[1]||(t[1]=function(t){return e.show=!0})},null,8,["title"]),"solana"!==(e.$route.query.chain||(null===(Pe=l.orderInfo)||void 0===Pe?void 0:Pe.chain))?(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:0},[Object(n["createElementVNode"])("div",a,[Object(n["createElementVNode"])("div",d,[2===l.orderInfo.status?(Object(n["openBlock"])(),Object(n["createBlock"])(Qt,{key:0,name:"success",color:"#12B886",size:"0.48rem"})):1===l.orderInfo.status||10===l.orderInfo.status||11===l.orderInfo.status||(0===l.orderInfo.status||-1===l.orderInfo.status)&&1e3*l.orderInfo.created_at+l.LimitExpiredTime<Date.now()?(Object(n["openBlock"])(),Object(n["createBlock"])(Qt,{key:1,name:"fail",color:"#999999",size:"0.48rem"})):(Object(n["openBlock"])(),Object(n["createBlock"])(Xt,{key:2,size:"0.48rem",type:"spinner",color:"#3F80F7"}))]),Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(ze.formatStatus(l.orderInfo)),1)]),Object(n["createElementVNode"])("ul",s,[Object(n["createElementVNode"])("li",m,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("from")),1),Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("div",f,[null!==(Ke=l.orderInfo)&&void 0!==Ke&&Ke.from_token?(Object(n["openBlock"])(),Object(n["createBlock"])(eo,{key:0,round:"",width:"0.4rem",height:"0.4rem","icon-size":"0.4rem","lazy-load":"","show-loading":"",src:null!==(Ge=l.orderInfo)&&void 0!==Ge&&Ge.from_token_logo_url?e.$f.formatIcon({logo_url:l.orderInfo.from_token_logo_url}):"/icon-default.png","error-icon":o("aeccf")},null,8,["src","error-icon"])):Object(n["createCommentVNode"])("",!0),null!==(Re=l.orderInfo)&&void 0!==Re&&Re.chain?(Object(n["openBlock"])(),Object(n["createElementBlock"])("img",{key:1,class:"icon-svg icon-network",src:"".concat(e.$store.state.s3BaseUrl,"chain/").concat(null===(qe=l.orderInfo)||void 0===qe?void 0:qe.chain,".png"),alt:"",srcset:""},null,8,b)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("span",v,Object(n["toDisplayString"])(e.$f.formatNumber2(ze.formatUnits((null===(He=l.orderInfo)||void 0===He?void 0:He.from_amount)||0,(null===(Je=l.orderInfo)||void 0===Je?void 0:Je.from_token_decimals)||0))),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])((null===(Ye=l.orderInfo)||void 0===Ye?void 0:Ye.from_token_symbol)||""),1)])]),Object(n["createElementVNode"])("li",O,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("to")),1),Object(n["createElementVNode"])("div",j,[Object(n["createElementVNode"])("div",p,[null!==(We=l.orderInfo)&&void 0!==We&&We.to_token?(Object(n["openBlock"])(),Object(n["createBlock"])(eo,{key:0,round:"",width:"0.4rem",height:"0.4rem","icon-size":"0.4rem","lazy-load":"","show-loading":"",src:null!==(Ze=l.orderInfo)&&void 0!==Ze&&Ze.to_token_logo_url?e.$f.formatIcon({logo_url:l.orderInfo.to_token_logo_url}):"/icon-default.png","error-icon":o("aeccf")},null,8,["src","error-icon"])):Object(n["createCommentVNode"])("",!0),null!==(Qe=l.orderInfo)&&void 0!==Qe&&Qe.chain?(Object(n["openBlock"])(),Object(n["createElementBlock"])("img",{key:1,class:"icon-svg icon-network",src:"".concat(e.$store.state.s3BaseUrl,"chain/").concat(null===(Xe=l.orderInfo)||void 0===Xe?void 0:Xe.chain,".png"),alt:"",srcset:""},null,8,_)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("span",g,Object(n["toDisplayString"])(e.$f.formatNumber2(ze.formatUnits((null===(et=l.orderInfo)||void 0===et?void 0:et.to_amount)||0,(null===(tt=l.orderInfo)||void 0===tt?void 0:tt.to_token_decimals)||0))),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])((null===(ot=l.orderInfo)||void 0===ot?void 0:ot.to_token_symbol)||""),1)])]),Object(n["createElementVNode"])("li",k,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("orderType")),1),Object(n["createElementVNode"])("div",h,Object(n["toDisplayString"])(1===l.orderInfo.order_type?e.$t("stopLimit"):e.$t("generalDelegation")),1)]),1===l.orderInfo.order_type?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",y,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("effectiveCondition")),1),Object(n["createElementVNode"])("div",I,Object(n["toDisplayString"])(e.$t("triggerPriceEffective",{symbol:l.orderInfo.target_token===l.orderInfo.from_token?(null===(nt=l.orderInfo)||void 0===nt?void 0:nt.from_token_symbol)||"":(null===(rt=l.orderInfo)||void 0===rt?void 0:rt.to_token_symbol)||"",price:e.$f.formatNumber2(null===(it=l.orderInfo)||void 0===it?void 0:it.trigger_price)})),1)])):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("li",N,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("delegatePrice"))+"("+Object(n["toDisplayString"])(l.orderInfo.target_token===l.orderInfo.from_token?(null===(lt=l.orderInfo)||void 0===lt?void 0:lt.from_token_symbol)||"":(null===(ct=l.orderInfo)||void 0===ct?void 0:ct.to_token_symbol)||"")+")",1),Object(n["createElementVNode"])("div",x," $ "+Object(n["toDisplayString"])(e.$f.formatNumber2(null===(at=l.orderInfo)||void 0===at?void 0:at.target_limit_price)),1)]),Object(n["createElementVNode"])("li",E,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("delegateTime")),1),Object(n["createElementVNode"])("div",V,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.$f.formatDate(l.orderInfo.created_at)),1),(0===l.orderInfo.status||-1===l.orderInfo.status)&&Date.now()<1e3*l.orderInfo.created_at+l.LimitExpiredTime?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",$,"("+Object(n["toDisplayString"])(e.$t("expiresInTime",{t:e.$dayjs(1e3*l.orderInfo.created_at+l.LimitExpiredTime).fromNow()}))+")",1)):Object(n["createCommentVNode"])("",!0)])]),l.orderInfo.executed_tx_hash&&2===l.orderInfo.status?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",S,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("txHash")),1),Object(n["createElementVNode"])("div",D,[Object(n["createElementVNode"])("a",{href:e.$f.formatExplorerUrl(l.orderInfo.chain,l.orderInfo.executed_tx_hash,"tx"),target:"_blank"},Object(n["toDisplayString"])((null===(dt=l.orderInfo.executed_tx_hash)||void 0===dt?void 0:dt.slice(0,6))+"..."+(null===(st=l.orderInfo.executed_tx_hash)||void 0===st?void 0:st.slice(-6))),9,B),Object(n["withDirectives"])(Object(n["createElementVNode"])("i",w,null,512),[[no,l.orderInfo.executed_tx_hash]])])])):Object(n["createCommentVNode"])("",!0),l.orderInfo.executed_tx_hash&&2===l.orderInfo.status?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",C,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("txTime")),1),Object(n["createElementVNode"])("div",T,Object(n["toDisplayString"])(e.$f.formatDate(l.orderInfo.finished_at)),1)])):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("li",M,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("estimateGas")),1),Object(n["createElementVNode"])("div",A,Object(n["toDisplayString"])(e.$t("estimateGasTips",{n:e.$f.formatNumber2(null!==(mt=l.limitGasU)&&void 0!==mt?mt:1,1)})),1)])]),Object(n["createElementVNode"])("div",{style:{color:"#f8be46","text-align":"left","font-size":"0.24rem","line-height":"1.5","margin-top":"0.6rem"},innerHTML:e.$t("limitOrderTips")},null,8,F),Object(n["createElementVNode"])("div",U,[0!==l.orderInfo.status&&-1!==l.orderInfo.status||!(l.orderInfo.target_token===l.NATIVE_TOKEN||(0===l.orderInfo.status||-1===l.orderInfo.status)&&1e3*l.orderInfo.created_at+l.LimitExpiredTime>Date.now())?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(to,{key:0,class:"btn-s",loading:l.loading,"loading-text":e.$t("revoke"),plain:"",round:"",onClick:Object(n["withModifiers"])(ze.confirmCancel,["stop"])},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("revoke")),1)]})),_:1},8,["loading","loading-text","onClick"])),Object(n["createVNode"])(to,{class:"btn-s",plain:"",round:"",onClick:Object(n["withModifiers"])(ze.goLimit,["stop"])},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("swapAgain")),1)]})),_:1},8,["onClick"])])],64)):(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:1},[Object(n["createElementVNode"])("div",L,[Object(n["createElementVNode"])("div",z,["Completed"===l.orderInfo.state?(Object(n["openBlock"])(),Object(n["createBlock"])(Qt,{key:0,name:"success",color:"#12B886",size:"0.48rem"})):"Pending"===(null===(ut=l.orderInfo)||void 0===ut?void 0:ut.state)&&null!==(null===(ft=l.orderInfo)||void 0===ft?void 0:ft.expiredAt)&&Date.now()>1e3*Number((null===(bt=l.orderInfo)||void 0===bt?void 0:bt.expiredAt)||0)?(Object(n["openBlock"])(),Object(n["createBlock"])(Qt,{key:1,name:"warning-o",color:"#999999",size:"0.48rem"})):"Cancelled"===l.orderInfo.state?(Object(n["openBlock"])(),Object(n["createBlock"])(Qt,{key:2,name:"cross",color:"#999",size:"0.48rem"})):(Object(n["openBlock"])(),Object(n["createBlock"])(Xt,{key:3,size:"0.48rem",type:"spinner",color:"#3F80F7"}))]),Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(ze.formatSolanaStatus(l.orderInfo)),1)]),Object(n["createElementVNode"])("ul",P,[Object(n["createElementVNode"])("li",K,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("from")),1),Object(n["createElementVNode"])("div",G,[Object(n["createElementVNode"])("div",R,[null!==(vt=l.orderInfo)&&void 0!==vt&&vt.from_token?(Object(n["openBlock"])(),Object(n["createBlock"])(eo,{key:0,round:"",width:"0.4rem",height:"0.4rem","icon-size":"0.4rem","lazy-load":"","show-loading":"",src:null!==(Ot=l.orderInfo)&&void 0!==Ot&&Ot.from_token_logo_url?e.$f.formatIcon({logo_url:l.orderInfo.from_token_logo_url}):"/icon-default.png","error-icon":o("aeccf")},null,8,["src","error-icon"])):Object(n["createCommentVNode"])("",!0),null!==(jt=l.orderInfo)&&void 0!==jt&&jt.chain?(Object(n["openBlock"])(),Object(n["createElementBlock"])("img",{key:1,class:"icon-svg icon-network",src:"".concat(e.$store.state.s3BaseUrl,"chain/").concat(null===(pt=l.orderInfo)||void 0===pt?void 0:pt.chain,".png"),alt:"",srcset:""},null,8,q)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("span",H,Object(n["toDisplayString"])(e.$f.formatNumber2(ze.formatUnits((null===(_t=l.orderInfo)||void 0===_t?void 0:_t.from_amount)||0,(null===(gt=l.orderInfo)||void 0===gt?void 0:gt.from_token_decimals)||0))),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])((null===(kt=l.orderInfo)||void 0===kt?void 0:kt.from_token_symbol)||""),1)])]),Object(n["createElementVNode"])("li",J,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("to")),1),Object(n["createElementVNode"])("div",Y,[Object(n["createElementVNode"])("div",W,[null!==(ht=l.orderInfo)&&void 0!==ht&&ht.to_token?(Object(n["openBlock"])(),Object(n["createBlock"])(eo,{key:0,round:"",width:"0.4rem",height:"0.4rem","icon-size":"0.4rem","lazy-load":"","show-loading":"",src:null!==(yt=l.orderInfo)&&void 0!==yt&&yt.to_token_logo_url?e.$f.formatIcon({logo_url:l.orderInfo.to_token_logo_url}):"/icon-default.png","error-icon":o("aeccf")},null,8,["src","error-icon"])):Object(n["createCommentVNode"])("",!0),null!==(It=l.orderInfo)&&void 0!==It&&It.chain?(Object(n["openBlock"])(),Object(n["createElementBlock"])("img",{key:1,class:"icon-svg icon-network",src:"".concat(e.$store.state.s3BaseUrl,"chain/").concat(null===(Nt=l.orderInfo)||void 0===Nt?void 0:Nt.chain,".png"),alt:"",srcset:""},null,8,Z)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("span",Q,Object(n["toDisplayString"])(e.$f.formatNumber2(ze.formatUnits((null===(xt=l.orderInfo)||void 0===xt?void 0:xt.to_amount)||0,(null===(Et=l.orderInfo)||void 0===Et?void 0:Et.to_token_decimals)||0))),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])((null===(Vt=l.orderInfo)||void 0===Vt?void 0:Vt.to_token_symbol)||""),1)])]),Object(n["createElementVNode"])("li",X,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("orderType")),1),Object(n["createElementVNode"])("div",ee,Object(n["toDisplayString"])(e.$t("generalDelegation")),1)]),Object(n["createElementVNode"])("li",te,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("delegatePrice"))+"("+Object(n["toDisplayString"])(ze.solanaPriceSymbol(l.orderInfo))+")",1),Object(n["createElementVNode"])("div",oe,[Object(n["createElementVNode"])("span",null,"$"+Object(n["toDisplayString"])(ze.solanaPriceU(l.orderInfo)),1),Object(n["createElementVNode"])("span",ne,"("+Object(n["toDisplayString"])(ze.solanaPrice(l.orderInfo))+")",1)])]),Object(n["createElementVNode"])("li",re,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("amount1")),1),ze.solanaTarget(l.orderInfo)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",ie,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.$f.formatNumber2(ze.formatUnits((null===($t=l.orderInfo)||void 0===$t?void 0:$t.from_amount_used)||0,(null===(St=l.orderInfo)||void 0===St?void 0:St.from_token_decimals)||0)))+"/"+Object(n["toDisplayString"])(e.$f.formatNumber2(ze.formatUnits((null===(Dt=l.orderInfo)||void 0===Dt?void 0:Dt.from_amount)||0,(null===(Bt=l.orderInfo)||void 0===Bt?void 0:Bt.from_token_decimals)||0)))+" "+Object(n["toDisplayString"])(l.orderInfo.from_token_symbol),1),Object(n["createElementVNode"])("span",le,"("+Object(n["toDisplayString"])(e.$f.formatNumber2((null===(wt=l.orderInfo)||void 0===wt?void 0:wt.percent)||0))+"%)",1)])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",ce,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.$f.formatNumber2(ze.formatUnits((null===(Ct=l.orderInfo)||void 0===Ct?void 0:Ct.to_amount_used)||0,(null===(Tt=l.orderInfo)||void 0===Tt?void 0:Tt.to_token_decimals)||0)))+"/"+Object(n["toDisplayString"])(e.$f.formatNumber2(ze.formatUnits((null===(Mt=l.orderInfo)||void 0===Mt?void 0:Mt.to_amount)||0,(null===(At=l.orderInfo)||void 0===At?void 0:At.to_token_decimals)||0)))+" "+Object(n["toDisplayString"])(l.orderInfo.to_token_symbol),1),Object(n["createElementVNode"])("span",ae,"("+Object(n["toDisplayString"])(e.$f.formatNumber2((null===(Ft=l.orderInfo)||void 0===Ft?void 0:Ft.percent)||0))+"%)",1)]))]),void 0!==l.orderInfo.expiredAt?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",de,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.$t("expiredTime")),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(l.orderInfo.expiredAt?e.$f.formatDate(l.orderInfo.expiredAt):e.$t("never")),1)])):Object(n["createCommentVNode"])("",!0),l.orderInfo.createdAt?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",se,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.$t("createTime")),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.$f.formatDate(l.orderInfo.createdAt)),1)])):Object(n["createCommentVNode"])("",!0),l.orderInfo.executed_tx_hash&&2===l.orderInfo.status?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",me,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("txHash")),1),Object(n["createElementVNode"])("div",ue,[Object(n["createElementVNode"])("a",{href:e.$f.formatExplorerUrl(l.orderInfo.chain,l.orderInfo.executed_tx_hash,"tx"),target:"_blank"},Object(n["toDisplayString"])((null===(Ut=l.orderInfo.executed_tx_hash)||void 0===Ut?void 0:Ut.slice(0,6))+"..."+(null===(Lt=l.orderInfo.executed_tx_hash)||void 0===Lt?void 0:Lt.slice(-6))),9,fe),Object(n["withDirectives"])(Object(n["createElementVNode"])("i",be,null,512),[[no,l.orderInfo.executed_tx_hash]])])])):Object(n["createCommentVNode"])("",!0),l.orderInfo.executed_tx_hash&&2===l.orderInfo.status?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",ve,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("txTime")),1),Object(n["createElementVNode"])("div",Oe,Object(n["toDisplayString"])(e.$f.formatDate(l.orderInfo.finished_at)),1)])):Object(n["createCommentVNode"])("",!0),l.orderInfo.createTxid||(null===(zt=l.orderInfo)||void 0===zt||null===(Pt=zt.orders)||void 0===Pt?void 0:Pt.length)>0||null!==(Kt=l.orderInfo)&&void 0!==Kt&&Kt.cancelTxid?(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:4},[Object(n["createVNode"])(oo),Object(n["createElementVNode"])("li",je,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("txHash")),1),pe]),l.orderInfo.createTxid?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",_e,[Object(n["createElementVNode"])("div",ge,Object(n["toDisplayString"])(e.$t("create")),1),Object(n["createElementVNode"])("div",ke,[Object(n["createElementVNode"])("a",{href:e.$f.formatExplorerUrl(l.orderInfo.chain,l.orderInfo.createTxid,"tx"),target:"_blank"},Object(n["toDisplayString"])((null===(Gt=l.orderInfo.createTxid)||void 0===Gt?void 0:Gt.slice(0,6))+"..."+(null===(Rt=l.orderInfo.createTxid)||void 0===Rt?void 0:Rt.slice(-6))),9,he),Object(n["withDirectives"])(Object(n["createElementVNode"])("i",ye,null,512),[[no,l.orderInfo.createTxid]])])])):Object(n["createCommentVNode"])("",!0),(null===(qt=l.orderInfo)||void 0===qt||null===(Ht=qt.orders)||void 0===Ht?void 0:Ht.length)>0?(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],{key:1},Object(n["renderList"])(null===(Jt=l.orderInfo)||void 0===Jt?void 0:Jt.orders,(function(t,o){var r,i,c,a,d,s;return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:o,class:"tx-info_li sub-li"},[Object(n["createElementVNode"])("div",Ie,Object(n["toDisplayString"])(e.$t("trade")),1),Ne,Object(n["createElementVNode"])("div",xe,[Object(n["createElementVNode"])("span",Ee,Object(n["toDisplayString"])(e.$f.formatNumber2(ze.formatUnits((null===t||void 0===t?void 0:t.inAmount)||0,(null===(r=l.orderInfo)||void 0===r?void 0:r.from_token_decimals)||0))),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])((null===(i=l.orderInfo)||void 0===i?void 0:i.from_token_symbol)||""),1),Ve,Object(n["createElementVNode"])("span",$e,Object(n["toDisplayString"])(e.$f.formatNumber2(ze.formatUnits((null===t||void 0===t?void 0:t.outAmount)||0,(null===(c=l.orderInfo)||void 0===c?void 0:c.to_token_decimals)||0))),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])((null===(a=l.orderInfo)||void 0===a?void 0:a.to_token_symbol)||""),1)]),Se,De,Object(n["createElementVNode"])("div",Be,[Object(n["createElementVNode"])("a",{href:e.$f.formatExplorerUrl(l.orderInfo.chain,t.txid,"tx"),target:"_blank"},Object(n["toDisplayString"])((null===(d=t.txid)||void 0===d?void 0:d.slice(0,6))+"..."+(null===(s=t.txid)||void 0===s?void 0:s.slice(-6))),9,we),Object(n["withDirectives"])(Object(n["createElementVNode"])("i",Ce,null,512),[[no,t.txid]])])])})),128)):Object(n["createCommentVNode"])("",!0),l.orderInfo.cancelTxid?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",Te,[Object(n["createElementVNode"])("div",Me,Object(n["toDisplayString"])(e.$t("cancel1")),1),Object(n["createElementVNode"])("div",Ae,[Object(n["createElementVNode"])("a",{href:e.$f.formatExplorerUrl(l.orderInfo.chain,l.orderInfo.cancelTxid,"tx"),target:"_blank"},Object(n["toDisplayString"])((null===(Yt=l.orderInfo.cancelTxid)||void 0===Yt?void 0:Yt.slice(0,6))+"..."+(null===(Wt=l.orderInfo.cancelTxid)||void 0===Wt?void 0:Wt.slice(-6))),9,Fe),Object(n["withDirectives"])(Object(n["createElementVNode"])("i",Ue,null,512),[[no,l.orderInfo.cancelTxid]])])])):Object(n["createCommentVNode"])("",!0)],64)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("div",Le,["Pending"===l.orderInfo.state?(Object(n["openBlock"])(),Object(n["createBlock"])(to,{key:0,class:"btn-s",loading:l.loadingSolana[l.orderInfo.publicKey],"loading-text":e.$t("revoke"),plain:"",round:"",onClick:Object(n["withModifiers"])(ze.confirmCancel,["stop"])},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("revoke")),1)]})),_:1},8,["loading","loading-text","onClick"])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(to,{class:"btn-s",plain:"",round:"",onClick:Object(n["withModifiers"])(ze.goLimit,["stop"])},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("swapAgain")),1)]})),_:1},8,["onClick"])])],64))])}var Pe=o("f3f3"),Ke=o("d0ff"),Ge=o("c964"),Re=(o("96cf"),o("d3b7"),o("3ca3"),o("ddb0"),o("d81d"),o("a630"),o("6062"),o("0481"),o("4069"),o("b680"),o("7db0"),o("4de4"),o("365c")),qe=o("6779"),He=o("c9d9"),Je=o("901e"),Ye=o.n(Je),We=null,Ze={name:"LimitOrderDetails",data:function(){return{LimitExpiredTime:He["g"],NATIVE_TOKEN:He["k"],orderInfo:{},loading:!1,limitContractsFee:He["w"],limitGasU:"0",loadingSolana:{}}},activated:function(){this.init()},methods:{formatUnits:qe["utils"].formatUnits,init:function(){this.getLimitOrder()},getLimitOrder:function(){var e=this;"solana"!==this.$route.query.chain?Object(Re["J"])({id:this.$route.params.id}).then((function(t){var o;console.log(t),e.orderInfo=null!==(o=null===t||void 0===t?void 0:t[0])&&void 0!==o?o:{},e.getGasUsd()})):this.getSolanaLimitOrder()},getSolanaLimitOrder:function(e){var t=this;if("solana"===this.$route.query.chain){var o=this.$route.query,n=(o.inputMint,o.outputMint,o.wallet);return Promise.all([Object(Re["T"])({wallet:n}),Object(Re["U"])({wallet:n,take:100})]).then(function(){var o=Object(Ge["a"])(regeneratorRuntime.mark((function o(r){var i,l,c,a,d,s,m,u,f,b,v,O,j,p,_,g;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return f=null===r||void 0===r||null===(i=r[0])||void 0===i||null===(l=i.map)||void 0===l?void 0:l.call(i,(function(e){var t,o;return[(null===e||void 0===e||null===(t=e.account)||void 0===t?void 0:t.inputMint)+"-solana",(null===e||void 0===e||null===(o=e.account)||void 0===o?void 0:o.outputMint)+"-solana"]})),b=null===r||void 0===r||null===(c=r[1])||void 0===c||null===(a=c.map)||void 0===a?void 0:a.call(c,(function(e){return[(null===e||void 0===e?void 0:e.inputMint)+"-solana",(null===e||void 0===e?void 0:e.outputMint)+"-solana"]})),v=Array.from(new Set([].concat(Object(Ke["a"])(null===f||void 0===f?void 0:f.flat()),Object(Ke["a"])(null===b||void 0===b?void 0:b.flat())))),o.next=5,Object(Re["ib"])(v).catch(function(){var e=Object(Ge["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:if(O=o.sent,j=null===r||void 0===r||null===(d=r[0])||void 0===d||null===(s=d.map)||void 0===s?void 0:s.call(d,(function(e){var t,o,n,r,i,l,c,a,d=e.account;return Object(Pe["a"])(Object(Pe["a"])(Object(Pe["a"])({},e),d),{},{from_token:d.inputMint,from_token_symbol:null===(t=O[d.inputMint+"-solana"])||void 0===t?void 0:t.symbol,from_token_decimals:null===(o=O[d.inputMint+"-solana"])||void 0===o?void 0:o.decimal,from_token_price:null===(n=O[d.inputMint+"-solana"])||void 0===n?void 0:n.current_price_usd,to_token:d.outputMint,to_token_symbol:null===(r=O[d.outputMint+"-solana"])||void 0===r?void 0:r.symbol,to_token_decimals:null===(i=O[d.outputMint+"-solana"])||void 0===i?void 0:i.decimal,to_token_price:null===(l=O[d.outputMint+"-solana"])||void 0===l?void 0:l.current_price_usd,from_amount:Number(d.oriInAmount)||0,to_amount:Number(d.oriOutAmount)||0,id:e.publicKey,orderKey:e.publicKey,chain:"solana",created_at:0,state:"Pending",from_amount_used:new Ye.a(d.oriInAmount).minus(d.inAmount).toFixed(),to_amount_used:new Ye.a(d.oriOutAmount).minus(d.outAmount).toFixed(),percent:new Ye.a(d.oriInAmount).minus(d.inAmount).div(d.oriInAmount).times(100).toFixed(),from_token_logo_url:null===(c=O[d.inputMint+"-solana"])||void 0===c?void 0:c.logo_url,to_token_logo_url:null===(a=O[d.outputMint+"-solana"])||void 0===a?void 0:a.logo_url})})),p=null===r||void 0===r||null===(m=r[1])||void 0===m||null===(u=m.map)||void 0===u?void 0:u.call(m,(function(e){var t,o,n,r,i,l,c,a;return Object(Pe["a"])(Object(Pe["a"])({},e),{},{from_token:e.inputMint,from_token_symbol:null===(t=O[e.inputMint+"-solana"])||void 0===t?void 0:t.symbol,from_token_decimals:null===(o=O[e.inputMint+"-solana"])||void 0===o?void 0:o.decimal,from_token_price:null===(n=O[e.inputMint+"-solana"])||void 0===n?void 0:n.current_price_usd,to_token:e.outputMint,to_token_symbol:null===(r=O[e.outputMint+"-solana"])||void 0===r?void 0:r.symbol,to_token_decimals:null===(i=O[e.outputMint+"-solana"])||void 0===i?void 0:i.decimal,to_token_price:null===(l=O[e.outputMint+"-solana"])||void 0===l?void 0:l.current_price_usd,from_amount:Number(e.oriInAmount)||0,to_amount:Number(e.oriOutAmount)||0,chain:"solana",from_amount_used:new Ye.a(e.oriInAmount).minus(e.inAmount).toFixed(),to_amount_used:new Ye.a(e.oriOutAmount).minus(e.outAmount).toFixed(),percent:new Ye.a(e.oriInAmount).minus(e.inAmount).div(e.oriInAmount).times(100).toFixed(),from_token_logo_url:null===(c=O[e.inputMint+"-solana"])||void 0===c?void 0:c.logo_url,to_token_logo_url:null===(a=O[e.outputMint+"-solana"])||void 0===a?void 0:a.logo_url})})),_=[].concat(Object(Ke["a"])(j),Object(Ke["a"])(p)),g=null===_||void 0===_?void 0:_.some((function(t){return t.orderKey===e&&"Cancelled"===t.state})),!e||g){o.next=15;break}return We&&(clearTimeout(We),We=null),o.abrupt("return",new Promise((function(o,n){We=setTimeout((function(){t.getSolanaLimitOrderTime+=5,t.getSolanaLimitOrder(e).then((function(e){o(e)}))}),5e3)})));case 15:return t.orderInfo=_.find((function(e){return(null===e||void 0===e?void 0:e.orderKey)===t.$route.params.id}))||{},o.abrupt("return",Object(Re["V"])({wallet:n}).then((function(e){console.log(e);var o=null===e||void 0===e?void 0:e.filter((function(e){return e.order.id===t.orderInfo.id}));return(null===o||void 0===o?void 0:o.length)>0&&(t.orderInfo=Object(Pe["a"])(Object(Pe["a"])({},t.orderInfo),{},{orders:o})),Promise.resolve(t.orderInfo)})));case 17:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}())}},getGasUsd:function(){var e=this;this.orderInfo.chain&&Object(Re["E"])(this.orderInfo.chain).then((function(t){e.limitGasU=t||He["w"][e.orderInfo.chain]}))},formatStatus:function(e){var t;if((0===e.status||-1===e.status)&&1e3*e.created_at+He["g"]<Date.now())return this.$t("expired1");var o=e.status,n={0:this.$t("pendingOrder"),1:this.$t("cancelled"),2:this.$t("completed"),10:this.$t("fail1")+"(".concat(this.$t("nonceError"),")"),11:this.$t("fail1")+"(".concat(this.$t("chainError"),")"),12:this.$t("fail1")+"(".concat(this.$t("signatureError"),")"),13:this.$t("fail1")+"(".concat(this.$t("approveGasPriceLow"),")"),"-1":this.$t("triggerPriceNotReached")};return null!==(t=n[o])&&void 0!==t?t:this.$t("pendingOrder")},formatStatusColor:function(e){if((0===e.status||-1===e.status)&&1e3*e.created_at+He["g"]<Date.now())return"#999999";var t=e.status;return 1===t||10===t||11===t||12===t?"#999999":2===t?"#12B886":0===t?"#3F80F7":"#FF0000"},goLimit:function(){if("solana"===this.orderInfo.chain){var e=0,t="";t=this.solanaTarget(this.orderInfo)?this.orderInfo.from_token:this.orderInfo.to_token;var o=t+"-solana";location.href="/swap/".concat(o,"/").concat(e)}else if(this.orderInfo.target_token&&this.orderInfo.chain){var n=this.orderInfo.target_token+"-"+this.orderInfo.chain,r=1===this.orderInfo.order_type?1:0;location.href="/swap/".concat(n,"/").concat(r)}},confirmCancel:function(){var e,t=this,o="solana"===(null===(e=this.orderInfo)||void 0===e?void 0:e.chain)?this.$t("cancelOrderConfirmingSolana"):this.$t("confirmCancelMessage");this.$dialog.confirm({title:this.$t("cancelOrderConfirming"),message:o,confirmButtonText:this.$t("confirm1"),confirmButtonColor:"#558BED",cancelButtonText:this.$t("cancel")}).then((function(){t.cancelLimitOrder(t.orderInfo)}))},cancelLimitOrder:function(e){var t=this;if("solana"!==e.chain){var o={fromToken:e.from_token,fromAmount:e.from_amount,toToken:e.to_token,minReturn:e.to_min_amount,salt:e.salt,id:e.id,order_id:e.order_id};console.log(o),this.loading=!0,Object(Re["k"])(o).then((function(e){console.log(e),t.$notify({type:"success",message:t.$t("cancelledOrderSuccessfully")}),t.init()})).catch((function(e){t.$f.handleError(e)})).finally((function(){t.loading=!1}))}else this.cancelSolanaLimitOrder(e)},cancelSolanaLimitOrder:function(e){var t=this;this.loadingSolana[e.publicKey]=!0,Object(Re["l"])(e.publicKey).then((function(e){return console.log(e),e.wait()})).then((function(o){console.log(o),t.getSolanaLimitOrder(e.publicKey).then((function(){t.loadingSolana[e.publicKey]=!1,t.$notify({type:"success",message:t.$t("cancelledOrderSuccessfully")})}))})).catch((function(o){t.loadingSolana[e.publicKey]=!1,t.$f.handleError(o)}))},solanaTarget:function(e){var t=["So11111111111111111111111111111111111111112","EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"],o=t.indexOf(e.from_token),n=t.indexOf(e.to_token);return o<=n},solanaPriceSymbol:function(e){return this.solanaTarget(e)?(null===e||void 0===e?void 0:e.from_token_symbol)||"":(null===e||void 0===e?void 0:e.to_token_symbol)||""},solanaPriceU:function(e){return this.solanaTarget(e)?this.$f.formatNumber2(new Ye.a(e.to_amount).times(Math.pow(10,(null===e||void 0===e?void 0:e.from_token_decimals)-(null===e||void 0===e?void 0:e.to_token_decimals))).times((null===e||void 0===e?void 0:e.to_token_price)||0).div(e.from_amount).toFixed()):this.$f.formatNumber2(new Ye.a(e.from_amount).times(Math.pow(10,(null===e||void 0===e?void 0:e.to_token_decimals)-(null===e||void 0===e?void 0:e.from_token_decimals))).times((null===e||void 0===e?void 0:e.from_token_price)||0).div(e.to_amount).toFixed())},solanaPrice:function(e){return this.solanaTarget(e)?this.$f.formatNumber2(e.to_amount*Math.pow(10,(null===e||void 0===e?void 0:e.from_token_decimals)-(null===e||void 0===e?void 0:e.to_token_decimals))/e.from_amount)+" "+((null===e||void 0===e?void 0:e.to_token_symbol)||"")+" per "+((null===e||void 0===e?void 0:e.from_token_symbol)||""):this.$f.formatNumber2(e.from_amount*Math.pow(10,(null===e||void 0===e?void 0:e.to_token_decimals)-(null===e||void 0===e?void 0:e.from_token_decimals))/e.to_amount)+" "+((null===e||void 0===e?void 0:e.from_token_symbol)||"")+" per "+((null===e||void 0===e?void 0:e.to_token_symbol)||"")},formatSolanaStatus:function(e){var t;if("Pending"===(null===e||void 0===e?void 0:e.state)&&null!==(null===e||void 0===e?void 0:e.expiredAt)&&Date.now()>1e3*Number((null===e||void 0===e?void 0:e.expiredAt)||0))return this.$t("expired1");var o=e.state,n={Pending:this.$t("pendingOrder"),Completed:this.$t("completed"),Cancelled:this.$t("cancelled")};return null!==(t=n[o])&&void 0!==t?t:o},formatSolanaStatusColor:function(e){var t;if("Pending"===(null===e||void 0===e?void 0:e.state)&&null!==(null===e||void 0===e?void 0:e.expiredAt)&&Date.now()>1e3*Number((null===e||void 0===e?void 0:e.expiredAt)||0))return"#999999";var o=e.state,n={Pending:"#3F80F7",Completed:"#12B886",Cancelled:"#999999"};return null!==(t=n[o])&&void 0!==t?t:"#3F80F7"}}},Qe=(o("e82a"),o("6b0d")),Xe=o.n(Qe);const et=Xe()(Ze,[["render",ze],["__scopeId","data-v-1297ab9f"]]);t["default"]=et},9242:function(e,t,o){},aeccf:function(e,t,o){e.exports=o.p+"static/img/icon-default.75f6e9a0.png"},e524:function(e,t,o){e.exports=o.p+"static/img/arrow-right.484eb652.svg"},e82a:function(e,t,o){"use strict";o("9242")}}]);