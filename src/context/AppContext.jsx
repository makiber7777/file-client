import React, { useState } from 'react'
import { getRestServer } from '../global/storage'

const AppContext = React.createContext()

export function AppProvider(props) {
    const [open, setOpen] = useState(false)
    const [REST, setREST] = useState(() => getRestServer())
    const [deleteModal, setDeleteModal] = useState(null)

    const value = {
        open,
        setOpen,
        deleteModal,
        setDeleteModal,
        REST,
        setREST
    }

    return <AppContext.Provider  {...props} value={value} />
}

export function useApp() {
    const context = React.useContext(AppContext)
    if (!context) throw new Error('useApp is out from provider')
    return context
}