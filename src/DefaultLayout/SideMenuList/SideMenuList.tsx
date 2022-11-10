import React from 'react';
import { List } from '@mui/material';
import SideMenuListItem from '../SideMenuListItem';
import { SideMenuListProps } from './SideMenuList.types';

const SideMenuList: React.FC<SideMenuListProps> = ({ list, onClick }) => {
  return (
    <List sx={{ padding: 0 }}>
      {list.map((info, idx) => (
        <SideMenuListItem key={idx} info={info} onClick={onClick} />
      ))}
    </List>
  );
};

export default SideMenuList;
