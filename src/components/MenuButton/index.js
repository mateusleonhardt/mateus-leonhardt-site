import React from 'react';

import './styles.scss';

export default function MenuButton(props) {
    return (
        <div className="menu-button" 
            onClick={props.onClick}>
            <div className={"line line-top " + (props.open ? 'opened' : '')} />
            <div className={"line line-middle " + (props.open ? 'opened' : '')} />
            <div className={"line line-bottom " + (props.open ? 'opened' : '')} />
        </div>
    );
}