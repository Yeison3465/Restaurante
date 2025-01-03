import React from "react";

export const ListaMenu = ({
    id,
    name,
    category,
    prince,
    description,
    image,
    }) => {
    return (
        <div className=" sm:grid-cols-2 lg:grid-cols-3 ">
            <div className="w-full h-auto rounded-lg shadow-lg overflow-hidden group block">
                <div className="overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-80 object-cover rounded-lg transform transition duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-3xl pb-3 font-bold">{name}</h3>
                    <p className="text-gray-500 text-xl">{prince}</p>
                    <p className="text-gray-500 text-xl">{description}</p>
                </div>
            </div>
        </div>
    );
};
