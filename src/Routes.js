import React from "react";
import { Route, Routes } from 'react-router-dom';
import RouteHandle from "./auth/RouteHandle";
import App from "./pages/home/index";
import Painel from "./pages/painel";

function Rotas() {
    return (
        <Routes>
            <Route path="/painel" element={
                <RouteHandle>
                    <Painel />
                </RouteHandle>
            } />
            <Route path="/" element={<App />} />
        </Routes>
    );
}

export default Rotas;