import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import _ from "lodash";

import Link from "next/link";
import { login } from "../../../controllers/userController";
import { useRouter } from "next/router";
import { alumnoPost, alumnoPut } from "../../../controllers/alumnoController";
import Swal from "sweetalert2";
import alumnoContext from "../../context/alumnos/alumnoContext";
import { useContext } from "react";

// validacion de formulario
const schema = yup.object().shape({
  nombre: yup.string().required("El nombre es requerido"),
  paterno: yup.string().required("El paterno es requerido"),
  materno: yup.string().required("El materno es requerido"),
  ci: yup
    .number("Debe ingresar solo numeros")
    .typeError("Debe ingresar una edad valida")
    .min(0, "valor minimo 0.")
    .required("El carnet es requerido"),
  edad: yup
    .number("")
    .typeError("Debe ingresar una edad valida")
    .min(0, "valor minimo 0.")
    .max(100, "Valor maximo 100.")
    .required("La edad es requerida"),
});

const FormAlumnoPut = ({ data }) => {
  const alumnosContext = useContext(alumnoContext);
  const { alumnoGet, alumnoPut, alumnos } = alumnosContext;

  const defaultValues = {
    nombre: data.nombre,
    paterno: data.paterno,
    materno: data.materno,
    ci: data.ci,
    edad: data.edad,
  };

  const { control, formState, handleSubmit, setError } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, errors } = formState;

  function onSubmit(model) {
    Swal.fire({
      title: "Esta seguro?",
      text: "No se podra revertir los cambios",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, modificar",
    }).then((result) => {
      if (result.isConfirmed) {
        alumnoPut(data.uuid, model);
        alumnoGet();
        Swal.fire("Buen trabajo!", "Alumno modificado con exito!", "success");
      }
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-4">
          <label htmlFor="email">Nombre</label>

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
          <Controller
            name="paterno"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className="form-control mb-3"
                  id="paterno"
                  placeholder="Ingresa un apellido paterno"
                  type="text"
                />
                {errors.paterno ? (
                  <div className="col text-danger px-0 pt-1 fw-bold">
                    {errors.paterno.message}
                  </div>
                ) : null}
              </>
            )}
          />

          <Controller
            name="materno"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className="form-control mb-3"
                  id="materno"
                  placeholder="Ingresa un apellido materno"
                  type="text"
                />
                {errors.materno ? (
                  <div className="col text-danger px-0 pt-1 fw-bold">
                    {errors.materno.message}
                  </div>
                ) : null}
              </>
            )}
          />

          <Controller
            name="ci"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className="form-control mb-3"
                  id="ci"
                  placeholder="Ingresa un carnet de identidad"
                  type="text"
                />
                {errors.ci ? (
                  <div className="col text-danger px-0 pt-1 fw-bold">
                    {errors.ci.message}
                  </div>
                ) : null}
              </>
            )}
          />

          <Controller
            name="edad"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className="form-control mb-3"
                  id="edad"
                  placeholder="Ingresa un edad"
                  type="text"
                />
                {errors.edad ? (
                  <div className="col text-danger px-0 pt-1 fw-bold">
                    {errors.edad.message}
                  </div>
                ) : null}
              </>
            )}
          />
        </div>

        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-warning"
            data-bs-dismiss="modal"
          >
            Modificar datos
          </button>
        </div>
      </form>
    </>
  );
};

export default FormAlumnoPut;
