import React, { useState, useEffect } from "react"
import { ClickMe } from "../stateless/ClickMe"
export interface CountProps {
    onChange(prevCount: number, nextCount: number): any;
}

export const Count = (props: CountProps) => {
    const [count, setCount] = useState(0);

    const clickMeHandler = () => {
        const prevCount = count;
        const nextCount = prevCount + 1
        setCount(count + 1)
        props.onChange(prevCount, nextCount);
    }

    return <ClickMe onClickMeHandler={clickMeHandler} count={count} />
}