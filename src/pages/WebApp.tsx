import smartphone from "../assets/smartphone.svg";

function WebApp() {
  return (
    <div className="web-app text-center d-flex flex-sm-row flex-column justify-content-evenly align-items-center">
      <div className="col-4 d-flex flex-column justify-content-between align-items-center">
        <h2 className="btext">É gestor de imobiliária ou administrador de condomínio?</h2>
        <h3 className="btext2">Informe de <b className="boldtext">forma efetiva</b> onde estão as suas demandas de manutenções.</h3>
        <div className="d-flex flex-sm-row flex-column">
          <p className="bbox1">Agilidade</p>
          <p className="bbox2">Transparência</p>
          <p className="bbox3">Inovação</p>
        </div>
        <button className="bbox4">Clique aqui e cadastre seus imóveis</button>
      </div>

      <div className="col-4 imgorg">
        <img className="smartphone" src={smartphone} alt="Smartphone" />
      </div>

    </div>
  )
}

export default WebApp