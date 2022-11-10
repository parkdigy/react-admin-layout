import { Card, Grid } from '@mui/material';
import React from 'react';
import { CardLayoutProps, CardLayoutDefaultProps } from './CardLayout.types';

const CardLayout: React.FC<CardLayoutProps> = ({ children, backgroundColor, ...otherProps }) => {
  return (
    <Grid container direction='column' justifyContent='flex-end' sx={{ minHeight: '100vh', backgroundColor }}>
      <Grid item xs={12}>
        <Grid container justifyContent='center' alignItems='center' sx={{ minHeight: 'calc(100vh - 68px)' }}>
          <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
            <Card {...otherProps}>{children}</Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

CardLayout.defaultProps = CardLayoutDefaultProps;

export default CardLayout;
