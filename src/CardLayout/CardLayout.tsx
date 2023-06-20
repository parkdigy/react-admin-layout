import { Grid } from '@mui/material';
import React from 'react';
import { CardLayoutProps, CardLayoutDefaultProps } from './CardLayout.types';

const CardLayout: React.FC<CardLayoutProps> = ({ children, backgroundColor }) => {
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

CardLayout.defaultProps = CardLayoutDefaultProps;

export default CardLayout;
