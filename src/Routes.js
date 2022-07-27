import React from "react";
import { Route, Routes } from 'react-router-dom';
import App from "./pages/home/index";
import Painel from "./pages/painel";

function Rotas() {
    return(
        <Routes>
            <Route path="/painel" element={<Painel />} />
            <Route path="/" element={<App />} />
        </Routes>
    );
}

export default Rotas;