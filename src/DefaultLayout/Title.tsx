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
            <Box style={{ marginRight: '0.25rem', lineHeight: 0 }}>
              <Icon style={{ fontSize: '1rem' }}>
                {headIcon.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`)}
              </Icon>
            </Box>
          )}
          <Typography style={{ fontSize: '0.7rem' }}>{headTitle}</Typography>
        </Box>
      )}
      <div style={{ display: 'flex', alignItems: 'center', fontSize: '1rem' }}>
        {icon && (
          <div style={{ flexShrink: 0, display: 'inline-flex', marginRight: '0.3rem' }}>
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
