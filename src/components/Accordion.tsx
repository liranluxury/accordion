import React from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
            {!props.collapsed  && <AccordionBody/>}
        </div>
    );


};

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick:()=>void
}