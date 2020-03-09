import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

export default function App() {
  library.add(fab, fas);

  return (
    <>
      <BrowserRouter>
        <Header />        
        <div className="content">
          <Routes />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
