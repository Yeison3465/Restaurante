import React from "react";
import { Route, Routes } from "react-router-dom";
import { Entrada } from "../Auth/Pages/Entrada";
import { ClienteRouter } from "../Restaurant/Router/ClienteRouter";

export const RouterPrincipal = () => {
    return (
        <Routes>
            <Route path="" element={<Entrada />} />
            <Route path="/*" element={<ClienteRouter/>} />
        </Routes>
    );
};
