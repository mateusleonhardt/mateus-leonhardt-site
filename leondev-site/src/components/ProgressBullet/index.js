import React, { useState, useEffect, useRef } from 'react';

import './styles.css';

export default function ProgressBullet({data}) {
    const ref = useRef(null);
    const topLevel = 10;
    const [level, setLevel] = useState({ width: "0%" });
    const [itemSize, setItemSize] = useState({ width: "0px" });

    useEffect(() => {
        setLevel({width: `${((data.level * 100) / topLevel)}%`})
        setItemSize({width: ref.current ? `${ref.current.offsetWidth}px` : '0px'})
    }, [data.level])

    return (
        <li className="bullet-item" ref={ref}> 
            <div className="name">{data.label}</div>
            <div className="progress">
                <div className="percentage" style={level}>
                    <span className="da" style={itemSize}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <span className="dg">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
        </li>
    );
}