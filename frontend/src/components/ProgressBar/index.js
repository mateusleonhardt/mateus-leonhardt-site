import React from 'react';

import './styles.css';

export default function ProgressBar({data}) {
    return (
        <div className="skill-box">
            <h3 className="skill-name">{ data.label }</h3>
            <div className="progress"> 
                <div className="progress-bar" data-percent="90" style={{ width: '90%' }}></div>
            </div>
        </div>
    );
}