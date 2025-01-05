import React from "react";
import { Counter } from "../../Hooks/Counter";

export const ListaMenu = ({
    id,
    name,
    category,
    prince,
    description,
    image,
    agregarProducto
    }) => {
        const {counter,decrement,increment,setcounter} = Counter(0)
        const handleAgregar = () => {
            if (counter > 0) {
                
                agregarProducto({ id, name, prince, cantidad: counter });
                
                console.log({ id, name, prince, cantidad: counter });
            }
            setcounter(0);
        };
        
    return (
        <div className="sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
    <div className="w-full h-auto rounded-lg shadow-lg overflow-hidden group block bg-white hover:shadow-2xl transition duration-300 transform hover:scale-105">
        <div className="overflow-hidden">
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover rounded-lg transform transition duration-500 group-hover:scale-110"
            />
        </div>
        <div className="p-6">
            <h3 className="lg:text-xl text-2xl pb-3 font-bold text-gray-800">{name}</h3>
            <p className="text-gray-500 text-lg mb-2">{prince}</p>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <button
                        onClick={decrement}
                        className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 focus:outline-none"
                    >
                        -
                    </button>
                    <p className="text-lg">{counter}</p>
                    <button
                        onClick={increment}
                        className="bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 focus:outline-none"
                    >
                        +
                    </button>
                </div>
                <button
                    onClick={handleAgregar}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none"
                >
                    Agregar
                </button>
            </div>
        </div>
    </div>
</div>

    );
};
