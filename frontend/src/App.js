import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <>
      <div className="bg"></div>
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
