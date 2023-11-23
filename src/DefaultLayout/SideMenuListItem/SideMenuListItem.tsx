import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { notEmpty } from '../../@util';
import { ListItemButton, ListItemIcon, Icon, ListItemText, Collapse, useTheme, alpha, Badge } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { SideMenuListItemProps } from './SideMenuListItem.types';

const SideMenuListItem: React.FC<SideMenuListItemProps> = ({ info, badgeVariant, onClick }) => {
  const theme = useTheme();
  const location = useLocation();

  // -------------------------------------------------------------------------------------------------------------------

  const [isExpandable, setIsExpandable] = useState<boolean>(false);
  const [isExpand, setIsExpand] = useState<boolean>(false);

  // -------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    setIsExpandable(!!info && notEmpty(info.items));

    if (info.items && info.items.find((info) => location.pathname === info.uri)) {
      setIsExpand(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // -------------------------------------------------------------------------------------------------------------------

  const toggleIsExpand = useCallback(() => {
    setIsExpand((isExpand) => !isExpand);
  }, []);

  // -------------------------------------------------------------------------------------------------------------------

  const icon = useMemo(
    () =>
      info.icon
        ? info.icon.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`)
        : undefined,
    [info]
  );

  // -------------------------------------------------------------------------------------------------------------------

  const containerStyle = useMemo(
    () => ({
      backgroundColor:
        isExpandable && isExpand
          ? alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity / 2)
          : undefined,
    }),
    [isExpand, isExpandable, theme]
  );

  const expandIconSx = useMemo(
    () =>
      isExpandable && isExpand != null
        ? {
            marginTop: 'auto',
            marginBottom: 'auto',
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
          }
        : {
            marginTop: 'auto',
            marginBottom: 'auto',
          },
    [isExpandable, isExpand]
  );

  const collapseStyle = useMemo(
    () => ({
      backgroundColor: isExpand
        ? alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity / 2)
        : undefined,
    }),
    [isExpand, theme]
  );

  const primaryTypographyProps = useMemo(() => ({ sx: { fontWeight: info.depth === 1 ? 600 : null } }), [info]);

  // -------------------------------------------------------------------------------------------------------------------

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
        style={containerStyle}
      >
        <ListItemIcon sx={{ minWidth: 30 }}>{icon && <Icon fontSize='small'>{icon}</Icon>}</ListItemIcon>
        <ListItemText primaryTypographyProps={primaryTypographyProps}>
          {info.badge ? (
            <Badge
              badgeContent={info.badge}
              color='error'
              variant={badgeVariant !== undefined ? badgeVariant : info.badgeVariant}
              anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
              slotProps={{ badge: { style: { left: '100%', top: '50%', transform: 'translate(10px, -50%)' } } }}
            >
              <div>{info.name}</div>
            </Badge>
          ) : (
            info.name
          )}
        </ListItemText>

        {isExpandable && <ExpandMore sx={expandIconSx} />}
      </ListItemButton>
      <Collapse in={isExpand} style={collapseStyle}>
        {isExpandable &&
          info.items &&
          info.items.map((subInfo, idx) => (
            <SideMenuListItem key={idx} badgeVariant={badgeVariant} info={subInfo} onClick={onClick} />
          ))}
      </Collapse>
    </>
  );
};

export default SideMenuListItem;
