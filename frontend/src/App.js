import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import Routes from './routes';

export default function App() {
  library.add(fab, fas);

  return (
    <>
      <Helmet>
        <meta name="description" content="Site pessoal de Mateus Leonhardt, um programador com mais de 7 anos com atuação no desenvolvimento 
                    de sistemas, sites corporativos e intranets utilizando plataformas como Microsoft Sharepoint, 
                    Microsoft .NET em C#, ASP.NET MVC, React, Wordpress e Angular." />
      </Helmet>

      <BrowserRouter>
        <Header />        
        <div className="content">
          <Breadcrumbs />
          <Routes />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
