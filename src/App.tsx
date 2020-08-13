import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import PageContainer from './page';

import './assets/reset.css';

function App() {
  return (
    <BrowserRouter>
      <PageContainer />
    </BrowserRouter>
  );
}

export default App;
