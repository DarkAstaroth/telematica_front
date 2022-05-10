import "../styles/globals.css";
import "../styles/css/volt.css";
import Layout from "./components/Layout";
import AsignaturaState from "./context/asignaturas/asignaturaState";
import AlumnoState from "./context/alumnos/alumnoState";
import NotaState from "./context/notas/notaState";

function MyApp({ Component, pageProps }) {
  return (
    <AlumnoState>
      <AsignaturaState>
        <NotaState>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NotaState>
      </AsignaturaState>
    </AlumnoState>
  );
}

export default MyApp;
