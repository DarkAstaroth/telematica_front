import Link from "next/link";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import Swal from "sweetalert2";
import AlumnoModal from "../components/Alumno/AlumnoModal";
import AlumnoModalCreate from "../components/Alumno/AlumnoModalCreate";
import Loading from "../components/Loading";
import SideBar from "../components/Sidebar";
import alumnoContext from "../context/alumnos/alumnoContext";

const AlumnosPage = () => {
  const alumnosContext = useContext(alumnoContext);
  const { alumnoGet, alumnoDelete, mensaje, alumnos } = alumnosContext;

  useEffect(() => {
    alumnoGet();
  }, [alumnos]);

  function handleDelete(id) {
    Swal.fire({
      title: "Esta seguro?",
      text: "No se podra revertir los cambios",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        alumnoDelete(id);
        alumnoGet();
        Swal.fire("Eliminado!", "El alumno fue eliminado con exito", "success");
      }
    });
  }

  return (
    <>
      <SideBar />
      {alumnos ? (
        <main className="content py-6">
          <div className="">
            <div className=" mb-lg-0">
              <h1 className="h2">Alumnos</h1>
            </div>

            <a
              className="btn btn-primary btn-sm my-3"
              data-bs-toggle="modal"
              data-bs-target="#createAlumno"
            >
              Registrar nuevo alumno
            </a>
          </div>

          <div className="card border-0 shadow mb-4">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-centered table-nowrap mb-0 rounded">
                  <thead className="thead-light">
                    <tr>
                      <th className="border-0 rounded-start">#</th>
                      <th className="border-0">Nombre</th>
                      <th className="border-0">Paterno</th>
                      <th className="border-0">Materno</th>
                      <th className="border-0">CI</th>
                      <th className="border-0">Edad</th>
                      <th className="border-0 rounded-end">Accion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {alumnos ? (
                      alumnos.map((data, index) => (
                        <>
                          <tr>
                            <td>
                              <a href="#" className="">
                                {index + 1}
                              </a>
                            </td>
                            <td className="">{data.nombre}</td>
                            <td>{data.paterno}</td>
                            <td>{data.materno}</td>
                            <td>{data.ci}</td>
                            <td>{data.edad}</td>
                            <td>
                              <button
                                className="btn btn-warning btn-sm mx-2"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target={`#${data.nombre + index}`}
                              >
                                Modificar
                              </button>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(data.uuid)}
                              >
                                Eliminar
                              </button>
                            </td>
                          </tr>
                          <AlumnoModal
                            id={data.uuid}
                            data={data}
                            modalId={`${data.nombre + index}`}
                          />
                        </>
                      ))
                    ) : (
                      <Loading />
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <AlumnoModalCreate />
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default AlumnosPage;
