import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Dashboard, Menu1, Menu2Sub1, Menu2Sub2, Menu2Sub3, Menu3Sub1, Menu3Sub2, Menu3Sub3 } from '#comp';

const routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/menu_1' element={<Menu1 />} />
      <Route
        path='/menu_2/*'
        element={
          <Routes>
            <Route path='/sub_1' element={<Menu2Sub1 />} />
            <Route path='/sub_2' element={<Menu2Sub2 />} />
            <Route path='/sub_3' element={<Menu2Sub3 />} />
            <Route path='/sub_1' element={<Menu3Sub1 />} />
            <Route path='/sub_2' element={<Menu3Sub2 />} />
            <Route path='/sub_3' element={<Menu3Sub3 />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        }
      />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default routes;
