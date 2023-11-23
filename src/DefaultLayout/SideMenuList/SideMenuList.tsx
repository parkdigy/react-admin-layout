import React from 'react';
import SideMenuListItem from '../SideMenuListItem';
import { SideMenuListProps } from './SideMenuList.types';
import { StyledList } from './SideMenuList.style';

const SideMenuList: React.FC<SideMenuListProps> = ({ list, badgeVariant, onClick }) => {
  return (
    <StyledList>
      {list.map((info, idx) => (
        <SideMenuListItem key={idx} info={info} badgeVariant={badgeVariant} onClick={onClick} />
      ))}
    </StyledList>
  );
};

export default SideMenuList;
