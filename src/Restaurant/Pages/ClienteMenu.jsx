import React, { useState } from "react";
import { Menu } from "../../Restaurant/Data/Menu";
import { ListaMenu } from "../../Restaurant/Components/ListaMenu";
import { ListsOrderHook } from "../../Hooks/ListsOrderHook";

export const ClienteMenu = () => {
    const  {CarOrder,agregarProducto,eliminarProducto, total ,envio,Envio } = ListsOrderHook();
    

    const platos = Menu.filter((item) => item.category === "Plato Principal");
    const entradas = Menu.filter((item) => item.category === "Entrada");
    const bebidas = Menu.filter((item) => item.category === "Bebida");

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-center mb-4">Ordenes:</h3>
                {CarOrder.length > 0 ? (
                    CarOrder.map((item, index) => (
                        <div key={index} className="border-b py-4">
                            <p className="text-lg font-semibold">Producto: {item.name}</p>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio: ${item.prince}</p>
                            <button 
                                onClick={() => eliminarProducto(item.id)} 
                                className="mt-2 bg-red-500 text-white hover:bg-red-400 p-2 rounded"
                            >
                                Eliminar
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center  text-gray-500">No hay productos en la orden.</p>
                )}
                <div className="mt-6 text-xl font-bold text-right">
                    <p>Total: ${total.toFixed(2)}</p>
                </div>
                <div>
                    {CarOrder.length > 0 ? (<button onClick={envio} className="bg-green-500  p-2 text-white rounded">enviar</button>): null}
                    {Envio && <p className="bg-green-500  p-2 text-white rounded text-center mt-2">{Envio}</p>}
                    
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-center mb-8">Platos</h2>
                <div className="grid grid-cols-1  gap-8">
                    {platos.map((item) => (
                        <ListaMenu
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            category={item.type}
                            prince={item.price}
                            description={item.description}
                            image={item.image}
                            agregarProducto={agregarProducto}
                        />
                    ))}
                </div>

                <h2 className="text-4xl font-bold text-center mb-8 mt-16">Entradas</h2>
                <div className="grid grid-cols-1  gap-8">
                    {entradas.map((item) => (
                        <ListaMenu
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            category={item.type}
                            prince={item.price}
                            description={item.description}
                            image={item.image}
                            agregarProducto={agregarProducto}
                        />
                    ))}
                </div>

                <h2 className="text-4xl font-bold text-center mb-8 mt-16">Bebidas</h2>
                <div className="grid grid-cols-1  gap-8">
                    {bebidas.map((item) => (
                        <ListaMenu
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            category={item.type}
                            prince={item.price}
                            description={item.description}
                            image={item.image}
                            agregarProducto={agregarProducto}
                        />
                    ))}
                </div>
            </div>
            
        </div>

    );
};
