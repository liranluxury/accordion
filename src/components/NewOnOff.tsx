// @flow
import * as React from 'react';
import {CSSProperties, useState} from 'react';

type PropsType = {
    on:boolean
    onClick:(on:boolean)=>void
};
export const NewOnOff = (props: PropsType) => {

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
        backgroundColor: props.on ? "green" : "white"

    };
    const offStyle: CSSProperties = {
        ...baseStyle,
        backgroundColor:  props.on ? "white" : "red"

    };
    const indicatorStyle = {
        ...baseStyle,
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        backgroundColor:  props.on ? "green" : "red"
    }
    const onClickHandler = () => {
        props.onClick(true)
    }
    const offClickHandler = () => {
        props.onClick(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={onClickHandler}>NewOn
            </div>
            <div style={offStyle} onClick={offClickHandler}>NewOff
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};