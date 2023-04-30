
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  const imgLogo = "./assets/img/argLogo.avif"
  return (
      <header className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className='d-flex'>
            <h2>Mercado Argentino</h2>
            <img className='imgLogo m-2' src={imgLogo} alt="argLogo"/>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <nav className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item m-4">
                Nosotros
              </li>
              <li className="nav-item m-4">
                Productos Destacados
              </li>
              <li className="nav-item m-4">
                Productos Tradicionales
              </li>
              <li className="nav-item m-4">
                Contacto
              </li>
            </ul>
          </nav>
          <CartWidget />
        </div>
      </header>
  )
}

export default NavBar
