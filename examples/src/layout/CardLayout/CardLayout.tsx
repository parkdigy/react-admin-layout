import React from 'react';
import * as AdminLayout from 'react-admin-layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeBase } from '../Theme';
import { SignIn } from '#comp';

const CardLayout = () => {
  return (
    <ThemeBase>
      <AdminLayout.CardLayout>
        <Routes>
          <Route path='signin' element={<SignIn />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </AdminLayout.CardLayout>
    </ThemeBase>
  );
};

export default CardLayout;
