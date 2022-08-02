import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home/home";
import Painel from "./pages/painel";

function Rotas() {
    return(
        <Routes>
            <Route path="/painel" element={<Painel />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default Rotas;