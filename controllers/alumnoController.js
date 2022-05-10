import clienteAxios from "../db/config";

export const alumnoGet = async () => {
  try {
    const response = await clienteAxios.get("/api/alumno");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const alumnoPost = async (data) => {
  try {
    const response = await clienteAxios.post("/api/alumno", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const alumnoPut = async (id,model) => {
    try {
      const response = await clienteAxios.put(`/api/alumno/${id}`,model);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

export const alumnoDelete = async (id) => {
  try {
    const response = await clienteAxios.delete(`/api/alumno/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
