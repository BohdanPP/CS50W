import React from "react";

type RatingPropsType = {
    value : number
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
        </div>
    )
}

type StarPropsType = {
    selected : boolean
}
function Star(props: StarPropsType) {
    if (props.selected) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star </span>
    }


}