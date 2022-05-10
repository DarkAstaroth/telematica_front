import {
  ALUMNOS_PROYECTO,
  CREAR_ALUMNO,
  ELIMINAR_ALUMNO,
  MODIFICAR_ALUMNO,
} from "../../types/index";

const AlumnoReducer = (state, action) => {
  switch (action.type) {
    case ALUMNOS_PROYECTO:
      return {
        ...state,
        alumnos: action.payload,
      };

    case ELIMINAR_ALUMNO:
      return {
        ...state,
        alumnos: state.alumnos.filter(
          (alumno) => alumno.uuid !== action.payload
        ),
      };
    case CREAR_ALUMNO:
      return {
        ...state,
        alumnos: [...state.alumnos, action.payload],
      };
  }
};

export default AlumnoReducer;
