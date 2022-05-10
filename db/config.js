import axios from "axios";

const clienteAxios = axios.create({
  baseURL:process.env.BACK_SR
});

export default clienteAxios;