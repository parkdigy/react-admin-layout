import React, { useState } from 'react';
import { Toolbar, IconButton, Typography, Box, styled, AppBar, Drawer } from '@mui/material';
import { useLocation } from 'react-router';
import { Menu as MenuIcon } from '@mui/icons-material';
import SideMenu from './SideMenu.private';
import Title from './Title.private';
import { DefaultLayoutProps as Props } from './DefaultLayout.types';
import { useChanged } from '../@common';

const SIDE_MENU_WIDTH = 220;
const SCREENS = ['xs', 'sm', 'md', 'lg', 'xl'];

const _getNextScreen = (screen: 'xs' | 'sm' | 'md' | 'lg'): 'sm' | 'md' | 'lg' | 'xl' => {
  if (screen === 'xs') return 'sm';
  else if (screen === 'sm') return 'md';
  else if (screen === 'md') return 'lg';
  else return 'xl';
};

const DefaultLayout = ({ children, logo, badgeVariant, menu, menuHideScreen = 'sm', appBarControl }: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const location = useLocation();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [menuTitles, setMenuTitles] = useState<MenuTitleMap>({});

  /********************************************************************************************************************
   * Changed
   * ******************************************************************************************************************/

  /** 경로 변경 시 모바일 메뉴 닫기 */
  useChanged(location.pathname, () => {
    setIsMobileOpen(false);
  });

  useChanged(menu, () => {
    const menuTitles: MenuTitleMap = {};
    if (menu) {
      menu.forEach((info) => {
        if ((info.uri == null || info.uri === '') && info.items && info.items.length > 0) {
          info.items.map((subInfo) => {
            menuTitles[subInfo.uri] = { name: subInfo.name, parentName: info.name, parentIcon: info.icon };
          });
        } else if (info.uri) {
          menuTitles[info.uri] = { name: info.name, icon: info.icon };
        }
      });
    }
    setMenuTitles(menuTitles);
  });

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const toggleIsMobileOpen = () => {
    setIsMobileOpen((isMobileOpen) => !isMobileOpen);
  };

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const sideMenuTemporaryDrawerSx: Props['sx'] = (() => {
    return {
      display: SCREENS.reduce<{ found: boolean; display: Record<string, string> }>(
        (acc, screen) => {
          if (screen === menuHideScreen) {
            acc.found = true;
            acc.display[screen] = 'block';
          } else {
            acc.display[screen] = acc.found ? 'none' : 'block';
          }
          return acc;
        },
        { found: false, display: {} }
      ).display,
    };
  })();

  const sideMenuPermanentDrawerSx: Props['sx'] = (() => {
    return {
      display: SCREENS.reduce<{ found: boolean; display: Record<string, string> }>(
        (acc, screen) => {
          if (screen === menuHideScreen) {
            acc.found = true;
            acc.display[screen] = 'none';
          } else {
            acc.display[screen] = acc.found ? 'block' : 'none';
          }
          return acc;
        },
        { found: false, display: {} }
      ).display,
    };
  })();

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

  const mainBoxSx: Required<Props['sx']> = {
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
            {titleData && (
              <Title
                title={titleData.name}
                icon={titleData.icon}
                headTitle={titleData.parentName}
                headIcon={titleData.parentIcon}
              />
            )}
          </Typography>
          {appBarControl}
        </Toolbar>
      </StyledAppBar>
      <Box component='nav' aria-label='mailbox folders' sx={sideMenuContainerBoxSx}>
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
      </Box>
      <Box component='main' sx={mainBoxSx}>
        <Toolbar />
        <StyledMainContentDiv>{children}</StyledMainContentDiv>
      </Box>
    </StyledContainerBox>
  );
};

export default DefaultLayout;

/********************************************************************************************************************
 * Types
 * ******************************************************************************************************************/

interface MenuTitle {
  name: string;
  icon?: string;
  parentName?: string;
  parentIcon?: string;
}

interface MenuTitleMap {
  [key: string]: MenuTitle;
}

/********************************************************************************************************************
 * Styled Components
 * ******************************************************************************************************************/

const StyledContainerBox = styled(Box)`
  display: flex;
  height: 100%;
`;

const StyledAppBar = styled(AppBar)(({ theme }) =>
  theme.unstable_sx({
    backdropFilter: 'blur(20px)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: 'text.primary',
    borderBottom: 'thin solid #f5f5f5',
  })
);

const StyledSideMenuTemporaryDrawer = styled(Drawer)(({ theme }) =>
  theme.unstable_sx({
    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: SIDE_MENU_WIDTH },
  })
);

const StyledSideMenuPermanentDrawer = styled(Drawer)(({ theme }) =>
  theme.unstable_sx({
    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: SIDE_MENU_WIDTH },
  })
);

const StyledMainContentDiv = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
