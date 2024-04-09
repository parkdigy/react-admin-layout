import {Grid,useTheme,alpha,ListItemButton,ListItemIcon,Icon,ListItemText,Badge,Collapse,styled,List,Box,Toolbar,Typography,AppBar,Drawer,IconButton}from'@mui/material';import React,{useState,useEffect,useCallback,useMemo}from'react';import {useLocation}from'react-router-dom';import {ExpandMore,Menu}from'@mui/icons-material';import {notEmpty,empty}from'@pdg/util';import SimpleBar from'simplebar-react';var CardLayoutDefaultProps = {
    backgroundColor: '#eff3f8',
};var CardLayout = function (_a) {
    var children = _a.children, backgroundColor = _a.backgroundColor;
    return (React.createElement(Grid, { container: true, direction: 'column', alignItems: 'center', justifyContent: 'center', style: { minHeight: '100vh', backgroundColor: backgroundColor } },
        React.createElement(Grid, { item: true, xs: 12 }, children)));
};
CardLayout.defaultProps = CardLayoutDefaultProps;var SideMenuListItem = function (_a) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var info = _a.info, badgeVariant = _a.badgeVariant, onClick = _a.onClick;
    var theme = useTheme();
    var location = useLocation();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = useState(false), isExpandable = _b[0], setIsExpandable = _b[1];
    var _c = useState(false), isExpand = _c[0], setIsExpand = _c[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
        setIsExpandable(!!info && notEmpty(info.items));
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
     * Function
     * ******************************************************************************************************************/
    var toggleIsExpand = useCallback(function () {
        setIsExpand(function (isExpand) { return !isExpand; });
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var icon = useMemo(function () {
        return info.icon
            ? info.icon.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); })
            : undefined;
    }, [info]);
    var containerStyle = useMemo(function () { return ({
        backgroundColor: isExpandable && isExpand
            ? alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity / 2)
            : undefined,
    }); }, [isExpand, isExpandable, theme]);
    var expandIconSx = useMemo(function () {
        return isExpandable && isExpand != null
            ? {
                marginTop: 'auto',
                marginBottom: 'auto',
                animation: "".concat(isExpand ? 'open' : 'close', " 0.1s linear"),
                transform: "rotate(".concat(isExpand ? 180 : 0, "deg)"),
                '@keyframes open': {
                    '0%': {
                        transform: "rotate(0deg)",
                    },
                    '100%': {
                        transform: "rotate(180deg)",
                    },
                },
                '@keyframes close': {
                    '0%': {
                        transform: "rotate(180deg)",
                    },
                    '100%': {
                        transform: "rotate(0deg)",
                    },
                },
            }
            : {
                marginTop: 'auto',
                marginBottom: 'auto',
            };
    }, [isExpandable, isExpand]);
    var collapseStyle = useMemo(function () { return ({
        backgroundColor: isExpand
            ? alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity / 2)
            : undefined,
    }); }, [isExpand, theme]);
    var primaryTypographyProps = useMemo(function () { return ({ sx: { fontWeight: info.depth === 1 ? 600 : null } }); }, [info]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(React.Fragment, null,
        React.createElement(ListItemButton, { onClick: isExpandable
                ? toggleIsExpand
                : function () {
                    if (onClick)
                        onClick(info);
                }, selected: isExpandable ? false : info.uri === location.pathname, style: containerStyle },
            React.createElement(ListItemIcon, { sx: { minWidth: 30 } }, icon && React.createElement(Icon, { fontSize: 'small' }, icon)),
            React.createElement(ListItemText, { primaryTypographyProps: primaryTypographyProps }, info.badge ? (React.createElement(Badge, { badgeContent: info.badge, color: 'error', variant: badgeVariant !== undefined ? badgeVariant : info.badgeVariant, anchorOrigin: { horizontal: 'left', vertical: 'top' }, slotProps: {
                    badge: { style: { left: '100%', top: '50%', transform: 'scale(.8) translate(10px, -50%)' } },
                } },
                React.createElement("div", null, info.name))) : (info.name)),
            isExpandable && React.createElement(ExpandMore, { sx: expandIconSx })),
        React.createElement(Collapse, { in: isExpand, style: collapseStyle }, isExpandable &&
            info.items &&
            info.items.map(function (subInfo, idx) { return (React.createElement(SideMenuListItem, { key: idx, badgeVariant: badgeVariant, info: subInfo, onClick: onClick })); }))));
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
/* global Reflect, Promise, SuppressedError, Symbol */


function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};var StyledList = styled(List)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n"], ["\n  padding: 0;\n"])));
var templateObject_1$3;var SideMenuList = function (_a) {
    var list = _a.list, badgeVariant = _a.badgeVariant, onClick = _a.onClick;
    return (React.createElement(StyledList, null, list.map(function (info, idx) { return (React.createElement(SideMenuListItem, { key: idx, info: info, badgeVariant: badgeVariant, onClick: onClick })); })));
};var StyledSimpleBar = styled(SimpleBar)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  max-height: 100%;\n"], ["\n  max-height: 100%;\n"])));
var StyledLogoContainerBox = styled(Box)(function (_a) {
    var theme = _a.theme;
    return theme.unstable_sx({
        borderBottom: 'thin solid #f5f5f5',
        color: 'text.primary',
    });
});
var templateObject_1$2;var SideMenu = function (_a) {
    var logo = _a.logo, badgeVariant = _a.badgeVariant, list = _a.list, onClick = _a.onClick;
    return (React.createElement(StyledSimpleBar, null,
        React.createElement(StyledLogoContainerBox, null,
            React.createElement(Toolbar, null, logo)),
        list && React.createElement(SideMenuList, { badgeVariant: badgeVariant, list: list, onClick: onClick })));
};var StyledContainerBox$1 = styled(Box)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
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
    var title = _a.title, icon = _a.icon, headTitle = _a.headTitle, headIcon = _a.headIcon;
    var finalHeadIcon = useMemo(function () {
        return headIcon
            ? headIcon.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); })
            : undefined;
    }, [headIcon]);
    var finalIcon = useMemo(function () { return (icon ? icon.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); }) : undefined); }, [icon]);
    return (React.createElement(StyledContainerBox$1, null,
        headTitle && (React.createElement(StyledHeadContainerBox, null,
            finalHeadIcon && (React.createElement(StyledHeadIconContainerBox, null,
                React.createElement(StyledHeadIcon, null, finalHeadIcon))),
            React.createElement(StyledHeadTitleTypography, null, headTitle))),
        React.createElement(StyledTitleContainerDiv, null,
            finalIcon && (React.createElement(StyledTitleIconContainerDiv, null,
                React.createElement(Icon, { fontSize: 'small' }, finalIcon))),
            React.createElement("div", null, title))));
};var SIDE_MENU_WIDTH = 220;
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
var StyledSideMenuContainerBox = styled(Box)(function (_a) {
    var theme = _a.theme;
    return theme.unstable_sx({});
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
var StyledMainBox = styled(Box)(function (_a) {
    var theme = _a.theme;
    return theme.unstable_sx({
        flexGrow: 1,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    });
});
var StyledMainContentDiv = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"])));
var templateObject_1, templateObject_2;var _screens = ['xs', 'sm', 'md', 'lg', 'xl'];
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
    var children = _a.children, logo = _a.logo, badgeVariant = _a.badgeVariant, menu = _a.menu, initMenuHideScreen = _a.menuHideScreen, appBarControl = _a.appBarControl, onMenuClick = _a.onMenuClick;
    var location = useLocation();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = useState(false), isMobileOpen = _b[0], setIsMobileOpen = _b[1];
    var _c = useState({}), menuTitles = _c[0], setMenuTitles = _c[1];
    var _d = useState(), title = _d[0], setTitle = _d[1];
    var _e = useState(initMenuHideScreen || 'sm'), menuHideScreen = _e[0], setMenuHideScreen = _e[1];
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
        setMenuHideScreen(initMenuHideScreen || 'sm');
    }, [initMenuHideScreen]);
    useEffect(function () {
        if (menuTitles) {
            var titleData = menuTitles[location.pathname];
            if (titleData) {
                setTitle(React.createElement(Title, { title: titleData.name, icon: titleData.icon, headTitle: titleData.parentName, headIcon: titleData.parentIcon }));
            }
            else {
                setTitle(undefined);
            }
        }
    }, [location, menuTitles]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var toggleIsMobileOpen = useCallback(function () {
        setIsMobileOpen(function (isMobileOpen) { return !isMobileOpen; });
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var appBarSx = useMemo(function () {
        var width = {};
        var ml = {};
        width[_getNextScreen(menuHideScreen)] = "calc(100% - ".concat(SIDE_MENU_WIDTH, "px)");
        ml[_getNextScreen(menuHideScreen)] = "".concat(SIDE_MENU_WIDTH, "px");
        return { width: width, ml: ml };
    }, [menuHideScreen]);
    var appBarIconButtonSx = useMemo(function () {
        var display = {};
        display[_getNextScreen(menuHideScreen)] = 'none';
        return { mr: 2, display: display };
    }, [menuHideScreen]);
    var sideMenuContainerBoxSx = useMemo(function () {
        var width = {};
        var flexShrink = {};
        width[_getNextScreen(menuHideScreen)] = SIDE_MENU_WIDTH;
        flexShrink[_getNextScreen(menuHideScreen)] = 0;
        return { width: width, flexShrink: flexShrink };
    }, [menuHideScreen]);
    var sideMenuTemporaryDrawerSx = useMemo(function () {
        var found = false;
        return {
            display: _screens.reduce(function (res, screen) {
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
            display: _screens.reduce(function (res, screen) {
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
    var mainBoxSx = useMemo(function () {
        var width = {};
        width[_getNextScreen(menuHideScreen)] = "calc(100% - ".concat(SIDE_MENU_WIDTH, "px)");
        return { width: width };
    }, [menuHideScreen]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledContainerBox, null,
        React.createElement(StyledAppBar, { position: 'fixed', elevation: 0, sx: appBarSx },
            React.createElement(Toolbar, null,
                React.createElement(IconButton, { color: 'inherit', "aria-label": 'open drawer', edge: 'start', onClick: toggleIsMobileOpen, sx: appBarIconButtonSx },
                    React.createElement(Menu, null)),
                React.createElement(Typography, { variant: 'h6', noWrap: true, component: 'div', sx: { flexGrow: 1 } }, title),
                appBarControl)),
        React.createElement(StyledSideMenuContainerBox, { component: 'nav', "aria-label": 'mailbox folders', sx: sideMenuContainerBoxSx },
            React.createElement(StyledSideMenuTemporaryDrawer, { variant: 'temporary', open: isMobileOpen, onClose: toggleIsMobileOpen, sx: sideMenuTemporaryDrawerSx, ModalProps: {
                    keepMounted: true, // Better open performance on mobile.
                } }, menu && (React.createElement(SideMenu, { logo: logo, badgeVariant: badgeVariant, list: menu, onClick: function (menuItem) {
                    toggleIsMobileOpen();
                    if (onMenuClick)
                        onMenuClick(menuItem);
                } }))),
            React.createElement(StyledSideMenuPermanentDrawer, { variant: 'permanent', open: true, sx: sideMenuPermanentDrawerSx }, menu && React.createElement(SideMenu, { logo: logo, badgeVariant: badgeVariant, list: menu, onClick: onMenuClick }))),
        React.createElement(StyledMainBox, { component: 'main', sx: mainBoxSx },
            React.createElement(Toolbar, null),
            React.createElement(StyledMainContentDiv, null, children))));
};function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

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
}var css_248z = "@import 'simplebar-react/dist/simplebar.min.css';\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo,\nmain {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  box-sizing: border-box;\n  word-break: keep-all;\n  line-height: unset;\n}\n\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ninput,\nbutton,\ntextarea,\npre,\nselect {\n  font-family: \"Pretendard\", \"Apple Gothic\", \"Dotum\", sans-serif;\n}\n\n.simplebar-track.simplebar-vertical {\n  width: 8px !important;\n}\n.simplebar-track.simplebar-vertical .simplebar-scrollbar.simplebar-visible:before {\n  opacity: 0.3 !important;\n}";
styleInject(css_248z);export{CardLayout,DefaultLayout};