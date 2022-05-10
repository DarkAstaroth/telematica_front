import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { alumnoPost, alumnoPut } from "../../../controllers/alumnoController";
import Swal from "sweetalert2";
import { useContext } from "react";
import asignaturaContext from "../../context/asignaturas/asignaturaContext";

// validacion de formulario
const schema = yup.object().shape({
  nombre: yup.string().required("El nombre es requerido"),
});

const FormAsignatura = ({ data }) => {
  const asignaturasContext = useContext(asignaturaContext);
  const { asignaturaGet, asignaturaPost } = asignaturasContext;

  const defaultValues = {
    nombre: "",
    profesor: "",
    cupos: "",
    aula: "",
  };

  const { control, formState, handleSubmit, setError, reset } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, errors } = formState;

  function onSubmit(model) {
    Swal.fire({
      title: "Esta seguro?",
      text: "Desea Crear ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, modificar",
    }).then((result) => {
      if (result.isConfirmed) {
        asignaturaPost(model);
        asignaturaGet();
        reset();
        Swal.fire(
          "Buen trabajo!",
          "Asignatura modificada con exito!",
          "success"
        );
      }
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-4">
          <label htmlFor="email">Nombre de asignatura</label>

          <Controller
            name="nombre"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className="form-control mb-3"
                  id="nombre"
                  placeholder="Ingresa un nombre"
                  type="text"
                />
                {errors.nombre ? (
                  <div className="col text-danger px-0 pt-1 fw-bold">
                    {errors.nombre.message}
                  </div>
                ) : null}
              </>
            )}
          />
          <label htmlFor="email">Profesor</label>

          <Controller
            name="profesor"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className="form-control mb-3"
                  id="profesor"
                  placeholder="Ingresa un nombre profesor"
                  type="text"
                />
                {errors.profesor ? (
                  <div className="col text-danger px-0 pt-1 fw-bold">
                    {errors.profesor.message}
                  </div>
                ) : null}
              </>
            )}
          />
          <label htmlFor="email">Cupos</label>

          <Controller
            name="cupos"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className="form-control mb-3"
                  id="cupos"
                  placeholder="Ingresa cupos"
                  type="text"
                />
                {errors.cupos ? (
                  <div className="col text-danger px-0 pt-1 fw-bold">
                    {errors.cupos.message}
                  </div>
                ) : null}
              </>
            )}
          />
          <label htmlFor="email">Aula</label>

          <Controller
            name="aula"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className="form-control mb-3"
                  id="aula"
                  placeholder="Ingresa una aula"
                  type="text"
                />
                {errors.aula ? (
                  <div className="col text-danger px-0 pt-1 fw-bold">
                    {errors.aula.message}
                  </div>
                ) : null}
              </>
            )}
          />
        </div>

        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-gray-800"
            data-bs-dismiss="modal"
          >
            Crear Asignatura
          </button>
        </div>
      </form>
    </>
  );
};

export default FormAsignatura;
