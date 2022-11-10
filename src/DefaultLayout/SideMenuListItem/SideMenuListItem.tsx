import React, { useEffect, useState } from 'react';
import { notEmpty } from '../../@util';
// import { useNavigate, useLocation } from 'react-router-dom';
import {
  ListItemButton,
  ListItemIcon,
  Icon,
  ListItemText,
  Collapse,
  useTheme,
  alpha,
  SxProps,
  Theme,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { SideMenuListItemProps } from './SideMenuListItem.types';

const SideMenuListItem: React.FC<SideMenuListItemProps> = ({ info, onClick }) => {
  const theme = useTheme();

  const [isExpandable, setIsExpandable] = useState<boolean>(false);
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [expandIconSx, setExpandIconSx] = useState<SxProps<Theme>>(null);

  useEffect(() => {
    setIsExpandable(!!info && notEmpty(info.items));

    if (info.items && info.items.find((info) => location.pathname === info.uri)) {
      setIsExpand(true);
    }
  }, [info]);

  useEffect(() => {
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
  }, [location.pathname]);

  useEffect(() => {
    if (isExpandable && isExpand != null) {
      setExpandIconSx({
        animation: `${isExpand ? 'open' : 'close'} 0.1s linear`,
        transform: `rotate(${isExpand ? 180 : 0}deg)`,
        '@keyframes open': {
          '0%': {
            transform: `rotate(0deg)`,
          },
          '100%': {
            transform: `rotate(180deg)`,
          },
        },
        '@keyframes close': {
          '0%': {
            transform: `rotate(180deg)`,
          },
          '100%': {
            transform: `rotate(0deg)`,
          },
        },
      });
    }
  }, [isExpandable, isExpand]);

  function toggleIsExpand() {
    setIsExpand((isExpand) => !isExpand);
  }

  return (
    <>
      <ListItemButton
        onClick={
          isExpandable
            ? toggleIsExpand
            : () => {
                if (onClick) onClick(info);
              }
        }
        selected={isExpandable ? false : info.uri === location.pathname}
        style={{
          backgroundColor:
            isExpandable && isExpand
              ? alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity / 2)
              : undefined,
        }}
      >
        <ListItemIcon sx={{ minWidth: 30 }}>
          {info.icon && (
            <Icon fontSize='small'>
              {info.icon.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`)}
            </Icon>
          )}
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{ sx: { fontWeight: info.depth === 1 ? 600 : null } }}>
          {info.name}
        </ListItemText>
        {isExpandable && <ExpandMore style={{ marginTop: 'auto', marginBottom: 'auto' }} sx={expandIconSx} />}
      </ListItemButton>
      <Collapse
        in={isExpand}
        style={{
          backgroundColor: isExpand
            ? alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity / 2)
            : undefined,
        }}
      >
        {isExpandable &&
          info.items &&
          info.items.map((subInfo, idx) => <SideMenuListItem key={idx} info={subInfo} onClick={onClick} />)}
      </Collapse>
    </>
  );
};

export default SideMenuListItem;
