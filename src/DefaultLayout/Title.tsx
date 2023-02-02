import React from 'react';
import { Box, Icon, Typography } from '@mui/material';

export interface TitleProps {
  title: string;
  icon?: string;
  headTitle?: string;
  headIcon?: string;
}

const Title: React.FC<TitleProps> = ({ title, icon, headTitle, headIcon }) => {
  return (
    <Box style={{ position: 'relative' }}>
      {headTitle && (
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', opacity: 0.5 }}>
          {headIcon && (
            <Box style={{ marginRight: 4, lineHeight: 0 }}>
              <Icon fontSize='small' style={{ fontSize: 15 }}>
                {headIcon.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`)}
              </Icon>
            </Box>
          )}
          <Typography style={{ fontSize: 11 }}>{headTitle}</Typography>
        </Box>
      )}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {icon && (
          <div style={{ flexShrink: 0, display: 'inline-flex', marginRight: 5 }}>
            <Icon fontSize='small'>
              {icon.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`)}
            </Icon>
          </div>
        )}
        <div>{title}</div>
      </div>
    </Box>
  );
};

export default Title;
