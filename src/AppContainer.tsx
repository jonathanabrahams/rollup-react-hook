import React, { ReactNode } from "react"

export const AppContainer = ({ children }: { children: ReactNode }) => (
    <div className="app-container">
        <h1>Explore Hooks</h1>
        {children}
    </div>
)