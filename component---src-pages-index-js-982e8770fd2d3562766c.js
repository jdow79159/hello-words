(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{222:function(e,t,a){"use strict";a.r(t);a(214);var i=a(0),r=a.n(i),s=(a(226),a(248)),n=(a(249),a(211)),c=a(243),o=a.n(c),d=function(){var e=s.data.allImageSharp.nodes;return r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"menu-wrapper row"},["translate","learn","test"].map((function(t){return r.a.createElement("div",{className:"menu-item col-6",key:t},r.a.createElement("div",{className:"menu-item-wrapper",onClick:function(){Object(n.a)("/"+t+"/")}},function(t){var a=e.find((function(e){return e.fluid.originalName==="exercises-"+t+".png"})),i=null;if(a?i=r.a.createElement(o.a,{fluid:a.fluid}):(a=e.find((function(e){return"no-photo.png"===e.fluid.originalName})),i=r.a.createElement(o.a,{fluid:a.fluid})),a)return i}(t)),r.a.createElement("h2",{className:"menu-label",onClick:function(){Object(n.a)("/"+t+"/")}},t))}))))},l=a(209),u=a(210);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(u.a,{title:"Learn english words"}),r.a.createElement(d,null))}},226:function(e,t,a){"use strict";var i=a(1),r=a(31)(5),s=!0;"find"in[]&&Array(1).find((function(){s=!1})),i(i.P+i.F*s,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(78)("find")},243:function(e,t,a){"use strict";a(16),a(17),a(8),a(109),a(150),a(244);var i=a(11);t.__esModule=!0,t.default=void 0;var r,s=i(a(82)),n=i(a(79)),c=i(a(58)),o=i(a(46)),d=i(a(0)),l=i(a(48)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},A="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,s=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:s}),d.default.createElement("source",{media:r,srcSet:a,sizes:s}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function y(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function v(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function E(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?E(e,!0):"")+E(e)})).join("")+"<img "+d+n+c+a+i+t+s+r+o+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,s=d.default.createElement(B,(0,o.default)({src:t},r));return a.length>1?d.default.createElement("picture",null,i(a),s):s},B=d.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,s=e.style,n=e.onLoad,l=e.onError,u=e.loading,f=e.draggable,g=(0,c.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:i,src:r},g,{onLoad:n,onError:l,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));B.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!A&&h&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||m&&(A||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,c=void 0===n?{}:n,l=e.placeholderStyle,f=void 0===l?{}:l,g=e.placeholderClassName,p=e.fluid,A=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,S=e.itemProp,E=e.loading,x=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,o.default)({opacity:L?1:0,transition:I?"opacity "+h+"ms":"none"},c),O="boolean"==typeof m?"lightgray":m,U={transitionDelay:h+"ms"},z=(0,o.default)({opacity:this.state.imgLoaded?0:1},I&&U,{},c,{},f),k={title:t,alt:this.state.isVisible?"":a,style:z,className:g};if(p){var D=p,J=D[0];return d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(J.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/J.aspectRatio+"%"}}),O&&d.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&U)}),J.base64&&d.default.createElement(R,{src:J.base64,spreadProps:k,imageVariants:D,generateSources:v}),J.tracedSVG&&d.default.createElement(R,{src:J.tracedSVG,spreadProps:k,imageVariants:D,generateSources:y}),this.state.isVisible&&d.default.createElement("picture",null,w(D),d.default.createElement(B,{alt:a,title:t,sizes:J.sizes,src:J.src,crossOrigin:this.props.crossOrigin,srcSet:J.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:E},J,{imageVariants:D}))}}))}if(A){var Q=A,N=Q[0],W=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},s);return"inherit"===s.display&&delete W.display,d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},O&&d.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:O,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},I&&U)}),N.base64&&d.default.createElement(R,{src:N.base64,spreadProps:k,imageVariants:Q,generateSources:v}),N.tracedSVG&&d.default.createElement(R,{src:N.tracedSVG,spreadProps:k,imageVariants:Q,generateSources:y}),this.state.isVisible&&d.default.createElement("picture",null,w(Q),d.default.createElement(B,{alt:a,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:E},N,{imageVariants:Q}))}}))}return null},t}(d.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),V=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});L.propTypes={resolutions:I,sizes:V,fixed:l.default.oneOfType([I,l.default.arrayOf(I)]),fluid:l.default.oneOfType([V,l.default.arrayOf(V)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var O=L;t.default=O},244:function(e,t,a){"use strict";a(245)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},245:function(e,t,a){var i=a(1),r=a(9),s=a(41),n=/"/g,c=function(e,t,a,i){var r=String(s(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(i).replace(n,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},248:function(e){e.exports=JSON.parse('{"data":{"allImageSharp":{"nodes":[{"fluid":{"originalName":"exercises-learn.png","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAHYcAAB2HAGnwnjqAAAEpUlEQVQ4y21Ve0xbZRT/6BbxDxlmi4AQw5yCg1Hgtpe2ty3teIy1HW3XlkJ4OAZ9AO20jBnjQKQ8uoIOxhigyGDRGbPp0ITpzJY4/mBRk+mCWYSQGLYJZA814BKzyaOf51wu0U1vcnJ+99xzf/2d79xzSohwzblcZN7pDEM873LtBgtCLBZ8K/g88FqwDsBx4P3gLXwuvIPv/ueCB0gkEnAA8MSc02kDfxXuW8EaAf8EMSv4b+H+hCBEBPdEo2QFojVlhGwOJ3OCwhmHQ/GL0/khYvADNxwO7ufKysTZf2InIaZBPFVRwYsYLyvF9/lfCAOAvxL2e1UVT0jrG6OWPN4SxH9UV5fQukOxtKklYrG6uhxjD2s8xfT1wzF8bkcXub6/XHRnTWkY+b9LxUlNnELSmaVi29QqSa1WJW3YqWLfBOyDWEChkLRkctLATiUbIE+QDY+eHTQAFAawLDrwwZNKhcSu5dhBS64iXsZKklJ2pDemiRm7OCV9L+AmKcOIrXmK57M4NknNSU8H8nXJK16vGI6jDbjMeH5BIJy463YPXS4tNsrlzDClH6H0jbu0GUNjg0ba5NHefsOlmb1yykTNebIzhDyzCcWw8vTWz4vs5t/cVX3A8SMQdqPCWGAv4OVuJE/lqjO6EPr2qX9o8+XSv74pXBofyqdjg/mUXitaavPl0Lr9mdOYA7nHSOSGCMTAYYJ+bCP8d+Z0fv+r2937WaHdplJJmsIjktnDbg29etq4OtKpC13sN6x+PbBndfS4PnTlVP5ywJdNo2LEGk7JNJy121BhJ3IA11EsOQ/rf1DjkbSb9OmslPHvs3CDZ98x0IkzpmV6q4x+eUIf+qJHH6I3y+jkOfPySJeBOuzKTxiG8R8x61KXPd5U4GgGLhMq1MLNW/TAK/Gv6XK2a5TSFikjcY0PG+nsBcvK7AVr6PL7e0KX3jWE7l6yhW6ct6xc+3gvVSukh6Ap/jpd9nbqq8Vja4CSd6PCDpA7ec/tPjlaZLdDGQFCtoSXmrn5YG02vXPRypeLZS+MFYSCB7PoyxbuPiFJkXKO8Y8UFliEpkyBuB5UGAfsNr4pMRGb4NvqQ5iSkt58/VMrpYvlD77qM0DZBkoXyh/OnLdRJo3pxpwsJdtLtkY9LTTFCOL4pviB/TtoSv9oUaFNJmeCmLA5eke836u9NzVixa7OeEpU05PnLDRYm3X/ua2pyZiTIWcC0EgTKOxGDlweWLIF2Hv/rKmRtxv1YjiXoVxlRrRBK9vyQkJqNqgJJr6Uxr2YkCYBfCQhMU2vy5Rt2aWSRUPucFu+LgXGlAHC40BY/PjUiXCcYKx6VArJ0Rw1265ZG7t2sA7A9RAL4jPI6YbcYzB4j44ebhgc7OnKChENvM3H6Ku+ZxeqqosQwwQVrnoPxNHag5GASzG2WFVdADmxfG5bexhunNvAwW8rXF8wx+Tfq+iW08nCw2HhsPthXWXcdDi2AR4SYu9BjEOMQtAjx/z6otXCcgRFqFYkqMbpwQVrwgkAawarx88LzIgNAOsWclEdz/F46WR9n0GjzDjo+BngOIGZAOPfQo8Q61hvAO5TfkEL199WY1j7LSsKnAAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/159319144e080dee2b0936449b621cf3/0cc6a/exercises-learn.png","srcSet":"/static/159319144e080dee2b0936449b621cf3/7c0ed/exercises-learn.png 200w,\\n/static/159319144e080dee2b0936449b621cf3/0cc6a/exercises-learn.png 256w","sizes":"(max-width: 256px) 100vw, 256px"}},{"fluid":{"originalName":"exercises-test.png","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAHYcAAB2HAGnwnjqAAAEsUlEQVQ4y42UeUyURxTAv2V3WcByH8suC4IVaAFhF/DgEtNoK6UBUSstLFe5wSORG4kF5JAoIKccBQpiFWopl1KqQDHKgkJrgaQuV1MRqD1MrSS1GcLrzCxuoEfSL3n5Zv6YX957v5nHqLDZ8bpGgi49vvCKcIt1i4WtY+vm1+yVQfamlrYtenyTq1qGwg42l5fD4E9yMIb8VJh1n4aGBsPoGAq6zl9/AFV35+F4UTP4RqdAQFI+vJ+QCwGJeXifDOFZFVA5OAsJ7XIwstnxEJ9lrwexOVyyd6YbfWPRlbKBGWieXH6R3zaCwk6XoLekcWh/UDzyCj6GwjPLUHpDD2oYffJn2pcLIHDwuE/O8XQFfPw7uca0U1Pj/aSiomLO4FJaygamoeL2D6hKtgRFPRM4wzwIzyzHUQb1oz/Dp3MAzePPVlJ758F4m+sDWp46z5fHYf6gdbNV4gz5xsBisYIIsLV0YBbe8DmCrLaaQ377KOReG4K4gno4XnwZonOrKfxEYeNKUvccCB08KFBiJShM8xcDXjpxdIWxbPt3yDqKAkv6Z2H/u1LkKLaDvM/vQ2LlNThyIhMCk8+CNKWA9jQyq2wlsWsWTMS7R0lSWwTaYwGe5gSSxOiZRfJcQ8k6gtE1ErZWDM5BzNk65BefAaW35NAw9is0fL0+nkLTN09xyY9BJHYnPeQedto03RalB9jGGUbbJJa3K5AAI7EUk9YL/TPgIBEjQzYDmVfvQGR2BezyOgx7DoWA58EQcPcJAO+Qoysn26dgs5MnyZAb5qYlH0sXAIdhshhtEQZKFUBdviLDyDMXkU9kEpTcfAi1Iz9CjWwBaoYXaVTLFqFuZGkl9Yt5MBW7U2Cwi9bUULIxyXAj8KUU74APkPN2Z8jvGIP0+hsQcqoIIvD9C88qh7DTpXC0oI720MyR9pAb4qo1JcNAzr8CsZS9B/yR3euWkIulpNZ2QiAWEZpRTMFBqecgJufi/wMSKZW3v4fo/DrkE3sKSvvk0Pjtb3BpchkuTTzHsUzjk8nnK2kKKRuAuORsRsskbk1KlEJK3ww4bndGJuoMfIilkAu9400/2H1ACh6+UnD19gcvaSyWIldKocCUtQx1zCJ4bmEEGKqUEpNXi/xi06DkFpYyvATVQ4+VUYWjbnhhg5R1JeczHI0CtmgbARbgHgqpFC//UCSRiKmUjMZe+jqi82rwS6khNwC/lCb6Ul72kFiWpQiAxTAXOCLrLkF4NrA1dXuVQLd9byNzoT7ktI1ASk0HnjY5EJx2HoLSztEXE5Vd8U8pCmCx6lbHz8zSm4CtY9ipGA7901B55xEquilfrbr7aLV+7JdVLGS1afx3ZVyeeEZLVkpx0cRAPs1Q1cK+U5RQBWxtgx46vsrx+MJmX+DJgj669wThHqIa2aIyqmULqP7eEh1f+C2PEKDIQP07F0tN2jfWJp06NeudwOJwPyYDtrvwxjiUfzVLr0wpzrbsb1HaNwXl/VOQ0DEFfJudZMBytfUMFs1etVaI0OQf40oOkXUMw+GqJppa2Q1a2Eq6zW3EPf8VFjbi68aW9gNcDc0iMr5UudwqDXU1Uv57DIe3j/WKPlnv/QsaZdkmoLIPkAAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/b375c3ba7f4243aeed32f45f2e706cc3/0cc6a/exercises-test.png","srcSet":"/static/b375c3ba7f4243aeed32f45f2e706cc3/7c0ed/exercises-test.png 200w,\\n/static/b375c3ba7f4243aeed32f45f2e706cc3/0cc6a/exercises-test.png 256w","sizes":"(max-width: 256px) 100vw, 256px"}},{"fluid":{"originalName":"exercises-translate.png","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEJElEQVQ4y71UfUxbVRS/LRqjizETNmWLEaJbWCkF2tIP+gpbpcrKaGspBdZCX1tfXwtT6IzOoBuIixOzBRDHYHR8/TE0fMwh6EZQ5/wAjZni5jZkbMtgYYKJ/jOH9vUeb4tUZpxm/uFJTt6595zzu7/7zj0Hof9DBJQeCTMMYTtRbeARmy/MMP6DGvihuFsCEmf4e0d8Du92iMSm6HkRgJCS0yLfux7Z8geYZgVapUtHsTolit6sJPairiR2THhPgR7QUYj/xJpweEKSHCUby/gZb/3IU3fPE53jyWuG+ABAvMw9Ntp8su+QE7qb7dB/iIaeVhp6/TQMdjmgj6yPtNEw0OEEX0XBXFRcTsK/XOL+R9sbbADz3iDMeQK/nWY4uMRycMHNTX3o5PBZhpsfc3Hwg2dh4gMWooW5peE0ocbygshYepwwHSD6rsjgHUqzlPetytv7hr+heAFmWPhqgMZ2Vz6ufbkIdx+w4SyDCTNsPi4ts2CYdHPj7zMQI8xl0YZkVbb8uQ5Qt04Atf8boJrGw7qpbQIE1R9Da10xwFUWnznmgK8HHfD8swXwys4iKCwxg0ZvAovNjGHKHTh9jAkxZJFA/niJovooUG0Xf1U1fxdQtZzl0pvGuUz/ucD6yuOB1jobhiss4HNu3HOwGLylFvi01x4GzLXkwVOE5TJADxLItFsVO3uB6pzmpE83YVIQkJQ1giS/HNb5eqClniYM3fiTXhoMBXl4T3URnhtz4ZZ9VtAaTTBy2I5hmuVODZErJ4UYyrRWxa5+oDouc0k6BxYzr4PEWw8SSznEW/dCV7MLYNaDYcYLI9324OUTzgApUuC9rhK83VcA0yddQbK+cX7EHQLchgRSjVVRMwjKfZ9xyXkVOJWuAbFjN0iKX4QE5k3YXsnimZECmBreii+M0DD5EQuzoyxh7QFS7cC1UQaujXnA32CHFeu3aMk/JAyr3oH0/eOcsm4UK+vHQPHqMJbt6seqpm+xuGoIKzy1HOVrBBW940tKq6tSZps6G2ut8PMpb6gwX6RlGV+Ll+kti30r2ViorDoC6q4ZUB08D6rmM0Gq/RKn7rwClP97ULdfBFXndFDddRWSil4ajjzRNbpMs9X8kzTLeGBp6/OjDELrHopbmWx65gS5ZkDq8y+QaoO88m1Idez+RczUXhe79lyXMLU3Uot2zCYptDmhRJvTcmcY4d7sWAFlUIRMmfbJqKg43Z898SBCq0V6djJtWyMQ1r61CN0Xh1DMwwhFE40h/rtDcaKM3HB8ykZj1FLuWrF+2aiSbopMFGGmqWNDCrX5Vo1IOoofBjNXREYbUf7yAbPoILMvMcMYASbtF0WeE48cQBKMPOIPJSKB2nDTePtbEWlMSJTnWwTSs0j4WCH/r3PxtmQpKZEy3ET7P4ER+R0yqgBo15iL5wAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/477768996b9b109ed4dbe3d3e1378618/0cc6a/exercises-translate.png","srcSet":"/static/477768996b9b109ed4dbe3d3e1378618/7c0ed/exercises-translate.png 200w,\\n/static/477768996b9b109ed4dbe3d3e1378618/0cc6a/exercises-translate.png 256w","sizes":"(max-width: 256px) 100vw, 256px"}},{"fluid":{"originalName":"exercises-write.png","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAJ17AACdewE8n3fEAAADz0lEQVQ4y42UW1AbZRTHv90NuymS+1LahGolbfVVR1uRB3zoS5/0oR3b0epYps54qdVRSCtSQsJy7aiFSgm9ZEqDY5m2TnV06vTBcSzjQIAQcqFYLZcESaVlOuRFWPIdv2/ZhGCh9pvZ2ZOds7/8zzn/swg9whHaJhHqnluKT00yfEecWy2PPz31cJD2qwkkkEuJT44zBLYCxHdMPaXxJvaxvrvHdfUjBx8OOzmO+PZYGsxlqS3gPfFyoqY35+y0zHYnQd+RhIJDv3pXB7WOK7AslRrl3jImEJhTaI/N8r4k5HTNAdt1D3QNI/MbP/DD+sM9B9dURk9uy+2MMvJsh7ZtIipcSAJ/JgGa83/LGu/0onj459SGd37B+R/3gsXhf2Ft2Ik/aWmsqriUgIeFzjkgw5jXnJ9Jac7+BQVl32PrgZ8W8x0BsFT0jRpqw/yDA2ibWNEz8gcHtB0JEDyxBQKTuc4ZyDkdxxtfv0RhIH7SJ4tVI2CqHGyi+eaj/dxKa6yE7dJ6pglsCsgQMHfhLrlPYNueLmx96xqI5X0yUQamzwJgrBneSt8xVg+xqrcy02TUMq0knhHO3KEwmcCw0DaGC1/2YuubP2Kx3I8tjn4Ku2Z0DpctqRtgEIDqJ08crWsZQ2SCrKq2W+mZJ77A+e6BtvUP/PguD7a+8QMWK/xgKe+VzTU3wVAzHKD5W3Z+g3R1UbT+/RtZ23BqMg17SVWW4nyzeN2Xo/iJna3Ytv87AuunsBTpGTZKo6Cvjeym7+jdYdbgDiOjM4iQ5ty0UjIxKquqvSp03icem5VzmyPwZOnnYHvtKoWlVFjK2DgOeilyhOYTlWxe001FlEGKEKA3QVYonoZt4z2xf9iv78NjDUFc9GIj2PZdwaJjAMQjg2CqCoKx4TaFOWk+gTPE2AqMqF0uN+dcQpms0D55iPt2EXSuftm+XYLCvZdSFGap6L1jOjY0SNTIBPY2zbVU+JdhUhaMTkbbcksBMt3Jy/r6CGx5pnq+cM/FBVImFitDYHaRAdSG9+d9cWuDYo/KAKNrXIbp6qPLvNzGUCY2f3Q9uLW4GTbtvQL5x36n60St0WNwhV7V10WUTTC4Q1ze8dElWF3kwd21F0tK/4qKa9/b9qwLNr3SGbMcHbxucfRVm6qHtmfn6uujbDrWNUTX/lTZn3OWPV1yAuw7JCljTvVsLr1INiDI6ZrVSbpDqyv7D/Bd+/OuyszvklaG7ClnqgqwBimMzO4hJH74G9I3jfz/553AmHRcVCIxtt0+hrkByOLoWerrpwNI642jRz3/Av9i245/xmeJAAAAAElFTkSuQmCC","aspectRatio":1,"src":"/static/3c25fd4ec6ba89249cc77f2a6a17f890/0cc6a/exercises-write.png","srcSet":"/static/3c25fd4ec6ba89249cc77f2a6a17f890/7c0ed/exercises-write.png 200w,\\n/static/3c25fd4ec6ba89249cc77f2a6a17f890/0cc6a/exercises-write.png 256w","sizes":"(max-width: 256px) 100vw, 256px"}},{"fluid":{"originalName":"no-photo.png","base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACRUlEQVQ4y6VUyaoaQRT1ZRmySrLQ7wiu3eZbsvEb3AT8hvyAa4lgHFavIQ+CKAhxnud2nodX7c05jS2+VxI6pOBwq6vuPffUrdvl8WCIiOd/h8ZRrVY/NJtNH+BtNBpe2lar9QK3a/S5+PlqtdpHjXQ2m/1Yr9fPq9VqBrtwA/oCx8Vi8UuTvFwufyKD7HY7OR6PrkBfDpCXNUJkeeTmZrN53m63Zzegr2VZAjG/NcL5fG5csik4ihvQl4QQU9AIUUODm6iJgqO4AX0xBGJ0wslkYnAT8hUgr4FgubOuTqeTTKdTndA0TYObyKYAm8AhocWxXqzxG6dSh8NBxuOxTjgcDo39fi9QqgBBXwr6SzqdjqDXJJPJSL1el3K5bGMwGFCZwuUIYnVCOBjchFIFSLFYlEKhIGhe2+bzeXutVCrZ391ul8rs8iCpTtjv923C0WhkE8LZBudUQ9XO2s26gkom1Ql7vZ7BViAhQMuj2JbBztxZB9kZKm1flKd4l5CtAGfFgL8Bp+Exz6itonrU9En7l5HN4A3yGLfBDCCcORJLu90mmVQqFf77ksvlvl0I31wJkfGRrYCgE2DdA8gskFmomQVVCvMjezcSiXzRCKHwiW3DmvACXsO5HN4uWwk9aD8MULoOBAKfyBEKhR6uhNj4DscNMADMW+D9M9GDJo44QuuYuIQW5qlkMvk1GAx+Rvhb7VISicT7VCrlS6fTXtgrEOSNx+PeWCzmjUajtL5wOPzu355vd0/+A2uWzWavdfP7/Z4/Wa4Va75pOn0AAAAASUVORK5CYII=","aspectRatio":1,"src":"/static/450df6cc812725f1ef18466f7fffd741/0cc6a/no-photo.png","srcSet":"/static/450df6cc812725f1ef18466f7fffd741/7c0ed/no-photo.png 200w,\\n/static/450df6cc812725f1ef18466f7fffd741/0cc6a/no-photo.png 256w","sizes":"(max-width: 256px) 100vw, 256px"}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-982e8770fd2d3562766c.js.map