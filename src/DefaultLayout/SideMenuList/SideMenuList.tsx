import React from 'react';
import SideMenuListItem from '../SideMenuListItem';
import { SideMenuListProps } from './SideMenuList.types';
import { StyledList } from './SideMenuList.style';

const SideMenuList: React.FC<SideMenuListProps> = ({ list, onClick }) => {
  return (
    <StyledList>
      {list.map((info, idx) => (
        <SideMenuListItem key={idx} info={info} onClick={onClick} />
      ))}
    </StyledList>
  );
};

export default SideMenuList;
