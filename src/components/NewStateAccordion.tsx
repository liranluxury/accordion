import React, {useState} from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";



export const NewStateAccordion = (props: NewStateAccordionPropsType) => {
    const [toggle, setToggle] = useState(false);
  const changeToggle = () => {
        setToggle(!toggle);

    }
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={changeToggle}/>
            {toggle && <AccordionBody/>}


        </div>
    );


};

type  NewStateAccordionPropsType = {
    titleValue: string
    toggle?: boolean

}