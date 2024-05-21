import React, {useState} from 'react';


type NewStarPropsType = {
    selected: boolean
    onClick: () => void

}
const NewStar = ({selected, onClick}: NewStarPropsType) => {
    return (
        <span onClick={onClick}>
          {selected ? <b> star </b> : " star "}
      </span>
    )
}

type NewRatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function NewRating(props: NewRatingPropsType) {
    const [selectStar, setSelectStar] = useState<number>(0);
    const changeSelect = (starNumber:number) => {
        setSelectStar(starNumber)
    }
    return (
        <div>
            <NewStar onClick={() => changeSelect(1)} selected={selectStar >= 1 || props.value > 0} />
            <NewStar onClick={() => changeSelect(2)} selected={selectStar >= 2 || props.value > 1} />
            <NewStar onClick={() => changeSelect(3)} selected={selectStar >= 3 || props.value > 2} />
            <NewStar onClick={() => changeSelect(4)} selected={selectStar >= 4 || props.value > 3} />
            <NewStar onClick={() => changeSelect(5)} selected={selectStar >= 5 || props.value > 4} />

        </div>
    );
};
