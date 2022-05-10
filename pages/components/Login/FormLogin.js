import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import _ from "lodash";

import Link from "next/link";
import { login } from "../../../controllers/userController";
import { useRouter } from "next/router";

// validacion de formulario
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Debes ingresar un correo valido")
    .required("Debes ingresar un correo"),
  pass: yup
    .string()
    .required("Ingresa una contraseña")
    .min(8, "La contraseña en muy corta"),
});

const defaultValues = {
  email: "",
  pass: "",
};

const FormLogin = () => {
  const router = useRouter();

  const { control, formState, handleSubmit, setError } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, errors } = formState;


  function onSubmit(model) {
    login(model);
    router.push('/dash')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mb-4">
        <label htmlFor="email">Email</label>

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                className="form-control"
                id="email"
                placeholder="ejemplo@telematica.com"
                type="email"
              />
              {errors.email ? (
                <div className="col text-danger px-0 pt-1 fw-bold">
                  {errors.email.message}
                </div>
              ) : null}
            </>
          )}
        />
      </div>

      <div className="form-group">
        <div className="form-group mb-4">
          <label htmlFor="password">Contraseña </label>

          <Controller
            name="pass"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className="form-control"
                  id="pass"
                  placeholder="Contraseña"
                  type="password"
                />
                {errors.pass ? (
                  <div className="col text-danger px-0 pt-1 fw-bold">
                    {errors.pass.message}
                  </div>
                ) : null}
              </>
            )}
          />
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-gray-800">
          Iniciar Sesion
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
