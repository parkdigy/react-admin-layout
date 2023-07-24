import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as AdminLayout from '../../../../src';
import { ThemeBase } from '../Theme';
import menu from './menu.json';
import MainRouter from '../../router';
import { Box, Button } from '@mui/material';

const DefaultLayout = () => {
  const navigate = useNavigate();

  //--------------------------------------------------------------------------------------------------------------------

  const [appBarControl] = useState(() => {
    return (
      <Box component='div' sx={{ display: 'flex', gap: 1 }}>
        <Button>회원정보</Button>
        <Button>로그아웃</Button>
      </Box>
    );
  });

  //--------------------------------------------------------------------------------------------------------------------

  const handleMenuClick = (menuItem: AdminLayout.MenuItem) => {
    if (menuItem.uri) {
      navigate(menuItem.uri);
    }
  };

  //--------------------------------------------------------------------------------------------------------------------

  return (
    <ThemeBase>
      <AdminLayout.DefaultLayout
        logo='react-admin-layout'
        menu={menu}
        menuHideScreen='sm'
        appBarControl={appBarControl}
        onMenuClick={handleMenuClick}
      >
        <MainRouter />
      </AdminLayout.DefaultLayout>
    </ThemeBase>
  );
};

export default DefaultLayout;
