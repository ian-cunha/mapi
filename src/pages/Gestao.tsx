import mapa from "../assets/mapa.svg";

function Gestao() {
  return (
    <div id="beneficios" className="gestao text-center d-flex flex-sm-row flex-column justify-content-evenly align-items-center">

      <div className="col-4 imgorg">
        <img className="mapa" src={mapa} alt="Mapa" />
      </div>

      <div className="col-4 d-flex flex-column justify-content-between align-items-center">
        <h3 className="bgestao">Gestão de Manutenções</h3>
        <ul className="text-left textgestao">
          <li className="ligest">Fazemos 100% do Cadastro dos Seus Imóveis com Geolocalização</li>
          <li className="ligest">Inclua Suas Manutenções</li>
          <li className="ligest">Defina Quantas Propostas Deseja Receber, Acompanhe os Atendimentos, Aprove as Cotações e Avalie o Prestador de Serviço.</li>
        </ul>
        <a className="wpp-gestao" target="_blank" href="https://api.whatsapp.com/send?phone=5581999170327&text=Ol%C3%A1,%20tenho%20interesse%20no%20Mapi!"><i className="bi bi-whatsapp icong-wpp"></i> Conheça todos os benefícios</a>
      </div>

    </div>
  )
}

export default Gestao