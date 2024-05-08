'use strict';var material=require('@mui/material'),React=require('react'),reactRouterDom=require('react-router-dom'),iconsMaterial=require('@mui/icons-material'),util=require('@pdg/util'),SimpleBar=require('simplebar-react');function styleInject(css, ref) {
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
}var css_248z = ".simplebar-track.simplebar-vertical {\n  width: 8px !important;\n}\n.simplebar-track.simplebar-vertical .simplebar-scrollbar.simplebar-visible:before {\n  opacity: 0.3 !important;\n}\n\n.MuiButtonBase-root.MuiButton-root.MuiButton-outlined {\n  padding: 5px 15px 4px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-sizeLarge {\n  padding: 7px 21px 6px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-sizeSmall {\n  padding: 3px 9px 2px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-contained {\n  padding: 6px 16px 5px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-sizeLarge {\n  padding: 8px 22px 7px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-sizeSmall {\n  padding: 4px 10px 3px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-text {\n  padding: 6px 8px 5px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-sizeLarge {\n  padding: 8px 11px 7px;\n}\n.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-sizeSmall {\n  padding: 4px 5px 3px;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo,\nmain,\ninput,\nbutton,\ntextarea,\npre,\nselect,\na {\n  font-family: \"Pretendard\", \"Apple Gothic\", \"Dotum\", sans-serif;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  box-sizing: border-box;\n  word-break: keep-all;\n  line-height: unset;\n}\n\n*:before,\n*:after {\n  box-sizing: border-box;\n}";
styleInject(css_248z);var CardLayout = function (_a) {
    var children = _a.children, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? '#eff3f8' : _b;
    return (React.createElement(material.Grid, { container: true, direction: 'column', alignItems: 'center', justifyContent: 'center', style: { minHeight: '100vh', backgroundColor: backgroundColor } },
        React.createElement(material.Grid, { item: true, xs: 12 }, children)));
};var SideMenuListItem = function (_a) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var info = _a.info, badgeVariant = _a.badgeVariant, onClick = _a.onClick;
    var theme = material.useTheme();
    var location = reactRouterDom.useLocation();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = React.useState(false), isExpandable = _b[0], setIsExpandable = _b[1];
    var _c = React.useState(false), isExpand = _c[0], setIsExpand = _c[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        setIsExpandable(!!info && util.notEmpty(info.items));
        if (info.items && info.items.find(function (info) { return location.pathname === info.uri; })) {
            setIsExpand(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [info]);
    React.useEffect(function () {
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
    var toggleIsExpand = React.useCallback(function () {
        setIsExpand(function (isExpand) { return !isExpand; });
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var icon = React.useMemo(function () {
        return info.icon
            ? info.icon.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); })
            : undefined;
    }, [info]);
    var containerStyle = React.useMemo(function () { return ({
        backgroundColor: isExpandable && isExpand
            ? material.alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity / 2)
            : undefined,
    }); }, [isExpand, isExpandable, theme]);
    var expandIconSx = React.useMemo(function () {
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
    var collapseStyle = React.useMemo(function () { return ({
        backgroundColor: isExpand
            ? material.alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity / 2)
            : undefined,
    }); }, [isExpand, theme]);
    var primaryTypographyProps = React.useMemo(function () { return ({ sx: { fontWeight: info.depth === 1 ? 600 : null } }); }, [info]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(React.Fragment, null,
        React.createElement(material.ListItemButton, { onClick: isExpandable
                ? toggleIsExpand
                : function () {
                    if (onClick)
                        onClick(info);
                }, selected: isExpandable ? false : info.uri === location.pathname, style: containerStyle },
            React.createElement(material.ListItemIcon, { sx: { minWidth: 30 } }, icon && React.createElement(material.Icon, { fontSize: 'small' }, icon)),
            React.createElement(material.ListItemText, { primaryTypographyProps: primaryTypographyProps }, info.badge ? (React.createElement(material.Badge, { badgeContent: info.badge, color: 'error', variant: badgeVariant !== undefined ? badgeVariant : info.badgeVariant, anchorOrigin: { horizontal: 'left', vertical: 'top' }, slotProps: {
                    badge: { style: { left: '100%', top: '50%', transform: 'scale(.8) translate(10px, -50%)' } },
                } },
                React.createElement("div", null, info.name))) : (info.name)),
            isExpandable && React.createElement(iconsMaterial.ExpandMore, { sx: expandIconSx })),
        React.createElement(material.Collapse, { in: isExpand, style: collapseStyle }, isExpandable &&
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
};var StyledList = material.styled(material.List)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n"], ["\n  padding: 0;\n"])));
var templateObject_1$3;var SideMenuList = function (_a) {
    var list = _a.list, badgeVariant = _a.badgeVariant, onClick = _a.onClick;
    return (React.createElement(StyledList, null, list.map(function (info, idx) { return (React.createElement(SideMenuListItem, { key: idx, info: info, badgeVariant: badgeVariant, onClick: onClick })); })));
};var StyledSimpleBar = material.styled(SimpleBar)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  max-height: 100%;\n"], ["\n  max-height: 100%;\n"])));
var StyledLogoContainerBox = material.styled(material.Box)(function (_a) {
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
            React.createElement(material.Toolbar, null, logo)),
        list && React.createElement(SideMenuList, { badgeVariant: badgeVariant, list: list, onClick: onClick })));
};var StyledContainerBox$1 = material.styled(material.Box)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var StyledHeadContainerBox = material.styled(material.Box)(function (_a) {
    var theme = _a.theme;
    return theme.unstable_sx({
        display: { xs: 'none', sm: 'flex' },
        alignItems: 'center',
        opacity: 0.5,
    });
});
var StyledHeadIconContainerBox = material.styled(material.Box)(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  margin-right: 0.25rem;\n  line-height: 0;\n"], ["\n  margin-right: 0.25rem;\n  line-height: 0;\n"])));
var StyledHeadIcon = material.styled(material.Icon)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 1rem;\n"], ["\n  font-size: 1rem;\n"])));
var StyledHeadTitleTypography = material.styled(material.Typography)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 0.7rem;\n"], ["\n  font-size: 0.7rem;\n"])));
var StyledTitleContainerDiv = material.styled('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n"], ["\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n"])));
var StyledTitleIconContainerDiv = material.styled('div')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  flex-shrink: 0;\n  display: inline-flex;\n  margin-right: 0.3rem;\n"], ["\n  flex-shrink: 0;\n  display: inline-flex;\n  margin-right: 0.3rem;\n"])));
var templateObject_1$1, templateObject_2$1, templateObject_3, templateObject_4, templateObject_5, templateObject_6;var Title = function (_a) {
    var title = _a.title, icon = _a.icon, headTitle = _a.headTitle, headIcon = _a.headIcon;
    var finalHeadIcon = React.useMemo(function () {
        return headIcon
            ? headIcon.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); })
            : undefined;
    }, [headIcon]);
    var finalIcon = React.useMemo(function () { return (icon ? icon.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); }) : undefined); }, [icon]);
    return (React.createElement(StyledContainerBox$1, null,
        headTitle && (React.createElement(StyledHeadContainerBox, null,
            finalHeadIcon && (React.createElement(StyledHeadIconContainerBox, null,
                React.createElement(StyledHeadIcon, null, finalHeadIcon))),
            React.createElement(StyledHeadTitleTypography, null, headTitle))),
        React.createElement(StyledTitleContainerDiv, null,
            finalIcon && (React.createElement(StyledTitleIconContainerDiv, null,
                React.createElement(material.Icon, { fontSize: 'small' }, finalIcon))),
            React.createElement("div", null, title))));
};var SIDE_MENU_WIDTH = 220;
var StyledContainerBox = material.styled(material.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  height: 100%;\n"], ["\n  display: flex;\n  height: 100%;\n"])));
var StyledAppBar = material.styled(material.AppBar)(function (_a) {
    var theme = _a.theme;
    return theme.unstable_sx({
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        color: 'text.primary',
        borderBottom: 'thin solid #f5f5f5',
    });
});
var StyledSideMenuContainerBox = material.styled(material.Box)(function (_a) {
    var theme = _a.theme;
    return theme.unstable_sx({});
});
var StyledSideMenuTemporaryDrawer = material.styled(material.Drawer)(function (_a) {
    var theme = _a.theme;
    return theme.unstable_sx({
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: SIDE_MENU_WIDTH },
    });
});
var StyledSideMenuPermanentDrawer = material.styled(material.Drawer)(function (_a) {
    var theme = _a.theme;
    return theme.unstable_sx({
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: SIDE_MENU_WIDTH },
    });
});
var StyledMainBox = material.styled(material.Box)(function (_a) {
    var theme = _a.theme;
    return theme.unstable_sx({
        flexGrow: 1,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    });
});
var StyledMainContentDiv = material.styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"])));
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
    var location = reactRouterDom.useLocation();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = React.useState(false), isMobileOpen = _b[0], setIsMobileOpen = _b[1];
    var _c = React.useState({}), menuTitles = _c[0], setMenuTitles = _c[1];
    var _d = React.useState(), title = _d[0], setTitle = _d[1];
    var _e = React.useState(initMenuHideScreen || 'sm'), menuHideScreen = _e[0], setMenuHideScreen = _e[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        var menuTitles = {};
        if (menu) {
            menu.forEach(function (info) {
                if (util.empty(info.uri) && info.items && info.items.length > 0) {
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
    React.useEffect(function () {
        setMenuHideScreen(initMenuHideScreen || 'sm');
    }, [initMenuHideScreen]);
    React.useEffect(function () {
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
    var toggleIsMobileOpen = React.useCallback(function () {
        setIsMobileOpen(function (isMobileOpen) { return !isMobileOpen; });
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var appBarSx = React.useMemo(function () {
        var width = {};
        var ml = {};
        width[_getNextScreen(menuHideScreen)] = "calc(100% - ".concat(SIDE_MENU_WIDTH, "px)");
        ml[_getNextScreen(menuHideScreen)] = "".concat(SIDE_MENU_WIDTH, "px");
        return { width: width, ml: ml };
    }, [menuHideScreen]);
    var appBarIconButtonSx = React.useMemo(function () {
        var display = {};
        display[_getNextScreen(menuHideScreen)] = 'none';
        return { mr: 2, display: display };
    }, [menuHideScreen]);
    var sideMenuContainerBoxSx = React.useMemo(function () {
        var width = {};
        var flexShrink = {};
        width[_getNextScreen(menuHideScreen)] = SIDE_MENU_WIDTH;
        flexShrink[_getNextScreen(menuHideScreen)] = 0;
        return { width: width, flexShrink: flexShrink };
    }, [menuHideScreen]);
    var sideMenuTemporaryDrawerSx = React.useMemo(function () {
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
    var sideMenuPermanentDrawerSx = React.useMemo(function () {
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
    var mainBoxSx = React.useMemo(function () {
        var width = {};
        width[_getNextScreen(menuHideScreen)] = "calc(100% - ".concat(SIDE_MENU_WIDTH, "px)");
        return { width: width };
    }, [menuHideScreen]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledContainerBox, null,
        React.createElement(StyledAppBar, { position: 'fixed', elevation: 0, sx: appBarSx },
            React.createElement(material.Toolbar, null,
                React.createElement(material.IconButton, { color: 'inherit', "aria-label": 'open drawer', edge: 'start', onClick: toggleIsMobileOpen, sx: appBarIconButtonSx },
                    React.createElement(iconsMaterial.Menu, null)),
                React.createElement(material.Typography, { variant: 'h6', noWrap: true, component: 'div', sx: { flexGrow: 1 } }, title),
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
            React.createElement(material.Toolbar, null),
            React.createElement(StyledMainContentDiv, null, children))));
};exports.CardLayout=CardLayout;exports.DefaultLayout=DefaultLayout;