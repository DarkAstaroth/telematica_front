import { useReducer } from "react";
import clienteAxios from "../../../db/config";
import {
  ASIGNATURAS_PROYECTO,
  CREAR_ASIGNATURA,
  ELIMINAR_ASIGNATURA,
  MODIFICAR_ASIGNATURA,
} from "../../types";
import AsignaturaContext from "./asignaturaContext";
import AsignaturaReducer from "./asignaturaReducer";

const AsignaturaState = (props) => {
  const initialState = {
    asignaturas: [],
    error: false,
    mensaje: null,
  };
  // crear dispacher y state

  const [state, dispatch] = useReducer(AsignaturaReducer, initialState);

  const asignaturaGet = async () => {
    try {
      const resultado = await clienteAxios.get("/api/asignatura");
      dispatch({
        type: ASIGNATURAS_PROYECTO,
        payload: resultado.data.asignaturas,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const asignaturaPost = async (data) => {
    try {
      const resultado = await clienteAxios.post("/api/asignatura", data);

      dispatch({
        type: CREAR_ASIGNATURA,
        payload: resultado.data.asignatura,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const asignaturaDelete = async (id) => {
    try {
      await clienteAxios.delete(`/api/asignatura/${id}`);
      dispatch({
        type: ELIMINAR_ASIGNATURA,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const asignaturaPut = async (id, model) => {
    try {
      await clienteAxios.put(`/api/asignatura/${id}`, model);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AsignaturaContext.Provider
      value={{
        asignaturas: state.asignaturas,
        mensaje: state.mensaje,
        asignaturaGet,
        asignaturaPut,
        asignaturaDelete,
        asignaturaPost,
      }}
    >
      {props.children}
    </AsignaturaContext.Provider>
  );
};

export default AsignaturaState;
