import logo from "../assets/logoWhite.svg";

function VisaoGeral() {

  const site = "https://app.smartimobiliario.com.br/MAPi"

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
            <a target="_blank" href="https://api.whatsapp.com/send?phone=5581999170327&text=Ol%C3%A1,%20tenho%20interesse%20no%20Mapi!" className="btn-red card-link">Cadastre-se</a>
            <a target="_blank" href={site} className="btn-black card-link">Login</a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default VisaoGeral