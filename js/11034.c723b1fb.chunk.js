(self.webpackChunklite=self.webpackChunklite||[]).push([[11034],{73004:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});var i=t(67294);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var o=i.createElement("path",{d:"M4 7.33L10.03 14l.5.55.5-.55 5.96-6.6-.98-.9-5.98 6.6h1L4.98 6.45z",fillRule:"evenodd"});const r=function(e){return i.createElement("svg",l({width:21,height:21,viewBox:"0 0 21 21"},e),o)}},54023:(e,n,t)=>{"use strict";t.d(n,{P:()=>u});var i=t(59713),l=t.n(i),o=t(83687),r=t(36823);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u=function(e){var n=(0,o.B)(),t=(0,r.I)();if("Collection"===e.__typename)return n(e);if("User"===e.__typename){var i,l,c,u=null!==(i=null===(l=e.customDomainState)||void 0===l||null===(c=l.live)||void 0===c?void 0:c.domain)&&void 0!==i?i:null;return t(a(a({},e),{},{domain:u}))}return""}},84783:(e,n,t)=>{"use strict";t.d(n,{b3:()=>j,Iq:()=>L,MT:()=>X,Fp:()=>q});var i=t(63038),l=t.n(i),o=t(28655),r=t.n(o),c=t(71439),a=t(46829),u=t(67294),s=t(34664),d=t(36511),m=t(89423),f=t(73891),p=t(324),b=t(62181),v=t(42933),g=t(82318),E=t(55099),w=t(80362),y=t(61819),C=t(37278),_=t(98024),S=t(95760),h=t(51512),O=t(6688),k=t(27108),x=t(67297),I=t(73004),F=t(27952),P=t(61598);function T(){var e=r()(["\n  mutation UnsubscribeCollectionEmailsMutation($id: ID!) {\n    unsubscribeCollectionEmails(collectionId: $id) {\n      __typename\n      id\n      viewerEdge {\n        __typename\n        id\n        isSubscribedToEmails\n      }\n    }\n  }\n"]);return T=function(){return e},e}function B(){var e=r()(["\n  mutation SubscribeCollectionEmailsMutation($id: ID!) {\n    subscribeCollectionEmails(collectionId: $id) {\n      __typename\n      id\n      viewerEdge {\n        __typename\n        id\n        isSubscribedToEmails\n      }\n    }\n  }\n"]);return B=function(){return e},e}function R(){var e=r()(["\n  mutation UnfollowCollectionMutation($id: ID!) {\n    unfollowCollection(targetCollectionId: $id) {\n      __typename\n      id\n      viewerEdge {\n        __typename\n        id\n        isFollowing\n      }\n    }\n  }\n"]);return R=function(){return e},e}function V(){var e=r()(["\n  mutation FollowCollectionMutation($id: ID!) {\n    followCollection(targetCollectionId: $id) {\n      __typename\n      id\n      viewerEdge {\n        __typename\n        id\n        isFollowing\n      }\n    }\n  }\n"]);return V=function(){return e},e}function U(){var e=r()(["\n  fragment CollectionFollowButton_collection on Collection {\n    __typename\n    id\n    name\n    canToggleEmail\n    slug\n    ...collectionUrl_collection\n    ...SusiClickable_collection\n  }\n  ","\n  ","\n"]);return U=function(){return e},e}function M(){var e=r()(["\n  fragment CollectionFollowButton_post on Post {\n    __typename\n    id\n  }\n"]);return M=function(){return e},e}var D="collectionFollowPopover",j=(0,c.Ps)(M()),L=(0,c.Ps)(U(),P.nf,b.Os),z="follow_card",N=function(e){var n=e.children,t=e.extraTopPadding,i=e.extraBottomPadding,l=e.padding,o=e.margin,r=e.borderTop;return u.createElement(v.x,{padding:l||"".concat(t?"20px":"5px"," 20px ").concat(i?"20px":"5px"," 20px"),margin:o,borderTop:r?"BASE_LIGHTER":"NONE"},n)},$=(0,c.Ps)(V()),A=(0,c.Ps)(R()),G=(0,c.Ps)(B()),Y=(0,c.Ps)(T()),X=function(e,n){var t=(0,a.useMutation)(A),i=l()(t,1)[0];return u.useCallback((function(){return i({variables:{id:e},optimisticResponse:{unfollowCollection:{__typename:"Collection",id:e,viewerEdge:{__typename:"CollectionViewerEdge",id:"collectionId:".concat(e,"-viewerId:").concat(n),isFollowing:!1}}}})}),[e])},Z=function(e){return function(n){return e?{fill:n.baseColor.text.lighter,marginLeft:"2px",width:"18px",height:"auto",position:"absolute",bottom:"0"}:{fill:"inherit",marginLeft:"6px"}}},q=function(e){var n=e.buttonSize,t=e.buttonStyleFn,i=e.collection,o=e.isPopoverVisible,r=e.isToastVisible,c=e.post,F=e.simpleButton,P=e.simpleLink,T=e.isLinkStyle,B=e.susiEntry,R=e.width,V=e.preventParentClick,U=(0,O.I)(),M=(0,x.v9)((function(e){return e.config.authDomain})),j=(0,d.r)().viewerId,L=i&&i.name?i.name:"",z=(0,S.Av)(),A=(0,h.pK)(),q=(0,f.gY)(i).viewerEdge,K=u.useState(!!o),W=l()(K,2),Q=W[0],ee=W[1],ne=u.useState(!!r),te=l()(ne,2),ie=te[0],le=te[1],oe=function(e,n){var t=(0,a.useMutation)($),i=l()(t,1)[0];return u.useCallback((function(){return i({variables:{id:e},optimisticResponse:{followCollection:{__typename:"Collection",id:e,viewerEdge:{__typename:"CollectionViewerEdge",id:"collectionId:".concat(e,"-viewerId:").concat(n),isFollowing:!0}}}})}),[e])}(i.id,j),re=X(i.id,j),ce=function(e,n){var t=(0,a.useMutation)(G),i=l()(t,1)[0];return u.useCallback((function(){return i({variables:{id:e},optimisticResponse:{subscribeCollectionEmails:{__typename:"Collection",id:e,viewerEdge:{__typename:"CollectionViewerEdge",id:"collectionId:".concat(e,"-viewerId:").concat(n),isSubscribedToEmails:!0}}}})}),[e])}(i.id,j),ae=function(e,n){var t=(0,a.useMutation)(Y),i=l()(t,1)[0];return u.useCallback((function(){return i({variables:{id:e},optimisticResponse:{unsubscribeCollectionEmails:{__typename:"Collection",id:e,viewerEdge:{__typename:"CollectionViewerEdge",id:"collectionId:".concat(e,"-viewerId:").concat(n),isSubscribedToEmails:!1}}}})}),[e])}(i.id,j),ue=u.useCallback((function(){ee(!1)}),[]);u.useEffect((function(){return k.V6.on("scroll",ue),function(){k.V6.off("scroll",ue)}}),[ue]);var se=u.useCallback((function(e){V&&e.preventDefault(),null!=q&&q.isFollowing||(z.event("collection.followed",{collectionId:i.id,followSource:A}),oe()),ee(!0)}),[i,q,V,A]),de=u.useCallback((function(e){V&&e.preventDefault(),z.event("collection.unfollowed",{collectionId:i.id,followSource:A}),re(),ee(!1)}),[V,A]),me=u.useCallback((function(){ee(!1)}),[]),fe=u.useCallback((function(e){z.event("client.action",{action:"toggle-subscribe-collection-emails",eventType:"click",classAttribute:"checkbox"}),e.target.checked?ce():ae(),le(!0)}),[]),pe=u.useCallback((function(){le(!1)}),[]);if(F)return J(M,i,c,se,de,n,t,q);var be=function(e){var n=e.children,t=e.buttonSize,l=void 0===t?"SMALL":t,o=e.buttonStyle,r=e.isPopoverVisible,a=e.linkStyle,s=void 0===a?null:a;return u.createElement(m.I,null,(function(e){return e?null!=s?u.createElement(g.r,{"aria-controls":D,"aria-expanded":r?"true":"false",onClick:se,linkStyle:s},n):u.createElement(E.z,{"aria-controls":D,"aria-expanded":r?"true":"false",size:l,onClick:se,buttonStyle:o,width:R},n):u.createElement(b.R9,{collection:i,buttonStyle:"STRONG",buttonWidth:R,linkStyle:"OBVIOUS",isButton:!T,buttonSize:l,operation:"register",actionUrl:H(M,i,c)||"",susiEntry:B},n)}))},ve=!(null==q||!q.isSubscribedToEmails),ge=!(null==q||!q.isFollowing);return P?u.createElement(g.r,{onClick:ge?de:se},u.createElement(v.x,{display:"flex",flexDirection:"row"},ge?"Unfollow publication":"Follow publication")):u.createElement(s.f,null,u.createElement(w.J,{ariaId:D,isVisible:!!Q,hide:me,popoverRenderFn:function(){return u.createElement(v.x,{width:"280px",display:"flex",flexDirection:"column"},u.createElement(N,{extraTopPadding:!0},u.createElement(C.X6,{scale:"XS"},"You‘re following ",L)),u.createElement(N,null,u.createElement(_.F,{scale:"M"},"You‘ll now see more stories from ",L," across Medium.")),i.canToggleEmail&&u.createElement(N,null,u.createElement(_.F,{scale:"M"},u.createElement("label",null,u.createElement(v.x,{display:"inline",marginRight:"5px"},u.createElement("input",{type:"checkbox",onChange:fe,checked:ve})),"Receive emails from this publication"))),u.createElement(N,{extraBottomPadding:!0},u.createElement(_.F,{scale:"M"},u.createElement(g.r,{onClick:de,linkStyle:"OBVIOUS",inline:!0},"Unfollow publication"))))}},u.createElement(be,{isPopoverVisible:!!Q,buttonStyle:ge?"OBVIOUS":"STRONG",linkStyle:T?null!=q&&q.isFollowing?"SUBTLE":"OBVIOUS":null,buttonSize:n},u.createElement(v.x,{display:"flex",flexDirection:"row"},ge?"Following":"Follow",ge&&u.createElement("span",{className:U({marginBottom:T?null:"-6px",position:"relative"})},u.createElement(I.Z,{className:U(Z(T))}))))),u.createElement(p.N8,null,u.createElement(y.F,{isVisible:!!ie,hide:pe,duration:2e3},u.createElement(_.F,{scale:"M"},ve?"You‘ll now receive emails from ".concat(L,"."):"You‘ll no longer receive emails from ".concat(L,".")))))},H=function(e,n,t){return n.slug&&(t&&t.id?(0,F.TAb)(e,n.slug,t.id):(0,F.LlO)(e,n.slug))},J=function(e,n,t,i,l){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"REGULAR",r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:function(e){return e?"STRONG":"OBVIOUS"},c=arguments.length>7?arguments[7]:void 0,a=!(null==c||!c.isFollowing),s=r(!!a);return u.createElement(m.I,null,(function(r){return r?u.createElement(E.z,{size:o,onClick:a?l:i,buttonStyle:s},a?"Following":"Follow"):u.createElement(b.R9,{collection:n,buttonStyle:"OBVIOUS",isButton:!0,buttonSize:"REGULAR",operation:"register",actionUrl:H(e,n,t)||"",susiEntry:z},a?"Following":"Follow")}))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/11034.c723b1fb.chunk.js.map