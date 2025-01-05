import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ClienteMenu } from '../Pages/ClienteMenu'


export const ClienteRouter = () => {
    return (
    
            <Routes>
                <Route path="ClienteMenu" element={<ClienteMenu />} />
            </Routes>
        
    )
}
