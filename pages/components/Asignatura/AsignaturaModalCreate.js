import FormAsignatura from "./FormAsignatura";

const AsignaturaModalCreate = ({ id, modalId, data }) => {
  return (
    <>
      <div
        className="modal fade"
        id="createAsignatura"
        tabIndex="-2"
        aria-labelledby="create"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="create">
                Crear Nueva Asignatura
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <FormAsignatura data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AsignaturaModalCreate;
