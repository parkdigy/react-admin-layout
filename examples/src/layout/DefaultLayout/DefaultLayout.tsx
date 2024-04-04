import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as AdminLayout from '../../../../src';
import { ThemeBase } from '../Theme';
import menu from './menu.json';
import MainRouter from '../../router';
import { Box, Button } from '@mui/material';

const DefaultLayout = () => {
  const navigate = useNavigate();

  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const [appBarControl] = useState(() => {
    return (
      <Box component='div' sx={{ display: 'flex', gap: 1 }}>
        <Button>회원정보</Button>
        <Button>로그아웃</Button>
      </Box>
    );
  });

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const finalMenu = useMemo(
    () =>
      menu.map((info) => ({
        ...info,
        uri: !info.uri ? info.uri : isEnvProduction ? `/react-admin-layout${info.uri}` : info.uri,
        items: info.items?.map((subInfo) => ({
          ...subInfo,
          uri: !subInfo.uri ? subInfo.uri : isEnvProduction ? `/react-admin-layout${subInfo.uri}` : subInfo.uri,
        })),
      })),
    []
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleMenuClick = (menuItem: AdminLayout.MenuItem) => {
    if (menuItem.uri) {
      navigate(menuItem.uri);
    }
  };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <ThemeBase>
      <AdminLayout.DefaultLayout
        logo='react-admin-layout'
        menu={finalMenu}
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
