import React, { useState } from 'react';
import './css/custom.css';

import Header from './components/Header';
import ListaApontamentos from './components/ListaApontamentos';
import CadastrarApontamento from './components/CadastrarApontamento';

export default function App() {
    const [apontamentos, setApontamentos] = useState([]);
    const onSubmit = (novoApontamento) => {
        console.log(novoApontamento);
        setApontamentos([...apontamentos, novoApontamento]);
    }

    return (
        <div className="container container-mini mt-2">
            <Header />
            <ListaApontamentos apontamentos={apontamentos} />
            <CadastrarApontamento onSubmit={(novoApontamento) => onSubmit(novoApontamento)} />
        </div>
    );
}