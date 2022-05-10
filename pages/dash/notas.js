import { useEffect } from "react";
import { useContext, Fragment } from "react";
import notaContext from "../context/notas/notaContext";
import Swal from "sweetalert2";

import AsignaturaModal from "../components/Asignatura/AsignaturaModal";
import Loading from "../components/Loading";
import SideBar from "../components/Sidebar";

import NotaModalCreate from "../components/Notas/NotaModaCreate";
import NotaModal from "../components/Notas/NotaModal";
import alumnoContext from "../context/alumnos/alumnoContext";
import asignaturaContext from "../context/asignaturas/asignaturaContext";

const NotasPage = () => {
  const notasContext = useContext(notaContext);
  const { notaGet, notaDelete, notas } = notasContext;

  const alumnosContext = useContext(alumnoContext);
  const { alumnoGet, alumnos } = alumnosContext;

  const asignaturasContext = useContext(asignaturaContext);
  const { asignaturaGet, asignaturas } = asignaturasContext;

  useEffect(() => {
    notaGet();
    alumnoGet();
    asignaturaGet();
  }, [notas, alumnos, asignaturas]);

  function handleDelete(id) {
    console.log(id);
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
        notaDelete(id);
        notaGet();
        Swal.fire("Eliminado!", "La nota fue eliminado con exito", "success");
      }
    });
  }

  return (
    <>
      <SideBar />

      {notas ? (
        <main className="content py-6">
          <div className="">
            <div className=" mb-lg-0">
              <h1 className="h2">Notas</h1>
            </div>
            {alumnos && asignaturas ? (
              <a
                className="btn btn-primary btn-sm my-3"
                data-bs-toggle="modal"
                data-bs-target="#createNota"
              >
                Registrar Notas
              </a>
            ) : null}
          </div>

          <div className="card border-0 shadow mb-4">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-centered table-nowrap mb-0 rounded">
                  <thead className="thead-light">
                    <tr>
                      <th className="border-0 rounded-start">#</th>
                      <th className="border-0">Alumno</th>
                      <th className="border-0">Asignatura</th>
                      <th className="border-0">Nota</th>
                      <th className="border-0">Periodo</th>
                      <th className="border-0">Resultado</th>
                      <th className="border-0 rounded-end">Accion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notas ? (
                      notas.map((data, index) => {
                       
                        if (data.alumno && data.asignatura) {
                          return (
                            <Fragment>
                              <tr>
                                <td>
                                  <a href="#" className="">
                                    {index + 1}
                                  </a>
                                </td>
                                <td>{data.alumno.nombre}</td>
                                <td>{data.asignatura.nombre}</td>
                                <td>{data.notaA}</td>
                                <td>{data.periodo}</td>
                                <td>
                                  {data.notaA <= 50 ? (
                                    <p className="text-danger fw-bold">
                                      Reprobado
                                    </p>
                                  ) : (
                                    <p className="text-success fw-bold">
                                      Aprobado
                                    </p>
                                  )}
                                </td>
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
                              <NotaModal
                                id={data.uuid}
                                data={data}
                                modalId={`${data.nombre + index}`}
                              />
                            </Fragment>
                          );
                        } else {
                          return null;
                        }
                      })
                    ) : (
                      <Loading />
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <NotaModalCreate alumnos={alumnos} asignaturas={asignaturas} />
        </main>
      ) : null}
    </>
  );
};

export default NotasPage;
