import logo from "../assets/logo.svg";

function Footer() {
  return (
    <div>
      <div className="footer d-flex flex-sm-row flex-column justify-content-around align-items-center">
        <img className="logo-footer" src={logo} alt="Logo" />
        <div className="btnsf">
          <a className="wpp-footer" target="_blank" href="https://api.whatsapp.com/send?phone=5581999170327&text=Ol%C3%A1,%20tenho%20interesse%20no%20Mapi!"><i className="bi bi-whatsapp"></i> Entre em contato</a>
          <a className="btn-instagram" target="_blank" href="https://www.instagram.com/meumapi/"><i className="bi bi-instagram"></i></a>
          <a className="btn-facebook" target="_blank" href="https://www.facebook.com/meumapi"><i className="bi bi-facebook"></i></a>
        </div>
      </div>
      <p className="text-center copy">© 2023 Mapi, Todos os direitos reservados.</p>
    </div>
  )
}

export default Footer