import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './component/Header';
import PageContainer from './page';

import './assets/reset.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PageContainer />
    </BrowserRouter>
  );
}

export default App;
