function Prestador() {
  return (
    <div id="prestador" className="prestador">
      <div className="d-flex justify-content-evenly"><i className="bi bi-person-fill-gear fs-1"></i></div>
      <h2 className="text-center fs-1">É um Prestador de Serviços?</h2>
      <h2 className="text-center fs-4">Venha fazer parte do Mapa de manutenções da sua região.</h2>
      <div className="d-flex justify-content-evenly"><a className="btn-pres text-center" href="#">Acessar formulário</a></div>
      <h2 className="text-center fs-4">Venha fazer parte do Seu Mapa de Manutenções.</h2>
      <div className="d-flex justify-content-evenly"><a className="btn-pres text-center" target="_blank" href="https://api.whatsapp.com/send?phone=5581999170327&text=Ol%C3%A1,%20tenho%20interesse%20no%20Mapi!">Cadastre-se</a></div>
    </div>
  )
}

export default Prestador