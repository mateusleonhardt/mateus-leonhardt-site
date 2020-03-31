import React from 'react'
import { Helmet } from 'react-helmet';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Header from '../Header';
import Footer from '../Footer';
//import Breadcrumbs from '../Breadcrumbs';

import './global.scss';

export default function Layout({ children }) {
    library.add(fab, fas);

    return (
        <>
            <Helmet>
                <meta name="description" content="Site pessoal de Mateus Leonhardt, um programador com mais de 7 anos com atuação no desenvolvimento 
                            de sistemas, sites corporativos e intranets utilizando plataformas como Microsoft Sharepoint, 
                            Microsoft .NET em C#, ASP.NET MVC, React, Wordpress e Angular." />
            </Helmet>

            <Header />        
            <div className="content">

                {children}
            </div>
            <Footer />
        </>
    )
}
