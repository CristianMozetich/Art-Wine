import './NavBar.css'

const NavBar = () => {
  const imgLogo = "./assets/img/wineLogo-removebg-preview.png"
  return (
      <header className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <div className='d-flex align-items-center'>
            <h2>Mercato Del Vino</h2>
            <img className='imgLogo m-2' src={imgLogo} alt="argLogo"/>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <nav className="collapse navbar-collapse justify-content-start" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item m-4">
                La Nostra Selezione
              </li>
              <li className="nav-item m-4">
                I Nostri Vini
              </li>
              <li className="nav-item m-4">
                Contatto
              </li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default NavBar
