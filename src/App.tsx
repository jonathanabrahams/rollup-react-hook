import React, { useState } from "react"
import { AppContainer } from './AppContainer'
import { Count as ComponentCount } from './component/Count'
import { Count as HookCount } from './hook/Count'
import { onChange } from './behaviour/Countable'

export const App = () => {
    const [showComponent, setShowComponent] = useState(true)
    const [showHook, setShowHook] = useState(true)
    return (
        <AppContainer>
            <h1>Using Components</h1>
            {showComponent && <ComponentCount onChange={onChange(setShowComponent, "Component")} />}
            <h1>Using Hooks</h1>
            {showHook && <HookCount onChange={onChange(setShowHook, "Hook")} />}
        </AppContainer>
    )
}