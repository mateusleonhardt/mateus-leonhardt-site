import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from '@material-ui/core';

import './App.css';

import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <Container>
      <div className="bg"></div>
      <BrowserRouter>
        <Header />
        
        <div className="content">
          <Routes />
        </div>
      </BrowserRouter>
    </Container>
  );
}

export default App;
