import React from 'react';
import { Toolbar, Box } from '@mui/material';
import SimpleBar from 'simplebar-react';
import SideMenuList from '../SideMenuList';
import { SideMenuProps } from './SideMenu.types';

import 'simplebar-react/dist/simplebar.min.css';

const SideMenu: React.FC<SideMenuProps> = ({ logo, list, onClick }) => {
  return (
    <SimpleBar style={{ maxHeight: '100%' }}>
      <Box
        sx={{
          borderBottom: 'thin solid #f5f5f5',
          color: 'text.primary',
        }}
      >
        <Toolbar>{logo}</Toolbar>
      </Box>
      {list && <SideMenuList list={list} onClick={onClick} />}
    </SimpleBar>
  );
};

export default SideMenu;
