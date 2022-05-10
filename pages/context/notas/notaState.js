import { useReducer } from "react";
import clienteAxios from "../../../db/config";
import { CREAR_NOTA, ELIMINAR_NOTA, NOTAS_PROYECTO } from "../../types";
import NotaContext from "./notaContext";
import NotaReducer from "./notaReducer";

const NotaState = (props) => {
  const initialState = {
    notas: [],
    error: false,
    mensaje: null,
  };

  // crear dispacher y state
  const [state, dispatch] = useReducer(NotaReducer, initialState);

  const notaGet = async () => {
    try {
      const resultado = await clienteAxios.get("/api/nota");

      dispatch({
        type: NOTAS_PROYECTO,
        payload: resultado.data.notas,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const notaPost = async (data) => {
    try {
      const resultado = await clienteAxios.post("/api/nota", {
        alumno: data.alumno.value,
        asignatura: data.asignatura.value,
        notaA: data.nota,
        periodo: data.periodo,
      });
      dispatch({
        type: CREAR_NOTA,
        payload: resultado.data.alumno,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const notaDelete = async (id) => {
    try {
      console.log(id);
      await clienteAxios.delete(`/api/nota/${id}`);
      dispatch({
        type: ELIMINAR_NOTA,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const notaPut = async (id, model) => {
    try {
      await clienteAxios.put(`/api/nota/${id}`, model);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NotaContext.Provider
      value={{
        notas: state.notas,
        mensaje: state.mensaje,
        notaGet,
        notaDelete,
        notaPost,
        notaPut,
      }}
    >
      {props.children}
    </NotaContext.Provider>
  );
};

export default NotaState;
