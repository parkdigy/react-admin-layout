import React from 'react';
import { Button } from '@mui/material';

const Dashboard = () => {
  return (
    <div>
      <div>Dashboard</div>
      <br />
      <div>
        <Button href='/auth/signin'>SignIn</Button>
      </div>
    </div>
  );
};

export default Dashboard;
