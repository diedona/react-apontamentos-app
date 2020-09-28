import React from 'react';

import Apontamento from './Apontamento';

export default function ListaApontamentos({ apontamentos }) {
    return (
        <div>
            {apontamentos.map(apontamento =>
                <Apontamento apontamento={apontamento} />
            )}
        </div>
    );
}