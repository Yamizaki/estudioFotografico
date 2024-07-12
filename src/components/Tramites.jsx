import React from 'react'
import Tramite from './Tramite'
import "./tramites.css";


function Tramites({tramites}) {
    return(
      <section className='bg-slate-600 py-10'>
      <h1 className='text-6xl font-extrabold text-center mb-6'>TRAMITES - RENIEC</h1>
    <div className=' flex flex-wrap justify-center gap-10'>
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
    </section>
  )
}

export default Tramites
