(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{HMs9:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=o("q1tI"),r=u(a),i=u(o("i8i4")),s=u(o("17x9")),c=o("Seim"),l=u(o("tvXG")),m=u(o("PTkm")),p=u(o("uUxy"));function u(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=0,b=0,w=0,v=0,j="data-lazyload-listened",y=[],k=[],x=!1;try{var N=Object.defineProperty({},"passive",{get:function(){x=!0}});window.addEventListener("test",null,N)}catch(M){}var O=!!x&&{capture:!1,passive:!0},P=function(e){var t=i.default.findDOMNode(e);if(t instanceof HTMLElement){var o=(0,l.default)(t);(e.props.overflow&&o!==t.ownerDocument&&o!==document&&o!==document.documentElement?function(e,t){var o=i.default.findDOMNode(e),n=void 0,a=void 0,r=void 0,s=void 0;try{var c=t.getBoundingClientRect();n=c.top,a=c.left,r=c.height,s=c.width}catch(M){n=f,a=b,r=v,s=w}var l=window.innerHeight||document.documentElement.clientHeight,m=window.innerWidth||document.documentElement.clientWidth,p=Math.max(n,0),u=Math.max(a,0),h=Math.min(l,n+r)-p,d=Math.min(m,a+s)-u,g=void 0,j=void 0,y=void 0,k=void 0;try{var x=o.getBoundingClientRect();g=x.top,j=x.left,y=x.height,k=x.width}catch(M){g=f,j=b,y=v,k=w}var N=g-p,O=j-u,P=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return N-P[0]<=h&&N+y+P[1]>=0&&O-P[0]<=d&&O+k+P[1]>=0}(e,o):function(e){var t=i.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var o=void 0,n=void 0;try{var a=t.getBoundingClientRect();o=a.top,n=a.height}catch(M){o=f,n=v}var r=window.innerHeight||document.documentElement.clientHeight,s=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return o-s[0]<=r&&o+n+s[1]>=0}(e))?e.visible||(e.props.once&&k.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},E=function(){k.forEach((function(e){var t=y.indexOf(e);-1!==t&&y.splice(t,1)})),k=[]},S=function(){for(var e=0;e<y.length;++e){var t=y[e];P(t)}E()},z=void 0,q=null,A=function(e){function t(e){h(this,t);var o=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.visible=!1,o}return g(t,e),n(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var o=void 0!==this.props.debounce&&"throttle"===z||"debounce"===z&&void 0===this.props.debounce;if(o&&((0,c.off)(e,"scroll",q,O),(0,c.off)(window,"resize",q,O),q=null),q||(void 0!==this.props.debounce?(q=(0,m.default)(S,"number"===typeof this.props.debounce?this.props.debounce:300),z="debounce"):void 0!==this.props.throttle?(q=(0,p.default)(S,"number"===typeof this.props.throttle?this.props.throttle:300),z="throttle"):q=S),this.props.overflow){var n=(0,l.default)(i.default.findDOMNode(this));if(n&&"function"===typeof n.getAttribute){var a=+n.getAttribute(j)+1;1===a&&n.addEventListener("scroll",q,O),n.setAttribute(j,a)}}else if(0===y.length||o){var r=this.props,s=r.scroll,u=r.resize;s&&(0,c.on)(e,"scroll",q,O),u&&(0,c.on)(window,"resize",q,O)}y.push(this),P(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,l.default)(i.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(j)-1;0===t?(e.removeEventListener("scroll",q,O),e.removeAttribute(j)):e.setAttribute(j,t)}}var o=y.indexOf(this);-1!==o&&y.splice(o,1),0===y.length&&"undefined"!==typeof window&&((0,c.off)(window,"resize",q,O),(0,c.off)(window,"scroll",q,O))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:r.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(a.Component);A.propTypes={once:s.default.bool,height:s.default.oneOfType([s.default.number,s.default.string]),offset:s.default.oneOfType([s.default.number,s.default.arrayOf(s.default.number)]),overflow:s.default.bool,resize:s.default.bool,scroll:s.default.bool,children:s.default.node,throttle:s.default.oneOfType([s.default.number,s.default.bool]),debounce:s.default.oneOfType([s.default.number,s.default.bool]),placeholder:s.default.node,scrollContainer:s.default.oneOfType([s.default.string,s.default.object]),unmountIfInvisible:s.default.bool},A.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var C=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(o){function a(){h(this,a);var e=d(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return e.displayName="LazyLoad"+C(t),e}return g(a,o),n(a,[{key:"render",value:function(){return r.default.createElement(A,e,r.default.createElement(t,this.props))}}]),a}(a.Component)}},t.default=A,t.forceCheck=S,t.forceVisible=function(){for(var e=0;e<y.length;++e){var t=y[e];t.visible=!0,t.forceUpdate()}E()}},M738:function(e,t,o){"use strict";o.d(t,"c",(function(){return w})),o.d(t,"b",(function(){return n})),o.d(t,"d",(function(){return u})),o.d(t,"a",(function(){return a}));var n=o("Pg8g"),a=o("jiQw"),r="".concat("works/","yxtd/"),i="".concat("works/","latest/"),s="".concat("works/","rzlt/"),c="".concat("works/","wap/"),l="".concat("works/","applets/"),m="".concat("works/","webapp/"),p="".concat("works/","qrcode/"),u={latest:{data:[{imgSrc:i+"1.jpg",title:"\u4efb\u52a1\u7ba1\u7406\u4fe1\u606f\u7cfb\u7edf",links:"http://wonfull2020.hz9981.com/",desc:"\u5177\u6709\u4e0a\u4f20(\u4e0b\u53d1)\u5236\u5ea6\uff0c\u5206\u914d\u4efb\u52a1\uff0c\u4e8b\u9879\u529e\u7406\uff0c\u521b\u5efa\u4f1a\u8bae\u7b49\u529f\u80fd\uff0c\u8de8\u90e8\u95e8\u4e4b\u95f4\u53ef\u4ee5\u76f8\u4e92\u534f\u4f5c\u529e\u516c\uff0c \u53ef\u4ee5\u638c\u63e1\u6bcf\u4e2a\u90e8\u95e8\u3001\u6bcf\u4e2a\u5458\u5de5\u7684\u5de5\u4f5c\u8fdb\u5ea6\u548c\u6267\u884c\u60c5\u51b5\u3002",category:"\u4f01\u4e1a\u670d\u52a1"}],title:"\u6700\u65b0"},applets:{data:[{imgSrc:l+"1.jpg",title:"\u8da3\u70b9\u5323\u5b50",searchKeyword:"\u8da3\u70b9\u5323\u5b50",desc:"\u8da3\u70b9\u5323\u5b50\u4ea7\u54c1\u5206\u4e3a\u5973\u751f\u8231\u3001\u7537\u751f\u8231\u548c\u6df7\u5408\u8231\u4e09\u79cd\uff0c\u5065\u8eab\u7528\u6237\u901a\u8fc7\u81ea\u8eab\u7684\u5b9a\u4f4d\u9009\u62e9\u9644\u8fd1\u7684\u4ed3\u4f53\uff0c\u6839\u636e\u6240\u63d0\u4f9b\u7684\u65f6\u95f4\u6bb5\u8fdb\u884c\u9884\u7ea6\u5145\u503c\u5065\u8eab\u3002",txtdetails:"\u8da3\u70b9\u5323\u5b50",category:"\u5c0f\u7a0b\u5e8f"}],title:"\u5c0f\u7a0b\u5e8f"},wap:{data:[{imgSrc:c+"1.jpg",title:"\u767d\u72d0\u5de5\u4e1a\u8bbe\u8ba1\u516c\u53f8",qrcodeImg:p+"1.png",txtdetails:"\u767d\u72d0\u5de5\u4e1a\u8bbe\u8ba1\u516c\u53f8",category:"\u4f01\u4e1a\u5b98\u7f51"},{imgSrc:c+"2.jpg",title:"\u541b\u5a01\u56fd\u9645\u8d27\u8fd0\u4ee3\u7406\u6709\u9650\u516c\u53f8",qrcodeImg:p+"2.png",txtdetails:"\u541b\u5a01\u56fd\u9645\u8d27\u8fd0\u4ee3\u7406\u6709\u9650\u516c\u53f8",category:"\u4f01\u4e1a\u5b98\u7f51"}],title:"\u79fb\u52a8\u7aef\u7f51\u9875"},webApp:{data:[{imgSrc:m+"1.jpg",title:"\u767e\u7269\u8857\u76f4\u64ad",qrcodeImg:p+"4.png",txtdetails:"\u76f4\u64ad\u4e0e\u593a\u5b9d\u76f8\u7ed3\u5408\u7684\u65b0\u578b\u8d2d\u7269\u5e73\u53f0",category:"\u79fb\u52a8\u7f51\u9875",desc:"\u76f4\u64ad\u4e0e\u593a\u5b9d\u76f8\u7ed3\u5408\u7684\u65b0\u578b\u8d2d\u7269\u5e73\u53f0\u3002\u89c6\u9891\u5728\u7ebf\u64ad\u653e\uff0c\u53ef\u4ee5\u4e0e\u4e3b\u64ad\u4e92\u52a8\u804a\u5929\uff0c\u8d60\u9001\u793c\u7269\uff0c\u53c2\u4e0e\u62bd\u5956\uff0c\u67e5\u770b\u6700\u65b0\u63ed\u6653\u671f\u6570\u53ca\u6d88\u606f\u52a8\u6001\uff0c\u5fae\u4fe1\u767b\u5f55\u3001\u5145\u503c\uff0c\u53ef\u5728\u5e73\u53f0\u4e0b\u5355\u8d2d\u4e70\u5fc3\u4eea\u7684\u5546\u54c1\u3002"}],title:"WebApp"},pc:{data:[{imgSrc:s+"1.jpg",title:"\u4eba\u5728\u65c5\u9014OA\u7cfb\u7edf",links:"http://oa.zgrzlt.com/",desc:"\u529e\u516c\u7cfb\u7edf\u65b9\u4fbf\u5458\u5de5\u8fdb\u884c\u4f01\u4e1a\u5185\u90e8\u8d44\u6599\u4e0b\u8f7d\uff0c\u4e86\u89e3\u516c\u53f8\u7ec4\u7ec7\u67b6\u6784\u53ca\u6700\u65b0\u52a8\u6001\uff0c\u53d1\u5e03\u7684\u516c\u544a\u6d88\u606f\u540c\u6b65\u5230\u516c\u53f8\u6bcf\u4e00\u4e2a\u5458\u5de5\u4f7f\u7528\u7684\u9489\u9489\u5ba2\u6237\u7aef\u3002",txtdetails:"\u4eba\u5728\u65c5\u9014OA\u7cfb\u7edf\uff08\u5b98\u7f51\u5730\u5740\uff1ahttp://oa.zgrzlt.com/\uff09",category:"\u529e\u516c"},{imgSrc:r+"15.jpg",title:"\u9648\u8bbe\u827a\u672f\u534f\u4f1a",links:"http://www.szchenshe.com/",txtdetails:"\u9648\u8bbe\u827a\u672f\u534f\u4f1a\uff08\u5b98\u7f51\u5730\u5740\uff1ahttp://www.szchenshe.com/\uff09",category:"\u4f01\u4e1a\u5b98\u7f51"}],title:"PC\u7aef\u7f51\u7ad9",isHot:!0}},h=o("rePB"),d=o("kIc0"),g=[{name:"tmux",src:Object(d.a)({text:"tmux"}),url:"https://github.com/tmux/tmux"},{name:"oh-my-zsh",src:"https://ohmyz.sh/img/OMZLogo_BnW.png",url:"https://ohmyz.sh/"},{name:"autojump",src:Object(d.a)({text:"autojump"}),url:"https://github.com/wting/autojump"},{name:"rmtrash",src:Object(d.a)({text:"rmtrash"}),url:"https://github.com/PhrozenByte/rmtrash"},{name:"mycli",src:Object(d.a)({text:"mycli"}),url:"https://github.com/dbcli/mycli"},{name:"colorls",src:Object(d.a)({text:"colorls"}),url:"https://github.com/athityakumar/colorls"},{name:"zsh-autosuggestions",src:Object(d.a)({text:"zsh-autosuggestions"}),url:"https://github.com/zsh-users/zsh-autosuggestions"},{name:"powerlevel10k",src:"https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/prompt-styles-high-contrast.png",url:"https://github.com/romkatv/powerlevel10k"},{name:"Homebrew",src:"https://brew.sh/assets/img/homebrew-256x256.png",url:"https://brew.sh/"},{name:"mas",src:"https://raw.githubusercontent.com/mas-cli/mas/master/mas-cli.png",url:"https://github.com/mas-cli/mas"}],f=[{name:"unfetch",src:Object(d.a)({text:"unfetch"}),url:"https://github.com/developit/unfetch"},{name:"request",src:Object(d.a)({text:"request"}),url:"https://github.com/request/request"},{name:"compressorjs",src:Object(d.a)({text:"compressorjs"}),url:"https://github.com/fengyuanchen/compressorjs"},{name:"react-lazyload",src:Object(d.a)({text:"react-lazyload"}),url:"https://github.com/twobin/react-lazyload"},{name:"react-infinite-scroller",src:Object(d.a)({text:"react-infinite-scroller"}),url:"https://github.com/danbovey/react-infinite-scroller"},{name:"react-placeholder",src:Object(d.a)({text:"react-placeholder"}),url:"https://github.com/buildo/react-placeholder"},{name:"react-beautiful-dnd",src:Object(d.a)({text:"react-beautiful-dnd"}),url:"https://github.com/atlassian/react-beautiful-dnd"}];function b(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}var w=[{title:"Chrome\u6269\u5c55\uff08\u9700\u5907\u68af\u5b50\uff09",list:[{name:"OneTab",src:"https://extension.extfans.com/extension/chphlpgkkbolifaimnlloiipkdnihall/icon/icon.png?imageView2/2/w/64/h/64/q/100",url:"https://chrome.google.com/webstore/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall"},{name:"\u8bb0\u4e8b\u672c",src:"https://extension.extfans.com/extension/nofepkcoibolggileilfiimccamagcfa/icon/icon.png?imageView2/2/w/128/h/128/q/100",url:"https://chrome.google.com/webstore/detail/%E5%9C%A8%E7%BA%BF%E8%AE%B0%E4%BA%8B%E6%9C%AC/nofepkcoibolggileilfiimccamagcfa"},{name:"Online Download Manager",src:"https://extension.extfans.com/extension/opjjpmhoiojifppkkcdabiobhakljdgm/icon/icon.png?imageView2/2/w/64/h/64/q/100"},{name:"Wappalyzer",src:"https://extension.extfans.com/extension/gppongmhjkpfnbhagpmjfkannfbllamg/icon/icon.png?imageView2/2/w/64/h/64/q/100",url:"https://chrome.google.com/webstore/detail/online-download-manager/opjjpmhoiojifppkkcdabiobhakljdgm"},{name:"Tampermonkey\uff1a\u7528\u6237\u811a\u672c\u7ba1\u7406\u5668\uff08\u6cb9\u7334\uff09",src:"https://extension.extfans.com/extension/gjldcdngmdknpinoemndlidpcabkggco/icon/icon.png?imageView2/2/w/64/h/64/q/100",url:"https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo"},{name:"\u6269\u5c55\u7ba1\u7406\u5668\uff08Extension Manager\uff09",src:"https://extension.extfans.com/extension/dhdgffkkebhmkfjojejmpbldmpobfkfo/icon/icon.png?t=0?imageView2/2/w/64/h/64/q/100",url:"https://chrome.google.com/webstore/detail/extension-manager/gjldcdngmdknpinoemndlidpcabkggco"},{name:"\u4e8c\u7ba1\u5bb6",src:"https://extension.extfans.com/extension/aajodjghehmlpahhboidcpfjcncmcklf/icon/icon.png?imageView2/2/w/64/h/64/q/100",url:"https://chrome.google.com/webstore/detail/nooboss/aajodjghehmlpahhboidcpfjcncmcklf"},{name:"uBlock Origin - \u5e7f\u544a\u62e6\u622a\u5668",src:"https://extension.extfans.com/extension/cjpalhdlnbpafiamejdnhcphjbkeiagm/icon/icon.png?imageView2/2/w/64/h/64/q/100",url:"https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm"},{name:"Surfingkeys",src:"https://extension.extfans.com/extension/gfbliohnnapiefjpjlpjnehglfpaknnc/icon/icon.png?imageView2/2/w/64/h/64/q/100",url:"https://chrome.google.com/webstore/detail/surfingkeys/gfbliohnnapiefjpjlpjnehglfpaknnc"},{name:"Infinity \u65b0\u6807\u7b7e\u9875(Pro)",src:"https://extension.extfans.com/extension/nnnkddnnlpamobajfibfdgfnbcnkgngh/icon/icon.png?imageView2/2/w/64/h/64/q/100",url:"https://chrome.google.com/webstore/detail/infinity-new-tab-pro/nnnkddnnlpamobajfibfdgfnbcnkgngh"},{name:"Material Theme UI for DevTools",src:"https://extension.extfans.com/extension/ejjjgkmkicngofngkjdcahlhnmmoicim/icon/icon.png?imageView2/2/w/64/h/64/q/100",url:"https://chrome.google.com/webstore/detail/material-devtools-theme-c/jmefikbdhgocdjeejjnnepgnfkkbpgjo"},{name:"GitHub Dark Theme",src:"https://extension.extfans.com/extension/odkdlljoangmamjilkamahebpkgpeacp/icon/icon.png?imageView2/2/w/64/h/64/q/100",url:"https://chrome.google.com/webstore/detail/github-dark-theme/odkdlljoangmamjilkamahebpkgpeacp"},{name:"octotree",src:"https://extension.extfans.com/extension/fjcahddnekkgihjnjnimgiggdmlgcnbc/icon/icon.png?imageView2/2/w/64/h/64/q/100",url:"https://www.octotree.io/"},{name:"GitZip for github",src:"https://extension.extfans.com/extension/ffabmkklhbepgcgfonabamgnfafbdlkn/icon/icon.png?imageView2/2/w/64/h/64/q/100",url:"https://chrome.google.com/webstore/detail/gitzip-for-github/ffabmkklhbepgcgfonabamgnfafbdlkn"},{name:"enhanced-github",src:"https://raw.githubusercontent.com/softvar/enhanced-github/master/icons/enhanced-github128.png",url:"https://chrome.google.com/webstore/detail/enhanced-github/anlikcnbgdeidpacdbdljnabclhahhmd"}]},{title:"iterm2\uff08\u7ec8\u7aef\u5229\u5668\uff09",list:g},{title:"Mac\u8f6f\u4ef6",list:[{name:"MateTranslate",src:"https://extension.extfans.com/extension/ihmgiclibbndffejedjimfjmfoabpcke/icon/icon.png?imageView2/2/w/64/h/64/q/100",url:"https://gikken.co/mate-translate/"},{name:"Alfred",src:"https://www.alfredapp.com/media/logo4.png",url:"https://www.alfredapp.com/"},{name:"lemon",src:"https://lemon.qq.com/images/lemon/logo.png",url:"https://lemon.qq.com/"},{name:"popclip",src:"https://pilotmoon.com/hp/img/PopClipFlat32.png",url:"https://pilotmoon.com/popclip/"},{name:"sip",src:"https://sipapp.io/assets/img/favicon/96x96.png",url:"https://sipapp.io/"},{name:"NightTone",src:"https://alexdenk.eu/img/products/icon-nighttone.png",url:"https://alexdenk.eu/mywork/nighttone.html"},{name:"mos",src:"https://mos.caldis.me/resources/image/logo-small.png",url:"https://mos.caldis.me/"},{name:"ishot",src:"https://13315641.s21i.faiusr.com/4/1/ABUIABAEGAAg342Z7gUoxIGSrgYwgAQ4gAQ.png",url:"https://www.better365.cn/ishot.html"},{name:"Hidden Bar",src:"https://raw.githubusercontent.com/dwarvesf/hidden/master/hidden/Assets.xcassets/AppIcon.appiconset/64x64.png",url:"https://github.com/dwarvesf/hidden"},{name:"CleanMyMac",src:"https://cdn2.macpaw.com/images/83934498d56fcab2caac53db98acdb62.webp",url:"https://macpaw.com/cleanmymac"}]},{title:"js\u5e93",list:f}].map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?b(Object(o),!0).forEach((function(t){Object(h.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({id:Math.random().toString(32).slice(2,8)},e)}))},PTkm:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o){var n=void 0,a=void 0,r=void 0,i=void 0,s=void 0,c=function c(){var l=+new Date-i;l<t&&l>=0?n=setTimeout(c,t-l):(n=null,o||(s=e.apply(r,a),n||(r=null,a=null)))};return function(){r=this,a=arguments,i=+new Date;var l=o&&!n;return n||(n=setTimeout(c,t)),l&&(s=e.apply(r,a),r=null,a=null),s}}},Pg8g:function(e){e.exports=JSON.parse('[{"title":"Application and Data","type":"fe","data":[{"name":"React","imgName":"React","url":"//reactjs.org"},{"name":"TypeScript","imgName":"TypeScript","url":"//typescriptlang.org"},{"name":"React Native","imgName":"ReactNative","url":"//facebook.github.io/react-native"},{"name":"Redux","imgName":"Redux","url":"//redux.js.org"},{"name":"NextJs","imgName":"Next","url":"//nextjs.org"},{"name":"Vue&Vuex","imgName":"Vue","url":"//cn.vuejs.org"},{"name":"Nuxt","imgName":"Nuxt","url":"//nuxtjs.org"},{"name":"JavaScript","imgName":"JavaScript","url":"//developer.mozilla.org/zh-CN/docs/Web/JavaScript"},{"name":"Es6","imgName":"EcmaScript","url":"//es6.ruanyifeng.com"},{"name":"NodeJs","imgName":"NodeJs","url":"//nodejs.org"},{"name":"Express","imgName":"Express","url":"//expressjs.com"},{"name":"jQuery","imgName":"Jquery","url":"//jquery.com"},{"name":"RequireJs","imgName":"RequireJs","url":"//requirejs.org"},{"name":"Sass","imgName":"Sass","url":"//sass-lang.com"},{"name":"ComPass","imgName":"ComPass","url":"//compass-style.org"},{"name":"Less","imgName":"Less","url":"//lesscss.org"},{"name":"Json","imgName":"Json","url":"//www.json.org/"},{"name":"Html5","imgName":"Html5","url":"//developer.mozilla.org/zh-CN/docs/Web/HTML"},{"name":"Css3","imgName":"Css3","url":"//developer.mozilla.org/zh-CN/docs/Web/CSS"},{"name":"AntDesign","imgName":"AntDesign","url":"//ant.design"},{"name":"Element","imgName":"Element","url":"//element.eleme.cn"},{"name":"BootStrap","imgName":"BootStrap","url":"//getbootstrap.com","show":true},{"name":"Php","imgName":"Php","url":"//php.net"},{"name":"MySQL","imgName":"Mysql","url":"//mysql.com"},{"name":"ThinkPhp","imgName":"ThinkPhp","url":"//thinkphp.cn"}]},{"title":"DevOps","type":"tool","data":[{"name":"WebPack","imgName":"WebPack","url":"//webpack.js.org"},{"name":"Gulp","imgName":"Gulp","url":"//gulpjs.com"},{"name":"Git","imgName":"Git","url":"//git-scm.com"},{"name":"Babel","imgName":"Babel","url":"//babeljs.io"},{"name":"Npm","imgName":"Npm","url":"//www.npmjs.com"},{"name":"Yarn","imgName":"Yarn","url":"//yarnpkg.com"},{"name":"Docker","imgName":"Docker","url":"//www.docker.com"},{"name":"Composer","imgName":"Composer","url":"//getcomposer.org"}]},{"title":"Utilities","type":"tool","data":[{"name":"Postman","imgName":"Postman","url":"//www.getpostman.com"},{"name":"Charles","imgName":"Charles","url":"//www.charlesproxy.com"},{"name":"Stack Overflow","imgName":"StackOverflow","url":"//stackoverflow.com"},{"name":"GitHub Pages","imgName":"GithubPages","url":"//pages.github.com"},{"name":"Visual Studio Code","imgName":"Vscode","url":"//code.visualstudio.com"},{"name":"PhpStorm","imgName":"PhpStorm","url":"//www.jetbrains.com/phpstorm"},{"name":"Navicat","imgName":"Navicat","url":"//www.navicat.com"},{"name":"Mamp","imgName":"Mamp","url":"//www.mamp.info"},{"name":"Markdown","imgName":"Markdown","url":"//wowubuntu.com/markdown"},{"name":"PhotoShop","imgName":"PhotoShop","url":"//www.adobe.com"},{"name":"Illustrator","imgName":"Illustrator","url":"//www.adobe.com"},{"name":"CorelDraw","imgName":"CorelDraw","url":"//www.coreldraw.com"}]}]')},Seim:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,o,n){n=n||!1,e.addEventListener?e.addEventListener(t,o,n):e.attachEvent&&e.attachEvent("on"+t,(function(t){o.call(e,t||window.event)}))},t.off=function(e,t,o,n){n=n||!1,e.removeEventListener?e.removeEventListener(t,o,n):e.detachEvent&&e.detachEvent("on"+t,o)}},jiQw:function(e){e.exports=JSON.parse('[{"enterprise":"\u91cd\u5e86\u5076\u9ea6\u79d1\u6280\u6709\u9650\u516c\u53f8","links":"http://www.ooumay.com/","duties":"\u524d\u7aef\u5f00\u53d1\u5de5\u7a0b\u5e08","time":"2019-11","logoName":"omkj","details":"1. \u57fa\u4e8eReact+TypeScript+Antd+Dva\u6784\u5efa\u9879\u76ee\uff0c\u5f00\u53d1\u7763\u67e5\u3001\u4efb\u52a1\u7ba1\u7406\u4fe1\u606f\u7cfb\u7edf\uff0c\u9002\u914d\u5404\u7ec8\u7aef\u5e94\u7528\u3002<br>2. \u8d1f\u8d23\u7763\u67e5\u6838\u5fc3\u68c0\u67e5\u6d41\u7a0b\u5404\u73af\u8282\u9875\u9762\u3001\u4efb\u52a1\u7ba1\u7406\u4e3b\u6d41\u7a0b\u76f8\u5173\u529f\u80fd\u7684\u5f00\u53d1\u3002<br>3. \u63a8\u52a8\u5728\u9879\u76ee\u4e2d\u8fdb\u884c\u6a21\u5757\u5316\u5f00\u53d1\uff0c\u964d\u4f4e\u4e1a\u52a1\u4ee3\u7801\u590d\u6742\u5ea6\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002\u89e3\u51b3\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u95ee\u9898\u548c\u65e5\u5e38Bug\u3002<br>4. \u5206\u6790\u4e1a\u52a1\u9700\u6c42\uff0c\u540c\u56e2\u961f\u76f8\u4e92\u6c9f\u901a\uff0c\u5408\u4f5c\u5f00\u53d1\uff0c\u540c\u65f6\u7ed9\u4ea7\u54c1\u4ea4\u4e92\u4f53\u9a8c\u63d0\u51fa\u5408\u9002\u7684\u5efa\u8bae\u3002<br>5. \u5b8c\u6210\u9879\u76ee\u4ece\u96f6\u642d\u5efa\u5230\u987a\u5229\u4e0a\u7ebf\u5e76\u4f7f\u7528\uff0c\u53ca\u65f6\u5904\u7406\u5ba2\u6237\u63d0\u51fa\u7684\u529f\u80fd\u9700\u6c42\u548c\u95ee\u9898\uff0c\u987a\u5229\u548c\u4e2d\u77f3\u6cb9(\u5206\u516c\u53f8)\u3001\u6c47\u4e30\u77f3\u5316\u7b7e\u4e0b\u5408\u540c\u3002","project":"\u91cd\u6784"},{"enterprise":"\u91cd\u5e86\u4e00\u6210\u98de\u5ba2\u6709\u9650\u516c\u53f8","links":"http://www.canqu.com.cn/","duties":"c#\u540e\u7aef\u517c\u524d\u7aef\u5f00\u53d1\u5de5\u7a0b\u5e08","time":"2020-06","logoName":"ycfk","details":"1. \u8d1f\u8d23\u8001\u53f8\u673a\u51fa\u884c\u65b0\u7248\u5b98\u7f51\u5f00\u53d1\uff0c\u91c7\u7528Vue+Nuxt+ElementUi SSR\u76f4\u51fa\u6a21\u5f0f\uff0c\u6709\u5229\u4e8e\u89e3\u51b3\u5355\u9875SPA SEO\u7f3a\u9677\u7684\u95ee\u9898\u3002<br>2. \u516c\u53f8OA\u7cfb\u7edf\u524d\u7aef\u6574\u7ad9\u5f00\u53d1\uff0c\u901a\u8fc7\u9489\u9489APP\u7aef\u626b\u7801\u767b\u5165\u4f01\u4e1a\u529e\u516c\u7cfb\u7edf\uff0c\u5458\u5de5\u64cd\u4f5c\u4e0d\u540c\u6743\u9650\u5c55\u793a\uff0c\u4e0a\u4f20\u6587\u6863\u3001\u56fe\u7247\u81f3\u963f\u91cc\u4e91oss\u5b58\u50a8\uff0c\u589e\u5f3a\u5b89\u5168\u6027\uff0c\u63d0\u5347\u7f51\u7ad9\u54cd\u5e94\u901f\u5ea6\uff0c\u6dfb\u52a0\u524d\u53f0\u7f16\u8f91\u5668\u529f\u80fd\u53d1\u5e03\u6d88\u606f\u540c\u6b65\u5230\u9489\u9489\u3002<br>3. \u540c\u8bbe\u8ba1\u5e08\uff0c\u540e\u7aef\u5408\u4f5c\uff0c\u9ad8\u8d28\u91cf\u7684\u5b8c\u6210\u9875\u9762\u7684\u5b9e\u73b0\u5de5\u4f5c\uff0c\u5229\u7528\u524d\u6cbf\u6280\u672f\u63d0\u9ad8\u7f16\u7801\u6548\u7387\uff0c\u7f29\u77ed\u9879\u76ee\u7684\u5f00\u53d1\u5468\u671f\u3002<br>4. \u642d\u5efa\u6280\u672f\u6846\u67b6\uff0c\u4f7f\u7528Git\u8fdb\u884c\u7248\u672c\u63a7\u5236\u548c\u8fed\u4ee3\uff0c\u524d\u540e\u5206\u79bb\u67b6\u6784\uff0c\u7ec4\u4ef6\u5316\u6765\u63d0\u9ad8\u590d\u7528\u548c\u53ef\u7ef4\u62a4\u6027\u3002","project":"\u7269\u6d41\u7ba1\u7406\u7cfb\u7edf"}]')},tvXG:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,o=/(scroll|auto)/,n=e;n;){if(!n.parentNode)return e.ownerDocument||document.documentElement;var a=window.getComputedStyle(n),r=a.position,i=a.overflow,s=a["overflow-x"],c=a["overflow-y"];if("static"===r&&t)n=n.parentNode;else{if(o.test(i)&&o.test(s)&&o.test(c))return n;n=n.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},uUxy:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o){var n,a;return t||(t=250),function(){var r=o||this,i=+new Date,s=arguments;n&&i<n+t?(clearTimeout(a),a=setTimeout((function(){n=i,e.apply(r,s)}),t)):(n=i,e.apply(r,s))}}}}]);