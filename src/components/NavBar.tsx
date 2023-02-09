import logo from "../assets/logo.svg";

function NavBar() {

  const site = "https://app.smartimobiliario.com.br/MAPi"

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img width="100px" className="logo d-inline-block align-text-top" src={logo} alt="Mapi" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <a className="nav-link active fw-semibold" aria-current="page" href="#">Visão geral</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#beneficios">Benefícios</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mais
              </a>
              <ul className="dropdown-menu p-3 text-center">
                <li><a className="mais dropdown-item fw-medium" href="#prestador">Prestador de serviço <i className="bi bi-box-arrow-in-down-right"></i></a></li>
                <li><a className="mais dropdown-item fw-medium" target="_blank" href="https://api.whatsapp.com/send?phone=5581999170327&text=Ol%C3%A1,%20tenho%20interesse%20no%20Mapi!">Entre em contato <i className="bi bi-box-arrow-in-down-right"></i></a></li>
              </ul>
            </li>
          </ul>
          <div className="d-flex" role="login">
            <a target="_blank" href={site} className="btn-black fw-semibold text-center w-100"> Login <i className="bi bi-arrow-right-short"></i></a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar