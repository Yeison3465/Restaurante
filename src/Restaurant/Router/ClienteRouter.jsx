import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ClienteMenu } from '../Pages/ClienteMenu'
import { Pedido } from '../Pages/Pedido'
import { EstadoPedido } from '../Pages/EstadoPedido'

export const ClienteRouter = () => {
    return (
    
            <Routes>
                <Route path="ClienteMenu" element={<ClienteMenu />} />
                <Route path="pedido" element={<Pedido />} />
                <Route path="EstadoPedido" element={<EstadoPedido />} />
            </Routes>
        
    )
}
