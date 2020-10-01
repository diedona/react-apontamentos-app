import React, { useState } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import InputCadastroApontamento from './InputCadastroApontamento';

dayjs.extend(customParseFormat);

function validarHora(hora) {
    return dayjs(hora, 'HH:mm', true).isValid()
}

function validarHoras(apontamento) {
    let errorMessage = '';

    if (!validarHora(apontamento.entrada1)) errorMessage += "Entrada 1 inválida\n"
    if (!validarHora(apontamento.saida1)) errorMessage += "Saida 1 inválida\n"
    if (!validarHora(apontamento.entrada2)) errorMessage += "Entrada 2 inválida\n"
    if (!validarHora(apontamento.saida2)) errorMessage += "Saida 2 inválida\n"

    if (errorMessage) {
        alert(errorMessage);
        return false;
    }

    return true;
}

const estadoInicial = () => {
    return { entrada1: '', saida1: '', entrada2: '', saida2: '' };
}

export default function CadastrarApontamento({ onSubmit }) {
   
    const [apontamento, setApontamento] = useState(estadoInicial());
    const onChange = (e) => {
        setApontamento({ ...apontamento, [e.target.name]: e.target.value });
    };

    const onClickCadastrar = () => {

        if (!validarHoras(apontamento))
            return;

        onSubmit(apontamento);
        setApontamento(estadoInicial());
    }

    return (
        <div className="row mt-2">
            <div className="col-2">
                <InputCadastroApontamento
                    label="Ent. 1:"
                    nome="entrada1"
                    valor={apontamento.entrada1}
                    onChange={onChange} />
            </div>
            <div className="col-2">
                <InputCadastroApontamento
                    label="Saida 1:"
                    nome="saida1"
                    valor={apontamento.saida1}
                    onChange={onChange} />
            </div>
            <div className="col-2">
                <InputCadastroApontamento
                    label="Ent. 2:"
                    nome="entrada2"
                    valor={apontamento.entrada2}
                    onChange={onChange} />
            </div>
            <div className="col-2">
                <InputCadastroApontamento
                    label="Saida 2:"
                    nome="saida2"
                    valor={apontamento.saida2}
                    onChange={onChange} />
            </div>
            <div className="col-4">
                <label>&nbsp;</label>
                <button onClick={onClickCadastrar} className="form-control btn btn-primary">Cadastrar</button>
            </div>
        </div>
    );
}