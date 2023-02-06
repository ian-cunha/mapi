import NavBar from "./components/NavBar"
import Prestador from "./pages/Prestador"
import Footer from "./pages/Footer"
import Gestao from "./pages/Gestao"
import Mapi from "./pages/Mapi"
import VisaoGeral from "./pages/VisaoGeral"
import WebApp from "./pages/WebApp"

function App() {
  return (
    <div className="font">
      <NavBar />
      <VisaoGeral />
      <Mapi />
      <WebApp />
      <Gestao />
      <Prestador />
      <Footer />
      <a  href="#" className="top-button"><i className="bi bi-arrow-up-circle-fill fs-1"></i></a>
    </div>
  )
}

export default App
