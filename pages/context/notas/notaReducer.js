import { CREAR_NOTA, ELIMINAR_NOTA, NOTAS_PROYECTO } from "../../types/index";

const NotasReducer = (state, action) => {
  switch (action.type) {
    case NOTAS_PROYECTO:
      return {
        ...state,
        notas: action.payload,
      };
    case ELIMINAR_NOTA:
      return {
        ...state,
        notas: state.notas.filter((nota) => nota.uuid !== action.payload),
      };
    case CREAR_NOTA:
      return {
        ...state,
        notas: [...state.notas, action.payload],
      };
  }
};

export default NotasReducer;
