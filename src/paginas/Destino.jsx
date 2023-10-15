import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../contexto/Context";

const Destino = ({ nombre, imagen, situacion }) => {
  const { contratacion } = useContext(Context);

  const encontrado = contratacion.find((objeto) => objeto.sitio === nombre);
  const ruta = `/images/${imagen}`;

  return (
    <>
      
        <div className="destino">
          <div className="nombre">{nombre}</div>
          <div className="situacion">{situacion}</div>
          <img src={ruta} alt={nombre} />
          <div className="flex">
            <Link to={`/destino/${nombre}`}>Más Info</Link>
            {encontrado && <div className="circulo"></div>}
          </div>
        </div>
      
    </>
  );
};

export default Destino;
