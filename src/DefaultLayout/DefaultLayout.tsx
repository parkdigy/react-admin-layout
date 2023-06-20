import React, { useState, useEffect, ReactElement, useCallback } from 'react';
import { Toolbar, IconButton, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Menu as MenuIcon } from '@mui/icons-material';
import SideMenu from './SideMenu';
import Title from './Title';
import { empty } from '../@util';
import { DefaultLayoutProps } from './DefaultLayout.types';
import { MenuTitleMap } from './DefaultLayout.types.private';
import {
  StyledAppBar,
  StyledContainerBox,
  StyledMainBox,
  StyledMainContentDiv,
  StyledSideMenuContainerBox,
  StyledSideMenuPermanentDrawer,
  StyledSideMenuTemporaryDrawer,
} from './DefaultLayout.style';

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, logo, menu, appBarControl, onMenuClick }) => {
  // -------------------------------------------------------------------------------------------------------------------

  const location = useLocation();

  // -------------------------------------------------------------------------------------------------------------------

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [menuTitles, setMenuTitles] = useState<MenuTitleMap>({});
  const [title, setTitle] = useState<ReactElement<typeof Title>>();

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

  return (
    <StyledContainerBox>
      <StyledAppBar position='fixed' elevation={0}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={toggleIsMobileOpen}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {appBarControl}
        </Toolbar>
      </StyledAppBar>
      <StyledSideMenuContainerBox component='nav' aria-label='mailbox folders'>
        <StyledSideMenuTemporaryDrawer
          variant='temporary'
          open={isMobileOpen}
          onClose={toggleIsMobileOpen}
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
        <StyledSideMenuPermanentDrawer variant='permanent' open>
          {menu && <SideMenu logo={logo} list={menu} onClick={onMenuClick} />}
        </StyledSideMenuPermanentDrawer>
      </StyledSideMenuContainerBox>
      <StyledMainBox component='main'>
        <Toolbar />

        <StyledMainContentDiv>{children}</StyledMainContentDiv>
      </StyledMainBox>
    </StyledContainerBox>
  );
};

export default DefaultLayout;
