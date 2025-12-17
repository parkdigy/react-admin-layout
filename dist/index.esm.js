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
var StyledListItemIcon = styled(ListItemIcon)(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n  min-width: 30px;\n"])));var useChanged = function useChanged(value, callback) {
  var _React$useState = React.useState(value),
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
  useChanged(info, t1);
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
  useChanged(location.pathname, t2);
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
    var finalList = list.map(_temp2);
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
function _temp2(item) {
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
  var $ = c(95);
  var children = t0.children,
    logo = t0.logo,
    badgeVariant = t0.badgeVariant,
    menu = t0.menu,
    t1 = t0.menuHideScreen,
    appBarControl = t0.appBarControl;
  var menuHideScreen = t1 === undefined ? "sm" : t1;
  var location = useLocation();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMobileOpen = _useState2[0],
    setIsMobileOpen = _useState2[1];
  var t2;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = {};
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  var _useState3 = useState(t2),
    _useState4 = _slicedToArray(_useState3, 2),
    menuTitles = _useState4[0],
    setMenuTitles = _useState4[1];
  var t3;
  if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = function t3() {
      setIsMobileOpen(false);
    };
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  useChanged(location.pathname, t3);
  var t4;
  if ($[2] !== menu) {
    t4 = function t4() {
      var menuTitles_0 = {};
      if (menu) {
        menu.forEach(function (info) {
          if ((info.uri == null || info.uri === "") && info.items && info.items.length > 0) {
            info.items.map(function (subInfo) {
              menuTitles_0[subInfo.uri] = {
                name: subInfo.name,
                parentName: info.name,
                parentIcon: info.icon
              };
            });
          } else {
            if (info.uri) {
              menuTitles_0[info.uri] = {
                name: info.name,
                icon: info.icon
              };
            }
          }
        });
      }
      setMenuTitles(menuTitles_0);
    };
    $[2] = menu;
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  useChanged(menu, t4);
  var t5;
  if ($[4] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = function t5() {
      setIsMobileOpen(_temp);
    };
    $[4] = t5;
  } else {
    t5 = $[4];
  }
  var toggleIsMobileOpen = t5;
  var t6;
  if ($[5] !== menuHideScreen) {
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
    $[5] = menuHideScreen;
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  var t7;
  if ($[7] !== t6.display) {
    t7 = {
      display: t6.display
    };
    $[7] = t6.display;
    $[8] = t7;
  } else {
    t7 = $[8];
  }
  var sideMenuTemporaryDrawerSx = t7;
  var t8;
  if ($[9] !== menuHideScreen) {
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
    $[9] = menuHideScreen;
    $[10] = t8;
  } else {
    t8 = $[10];
  }
  var t9;
  if ($[11] !== t8.display) {
    t9 = {
      display: t8.display
    };
    $[11] = t8.display;
    $[12] = t9;
  } else {
    t9 = $[12];
  }
  var sideMenuPermanentDrawerSx = t9;
  var nextMenuScreen = _getNextScreen(menuHideScreen);
  var t10;
  if ($[13] !== nextMenuScreen) {
    t10 = {
      width: _defineProperty({}, nextMenuScreen, "calc(100% - ".concat(SIDE_MENU_WIDTH, "px)")),
      ml: _defineProperty({}, nextMenuScreen, "".concat(SIDE_MENU_WIDTH, "px"))
    };
    $[13] = nextMenuScreen;
    $[14] = t10;
  } else {
    t10 = $[14];
  }
  var appBarSx = t10;
  var t11;
  if ($[15] !== nextMenuScreen) {
    t11 = {
      mr: 2,
      display: _defineProperty({}, nextMenuScreen, "none")
    };
    $[15] = nextMenuScreen;
    $[16] = t11;
  } else {
    t11 = $[16];
  }
  var appBarIconButtonSx = t11;
  var t12;
  if ($[17] !== nextMenuScreen) {
    t12 = {
      width: _defineProperty({}, nextMenuScreen, SIDE_MENU_WIDTH),
      flexShrink: _defineProperty({}, nextMenuScreen, 0)
    };
    $[17] = nextMenuScreen;
    $[18] = t12;
  } else {
    t12 = $[18];
  }
  var sideMenuContainerBoxSx = t12;
  var t13;
  if ($[19] !== nextMenuScreen) {
    t13 = {
      width: _defineProperty({}, nextMenuScreen, "calc(100% - ".concat(SIDE_MENU_WIDTH, "px)")),
      flexGrow: 1,
      p: 2,
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    };
    $[19] = nextMenuScreen;
    $[20] = t13;
  } else {
    t13 = $[20];
  }
  var mainBoxSx = t13;
  var titleData = menuTitles[location.pathname];
  var t14;
  if ($[21] !== appBarControl || $[22] !== appBarIconButtonSx || $[23] !== appBarSx || $[24] !== badgeVariant || $[25] !== children || $[26] !== isMobileOpen || $[27] !== logo || $[28] !== mainBoxSx || $[29] !== menu || $[30] !== sideMenuContainerBoxSx || $[31] !== sideMenuPermanentDrawerSx || $[32] !== sideMenuTemporaryDrawerSx || $[33] !== titleData) {
    var t15;
    if ($[35] !== appBarControl || $[36] !== appBarIconButtonSx || $[37] !== appBarSx || $[38] !== titleData) {
      var _t;
      if ($[40] !== appBarSx) {
        _t = {
          position: "fixed",
          elevation: 0,
          sx: appBarSx
        };
        $[40] = appBarSx;
        $[41] = _t;
      } else {
        _t = $[41];
      }
      var _t2;
      if ($[42] !== appBarControl || $[43] !== appBarIconButtonSx || $[44] !== titleData) {
        var t18;
        if ($[46] !== appBarIconButtonSx) {
          var _t3;
          if ($[48] === Symbol["for"]("react.memo_cache_sentinel")) {
            _t3 = /*#__PURE__*/React.createElement(Menu, null);
            $[48] = _t3;
          } else {
            _t3 = $[48];
          }
          t18 = /*#__PURE__*/React.createElement(IconButton, {
            color: "inherit",
            "aria-label": "open drawer",
            edge: "start",
            onClick: toggleIsMobileOpen,
            sx: appBarIconButtonSx
          }, _t3);
          $[46] = appBarIconButtonSx;
          $[47] = t18;
        } else {
          t18 = $[47];
        }
        var t19;
        if ($[49] !== titleData) {
          var t20;
          if ($[51] === Symbol["for"]("react.memo_cache_sentinel")) {
            t20 = {
              variant: "h6",
              noWrap: true,
              component: "div",
              sx: {
                flexGrow: 1
              }
            };
            $[51] = t20;
          } else {
            t20 = $[51];
          }
          t19 = /*#__PURE__*/React.createElement(Typography, t20, titleData && /*#__PURE__*/React.createElement(Title, {
            title: titleData.name,
            icon: titleData.icon,
            headTitle: titleData.parentName,
            headIcon: titleData.parentIcon
          }));
          $[49] = titleData;
          $[50] = t19;
        } else {
          t19 = $[50];
        }
        _t2 = /*#__PURE__*/React.createElement(Toolbar, null, t18, t19, appBarControl);
        $[42] = appBarControl;
        $[43] = appBarIconButtonSx;
        $[44] = titleData;
        $[45] = _t2;
      } else {
        _t2 = $[45];
      }
      t15 = /*#__PURE__*/React.createElement(StyledAppBar, _t, _t2);
      $[35] = appBarControl;
      $[36] = appBarIconButtonSx;
      $[37] = appBarSx;
      $[38] = titleData;
      $[39] = t15;
    } else {
      t15 = $[39];
    }
    var t16;
    if ($[52] !== badgeVariant || $[53] !== isMobileOpen || $[54] !== logo || $[55] !== menu || $[56] !== sideMenuContainerBoxSx || $[57] !== sideMenuPermanentDrawerSx || $[58] !== sideMenuTemporaryDrawerSx) {
      var _t4;
      if ($[60] !== sideMenuContainerBoxSx) {
        _t4 = {
          component: "nav",
          "aria-label": "mailbox folders",
          sx: sideMenuContainerBoxSx
        };
        $[60] = sideMenuContainerBoxSx;
        $[61] = _t4;
      } else {
        _t4 = $[61];
      }
      var _t5;
      if ($[62] !== badgeVariant || $[63] !== isMobileOpen || $[64] !== logo || $[65] !== menu || $[66] !== sideMenuTemporaryDrawerSx) {
        var _t6;
        if ($[68] === Symbol["for"]("react.memo_cache_sentinel")) {
          _t6 = {
            keepMounted: true
          };
          $[68] = _t6;
        } else {
          _t6 = $[68];
        }
        var _t7;
        if ($[69] !== isMobileOpen || $[70] !== sideMenuTemporaryDrawerSx) {
          _t7 = {
            variant: "temporary",
            open: isMobileOpen,
            onClose: toggleIsMobileOpen,
            sx: sideMenuTemporaryDrawerSx,
            ModalProps: _t6
          };
          $[69] = isMobileOpen;
          $[70] = sideMenuTemporaryDrawerSx;
          $[71] = _t7;
        } else {
          _t7 = $[71];
        }
        var t21;
        if ($[72] !== badgeVariant || $[73] !== logo || $[74] !== menu) {
          t21 = menu && /*#__PURE__*/React.createElement(SideMenu, {
            logo: logo,
            badgeVariant: badgeVariant,
            list: menu
          });
          $[72] = badgeVariant;
          $[73] = logo;
          $[74] = menu;
          $[75] = t21;
        } else {
          t21 = $[75];
        }
        _t5 = /*#__PURE__*/React.createElement(StyledSideMenuTemporaryDrawer, _t7, t21);
        $[62] = badgeVariant;
        $[63] = isMobileOpen;
        $[64] = logo;
        $[65] = menu;
        $[66] = sideMenuTemporaryDrawerSx;
        $[67] = _t5;
      } else {
        _t5 = $[67];
      }
      var _t8;
      if ($[76] !== badgeVariant || $[77] !== logo || $[78] !== menu || $[79] !== sideMenuPermanentDrawerSx) {
        var _t9;
        if ($[81] !== sideMenuPermanentDrawerSx) {
          _t9 = {
            variant: "permanent",
            open: true,
            sx: sideMenuPermanentDrawerSx
          };
          $[81] = sideMenuPermanentDrawerSx;
          $[82] = _t9;
        } else {
          _t9 = $[82];
        }
        var _t0;
        if ($[83] !== badgeVariant || $[84] !== logo || $[85] !== menu) {
          _t0 = menu && /*#__PURE__*/React.createElement(SideMenu, {
            logo: logo,
            badgeVariant: badgeVariant,
            list: menu
          });
          $[83] = badgeVariant;
          $[84] = logo;
          $[85] = menu;
          $[86] = _t0;
        } else {
          _t0 = $[86];
        }
        _t8 = /*#__PURE__*/React.createElement(StyledSideMenuPermanentDrawer, _t9, _t0);
        $[76] = badgeVariant;
        $[77] = logo;
        $[78] = menu;
        $[79] = sideMenuPermanentDrawerSx;
        $[80] = _t8;
      } else {
        _t8 = $[80];
      }
      t16 = /*#__PURE__*/React.createElement(Box, _t4, _t5, _t8);
      $[52] = badgeVariant;
      $[53] = isMobileOpen;
      $[54] = logo;
      $[55] = menu;
      $[56] = sideMenuContainerBoxSx;
      $[57] = sideMenuPermanentDrawerSx;
      $[58] = sideMenuTemporaryDrawerSx;
      $[59] = t16;
    } else {
      t16 = $[59];
    }
    var t17;
    if ($[87] !== children || $[88] !== mainBoxSx) {
      var _t1;
      if ($[90] !== mainBoxSx) {
        _t1 = {
          component: "main",
          sx: mainBoxSx
        };
        $[90] = mainBoxSx;
        $[91] = _t1;
      } else {
        _t1 = $[91];
      }
      var _t10;
      if ($[92] === Symbol["for"]("react.memo_cache_sentinel")) {
        _t10 = /*#__PURE__*/React.createElement(Toolbar, null);
        $[92] = _t10;
      } else {
        _t10 = $[92];
      }
      var _t11;
      if ($[93] !== children) {
        _t11 = /*#__PURE__*/React.createElement(StyledMainContentDiv, null, children);
        $[93] = children;
        $[94] = _t11;
      } else {
        _t11 = $[94];
      }
      t17 = /*#__PURE__*/React.createElement(Box, _t1, _t10, _t11);
      $[87] = children;
      $[88] = mainBoxSx;
      $[89] = t17;
    } else {
      t17 = $[89];
    }
    t14 = /*#__PURE__*/React.createElement(StyledContainerBox, null, t15, t16, t17);
    $[21] = appBarControl;
    $[22] = appBarIconButtonSx;
    $[23] = appBarSx;
    $[24] = badgeVariant;
    $[25] = children;
    $[26] = isMobileOpen;
    $[27] = logo;
    $[28] = mainBoxSx;
    $[29] = menu;
    $[30] = sideMenuContainerBoxSx;
    $[31] = sideMenuPermanentDrawerSx;
    $[32] = sideMenuTemporaryDrawerSx;
    $[33] = titleData;
    $[34] = t14;
  } else {
    t14 = $[34];
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
function _temp(isMobileOpen_0) {
  return !isMobileOpen_0;
}export{CardLayout,DefaultLayout};