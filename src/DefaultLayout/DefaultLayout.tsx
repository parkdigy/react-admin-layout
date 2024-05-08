import React, { useState, useEffect, ReactElement, useMemo } from 'react';
import { Toolbar, IconButton, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Menu as MenuIcon } from '@mui/icons-material';
import SideMenu from './SideMenu.private';
import Title from './Title.private';
import { DefaultLayoutProps as Props } from './DefaultLayout.types';
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
} from './DefaultLayout.style.private';
import { Dict, empty } from '@pdg/util';

const SCREENS = ['xs', 'sm', 'md', 'lg', 'xl'];

const _getNextScreen = (screen: 'xs' | 'sm' | 'md' | 'lg'): 'sm' | 'md' | 'lg' | 'xl' => {
  if (screen === 'xs') return 'sm';
  else if (screen === 'sm') return 'md';
  else if (screen === 'md') return 'lg';
  else return 'xl';
};

const DefaultLayout = ({
  children,
  logo,
  badgeVariant,
  menu,
  menuHideScreen: initMenuHideScreen,
  appBarControl,
}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const location = useLocation();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [menuTitles, setMenuTitles] = useState<MenuTitleMap>({});
  const [title, setTitle] = useState<ReactElement<typeof Title>>();
  const [menuHideScreen, setMenuHideScreen] = useState<Exclude<Props['menuHideScreen'], undefined>>(
    initMenuHideScreen || 'sm'
  );

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

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
    setIsMobileOpen(false);
  }, [location]);

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

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const toggleIsMobileOpen = () => setIsMobileOpen((isMobileOpen) => !isMobileOpen);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const sideMenuTemporaryDrawerSx: Props['sx'] = useMemo(() => {
    let found = false;
    return {
      display: SCREENS.reduce((res, screen) => {
        if (screen === menuHideScreen) {
          found = true;
          res[screen] = 'block';
        } else {
          res[screen] = found ? 'none' : 'block';
        }
        return res;
      }, {} as Dict<string>),
    };
  }, [menuHideScreen]);

  const sideMenuPermanentDrawerSx: Props['sx'] = useMemo(() => {
    let found = false;
    return {
      display: SCREENS.reduce((res, screen) => {
        if (screen === menuHideScreen) {
          found = true;
          res[screen] = 'none';
        } else {
          res[screen] = found ? 'block' : 'none';
        }
        return res;
      }, {} as Dict<string>),
    };
  }, [menuHideScreen]);

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const nextMenuScreen = _getNextScreen(menuHideScreen);

  const appBarSx: Required<Props['sx']> = {
    width: { [nextMenuScreen]: `calc(100% - ${SIDE_MENU_WIDTH}px)` },
    ml: { [nextMenuScreen]: `${SIDE_MENU_WIDTH}px` },
  };

  const appBarIconButtonSx: Required<Props['sx']> = { mr: 2, display: { [nextMenuScreen]: 'none' } };

  const sideMenuContainerBoxSx: Required<Props['sx']> = {
    width: { [nextMenuScreen]: SIDE_MENU_WIDTH },
    flexShrink: { [nextMenuScreen]: 0 },
  };

  const mainBoxSx: Required<Props['sx']> = { width: { [nextMenuScreen]: `calc(100% - ${SIDE_MENU_WIDTH}px)` } };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

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
          {menu && <SideMenu logo={logo} badgeVariant={badgeVariant} list={menu} />}
        </StyledSideMenuTemporaryDrawer>
        <StyledSideMenuPermanentDrawer variant='permanent' open sx={sideMenuPermanentDrawerSx}>
          {menu && <SideMenu logo={logo} badgeVariant={badgeVariant} list={menu} />}
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
