import React from 'react'
import "./header.css"

function Header() {
  return (
    <header className="py-44   text-white shadow-md ">
    <div className="mx-8 p-6">
      <h1 className="text-6xl">Titulo empresa</h1>
      <p className="mt-2 font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione blanditiis accusamus animi? Ut facilis impedit aliquam possimus maxime. Nobis tempora veniam iusto odio optio.</p>
    </div>
  
    <div className="mx-6 flex flex-wrap gap-3 p-6 md:flex-nowrap">
      <div className="bg-services rounded-md border p-6">
        <div className="flex">
          <div className="w-7">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor" classNameName="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
          </div>
          <p className="ms-1 font-bold">Realiza tus trámites en línea</p>
        </div>
        <p className="mt-3">Rápido, seguro y conveniente. Gestiona tus documentos y solicitudes sin desplazarte. Ahorra tiempo y esfuerzo con nuestro portal intuitivo y eficiente.</p>
      </div>
  
      <div className="bg-services rounded-md border p-6">
        <div className="flex">
          <div className="w-7">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor" classNameName="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
            </svg>
          </div>
          <p className="ms-1 font-bold">Inmortaliza momentos</p>
        </div>
        <p className="mt-3">Fotografía profesional para eventos, retratos y productos. Capturamos tus mejores momentos. Revelados de fotografías en la mejor calidad y tamaño.</p>
      </div>
  
      <div className="bg-services rounded-md border p-6">
        <div className="flex">
          <div className="w-7">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor" classNameName="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
          <p className="ms-1 font-bold">¡Crea tu web!</p>
        </div>
        <p className="mt-3">Desarrollo y diseño de sitios web personalizados. Soluciones rápidas y efectivas para tu presencia en línea.</p>
      </div>
  
      <div className="bg-services rounded-md border p-6">
        <div className="flex">
          <div className="w-7">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor" classNameName="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          </div>
          <p className="ms-1 font-bold">Trámites en línea</p>
        </div>
        <p className="mt-3">Redacción y tipeo de documentos, currículums, cartas, oficios y más. Calidad y precisión garantizadas.</p>
      </div>
    </div>
  </header>
  
  )
}

export default Header
