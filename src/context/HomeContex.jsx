import React, { useState } from 'react'

const HomeContext = React.createContext()

export function HomeProvider(props) {
    const [modal, setModal] = useState(false)

    const value = {
        modal,
        setModal
    }

    return <HomeContext.Provider  {...props} value={value} />
}

export function useHome() {
    const context = React.useContext(HomeContext)
    if (!context) throw new Error('useHome is out from provider')
    return context
}