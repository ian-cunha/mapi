import smartphone from "../assets/smartphone.svg";

function WebApp() {
  return (
    <div className="web-app text-center d-flex flex-sm-row flex-column justify-content-evenly align-items-center">
      <div className="col-4 d-flex flex-column justify-content-between align-items-center">
        <h2 className="btext">É gestor de imobiliária ou administrador de condomínio?</h2>
        <h3 className="btext2">Informe de <b className="boldtext">forma efetiva</b> onde estão as suas demandas de manutenções.</h3>
        <a href="https://api.whatsapp.com/send?phone=5581999170327&text=Ol%C3%A1,%20tenho%20interesse%20no%20Mapi!" target="_blank" className="bbox1">Clique aqui e cadastre seus imóveis</a>
      </div>

      <div className="col-4 imgorg">
        <img className="smartphone" src={smartphone} alt="Smartphone" />
      </div>

    </div>
  )
}

export default WebApp