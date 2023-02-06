import logo from "../assets/logo.svg";

function Footer() {
  return (
    <div>
      <div className="footer d-flex flex-sm-row flex-column justify-content-around align-items-center">
        <img className="logo-footer" src={logo} alt="Logo" />
        <div className="btnsf">
          <a className="wpp-footer" href=""><i className="bi bi-whatsapp"></i> Entre em contato</a>
          <a className="btn-instagram" href=""><i className="bi bi-instagram"></i></a>
          <a className="btn-facebook" href=""><i className="bi bi-facebook"></i></a>
          <a className="btn-linkedin" href=""><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
      <p className="text-center copy">© 2022 Mapi, Todos os direitos reservados.</p>
    </div>
  )
}

export default Footer