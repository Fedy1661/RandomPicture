(this["webpackJsonprandom-cat"]=this["webpackJsonprandom-cat"]||[]).push([[0],{26:function(e,t,r){e.exports=r(40)},36:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){},40:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(9),o=r.n(c),u=r(16),s=(r(36),r(37),r(14)),i=r(19),l=function(){return{type:"FETCH_IMAGE_FAILURE"}},m=function(e){return function(t){e().then((function(e){return t({type:"SET_URL_IMAGE",payload:e})})).catch((function(){return t(l)}))}},p={url:null,loading:!1,error:!1},d=r(24),f=Object(s.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case"SET_URL_IMAGE":return Object(i.a)({},e,{url:n});case"FETCH_IMAGE_REQUEST":return Object(i.a)({},e,{error:!1,loading:!0});case"FETCH_IMAGE_FAILURE":return Object(i.a)({},e,{error:!0,loading:!1});case"FECTH_IMAGE_SUCCESS":return Object(i.a)({},e,{error:!1,loading:!1});default:return e}}),Object(s.a)(d.a)),E=r(5),h=r(4),b=r(10),g=r(11),v=r(12),y=function(e){function t(){var e,r;Object(E.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(b.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={hasError:!1},r}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return!0===this.state.hasError?a.a.createElement("div",null,"Oops... \u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a... \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0441\u0442\u043e\u0438\u0442 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0443\u0440\u0437\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(n.Component),j=function(e){if(e.state)throw new Error(":))");return""},O=(r(38),function(){return a.a.createElement("div",{className:"loader"})}),_=function(e){function t(){var e,r;Object(E.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(b.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).handleImageLoaded=function(){r.props.imageLoaded()},r.handleImageError=function(e){r.props.imageError()},r}return Object(v.a)(t,e),Object(h.a)(t,[{key:"UNSAFE_componentWillUpdate",value:function(e){this.props.url!==e.url&&this.props.imageRequested()}},{key:"render",value:function(){var e=this.props,t=e.url,r=e.state,n=e.loading,c=e.error,o=c?"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043b\u0430\u0441\u044c, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u0443\u044e.":null,u=n&&t?a.a.createElement(O,null):null,s=t?null:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e",i=n?null:"image-random__image-visible";return a.a.createElement(y,null,a.a.createElement("div",{className:"image-random"},o,u,s,t&&!c&&a.a.createElement("img",{ref:"img",onLoad:this.handleImageLoaded,onError:this.handleImageError,className:"image-random__image ".concat(i),src:"".concat(t),alt:t}),a.a.createElement(j,{state:r})))}}]),t}(n.Component),w={imageLoaded:function(e){return{type:"FECTH_IMAGE_SUCCESS",payload:e}},imageRequested:function(){return{type:"FETCH_IMAGE_REQUEST"}},imageError:l},I=Object(u.b)((function(e){return{url:e.url,loading:e.loading,error:e.error}}),w)(_),R=r(6),S=r.n(R),C=function e(){var t=this;Object(E.a)(this,e),this.getResources=function(e){var t;return S.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.a.awrap(fetch(e));case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}))},this.getRandomDog=function(){var e;return S.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.a.awrap(t.getResources("https://random.dog/woof.json"));case 2:return e=r.sent,r.t0=t,r.next=6,S.a.awrap(e.json());case 6:return r.t1=r.sent,r.abrupt("return",r.t0._transformToImage.call(r.t0,r.t1,"url"));case 8:case"end":return r.stop()}}))},this.getRandomGrayscale=function(){var e;return S.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.a.awrap(t.getResources("https://picsum.photos/500/500?grayscale"));case 2:return e=r.sent,r.abrupt("return",t._transformToImage(e,"url"));case 4:case"end":return r.stop()}}))},this.getRandomBlur=function(){var e;return S.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.a.awrap(t.getResources("https://picsum.photos/200/300/?blur"));case 2:return e=r.sent,r.abrupt("return",t._transformToImage(e,"url"));case 4:case"end":return r.stop()}}))},this._transformToImage=function(e,t){return e[t]}},A=r(53),T=function(e){var t=e.title,r=e.func,n=e.onSetPicture;return a.a.createElement("li",{className:"navbar__item nav-item"},a.a.createElement(A.a,{variant:"contained",onClick:function(){return n(r)},className:"navbar__btn btn btn-secondary my-2 my-sm-0",type:"submit"},t))},x=function(e){function t(){return Object(E.a)(this,t),Object(b.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,r=e.onSetPicture;return a.a.createElement(y,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},a.a.createElement("div",{className:"navbar-collapse",id:"navbarColor01"},a.a.createElement("ul",{className:"navbar mr-auto"},a.a.Children.map(t,(function(e){return a.a.cloneElement(e,{title:e.props.title,func:e.props.func,onSetPicture:r})})),a.a.createElement("li",{className:"navbar__item nav-item"}))))))}}]),t}(n.Component),F=Object(u.b)(null,(function(e){return Object(s.b)({onSetPicture:m},e)}))(x),G=function(e){function t(){var e,r;Object(E.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(b.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).randomPictureService=new C,r}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.randomPictureService,t=e.getRandomDog,r=e.getRandomGrayscale,n=e.getRandomBlur;return a.a.createElement(y,null,a.a.createElement("div",{className:"container"},a.a.createElement(F,null,a.a.createElement(T,{title:"\u0421\u043e\u0431\u0430\u0447\u043a\u0430",func:t}),a.a.createElement(T,{title:"Grayscale",func:r}),a.a.createElement(T,{title:"Blur",func:n})),a.a.createElement(I,null)))}}]),t}(n.Component);o.a.render(a.a.createElement(u.a,{store:f},a.a.createElement(G,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.c5e0b180.chunk.js.map