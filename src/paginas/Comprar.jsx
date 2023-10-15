import React, { useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import data from "../datos/data";
import types from "../contexto/types";
import Context from "../contexto/Context";

const Comprar = () => {
  const { nombre } = useParams();
  const destinoEncontrado = data.find((dato) => dato.nombre === nombre);

  const navegacion = useNavigate();

  const volver = () => {
    navegacion(-1);
  };

  const { dispatch2, contratacion, sumaTotal, setSumaTotal } =
    useContext(Context);

  const encontrado = contratacion.find((objeto) => objeto.sitio === nombre);

  if (!destinoEncontrado) {
    return <Navigate to="no" />;
  }

  const contratar = () => {
    setSumaTotal(sumaTotal + destinoEncontrado.precio);
    const action = {
      type: types.contratar,
      payload: {
        nombre: nombre,
        precio: destinoEncontrado.precio,
      },
    };

    dispatch2(action);
  };

  const anular = () => {
    setSumaTotal(sumaTotal - destinoEncontrado.precio);
    const action = {
      type: types.anular,
      payload: {
        nombre: nombre,
      },
    };

    dispatch2(action);
  };

  const imagen = `/images/${destinoEncontrado.imagen}`;

  return (
    <>
      <div className="contenido">
        <h1>{nombre}</h1>
        <div className="servicios">{destinoEncontrado.servicio}</div>

        <div className="imagenGrande">
          <div className="precio">$ {destinoEncontrado.precio}</div>
          <img src={imagen} alt="" />
          {!encontrado && (
            <button className="boton contratar" onClick={contratar}>
              Contratar
            </button>
          )}
          {encontrado && (
            <button className="boton anular" onClick={anular}>
              Anular
            </button>
          )}
          <div className="botonVolver">
            <button onClick={volver}>Volver</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comprar;
