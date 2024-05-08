import { Grid } from '@mui/material';
import React from 'react';
import { CardLayoutProps } from './CardLayout.types';

const CardLayout = ({ children, backgroundColor = '#eff3f8' }: CardLayoutProps) => {
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      justifyContent='center'
      style={{ minHeight: '100vh', backgroundColor }}
    >
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default CardLayout;
