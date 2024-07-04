import React from 'react'
import Tramite from './Tramite'



function Tramites({tramites}) {
    return(
    <div>
    {tramites.map((tramite, index) =>(
    <Tramite
        key={index}
        precio={tramite.precio}
        titulo={tramite.titulo}
        descripcion={tramite.descripcion}
        pasos={tramite.pasos}
        
    />
    ))}
    </div>
  )
}

export default Tramites
