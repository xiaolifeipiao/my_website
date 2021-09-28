webpackHotUpdate("static\\development\\pages\\works.js",{

/***/ "./src/pages/works.tsx":
/*!*****************************!*\
  !*** ./src/pages/works.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_react_sticky__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/react-sticky */ "./src/components/react-sticky/index.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_sass_page_works_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @styles/sass/page/works.module.scss */ "./src/assets/styles/sass/page/works.module.scss");
/* harmony import */ var _styles_sass_page_works_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_sass_page_works_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @scripts/utils */ "./src/scripts/utils/index.ts");
/* harmony import */ var _scripts_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @scripts/constant */ "./src/scripts/constant/index.ts");
/* harmony import */ var _store_mock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @store/mock */ "./src/store/mock/index.ts");
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/context */ "./src/components/context/index.tsx");
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/common */ "./src/components/common/index.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/layout */ "./src/components/layout/index.tsx");
/* harmony import */ var _fonts_svg_merge_paper_plane_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fonts/svg/merge/paper-plane.svg */ "./src/assets/fonts/svg/merge/paper-plane.svg");





var _this = undefined,
    _jsxFileName = "C:\\Users\\19215\\Desktop\\my_website\\src\\pages\\works.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var works_wrapper = _styles_sass_page_works_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.works_wrapper,
    works_list = _styles_sass_page_works_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.works_list;
var worksKeys = Object.keys(_store_mock__WEBPACK_IMPORTED_MODULE_12__["worksInfo"]);
var DEFAULT_ACTIVE_KEY = worksKeys[0];
var tabHeadInfo = worksKeys.map(function (key) {
  var _worksInfo$key = _store_mock__WEBPACK_IMPORTED_MODULE_12__["worksInfo"][key],
      data = _worksInfo$key.data,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_worksInfo$key, ["data"]);

  return _objectSpread({
    key: key,
    num: data.length
  }, rest);
});

var TabsWorksHead = function TabsWorksHead(_ref) {
  var onSwitchTab = _ref.onSwitchTab,
      style = _ref.style;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_13__["CtxStore"]),
      store = _useContext.store;

  var bodyStyle = store.bodyStyle;
  var elTabs = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(DEFAULT_ACTIVE_KEY),
      activeKey = _useState[0],
      setActiveKey = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    width: 0,
    offsetX: 0
  }),
      activeInfo = _useState2[0],
      setActiveInfo = _useState2[1];

  var width = activeInfo.width,
      offsetX = activeInfo.offsetX;

  var onSelected = function onSelected(key) {
    return function (e) {
      e.preventDefault();
      setActiveKey(key);
      var _e$currentTarget = e.currentTarget,
          offsetWidth = _e$currentTarget.offsetWidth,
          offsetLeft = _e$currentTarget.offsetLeft;
      setActiveInfo(function (v) {
        return _objectSpread({}, v, {
          width: offsetWidth,
          offsetX: offsetLeft
        });
      });
      onSwitchTab && onSwitchTab(key);
    };
  };

  var initialTabsActive = function initialTabsActive() {
    var current = elTabs.current;
    var index = Object(_scripts_utils__WEBPACK_IMPORTED_MODULE_10__["findDataIndex"])({
      data: tabHeadInfo,
      key: 'key',
      target: activeKey
    });
    if (Object.is(index, -1)) return;
    var node = current === null || current === void 0 ? void 0 : current.querySelectorAll('a')[index];
    node === null || node === void 0 ? void 0 : node.click();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(initialTabsActive, []);
  return __jsx(_components_react_sticky__WEBPACK_IMPORTED_MODULE_7__["Sticky"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, function (_ref2) {
    var style = _ref2.style,
        isSticky = _ref2.isSticky;
    return __jsx("div", {
      style: _objectSpread({}, style, {}, isSticky && _objectSpread({
        boxShadow: 'rgb(0, 0, 0,.24) 0px 0px 4px'
      }, bodyStyle)),
      className: "tac tabs-wrapper z-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }
    }, __jsx("div", {
      ref: elTabs,
      className: "inline-block pos-rel font-size-sm",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }
    }, tabHeadInfo.map(function (_ref3) {
      var title = _ref3.title,
          num = _ref3.num,
          key = _ref3.key,
          isHot = _ref3.isHot;
      return __jsx("a", {
        key: key,
        href: "#",
        onClick: onSelected(key),
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('m-l-r-xl p-b-xxs', {
          'color-primary active': Object.is(activeKey, key)
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 17
        }
      }, title, " (", ' ', __jsx("span", {
        className: "font-family-georgia font-size-xxl",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 19
        }
      }, num, isHot && __jsx("span", {
        className: "hot pos-rel",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 23
        }
      }, __jsx("em", {
        style: {
          top: 4
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 25
        }
      }))), ' ', ")");
    }), __jsx("div", {
      style: {
        width: width,
        transform: "translateX(".concat(offsetX, "px)"),
        transition: '.5s'
      },
      className: "tabs-active",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 15
      }
    })));
  });
};

var WorkItem = function WorkItem(_ref4) {
  var _ref4$item = _ref4.item,
      item = _ref4$item === void 0 ? {} : _ref4$item,
      onVisitContent = _ref4.onVisitContent,
      onMouseIn = _ref4.onMouseIn,
      onMouseOut = _ref4.onMouseOut;
  var category = item.category,
      desc = item.desc,
      qrcodeImg = item.qrcodeImg,
      title = item.title,
      searchKeyword = item.searchKeyword,
      visible = item.visible,
      links = item.links;

  var visitLinksProps = _objectSpread({
    href: links || '#',
    title: title
  }, links ? {
    target: '_blank'
  } : {
    onClick: onVisitContent
  });

  return __jsx("figure", {
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 5
    }
  }, __jsx("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: "block"
  }, visitLinksProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }
  }), __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_6___default.a, {
    once: true,
    throttle: 200,
    height: 400,
    placeholder: __jsx("img", {
      // className="w-h-100" //勿设置
      src: "/static/placeholder-pic.png",
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 13
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "photo" // src={require('@images/' + item.imgSrc)}
    ,
    src: "/static/".concat(item.imgSrc),
    alt: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "mouse-move-layer t-0",
    onMouseEnter: function onMouseEnter(e) {
      return onMouseIn && onMouseIn(e, true);
    },
    onMouseLeave: function onMouseLeave(e) {
      return onMouseOut && onMouseOut(e, true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "mouse-move-layer b-0",
    onMouseEnter: onMouseIn,
    onMouseLeave: onMouseOut,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }
  })), __jsx("figcaption", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }
  }, title), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  }, desc), __jsx("div", {
    "layout-align": "space-between center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "category",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  }, category), __jsx("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: "color-primary bdb-line-primary"
  }, visitLinksProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "vam",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }
  }, "\u8BBF\u95EE\u94FE\u63A5"), __jsx(_components_common__WEBPACK_IMPORTED_MODULE_14__["SvgIcon"], {
    className: "m-l-xs",
    component: _fonts_svg_merge_paper_plane_svg__WEBPACK_IMPORTED_MODULE_16__["ReactComponent"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }
  })))), (qrcodeImg || searchKeyword) && __jsx("div", {
    style: {
      display: visible ? 'block' : 'none'
    },
    className: "mask-root pos-abs t-0 w-h-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 9
    }
  }, __jsx("div", {
    onClick: onVisitContent,
    className: "mask-layer w-h-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 11
    }
  }), qrcodeImg ? __jsx("img", {
    className: "pos-abs tblr-0 m-auto" // src={require(`@images/${qrcodeImg}`)}
    ,
    src: "/static/".concat(qrcodeImg),
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 13
    }
  }) : __jsx("div", {
    className: "app-dec pos-abs color-white font-size-md",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 13
    }
  }, "\u8FDB\u5165\u5FAE\u4FE1APP-", '>', "\u70B9\u51FB\u53D1\u73B0-", '>', "\u9009\u62E9\u5C0F\u7A0B\u5E8F\u641C-", '>', "\u7D22 \"", __jsx("span", {
    className: "color-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 15
    }
  }, " ", searchKeyword, " "), "\" \u8BBF\u95EE")));
};

var TabsWorksContent = function TabsWorksContent(_ref5) {
  var _ref5$activeKey = _ref5.activeKey,
      activeKey = _ref5$activeKey === void 0 ? '' : _ref5$activeKey;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    data: [],
    hasNextPage: true,
    loading: true
  }),
      info = _useState3[0],
      setInfo = _useState3[1];

  var data = info.data,
      hasNextPage = info.hasNextPage,
      loading = info.loading;

  var onVisitContent = function onVisitContent(item) {
    return function (e) {
      setInfo(function (v) {
        return _objectSpread({}, v, {
          data: data.map(function (v) {
            return _objectSpread({}, v, {}, Object.is(v.imgSrc, item.imgSrc) && {
              visible: !v.visible
            });
          })
        });
      });
      e.preventDefault();
    };
  };

  var onMouseIn = function onMouseIn(e, isTop) {
    var currentDom = e.currentTarget;
    var parentDom = currentDom.parentNode;
    var domImg = parentDom === null || parentDom === void 0 ? void 0 : parentDom.querySelector('.photo');
    if (!domImg) return; // const { clientY } = e
    // const { top, height } = currentDom.getBoundingClientRect()
    // const halfHeight = height / 2
    // const isTop = halfHeight > clientY - top //移入位置

    var marginTopVal = parseFloat(Object(_scripts_utils__WEBPACK_IMPORTED_MODULE_10__["getStyle"])(domImg).marginTop);
    var hiddenHeight = (domImg.getBoundingClientRect().height || 0) - parseInt(Object(_scripts_utils__WEBPACK_IMPORTED_MODULE_10__["getStyle"])(parentDom).maxHeight); //计算隐藏的高度

    var moveTime = 150; //值越大、移动越快，反之

    var moveSpeed = hiddenHeight / moveTime;
    var restMovDistance = (isTop ? -marginTopVal : hiddenHeight + marginTopVal) * moveSpeed; //移动的距离

    var time = (restMovDistance / hiddenHeight).toFixed(2); //剩余距离需要移动的时间

    domImg.style.cssText = "margin-top:".concat(isTop ? 0 : -hiddenHeight, "px;transition:margin-top ").concat(time, "s linear;");
  };

  var onMouseOut = function onMouseOut(e) {
    var _currentDom$parentNod;

    var currentDom = e.currentTarget;
    var domImg = (_currentDom$parentNod = currentDom.parentNode) === null || _currentDom$parentNod === void 0 ? void 0 : _currentDom$parentNod.querySelector('.photo');
    if (!domImg) return;
    var marginTopVal = Object(_scripts_utils__WEBPACK_IMPORTED_MODULE_10__["getStyle"])(domImg).marginTop;
    domImg.style.cssText = "margin-top:".concat(marginTopVal, ";");
  };

  var fetchData = function fetchData() {
    var pageIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var result = _store_mock__WEBPACK_IMPORTED_MODULE_12__["worksInfo"][activeKey];
    if (!result) return;
    Object(_scripts_utils__WEBPACK_IMPORTED_MODULE_10__["paginationAfterData"])({
      query: {
        pageIndex: pageIndex
      },
      data: result.data
    }).then(function (res) {
      var list = res.data;
      var isFirstPage = Object.is(pageIndex, 1);
      setInfo(function (v) {
        return _objectSpread({}, v, {}, res, {
          data: isFirstPage ? list : [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(list))
        });
      });
    })["catch"](function () {
      setInfo(function (v) {
        return _objectSpread({}, v, {
          hasNextPage: false
        });
      });
    })["finally"](function () {
      setInfo(function (v) {
        return _objectSpread({}, v, {
          loading: false
        });
      });
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setInfo(function (v) {
      return _objectSpread({}, v, {
        hasNextPage: true,
        loading: true
      });
    });
    fetchData();
  }, [activeKey]);

  var loadFunc = function loadFunc(page) {
    if (!hasNextPage) return;
    fetchData(page);
  };

  return __jsx("div", {
    className: works_list,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 5
    }
  }, loading ? __jsx(_components_common__WEBPACK_IMPORTED_MODULE_14__["Loading"], {
    className: "tac p-b-xxl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 9
    }
  }) : __jsx(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_8___default.a, {
    pageStart: 0,
    loadMore: loadFunc,
    hasMore: hasNextPage,
    loader: __jsx(_components_common__WEBPACK_IMPORTED_MODULE_14__["Loading"], {
      key: "0",
      className: "tac p-b-xxl",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 19
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 9
    }
  }, data.map(function (item) {
    var imgSrc = item.imgSrc;
    return __jsx(WorkItem, {
      key: imgSrc,
      onVisitContent: onVisitContent(item),
      onMouseIn: onMouseIn,
      onMouseOut: onMouseOut,
      item: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 15
      }
    });
  }), !hasNextPage && Object(_scripts_utils__WEBPACK_IMPORTED_MODULE_10__["isValidArray"])(data) && data.length >= _scripts_constant__WEBPACK_IMPORTED_MODULE_11__["DEFAULT_PAGE_SIZE"] && __jsx("div", {
    className: "tac p-b-xxl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 15
    }
  }, "\u6CA1\u6709\u66F4\u591A\u4E86\u2299\uFE4F\u2299")));
};

var Works = function Works() {
  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      activeKey = _useState4[0],
      setActiveKey = _useState4[1];

  return __jsx("section", {
    className: works_wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 5
    }
  }, __jsx(_components_common__WEBPACK_IMPORTED_MODULE_14__["Banner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 7
    }
  }), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_15__["LayoutMain"], {
    pageTitleProps: {
      zhName: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("span", {
        className: "font-family-georgia",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393,
          columnNumber: 15
        }
      }, "6"), "\u4E2A\u4F5C\u54C1"),
      enName: 'more than 40 works'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 7
    }
  }, __jsx(_components_react_sticky__WEBPACK_IMPORTED_MODULE_7__["StickyContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 9
    }
  }, __jsx(TabsWorksHead, {
    onSwitchTab: function onSwitchTab(key) {
      return setActiveKey(key);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 11
    }
  }), activeKey && __jsx(TabsWorksContent, {
    activeKey: activeKey,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 25
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Works);

/***/ })

})
//# sourceMappingURL=works.js.fb7582b1ab25b90a5d49.hot-update.js.map