import React, { useState, useEffect } from 'react';

import './styles.scss';

export default function ProgressBar({data}) {
    const topLevel = 5;
    const [level, setLevel] = useState({
        width: "0%",
    });

    useEffect(() => {
        setLevel({width: `${((data.level * 100) / topLevel)}%`})
    }, [data.level])

    return (
        <div className="box">
            <h3 className="name">{ data.label }</h3>
            <div className="progress"> 
                <div className="progress-bar" style={level}></div>
            </div>
        </div>
    );
}