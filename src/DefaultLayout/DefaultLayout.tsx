import React, { useState, useEffect, ReactElement } from 'react';
import { Box, Toolbar, AppBar, Drawer, IconButton, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import SideMenu from './SideMenu';
import Title from './Title';
import { empty } from '../@util';
import { DefaultLayoutProps } from './DefaultLayout.types';
import { MenuTitleMap } from './DefaultLayout.types.private';

const sideMenuWidth = 220;

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, logo, menu, appBarControl, onMenuClick }) => {
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
            menuTitles[subInfo.uri] = { name: subInfo.name, parentName: info.name };
          });
        } else if (info.uri) {
          menuTitles[info.uri] = { name: info.name };
        }
      });
    }
    setMenuTitles(menuTitles);
  }, [menu]);

  useEffect(() => {
    if (menuTitles) {
      const titleData = menuTitles[location.pathname];
      if (titleData) {
        setTitle(<Title title={titleData.name} headTitle={titleData.parentName} />);
      } else {
        setTitle(undefined);
      }
    }
  }, [location.pathname, menuTitles]);

  function toggleIsMobileOpen() {
    setIsMobileOpen((isMobileOpen) => !isMobileOpen);
  }

  //--------------------------------------------------------------------------------------------------------------------

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <AppBar
        position='fixed'
        elevation={0}
        sx={{
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          color: 'text.primary',
          borderBottom: 'thin solid #f5f5f5',
          width: { sm: `calc(100% - ${sideMenuWidth}px)` },
          ml: { sm: `${sideMenuWidth}px` },
        }}
      >
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
      </AppBar>
      <Box component='nav' sx={{ width: { sm: sideMenuWidth }, flexShrink: { sm: 0 } }} aria-label='mailbox folders'>
        <Drawer
          variant='temporary'
          open={isMobileOpen}
          onClose={toggleIsMobileOpen}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sideMenuWidth },
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
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sideMenuWidth },
          }}
          open
        >
          {menu && <SideMenu logo={logo} list={menu} onClick={onMenuClick} />}
        </Drawer>
      </Box>
      <Box component='main' sx={{ flexGrow: 1, p: 2, width: { sm: `calc(100% - ${sideMenuWidth}px)` } }}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};

export default DefaultLayout;
