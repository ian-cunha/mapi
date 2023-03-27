import smartphone from "../assets/smartphone.svg";

function WebApp() {
  return (
    <div className="web-app text-center d-flex flex-sm-row flex-column justify-content-evenly align-items-center">
    
    <div className="col-4 d-flex flex-column justify-content-between align-items-center">
      <h3 className="btext">Informe de <b className="boldtext">forma efetiva</b> onde estão as suas demandas de manutenções.</h3>
      <div className="d-flex flex-sm-row flex-column">
      <button className="bbox1">Agilidade</button>
      <button className="bbox2">Transparência</button>
      <button className="bbox3">Inovação</button>
      </div>
      <button className="bbox4">No MAPi, os melhores prestadores de serviço vão até você!</button>
    </div>

    <div className="col-4 imgorg">
      <img className="smartphone" src={smartphone} alt="Smartphone" />
    </div>
    
    </div>
  )
}

export default WebApp