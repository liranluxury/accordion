import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating, RatingValueType} from "./components/Rating";
import {NewStateAccordion} from "./components/NewStateAccordion";
import {NewRating} from "./components/NewRating";
import {OnOff} from './components/OnOff';
import {NewOnOff} from './components/NewOnOff';


function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [accordionCollapsed2, setAccordionCollapsed2] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState(false);
    return (
        <div className={'App'}>
            <PageTitle title={"This is App component"}/>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onClick={()=>{ setAccordionCollapsed(!accordionCollapsed)}}/>
            <Accordion titleValue={"Users"} collapsed={accordionCollapsed2} onClick={()=>{setAccordionCollapsed2(!accordionCollapsed2)}}/>
            <div style={{border: '1px solid red', padding: '10px', margin: '10px'}}>
                <h4>Rating</h4>
                <Rating value={ratingValue} onClick={setRatingValue}/>
            </div>
            <NewStateAccordion titleValue={"State"}/>
            <div style={{border: '1px solid red', padding: '10px', margin: '10px'}}>
                <h4>NewRating</h4>
                <NewRating value={1}/>
            </div>
            <NewOnOff on={switchOn} onClick={(on)=>{ setSwitchOn(on)}}/>{switchOn.toString()}

        </div>
    );
}

type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    return <h1>{props.title}</h1>
}

export default App;
