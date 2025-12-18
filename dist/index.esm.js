import {Grid,styled,ListItemIcon,Icon,Badge,Collapse,ListItemText,ListItemButton,List,useTheme,alpha,Box,Toolbar,Typography,AppBar,Drawer,IconButton}from'@mui/material';import React,{useState}from'react';import {c}from'react/compiler-runtime';import {useLocation,useNavigate}from'react-router';import {ExpandMore,Menu}from'@mui/icons-material';import SimpleBar from'simplebar-react';function insertStyle(css) {
    if (typeof window === 'undefined')
        return;
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}insertStyle(".simplebar-track.simplebar-vertical{width:8px !important}.simplebar-track.simplebar-vertical .simplebar-scrollbar.simplebar-visible:before{opacity:.3 !important}.MuiButtonBase-root.MuiButton-root.MuiButton-outlined{padding:5px 15px 4px}.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-sizeLarge{padding:7px 21px 6px}.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-sizeSmall{padding:3px 9px 2px}.MuiButtonBase-root.MuiButton-root.MuiButton-contained{padding:6px 16px 5px}.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-sizeLarge{padding:8px 22px 7px}.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-sizeSmall{padding:4px 10px 3px}.MuiButtonBase-root.MuiButton-root.MuiButton-text{padding:6px 8px 5px}.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-sizeLarge{padding:8px 11px 7px}.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-sizeSmall{padding:4px 5px 3px}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video,main,input,button,textarea,pre,select,a{font-family:\"Pretendard\",\"Apple Gothic\",\"Dotum\",sans-serif;margin:0;padding:0;border:0;vertical-align:top;box-sizing:border-box;word-break:keep-all;line-height:unset}*:before,*:after{box-sizing:border-box}");var CardLayout = function CardLayout(_ref) {
  var children = _ref.children,
    _ref$backgroundColor = _ref.backgroundColor,
    backgroundColor = _ref$backgroundColor === void 0 ? '#eff3f8' : _ref$backgroundColor;
  return /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    bgcolor: backgroundColor,
    minHeight: '100vh'
  }, /*#__PURE__*/React.createElement(Grid, null, children));
};function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}var _templateObject$4, _templateObject2$2;
var StyledExpandMore = styled(ExpandMore)(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  margin-top: auto;\n  margin-bottom: auto;\n  @keyframes open {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(180deg);\n    }\n  }\n  @keyframes close {\n    0% {\n      transform: rotate(180deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n"])));
var StyledListItemIcon = styled(ListItemIcon)(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n  min-width: 30px;\n"])));var useChange = function useChange(value, callback, t0) {
  var skipFirst = t0 === undefined ? false : t0;
  var _React$useState = React.useState(skipFirst ? false : "|||||skip|||||first|||||"),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    _value = _React$useState2[0],
    _setValue = _React$useState2[1];
  if (value !== _value) {
    _setValue(value);
    callback();
  }
};var _SideMenuListItem = function SideMenuListItem(t0) {
  var $ = c(70);
  var info = t0.info,
    badgeVariant = t0.badgeVariant,
    expandedBackgroundColor = t0.expandedBackgroundColor;
  var location = useLocation();
  var navigate = useNavigate();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpandable = _useState2[0],
    setIsExpandable = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isExpand = _useState4[0],
    setIsExpand = _useState4[1];
  var t1;
  if ($[0] !== info.items || $[1] !== location.pathname) {
    t1 = function t1() {
      setIsExpandable(!!info.items && info.items.length > 0);
      if (info.items && info.items.find(function (info_0) {
        return location.pathname === info_0.uri;
      })) {
        setIsExpand(true);
      }
    };
    $[0] = info.items;
    $[1] = location.pathname;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  useChange(info, t1);
  var t2;
  if ($[3] !== info.items || $[4] !== info.uri || $[5] !== isExpand || $[6] !== isExpandable || $[7] !== location.pathname) {
    t2 = function t2() {
      if (isExpandable && isExpand != null) {
        if (info.uri !== location.pathname) {
          if (info.items && !info.items.find(function (info_1) {
            return location.pathname === info_1.uri;
          })) {
            if (isExpand) {
              setIsExpand(false);
            }
          }
        }
      }
      if (isExpandable && !isExpand) {
        if (info.items && info.items.find(function (info_2) {
          return location.pathname === info_2.uri;
        })) {
          setIsExpand(true);
        }
      }
    };
    $[3] = info.items;
    $[4] = info.uri;
    $[5] = isExpand;
    $[6] = isExpandable;
    $[7] = location.pathname;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  useChange(location.pathname, t2);
  var t3;
  if ($[9] !== badgeVariant || $[10] !== expandedBackgroundColor || $[11] !== info.badge || $[12] !== info.badgeVariant || $[13] !== info.depth || $[14] !== info.icon || $[15] !== info.items || $[16] !== info.name || $[17] !== info.uri || $[18] !== isExpand || $[19] !== isExpandable || $[20] !== location.pathname || $[21] !== navigate) {
    var t4;
    if ($[23] !== badgeVariant || $[24] !== expandedBackgroundColor || $[25] !== info.badge || $[26] !== info.badgeVariant || $[27] !== info.depth || $[28] !== info.icon || $[29] !== info.name || $[30] !== info.uri || $[31] !== isExpand || $[32] !== isExpandable || $[33] !== location.pathname || $[34] !== navigate) {
      var _t;
      if ($[36] !== info.uri || $[37] !== isExpandable || $[38] !== navigate) {
        _t = isExpandable ? function () {
          return setIsExpand(_temp$2);
        } : function () {
          return info.uri && navigate(info.uri);
        };
        $[36] = info.uri;
        $[37] = isExpandable;
        $[38] = navigate;
        $[39] = _t;
      } else {
        _t = $[39];
      }
      var t6 = isExpandable ? false : info.uri === location.pathname;
      var t7 = isExpandable && isExpand ? expandedBackgroundColor : undefined;
      var t8;
      if ($[40] !== t7) {
        t8 = {
          backgroundColor: t7
        };
        $[40] = t7;
        $[41] = t8;
      } else {
        t8 = $[41];
      }
      var t9;
      if ($[42] !== _t || $[43] !== t6 || $[44] !== t8) {
        t9 = {
          onClick: _t,
          selected: t6,
          style: t8
        };
        $[42] = _t;
        $[43] = t6;
        $[44] = t8;
        $[45] = t9;
      } else {
        t9 = $[45];
      }
      var t10;
      if ($[46] !== info.icon) {
        t10 = /*#__PURE__*/React.createElement(StyledListItemIcon, null, info.icon && /*#__PURE__*/React.createElement(Icon, {
          fontSize: "small"
        }, info.icon));
        $[46] = info.icon;
        $[47] = t10;
      } else {
        t10 = $[47];
      }
      var t11;
      if ($[48] !== badgeVariant || $[49] !== info.badge || $[50] !== info.badgeVariant || $[51] !== info.depth || $[52] !== info.name) {
        var _t2 = info.depth === 1 ? 600 : undefined;
        var t13;
        if ($[54] !== _t2) {
          t13 = {
            slotProps: {
              primary: {
                style: {
                  fontWeight: _t2
                }
              }
            }
          };
          $[54] = _t2;
          $[55] = t13;
        } else {
          t13 = $[55];
        }
        var t14;
        if ($[56] !== badgeVariant || $[57] !== info.badge || $[58] !== info.badgeVariant || $[59] !== info.name) {
          t14 = info.badge ? /*#__PURE__*/React.createElement(Badge, {
            badgeContent: info.badge,
            color: "error",
            variant: badgeVariant !== undefined ? badgeVariant : info.badgeVariant,
            anchorOrigin: {
              horizontal: "left",
              vertical: "top"
            },
            slotProps: {
              badge: {
                style: {
                  left: "100%",
                  top: "50%",
                  transform: "scale(.8) translate(10px, -50%)"
                }
              }
            }
          }, /*#__PURE__*/React.createElement("div", null, info.name)) : info.name;
          $[56] = badgeVariant;
          $[57] = info.badge;
          $[58] = info.badgeVariant;
          $[59] = info.name;
          $[60] = t14;
        } else {
          t14 = $[60];
        }
        t11 = /*#__PURE__*/React.createElement(ListItemText, t13, t14);
        $[48] = badgeVariant;
        $[49] = info.badge;
        $[50] = info.badgeVariant;
        $[51] = info.depth;
        $[52] = info.name;
        $[53] = t11;
      } else {
        t11 = $[53];
      }
      var t12;
      if ($[61] !== isExpand || $[62] !== isExpandable) {
        t12 = isExpandable && /*#__PURE__*/React.createElement(StyledExpandMore, {
          sx: {
            animation: "".concat(isExpand ? "open" : "close", " 0.1s linear"),
            transform: "rotate(".concat(isExpand ? 180 : 0, "deg)")
          }
        });
        $[61] = isExpand;
        $[62] = isExpandable;
        $[63] = t12;
      } else {
        t12 = $[63];
      }
      t4 = /*#__PURE__*/React.createElement(ListItemButton, t9, t10, t11, t12);
      $[23] = badgeVariant;
      $[24] = expandedBackgroundColor;
      $[25] = info.badge;
      $[26] = info.badgeVariant;
      $[27] = info.depth;
      $[28] = info.icon;
      $[29] = info.name;
      $[30] = info.uri;
      $[31] = isExpand;
      $[32] = isExpandable;
      $[33] = location.pathname;
      $[34] = navigate;
      $[35] = t4;
    } else {
      t4 = $[35];
    }
    var t5;
    if ($[64] !== badgeVariant || $[65] !== expandedBackgroundColor || $[66] !== info.items || $[67] !== isExpand || $[68] !== isExpandable) {
      t5 = isExpandable && /*#__PURE__*/React.createElement(Collapse, {
        "in": isExpand,
        style: {
          backgroundColor: isExpand ? expandedBackgroundColor : undefined
        }
      }, info.items && info.items.map(function (subInfo, idx) {
        return /*#__PURE__*/React.createElement(_SideMenuListItem, {
          key: idx,
          badgeVariant: badgeVariant,
          info: subInfo
        });
      }));
      $[64] = badgeVariant;
      $[65] = expandedBackgroundColor;
      $[66] = info.items;
      $[67] = isExpand;
      $[68] = isExpandable;
      $[69] = t5;
    } else {
      t5 = $[69];
    }
    t3 = /*#__PURE__*/React.createElement(React.Fragment, null, t4, t5);
    $[9] = badgeVariant;
    $[10] = expandedBackgroundColor;
    $[11] = info.badge;
    $[12] = info.badgeVariant;
    $[13] = info.depth;
    $[14] = info.icon;
    $[15] = info.items;
    $[16] = info.name;
    $[17] = info.uri;
    $[18] = isExpand;
    $[19] = isExpandable;
    $[20] = location.pathname;
    $[21] = navigate;
    $[22] = t3;
  } else {
    t3 = $[22];
  }
  return t3;
};
function _temp$2(old) {
  return !old;
}var _templateObject$3;
var StyledList = styled(List)(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  padding: 0;\n"])));var SideMenuList$1 = function SideMenuList(t0) {
  var $ = c(5);
  var list = t0.list,
    badgeVariant = t0.badgeVariant;
  var theme = useTheme();
  var t1;
  if ($[0] !== badgeVariant || $[1] !== list || $[2] !== theme.palette.action.selectedOpacity || $[3] !== theme.palette.primary.main) {
    var finalList = list.map(_temp2$1);
    var expandedBackgroundColor = alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity / 2);
    t1 = /*#__PURE__*/React.createElement(StyledList, null, finalList.map(function (info, idx_0) {
      return /*#__PURE__*/React.createElement(_SideMenuListItem, {
        key: idx_0,
        info: info,
        badgeVariant: badgeVariant,
        expandedBackgroundColor: expandedBackgroundColor
      });
    }));
    $[0] = badgeVariant;
    $[1] = list;
    $[2] = theme.palette.action.selectedOpacity;
    $[3] = theme.palette.primary.main;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  return t1;
};
var SideMenuList = /*#__PURE__*/React.memo(SideMenuList$1);
function _temp$1(letter, idx) {
  return "".concat(idx > 0 ? "_" : "").concat(letter.toLowerCase());
}
function _temp2$1(item) {
  return Object.assign(Object.assign({}, item), {
    icon: item.icon ? item.icon.replace(/[A-Z]/g, _temp$1) : undefined
  });
}var _templateObject$2;
var StyledSimpleBar = styled(SimpleBar)(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  max-height: 100%;\n"])));
var StyledLogoContainerBox = styled(Box)(function (_ref) {
  var theme = _ref.theme;
  return theme.unstable_sx({
    borderBottom: 'thin solid #f5f5f5',
    color: 'text.primary'
  });
});var SideMenu$1 = function SideMenu(_ref) {
  var logo = _ref.logo,
    badgeVariant = _ref.badgeVariant,
    list = _ref.list;
  return /*#__PURE__*/React.createElement(StyledSimpleBar, null, /*#__PURE__*/React.createElement(StyledLogoContainerBox, null, /*#__PURE__*/React.createElement(Toolbar, null, logo)), list && /*#__PURE__*/React.createElement(SideMenuList, {
    badgeVariant: badgeVariant,
    list: list
  }));
};
var SideMenu = /*#__PURE__*/React.memo(SideMenu$1);var _templateObject$1, _templateObject2$1, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var StyledContainerBox$1 = styled(Box)(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  position: relative;\n"])));
var StyledHeadContainerBox = styled(Box)(function (_ref) {
  var theme = _ref.theme;
  return theme.unstable_sx({
    display: {
      xs: 'none',
      sm: 'flex'
    },
    alignItems: 'center',
    opacity: 0.5
  });
});
var StyledHeadIconContainerBox = styled(Box)(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  margin-right: 0.25rem;\n  line-height: 0;\n"])));
var StyledHeadIcon = styled(Icon)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 1rem;\n"])));
var StyledHeadTitleTypography = styled(Typography)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 0.7rem;\n"])));
var StyledTitleContainerDiv = styled('div')(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n"])));
var StyledTitleIconContainerDiv = styled('div')(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  flex-shrink: 0;\n  display: inline-flex;\n  margin-right: 0.3rem;\n"])));var Title$1 = function Title(_ref) {
  var title = _ref.title,
    icon = _ref.icon,
    headTitle = _ref.headTitle,
    headIcon = _ref.headIcon;
  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/
  var finalHeadIcon = headIcon ? headIcon.replace(/[A-Z]/g, function (letter, idx) {
    return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase());
  }) : undefined;
  var finalIcon = icon ? icon.replace(/[A-Z]/g, function (letter, idx) {
    return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase());
  }) : undefined;
  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/
  return /*#__PURE__*/React.createElement(StyledContainerBox$1, null, headTitle && (/*#__PURE__*/React.createElement(StyledHeadContainerBox, null, finalHeadIcon && (/*#__PURE__*/React.createElement(StyledHeadIconContainerBox, null, /*#__PURE__*/React.createElement(StyledHeadIcon, null, finalHeadIcon))), /*#__PURE__*/React.createElement(StyledHeadTitleTypography, null, headTitle))), /*#__PURE__*/React.createElement(StyledTitleContainerDiv, null, finalIcon && (/*#__PURE__*/React.createElement(StyledTitleIconContainerDiv, null, /*#__PURE__*/React.createElement(Icon, {
    fontSize: 'small'
  }, finalIcon))), /*#__PURE__*/React.createElement("div", null, title)));
};
var Title = /*#__PURE__*/React.memo(Title$1);var _templateObject, _templateObject2;
var SIDE_MENU_WIDTH = 220;
var SCREENS = ['xs', 'sm', 'md', 'lg', 'xl'];
var _getNextScreen = function _getNextScreen(screen) {
  if (screen === 'xs') return 'sm';else if (screen === 'sm') return 'md';else if (screen === 'md') return 'lg';else return 'xl';
};
var DefaultLayout = function DefaultLayout(t0) {
  var $ = c(96);
  var children = t0.children,
    logo = t0.logo,
    badgeVariant = t0.badgeVariant,
    menu = t0.menu,
    t1 = t0.menuHideScreen,
    appBarControl = t0.appBarControl;
  var menuHideScreen = t1 === undefined ? "sm" : t1;
  var location = useLocation();
  var getMenuTitles = _temp;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMobileOpen = _useState2[0],
    setIsMobileOpen = _useState2[1];
  var t2;
  if ($[0] !== menu) {
    t2 = getMenuTitles(menu);
    $[0] = menu;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  var _useState3 = useState(t2),
    _useState4 = _slicedToArray(_useState3, 2),
    menuTitles_0 = _useState4[0],
    setMenuTitles = _useState4[1];
  var t3;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = function t3() {
      return setIsMobileOpen(false);
    };
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  useChange(location.pathname, t3, true);
  var t4;
  if ($[3] !== menu) {
    t4 = function t4() {
      return setMenuTitles(getMenuTitles(menu));
    };
    $[3] = menu;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  useChange(menu, t4, true);
  var t5;
  if ($[5] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = function t5() {
      setIsMobileOpen(_temp2);
    };
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  var toggleIsMobileOpen = t5;
  var t6;
  if ($[6] !== menuHideScreen) {
    t6 = SCREENS.reduce(function (acc, screen) {
      if (screen === menuHideScreen) {
        acc.found = true;
        acc.display[screen] = "block";
      } else {
        acc.display[screen] = acc.found ? "none" : "block";
      }
      return acc;
    }, {
      found: false,
      display: {}
    });
    $[6] = menuHideScreen;
    $[7] = t6;
  } else {
    t6 = $[7];
  }
  var t7;
  if ($[8] !== t6.display) {
    t7 = {
      display: t6.display
    };
    $[8] = t6.display;
    $[9] = t7;
  } else {
    t7 = $[9];
  }
  var sideMenuTemporaryDrawerSx = t7;
  var t8;
  if ($[10] !== menuHideScreen) {
    t8 = SCREENS.reduce(function (acc_0, screen_0) {
      if (screen_0 === menuHideScreen) {
        acc_0.found = true;
        acc_0.display[screen_0] = "none";
      } else {
        acc_0.display[screen_0] = acc_0.found ? "block" : "none";
      }
      return acc_0;
    }, {
      found: false,
      display: {}
    });
    $[10] = menuHideScreen;
    $[11] = t8;
  } else {
    t8 = $[11];
  }
  var t9;
  if ($[12] !== t8.display) {
    t9 = {
      display: t8.display
    };
    $[12] = t8.display;
    $[13] = t9;
  } else {
    t9 = $[13];
  }
  var sideMenuPermanentDrawerSx = t9;
  var nextMenuScreen = _getNextScreen(menuHideScreen);
  var t10;
  if ($[14] !== nextMenuScreen) {
    t10 = {
      width: _defineProperty({}, nextMenuScreen, "calc(100% - ".concat(SIDE_MENU_WIDTH, "px)")),
      ml: _defineProperty({}, nextMenuScreen, "".concat(SIDE_MENU_WIDTH, "px"))
    };
    $[14] = nextMenuScreen;
    $[15] = t10;
  } else {
    t10 = $[15];
  }
  var appBarSx = t10;
  var t11;
  if ($[16] !== nextMenuScreen) {
    t11 = {
      mr: 2,
      display: _defineProperty({}, nextMenuScreen, "none")
    };
    $[16] = nextMenuScreen;
    $[17] = t11;
  } else {
    t11 = $[17];
  }
  var appBarIconButtonSx = t11;
  var t12;
  if ($[18] !== nextMenuScreen) {
    t12 = {
      width: _defineProperty({}, nextMenuScreen, SIDE_MENU_WIDTH),
      flexShrink: _defineProperty({}, nextMenuScreen, 0)
    };
    $[18] = nextMenuScreen;
    $[19] = t12;
  } else {
    t12 = $[19];
  }
  var sideMenuContainerBoxSx = t12;
  var t13;
  if ($[20] !== nextMenuScreen) {
    t13 = {
      width: _defineProperty({}, nextMenuScreen, "calc(100% - ".concat(SIDE_MENU_WIDTH, "px)")),
      flexGrow: 1,
      p: 2,
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    };
    $[20] = nextMenuScreen;
    $[21] = t13;
  } else {
    t13 = $[21];
  }
  var mainBoxSx = t13;
  var titleData = menuTitles_0[location.pathname];
  var t14;
  if ($[22] !== appBarControl || $[23] !== appBarIconButtonSx || $[24] !== appBarSx || $[25] !== badgeVariant || $[26] !== children || $[27] !== isMobileOpen || $[28] !== logo || $[29] !== mainBoxSx || $[30] !== menu || $[31] !== sideMenuContainerBoxSx || $[32] !== sideMenuPermanentDrawerSx || $[33] !== sideMenuTemporaryDrawerSx || $[34] !== titleData) {
    var t15;
    if ($[36] !== appBarControl || $[37] !== appBarIconButtonSx || $[38] !== appBarSx || $[39] !== titleData) {
      var _t;
      if ($[41] !== appBarSx) {
        _t = {
          position: "fixed",
          elevation: 0,
          sx: appBarSx
        };
        $[41] = appBarSx;
        $[42] = _t;
      } else {
        _t = $[42];
      }
      var _t2;
      if ($[43] !== appBarControl || $[44] !== appBarIconButtonSx || $[45] !== titleData) {
        var t18;
        if ($[47] !== appBarIconButtonSx) {
          var _t3;
          if ($[49] === Symbol["for"]("react.memo_cache_sentinel")) {
            _t3 = /*#__PURE__*/React.createElement(Menu, null);
            $[49] = _t3;
          } else {
            _t3 = $[49];
          }
          t18 = /*#__PURE__*/React.createElement(IconButton, {
            color: "inherit",
            "aria-label": "open drawer",
            edge: "start",
            onClick: toggleIsMobileOpen,
            sx: appBarIconButtonSx
          }, _t3);
          $[47] = appBarIconButtonSx;
          $[48] = t18;
        } else {
          t18 = $[48];
        }
        var t19;
        if ($[50] !== titleData) {
          var t20;
          if ($[52] === Symbol["for"]("react.memo_cache_sentinel")) {
            t20 = {
              variant: "h6",
              noWrap: true,
              component: "div",
              sx: {
                flexGrow: 1
              }
            };
            $[52] = t20;
          } else {
            t20 = $[52];
          }
          t19 = /*#__PURE__*/React.createElement(Typography, t20, titleData && /*#__PURE__*/React.createElement(Title, {
            title: titleData.name,
            icon: titleData.icon,
            headTitle: titleData.parentName,
            headIcon: titleData.parentIcon
          }));
          $[50] = titleData;
          $[51] = t19;
        } else {
          t19 = $[51];
        }
        _t2 = /*#__PURE__*/React.createElement(Toolbar, null, t18, t19, appBarControl);
        $[43] = appBarControl;
        $[44] = appBarIconButtonSx;
        $[45] = titleData;
        $[46] = _t2;
      } else {
        _t2 = $[46];
      }
      t15 = /*#__PURE__*/React.createElement(StyledAppBar, _t, _t2);
      $[36] = appBarControl;
      $[37] = appBarIconButtonSx;
      $[38] = appBarSx;
      $[39] = titleData;
      $[40] = t15;
    } else {
      t15 = $[40];
    }
    var t16;
    if ($[53] !== badgeVariant || $[54] !== isMobileOpen || $[55] !== logo || $[56] !== menu || $[57] !== sideMenuContainerBoxSx || $[58] !== sideMenuPermanentDrawerSx || $[59] !== sideMenuTemporaryDrawerSx) {
      var _t4;
      if ($[61] !== sideMenuContainerBoxSx) {
        _t4 = {
          component: "nav",
          "aria-label": "mailbox folders",
          sx: sideMenuContainerBoxSx
        };
        $[61] = sideMenuContainerBoxSx;
        $[62] = _t4;
      } else {
        _t4 = $[62];
      }
      var _t5;
      if ($[63] !== badgeVariant || $[64] !== isMobileOpen || $[65] !== logo || $[66] !== menu || $[67] !== sideMenuTemporaryDrawerSx) {
        var _t6;
        if ($[69] === Symbol["for"]("react.memo_cache_sentinel")) {
          _t6 = {
            keepMounted: true
          };
          $[69] = _t6;
        } else {
          _t6 = $[69];
        }
        var _t7;
        if ($[70] !== isMobileOpen || $[71] !== sideMenuTemporaryDrawerSx) {
          _t7 = {
            variant: "temporary",
            open: isMobileOpen,
            onClose: toggleIsMobileOpen,
            sx: sideMenuTemporaryDrawerSx,
            ModalProps: _t6
          };
          $[70] = isMobileOpen;
          $[71] = sideMenuTemporaryDrawerSx;
          $[72] = _t7;
        } else {
          _t7 = $[72];
        }
        var t21;
        if ($[73] !== badgeVariant || $[74] !== logo || $[75] !== menu) {
          t21 = menu && /*#__PURE__*/React.createElement(SideMenu, {
            logo: logo,
            badgeVariant: badgeVariant,
            list: menu
          });
          $[73] = badgeVariant;
          $[74] = logo;
          $[75] = menu;
          $[76] = t21;
        } else {
          t21 = $[76];
        }
        _t5 = /*#__PURE__*/React.createElement(StyledSideMenuTemporaryDrawer, _t7, t21);
        $[63] = badgeVariant;
        $[64] = isMobileOpen;
        $[65] = logo;
        $[66] = menu;
        $[67] = sideMenuTemporaryDrawerSx;
        $[68] = _t5;
      } else {
        _t5 = $[68];
      }
      var _t8;
      if ($[77] !== badgeVariant || $[78] !== logo || $[79] !== menu || $[80] !== sideMenuPermanentDrawerSx) {
        var _t9;
        if ($[82] !== sideMenuPermanentDrawerSx) {
          _t9 = {
            variant: "permanent",
            open: true,
            sx: sideMenuPermanentDrawerSx
          };
          $[82] = sideMenuPermanentDrawerSx;
          $[83] = _t9;
        } else {
          _t9 = $[83];
        }
        var _t0;
        if ($[84] !== badgeVariant || $[85] !== logo || $[86] !== menu) {
          _t0 = menu && /*#__PURE__*/React.createElement(SideMenu, {
            logo: logo,
            badgeVariant: badgeVariant,
            list: menu
          });
          $[84] = badgeVariant;
          $[85] = logo;
          $[86] = menu;
          $[87] = _t0;
        } else {
          _t0 = $[87];
        }
        _t8 = /*#__PURE__*/React.createElement(StyledSideMenuPermanentDrawer, _t9, _t0);
        $[77] = badgeVariant;
        $[78] = logo;
        $[79] = menu;
        $[80] = sideMenuPermanentDrawerSx;
        $[81] = _t8;
      } else {
        _t8 = $[81];
      }
      t16 = /*#__PURE__*/React.createElement(Box, _t4, _t5, _t8);
      $[53] = badgeVariant;
      $[54] = isMobileOpen;
      $[55] = logo;
      $[56] = menu;
      $[57] = sideMenuContainerBoxSx;
      $[58] = sideMenuPermanentDrawerSx;
      $[59] = sideMenuTemporaryDrawerSx;
      $[60] = t16;
    } else {
      t16 = $[60];
    }
    var t17;
    if ($[88] !== children || $[89] !== mainBoxSx) {
      var _t1;
      if ($[91] !== mainBoxSx) {
        _t1 = {
          component: "main",
          sx: mainBoxSx
        };
        $[91] = mainBoxSx;
        $[92] = _t1;
      } else {
        _t1 = $[92];
      }
      var _t10;
      if ($[93] === Symbol["for"]("react.memo_cache_sentinel")) {
        _t10 = /*#__PURE__*/React.createElement(Toolbar, null);
        $[93] = _t10;
      } else {
        _t10 = $[93];
      }
      var _t11;
      if ($[94] !== children) {
        _t11 = /*#__PURE__*/React.createElement(StyledMainContentDiv, null, children);
        $[94] = children;
        $[95] = _t11;
      } else {
        _t11 = $[95];
      }
      t17 = /*#__PURE__*/React.createElement(Box, _t1, _t10, _t11);
      $[88] = children;
      $[89] = mainBoxSx;
      $[90] = t17;
    } else {
      t17 = $[90];
    }
    t14 = /*#__PURE__*/React.createElement(StyledContainerBox, null, t15, t16, t17);
    $[22] = appBarControl;
    $[23] = appBarIconButtonSx;
    $[24] = appBarSx;
    $[25] = badgeVariant;
    $[26] = children;
    $[27] = isMobileOpen;
    $[28] = logo;
    $[29] = mainBoxSx;
    $[30] = menu;
    $[31] = sideMenuContainerBoxSx;
    $[32] = sideMenuPermanentDrawerSx;
    $[33] = sideMenuTemporaryDrawerSx;
    $[34] = titleData;
    $[35] = t14;
  } else {
    t14 = $[35];
  }
  return t14;
};
/********************************************************************************************************************
 * Styled Components
 * ******************************************************************************************************************/
var StyledContainerBox = styled(Box)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n"])));
var StyledAppBar = styled(AppBar)(function (_ref) {
  var theme = _ref.theme;
  return theme.unstable_sx({
    backdropFilter: 'blur(20px)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: 'text.primary',
    borderBottom: 'thin solid #f5f5f5'
  });
});
var StyledSideMenuTemporaryDrawer = styled(Drawer)(function (_ref2) {
  var theme = _ref2.theme;
  return theme.unstable_sx({
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: SIDE_MENU_WIDTH
    }
  });
});
var StyledSideMenuPermanentDrawer = styled(Drawer)(function (_ref3) {
  var theme = _ref3.theme;
  return theme.unstable_sx({
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: SIDE_MENU_WIDTH
    }
  });
});
var StyledMainContentDiv = styled('div')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"])));
function _temp(m) {
  var menuTitles = {};
  if (m) {
    m.forEach(function (info) {
      if ((info.uri == null || info.uri === "") && info.items && info.items.length > 0) {
        info.items.map(function (subInfo) {
          menuTitles[subInfo.uri] = {
            name: subInfo.name,
            parentName: info.name,
            parentIcon: info.icon
          };
        });
      } else {
        if (info.uri) {
          menuTitles[info.uri] = {
            name: info.name,
            icon: info.icon
          };
        }
      }
    });
  }
  return menuTitles;
}
function _temp2(isMobileOpen_0) {
  return !isMobileOpen_0;
}export{CardLayout,DefaultLayout};