import videoMapi from "../assets/mapi1.mp4";
import thumb from "../assets/thumb.png";
import ReactPlayer from 'react-player'

function Mapi() {
  return (
    <div className="mapi d-flex justify-content-center flex-sm-row flex-column">
      <div className="p-4 pt-5">
        <h2 className="mapi-text">Conheça o Mapi</h2>
        <h2 className="mapi-text2">Mapa das Manutenções das Cidades</h2>
        <p className="mapi-sub">Prospecção através do georreferenciamento, ciência de dados e inteligência computacional.</p>
      </div>
      <div className="p-4 pt-0 player-wrapper">
        <ReactPlayer
          light={thumb}
          url={videoMapi}
          width='100%'
          height='100%'
          playing
          loop={true}
          controls={true}
        />
      </div>
    </div>
  )
}

export default Mapi