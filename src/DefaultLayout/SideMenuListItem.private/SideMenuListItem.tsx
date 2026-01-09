import React, { useState } from 'react';
import { ListItemButton, Icon, ListItemText, Badge, Collapse } from '@mui/material';
import { useLocation, useNavigate } from 'react-router';
import { type SideMenuListItemProps } from './SideMenuListItem.types';
import { StyledExpandMore, StyledListItemIcon } from './SideMenuListItem.style';
import { useChange } from '../../@common';

const SideMenuListItem = ({ info, badgeVariant, expandedBackgroundColor }: SideMenuListItemProps) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const location = useLocation();
  const navigate = useNavigate();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [isExpandable, setIsExpandable] = useState<boolean>(false);
  const [isExpand, setIsExpand] = useState<boolean>(false);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useChange(info, () => {
    setIsExpandable(!!info.items && info.items.length > 0);

    if (info.items && info.items.find((info) => location.pathname === info.uri)) {
      setIsExpand(true);
    }
  });

  useChange(location.pathname, () => {
    if (isExpandable && isExpand != null) {
      if (info.uri !== location.pathname) {
        if (info.items && !info.items.find((info) => location.pathname === info.uri)) {
          if (isExpand) {
            setIsExpand(false);
          }
        }
      }
    }
    if (isExpandable && !isExpand) {
      if (info.items && info.items.find((info) => location.pathname === info.uri)) {
        setIsExpand(true);
      }
    }
  });

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <>
      <ListItemButton
        onClick={isExpandable ? () => setIsExpand((old) => !old) : () => info.uri && navigate(info.uri)}
        selected={isExpandable ? false : info.uri === location.pathname}
        style={{
          backgroundColor: isExpandable && isExpand ? expandedBackgroundColor : undefined,
        }}
      >
        <StyledListItemIcon>{info.icon && <Icon fontSize='small'>{info.icon}</Icon>}</StyledListItemIcon>
        <ListItemText slotProps={{ primary: { style: { fontWeight: info.depth === 1 ? 600 : undefined } } }}>
          {info.badge ? (
            <Badge
              badgeContent={info.badge}
              color='error'
              variant={badgeVariant !== undefined ? badgeVariant : info.badgeVariant}
              anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
              slotProps={{
                badge: { style: { left: '100%', top: '50%', transform: 'scale(.8) translate(10px, -50%)' } },
              }}
            >
              <div>{info.name}</div>
            </Badge>
          ) : (
            info.name
          )}
        </ListItemText>

        {isExpandable && (
          <StyledExpandMore
            sx={{
              animation: `${isExpand ? 'open' : 'close'} 0.1s linear`,
              transform: `rotate(${isExpand ? 180 : 0}deg)`,
            }}
          />
        )}
      </ListItemButton>
      {isExpandable && (
        <Collapse in={isExpand} style={{ backgroundColor: isExpand ? expandedBackgroundColor : undefined }}>
          {info.items &&
            info.items.map((subInfo, idx) => <SideMenuListItem key={idx} badgeVariant={badgeVariant} info={subInfo} />)}
        </Collapse>
      )}
    </>
  );
};

export default SideMenuListItem;
