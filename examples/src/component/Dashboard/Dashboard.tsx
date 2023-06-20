import React from 'react';
import { Button } from '@mui/material';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: 1 }}>
        <div style={{ height: 100 }}>Dashboard</div>
      </div>
      <div>
        <Button href='/auth/signin'>SignIn</Button>
      </div>
    </div>
  );
};

export default Dashboard;
