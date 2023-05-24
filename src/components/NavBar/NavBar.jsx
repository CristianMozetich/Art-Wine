import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  const imgLogo = "../assets/img/wineLogo-removebg-preview-removebg-preview.png"
  return (
      <header className="navbar navbar-expand-lg bg-white p-0 justify-content-end">
        <div className="container-fluid p-0 m-0">
          <Link to={"/"} className='d-flex align-items-center'>
            <img className='imgLogo m-0 p-0' src={imgLogo} alt="argLogo"/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <nav className="collapse navbar-collapse justify-content-start" id="navbarNav">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item m-3">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="nav-item dropdown m-3">
                <a className="nav-link dropdown-toggle" href="#"  data-bs-toggle="dropdown" aria-expanded="false">
                 Wines
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item m-3"><NavLink to={`/categoria/1`}>Malbec</NavLink></li>
                  <li className="nav-item m-3"><NavLink to={`/categoria/2`}>Cabernet Sauvignon</NavLink></li>
                  <li className="nav-item m-3"><NavLink to={`/categoria/3`}>Merlot</NavLink></li>
                </ul>
              </li>
              <li className="nav-item m-3">
                <NavLink to={`/formulario`}>Tastings & Events</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <CartWidget/>
      </header>
  )
}

export default NavBar
