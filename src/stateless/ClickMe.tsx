import React from "react"

export interface ClickMeProps {
    count: number;
    onClickMeHandler(): void;
}

export const ClickMe = ({ count, onClickMeHandler }: ClickMeProps) => (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={onClickMeHandler}>Click me</button>
    </div>
) 