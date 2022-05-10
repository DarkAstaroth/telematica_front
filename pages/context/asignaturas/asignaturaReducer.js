import {
  ASIGNATURAS_PROYECTO,
  CREAR_ASIGNATURA,
  ELIMINAR_ASIGNATURA,
} from "../../types/index";

const AsignaturaReducer = (state, action) => {
  switch (action.type) {
    case ASIGNATURAS_PROYECTO:
      return {
        ...state,
        asignaturas: action.payload,
      };
    case ELIMINAR_ASIGNATURA:
      return {
        ...state,
        asignaturas: state.asignaturas.filter(
          (asignatura) => asignatura.uuid !== action.payload
        ),
      };
    case CREAR_ASIGNATURA:
      return {
        ...state,
        asignaturas: [...state.asignaturas, action.payload],
      };
  }
};

export default AsignaturaReducer;
