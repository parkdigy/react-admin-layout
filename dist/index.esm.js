import {Grid,styled,ListItemIcon,ListItemButton,Icon,ListItemText,Badge,Collapse,List,useTheme,alpha,Box,Toolbar,Typography,AppBar,Drawer,IconButton}from'@mui/material';import React,{useState,useEffect,useCallback,useMemo}from'react';import {useLocation,useNavigate}from'react-router';import {ExpandMore,Menu}from'@mui/icons-material';import SimpleBar from'simplebar-react';function insertStyle(css) {
    if (typeof window === 'undefined')
        return;
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}insertStyle(".simplebar-track.simplebar-vertical{width:8px !important}.simplebar-track.simplebar-vertical .simplebar-scrollbar.simplebar-visible:before{opacity:.3 !important}.MuiButtonBase-root.MuiButton-root.MuiButton-outlined{padding:5px 15px 4px}.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-sizeLarge{padding:7px 21px 6px}.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-sizeSmall{padding:3px 9px 2px}.MuiButtonBase-root.MuiButton-root.MuiButton-contained{padding:6px 16px 5px}.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-sizeLarge{padding:8px 22px 7px}.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-sizeSmall{padding:4px 10px 3px}.MuiButtonBase-root.MuiButton-root.MuiButton-text{padding:6px 8px 5px}.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-sizeLarge{padding:8px 11px 7px}.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-sizeSmall{padding:4px 5px 3px}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video,main,input,button,textarea,pre,select,a{font-family:\"Pretendard\",\"Apple Gothic\",\"Dotum\",sans-serif;margin:0;padding:0;border:0;vertical-align:top;box-sizing:border-box;word-break:keep-all;line-height:unset}*:before,*:after{box-sizing:border-box}");const CardLayout = ({ children, backgroundColor = '#eff3f8' }) => {
    return (React.createElement(Grid, { container: true, direction: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: backgroundColor, minHeight: '100vh' },
        React.createElement(Grid, null, children)));
};const StyledExpandMore = styled(ExpandMore) `
  margin-top: auto;
  margin-bottom: auto;
  @keyframes open {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  @keyframes close {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
const StyledListItemIcon = styled(ListItemIcon) `
  min-width: 30px;
`;const SideMenuListItem = ({ info, badgeVariant, expandedBackgroundColor }) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    const location = useLocation();
    const navigate = useNavigate();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [isExpandable, setIsExpandable] = useState(false);
    const [isExpand, setIsExpand] = useState(false);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(() => {
        setIsExpandable(!!info.items && info.items.length > 0);
        if (info.items && info.items.find((info) => location.pathname === info.uri)) {
            setIsExpand(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [info]);
    useEffect(() => {
        if (isExpandable && isExpand != null) {
            if (info.uri !== location.pathname) {
                if (info.items && !info.items.find((info) => location.pathname === info.uri)) {
                    if (isExpand) {
                        setIsExpand(false);
                    }
                }
            }
        }
        if (isExpandable && !isExpand) {
            if (info.items && info.items.find((info) => location.pathname === info.uri)) {
                setIsExpand(true);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(React.Fragment, null,
        React.createElement(ListItemButton, { onClick: isExpandable ? () => setIsExpand((old) => !old) : () => info.uri && navigate(info.uri), selected: isExpandable ? false : info.uri === location.pathname, style: {
                backgroundColor: isExpandable && isExpand ? expandedBackgroundColor : undefined,
            } },
            React.createElement(StyledListItemIcon, null, info.icon && React.createElement(Icon, { fontSize: 'small' }, info.icon)),
            React.createElement(ListItemText, { primaryTypographyProps: { style: { fontWeight: info.depth === 1 ? 600 : undefined } } }, info.badge ? (React.createElement(Badge, { badgeContent: info.badge, color: 'error', variant: badgeVariant !== undefined ? badgeVariant : info.badgeVariant, anchorOrigin: { horizontal: 'left', vertical: 'top' }, slotProps: {
                    badge: { style: { left: '100%', top: '50%', transform: 'scale(.8) translate(10px, -50%)' } },
                } },
                React.createElement("div", null, info.name))) : (info.name)),
            isExpandable && (React.createElement(StyledExpandMore, { sx: {
                    animation: `${isExpand ? 'open' : 'close'} 0.1s linear`,
                    transform: `rotate(${isExpand ? 180 : 0}deg)`,
                } }))),
        isExpandable && (React.createElement(Collapse, { in: isExpand, style: { backgroundColor: isExpand ? expandedBackgroundColor : undefined } }, info.items &&
            info.items.map((subInfo, idx) => React.createElement(SideMenuListItem, { key: idx, badgeVariant: badgeVariant, info: subInfo }))))));
};const StyledList = styled(List) `
  padding: 0;
`;const SideMenuList$1 = ({ list, badgeVariant }) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    const theme = useTheme();
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    const finalList = list.map((item) => (Object.assign(Object.assign({}, item), { icon: item.icon
            ? item.icon.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`)
            : undefined })));
    const expandedBackgroundColor = alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity / 2);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledList, null, finalList.map((info, idx) => (React.createElement(SideMenuListItem, { key: idx, info: info, badgeVariant: badgeVariant, expandedBackgroundColor: expandedBackgroundColor })))));
};
var SideMenuList = React.memo(SideMenuList$1);const StyledSimpleBar = styled(SimpleBar) `
  max-height: 100%;
`;
const StyledLogoContainerBox = styled(Box)(({ theme }) => theme.unstable_sx({
    borderBottom: 'thin solid #f5f5f5',
    color: 'text.primary',
}));const SideMenu$1 = ({ logo, badgeVariant, list }) => {
    return (React.createElement(StyledSimpleBar, null,
        React.createElement(StyledLogoContainerBox, null,
            React.createElement(Toolbar, null, logo)),
        list && React.createElement(SideMenuList, { badgeVariant: badgeVariant, list: list })));
};
var SideMenu = React.memo(SideMenu$1);const StyledContainerBox$1 = styled(Box) `
  position: relative;
`;
const StyledHeadContainerBox = styled(Box)(({ theme }) => theme.unstable_sx({
    display: { xs: 'none', sm: 'flex' },
    alignItems: 'center',
    opacity: 0.5,
}));
const StyledHeadIconContainerBox = styled(Box) `
  margin-right: 0.25rem;
  line-height: 0;
`;
const StyledHeadIcon = styled(Icon) `
  font-size: 1rem;
`;
const StyledHeadTitleTypography = styled(Typography) `
  font-size: 0.7rem;
`;
const StyledTitleContainerDiv = styled('div') `
  display: flex;
  align-items: center;
  font-size: 1rem;
`;
const StyledTitleIconContainerDiv = styled('div') `
  flex-shrink: 0;
  display: inline-flex;
  margin-right: 0.3rem;
`;const Title$1 = ({ title, icon, headTitle, headIcon }) => {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    const finalHeadIcon = headIcon
        ? headIcon.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`)
        : undefined;
    const finalIcon = icon
        ? icon.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`)
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
var Title = React.memo(Title$1);const SIDE_MENU_WIDTH = 220;
const SCREENS = ['xs', 'sm', 'md', 'lg', 'xl'];
const _getNextScreen = (screen) => {
    if (screen === 'xs')
        return 'sm';
    else if (screen === 'sm')
        return 'md';
    else if (screen === 'md')
        return 'lg';
    else
        return 'xl';
};
const DefaultLayout = ({ children, logo, badgeVariant, menu, menuHideScreen = 'sm', appBarControl }) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    const location = useLocation();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [menuTitles, setMenuTitles] = useState({});
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(() => {
        const menuTitles = {};
        if (menu) {
            menu.forEach((info) => {
                if ((info.uri == null || info.uri === '') && info.items && info.items.length > 0) {
                    info.items.map((subInfo) => {
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
    useEffect(() => {
        setIsMobileOpen(false);
    }, [location]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const toggleIsMobileOpen = useCallback(() => {
        setIsMobileOpen((isMobileOpen) => !isMobileOpen);
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const sideMenuTemporaryDrawerSx = useMemo(() => {
        let found = false;
        return {
            display: SCREENS.reduce((res, screen) => {
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
    const sideMenuPermanentDrawerSx = useMemo(() => {
        let found = false;
        return {
            display: SCREENS.reduce((res, screen) => {
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
    const nextMenuScreen = _getNextScreen(menuHideScreen);
    const appBarSx = {
        width: { [nextMenuScreen]: `calc(100% - ${SIDE_MENU_WIDTH}px)` },
        ml: { [nextMenuScreen]: `${SIDE_MENU_WIDTH}px` },
    };
    const appBarIconButtonSx = { mr: 2, display: { [nextMenuScreen]: 'none' } };
    const sideMenuContainerBoxSx = {
        width: { [nextMenuScreen]: SIDE_MENU_WIDTH },
        flexShrink: { [nextMenuScreen]: 0 },
    };
    const mainBoxSx = {
        width: { [nextMenuScreen]: `calc(100% - ${SIDE_MENU_WIDTH}px)` },
        flexGrow: 1,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    };
    const titleData = menuTitles[location.pathname];
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledContainerBox, null,
        React.createElement(StyledAppBar, { position: 'fixed', elevation: 0, sx: appBarSx },
            React.createElement(Toolbar, null,
                React.createElement(IconButton, { color: 'inherit', "aria-label": 'open drawer', edge: 'start', onClick: toggleIsMobileOpen, sx: appBarIconButtonSx },
                    React.createElement(Menu, null)),
                React.createElement(Typography, { variant: 'h6', noWrap: true, component: 'div', sx: { flexGrow: 1 } }, titleData && (React.createElement(Title, { title: titleData.name, icon: titleData.icon, headTitle: titleData.parentName, headIcon: titleData.parentIcon }))),
                appBarControl)),
        React.createElement(Box, { component: 'nav', "aria-label": 'mailbox folders', sx: sideMenuContainerBoxSx },
            React.createElement(StyledSideMenuTemporaryDrawer, { variant: 'temporary', open: isMobileOpen, onClose: toggleIsMobileOpen, sx: sideMenuTemporaryDrawerSx, ModalProps: {
                    keepMounted: true, // Better open performance on mobile.
                } }, menu && React.createElement(SideMenu, { logo: logo, badgeVariant: badgeVariant, list: menu })),
            React.createElement(StyledSideMenuPermanentDrawer, { variant: 'permanent', open: true, sx: sideMenuPermanentDrawerSx }, menu && React.createElement(SideMenu, { logo: logo, badgeVariant: badgeVariant, list: menu }))),
        React.createElement(Box, { component: 'main', sx: mainBoxSx },
            React.createElement(Toolbar, null),
            React.createElement(StyledMainContentDiv, null, children))));
};
/********************************************************************************************************************
 * Styled Components
 * ******************************************************************************************************************/
const StyledContainerBox = styled(Box) `
  display: flex;
  height: 100%;
`;
const StyledAppBar = styled(AppBar)(({ theme }) => theme.unstable_sx({
    backdropFilter: 'blur(20px)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: 'text.primary',
    borderBottom: 'thin solid #f5f5f5',
}));
const StyledSideMenuTemporaryDrawer = styled(Drawer)(({ theme }) => theme.unstable_sx({
    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: SIDE_MENU_WIDTH },
}));
const StyledSideMenuPermanentDrawer = styled(Drawer)(({ theme }) => theme.unstable_sx({
    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: SIDE_MENU_WIDTH },
}));
const StyledMainContentDiv = styled('div') `
  display: flex;
  flex-direction: column;
  flex: 1;
`;export{CardLayout,DefaultLayout};