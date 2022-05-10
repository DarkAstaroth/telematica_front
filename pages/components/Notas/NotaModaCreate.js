import FormNota from "./FormNotas";

const NotaModalCreate = ({ alumnos, asignaturas }) => {
  return (
    <>
      <div
        className="modal fade"
        id="createNota"
        tabIndex="-2"
        aria-labelledby="create"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="create">
                Crear Nueva Nota
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <FormNota alumnos={alumnos} asignaturas={asignaturas} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotaModalCreate;
