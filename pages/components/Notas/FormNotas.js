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

const FormNota = ({ alumnos, asignaturas }) => {
  const notasContext = useContext(notaContext);
  const { notas, notaPost, notaGet } = notasContext;

  const a1 = [];
  const a2 = [];

  alumnos.map((item) => {
    a1.push({
      value: `${item.uuid}`,
      label: `${item.nombre} ${item.paterno} ${item.materno}`,
    });
  });
  asignaturas.map((item) => {
    a2.push({
      value: `${item.uuid}`,
      label: `${item.nombre}`,
    });
  });

  const defaultValues = {
    alumno: "",
    asignatura: "",
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
        notaPost(model);
        reset();
        Swal.fire("Buen trabajo!", "Nota registrada con exito!", "success");
      }
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-4">
          <label htmlFor="email">Nombre de Alumno</label>

          <Controller
            control={control}
            defaultValue={defaultValues}
            name="alumno"
            render={({ field, onChange, value, name, ref }) => (
              <Select
                {...field}
                instanceId="alumno"
                inputRef={ref}
                className="mb-3"
                classNamePrefix="addl-class"
                options={a1}
                value={a1.find((c) => c.value === value)}
                // onChange={setSelectedAlumno}
              />
            )}
          />
          <label htmlFor="email">Asignatura</label>
          <Controller
            control={control}
            defaultValue={defaultValues}
            name="asignatura"
            render={({ field, onChange, value, name, ref }) => (
              <Select
                {...field}
                instanceId="asignatura"
                inputRef={ref}
                className="mb-3"
                classNamePrefix="addl-class"
                options={a2}
                value={a2.find((c) => c.value === value)}
                // onChange={setSelectedAlumno}
              />
            )}
          />
          <label htmlFor="email">Nota</label>
          <Controller
            name="nota"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className="form-control mb-3"
                  id="nota"
                  placeholder="Ingresa un nombre nota"
                  type="number"
                />
                {errors.nota ? (
                  <div className="col text-danger px-0 pt-1 fw-bold">
                    {errors.nota.message}
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
            className="btn btn-gray-800"
            data-bs-dismiss="modal"
          >
            Registrar Nota
          </button>
        </div>
      </form>
    </>
  );
};

export default FormNota;
