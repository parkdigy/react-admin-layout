import React, { useEffect, useRef } from 'react';
import { NavigateFunction, useNavigate } from 'react-router';
import * as AdminLayout from '../../../../src';
import { ThemeBase } from '../Theme';
import Menu from './menu.json';
import MainRouter from '../../router';
import { Box, Button } from '@mui/material';

const menu = Menu.map((info) => ({
  ...info,
  uri: !info.uri ? info.uri : env.isProduction ? `/${env.name}${info.uri}` : info.uri,
  items: info.items?.map((subInfo) => ({
    ...subInfo,
    uri: !subInfo.uri ? subInfo.uri : env.isProduction ? `/${env.name}${subInfo.uri}` : subInfo.uri,
  })),
}));

const DefaultLayout = () => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const navigate = useNavigate();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const navigateRef = useRef<NavigateFunction>(navigate);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    navigateRef.current = navigate;
  }, [navigate]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <ThemeBase>
      <AdminLayout.DefaultLayout
        logo='react-admin-layout'
        menu={menu}
        menuHideScreen='sm'
        appBarControl={
          <Box component='div' sx={{ display: 'flex', gap: 1 }}>
            <Button>회원정보</Button>
            <Button>로그아웃</Button>
          </Box>
        }
      >
        <MainRouter />
      </AdminLayout.DefaultLayout>
    </ThemeBase>
  );
};

export default DefaultLayout;
