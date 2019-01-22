import React from "react"
import { ClickMe } from "../stateless/ClickMe"
export interface CountProps {
    onChange(prevCount: number, nextCount: number): any;
}

export interface CountState {
    count: number;
}

export class Count extends React.Component<CountProps, CountState> {
    state = {
        count: 0
    }
    constructor(props: CountProps) {
        super(props);
        this.clickMeHandler = this.clickMeHandler.bind(this);
    }

    clickMeHandler = () => {
        this.setState((state: CountState, props: CountProps) => {
            const prevState = state;
            const nextState = { count: prevState.count + 1 }
            props.onChange(prevState.count, nextState.count);
            return nextState;
        })
    }

    componentDidMount() {
        console.log('Component did mount');
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    componentDidUpdate() {
        console.log('Component did update');
    }

    render() {
        return <ClickMe onClickMeHandler={this.clickMeHandler} count={this.state.count} />
    }
}