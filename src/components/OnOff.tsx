// @flow
import * as React from 'react';
import {CSSProperties, useState} from 'react';

type PropsType = {};
export const OnOff = (props: PropsType) => {
    let [on, setOn] = useState(false);
    const baseStyle: CSSProperties = {
        display: 'inline-block',
        height: '15px',
        border: '1px solid black',
        margin: '5px',
        padding: '8px',
        textAlign: 'center',
        cursor: 'pointer'
    };
    const onStyle: CSSProperties = {
        ...baseStyle,
        backgroundColor: on ? "green" : "white"

    };
    const offStyle: CSSProperties = {
        ...baseStyle,
        backgroundColor: on ? "white" : "red"

    };
    const indicatorStyle = {
        ...baseStyle,
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        backgroundColor: on ? "green" : "red"
    }
    const onClickHandler = () => {
        setOn(true)
    }
    const offClickHandler = () => {
        setOn(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={onClickHandler}>On
            </div>
            <div style={offStyle} onClick={offClickHandler}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};