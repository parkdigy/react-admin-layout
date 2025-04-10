import './init';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CardLayout, DefaultLayout } from './layout';

import './sass/index.scss';

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path='/auth/*' element={<CardLayout />} />
        <Route path='/*' element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
