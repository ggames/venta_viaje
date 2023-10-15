import Destino from '../paginas/Destino';
import data from './data';

const CrearListado = ({zona}) => {

    const listado = data.filter(destino => destino.zona === zona);
    console.log(listado);
  return (
    <>
       <section className='lista'>
         {
            listado.map(dato => (<Destino key={dato.nombre}{...dato} />))
         }
       </section> 
    </>
  )
}

export default CrearListado
