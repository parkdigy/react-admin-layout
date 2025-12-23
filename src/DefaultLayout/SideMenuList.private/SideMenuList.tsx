import React from 'react';
import SideMenuListItem from '../SideMenuListItem.private';
import { SideMenuListProps } from './SideMenuList.types';
import { StyledList } from './SideMenuList.style';
import { alpha, useTheme } from '@mui/material';

const SideMenuList = ({ list, badgeVariant }: SideMenuListProps) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const finalList = list.map((item) => ({
    ...item,
    icon: item.icon
      ? item.icon.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`)
      : undefined,
  }));

  const expandedBackgroundColor = alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity / 2);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <StyledList>
      {finalList.map((info, idx) => (
        <SideMenuListItem
          key={idx}
          info={info}
          badgeVariant={badgeVariant}
          expandedBackgroundColor={expandedBackgroundColor}
        />
      ))}
    </StyledList>
  );
};

export default SideMenuList;
