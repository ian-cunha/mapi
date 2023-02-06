import logo from "../assets/logo.svg";

function VisaoGeral() {

  const site = "https://www.meumapi.com/"

  return (
    <div className="visao-geral">
      <div className="d-flex flex-sm-row flex-column justify-content-between align-items-center p-5">

        <div className="text-center">
          <img className="logo-top d-inline-block align-text-top" src={logo} alt="Mapi" />
          <h1 className="text-top text-light">Manutenção para Imóveis</h1>
        </div>

        <div className="card text-center p-3 card-top">
          <div className="card-body">
            <h5 className="card-title mb-4">Acesse o mapa de manutenções da sua região.</h5>
            <a href="#" className="btn-red card-link">Cadastre-se</a>
            <a target="_blank" href={site} className="btn-black card-link">Login</a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default VisaoGeral