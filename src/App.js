import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './css/custom.css';

import Header from './components/Header';
import ListaApontamentos from './components/ListaApontamentos';
import CadastrarApontamento from './components/CadastrarApontamento';

export default function App() {
    const [apontamentos, setApontamentos] = useState([]);
    const onSubmit = (novoApontamento) => {
        novoApontamento.id = uuidv4();
        setApontamentos([...apontamentos, novoApontamento]);
    }

    const onDelete = (id) => {
        const apontamentosRestantes = apontamentos.filter((v) => v.id !== id);
        setApontamentos(apontamentosRestantes);
    }

    return (
        <div className="container container-mini mt-2">
            <Header />
            <ListaApontamentos apontamentos={apontamentos} onDelete={onDelete} />
            <CadastrarApontamento onSubmit={onSubmit} />
        </div>
    );
}