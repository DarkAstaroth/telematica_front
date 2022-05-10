import FormAsignarutaPut from "./FormAsignaturaPut";

const AsignaturaModal = ({ id, modalId, data }) => {
  return (
    <>
      <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modificar Asignatura
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <FormAsignarutaPut data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AsignaturaModal;
