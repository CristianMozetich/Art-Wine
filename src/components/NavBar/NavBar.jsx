import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  const imgLogo = "./assets/img/wineLogo-removebg-preview-removebg-preview.png"
  return (
      <header className="navbar navbar-expand-lg bg-white p-0 justify-content-end  ">
        <div className="container-fluid p-0 m-3">
          <Link to={"/"} className='d-flex align-items-center'>
            <h2 className='m-0'>Wine Shop</h2>
            <img className='imgLogo m-0' src={imgLogo} alt="argLogo"/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <nav className="collapse navbar-collapse justify-content-start" id="navbarNav">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item m-3">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="nav-item dropdown m-3">
                <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Wines
                </NavLink>
                <ul className="dropdown-menu">
                  <li className="nav-item m-3"><NavLink to={"/ItemListContainer"}>Malbec</NavLink></li>
                  <li><a className="dropdown-item" href="#">Cabernet Savignon</a></li>
                  <li><a className="dropdown-item" href="#">Merlot</a></li>
                </ul>
              </li>
              <li className="nav-item m-3">
                <NavLink to={"/ItemDetailContainer"}>Details</NavLink> 
              </li>
              <li className="nav-item m-3">
                <NavLink>Tastings & Events</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <CartWidget/>
      </header>
  )
}

export default NavBar
