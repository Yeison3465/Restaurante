import React, { useState } from 'react'

export const ListsOrderHook = () => {
    const [CarOrder, setCarOrder] = useState([]);
    const [Envio, setEnvio] = useState('')
    
        const agregarProducto = (producto) => {
            setCarOrder((prevOrder) => {
            const productoExistente = prevOrder.find(
                (item) => item.id === producto.id
            );
    
            if (productoExistente) {
                
                return prevOrder.map((item) =>
                item.id === producto.id
                    ? { ...item, cantidad: item.cantidad + producto.cantidad }
                    : item
                );
                
            } else {
                
                return [...prevOrder, producto];
            }
            });
        };
        const envio = () => {
            setEnvio('enviado')
        }
    
        
        const total = CarOrder.reduce(
            (acc, item) => acc + item.prince * item.cantidad,
            0
        );
        const eliminarProducto = (id) => {
                setCarOrder(CarOrder.filter((item) => item.id !== id));
        };
    return {
        CarOrder,
        agregarProducto,
        total,
        eliminarProducto,
        setCarOrder,
        envio,
        setEnvio,
        Envio
    }
}
