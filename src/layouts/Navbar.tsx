export const Navbar = () => {

  return (
    <nav className='navbar sticky-top navbar-expand-lg navbar-dark main-color py-2'>
       <div className="container">
    <a className="navbar-brand" href="#">
      <img src="thespiritroom.png" alt="" width="175" height="40"/>
    </a>
        <button className='navbar-toggler' type='button'
          data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown' aria-expanded='false'
          aria-label='Toggle Navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav ms-auto'>
          <li className='nav-item'>
              <a className='nav-link' href='#'> Our Story </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'> Buy Now </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'> Blog </a>
            </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'> Sign Up </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                <i className="bi bi-facebook"></i>
                </a>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}