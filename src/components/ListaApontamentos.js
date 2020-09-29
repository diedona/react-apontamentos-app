import React from 'react';

import Apontamento from './Apontamento';

export default function ListaApontamentos({ apontamentos, onDelete }) {
    return (
        <div>
            {apontamentos.map(apontamento =>
                <Apontamento
                    key={apontamento.id}
                    onDelete={(id) => onDelete(id)}
                    apontamento={apontamento} />
            )}
        </div>
    );
}