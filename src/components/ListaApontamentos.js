import React from 'react';

import Apontamento from './Apontamento';

export default function ListaApontamentos({ apontamentos }) {
    return (
        <div>
            {apontamentos.map(apontamento =>
                <Apontamento key={apontamento.id} apontamento={apontamento} />
            )}
        </div>
    );
}