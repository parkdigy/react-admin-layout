import {Grid,styled,ListItemIcon,ListItemButton,Icon,ListItemText,Badge,Collapse,List,useTheme,alpha,Box,Toolbar,Typography,AppBar,Drawer,IconButton}from'@mui/material';import React,{useState,useEffect,useCallback,useMemo}from'react';import {useLocation,useNavigate}from'react-router-dom';import {ExpandMore,Menu}from'@mui/icons-material';import {notEmpty,empty}from'@pdg/util';import SimpleBar from'simplebar-react';function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z = ".simplebar-track.simplebar-vertical {\n  width: 8px !important;\n}\n.simplebar-track.simplebar-vertical .simplebar-scrollbar.simplebar-visible:before {\n  opacity: 0.3 !important;\n}\n\n.MuiButtonBase-root.MuiButton-root.MuiButton-outlined {\n  padding: 5px 15px 4px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-sizeLarge {\n  padding: 7px 21px 6px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-sizeSmall {\n  padding: 3px 9px 2px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-contained {\n  padding: 6px 16px 5px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-sizeLarge {\n  padding: 8px 22px 7px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-sizeSmall {\n  padding: 4px 10px 3px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-text {\n  padding: 6px 8px 5px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-sizeLarge {\n  padding: 8px 11px 7px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-sizeSmall {\n  padding: 4px 5px 3px;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo,\nmain,\ninput,\nbutton,\ntextarea,\npre,\nselect,\na {\n  font-family: \"Pretendard\", \"Apple Gothic\", \"Dotum\", sans-serif;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  box-sizing: border-box;\n  word-break: keep-all;\n  line-height: unset;\n}\n\n*:before,\n*:after {\n  box-sizing: border-box;\n}";
styleInject(css_248z);var CardLayout = function (_a) {
    var children = _a.children, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? '#eff3f8' : _b;
    return (React.createElement(Grid, { container: true, direction: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: backgroundColor, minHeight: '100vh' },
        React.createElement(Grid, null, children)));
};/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};var StyledExpandMore = styled(ExpandMore)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  margin-top: auto;\n  margin-bottom: auto;\n  @keyframes open {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(180deg);\n    }\n  }\n  @keyframes close {\n    0% {\n      transform: rotate(180deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n"], ["\n  margin-top: auto;\n  margin-bottom: auto;\n  @keyframes open {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(180deg);\n    }\n  }\n  @keyframes close {\n    0% {\n      transform: rotate(180deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n"])));
var StyledListItemIcon = styled(ListItemIcon)(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  min-width: 30px;\n"], ["\n  min-width: 30px;\n"])));
var templateObject_1$4, templateObject_2$2;var SideMenuListItem = function (_a) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var info = _a.info, badgeVariant = _a.badgeVariant, expandedBackgroundColor = _a.expandedBackgroundColor;
    var location = useLocation();
    var navigate = useNavigate();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = useState(false), isExpandable = _b[0], setIsExpandable = _b[1];
    var _c = useState(false), isExpand = _c[0], setIsExpand = _c[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
        setIsExpandable(notEmpty(info.items));
        if (info.items && info.items.find(function (info) { return location.pathname === info.uri; })) {
            setIsExpand(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [info]);
    useEffect(function () {
        if (isExpandable && isExpand != null) {
            if (info.uri !== location.pathname) {
                if (info.items && !info.items.find(function (info) { return location.pathname === info.uri; })) {
                    if (isExpand) {
                        setIsExpand(false);
                    }
                }
            }
        }
        if (isExpandable && !isExpand) {
            if (info.items && info.items.find(function (info) { return location.pathname === info.uri; })) {
                setIsExpand(true);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(React.Fragment, null,
        React.createElement(ListItemButton, { onClick: isExpandable ? function () { return setIsExpand(function (old) { return !old; }); } : function () { return info.uri && navigate(info.uri); }, selected: isExpandable ? false : info.uri === location.pathname, style: {
                backgroundColor: isExpandable && isExpand ? expandedBackgroundColor : undefined,
            } },
            React.createElement(StyledListItemIcon, null, info.icon && React.createElement(Icon, { fontSize: 'small' }, info.icon)),
            React.createElement(ListItemText, { primaryTypographyProps: { style: { fontWeight: info.depth === 1 ? 600 : undefined } } }, info.badge ? (React.createElement(Badge, { badgeContent: info.badge, color: 'error', variant: badgeVariant !== undefined ? badgeVariant : info.badgeVariant, anchorOrigin: { horizontal: 'left', vertical: 'top' }, slotProps: {
                    badge: { style: { left: '100%', top: '50%', transform: 'scale(.8) translate(10px, -50%)' } },
                } },
                React.createElement("div", null, info.name))) : (info.name)),
            isExpandable && (React.createElement(StyledExpandMore, { sx: {
                    animation: "".concat(isExpand ? 'open' : 'close', " 0.1s linear"),
                    transform: "rotate(".concat(isExpand ? 180 : 0, "deg)"),
                } }))),
        isExpandable && (React.createElement(Collapse, { in: isExpand, style: { backgroundColor: isExpand ? expandedBackgroundColor : undefined } }, info.items &&
            info.items.map(function (subInfo, idx) { return React.createElement(SideMenuListItem, { key: idx, badgeVariant: badgeVariant, info: subInfo }); })))));
};var StyledList = styled(List)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n"], ["\n  padding: 0;\n"])));
var templateObject_1$3;var SideMenuList = function (_a) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var list = _a.list, badgeVariant = _a.badgeVariant;
    var theme = useTheme();
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var finalList = list.map(function (item) { return (__assign(__assign({}, item), { icon: item.icon
            ? item.icon.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); })
            : undefined })); });
    var expandedBackgroundColor = alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity / 2);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledList, null, finalList.map(function (info, idx) { return (React.createElement(SideMenuListItem, { key: idx, info: info, badgeVariant: badgeVariant, expandedBackgroundColor: expandedBackgroundColor })); })));
};
var SideMenuList$1 = React.memo(SideMenuList);var StyledSimpleBar = styled(SimpleBar)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  max-height: 100%;\n"], ["\n  max-height: 100%;\n"])));
var StyledLogoContainerBox = styled(Box)(function (_a) {
    var theme = _a.theme;
    return theme.unstable_sx({
        borderBottom: 'thin solid #f5f5f5',
        color: 'text.primary',
    });
});
var templateObject_1$2;var SideMenu = function (_a) {
    var logo = _a.logo, badgeVariant = _a.badgeVariant, list = _a.list;
    return (React.createElement(StyledSimpleBar, null,
        React.createElement(StyledLogoContainerBox, null,
            React.createElement(Toolbar, null, logo)),
        list && React.createElement(SideMenuList$1, { badgeVariant: badgeVariant, list: list })));
};
var SideMenu$1 = React.memo(SideMenu);var StyledContainerBox$1 = styled(Box)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var StyledHeadContainerBox = styled(Box)(function (_a) {
    var theme = _a.theme;
    return theme.unstable_sx({
        display: { xs: 'none', sm: 'flex' },
        alignItems: 'center',
        opacity: 0.5,
    });
});
var StyledHeadIconContainerBox = styled(Box)(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  margin-right: 0.25rem;\n  line-height: 0;\n"], ["\n  margin-right: 0.25rem;\n  line-height: 0;\n"])));
var StyledHeadIcon = styled(Icon)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 1rem;\n"], ["\n  font-size: 1rem;\n"])));
var StyledHeadTitleTypography = styled(Typography)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 0.7rem;\n"], ["\n  font-size: 0.7rem;\n"])));
var StyledTitleContainerDiv = styled('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n"], ["\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n"])));
var StyledTitleIconContainerDiv = styled('div')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  flex-shrink: 0;\n  display: inline-flex;\n  margin-right: 0.3rem;\n"], ["\n  flex-shrink: 0;\n  display: inline-flex;\n  margin-right: 0.3rem;\n"])));
var templateObject_1$1, templateObject_2$1, templateObject_3, templateObject_4, templateObject_5, templateObject_6;var Title = function (_a) {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var title = _a.title, icon = _a.icon, headTitle = _a.headTitle, headIcon = _a.headIcon;
    var finalHeadIcon = headIcon
        ? headIcon.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); })
        : undefined;
    var finalIcon = icon
        ? icon.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); })
        : undefined;
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledContainerBox$1, null,
        headTitle && (React.createElement(StyledHeadContainerBox, null,
            finalHeadIcon && (React.createElement(StyledHeadIconContainerBox, null,
                React.createElement(StyledHeadIcon, null, finalHeadIcon))),
            React.createElement(StyledHeadTitleTypography, null, headTitle))),
        React.createElement(StyledTitleContainerDiv, null,
            finalIcon && (React.createElement(StyledTitleIconContainerDiv, null,
                React.createElement(Icon, { fontSize: 'small' }, finalIcon))),
            React.createElement("div", null, title))));
};
var Title$1 = React.memo(Title);var SIDE_MENU_WIDTH = 220;
var StyledContainerBox = styled(Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  height: 100%;\n"], ["\n  display: flex;\n  height: 100%;\n"])));
var StyledAppBar = styled(AppBar)(function (_a) {
    var theme = _a.theme;
    return theme.unstable_sx({
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        color: 'text.primary',
        borderBottom: 'thin solid #f5f5f5',
    });
});
var StyledSideMenuTemporaryDrawer = styled(Drawer)(function (_a) {
    var theme = _a.theme;
    return theme.unstable_sx({
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: SIDE_MENU_WIDTH },
    });
});
var StyledSideMenuPermanentDrawer = styled(Drawer)(function (_a) {
    var theme = _a.theme;
    return theme.unstable_sx({
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: SIDE_MENU_WIDTH },
    });
});
var StyledMainContentDiv = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"])));
var templateObject_1, templateObject_2;var SCREENS = ['xs', 'sm', 'md', 'lg', 'xl'];
var _getNextScreen = function (screen) {
    if (screen === 'xs')
        return 'sm';
    else if (screen === 'sm')
        return 'md';
    else if (screen === 'md')
        return 'lg';
    else
        return 'xl';
};
var DefaultLayout = function (_a) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var _b, _c, _d, _e, _f, _g;
    var children = _a.children, logo = _a.logo, badgeVariant = _a.badgeVariant, menu = _a.menu, _h = _a.menuHideScreen, menuHideScreen = _h === void 0 ? 'sm' : _h, appBarControl = _a.appBarControl;
    var location = useLocation();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _j = useState(false), isMobileOpen = _j[0], setIsMobileOpen = _j[1];
    var _k = useState({}), menuTitles = _k[0], setMenuTitles = _k[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
        var menuTitles = {};
        if (menu) {
            menu.forEach(function (info) {
                if (empty(info.uri) && info.items && info.items.length > 0) {
                    info.items.map(function (subInfo) {
                        menuTitles[subInfo.uri] = { name: subInfo.name, parentName: info.name, parentIcon: info.icon };
                    });
                }
                else if (info.uri) {
                    menuTitles[info.uri] = { name: info.name, icon: info.icon };
                }
            });
        }
        setMenuTitles(menuTitles);
    }, [menu]);
    useEffect(function () {
        setIsMobileOpen(false);
    }, [location]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var toggleIsMobileOpen = useCallback(function () {
        setIsMobileOpen(function (isMobileOpen) { return !isMobileOpen; });
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var sideMenuTemporaryDrawerSx = useMemo(function () {
        var found = false;
        return {
            display: SCREENS.reduce(function (res, screen) {
                if (screen === menuHideScreen) {
                    found = true;
                    res[screen] = 'block';
                }
                else {
                    res[screen] = found ? 'none' : 'block';
                }
                return res;
            }, {}),
        };
    }, [menuHideScreen]);
    var sideMenuPermanentDrawerSx = useMemo(function () {
        var found = false;
        return {
            display: SCREENS.reduce(function (res, screen) {
                if (screen === menuHideScreen) {
                    found = true;
                    res[screen] = 'none';
                }
                else {
                    res[screen] = found ? 'block' : 'none';
                }
                return res;
            }, {}),
        };
    }, [menuHideScreen]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var nextMenuScreen = _getNextScreen(menuHideScreen);
    var appBarSx = {
        width: (_b = {}, _b[nextMenuScreen] = "calc(100% - ".concat(SIDE_MENU_WIDTH, "px)"), _b),
        ml: (_c = {}, _c[nextMenuScreen] = "".concat(SIDE_MENU_WIDTH, "px"), _c),
    };
    var appBarIconButtonSx = { mr: 2, display: (_d = {}, _d[nextMenuScreen] = 'none', _d) };
    var sideMenuContainerBoxSx = {
        width: (_e = {}, _e[nextMenuScreen] = SIDE_MENU_WIDTH, _e),
        flexShrink: (_f = {}, _f[nextMenuScreen] = 0, _f),
    };
    var mainBoxSx = {
        width: (_g = {}, _g[nextMenuScreen] = "calc(100% - ".concat(SIDE_MENU_WIDTH, "px)"), _g),
        flexGrow: 1,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    };
    var titleData = menuTitles[location.pathname];
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledContainerBox, null,
        React.createElement(StyledAppBar, { position: 'fixed', elevation: 0, sx: appBarSx },
            React.createElement(Toolbar, null,
                React.createElement(IconButton, { color: 'inherit', "aria-label": 'open drawer', edge: 'start', onClick: toggleIsMobileOpen, sx: appBarIconButtonSx },
                    React.createElement(Menu, null)),
                React.createElement(Typography, { variant: 'h6', noWrap: true, component: 'div', sx: { flexGrow: 1 } }, titleData && (React.createElement(Title$1, { title: titleData.name, icon: titleData.icon, headTitle: titleData.parentName, headIcon: titleData.parentIcon }))),
                appBarControl)),
        React.createElement(Box, { component: 'nav', "aria-label": 'mailbox folders', sx: sideMenuContainerBoxSx },
            React.createElement(StyledSideMenuTemporaryDrawer, { variant: 'temporary', open: isMobileOpen, onClose: toggleIsMobileOpen, sx: sideMenuTemporaryDrawerSx, ModalProps: {
                    keepMounted: true, // Better open performance on mobile.
                } }, menu && React.createElement(SideMenu$1, { logo: logo, badgeVariant: badgeVariant, list: menu })),
            React.createElement(StyledSideMenuPermanentDrawer, { variant: 'permanent', open: true, sx: sideMenuPermanentDrawerSx }, menu && React.createElement(SideMenu$1, { logo: logo, badgeVariant: badgeVariant, list: menu }))),
        React.createElement(Box, { component: 'main', sx: mainBoxSx },
            React.createElement(Toolbar, null),
            React.createElement(StyledMainContentDiv, null, children))));
};export{CardLayout,DefaultLayout};