import './init';

import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { CardLayout, DefaultLayout } from './layout';

import './sass/index.scss';

function App() {
  useEffect(() => {
    const el = document.getElementById('___appLoading');
    el?.remove();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/*' element={<CardLayout />} />
        <Route path='/*' element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
