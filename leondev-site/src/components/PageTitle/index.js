import React from 'react';

import './styles.css';

export default function PageTitle({title}) {
    return (
        <section className="page-title">
            <h2>{title}</h2>
            <span>{title}</span>
        </section>
    );
}