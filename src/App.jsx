

import BarraNav from "./components/BarraNav";
import Header from "./components/Header";
import Tramites from "./components/Tramites";
export default function App() {

// Pasar la data para los servicios de tramites:
const tramites =[
    {
      precio: '26',
      titulo: 'Duplicado DNI azul',
      descripcion:'Este servicio solo aplica para clientes que extraviaron o desean un nuevo DNI azul',
      pasos:['Valida tus datos', 'Espera nuestra confirmación', 'Recoje tu documento en la Reniec más cercana']
    },     {
      precio: '26',
      titulo: 'Duplicado DNI azul',
      descripcion:'Este servicio solo aplica para clientes que extraviaron o desean un nuevo DNI azul',
      pasos:['Valida tus datos', 'Espera nuestra confirmación', 'Recoje tu documento en la Reniec más cercana']
    },
    {
      precio: '26',
      titulo: 'Duplicado DNI azul',
      descripcion:'Este servicio solo aplica para clientes que extraviaron o desean un nuevo DNI azul',
      pasos:['Valida tus datos', 'Espera nuestra confirmación', 'Recoje tu documento en la Reniec más cercana']
    },
    {
      precio: '26',
      titulo: 'Duplicado DNI azul',
      descripcion:'Este servicio solo aplica para clientes que extraviaron o desean un nuevo DNI azul',
      pasos:['Valida tus datos', 'Espera nuestra confirmación', 'Recoje tu documento en la Reniec más cercana']
    }
    
    
    
  ]
  return (
   <>
     <BarraNav />
     <Header />
     <Tramites tramites={tramites}/>

   </>
  );
}