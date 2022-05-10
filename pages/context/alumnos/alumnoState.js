import { useReducer } from "react";
import clienteAxios from "../../../db/config";
import { ALUMNOS_PROYECTO, CREAR_ALUMNO, ELIMINAR_ALUMNO } from "../../types";
import AlumnoContext from "./alumnoContext";
import AlumnoReducer from "./alumnoReducer";

const AlumnoState = (props) => {
  const initialState = {
    alumnos: [],
    error: false,
    mensaje: null,
  };

  const [state, dispatch] = useReducer(AlumnoReducer, initialState);

  const alumnoGet = async () => {
    try {
      const resultado = await clienteAxios.get("/api/alumno");
      dispatch({
        type: ALUMNOS_PROYECTO,
        payload: resultado.data.alumnos,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const alumnoPost = async (data) => {
    try {
      const resultado = await clienteAxios.post("/api/alumno", data);
      dispatch({
        type: CREAR_ALUMNO,
        payload: resultado.data.alumno,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const alumnoPut = async (id, model) => {
    try {
      await clienteAxios.put(`/api/alumno/${id}`, model);
    } catch (error) {
      console.log(error);
    }
  };

  const alumnoDelete = async (id) => {
    try {
      await clienteAxios.delete(`/api/alumno/${id}`);
      dispatch({
        type: ELIMINAR_ALUMNO,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AlumnoContext.Provider
      value={{
        alumnos: state.alumnos,
        alumnoGet,
        alumnoPost,
        alumnoPut,
        alumnoDelete,
      }}
    >
      {props.children}
    </AlumnoContext.Provider>
  );
};

export default AlumnoState;
