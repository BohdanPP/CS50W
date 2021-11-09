import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    if (props.collapsed) {
        return (
            <>
                Collapsed
                <AccordionTitle value={props.title}/>
            </>)
    } else {
        return (
            <>
                NOT COLLAPSED
                <AccordionTitle value={props.title}/>
                <AccordionBody/>
            </>)
    }

}

type AccordionTitlePropsType = {
    value: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.value}</h3>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>AccordionBody 1</li>
                <li>AccordionBody 2</li>
                <li>AccordionBody 3</li>
            </ul>
        </div>
    )
}

export default Accordion