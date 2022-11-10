import React from 'react';
import { Box, Typography } from '@mui/material';

export interface TitleProps {
  title: string;
  headTitle?: string;
}

const Title: React.FC<TitleProps> = ({ title, headTitle }) => {
  return (
    <Box style={{ position: 'relative' }}>
      {headTitle && (
        <Typography
          style={{ marginBottom: -4, opacity: 0.5 }}
          sx={{ fontSize: 11, display: { xs: 'none', sm: 'block' } }}
        >
          {headTitle}
        </Typography>
      )}
      {title}
    </Box>
  );
};

export default Title;
