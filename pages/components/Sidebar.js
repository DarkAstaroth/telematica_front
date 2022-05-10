import Link from "next/link";

const SideBar = () => {
  return (
    <>
      <nav
        id="sidebarMenu"
        className="sidebar d-lg-block bg-gray-800 text-white collapse"
        data-simplebar
      >
        <div className="sidebar-inner px-4 pt-3">
          <ul className="nav flex-column pt-3 pt-md-0">
            <li className="nav-item">
              <Link href="/dash/alumnos">
                <a className="nav-link">
                  <span className="sidebar-icon">
                    <svg
                      className="icon icon-xs me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                  </span>
                  <span className="sidebar-text">Alumnos</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dash/asignaturas">
                <a className="nav-link d-flex justify-content-between">
                  <span>
                    <span className="sidebar-icon">
                      <svg
                        className="icon icon-xs me-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                      </svg>
                    </span>
                    <span className="sidebar-text">Asignaturas</span>
                  </span>
                </a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/dash/notas">
                <a className="nav-link">
                  <span className="sidebar-icon">
                    <svg
                      className="icon icon-xs me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                      <path
                        fillRule="evenodd"
                        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="sidebar-text">Notas</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
