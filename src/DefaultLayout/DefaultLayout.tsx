import React, { useState, useEffect, ReactElement, useCallback, useMemo } from 'react';
import { Toolbar, IconButton, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Menu as MenuIcon } from '@mui/icons-material';
import SideMenu from './SideMenu';
import Title from './Title';
import { empty } from '../@util';
import { DefaultLayoutProps } from './DefaultLayout.types';
import { MenuTitleMap } from './DefaultLayout.types.private';
import {
  SIDE_MENU_WIDTH,
  StyledAppBar,
  StyledContainerBox,
  StyledMainBox,
  StyledMainContentDiv,
  StyledSideMenuContainerBox,
  StyledSideMenuPermanentDrawer,
  StyledSideMenuTemporaryDrawer,
} from './DefaultLayout.style';
import { CommonSxProps } from '../@types';

const _screens = ['xs', 'sm', 'md', 'lg', 'xl'];

const _getNextScreen = (screen: 'xs' | 'sm' | 'md' | 'lg'): 'sm' | 'md' | 'lg' | 'xl' => {
  if (screen === 'xs') return 'sm';
  else if (screen === 'sm') return 'md';
  else if (screen === 'md') return 'lg';
  else return 'xl';
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  logo,
  menu,
  menuHideScreen: initMenuHideScreen,
  appBarControl,
  onMenuClick,
}) => {
  // -------------------------------------------------------------------------------------------------------------------

  const location = useLocation();

  // -------------------------------------------------------------------------------------------------------------------

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [menuTitles, setMenuTitles] = useState<MenuTitleMap>({});
  const [title, setTitle] = useState<ReactElement<typeof Title>>();
  const [menuHideScreen, setMenuHideScreen] = useState<Exclude<DefaultLayoutProps['menuHideScreen'], undefined>>(
    initMenuHideScreen || 'sm'
  );

  //--------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    const menuTitles: MenuTitleMap = {};
    if (menu) {
      menu.forEach((info) => {
        if (empty(info.uri) && info.items && info.items.length > 0) {
          info.items.map((subInfo) => {
            menuTitles[subInfo.uri] = { name: subInfo.name, parentName: info.name, parentIcon: info.icon };
          });
        } else if (info.uri) {
          menuTitles[info.uri] = { name: info.name, icon: info.icon };
        }
      });
    }
    setMenuTitles(menuTitles);
  }, [menu]);

  useEffect(() => {
    setMenuHideScreen(initMenuHideScreen || 'sm');
  }, [initMenuHideScreen]);

  useEffect(() => {
    if (menuTitles) {
      const titleData = menuTitles[location.pathname];
      if (titleData) {
        setTitle(
          <Title
            title={titleData.name}
            icon={titleData.icon}
            headTitle={titleData.parentName}
            headIcon={titleData.parentIcon}
          />
        );
      } else {
        setTitle(undefined);
      }
    }
  }, [location, menuTitles]);

  // -------------------------------------------------------------------------------------------------------------------

  const toggleIsMobileOpen = useCallback(() => {
    setIsMobileOpen((isMobileOpen) => !isMobileOpen);
  }, []);

  //--------------------------------------------------------------------------------------------------------------------

  const appBarSx: CommonSxProps['sx'] = useMemo(() => {
    const width: Record<string, string> = {};
    const ml: Record<string, string> = {};
    width[_getNextScreen(menuHideScreen)] = `calc(100% - ${SIDE_MENU_WIDTH}px)`;
    ml[_getNextScreen(menuHideScreen)] = `${SIDE_MENU_WIDTH}px`;
    return { width, ml };
  }, [menuHideScreen]);

  const appBarIconButtonSx: CommonSxProps['sx'] = useMemo(() => {
    const display: Record<string, string> = {};
    display[_getNextScreen(menuHideScreen)] = 'none';
    return { mr: 2, display };
  }, [menuHideScreen]);

  const sideMenuContainerBoxSx: CommonSxProps['sx'] = useMemo(() => {
    const width: Record<string, number> = {};
    const flexShrink: Record<string, number> = {};
    width[_getNextScreen(menuHideScreen)] = SIDE_MENU_WIDTH;
    flexShrink[_getNextScreen(menuHideScreen)] = 0;
    return { width, flexShrink };
  }, [menuHideScreen]);

  const sideMenuTemporaryDrawerSx: CommonSxProps['sx'] = useMemo(() => {
    let found = false;
    return {
      display: _screens.reduce<Record<string, string | undefined>>((res, screen) => {
        if (screen === menuHideScreen) {
          found = true;
          res[screen] = 'block';
        } else {
          res[screen] = found ? 'none' : 'block';
        }
        return res;
      }, {}),
    };
  }, [menuHideScreen]);

  const sideMenuPermanentDrawerSx: CommonSxProps['sx'] = useMemo(() => {
    let found = false;
    return {
      display: _screens.reduce<Record<string, string | undefined>>((res, screen) => {
        if (screen === menuHideScreen) {
          found = true;
          res[screen] = 'none';
        } else {
          res[screen] = found ? 'block' : 'none';
        }
        return res;
      }, {}),
    };
  }, [menuHideScreen]);

  const mainBoxSx: CommonSxProps['sx'] = useMemo(() => {
    const width: Record<string, string> = {};
    width[_getNextScreen(menuHideScreen)] = `calc(100% - ${SIDE_MENU_WIDTH}px)`;
    return { width };
  }, [menuHideScreen]);

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <StyledContainerBox>
      <StyledAppBar position='fixed' elevation={0} sx={appBarSx}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={toggleIsMobileOpen}
            sx={appBarIconButtonSx}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {appBarControl}
        </Toolbar>
      </StyledAppBar>
      <StyledSideMenuContainerBox component='nav' aria-label='mailbox folders' sx={sideMenuContainerBoxSx}>
        <StyledSideMenuTemporaryDrawer
          variant='temporary'
          open={isMobileOpen}
          onClose={toggleIsMobileOpen}
          sx={sideMenuTemporaryDrawerSx}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {menu && (
            <SideMenu
              logo={logo}
              list={menu}
              onClick={(menuItem) => {
                toggleIsMobileOpen();
                if (onMenuClick) onMenuClick(menuItem);
              }}
            />
          )}
        </StyledSideMenuTemporaryDrawer>
        <StyledSideMenuPermanentDrawer variant='permanent' open sx={sideMenuPermanentDrawerSx}>
          {menu && <SideMenu logo={logo} list={menu} onClick={onMenuClick} />}
        </StyledSideMenuPermanentDrawer>
      </StyledSideMenuContainerBox>
      <StyledMainBox component='main' sx={mainBoxSx}>
        <Toolbar />

        <StyledMainContentDiv>{children}</StyledMainContentDiv>
      </StyledMainBox>
    </StyledContainerBox>
  );
};

export default DefaultLayout;
