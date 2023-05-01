import './NavBar.css'

const NavBar = () => {
  const imgLogo = "./assets/img/wineLogo-removebg-preview.png"
  return (
      <header className="navbar navbar-expand-lg bg-white p-0">
        <div className="container-fluid p-0 m-3">
          <div className='d-flex align-items-center'>
            <h2 className='m-0'>Wine Shop</h2>
            <img className='imgLogo m-0' src={imgLogo} alt="argLogo"/>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <nav className="collapse navbar-collapse justify-content-start" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item m-3">
                Home
              </li>
              <li className="nav-item m-3">
                Special Offers
              </li>
              <li className="nav-item m-3">
                Wine
              </li>
              <li className="nav-item m-3">
                Tastings & Events
              </li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default NavBar
