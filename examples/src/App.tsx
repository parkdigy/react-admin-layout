import './init';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { CardLayout, DefaultLayout } from './layout';

import './sass/index.scss';

function App() {
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
