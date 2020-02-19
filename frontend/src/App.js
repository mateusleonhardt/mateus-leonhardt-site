import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './App.css';

import Header from './components/Header';
import Routes from './routes';

function App() {
  library.add(fab);

  return (
    <>
      <BrowserRouter>
        <Header />        
        <div className="content">
          <Routes />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
