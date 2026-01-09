import React from 'react';
import { Toolbar } from '@mui/material';
import SideMenuList from '../SideMenuList.private';
import { type SideMenuProps } from './SideMenu.types';
import { StyledLogoContainerBox, StyledSimpleBar } from './SideMenu.style';

const SideMenu = ({ logo, badgeVariant, list }: SideMenuProps) => {
  return (
    <StyledSimpleBar>
      <StyledLogoContainerBox>
        <Toolbar>{logo}</Toolbar>
      </StyledLogoContainerBox>
      {list && <SideMenuList badgeVariant={badgeVariant} list={list} />}
    </StyledSimpleBar>
  );
};

export default SideMenu;
