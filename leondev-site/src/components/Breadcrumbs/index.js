import React from 'react';
//import { Link, Route } from 'react-router-dom';

import './styles.css'

export default function Breadcrumbs({props}) {
    const Breadcrumbs = () => (
        <ul className='breadcrumbs'>
            <Route path='/:path' component={BreadcrumbsItem} />
        </ul>
    )
    
    const BreadcrumbsItem = ({ match,  ...rest}) => (
        <>
            <li><Link to="/">home</Link></li>
            <li className={match.isExact ? 'breadcrumb-active' : undefined}>
                {match.params.path.replace('portfolio', 'portfólio')}
            </li>
            <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
        </>
    )

    return <Breadcrumbs />
}