module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		8: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "2yP/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ PageTitle; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Banner; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ SvgIcon; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ Modal; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ Loading; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ Switch; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ LoadBackgroundImage; });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/components/common/PageTitle.tsx

var __jsx = external_react_default.a.createElement;

const PageTitle = ({
  zhName,
  enName
}) => {
  return __jsx("div", {
    className: "jsx-4071316007" + " " + "tac"
  }, __jsx(style_default.a, {
    id: "4071316007"
  }, ["div.jsx-4071316007{padding:2% 0;}", "h1.jsx-4071316007::after{position:absolute;bottom:-18px;left:0;content:'';display:inline-block;width:100%;border-bottom:1px dotted var(--color-default-gray);}", "h2.jsx-4071316007{text-transform:capitalize;}"]), __jsx("h1", {
    className: "jsx-4071316007" + " " + "pos-rel font-weight-normal inline-block"
  }, zhName), __jsx("h2", {
    className: "jsx-4071316007" + " " + "font-weight-normal font-family-niconne font-size-xl"
  }, enName));
};
// EXTERNAL MODULE: external "throttle-debounce"
var external_throttle_debounce_ = __webpack_require__("gx/+");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: ./src/assets/styles/sass/page/home.module.scss
var home_module = __webpack_require__("Wax4");
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);

// EXTERNAL MODULE: ./src/components/hooks/index.ts
var hooks = __webpack_require__("LUSG");

// EXTERNAL MODULE: ./src/scripts/helper.ts
var helper = __webpack_require__("WuuV");

// EXTERNAL MODULE: ./src/scripts/utils/index.ts
var utils = __webpack_require__("kIc0");

// EXTERNAL MODULE: ./src/scripts/constant/index.ts
var constant = __webpack_require__("hM3L");

// CONCATENATED MODULE: ./src/components/common/Banner.tsx

var Banner_jsx = external_react_default.a.createElement;








const ReactShareComponents = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "U8xp", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("U8xp")],
    modules: ['react-share-components']
  }
});
const {
  header_wrapper
} = home_module_default.a;
const intervalTime = 0.2;

const RenderFontBeat = ({
  children = ''
}) => {
  const {
    0: splitContent,
    1: setSplitContent
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    const list = children.split('');
    setSplitContent(list);
  }, [children]);
  return Banner_jsx(external_react_default.a.Fragment, null, splitContent.map((item, index) => Banner_jsx("span", {
    style: {
      animationDelay: `${index * intervalTime}s`
    },
    className: "beat",
    key: index
  }, item)));
};

const Banner = ({
  isShowBtnDown,
  isFullHeight,
  className = ''
}) => {
  const {
    0: height,
    1: setHeight
  } = Object(external_react_["useState"])(isFullHeight ? 0 : 400);
  const handleBannerHeight = Object(external_react_["useCallback"])(Object(external_throttle_debounce_["throttle"])(constant["h" /* DELAY_TIME */], () => {
    if (!isFullHeight) return;
    const {
      height
    } = Object(helper["a" /* getWindowWidthHeight */])();
    setHeight(height);
  }), []);
  Object(external_react_["useEffect"])(() => {
    handleBannerHeight();
  }, []);
  Object(hooks["a" /* useEventListener */])('resize', handleBannerHeight);
  return Banner_jsx("header", {
    style: {
      height
    },
    className: `${header_wrapper} ${className}`
  }, Banner_jsx("div", {
    className: "pos-rel tac w-h-100"
  }, Banner_jsx("div", {
    className: "banner pos-rel z-1 w-h-100"
  }, Banner_jsx("div", {
    className: "banner-content color-white"
  }, Banner_jsx("h2", {
    className: "font-weight-normal"
  }, Banner_jsx(RenderFontBeat, null, "\u5C0F\u674E\u98DE\u6F02")), Banner_jsx("div", null, Banner_jsx("h3", {
    className: "font-weight-normal"
  }, Banner_jsx(RenderFontBeat, null, "\u6211\u53EB\u6C5F\u5C0F\u767D\uFF0C\u751F\u6D3B\u5F88\u7B80\u5355 ^_^\uFF01")), Banner_jsx(ReactShareComponents, {
    sites: ['qq', 'wechat', 'google', 'weibo', 'qzone', 'douban']
  })))), Banner_jsx("div", {
    className: "banner-background pos-abs t-0 w-h-100"
  }), isShowBtnDown && Banner_jsx("button", {
    onClick: () => Object(utils["i" /* scrollToFixedLocate */])(),
    className: "btn-down pos-rel z-1"
  }, Banner_jsx("span", null))));
};
// EXTERNAL MODULE: external "util"
var external_util_ = __webpack_require__("jK02");

// EXTERNAL MODULE: external "rc-dialog"
var external_rc_dialog_ = __webpack_require__("ZeM7");
var external_rc_dialog_default = /*#__PURE__*/__webpack_require__.n(external_rc_dialog_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./src/assets/fonts/svg/shared/close.svg
var shared_close = __webpack_require__("Bh/k");

// CONCATENATED MODULE: ./src/components/common/GlobalWidget.tsx

var GlobalWidget_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const setAttrUnit = val => Object(external_util_["isNumber"])(val) ? `${val}em` : val;

const SvgIconSizeValues = {
  large: 2,
  default: 1.2,
  small: 0.8
};
const SvgIcon = (_ref) => {
  let {
    width,
    height,
    component: SvgComponent,
    className,
    size = 'default'
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["width", "height", "component", "className", "size"]);

  width = width || SvgIconSizeValues[size];
  height = height || SvgIconSizeValues[size];
  return GlobalWidget_jsx(SvgComponent, _objectSpread({}, rest, {
    width: setAttrUnit(width),
    height: setAttrUnit(height),
    className: `vam${className ? ` ${className}` : ''}`
  }));
};
const Modal = (_ref2) => {
  let {
    children
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["children"]);

  return GlobalWidget_jsx(external_rc_dialog_default.a, _extends({
    closeIcon: GlobalWidget_jsx(SvgIcon, {
      size: "large",
      component: shared_close["a" /* ReactComponent */]
    })
  }, rest), children);
};
const Loading = ({
  className = ''
}) => GlobalWidget_jsx("div", {
  className: `line-scale ${className}`
}, GlobalWidget_jsx("div", null), GlobalWidget_jsx("div", null), GlobalWidget_jsx("div", null), GlobalWidget_jsx("div", null), GlobalWidget_jsx("div", null));
const Switch = ({
  checkedChildren,
  checked: initChecked = false,
  uncheckedChildren,
  onChange,
  className = '',
  style = {}
}) => {
  const keepData = Object(external_react_["useRef"])({
    checked: initChecked
  });
  const {
    0: checked,
    1: setChecked
  } = Object(external_react_["useState"])(initChecked);

  const onSwitch = e => {
    const isChecked = !checked;
    setChecked(isChecked);
    keepData.current.checked = isChecked;
    onChange && onChange(isChecked, e);
  };

  Object(external_react_["useEffect"])(() => {
    if (!Object.is(keepData.current.checked, initChecked)) {
      setChecked(initChecked);
    }
  }, [initChecked]);
  return GlobalWidget_jsx("button", {
    style: style,
    onClick: onSwitch,
    className: external_classnames_default()(`switch${className ? ` ${className}` : ''}`, {
      checked
    })
  }, GlobalWidget_jsx("span", {
    className: "content"
  }, checked ? checkedChildren : uncheckedChildren), GlobalWidget_jsx("span", {
    className: "round"
  }));
};
const LoadBackgroundImage = ({
  src,
  placeholder = 'https://dummyimage.com/64x64/eee/eee',
  style,
  className = ''
}) => {
  const loaded = Object(hooks["c" /* useProgressiveImage */])(src);
  return GlobalWidget_jsx("div", {
    className: className,
    style: _objectSpread({
      backgroundImage: `url(${loaded || placeholder})`
    }, style)
  });
};
// CONCATENATED MODULE: ./src/components/common/index.tsx




/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Q3IO");


/***/ }),

/***/ "8feY":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAIAAADRv8uKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTAzQjBCRjNBMUIwMTFFNkI5RTk5QzgzQTFDOEIxMjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTAzQjBCRjRBMUIwMTFFNkI5RTk5QzgzQTFDOEIxMjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMDNCMEJGMUExQjAxMUU2QjlFOTlDODNBMUM4QjEyOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMDNCMEJGMkExQjAxMUU2QjlFOTlDODNBMUM4QjEyOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj4pFCQAAAGlSURBVHja7NVZksIwDARQPIRtWAvuf0Qo9iVAmJdoKifwVM1H/OHIcsvVaUtWer/ft9vtqxllWfb7/aIo7vf7dDrt9Xqv18uyNVJKucBpv99PJhNrDObzefDgMVdVtV6vAeBWq9VutxOcC5xsfD6f1AyGMDMQ1jzIAnGGMRqNsoH9vjUog1dAhI3HY+xsfTeDYZkRnGhCh+v1+nw+F4uFmQY8p9NJ2GazadXbbrcic4GLwWDg4z7MRGjtUAzUzA4jIzghQgcu68fjYWbzDIdDBr6z2YzzfD7TkFC5wIUfXy6XNjAQJu/FU4ZfCthyihg1cDgc8M0FrsuubEbcQaRAJAWPMBzhaFXXQEq5wLXUCqvVysVIOU4ITlv8UQ+WTswFTlwBDY5RjgHlVIvx+rgzhuBc4OavUyIRg+wMikXhQ0RqREI6KyO4ltoHWXQul0sI4mKi6u0GcXY8v7nAv+941YxeM+qUKwpLYV6ZSAcDMk7JAv6K+0dEliPFezweo5/YxlGO+BUYy4zg1LXFri12bbFri/+/Lcpt+ndtsWuLf98WfwQYABPmF8TwyKK/AAAAAElFTkSuQmCC"

/***/ }),

/***/ "Ac47":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ LayoutMain; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/context/index.tsx
var context = __webpack_require__("TlUl");

// EXTERNAL MODULE: external "throttle-debounce"
var external_throttle_debounce_ = __webpack_require__("gx/+");

// EXTERNAL MODULE: ./src/assets/styles/sass/frame/layout.module.scss
var layout_module = __webpack_require__("RaQM");
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);

// EXTERNAL MODULE: ./src/components/common/index.tsx + 3 modules
var common = __webpack_require__("2yP/");

// CONCATENATED MODULE: ./src/assets/fonts/svg/side-operate/home.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/external_react_["createElement"]("defs", null, /*#__PURE__*/external_react_["createElement"]("style", null));

var _ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M947 484.1L530.7 75.9c-12.6-12.4-32.8-12.3-45.3.2L73.5 488c-13.4 13.4-13.2 35.1.3 48.3l23.9 23.3c13.3 13 34.5 12.9 47.7-.2l343-341.4c10.8-10.7 28.2-10.7 39 0l343.2 341.6c13.1 13 34.1 13.2 47.4.5l28.6-27.3c14-13.1 14.1-35.2.4-48.7zM814.3 101.6c0-13.5-10.9-24.4-24.4-24.4H701c-13.5 0-24.4 10.9-24.4 24.4v49.9l137.8 137.8V101.6z",
  fill: "currentColor"
});

var _ref3 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M492.4 280.4l-343.5 339v305.1c0 19.7 16 35.7 35.7 35.7h167.9c19.7 0 35.7-16 35.7-35.7V678.1c0-10.4 8.5-18.9 18.9-18.9h203.3c10.4 0 18.9 8.5 18.9 18.9v246.3c0 19.7 16 35.7 35.7 35.7h166c19.7 0 35.7-16 35.7-35.7V619.3l-338.1-339c-9.8-10-26.1-10-36.2.1z",
  fill: "currentColor"
});

function SvgHome(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", _extends({
    className: "home_svg__icon",
    viewBox: "0 0 1024 1024",
    width: 32,
    height: 32
  }, props), _ref, _ref2, _ref3);
}

/* harmony default export */ var home = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg4OTUyNzA5MjY2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyMTMiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk0NyA0ODQuMUw1MzAuNyA3NS45Yy0xMi42LTEyLjQtMzIuOC0xMi4zLTQ1LjMgMC4yTDczLjUgNDg4Yy0xMy40IDEzLjQtMTMuMiAzNS4xIDAuMyA0OC4zbDIzLjkgMjMuM2MxMy4zIDEzIDM0LjUgMTIuOSA0Ny43LTAuMmwzNDMtMzQxLjRjMTAuOC0xMC43IDI4LjItMTAuNyAzOSAwbDM0My4yIDM0MS42YzEzLjEgMTMgMzQuMSAxMy4yIDQ3LjQgMC41bDI4LjYtMjcuM2MxNC0xMy4xIDE0LjEtMzUuMiAwLjQtNDguN3pNODE0LjMgMTAxLjZjMC0xMy41LTEwLjktMjQuNC0yNC40LTI0LjRINzAxYy0xMy41IDAtMjQuNCAxMC45LTI0LjQgMjQuNHY0OS45bDEzNy44IDEzNy44VjEwMS42eiIgZmlsbD0iY3VycmVudENvbG9yIiBwLWlkPSIyMjE0Ij48L3BhdGg+PHBhdGggZD0iTTQ5Mi40IDI4MC40bC0zNDMuNSAzMzl2MzA1LjFjMCAxOS43IDE2IDM1LjcgMzUuNyAzNS43aDE2Ny45YzE5LjcgMCAzNS43LTE2IDM1LjctMzUuN1Y2NzguMWMwLTEwLjQgOC41LTE4LjkgMTguOS0xOC45aDIwMy4zYzEwLjQgMCAxOC45IDguNSAxOC45IDE4Ljl2MjQ2LjNjMCAxOS43IDE2IDM1LjcgMzUuNyAzNS43aDE2NmMxOS43IDAgMzUuNy0xNiAzNS43LTM1LjdWNjE5LjNsLTMzOC4xLTMzOWMtOS44LTEwLTI2LjEtMTAtMzYuMiAwLjF6IiBmaWxsPSJjdXJyZW50Q29sb3IiIHAtaWQ9IjIyMTUiPjwvcGF0aD48L3N2Zz4NCg==");

// CONCATENATED MODULE: ./src/assets/fonts/svg/side-operate/qrcode.svg
function qrcode_extends() { qrcode_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return qrcode_extends.apply(this, arguments); }



var qrcode_ref = /*#__PURE__*/external_react_["createElement"]("defs", null, /*#__PURE__*/external_react_["createElement"]("style", null));

var qrcode_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M178.3 540.9v-60.3H118v60.3h60.3zm20 284.1h121.3V702.4H198.3V825zm343.1-545.2h-60.7v60.1h60.7v-60.1zm-221.7-81.1H198.3v122.6h121.3V198.7zm362.4 423.4h-60.2v60.1h181v-60.1h-60v-60.9h-60.7v60.9zM541.4 117.8h-60.7V239h60.7V117.8zm-.3 463.9h60.7v-59.8h60.4v-61.4h-60.7v60.4h-60.4v60.8zm201.8 201.5V723h-60.7v60.1h60.7zm60.4-282.4h-60.7v60.1h60.7v-60.1zM420.1 98.2H97.7V420h322.4V98.2zM380.2 380H138.3V138.8h241.9V380zm463.1 160.8H904v-58.9h-60.7v58.9zm0 302.5h-40v-59.8h-60.7v59.8h-60.5v61.4H904v-59.2h.1V722.4h-60.7v120.9zm0-161.5H904v-60.1h-60.7v60.1zm-19.9-483.1H702v122.6h121.3V198.7zM601.7 98.2V420h322.4V98.2H601.7zM883.6 380H641.7V138.8h241.9V380zM541.4 722.1h60.4v-58.9h-60.4v-81.4h-60.7v321.4h60.4v.8h60.7v-60.1h-60.4V722.1zM238.9 541.6h201.7v-61H238.9v61zm302.5-161.3h-61v60.1h61v-60.1zM601.5 843h60.7v-60.1h-60.7V843zM97.6 924.1H420V602.3H97.6v321.8zm40.7-281.2h241.9v241.2H138.3V642.9z",
  fill: "currentColor"
});

function SvgQrcode(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", qrcode_extends({
    className: "qrcode_svg__icon",
    viewBox: "0 0 1024 1024",
    width: 48,
    height: 48
  }, props), qrcode_ref, qrcode_ref2);
}

/* harmony default export */ var qrcode = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg5MDM3NTY4ODIxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyMjYiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE3OC4zIDU0MC45di02MC4zSDExOHY2MC4zaDYwLjN6IG0yMCAyODQuMWgxMjEuM1Y3MDIuNEgxOTguM1Y4MjV6IG0zNDMuMS01NDUuMmgtNjAuN3Y2MC4xaDYwLjd2LTYwLjF6IG0tMjIxLjctODEuMUgxOTguM3YxMjIuNmgxMjEuM1YxOTguN3ogbTM2Mi40IDQyMy40aC02MC4ydjYwLjFoMTgxdi02MC4xaC02MHYtNjAuOWgtNjAuN3Y2MC45ek01NDEuNCAxMTcuOGgtNjAuN1YyMzloNjAuN1YxMTcuOHogbS0wLjMgNDYzLjloNjAuN3YtNTkuOGg2MC40di02MS40aC02MC43djYwLjRoLTYwLjR2NjAuOHogbTIwMS44IDIwMS41VjcyM2gtNjAuN3Y2MC4xaDYwLjd6IG02MC40LTI4Mi40aC02MC43djYwLjFoNjAuN3YtNjAuMXpNNDIwLjEgOTguMkg5Ny43VjQyMGgzMjIuNFY5OC4yek0zODAuMiAzODBIMTM4LjNWMTM4LjhoMjQxLjlWMzgweiBtNDYzLjEgMTYwLjhIOTA0di01OC45aC02MC43djU4Ljl6IG0wIDMwMi41aC00MHYtNTkuOGgtNjAuN3Y1OS44aC02MC41djYxLjRIOTA0di01OS4yaDAuMVY3MjIuNGgtNjAuN3YxMjAuOXogbTAtMTYxLjVIOTA0di02MC4xaC02MC43djYwLjF6IG0tMTkuOS00ODMuMUg3MDJ2MTIyLjZoMTIxLjNWMTk4Ljd6TTYwMS43IDk4LjJWNDIwaDMyMi40Vjk4LjJINjAxLjd6TTg4My42IDM4MEg2NDEuN1YxMzguOGgyNDEuOVYzODB6TTU0MS40IDcyMi4xaDYwLjR2LTU4LjloLTYwLjR2LTgxLjRoLTYwLjd2MzIxLjRoNjAuNHYwLjhoNjAuN3YtNjAuMWgtNjAuNFY3MjIuMXpNMjM4LjkgNTQxLjZoMjAxLjd2LTYxSDIzOC45djYxeiBtMzAyLjUtMTYxLjNoLTYxdjYwLjFoNjF2LTYwLjF6TTYwMS41IDg0M2g2MC43di02MC4xaC02MC43Vjg0M3pNOTcuNiA5MjQuMUg0MjBWNjAyLjNIOTcuNnYzMjEuOHogbTQwLjctMjgxLjJoMjQxLjl2MjQxLjJIMTM4LjNWNjQyLjl6IiBmaWxsPSJjdXJyZW50Q29sb3IiIHAtaWQ9IjIyMjciPjwvcGF0aD48L3N2Zz4NCg==");

// CONCATENATED MODULE: ./src/assets/fonts/svg/side-operate/angle-up.svg
function angle_up_extends() { angle_up_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return angle_up_extends.apply(this, arguments); }



var angle_up_ref = /*#__PURE__*/external_react_["createElement"]("defs", null, /*#__PURE__*/external_react_["createElement"]("style", null));

var angle_up_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M526.848 202.24c-4.096-4.096-9.216-6.144-14.848-6.144s-11.264 2.048-14.848 6.144L342.016 356.864c-8.192 8.192-8.192 21.504 0 30.208 8.192 8.192 21.504 8.192 30.208 0L512 247.296l139.776 139.776c4.096 4.096 9.728 6.144 14.848 6.144 5.632 0 10.752-2.048 14.848-6.144 8.192-8.192 8.192-21.504 0-30.208L526.848 202.24zM116.224 595.968h90.624v231.936h42.496V595.968h90.624v-42.496H115.712v42.496zm458.24-42.496h-112.64c-13.824 0-27.136 5.12-37.376 15.36s-15.36 24.064-15.36 37.376v168.448c0 13.824 5.12 27.136 15.36 37.376s24.064 15.36 37.376 15.36h112.64c13.824 0 27.136-5.12 37.376-15.36s15.36-24.064 15.36-37.376V606.208c0-13.824-5.12-27.136-15.36-37.376s-23.552-15.36-37.376-15.36zm10.752 221.696c0 2.048-.512 5.12-3.072 7.68s-5.632 3.072-7.68 3.072h-112.64c-2.048 0-5.12-.512-7.68-3.072s-3.072-5.632-3.072-7.68V606.72c0-2.048.512-5.12 3.072-7.68s5.632-3.072 7.68-3.072h112.64c2.048 0 5.12.512 7.68 3.072s3.072 5.632 3.072 7.68v168.448zm307.2-205.824c-10.24-10.24-24.064-15.36-37.376-15.36H709.632v274.432h42.496v-120.32H855.04c13.824 0 27.136-5.12 37.376-15.36s15.36-24.064 15.36-37.376v-48.128c0-14.336-5.12-27.648-15.36-37.888zm-27.136 84.992c0 2.048-.512 5.12-3.072 7.68s-5.632 3.072-7.68 3.072H751.104v-69.12H855.04c2.048 0 5.12.512 7.68 3.072s3.072 5.632 3.072 7.68v47.616h-.512z",
  fill: "currentColor"
});

function SvgAngleUp(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", angle_up_extends({
    className: "angle-up_svg__icon",
    viewBox: "0 0 1024 1024",
    width: 48,
    height: 48
  }, props), angle_up_ref, angle_up_ref2);
}

/* harmony default export */ var angle_up = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg5MDM4MTIxNjA5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUyMDkiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUyNi44NDggMjAyLjI0Yy00LjA5Ni00LjA5Ni05LjIxNi02LjE0NC0xNC44NDgtNi4xNDRzLTExLjI2NCAyLjA0OC0xNC44NDggNi4xNDRMMzQyLjAxNiAzNTYuODY0Yy04LjE5MiA4LjE5Mi04LjE5MiAyMS41MDQgMCAzMC4yMDggOC4xOTIgOC4xOTIgMjEuNTA0IDguMTkyIDMwLjIwOCAwTDUxMiAyNDcuMjk2bDEzOS43NzYgMTM5Ljc3NmM0LjA5NiA0LjA5NiA5LjcyOCA2LjE0NCAxNC44NDggNi4xNDQgNS42MzIgMCAxMC43NTItMi4wNDggMTQuODQ4LTYuMTQ0IDguMTkyLTguMTkyIDguMTkyLTIxLjUwNCAwLTMwLjIwOEw1MjYuODQ4IDIwMi4yNHpNMTE2LjIyNCA1OTUuOTY4aDkwLjYyNHYyMzEuOTM2aDQyLjQ5NlY1OTUuOTY4aDkwLjYyNHYtNDIuNDk2SDExNS43MTJ2NDIuNDk2eiBtNDU4LjI0LTQyLjQ5NmgtMTEyLjY0Yy0xMy44MjQgMC0yNy4xMzYgNS4xMi0zNy4zNzYgMTUuMzZzLTE1LjM2IDI0LjA2NC0xNS4zNiAzNy4zNzZ2MTY4LjQ0OGMwIDEzLjgyNCA1LjEyIDI3LjEzNiAxNS4zNiAzNy4zNzZzMjQuMDY0IDE1LjM2IDM3LjM3NiAxNS4zNmgxMTIuNjRjMTMuODI0IDAgMjcuMTM2LTUuMTIgMzcuMzc2LTE1LjM2czE1LjM2LTI0LjA2NCAxNS4zNi0zNy4zNzZWNjA2LjIwOGMwLTEzLjgyNC01LjEyLTI3LjEzNi0xNS4zNi0zNy4zNzZzLTIzLjU1Mi0xNS4zNi0zNy4zNzYtMTUuMzZ6IG0xMC43NTIgMjIxLjY5NmMwIDIuMDQ4LTAuNTEyIDUuMTItMy4wNzIgNy42OHMtNS42MzIgMy4wNzItNy42OCAzLjA3MmgtMTEyLjY0Yy0yLjA0OCAwLTUuMTItMC41MTItNy42OC0zLjA3MnMtMy4wNzItNS42MzItMy4wNzItNy42OFY2MDYuNzJjMC0yLjA0OCAwLjUxMi01LjEyIDMuMDcyLTcuNjhzNS42MzItMy4wNzIgNy42OC0zLjA3MmgxMTIuNjRjMi4wNDggMCA1LjEyIDAuNTEyIDcuNjggMy4wNzJzMy4wNzIgNS42MzIgMy4wNzIgNy42OHYxNjguNDQ4eiBtMzA3LjItMjA1LjgyNGMtMTAuMjQtMTAuMjQtMjQuMDY0LTE1LjM2LTM3LjM3Ni0xNS4zNkg3MDkuNjMydjI3NC40MzJoNDIuNDk2di0xMjAuMzJIODU1LjA0YzEzLjgyNCAwIDI3LjEzNi01LjEyIDM3LjM3Ni0xNS4zNnMxNS4zNi0yNC4wNjQgMTUuMzYtMzcuMzc2di00OC4xMjhjMC0xNC4zMzYtNS4xMi0yNy42NDgtMTUuMzYtMzcuODg4eiBtLTI3LjEzNiA4NC45OTJjMCAyLjA0OC0wLjUxMiA1LjEyLTMuMDcyIDcuNjhzLTUuNjMyIDMuMDcyLTcuNjggMy4wNzJINzUxLjEwNHYtNjkuMTJIODU1LjA0YzIuMDQ4IDAgNS4xMiAwLjUxMiA3LjY4IDMuMDcyczMuMDcyIDUuNjMyIDMuMDcyIDcuNjh2NDcuNjE2aC0wLjUxMnoiIGZpbGw9ImN1cnJlbnRDb2xvciIgcC1pZD0iNTIxMCI+PC9wYXRoPjwvc3ZnPg0K");

// EXTERNAL MODULE: ./src/scripts/utils/index.ts
var utils = __webpack_require__("kIc0");

// EXTERNAL MODULE: ./src/scripts/constant/index.ts
var constant = __webpack_require__("hM3L");

// EXTERNAL MODULE: ./src/components/hooks/index.ts
var hooks = __webpack_require__("LUSG");

// CONCATENATED MODULE: ./src/components/layout/Footer.tsx

var __jsx = external_react_default.a.createElement;











const {
  side_fixed_operate,
  footer
} = layout_module_default.a;
const DEFAULT_SCROLL_HEIGHT = 150;
const currentYear = new Date().getFullYear();

const SideOperate = () => {
  const {
    0: visible,
    1: setVisible
  } = Object(external_react_["useState"])(false);
  const handleScrollHeight = Object(external_react_["useCallback"])(Object(external_throttle_debounce_["throttle"])(constant["h" /* DELAY_TIME */], () => {
    const elHtml = document.querySelector('html');
    const scrollTop = elHtml.scrollTop;

    if (scrollTop > DEFAULT_SCROLL_HEIGHT) {
      return !visible && setVisible(true);
    }

    visible && setVisible(false);
  }), [visible]);
  Object(external_react_["useEffect"])(() => {
    handleScrollHeight();
  }, []);
  Object(hooks["a" /* useEventListener */])('scroll', handleScrollHeight);
  return __jsx("div", {
    className: `pos-fix z-2 ${side_fixed_operate}`
  }, __jsx("ul", {
    className: "r-m-p"
  }, __jsx("li", null, __jsx("a", {
    href: "/",
    title: "\u8FD4\u56DE\u9996\u9875"
  }, __jsx("span", {
    className: "operate-icon"
  }, __jsx(common["f" /* SvgIcon */], {
    size: "large",
    component: SvgHome
  })), __jsx("span", {
    className: "operate-text"
  }, "\u8FD4\u56DE\u9996\u9875"))), __jsx("li", {
    title: "\u626B\u4E00\u626B"
  }, __jsx("span", {
    className: "operate-icon"
  }, __jsx(common["f" /* SvgIcon */], {
    size: "large",
    component: SvgQrcode
  })), __jsx("span", {
    className: "qr-code font-size-xs operate-text"
  }, __jsx("img", {
    className: "vam",
    src: __webpack_require__("p21V")
  }), __jsx("em", null, "\u624B\u673A\u6216iPad\u6D4F\u89C8"))), __jsx("li", {
    onClick: () => {
      Object(utils["i" /* scrollToFixedLocate */])(0);
    },
    title: "\u8FD4\u56DE\u9876\u90E8",
    style: {
      display: visible ? 'table' : 'none'
    }
  }, __jsx("span", {
    className: "operate-icon"
  }, __jsx(common["f" /* SvgIcon */], {
    size: "large",
    component: SvgAngleUp
  })), __jsx("span", {
    className: "operate-text"
  }, "\u8FD4\u56DE\u9876\u90E8"))));
};

const Footer = () => {
  const {
    store
  } = Object(external_react_["useContext"])(context["a" /* CtxStore */]);
  const {
    bodyStyle
  } = store;
  return __jsx(external_react_default.a.Fragment, null, __jsx("footer", {
    style: bodyStyle,
    className: `w-100 l-b-0 tac bg-color-white pos-abs ${footer}`
  }, __jsx("h4", {
    className: "font-weight-normal"
  }, "Copyright \xA9", __jsx("span", null, "2019-", currentYear), " @xiaolifeipiao\u4E2A\u4EBA\u7248\u6743\u6240\u6709")), __jsx(SideOperate, null));
};

/* harmony default export */ var layout_Footer = (Footer);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./src/components/layout/NextHead.tsx

var NextHead_jsx = external_react_default.a.createElement;


const {
  name: NextHead_name,
  publicPath
} = utils["f" /* globalSelf */].g_config;

const NextHead = ({
  title = NextHead_name
}) => {
  return NextHead_jsx(head_default.a, null, NextHead_jsx("meta", {
    charSet: "utf-8"
  }), NextHead_jsx("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge"
  }), NextHead_jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no"
  }), NextHead_jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  }), NextHead_jsx("title", null, title), NextHead_jsx("meta", {
    name: "keywords",
    content: "\u5C0F\u674E\u98DE\u6F02,web\u524D\u7AEF,\u524D\u7AEF\u5DE5\u7A0B\u5E08,\u7B80\u5386,web\u524D\u7AEF\u4E2A\u4EBA\u7B80\u5386,\u524D\u7AEF\u5F00\u53D1,\u524D\u7AEF\u7B80\u5386,\u6700\u65B0\u7B80\u5386,\u524D\u7AEF\u535A\u5BA2,\u70ED\u524D\u7AEF,\u8BBE\u8BA1,FE,github,\u6C42\u804C,liuguanhua.github.io,lgh.vercel.app,liuguanhua,react,vue"
  }), NextHead_jsx("meta", {
    name: "description",
    content: "\u5BF9\u524D\u7AEF\u6709\u7740\u9AD8\u5EA6\u5173\u6CE8\u5E76\u75AF\u72C2\u70ED\u7231\u7684\u5F00\u53D1\u4EBA\u5458"
  }), NextHead_jsx("meta", {
    name: "author",
    content: "\u5C0F\u674E\u98DE\u6F02,\u524D\u7AEF,\u7B80\u5386"
  }), NextHead_jsx("meta", {
    name: "apple-mobile-web-app-capable",
    content: "yes"
  }), NextHead_jsx("link", {
    href: `${publicPath}static/css/bootstrap-grid.min.css`,
    rel: "stylesheet"
  }));
};

/* harmony default export */ var layout_NextHead = (NextHead);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "util"
var external_util_ = __webpack_require__("jK02");

// EXTERNAL MODULE: ./src/assets/styles/sass/frame/menus.module.scss
var menus_module = __webpack_require__("D0jQ");
var menus_module_default = /*#__PURE__*/__webpack_require__.n(menus_module);

// EXTERNAL MODULE: ./src/scripts/helper.ts
var helper = __webpack_require__("WuuV");

// EXTERNAL MODULE: ./src/assets/fonts/svg/menu/user.svg
var user = __webpack_require__("toyS");

// CONCATENATED MODULE: ./src/assets/fonts/svg/menu/works.svg
function works_extends() { works_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return works_extends.apply(this, arguments); }



var works_ref = /*#__PURE__*/external_react_["createElement"]("defs", null, /*#__PURE__*/external_react_["createElement"]("style", null));

var works_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M972.8 330.957v197.58H51.2v-197.58c0-22.528 8.038-42.035 24.064-58.061 16.128-16.128 35.482-24.064 58.06-24.064h181.044V166.4a47.104 47.104 0 0114.387-34.918 47.462 47.462 0 0134.919-14.336h296.294a47.104 47.104 0 0134.918 14.336 47.462 47.462 0 0114.388 34.918v82.432h180.992c22.528 0 42.035 8.192 58.06 24.064 16.487 16.026 24.525 35.328 24.525 58.06zm0 246.784V824.73c0 22.528-8.192 41.984-24.064 58.06-16.128 16.128-35.482 24.064-58.06 24.064H133.58A79.36 79.36 0 0175.52 882.79a79.206 79.206 0 01-24.218-58.06V577.74H396.8v82.33c0 8.91 3.226 16.59 9.78 23.194a31.437 31.437 0 0023.142 9.728h164.505a31.642 31.642 0 0023.194-9.728 31.437 31.437 0 009.779-23.194v-82.33h345.6zM380.416 248.576h263.27v-65.894h-263.27v65.894zm197.478 329.165v65.894H446.106v-65.894h131.788z",
  fill: "currentColor"
});

function SvgWorks(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", works_extends({
    className: "works_svg__icon",
    viewBox: "0 0 1024 1024",
    width: 48,
    height: 48
  }, props), works_ref, works_ref2);
}

/* harmony default export */ var works = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg5NjgwOTI3OTkwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExNTYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk3Mi44IDMzMC45NTY4djE5Ny41ODA4SDUxLjJWMzMwLjk1NjhjMC0yMi41MjggOC4wMzg0LTQyLjAzNTIgMjQuMDY0LTU4LjA2MDggMTYuMTI4LTE2LjEyOCAzNS40ODE2LTI0LjA2NCA1OC4wNjA4LTI0LjA2NEgzMTQuMzY4VjE2Ni40YTQ3LjEwNCA0Ny4xMDQgMCAwIDEgMTQuMzg3Mi0zNC45MTg0IDQ3LjQ2MjQgNDcuNDYyNCAwIDAgMSAzNC45MTg0LTE0LjMzNmgyOTYuMjk0NGE0Ny4xMDQgNDcuMTA0IDAgMCAxIDM0LjkxODQgMTQuMzM2IDQ3LjQ2MjQgNDcuNDYyNCAwIDAgMSAxNC4zODcyIDM0LjkxODRWMjQ4LjgzMmgxODAuOTkyYzIyLjUyOCAwIDQyLjAzNTIgOC4xOTIgNTguMDYwOCAyNC4wNjQgMTYuNDg2NCAxNi4wMjU2IDI0LjUyNDggMzUuMzI4IDI0LjUyNDggNTguMDYwOHogbTAgMjQ2Ljc4NHYyNDYuOTg4OGMwIDIyLjUyOC04LjE5MiA0MS45ODQtMjQuMDY0IDU4LjA2MDgtMTYuMTI4IDE2LjEyOC0zNS40ODE2IDI0LjA2NC01OC4wNjA4IDI0LjA2NEgxMzMuNTgwOGE3OS4zNiA3OS4zNiAwIDAgMS01OC4wNjA4LTI0LjA2NCA3OS4yMDY0IDc5LjIwNjQgMCAwIDEtMjQuMjE3Ni01OC4wNjA4di0yNDYuOTg4OEgzOTYuOHY4Mi4zMjk2YzAgOC45MDg4IDMuMjI1NiAxNi41ODg4IDkuNzc5MiAyMy4xOTM2YTMxLjQzNjggMzEuNDM2OCAwIDAgMCAyMy4xNDI0IDkuNzI4aDE2NC41MDU2YTMxLjY0MTYgMzEuNjQxNiAwIDAgMCAyMy4xOTM2LTkuNzI4IDMxLjQzNjggMzEuNDM2OCAwIDAgMCA5Ljc3OTItMjMuMTkzNnYtODIuMzI5Nkg5NzIuOHpNMzgwLjQxNiAyNDguNTc2aDI2My4yNzA0VjE4Mi42ODE2SDM4MC40MTZ2NjUuODk0NHogbTE5Ny40Nzg0IDMyOS4xNjQ4djY1Ljg5NDRINDQ2LjEwNTZ2LTY1Ljg5NDRoMTMxLjc4ODh6IiBmaWxsPSJjdXJyZW50Q29sb3IiIHAtaWQ9IjExNTciPjwvcGF0aD48L3N2Zz4NCg==");

// CONCATENATED MODULE: ./src/assets/fonts/svg/menu/blog.svg
function blog_extends() { blog_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return blog_extends.apply(this, arguments); }



var blog_ref = /*#__PURE__*/external_react_["createElement"]("defs", null, /*#__PURE__*/external_react_["createElement"]("style", null));

var blog_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M945.031 540.997c-1.234-6.404-3.177-12.841-5.691-18.641l-.157-.368-.173-.348c-6.092-13.435-14.518-26.184-25.072-37.892-11.038-12.276-21.649-21.052-32.447-26.868-5.656-2.944-11.337-5.252-17.885-7.293a93.713 93.713 0 00-23.254-3.974 82.726 82.726 0 00-3.125-.064c-8.127 0-16.338 1.261-24.419 3.767-9.476 2.918-18.598 7.855-27.064 14.637l-.511.41-.497.425c-4.165 3.536-8.975 7.957-14.322 13.127-4.812 4.7-8.889 8.587-12.313 11.827l-3.532 3.37-.121-.119-2.577 2.668-27.252 25.866 1.082 1.11-2.189 2.275-95.407 98.397-35.954 37.085-32.383 33.422c-9.936 10.226-18.257 18.851-24.895 25.914l-10.682 11.213-1.5 1.578c-6.183 6.362-11.186 12.573-15.048 18.728-3.178 4.999-6.152 10.637-8.74 16.642-2.488 5.024-4.898 11.326-7.823 20.372-2.503 7.692-5.091 16.204-7.762 25.471-2.54 8.809-4.944 17.32-7.228 25.59-2.928 10.803-4.59 18.356-5.456 24.685-3.027 20.246.783 37.73 11.398 51.368 6.361 8 20.254 20.76 45.186 20.76 3.098 0 6.35-.19 9.69-.566l.893-.102.893-.152c5.315-.846 12.073-2.404 21.894-5.04 8.352-2.253 17.237-4.948 27.173-8.231a743.564 743.564 0 0026.75-9.514c9.204-3.542 16.207-6.546 21.606-9.23 7.087-3.294 13.903-7.53 20.26-12.613 4.249-3.327 8.153-6.62 11.675-9.872 2.985-2.539 6.591-6.14 13.679-13.396a11847.12 11847.12 0 0023.797-24.776c8.609-9.073 18.554-19.256 31.397-32.2l.266-.264.257-.281 35.515-37.039 95.26-98.254 30.79-31.746-.104-.102.354-.317a195.74 195.74 0 008.796-8.469 377.524 377.524 0 016.675-6.685 733.76 733.76 0 0010.27-10.351l.653-.662.612-.685c7.004-7.855 12.303-16.549 15.737-25.85 3.366-8.981 5.102-18.447 5.102-27.966-.001-7.106-.697-14.103-2.077-20.777zm-203.096 200.22L706.42 778.25c-11.802 11.897-22.459 22.787-31.934 32.765a8339.834 8339.834 0 01-23.51 24.464c-6.235 6.393-9.931 10.086-11.112 10.937-2.937 2.783-6.35 5.667-10.202 8.685-3.83 3.063-7.824 5.526-11.974 7.403-4.16 2.107-10.202 4.69-18.184 7.768a730.296 730.296 0 01-25.072 8.916c-8.724 2.889-17.019 5.422-24.863 7.534-7.84 2.11-13.674 3.5-17.542 4.12-1.735.205-3.34.292-4.818.292-5.337 0-9.058-1.3-11.148-3.93-2.655-3.413-3.392-9.025-2.217-16.932.586-4.28 2.002-10.464 4.203-18.582a2226.58 2226.58 0 017.104-25.127c2.514-8.733 4.943-16.744 7.316-24.042 2.374-7.327 4.29-12.367 5.782-15.11 1.766-4.26 3.768-8.158 6-11.656 2.195-3.504 5.393-7.39 9.527-11.654 1.788-1.87 5.939-6.194 12.445-13.057 6.49-6.911 14.63-15.347 24.408-25.406l32.383-33.412 35.945-37.089 95.406-98.404 83.003 86.054-95.431 98.428zm159.313-167.545c-1.474 3.982-3.832 7.778-7.104 11.44a638.096 638.096 0 01-9.544 9.616 467.696 467.696 0 00-7.312 7.325c-2.357 2.415-4.589 4.572-6.639 6.4l-83.004-85.584c3.554-3.37 7.788-7.396 12.648-12.146 4.882-4.732 8.959-8.453 12.215-11.223 4.13-3.31 8.436-5.709 12.858-7.078 4.014-1.246 7.98-1.86 11.86-1.86.407 0 .819 0 1.233.016 4.276.188 8.435.846 12.418 2.054 4.003 1.25 7.47 2.62 10.421 4.157 6.235 3.357 13.12 9.202 20.662 17.584 7.557 8.393 13.364 17.17 17.53 26.34 1.191 2.76 2.143 5.95 2.853 9.618.752 3.66 1.124 7.455 1.124 11.445.003 3.949-.719 7.91-2.219 11.896zm0 0",
  fill: "currentColor"
});

var blog_ref3 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M376.845 887.09H192.512c-31.669 0-57.437-26.575-57.437-59.24V196.127c0-32.658 25.768-59.218 57.437-59.218h612.482c31.663 0 57.415 26.56 57.415 59.218v160.797c0 16.571 13.035 30.005 29.096 30.005 16.067 0 29.097-13.432 29.097-30.005V196.132c0-65.745-51.868-119.239-115.607-119.239H192.512c-63.754 0-115.619 53.494-115.619 119.239v631.72c0 65.752 51.865 119.255 115.619 119.255h184.333c16.067 0 29.096-13.44 29.096-30.01s-13.03-30.006-29.096-30.006zm0 0",
  fill: "currentColor"
});

var _ref4 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M729.637 272.73c0-16.572-13.035-30.006-29.097-30.006H285.958c-16.067 0-29.097 13.433-29.097 30.006 0 16.577 13.03 30.01 29.097 30.01H700.54c16.062 0 29.097-13.433 29.097-30.01zM285.959 401.058c-16.067 0-29.097 13.433-29.097 30 0 16.576 13.03 30.01 29.097 30.01h286.07c16.07 0 29.096-13.433 29.096-30.01 0-16.567-13.026-30-29.097-30h-286.07zm162.428 169.259H285.96c-16.067 0-29.097 13.433-29.097 30 0 16.577 13.03 30.01 29.097 30.01h162.428c16.066 0 29.092-13.433 29.092-30.01 0-16.566-13.026-30-29.092-30zm0 0",
  fill: "currentColor"
});

function SvgBlog(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", blog_extends({
    className: "blog_svg__icon",
    viewBox: "0 0 1024 1024",
    width: 48,
    height: 48
  }, props), blog_ref, blog_ref2, blog_ref3, _ref4);
}

/* harmony default export */ var blog = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg5Njc5MjU2ODI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3OTkiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk0NS4wMzEgNTQwLjk5N2MtMS4yMzQtNi40MDQtMy4xNzctMTIuODQxLTUuNjkxLTE4LjY0MWwtMC4xNTctMC4zNjgtMC4xNzMtMC4zNDhjLTYuMDkyLTEzLjQzNS0xNC41MTgtMjYuMTg0LTI1LjA3Mi0zNy44OTItMTEuMDM4LTEyLjI3Ni0yMS42NDktMjEuMDUyLTMyLjQ0Ny0yNi44NjgtNS42NTYtMi45NDQtMTEuMzM3LTUuMjUyLTE3Ljg4NS03LjI5M2E5My43MTMgOTMuNzEzIDAgMCAwLTIzLjI1NC0zLjk3NCA4Mi43MjYgODIuNzI2IDAgMCAwLTMuMTI1LTAuMDY0Yy04LjEyNyAwLTE2LjMzOCAxLjI2MS0yNC40MTkgMy43NjctOS40NzYgMi45MTgtMTguNTk4IDcuODU1LTI3LjA2NCAxNC42MzdsLTAuNTExIDAuNDEtMC40OTcgMC40MjVjLTQuMTY1IDMuNTM2LTguOTc1IDcuOTU3LTE0LjMyMiAxMy4xMjctNC44MTIgNC43LTguODg5IDguNTg3LTEyLjMxMyAxMS44MjdsLTMuNTMyIDMuMzctMC4xMjEtMC4xMTktMi41NzcgMi42NjgtMjcuMjUyIDI1Ljg2NiAxLjA4MiAxLjExLTIuMTg5IDIuMjc1LTk1LjQwNyA5OC4zOTctMzUuOTU0IDM3LjA4NS0zMi4zODMgMzMuNDIyYy05LjkzNiAxMC4yMjYtMTguMjU3IDE4Ljg1MS0yNC44OTUgMjUuOTE0bC0xMC42ODIgMTEuMjEzLTEuNSAxLjU3OGMtNi4xODMgNi4zNjItMTEuMTg2IDEyLjU3My0xNS4wNDggMTguNzI4LTMuMTc4IDQuOTk5LTYuMTUyIDEwLjYzNy04Ljc0IDE2LjY0Mi0yLjQ4OCA1LjAyNC00Ljg5OCAxMS4zMjYtNy44MjMgMjAuMzcyLTIuNTAzIDcuNjkyLTUuMDkxIDE2LjIwNC03Ljc2MiAyNS40NzEtMi41NCA4LjgwOS00Ljk0NCAxNy4zMi03LjIyOCAyNS41OS0yLjkyOCAxMC44MDMtNC41OSAxOC4zNTYtNS40NTYgMjQuNjg1LTMuMDI3IDIwLjI0NiAwLjc4MyAzNy43MyAxMS4zOTggNTEuMzY4IDYuMzYxIDggMjAuMjU0IDIwLjc2IDQ1LjE4NiAyMC43NiAzLjA5OCAwIDYuMzUtMC4xOSA5LjY5LTAuNTY2bDAuODkzLTAuMTAyIDAuODkzLTAuMTUyYzUuMzE1LTAuODQ2IDEyLjA3My0yLjQwNCAyMS44OTQtNS4wNCA4LjM1Mi0yLjI1MyAxNy4yMzctNC45NDggMjcuMTczLTguMjMxYTc0My41NjQgNzQzLjU2NCAwIDAgMCAyNi43NS05LjUxNGM5LjIwNC0zLjU0MiAxNi4yMDctNi41NDYgMjEuNjA2LTkuMjMgNy4wODctMy4yOTQgMTMuOTAzLTcuNTMgMjAuMjYtMTIuNjEzIDQuMjQ5LTMuMzI3IDguMTUzLTYuNjIgMTEuNjc1LTkuODcyIDIuOTg1LTIuNTM5IDYuNTkxLTYuMTQgMTMuNjc5LTEzLjM5NmExMTg0Ny4xMiAxMTg0Ny4xMiAwIDAgMCAyMy43OTctMjQuNzc2YzguNjA5LTkuMDczIDE4LjU1NC0xOS4yNTYgMzEuMzk3LTMyLjJsMC4yNjYtMC4yNjQgMC4yNTctMC4yODEgMzUuNTE1LTM3LjAzOSA5NS4yNi05OC4yNTQgMzAuNzktMzEuNzQ2LTAuMTA0LTAuMTAyIDAuMzU0LTAuMzE3YTE5NS43NCAxOTUuNzQgMCAwIDAgOC43OTYtOC40NjljMS44ODgtMS45NTEgNC4xMi00LjE3NyA2LjY3NS02LjY4NWE3MzMuNzYgNzMzLjc2IDAgMCAwIDEwLjI3LTEwLjM1MWwwLjY1My0wLjY2MiAwLjYxMi0wLjY4NWM3LjAwNC03Ljg1NSAxMi4zMDMtMTYuNTQ5IDE1LjczNy0yNS44NSAzLjM2Ni04Ljk4MSA1LjEwMi0xOC40NDcgNS4xMDItMjcuOTY2LTAuMDAxLTcuMTA2LTAuNjk3LTE0LjEwMy0yLjA3Ny0yMC43Nzd6IG0tMjAzLjA5NiAyMDAuMjJMNzA2LjQyIDc3OC4yNWMtMTEuODAyIDExLjg5Ny0yMi40NTkgMjIuNzg3LTMxLjkzNCAzMi43NjVhODMzOS44MzQgODMzOS44MzQgMCAwIDEtMjMuNTEgMjQuNDY0Yy02LjIzNSA2LjM5My05LjkzMSAxMC4wODYtMTEuMTEyIDEwLjkzNy0yLjkzNyAyLjc4My02LjM1IDUuNjY3LTEwLjIwMiA4LjY4NS0zLjgzIDMuMDYzLTcuODI0IDUuNTI2LTExLjk3NCA3LjQwMy00LjE2IDIuMTA3LTEwLjIwMiA0LjY5LTE4LjE4NCA3Ljc2OGE3MzAuMjk2IDczMC4yOTYgMCAwIDEtMjUuMDcyIDguOTE2Yy04LjcyNCAyLjg4OS0xNy4wMTkgNS40MjItMjQuODYzIDcuNTM0LTcuODQgMi4xMS0xMy42NzQgMy41LTE3LjU0MiA0LjEyLTEuNzM1IDAuMjA1LTMuMzQgMC4yOTItNC44MTggMC4yOTItNS4zMzcgMC05LjA1OC0xLjMtMTEuMTQ4LTMuOTMtMi42NTUtMy40MTMtMy4zOTItOS4wMjUtMi4yMTctMTYuOTMyIDAuNTg2LTQuMjggMi4wMDItMTAuNDY0IDQuMjAzLTE4LjU4MiAyLjI0Mi04LjEwMyA0LjU5LTE2LjQzNyA3LjEwNC0yNS4xMjcgMi41MTQtOC43MzMgNC45NDMtMTYuNzQ0IDcuMzE2LTI0LjA0MiAyLjM3NC03LjMyNyA0LjI5LTEyLjM2NyA1Ljc4Mi0xNS4xMSAxLjc2Ni00LjI2IDMuNzY4LTguMTU4IDYtMTEuNjU2IDIuMTk1LTMuNTA0IDUuMzkzLTcuMzkgOS41MjctMTEuNjU0IDEuNzg4LTEuODcgNS45MzktNi4xOTQgMTIuNDQ1LTEzLjA1NyA2LjQ5LTYuOTExIDE0LjYzLTE1LjM0NyAyNC40MDgtMjUuNDA2bDMyLjM4My0zMy40MTIgMzUuOTQ1LTM3LjA4OSA5NS40MDYtOTguNDA0IDgzLjAwMyA4Ni4wNTQtOTUuNDMxIDk4LjQyOHogbTE1OS4zMTMtMTY3LjU0NWMtMS40NzQgMy45ODItMy44MzIgNy43NzgtNy4xMDQgMTEuNDQtMy41MzMgMy42NDgtNi43MjYgNi44MjQtOS41NDQgOS42MTZhNDY3LjY5NiA0NjcuNjk2IDAgMCAwLTcuMzEyIDcuMzI1Yy0yLjM1NyAyLjQxNS00LjU4OSA0LjU3Mi02LjYzOSA2LjRsLTgzLjAwNC04NS41ODRjMy41NTQtMy4zNyA3Ljc4OC03LjM5NiAxMi42NDgtMTIuMTQ2IDQuODgyLTQuNzMyIDguOTU5LTguNDUzIDEyLjIxNS0xMS4yMjMgNC4xMy0zLjMxIDguNDM2LTUuNzA5IDEyLjg1OC03LjA3OCA0LjAxNC0xLjI0NiA3Ljk4LTEuODYgMTEuODYtMS44NiAwLjQwNyAwIDAuODE5IDAgMS4yMzMgMC4wMTYgNC4yNzYgMC4xODggOC40MzUgMC44NDYgMTIuNDE4IDIuMDU0IDQuMDAzIDEuMjUgNy40NyAyLjYyIDEwLjQyMSA0LjE1NyA2LjIzNSAzLjM1NyAxMy4xMiA5LjIwMiAyMC42NjIgMTcuNTg0IDcuNTU3IDguMzkzIDEzLjM2NCAxNy4xNyAxNy41MyAyNi4zNCAxLjE5MSAyLjc2IDIuMTQzIDUuOTUgMi44NTMgOS42MTggMC43NTIgMy42NiAxLjEyNCA3LjQ1NSAxLjEyNCAxMS40NDUgMC4wMDMgMy45NDktMC43MTkgNy45MS0yLjIxOSAxMS44OTZ6IG0wIDAiIGZpbGw9ImN1cnJlbnRDb2xvciIgcC1pZD0iMTgwMCI+PC9wYXRoPjxwYXRoIGQ9Ik0zNzYuODQ1IDg4Ny4wOUgxOTIuNTEyYy0zMS42NjkgMC01Ny40MzctMjYuNTc1LTU3LjQzNy01OS4yNFYxOTYuMTI3YzAtMzIuNjU4IDI1Ljc2OC01OS4yMTggNTcuNDM3LTU5LjIxOGg2MTIuNDgyYzMxLjY2MyAwIDU3LjQxNSAyNi41NiA1Ny40MTUgNTkuMjE4djE2MC43OTdjMCAxNi41NzEgMTMuMDM1IDMwLjAwNSAyOS4wOTYgMzAuMDA1IDE2LjA2NyAwIDI5LjA5Ny0xMy40MzIgMjkuMDk3LTMwLjAwNVYxOTYuMTMyYzAtNjUuNzQ1LTUxLjg2OC0xMTkuMjM5LTExNS42MDctMTE5LjIzOUgxOTIuNTEyYy02My43NTQgMC0xMTUuNjE5IDUzLjQ5NC0xMTUuNjE5IDExOS4yMzl2NjMxLjcyYzAgNjUuNzUyIDUxLjg2NSAxMTkuMjU1IDExNS42MTkgMTE5LjI1NWgxODQuMzMzYzE2LjA2NyAwIDI5LjA5Ni0xMy40NCAyOS4wOTYtMzAuMDFzLTEzLjAzLTMwLjAwNi0yOS4wOTYtMzAuMDA2eiBtMCAwIiBmaWxsPSJjdXJyZW50Q29sb3IiIHAtaWQ9IjE4MDEiPjwvcGF0aD48cGF0aCBkPSJNNzI5LjYzNyAyNzIuNzNjMC0xNi41NzItMTMuMDM1LTMwLjAwNi0yOS4wOTctMzAuMDA2SDI4NS45NThjLTE2LjA2NyAwLTI5LjA5NyAxMy40MzMtMjkuMDk3IDMwLjAwNiAwIDE2LjU3NyAxMy4wMyAzMC4wMSAyOS4wOTcgMzAuMDFINzAwLjU0YzE2LjA2MiAwIDI5LjA5Ny0xMy40MzMgMjkuMDk3LTMwLjAxeiBtMCAwTTI4NS45NTkgNDAxLjA1OGMtMTYuMDY3IDAtMjkuMDk3IDEzLjQzMy0yOS4wOTcgMzAgMCAxNi41NzYgMTMuMDMgMzAuMDEgMjkuMDk3IDMwLjAxaDI4Ni4wN2MxNi4wNyAwIDI5LjA5Ni0xMy40MzMgMjkuMDk2LTMwLjAxIDAtMTYuNTY3LTEzLjAyNi0zMC0yOS4wOTctMzBoLTI4Ni4wN3ogbTAgME00NDguMzg3IDU3MC4zMTdIMjg1Ljk2Yy0xNi4wNjcgMC0yOS4wOTcgMTMuNDMzLTI5LjA5NyAzMCAwIDE2LjU3NyAxMy4wMyAzMC4wMSAyOS4wOTcgMzAuMDFoMTYyLjQyOGMxNi4wNjYgMCAyOS4wOTItMTMuNDMzIDI5LjA5Mi0zMC4wMSAwLTE2LjU2Ni0xMy4wMjYtMzAtMjkuMDkyLTMweiBtMCAwIiBmaWxsPSJjdXJyZW50Q29sb3IiIHAtaWQ9IjE4MDIiPjwvcGF0aD48L3N2Zz4NCg==");

// CONCATENATED MODULE: ./src/assets/fonts/svg/menu/menu.svg
function menu_extends() { menu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return menu_extends.apply(this, arguments); }



var menu_ref = /*#__PURE__*/external_react_["createElement"]("defs", null, /*#__PURE__*/external_react_["createElement"]("style", null));

var menu_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M661.811 153.6H765.39c36.505 0 49.766 3.789 63.078 10.957 13.363 7.168 23.86 17.613 30.976 30.976 7.168 13.312 10.957 26.573 10.957 63.078V362.19c0 36.505-3.789 49.766-10.957 63.078-7.168 13.363-17.613 23.86-30.976 30.976-13.312 7.168-26.573 10.957-63.078 10.957H661.81c-36.505 0-49.766-3.789-63.078-10.957a74.445 74.445 0 01-30.976-30.976c-7.168-13.312-10.957-26.573-10.957-63.078V258.56c0-36.506 3.789-49.766 10.957-63.078 7.168-13.364 17.613-23.86 30.976-30.976 13.312-7.168 26.573-10.957 63.078-10.957zm0 403.2H765.39c36.505 0 49.766 3.789 63.078 10.957 13.363 7.168 23.86 17.613 30.976 30.976 7.168 13.312 10.957 26.573 10.957 63.078V765.39c0 36.505-3.789 49.766-10.957 63.078-7.168 13.363-17.613 23.86-30.976 30.976-13.312 7.168-26.573 10.957-63.078 10.957H661.81c-36.505 0-49.766-3.789-63.078-10.957a74.445 74.445 0 01-30.976-30.976c-7.168-13.312-10.957-26.573-10.957-63.078V661.81c0-36.505 3.789-49.766 10.957-63.078 7.168-13.363 17.613-23.86 30.976-30.976 13.312-7.168 26.573-10.957 63.078-10.957zm-403.2-403.2H362.19c36.505 0 49.766 3.789 63.078 10.957 13.363 7.168 23.86 17.613 30.976 30.976 7.168 13.312 10.957 26.573 10.957 63.078V362.19c0 36.505-3.789 49.766-10.957 63.078-7.168 13.363-17.613 23.86-30.976 30.976-13.312 7.168-26.573 10.957-63.078 10.957H258.56c-36.506 0-49.766-3.789-63.078-10.957a74.445 74.445 0 01-30.976-30.976c-7.117-13.312-10.906-26.573-10.906-63.078V258.56c0-36.506 3.789-49.766 10.957-63.078 7.168-13.364 17.613-23.86 30.976-30.976 13.312-7.168 26.573-10.957 63.078-10.957zm0 403.2H362.19c36.505 0 49.766 3.789 63.078 10.957 13.363 7.168 23.86 17.613 30.976 30.976 7.168 13.312 10.957 26.573 10.957 63.078V765.39c0 36.505-3.789 49.766-10.957 63.078-7.168 13.363-17.613 23.86-30.976 30.976-13.312 7.168-26.573 10.957-63.078 10.957H258.56c-36.506 0-49.766-3.789-63.078-10.957a74.445 74.445 0 01-30.976-30.976c-7.168-13.312-10.957-26.573-10.957-63.078V661.81c0-36.505 3.789-49.766 10.957-63.078 7.168-13.363 17.612-23.86 30.976-30.976 13.312-7.168 26.572-10.957 63.078-10.957z",
  fill: "currentColor"
});

function SvgMenu(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", menu_extends({
    className: "menu_svg__icon",
    viewBox: "0 0 1024 1024",
    width: 48,
    height: 48
  }, props), menu_ref, menu_ref2);
}

/* harmony default export */ var menu = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg5Njc5MzM1ODA5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExNDMiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY2MS44MTEyIDE1My42aDEwMy41Nzc2YzM2LjUwNTYgMCA0OS43NjY0IDMuNzg4OCA2My4wNzg0IDEwLjk1NjggMTMuMzYzMiA3LjE2OCAyMy44NTkyIDE3LjYxMjggMzAuOTc2IDMwLjk3NiA3LjE2OCAxMy4zMTIgMTAuOTU2OCAyNi41NzI4IDEwLjk1NjggNjMuMDc4NHYxMDMuNTc3NmMwIDM2LjUwNTYtMy43ODg4IDQ5Ljc2NjQtMTAuOTU2OCA2My4wNzg0LTcuMTY4IDEzLjM2MzItMTcuNjEyOCAyMy44NTkyLTMwLjk3NiAzMC45NzYtMTMuMzEyIDcuMTY4LTI2LjU3MjggMTAuOTU2OC02My4wNzg0IDEwLjk1NjhoLTEwMy41Nzc2Yy0zNi41MDU2IDAtNDkuNzY2NC0zLjc4ODgtNjMuMDc4NC0xMC45NTY4YTc0LjQ0NDggNzQuNDQ0OCAwIDAgMS0zMC45NzYtMzAuOTc2Yy03LjE2OC0xMy4zMTItMTAuOTU2OC0yNi41NzI4LTEwLjk1NjgtNjMuMDc4NFYyNTguNTZjMC0zNi41MDU2IDMuNzg4OC00OS43NjY0IDEwLjk1NjgtNjMuMDc4NCA3LjE2OC0xMy4zNjMyIDE3LjYxMjgtMjMuODU5MiAzMC45NzYtMzAuOTc2IDEzLjMxMi03LjE2OCAyNi41NzI4LTEwLjk1NjggNjMuMDc4NC0xMC45NTY4eiBtMCA0MDMuMmgxMDMuNTc3NmMzNi41MDU2IDAgNDkuNzY2NCAzLjc4ODggNjMuMDc4NCAxMC45NTY4IDEzLjM2MzIgNy4xNjggMjMuODU5MiAxNy42MTI4IDMwLjk3NiAzMC45NzYgNy4xNjggMTMuMzEyIDEwLjk1NjggMjYuNTcyOCAxMC45NTY4IDYzLjA3ODR2MTAzLjU3NzZjMCAzNi41MDU2LTMuNzg4OCA0OS43NjY0LTEwLjk1NjggNjMuMDc4NC03LjE2OCAxMy4zNjMyLTE3LjYxMjggMjMuODU5Mi0zMC45NzYgMzAuOTc2LTEzLjMxMiA3LjE2OC0yNi41NzI4IDEwLjk1NjgtNjMuMDc4NCAxMC45NTY4aC0xMDMuNTc3NmMtMzYuNTA1NiAwLTQ5Ljc2NjQtMy43ODg4LTYzLjA3ODQtMTAuOTU2OGE3NC40NDQ4IDc0LjQ0NDggMCAwIDEtMzAuOTc2LTMwLjk3NmMtNy4xNjgtMTMuMzEyLTEwLjk1NjgtMjYuNTcyOC0xMC45NTY4LTYzLjA3ODR2LTEwMy41Nzc2YzAtMzYuNTA1NiAzLjc4ODgtNDkuNzY2NCAxMC45NTY4LTYzLjA3ODQgNy4xNjgtMTMuMzYzMiAxNy42MTI4LTIzLjg1OTIgMzAuOTc2LTMwLjk3NiAxMy4zMTItNy4xNjggMjYuNTcyOC0xMC45NTY4IDYzLjA3ODQtMTAuOTU2OHpNMjU4LjYxMTIgMTUzLjZoMTAzLjU3NzZjMzYuNTA1NiAwIDQ5Ljc2NjQgMy43ODg4IDYzLjA3ODQgMTAuOTU2OCAxMy4zNjMyIDcuMTY4IDIzLjg1OTIgMTcuNjEyOCAzMC45NzYgMzAuOTc2IDcuMTY4IDEzLjMxMiAxMC45NTY4IDI2LjU3MjggMTAuOTU2OCA2My4wNzg0djEwMy41Nzc2YzAgMzYuNTA1Ni0zLjc4ODggNDkuNzY2NC0xMC45NTY4IDYzLjA3ODQtNy4xNjggMTMuMzYzMi0xNy42MTI4IDIzLjg1OTItMzAuOTc2IDMwLjk3Ni0xMy4zMTIgNy4xNjgtMjYuNTcyOCAxMC45NTY4LTYzLjA3ODQgMTAuOTU2OEgyNTguNTZjLTM2LjUwNTYgMC00OS43NjY0LTMuNzg4OC02My4wNzg0LTEwLjk1NjhhNzQuNDQ0OCA3NC40NDQ4IDAgMCAxLTMwLjk3Ni0zMC45NzZDMTU3LjM4ODggNDExLjk1NTIgMTUzLjYgMzk4LjY5NDQgMTUzLjYgMzYyLjE4ODhWMjU4LjU2YzAtMzYuNTA1NiAzLjc4ODgtNDkuNzY2NCAxMC45NTY4LTYzLjA3ODQgNy4xNjgtMTMuMzYzMiAxNy42MTI4LTIzLjg1OTIgMzAuOTc2LTMwLjk3NiAxMy4zMTItNy4xNjggMjYuNTcyOC0xMC45NTY4IDYzLjA3ODQtMTAuOTU2OHogbTAgNDAzLjJoMTAzLjU3NzZjMzYuNTA1NiAwIDQ5Ljc2NjQgMy43ODg4IDYzLjA3ODQgMTAuOTU2OCAxMy4zNjMyIDcuMTY4IDIzLjg1OTIgMTcuNjEyOCAzMC45NzYgMzAuOTc2IDcuMTY4IDEzLjMxMiAxMC45NTY4IDI2LjU3MjggMTAuOTU2OCA2My4wNzg0djEwMy41Nzc2YzAgMzYuNTA1Ni0zLjc4ODggNDkuNzY2NC0xMC45NTY4IDYzLjA3ODQtNy4xNjggMTMuMzYzMi0xNy42MTI4IDIzLjg1OTItMzAuOTc2IDMwLjk3Ni0xMy4zMTIgNy4xNjgtMjYuNTcyOCAxMC45NTY4LTYzLjA3ODQgMTAuOTU2OEgyNTguNTZjLTM2LjUwNTYgMC00OS43NjY0LTMuNzg4OC02My4wNzg0LTEwLjk1NjhhNzQuNDQ0OCA3NC40NDQ4IDAgMCAxLTMwLjk3Ni0zMC45NzZjLTcuMTY4LTEzLjMxMi0xMC45NTY4LTI2LjU3MjgtMTAuOTU2OC02My4wNzg0di0xMDMuNTc3NmMwLTM2LjUwNTYgMy43ODg4LTQ5Ljc2NjQgMTAuOTU2OC02My4wNzg0IDcuMTY4LTEzLjM2MzIgMTcuNjEyOC0yMy44NTkyIDMwLjk3Ni0zMC45NzYgMTMuMzEyLTcuMTY4IDI2LjU3MjgtMTAuOTU2OCA2My4wNzg0LTEwLjk1Njh6IiBmaWxsPSJjdXJyZW50Q29sb3IiIHAtaWQ9IjExNDQiPjwvcGF0aD48L3N2Zz4NCg==");

// CONCATENATED MODULE: ./src/assets/fonts/svg/menu/contact.svg
function contact_extends() { contact_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return contact_extends.apply(this, arguments); }



var contact_ref = /*#__PURE__*/external_react_["createElement"]("defs", null, /*#__PURE__*/external_react_["createElement"]("style", null));

var contact_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M834.526 227.703c-44.578-65.877-111.65-110.148-188.86-124.586a28.092 28.092 0 00-32.631 22.972 28.535 28.535 0 0022.528 33.245 235.964 235.964 0 01152.849 100.83 245.043 245.043 0 0138.195 181.59 28.57 28.57 0 0027.58 33.723 28.194 28.194 0 0027.511-23.45 302.558 302.558 0 00-47.172-224.324zm-208.862 46.149c62.464 11.673 103.902 72.977 92.467 136.67a28.535 28.535 0 0027.614 33.757 28.16 28.16 0 0027.512-23.45c17.032-94.685-44.647-185.821-137.455-203.195a28.092 28.092 0 00-32.632 22.972 28.535 28.535 0 0022.528 33.246zm-35.43 89.6c10.854 2.048 20.309 8.26 26.555 17.544 6.28 9.25 8.636 20.48 6.656 31.574a28.535 28.535 0 0027.58 33.792 28.194 28.194 0 0027.546-23.484 100.352 100.352 0 00-15.633-74.377 96.666 96.666 0 00-62.6-41.301 28.058 28.058 0 00-32.632 23.006 28.535 28.535 0 0022.528 33.246zm94.89 278.494c-56.934 24.337-41.062 110.762-114.142 115.78-42.564 3.072-272.827-254.635-273.885-301.363-1.502-71.032 57.173-76.527 91.374-92.74 41.302-19.525-41.3-231.834-114.176-231.834-72.908 0-131.788 41.028-136.942 208.554 0 344.133 405.674 601.43 547.771 579.687 109.022-16.657 171.179-77.824 182.545-139.06 11.4-61.166-139.298-157.661-182.545-139.024z",
  fill: "currentColor"
});

function SvgContact(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", contact_extends({
    className: "contact_svg__icon",
    viewBox: "0 0 1024 1024",
    width: 48,
    height: 48
  }, props), contact_ref, contact_ref2);
}

/* harmony default export */ var contact = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg5NzA2Mzc4ODIxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExNDkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTgzNC41MjYgMjI3LjcwM2MtNDQuNTc4LTY1Ljg3Ny0xMTEuNjUtMTEwLjE0OC0xODguODYtMTI0LjU4NmEyOC4wOTIgMjguMDkyIDAgMCAwLTMyLjYzMSAyMi45NzIgMjguNTM1IDI4LjUzNSAwIDAgMCAyMi41MjggMzMuMjQ1IDIzNS45NjQgMjM1Ljk2NCAwIDAgMSAxNTIuODQ5IDEwMC44MyAyNDUuMDQzIDI0NS4wNDMgMCAwIDEgMzguMTk1IDE4MS41OSAyOC41NyAyOC41NyAwIDAgMCAyNy41OCAzMy43MjMgMjguMTk0IDI4LjE5NCAwIDAgMCAyNy41MTEtMjMuNDUgMzAyLjU1OCAzMDIuNTU4IDAgMCAwLTQ3LjE3Mi0yMjQuMzI0eiBtLTIwOC44NjIgNDYuMTQ5YzYyLjQ2NCAxMS42NzMgMTAzLjkwMiA3Mi45NzcgOTIuNDY3IDEzNi42N2EyOC41MzUgMjguNTM1IDAgMCAwIDI3LjYxNCAzMy43NTcgMjguMTYgMjguMTYgMCAwIDAgMjcuNTEyLTIzLjQ1YzE3LjAzMi05NC42ODUtNDQuNjQ3LTE4NS44MjEtMTM3LjQ1NS0yMDMuMTk1YTI4LjA5MiAyOC4wOTIgMCAwIDAtMzIuNjMyIDIyLjk3MiAyOC41MzUgMjguNTM1IDAgMCAwIDIyLjUyOCAzMy4yNDZ6IG0tMzUuNDMgODkuNmMxMC44NTQgMi4wNDggMjAuMzA5IDguMjYgMjYuNTU1IDE3LjU0NCA2LjI4IDkuMjUgOC42MzYgMjAuNDggNi42NTYgMzEuNTc0YTI4LjUzNSAyOC41MzUgMCAwIDAgMjcuNTggMzMuNzkyIDI4LjE5NCAyOC4xOTQgMCAwIDAgMjcuNTQ2LTIzLjQ4NCAxMDAuMzUyIDEwMC4zNTIgMCAwIDAtMTUuNjMzLTc0LjM3NyA5Ni42NjYgOTYuNjY2IDAgMCAwLTYyLjYtNDEuMzAxIDI4LjA1OCAyOC4wNTggMCAwIDAtMzIuNjMyIDIzLjAwNiAyOC41MzUgMjguNTM1IDAgMCAwIDIyLjUyOCAzMy4yNDZ6IG05NC44OSAyNzguNDk0Yy01Ni45MzQgMjQuMzM3LTQxLjA2MiAxMTAuNzYyLTExNC4xNDIgMTE1Ljc4LTQyLjU2NCAzLjA3Mi0yNzIuODI3LTI1NC42MzUtMjczLjg4NS0zMDEuMzYzLTEuNTAyLTcxLjAzMiA1Ny4xNzMtNzYuNTI3IDkxLjM3NC05Mi43NCA0MS4zMDItMTkuNTI1LTQxLjMtMjMxLjgzNC0xMTQuMTc2LTIzMS44MzQtNzIuOTA4IDAtMTMxLjc4OCA0MS4wMjgtMTM2Ljk0MiAyMDguNTU0IDAgMzQ0LjEzMyA0MDUuNjc0IDYwMS40MyA1NDcuNzcxIDU3OS42ODcgMTA5LjAyMi0xNi42NTcgMTcxLjE3OS03Ny44MjQgMTgyLjU0NS0xMzkuMDYgMTEuNC02MS4xNjYtMTM5LjI5OC0xNTcuNjYxLTE4Mi41NDUtMTM5LjAyNHoiIGZpbGw9ImN1cnJlbnRDb2xvciIgcC1pZD0iMTE1MCI+PC9wYXRoPjwvc3ZnPg0K");

// CONCATENATED MODULE: ./src/assets/fonts/svg/menu/open-source.svg
function open_source_extends() { open_source_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return open_source_extends.apply(this, arguments); }



var open_source_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M512 64c-219.1 0-384.3 90-384.3 209.4 0 4.2.9 489 1 490C138.7 882.8 289.1 960 512 960s373.3-77.2 383.3-197.6c0 0 1-484.8 1-489C896.3 154 731.1 64 512 64zm300.5 696.9C791.3 814 665.3 872.4 505.2 872.4c-160.1 0-286.1-58.4-307.3-111.5v-123c84.8 46.7 178.6 72.2 307.3 72.2s243.7-25.5 307.3-72.2v123zm0-249.9c-21.2 53.1-147.3 111.5-307.3 111.5-159.9 0-286.1-58.5-307.3-111.5V405.1c84.8 49.6 183.4 77.6 307.3 77.6s243.7-28 307.3-77.6V511zM512 395.1c-186.2 0-305.1-72.1-305.1-121.7 0-49.6 118.8-121.7 305.1-121.7 186.2 0 305.1 72.1 305.1 121.7 0 49.6-118.9 121.7-305.1 121.7z",
  fill: "currentColor"
});

function SvgOpenSource(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", open_source_extends({
    className: "open-source_svg__icon",
    viewBox: "0 0 1024 1024",
    width: 48,
    height: 48
  }, props), open_source_ref);
}

/* harmony default export */ var open_source = ("data:image/svg+xml;base64,PHN2ZyB0PSIxNTk1MjU4OTM1OTA0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM4NjAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PHBhdGggZD0iTTUxMiA2NGMtMjE5LjEgMC0zODQuMyA5MC0zODQuMyAyMDkuNCAwIDQuMiAwLjkgNDg5IDEgNDkwQzEzOC43IDg4Mi44IDI4OS4xIDk2MCA1MTIgOTYwczM3My4zLTc3LjIgMzgzLjMtMTk3LjZjMCAwIDEtNDg0LjggMS00ODlDODk2LjMgMTU0IDczMS4xIDY0IDUxMiA2NHogbTMwMC41IDY5Ni45Qzc5MS4zIDgxNCA2NjUuMyA4NzIuNCA1MDUuMiA4NzIuNGMtMTYwLjEgMC0yODYuMS01OC40LTMwNy4zLTExMS41di0xMjNjODQuOCA0Ni43IDE3OC42IDcyLjIgMzA3LjMgNzIuMnMyNDMuNy0yNS41IDMwNy4zLTcyLjJ2MTIzeiBtMC0yNDkuOWMtMjEuMiA1My4xLTE0Ny4zIDExMS41LTMwNy4zIDExMS41LTE1OS45IDAtMjg2LjEtNTguNS0zMDcuMy0xMTEuNVY0MDUuMWM4NC44IDQ5LjYgMTgzLjQgNzcuNiAzMDcuMyA3Ny42czI0My43LTI4IDMwNy4zLTc3LjZWNTExek01MTIgMzk1LjFjLTE4Ni4yIDAtMzA1LjEtNzIuMS0zMDUuMS0xMjEuNyAwLTQ5LjYgMTE4LjgtMTIxLjcgMzA1LjEtMTIxLjcgMTg2LjIgMCAzMDUuMSA3Mi4xIDMwNS4xIDEyMS43IDAgNDkuNi0xMTguOSAxMjEuNy0zMDUuMSAxMjEuN3oiIGZpbGw9ImN1cnJlbnRDb2xvciIgcC1pZD0iMzg2MSI+PC9wYXRoPjwvc3ZnPg0K");

// CONCATENATED MODULE: ./src/scripts/menus/index.ts






const HOME = '/';
const BLOG = '/blog';
const OPEN_SOURCE = '/open-source';
const menuData = [{
  path: HOME,
  icon: user["a" /* ReactComponent */],
  title: '关于',
  enName: 'me'
}, {
  path: '/works',
  icon: SvgWorks,
  title: '作品',
  enName: 'works',
  isHot: true
}, {
  path: BLOG,
  icon: SvgBlog,
  title: '博客',
  enName: 'blog',
  linksConfig: {
    href: 'https://xiaolifeipiao.github.io'
  }
}, {
  path: OPEN_SOURCE,
  icon: SvgOpenSource,
  title: '开源',
  enName: 'GitHub',
  linksConfig: {
    href: 'https://github.com/xiaolifeipiao',
    isTargetBlank: true
  }
}, {
  path: '/tool',
  icon: SvgMenu,
  title: '工具',
  enName: 'tool'
}, {
  path: '/contact',
  icon: SvgContact,
  title: '联系',
  enName: 'contact' // linksConfig: {
  //   href: '/contact',
  // },

}];
// CONCATENATED MODULE: ./src/components/layout/Menubar.tsx
var Menubar_jsx = external_react_default.a.createElement;

function Menubar_extends() { Menubar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Menubar_extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Menubar = () => {
  const {
    pathname
  } = Object(router_["useRouter"])();
  return Menubar_jsx("nav", null, Menubar_jsx("ul", null, menuData.map(({
    path,
    title,
    icon,
    enName,
    linksConfig = {},
    isHot
  }) => {
    const isBlog = Object.is(path, BLOG);

    const {
      href,
      isTargetBlank
    } = linksConfig,
          rest = _objectWithoutProperties(linksConfig, ["href", "isTargetBlank"]);

    const node = Menubar_jsx(external_react_default.a.Fragment, null, Menubar_jsx(common["f" /* SvgIcon */], {
      className: "mgr",
      width: 1.2,
      height: 1.2,
      component: icon
    }), Menubar_jsx("span", {
      className: "m-l-xs vam"
    }, title, Menubar_jsx("span", {
      className: "m-l-r-xxs"
    }, "/"), Menubar_jsx("small", {
      className: "font-family-niconne font-size-lg"
    }, enName), isHot && Menubar_jsx("span", {
      className: "hot pos-rel"
    }, Menubar_jsx("em", null))));

    return Menubar_jsx("li", {
      className: external_classnames_default()({
        active: Object.is(pathname, path)
      }),
      key: path
    }, href ? Menubar_jsx("a", Menubar_extends({
      href: href
    }, isBlog, isTargetBlank && {
      target: '_blank'
    }, rest), node) : Menubar_jsx(link_default.a, {
      href: path
    }, Menubar_jsx("a", null, node)));
  })));
};

/* harmony default export */ var layout_Menubar = (Menubar);
// CONCATENATED MODULE: ./src/assets/fonts/svg/menu/check.svg
function check_extends() { check_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return check_extends.apply(this, arguments); }



var check_ref = /*#__PURE__*/external_react_["createElement"]("defs", null, /*#__PURE__*/external_react_["createElement"]("style", null));

var check_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M994.133 179.2c-17.066-17.067-42.666-17.067-59.733 0L362.667 750.933 89.6 477.867c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l298.666 298.667s0 4.266 4.267 4.266c17.067 17.067 42.667 17.067 59.733 0l601.6-601.6c17.067-17.066 17.067-42.666 0-59.733z",
  fill: "currentColor"
});

function SvgCheck(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", check_extends({
    className: "check_svg__icon",
    viewBox: "0 0 1024 1024",
    width: 48,
    height: 48
  }, props), check_ref, check_ref2);
}

/* harmony default export */ var check = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTkyMzEzNTg3MzEwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMzNDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk5NC4xMzMzMzMgMTc5LjJjLTE3LjA2NjY2Ny0xNy4wNjY2NjctNDIuNjY2NjY3LTE3LjA2NjY2Ny01OS43MzMzMzMgMEwzNjIuNjY2NjY3IDc1MC45MzMzMzNsLTI3My4wNjY2NjctMjczLjA2NjY2N2MtMTcuMDY2NjY3LTE3LjA2NjY2Ny00Mi42NjY2NjctMTcuMDY2NjY3LTU5LjczMzMzMyAwLTE3LjA2NjY2NyAxNy4wNjY2NjctMTcuMDY2NjY3IDQyLjY2NjY2NyAwIDU5LjczMzMzM2wyOTguNjY2NjY3IDI5OC42NjY2NjdjMCAwIDAgNC4yNjY2NjcgNC4yNjY2NjcgNC4yNjY2NjcgMTcuMDY2NjY3IDE3LjA2NjY2NyA0Mi42NjY2NjcgMTcuMDY2NjY3IDU5LjczMzMzMyAwbDAgMGMwIDAgMCAwIDAgMHMwIDAgMCAwTDk5NC4xMzMzMzMgMjM4LjkzMzMzM0MxMDExLjIgMjIxLjg2NjY2NyAxMDExLjIgMTk2LjI2NjY2NyA5OTQuMTMzMzMzIDE3OS4yeiIgZmlsbD0iY3VycmVudENvbG9yIiBwLWlkPSIzMzQxIj48L3BhdGg+PC9zdmc+DQo=");

// CONCATENATED MODULE: ./src/assets/fonts/svg/merge/setting.svg
function setting_extends() { setting_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return setting_extends.apply(this, arguments); }



var setting_ref = /*#__PURE__*/external_react_["createElement"]("defs", null, /*#__PURE__*/external_react_["createElement"]("style", null));

var setting_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M927.6 586.6c-3.7 24-18.5 40.6-37 40.6h-3.7c-61.1 0-111.1 49.8-111.1 112.5 0 20.3 9.3 42.4 9.3 42.4 9.3 22.1 1.9 47.9-16.7 60.8h-1.9L659 903.7h-1.9c-5.6 1.8-13 3.7-20.4 3.7-14.8 0-31.5-7.4-40.7-16.6-13-14.7-55.6-53.5-88.9-53.5-33.3 0-75.9 38.7-88.9 51.6-9.3 11.1-24.1 16.6-40.7 16.6-7.4 0-14.8-1.8-20.4-3.7h-1.9l-103.7-59h-1.9C231.2 830 223.7 802.3 233 782c0 0 9.3-22.1 9.3-42.4 0-60.8-50-112.5-111.1-112.5-16.7 0-31.5-14.7-37-40.6 0-1.8-9.3-47.9-9.3-84.8s9.3-83 9.3-84.8c3.7-24 18.5-40.6 37-40.6h3.7C196 376.5 246 326.7 246 264c0-20.3-9.3-42.4-9.3-42.4-11.1-18.4-3.7-46.1 16.7-59h1.9l111.1-60.8h1.9c3.7-3.7 9.3-5.5 16.7-5.5 14.8 0 29.6 5.5 40.7 16.6 13 12.9 53.7 49.8 87.1 49.8 33.3 0 74.1-35 87.1-47.9 9.3-11.1 24.1-16.6 38.9-16.6 7.4 0 14.8 1.8 20.4 3.7h1.9l107.4 59h1.9c18.5 12.9 25.9 40.6 16.7 60.8 0 0-9.3 22.1-9.3 42.4 0 60.8 50 112.5 111.1 112.5h3.7c16.7 0 31.5 14.7 37 40.6 0 1.8 9.3 47.9 9.3 84.8-2 36.7-11.3 82.8-11.3 84.6zm-56.4-158c-1.7-5.2-1.7-7-3.5-8.7-77 0-139.9-62.7-139.9-141 0-24.4 8.7-48.7 12.2-54 1.7-5.2 0-12.2-3.5-15.7l-97.9-54h-5.2c-5.2 0-10.5 1.7-12.2 5.2-5.2 5.2-56 57.5-108.4 57.5-52.5 0-103.2-52.2-108.4-57.5-1.7-5.2-7-7-12.2-7H387l-101.4 55.7c-3.5 3.5-5.2 10.4-3.5 15.7 0 0 12.2 27.9 12.2 54 0 76.6-63 141-139.9 141-1.7 1.7-1.7 5.2-3.5 8.7 0 0-7 41.8-7 73.1s7 73.1 7 73.1c1.7 5.2 1.7 7 3.5 8.7 77 0 139.9 62.7 139.9 141 0 22.6-8.7 45.3-12.2 54-1.7 5.2 0 12.2 3.5 15.7l96.2 54h5.2c5.2 0 10.5-1.7 12.2-5.2 1.7-1.7 56-60.9 110.2-60.9s104.6 55.8 109.9 61c1.7 1.7 7 5.2 12.2 5.2h5.2l99.7-55.7c3.5-3.5 5.2-10.4 3.5-15.7-1.7-3.5-12.2-27.9-12.2-54 0-76.6 63-141 139.9-141 1.7-1.7 1.7-5.2 3.5-8.7 0 0 7-41.8 7-73.1.1-29.6-6.9-71.4-6.9-71.4zM510.8 673c-94.6 0-172-77-172-171.2s77.4-171.2 172-171.2 172 77 172 171.2S605.4 673 510.8 673zm0-288.7c-63.9 0-118.1 52-118.1 117.6S445 619.4 510.8 619.4s118.1-52 118.1-117.6-54.2-117.5-118.1-117.5z",
  fill: "currentColor"
});

function SvgSetting(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", setting_extends({
    className: "setting_svg__icon",
    viewBox: "0 0 1024 1024",
    width: 48,
    height: 48
  }, props), setting_ref, setting_ref2);
}

/* harmony default export */ var setting = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTkyNjQ0MDM3OTkyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ1OTYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTkyNy42IDU4Ni42Yy0zLjcgMjQtMTguNSA0MC42LTM3IDQwLjZoLTMuN2MtNjEuMSAwLTExMS4xIDQ5LjgtMTExLjEgMTEyLjUgMCAyMC4zIDkuMyA0Mi40IDkuMyA0Mi40IDkuMyAyMi4xIDEuOSA0Ny45LTE2LjcgNjAuOGgtMS45TDY1OSA5MDMuN2gtMS45Yy01LjYgMS44LTEzIDMuNy0yMC40IDMuNy0xNC44IDAtMzEuNS03LjQtNDAuNy0xNi42LTEzLTE0LjctNTUuNi01My41LTg4LjktNTMuNS0zMy4zIDAtNzUuOSAzOC43LTg4LjkgNTEuNi05LjMgMTEuMS0yNC4xIDE2LjYtNDAuNyAxNi42LTcuNCAwLTE0LjgtMS44LTIwLjQtMy43aC0xLjlsLTEwMy43LTU5aC0xLjlDMjMxLjIgODMwIDIyMy43IDgwMi4zIDIzMyA3ODJjMCAwIDkuMy0yMi4xIDkuMy00Mi40IDAtNjAuOC01MC0xMTIuNS0xMTEuMS0xMTIuNS0xNi43IDAtMzEuNS0xNC43LTM3LTQwLjYgMC0xLjgtOS4zLTQ3LjktOS4zLTg0LjhzOS4zLTgzIDkuMy04NC44YzMuNy0yNCAxOC41LTQwLjYgMzctNDAuNmgzLjdDMTk2IDM3Ni41IDI0NiAzMjYuNyAyNDYgMjY0YzAtMjAuMy05LjMtNDIuNC05LjMtNDIuNC0xMS4xLTE4LjQtMy43LTQ2LjEgMTYuNy01OWgxLjlsMTExLjEtNjAuOGgxLjljMy43LTMuNyA5LjMtNS41IDE2LjctNS41IDE0LjggMCAyOS42IDUuNSA0MC43IDE2LjYgMTMgMTIuOSA1My43IDQ5LjggODcuMSA0OS44IDMzLjMgMCA3NC4xLTM1IDg3LjEtNDcuOSA5LjMtMTEuMSAyNC4xLTE2LjYgMzguOS0xNi42IDcuNCAwIDE0LjggMS44IDIwLjQgMy43aDEuOWwxMDcuNCA1OWgxLjljMTguNSAxMi45IDI1LjkgNDAuNiAxNi43IDYwLjggMCAwLTkuMyAyMi4xLTkuMyA0Mi40IDAgNjAuOCA1MCAxMTIuNSAxMTEuMSAxMTIuNWgzLjdjMTYuNyAwIDMxLjUgMTQuNyAzNyA0MC42IDAgMS44IDkuMyA0Ny45IDkuMyA4NC44LTIgMzYuNy0xMS4zIDgyLjgtMTEuMyA4NC42eiBtLTU2LjQtMTU4Yy0xLjctNS4yLTEuNy03LTMuNS04LjctNzcgMC0xMzkuOS02Mi43LTEzOS45LTE0MSAwLTI0LjQgOC43LTQ4LjcgMTIuMi01NCAxLjctNS4yIDAtMTIuMi0zLjUtMTUuN2wtOTcuOS01NGgtNS4yYy01LjIgMC0xMC41IDEuNy0xMi4yIDUuMi01LjIgNS4yLTU2IDU3LjUtMTA4LjQgNTcuNS01Mi41IDAtMTAzLjItNTIuMi0xMDguNC01Ny41LTEuNy01LjItNy03LTEyLjItN0gzODdsLTEwMS40IDU1LjdjLTMuNSAzLjUtNS4yIDEwLjQtMy41IDE1LjcgMCAwIDEyLjIgMjcuOSAxMi4yIDU0IDAgNzYuNi02MyAxNDEtMTM5LjkgMTQxLTEuNyAxLjctMS43IDUuMi0zLjUgOC43IDAgMC03IDQxLjgtNyA3My4xczcgNzMuMSA3IDczLjFjMS43IDUuMiAxLjcgNyAzLjUgOC43IDc3IDAgMTM5LjkgNjIuNyAxMzkuOSAxNDEgMCAyMi42LTguNyA0NS4zLTEyLjIgNTQtMS43IDUuMiAwIDEyLjIgMy41IDE1LjdsOTYuMiA1NGg1LjJjNS4yIDAgMTAuNS0xLjcgMTIuMi01LjIgMS43LTEuNyA1Ni02MC45IDExMC4yLTYwLjlzMTA0LjYgNTUuOCAxMDkuOSA2MWMxLjcgMS43IDcgNS4yIDEyLjIgNS4yaDUuMmw5OS43LTU1LjdjMy41LTMuNSA1LjItMTAuNCAzLjUtMTUuNy0xLjctMy41LTEyLjItMjcuOS0xMi4yLTU0IDAtNzYuNiA2My0xNDEgMTM5LjktMTQxIDEuNy0xLjcgMS43LTUuMiAzLjUtOC43IDAgMCA3LTQxLjggNy03My4xIDAuMS0yOS42LTYuOS03MS40LTYuOS03MS40ek01MTAuOCA2NzNjLTk0LjYgMC0xNzItNzctMTcyLTE3MS4yczc3LjQtMTcxLjIgMTcyLTE3MS4yIDE3MiA3NyAxNzIgMTcxLjJTNjA1LjQgNjczIDUxMC44IDY3M3ogbTAtMjg4LjdjLTYzLjkgMC0xMTguMSA1Mi0xMTguMSAxMTcuNlM0NDUgNjE5LjQgNTEwLjggNjE5LjRzMTE4LjEtNTIgMTE4LjEtMTE3LjYtNTQuMi0xMTcuNS0xMTguMS0xMTcuNXoiIGZpbGw9ImN1cnJlbnRDb2xvciIgcC1pZD0iNDU5NyI+PC9wYXRoPjwvc3ZnPg0K");

// EXTERNAL MODULE: ./src/assets/fonts/svg/shared/close.svg
var shared_close = __webpack_require__("Bh/k");

// CONCATENATED MODULE: ./src/components/layout/Sidebar.tsx
var Sidebar_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Sidebar_extends() { Sidebar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Sidebar_extends.apply(this, arguments); }



















const {
  side_wrapper,
  logo,
  theme_wrapper,
  head_menu
} = menus_module_default.a;
const {
  name: Sidebar_name,
  logo: logoPic
} = utils["f" /* globalSelf */].g_config;
const themeNums = Object(utils["c" /* generateNumList */])(5);
const toggleBtnNums = Object(utils["c" /* generateNumList */])(3);

const mediaScheme = () => window.matchMedia('(prefers-color-scheme: dark)');

const SideLogo = () => {
  return Sidebar_jsx(link_default.a, {
    href: "/"
  }, Sidebar_jsx("a", {
    className: `tac pos-rel block ${logo}`,
    title: Sidebar_name
  }, Sidebar_jsx("div", {
    className: "round bdr-half"
  }, Sidebar_jsx("i", {
    className: "icon-circle pos-abs t-0"
  })), Sidebar_jsx("h2", {
    className: "pos-abs r-m-p color-white bg-color-primary"
  }, Sidebar_jsx("span", {
    className: "vam"
  }, "\u5C45\u5C45", Sidebar_jsx("br", null), "\u8D1D\u8D1D")), Sidebar_jsx("img", {
    className: "pos-abs vam",
    src: logoPic,
    alt: Sidebar_name
  })));
};

const BackgroundOrColorTheme = () => {
  const {
    0: isFollowSystem,
    1: setIsFollowSystem
  } = Object(external_react_["useState"])(false);
  const keepData = Object(external_react_["useRef"])({
    isFollowSystem
  });
  const {
    0: activeKey,
    1: setActiveKey
  } = Object(external_react_["useState"])();
  const {
    0: currentColor,
    1: setCurrentColor
  } = Object(external_react_["useState"])(constant["g" /* DEFAULT_THEME_COLOR */]);
  const {
    dispatch
  } = Object(external_react_["useContext"])(context["a" /* CtxStore */]);
  const [, ...rest] = constant["b" /* BACKGROUND_COLOR_LIST */];

  const onSwitchTheme = ({
    backgroundKey,
    isColor = true,
    isMemory = true,
    isEqualReturn = true
  }) => {
    if (Object(external_util_["isUndefined"])(backgroundKey)) return;

    try {
      const isEqual = isEqualReturn && Object.is(activeKey, backgroundKey);
      const [isDefaultColor, isDarkColor, isLoveEyeColor] = isColor && !isEqual ? [Object.is(constant["c" /* DEFAULT_BACKGROUND_COLOR */], backgroundKey), rest.includes(backgroundKey), Object.is(backgroundKey, constant["e" /* DEFAULT_LOVEEYE_COLOR */])] : [];
      const isEmpty = isEqual || isDefaultColor;
      const bodyStyle = isEmpty ? {} : {
        background: isColor ? backgroundKey : `url(${__webpack_require__("YbZW")(`./icon-bg${backgroundKey}.png`)})`
      };
      const docStyle = document.documentElement.style;
      docStyle.setProperty('--color-default-gray', isLoveEyeColor ? constant["d" /* DEFAULT_DARK_COLOR */] : isDarkColor ? '#fff' : '#aaa');
      docStyle.setProperty('--color-lighten-gray', isLoveEyeColor ? '#d2d2d2' : isDarkColor ? '#676767' : '#dadada');
      setActiveKey(isEqual ? void 0 : backgroundKey);
      isMemory && Object(utils["j" /* setStorage */])(constant["a" /* APP_CONFIG */], {
        backgroundKey: isEmpty ? void 0 : backgroundKey
      });
      dispatch({
        type: 'global',
        payload: {
          bodyStyle
        }
      });
    } catch (error) {
      console.warn(`引入背景图片失败`);
    }
  };

  const onSwitchColor = color => {
    if (Object.is(currentColor, color)) return;
    const docStyle = document.documentElement.style;
    docStyle.setProperty('--color-primary', color);
    setCurrentColor(color);
    Object(utils["j" /* setStorage */])(constant["a" /* APP_CONFIG */], {
      themeColor: color
    });
  };

  const onCustomColorChange = Object(external_react_["useCallback"])(Object(external_throttle_debounce_["debounce"])(1000, onSwitchColor), []);

  const setThemeBackground = () => {
    const {
      backgroundKey
    } = Object(utils["d" /* getStorage */])(constant["a" /* APP_CONFIG */]);
    onSwitchTheme({
      backgroundKey,
      isColor: Object(external_util_["isString"])(backgroundKey) && backgroundKey.includes('#'),
      isEqualReturn: false
    });
  };

  const handleSwitchTheme = e => {
    if (!keepData.current.isFollowSystem) return;
    const isDarkMode = e ? e.matches : mediaScheme().matches;

    if (isDarkMode) {
      return onSwitchTheme({
        backgroundKey: constant["d" /* DEFAULT_DARK_COLOR */],
        isMemory: false,
        isEqualReturn: false
      });
    }

    return onSwitchTheme({
      backgroundKey: constant["c" /* DEFAULT_BACKGROUND_COLOR */],
      isMemory: false
    });
  };

  const changeIsFollowSystem = isOpen => {
    setIsFollowSystem(isOpen);
    keepData.current.isFollowSystem = isOpen;
  };

  const onFollowSystem = checked => {
    Object(utils["j" /* setStorage */])(constant["a" /* APP_CONFIG */], {
      isFollowSystem: checked
    });
    changeIsFollowSystem(checked);
    checked ? handleSwitchTheme() : setThemeBackground();
  };

  Object(external_react_["useEffect"])(() => {
    const {
      themeColor,
      isFollowSystem: storeIsFollowSystem
    } = Object(utils["d" /* getStorage */])(constant["a" /* APP_CONFIG */]);
    themeColor && onSwitchColor(themeColor);

    if (Object(external_util_["isBoolean"])(storeIsFollowSystem) && storeIsFollowSystem) {
      changeIsFollowSystem(true);
      return handleSwitchTheme();
    }

    setThemeBackground();
  }, []);
  Object(external_react_["useEffect"])(() => {
    const media = mediaScheme();
    media.addListener ? media.addListener(handleSwitchTheme) : media.addEventListener('change', handleSwitchTheme);
    return () => {
      ;
      (media.removeListener || media.removeListener)(handleSwitchTheme);
    };
  }, []);
  return Sidebar_jsx("section", {
    className: `${theme_wrapper} tac p-b-xl`
  }, Sidebar_jsx("h4", {
    className: "font-weight-normal r-m-p"
  }, "\u80CC\u666F"), Sidebar_jsx("div", {
    className: "m-t-xl"
  }, constant["b" /* BACKGROUND_COLOR_LIST */].map(color => {
    return Sidebar_jsx("button", {
      className: external_classnames_default()('pos-rel', {
        active: !isFollowSystem && Object.is(activeKey, color)
      }),
      disabled: isFollowSystem,
      style: {
        width: 42,
        height: 32,
        backgroundColor: color
      },
      onClick: () => onSwitchTheme({
        backgroundKey: color
      }),
      key: color
    }, Sidebar_jsx(common["f" /* SvgIcon */], {
      className: "pos-abs tblr-0 m-auto hide color-primary",
      component: SvgCheck
    }));
  }), themeNums.slice(-(themeNums.length - 2)).map(item => {
    const index = ++item;
    return Sidebar_jsx("button", Sidebar_extends({
      className: external_classnames_default()('pos-rel', {
        active: !isFollowSystem && Object.is(activeKey, index)
      }),
      disabled: isFollowSystem
    }, activeKey && {
      style: {
        boxShadow: '0px 0px 5px var(--color-lighten-gray)'
      }
    }, {
      onClick: () => onSwitchTheme({
        backgroundKey: index,
        isColor: false
      }),
      key: index
    }), Sidebar_jsx("i", {
      className: `icon-bg${index}`
    }), Sidebar_jsx(common["f" /* SvgIcon */], {
      className: "pos-abs tblr-0 m-auto hide color-primary",
      component: SvgCheck
    }));
  }), Sidebar_jsx("h4", {
    className: "font-weight-normal r-m-p m-t-b-xl"
  }, "\u8DDF\u968F\u7CFB\u7EDF:", Sidebar_jsx("span", {
    className: "m-l-xxs"
  }, Sidebar_jsx(common["g" /* Switch */], {
    checked: isFollowSystem,
    checkedChildren: "\u5F00",
    uncheckedChildren: "\u5173",
    onChange: onFollowSystem
  })))), Sidebar_jsx("h4", {
    className: "font-weight-normal r-m-p m-b-xl"
  }, "\u989C\u8272"), constant["j" /* THEME_COLOR_LIST */].map((color, index) => {
    const isLast = Object.is(constant["j" /* THEME_COLOR_LIST */].length - 1, index);
    return Sidebar_jsx("button", Sidebar_extends({
      className: external_classnames_default()('pos-rel', {
        active: Object.is(currentColor, color)
      }),
      style: {
        width: 42,
        height: 32,
        backgroundColor: color
      }
    }, !isLast && {
      onClick: () => onSwitchColor(color)
    }, {
      key: color
    }), Sidebar_jsx(common["f" /* SvgIcon */], {
      className: "pos-abs tblr-0 m-auto hide color-white",
      component: SvgCheck
    }), isLast && Sidebar_jsx(external_react_default.a.Fragment, null, Sidebar_jsx("input", {
      className: "input-custom-color pos-abs tblr-0 w-h-100 cursign",
      onChange: ({
        target: {
          value
        }
      }) => onCustomColorChange(value),
      type: "color"
    }), Sidebar_jsx("span", {
      className: "font-size-xs color-white"
    }, "\u81EA\u5B9A\u4E49")));
  }));
};

const Sidebar = () => {
  const {
    store
  } = Object(external_react_["useContext"])(context["a" /* CtxStore */]);
  const {
    bodyStyle
  } = store;
  const keepData = Object(external_react_["useRef"])({
    pathname: ''
  });
  const {
    pathname
  } = Object(router_["useRouter"])();
  const {
    0: toogle,
    1: setToogle
  } = Object(external_react_["useState"])(false);
  const {
    isShow,
    toggleContent
  } = Object(hooks["b" /* useIsVisible */])();
  Object(external_react_["useEffect"])(() => {
    if (!Object(helper["b" /* isSmallScreen */])()) return;

    const handleRouteChange = url => {
      const {
        pathname
      } = keepData.current;

      if (!Object.is(url, pathname)) {
        setToogle(false);
      }
    };

    const {
      events
    } = router_default.a;
    events.on('routeChangeStart', handleRouteChange);
    return () => {
      events.off('routeChangeStart', handleRouteChange);
    };
  }, []);
  Object(external_react_["useEffect"])(() => {
    keepData.current.pathname = pathname;
  }, [pathname]);
  return Sidebar_jsx(external_react_default.a.Fragment, null, Sidebar_jsx("div", {
    className: `pos-fix tar z-3 t-l-0 w-100 bg-color-primary ${head_menu}`
  }, Sidebar_jsx("button", {
    className: external_classnames_default()(`bg-color-transparent vam`, {
      active: toogle
    }),
    onClick: () => setToogle(!toogle)
  }, toggleBtnNums.map(num => Sidebar_jsx("span", {
    key: num
  }, Sidebar_jsx("i", null))))), Sidebar_jsx("section", {
    style: _objectSpread({}, toogle && {
      left: 0
    }, {
      zIndex: 13
    }, bodyStyle),
    className: external_classnames_default()(`pos-fix t-l-0 h-100 bg-color-white ${side_wrapper}`, {
      active: toogle
    })
  }, Sidebar_jsx(SideLogo, null), Sidebar_jsx(layout_Menubar, null), Sidebar_jsx("div", {
    className: "pos-rel"
  }, Sidebar_jsx("button", {
    onClick: toggleContent,
    className: external_classnames_default()('btn-theme-setting pos-abs bg-color-primary color-white p-tblr-xxs font-size-lg bd-none z-1')
  }, Sidebar_jsx(common["f" /* SvgIcon */], {
    component: isShow ? shared_close["a" /* ReactComponent */] : SvgSetting
  })), Sidebar_jsx("div", {
    className: "pos-abs tblr-0 m-auto",
    style: {
      transform: `translateX(${isShow ? 0 : '-100%'})`,
      transition: '.5s'
    }
  }, Sidebar_jsx(BackgroundOrColorTheme, null)))));
};

/* harmony default export */ var layout_Sidebar = (Sidebar);
// CONCATENATED MODULE: ./src/components/layout/LayoutMain.tsx

var LayoutMain_jsx = external_react_default.a.createElement;

function LayoutMain_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function LayoutMain_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { LayoutMain_ownKeys(Object(source), true).forEach(function (key) { LayoutMain_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { LayoutMain_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function LayoutMain_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const LayoutMain = ({
  pageTitleProps,
  children,
  className = '',
  style
}) => {
  const {
    store
  } = Object(external_react_["useContext"])(context["a" /* CtxStore */]);
  const {
    bodyStyle
  } = store;
  return LayoutMain_jsx("section", {
    style: LayoutMain_objectSpread({
      marginBottom: -12,
      paddingBottom: 12
    }, style, {}, bodyStyle),
    className: `pos-rel bg-color-light-gray${className ? ` ${className}` : ''}`
  }, LayoutMain_jsx(common["e" /* PageTitle */], pageTitleProps), LayoutMain_jsx("div", {
    className: "layout-container"
  }, children));
};
// CONCATENATED MODULE: ./src/components/layout/index.tsx

var layout_jsx = external_react_default.a.createElement;






const Layout = ({
  children
}) => {
  const {
    store
  } = Object(external_react_["useContext"])(context["a" /* CtxStore */]);
  const {
    bodyStyle
  } = store;
  return layout_jsx("main", {
    style: bodyStyle,
    className: "pos-rel min-h-100 main-container"
  }, layout_jsx(layout_NextHead, null), layout_jsx(layout_Sidebar, null), children, layout_jsx(layout_Footer, null));
};

/* harmony default export */ var layout = __webpack_exports__["b"] = (Layout);


/***/ }),

/***/ "Bh/k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgClose; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", null));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M517.084 479.115L301.906 263.938a26.852 26.852 0 10-37.986 37.951l215.176 215.195L263.92 732.28a26.852 26.852 0 1037.97 37.968l215.194-215.176L732.28 770.247a26.852 26.852 0 1037.969-37.95L555.071 517.083l215.177-215.177a26.852 26.852 0 10-37.969-37.97L517.102 479.116z",
  fill: "currentColor"
});

function SvgClose(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    className: "close_svg__icon",
    viewBox: "0 0 1024 1024",
    width: 48,
    height: 48
  }, props), _ref, _ref2);
}

/* unused harmony default export */ var _unused_webpack_default_export = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTkxNDM3ODYyMTU1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY3NzciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxNy4wODQxMTk4NCA0NzkuMTE0NzU0ODNMMzAxLjkwNjM3ODMxIDI2My45Mzc1Mzc3NmEyNi44NTIzNzYzMSAyNi44NTIzNzYzMSAwIDEgMC0zNy45ODY2NzIyMSAzNy45NTE1MzMzNWwyMTUuMTc2NjkyNjIgMjE1LjE5NTA0ODczTDI2My45MTk3MDYwNyA3MzIuMjc4NjQ0MTFhMjYuODUyMzc2MzEgMjYuODUyMzc2MzEgMCAxIDAgMzcuOTY5MzY1MDQgMzcuOTY4ODQwNTdsMjE1LjE5NTA0ODc4LTIxNS4xNzY2OTI2NCAyMTUuMTk1MDQ4NjYgMjE1LjE3NjY5MjY0YTI2Ljg1MjM3NjMxIDI2Ljg1MjM3NjMxIDAgMSAwIDM3Ljk2ODg0MDYtMzcuOTUxMDA4ODlsLTIxNS4xNzY2OTI2Mi0yMTUuMjEyMzU1OSAyMTUuMTc2NjkyNjItMjE1LjE3NzIxNzFhMjYuODUyMzc2MzEgMjYuODUyMzc2MzEgMCAxIDAtMzcuOTY4ODQwNi0zNy45NjkzNjUwNUw1MTcuMTAxOTUxNDcgNDc5LjExNDc1NDgzeiIgZmlsbD0iY3VycmVudENvbG9yIiBwLWlkPSI2Nzc4Ij48L3BhdGg+PC9zdmc+DQo=");


/***/ }),

/***/ "D0jQ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"side_wrapper": "menus_side_wrapper__10MMQ",
	"logo": "menus_logo__2TPtA",
	"ani-uibfq7f": "menus_ani-uibfq7f__1rpr5",
	"theme_wrapper": "menus_theme_wrapper__29olf",
	"head_menu": "menus_head_menu__1vF-7"
};


/***/ }),

/***/ "E4SY":
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "J/1c":
/***/ (function(module, exports) {

module.exports = require("mockjs");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "LUSG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useIsVisible; });
/* unused harmony export usePrevious */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useProgressiveImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useEventListener(eventName, handler, element =  false ? undefined : null) {
  const savedHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(handler);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    savedHandler.current = handler;
  }, [handler]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!element || !element.addEventListener) return;

    const eventListener = event => savedHandler.current(event);

    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
const useIsVisible = (initStatus = false) => {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initStatus);

  const toggle = (status = true) => {
    setVisible(status);
  };

  return {
    isShow: visible,
    showContent: () => toggle(),
    hideContent: () => toggle(false),
    toggleContent: () => toggle(!visible)
  };
};
function usePrevious(value) {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    ref.current = value;
  });
  return ref.current;
} //ref: https://stackoverflow.com/a/60458593

const useProgressiveImage = (src = '') => {
  const {
    0: sourceLoaded,
    1: setSourceLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!src) return;
    const img = new Image();
    img.src = src;

    img.onload = () => setSourceLoaded(src);

    img.onerror = () => {};
  }, [src]);
  return sourceLoaded;
};

/***/ }),

/***/ "M738":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ toolInfo; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ skillInfo; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ worksInfo; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ jobsInfo; });

// EXTERNAL MODULE: ./src/store/mock/skillInfo.json
var skillInfo = __webpack_require__("Pg8g");

// EXTERNAL MODULE: ./src/store/mock/jobsInfo.json
var jobsInfo = __webpack_require__("jiQw");

// CONCATENATED MODULE: ./src/store/mock/worksInfo.ts
const imgPath = 'works/';
const pcYxtdimgSrc = `${imgPath}yxtd/`,
      pcHzimgSrc = `${imgPath}latest/`,
      // pcRzltimgSrc = `${imgPath}rzlt/`,
wapimgSrc = `${imgPath}wap/`,
      appimgSrc = `${imgPath}applets/`,
      webAppimgSrc = `${imgPath}webapp/`; // qrcodeimgSrc = `${imgPath}qrcode/`

const latest = [{
  imgSrc: pcHzimgSrc + '1.png',
  title: '数据大屏',
  links: 'https://github.com/zangxiyang/CQUT-party-bigdata',
  desc: '该项目为人工智能学院打造党员管理的高效化，以加强党员教育为目的，并且结合各级党政机关部门的实际情况，依托互联网、可视化、数据交互、协助等多方面建设的“智慧党建平台”系统。可实现党员学习监管、网上学习、党建信息汇集等功能，为党建事业提供坚强的组织保证。主要功能包括：党总支大屏，支部大屏，组织架构，党务工作，三会一课，党日活动，学习培训，支部发展，政治生日，党员发展等功能 。',
  category: '学校服务'
}];
const applets = [{
  imgSrc: appimgSrc + '1.png',
  title: '社团app',
  links: 'https://github.com/xiaolifeipiao/club',
  searchKeyword: '社团app',
  desc: '社团app是一个帮助社团管理高校的社团平台',
  txtdetails: '社团app',
  category: '社团app'
}];
const pc = [{
  imgSrc: pcYxtdimgSrc + '1.png',
  title: '智慧党建平台',
  links: 'https://github.com/zangxiyang/CQUT-smartparty-front',
  txtdetails: '智慧党建平台',
  category: '学习服务'
}];
const wap = [{
  imgSrc: wapimgSrc + '1.png',
  title: '社团管理app',
  links: 'https://github.com/xiaolifeipiao/club',
  txtdetails: '社团管理app',
  category: '学校服务'
}];
const webApp = [{
  imgSrc: webAppimgSrc + '2.png',
  title: '',
  links: 'https://github.com/xiaolifeipiao/carclub_front',
  txtdetails: '懂车帝车型大会',
  category: '移动网页',
  desc: '通过vue3+ts+vite+vant+axios-mapper(模型+防止二次请求),项目技术选型上，我选用了最新的技术，在开发过程遇到一些问题导致开发进度受到影响，在以后的项目开发中，对于不是用来测试技术的项目，选择自己熟悉的版本，重要，重要，非常重要。在项目中虽然遇到一些瓶颈，但是我并没得放弃，而是慢慢把它细化，分而治之。在最终解决不了时，采用其他侧面的解决方案。本次项目的格式化提交做的不好，只是采用eslint+prettier进行简单的本地格式化检查和提交规范，并未加入husky、commitlint和lintstaged约束提交。后期我会加上。在mock数据的选择上，因为及时查阅vite的第三方插件mock可以使用开发和生成一起使用的mock数据。最终选择json-server+mock。导致接口部分没得完善。 在测试方面，因时间问题并没的加入测试，后期补上。在该项目的开发中，了解了mock数据的选型，以及 vite的热更新真的快 ，加强在这方面 的学习，以及对vue3全家桶和ts有了一个全新的认识，vue3的父子组件的执行和异步组件加载，以及子组件的props的只能读不能修改，vue3a父子组件的通信方式和vue2的区别，以及在vue3+ts实现vuex的分模块开发的封装等等，我需要下来在加强vue3的一些特性的学习和原理实现。最后感谢懂车帝平台给我门分享和交流前端和后端的学习，以及和我们交流一些技术和学习路线，收获颇多'
}, {
  imgSrc: webAppimgSrc + '1.png',
  title: '',
  links: 'https://github.com/xiaolifeipiao/boss',
  txtdetails: '仿boss开发',
  category: '移动网页',
  desc: '通过vue2仿写boss实现'
}];
/* harmony default export */ var worksInfo = ({
  latest: {
    data: latest,
    title: '最新'
  },
  applets: {
    data: applets,
    title: '小程序'
  },
  wap: {
    data: wap,
    title: '移动端网页'
  },
  webApp: {
    data: webApp,
    title: 'WebApp'
  },
  pc: {
    data: pc,
    title: 'PC端网站',
    isHot: true
  }
});
// CONCATENATED MODULE: ./src/store/mock/toolInfo/chromeExtension.ts
/* harmony default export */ var chromeExtension = ([{
  name: 'OneTab',
  src: 'https://extension.extfans.com/extension/chphlpgkkbolifaimnlloiipkdnihall/icon/icon.png?imageView2/2/w/64/h/64/q/100',
  url: 'https://chrome.google.com/webstore/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall'
}, {
  name: '记事本',
  src: 'https://extension.extfans.com/extension/nofepkcoibolggileilfiimccamagcfa/icon/icon.png?imageView2/2/w/128/h/128/q/100',
  url: 'https://chrome.google.com/webstore/detail/%E5%9C%A8%E7%BA%BF%E8%AE%B0%E4%BA%8B%E6%9C%AC/nofepkcoibolggileilfiimccamagcfa'
}, {
  name: 'Online Download Manager',
  src: 'https://extension.extfans.com/extension/opjjpmhoiojifppkkcdabiobhakljdgm/icon/icon.png?imageView2/2/w/64/h/64/q/100'
}, {
  name: 'Wappalyzer',
  src: 'https://extension.extfans.com/extension/gppongmhjkpfnbhagpmjfkannfbllamg/icon/icon.png?imageView2/2/w/64/h/64/q/100',
  url: 'https://chrome.google.com/webstore/detail/online-download-manager/opjjpmhoiojifppkkcdabiobhakljdgm'
}, {
  name: 'Tampermonkey：用户脚本管理器（油猴）',
  src: 'https://extension.extfans.com/extension/gjldcdngmdknpinoemndlidpcabkggco/icon/icon.png?imageView2/2/w/64/h/64/q/100',
  url: 'https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo'
}, {
  name: '扩展管理器（Extension Manager）',
  src: 'https://extension.extfans.com/extension/dhdgffkkebhmkfjojejmpbldmpobfkfo/icon/icon.png?t=0?imageView2/2/w/64/h/64/q/100',
  url: 'https://chrome.google.com/webstore/detail/extension-manager/gjldcdngmdknpinoemndlidpcabkggco'
}, {
  name: '二管家',
  src: 'https://extension.extfans.com/extension/aajodjghehmlpahhboidcpfjcncmcklf/icon/icon.png?imageView2/2/w/64/h/64/q/100',
  url: 'https://chrome.google.com/webstore/detail/nooboss/aajodjghehmlpahhboidcpfjcncmcklf'
}, {
  name: 'uBlock Origin - 广告拦截器',
  src: 'https://extension.extfans.com/extension/cjpalhdlnbpafiamejdnhcphjbkeiagm/icon/icon.png?imageView2/2/w/64/h/64/q/100',
  url: 'https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm'
}, {
  name: 'Surfingkeys',
  src: 'https://extension.extfans.com/extension/gfbliohnnapiefjpjlpjnehglfpaknnc/icon/icon.png?imageView2/2/w/64/h/64/q/100',
  url: 'https://chrome.google.com/webstore/detail/surfingkeys/gfbliohnnapiefjpjlpjnehglfpaknnc'
}, {
  name: 'Infinity 新标签页(Pro)',
  src: 'https://extension.extfans.com/extension/nnnkddnnlpamobajfibfdgfnbcnkgngh/icon/icon.png?imageView2/2/w/64/h/64/q/100',
  url: 'https://chrome.google.com/webstore/detail/infinity-new-tab-pro/nnnkddnnlpamobajfibfdgfnbcnkgngh'
}, {
  name: 'Material Theme UI for DevTools',
  src: 'https://extension.extfans.com/extension/ejjjgkmkicngofngkjdcahlhnmmoicim/icon/icon.png?imageView2/2/w/64/h/64/q/100',
  url: 'https://chrome.google.com/webstore/detail/material-devtools-theme-c/jmefikbdhgocdjeejjnnepgnfkkbpgjo'
}, {
  name: 'GitHub Dark Theme',
  src: 'https://extension.extfans.com/extension/odkdlljoangmamjilkamahebpkgpeacp/icon/icon.png?imageView2/2/w/64/h/64/q/100',
  url: 'https://chrome.google.com/webstore/detail/github-dark-theme/odkdlljoangmamjilkamahebpkgpeacp'
}, {
  name: 'octotree',
  src: 'https://extension.extfans.com/extension/fjcahddnekkgihjnjnimgiggdmlgcnbc/icon/icon.png?imageView2/2/w/64/h/64/q/100',
  url: 'https://www.octotree.io/'
}, {
  name: 'GitZip for github',
  src: 'https://extension.extfans.com/extension/ffabmkklhbepgcgfonabamgnfafbdlkn/icon/icon.png?imageView2/2/w/64/h/64/q/100',
  url: 'https://chrome.google.com/webstore/detail/gitzip-for-github/ffabmkklhbepgcgfonabamgnfafbdlkn'
}, {
  name: 'enhanced-github',
  src: 'https://raw.githubusercontent.com/softvar/enhanced-github/master/icons/enhanced-github128.png',
  url: 'https://chrome.google.com/webstore/detail/enhanced-github/anlikcnbgdeidpacdbdljnabclhahhmd'
}]);
// EXTERNAL MODULE: ./src/scripts/utils/index.ts
var utils = __webpack_require__("kIc0");

// CONCATENATED MODULE: ./src/store/mock/toolInfo/iterm2.ts

/* harmony default export */ var iterm2 = ([{
  name: 'tmux',
  src: Object(utils["a" /* createImage */])({
    text: 'tmux'
  }),
  url: 'https://github.com/tmux/tmux'
}, {
  name: 'oh-my-zsh',
  src: 'https://ohmyz.sh/img/OMZLogo_BnW.png',
  url: 'https://ohmyz.sh/'
}, {
  name: 'autojump',
  src: Object(utils["a" /* createImage */])({
    text: 'autojump'
  }),
  url: 'https://github.com/wting/autojump'
}, {
  name: 'rmtrash',
  src: Object(utils["a" /* createImage */])({
    text: 'rmtrash'
  }),
  url: 'https://github.com/PhrozenByte/rmtrash'
}, {
  name: 'mycli',
  src: Object(utils["a" /* createImage */])({
    text: 'mycli'
  }),
  url: 'https://github.com/dbcli/mycli'
}, {
  name: 'colorls',
  src: Object(utils["a" /* createImage */])({
    text: 'colorls'
  }),
  url: 'https://github.com/athityakumar/colorls'
}, {
  name: 'zsh-autosuggestions',
  src: Object(utils["a" /* createImage */])({
    text: 'zsh-autosuggestions'
  }),
  url: 'https://github.com/zsh-users/zsh-autosuggestions'
}, {
  name: 'powerlevel10k',
  src: 'https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/prompt-styles-high-contrast.png',
  url: 'https://github.com/romkatv/powerlevel10k'
}, {
  name: 'Homebrew',
  src: 'https://brew.sh/assets/img/homebrew-256x256.png',
  url: 'https://brew.sh/'
}, {
  name: 'mas',
  src: 'https://raw.githubusercontent.com/mas-cli/mas/master/mas-cli.png',
  url: 'https://github.com/mas-cli/mas'
}]);
// CONCATENATED MODULE: ./src/store/mock/toolInfo/mac.ts
/* harmony default export */ var mac = ([{
  name: 'MateTranslate',
  src: 'https://extension.extfans.com/extension/ihmgiclibbndffejedjimfjmfoabpcke/icon/icon.png?imageView2/2/w/64/h/64/q/100',
  url: 'https://gikken.co/mate-translate/'
}, {
  name: 'Alfred',
  src: 'https://www.alfredapp.com/media/logo4.png',
  url: 'https://www.alfredapp.com/'
}, {
  name: 'lemon',
  src: 'https://lemon.qq.com/images/lemon/logo.png',
  url: 'https://lemon.qq.com/'
}, {
  name: 'popclip',
  src: 'https://pilotmoon.com/hp/img/PopClipFlat32.png',
  url: 'https://pilotmoon.com/popclip/'
}, {
  name: 'sip',
  src: 'https://sipapp.io/assets/img/favicon/96x96.png',
  url: 'https://sipapp.io/'
}, {
  name: 'NightTone',
  src: 'https://alexdenk.eu/img/products/icon-nighttone.png',
  url: 'https://alexdenk.eu/mywork/nighttone.html'
}, {
  name: 'mos',
  src: 'https://mos.caldis.me/resources/image/logo-small.png',
  url: 'https://mos.caldis.me/'
}, {
  name: 'ishot',
  src: 'https://13315641.s21i.faiusr.com/4/1/ABUIABAEGAAg342Z7gUoxIGSrgYwgAQ4gAQ.png',
  url: 'https://www.better365.cn/ishot.html'
}, {
  name: 'Hidden Bar',
  src: 'https://raw.githubusercontent.com/dwarvesf/hidden/master/hidden/Assets.xcassets/AppIcon.appiconset/64x64.png',
  url: 'https://github.com/dwarvesf/hidden'
}, {
  name: 'CleanMyMac',
  src: 'https://cdn2.macpaw.com/images/83934498d56fcab2caac53db98acdb62.webp',
  url: 'https://macpaw.com/cleanmymac'
}]);
// CONCATENATED MODULE: ./src/store/mock/toolInfo/jsLib.ts

/* harmony default export */ var jsLib = ([{
  name: 'unfetch',
  src: Object(utils["a" /* createImage */])({
    text: 'unfetch'
  }),
  url: 'https://github.com/developit/unfetch'
}, {
  name: 'request',
  src: Object(utils["a" /* createImage */])({
    text: 'request'
  }),
  url: 'https://github.com/request/request'
}, {
  name: 'compressorjs',
  src: Object(utils["a" /* createImage */])({
    text: 'compressorjs'
  }),
  url: 'https://github.com/fengyuanchen/compressorjs'
}, {
  name: 'react-lazyload',
  src: Object(utils["a" /* createImage */])({
    text: 'react-lazyload'
  }),
  url: 'https://github.com/twobin/react-lazyload'
}, {
  name: 'react-infinite-scroller',
  src: Object(utils["a" /* createImage */])({
    text: 'react-infinite-scroller'
  }),
  url: 'https://github.com/danbovey/react-infinite-scroller'
}, {
  name: 'react-placeholder',
  src: Object(utils["a" /* createImage */])({
    text: 'react-placeholder'
  }),
  url: 'https://github.com/buildo/react-placeholder'
}, {
  name: 'react-beautiful-dnd',
  src: Object(utils["a" /* createImage */])({
    text: 'react-beautiful-dnd'
  }),
  url: 'https://github.com/atlassian/react-beautiful-dnd'
}]);
// CONCATENATED MODULE: ./src/store/mock/toolInfo/index.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const generateUid = () => Math.random().toString(32).slice(2, 8);

const toolInfo = [{
  title: 'Chrome扩展（需备梯子）',
  list: chromeExtension
}, {
  title: 'iterm2（终端利器）',
  list: iterm2
}, {
  title: 'Mac软件',
  list: mac
}, {
  title: 'js库',
  list: jsLib
}].map(item => _objectSpread({
  id: generateUid()
}, item));
// CONCATENATED MODULE: ./src/store/mock/index.ts






/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Pg8g":
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Application and Data\",\"type\":\"fe\",\"data\":[{\"name\":\"React\",\"imgName\":\"React\",\"url\":\"//reactjs.org\"},{\"name\":\"TypeScript\",\"imgName\":\"TypeScript\",\"url\":\"//typescriptlang.org\"},{\"name\":\"React Native\",\"imgName\":\"ReactNative\",\"url\":\"//facebook.github.io/react-native\"},{\"name\":\"Redux\",\"imgName\":\"Redux\",\"url\":\"//redux.js.org\"},{\"name\":\"NextJs\",\"imgName\":\"Next\",\"url\":\"//nextjs.org\"},{\"name\":\"Vue&Vuex\",\"imgName\":\"Vue\",\"url\":\"//cn.vuejs.org\"},{\"name\":\"Nuxt\",\"imgName\":\"Nuxt\",\"url\":\"//nuxtjs.org\"},{\"name\":\"JavaScript\",\"imgName\":\"JavaScript\",\"url\":\"//developer.mozilla.org/zh-CN/docs/Web/JavaScript\"},{\"name\":\"Es6\",\"imgName\":\"EcmaScript\",\"url\":\"//es6.ruanyifeng.com\"},{\"name\":\"NodeJs\",\"imgName\":\"NodeJs\",\"url\":\"//nodejs.org\"},{\"name\":\"Express\",\"imgName\":\"Express\",\"url\":\"//expressjs.com\"},{\"name\":\"jQuery\",\"imgName\":\"Jquery\",\"url\":\"//jquery.com\"},{\"name\":\"RequireJs\",\"imgName\":\"RequireJs\",\"url\":\"//requirejs.org\"},{\"name\":\"Sass\",\"imgName\":\"Sass\",\"url\":\"//sass-lang.com\"},{\"name\":\"ComPass\",\"imgName\":\"ComPass\",\"url\":\"//compass-style.org\"},{\"name\":\"Less\",\"imgName\":\"Less\",\"url\":\"//lesscss.org\"},{\"name\":\"Json\",\"imgName\":\"Json\",\"url\":\"//www.json.org/\"},{\"name\":\"Html5\",\"imgName\":\"Html5\",\"url\":\"//developer.mozilla.org/zh-CN/docs/Web/HTML\"},{\"name\":\"Css3\",\"imgName\":\"Css3\",\"url\":\"//developer.mozilla.org/zh-CN/docs/Web/CSS\"},{\"name\":\"AntDesign\",\"imgName\":\"AntDesign\",\"url\":\"//ant.design\"},{\"name\":\"Element\",\"imgName\":\"Element\",\"url\":\"//element.eleme.cn\"},{\"name\":\"BootStrap\",\"imgName\":\"BootStrap\",\"url\":\"//getbootstrap.com\",\"show\":true},{\"name\":\"Php\",\"imgName\":\"Php\",\"url\":\"//php.net\"},{\"name\":\"MySQL\",\"imgName\":\"Mysql\",\"url\":\"//mysql.com\"},{\"name\":\"ThinkPhp\",\"imgName\":\"ThinkPhp\",\"url\":\"//thinkphp.cn\"}]},{\"title\":\"DevOps\",\"type\":\"tool\",\"data\":[{\"name\":\"WebPack\",\"imgName\":\"WebPack\",\"url\":\"//webpack.js.org\"},{\"name\":\"Gulp\",\"imgName\":\"Gulp\",\"url\":\"//gulpjs.com\"},{\"name\":\"Git\",\"imgName\":\"Git\",\"url\":\"//git-scm.com\"},{\"name\":\"Babel\",\"imgName\":\"Babel\",\"url\":\"//babeljs.io\"},{\"name\":\"Npm\",\"imgName\":\"Npm\",\"url\":\"//www.npmjs.com\"},{\"name\":\"Yarn\",\"imgName\":\"Yarn\",\"url\":\"//yarnpkg.com\"},{\"name\":\"Docker\",\"imgName\":\"Docker\",\"url\":\"//www.docker.com\"},{\"name\":\"Composer\",\"imgName\":\"Composer\",\"url\":\"//getcomposer.org\"}]},{\"title\":\"Utilities\",\"type\":\"tool\",\"data\":[{\"name\":\"Postman\",\"imgName\":\"Postman\",\"url\":\"//www.getpostman.com\"},{\"name\":\"Charles\",\"imgName\":\"Charles\",\"url\":\"//www.charlesproxy.com\"},{\"name\":\"Stack Overflow\",\"imgName\":\"StackOverflow\",\"url\":\"//stackoverflow.com\"},{\"name\":\"GitHub Pages\",\"imgName\":\"GithubPages\",\"url\":\"//pages.github.com\"},{\"name\":\"Visual Studio Code\",\"imgName\":\"Vscode\",\"url\":\"//code.visualstudio.com\"},{\"name\":\"PhpStorm\",\"imgName\":\"PhpStorm\",\"url\":\"//www.jetbrains.com/phpstorm\"},{\"name\":\"Navicat\",\"imgName\":\"Navicat\",\"url\":\"//www.navicat.com\"},{\"name\":\"Mamp\",\"imgName\":\"Mamp\",\"url\":\"//www.mamp.info\"},{\"name\":\"Markdown\",\"imgName\":\"Markdown\",\"url\":\"//wowubuntu.com/markdown\"},{\"name\":\"PhotoShop\",\"imgName\":\"PhotoShop\",\"url\":\"//www.adobe.com\"},{\"name\":\"Illustrator\",\"imgName\":\"Illustrator\",\"url\":\"//www.adobe.com\"},{\"name\":\"CorelDraw\",\"imgName\":\"CorelDraw\",\"url\":\"//www.coreldraw.com\"}]}]");

/***/ }),

/***/ "Q3IO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "react-lazyload"
var external_react_lazyload_ = __webpack_require__("E4SY");
var external_react_lazyload_default = /*#__PURE__*/__webpack_require__.n(external_react_lazyload_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// CONCATENATED MODULE: ./src/components/react-sticky/Sticky.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Sticky_Sticky extends external_react_["Component"] {
  constructor(props, context) {
    super(props, context);

    _defineProperty(this, "state", {
      isSticky: false,
      wasSticky: false,
      style: {}
    });

    _defineProperty(this, "handleContainerEvent", ({
      distanceFromTop,
      distanceFromBottom,
      eventSource
    }) => {
      const parent = this.context.getParent();
      let preventingStickyStateChanges = false;

      if (this.props.relative) {
        preventingStickyStateChanges = eventSource !== parent;
        distanceFromTop = -(eventSource.scrollTop + eventSource.offsetTop) + this.placeholder.offsetTop;
      }

      const placeholderClientRect = this.placeholder.getBoundingClientRect();
      const contentClientRect = this.content.getBoundingClientRect();
      const calculatedHeight = contentClientRect.height;
      const bottomDifference = distanceFromBottom - this.props.bottomOffset - calculatedHeight;
      const wasSticky = !!this.state.isSticky;
      const isSticky = preventingStickyStateChanges ? wasSticky : distanceFromTop <= -this.props.topOffset && distanceFromBottom > -this.props.bottomOffset;
      distanceFromBottom = (this.props.relative ? parent.scrollHeight - parent.scrollTop : distanceFromBottom) - calculatedHeight;
      const style = !isSticky ? {} : {
        position: 'fixed',
        top: bottomDifference > 0 ? this.props.relative ? parent.offsetTop - parent.offsetParent.scrollTop : 0 : bottomDifference,
        left: placeholderClientRect.left,
        width: placeholderClientRect.width
      };

      if (!this.props.disableHardwareAcceleration) {
        style.transform = 'translateZ(0)';
      }

      this.setState({
        isSticky,
        wasSticky,
        distanceFromTop,
        distanceFromBottom,
        calculatedHeight,
        style
      });
    });

    if (!this.context.subscribe) throw new TypeError('Expected Sticky to be mounted within StickyContainer');
    this.context.subscribe(this.handleContainerEvent);
  }

  componentWillUnmount() {
    this.context.unsubscribe(this.handleContainerEvent);
  }

  componentDidUpdate() {
    this.placeholder.style.paddingBottom = this.props.disableCompensation ? 0 : `${this.state.isSticky ? this.state.calculatedHeight : 0}px`;
  }

  render() {
    const element = external_react_default.a.cloneElement(this.props.children({
      isSticky: this.state.isSticky,
      wasSticky: this.state.wasSticky,
      distanceFromTop: this.state.distanceFromTop,
      distanceFromBottom: this.state.distanceFromBottom,
      calculatedHeight: this.state.calculatedHeight,
      style: this.state.style
    }), {
      ref: content => {
        this.content = external_react_dom_default.a.findDOMNode(content);
      }
    });
    return __jsx("div", null, __jsx("div", {
      ref: placeholder => this.placeholder = placeholder
    }), element);
  }

}

_defineProperty(Sticky_Sticky, "defaultProps", {
  relative: false,
  topOffset: 0,
  bottomOffset: 0,
  disableCompensation: false,
  disableHardwareAcceleration: false
});

_defineProperty(Sticky_Sticky, "contextTypes", {
  subscribe: external_prop_types_default.a.func,
  unsubscribe: external_prop_types_default.a.func,
  getParent: external_prop_types_default.a.func
});
// EXTERNAL MODULE: external "raf"
var external_raf_ = __webpack_require__("igX3");
var external_raf_default = /*#__PURE__*/__webpack_require__.n(external_raf_);

// CONCATENATED MODULE: ./src/components/react-sticky/Container.js
var Container_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Container_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Container_Container extends external_react_["PureComponent"] {
  constructor(...args) {
    super(...args);

    Container_defineProperty(this, "events", ["resize", "scroll", "touchstart", "touchmove", "touchend", "pageshow", "load"]);

    Container_defineProperty(this, "subscribers", []);

    Container_defineProperty(this, "rafHandle", null);

    Container_defineProperty(this, "subscribe", handler => {
      this.subscribers = this.subscribers.concat(handler);
    });

    Container_defineProperty(this, "unsubscribe", handler => {
      this.subscribers = this.subscribers.filter(current => current !== handler);
    });

    Container_defineProperty(this, "notifySubscribers", evt => {
      if (!this.framePending) {
        const {
          currentTarget
        } = evt;
        this.rafHandle = external_raf_default()(() => {
          this.framePending = false;
          const {
            top,
            bottom
          } = this.node.getBoundingClientRect();
          this.subscribers.forEach(handler => handler({
            distanceFromTop: top,
            distanceFromBottom: bottom,
            eventSource: currentTarget === window ? document.body : this.node
          }));
        });
        this.framePending = true;
      }
    });

    Container_defineProperty(this, "getParent", () => this.node);
  }

  getChildContext() {
    return {
      subscribe: this.subscribe,
      unsubscribe: this.unsubscribe,
      getParent: this.getParent
    };
  }

  componentDidMount() {
    this.events.forEach(event => window.addEventListener(event, this.notifySubscribers));
  }

  componentWillUnmount() {
    if (this.rafHandle) {
      external_raf_default.a.cancel(this.rafHandle);
      this.rafHandle = null;
    }

    this.events.forEach(event => window.removeEventListener(event, this.notifySubscribers));
  }

  render() {
    return Container_jsx("div", _extends({}, this.props, {
      ref: node => this.node = node,
      onScroll: this.notifySubscribers,
      onTouchStart: this.notifySubscribers,
      onTouchMove: this.notifySubscribers,
      onTouchEnd: this.notifySubscribers
    }));
  }

}

Container_defineProperty(Container_Container, "childContextTypes", {
  subscribe: external_prop_types_default.a.func,
  unsubscribe: external_prop_types_default.a.func,
  getParent: external_prop_types_default.a.func
});
// CONCATENATED MODULE: ./src/components/react-sticky/index.js




/* harmony default export */ var react_sticky = (Sticky_Sticky); //ref:https://github.com/captivationsoftware/react-sticky
//该库不再维护
// EXTERNAL MODULE: external "react-infinite-scroller"
var external_react_infinite_scroller_ = __webpack_require__("WLqv");
var external_react_infinite_scroller_default = /*#__PURE__*/__webpack_require__.n(external_react_infinite_scroller_);

// EXTERNAL MODULE: ./src/assets/styles/sass/page/works.module.scss
var works_module = __webpack_require__("Yglx");
var works_module_default = /*#__PURE__*/__webpack_require__.n(works_module);

// EXTERNAL MODULE: ./src/scripts/utils/index.ts
var utils = __webpack_require__("kIc0");

// EXTERNAL MODULE: ./src/scripts/constant/index.ts
var constant = __webpack_require__("hM3L");

// EXTERNAL MODULE: ./src/store/mock/index.ts + 6 modules
var mock = __webpack_require__("M738");

// EXTERNAL MODULE: ./src/components/context/index.tsx
var context = __webpack_require__("TlUl");

// EXTERNAL MODULE: ./src/components/common/index.tsx + 3 modules
var common = __webpack_require__("2yP/");

// EXTERNAL MODULE: ./src/components/layout/index.tsx + 16 modules
var layout = __webpack_require__("Ac47");

// CONCATENATED MODULE: ./src/assets/fonts/svg/merge/paper-plane.svg
function paper_plane_extends() { paper_plane_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return paper_plane_extends.apply(this, arguments); }



var _ref = /*#__PURE__*/external_react_["createElement"]("defs", null, /*#__PURE__*/external_react_["createElement"]("style", null));

var _ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M0 512L1054.219 0 333.846 635.577 0 512zm474.395 176.542L1089.362 0 896.087 847.458 474.395 688.542zm0 88.282V1024L667.67 829.789l-193.275-52.965z",
  fill: "currentColor"
});

function SvgPaperPlane(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", paper_plane_extends({
    className: "paper-plane_svg__icon",
    viewBox: "0 0 1089 1024",
    width: 51.047,
    height: 48
  }, props), _ref, _ref2);
}

/* harmony default export */ var paper_plane = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTkyMDM0NDM4Mjk5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwODkgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2NjgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTEuMDQ2ODc1IiBoZWlnaHQ9IjQ4Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0wIDUxMkwxMDU0LjIxODg5NCAwIDMzMy44NDU3ODcgNjM1LjU3NzE5MSAwIDUxMnogbTQ3NC4zOTUyMzQgMTc2LjU0MTk1N0wxMDg5LjM2MTcwMiAwbC0xOTMuMjc0NTUzIDg0Ny40NTgwNDMtNDIxLjY5MTkxNS0xNTguOTE2MDg2eiBtMCA4OC4yODE4NzNWMTAyNGwxOTMuMjc0NTUzLTE5NC4yMTE0MDQtMTkzLjI3NDU1My01Mi45NjQ3NjZ6IiBmaWxsPSJjdXJyZW50Q29sb3IiIHAtaWQ9IjI2NjkiPjwvcGF0aD48L3N2Zz4NCg==");

// CONCATENATED MODULE: ./src/pages/works.tsx
var works_jsx = external_react_default.a.createElement;

function works_extends() { works_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return works_extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { works_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function works_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














const {
  works_wrapper,
  works_list
} = works_module_default.a;
const worksKeys = Object.keys(mock["d" /* worksInfo */]);
const DEFAULT_ACTIVE_KEY = worksKeys[0];
const tabHeadInfo = worksKeys.map(key => {
  const _worksInfo$key = mock["d" /* worksInfo */][key],
        {
    data
  } = _worksInfo$key,
        rest = _objectWithoutProperties(_worksInfo$key, ["data"]);

  return _objectSpread({
    key,
    num: data.length
  }, rest);
});

const TabsWorksHead = ({
  onSwitchTab,
  style
}) => {
  const {
    store
  } = Object(external_react_["useContext"])(context["a" /* CtxStore */]);
  const {
    bodyStyle
  } = store;
  const elTabs = Object(external_react_["useRef"])(null);
  const {
    0: activeKey,
    1: setActiveKey
  } = Object(external_react_["useState"])(DEFAULT_ACTIVE_KEY);
  const {
    0: activeInfo,
    1: setActiveInfo
  } = Object(external_react_["useState"])({
    width: 0,
    offsetX: 0
  });
  const {
    width,
    offsetX
  } = activeInfo;

  const onSelected = key => {
    return e => {
      e.preventDefault();
      setActiveKey(key);
      const {
        offsetWidth,
        offsetLeft
      } = e.currentTarget;
      setActiveInfo(v => _objectSpread({}, v, {
        width: offsetWidth,
        offsetX: offsetLeft
      }));
      onSwitchTab && onSwitchTab(key);
    };
  };

  const initialTabsActive = () => {
    const {
      current
    } = elTabs;
    const index = Object(utils["b" /* findDataIndex */])({
      data: tabHeadInfo,
      key: 'key',
      target: activeKey
    });
    if (Object.is(index, -1)) return;
    const node = current === null || current === void 0 ? void 0 : current.querySelectorAll('a')[index];
    node === null || node === void 0 ? void 0 : node.click();
  };

  Object(external_react_["useEffect"])(initialTabsActive, []);
  return works_jsx(Sticky_Sticky, null, ({
    style,
    isSticky
  }) => {
    return works_jsx("div", {
      style: _objectSpread({}, style, {}, isSticky && _objectSpread({
        boxShadow: 'rgb(0, 0, 0,.24) 0px 0px 4px'
      }, bodyStyle)),
      className: "tac tabs-wrapper z-1"
    }, works_jsx("div", {
      ref: elTabs,
      className: "inline-block pos-rel font-size-sm"
    }, tabHeadInfo.map(({
      title,
      num,
      key,
      isHot
    }) => works_jsx("a", {
      key: key,
      href: "#",
      onClick: onSelected(key),
      className: external_classnames_default()('m-l-r-xl p-b-xxs', {
        'color-primary active': Object.is(activeKey, key)
      })
    }, title, " (", ' ', works_jsx("span", {
      className: "font-family-georgia font-size-xxl"
    }, num, isHot && works_jsx("span", {
      className: "hot pos-rel"
    }, works_jsx("em", {
      style: {
        top: 4
      }
    }))), ' ', ")")), works_jsx("div", {
      style: {
        width: width,
        transform: `translateX(${offsetX}px)`,
        transition: '.5s'
      },
      className: "tabs-active"
    })));
  });
};

const WorkItem = ({
  item = {},
  onVisitContent,
  onMouseIn,
  onMouseOut
}) => {
  const {
    category,
    desc,
    qrcodeImg,
    title,
    searchKeyword,
    visible,
    links
  } = item;

  const visitLinksProps = _objectSpread({
    href: links || '#',
    title
  }, links ? {
    target: '_blank'
  } : {
    onClick: onVisitContent
  });

  return works_jsx("figure", {
    className: "item"
  }, works_jsx("a", works_extends({
    className: "block"
  }, visitLinksProps), works_jsx(external_react_lazyload_default.a, {
    once: true,
    throttle: 200,
    height: 400,
    placeholder: works_jsx("img", {
      // className="w-h-100" //勿设置
      src: `/static/placeholder-pic.png`,
      alt: ""
    })
  }, works_jsx("img", {
    className: "photo" // src={require('@images/' + item.imgSrc)}
    ,
    src: `/static/${item.imgSrc}`,
    alt: title
  })), works_jsx("div", {
    className: "mouse-move-layer t-0",
    onMouseEnter: e => onMouseIn && onMouseIn(e, true),
    onMouseLeave: e => onMouseOut && onMouseOut(e, true)
  }), works_jsx("div", {
    className: "mouse-move-layer b-0",
    onMouseEnter: onMouseIn,
    onMouseLeave: onMouseOut
  })), works_jsx("figcaption", {
    className: "content"
  }, works_jsx("h3", null, title), works_jsx("p", null, desc), works_jsx("div", {
    "layout-align": "space-between center"
  }, works_jsx("span", {
    className: "category"
  }, category), works_jsx("a", works_extends({
    className: "color-primary bdb-line-primary"
  }, visitLinksProps), works_jsx("span", {
    className: "vam"
  }, "\u8BBF\u95EE\u94FE\u63A5"), works_jsx(common["f" /* SvgIcon */], {
    className: "m-l-xs",
    component: SvgPaperPlane
  })))), (qrcodeImg || searchKeyword) && works_jsx("div", {
    style: {
      display: visible ? 'block' : 'none'
    },
    className: "mask-root pos-abs t-0 w-h-100"
  }, works_jsx("div", {
    onClick: onVisitContent,
    className: "mask-layer w-h-100"
  }), qrcodeImg ? works_jsx("img", {
    className: "pos-abs tblr-0 m-auto" // src={require(`@images/${qrcodeImg}`)}
    ,
    src: `/static/${qrcodeImg}`,
    alt: ""
  }) : works_jsx("div", {
    className: "app-dec pos-abs color-white font-size-md"
  }, "\u8FDB\u5165\u5FAE\u4FE1APP-", '>', "\u70B9\u51FB\u53D1\u73B0-", '>', "\u9009\u62E9\u5C0F\u7A0B\u5E8F\u641C-", '>', "\u7D22 \"", works_jsx("span", {
    className: "color-primary"
  }, " ", searchKeyword, " "), "\" \u8BBF\u95EE")));
};

const TabsWorksContent = ({
  activeKey = ''
}) => {
  const {
    0: info,
    1: setInfo
  } = Object(external_react_["useState"])({
    data: [],
    hasNextPage: true,
    loading: true
  });
  const {
    data,
    hasNextPage,
    loading
  } = info;

  const onVisitContent = item => {
    return e => {
      setInfo(v => _objectSpread({}, v, {
        data: data.map(v => _objectSpread({}, v, {}, Object.is(v.imgSrc, item.imgSrc) && {
          visible: !v.visible
        }))
      }));
      e.preventDefault();
    };
  };

  const onMouseIn = (e, isTop) => {
    const currentDom = e.currentTarget;
    const parentDom = currentDom.parentNode;
    const domImg = parentDom === null || parentDom === void 0 ? void 0 : parentDom.querySelector('.photo');
    if (!domImg) return; // const { clientY } = e
    // const { top, height } = currentDom.getBoundingClientRect()
    // const halfHeight = height / 2
    // const isTop = halfHeight > clientY - top //移入位置

    const marginTopVal = parseFloat(Object(utils["e" /* getStyle */])(domImg).marginTop);
    const hiddenHeight = (domImg.getBoundingClientRect().height || 0) - parseInt(Object(utils["e" /* getStyle */])(parentDom).maxHeight); //计算隐藏的高度

    const moveTime = 150; //值越大、移动越快，反之

    const moveSpeed = hiddenHeight / moveTime;
    const restMovDistance = (isTop ? -marginTopVal : hiddenHeight + marginTopVal) * moveSpeed; //移动的距离

    const time = (restMovDistance / hiddenHeight).toFixed(2); //剩余距离需要移动的时间

    domImg.style.cssText = `margin-top:${isTop ? 0 : -hiddenHeight}px;transition:margin-top ${time}s linear;`;
  };

  const onMouseOut = e => {
    var _currentDom$parentNod;

    const currentDom = e.currentTarget;
    const domImg = (_currentDom$parentNod = currentDom.parentNode) === null || _currentDom$parentNod === void 0 ? void 0 : _currentDom$parentNod.querySelector('.photo');
    if (!domImg) return;
    const marginTopVal = Object(utils["e" /* getStyle */])(domImg).marginTop;
    domImg.style.cssText = `margin-top:${marginTopVal};`;
  };

  const fetchData = (pageIndex = 1) => {
    const result = mock["d" /* worksInfo */][activeKey];
    if (!result) return;
    Object(utils["h" /* paginationAfterData */])({
      query: {
        pageIndex
      },
      data: result.data
    }).then(res => {
      const {
        data: list
      } = res;
      const isFirstPage = Object.is(pageIndex, 1);
      setInfo(v => _objectSpread({}, v, {}, res, {
        data: isFirstPage ? list : [...data, ...list]
      }));
    }).catch(() => {
      setInfo(v => _objectSpread({}, v, {
        hasNextPage: false
      }));
    }).finally(() => {
      setInfo(v => _objectSpread({}, v, {
        loading: false
      }));
    });
  };

  Object(external_react_["useEffect"])(() => {
    setInfo(v => _objectSpread({}, v, {
      hasNextPage: true,
      loading: true
    }));
    fetchData();
  }, [activeKey]);

  const loadFunc = page => {
    if (!hasNextPage) return;
    fetchData(page);
  };

  return works_jsx("div", {
    className: works_list
  }, loading ? works_jsx(common["c" /* Loading */], {
    className: "tac p-b-xxl"
  }) : works_jsx(external_react_infinite_scroller_default.a, {
    pageStart: 0,
    loadMore: loadFunc,
    hasMore: hasNextPage,
    loader: works_jsx(common["c" /* Loading */], {
      key: "0",
      className: "tac p-b-xxl"
    })
  }, data.map(item => {
    const {
      imgSrc
    } = item;
    return works_jsx(WorkItem, {
      key: imgSrc,
      onVisitContent: onVisitContent(item),
      onMouseIn: onMouseIn,
      onMouseOut: onMouseOut,
      item: item
    });
  }), !hasNextPage && Object(utils["g" /* isValidArray */])(data) && data.length >= constant["f" /* DEFAULT_PAGE_SIZE */] && works_jsx("div", {
    className: "tac p-b-xxl"
  }, "\u6CA1\u6709\u66F4\u591A\u4E86\u2299\uFE4F\u2299")));
};

const Works = () => {
  const {
    0: activeKey,
    1: setActiveKey
  } = Object(external_react_["useState"])('');
  return works_jsx("section", {
    className: works_wrapper
  }, works_jsx(common["a" /* Banner */], null), works_jsx(layout["a" /* LayoutMain */], {
    pageTitleProps: {
      zhName: works_jsx(external_react_default.a.Fragment, null, works_jsx("span", {
        className: "font-family-georgia"
      }, "40"), "\u4E2A\u4F5C\u54C1"),
      enName: 'more than 40 works'
    }
  }, works_jsx(Container_Container, null, works_jsx(TabsWorksHead, {
    onSwitchTab: key => setActiveKey(key)
  }), activeKey && works_jsx(TabsWorksContent, {
    activeKey: activeKey
  }))));
};

/* harmony default export */ var works = __webpack_exports__["default"] = (Works);

/***/ }),

/***/ "RaQM":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "layout_footer__25Jzh",
	"side_fixed_operate": "layout_side_fixed_operate__LT0EC"
};


/***/ }),

/***/ "TlUl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtxStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CtxStore = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  store: {},
  dispatch: () => {}
});

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "U8xp":
/***/ (function(module, exports) {

module.exports = require("react-share-components");

/***/ }),

/***/ "VxDJ":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAIAAADRv8uKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTAzQjBCRUZBMUIwMTFFNkI5RTk5QzgzQTFDOEIxMjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTAzQjBCRjBBMUIwMTFFNkI5RTk5QzgzQTFDOEIxMjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMDNCMEJFREExQjAxMUU2QjlFOTlDODNBMUM4QjEyOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMDNCMEJFRUExQjAxMUU2QjlFOTlDODNBMUM4QjEyOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrUwNBMAAAQbSURBVHjaZJfZVmpBDAUBD4rj/3+nirN4qyms2wv7gXV6SnaSnaRZPz4+fn5+fn9/b7fbq6uri4uL5+fn9Xq92Wz4Xq1WX19fTNk6HA4cY+XnODbHwZRdpuzyu5qGhz3Dbt8eXhhM0MF95meyWGcFEYA7WxEH4/r62ltqUuDhOFxnYBUyVaSohTmrnGD+/v7+8fGBcWzohtRg9+XlpaiFpcUp4Ax3M53z3BUE5/lmBflMkT9wPD096SIlBtPLiGNxOQ7k6nbF5RjtU/rs4bRqBoMDoh+Y9ICa5g9/3eVb386x8DAroCl+umF9HADVEq5j4v39PbpfXl5YH3ZoRILSlJTQyAMXzw6obF4xFgJ1RGGUjhg70UszAvb8PvwOY8YvV4wWfnNFHdggewuZEvhFK7sc3u12nB9GJy5XG5UZhIqNmbk0k4B1Gc50mLIsucRsRCsrcIpfVJoLw9slj/GQUOaxqHWydpQzTGWyK96dzyvKw51nGLVFHmYE9wWo84t6NJkLSPTOsXOA1aQ7WTTZNH2gSZDbcdIhJlWWu3rPgDEkfJzQrOToJKYwSR5wd0C0bnCBX+Zvb293d3fazYqKrSQFj4+HhwfSg2/KwH6/5wME7HLF7FJ69BS9WgU6UOtAaw3iqN5qslLqdggcDxIHAlB6WCEmSEkMDiRwl+/X11fr6ymdgGwh5agB07IKRbbKYR2OOBMMoSWSW0jT4SzadQotKybeyGYdwjwRNzc3xol1/OE6mipPVZjWvWiFyrFsGQ5sRT2KDcSpJLinE7xAmCVFjDVlz2JmwujS+F/RwEnVGVfsQELnewGO+jBUiSDFUCOhx3S1PpCl9rT6rpkqVsNhL5Ge0kVOVZLHnjpYFX7lVA7bPjVirm5zZS5V9LBpbYxKVymmtFEDMBQn0zTcJhLWIwBtj0NzWRF4NVUyBlFAQbFUmaL2+94ap4zQ46U5AQaHxKuWyQC2vAZ2ToLVBsNUEDK/ZwZqPCmxzeD/vZ/016XC0TLRmT9eU6LuMlQuWvLME61XlIGPbjFDcIMB0qe3kl41Qj1xEG3YPFM2287nwFerhaVJvSPsOvryRHp9a77Lz0QoEVfXXgySzpATJff8fiqh63siQNFgdS6qHYk0+klUS2aMDZOMS03S5z5RETQXbFOL1uhMn2Q4oFc0+tzypTcXL8tybu8N1KPASpzumpXglqDpFj5ub2/rAfFCN8i7aKJj1PczjZzca76GXVldNLRGZLOic3DBvFK0dVtkPacVNLs3A+KaJW92vimz4FXjV6mz2mmZpPNX62tKyqp79q62CukeAuSTwdhZ2k4JYpoK1muaXq+Ud+H461KJPb9DrCplUXXj9JS3H8/vN0kkiCqAH0n5+/rv30avu9ircRXL2iXTfwIMAFidVqgvR1B2AAAAAElFTkSuQmCC"

/***/ }),

/***/ "WLqv":
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroller");

/***/ }),

/***/ "Wax4":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"home_wrapper": "home_home_wrapper__hEChx",
	"header_wrapper": "home_header_wrapper__Fr2mV",
	"ani-uibfq2i": "home_ani-uibfq2i__uolmb",
	"ani-uibfq39": "home_ani-uibfq39__3H0EM",
	"ani-uibfq48": "home_ani-uibfq48__3lMED",
	"work_list": "home_work_list__2K0pK",
	"ani-uibfq4g": "home_ani-uibfq4g__1aI8Z"
};


/***/ }),

/***/ "WrhM":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAIAAADRv8uKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTNCMzdEQkNBMUIwMTFFNkI5RTk5QzgzQTFDOEIxMjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTNCMzdEQkRBMUIwMTFFNkI5RTk5QzgzQTFDOEIxMjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxM0IzN0RCQUExQjAxMUU2QjlFOTlDODNBMUM4QjEyOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxM0IzN0RCQkExQjAxMUU2QjlFOTlDODNBMUM4QjEyOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu8e4M0AAAHCSURBVHja7JXHcsMwDERFuFfZ1v//nw9u4ya5SMqjdkbJKckBk1zEA00CC3mJGm632+PxWCwW/X5/v9+HENbrdZIk5/O5qqo0TdmRTyaT+XxeFIUXOBwOh9frNRwOzSzPcxSYcb5cLggHgwEGz+ezrmsOyL8Bs5D8EhzQXa/X+/2OaDweo4YmQuhjD4h9tVrBEeMsy7zAhh+sWb1eTzsLvsjFmmvEmfF6R3DY7Xbv93s0GqGDHWbT6RTd8XjEmFDBlKew4x+0XmDjv5NmcVBsWPgKNDsSVGVZ6h2O4HiCIyHBD0olwkAwCBU7mYIkEjTDmPB4gQ1GSj8u8j4HXARx3FU2azabAaPwHMHhdDoRAMKjagMKI3RUIc4gQvAF0D7FCxzd3SaCHBL9YAaCAx9CC2u0io0XOPCDW+gmiJbLJTiuCMlAPkSEsOeszrDZbLzAn9nYZqCW6KPlBfiKa9UsL3DYbrdACc9XRiQI1cZXYIqWPMCAhqc0cQEbCBSxsJqyU6/BaepESNoSVLP1AscYQ0Hxl1rFADsVg3JEnYHx4gUO3VjsxmI3Fn8Eq3P9w1iUw7ux2DSvbix2Y/FPxuKHAAMAoB/roPIF+AsAAAAASUVORK5CYII="

/***/ }),

/***/ "WuuV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SMALL_SCREEN_WIDTH */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getWindowWidthHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isSmallScreen; });
const SMALL_SCREEN_WIDTH = 769;
/**
 * 获取窗体可视宽高
 * @returns
 */

const getWindowWidthHeight = () => {
  const docEle = document.documentElement;
  const docBody = document.body;
  return {
    width: window.innerWidth || docEle.clientWidth || docBody.clientWidth,
    height: window.innerHeight || docEle.clientHeight || docBody.clientHeight
  };
};
const isSmallScreen = () => getWindowWidthHeight().width < SMALL_SCREEN_WIDTH;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "YbZW":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./icon-bg1.png": "VxDJ",
	"./icon-bg2.png": "8feY",
	"./icon-bg3.png": "yNXq",
	"./icon-bg4.png": "WrhM",
	"./icon-bg5.png": "i500"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "YbZW";

/***/ }),

/***/ "Yglx":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"works_wrapper": "works_works_wrapper__2WoW-",
	"works_list": "works_works_list__1l-Xw"
};


/***/ }),

/***/ "ZeM7":
/***/ (function(module, exports) {

module.exports = require("rc-dialog");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "gx/+":
/***/ (function(module, exports) {

module.exports = require("throttle-debounce");

/***/ }),

/***/ "hM3L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/* unused harmony export SIDE_WIDTH */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DELAY_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DEFAULT_PAGE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return PARAMS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DEFAULT_THEME_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DEFAULT_DARK_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return THEME_COLOR_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DEFAULT_BACKGROUND_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DEFAULT_LOVEEYE_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BACKGROUND_COLOR_LIST; });
const APP_CONFIG = 'APP_CONFIG';
const SIDE_WIDTH = 300;
const DELAY_TIME = 1000;
const DEFAULT_PAGE_SIZE = 10;
const PARAMS_ERROR = '参数错误';
const DEFAULT_THEME_COLOR = '#563493';
const DEFAULT_DARK_COLOR = '#151D26';
const THEME_COLOR_LIST = [DEFAULT_THEME_COLOR, '#1da1f2', '#128f45', '#ac1a41', '#cf8b18', '#be4118'];
const DEFAULT_BACKGROUND_COLOR = '#f9f9f9';
const DEFAULT_LOVEEYE_COLOR = '#c5dcdc';
const BACKGROUND_COLOR_LIST = [// DEFAULT_BACKGROUND_COLOR,
DEFAULT_LOVEEYE_COLOR, '#151D26', '#000'];

/***/ }),

/***/ "i500":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAIAAADRv8uKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTNCMzdEQzBBMUIwMTFFNkI5RTk5QzgzQTFDOEIxMjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTNCMzdEQzFBMUIwMTFFNkI5RTk5QzgzQTFDOEIxMjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxM0IzN0RCRUExQjAxMUU2QjlFOTlDODNBMUM4QjEyOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxM0IzN0RCRkExQjAxMUU2QjlFOTlDODNBMUM4QjEyOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtghoC0AAAFqSURBVHja7JVJcoQwDEVjMOP9D8kBmKfk4U95kV50iaoOWaCFy2j4smR/5Jqm+bpFSPz9Tj7h45V+Xdd5ntmg2vc9z3M027YlSYJGPm3bZlmGPk3TPQhKNKyKNeEk+pimyTmHDVdpCEuCkEaaoigAxWFZFjlXVQUuG0xWnDMxfgTgBKgqKMvSe493BOXgx0mDsCdEKclNPjOOPlQEHoDiyhpb1Pd9bCOIykFKTMMwnBfmvRXnTIxBPVFziMSbY47jGE+qUhA2Kreua3KrJivOGYBtCYIZA2XpkvhU09RGVeCCnAcPrwZ0K467jcd/w9pX8dw5/eH5cR90Lx7oArNtOAqDkSJffCZWZptxeJPYiCRM7LzGbCvO8fpFRK1d111jthlHp9OfD7bFu7Ey24pzaMVCVRNBsQGh1iEgin+/GMml0m3grDhveEwM1Tzz+JnH/2Mes94zj3WmZx6//hKeefzM40/N4x8BBgCOcNA98/03AwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "igX3":
/***/ (function(module, exports) {

module.exports = require("raf");

/***/ }),

/***/ "jK02":
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "jiQw":
/***/ (function(module) {

module.exports = JSON.parse("[{\"enterprise\":\"重庆偶麦科技有限公司\",\"links\":\"http://www.ooumay.com/\",\"duties\":\"前端开发工程师\",\"time\":\"2019-11\",\"logoName\":\"omkj\",\"details\":\"1. 基于React+TypeScript+Antd+Dva构建项目，开发督查、任务管理信息系统，适配各终端应用。<br>2. 负责督查核心检查流程各环节页面、任务管理主流程相关功能的开发。<br>3. 推动在项目中进行模块化开发，降低业务代码复杂度，提高开发效率。解决实际业务场景问题和日常Bug。<br>4. 分析业务需求，同团队相互沟通，合作开发，同时给产品交互体验提出合适的建议。<br>5. 完成项目从零搭建到顺利上线并使用，及时处理客户提出的功能需求和问题，顺利和中石油(分公司)、汇丰石化签下合同。\",\"project\":\"重构\"},{\"enterprise\":\"重庆一成飞客有限公司\",\"links\":\"http://www.canqu.com.cn/\",\"duties\":\"c#后端兼前端开发工程师\",\"time\":\"2020-06\",\"logoName\":\"ycfk\",\"details\":\"1. 负责老司机出行新版官网开发，采用Vue+Nuxt+ElementUi SSR直出模式，有利于解决单页SPA SEO缺陷的问题。<br>2. 公司OA系统前端整站开发，通过钉钉APP端扫码登入企业办公系统，员工操作不同权限展示，上传文档、图片至阿里云oss存储，增强安全性，提升网站响应速度，添加前台编辑器功能发布消息同步到钉钉。<br>3. 同设计师，后端合作，高质量的完成页面的实现工作，利用前沿技术提高编码效率，缩短项目的开发周期。<br>4. 搭建技术框架，使用Git进行版本控制和迭代，前后分离架构，组件化来提高复用和可维护性。\",\"project\":\"物流管理系统\"}]");

/***/ }),

/***/ "kIc0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return globalSelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return generateNumList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return scrollToFixedLocate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isValidArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return setStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return findDataIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getStyle; });
/* unused harmony export willDataDoPagination */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return paginationAfterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createImage; });
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tqfz");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jK02");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("J/1c");
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("WuuV");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("hM3L");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







__webpack_require__("rOcY");

const globalSelf = (() => false ? undefined : global)();
/**
 * 生成一定长度的数组
 * @param {number} [num=0]
 */

const generateNumList = (num = 0) => [...Array(num).keys()];
/**
 * 滚动到具体位置
 * @param {number} [scrollHeight=getWindowWidthHeight().height]
 */

const scrollToFixedLocate = (scrollHeight = Object(_helper__WEBPACK_IMPORTED_MODULE_3__[/* getWindowWidthHeight */ "a"])().height) => {
  window.scrollTo({
    top: scrollHeight,
    behavior: 'smooth'
  });
};
const isValidArray = data => Object(util__WEBPACK_IMPORTED_MODULE_1__["isArray"])(data) && Boolean(data.length);
const getStorage = (key, isDefaultEmptyObject = true) => {
  const storeData =  false ? undefined : {};
  return storeData || (isDefaultEmptyObject ? {} : void 0);
};
const setStorage = (key, value, isReassign = false) => {
  if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value)) {
    value['timestamp'] = +new Date();

    if (!isReassign) {
      const oldStoreData = getStorage(key);
      value = _objectSpread({}, oldStoreData, {}, value);
    }
  }

  store__WEBPACK_IMPORTED_MODULE_0___default.a.set(key, value);
};

/**
 * 查找集合索引
 * @template T
 * @param {TFindDataIndexProps<T>} {
 *   data = [],
 *   target,
 *   key,
 * }
 */
const findDataIndex = ({
  data = [],
  target,
  key
}) => data.findIndex(item => Object.is(Object(util__WEBPACK_IMPORTED_MODULE_1__["isObject"])(item) ? item[key] : item, target));
/**
 * 获取样式
 * @param {*} ele
 * @returns {CSSStyleDeclaration}
 */

const getStyle = ele => {
  if (window.getComputedStyle) {
    return window.getComputedStyle(ele, null);
  }

  return ele.currentStyle;
};

/**
 * 对数据进行分页
 * @param {*} [query={}]
 * @param {*} [data=[]]
 * @returns
 */
const willDataDoPagination = ({
  query = {},
  data = []
} = {}) => {
  const {
    pageIndex: pIndex = 1,
    pageSize: pSize = _constant__WEBPACK_IMPORTED_MODULE_4__[/* DEFAULT_PAGE_SIZE */ "f"]
  } = query;
  const pageIndex = Math.floor(pIndex);
  const pageSize = Math.floor(pSize);
  const totalCount = data.length;
  data = Object(util__WEBPACK_IMPORTED_MODULE_1__["isArray"])(data) ? data : [];

  try {
    if (isNaN(pageIndex) || isNaN(pageSize)) {
      throw new Error(_constant__WEBPACK_IMPORTED_MODULE_4__[/* PARAMS_ERROR */ "i"]);
    }
  } catch (error) {
    return {
      data: [],
      totalCount,
      pageTotal: 0,
      pageSize: _constant__WEBPACK_IMPORTED_MODULE_4__[/* DEFAULT_PAGE_SIZE */ "f"],
      pageIndex: 1,
      hasPrevPage: false,
      hasNextPage: false,
      error
    };
  }

  let limitData = [];
  const totalPage = Math.ceil(totalCount / pageSize);
  const hasNextPage = pageIndex < totalPage;

  if (hasNextPage || Object.is(pageIndex, totalPage)) {
    const sliceIndex = (pageIndex - 1) * pageSize;
    limitData = data.slice(sliceIndex, pageSize * pageIndex);
  }

  const hasLength = Boolean(totalCount);
  return {
    data: limitData,
    totalCount,
    pageTotal: totalPage,
    pageSize: pageSize,
    pageIndex: pageIndex,
    hasPrevPage: hasLength && pageIndex > 1,
    hasNextPage: hasLength && hasNextPage
  };
};
const paginationAfterData = options => {
  return new Promise((resolve, reject) => {
    const info = willDataDoPagination(options);
    return info.error ? reject(info.error) : resolve(info);
  });
};
const createImage = (option = {}) => {
  const {
    width = 100,
    height = 200,
    bgColor = mockjs__WEBPACK_IMPORTED_MODULE_2__["Random"].color(),
    text = mockjs__WEBPACK_IMPORTED_MODULE_2__["Random"].word(1)
  } = option;
  return mockjs__WEBPACK_IMPORTED_MODULE_2__["Random"].image(`${width}x${height}`, bgColor, '#fff', text);
};

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "p21V":
/***/ (function(module, exports) {

module.exports = "./_next/static/images/qrcode-5cbeb579763a8315c5fede5f6603ec1c.png";

/***/ }),

/***/ "rOcY":
/***/ (function(module, exports) {

;

(function (self, factory) {
  self.g_config = factory();
})(global || window || {}, function () {
  const isProd = true; // const visitPath = 'https://liuguanhua.github.io/'
  // const visitPath = 'http://localhost:8000/'

  const visitPath = './'; // const visitPath = '/'

  const publicPath = isProd ? visitPath : '/';
  return {
    name: '小李飞漂|个人简历|前端工程师',
    logo: publicPath + 'static/logo.png',
    isProd,
    publicPath
  };
});

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "toyS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", null));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M877.714 799.415c0 83.42-54.857 151.442-121.71 151.442H267.996c-66.852 0-121.71-67.986-121.71-151.442 0-150.272 37.157-323.986 186.844-323.986a255.232 255.232 0 00357.742 0c149.723 0 186.843 173.714 186.843 323.986zM731.43 292.57C731.429 413.733 633.125 512 512 512s-219.429-98.304-219.429-219.429S390.875 73.143 512 73.143s219.429 98.304 219.429 219.428z",
  fill: "currentColor"
});

function SvgUser(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    className: "user_svg__icon",
    viewBox: "0 0 1024 1024",
    width: 48,
    height: 48
  }, props), _ref, _ref2);
}

/* unused harmony default export */ var _unused_webpack_default_export = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg5NjQ1NTc2OTA3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExNDIiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTg3Ny43MTQyODYgNzk5LjQxNDg1N0M4NzcuNzE0Mjg2IDg4Mi44MzQyODYgODIyLjg1NzE0MyA5NTAuODU3MTQzIDc1Ni4wMDQ1NzEgOTUwLjg1NzE0M0gyNjcuOTk1NDI5QzIwMS4xNDI4NTcgOTUwLjg1NzE0MyAxNDYuMjg1NzE0IDg4Mi44NzA4NTcgMTQ2LjI4NTcxNCA3OTkuNDE0ODU3IDE0Ni4yODU3MTQgNjQ5LjE0Mjg1NyAxODMuNDQyMjg2IDQ3NS40Mjg1NzEgMzMzLjEyOTE0MyA0NzUuNDI4NTcxYTI1NS4yMzIgMjU1LjIzMiAwIDAgMCAzNTcuNzQxNzE0IDBDODQwLjU5NDI4NiA0NzUuNDI4NTcxIDg3Ny43MTQyODYgNjQ5LjE0Mjg1NyA4NzcuNzE0Mjg2IDc5OS40MTQ4NTd6TTczMS40Mjg1NzEgMjkyLjU3MTQyOWMwIDEyMS4xNjExNDMtOTguMzA0IDIxOS40Mjg1NzEtMjE5LjQyODU3MSAyMTkuNDI4NTcxcy0yMTkuNDI4NTcxLTk4LjMwNC0yMTkuNDI4NTcxLTIxOS40Mjg1NzEgOTguMzA0LTIxOS40Mjg1NzEgMjE5LjQyODU3MS0yMTkuNDI4NTcyIDIxOS40Mjg1NzEgOTguMzA0IDIxOS40Mjg1NzEgMjE5LjQyODU3MnoiIGZpbGw9ImN1cnJlbnRDb2xvciIgcC1pZD0iMTE0MyI+PC9wYXRoPjwvc3ZnPg0K");


/***/ }),

/***/ "tqfz":
/***/ (function(module, exports) {

module.exports = require("store");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yNXq":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAIAAADRv8uKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTNCMzdEQjhBMUIwMTFFNkI5RTk5QzgzQTFDOEIxMjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTNCMzdEQjlBMUIwMTFFNkI5RTk5QzgzQTFDOEIxMjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMDNCMEJGNUExQjAxMUU2QjlFOTlDODNBMUM4QjEyOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMDNCMEJGNkExQjAxMUU2QjlFOTlDODNBMUM4QjEyOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pqa/L30AAAXgSURBVHjaPNd7N5VNGMdxeyMSpROrWrz/N5VViM4oinh4PnN/19r3H2P2zHX4Xecx+/Lly/Pnzz98+PD69etv3769efPm4uJiZ2fn6Ohoa2vr7OzM/s+fP+vr6yjfvn3769cv9J8/f97e3v7x4wd6q9vb29unT5+6tUfv/OTk5NmzZ6enp+/evfv58+erV68+ffq0v7+fxpk/Gxsb19fXS0tLKysry8vLd3d3s9mM+kePHq2urlr//ftHxO/fvy8vL/f29r5//35/f7+2tvb379/Hjx8jphWlzdXVFfXOcd3c3MRF4ObmphXNw8MDWG7nMGKzoxJGOv6bPqKjwwDE3fTh//jxo3NY5/M5EVb68JJDCCf5+fXrV+dcwh6KEbPKnsV+wjpsA58aP5D6TR+kBPGYc5sAJp0pyJamD2V7XNntBIsTlPfTF3QfrTwUzcr0zUUoW/GL8c30EcQCDALBShElAg0ErEeP0nl79ASJJenOk8N0kp88eWIlRwigJIf1bhkw3II57HwOl9UJWWyFgFz8VngZhBNqHvOTV1zZZyVGG2rQJAQUktE7Ry+OrhI7pxxRacWCoKFjnxOkbD0+PrZ3CJY9AhlUnosUCZTJ/0JDDevtnaN37pZWK4h4uW3EWKKDADgd2FwvchvF7fRlt5UFRBRXziQIsXO8HVpxEVKwfTalCEogymLnI6uJ4PcstooKQUJAGdEUn5+fs1tOYkOJzQkalGw6PDwESLZbiUaPhj7OQE8CLzLPGpqcOitaC69WS1TaV772LEDQFU5xqt5KbJr8lGvk5N7Z9Dl0Sw3ePMolTpwTOGcZpLl0UceYeYJcHYMmcS07fGxF3xVe54LNsvfv3+cY7Lqe8FU8fAATi6kk3wlwcIw6pkyxg4a/qsWPrhLMGRhKCpsOESATHWvlUAIjq9x9wHEPLuAcQgAoaaOOS3Hxw6nOYBEhNomfKLRnCga5WoRIr+JZILPcyhI2UY+L0Aqsaq545D8HlA0kADR6delajKn3kxtevHhBNLDEFVSG1pALLSMoIJcmxPaNCmvNx1eTqfRLGq6q+Y/ORQp9iMSDlCYMQFHb13ttIOUVBAAV44JCOovr5+DmxeJd/jvnSzQl8sgYDkHkN+wNENZL5gJWzDBDxoImWL6xKW8H/Knn+OnchigdhhwstULETYFyfrDwqgtVSH2Tql7WOVhCQjE2t4SKE07xJoX19aOqllY+KJPdVkiNXbaicYIXpfPRq6EYrWTCLsBlvMM6LbAlZK24dRFOgviJ+rIdF5Qc5pw+dbW7u9u4c8J50FfKI+P74YMlpKFuhBEHEBAMKodHMUyBkB/Uc2z5TKtDmcwfhIALmfqmEj3J9s3T0b1LkFKuyeoiIwpMPcimIU2xhwtNNXPiqnjEwHEMfegRZPRoUtOkL4VzOHBjOtEKowumV7WkWDHXH9jUC6tbELsFmmgxhom36NAP2NRrpDndhO4dUrcgbQybZgCkgCCFBSikmVtEGynNfNJrbb0g7GsDuKqipm/hyCuFKbHNaWbMQ8FubLA0CXo3oeh5Jd41Tvumb32D7voJiaysvZS3ZZBz8tFXUY1FQoiaYS5OIgeaKBZsdM3XhjSG2mxVW8jLFJR5ldsyvSR3Uovlkoo+u6uguTpDp86EAVLK2Eq6c+J6Ctatml29IkSuhoXXnpVNXJRouiWHGax0i52cErl6Gb26J2rZC914ic1mpXcBsxKn5/WcUIEvX760D0TdrXeLEOQSexJAqdzpK2PyxxhlPdz5vf8bSmkfQBUxngZAY05PcG5TRZFu48rMpqaxzfpe2uVaMa5vC0coZz1Q8BDd832cTu20NgtQ/2cU7NKyDmXtlb94pdRt+i9G6i6elaVLD1A/x2ip+9QdWQ9XcyY32kNmBbxKZQd9BwcH4PJQs4vQMrb5E40+RXKrqCeh99d4LPecqyc30danb1HWxaaHZiFvNAHhpGeJtFAUDbdRKtPsq+fzB2P6t48uUyt3/i/AAB/C5Cwj9NpEAAAAAElFTkSuQmCC"

/***/ })

/******/ });