import React from 'react';

export default function Apontamento({ apontamento }) {
    return (
        <div className="row">
            <div className="col-3 text-center">{apontamento.entrada1}</div>
            <div className="col-3 text-center">{apontamento.saida1}</div>
            <div className="col-3 text-center">{apontamento.entrada2}</div>
            <div className="col-3 text-center">{apontamento.saida2}</div>
        </div>
    );
}