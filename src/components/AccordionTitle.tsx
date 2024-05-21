import React, {CSSProperties} from 'react';

export const AccordionTitle = (props: AccordionTitleType) => {
    const accordionTitle: CSSProperties = {
        cursor: 'pointer'
    }

    return (
        <div>
            <h3 onClick={props.onClick} style={accordionTitle}>{props.title} </h3>
        </div>
    );
};

type AccordionTitleType = {
    title: string
    onClick?: () => void
}