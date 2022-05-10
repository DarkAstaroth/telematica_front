import { useEffect } from "react";
import { useContext, Fragment } from "react";
import asignaturaContext from "../context/asignaturas/asignaturaContext";
import Swal from "sweetalert2";

import AsignaturaModal from "../components/Asignatura/AsignaturaModal";
import Loading from "../components/Loading";
import SideBar from "../components/Sidebar";
import AsignaturaModalCreate from "../components/Asignatura/AsignaturaModalCreate";

const AsignaturasPage = () => {
  const asignaturasContext = useContext(asignaturaContext);
  const { asignaturaGet, asignaturaDelete, asignaturas } = asignaturasContext;

  useEffect(() => {
    asignaturaGet();
  }, [asignaturas]);

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
        asignaturaDelete(id);
        asignaturaGet();
        Swal.fire(
          "Eliminado!",
          "La asignatura fue eliminado con exito",
          "success"
        );
        // router.push("/dash/asignaturas");
      }
    });
  }

  return (
    <>
      <SideBar />

      {asignaturas ? (
        <main className="content py-6">
          <div className="">
            <div className=" mb-lg-0">
              <h1 className="h2">Asignaturas</h1>
            </div>

            <a
              className="btn btn-primary btn-sm my-3"
              data-bs-toggle="modal"
              data-bs-target="#createAsignatura"
            >
              Registrar nuevo Asignatura
            </a>
          </div>

          <div className="card border-0 shadow mb-4">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-centered table-nowrap mb-0 rounded">
                  <thead className="thead-light">
                    <tr>
                      <th className="border-0 rounded-start">#</th>
                      <th className="border-0">Nombre Asignatura</th>
                      <th className="border-0">Profesor</th>
                      <th className="border-0">Cupos</th>
                      <th className="border-0">Aula</th>
                      <th className="border-0 rounded-end">Accion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {asignaturas ? (
                      asignaturas.map((data, index) => (
                        <Fragment key={data.uuid}>
                          <tr id={data.uuid}>
                            <td>
                              <a href="#" className="">
                                {index + 1}
                              </a>
                            </td>
                            <td>{data.nombre}</td>
                            <td>{data.profesor}</td>
                            <td>{data.cupos}</td>
                            <td>{data.aula}</td>
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

                          <AsignaturaModal
                            id={data.uuid}
                            data={data}
                            modalId={`${data.nombre + index}`}
                          />
                        </Fragment>
                      ))
                    ) : (
                      <Loading />
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <AsignaturaModalCreate />
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default AsignaturasPage;
