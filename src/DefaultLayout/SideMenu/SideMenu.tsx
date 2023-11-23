import React from 'react';
import { Toolbar } from '@mui/material';
import SideMenuList from '../SideMenuList';
import { SideMenuProps } from './SideMenu.types';
import { StyledLogoContainerBox, StyledSimpleBar } from './SideMenu.style';
import 'simplebar-react/dist/simplebar.min.css';

const SideMenu: React.FC<SideMenuProps> = ({ logo, badgeVariant, list, onClick }) => {
  return (
    <StyledSimpleBar>
      <StyledLogoContainerBox>
        <Toolbar>{logo}</Toolbar>
      </StyledLogoContainerBox>
      {list && <SideMenuList badgeVariant={badgeVariant} list={list} onClick={onClick} />}
    </StyledSimpleBar>
  );
};

export default SideMenu;
