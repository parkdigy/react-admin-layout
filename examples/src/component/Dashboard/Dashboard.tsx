import React from 'react';
import { Button, Stack } from '@mui/material';

const Dashboard = () => {
  return (
    <Stack spacing={1}>
      <div>Dashboard</div>
      <div>
        <Button href='/auth/signin'>SignIn</Button>
      </div>
    </Stack>
  );
};

export default Dashboard;
