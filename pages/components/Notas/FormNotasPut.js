import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { alumnoPost, alumnoPut } from "../../../controllers/alumnoController";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import asignaturaContext from "../../context/asignaturas/asignaturaContext";
import Select from "react-select";
import alumnoContext from "../../context/alumnos/alumnoContext";
import notaContext from "../../context/notas/notaContext";

// validacion de formulario
const schema = yup.object().shape({
  //   nombre: yup.string().required("El nombre es requerido"),
});

const FormNotaPut = ({ data }) => {
  const notasContext = useContext(notaContext);
  const { notas, notaPut, notaGet } = notasContext;

  const defaultValues = {
    notaA: data.notaA,
    periodo: data.periodo,
  };

  const { control, formState, handleSubmit, setError, reset } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, errors } = formState;

  function onSubmit(model) {
    console.log("model", model);
    Swal.fire({
      title: "Esta seguro?",
      text: "Desea Modificar ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, modificar",
    }).then((result) => {
      if (result.isConfirmed) {
        notaPut(data.uuid, model);
        notaGet();
        reset();
        Swal.fire("Buen trabajo!", "Nota registrada con exito!", "success");
      }
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-4">
          <label htmlFor="email">Nota</label>
          <Controller
            name="notaA"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className="form-control mb-3"
                  id="notaA"
                  placeholder="Ingresa un nombre nota"
                  type="number"
                />
                {errors.notaA ? (
                  <div className="col text-danger px-0 pt-1 fw-bold">
                    {errors.notaA.message}
                  </div>
                ) : null}
              </>
            )}
          />
          <label htmlFor="periodo">Periodo</label>
          <Controller
            name="periodo"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className="form-control mb-3"
                  id="periodo"
                  placeholder="Ingresa una periodo"
                  type="text"
                />
                {errors.periodo ? (
                  <div className="col text-danger px-0 pt-1 fw-bold">
                    {errors.periodo.message}
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
            Modificar Nota
          </button>
        </div>
      </form>
    </>
  );
};

export default FormNotaPut;
