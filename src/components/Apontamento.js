import React from 'react';

export default function Apontamento({ apontamento, onDelete }) {
    return (
        <div className="row mb-2">
            <div className="col-2 text-center">{apontamento.entrada1}</div>
            <div className="col-2 text-center">{apontamento.saida1}</div>
            <div className="col-2 text-center">{apontamento.entrada2}</div>
            <div className="col-2 text-center">{apontamento.saida2}</div>
            <div className="col-2 text-center">
                <button className="btn btn-danger" onClick={() => onDelete(apontamento.id)}>Deletar</button>
            </div>
        </div>
    );
}