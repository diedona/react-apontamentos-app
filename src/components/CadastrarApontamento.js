import React, { useState } from 'react';

export default function CadastrarApontamento({ onSubmit }) {

    const estadoInicial = () => {
        return { entrada1: '', saida1: '', entrada2: '', saida2: '' };
    }
    const [apontamento, setApontamento] = useState(estadoInicial());
    const onChange = (e) => {
        setApontamento({ ...apontamento, [e.target.name]: e.target.value })
    };
    const cadastrar = () => {
        onSubmit(apontamento);
        setApontamento(estadoInicial());
    }

    return (
        <div className="row mt-2">
            <div className="col-2">
                <label>Ent. 1:</label>
                <input type="text"
                    className="form-control"
                    name="entrada1"
                    value={apontamento.entrada1}
                    onChange={(e) => onChange(e)} />
            </div>
            <div className="col-2">
                <label>Saida 1:</label>
                <input type="text" className="form-control"
                    name="saida1"
                    value={apontamento.saida1}
                    onChange={(e) => onChange(e)} />
            </div>
            <div className="col-2">
                <label>Ent. 2:</label>
                <input type="text" className="form-control"
                    name="entrada2"
                    value={apontamento.entrada2}
                    onChange={(e) => onChange(e)} />
            </div>
            <div className="col-2">
                <label>Saida 2:</label>
                <input type="text" className="form-control"
                    name="saida2"
                    value={apontamento.saida2}
                    onChange={(e) => onChange(e)} />
            </div>
            <div className="col-4">
                <label>&nbsp;</label>
                <button onClick={() => cadastrar()} className="form-control btn btn-primary">Cadastrar</button>
            </div>
        </div>
    );
}