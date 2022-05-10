import FormAlumnoPut from "./FormAlumnoPut";

const AlumnoModal = ({ id, modalId, data }) => {
  return (
    <>
      <div
        class="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modificar alumno
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <FormAlumnoPut data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlumnoModal;
