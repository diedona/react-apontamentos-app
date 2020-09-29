import React from 'react';
import InputMask from "react-input-mask";

export default function InputCadastroApontamento({ nome, valor, label, onChange }) {
    return (
        <div>
            <label>{label}</label>
            <InputMask
                mask="99:99"
                className="form-control"
                name={nome}
                value={valor}
                onChange={(e) => onChange(e)} />
        </div>
    );
}