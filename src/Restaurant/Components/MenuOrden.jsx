import React from "react";
import { Menu } from "../Data/Menu";
import { ListaMenu } from "./ListaMenu";

export const MenuOrden = () => {
    const platos = Menu.filter((item) => item.category === "Plato Principal");
    const entradas = Menu.filter((item) => item.category === "Entrada");
    const bebidas = Menu.filter((item) => item.category === "Bebida");
    return (
        <div className="">
            <h2 className="text-4xl font-bold text-center mb-8">Platos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-40 gap-8">
                {platos.map((item) => (
                <ListaMenu
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    category={item.type}
                    prince={item.price}
                    description={item.description}
                    image={item.image}
                />
                ))}
            </div>

            <h2 className="text-4xl font-bold text-center mb-8 mt-16">Entradas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-40 gap-8">
                {entradas.map((item) => (
                <ListaMenu
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    category={item.type}
                    prince={item.price}
                    description={item.description}
                    image={item.image}
                />
                ))}
            </div>

            <h2 className="text-4xl font-bold text-center mb-8 mt-16">Bebidas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-40 gap-8">
                {bebidas.map((item) => (
                <ListaMenu
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    category={item.type}
                    prince={item.price}
                    description={item.description}
                    image={item.image}
                />
                ))}
            </div>
        </div>
    );
};
